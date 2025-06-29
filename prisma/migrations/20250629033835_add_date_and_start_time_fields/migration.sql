/*
  Warnings:

  - You are about to drop the column `startDate` on the `sites` table. All the data in the column will be lost.
  - Added the required column `date` to the `sites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `sites` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- まず新しいカラムを追加（NULL許可）
ALTER TABLE "sites" ADD COLUMN "date" TIMESTAMP(3),
ADD COLUMN "startTime" TIMESTAMP(3);

-- 既存のstartDateの値を新しいカラムにコピー
UPDATE "sites" SET 
  "date" = "startDate",
  "startTime" = "startDate";

-- カラムをNOT NULLに変更
ALTER TABLE "sites" ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "startTime" SET NOT NULL;

-- 古いstartDateカラムを削除
ALTER TABLE "sites" DROP COLUMN "startDate";
