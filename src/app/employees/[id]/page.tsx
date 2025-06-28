import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { prisma } from '@/lib/db';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Building2,
    DollarSign,
    Clock,
    Calendar,
    ArrowLeft,
    Edit,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DeleteEmployeeButton } from '@/components/employees/delete-employee-button';

interface EmployeeDetailPageProps {
    params: {
        id: string;
    };
}

export default async function EmployeeDetailPage({ params }: EmployeeDetailPageProps) {
    const { userId } = await auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const employeeData = await prisma.employee.findFirst({
        where: {
            id: params.id,
            userId,
        },
    });

    if (!employeeData) {
        notFound();
    }

    // Prismaのデータを適切な型に変換（nullをundefinedに変換）
    const employee = {
        id: employeeData.id,
        name: employeeData.name,
        email: employeeData.email || undefined,
        phone: employeeData.phone || undefined,
        emergencyContactPerson: employeeData.emergencyContactPerson || undefined,
        emergencyContactPhone: employeeData.emergencyContactPhone || undefined,
        address: employeeData.address || undefined,
        postalCode: employeeData.postalCode || undefined,
        city: employeeData.city || undefined,
        prefecture: employeeData.prefecture || undefined,
        position: employeeData.position || undefined,
        unitPay: employeeData.unitPay || undefined,
        hourlyOvertimePay: employeeData.hourlyOvertimePay || undefined,
        notes: employeeData.notes || undefined,
        createdAt: employeeData.createdAt,
        updatedAt: employeeData.updatedAt,
        userId: employeeData.userId,
    };

    const formatCurrency = (amount: number | undefined) => {
        if (amount === undefined || amount === 0) return '未設定';
        return new Intl.NumberFormat('ja-JP').format(amount);
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('ja-JP');
    };

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
                {/* ヘッダー */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/employees">
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                戻る
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{employee.name}</h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">従業員詳細</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/employees/${employee.id}/edit`}>
                            <Button className="flex items-center gap-2">
                                <Edit className="h-4 w-4" />
                                編集
                            </Button>
                        </Link>
                        <DeleteEmployeeButton
                            employeeId={employee.id}
                            employeeName={employee.name}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* 基本情報 */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5" />
                                基本情報
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {employee.position && (
                                <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-gray-400" />
                                    <span className="font-medium">役職:</span>
                                    <span>{employee.position}</span>
                                </div>
                            )}

                            {employee.email && (
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-gray-400" />
                                    <span className="font-medium">メール:</span>
                                    <span>{employee.email}</span>
                                </div>
                            )}

                            {employee.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                    <span className="font-medium">電話:</span>
                                    <span>{employee.phone}</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* 給与情報 */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <DollarSign className="h-5 w-5" />
                                給与情報
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-gray-400" />
                                <span className="font-medium">現場単価:</span>
                                <span className="text-lg font-semibold text-violet-500">
                                    ¥{formatCurrency(employee.unitPay)}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-400" />
                                <span className="font-medium">時間単価:</span>
                                <span className="text-lg font-semibold text-violet-500">
                                    ¥{formatCurrency(employee.hourlyOvertimePay)}/時間
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 住所情報 */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                住所情報
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {employee.postalCode && (
                                <div>
                                    <span className="font-medium">郵便番号:</span>
                                    <span className="ml-2">{employee.postalCode}</span>
                                </div>
                            )}

                            {employee.prefecture && employee.city && (
                                <div>
                                    <span className="font-medium">住所:</span>
                                    <span className="ml-2">{employee.prefecture} {employee.city}</span>
                                </div>
                            )}

                            {employee.address && (
                                <div>
                                    <span className="font-medium">番地・建物:</span>
                                    <span className="ml-2">{employee.address}</span>
                                </div>
                            )}

                            {!employee.postalCode && !employee.prefecture && !employee.address && (
                                <p className="text-gray-500">住所情報が登録されていません</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* 緊急連絡先情報 */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Phone className="h-5 w-5" />
                                緊急連絡先
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {employee.emergencyContactPerson && (
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-gray-400" />
                                    <span className="font-medium">氏名:</span>
                                    <span>{employee.emergencyContactPerson}</span>
                                </div>
                            )}

                            {employee.emergencyContactPhone && (
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-gray-400" />
                                    <span className="font-medium">電話番号:</span>
                                    <span>{employee.emergencyContactPhone}</span>
                                </div>
                            )}

                            {!employee.emergencyContactPerson && !employee.emergencyContactPhone && (
                                <p className="text-gray-500">緊急連絡先が登録されていません</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* システム情報 */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                システム情報
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <span className="font-medium">登録日:</span>
                                    <span className="ml-2">{formatDate(employee.createdAt)}</span>
                                </div>
                                <div>
                                    <span className="font-medium">更新日:</span>
                                    <span className="ml-2">{formatDate(employee.updatedAt)}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 備考 */}
                    {employee.notes && (
                        <Card className="lg:col-span-2">
                            <CardHeader>
                                <CardTitle>備考</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    {employee.notes}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
