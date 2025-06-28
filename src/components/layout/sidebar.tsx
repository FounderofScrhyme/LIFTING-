'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    Users,
    MapPin,
    CreditCard,
    Building2,
    JapaneseYen
} from 'lucide-react';

const navigation = [
    {
        name: 'ダッシュボード',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        name: '取引先管理',
        href: '/clients',
        icon: Building2,
    },
    {
        name: '売上管理',
        href: '/sales',
        icon: JapaneseYen,
    },
    {
        name: '現場情報',
        href: '/sites',
        icon: MapPin,
    },
    {
        name: '従業員管理',
        href: '/employees',
        icon: Users,
    },
    {
        name: '給与管理',
        href: '/payroll',
        icon: CreditCard,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex h-full w-64 flex-col text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 border-r border-gray-200">
            {/* ロゴ・ヘッダー */}
            <div className="flex h-16 items-center px-6 border-b border-gray-200">
                <h1 className="text-xl font-bold">LIFTING業務システム</h1>
            </div>

            {/* ナビゲーション */}
            <nav className="flex-1 space-y-1 px-3 py-4">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                isActive
                                    ? 'bg-violet-300 text-violet-700'
                                    : 'text-gray-500 group-hover:text-violet-200 dark:text-gray-100 hover:bg-violet-200'
                            )}
                        >
                            <item.icon
                                className={cn(
                                    'mr-3 h-5 w-5 flex-shrink-0',
                                    isActive ? 'text-gray-700' : 'text-gray-500 group-hover:text-gray-700 dark:text-gray-100'
                                )}
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* フッター */}
            {/* <div className="border-t border-gray-200 p-4">
                <div className="text-xs text-gray-500 dark:text-gray-100">
                    Altha Platforms
                </div>
            </div> */}
        </div>
    );
}