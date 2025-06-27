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

export default async function DashboardPage() {
    const { userId } = await auth();

    // 未認証ユーザーはログインページにリダイレクト
    if (!userId) {
        redirect('/sign-in');
    }

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
                {/* ページヘッダー */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">ダッシュボード</h1>
                    <p className="text-gray-600 mt-2">今日の業務状況を確認しましょう</p>
                </div>

                {/* 統計カード */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">取引先数</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">24</div>
                            <p className="text-xs text-muted-foreground">
                                +2 from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">今月の売上</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">¥12,450,000</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">進行中現場</CardTitle>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">
                                2件完了予定
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">従業員数</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">32</div>
                            <p className="text-xs text-muted-foreground">
                                2名新規採用
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
                                        <p className="text-sm font-medium">新規取引先「株式会社サンプル」を追加</p>
                                        <p className="text-xs text-gray-500">2時間前</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">現場「東京ビル建設」が完了</p>
                                        <p className="text-xs text-gray-500">1日前</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">給与計算が完了しました</p>
                                        <p className="text-xs text-gray-500">2日前</p>
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
                                        <p className="text-sm font-medium">取引先ミーティング</p>
                                        <p className="text-xs text-gray-500">明日 14:00</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <AlertCircle className="h-4 w-4 text-red-500" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">給与支払い締切</p>
                                        <p className="text-xs text-gray-500">金曜日</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <TrendingUp className="h-4 w-4 text-green-500" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">月次売上報告</p>
                                        <p className="text-xs text-gray-500">来週月曜日</p>
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