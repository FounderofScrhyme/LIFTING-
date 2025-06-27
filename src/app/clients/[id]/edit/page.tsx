import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { ClientForm } from '@/components/forms/client-form';
import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';

interface EditClientPageProps {
    params: {
        id: string;
    };
}

export default async function EditClientPage({ params }: EditClientPageProps) {
    const { userId } = await auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const client = await prisma.client.findFirst({
        where: {
            id: params.id,
            userId,
        },
    });

    if (!client) {
        notFound();
    }

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <ClientForm client={client} mode="edit" />
            </div>
        </DashboardLayout>
    );
} 