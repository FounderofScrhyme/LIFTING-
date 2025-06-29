"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Users, Save, ArrowLeft } from "lucide-react";
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

export default function NewPayrollPage() {
  const { userId } = useAuth();
  const router = useRouter();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [calculation, setCalculation] = useState<PayrollCalculation | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      .toISOString()
      .split("T")[0],
    endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
      .toISOString()
      .split("T")[0],
    workHours: 0,
    overtimeHours: 0,
    notes: "",
  });

  useEffect(() => {
    if (userId) {
      fetchEmployees();
    }
  }, [userId]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch("/api/employees");
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.error("従業員取得エラー:", error);
    }
  };

  const calculatePayroll = async () => {
    if (!selectedEmployee || !formData.startDate || !formData.endDate) {
      alert("従業員と期間を選択してください");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/payroll/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId: selectedEmployee,
          startDate: formData.startDate,
          endDate: formData.endDate,
          workHours: formData.workHours,
          overtimeHours: formData.overtimeHours,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCalculation(data);
      } else {
        alert("給与計算に失敗しました");
      }
    } catch (error) {
      console.error("給与計算エラー:", error);
      alert("給与計算に失敗しました");
    } finally {
      setLoading(false);
    }
  };

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
          employeeId: selectedEmployee,
          startDate: formData.startDate,
          endDate: formData.endDate,
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
        router.push("/payroll");
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
          <h1 className="text-3xl font-bold">給与登録</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 基本情報 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                基本情報
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="employee">従業員</Label>
                <Select
                  value={selectedEmployee}
                  onValueChange={setSelectedEmployee}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="従業員を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    {employees.map((employee) => (
                      <SelectItem key={employee.id} value={employee.id}>
                        {employee.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="startDate">開始日</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    handleInputChange("startDate", e.target.value)
                  }
                />
              </div>

              <div>
                <Label htmlFor="endDate">終了日</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* 勤務時間 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                勤務時間
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="workHours">勤務時間（時間）</Label>
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
                <Label htmlFor="overtimeHours">残業時間（時間）</Label>
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

              <div>
                <Label htmlFor="notes">備考</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="給与に関する備考を入力してください"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 計算ボタン */}
        <Card>
          <CardContent className="pt-6">
            <Button
              onClick={calculatePayroll}
              disabled={loading || !selectedEmployee}
              className="w-full"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              {loading ? "計算中..." : "給与計算"}
            </Button>
          </CardContent>
        </Card>

        {/* 計算結果 */}
        {calculation && (
          <>
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
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
