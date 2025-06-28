import { EmployeeForm } from "@/components/forms/employee-form";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function NewEmployeePage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in")
    }

    return (
        <DashboardLayout>
            <div className="p-6 dark:bg-gray-900 min-h-screen">
                <EmployeeForm mode="create" />
            </div>
        </DashboardLayout>
    )
}