import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { CreateSalesInput } from '@/types/sales';

// GET: 特定の売上を取得
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log('GET /api/sales/[id] - 開始:', params.id);
    const { userId } = await auth();
    
    if (!userId) {
      console.log('GET /api/sales/[id] - 認証エラー');
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const sales = await prisma.sales.findFirst({
      where: {
        id: params.id,
        userId,
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            companyName: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    if (!sales) {
      console.log('GET /api/sales/[id] - 売上が見つかりません');
      return NextResponse.json({ error: '売上が見つかりません' }, { status: 404 });
    }

    console.log('GET /api/sales/[id] - 取得成功');
    return NextResponse.json(sales);
  } catch (error) {
    console.error('GET /api/sales/[id] - エラー:', error);
    return NextResponse.json(
      { error: '売上の取得に失敗しました' },
      { status: 500 }
    );
  }
}

// PUT: 売上を更新
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log('PUT /api/sales/[id] - 開始:', params.id);
    const { userId } = await auth();
    
    if (!userId) {
      console.log('PUT /api/sales/[id] - 認証エラー');
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const body: CreateSalesInput = await request.json();
    console.log('PUT /api/sales/[id] - リクエストボディ:', body);

    // 売上の存在確認
    const existingSales = await prisma.sales.findFirst({
      where: {
        id: params.id,
        userId,
      },
    });

    if (!existingSales) {
      console.log('PUT /api/sales/[id] - 売上が見つかりません');
      return NextResponse.json({ error: '売上が見つかりません' }, { status: 404 });
    }

    // バリデーション
    if (!body.amount || body.amount <= 0) {
      console.log('PUT /api/sales/[id] - バリデーションエラー: 売上額が無効');
      return NextResponse.json(
        { error: '有効な売上額を入力してください' },
        { status: 400 }
      );
    }

    if (!body.clientId) {
      console.log('PUT /api/sales/[id] - バリデーションエラー: 取引先が選択されていません');
      return NextResponse.json(
        { error: '取引先を選択してください' },
        { status: 400 }
      );
    }

    if (!body.date) {
      console.log('PUT /api/sales/[id] - バリデーションエラー: 売上日が設定されていません');
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
      console.log('PUT /api/sales/[id] - エラー: 取引先が見つかりません');
      return NextResponse.json(
        { error: '選択された取引先が見つかりません' },
        { status: 404 }
      );
    }

    const updatedSales = await prisma.sales.update({
      where: {
        id: params.id,
      },
      data: {
        amount: body.amount,
        date: new Date(body.date),
        description: body.description,
        category: body.category,
        status: body.status || 'COMPLETED',
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

    console.log('PUT /api/sales/[id] - 更新成功');
    return NextResponse.json(updatedSales);
  } catch (error) {
    console.error('PUT /api/sales/[id] - エラー:', error);
    return NextResponse.json(
      { error: '売上の更新に失敗しました' },
      { status: 500 }
    );
  }
}

// DELETE: 売上を削除
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log('DELETE /api/sales/[id] - 開始:', params.id);
    const { userId } = await auth();
    
    if (!userId) {
      console.log('DELETE /api/sales/[id] - 認証エラー');
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    // 売上の存在確認
    const existingSales = await prisma.sales.findFirst({
      where: {
        id: params.id,
        userId,
      },
    });

    if (!existingSales) {
      console.log('DELETE /api/sales/[id] - 売上が見つかりません');
      return NextResponse.json({ error: '売上が見つかりません' }, { status: 404 });
    }

    // 売上を削除
    await prisma.sales.delete({
      where: {
        id: params.id,
      },
    });

    console.log('DELETE /api/sales/[id] - 削除成功');
    return NextResponse.json({ message: '売上を削除しました' });
  } catch (error) {
    console.error('DELETE /api/sales/[id] - エラー:', error);
    return NextResponse.json(
      { error: '売上の削除に失敗しました' },
      { status: 500 }
    );
  }
} 