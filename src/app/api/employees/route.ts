import { prisma } from "@/lib/db";
import { CreateEmployeeInput } from "@/types/employee";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try{
        console.log("GET /api/employees - 開始");
        const {userId} = await auth();

        if(!userId) {
            console.log("GET /api/employees - 認証エラー")
            return NextResponse.json({error: "ログインが必要です"}, {status: 401})
        }
        console.log("GET /api/employees - ユーザー認証成功:", userId)
        const employees = await prisma.employee.findMany({
            where: {userId},
            orderBy: {createdAt: "asc"}
        });

        console.log("GET /api/employees - 従業員取得成功:", employees.length, "人");
        return NextResponse.json(employees)
    } catch(error) {
        console.error("GET /api/employees - エラー:", error);
        return NextResponse.json(
            {error: "従業員一覧の取得に失敗しました"},
            {status: 500}       
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        console.log("POST /api/employees - 開始");
        const {userId} = await auth();

        if (!userId) {
            console.log('POST /api/employees - 認証エラー');
            return NextResponse.json({ error: '認証が必要です' }, { status: 401 });
        }
      
        const body: CreateEmployeeInput = await request.json();
        console.log('POST /api/employees - リクエストボディ:', body);

        // バリデーション
        if (!body.name || body.name.trim() === '') {
            console.log('POST /api/employees - バリデーションエラー: 名前は必須です');
            return NextResponse.json(
                { error: '名前は必須です' },
                { status: 400 }
            );
        }

        // 数値フィールドのバリデーション
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

        const employee = await prisma.employee.create({
            data: {
                ...body,
                userId,
            }
        });

        console.log("POST /api/employees - 従業員登録成功:", employee.id);
        return NextResponse.json(employee, {status: 201});
    } catch (error) {
        console.error("POST /api/employees - エラー:", error);
        return NextResponse.json(
            {error: "従業員の登録に失敗しました"},
            {status: 500}
        )
    }
}