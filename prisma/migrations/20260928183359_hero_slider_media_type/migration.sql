-- CreateEnum
CREATE TYPE "HeroMediaType" AS ENUM ('IMAGE', 'VIDEO');

-- AlterTable
ALTER TABLE "hero_sliders" ADD COLUMN     "mediaType" "HeroMediaType" NOT NULL DEFAULT 'IMAGE';
