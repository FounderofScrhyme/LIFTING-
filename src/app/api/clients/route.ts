import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { CreateClientInput } from '@/types/client';

// GET: 取引先一覧を取得
export async function GET() {
  try {
    console.log('GET /api/clients - 開始');
    const { userId } = await auth();
    
    if (!userId) {
      console.log('GET /api/clients - 認証エラー');
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    console.log('GET /api/clients - ユーザーID:', userId);
    const clients = await prisma.client.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    console.log('GET /api/clients - 取得成功:', clients.length, '件');
    return NextResponse.json(clients);
  } catch (error) {
    console.error('GET /api/clients - エラー:', error);
    return NextResponse.json(
      { error: '取引先一覧の取得に失敗しました' },
      { status: 500 }
    );
  }
}

// POST: 新規取引先を作成
export async function POST(request: NextRequest) {
  try {
    console.log('POST /api/clients - 開始');
    const { userId } = await auth();
    
    if (!userId) {
      console.log('POST /api/clients - 認証エラー');
      return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
    }

    const body: CreateClientInput = await request.json();
    console.log('POST /api/clients - リクエストボディ:', body);
    
    // 必須フィールドのバリデーション
    if (!body.name) {
      console.log('POST /api/clients - バリデーションエラー: 取引先名が不足');
      return NextResponse.json(
        { error: '取引先名は必須です' },
        { status: 400 }
      );
    }

    const client = await prisma.client.create({
      data: {
        ...body,
        userId,
      },
    });

    console.log('POST /api/clients - 作成成功:', client.id);
    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error('POST /api/clients - エラー:', error);
    return NextResponse.json(
      { error: '取引先の作成に失敗しました' },
      { status: 500 }
    );
  }
}
