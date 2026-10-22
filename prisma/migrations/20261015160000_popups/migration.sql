-- CreateTable
CREATE TABLE "popups" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "image" TEXT NOT NULL,
    "link" TEXT,
    "delaySeconds" INTEGER NOT NULL DEFAULT 3,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "popups_pkey" PRIMARY KEY ("id")
);
