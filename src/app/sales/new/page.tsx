'use client';

import { useState, useEffect } from 'react';
import { SalesForm } from '@/components/forms/sales-form';

export default function NewSalesPage() {
    const [isClient, setIsClient] = useState(false);

    // クライアントサイドでのみ実行
    useEffect(() => {
        setIsClient(true);
    }, []);

    // クライアントサイドでない場合はローディング表示
    if (!isClient) {
        return (
            <div className="max-w-4xl mx-auto">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">新規売上登録</h1>
                <p className="text-gray-600 mt-2">新しい売上の情報を入力してください</p>
            </div>
            <SalesForm mode="create" />
        </div>
    );
}
