-- AlterEnum
ALTER TYPE "ProductHighlight" ADD VALUE 'OUR_SERVICE';

-- AlterTable
ALTER TABLE "home_promos" ADD COLUMN     "productsBannerEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "productsBannerImage" TEXT,
ADD COLUMN     "productsBannerLink" TEXT;

-- CreateTable
CREATE TABLE "testimonials" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT,
    "content" TEXT NOT NULL,
    "avatar" TEXT,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);
