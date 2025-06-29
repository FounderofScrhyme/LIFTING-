"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  DollarSign,
  Users,
  Save,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

interface Employee {
  id: string;
  name: string;
  unitPay: number | null;
  hourlyOvertimePay: number | null;
}

interface Site {
  id: string;
  name: string;
  date: string;
  startTime: string;
}

interface PayrollCalculation {
  employee: Employee;
  siteCount: number;
  unitPay: number;
  sitePay: number;
  workHours: number;
  overtimeHours: number;
  hourlyOvertimePay: number;
  overtime: number;
  totalAmount: number;
  period: {
    startDate: string;
    endDate: string;
  };
  sites: Site[];
}

export default function PayrollDetailPage() {
  const { userId } = useAuth();
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const employeeId = params.id as string;

  const [calculation, setCalculation] = useState<PayrollCalculation | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    workHours: 0,
    overtimeHours: 0,
    notes: "",
  });

  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";

  const calculatePayroll = useCallback(async () => {
    try {
      const response = await fetch("/api/payroll/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId,
          startDate,
          endDate,
          workHours: formData.workHours,
          overtimeHours: formData.overtimeHours,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCalculation(data);
      } else {
        console.error("給与計算エラー");
      }
    } catch (error) {
      console.error("給与計算エラー:", error);
    } finally {
      setLoading(false);
    }
  }, [
    employeeId,
    startDate,
    endDate,
    formData.workHours,
    formData.overtimeHours,
  ]);

  useEffect(() => {
    if (userId && employeeId && startDate && endDate) {
      calculatePayroll();
    }
  }, [userId, employeeId, startDate, endDate, calculatePayroll]);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    if (!calculation) return;

    setSaving(true);
    try {
      const response = await fetch("/api/payroll/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId,
          startDate,
          endDate,
          workHours: formData.workHours,
          overtimeHours: formData.overtimeHours,
          siteCount: calculation.siteCount,
          unitPay: calculation.unitPay,
          sitePay: calculation.sitePay,
          hourlyOvertimePay: calculation.hourlyOvertimePay,
          overtime: calculation.overtime,
          totalAmount: calculation.totalAmount,
          notes: formData.notes,
        }),
      });

      if (response.ok) {
        alert("給与情報を保存しました");
        router.push("/payroll?refresh=true");
      } else {
        alert("保存に失敗しました");
      }
    } catch (error) {
      console.error("保存エラー:", error);
      alert("保存に失敗しました");
    } finally {
      setSaving(false);
    }
  };

  const recalculatePayroll = () => {
    calculatePayroll();
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

  if (!calculation) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">給与情報が見つかりません</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 p-4">
        <div className="flex items-center gap-4">
          <Link href="/payroll">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              戻る
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">給与詳細・編集</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 従業員情報 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                従業員情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>従業員名</Label>
                <div className="text-lg font-medium">
                  {calculation.employee.name}
                </div>
              </div>
              <div>
                <Label>現場単価</Label>
                <div className="text-lg font-medium">
                  ¥{calculation.unitPay.toLocaleString()}
                </div>
              </div>
              <div>
                <Label>残業時間単価</Label>
                <div className="text-lg font-medium">
                  ¥{calculation.hourlyOvertimePay.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 期間情報 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                期間情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>開始日</Label>
                <div className="text-lg font-medium">{startDate}</div>
              </div>
              <div>
                <Label>終了日</Label>
                <div className="text-lg font-medium">{endDate}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 給与計算フォーム */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              給与計算
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="pb-2" htmlFor="workHours">
                  勤務時間（時間）
                </Label>
                <Input
                  id="workHours"
                  type="number"
                  value={formData.workHours}
                  onChange={(e) =>
                    handleInputChange(
                      "workHours",
                      parseInt(e.target.value) || 0
                    )
                  }
                  min="0"
                />
              </div>
              <div>
                <Label className="pb-2" htmlFor="overtimeHours">
                  残業時間（時間）
                </Label>
                <Input
                  id="overtimeHours"
                  type="number"
                  value={formData.overtimeHours}
                  onChange={(e) =>
                    handleInputChange(
                      "overtimeHours",
                      parseInt(e.target.value) || 0
                    )
                  }
                  min="0"
                />
              </div>
            </div>

            <div>
              <Label className="pb-2" htmlFor="notes">
                備考
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="給与に関する備考を入力してください"
              />
            </div>

            <Button onClick={recalculatePayroll} variant="outline">
              <Clock className="w-4 h-4 mr-2" />
              再計算
            </Button>
          </CardContent>
        </Card>

        {/* 計算結果 */}
        <Card>
          <CardHeader>
            <CardTitle>計算結果</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {calculation.siteCount}
                </div>
                <div className="text-sm text-gray-600">現場数</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  ¥{calculation.sitePay.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">現場手当</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">
                  ¥{calculation.overtime.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">残業手当</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  ¥{calculation.totalAmount.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">総支給額</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 派遣現場一覧 */}
        <Card>
          <CardHeader>
            <CardTitle>派遣現場一覧</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {calculation.sites.map((site) => (
                <div
                  key={site.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <div className="font-medium">{site.name}</div>
                    <div className="text-sm text-gray-600">
                      {new Date(site.date).toLocaleDateString()}{" "}
                      {new Date(site.startTime).toLocaleTimeString()}
                    </div>
                  </div>
                  <Badge variant="secondary">派遣済</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 保存ボタン */}
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={saving} size="lg">
            <Save className="w-4 h-4 mr-2" />
            {saving ? "保存中..." : "給与情報を保存"}
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
