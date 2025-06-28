'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Edit, ArrowLeft, Trash2, DollarSign, Calendar, Building2, FileText } from 'lucide-react';
import { Sales } from '@/types/sales';
import { DashboardLayout } from '@/components/layout/dashboard-layout';

export default function SalesDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [sales, setSales] = useState<Sales | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);

    // クライアントサイドでのみ実行
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && params.id) {
            fetchSales();
        }
    }, [params.id, isClient]);

    const fetchSales = async () => {
        try {
            const response = await fetch(`/api/sales/${params.id}`);
            if (response.ok) {
                const data = await response.json();
                setSales(data);
            } else {
                router.push('/sales');
            }
        } catch (error) {
            console.error('売上取得エラー:', error);
            router.push('/sales');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!sales || !confirm('この売上を削除しますか？')) return;

        try {
            const response = await fetch(`/api/sales/${sales.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.push('/sales');
            } else {
                alert('削除に失敗しました');
            }
        } catch (error) {
            console.error('削除エラー:', error);
            alert('削除に失敗しました');
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return <Badge className="bg-green-100 text-green-800">完了</Badge>;
            case 'PENDING':
                return <Badge className="bg-yellow-100 text-yellow-800">保留</Badge>;
            case 'CANCELLED':
                return <Badge className="bg-red-100 text-red-800">キャンセル</Badge>;
            default:
                return <Badge>{status}</Badge>;
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('ja-JP').format(amount);
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('ja-JP');
    };

    // クライアントサイドでない場合はローディング表示
    if (!isClient) {
        return (
            <DashboardLayout>
                <div className="space-y-6">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                        <div className="h-10 bg-gray-200 rounded w-32"></div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="animate-pulse">
                            <div className="h-64 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    if (isLoading) {
        return (
            <div className="space-y-6">
                <div className="text-center">読み込み中...</div>
            </div>
        );
    }

    if (!sales) {
        return (
            <div className="space-y-6">
                <div className="text-center">売上が見つかりません</div>
            </div>
        );
    }

    return (
        <DashboardLayout>
            <div className="space-y-6 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
                {/* ヘッダー */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            onClick={() => router.back()}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            戻る
                        </Button>
                        <h1 className="text-3xl font-bold">売上詳細</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            onClick={() => router.push(`/sales/${sales.id}/edit`)}
                            className="flex items-center gap-2"
                        >
                            <Edit className="h-4 w-4" />
                            編集
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleDelete}
                            className="flex items-center gap-2 text-red-600 hover:text-red-700"
                        >
                            <Trash2 className="h-4 w-4" />
                            削除
                        </Button>
                    </div>
                </div>

                {/* 売上詳細 */}
                <div className="max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-2xl">売上情報</CardTitle>
                                    <CardDescription>売上の詳細情報</CardDescription>
                                </div>
                                {getStatusBadge(sales.status)}
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* 売上額 */}
                            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <DollarSign className="h-8 w-8 text-green-500" />
                                <div>
                                    <div className="text-sm text-green-600 dark:text-green-400">売上額</div>
                                    <div className="text-3xl font-bold text-green-700 dark:text-green-300">
                                        ¥{formatCurrency(sales.amount)}
                                    </div>
                                </div>
                            </div>

                            {/* 基本情報 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        売上日
                                    </div>
                                    <div className="text-lg font-medium">
                                        {formatDate(sales.date)}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Building2 className="h-4 w-4" />
                                        取引先
                                    </div>
                                    <div className="text-lg font-medium">
                                        {sales.client.name}
                                        {sales.client.companyName && (
                                            <span className="text-gray-500 ml-2">({sales.client.companyName})</span>
                                        )}
                                    </div>
                                </div>

                                {sales.category && (
                                    <div className="space-y-2">
                                        <div className="text-sm text-gray-500">カテゴリ</div>
                                        <div className="text-lg font-medium">{sales.category}</div>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <div className="text-sm text-gray-500">ステータス</div>
                                    <div>{getStatusBadge(sales.status)}</div>
                                </div>
                            </div>

                            {/* 備考 */}
                            {sales.description && (
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <FileText className="h-4 w-4" />
                                        備考
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                        {sales.description}
                                    </div>
                                </div>
                            )}

                            {/* 取引先詳細 */}
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold mb-4">取引先情報</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm text-gray-500">取引先名</div>
                                        <div className="font-medium">{sales.client.name}</div>
                                    </div>
                                    {sales.client.companyName && (
                                        <div>
                                            <div className="text-sm text-gray-500">会社名</div>
                                            <div className="font-medium">{sales.client.companyName}</div>
                                        </div>
                                    )}
                                    {(sales.client as any).email && (
                                        <div>
                                            <div className="text-sm text-gray-500">メールアドレス</div>
                                            <div className="font-medium">{(sales.client as any).email}</div>
                                        </div>
                                    )}
                                    {(sales.client as any).phone && (
                                        <div>
                                            <div className="text-sm text-gray-500">電話番号</div>
                                            <div className="font-medium">{(sales.client as any).phone}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
