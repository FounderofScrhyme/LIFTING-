import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

// GET: 詳細取得
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

    const site = await prisma.site.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!site) {
      return NextResponse.json(
        { error: "現場が見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(site);
  } catch (error) {
    console.error("現場取得エラー:", error);
    return NextResponse.json(
      { error: "現場の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// PUT: 編集
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

    const body = await request.json();
    const {
      name,
      contractor,
      postalCode,
      prefecture,
      city,
      address,
      date,
      startTime,
      employeeNames,
      notes,
      status,
    } = body;
    if (!name || !contractor || !date || !startTime) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    // 日付と時刻を適切に処理
    const dateObj = new Date(date);
    const timeObj = new Date(`2000-01-01T${startTime}`);

    // 日付と時刻を組み合わせて開始時刻を作成
    const combinedDateTime = new Date(dateObj);
    combinedDateTime.setHours(timeObj.getHours(), timeObj.getMinutes(), 0, 0);

    // 現場情報更新
    const site = await prisma.site.update({
      where: { id, userId },
      data: {
        name,
        contractor,
        postalCode,
        prefecture,
        city,
        address,
        date: dateObj,
        startTime: combinedDateTime,
        employeeNames,
        notes,
        status,
      },
    });
    return NextResponse.json(site);
  } catch (error) {
    console.error("現場更新エラー:", error);
    return NextResponse.json(
      { error: "現場の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// DELETE: 削除
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

    // 現場が存在するかチェック
    const existingSite = await prisma.site.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingSite) {
      return NextResponse.json(
        { error: "現場が見つかりません" },
        { status: 404 }
      );
    }

    await prisma.site.delete({
      where: { id },
    });

    return NextResponse.json({ message: "現場を削除しました" });
  } catch (error) {
    console.error("現場削除エラー:", error);
    return NextResponse.json(
      { error: "現場の削除に失敗しました" },
      { status: 500 }
    );
  }
}
