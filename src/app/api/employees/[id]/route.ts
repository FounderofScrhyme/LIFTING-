import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import { UpdateEmployeeInput } from "@/types/employee";

// GET: 特定の従業員を取得
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

    const employee = await prisma.employee.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!employee) {
      return NextResponse.json(
        { error: "従業員が見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(employee);
  } catch (error) {
    console.error("従業員取得エラー:", error);
    return NextResponse.json(
      { error: "従業員の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// PUT: 従業員を更新
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

    const body: UpdateEmployeeInput = await request.json();

    // 従業員が存在するかチェック
    const existingEmployee = await prisma.employee.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingEmployee) {
      return NextResponse.json(
        { error: "従業員が見つかりません" },
        { status: 404 }
      );
    }

    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error("従業員更新エラー:", error);
    return NextResponse.json(
      { error: "従業員の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// DELETE: 従業員を削除
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

    // 従業員が存在するかチェック
    const existingEmployee = await prisma.employee.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingEmployee) {
      return NextResponse.json(
        { error: "従業員が見つかりません" },
        { status: 404 }
      );
    }

    await prisma.employee.delete({
      where: { id },
    });

    return NextResponse.json({ message: "従業員を削除しました" });
  } catch (error) {
    console.error("従業員削除エラー:", error);
    return NextResponse.json(
      { error: "従業員の削除に失敗しました" },
      { status: 500 }
    );
  }
}
