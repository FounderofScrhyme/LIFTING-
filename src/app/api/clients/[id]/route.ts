import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import { UpdateClientInput } from "@/types/client";

// GET: 特定の取引先を取得
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

    const client = await prisma.client.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!client) {
      return NextResponse.json(
        { error: "取引先が見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(client);
  } catch (error) {
    console.error("取引先取得エラー:", error);
    return NextResponse.json(
      { error: "取引先の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// PUT: 取引先を更新
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

    const body: UpdateClientInput = await request.json();

    // 取引先が存在するかチェック
    const existingClient = await prisma.client.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingClient) {
      return NextResponse.json(
        { error: "取引先が見つかりません" },
        { status: 404 }
      );
    }

    const updatedClient = await prisma.client.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedClient);
  } catch (error) {
    console.error("取引先更新エラー:", error);
    return NextResponse.json(
      { error: "取引先の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// DELETE: 取引先を削除
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

    // 取引先が存在するかチェック
    const existingClient = await prisma.client.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingClient) {
      return NextResponse.json(
        { error: "取引先が見つかりません" },
        { status: 404 }
      );
    }

    await prisma.client.delete({
      where: { id },
    });

    return NextResponse.json({ message: "取引先を削除しました" });
  } catch (error) {
    console.error("取引先削除エラー:", error);
    return NextResponse.json(
      { error: "取引先の削除に失敗しました" },
      { status: 500 }
    );
  }
}
