import { Sidebar } from './sidebar';
import { Header } from './header';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* サイドバー */}
            <Sidebar />

            {/* メインコンテンツ */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* ヘッダー */}
                <Header />

                {/* メインコンテンツエリア */}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
} 