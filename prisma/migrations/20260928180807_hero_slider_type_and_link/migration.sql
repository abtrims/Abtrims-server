-- CreateEnum
CREATE TYPE "HeroSliderType" AS ENUM ('SLIDE', 'BANNER');

-- AlterTable
ALTER TABLE "hero_sliders" ADD COLUMN     "link" TEXT,
ADD COLUMN     "type" "HeroSliderType" NOT NULL DEFAULT 'SLIDE';
