import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { CreateSalesInput } from '@/types/sales';

// GET: 売上一覧を取得（期間フィルタリング対応）
export async function GET(request: NextRequest) {
  try {
    console.log('GET /api/sales - 開始');
    const { userId } = await auth();
    
    if (!userId) {
      console.log('GET /api/sales - 認証エラー');
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const clientId = searchParams.get('clientId');

    console.log('GET /api/sales - フィルタ:', { startDate, endDate, clientId });

    // フィルタ条件を構築
    const where: any = { userId };
    
    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }
    
    if (clientId) {
      where.clientId = clientId;
    }

    const sales = await prisma.sales.findMany({
      where,
      include: {
        client: {
          select: {
            id: true,
            name: true,
            companyName: true,
          },
        },
      },
      orderBy: { date: 'desc' },
    });

    console.log('GET /api/sales - 取得成功:', sales.length, '件');
    return NextResponse.json(sales);
  } catch (error) {
    console.error('GET /api/sales - エラー:', error);
    return NextResponse.json(
      { error: '売上一覧の取得に失敗しました' },
      { status: 500 }
    );
  }
}

// POST: 新規売上を作成
export async function POST(request: NextRequest) {
  try {
    console.log('POST /api/sales - 開始');
    const { userId } = await auth();
    
    if (!userId) {
      console.log('POST /api/sales - 認証エラー');
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const body: CreateSalesInput = await request.json();
    console.log('POST /api/sales - リクエストボディ:', body);
    
    // 必須フィールドのバリデーション
    if (!body.amount || body.amount <= 0) {
      console.log('POST /api/sales - バリデーションエラー: 売上額が無効');
      return NextResponse.json(
        { error: '有効な売上額を入力してください' },
        { status: 400 }
      );
    }

    if (!body.clientId) {
      console.log('POST /api/sales - バリデーションエラー: 取引先が選択されていません');
      return NextResponse.json(
        { error: '取引先を選択してください' },
        { status: 400 }
      );
    }

    if (!body.date) {
      console.log('POST /api/sales - バリデーションエラー: 売上日が設定されていません');
      return NextResponse.json(
        { error: '売上日を設定してください' },
        { status: 400 }
      );
    }

    // 取引先の存在確認
    const client = await prisma.client.findFirst({
      where: {
        id: body.clientId,
        userId,
      },
    });

    if (!client) {
      console.log('POST /api/sales - エラー: 取引先が見つかりません');
      return NextResponse.json(
        { error: '選択された取引先が見つかりません' },
        { status: 404 }
      );
    }

    const sales = await prisma.sales.create({
      data: {
        amount: body.amount,
        date: new Date(body.date),
        description: body.description,
        category: body.category,
        status: body.status || 'COMPLETED',
        userId,
        clientId: body.clientId,
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            companyName: true,
          },
        },
      },
    });

    console.log('POST /api/sales - 作成成功:', sales.id);
    return NextResponse.json(sales, { status: 201 });
  } catch (error) {
    console.error('POST /api/sales - エラー:', error);
    return NextResponse.json(
      { error: '売上の作成に失敗しました' },
      { status: 500 }
    );
  }
}
