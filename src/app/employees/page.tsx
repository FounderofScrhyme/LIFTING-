import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { EmployeeList } from "@/components/tables/employees-table";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EmployeesPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in")
    }

    return (
        <DashboardLayout>
            <div className="p-6 dark:bg-gray-900 min-h-sceen">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">従業員管理</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">従業員の一覧を確認・管理できます</p>
                    </div>
                    <Link href="/employees/new">
                        <Button className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            新規登録
                        </Button>
                    </Link>
                </div>
                <EmployeeList />
            </div>
        </DashboardLayout>
    )
}