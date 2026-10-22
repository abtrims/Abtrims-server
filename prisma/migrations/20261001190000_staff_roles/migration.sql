-- AlterTable
ALTER TABLE "user" ADD COLUMN     "staffRoleId" TEXT;

-- CreateTable
CREATE TABLE "staff_roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "permissions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "staff_roles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "staff_roles_name_key" ON "staff_roles"("name");

-- CreateIndex
CREATE INDEX "user_staffRoleId_idx" ON "user"("staffRoleId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_staffRoleId_fkey" FOREIGN KEY ("staffRoleId") REFERENCES "staff_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
