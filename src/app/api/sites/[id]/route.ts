import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient() as any;

// GET: 詳細取得
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = params;
  try {
    const site = await prisma.site.findUnique({
      where: { id, userId },
    });
    if (!site) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(site);
  } catch (e) {
    return NextResponse.json({ error: '取得に失敗しました' }, { status: 500 });
  }
}

// PUT: 編集
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = params;
  try {
    const body = await req.json();
    const { name, contractor, postalCode, prefecture, city, address, startDate, employeeNames, notes, status } = body;
    if (!name || !contractor || !startDate) {
      return NextResponse.json({ error: '必須項目が不足しています' }, { status: 400 });
    }
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
        startDate: new Date(startDate),
        employeeNames,
        notes,
        status
      }
    });
    return NextResponse.json(site);
  } catch (e) {
    return NextResponse.json({ error: '更新に失敗しました' }, { status: 500 });
  }
}

// DELETE: 削除
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = params;
  try {
    await prisma.site.delete({ where: { id, userId } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: '削除に失敗しました' }, { status: 500 });
  }
} 