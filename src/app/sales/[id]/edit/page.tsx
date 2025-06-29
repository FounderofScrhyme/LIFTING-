import { prisma } from "@/lib/db";
import { Sales } from "@/types/sales";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { SalesForm } from "@/components/forms/sales-form";

interface EditSalesPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditSalesPage({ params }: EditSalesPageProps) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) {
    notFound();
  }

  const salesData = await prisma.sales.findFirst({
    where: {
      id,
      userId,
    },
    include: {
      client: {
        select: {
          id: true,
          name: true,
          companyName: true,
        },
      },
    },
  });

  if (!salesData) {
    notFound();
  }

  const sales: Sales = {
    id: salesData.id,
    amount: salesData.amount,
    date: salesData.date,
    description: salesData.description || undefined,
    category: salesData.category || undefined,
    status: salesData.status,
    createdAt: salesData.createdAt,
    updatedAt: salesData.updatedAt,
    userId: salesData.userId,
    clientId: salesData.clientId,
    client: {
      id: salesData.client.id,
      name: salesData.client.name,
      companyName: salesData.client.companyName || undefined,
    },
  };

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <SalesForm sales={sales} mode="edit" />
      </div>
    </DashboardLayout>
  );
}
