import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: 従業員の現場数を取得
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  try {
    // 従業員情報を先に取得
    const employee = await prisma.employee.findUnique({
      where: { id, userId },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "従業員が見つかりません" },
        { status: 404 }
      );
    }

    // 期間が指定されている場合のフィルタリング条件
    let dateFilter = {};
    if (startDate && endDate) {
      dateFilter = {
        date: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      };
    }

    // 従業員が派遣された現場数を取得（従業員名で検索）
    const sites = await prisma.site.findMany({
      where: {
        userId,
        employeeNames: {
          contains: employee.name, // 従業員名が含まれている現場を検索
        },
        ...dateFilter,
      },
    });

    // 現場数をカウント
    const siteCount = sites.length;

    return NextResponse.json({
      employee,
      siteCount,
      sites,
      period: {
        startDate,
        endDate,
      },
    });
  } catch (e) {
    console.error("API: Error fetching employee sites:", e);
    return NextResponse.json({ error: "取得に失敗しました" }, { status: 500 });
  }
}
