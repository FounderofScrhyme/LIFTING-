import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';

// GET: 売上の期間別集計を取得
export async function GET(request: NextRequest) {
  try {
    console.log('GET /api/sales/summary - 開始');
    const { userId } = await auth();
    
    if (!userId) {
      console.log('GET /api/sales/summary - 認証エラー');
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const year = searchParams.get('year') || new Date().getFullYear().toString();
    const clientId = searchParams.get('clientId');

    console.log('GET /api/sales/summary - パラメータ:', { year, clientId });

    // フィルタ条件を構築
    const where: any = { 
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
    const monthlySales = await prisma.$queryRaw`
      SELECT 
        EXTRACT(MONTH FROM date) as month,
        SUM(amount) as total_amount,
        COUNT(*) as count
      FROM sales 
      WHERE "userId" = ${userId}
        AND date >= ${new Date(`${year}-01-01`)}
        AND date <= ${new Date(`${year}-12-31`)}
        ${clientId ? `AND "clientId" = ${clientId}` : ''}
      GROUP BY EXTRACT(MONTH FROM date)
      ORDER BY month
    `;

    // 年別集計（過去5年）
    const yearlySales = await prisma.$queryRaw`
      SELECT 
        EXTRACT(YEAR FROM date) as year,
        SUM(amount) as total_amount,
        COUNT(*) as count
      FROM sales 
      WHERE "userId" = ${userId}
        ${clientId ? `AND "clientId" = ${clientId}` : ''}
      GROUP BY EXTRACT(YEAR FROM date)
      ORDER BY year DESC
      LIMIT 5
    `;

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
          gte: new Date(`${year}-${currentMonth.toString().padStart(2, '0')}-01`),
          lte: new Date(`${year}-${currentMonth.toString().padStart(2, '0')}-31`),
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
        total: currentYearTotal._sum.amount || 0,
        count: currentYearTotal._count,
      },
      currentMonth: {
        total: currentMonthTotal._sum.amount || 0,
        count: currentMonthTotal._count,
      },
      monthly: monthlySales,
      yearly: yearlySales,
    };

    console.log('GET /api/sales/summary - 取得成功');
    return NextResponse.json(summary);
  } catch (error) {
    console.error('GET /api/sales/summary - エラー:', error);
    return NextResponse.json(
      { error: '売上集計の取得に失敗しました' },
      { status: 500 }
    );
  }
} 