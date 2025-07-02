"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
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

function PayrollContent() {
  const { userId } = useAuth();
  const searchParams = useSearchParams();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [payrollSummaries, setPayrollSummaries] = useState<PayrollSummary[]>(
    []
  );
  const [savedPayrolls, setSavedPayrolls] = useState<SavedPayroll[]>([]);
  const [loading, setLoading] = useState(true);
  // ローカルストレージから期間を取得する関数
  const getInitialPeriod = () => {
    if (typeof window !== "undefined") {
      const savedStartDate = localStorage.getItem("payrollStartDate");
      const savedEndDate = localStorage.getItem("payrollEndDate");

      if (savedStartDate && savedEndDate) {
        return {
          startDate: savedStartDate,
          endDate: savedEndDate,
        };
      }
    }

    // デフォルト値（今月の初日から月末まで）
    return {
      startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        .toISOString()
        .split("T")[0],
      endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
        .toISOString()
        .split("T")[0],
    };
  };

  const [selectedPeriod, setSelectedPeriod] = useState(getInitialPeriod);

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
          const siteCount = data.siteCount || 0;
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
    setSelectedPeriod((prev) => {
      const newPeriod = {
        ...prev,
        [field]: value,
      };

      // ローカルストレージに保存
      if (typeof window !== "undefined") {
        localStorage.setItem("payrollStartDate", newPeriod.startDate);
        localStorage.setItem("payrollEndDate", newPeriod.endDate);
      }

      return newPeriod;
    });
  };

  const handleRefresh = () => {
    fetchSavedPayrolls();
    calculatePayrollSummaries();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">給与管理</h1>
        <div className="flex gap-2">
          <Button onClick={handleRefresh} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            更新
          </Button>
          <Link href="/payroll/new">
            <Button>新規給与作成</Button>
          </Link>
        </div>
      </div>

      {/* 期間選択 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            期間選択
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">開始日</label>
              <input
                type="date"
                value={selectedPeriod.startDate}
                onChange={(e) =>
                  handlePeriodChange("startDate", e.target.value)
                }
                className="border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">終了日</label>
              <input
                type="date"
                value={selectedPeriod.endDate}
                onChange={(e) => handlePeriodChange("endDate", e.target.value)}
                className="border rounded px-3 py-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 給与サマリー */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {payrollSummaries.map((summary) => (
          <Card key={summary.employeeId}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{summary.employeeName}</span>
                {summary.hasSavedPayroll && (
                  <Badge variant="secondary">保存済み</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>現場数: {summary.siteCount}件</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    期間: {summary.period.startDate} 〜 {summary.period.endDate}
                  </span>
                </div>
                <div className="text-lg font-semibold">
                  総支給額: ¥
                  {isNaN(summary.totalAmount)
                    ? 0
                    : summary.totalAmount.toLocaleString()}
                </div>
                <Link
                  href={`/payroll/new?employeeId=${summary.employeeId}&startDate=${summary.period.startDate}&endDate=${summary.period.endDate}`}
                >
                  <Button className="w-full" variant="outline">
                    詳細作成
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 保存された給与一覧 */}
      {savedPayrolls.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>保存された給与</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {savedPayrolls.map((payroll) => (
                <div
                  key={payroll.id}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <div>
                    <div className="font-medium">{payroll.employee.name}</div>
                    <div className="text-sm text-gray-600">
                      {payroll.startDate} 〜 {payroll.endDate}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">
                      ¥
                      {isNaN(payroll.totalAmount)
                        ? 0
                        : payroll.totalAmount.toLocaleString()}
                    </div>
                    <Badge
                      variant={
                        payroll.status === "PAID" ? "default" : "secondary"
                      }
                    >
                      {payroll.status === "PAID" ? "支払済み" : "未支払い"}
                    </Badge>
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

export default function PayrollPage() {
  return (
    <DashboardLayout>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">読み込み中...</div>
          </div>
        }
      >
        <PayrollContent />
      </Suspense>
    </DashboardLayout>
  );
}
