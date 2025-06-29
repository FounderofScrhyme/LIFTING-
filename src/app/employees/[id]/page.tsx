import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  User,
  Building2,
  Edit,
  ArrowLeft,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { DeleteEmployeeButton } from "@/components/employees/delete-employee-button";

interface EmployeeDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EmployeeDetailPage({
  params,
}: EmployeeDetailPageProps) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) {
    notFound();
  }

  const employee = await prisma.employee.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!employee) {
    notFound();
  }

  // Prismaのデータを適切な型に変換（nullをundefinedに変換）
  const employeeData = {
    id: employee.id,
    name: employee.name,
    email: employee.email || undefined,
    phone: employee.phone || undefined,
    emergencyContactPerson: employee.emergencyContactPerson || undefined,
    emergencyContactPhone: employee.emergencyContactPhone || undefined,
    address: employee.address || undefined,
    postalCode: employee.postalCode || undefined,
    city: employee.city || undefined,
    prefecture: employee.prefecture || undefined,
    position: employee.position || undefined,
    unitPay: employee.unitPay || undefined,
    hourlyOvertimePay: employee.hourlyOvertimePay || undefined,
    notes: employee.notes || undefined,
    createdAt: employee.createdAt,
    updatedAt: employee.updatedAt,
    userId: employee.userId,
  };

  const formatCurrency = (amount: number | undefined) => {
    if (amount === undefined || amount === 0) return "未設定";
    return new Intl.NumberFormat("ja-JP").format(amount);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("ja-JP");
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
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {employeeData.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                従業員詳細
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/employees/${employeeData.id}/edit`}>
              <Button className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                編集
              </Button>
            </Link>
            <DeleteEmployeeButton
              employeeId={employeeData.id}
              employeeName={employeeData.name}
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
              {employeeData.position && (
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">役職:</span>
                  <span>{employeeData.position}</span>
                </div>
              )}

              {employeeData.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">メール:</span>
                  <span>{employeeData.email}</span>
                </div>
              )}

              {employeeData.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">電話:</span>
                  <span>{employeeData.phone}</span>
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
                  ¥{formatCurrency(employeeData.unitPay)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="font-medium">時間単価:</span>
                <span className="text-lg font-semibold text-violet-500">
                  ¥{formatCurrency(employeeData.hourlyOvertimePay)}/時間
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
              {employeeData.postalCode && (
                <div>
                  <span className="font-medium">郵便番号:</span>
                  <span className="ml-2">{employeeData.postalCode}</span>
                </div>
              )}

              {employeeData.prefecture && employeeData.city && (
                <div>
                  <span className="font-medium">住所:</span>
                  <span className="ml-2">
                    {employeeData.prefecture} {employeeData.city}
                  </span>
                </div>
              )}

              {employeeData.address && (
                <div>
                  <span className="font-medium">番地・建物:</span>
                  <span className="ml-2">{employeeData.address}</span>
                </div>
              )}

              {!employeeData.postalCode &&
                !employeeData.prefecture &&
                !employeeData.address && (
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
              {employeeData.emergencyContactPerson && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">氏名:</span>
                  <span>{employeeData.emergencyContactPerson}</span>
                </div>
              )}

              {employeeData.emergencyContactPhone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">電話番号:</span>
                  <span>{employeeData.emergencyContactPhone}</span>
                </div>
              )}

              {!employeeData.emergencyContactPerson &&
                !employeeData.emergencyContactPhone && (
                  <p className="text-gray-500">
                    緊急連絡先が登録されていません
                  </p>
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
                  <span className="ml-2">
                    {formatDate(employeeData.createdAt)}
                  </span>
                </div>
                <div>
                  <span className="font-medium">更新日:</span>
                  <span className="ml-2">
                    {formatDate(employeeData.updatedAt)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 備考 */}
          {employeeData.notes && (
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>備考</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  {employeeData.notes}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
