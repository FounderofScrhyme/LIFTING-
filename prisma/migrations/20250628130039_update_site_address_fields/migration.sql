-- AlterTable
ALTER TABLE "sites" ADD COLUMN     "city" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "prefecture" TEXT,
ALTER COLUMN "address" DROP NOT NULL;
