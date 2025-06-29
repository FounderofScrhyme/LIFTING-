import { auth } from "@clerk/nextjs/server";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { ClientForm } from "@/components/forms/client-form";

export default async function NewClientPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <ClientForm mode="create" />
      </div>
    </DashboardLayout>
  );
}
