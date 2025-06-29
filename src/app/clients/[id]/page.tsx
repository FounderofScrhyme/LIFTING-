import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  ArrowLeft,
  Edit,
} from "lucide-react";
import Link from "next/link";
import { Client } from "@/types/client";

interface ClientDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ClientDetailPage({
  params,
}: ClientDetailPageProps) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) {
    notFound();
  }

  const clientData = await prisma.client.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!clientData) {
    notFound();
  }

  // PrismaのデータをClient型に変換（nullをundefinedに変換）
  const client: Client = {
    id: clientData.id,
    name: clientData.name,
    companyName: clientData.companyName || undefined,
    email: clientData.email || undefined,
    phone: clientData.phone || undefined,
    address: clientData.address || undefined,
    postalCode: clientData.postalCode || undefined,
    city: clientData.city || undefined,
    prefecture: clientData.prefecture || undefined,
    contactPerson: clientData.contactPerson || undefined,
    contactPhone: clientData.contactPhone || undefined,
    contactEmail: clientData.contactEmail || undefined,
    industry: clientData.industry || undefined,
    notes: clientData.notes || undefined,
    status: clientData.status,
    createdAt: clientData.createdAt,
    updatedAt: clientData.updatedAt,
    userId: clientData.userId,
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return (
          <Badge className="bg-green-100 text-green-800">アクティブ</Badge>
        );
      case "INACTIVE":
        return (
          <Badge className="bg-gray-100 text-gray-800">非アクティブ</Badge>
        );
      case "PROSPECT":
        return <Badge className="bg-blue-100 text-blue-800">見込み客</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* ヘッダー */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/clients">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                戻る
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {client.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                取引先詳細
              </p>
            </div>
          </div>
          <Link href={`/clients/${client.id}/edit`}>
            <Button className="flex items-center gap-2">
              <Edit className="h-4 w-4" />
              編集
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 基本情報 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                基本情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">ステータス</span>
                {getStatusBadge(client.status)}
              </div>

              {client.companyName && (
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">会社名:</span>
                  <span>{client.companyName}</span>
                </div>
              )}

              {client.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">メール:</span>
                  <span>{client.email}</span>
                </div>
              )}

              {client.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">電話:</span>
                  <span>{client.phone}</span>
                </div>
              )}

              {client.industry && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">業種:</span>
                  <span>{client.industry}</span>
                </div>
              )}
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
              {client.postalCode && (
                <div>
                  <span className="font-medium">郵便番号:</span>
                  <span className="ml-2">{client.postalCode}</span>
                </div>
              )}

              {client.prefecture && client.city && (
                <div>
                  <span className="font-medium">住所:</span>
                  <span className="ml-2">
                    {client.prefecture} {client.city}
                  </span>
                </div>
              )}

              {client.address && (
                <div>
                  <span className="font-medium">番地・建物:</span>
                  <span className="ml-2">{client.address}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 担当者情報 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                担当者情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {client.contactPerson && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">担当者名:</span>
                  <span>{client.contactPerson}</span>
                </div>
              )}

              {client.contactPhone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">担当者電話:</span>
                  <span>{client.contactPhone}</span>
                </div>
              )}

              {client.contactEmail && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">担当者メール:</span>
                  <span>{client.contactEmail}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* その他情報 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                その他情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="font-medium">登録日:</span>
                <span className="ml-2">
                  {new Date(client.createdAt).toLocaleDateString("ja-JP")}
                </span>
              </div>

              <div>
                <span className="font-medium">更新日:</span>
                <span className="ml-2">
                  {new Date(client.updatedAt).toLocaleDateString("ja-JP")}
                </span>
              </div>

              {client.notes && (
                <div>
                  <span className="font-medium">備考:</span>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                    {client.notes}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
