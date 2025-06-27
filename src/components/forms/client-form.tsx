'use client';

import { useState } from 'react';
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
import { CreateClientInput, Client } from '@/types/client';

interface ClientFormProps {
    client?: Client;
    mode: 'create' | 'edit';
}

const prefectures = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
    '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
    '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
    '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

const industries = [
    '建設業', '製造業', '小売業', 'サービス業', 'IT・通信', '金融業',
    '不動産業', '運輸業', '医療・福祉', '教育', 'その他'
];

export function ClientForm({ client, mode }: ClientFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<CreateClientInput>({
        name: client?.name || '',
        companyName: client?.companyName || '',
        email: client?.email || '',
        phone: client?.phone || '',
        address: client?.address || '',
        postalCode: client?.postalCode || '',
        city: client?.city || '',
        prefecture: client?.prefecture || '',
        contactPerson: client?.contactPerson || '',
        contactPhone: client?.contactPhone || '',
        contactEmail: client?.contactEmail || '',
        industry: client?.industry || '',
        notes: client?.notes || '',
        status: client?.status || 'ACTIVE',
    });

    const handleInputChange = (field: keyof CreateClientInput, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const url = mode === 'create' ? '/api/clients' : `/api/clients/${client?.id}`;
            const method = mode === 'create' ? 'POST' : 'PUT';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'エラーが発生しました');
            }

            router.push('/clients');
            router.refresh();
        } catch (error) {
            console.error('フォーム送信エラー:', error);
            alert(error instanceof Error ? error.message : 'エラーが発生しました');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>
                    {mode === 'create' ? '新規取引先登録' : '取引先情報編集'}
                </CardTitle>
                <CardDescription>
                    {mode === 'create'
                        ? '新しい取引先の情報を入力してください'
                        : '取引先の情報を編集してください'
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 基本情報 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">取引先名 *</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                placeholder="取引先名を入力"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="companyName">会社名</Label>
                            <Input
                                id="companyName"
                                value={formData.companyName}
                                onChange={(e) => handleInputChange('companyName', e.target.value)}
                                placeholder="会社名を入力"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">メールアドレス</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder="example@company.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">電話番号</Label>
                            <Input
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="03-1234-5678"
                            />
                        </div>
                    </div>

                    {/* 住所情報 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">住所情報</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="postalCode">郵便番号</Label>
                                <Input
                                    id="postalCode"
                                    value={formData.postalCode}
                                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                                    placeholder="123-4567"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="prefecture">都道府県</Label>
                                <Select
                                    value={formData.prefecture}
                                    onValueChange={(value) => handleInputChange('prefecture', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="都道府県を選択" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {prefectures.map((prefecture) => (
                                            <SelectItem key={prefecture} value={prefecture}>
                                                {prefecture}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="city">市区町村</Label>
                                <Input
                                    id="city"
                                    value={formData.city}
                                    onChange={(e) => handleInputChange('city', e.target.value)}
                                    placeholder="市区町村を入力"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">住所</Label>
                            <Input
                                id="address"
                                value={formData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                placeholder="番地・建物名を入力"
                            />
                        </div>
                    </div>

                    {/* 担当者情報 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">担当者情報</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="contactPerson">担当者名</Label>
                                <Input
                                    id="contactPerson"
                                    value={formData.contactPerson}
                                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                                    placeholder="担当者名を入力"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contactPhone">担当者電話番号</Label>
                                <Input
                                    id="contactPhone"
                                    value={formData.contactPhone}
                                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                                    placeholder="03-1234-5678"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contactEmail">担当者メール</Label>
                                <Input
                                    id="contactEmail"
                                    type="email"
                                    value={formData.contactEmail}
                                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                                    placeholder="contact@company.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* その他情報 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="industry">業種</Label>
                            <Select
                                value={formData.industry}
                                onValueChange={(value) => handleInputChange('industry', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="業種を選択" />
                                </SelectTrigger>
                                <SelectContent>
                                    {industries.map((industry) => (
                                        <SelectItem key={industry} value={industry}>
                                            {industry}
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
                                    <SelectItem value="ACTIVE">アクティブ</SelectItem>
                                    <SelectItem value="INACTIVE">非アクティブ</SelectItem>
                                    <SelectItem value="PROSPECT">見込み客</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes">備考</Label>
                        <Textarea
                            id="notes"
                            value={formData.notes}
                            onChange={(e) => handleInputChange('notes', e.target.value)}
                            placeholder="備考を入力"
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
