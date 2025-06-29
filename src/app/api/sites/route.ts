import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: 現場一覧取得
export async function GET(req: NextRequest) {
  const { userId } = await auth();
  console.log("API: userId from auth:", userId);
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    console.log("API: Fetching sites for userId:", userId);

    // クエリパラメータから年月を取得
    const { searchParams } = new URL(req.url);
    const year = searchParams.get("year");
    const month = searchParams.get("month");

    const whereClause: {
      userId: string;
      startDate?: {
        gte: Date;
        lte: Date;
      };
    } = { userId };

    // 年月が指定されている場合、その月の現場のみをフィルタリング
    if (year && month) {
      const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      const endDate = new Date(parseInt(year), parseInt(month), 0, 23, 59, 59);

      whereClause.startDate = {
        gte: startDate,
        lte: endDate,
      };
    }

    const sites = await prisma.site.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    console.log("API: Found sites:", sites);
    return NextResponse.json(sites);
  } catch (e) {
    console.error("API: Error fetching sites:", e);
    return NextResponse.json(
      { error: "一覧取得に失敗しました" },
      { status: 500 }
    );
  }
}

// POST: 現場新規作成
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    console.log("API: Creating site with data:", body);
    const {
      name,
      contractor,
      postalCode,
      prefecture,
      city,
      address,
      startDate,
      employeeNames,
      notes,
    } = body;
    if (!name || !contractor || !startDate) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }
    // 現場作成
    const site = await prisma.site.create({
      data: {
        name,
        contractor,
        postalCode,
        prefecture,
        city,
        address,
        startDate: new Date(startDate),
        employeeNames,
        notes,
        userId,
      },
    });
    console.log("API: Created site:", site);
    return NextResponse.json(site, { status: 201 });
  } catch (e) {
    console.error("API: Error creating site:", e);
    return NextResponse.json({ error: "作成に失敗しました" }, { status: 500 });
  }
}
