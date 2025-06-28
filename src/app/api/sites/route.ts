import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient() as any;

// GET: 現場一覧取得
export async function GET(req: NextRequest) {
  const { userId } = await auth();
  console.log('API: userId from auth:', userId);
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    console.log('API: Fetching sites for userId:', userId);
    const sites = await prisma.site.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    console.log('API: Found sites:', sites);
    return NextResponse.json(sites);
  } catch (e) {
    console.error('API: Error fetching sites:', e);
    return NextResponse.json({ error: '一覧取得に失敗しました' }, { status: 500 });
  }
}

// POST: 現場新規作成
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const body = await req.json();
    console.log('API: Creating site with data:', body);
    const { name, contractor, postalCode, prefecture, city, address, startDate, employeeNames, notes } = body;
    if (!name || !contractor || !startDate) {
      return NextResponse.json({ error: '必須項目が不足しています' }, { status: 400 });
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
    console.log('API: Created site:', site);
    return NextResponse.json(site, { status: 201 });
  } catch (e) {
    console.error('API: Error creating site:', e);
    return NextResponse.json({ error: '作成に失敗しました' }, { status: 500 });
  }
}
