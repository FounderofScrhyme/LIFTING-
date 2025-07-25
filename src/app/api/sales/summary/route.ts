import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

type SalesSummary = {
  month?: bigint | number;
  year?: bigint | number;
  total_amount: bigint | number;
  count: bigint | number;
};

// GET: 売上の期間別集計を取得
export async function GET(request: NextRequest) {
  try {
    console.log("GET /api/sales/summary - 開始");
    const { userId } = await auth();

    if (!userId) {
      console.log("GET /api/sales/summary - 認証エラー");
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const year =
      searchParams.get("year") || new Date().getFullYear().toString();
    const clientId = searchParams.get("clientId");

    console.log("GET /api/sales/summary - パラメータ:", { year, clientId });

    // フィルタ条件を構築
    const where: {
      userId: string;
      date: { gte: Date; lte: Date };
      clientId?: string;
    } = {
      userId,
      date: {
        gte: new Date(`${year}-01-01`),
        lte: new Date(`${year}-12-31`),
      },
    };

    if (clientId) {
      where.clientId = clientId;
    }

    // 月別集計
    let monthlySales;
    if (clientId) {
      monthlySales = await prisma.$queryRaw`
        SELECT 
          EXTRACT(MONTH FROM date) as month,
          SUM(amount) as total_amount,
          COUNT(*) as count
        FROM sales 
        WHERE "userId" = ${userId}
          AND date >= ${new Date(`${year}-01-01`)}
          AND date <= ${new Date(`${year}-12-31`)}
          AND "clientId" = ${clientId}
        GROUP BY EXTRACT(MONTH FROM date)
        ORDER BY month
      `;
    } else {
      monthlySales = await prisma.$queryRaw`
        SELECT 
          EXTRACT(MONTH FROM date) as month,
          SUM(amount) as total_amount,
          COUNT(*) as count
        FROM sales 
        WHERE "userId" = ${userId}
          AND date >= ${new Date(`${year}-01-01`)}
          AND date <= ${new Date(`${year}-12-31`)}
        GROUP BY EXTRACT(MONTH FROM date)
        ORDER BY month
      `;
    }

    // 年別集計（過去5年）
    let yearlySales;
    if (clientId) {
      yearlySales = await prisma.$queryRaw`
        SELECT 
          EXTRACT(YEAR FROM date) as year,
          SUM(amount) as total_amount,
          COUNT(*) as count
        FROM sales 
        WHERE "userId" = ${userId}
          AND "clientId" = ${clientId}
        GROUP BY EXTRACT(YEAR FROM date)
        ORDER BY year DESC
        LIMIT 5
      `;
    } else {
      yearlySales = await prisma.$queryRaw`
        SELECT 
          EXTRACT(YEAR FROM date) as year,
          SUM(amount) as total_amount,
          COUNT(*) as count
        FROM sales 
        WHERE "userId" = ${userId}
        GROUP BY EXTRACT(YEAR FROM date)
        ORDER BY year DESC
        LIMIT 5
      `;
    }

    // BigIntをNumberに変換する関数
    const convertBigIntToNumber = (data: SalesSummary[]): SalesSummary[] => {
      return data.map((item) => ({
        ...item,
        month: item.month !== undefined ? Number(item.month) : undefined,
        year: item.year !== undefined ? Number(item.year) : undefined,
        total_amount: Number(item.total_amount),
        count: Number(item.count),
      }));
    };

    // 集計結果をNumber型に変換
    const convertedMonthlySales = convertBigIntToNumber(
      monthlySales as SalesSummary[]
    );
    const convertedYearlySales = convertBigIntToNumber(
      yearlySales as SalesSummary[]
    );

    // 今年の総売上
    const currentYearTotal = await prisma.sales.aggregate({
      where: {
        userId,
        date: {
          gte: new Date(`${year}-01-01`),
          lte: new Date(`${year}-12-31`),
        },
        ...(clientId && { clientId }),
      },
      _sum: {
        amount: true,
      },
      _count: true,
    });

    // 今月の売上
    const currentMonth = new Date().getMonth() + 1;
    const currentMonthTotal = await prisma.sales.aggregate({
      where: {
        userId,
        date: {
          gte: new Date(
            `${year}-${currentMonth.toString().padStart(2, "0")}-01`
          ),
          lte: new Date(
            `${year}-${currentMonth.toString().padStart(2, "0")}-31`
          ),
        },
        ...(clientId && { clientId }),
      },
      _sum: {
        amount: true,
      },
      _count: true,
    });

    const summary = {
      currentYear: {
        total: Number(currentYearTotal._sum.amount) || 0,
        count: currentYearTotal._count,
      },
      currentMonth: {
        total: Number(currentMonthTotal._sum.amount) || 0,
        count: currentMonthTotal._count,
      },
      monthly: convertedMonthlySales,
      yearly: convertedYearlySales,
    };

    console.log("GET /api/sales/summary - 取得成功");
    return NextResponse.json(summary);
  } catch (error) {
    console.error("GET /api/sales/summary - エラー:", error);
    return NextResponse.json(
      { error: "売上集計の取得に失敗しました" },
      { status: 500 }
    );
  }
}
