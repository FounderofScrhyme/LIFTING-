"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, RefreshCw } from "lucide-react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

interface Employee {
  id: string;
  name: string;
  unitPay: number | null;
  hourlyOvertimePay: number | null;
}

interface PayrollSummary {
  employeeId: string;
  employeeName: string;
  siteCount: number;
  totalAmount: number;
  period: {
    startDate: string;
    endDate: string;
  };
  hasSavedPayroll?: boolean;
}

interface SavedPayroll {
  id: string;
  employeeId: string;
  employee: {
    name: string;
  };
  startDate: string;
  endDate: string;
  workHours: number | null;
  overtimeHours: number | null;
  siteCount: number;
  sitePay: number;
  overtime: number;
  totalAmount: number;
  status: string;
}

export default function PayrollPage() {
  const { userId } = useAuth();
  const searchParams = useSearchParams();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [payrollSummaries, setPayrollSummaries] = useState<PayrollSummary[]>(
    []
  );
  const [savedPayrolls, setSavedPayrolls] = useState<SavedPayroll[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      .toISOString()
      .split("T")[0],
    endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
      .toISOString()
      .split("T")[0],
  });

  const fetchSavedPayrolls = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/payroll?startDate=${selectedPeriod.startDate}&endDate=${selectedPeriod.endDate}`
      );
      if (response.ok) {
        const data = await response.json();
        setSavedPayrolls(data);
      }
    } catch (error) {
      console.error("保存された給与データ取得エラー:", error);
    }
  }, [selectedPeriod.startDate, selectedPeriod.endDate]);

  const calculatePayrollSummaries = useCallback(async () => {
    const summaries: PayrollSummary[] = [];

    for (const employee of employees) {
      try {
        console.log(`従業員 ${employee.name} の現場数を取得中...`);
        const response = await fetch(
          `/api/employees/${employee.id}/sites?startDate=${selectedPeriod.startDate}&endDate=${selectedPeriod.endDate}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(`従業員 ${employee.name} のAPIレスポンス:`, data);
          const siteCount = data.siteCount;
          const unitPay = employee.unitPay || 0;
          const totalAmount = siteCount * unitPay;

          // 保存された給与データがあるかチェック
          const savedPayroll = savedPayrolls.find(
            (p) => p.employeeId === employee.id
          );

          summaries.push({
            employeeId: employee.id,
            employeeName: employee.name,
            siteCount,
            totalAmount: savedPayroll ? savedPayroll.totalAmount : totalAmount,
            period: {
              startDate: selectedPeriod.startDate,
              endDate: selectedPeriod.endDate,
            },
            hasSavedPayroll: !!savedPayroll,
          });
        } else {
          console.error(
            `従業員 ${employee.name} のAPIエラー:`,
            response.status
          );
        }
      } catch (error) {
        console.error(`従業員 ${employee.name} の給与計算エラー:`, error);
      }
    }

    console.log("最終的な給与サマリー:", summaries);
    setPayrollSummaries(summaries);
  }, [employees, selectedPeriod, savedPayrolls]);

  useEffect(() => {
    if (userId) {
      fetchEmployees();
      fetchSavedPayrolls();
    }
  }, [userId, fetchSavedPayrolls]);

  // URLクエリパラメータを監視して自動更新
  useEffect(() => {
    const refresh = searchParams.get("refresh");
    if (refresh === "true") {
      fetchSavedPayrolls();
      calculatePayrollSummaries();
      // クエリパラメータを削除
      window.history.replaceState({}, document.title, "/payroll");
    }
  }, [searchParams, fetchSavedPayrolls, calculatePayrollSummaries]);

  useEffect(() => {
    fetchSavedPayrolls();
  }, [selectedPeriod, fetchSavedPayrolls]);

  useEffect(() => {
    if (employees.length > 0) {
      calculatePayrollSummaries();
    }
  }, [employees, selectedPeriod, calculatePayrollSummaries]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("/api/employees");
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.error("従業員取得エラー:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePeriodChange = (
    field: "startDate" | "endDate",
    value: string
  ) => {
    setSelectedPeriod((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRefresh = () => {
    fetchSavedPayrolls();
    calculatePayrollSummaries();
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">読み込み中...</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">給与管理</h1>
          <div className="flex gap-2">
            <Button onClick={handleRefresh} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              更新
            </Button>
            {/* <Link href="/payroll/new">
              <Button>
                <DollarSign className="w-4 h-4 mr-2" />
                給与登録
              </Button>
            </Link> */}
          </div>
        </div>

        {/* 期間選択 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              期間選択
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-center">
              <div>
                <label className="text-sm font-medium">開始日</label>
                <input
                  type="date"
                  value={selectedPeriod.startDate}
                  onChange={(e) =>
                    handlePeriodChange("startDate", e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">終了日</label>
                <input
                  type="date"
                  value={selectedPeriod.endDate}
                  onChange={(e) =>
                    handlePeriodChange("endDate", e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 給与サマリー */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {payrollSummaries.map((summary) => (
            <Card
              key={summary.employeeId}
              className={`hover:shadow-lg transition-shadow ${
                summary.hasSavedPayroll ? "border-green-200 bg-green-50" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {summary.employeeName}
                  </span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{summary.siteCount}現場</Badge>
                    {summary.hasSavedPayroll && (
                      <Badge variant="default" className="bg-green-600">
                        登録済
                      </Badge>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">現場数:</span>
                    <span className="font-medium">{summary.siteCount}現場</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">総支給額:</span>
                    <span className="font-bold text-lg text-green-600">
                      ¥{summary.totalAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="pt-2">
                    <Link
                      href={`/payroll/${summary.employeeId}?startDate=${summary.period.startDate}&endDate=${summary.period.endDate}`}
                    >
                      <Button variant="outline" className="w-full">
                        <Clock className="w-4 h-4 mr-2" />
                        {summary.hasSavedPayroll ? "詳細・編集" : "詳細・編集"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {payrollSummaries.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <Users className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">
                選択した期間に従業員の現場データがありません
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
