import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { ClientForm } from '@/components/forms/client-form';

export default async function NewClientPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect('/sign-in');
    }

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <ClientForm mode="create" />
            </div>
        </DashboardLayout>
    );
}
