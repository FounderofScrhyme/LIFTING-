import { auth } from "@clerk/nextjs/server";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { EmployeeList } from "@/components/tables/employees-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function EmployeesPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">従業員管理</h1>
          <Link href="/employees/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              新規従業員登録
            </Button>
          </Link>
        </div>
        <EmployeeList />
      </div>
    </DashboardLayout>
  );
}
