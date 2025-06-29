import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

// GET: 従業員の現場一覧を取得
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

    const sites = await prisma.site.findMany({
      where: {
        siteEmployees: {
          some: {
            employeeId: id,
            userId,
          },
        },
      },
    });

    return NextResponse.json(sites);
  } catch (error) {
    console.error("従業員現場取得エラー:", error);
    return NextResponse.json(
      { error: "従業員の現場取得に失敗しました" },
      { status: 500 }
    );
  }
}
