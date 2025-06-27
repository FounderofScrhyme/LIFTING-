'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Edit,
    Trash2,
    Eye,
    Search,
    DollarSign,
    Calendar,
    Building2,
    Filter
} from 'lucide-react';
import { Sales } from '@/types/sales';

export function SalesList() {
    const router = useRouter();
    const [sales, setSales] = useState<Sales[]>([]);
    const [filteredSales, setFilteredSales] = useState<Sales[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        clientId: '',
    });

    // クライアントサイドでのみ実行
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            fetchSales();
        }
    }, [filters, isClient]);

    useEffect(() => {
        const filtered = sales.filter(sale =>
            sale.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.client.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sale.category?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSales(filtered);
    }, [sales, searchTerm]);

    const fetchSales = async () => {
        try {
            const params = new URLSearchParams();
            if (filters.startDate) params.append('startDate', filters.startDate);
            if (filters.endDate) params.append('endDate', filters.endDate);
            if (filters.clientId && filters.clientId !== 'all') params.append('clientId', filters.clientId);

            const response = await fetch(`/api/sales?${params}`);
            if (response.ok) {
                const data = await response.json();
                setSales(data);
            }
        } catch (error) {
            console.error('売上取得エラー:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('この売上を削除しますか？')) return;

        try {
            const response = await fetch(`/api/sales/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setSales(sales.filter(sale => sale.id !== id));
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
            <Card>
                <CardContent className="p-6">
                    <div className="animate-pulse">
                        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (isLoading) {
        return (
            <Card>
                <CardContent className="p-6">
                    <div className="text-center">読み込み中...</div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>売上一覧</span>
                    <div className="flex items-center gap-4">
                        {/* フィルター */}
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-gray-400" />
                            <Input
                                type="date"
                                value={filters.startDate}
                                onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                                className="w-40"
                                placeholder="開始日"
                            />
                            <span className="text-gray-400">〜</span>
                            <Input
                                type="date"
                                value={filters.endDate}
                                onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                                className="w-40"
                                placeholder="終了日"
                            />
                        </div>
                        {/* 検索 */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="売上を検索..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 w-64"
                            />
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {filteredSales.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        {searchTerm || filters.startDate || filters.endDate ? '検索結果が見つかりません' : '売上が登録されていません'}
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {filteredSales.map((sale) => (
                            <div
                                key={sale.id}
                                className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <DollarSign className="h-5 w-5 text-green-500" />
                                            <h3 className="font-semibold text-lg">
                                                ¥{formatCurrency(sale.amount)}
                                            </h3>
                                            {getStatusBadge(sale.status)}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Building2 className="h-4 w-4" />
                                                <span>{sale.client.name}</span>
                                                {sale.client.companyName && (
                                                    <span className="text-gray-400">({sale.client.companyName})</span>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{formatDate(sale.date)}</span>
                                            </div>

                                            {sale.category && (
                                                <div className="flex items-center gap-2">
                                                    <span>カテゴリ: {sale.category}</span>
                                                </div>
                                            )}

                                            {sale.description && (
                                                <div className="flex items-center gap-2">
                                                    <span>備考: {sale.description}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 ml-4">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => router.push(`/sales/${sale.id}`)}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => router.push(`/sales/${sale.id}/edit`)}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleDelete(sale.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
