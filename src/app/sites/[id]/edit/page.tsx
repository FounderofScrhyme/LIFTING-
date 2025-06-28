"use client";
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { SiteForm } from '@/components/forms/site-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function EditSitePage() {
    const router = useRouter();
    const params = useParams();
    const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : '';
    const [site, setSite] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        fetch(`/api/sites/${id}`)
            .then(res => res.json())
            .then(data => {
                setSite({
                    ...data,
                    employeeIds: data.employees?.map((e: any) => e.employeeId) || [],
                });
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    const handleSubmit = async (values: any) => {
        setSubmitting(true);
        setError(null);
        try {
            const res = await fetch(`/api/sites/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data.error || '更新に失敗しました');
            } else {
                router.push(`/sites/${id}`);
            }
        } catch (e) {
            setError('更新に失敗しました');
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm('本当に削除しますか？')) return;
        setSubmitting(true);
        setError(null);
        try {
            const res = await fetch(`/api/sites/${id}`, { method: 'DELETE' });
            if (!res.ok) {
                const data = await res.json();
                setError(data.error || '削除に失敗しました');
            } else {
                router.push('/sites');
            }
        } catch (e) {
            setError('削除に失敗しました');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="p-6">読み込み中...</div>;
    if (!site) return <div className="p-6 text-red-500">データが見つかりません</div>;

    return (
        <div className="p-6 max-w-xl mx-auto">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>現場編集</CardTitle>
                    <Button variant="destructive" size="sm" onClick={handleDelete} disabled={submitting}>
                        削除
                    </Button>
                </CardHeader>
                <CardContent>
                    <SiteForm defaultValues={site} onSubmit={handleSubmit} submitting={submitting} />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </CardContent>
            </Card>
        </div>
    );
} 