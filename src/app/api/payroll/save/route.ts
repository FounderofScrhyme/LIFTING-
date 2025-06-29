import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST: 給与情報を保存
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const {
      employeeId,
      startDate,
      endDate,
      workHours,
      overtimeHours,
      siteCount,
      unitPay,
      sitePay,
      hourlyOvertimePay,
      overtime,
      totalAmount,
      notes,
    } = body;

    if (!employeeId || !startDate || !endDate) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    // 給与情報を保存
    const payroll = await prisma.payroll.create({
      data: {
        userId,
        employeeId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        workHours: workHours || 0,
        overtimeHours: overtimeHours || 0,
        siteCount: siteCount || 0,
        unitPay: unitPay || 0,
        sitePay: sitePay || 0,
        hourlyOvertimePay: hourlyOvertimePay || 0,
        overtime: overtime || 0,
        totalAmount: totalAmount || 0,
        notes: notes || "",
      },
    });

    return NextResponse.json(payroll);
  } catch (e) {
    console.error("API: Error saving payroll:", e);
    return NextResponse.json(
      { error: "給与保存に失敗しました" },
      { status: 500 }
    );
  }
}
