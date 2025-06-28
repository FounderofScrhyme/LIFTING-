import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { ClientForm } from '@/components/forms/client-form';
import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import { Client } from '@/types/client';

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

    const clientData = await prisma.client.findFirst({
        where: {
            id: params.id,
            userId,
        },
    });

    if (!clientData) {
        notFound();
    }

    // PrismaのデータをClient型に変換（nullをundefinedに変換）
    const client: Client = {
        id: clientData.id,
        name: clientData.name,
        companyName: clientData.companyName || undefined,
        email: clientData.email || undefined,
        phone: clientData.phone || undefined,
        address: clientData.address || undefined,
        postalCode: clientData.postalCode || undefined,
        city: clientData.city || undefined,
        prefecture: clientData.prefecture || undefined,
        contactPerson: clientData.contactPerson || undefined,
        contactPhone: clientData.contactPhone || undefined,
        contactEmail: clientData.contactEmail || undefined,
        industry: clientData.industry || undefined,
        notes: clientData.notes || undefined,
        status: clientData.status,
        createdAt: clientData.createdAt,
        updatedAt: clientData.updatedAt,
        userId: clientData.userId,
    };

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <ClientForm client={client} mode="edit" />
            </div>
        </DashboardLayout>
    );
} 