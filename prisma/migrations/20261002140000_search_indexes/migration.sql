-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateIndex
CREATE INDEX "orders_orderNumber_trgm_idx" ON "orders" USING GIN ("orderNumber" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "orders_phone_trgm_idx" ON "orders" USING GIN ("phone" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "orders_fullName_trgm_idx" ON "orders" USING GIN ("fullName" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "product_variants_sku_trgm_idx" ON "product_variants" USING GIN ("sku" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "products_status_createdAt_idx" ON "products"("status", "createdAt");

-- CreateIndex
CREATE INDEX "products_highlights_idx" ON "products" USING GIN ("highlights");

-- CreateIndex
CREATE INDEX "products_name_trgm_idx" ON "products" USING GIN ("name" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "products_sku_trgm_idx" ON "products" USING GIN ("sku" gin_trgm_ops);
