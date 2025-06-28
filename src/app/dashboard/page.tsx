import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Building2,
    DollarSign,
    MapPin,
    Users,
    TrendingUp,
    Calendar,
    AlertCircle
} from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function DashboardPage() {
    const { userId } = await auth();

    // 未認証ユーザーはログインページにリダイレクト
    if (!userId) {
        redirect('/sign-in');
    }

    // 動的データの取得
    const [
        clientCount,
        employeeCount,
        currentMonthSales,
        lastMonthSales
    ] = await Promise.all([
        // 取引先数
        prisma.client.count({
            where: { userId }
        }),
        // 従業員数
        prisma.employee.count({
            where: { userId }
        }),
        // 今月の売上
        prisma.sales.aggregate({
            where: {
                userId,
                date: {
                    gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
                }
            },
            _sum: {
                amount: true
            }
        }),
        // 先月の売上（比較用）
        prisma.sales.aggregate({
            where: {
                userId,
                date: {
                    gte: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
                    lte: new Date(new Date().getFullYear(), new Date().getMonth(), 0),
                }
            },
            _sum: {
                amount: true
            }
        })
    ]);

    // 売上データの処理
    const currentMonthAmount = currentMonthSales._sum.amount || 0;
    const lastMonthAmount = lastMonthSales._sum.amount || 0;
    const salesChange = lastMonthAmount > 0
        ? ((currentMonthAmount - lastMonthAmount) / lastMonthAmount * 100).toFixed(1)
        : '0';

    // 売上変化の表示テキスト
    const getSalesChangeText = () => {
        if (lastMonthAmount === 0) return '先月データなし';
        const change = parseFloat(salesChange);
        if (change > 0) return `+${salesChange}% from last month`;
        if (change < 0) return `${salesChange}% from last month`;
        return '先月と同額';
    };

    // 売上変化の色
    const getSalesChangeColor = () => {
        if (lastMonthAmount === 0) return 'text-muted-foreground';
        const change = parseFloat(salesChange);
        if (change > 0) return 'text-green-600';
        if (change < 0) return 'text-red-600';
        return 'text-muted-foreground';
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('ja-JP').format(amount);
    };

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
                {/* ページヘッダー */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">ダッシュボード</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">今日の業務状況を確認しましょう</p>
                </div>

                {/* 統計カード */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">取引先数</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{clientCount}</div>
                            <p className="text-xs text-muted-foreground">
                                登録済み取引先
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">今月の売上</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">¥{formatCurrency(currentMonthAmount)}</div>
                            <p className={`text-xs ${getSalesChangeColor()}`}>
                                {getSalesChangeText()}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">進行中現場</CardTitle>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">-</div>
                            <p className="text-xs text-muted-foreground">
                                現場管理機能は今後実装予定
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">従業員数</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{employeeCount}</div>
                            <p className="text-xs text-muted-foreground">
                                登録済み従業員
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* メインコンテンツ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* 最近の活動 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>最近の活動</CardTitle>
                            <CardDescription>
                                最新の業務活動を確認できます
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">取引先管理機能が利用可能</p>
                                        <p className="text-xs text-gray-500">システム更新</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">従業員管理機能が利用可能</p>
                                        <p className="text-xs text-gray-500">システム更新</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">売上管理機能が利用可能</p>
                                        <p className="text-xs text-gray-500">システム更新</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 今週の予定 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>今週の予定</CardTitle>
                            <CardDescription>
                                重要な予定と締切を確認
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <Calendar className="h-4 w-4 text-blue-500" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">システム機能確認</p>
                                        <p className="text-xs text-gray-500">随時</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <AlertCircle className="h-4 w-4 text-red-500" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">データバックアップ</p>
                                        <p className="text-xs text-gray-500">定期的に</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">機能拡張計画</p>
                                        <p className="text-xs text-gray-500">継続中</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}