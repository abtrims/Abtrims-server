-- CreateEnum
CREATE TYPE "ProductHighlight" AS ENUM ('FEATURED', 'NEW_ARRIVAL', 'TRENDING', 'TOP_SELLING');

-- AlterTable: add the new list column
ALTER TABLE "products" ADD COLUMN "highlights" "ProductHighlight"[] DEFAULT ARRAY[]::"ProductHighlight"[];

-- Keep existing featured products featured
UPDATE "products" SET "highlights" = ARRAY['FEATURED']::"ProductHighlight"[] WHERE "isFeatured" = true;

-- AlterTable: drop the old flag
ALTER TABLE "products" DROP COLUMN "isFeatured";
