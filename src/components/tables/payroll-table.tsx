"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Clock, DollarSign, Eye, Edit } from "lucide-react";
import Link from "next/link";

interface Payroll {
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
  status: "PENDING" | "PAID" | "CANCELLED";
  paymentDate: string | null;
  notes: string | null;
  createdAt: string;
}

interface PayrollTableProps {
  payrolls: Payroll[];
}

export function PayrollTable({ payrolls }: PayrollTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge variant="secondary">未払い</Badge>;
      case "PAID":
        return <Badge variant="default">支払済</Badge>;
      case "CANCELLED":
        return <Badge variant="destructive">キャンセル</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ja-JP");
  };

  const formatCurrency = (amount: number) => {
    return `¥${amount.toLocaleString()}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          給与履歴
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>従業員名</TableHead>
              <TableHead>期間</TableHead>
              <TableHead>現場数</TableHead>
              <TableHead>勤務時間</TableHead>
              <TableHead>残業時間</TableHead>
              <TableHead>現場手当</TableHead>
              <TableHead>残業手当</TableHead>
              <TableHead>総支給額</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>支払日</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payrolls.map((payroll) => (
              <TableRow key={payroll.id}>
                <TableCell className="font-medium">
                  {payroll.employee.name}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatDate(payroll.startDate)} -{" "}
                      {formatDate(payroll.endDate)}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{payroll.siteCount}現場</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{payroll.workHours || 0}時間</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{payroll.overtimeHours || 0}時間</span>
                  </div>
                </TableCell>
                <TableCell className="text-green-600 font-medium">
                  {formatCurrency(payroll.sitePay)}
                </TableCell>
                <TableCell className="text-yellow-600 font-medium">
                  {formatCurrency(payroll.overtime)}
                </TableCell>
                <TableCell className="text-purple-600 font-bold">
                  {formatCurrency(payroll.totalAmount)}
                </TableCell>
                <TableCell>{getStatusBadge(payroll.status)}</TableCell>
                <TableCell>
                  {payroll.paymentDate ? formatDate(payroll.paymentDate) : "-"}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Link
                      href={`/payroll/${payroll.employeeId}?startDate=${
                        payroll.startDate.split("T")[0]
                      }&endDate=${payroll.endDate.split("T")[0]}`}
                    >
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/payroll/${payroll.id}/edit`}>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {payrolls.length === 0 && (
          <div className="text-center py-8">
            <DollarSign className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">給与データがありません</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
