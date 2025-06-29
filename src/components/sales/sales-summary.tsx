"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DollarSign, TrendingUp, Calendar, Building2 } from "lucide-react";

interface SalesSummaryData {
  currentYear: {
    total: number;
    count: number;
  };
  currentMonth: {
    total: number;
    count: number;
  };
  monthly: Array<{
    month: number;
    total_amount: number;
    count: number;
  }>;
  yearly: Array<{
    year: number;
    total_amount: number;
    count: number;
  }>;
}

export function SalesSummary() {
  const [summaryData, setSummaryData] = useState<SalesSummaryData | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedClient, setSelectedClient] = useState("all");
  const [clients, setClients] = useState<Array<{ id: string; name: string }>>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドでのみ実行
  useEffect(() => {
    setIsClient(true);
    setSelectedYear(new Date().getFullYear().toString());
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const fetchSummary = async () => {
      try {
        const params = new URLSearchParams({
          year: selectedYear,
          ...(selectedClient &&
            selectedClient !== "all" && { clientId: selectedClient }),
        });

        const response = await fetch(`/api/sales/summary?${params}`);
        if (response.ok) {
          const data = await response.json();
          setSummaryData(data);
        }
      } catch (error) {
        console.error("売上サマリー取得エラー:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchClients = async () => {
      try {
        const response = await fetch("/api/clients");
        if (response.ok) {
          const data = await response.json();
          setClients(data);
        }
      } catch (error) {
        console.error("取引先取得エラー:", error);
      }
    };

    fetchSummary();
    fetchClients();
  }, [selectedYear, selectedClient, isClient]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ja-JP").format(amount);
  };

  const getMonthName = (month: number) => {
    const months = [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ];
    return months[month - 1];
  };

  // クライアントサイドでない場合は何も表示しない
  if (!isClient) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* フィルター */}
      <div className="flex gap-4">
        <div className="w-32">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[...Array(5)].map((_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <SelectItem key={year} value={year.toString()}>
                    {year}年
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="w-64">
          <Select value={selectedClient} onValueChange={setSelectedClient}>
            <SelectTrigger>
              <SelectValue placeholder="全取引先" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全取引先</SelectItem>
              {clients.map((client: { id: string; name: string }) => (
                <SelectItem key={client.id} value={client.id}>
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* サマリーカード */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">今年の総売上</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ¥{formatCurrency(summaryData?.currentYear.total || 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              {summaryData?.currentYear.count || 0}件の取引
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">今月の売上</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ¥{formatCurrency(summaryData?.currentMonth.total || 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              {summaryData?.currentMonth.count || 0}件の取引
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">平均月売上</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ¥
              {formatCurrency(
                summaryData?.currentYear.total
                  ? Math.round(summaryData.currentYear.total / 12)
                  : 0
              )}
            </div>
            <p className="text-xs text-muted-foreground">今年の月平均</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">取引先数</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clients.length}</div>
            <p className="text-xs text-muted-foreground">登録済み取引先</p>
          </CardContent>
        </Card>
      </div>

      {/* 月別売上グラフ */}
      {summaryData?.monthly && summaryData.monthly.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>月別売上推移</CardTitle>
            <CardDescription>{selectedYear}年の月別売上</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-12 gap-2">
              {summaryData.monthly.map((monthData) => (
                <div key={monthData.month} className="text-center">
                  <div className="text-xs text-gray-500 mb-1">
                    {getMonthName(monthData.month)}
                  </div>
                  <div className="text-sm font-medium">
                    ¥{formatCurrency(monthData.total_amount)}
                  </div>
                  <div className="text-xs text-gray-400">
                    {monthData.count}件
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
