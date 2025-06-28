'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreateSalesInput, Sales } from '@/types/sales';
import { Client } from '@/types/client';

interface SalesFormProps {
    sales?: Sales;
    mode: 'create' | 'edit';
}

const categories = [
    '工事費',
    '材料費',
    '設計費',
    '管理費',
    'その他'
];

const statusOptions = [
    { value: 'COMPLETED', label: '完了' },
    { value: 'PENDING', label: '保留' },
    { value: 'CANCELLED', label: 'キャンセル' },
];

export function SalesForm({ sales, mode }: SalesFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [clients, setClients] = useState<Client[]>([]);
    const [isClient, setIsClient] = useState(false);
    const [formData, setFormData] = useState<Omit<CreateSalesInput, 'amount'> & { amount: string | number }>({
        amount: sales?.amount || '',
        date: '',
        description: sales?.description || '',
        category: sales?.category || '',
        status: sales?.status || 'COMPLETED',
        clientId: sales?.clientId || 'select',
    });

    // クライアントサイドでのみ実行
    useEffect(() => {
        setIsClient(true);
        if (mode === 'create' && !sales) {
            setFormData(prev => ({
                ...prev,
                date: new Date().toISOString().split('T')[0],
            }));
        } else if (sales) {
            setFormData(prev => ({
                ...prev,
                date: new Date(sales.date).toISOString().split('T')[0],
            }));
        }
    }, [mode, sales]);

    // 取引先一覧を取得
    useEffect(() => {
        if (isClient) {
            fetchClients();
        }
    }, [isClient]);

    const fetchClients = async () => {
        try {
            const response = await fetch('/api/clients');
            if (response.ok) {
                const data = await response.json();
                setClients(data);
            }
        } catch (error) {
            console.error('取引先取得エラー:', error);
        }
    };

    const handleInputChange = (field: keyof typeof formData, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // バリデーション
        if (formData.clientId === 'select') {
            alert('取引先を選択してください');
            setIsLoading(false);
            return;
        }

        // amountを数値に変換
        const amount = typeof formData.amount === 'string' ? parseInt(formData.amount) || 0 : formData.amount;
        if (amount <= 0) {
            alert('有効な売上額を入力してください');
            setIsLoading(false);
            return;
        }

        try {
            const url = mode === 'create' ? '/api/sales' : `/api/sales/${sales?.id}`;
            const method = mode === 'create' ? 'POST' : 'PUT';

            const requestData = {
                ...formData,
                amount: amount,
            };

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'エラーが発生しました');
            }

            router.push('/sales');
            router.refresh();
        } catch (error) {
            console.error('フォーム送信エラー:', error);
            alert(error instanceof Error ? error.message : 'エラーが発生しました');
        } finally {
            setIsLoading(false);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('ja-JP').format(amount);
    };

    // クライアントサイドでない場合は何も表示しない
    if (!isClient) {
        return (
            <Card className="max-w-4xl mx-auto">
                <CardContent className="p-6">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-10 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>
                    {mode === 'create' ? '新規売上登録' : '売上情報編集'}
                </CardTitle>
                <CardDescription>
                    {mode === 'create'
                        ? '新しい売上の情報を入力してください'
                        : '売上の情報を編集してください'
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 取引先選択 */}
                    <div className="space-y-2">
                        <Label htmlFor="clientId">取引先 *</Label>
                        <Select
                            value={formData.clientId}
                            onValueChange={(value) => handleInputChange('clientId', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="取引先を選択" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="select">取引先を選択</SelectItem>
                                {clients.map((client) => (
                                    <SelectItem key={client.id} value={client.id}>
                                        {client.name} {client.companyName && `(${client.companyName})`}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* 売上情報 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="amount">売上額（円） *</Label>
                            <Input
                                id="amount"
                                type="number"
                                value={formData.amount}
                                onChange={(e) => handleInputChange('amount', e.target.value)}
                                placeholder="1000000"
                                required
                            />
                            {typeof formData.amount === 'number' && formData.amount > 0 && (
                                <p className="text-sm text-gray-600">
                                    表示: ¥{formatCurrency(formData.amount)}
                                </p>
                            )}
                            {typeof formData.amount === 'string' && formData.amount && parseInt(formData.amount) > 0 && (
                                <p className="text-sm text-gray-600">
                                    表示: ¥{formatCurrency(parseInt(formData.amount))}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="date">売上日 *</Label>
                            <Input
                                id="date"
                                type="date"
                                value={formData.date}
                                onChange={(e) => handleInputChange('date', e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* カテゴリとステータス */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="category">カテゴリ</Label>
                            <Select
                                value={formData.category}
                                onValueChange={(value) => handleInputChange('category', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="カテゴリを選択" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="status">ステータス</Label>
                            <Select
                                value={formData.status}
                                onValueChange={(value) => handleInputChange('status', value as any)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {statusOptions.map((status) => (
                                        <SelectItem key={status.value} value={status.value}>
                                            {status.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* 備考 */}
                    <div className="space-y-2">
                        <Label htmlFor="description">備考</Label>
                        <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}
                            placeholder="売上に関する備考を入力"
                            rows={4}
                        />
                    </div>

                    {/* ボタン */}
                    <div className="flex justify-end space-x-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.back()}
                            disabled={isLoading}
                        >
                            キャンセル
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? '保存中...' : mode === 'create' ? '登録' : '更新'}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
