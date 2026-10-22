-- CreateTable
CREATE TABLE "gtm_settings" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "isEnabled" BOOLEAN NOT NULL DEFAULT false,
    "containerId" TEXT,
    "scriptDomain" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gtm_settings_pkey" PRIMARY KEY ("id")
);
