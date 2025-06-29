"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SalesList } from "@/components/tables/sales-table";
import { SalesSummary } from "@/components/sales/sales-summary";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import Link from "next/link";

export default function SalesPage() {
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドでのみ実行
  useEffect(() => {
    setIsClient(true);
  }, []);

  // クライアントサイドでない場合はローディング表示
  if (!isClient) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">売上管理</h1>
          <Button asChild>
            <Link href="/sales/new">
              <Plus className="h-4 w-4 mr-2" />
              新規売上登録
            </Link>
          </Button>
        </div>

        <SalesSummary />
        <SalesList />
      </div>
    </DashboardLayout>
  );
}
