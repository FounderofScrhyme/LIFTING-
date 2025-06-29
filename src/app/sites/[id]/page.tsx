import Link from "next/link";
import { prisma } from "@/lib/db";
import { Site } from "@/types/site";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

interface SiteDetailPageProps {
  params: {
    id: string;
  };
}

export default async function SiteDetailPage({ params }: SiteDetailPageProps) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) {
    redirect("/sign-in");
  }

  const siteData = await prisma.site.findFirst({
    where: {
      id,
      userId,
    },
    include: {
      siteEmployees: {
        include: {
          employee: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!siteData) {
    notFound();
  }

  const site: Site = {
    id: siteData.id,
    name: siteData.name,
    contractor: siteData.contractor,
    //オプショナルなフィールドはundefined追加
    postalCode: siteData.postalCode || undefined,
    prefecture: siteData.prefecture || undefined,
    city: siteData.city || undefined,
    address: siteData.address || undefined,
    startDate: siteData.startDate.toISOString(),
    employeeNames: siteData.employeeNames || undefined,
    notes: siteData.notes || undefined,
    status: siteData.status,
    userId: siteData.userId,
    createdAt: siteData.createdAt.toISOString(),
    updatedAt: siteData.updatedAt.toISOString(),
    employees: siteData.siteEmployees.map((emp) => ({
      id: emp.id,
      siteId: emp.siteId,
      employeeId: emp.employeeId,
      userId: emp.userId,
      createdAt: emp.createdAt.toISOString(),
      employee: {
        id: emp.employee.id,
        name: emp.employee.name,
      },
    })),
  };

  const formatAddress = (site: Site) => {
    const parts = [
      site.postalCode,
      site.prefecture,
      site.city,
      site.address,
    ].filter(Boolean);
    return parts.length > 0 ? parts.join(" ") : "-";
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">現場詳細</h1>
          <Link href="/sites">
            <Button variant="outline">一覧に戻る</Button>
          </Link>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{site.name}</CardTitle>
            <div className="flex gap-2">
              <Link href={`/sites/${site.id}/edit`}>
                <Button size="sm" variant="secondary">
                  編集
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="font-semibold">工務店名：</span>
              {site.contractor}
            </div>
            <div>
              <span className="font-semibold">住所：</span>
              {formatAddress(site)}
            </div>
            <div>
              <span className="font-semibold">開始日：</span>
              {site.startDate ? site.startDate.slice(0, 10) : ""}
            </div>
            <div>
              <span className="font-semibold">従業員：</span>
              {site.employeeNames || "-"}
            </div>
            <div>
              <span className="font-semibold">ステータス：</span>
              {site.status === "ACTIVE"
                ? "稼働中"
                : site.status === "COMPLETED"
                ? "完了"
                : "中止"}
            </div>
            {site.notes && (
              <div>
                <span className="font-semibold">備考：</span>
                {site.notes}
              </div>
            )}
            {site.employees.length > 0 && (
              <div>
                <span className="font-semibold">関連従業員：</span>
                <div className="mt-2 space-y-1">
                  {site.employees.map((emp) => (
                    <div key={emp.id} className="text-sm text-gray-600">
                      {emp.employee?.name || "不明な従業員"}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
