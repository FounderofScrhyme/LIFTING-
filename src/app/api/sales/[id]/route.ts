import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import { CreateSalesInput } from "@/types/sales";

// GET: 特定の売上を取得
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    const { id } = await params;

    if (!userId) {
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    const sales = await prisma.sales.findFirst({
      where: {
        id,
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
      return NextResponse.json(
        { error: "売上が見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(sales);
  } catch (error) {
    console.error("売上取得エラー:", error);
    return NextResponse.json(
      { error: "売上の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// PUT: 売上を更新
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    const { id } = await params;

    if (!userId) {
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    const body: CreateSalesInput = await request.json();

    // 売上が存在するかチェック
    const existingSales = await prisma.sales.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingSales) {
      return NextResponse.json(
        { error: "売上が見つかりません" },
        { status: 404 }
      );
    }

    // バリデーション
    if (!body.amount || body.amount <= 0) {
      console.log("PUT /api/sales/[id] - バリデーションエラー: 売上額が無効");
      return NextResponse.json(
        { error: "有効な売上額を入力してください" },
        { status: 400 }
      );
    }

    if (!body.clientId) {
      console.log(
        "PUT /api/sales/[id] - バリデーションエラー: 取引先が選択されていません"
      );
      return NextResponse.json(
        { error: "取引先を選択してください" },
        { status: 400 }
      );
    }

    if (!body.date) {
      console.log(
        "PUT /api/sales/[id] - バリデーションエラー: 売上日が設定されていません"
      );
      return NextResponse.json(
        { error: "売上日を設定してください" },
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
      console.log("PUT /api/sales/[id] - エラー: 取引先が見つかりません");
      return NextResponse.json(
        { error: "選択された取引先が見つかりません" },
        { status: 404 }
      );
    }

    const updatedSales = await prisma.sales.update({
      where: {
        id,
      },
      data: {
        amount: body.amount,
        date: new Date(body.date),
        description: body.description,
        category: body.category,
        status: body.status || "COMPLETED",
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

    return NextResponse.json(updatedSales);
  } catch (error) {
    console.error("売上更新エラー:", error);
    return NextResponse.json(
      { error: "売上の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// DELETE: 売上を削除
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    const { id } = await params;

    if (!userId) {
      return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
    }

    // 売上が存在するかチェック
    const existingSales = await prisma.sales.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingSales) {
      return NextResponse.json(
        { error: "売上が見つかりません" },
        { status: 404 }
      );
    }

    await prisma.sales.delete({
      where: { id },
    });

    return NextResponse.json({ message: "売上を削除しました" });
  } catch (error) {
    console.error("売上削除エラー:", error);
    return NextResponse.json(
      { error: "売上の削除に失敗しました" },
      { status: 500 }
    );
  }
}
