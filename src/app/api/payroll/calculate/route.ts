import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST: 給与計算
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const { employeeId, startDate, endDate, workHours, overtimeHours } = body;

    if (!employeeId || !startDate || !endDate) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    // 従業員情報を取得
    const employee = await prisma.employee.findUnique({
      where: { id: employeeId, userId },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "従業員が見つかりません" },
        { status: 404 }
      );
    }

    // 期間内の現場数を取得
    const sites = await prisma.site.findMany({
      where: {
        userId,
        employeeNames: {
          contains: employee.name, // 従業員名が含まれている現場を検索
        },
        date: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
    });

    const siteCount = sites.length;
    const unitPay = employee.unitPay || 0;
    const hourlyOvertimePay = employee.hourlyOvertimePay || 0;

    // 給与計算
    const sitePay = siteCount * unitPay; // 現場手当
    const overtime = (overtimeHours || 0) * hourlyOvertimePay; // 残業手当
    const totalAmount = sitePay + overtime; // 総支給額

    return NextResponse.json({
      employee,
      siteCount,
      unitPay,
      sitePay,
      workHours: workHours || 0,
      overtimeHours: overtimeHours || 0,
      hourlyOvertimePay,
      overtime,
      totalAmount,
      period: {
        startDate,
        endDate,
      },
      sites,
    });
  } catch (e) {
    console.error("API: Error calculating payroll:", e);
    return NextResponse.json(
      { error: "給与計算に失敗しました" },
      { status: 500 }
    );
  }
}
