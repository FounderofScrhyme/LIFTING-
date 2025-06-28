import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Site } from '@/types/site';

async function fetchSite(id: string): Promise<Site | null> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/sites/${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
}

export default async function SiteDetailPage({ params }: { params: { id: string } }) {
    const site = await fetchSite(params.id);
    if (!site) return notFound();

    const formatAddress = (site: Site) => {
        const parts = [site.postalCode, site.prefecture, site.city, site.address].filter(Boolean);
        return parts.length > 0 ? parts.join(' ') : '-';
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{site.name}</CardTitle>
                    <Link href={`/sites/${site.id}/edit`}>
                        <Button size="sm" variant="secondary">編集</Button>
                    </Link>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div><span className="font-semibold">工務店名：</span>{site.contractor}</div>
                    <div><span className="font-semibold">住所：</span>{formatAddress(site)}</div>
                    <div><span className="font-semibold">開始日：</span>{site.startDate ? site.startDate.slice(0, 10) : ''}</div>
                    <div><span className="font-semibold">従業員：</span>{site.employeeNames || '-'}</div>
                    <div><span className="font-semibold">ステータス：</span>{site.status === 'ACTIVE' ? '稼働中' : site.status === 'COMPLETED' ? '完了' : '中止'}</div>
                    {site.notes && <div><span className="font-semibold">備考：</span>{site.notes}</div>}
                </CardContent>
            </Card>
        </div>
    );
}
