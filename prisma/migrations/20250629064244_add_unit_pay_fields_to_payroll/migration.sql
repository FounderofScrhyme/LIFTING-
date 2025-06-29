/*
  Warnings:

  - Added the required column `hourlyOvertimePay` to the `payrolls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPay` to the `payrolls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payrolls" ADD COLUMN     "hourlyOvertimePay" INTEGER NOT NULL,
ADD COLUMN     "unitPay" INTEGER NOT NULL;
