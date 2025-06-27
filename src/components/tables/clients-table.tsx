'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Edit,
    Trash2,
    Eye,
    Search,
    Building2,
    Mail,
    Phone,
    MapPin
} from 'lucide-react';
import { Client } from '@/types/client';

export function ClientList() {
    const router = useRouter();
    const [clients, setClients] = useState<Client[]>([]);
    const [filteredClients, setFilteredClients] = useState<Client[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchClients();
    }, []);

    useEffect(() => {
        const filtered = clients.filter(client =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredClients(filtered);
    }, [clients, searchTerm]);

    const fetchClients = async () => {
        try {
            const response = await fetch('/api/clients');
            if (response.ok) {
                const data = await response.json();
                setClients(data);
            }
        } catch (error) {
            console.error('取引先取得エラー:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('この取引先を削除しますか？')) return;

        try {
            const response = await fetch(`/api/clients/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setClients(clients.filter(client => client.id !== id));
            } else {
                alert('削除に失敗しました');
            }
        } catch (error) {
            console.error('削除エラー:', error);
            alert('削除に失敗しました');
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'ACTIVE':
                return <Badge className="bg-green-100 text-green-800">アクティブ</Badge>;
            case 'INACTIVE':
                return <Badge className="bg-gray-100 text-gray-800">非アクティブ</Badge>;
            case 'PROSPECT':
                return <Badge className="bg-blue-100 text-blue-800">見込み客</Badge>;
            default:
                return <Badge>{status}</Badge>;
        }
    };

    if (isLoading) {
        return (
            <Card>
                <CardContent className="p-6">
                    <div className="text-center">読み込み中...</div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>取引先一覧</span>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            placeholder="取引先を検索..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-64"
                        />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {filteredClients.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        {searchTerm ? '検索結果が見つかりません' : '取引先が登録されていません'}
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {filteredClients.map((client) => (
                            <div
                                key={client.id}
                                className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Building2 className="h-5 w-5 text-gray-400" />
                                            <h3 className="font-semibold text-lg">{client.name}</h3>
                                            {getStatusBadge(client.status)}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                            {client.companyName && (
                                                <div className="flex items-center gap-2">
                                                    <Building2 className="h-4 w-4" />
                                                    <span>{client.companyName}</span>
                                                </div>
                                            )}

                                            {client.email && (
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4" />
                                                    <span>{client.email}</span>
                                                </div>
                                            )}

                                            {client.phone && (
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4" />
                                                    <span>{client.phone}</span>
                                                </div>
                                            )}

                                            {client.prefecture && client.city && (
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{client.prefecture} {client.city}</span>
                                                </div>
                                            )}

                                            {client.contactPerson && (
                                                <div className="flex items-center gap-2">
                                                    <span>担当者: {client.contactPerson}</span>
                                                </div>
                                            )}

                                            {client.industry && (
                                                <div className="flex items-center gap-2">
                                                    <span>業種: {client.industry}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 ml-4">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => router.push(`/clients/${client.id}`)}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => router.push(`/clients/${client.id}/edit`)}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleDelete(client.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
