-- AlterEnum
ALTER TYPE "CourierProvider" ADD VALUE 'REDX';

-- AlterTable
ALTER TABLE "courier_settings" ADD COLUMN     "redxAccessToken" TEXT,
ADD COLUMN     "redxEnabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "redxMode" TEXT NOT NULL DEFAULT 'SANDBOX',
ADD COLUMN     "redxPickupStoreId" TEXT,
ADD COLUMN     "redxWebhookToken" TEXT;
