-- AlterTable
ALTER TABLE "payment_settings" ADD COLUMN     "bkashAppKey" TEXT,
ADD COLUMN     "bkashAppSecret" TEXT,
ADD COLUMN     "bkashEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "bkashMode" TEXT NOT NULL DEFAULT 'SANDBOX',
ADD COLUMN     "bkashPassword" TEXT,
ADD COLUMN     "bkashUsername" TEXT;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "bkashPaymentId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "orders_bkashPaymentId_key" ON "orders"("bkashPaymentId");
