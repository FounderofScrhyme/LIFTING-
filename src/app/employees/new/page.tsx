import { EmployeeForm } from "@/components/forms/employee-form";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { auth } from "@clerk/nextjs/server";

export default async function NewEmployeePage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <EmployeeForm mode="create" />
      </div>
    </DashboardLayout>
  );
}
