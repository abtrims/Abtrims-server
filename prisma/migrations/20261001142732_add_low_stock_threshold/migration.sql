-- AlterTable
ALTER TABLE "products" ADD COLUMN     "sizeChartId" TEXT;

-- CreateTable
CREATE TABLE "size_charts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "size_charts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "size_charts_name_key" ON "size_charts"("name");

-- CreateIndex
CREATE INDEX "products_sizeChartId_idx" ON "products"("sizeChartId");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_sizeChartId_fkey" FOREIGN KEY ("sizeChartId") REFERENCES "size_charts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
