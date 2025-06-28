import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { UpdateEmployeeInput } from '@/types/employee';

// GET: 特定の従業員を取得
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    try {
      console.log('GET /api/employees/[id] - 開始:', params.id);
      const { userId } = await auth();
      
      if (!userId) {
        console.log('GET /api/employees/[id] - 認証エラー');
        return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
      }
  
      const employee = await prisma.employee.findFirst({
        where: {
          id: params.id,
          userId,
        },
      });
  
      if (!employee) {
        console.log('GET /api/employees/[id] - 従業員が見つかりません');
        return NextResponse.json(
          { error: '従業員が見つかりません' },
          { status: 404 }
        );
      }
  
      console.log('GET /api/employees/[id] - 取得成功');
      return NextResponse.json(employee);
    } catch (error) {
      console.error('GET /api/employees/[id] - エラー:', error);
      return NextResponse.json(
        { error: '従業員の取得に失敗しました' },
        { status: 500 }
      );
    }
  }

// PUT: 従業員を更新
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    try {
      console.log('PUT /api/employees/[id] - 開始:', params.id);
      const { userId } = await auth();
      
      if (!userId) {
        console.log('PUT /api/employees/[id] - 認証エラー');
        return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
      }
  
      const body: UpdateEmployeeInput = await request.json();
      console.log('PUT /api/employees/[id] - リクエストボディ:', body);

      // 従業員が存在するかチェック
      const existingEmployee = await prisma.employee.findFirst({
        where: {
          id: params.id,
          userId,
        },
      });
  
      if (!existingEmployee) {
        console.log('PUT /api/employees/[id] - 従業員が見つかりません');
        return NextResponse.json(
          { error: '従業員が見つかりません' },
          { status: 404 }
        );
      }

      // バリデーション
      if (body.name !== undefined && (body.name.trim() === '')) {
        return NextResponse.json(
          { error: '名前は空にできません' },
          { status: 400 }
        );
      }

      if (body.unitPay !== undefined && body.unitPay < 0) {
        return NextResponse.json(
          { error: '現場単価は0以上である必要があります' },
          { status: 400 }
        );
      }

      if (body.hourlyOvertimePay !== undefined && body.hourlyOvertimePay < 0) {
        return NextResponse.json(
          { error: '時間単価は0以上である必要があります' },
          { status: 400 }
        );
      }

      // idフィールドを除外して更新
      const { id, ...updateData } = body;
  
      const updatedEmployee = await prisma.employee.update({
        where: { id: params.id },
        data: updateData,
      });
  
      console.log('PUT /api/employees/[id] - 更新成功');
      return NextResponse.json(updatedEmployee);
    } catch (error) {
      console.error('PUT /api/employees/[id] - エラー:', error);
      return NextResponse.json(
        { error: '従業員の更新に失敗しました' },
        { status: 500 }
      );
    }
  }

// DELETE: 従業員を削除
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    try {
      console.log('DELETE /api/employees/[id] - 開始:', params.id);
      const { userId } = await auth();
      
      if (!userId) {
        console.log('DELETE /api/employees/[id] - 認証エラー');
        return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
      }
  
      // 従業員が存在するかチェック
      const existingEmployee = await prisma.employee.findFirst({
        where: {
          id: params.id,
          userId,
        },
      });
  
      if (!existingEmployee) {
        console.log('DELETE /api/employees/[id] - 従業員が見つかりません');
        return NextResponse.json(
          { error: '従業員が見つかりません' },
          { status: 404 }
        );
      }
  
      await prisma.employee.delete({
        where: { id: params.id },
      });
  
      console.log('DELETE /api/employees/[id] - 削除成功');
      return NextResponse.json({ message: '従業員を削除しました' });
    } catch (error) {
      console.error('DELETE /api/employees/[id] - エラー:', error);
      return NextResponse.json(
        { error: '従業員の削除に失敗しました' },
        { status: 500 }
      );
    }
  } 