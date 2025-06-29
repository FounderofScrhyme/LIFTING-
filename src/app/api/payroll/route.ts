import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

// GET: 給与一覧を取得
export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const employeeId = searchParams.get("employeeId");

    // フィルタリング条件を構築
    const whereClause: {
      userId: string;
      startDate?: { gte: Date; lte: Date };
      employeeId?: string;
    } = { userId };

    if (startDate && endDate) {
      whereClause.startDate = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    if (employeeId) {
      whereClause.employeeId = employeeId;
    }

    const payrolls = await prisma.payroll.findMany({
      where: whereClause,
      include: {
        employee: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(payrolls);
  } catch (e) {
    console.error("API: Error fetching payrolls:", e);
    return NextResponse.json({ error: "取得に失敗しました" }, { status: 500 });
  }
}
