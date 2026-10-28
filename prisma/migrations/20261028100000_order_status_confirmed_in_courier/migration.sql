-- Rename order statuses: PROCESSING -> CONFIRMED, SHIPPED -> IN_COURIER
-- (existing orders and order items keep their status under the new name)
ALTER TYPE "OrderStatus" RENAME VALUE 'PROCESSING' TO 'CONFIRMED';
ALTER TYPE "OrderStatus" RENAME VALUE 'SHIPPED' TO 'IN_COURIER';
