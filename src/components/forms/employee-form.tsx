"use client";

import { CreateEmployeeInput, Employee } from "@/types/employee";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface EmployeeFormProps {
    employee?: Employee;
    mode: "create" | "edit"
}

const prefectures = [
    '大阪府',
    '兵庫県',
];

const positions = [
    "社長", "副社長", "専務", "一般社員", "スタッフ", "その他"
];

export function EmployeeForm({ employee, mode }: EmployeeFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<CreateEmployeeInput>({
        name: employee?.name || "",
        email: employee?.email || "",
        phone: employee?.phone || "",
        emergencyContactPerson: employee?.emergencyContactPerson || "",
        emergencyContactPhone: employee?.emergencyContactPhone || "",
        address: employee?.address || "",
        postalCode: employee?.postalCode || "",
        city: employee?.city || "",
        prefecture: employee?.prefecture || "",
        position: employee?.position || "",
        unitPay: employee?.unitPay || undefined,
        hourlyOvertimePay: employee?.hourlyOvertimePay || undefined,
        notes: employee?.notes || "",
    });

    const handleInputChange = (field: keyof CreateEmployeeInput, value: string | number | undefined) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const formatCurrency = (amount: number | undefined) => {
        if (amount === undefined || amount === 0) return '';
        return new Intl.NumberFormat('ja-JP').format(amount);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const url = mode === 'create' ? '/api/employees' : `/api/employees/${employee?.id}`;
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

            router.push('/employees');
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
                    {mode === 'create' ? '従業員新規登録' : '従業員情報編集'}
                </CardTitle>
                <CardDescription>
                    {mode === 'create'
                        ? '従業員の情報を入力してください'
                        : '従業員の情報を編集してください'
                    }
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* 基本情報 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">氏名 *</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                placeholder="氏名を入力"
                                required
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

                    {/* 緊急連絡先情報 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">緊急連絡先情報</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="contactPerson">氏名</Label>
                                <Input
                                    id="contactPerson"
                                    value={formData.emergencyContactPerson}
                                    onChange={(e) => handleInputChange('emergencyContactPerson', e.target.value)}
                                    placeholder="緊急連絡先名を入力"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contactPhone">電話番号</Label>
                                <Input
                                    id="contactPhone"
                                    value={formData.emergencyContactPhone}
                                    onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                                    placeholder="03-1234-5678"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 職務情報 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">職務情報</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="position">役職</Label>
                                <Select
                                    value={formData.position}
                                    onValueChange={(value) => handleInputChange('position', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="役職を選択" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {positions.map((position) => (
                                            <SelectItem key={position} value={position}>
                                                {position}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="unitPay">現場単価（円）</Label>
                                <Input
                                    id="unitPay"
                                    type="number"
                                    value={formData.unitPay || ''}
                                    onChange={(e) => handleInputChange('unitPay', e.target.value ? parseInt(e.target.value) : undefined)}
                                    placeholder="15000"
                                    min="0"
                                />
                                {formData.unitPay && formData.unitPay > 0 && (
                                    <p className="text-sm text-gray-600">
                                        表示: ¥{formatCurrency(formData.unitPay)}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="hourlyOvertimePay">時間単価（円）</Label>
                                <Input
                                    id="hourlyOvertimePay"
                                    type="number"
                                    value={formData.hourlyOvertimePay || ''}
                                    onChange={(e) => handleInputChange('hourlyOvertimePay', e.target.value ? parseInt(e.target.value) : undefined)}
                                    placeholder="1500"
                                    min="0"
                                />
                                {formData.hourlyOvertimePay && formData.hourlyOvertimePay > 0 && (
                                    <p className="text-sm text-gray-600">
                                        表示: ¥{formatCurrency(formData.hourlyOvertimePay)}/時間
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 備考 */}
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