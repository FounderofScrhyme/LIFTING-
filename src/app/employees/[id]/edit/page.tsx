import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { EmployeeForm } from "@/components/forms/employee-form";
import { prisma } from "@/lib/db";
import { Employee } from "@/types/employee";

interface EditEmployeePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditEmployeePage({
  params,
}: EditEmployeePageProps) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) {
    notFound();
  }

  const employeeData = await prisma.employee.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!employeeData) {
    notFound();
  }

  // PrismaのデータをEmployee型に変換（nullをundefinedに変換）
  const employee: Employee = {
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

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <EmployeeForm employee={employee} mode="edit" />
      </div>
    </DashboardLayout>
  );
}
