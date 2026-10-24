import z from "zod";
import { bdMobilePhoneSchema } from "../../utils/bdPhone";

export const createOrderZodSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().trim().max(200).optional(),
  phone: bdMobilePhoneSchema,
  email: z
    .union([z.string().trim().email("Enter a valid email address"), z.literal("")])
    .optional(),
  address: z.string().min(1, "Address is required"),
  district: z.string().min(1, "District is required"),
  notes: z.string().optional(),
  items: z.array(
    z.object({
      productId: z.string().uuid(),
      productVariantId: z.string().uuid().optional().nullable(),
      quantity: z.number().int().positive(),
    })
  ).optional(),
  couponId: z.string().uuid().optional().nullable(),
  discountAmount: z.number().optional(),
  shippingFee: z.number().optional(),
  checkoutSessionToken: z.string().optional(),
  paymentMethod: z.enum(["COD", "SSLCOMMERZ", "BKASH"]).optional(),
});

// Checkout without an account: there is no cart to fall back on, so the
// items must always be sent
export const createGuestOrderZodSchema = createOrderZodSchema.extend({
  items: createOrderZodSchema.shape.items.unwrap().min(1, "No items provided for order"),
});

export const updateOrderStatusZodSchema = z.object({
  status: z.enum(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"]),
});

export const updateOrderDiscountZodSchema = z.object({
  discountAmount: z.number().min(0, "Discount cannot be negative"),
});

export const updatePaymentStatusZodSchema = z.object({
  paymentStatus: z.enum(["PENDING", "PAID", "FAILED", "REFUNDED"]),
});

export const assignCourierZodSchema = z
  .object({
    provider: z.enum(["PATHAO", "STEADFAST", "REDX"]),
    // RedX only: the delivery area picked from RedX's area list
    redxAreaId: z.number().int().positive().optional(),
    redxAreaName: z.string().trim().min(1).optional(),
  })
  .refine((v) => v.provider !== "REDX" || (v.redxAreaId && v.redxAreaName), {
    message: "Select the RedX delivery area",
  });

export const trackOrderZodSchema = z.object({
  orderNumber: z.string().min(1, "Order number is required"),
  phone: z.string().min(1, "Phone number is required"),
});

export const updateOrderItemZodSchema = z
  .object({
    status: z.enum(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"]).optional(),
    productId: z.string().min(1).optional(),
    productVariantId: z.string().nullable().optional(),
    quantity: z.number().int().positive().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided",
  });
