# 現場管理アプリ

Next.js、Prisma、NeonDB を使用した現場管理アプリケーションです。

## 開発環境のセットアップ

1. 依存関係のインストール

```bash
npm install
```

2. 環境変数の設定
   `.env`ファイルを作成し、以下の環境変数を設定してください：

```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

3. データベースのセットアップ

```bash
npx prisma generate
npx prisma db push
```

4. 開発サーバーの起動

```bash
npm run dev
```

## Vercel へのデプロイ

### 1. 環境変数の設定

Vercel ダッシュボードで以下の環境変数を設定してください：

- `DATABASE_URL`: NeonDB の接続 URL
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk の公開キー
- `CLERK_SECRET_KEY`: Clerk のシークレットキー

### 2. NeonDB の設定

- NeonDB でプロジェクトを作成
- 接続 URL をコピーして`DATABASE_URL`に設定
- 必要に応じて SSL 設定を確認

### 3. デプロイ

```bash
vercel --prod
```

## データベースマイグレーション

本番環境でのマイグレーション実行：

```bash
npx prisma migrate deploy
```

## 利用可能なスクリプト

- `npm run dev`: 開発サーバー起動
- `npm run build`: プロダクションビルド
- `npm run start`: プロダクションサーバー起動
- `npm run lint`: ESLint 実行
- `npm run db:generate`: Prisma クライアント生成
- `npm run db:push`: データベーススキーマ同期
- `npm run db:migrate`: マイグレーション実行

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   L I F T I N G - 
 
 
