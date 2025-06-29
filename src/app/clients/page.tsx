import { auth } from "@clerk/nextjs/server";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { ClientList } from "@/components/tables/clients-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ClientsPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* ページヘッダー */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              取引先管理
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              取引先の一覧を確認・管理できます
            </p>
          </div>
          <Link href="/clients/new">
            <Button className="flex items-center gap-2">新規登録</Button>
          </Link>
        </div>

        {/* 取引先一覧 */}
        <ClientList />
      </div>
    </DashboardLayout>
  );
}
