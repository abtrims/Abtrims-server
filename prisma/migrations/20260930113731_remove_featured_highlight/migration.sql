-- Drop FEATURED from products first so the enum value can be removed
UPDATE "products" SET "highlights" = array_remove("highlights", 'FEATURED');

-- Recreate the enum without FEATURED (Postgres can't drop an enum value in place)
ALTER TYPE "ProductHighlight" RENAME TO "ProductHighlight_old";
CREATE TYPE "ProductHighlight" AS ENUM ('NEW_ARRIVAL', 'TRENDING', 'TOP_SELLING');
ALTER TABLE "products" ALTER COLUMN "highlights" DROP DEFAULT;
ALTER TABLE "products" ALTER COLUMN "highlights" TYPE "ProductHighlight"[] USING ("highlights"::text[]::"ProductHighlight"[]);
ALTER TABLE "products" ALTER COLUMN "highlights" SET DEFAULT ARRAY[]::"ProductHighlight"[];
DROP TYPE "ProductHighlight_old";
