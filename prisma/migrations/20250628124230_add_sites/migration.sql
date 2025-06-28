-- CreateEnum
CREATE TYPE "PayrollStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PayrollPeriodType" AS ENUM ('WEEKLY', 'MONTHLY');

-- CreateEnum
CREATE TYPE "SiteStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "emergencyContactPerson" TEXT,
    "emergencyContactPhone" TEXT,
    "address" TEXT,
    "postalCode" TEXT,
    "city" TEXT,
    "prefecture" TEXT,
    "position" TEXT,
    "unitPay" INTEGER,
    "hourlyOvertimePay" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payrolls" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "periodType" "PayrollPeriodType" NOT NULL DEFAULT 'MONTHLY',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "workHours" INTEGER,
    "overtimeHours" INTEGER,
    "siteCount" INTEGER NOT NULL,
    "sitePay" INTEGER NOT NULL,
    "overtime" INTEGER NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "status" "PayrollStatus" NOT NULL DEFAULT 'PENDING',
    "paymentDate" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "payrolls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sites" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contractor" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "status" "SiteStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "sites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "site_employees" (
    "id" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "site_employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "site_employees_siteId_employeeId_key" ON "site_employees"("siteId", "employeeId");

-- AddForeignKey
ALTER TABLE "payrolls" ADD CONSTRAINT "payrolls_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site_employees" ADD CONSTRAINT "site_employees_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "sites"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "site_employees" ADD CONSTRAINT "site_employees_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
