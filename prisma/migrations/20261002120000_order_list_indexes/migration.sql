-- CreateIndex
CREATE INDEX "orders_orderType_createdAt_idx" ON "orders"("orderType", "createdAt");

-- CreateIndex
CREATE INDEX "orders_createdAt_idx" ON "orders"("createdAt");
