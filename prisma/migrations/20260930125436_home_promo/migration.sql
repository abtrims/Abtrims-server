-- CreateTable
CREATE TABLE "home_promos" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "tickerText" TEXT,
    "tickerEnabled" BOOLEAN NOT NULL DEFAULT true,
    "bannerImage" TEXT,
    "bannerLink" TEXT,
    "bannerEnabled" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "home_promos_pkey" PRIMARY KEY ("id")
);
