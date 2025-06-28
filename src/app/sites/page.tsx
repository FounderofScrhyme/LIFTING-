"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SitesTable } from '@/components/tables/sites-table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Site } from '@/types/site';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { useAuth } from '@clerk/nextjs';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

export default function SitesPage() {
    const { userId } = useAuth();
    const [sites, setSites] = useState<Site[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    useEffect(() => {
        if (!userId) return;

        const fetchSites = async () => {
            try {
                console.log('Fetching sites for userId:', userId);
                const res = await fetch('/api/sites');
                console.log('Response status:', res.status);
                if (res.ok) {
                    const data = await res.json();
                    console.log('Fetched sites:', data);
                    setSites(data);
                } else {
                    console.log('Response not ok');
                    setSites([]);
                }
            } catch (error) {
                console.error('Error fetching sites:', error);
                setSites([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSites();
    }, [userId]);

    // 選択された日の現場をフィルタリング
    const getSitesForDate = (date: Date | undefined) => {
        if (!date || !sites.length) return [];

        const dateStr = format(date, 'yyyy-MM-dd');
        return sites.filter(site => {
            const siteDate = format(new Date(site.startDate), 'yyyy-MM-dd');
            return siteDate === dateStr;
        });
    };

    const selectedDateSites = getSitesForDate(selectedDate);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="p-6">
                    <div>読み込み中...</div>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">現場一覧</h1>
                    <Link href="/sites/new">
                        <Button>新規現場作成</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 左側: カレンダー */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>カレンダー</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    className="rounded-md border"
                                    locale={ja}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* 右側: 選択日の現場情報 */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    {selectedDate
                                        ? `${format(selectedDate, 'yyyy年M月d日', { locale: ja })}の現場`
                                        : '日付を選択してください'
                                    }
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {selectedDate ? (
                                    selectedDateSites.length > 0 ? (
                                        <div className="space-y-4">
                                            {selectedDateSites.map(site => (
                                                <div key={site.id} className="border rounded-lg p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-semibold text-lg">{site.name}</h3>
                                                        <span className={`px-2 py-1 rounded text-xs ${site.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
                                                            site.status === 'COMPLETED' ? 'bg-blue-100 text-blue-800' :
                                                                'bg-red-100 text-red-800'
                                                            }`}>
                                                            {site.status === 'ACTIVE' ? '稼働中' :
                                                                site.status === 'COMPLETED' ? '完了' : '中止'}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-gray-600 space-y-1">
                                                        <p><span className="font-medium">工務店:</span> {site.contractor}</p>
                                                        <p><span className="font-medium">住所:</span> {
                                                            [site.postalCode, site.prefecture, site.city, site.address]
                                                                .filter(Boolean).join(' ')
                                                        }</p>
                                                        {site.employeeNames && (
                                                            <p><span className="font-medium">従業員:</span> {site.employeeNames}</p>
                                                        )}
                                                        {site.notes && (
                                                            <p><span className="font-medium">備考:</span> {site.notes}</p>
                                                        )}
                                                    </div>
                                                    <div className="mt-3 flex gap-2">
                                                        <Link href={`/sites/${site.id}`}>
                                                            <Button size="sm" variant="outline">詳細</Button>
                                                        </Link>
                                                        <Link href={`/sites/${site.id}/edit`}>
                                                            <Button size="sm" variant="secondary">編集</Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-8 text-gray-500">
                                            <p>この日には現場がありません</p>
                                        </div>
                                    )
                                ) : (
                                    <div className="text-center py-8 text-gray-500">
                                        <p>カレンダーから日付を選択してください</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* 全現場一覧（下部） */}
                <div className="mt-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>全現場一覧</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <p>登録済み現場数: {sites.length}</p>
                            </div>
                            <SitesTable sites={sites} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
