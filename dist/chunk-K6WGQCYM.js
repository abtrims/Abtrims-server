var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d) {
        return Math.round(ms2 / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms2 / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms2 / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms2 / s) + "s";
      }
      return ms2 + "ms";
    }
    function fmtLong(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d) {
        return plural(ms2, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms2, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms2, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms2, msAbs, s, "second");
      }
      return ms2 + " ms";
    }
    function plural(ms2, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms2 / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// src/app/config/env.ts
import dotenv from "dotenv";
import status from "http-status";

// src/app/errorHelpers/AppError.ts
var AppError = class extends Error {
  statusCode;
  constructor(statusCode, message, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var AppError_default = AppError;

// src/app/config/env.ts
dotenv.config();
var loadEnvVariables = () => {
  const requiredEnvVariable = [
    "NODE_ENV",
    "PORT",
    "DATABASE_URL",
    "BETTER_AUTH_SECRET",
    "BETTER_AUTH_URL",
    "ACCESS_TOKEN_SECRET",
    "REFRESH_TOKEN_SECRET",
    "ACCESS_TOKEN_EXPIRES_IN",
    "REFRESH_TOKEN_EXPIRES_IN",
    "BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN",
    "BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE",
    "EMAIL_SENDER_SMTP_USER",
    "EMAIL_SENDER_SMTP_PASS",
    "EMAIL_SENDER_SMTP_HOST",
    "EMAIL_SENDER_SMTP_PORT",
    "EMAIL_SENDER_SMTP_FROM",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "GOOGLE_CALLBACK_URL",
    "FRONTEND_URL",
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
    "SUPER_ADMIN_EMAIL",
    "SUPER_ADMIN_PASSWORD",
    "SUPER_ADMIN_EMAIL",
    "SUPER_ADMIN_PASSWORD",
    "BDCOURIER_API_BASE_URL",
    "BDCOURIER_API_KEY"
  ];
  requiredEnvVariable.forEach((variable) => {
    if (!process.env[variable]) {
      throw new AppError_default(
        status.INTERNAL_SERVER_ERROR,
        `Environment variable ${variable} is required but not set in .env file.`
      );
    }
  });
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
    BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN: process.env.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN,
    BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE: process.env.BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE,
    EMAIL_SENDER: {
      SMTP_USER: process.env.EMAIL_SENDER_SMTP_USER,
      SMTP_PASS: process.env.EMAIL_SENDER_SMTP_PASS,
      SMTP_HOST: process.env.EMAIL_SENDER_SMTP_HOST,
      SMTP_PORT: process.env.EMAIL_SENDER_SMTP_PORT,
      SMTP_FROM: process.env.EMAIL_SENDER_SMTP_FROM
    },
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    FRONTEND_URL: process.env.FRONTEND_URL,
    CLOUDINARY: {
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    },
    SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL,
    SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD,
    RAG: {
      OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
      OPENROUTER_EMBEDDING_MODEL: process.env.OPENROUTER_EMBEDDING_MODEL,
      OPENROUTER_LLM_MODEL: process.env.OPENROUTER_LLM_MODEL,
      OPENROUTER_LLM_FALLBACK_MODELS: (process.env.OPENROUTER_LLM_FALLBACK_MODELS ?? "").split(",").map((m) => m.trim()).filter(Boolean)
    },
    BDCOURIER: {
      API_BASE_URL: process.env.BDCOURIER_API_BASE_URL,
      API_KEY: process.env.BDCOURIER_API_KEY
    },
    SENTRY_DSN: process.env.SENTRY_DSN && process.env.SENTRY_DSN.trim() !== "" && !process.env.SENTRY_DSN.includes("your_sentry_dsn") ? process.env.SENTRY_DSN : void 0
  };
};
var envVars = loadEnvVariables();

// src/app/middleware/requestLogger.ts
import fs from "fs/promises";
import path from "path";
var logDir = path.resolve(process.cwd(), "logs");
var DATED_LOG_PATTERN = /^access-(\d{4}-\d{2}-\d{2})\.log$/;
var RETENTION_DAYS = Number(process.env.LOG_RETENTION_DAYS) || 7;
var ensureLogDir = async () => {
  await fs.mkdir(logDir, { recursive: true });
};
var todayLogPath = () => {
  const dateStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  return path.join(logDir, `access-${dateStr}.log`);
};
var cleanupOldLogs = async () => {
  try {
    await ensureLogDir();
    const files = await fs.readdir(logDir);
    const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1e3;
    for (const file of files) {
      const match = file.match(DATED_LOG_PATTERN);
      if (!match) continue;
      const fileDate = (/* @__PURE__ */ new Date(`${match[1]}T00:00:00Z`)).getTime();
      if (fileDate < cutoff) {
        await fs.unlink(path.join(logDir, file));
      }
    }
  } catch (error) {
    console.error("Failed to clean up old access logs:", error);
  }
};
var startLogCleanupScheduler = () => {
  void cleanupOldLogs();
  setInterval(() => void cleanupOldLogs(), 24 * 60 * 60 * 1e3);
};
var requestLogger = async (req, res, next) => {
  const startTime = process.hrtime.bigint();
  res.on("finish", async () => {
    try {
      const endTime = process.hrtime.bigint();
      const responseTimeMs = Number(endTime - startTime) / 1e6;
      const logEntry = JSON.stringify({
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        method: req.method,
        endpoint: req.originalUrl,
        statusCode: res.statusCode,
        responseTimeMs: Number(responseTimeMs.toFixed(2)),
        ip: req.ip,
        userAgent: req.get("user-agent") || "unknown"
      });
      console.log(logEntry);
      await ensureLogDir();
      await fs.appendFile(todayLogPath(), `${logEntry}
`, "utf8");
    } catch (error) {
      console.error("Failed to write access log:", error);
    }
  });
  next();
};

// src/app.ts
import * as Sentry2 from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import { toNodeHandler } from "better-auth/node";
import cookieParser from "cookie-parser";
import cors from "cors";
import express15 from "express";
import path4 from "path";
import qs from "qs";

// src/app/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

// src/generated/prisma/client.ts
import * as path2 from "path";
import { fileURLToPath } from "url";

// src/generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [
    "postgresqlExtensions"
  ],
  "clientVersion": "7.8.0",
  "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
  "activeProvider": "postgresql",
  "inlineSchema": 'model AbandonedCheckout {\n  id           String         @id @default(uuid())\n  sessionToken String         @unique\n  source       CheckoutSource @default(STOREFRONT)\n\n  landingPageSlug String?\n\n  // Whatever the customer had filled in before leaving \u2014 all optional since\n  // a snapshot can be saved before any field is touched (items-only).\n  fullName String?\n  phone    String?\n  address  String?\n  district String?\n  notes    String?\n\n  items          Json // snapshot: [{ productId, productVariantId, name, variantName, image, quantity, price }]\n  subtotal       Float?\n  shippingFee    Float?\n  discountAmount Float?\n  total          Float?\n\n  createdAt      DateTime @default(now())\n  lastActivityAt DateTime @default(now()) @updatedAt\n\n  @@index([lastActivityAt])\n  @@map("abandoned_checkouts")\n}\n\nmodel Admin {\n  id            String    @id @default(uuid(7))\n  name          String\n  email         String    @unique\n  profilePhoto  String?\n  contactNumber String?\n  isDeleted     Boolean   @default(false)\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n  deletedAt     DateTime?\n\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([email])\n  @@index([isDeleted])\n  @@map("admins")\n}\n\nmodel Attribute {\n  id        String           @id @default(uuid())\n  name      String           @unique\n  values    AttributeValue[]\n  createdAt DateTime         @default(now())\n  updatedAt DateTime         @updatedAt\n\n  @@map("attributes")\n}\n\nmodel AttributeValue {\n  id          String    @id @default(uuid())\n  value       String\n  attributeId String\n  attribute   Attribute @relation(fields: [attributeId], references: [id], onDelete: Cascade)\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n\n  @@unique([value, attributeId])\n  @@index([attributeId])\n  @@map("attribute_values")\n}\n\nmodel User {\n  id                 String     @id\n  name               String\n  email              String\n  emailVerified      Boolean    @default(false)\n  role               Role       @default(USER)\n  status             UserStatus @default(ACTIVE)\n  needPasswordChange Boolean    @default(false)\n  isDeleted          Boolean    @default(false)\n  deletedAt          DateTime?\n  image              String?\n  createdAt          DateTime   @default(now())\n  updatedAt          DateTime   @updatedAt\n\n  // Staff (Manager, Staff, ...): an ADMIN with a staff role only gets that\n  // role\'s permissions. An ADMIN without one keeps full access.\n  staffRoleId String?\n  staffRole   StaffRole? @relation(fields: [staffRoleId], references: [id], onDelete: Restrict)\n\n  // Relations\n  sessions              Session[]\n  accounts              Account[]\n  admin                 Admin?\n  shop                  Shop?\n  orders                Order[]\n  cart                  Cart?\n  reviews               Review[]\n  notifications         Notification[]\n  processedOrderReturns OrderReturn[]  @relation("OrderReturnProcessedBy")\n\n  @@unique([email])\n  @@index([role])\n  @@index([status])\n  @@index([isDeleted])\n  @@index([staffRoleId])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\n// Phone numbers barred from placing orders (fake / fraud orders).\n// `phone` is normalised to the 11-digit local form, e.g. 01712345678.\nmodel BlockedPhone {\n  id          String   @id @default(uuid())\n  phone       String   @unique\n  reason      String?\n  orderNumber String? // order it was blocked from, if any\n  blockedById String?\n  blockedBy   String? // name of the admin, kept as text for the log\n  createdAt   DateTime @default(now())\n\n  @@map("blocked_phones")\n}\n\nmodel Blog {\n  id          String   @id @default(uuid())\n  title       String\n  slug        String   @unique\n  excerpt     String?\n  content     String\n  coverImage  String?\n  author      String?\n  isPublished Boolean  @default(false)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  @@index([slug])\n  @@map("blogs")\n}\n\nmodel Brand {\n  id        String    @id @default(uuid())\n  name      String    @unique\n  logo      String\n  isActive  Boolean   @default(true)\n  products  Product[]\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n\n  @@map("brands")\n}\n\nmodel Cart {\n  id    String     @id @default(uuid())\n  items CartItem[]\n\n  // Relations\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("carts")\n}\n\nmodel CartItem {\n  id       String @id @default(uuid())\n  quantity Int    @default(1)\n\n  // Relations\n  cartId           String\n  cart             Cart            @relation(fields: [cartId], references: [id], onDelete: Cascade)\n  productId        String\n  product          Product         @relation(fields: [productId], references: [id])\n  productVariantId String?\n  productVariant   ProductVariant? @relation(fields: [productVariantId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([cartId, productId, productVariantId]) // prevent duplicate variant in same cart\n  @@index([cartId])\n  @@index([productId])\n  @@index([productVariantId])\n  @@map("cart_items")\n}\n\nmodel Category {\n  id       String  @id @default(uuid())\n  name     String  @unique\n  slug     String  @unique\n  icon     String?\n  image    String?\n  isActive Boolean @default(true)\n\n  // Self-relation for subcategories\n  parentId      String?\n  parent        Category?  @relation("CategoryToSubcategory", fields: [parentId], references: [id])\n  subcategories Category[] @relation("CategoryToSubcategory")\n\n  products             Product[]\n  homeCategorySections HomeCategorySection[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([parentId])\n  @@index([slug])\n  @@map("categories")\n}\n\n// Logos of companies we work for, shown on the homepage before testimonials\nmodel ClientLogo {\n  id        String   @id @default(uuid())\n  name      String\n  logo      String\n  website   String?\n  order     Int      @default(0)\n  isActive  Boolean  @default(true)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("client_logos")\n}\n\nenum DiscountType {\n  FLAT\n  PERCENTAGE\n}\n\nmodel Coupon {\n  id                String       @id @default(uuid())\n  code              String       @unique\n  discountType      DiscountType\n  discountAmount    Float\n  maxDiscountAmount Float?\n  minPurchaseAmount Float        @default(0)\n  startDate         DateTime\n  endDate           DateTime\n  isActive          Boolean      @default(true)\n\n  // Relations\n  shopId   String\n  shop     Shop            @relation(fields: [shopId], references: [id], onDelete: Cascade)\n  products CouponProduct[]\n  orders   Order[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([code])\n  @@map("coupons")\n}\n\nmodel CouponProduct {\n  id        String  @id @default(uuid())\n  couponId  String\n  productId String\n  coupon    Coupon  @relation(fields: [couponId], references: [id], onDelete: Cascade)\n  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)\n\n  @@unique([couponId, productId])\n  @@map("coupon_products")\n}\n\nmodel CourierSetting {\n  id String @id @default("default") // a single row\n\n  pathaoEnabled      Boolean @default(false)\n  pathaoBaseUrl      String?\n  pathaoClientId     String?\n  pathaoClientSecret String?\n  pathaoUsername     String?\n  pathaoPassword     String?\n  pathaoStoreId      String?\n\n  steadfastEnabled          Boolean @default(false)\n  steadfastApiKey           String?\n  steadfastSecretKey        String?\n  steadfastWebhookAuthToken String?\n\n  // RedX Open API (https://openapi.redx.com.bd)\n  redxEnabled       Boolean @default(false)\n  redxMode          String  @default("SANDBOX") // SANDBOX | LIVE\n  redxAccessToken   String?\n  redxPickupStoreId String? // optional: which RedX pickup point to use\n  redxWebhookToken  String? // shared secret in the webhook URL\n\n  updatedAt DateTime @updatedAt\n\n  @@map("courier_settings")\n}\n\nenum Role {\n  SUPER_ADMIN\n  ADMIN\n  USER\n}\n\nenum UserStatus {\n  ACTIVE\n  BLOCKED\n  PENDING\n  DELETED\n}\n\nenum ProductStatus {\n  ACTIVE\n  DRAFT\n  OUT_OF_STOCK\n  DELETED\n}\n\nenum OrderStatus {\n  PENDING\n  PROCESSING\n  SHIPPED\n  DELIVERED\n  CANCELLED\n}\n\nenum PaymentStatus {\n  PENDING\n  PAID\n  FAILED\n  REFUNDED\n}\n\nenum ProductType {\n  SIMPLE\n  VARIABLE\n}\n\nenum OrderType {\n  ONLINE\n  POS\n  LANDING_PAGE\n}\n\nenum VatType {\n  INCLUDED\n  EXCLUDED\n}\n\nenum CheckoutSource {\n  STOREFRONT\n  LANDING_PAGE\n}\n\nenum CourierProvider {\n  PATHAO\n  STEADFAST\n  REDX\n}\n\nenum HomeCategoryDisplayType {\n  BEST_SELLING\n  LATEST\n}\n\nenum ProductHighlight {\n  NEW_ARRIVAL\n  TRENDING\n  TOP_SELLING\n  OUR_SERVICE\n}\n\nmodel ExpenseCategory {\n  id       String  @id @default(uuid())\n  name     String\n  isActive Boolean @default(true)\n\n  shopId   String\n  shop     Shop      @relation(fields: [shopId], references: [id], onDelete: Cascade)\n  expenses Expense[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@map("expense_categories")\n}\n\nmodel Expense {\n  id    String   @id @default(uuid())\n  name  String\n  price Float\n  note  String?\n  date  DateTime\n\n  categoryId String\n  category   ExpenseCategory @relation(fields: [categoryId], references: [id])\n  shopId     String\n  shop       Shop            @relation(fields: [shopId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([categoryId])\n  @@map("expenses")\n}\n\nmodel Faq {\n  id        String   @id @default(uuid())\n  question  String\n  answer    String\n  order     Int      @default(0)\n  isActive  Boolean  @default(true)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("faqs")\n}\n\nmodel FlashSale {\n  id        String    @id @default("default") // a single row\n  isActive  Boolean   @default(false)\n  startTime DateTime?\n  endTime   DateTime?\n  updatedAt DateTime  @updatedAt\n\n  products FlashSaleProduct[]\n\n  @@map("flash_sales")\n}\n\nmodel FlashSaleProduct {\n  id          String    @id @default(uuid())\n  flashSaleId String    @default("default")\n  flashSale   FlashSale @relation(fields: [flashSaleId], references: [id], onDelete: Cascade)\n  productId   String\n  product     Product   @relation(fields: [productId], references: [id], onDelete: Cascade)\n  order       Int       @default(0)\n  createdAt   DateTime  @default(now())\n\n  @@unique([flashSaleId, productId])\n  @@index([productId])\n  @@map("flash_sale_products")\n}\n\n// Google Tag Manager for the storefront and landing pages (single row)\nmodel GtmSetting {\n  id           String  @id @default("default")\n  isEnabled    Boolean @default(false)\n  containerId  String? // web container, e.g. GTM-XXXXXXX\n  // Optional first-party loader: gtm.js is fetched from this server-side\n  // container domain (e.g. https://sgtm.example.com) instead of Google\'s\n  scriptDomain String?\n\n  updatedAt DateTime @updatedAt\n\n  @@map("gtm_settings")\n}\n\nenum HeroSliderType {\n  SLIDE // rotates in the main carousel\n  BANNER // static offer banner beside the carousel (max 2)\n}\n\nenum HeroMediaType {\n  IMAGE\n  VIDEO // slides only\n}\n\nmodel HeroSlider {\n  id        String         @id @default(uuid())\n  image     String // media URL (image or video)\n  mediaType HeroMediaType  @default(IMAGE)\n  type      HeroSliderType @default(SLIDE)\n  link      String?\n  isActive  Boolean        @default(true)\n  createdAt DateTime       @default(now())\n  updatedAt DateTime       @updatedAt\n\n  @@map("hero_sliders")\n}\n\nmodel HomeCategorySection {\n  id          String                  @id @default(uuid())\n  categoryId  String\n  category    Category                @relation(fields: [categoryId], references: [id], onDelete: Cascade)\n  displayType HomeCategoryDisplayType @default(BEST_SELLING)\n  order       Int                     @default(0)\n  createdAt   DateTime                @default(now())\n  updatedAt   DateTime                @updatedAt\n\n  @@index([categoryId])\n  @@map("home_category_sections")\n}\n\n// Homepage promo strip under "Top Selling": a scrolling text line and a wide\n// banner image. Single row, like SiteSetting.\nmodel HomePromo {\n  id String @id @default("default")\n\n  tickerText    String?\n  tickerEnabled Boolean @default(true)\n\n  bannerImage   String?\n  bannerLink    String?\n  bannerEnabled Boolean @default(true)\n\n  // Second banner, shown above "All Products"\n  productsBannerImage   String?\n  productsBannerLink    String?\n  productsBannerEnabled Boolean @default(true)\n\n  updatedAt DateTime @updatedAt\n\n  @@map("home_promos")\n}\n\nmodel LandingPage {\n  id       String  @id @default(uuid())\n  slug     String  @unique\n  isActive Boolean @default(true)\n\n  // Design \u2014 theme color key (see LANDING_PAGE_THEMES on the client), per-section visibility,\n  // and section order (see LANDING_PAGE_SECTION_KEYS on the client)\n  themeColor             String   @default("violet")\n  showGallerySection     Boolean  @default(true)\n  showAboutSection       Boolean  @default(true)\n  showDescriptionSection Boolean  @default(true)\n  showReviewsSection     Boolean  @default(true)\n  sectionOrder           String[] @default(["price", "gallery", "about", "description", "reviews"])\n\n  // Relations\n  productId String\n  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)\n  shopId    String\n  shop      Shop    @relation(fields: [shopId], references: [id], onDelete: Cascade)\n\n  // Header\n  campaignTitle            String\n  campaignShortDescription String?\n  bannerImage              String?\n\n  // Price highlight labels (free text set by the seller, e.g. "\u09AA\u09C2\u09B0\u09CD\u09AC\u09C7\u09B0 \u09AE\u09C2\u09B2\u09CD\u09AF" / "Regular Price")\n  regularPriceLabel String?\n  offerPriceLabel   String?\n\n  // Gallery\n  galleryHeading     String?\n  galleryDescription String?\n  galleryImages      String[]\n\n  // About + video\n  aboutHeading     String?\n  aboutDescription String?\n  videoUrl         String?\n\n  // Long description\n  descriptionTitle String?\n  description      String?\n\n  // Reviews\n  reviewHeading String?\n  reviewImages  String[]\n\n  // Order form\n  orderFormHeading String @default("Order Now")\n  orderButtonText  String @default("\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8")\n\n  views Int @default(0)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([productId])\n  @@map("landing_pages")\n}\n\nenum NotificationType {\n  ORDER_PLACED\n  ORDER_STATUS_CHANGED\n  PAYMENT_STATUS_CHANGED\n  ORDER_RETURN_PROCESSED\n}\n\nmodel Notification {\n  id      String           @id @default(uuid())\n  type    NotificationType\n  title   String\n  message String\n  isRead  Boolean          @default(false)\n\n  // Relations\n  userId  String\n  user    User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n  orderId String?\n  order   Order?  @relation(fields: [orderId], references: [id], onDelete: SetNull)\n\n  createdAt DateTime @default(now())\n\n  @@index([userId, isRead])\n  @@index([userId, createdAt])\n  @@map("notifications")\n}\n\nmodel Order {\n  id            String        @id @default(uuid())\n  orderSeq      Int           @default(autoincrement())\n  orderNumber   String?       @unique\n  orderType     OrderType     @default(ONLINE)\n  totalAmount   Float\n  paymentStatus PaymentStatus @default(PENDING)\n  paymentMethod String? // cash, card, mfs, other\n  orderStatus   OrderStatus   @default(PENDING)\n\n  // Shipping address (structured)\n  fullName String?\n  phone    String?\n  email    String? // Optional, for order updates by email\n  address  String?\n  district String?\n\n  notes String? // Optional customer notes\n\n  // Relations\n  userId        String?\n  user          User?          @relation(fields: [userId], references: [id])\n  shopId        String?\n  shop          Shop?          @relation(fields: [shopId], references: [id])\n  items         OrderItem[]\n  notifications Notification[]\n  returns       OrderReturn[]\n\n  discountAmount Float   @default(0)\n  shippingFee    Float   @default(0)\n  couponId       String?\n  coupon         Coupon? @relation(fields: [couponId], references: [id])\n\n  // Courier assignment (Pathao / Steadfast) \u2014 set once an admin dispatches the order\n  courierProvider      CourierProvider?\n  courierConsignmentId String?\n  courierTrackingCode  String?\n  courierStatus        String?\n  courierAssignedAt    DateTime?\n\n  // Set once an SSLCommerz payment for this order has been validated\n  // (for bKash: the bKash transaction ID, trxID)\n  paymentValId String?\n\n  // bKash paymentID of the latest attempt; the callback only carries this\n  bkashPaymentId String? @unique\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([shopId])\n  @@index([paymentStatus])\n  @@index([orderStatus])\n  @@index([district])\n  @@index([couponId])\n  // Order lists: newest first within a type (Online / POS / Landing Page)\n  @@index([orderType, createdAt])\n  @@index([createdAt])\n  // Admin order search by number / phone / name (pg_trgm)\n  @@index([orderNumber(ops: raw("gin_trgm_ops"))], type: Gin, map: "orders_orderNumber_trgm_idx")\n  @@index([phone(ops: raw("gin_trgm_ops"))], type: Gin, map: "orders_phone_trgm_idx")\n  @@index([fullName(ops: raw("gin_trgm_ops"))], type: Gin, map: "orders_fullName_trgm_idx")\n  @@map("orders")\n}\n\nmodel OrderItem {\n  id        String @id @default(uuid())\n  quantity  Int\n  price     Float // Sell price at time of purchase\n  costPrice Float? // Purchase/cost price at time of purchase (null for orders placed before this field existed)\n\n  // Vendor payout tracking\n  vendorEarning   Float // price * quantity - commission\n  platformEarning Float // commission amount\n\n  // Item fulfillment status (per vendor)\n  status OrderStatus @default(PENDING)\n\n  // How much of `quantity` has been returned so far (remaining = quantity - returnedQuantity)\n  returnedQuantity Int @default(0)\n\n  // Relations\n  orderId          String\n  order            Order             @relation(fields: [orderId], references: [id])\n  productId        String\n  product          Product           @relation(fields: [productId], references: [id])\n  productVariantId String?\n  productVariant   ProductVariant?   @relation(fields: [productVariantId], references: [id])\n  shopId           String\n  shop             Shop              @relation(fields: [shopId], references: [id])\n  returnItems      OrderReturnItem[]\n\n  @@index([orderId])\n  @@index([shopId])\n  @@index([productId])\n  @@index([productVariantId])\n  @@map("order_items")\n}\n\nmodel OrderReturn {\n  id                 String  @id @default(uuid())\n  orderId            String\n  order              Order   @relation(fields: [orderId], references: [id])\n  shopId             String // every item in one submission belongs to the same seller\'s shop\n  shop               Shop    @relation(fields: [shopId], references: [id])\n  refundAmount       Float // sum(returnQty * price) for this submission\n  shippingFee        Float // order.shippingFee snapshot after this return\n  discountAmount     Float // order.discountAmount snapshot after this return\n  newTotalAmount     Float // order.totalAmount right after this return\n  processedByAdminId String?\n  processedByAdmin   User?   @relation("OrderReturnProcessedBy", fields: [processedByAdminId], references: [id])\n\n  items OrderReturnItem[]\n\n  createdAt DateTime @default(now())\n\n  @@index([orderId])\n  @@index([shopId])\n  @@map("order_returns")\n}\n\nmodel OrderReturnItem {\n  id               String          @id @default(uuid())\n  orderReturnId    String\n  orderReturn      OrderReturn     @relation(fields: [orderReturnId], references: [id], onDelete: Cascade)\n  orderItemId      String\n  orderItem        OrderItem       @relation(fields: [orderItemId], references: [id])\n  productId        String\n  product          Product         @relation(fields: [productId], references: [id])\n  productVariantId String?\n  productVariant   ProductVariant? @relation(fields: [productVariantId], references: [id])\n  quantity         Int\n  price            Float\n  subtotal         Float\n\n  @@index([orderReturnId])\n  @@index([orderItemId])\n  @@map("order_return_items")\n}\n\nmodel PageContent {\n  id        String   @id @default(uuid())\n  slug      String   @unique\n  title     String\n  content   String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("page_contents")\n}\n\nmodel PaymentSetting {\n  id String @id @default("default") // a single row\n\n  codEnabled Boolean @default(true)\n\n  sslcommerzEnabled       Boolean @default(false)\n  sslcommerzMode          String  @default("SANDBOX") // SANDBOX | LIVE\n  sslcommerzStoreId       String?\n  sslcommerzStorePassword String?\n\n  // bKash Tokenized Checkout (merchant credentials from bKash)\n  bkashEnabled   Boolean @default(false)\n  bkashMode      String  @default("SANDBOX") // SANDBOX | LIVE\n  bkashAppKey    String?\n  bkashAppSecret String?\n  bkashUsername  String?\n  bkashPassword  String?\n\n  updatedAt DateTime @updatedAt\n\n  @@map("payment_settings")\n}\n\n// Promo image shown in a popup on the storefront a few seconds after a visit\n// starts. Only one is live at a time.\nmodel Popup {\n  id           String   @id @default(uuid())\n  title        String? // admin label only\n  image        String // 4:5 portrait, e.g. 800 x 1000 px\n  link         String? // where a click on the image goes\n  delaySeconds Int      @default(3)\n  isActive     Boolean  @default(false)\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  @@map("popups")\n}\n\nmodel PosCartItem {\n  id String @id @default(uuid())\n\n  shopId String\n  shop   Shop   @relation(fields: [shopId], references: [id])\n\n  productId String\n  product   Product @relation(fields: [productId], references: [id])\n\n  productVariantId String?\n\n  productName  String\n  price        Float\n  quantity     Int     @default(1)\n  combination  String? // variant label e.g. "XL-Red"\n  productImage String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([productId])\n  @@map("pos_cart_items")\n}\n\nmodel Product {\n  id               String        @id @default(uuid())\n  name             String\n  slug             String        @unique\n  description      String\n  shortDescription String\n  images           String[]\n  videoUrl         String? // YouTube or Facebook video link, shown on the product page\n  stock            Int           @default(0)\n  status           ProductStatus @default(DRAFT)\n  type             ProductType   @default(SIMPLE)\n  attributes       Json?\n\n  // SKU / Barcode (SIMPLE products only \u2014 VARIABLE products carry it per-variant)\n  sku String? @unique\n\n  // Pricing\n  purchasePrice Float // What vendor bought it for (internal cost)\n  regularPrice  Float // Original MRP / crossed-out price shown to customer\n  sellPrice     Float // Actual selling price (what customer pays)\n\n  // Tags / searchability\n  tags String[]\n\n  // Vat, Shipping, Featured configuration\n  vatType       VatType @default(INCLUDED)\n  vatPercentage Float   @default(0)\n  freeShipping  Boolean @default(false)\n\n  // Homepage showcase labels; a product can carry several\n  highlights ProductHighlight[] @default([])\n\n  // Relations\n  shopId      String\n  shop        Shop       @relation(fields: [shopId], references: [id])\n  categoryId  String\n  category    Category   @relation(fields: [categoryId], references: [id])\n  brandId     String?\n  brand       Brand?     @relation(fields: [brandId], references: [id], onDelete: SetNull)\n  sizeChartId String?\n  sizeChart   SizeChart? @relation(fields: [sizeChartId], references: [id], onDelete: SetNull)\n\n  variants         ProductVariant[]\n  reviews          Review[]\n  orderItems       OrderItem[]\n  cartItems        CartItem[]\n  coupons          CouponProduct[]\n  posCartItems     PosCartItem[]\n  landingPages     LandingPage[]\n  returnItems      OrderReturnItem[]\n  flashSaleEntries FlashSaleProduct[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([categoryId])\n  @@index([brandId])\n  @@index([sizeChartId])\n  @@index([status])\n  @@index([slug])\n  // Storefront lists: active products, newest first\n  @@index([status, createdAt])\n  // ?highlight=TRENDING etc.\n  @@index([highlights], type: Gin)\n  // Fast "contains" search on name / barcode (pg_trgm)\n  @@index([name(ops: raw("gin_trgm_ops"))], type: Gin, map: "products_name_trgm_idx")\n  @@index([sku(ops: raw("gin_trgm_ops"))], type: Gin, map: "products_sku_trgm_idx")\n  @@map("products")\n}\n\nmodel ProductVariant {\n  id          String  @id @default(uuid())\n  productId   String\n  product     Product @relation(fields: [productId], references: [id], onDelete: Cascade)\n  combination String // e.g. "XL-Red-500gm"\n  sku         String? @unique\n\n  quantity      Int     @default(0)\n  purchasePrice Float\n  regularPrice  Float\n  sellPrice     Float\n  image         String?\n\n  orderItems  OrderItem[]\n  cartItems   CartItem[]\n  returnItems OrderReturnItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([productId])\n  // Barcode search on variant SKUs (pg_trgm)\n  @@index([sku(ops: raw("gin_trgm_ops"))], type: Gin, map: "product_variants_sku_trgm_idx")\n  @@map("product_variants")\n}\n\nmodel DocumentEmbedding {\n  id String @id @default(uuid(7))\n\n  chunkKey    String  @unique\n  sourceType  String\n  sourceId    String\n  sourceLabel String?\n  content     String\n  metadata    Json?\n\n  embedding Unsupported("vector(2048)")\n\n  isDeleted Boolean   @default(false)\n  deletedAt DateTime?\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n\n  @@index([sourceType], name: "idx_document_embeddings_sourceType")\n  @@index([sourceId], name: "idx_document_embeddings_sourceId")\n  @@map("document_embeddings")\n}\n\nmodel Review {\n  id      String  @id @default(uuid())\n  rating  Int     @default(5) // 1\u20135 scale\n  comment String?\n\n  // Relations\n  userId    String\n  user      User    @relation(fields: [userId], references: [id])\n  productId String\n  product   Product @relation(fields: [productId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([userId, productId]) // one review per product per user\n  @@index([productId])\n  @@index([userId])\n  @@map("reviews")\n}\n\n// Sample work / catalogue PDFs customers can view and download from the homepage.\n// The file lives on Cloudinary (uploaded straight from the admin\'s browser).\nmodel SampleWork {\n  id          String   @id @default(uuid())\n  title       String\n  description String?\n  fileUrl     String\n  publicId    String?\n  fileSize    Int? // bytes\n  order       Int      @default(0)\n  isActive    Boolean  @default(true)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  @@map("sample_works")\n}\n\ngenerator client {\n  provider        = "prisma-client"\n  output          = "../../src/generated/prisma"\n  previewFeatures = ["postgresqlExtensions"]\n}\n\ndatasource db {\n  provider   = "postgresql"\n  extensions = [vector, pg_trgm]\n}\n\nmodel ShippingSetting {\n  id                      String @id @default("default") // a single row\n  insideDhakaShippingFee  Float  @default(70)\n  outsideDhakaShippingFee Float  @default(130)\n\n  updatedAt DateTime @updatedAt\n\n  @@map("shipping_settings")\n}\n\n// Single-vendor store: exactly one row is expected to exist (see seed.ts).\nmodel Shop {\n  id          String  @id @default(uuid())\n  name        String  @unique\n  description String?\n  logo        String?\n  banner      String?\n\n  // Relations\n  vendorId          String            @unique\n  vendor            User              @relation(fields: [vendorId], references: [id])\n  products          Product[]\n  orderItems        OrderItem[]\n  coupons           Coupon[]\n  posCartItems      PosCartItem[]\n  posOrders         Order[]\n  landingPages      LandingPage[]\n  expenseCategories ExpenseCategory[]\n  expenses          Expense[]\n  orderReturns      OrderReturn[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("shops")\n}\n\nmodel SiteSetting {\n  id          String  @id @default("default") // a single row\n  siteName    String  @default("AB Trims")\n  tagline     String?\n  description String  @default("Your ultimate multivendor marketplace. Discover premium products from verified sellers across the nation.")\n  logo        String?\n  phone       String?\n  email       String?\n  address     String?\n\n  facebook  String?\n  youtube   String?\n  instagram String?\n  linkedin  String?\n  tiktok    String?\n  whatsapp  String?\n\n  copyrightText String @default("All rights reserved.")\n\n  // Products (or variants) at or below this stock show on the Low Stock page\n  lowStockThreshold Int @default(5)\n\n  updatedAt DateTime @updatedAt\n\n  @@map("site_settings")\n}\n\n// Measurement chart image a product can link to ("View Size Chart" on the product page)\nmodel SizeChart {\n  id        String    @id @default(uuid())\n  name      String    @unique\n  image     String\n  products  Product[]\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n\n  @@map("size_charts")\n}\n\nmodel SmsSetting {\n  id String @id @default("default") // a single row\n\n  enabled  Boolean @default(false)\n  apiKey   String?\n  senderId String?\n\n  updatedAt DateTime @updatedAt\n\n  @@map("sms_settings")\n}\n\n// Dashboard access profile for staff accounts (e.g. Manager, Staff).\n// `permissions` holds keys from module/staff/staffPermissions.ts.\nmodel StaffRole {\n  id          String   @id @default(uuid())\n  name        String   @unique\n  permissions String[] @default([])\n  users       User[]\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  @@map("staff_roles")\n}\n\n// Customer reviews shown on the homepage above the footer\nmodel Testimonial {\n  id        String   @id @default(uuid())\n  name      String\n  role      String?\n  content   String\n  avatar    String?\n  rating    Int      @default(5)\n  order     Int      @default(0)\n  isActive  Boolean  @default(true)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("testimonials")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"AbandonedCheckout":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"sessionToken","kind":"scalar","type":"String"},{"name":"source","kind":"enum","type":"CheckoutSource"},{"name":"landingPageSlug","kind":"scalar","type":"String"},{"name":"fullName","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"district","kind":"scalar","type":"String"},{"name":"notes","kind":"scalar","type":"String"},{"name":"items","kind":"scalar","type":"Json"},{"name":"subtotal","kind":"scalar","type":"Float"},{"name":"shippingFee","kind":"scalar","type":"Float"},{"name":"discountAmount","kind":"scalar","type":"Float"},{"name":"total","kind":"scalar","type":"Float"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"lastActivityAt","kind":"scalar","type":"DateTime"}],"dbName":"abandoned_checkouts"},"Admin":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"profilePhoto","kind":"scalar","type":"String"},{"name":"contactNumber","kind":"scalar","type":"String"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AdminToUser"}],"dbName":"admins"},"Attribute":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"values","kind":"object","type":"AttributeValue","relationName":"AttributeToAttributeValue"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"attributes"},"AttributeValue":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"attributeId","kind":"scalar","type":"String"},{"name":"attribute","kind":"object","type":"Attribute","relationName":"AttributeToAttributeValue"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"attribute_values"},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"role","kind":"enum","type":"Role"},{"name":"status","kind":"enum","type":"UserStatus"},{"name":"needPasswordChange","kind":"scalar","type":"Boolean"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"staffRoleId","kind":"scalar","type":"String"},{"name":"staffRole","kind":"object","type":"StaffRole","relationName":"StaffRoleToUser"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"admin","kind":"object","type":"Admin","relationName":"AdminToUser"},{"name":"shop","kind":"object","type":"Shop","relationName":"ShopToUser"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToUser"},{"name":"cart","kind":"object","type":"Cart","relationName":"CartToUser"},{"name":"reviews","kind":"object","type":"Review","relationName":"ReviewToUser"},{"name":"notifications","kind":"object","type":"Notification","relationName":"NotificationToUser"},{"name":"processedOrderReturns","kind":"object","type":"OrderReturn","relationName":"OrderReturnProcessedBy"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"BlockedPhone":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"reason","kind":"scalar","type":"String"},{"name":"orderNumber","kind":"scalar","type":"String"},{"name":"blockedById","kind":"scalar","type":"String"},{"name":"blockedBy","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":"blocked_phones"},"Blog":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"excerpt","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"coverImage","kind":"scalar","type":"String"},{"name":"author","kind":"scalar","type":"String"},{"name":"isPublished","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"blogs"},"Brand":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"logo","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"products","kind":"object","type":"Product","relationName":"BrandToProduct"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"brands"},"Cart":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"items","kind":"object","type":"CartItem","relationName":"CartToCartItem"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"CartToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"carts"},"CartItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"cartId","kind":"scalar","type":"String"},{"name":"cart","kind":"object","type":"Cart","relationName":"CartToCartItem"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"CartItemToProduct"},{"name":"productVariantId","kind":"scalar","type":"String"},{"name":"productVariant","kind":"object","type":"ProductVariant","relationName":"CartItemToProductVariant"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"cart_items"},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"icon","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"parentId","kind":"scalar","type":"String"},{"name":"parent","kind":"object","type":"Category","relationName":"CategoryToSubcategory"},{"name":"subcategories","kind":"object","type":"Category","relationName":"CategoryToSubcategory"},{"name":"products","kind":"object","type":"Product","relationName":"CategoryToProduct"},{"name":"homeCategorySections","kind":"object","type":"HomeCategorySection","relationName":"CategoryToHomeCategorySection"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"categories"},"ClientLogo":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"logo","kind":"scalar","type":"String"},{"name":"website","kind":"scalar","type":"String"},{"name":"order","kind":"scalar","type":"Int"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"client_logos"},"Coupon":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"code","kind":"scalar","type":"String"},{"name":"discountType","kind":"enum","type":"DiscountType"},{"name":"discountAmount","kind":"scalar","type":"Float"},{"name":"maxDiscountAmount","kind":"scalar","type":"Float"},{"name":"minPurchaseAmount","kind":"scalar","type":"Float"},{"name":"startDate","kind":"scalar","type":"DateTime"},{"name":"endDate","kind":"scalar","type":"DateTime"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"CouponToShop"},{"name":"products","kind":"object","type":"CouponProduct","relationName":"CouponToCouponProduct"},{"name":"orders","kind":"object","type":"Order","relationName":"CouponToOrder"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"coupons"},"CouponProduct":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"couponId","kind":"scalar","type":"String"},{"name":"productId","kind":"scalar","type":"String"},{"name":"coupon","kind":"object","type":"Coupon","relationName":"CouponToCouponProduct"},{"name":"product","kind":"object","type":"Product","relationName":"CouponProductToProduct"}],"dbName":"coupon_products"},"CourierSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"pathaoEnabled","kind":"scalar","type":"Boolean"},{"name":"pathaoBaseUrl","kind":"scalar","type":"String"},{"name":"pathaoClientId","kind":"scalar","type":"String"},{"name":"pathaoClientSecret","kind":"scalar","type":"String"},{"name":"pathaoUsername","kind":"scalar","type":"String"},{"name":"pathaoPassword","kind":"scalar","type":"String"},{"name":"pathaoStoreId","kind":"scalar","type":"String"},{"name":"steadfastEnabled","kind":"scalar","type":"Boolean"},{"name":"steadfastApiKey","kind":"scalar","type":"String"},{"name":"steadfastSecretKey","kind":"scalar","type":"String"},{"name":"steadfastWebhookAuthToken","kind":"scalar","type":"String"},{"name":"redxEnabled","kind":"scalar","type":"Boolean"},{"name":"redxMode","kind":"scalar","type":"String"},{"name":"redxAccessToken","kind":"scalar","type":"String"},{"name":"redxPickupStoreId","kind":"scalar","type":"String"},{"name":"redxWebhookToken","kind":"scalar","type":"String"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"courier_settings"},"ExpenseCategory":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"ExpenseCategoryToShop"},{"name":"expenses","kind":"object","type":"Expense","relationName":"ExpenseToExpenseCategory"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"expense_categories"},"Expense":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"note","kind":"scalar","type":"String"},{"name":"date","kind":"scalar","type":"DateTime"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"ExpenseCategory","relationName":"ExpenseToExpenseCategory"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"ExpenseToShop"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"expenses"},"Faq":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"question","kind":"scalar","type":"String"},{"name":"answer","kind":"scalar","type":"String"},{"name":"order","kind":"scalar","type":"Int"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"faqs"},"FlashSale":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"startTime","kind":"scalar","type":"DateTime"},{"name":"endTime","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"products","kind":"object","type":"FlashSaleProduct","relationName":"FlashSaleToFlashSaleProduct"}],"dbName":"flash_sales"},"FlashSaleProduct":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"flashSaleId","kind":"scalar","type":"String"},{"name":"flashSale","kind":"object","type":"FlashSale","relationName":"FlashSaleToFlashSaleProduct"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"FlashSaleProductToProduct"},{"name":"order","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":"flash_sale_products"},"GtmSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"isEnabled","kind":"scalar","type":"Boolean"},{"name":"containerId","kind":"scalar","type":"String"},{"name":"scriptDomain","kind":"scalar","type":"String"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"gtm_settings"},"HeroSlider":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"mediaType","kind":"enum","type":"HeroMediaType"},{"name":"type","kind":"enum","type":"HeroSliderType"},{"name":"link","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"hero_sliders"},"HomeCategorySection":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToHomeCategorySection"},{"name":"displayType","kind":"enum","type":"HomeCategoryDisplayType"},{"name":"order","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"home_category_sections"},"HomePromo":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"tickerText","kind":"scalar","type":"String"},{"name":"tickerEnabled","kind":"scalar","type":"Boolean"},{"name":"bannerImage","kind":"scalar","type":"String"},{"name":"bannerLink","kind":"scalar","type":"String"},{"name":"bannerEnabled","kind":"scalar","type":"Boolean"},{"name":"productsBannerImage","kind":"scalar","type":"String"},{"name":"productsBannerLink","kind":"scalar","type":"String"},{"name":"productsBannerEnabled","kind":"scalar","type":"Boolean"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"home_promos"},"LandingPage":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"themeColor","kind":"scalar","type":"String"},{"name":"showGallerySection","kind":"scalar","type":"Boolean"},{"name":"showAboutSection","kind":"scalar","type":"Boolean"},{"name":"showDescriptionSection","kind":"scalar","type":"Boolean"},{"name":"showReviewsSection","kind":"scalar","type":"Boolean"},{"name":"sectionOrder","kind":"scalar","type":"String"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"LandingPageToProduct"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"LandingPageToShop"},{"name":"campaignTitle","kind":"scalar","type":"String"},{"name":"campaignShortDescription","kind":"scalar","type":"String"},{"name":"bannerImage","kind":"scalar","type":"String"},{"name":"regularPriceLabel","kind":"scalar","type":"String"},{"name":"offerPriceLabel","kind":"scalar","type":"String"},{"name":"galleryHeading","kind":"scalar","type":"String"},{"name":"galleryDescription","kind":"scalar","type":"String"},{"name":"galleryImages","kind":"scalar","type":"String"},{"name":"aboutHeading","kind":"scalar","type":"String"},{"name":"aboutDescription","kind":"scalar","type":"String"},{"name":"videoUrl","kind":"scalar","type":"String"},{"name":"descriptionTitle","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"reviewHeading","kind":"scalar","type":"String"},{"name":"reviewImages","kind":"scalar","type":"String"},{"name":"orderFormHeading","kind":"scalar","type":"String"},{"name":"orderButtonText","kind":"scalar","type":"String"},{"name":"views","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"landing_pages"},"Notification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"type","kind":"enum","type":"NotificationType"},{"name":"title","kind":"scalar","type":"String"},{"name":"message","kind":"scalar","type":"String"},{"name":"isRead","kind":"scalar","type":"Boolean"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"NotificationToUser"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"NotificationToOrder"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":"notifications"},"Order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderSeq","kind":"scalar","type":"Int"},{"name":"orderNumber","kind":"scalar","type":"String"},{"name":"orderType","kind":"enum","type":"OrderType"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"paymentStatus","kind":"enum","type":"PaymentStatus"},{"name":"paymentMethod","kind":"scalar","type":"String"},{"name":"orderStatus","kind":"enum","type":"OrderStatus"},{"name":"fullName","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"district","kind":"scalar","type":"String"},{"name":"notes","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"OrderToUser"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"OrderToShop"},{"name":"items","kind":"object","type":"OrderItem","relationName":"OrderToOrderItem"},{"name":"notifications","kind":"object","type":"Notification","relationName":"NotificationToOrder"},{"name":"returns","kind":"object","type":"OrderReturn","relationName":"OrderToOrderReturn"},{"name":"discountAmount","kind":"scalar","type":"Float"},{"name":"shippingFee","kind":"scalar","type":"Float"},{"name":"couponId","kind":"scalar","type":"String"},{"name":"coupon","kind":"object","type":"Coupon","relationName":"CouponToOrder"},{"name":"courierProvider","kind":"enum","type":"CourierProvider"},{"name":"courierConsignmentId","kind":"scalar","type":"String"},{"name":"courierTrackingCode","kind":"scalar","type":"String"},{"name":"courierStatus","kind":"scalar","type":"String"},{"name":"courierAssignedAt","kind":"scalar","type":"DateTime"},{"name":"paymentValId","kind":"scalar","type":"String"},{"name":"bkashPaymentId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"orders"},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"price","kind":"scalar","type":"Float"},{"name":"costPrice","kind":"scalar","type":"Float"},{"name":"vendorEarning","kind":"scalar","type":"Float"},{"name":"platformEarning","kind":"scalar","type":"Float"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"returnedQuantity","kind":"scalar","type":"Int"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderItem"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"OrderItemToProduct"},{"name":"productVariantId","kind":"scalar","type":"String"},{"name":"productVariant","kind":"object","type":"ProductVariant","relationName":"OrderItemToProductVariant"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"OrderItemToShop"},{"name":"returnItems","kind":"object","type":"OrderReturnItem","relationName":"OrderItemToOrderReturnItem"}],"dbName":"order_items"},"OrderReturn":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderReturn"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"OrderReturnToShop"},{"name":"refundAmount","kind":"scalar","type":"Float"},{"name":"shippingFee","kind":"scalar","type":"Float"},{"name":"discountAmount","kind":"scalar","type":"Float"},{"name":"newTotalAmount","kind":"scalar","type":"Float"},{"name":"processedByAdminId","kind":"scalar","type":"String"},{"name":"processedByAdmin","kind":"object","type":"User","relationName":"OrderReturnProcessedBy"},{"name":"items","kind":"object","type":"OrderReturnItem","relationName":"OrderReturnToOrderReturnItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":"order_returns"},"OrderReturnItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderReturnId","kind":"scalar","type":"String"},{"name":"orderReturn","kind":"object","type":"OrderReturn","relationName":"OrderReturnToOrderReturnItem"},{"name":"orderItemId","kind":"scalar","type":"String"},{"name":"orderItem","kind":"object","type":"OrderItem","relationName":"OrderItemToOrderReturnItem"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"OrderReturnItemToProduct"},{"name":"productVariantId","kind":"scalar","type":"String"},{"name":"productVariant","kind":"object","type":"ProductVariant","relationName":"OrderReturnItemToProductVariant"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"price","kind":"scalar","type":"Float"},{"name":"subtotal","kind":"scalar","type":"Float"}],"dbName":"order_return_items"},"PageContent":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"page_contents"},"PaymentSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"codEnabled","kind":"scalar","type":"Boolean"},{"name":"sslcommerzEnabled","kind":"scalar","type":"Boolean"},{"name":"sslcommerzMode","kind":"scalar","type":"String"},{"name":"sslcommerzStoreId","kind":"scalar","type":"String"},{"name":"sslcommerzStorePassword","kind":"scalar","type":"String"},{"name":"bkashEnabled","kind":"scalar","type":"Boolean"},{"name":"bkashMode","kind":"scalar","type":"String"},{"name":"bkashAppKey","kind":"scalar","type":"String"},{"name":"bkashAppSecret","kind":"scalar","type":"String"},{"name":"bkashUsername","kind":"scalar","type":"String"},{"name":"bkashPassword","kind":"scalar","type":"String"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"payment_settings"},"Popup":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"link","kind":"scalar","type":"String"},{"name":"delaySeconds","kind":"scalar","type":"Int"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"popups"},"PosCartItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"PosCartItemToShop"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"PosCartItemToProduct"},{"name":"productVariantId","kind":"scalar","type":"String"},{"name":"productName","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"combination","kind":"scalar","type":"String"},{"name":"productImage","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"pos_cart_items"},"Product":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"shortDescription","kind":"scalar","type":"String"},{"name":"images","kind":"scalar","type":"String"},{"name":"videoUrl","kind":"scalar","type":"String"},{"name":"stock","kind":"scalar","type":"Int"},{"name":"status","kind":"enum","type":"ProductStatus"},{"name":"type","kind":"enum","type":"ProductType"},{"name":"attributes","kind":"scalar","type":"Json"},{"name":"sku","kind":"scalar","type":"String"},{"name":"purchasePrice","kind":"scalar","type":"Float"},{"name":"regularPrice","kind":"scalar","type":"Float"},{"name":"sellPrice","kind":"scalar","type":"Float"},{"name":"tags","kind":"scalar","type":"String"},{"name":"vatType","kind":"enum","type":"VatType"},{"name":"vatPercentage","kind":"scalar","type":"Float"},{"name":"freeShipping","kind":"scalar","type":"Boolean"},{"name":"highlights","kind":"enum","type":"ProductHighlight"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"ProductToShop"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToProduct"},{"name":"brandId","kind":"scalar","type":"String"},{"name":"brand","kind":"object","type":"Brand","relationName":"BrandToProduct"},{"name":"sizeChartId","kind":"scalar","type":"String"},{"name":"sizeChart","kind":"object","type":"SizeChart","relationName":"ProductToSizeChart"},{"name":"variants","kind":"object","type":"ProductVariant","relationName":"ProductToProductVariant"},{"name":"reviews","kind":"object","type":"Review","relationName":"ProductToReview"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"OrderItemToProduct"},{"name":"cartItems","kind":"object","type":"CartItem","relationName":"CartItemToProduct"},{"name":"coupons","kind":"object","type":"CouponProduct","relationName":"CouponProductToProduct"},{"name":"posCartItems","kind":"object","type":"PosCartItem","relationName":"PosCartItemToProduct"},{"name":"landingPages","kind":"object","type":"LandingPage","relationName":"LandingPageToProduct"},{"name":"returnItems","kind":"object","type":"OrderReturnItem","relationName":"OrderReturnItemToProduct"},{"name":"flashSaleEntries","kind":"object","type":"FlashSaleProduct","relationName":"FlashSaleProductToProduct"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"products"},"ProductVariant":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"ProductToProductVariant"},{"name":"combination","kind":"scalar","type":"String"},{"name":"sku","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"purchasePrice","kind":"scalar","type":"Float"},{"name":"regularPrice","kind":"scalar","type":"Float"},{"name":"sellPrice","kind":"scalar","type":"Float"},{"name":"image","kind":"scalar","type":"String"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"OrderItemToProductVariant"},{"name":"cartItems","kind":"object","type":"CartItem","relationName":"CartItemToProductVariant"},{"name":"returnItems","kind":"object","type":"OrderReturnItem","relationName":"OrderReturnItemToProductVariant"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"product_variants"},"DocumentEmbedding":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"chunkKey","kind":"scalar","type":"String"},{"name":"sourceType","kind":"scalar","type":"String"},{"name":"sourceId","kind":"scalar","type":"String"},{"name":"sourceLabel","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"document_embeddings"},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"ProductToReview"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"reviews"},"SampleWork":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"fileUrl","kind":"scalar","type":"String"},{"name":"publicId","kind":"scalar","type":"String"},{"name":"fileSize","kind":"scalar","type":"Int"},{"name":"order","kind":"scalar","type":"Int"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"sample_works"},"ShippingSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"insideDhakaShippingFee","kind":"scalar","type":"Float"},{"name":"outsideDhakaShippingFee","kind":"scalar","type":"Float"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"shipping_settings"},"Shop":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"logo","kind":"scalar","type":"String"},{"name":"banner","kind":"scalar","type":"String"},{"name":"vendorId","kind":"scalar","type":"String"},{"name":"vendor","kind":"object","type":"User","relationName":"ShopToUser"},{"name":"products","kind":"object","type":"Product","relationName":"ProductToShop"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"OrderItemToShop"},{"name":"coupons","kind":"object","type":"Coupon","relationName":"CouponToShop"},{"name":"posCartItems","kind":"object","type":"PosCartItem","relationName":"PosCartItemToShop"},{"name":"posOrders","kind":"object","type":"Order","relationName":"OrderToShop"},{"name":"landingPages","kind":"object","type":"LandingPage","relationName":"LandingPageToShop"},{"name":"expenseCategories","kind":"object","type":"ExpenseCategory","relationName":"ExpenseCategoryToShop"},{"name":"expenses","kind":"object","type":"Expense","relationName":"ExpenseToShop"},{"name":"orderReturns","kind":"object","type":"OrderReturn","relationName":"OrderReturnToShop"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"shops"},"SiteSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"siteName","kind":"scalar","type":"String"},{"name":"tagline","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"logo","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"facebook","kind":"scalar","type":"String"},{"name":"youtube","kind":"scalar","type":"String"},{"name":"instagram","kind":"scalar","type":"String"},{"name":"linkedin","kind":"scalar","type":"String"},{"name":"tiktok","kind":"scalar","type":"String"},{"name":"whatsapp","kind":"scalar","type":"String"},{"name":"copyrightText","kind":"scalar","type":"String"},{"name":"lowStockThreshold","kind":"scalar","type":"Int"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"site_settings"},"SizeChart":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"products","kind":"object","type":"Product","relationName":"ProductToSizeChart"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"size_charts"},"SmsSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"enabled","kind":"scalar","type":"Boolean"},{"name":"apiKey","kind":"scalar","type":"String"},{"name":"senderId","kind":"scalar","type":"String"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"sms_settings"},"StaffRole":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"permissions","kind":"scalar","type":"String"},{"name":"users","kind":"object","type":"User","relationName":"StaffRoleToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"staff_roles"},"Testimonial":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"role","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"avatar","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"order","kind":"scalar","type":"Int"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"testimonials"}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","AbandonedCheckout.findUnique","AbandonedCheckout.findUniqueOrThrow","orderBy","cursor","AbandonedCheckout.findFirst","AbandonedCheckout.findFirstOrThrow","AbandonedCheckout.findMany","data","AbandonedCheckout.createOne","AbandonedCheckout.createMany","AbandonedCheckout.createManyAndReturn","AbandonedCheckout.updateOne","AbandonedCheckout.updateMany","AbandonedCheckout.updateManyAndReturn","create","update","AbandonedCheckout.upsertOne","AbandonedCheckout.deleteOne","AbandonedCheckout.deleteMany","having","_count","_avg","_sum","_min","_max","AbandonedCheckout.groupBy","AbandonedCheckout.aggregate","users","staffRole","user","sessions","accounts","admin","vendor","shop","parent","subcategories","products","category","homeCategorySections","brand","sizeChart","product","items","order","notifications","processedByAdmin","orderReturn","orderItem","productVariant","returns","coupon","orders","returnItems","orderItems","cart","cartItems","variants","reviews","coupons","posCartItems","landingPages","flashSale","flashSaleEntries","posOrders","expenses","expenseCategories","orderReturns","processedOrderReturns","Admin.findUnique","Admin.findUniqueOrThrow","Admin.findFirst","Admin.findFirstOrThrow","Admin.findMany","Admin.createOne","Admin.createMany","Admin.createManyAndReturn","Admin.updateOne","Admin.updateMany","Admin.updateManyAndReturn","Admin.upsertOne","Admin.deleteOne","Admin.deleteMany","Admin.groupBy","Admin.aggregate","attribute","values","Attribute.findUnique","Attribute.findUniqueOrThrow","Attribute.findFirst","Attribute.findFirstOrThrow","Attribute.findMany","Attribute.createOne","Attribute.createMany","Attribute.createManyAndReturn","Attribute.updateOne","Attribute.updateMany","Attribute.updateManyAndReturn","Attribute.upsertOne","Attribute.deleteOne","Attribute.deleteMany","Attribute.groupBy","Attribute.aggregate","AttributeValue.findUnique","AttributeValue.findUniqueOrThrow","AttributeValue.findFirst","AttributeValue.findFirstOrThrow","AttributeValue.findMany","AttributeValue.createOne","AttributeValue.createMany","AttributeValue.createManyAndReturn","AttributeValue.updateOne","AttributeValue.updateMany","AttributeValue.updateManyAndReturn","AttributeValue.upsertOne","AttributeValue.deleteOne","AttributeValue.deleteMany","AttributeValue.groupBy","AttributeValue.aggregate","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","User.upsertOne","User.deleteOne","User.deleteMany","User.groupBy","User.aggregate","Session.findUnique","Session.findUniqueOrThrow","Session.findFirst","Session.findFirstOrThrow","Session.findMany","Session.createOne","Session.createMany","Session.createManyAndReturn","Session.updateOne","Session.updateMany","Session.updateManyAndReturn","Session.upsertOne","Session.deleteOne","Session.deleteMany","Session.groupBy","Session.aggregate","Account.findUnique","Account.findUniqueOrThrow","Account.findFirst","Account.findFirstOrThrow","Account.findMany","Account.createOne","Account.createMany","Account.createManyAndReturn","Account.updateOne","Account.updateMany","Account.updateManyAndReturn","Account.upsertOne","Account.deleteOne","Account.deleteMany","Account.groupBy","Account.aggregate","Verification.findUnique","Verification.findUniqueOrThrow","Verification.findFirst","Verification.findFirstOrThrow","Verification.findMany","Verification.createOne","Verification.createMany","Verification.createManyAndReturn","Verification.updateOne","Verification.updateMany","Verification.updateManyAndReturn","Verification.upsertOne","Verification.deleteOne","Verification.deleteMany","Verification.groupBy","Verification.aggregate","BlockedPhone.findUnique","BlockedPhone.findUniqueOrThrow","BlockedPhone.findFirst","BlockedPhone.findFirstOrThrow","BlockedPhone.findMany","BlockedPhone.createOne","BlockedPhone.createMany","BlockedPhone.createManyAndReturn","BlockedPhone.updateOne","BlockedPhone.updateMany","BlockedPhone.updateManyAndReturn","BlockedPhone.upsertOne","BlockedPhone.deleteOne","BlockedPhone.deleteMany","BlockedPhone.groupBy","BlockedPhone.aggregate","Blog.findUnique","Blog.findUniqueOrThrow","Blog.findFirst","Blog.findFirstOrThrow","Blog.findMany","Blog.createOne","Blog.createMany","Blog.createManyAndReturn","Blog.updateOne","Blog.updateMany","Blog.updateManyAndReturn","Blog.upsertOne","Blog.deleteOne","Blog.deleteMany","Blog.groupBy","Blog.aggregate","Brand.findUnique","Brand.findUniqueOrThrow","Brand.findFirst","Brand.findFirstOrThrow","Brand.findMany","Brand.createOne","Brand.createMany","Brand.createManyAndReturn","Brand.updateOne","Brand.updateMany","Brand.updateManyAndReturn","Brand.upsertOne","Brand.deleteOne","Brand.deleteMany","Brand.groupBy","Brand.aggregate","Cart.findUnique","Cart.findUniqueOrThrow","Cart.findFirst","Cart.findFirstOrThrow","Cart.findMany","Cart.createOne","Cart.createMany","Cart.createManyAndReturn","Cart.updateOne","Cart.updateMany","Cart.updateManyAndReturn","Cart.upsertOne","Cart.deleteOne","Cart.deleteMany","Cart.groupBy","Cart.aggregate","CartItem.findUnique","CartItem.findUniqueOrThrow","CartItem.findFirst","CartItem.findFirstOrThrow","CartItem.findMany","CartItem.createOne","CartItem.createMany","CartItem.createManyAndReturn","CartItem.updateOne","CartItem.updateMany","CartItem.updateManyAndReturn","CartItem.upsertOne","CartItem.deleteOne","CartItem.deleteMany","CartItem.groupBy","CartItem.aggregate","Category.findUnique","Category.findUniqueOrThrow","Category.findFirst","Category.findFirstOrThrow","Category.findMany","Category.createOne","Category.createMany","Category.createManyAndReturn","Category.updateOne","Category.updateMany","Category.updateManyAndReturn","Category.upsertOne","Category.deleteOne","Category.deleteMany","Category.groupBy","Category.aggregate","ClientLogo.findUnique","ClientLogo.findUniqueOrThrow","ClientLogo.findFirst","ClientLogo.findFirstOrThrow","ClientLogo.findMany","ClientLogo.createOne","ClientLogo.createMany","ClientLogo.createManyAndReturn","ClientLogo.updateOne","ClientLogo.updateMany","ClientLogo.updateManyAndReturn","ClientLogo.upsertOne","ClientLogo.deleteOne","ClientLogo.deleteMany","ClientLogo.groupBy","ClientLogo.aggregate","Coupon.findUnique","Coupon.findUniqueOrThrow","Coupon.findFirst","Coupon.findFirstOrThrow","Coupon.findMany","Coupon.createOne","Coupon.createMany","Coupon.createManyAndReturn","Coupon.updateOne","Coupon.updateMany","Coupon.updateManyAndReturn","Coupon.upsertOne","Coupon.deleteOne","Coupon.deleteMany","Coupon.groupBy","Coupon.aggregate","CouponProduct.findUnique","CouponProduct.findUniqueOrThrow","CouponProduct.findFirst","CouponProduct.findFirstOrThrow","CouponProduct.findMany","CouponProduct.createOne","CouponProduct.createMany","CouponProduct.createManyAndReturn","CouponProduct.updateOne","CouponProduct.updateMany","CouponProduct.updateManyAndReturn","CouponProduct.upsertOne","CouponProduct.deleteOne","CouponProduct.deleteMany","CouponProduct.groupBy","CouponProduct.aggregate","CourierSetting.findUnique","CourierSetting.findUniqueOrThrow","CourierSetting.findFirst","CourierSetting.findFirstOrThrow","CourierSetting.findMany","CourierSetting.createOne","CourierSetting.createMany","CourierSetting.createManyAndReturn","CourierSetting.updateOne","CourierSetting.updateMany","CourierSetting.updateManyAndReturn","CourierSetting.upsertOne","CourierSetting.deleteOne","CourierSetting.deleteMany","CourierSetting.groupBy","CourierSetting.aggregate","ExpenseCategory.findUnique","ExpenseCategory.findUniqueOrThrow","ExpenseCategory.findFirst","ExpenseCategory.findFirstOrThrow","ExpenseCategory.findMany","ExpenseCategory.createOne","ExpenseCategory.createMany","ExpenseCategory.createManyAndReturn","ExpenseCategory.updateOne","ExpenseCategory.updateMany","ExpenseCategory.updateManyAndReturn","ExpenseCategory.upsertOne","ExpenseCategory.deleteOne","ExpenseCategory.deleteMany","ExpenseCategory.groupBy","ExpenseCategory.aggregate","Expense.findUnique","Expense.findUniqueOrThrow","Expense.findFirst","Expense.findFirstOrThrow","Expense.findMany","Expense.createOne","Expense.createMany","Expense.createManyAndReturn","Expense.updateOne","Expense.updateMany","Expense.updateManyAndReturn","Expense.upsertOne","Expense.deleteOne","Expense.deleteMany","Expense.groupBy","Expense.aggregate","Faq.findUnique","Faq.findUniqueOrThrow","Faq.findFirst","Faq.findFirstOrThrow","Faq.findMany","Faq.createOne","Faq.createMany","Faq.createManyAndReturn","Faq.updateOne","Faq.updateMany","Faq.updateManyAndReturn","Faq.upsertOne","Faq.deleteOne","Faq.deleteMany","Faq.groupBy","Faq.aggregate","FlashSale.findUnique","FlashSale.findUniqueOrThrow","FlashSale.findFirst","FlashSale.findFirstOrThrow","FlashSale.findMany","FlashSale.createOne","FlashSale.createMany","FlashSale.createManyAndReturn","FlashSale.updateOne","FlashSale.updateMany","FlashSale.updateManyAndReturn","FlashSale.upsertOne","FlashSale.deleteOne","FlashSale.deleteMany","FlashSale.groupBy","FlashSale.aggregate","FlashSaleProduct.findUnique","FlashSaleProduct.findUniqueOrThrow","FlashSaleProduct.findFirst","FlashSaleProduct.findFirstOrThrow","FlashSaleProduct.findMany","FlashSaleProduct.createOne","FlashSaleProduct.createMany","FlashSaleProduct.createManyAndReturn","FlashSaleProduct.updateOne","FlashSaleProduct.updateMany","FlashSaleProduct.updateManyAndReturn","FlashSaleProduct.upsertOne","FlashSaleProduct.deleteOne","FlashSaleProduct.deleteMany","FlashSaleProduct.groupBy","FlashSaleProduct.aggregate","GtmSetting.findUnique","GtmSetting.findUniqueOrThrow","GtmSetting.findFirst","GtmSetting.findFirstOrThrow","GtmSetting.findMany","GtmSetting.createOne","GtmSetting.createMany","GtmSetting.createManyAndReturn","GtmSetting.updateOne","GtmSetting.updateMany","GtmSetting.updateManyAndReturn","GtmSetting.upsertOne","GtmSetting.deleteOne","GtmSetting.deleteMany","GtmSetting.groupBy","GtmSetting.aggregate","HeroSlider.findUnique","HeroSlider.findUniqueOrThrow","HeroSlider.findFirst","HeroSlider.findFirstOrThrow","HeroSlider.findMany","HeroSlider.createOne","HeroSlider.createMany","HeroSlider.createManyAndReturn","HeroSlider.updateOne","HeroSlider.updateMany","HeroSlider.updateManyAndReturn","HeroSlider.upsertOne","HeroSlider.deleteOne","HeroSlider.deleteMany","HeroSlider.groupBy","HeroSlider.aggregate","HomeCategorySection.findUnique","HomeCategorySection.findUniqueOrThrow","HomeCategorySection.findFirst","HomeCategorySection.findFirstOrThrow","HomeCategorySection.findMany","HomeCategorySection.createOne","HomeCategorySection.createMany","HomeCategorySection.createManyAndReturn","HomeCategorySection.updateOne","HomeCategorySection.updateMany","HomeCategorySection.updateManyAndReturn","HomeCategorySection.upsertOne","HomeCategorySection.deleteOne","HomeCategorySection.deleteMany","HomeCategorySection.groupBy","HomeCategorySection.aggregate","HomePromo.findUnique","HomePromo.findUniqueOrThrow","HomePromo.findFirst","HomePromo.findFirstOrThrow","HomePromo.findMany","HomePromo.createOne","HomePromo.createMany","HomePromo.createManyAndReturn","HomePromo.updateOne","HomePromo.updateMany","HomePromo.updateManyAndReturn","HomePromo.upsertOne","HomePromo.deleteOne","HomePromo.deleteMany","HomePromo.groupBy","HomePromo.aggregate","LandingPage.findUnique","LandingPage.findUniqueOrThrow","LandingPage.findFirst","LandingPage.findFirstOrThrow","LandingPage.findMany","LandingPage.createOne","LandingPage.createMany","LandingPage.createManyAndReturn","LandingPage.updateOne","LandingPage.updateMany","LandingPage.updateManyAndReturn","LandingPage.upsertOne","LandingPage.deleteOne","LandingPage.deleteMany","LandingPage.groupBy","LandingPage.aggregate","Notification.findUnique","Notification.findUniqueOrThrow","Notification.findFirst","Notification.findFirstOrThrow","Notification.findMany","Notification.createOne","Notification.createMany","Notification.createManyAndReturn","Notification.updateOne","Notification.updateMany","Notification.updateManyAndReturn","Notification.upsertOne","Notification.deleteOne","Notification.deleteMany","Notification.groupBy","Notification.aggregate","Order.findUnique","Order.findUniqueOrThrow","Order.findFirst","Order.findFirstOrThrow","Order.findMany","Order.createOne","Order.createMany","Order.createManyAndReturn","Order.updateOne","Order.updateMany","Order.updateManyAndReturn","Order.upsertOne","Order.deleteOne","Order.deleteMany","Order.groupBy","Order.aggregate","OrderItem.findUnique","OrderItem.findUniqueOrThrow","OrderItem.findFirst","OrderItem.findFirstOrThrow","OrderItem.findMany","OrderItem.createOne","OrderItem.createMany","OrderItem.createManyAndReturn","OrderItem.updateOne","OrderItem.updateMany","OrderItem.updateManyAndReturn","OrderItem.upsertOne","OrderItem.deleteOne","OrderItem.deleteMany","OrderItem.groupBy","OrderItem.aggregate","OrderReturn.findUnique","OrderReturn.findUniqueOrThrow","OrderReturn.findFirst","OrderReturn.findFirstOrThrow","OrderReturn.findMany","OrderReturn.createOne","OrderReturn.createMany","OrderReturn.createManyAndReturn","OrderReturn.updateOne","OrderReturn.updateMany","OrderReturn.updateManyAndReturn","OrderReturn.upsertOne","OrderReturn.deleteOne","OrderReturn.deleteMany","OrderReturn.groupBy","OrderReturn.aggregate","OrderReturnItem.findUnique","OrderReturnItem.findUniqueOrThrow","OrderReturnItem.findFirst","OrderReturnItem.findFirstOrThrow","OrderReturnItem.findMany","OrderReturnItem.createOne","OrderReturnItem.createMany","OrderReturnItem.createManyAndReturn","OrderReturnItem.updateOne","OrderReturnItem.updateMany","OrderReturnItem.updateManyAndReturn","OrderReturnItem.upsertOne","OrderReturnItem.deleteOne","OrderReturnItem.deleteMany","OrderReturnItem.groupBy","OrderReturnItem.aggregate","PageContent.findUnique","PageContent.findUniqueOrThrow","PageContent.findFirst","PageContent.findFirstOrThrow","PageContent.findMany","PageContent.createOne","PageContent.createMany","PageContent.createManyAndReturn","PageContent.updateOne","PageContent.updateMany","PageContent.updateManyAndReturn","PageContent.upsertOne","PageContent.deleteOne","PageContent.deleteMany","PageContent.groupBy","PageContent.aggregate","PaymentSetting.findUnique","PaymentSetting.findUniqueOrThrow","PaymentSetting.findFirst","PaymentSetting.findFirstOrThrow","PaymentSetting.findMany","PaymentSetting.createOne","PaymentSetting.createMany","PaymentSetting.createManyAndReturn","PaymentSetting.updateOne","PaymentSetting.updateMany","PaymentSetting.updateManyAndReturn","PaymentSetting.upsertOne","PaymentSetting.deleteOne","PaymentSetting.deleteMany","PaymentSetting.groupBy","PaymentSetting.aggregate","Popup.findUnique","Popup.findUniqueOrThrow","Popup.findFirst","Popup.findFirstOrThrow","Popup.findMany","Popup.createOne","Popup.createMany","Popup.createManyAndReturn","Popup.updateOne","Popup.updateMany","Popup.updateManyAndReturn","Popup.upsertOne","Popup.deleteOne","Popup.deleteMany","Popup.groupBy","Popup.aggregate","PosCartItem.findUnique","PosCartItem.findUniqueOrThrow","PosCartItem.findFirst","PosCartItem.findFirstOrThrow","PosCartItem.findMany","PosCartItem.createOne","PosCartItem.createMany","PosCartItem.createManyAndReturn","PosCartItem.updateOne","PosCartItem.updateMany","PosCartItem.updateManyAndReturn","PosCartItem.upsertOne","PosCartItem.deleteOne","PosCartItem.deleteMany","PosCartItem.groupBy","PosCartItem.aggregate","Product.findUnique","Product.findUniqueOrThrow","Product.findFirst","Product.findFirstOrThrow","Product.findMany","Product.createOne","Product.createMany","Product.createManyAndReturn","Product.updateOne","Product.updateMany","Product.updateManyAndReturn","Product.upsertOne","Product.deleteOne","Product.deleteMany","Product.groupBy","Product.aggregate","ProductVariant.findUnique","ProductVariant.findUniqueOrThrow","ProductVariant.findFirst","ProductVariant.findFirstOrThrow","ProductVariant.findMany","ProductVariant.createOne","ProductVariant.createMany","ProductVariant.createManyAndReturn","ProductVariant.updateOne","ProductVariant.updateMany","ProductVariant.updateManyAndReturn","ProductVariant.upsertOne","ProductVariant.deleteOne","ProductVariant.deleteMany","ProductVariant.groupBy","ProductVariant.aggregate","DocumentEmbedding.findUnique","DocumentEmbedding.findUniqueOrThrow","DocumentEmbedding.findFirst","DocumentEmbedding.findFirstOrThrow","DocumentEmbedding.findMany","DocumentEmbedding.updateOne","DocumentEmbedding.updateMany","DocumentEmbedding.updateManyAndReturn","DocumentEmbedding.deleteOne","DocumentEmbedding.deleteMany","DocumentEmbedding.groupBy","DocumentEmbedding.aggregate","Review.findUnique","Review.findUniqueOrThrow","Review.findFirst","Review.findFirstOrThrow","Review.findMany","Review.createOne","Review.createMany","Review.createManyAndReturn","Review.updateOne","Review.updateMany","Review.updateManyAndReturn","Review.upsertOne","Review.deleteOne","Review.deleteMany","Review.groupBy","Review.aggregate","SampleWork.findUnique","SampleWork.findUniqueOrThrow","SampleWork.findFirst","SampleWork.findFirstOrThrow","SampleWork.findMany","SampleWork.createOne","SampleWork.createMany","SampleWork.createManyAndReturn","SampleWork.updateOne","SampleWork.updateMany","SampleWork.updateManyAndReturn","SampleWork.upsertOne","SampleWork.deleteOne","SampleWork.deleteMany","SampleWork.groupBy","SampleWork.aggregate","ShippingSetting.findUnique","ShippingSetting.findUniqueOrThrow","ShippingSetting.findFirst","ShippingSetting.findFirstOrThrow","ShippingSetting.findMany","ShippingSetting.createOne","ShippingSetting.createMany","ShippingSetting.createManyAndReturn","ShippingSetting.updateOne","ShippingSetting.updateMany","ShippingSetting.updateManyAndReturn","ShippingSetting.upsertOne","ShippingSetting.deleteOne","ShippingSetting.deleteMany","ShippingSetting.groupBy","ShippingSetting.aggregate","Shop.findUnique","Shop.findUniqueOrThrow","Shop.findFirst","Shop.findFirstOrThrow","Shop.findMany","Shop.createOne","Shop.createMany","Shop.createManyAndReturn","Shop.updateOne","Shop.updateMany","Shop.updateManyAndReturn","Shop.upsertOne","Shop.deleteOne","Shop.deleteMany","Shop.groupBy","Shop.aggregate","SiteSetting.findUnique","SiteSetting.findUniqueOrThrow","SiteSetting.findFirst","SiteSetting.findFirstOrThrow","SiteSetting.findMany","SiteSetting.createOne","SiteSetting.createMany","SiteSetting.createManyAndReturn","SiteSetting.updateOne","SiteSetting.updateMany","SiteSetting.updateManyAndReturn","SiteSetting.upsertOne","SiteSetting.deleteOne","SiteSetting.deleteMany","SiteSetting.groupBy","SiteSetting.aggregate","SizeChart.findUnique","SizeChart.findUniqueOrThrow","SizeChart.findFirst","SizeChart.findFirstOrThrow","SizeChart.findMany","SizeChart.createOne","SizeChart.createMany","SizeChart.createManyAndReturn","SizeChart.updateOne","SizeChart.updateMany","SizeChart.updateManyAndReturn","SizeChart.upsertOne","SizeChart.deleteOne","SizeChart.deleteMany","SizeChart.groupBy","SizeChart.aggregate","SmsSetting.findUnique","SmsSetting.findUniqueOrThrow","SmsSetting.findFirst","SmsSetting.findFirstOrThrow","SmsSetting.findMany","SmsSetting.createOne","SmsSetting.createMany","SmsSetting.createManyAndReturn","SmsSetting.updateOne","SmsSetting.updateMany","SmsSetting.updateManyAndReturn","SmsSetting.upsertOne","SmsSetting.deleteOne","SmsSetting.deleteMany","SmsSetting.groupBy","SmsSetting.aggregate","StaffRole.findUnique","StaffRole.findUniqueOrThrow","StaffRole.findFirst","StaffRole.findFirstOrThrow","StaffRole.findMany","StaffRole.createOne","StaffRole.createMany","StaffRole.createManyAndReturn","StaffRole.updateOne","StaffRole.updateMany","StaffRole.updateManyAndReturn","StaffRole.upsertOne","StaffRole.deleteOne","StaffRole.deleteMany","StaffRole.groupBy","StaffRole.aggregate","Testimonial.findUnique","Testimonial.findUniqueOrThrow","Testimonial.findFirst","Testimonial.findFirstOrThrow","Testimonial.findMany","Testimonial.createOne","Testimonial.createMany","Testimonial.createManyAndReturn","Testimonial.updateOne","Testimonial.updateMany","Testimonial.updateManyAndReturn","Testimonial.upsertOne","Testimonial.deleteOne","Testimonial.deleteMany","Testimonial.groupBy","Testimonial.aggregate","AND","OR","NOT","id","name","role","content","avatar","rating","isActive","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","permissions","has","hasEvery","hasSome","every","some","none","enabled","apiKey","senderId","image","siteName","tagline","description","logo","phone","email","address","facebook","youtube","instagram","linkedin","tiktok","whatsapp","copyrightText","lowStockThreshold","banner","vendorId","insideDhakaShippingFee","outsideDhakaShippingFee","title","fileUrl","publicId","fileSize","comment","userId","productId","chunkKey","sourceType","sourceId","sourceLabel","metadata","isDeleted","deletedAt","string_contains","string_starts_with","string_ends_with","array_starts_with","array_ends_with","array_contains","combination","sku","quantity","purchasePrice","regularPrice","sellPrice","slug","shortDescription","images","videoUrl","stock","ProductStatus","status","ProductType","type","attributes","tags","VatType","vatType","vatPercentage","freeShipping","highlights","shopId","categoryId","brandId","sizeChartId","ProductHighlight","productVariantId","productName","price","productImage","link","delaySeconds","codEnabled","sslcommerzEnabled","sslcommerzMode","sslcommerzStoreId","sslcommerzStorePassword","bkashEnabled","bkashMode","bkashAppKey","bkashAppSecret","bkashUsername","bkashPassword","orderReturnId","orderItemId","subtotal","orderId","refundAmount","shippingFee","discountAmount","newTotalAmount","processedByAdminId","costPrice","vendorEarning","platformEarning","OrderStatus","returnedQuantity","orderSeq","orderNumber","OrderType","orderType","totalAmount","PaymentStatus","paymentStatus","paymentMethod","orderStatus","fullName","district","notes","couponId","CourierProvider","courierProvider","courierConsignmentId","courierTrackingCode","courierStatus","courierAssignedAt","paymentValId","bkashPaymentId","NotificationType","message","isRead","themeColor","showGallerySection","showAboutSection","showDescriptionSection","showReviewsSection","sectionOrder","campaignTitle","campaignShortDescription","bannerImage","regularPriceLabel","offerPriceLabel","galleryHeading","galleryDescription","galleryImages","aboutHeading","aboutDescription","descriptionTitle","reviewHeading","reviewImages","orderFormHeading","orderButtonText","views","tickerText","tickerEnabled","bannerLink","bannerEnabled","productsBannerImage","productsBannerLink","productsBannerEnabled","HomeCategoryDisplayType","displayType","HeroMediaType","mediaType","HeroSliderType","isEnabled","containerId","scriptDomain","flashSaleId","startTime","endTime","question","answer","note","date","pathaoEnabled","pathaoBaseUrl","pathaoClientId","pathaoClientSecret","pathaoUsername","pathaoPassword","pathaoStoreId","steadfastEnabled","steadfastApiKey","steadfastSecretKey","steadfastWebhookAuthToken","redxEnabled","redxMode","redxAccessToken","redxPickupStoreId","redxWebhookToken","code","DiscountType","discountType","maxDiscountAmount","minPurchaseAmount","startDate","endDate","website","icon","parentId","cartId","excerpt","coverImage","author","isPublished","reason","blockedById","blockedBy","identifier","value","expiresAt","accountId","providerId","accessToken","refreshToken","idToken","accessTokenExpiresAt","refreshTokenExpiresAt","scope","password","token","ipAddress","userAgent","emailVerified","Role","UserStatus","needPasswordChange","staffRoleId","attributeId","value_attributeId","profilePhoto","contactNumber","flashSaleId_productId","userId_productId","cartId_productId_productVariantId","couponId_productId","sessionToken","CheckoutSource","source","landingPageSlug","total","lastActivityAt","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide","push"]'),
  graph: "-xXEA4wGEywAAL4MACDEBgAAvAwAMMUGAAAEABDGBgAAvAwAMMcGAQAAAAHOBkAA2goAIeoGAQDXCgAh7AYBANcKACG7BwgA9wsAIb4HCAD3CwAhvwcIAPcLACHQBwEA1woAIdEHAQDXCgAh0gcBANcKACHJCAEAAAABywgAAL0MywgizAgBANcKACHNCAgA9wsAIc4IQADaCgAhAQAAAAEAIAEAAAABACATLAAAvgwAIMQGAAC8DAAwxQYAAAQAEMYGAAC8DAAwxwYBANYKACHOBkAA2goAIeoGAQDXCgAh7AYBANcKACG7BwgA9wsAIb4HCAD3CwAhvwcIAPcLACHQBwEA1woAIdEHAQDXCgAh0gcBANcKACHJCAEA1goAIcsIAAC9DMsIIswIAQDXCgAhzQgIAPcLACHOCEAA2goAIQrqBgAAvwwAIOwGAAC_DAAguwcAAL8MACC-BwAAvwwAIL8HAAC_DAAg0AcAAL8MACDRBwAAvwwAINIHAAC_DAAgzAgAAL8MACDNCAAAvwwAIAMAAAAEACADAAAFADAEAAABACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIBAsgAAAAAHHBgEAAAABzgZAAAAAAeoGAQAAAAHsBgEAAAABuwcIAAAAAb4HCAAAAAG_BwgAAAAB0AcBAAAAAdEHAQAAAAHSBwEAAAAByQgBAAAAAcsIAAAAywgCzAgBAAAAAc0ICAAAAAHOCEAAAAABAQgAAAkAIBAsgAAAAAHHBgEAAAABzgZAAAAAAeoGAQAAAAHsBgEAAAABuwcIAAAAAb4HCAAAAAG_BwgAAAAB0AcBAAAAAdEHAQAAAAHSBwEAAAAByQgBAAAAAcsIAAAAywgCzAgBAAAAAc0ICAAAAAHOCEAAAAABAQgAAAsAMAEIAAALADAQLIAAAAABxwYBAMUMACHOBkAAyQwAIeoGAQDGDAAh7AYBAMYMACG7BwgA8w0AIb4HCADzDQAhvwcIAPMNACHQBwEAxgwAIdEHAQDGDAAh0gcBAMYMACHJCAEAxQwAIcsIAADkE8sIIswIAQDGDAAhzQgIAPMNACHOCEAAyQwAIQIAAAABACAIAAAOACAQLIAAAAABxwYBAMUMACHOBkAAyQwAIeoGAQDGDAAh7AYBAMYMACG7BwgA8w0AIb4HCADzDQAhvwcIAPMNACHQBwEAxgwAIdEHAQDGDAAh0gcBAMYMACHJCAEAxQwAIcsIAADkE8sIIswIAQDGDAAhzQgIAPMNACHOCEAAyQwAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgDxUAAN8TACAWAADgEwAgFwAA4xMAIBgAAOITACAZAADhEwAg6gYAAL8MACDsBgAAvwwAILsHAAC_DAAgvgcAAL8MACC_BwAAvwwAINAHAAC_DAAg0QcAAL8MACDSBwAAvwwAIMwIAAC_DAAgzQgAAL8MACATLAAAuAwAIMQGAAC2DAAwxQYAABcAEMYGAAC2DAAwxwYBAMQKACHOBkAAyAoAIeoGAQDFCgAh7AYBAMUKACG7BwgAnAsAIb4HCACcCwAhvwcIAJwLACHQBwEAxQoAIdEHAQDFCgAh0gcBAMUKACHJCAEAxAoAIcsIAAC3DMsIIswIAQDFCgAhzQgIAJwLACHOCEAAyAoAIQMAAAAEACADAAAWADAUAAAXACADAAAABAAgAwAABQAwBAAAAQAgDh4AAOgKACDEBgAAqwwAMMUGAAArABDGBgAAqwwAMMcGAQAAAAHIBgEA1goAIc4GQADaCgAhzwZAANoKACHrBgEAAAAB_gYBAAAAAYUHIADZCgAhhgdAAIULACHDCAEA1woAIcQIAQDXCgAhAQAAABoAIAkcAADeCgAgxAYAAN0KADDFBgAAHAAQxgYAAN0KADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIdsGAADcCgAgAQAAABwAIBodAACxDAAgHwAAsgwAICAAALMMACAhAAC0DAAgIwAAiwwAIC4AAIwMACA1AADsCgAgOAAAtQwAIDsAAKoMACBFAADwCgAgxAYAAK4MADDFBgAAHgAQxgYAAK4MADDHBgEA1goAIcgGAQDWCgAhyQYAAK8MvggizgZAANoKACHPBkAA2goAIeUGAQDXCgAh6wYBANYKACGFByAA2QoAIYYHQACFCwAhmQcAALAMvwgivAggANkKACG_CCAA2QoAIcAIAQDXCgAhDR0AANsTACAfAADcEwAgIAAA3RMAICEAAN4TACAjAADIEwAgLgAAzhMAIDUAALMRACA4AADMEwAgOwAA2hMAIEUAALcRACDlBgAAvwwAIIYHAAC_DAAgwAgAAL8MACAaHQAAsQwAIB8AALIMACAgAACzDAAgIQAAtAwAICMAAIsMACAuAACMDAAgNQAA7AoAIDgAALUMACA7AACqDAAgRQAA8AoAIMQGAACuDAAwxQYAAB4AEMYGAACuDAAwxwYBAAAAAcgGAQDWCgAhyQYAAK8MvggizgZAANoKACHPBkAA2goAIeUGAQDXCgAh6wYBAAAAAYUHIADZCgAhhgdAAIULACGZBwAAsAy_CCK8CCAA2QoAIb8IIADZCgAhwAgBANcKACEDAAAAHgAgAwAAHwAwBAAAIAAgAQAAAB4AIAweAADoCgAgxAYAAK0MADDFBgAAIwAQxgYAAK0MADDHBgEA1goAIc4GQADaCgAhzwZAANoKACH-BgEA1goAIa8IQADaCgAhuQgBANYKACG6CAEA1woAIbsIAQDXCgAhAx4AAK8RACC6CAAAvwwAILsIAAC_DAAgDB4AAOgKACDEBgAArQwAMMUGAAAjABDGBgAArQwAMMcGAQAAAAHOBkAA2goAIc8GQADaCgAh_gYBANYKACGvCEAA2goAIbkIAQAAAAG6CAEA1woAIbsIAQDXCgAhAwAAACMAIAMAACQAMAQAACUAIBEeAADoCgAgxAYAAKwMADDFBgAAJwAQxgYAAKwMADDHBgEA1goAIc4GQADaCgAhzwZAANoKACH-BgEA1goAIbAIAQDWCgAhsQgBANYKACGyCAEA1woAIbMIAQDXCgAhtAgBANcKACG1CEAAhQsAIbYIQACFCwAhtwgBANcKACG4CAEA1woAIQgeAACvEQAgsggAAL8MACCzCAAAvwwAILQIAAC_DAAgtQgAAL8MACC2CAAAvwwAILcIAAC_DAAguAgAAL8MACARHgAA6AoAIMQGAACsDAAwxQYAACcAEMYGAACsDAAwxwYBAAAAAc4GQADaCgAhzwZAANoKACH-BgEA1goAIbAIAQDWCgAhsQgBANYKACGyCAEA1woAIbMIAQDXCgAhtAgBANcKACG1CEAAhQsAIbYIQACFCwAhtwgBANcKACG4CAEA1woAIQMAAAAnACADAAAoADAEAAApACAOHgAA6AoAIMQGAACrDAAwxQYAACsAEMYGAACrDAAwxwYBANYKACHIBgEA1goAIc4GQADaCgAhzwZAANoKACHrBgEA1goAIf4GAQDWCgAhhQcgANkKACGGB0AAhQsAIcMIAQDXCgAhxAgBANcKACEBAAAAKwAgFSIAAOgKACAmAADjCgAgNwAA6QoAIDwAAOoKACA9AADrCgAgPgAA7QoAIEEAAOwKACBCAADvCgAgQwAA7goAIEQAAPAKACDEBgAA5woAMMUGAAAtABDGBgAA5woAMMcGAQDWCgAhyAYBANYKACHOBkAA2goAIc8GQADaCgAh6AYBANcKACHpBgEA1woAIfUGAQDXCgAh9gYBANYKACEBAAAALQAgKiMAAPMLACAnAACeDAAgKQAApwwAICoAAKgMACA2AACWDAAgNwAA6QoAIDkAANcLACA6AACpDAAgOwAAqgwAIDwAAPgLACA9AADrCgAgPgAA7QoAIEAAAMULACDEBgAAowwAMMUGAAAvABDGBgAAowwAMMcGAQDWCgAhyAYBANYKACHOBkAA2goAIc8GQADaCgAh6AYBANYKACGOBwEA1woAIZAHCAD1CgAhkQcIAPUKACGSBwgA9QoAIZMHAQDWCgAhlAcBANYKACGVBwAA3AoAIJYHAQDXCgAhlwcCANgKACGZBwAApAyZByKbBwAApQybByKcBwAAhAsAIJ0HAADcCgAgnwcAAKYMnwcioAcIAPUKACGhByAA2QoAIaIHAACLCwAgowcBANYKACGkBwEA1goAIaUHAQDXCgAhpgcBANcKACESIwAAyBMAICcAANQTACApAADXEwAgKgAA2BMAIDYAANMTACA3AACwEQAgOQAAgxMAIDoAANkTACA7AADaEwAgPAAAyRMAID0AALIRACA-AAC0EQAgQAAAqxIAII4HAAC_DAAglgcAAL8MACCcBwAAvwwAIKUHAAC_DAAgpgcAAL8MACAqIwAA8wsAICcAAJ4MACApAACnDAAgKgAAqAwAIDYAAJYMACA3AADpCgAgOQAA1wsAIDoAAKkMACA7AACqDAAgPAAA-AsAID0AAOsKACA-AADtCgAgQAAAxQsAIMQGAACjDAAwxQYAAC8AEMYGAACjDAAwxwYBAAAAAcgGAQDWCgAhzgZAANoKACHPBkAA2goAIegGAQDWCgAhjgcBAAAAAZAHCAD1CgAhkQcIAPUKACGSBwgA9QoAIZMHAQAAAAGUBwEA1goAIZUHAADcCgAglgcBANcKACGXBwIA2AoAIZkHAACkDJkHIpsHAAClDJsHIpwHAACECwAgnQcAANwKACCfBwAApgyfByKgBwgA9QoAIaEHIADZCgAhogcAAIsLACCjBwEA1goAIaQHAQDWCgAhpQcBANcKACGmBwEA1woAIQMAAAAvACADAAAwADAEAAAxACAQJAAAoAwAICUAAKEMACAmAADjCgAgKAAAogwAIMQGAACfDAAwxQYAADMAEMYGAACfDAAwxwYBANYKACHIBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIeUGAQDXCgAhkwcBANYKACGjCAEA1woAIaQIAQDXCgAhAQAAADMAIAckAADUEwAgJQAA1RMAICYAAKQRACAoAADWEwAg5QYAAL8MACCjCAAAvwwAIKQIAAC_DAAgECQAAKAMACAlAAChDAAgJgAA4woAICgAAKIMACDEBgAAnwwAMMUGAAAzABDGBgAAnwwAMMcGAQAAAAHIBgEAAAABzQYgANkKACHOBkAA2goAIc8GQADaCgAh5QYBANcKACGTBwEAAAABowgBANcKACGkCAEA1woAIQMAAAAzACADAAA1ADAEAAA2ACADAAAALwAgAwAAMAAwBAAAMQAgCicAAJ4MACAtAgDYCgAhxAYAAJwMADDFBgAAOQAQxgYAAJwMADDHBgEA1goAIc4GQADaCgAhzwZAANoKACGkBwEA1goAIf0HAACdDP0HIgEnAADUEwAgCicAAJ4MACAtAgDYCgAhxAYAAJwMADDFBgAAOQAQxgYAAJwMADDHBgEAAAABzgZAANoKACHPBkAA2goAIaQHAQDWCgAh_QcAAJ0M_QciAwAAADkAIAMAADoAMAQAADsAIAEAAAAzACABAAAALwAgAQAAADkAIAomAADjCgAgxAYAANkLADDFBgAAQAAQxgYAANkLADDHBgEA1goAIcgGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAh6QYBANYKACEBAAAAQAAgAwAAAC8AIAMAADAAMAQAADEAIAEAAAAvACAJJgAA4woAIMQGAADiCgAwxQYAAEQAEMYGAADiCgAwxwYBANYKACHIBgEA1goAIc4GQADaCgAhzwZAANoKACHlBgEA1goAIQEAAABEACADAAAALwAgAwAAMAAwBAAAMQAgAQAAAC8AIBIrAAD8CwAgNgAAlgwAIDcAAOkKACA5AADXCwAgxAYAAJsMADDFBgAASAAQxgYAAJsMADDHBgEA1goAIc4GQADaCgAhzwZAANoKACHlBgEA1woAIf8GAQDWCgAhjQcBANYKACGOBwEA1woAIY8HAgDYCgAhkAcIAPUKACGRBwgA9QoAIZIHCAD1CgAhBisAAMsTACA2AADTEwAgNwAAsBEAIDkAAIMTACDlBgAAvwwAII4HAAC_DAAgEisAAPwLACA2AACWDAAgNwAA6QoAIDkAANcLACDEBgAAmwwAMMUGAABIABDGBgAAmwwAMMcGAQAAAAHOBkAA2goAIc8GQADaCgAh5QYBANcKACH_BgEA1goAIY0HAQDWCgAhjgcBAAAAAY8HAgDYCgAhkAcIAPUKACGRBwgA9QoAIZIHCAD1CgAhAwAAAEgAIAMAAEkAMAQAAEoAIBQjAADzCwAgKwAA_AsAIC0AAJUMACAyAACEDAAgNgAAlgwAIMQGAACaDAAwxQYAAEwAEMYGAACaDAAwxwYBANYKACH_BgEA1goAIY8HAgDYCgAhmQcAAIgMxgciowcBANYKACGoBwEA1woAIaoHCAD1CgAhvAcBANYKACHCBwgA9wsAIcMHCAD1CgAhxAcIAPUKACHGBwIA2AoAIQcjAADIEwAgKwAAyxMAIC0AANITACAyAADNEwAgNgAA0xMAIKgHAAC_DAAgwgcAAL8MACAUIwAA8wsAICsAAPwLACAtAACVDAAgMgAAhAwAIDYAAJYMACDEBgAAmgwAMMUGAABMABDGBgAAmgwAMMcGAQAAAAH_BgEA1goAIY8HAgDYCgAhmQcAAIgMxgciowcBANYKACGoBwEA1woAIaoHCAD1CgAhvAcBANYKACHCBwgA9wsAIcMHCAD1CgAhxAcIAPUKACHGBwIA2AoAIQMAAABMACADAABNADAEAABOACABAAAAHgAgAQAAAC0AIAMAAABMACADAABNADAEAABOACANHgAA6AoAIC0AAJkMACDEBgAAlwwAMMUGAABTABDGBgAAlwwAMMcGAQDWCgAhzgZAANoKACH5BgEA1goAIf4GAQDWCgAhmwcAAJgM3QcivAcBANcKACHdBwEA1goAId4HIADZCgAhAx4AAK8RACAtAADSEwAgvAcAAL8MACANHgAA6AoAIC0AAJkMACDEBgAAlwwAMMUGAABTABDGBgAAlwwAMMcGAQAAAAHOBkAA2goAIfkGAQDWCgAh_gYBANYKACGbBwAAmAzdByK8BwEA1woAId0HAQDWCgAh3gcgANkKACEDAAAAUwAgAwAAVAAwBAAAVQAgJR4AAIoMACAjAACLDAAgLAAA6QoAIC4AAIwMACAzAADwCgAgNAAAjQwAIMQGAACFDAAwxQYAAFcAEMYGAACFDAAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh6gYBANcKACHrBgEA1woAIewGAQDXCgAh_gYBANcKACGjBwEA1woAIb4HCAD1CgAhvwcIAPUKACHHBwIA2AoAIcgHAQDXCgAhygcAAIYMygciywcIAPUKACHNBwAAhwzNByLOBwEA1woAIc8HAACIDMYHItAHAQDXCgAh0QcBANcKACHSBwEA1woAIdMHAQDXCgAh1QcAAIkM1Qcj1gcBANcKACHXBwEA1woAIdgHAQDXCgAh2QdAAIULACHaBwEA1woAIdsHAQDXCgAhAQAAAFcAIBAjAADzCwAgLAAAlgwAIC0AAJUMACAvAACKDAAgxAYAAJQMADDFBgAAWQAQxgYAAJQMADDHBgEA1goAIc4GQADaCgAhowcBANYKACG8BwEA1goAIb0HCAD1CgAhvgcIAPUKACG_BwgA9QoAIcAHCAD1CgAhwQcBANcKACEFIwAAyBMAICwAANMTACAtAADSEwAgLwAArxEAIMEHAAC_DAAgECMAAPMLACAsAACWDAAgLQAAlQwAIC8AAIoMACDEBgAAlAwAMMUGAABZABDGBgAAlAwAMMcGAQAAAAHOBkAA2goAIaMHAQDWCgAhvAcBANYKACG9BwgA9QoAIb4HCAD1CgAhvwcIAPUKACHABwgA9QoAIcEHAQDXCgAhAwAAAFkAIAMAAFoAMAQAAFsAIAEAAAAeACAPKwAA_AsAIDAAAJIMACAxAACTDAAgMgAAhAwAIMQGAACRDAAwxQYAAF4AEMYGAACRDAAwxwYBANYKACH_BgEA1goAIY8HAgDYCgAhqAcBANcKACGqBwgA9QoAIbkHAQDWCgAhugcBANYKACG7BwgA9QoAIQUrAADLEwAgMAAA0BMAIDEAANETACAyAADNEwAgqAcAAL8MACAPKwAA_AsAIDAAAJIMACAxAACTDAAgMgAAhAwAIMQGAACRDAAwxQYAAF4AEMYGAACRDAAwxwYBAAAAAf8GAQDWCgAhjwcCANgKACGoBwEA1woAIaoHCAD1CgAhuQcBANYKACG6BwEA1goAIbsHCAD1CgAhAwAAAF4AIAMAAF8AMAQAAGAAIAEAAABIACABAAAAXgAgEiMAAPMLACAmAAD4CwAgNQAA7AoAIMQGAAD1CwAwxQYAAGQAEMYGAAD1CwAwxwYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACGjBwEA1goAIb8HCAD1CgAhmwgBANYKACGdCAAA9gudCCKeCAgA9wsAIZ8ICAD1CgAhoAhAANoKACGhCEAA2goAIQEAAABkACAIKwAA_AsAIDQAAJAMACDEBgAAjwwAMMUGAABmABDGBgAAjwwAMMcGAQDWCgAh_wYBANYKACHTBwEA1goAIQIrAADLEwAgNAAAzxMAIAkrAAD8CwAgNAAAkAwAIMQGAACPDAAwxQYAAGYAEMYGAACPDAAwxwYBAAAAAf8GAQDWCgAh0wcBANYKACHICAAAjgwAIAMAAABmACADAABnADAEAABoACAYHgAArxEAICMAAMgTACAsAACwEQAgLgAAzhMAIDMAALcRACA0AADPEwAg6gYAAL8MACDrBgAAvwwAIOwGAAC_DAAg_gYAAL8MACCjBwAAvwwAIMgHAAC_DAAgzgcAAL8MACDQBwAAvwwAINEHAAC_DAAg0gcAAL8MACDTBwAAvwwAINUHAAC_DAAg1gcAAL8MACDXBwAAvwwAINgHAAC_DAAg2QcAAL8MACDaBwAAvwwAINsHAAC_DAAgJR4AAIoMACAjAACLDAAgLAAA6QoAIC4AAIwMACAzAADwCgAgNAAAjQwAIMQGAACFDAAwxQYAAFcAEMYGAACFDAAwxwYBAAAAAc4GQADaCgAhzwZAANoKACHqBgEA1woAIesGAQDXCgAh7AYBANcKACH-BgEA1woAIaMHAQDXCgAhvgcIAPUKACG_BwgA9QoAIccHAgDYCgAhyAcBAAAAAcoHAACGDMoHIssHCAD1CgAhzQcAAIcMzQcizgcBANcKACHPBwAAiAzGByLQBwEA1woAIdEHAQDXCgAh0gcBANcKACHTBwEA1woAIdUHAACJDNUHI9YHAQDXCgAh1wcBANcKACHYBwEA1woAIdkHQACFCwAh2gcBANcKACHbBwEAAAABAwAAAFcAIAMAAGoAMAQAAGsAIAEAAABmACABAAAAVwAgAQAAAEwAIAEAAABTACABAAAAWQAgAQAAAEgAIAMAAABeACADAABfADAEAABgACABAAAAXgAgDSsAAPwLACAyAACEDAAgOAAAgwwAIMQGAACCDAAwxQYAAHUAEMYGAACCDAAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_wYBANYKACGPBwIA2AoAIagHAQDXCgAhpQgBANYKACEEKwAAyxMAIDIAAM0TACA4AADMEwAgqAcAAL8MACAOKwAA_AsAIDIAAIQMACA4AACDDAAgxAYAAIIMADDFBgAAdQAQxgYAAIIMADDHBgEAAAABzgZAANoKACHPBkAA2goAIf8GAQDWCgAhjwcCANgKACGoBwEA1woAIaUIAQDWCgAhxwgAAIEMACADAAAAdQAgAwAAdgAwBAAAdwAgAwAAAHUAIAMAAHYAMAQAAHcAIAEAAAB1ACABAAAASAAgAwAAAF4AIAMAAF8AMAQAAGAAIAEAAABMACABAAAAdQAgAQAAAF4AIAweAADoCgAgKwAA_AsAIMQGAACADAAwxQYAAIABABDGBgAAgAwAMMcGAQDWCgAhzAYCANgKACHOBkAA2goAIc8GQADaCgAh_QYBANcKACH-BgEA1goAIf8GAQDWCgAhAx4AAK8RACArAADLEwAg_QYAAL8MACANHgAA6AoAICsAAPwLACDEBgAAgAwAMMUGAACAAQAQxgYAAIAMADDHBgEAAAABzAYCANgKACHOBkAA2goAIc8GQADaCgAh_QYBANcKACH-BgEA1goAIf8GAQDWCgAhxggAAP8LACADAAAAgAEAIAMAAIEBADAEAACCAQAgAwAAAEwAIAMAAE0AMAQAAE4AIAMAAAB1ACADAAB2ADAEAAB3ACADAAAAZgAgAwAAZwAwBAAAaAAgECMAAPMLACArAAD8CwAgxAYAAP4LADDFBgAAhwEAEMYGAAD-CwAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_wYBANYKACGNBwEA1woAIY8HAgDYCgAhowcBANYKACGoBwEA1woAIakHAQDWCgAhqgcIAPUKACGrBwEA1woAIQUjAADIEwAgKwAAyxMAII0HAAC_DAAgqAcAAL8MACCrBwAAvwwAIBAjAADzCwAgKwAA_AsAIMQGAAD-CwAwxQYAAIcBABDGBgAA_gsAMMcGAQAAAAHOBkAA2goAIc8GQADaCgAh_wYBANYKACGNBwEA1woAIY8HAgDYCgAhowcBANYKACGoBwEA1woAIakHAQDWCgAhqgcIAPUKACGrBwEA1woAIQMAAACHAQAgAwAAiAEAMAQAAIkBACAkIwAA8wsAICsAAPwLACDEBgAA_QsAMMUGAACLAQAQxgYAAP0LADDHBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIegGAQDXCgAh_wYBANYKACGTBwEA1goAIZYHAQDXCgAhowcBANYKACHfBwEA1goAIeAHIADZCgAh4QcgANkKACHiByAA2QoAIeMHIADZCgAh5AcAANwKACDlBwEA1goAIeYHAQDXCgAh5wcBANcKACHoBwEA1woAIekHAQDXCgAh6gcBANcKACHrBwEA1woAIewHAADcCgAg7QcBANcKACHuBwEA1woAIe8HAQDXCgAh8AcBANcKACHxBwAA3AoAIPIHAQDWCgAh8wcBANYKACH0BwIA2AoAIQ4jAADIEwAgKwAAyxMAIOgGAAC_DAAglgcAAL8MACDmBwAAvwwAIOcHAAC_DAAg6AcAAL8MACDpBwAAvwwAIOoHAAC_DAAg6wcAAL8MACDtBwAAvwwAIO4HAAC_DAAg7wcAAL8MACDwBwAAvwwAICQjAADzCwAgKwAA_AsAIMQGAAD9CwAwxQYAAIsBABDGBgAA_QsAMMcGAQAAAAHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHoBgEA1woAIf8GAQDWCgAhkwcBAAAAAZYHAQDXCgAhowcBANYKACHfBwEA1goAIeAHIADZCgAh4QcgANkKACHiByAA2QoAIeMHIADZCgAh5AcAANwKACDlBwEA1goAIeYHAQDXCgAh5wcBANcKACHoBwEA1woAIekHAQDXCgAh6gcBANcKACHrBwEA1woAIewHAADcCgAg7QcBANcKACHuBwEA1woAIe8HAQDXCgAh8AcBANcKACHxBwAA3AoAIPIHAQDWCgAh8wcBANYKACH0BwIA2AoAIQMAAACLAQAgAwAAjAEAMAQAAI0BACADAAAAXgAgAwAAXwAwBAAAYAAgCisAAPwLACAtAgDYCgAhPwAA-wsAIMQGAAD6CwAwxQYAAJABABDGBgAA-gsAMMcGAQDWCgAhzgZAANoKACH_BgEA1goAIYQIAQDWCgAhAisAAMsTACA_AADKEwAgCysAAPwLACAtAgDYCgAhPwAA-wsAIMQGAAD6CwAwxQYAAJABABDGBgAA-gsAMMcGAQAAAAHOBkAA2goAIf8GAQDWCgAhhAgBANYKACHFCAAA-QsAIAMAAACQAQAgAwAAkQEAMAQAAJIBACADAAAAkAEAIAMAAJEBADAEAACSAQAgAQAAAJABACABAAAASAAgAQAAAIABACABAAAATAAgAQAAAHUAIAEAAABmACABAAAAhwEAIAEAAACLAQAgAQAAAF4AIAEAAACQAQAgAwAAAEwAIAMAAE0AMAQAAE4AIAQjAADIEwAgJgAAyRMAIDUAALMRACCeCAAAvwwAIBIjAADzCwAgJgAA-AsAIDUAAOwKACDEBgAA9QsAMMUGAABkABDGBgAA9QsAMMcGAQAAAAHNBiAA2QoAIc4GQADaCgAhzwZAANoKACGjBwEA1goAIb8HCAD1CgAhmwgBAAAAAZ0IAAD2C50IIp4ICAD3CwAhnwgIAPUKACGgCEAA2goAIaEIQADaCgAhAwAAAGQAIAMAAKABADAEAAChAQAgAwAAAIcBACADAACIAQAwBAAAiQEAIAMAAABXACADAABqADAEAABrACADAAAAiwEAIAMAAIwBADAEAACNAQAgCyMAAPMLACBCAADvCgAgxAYAAPQLADDFBgAApgEAEMYGAAD0CwAwxwYBANYKACHIBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIaMHAQDWCgAhAiMAAMgTACBCAAC2EQAgCyMAAPMLACBCAADvCgAgxAYAAPQLADDFBgAApgEAEMYGAAD0CwAwxwYBAAAAAcgGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAhowcBANYKACEDAAAApgEAIAMAAKcBADAEAACoAQAgDiMAAPMLACAnAADyCwAgxAYAAPELADDFBgAAqgEAEMYGAADxCwAwxwYBANYKACHIBgEA1goAIc4GQADaCgAhzwZAANoKACGjBwEA1goAIaQHAQDWCgAhqgcIAPUKACGJCAEA1woAIYoIQADaCgAhAyMAAMgTACAnAADHEwAgiQgAAL8MACAOIwAA8wsAICcAAPILACDEBgAA8QsAMMUGAACqAQAQxgYAAPELADDHBgEAAAAByAYBANYKACHOBkAA2goAIc8GQADaCgAhowcBANYKACGkBwEA1goAIaoHCAD1CgAhiQgBANcKACGKCEAA2goAIQMAAACqAQAgAwAAqwEAMAQAAKwBACABAAAAqgEAIAMAAACqAQAgAwAAqwEAMAQAAKwBACADAAAAWQAgAwAAWgAwBAAAWwAgAQAAAC8AIAEAAABMACABAAAAZAAgAQAAAIcBACABAAAAVwAgAQAAAIsBACABAAAApgEAIAEAAACqAQAgAQAAAFkAIAMAAABXACADAABqADAEAABrACAJHgAA6AoAICwAANcLACDEBgAA1gsAMMUGAAC7AQAQxgYAANYLADDHBgEA1goAIc4GQADaCgAhzwZAANoKACH-BgEA1goAIQEAAAC7AQAgAwAAAIABACADAACBAQAwBAAAggEAIAMAAABTACADAABUADAEAABVACADAAAAWQAgAwAAWgAwBAAAWwAgAQAAACMAIAEAAAAnACABAAAAVwAgAQAAAIABACABAAAAUwAgAQAAAFkAIAEAAAAaACAEHgAArxEAIIYHAAC_DAAgwwgAAL8MACDECAAAvwwAIAMAAAArACADAADHAQAwBAAAGgAgAwAAACsAIAMAAMcBADAEAAAaACADAAAAKwAgAwAAxwEAMAQAABoAIAseAADGEwAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAesGAQAAAAH-BgEAAAABhQcgAAAAAYYHQAAAAAHDCAEAAAABxAgBAAAAAQEIAADLAQAgCscGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHrBgEAAAAB_gYBAAAAAYUHIAAAAAGGB0AAAAABwwgBAAAAAcQIAQAAAAEBCAAAzQEAMAEIAADNAQAwCx4AAMUTACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIesGAQDFDAAh_gYBAMUMACGFByAAyAwAIYYHQADbDAAhwwgBAMYMACHECAEAxgwAIQIAAAAaACAIAADQAQAgCscGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6wYBAMUMACH-BgEAxQwAIYUHIADIDAAhhgdAANsMACHDCAEAxgwAIcQIAQDGDAAhAgAAACsAIAgAANIBACACAAAAKwAgCAAA0gEAIAMAAAAaACAPAADLAQAgEAAA0AEAIAEAAAAaACABAAAAKwAgBhUAAMITACAYAADEEwAgGQAAwxMAIIYHAAC_DAAgwwgAAL8MACDECAAAvwwAIA3EBgAA8AsAMMUGAADZAQAQxgYAAPALADDHBgEAxAoAIcgGAQDECgAhzgZAAMgKACHPBkAAyAoAIesGAQDECgAh_gYBAMQKACGFByAAxwoAIYYHQAD_CgAhwwgBAMUKACHECAEAxQoAIQMAAAArACADAADYAQAwFAAA2QEAIAMAAAArACADAADHAQAwBAAAGgAgCFcAAOwLACDEBgAA6wsAMMUGAADkAQAQxgYAAOsLADDHBgEAAAAByAYBAAAAAc4GQADaCgAhzwZAANoKACEBAAAA3AEAIAlWAADvCwAgxAYAAO4LADDFBgAA3gEAEMYGAADuCwAwxwYBANYKACHOBkAA2goAIc8GQADaCgAhrggBANYKACHBCAEA1goAIQFWAADBEwAgClYAAO8LACDEBgAA7gsAMMUGAADeAQAQxgYAAO4LADDHBgEAAAABzgZAANoKACHPBkAA2goAIa4IAQDWCgAhwQgBANYKACHCCAAA7QsAIAMAAADeAQAgAwAA3wEAMAQAAOABACABAAAA3gEAIAEAAADcAQAgCFcAAOwLACDEBgAA6wsAMMUGAADkAQAQxgYAAOsLADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIQFXAADAEwAgAwAAAOQBACADAADlAQAwBAAA3AEAIAMAAADkAQAgAwAA5QEAMAQAANwBACADAAAA5AEAIAMAAOUBADAEAADcAQAgBVcAAL8TACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAABAQgAAOkBACAExwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAQEIAADrAQAwAQgAAOsBADAFVwAAshMAIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAhAgAAANwBACAIAADuAQAgBMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAhAgAAAOQBACAIAADwAQAgAgAAAOQBACAIAADwAQAgAwAAANwBACAPAADpAQAgEAAA7gEAIAEAAADcAQAgAQAAAOQBACADFQAArxMAIBgAALETACAZAACwEwAgB8QGAADqCwAwxQYAAPcBABDGBgAA6gsAMMcGAQDECgAhyAYBAMQKACHOBkAAyAoAIc8GQADICgAhAwAAAOQBACADAAD2AQAwFAAA9wEAIAMAAADkAQAgAwAA5QEAMAQAANwBACABAAAA4AEAIAEAAADgAQAgAwAAAN4BACADAADfAQAwBAAA4AEAIAMAAADeAQAgAwAA3wEAMAQAAOABACADAAAA3gEAIAMAAN8BADAEAADgAQAgBlYAAK4TACDHBgEAAAABzgZAAAAAAc8GQAAAAAGuCAEAAAABwQgBAAAAAQEIAAD_AQAgBccGAQAAAAHOBkAAAAABzwZAAAAAAa4IAQAAAAHBCAEAAAABAQgAAIECADABCAAAgQIAMAZWAACtEwAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhrggBAMUMACHBCAEAxQwAIQIAAADgAQAgCAAAhAIAIAXHBgEAxQwAIc4GQADJDAAhzwZAAMkMACGuCAEAxQwAIcEIAQDFDAAhAgAAAN4BACAIAACGAgAgAgAAAN4BACAIAACGAgAgAwAAAOABACAPAAD_AQAgEAAAhAIAIAEAAADgAQAgAQAAAN4BACADFQAAqhMAIBgAAKwTACAZAACrEwAgCMQGAADpCwAwxQYAAI0CABDGBgAA6QsAMMcGAQDECgAhzgZAAMgKACHPBkAAyAoAIa4IAQDECgAhwQgBAMQKACEDAAAA3gEAIAMAAIwCADAUAACNAgAgAwAAAN4BACADAADfAQAwBAAA4AEAIAEAAAAgACABAAAAIAAgAwAAAB4AIAMAAB8AMAQAACAAIAMAAAAeACADAAAfADAEAAAgACADAAAAHgAgAwAAHwAwBAAAIAAgFx0AAKkTACAfAACFEQAgIAAAhhEAICEAAIcRACAjAACIEQAgLgAAjBEAIDUAAIkRACA4AACKEQAgOwAAixEAIEUAAI0RACDHBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAcAIAQAAAAEBCAAAlQIAIA3HBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAcAIAQAAAAEBCAAAlwIAMAEIAACXAgAwAQAAABwAIBcdAACoEwAgHwAA3QwAICAAAN4MACAhAADfDAAgIwAA4AwAIC4AAOQMACA1AADhDAAgOAAA4gwAIDsAAOMMACBFAADlDAAgxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACHACAEAxgwAIQIAAAAgACAIAACbAgAgDccGAQDFDAAhyAYBAMUMACHJBgAA2Qy-CCLOBkAAyQwAIc8GQADJDAAh5QYBAMYMACHrBgEAxQwAIYUHIADIDAAhhgdAANsMACGZBwAA2gy_CCK8CCAAyAwAIb8IIADIDAAhwAgBAMYMACECAAAAHgAgCAAAnQIAIAIAAAAeACAIAACdAgAgAQAAABwAIAMAAAAgACAPAACVAgAgEAAAmwIAIAEAAAAgACABAAAAHgAgBhUAAKUTACAYAACnEwAgGQAAphMAIOUGAAC_DAAghgcAAL8MACDACAAAvwwAIBDEBgAA4gsAMMUGAAClAgAQxgYAAOILADDHBgEAxAoAIcgGAQDECgAhyQYAAOMLvggizgZAAMgKACHPBkAAyAoAIeUGAQDFCgAh6wYBAMQKACGFByAAxwoAIYYHQAD_CgAhmQcAAOQLvwgivAggAMcKACG_CCAAxwoAIcAIAQDFCgAhAwAAAB4AIAMAAKQCADAUAAClAgAgAwAAAB4AIAMAAB8AMAQAACAAIAEAAAAlACABAAAAJQAgAwAAACMAIAMAACQAMAQAACUAIAMAAAAjACADAAAkADAEAAAlACADAAAAIwAgAwAAJAAwBAAAJQAgCR4AAKQTACDHBgEAAAABzgZAAAAAAc8GQAAAAAH-BgEAAAABrwhAAAAAAbkIAQAAAAG6CAEAAAABuwgBAAAAAQEIAACtAgAgCMcGAQAAAAHOBkAAAAABzwZAAAAAAf4GAQAAAAGvCEAAAAABuQgBAAAAAboIAQAAAAG7CAEAAAABAQgAAK8CADABCAAArwIAMAkeAACjEwAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_gYBAMUMACGvCEAAyQwAIbkIAQDFDAAhuggBAMYMACG7CAEAxgwAIQIAAAAlACAIAACyAgAgCMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIf4GAQDFDAAhrwhAAMkMACG5CAEAxQwAIboIAQDGDAAhuwgBAMYMACECAAAAIwAgCAAAtAIAIAIAAAAjACAIAAC0AgAgAwAAACUAIA8AAK0CACAQAACyAgAgAQAAACUAIAEAAAAjACAFFQAAoBMAIBgAAKITACAZAAChEwAguggAAL8MACC7CAAAvwwAIAvEBgAA4QsAMMUGAAC7AgAQxgYAAOELADDHBgEAxAoAIc4GQADICgAhzwZAAMgKACH-BgEAxAoAIa8IQADICgAhuQgBAMQKACG6CAEAxQoAIbsIAQDFCgAhAwAAACMAIAMAALoCADAUAAC7AgAgAwAAACMAIAMAACQAMAQAACUAIAEAAAApACABAAAAKQAgAwAAACcAIAMAACgAMAQAACkAIAMAAAAnACADAAAoADAEAAApACADAAAAJwAgAwAAKAAwBAAAKQAgDh4AAJ8TACDHBgEAAAABzgZAAAAAAc8GQAAAAAH-BgEAAAABsAgBAAAAAbEIAQAAAAGyCAEAAAABswgBAAAAAbQIAQAAAAG1CEAAAAABtghAAAAAAbcIAQAAAAG4CAEAAAABAQgAAMMCACANxwYBAAAAAc4GQAAAAAHPBkAAAAAB_gYBAAAAAbAIAQAAAAGxCAEAAAABsggBAAAAAbMIAQAAAAG0CAEAAAABtQhAAAAAAbYIQAAAAAG3CAEAAAABuAgBAAAAAQEIAADFAgAwAQgAAMUCADAOHgAAnhMAIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIf4GAQDFDAAhsAgBAMUMACGxCAEAxQwAIbIIAQDGDAAhswgBAMYMACG0CAEAxgwAIbUIQADbDAAhtghAANsMACG3CAEAxgwAIbgIAQDGDAAhAgAAACkAIAgAAMgCACANxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_gYBAMUMACGwCAEAxQwAIbEIAQDFDAAhsggBAMYMACGzCAEAxgwAIbQIAQDGDAAhtQhAANsMACG2CEAA2wwAIbcIAQDGDAAhuAgBAMYMACECAAAAJwAgCAAAygIAIAIAAAAnACAIAADKAgAgAwAAACkAIA8AAMMCACAQAADIAgAgAQAAACkAIAEAAAAnACAKFQAAmxMAIBgAAJ0TACAZAACcEwAgsggAAL8MACCzCAAAvwwAILQIAAC_DAAgtQgAAL8MACC2CAAAvwwAILcIAAC_DAAguAgAAL8MACAQxAYAAOALADDFBgAA0QIAEMYGAADgCwAwxwYBAMQKACHOBkAAyAoAIc8GQADICgAh_gYBAMQKACGwCAEAxAoAIbEIAQDECgAhsggBAMUKACGzCAEAxQoAIbQIAQDFCgAhtQhAAP8KACG2CEAA_woAIbcIAQDFCgAhuAgBAMUKACEDAAAAJwAgAwAA0AIAMBQAANECACADAAAAJwAgAwAAKAAwBAAAKQAgCcQGAADfCwAwxQYAANcCABDGBgAA3wsAMMcGAQAAAAHOBkAA2goAIc8GQADaCgAhrQgBANYKACGuCAEA1goAIa8IQADaCgAhAQAAANQCACABAAAA1AIAIAnEBgAA3wsAMMUGAADXAgAQxgYAAN8LADDHBgEA1goAIc4GQADaCgAhzwZAANoKACGtCAEA1goAIa4IAQDWCgAhrwhAANoKACEAAwAAANcCACADAADYAgAwBAAA1AIAIAMAAADXAgAgAwAA2AIAMAQAANQCACADAAAA1wIAIAMAANgCADAEAADUAgAgBscGAQAAAAHOBkAAAAABzwZAAAAAAa0IAQAAAAGuCAEAAAABrwhAAAAAAQEIAADcAgAgBscGAQAAAAHOBkAAAAABzwZAAAAAAa0IAQAAAAGuCAEAAAABrwhAAAAAAQEIAADeAgAwAQgAAN4CADAGxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhrQgBAMUMACGuCAEAxQwAIa8IQADJDAAhAgAAANQCACAIAADhAgAgBscGAQDFDAAhzgZAAMkMACHPBkAAyQwAIa0IAQDFDAAhrggBAMUMACGvCEAAyQwAIQIAAADXAgAgCAAA4wIAIAIAAADXAgAgCAAA4wIAIAMAAADUAgAgDwAA3AIAIBAAAOECACABAAAA1AIAIAEAAADXAgAgAxUAAJgTACAYAACaEwAgGQAAmRMAIAnEBgAA3gsAMMUGAADqAgAQxgYAAN4LADDHBgEAxAoAIc4GQADICgAhzwZAAMgKACGtCAEAxAoAIa4IAQDECgAhrwhAAMgKACEDAAAA1wIAIAMAAOkCADAUAADqAgAgAwAAANcCACADAADYAgAwBAAA1AIAIArEBgAA3QsAMMUGAADwAgAQxgYAAN0LADDHBgEAAAABzgZAANoKACHqBgEAAAAByAcBANcKACGqCAEA1woAIasIAQDXCgAhrAgBANcKACEBAAAA7QIAIAEAAADtAgAgCsQGAADdCwAwxQYAAPACABDGBgAA3QsAMMcGAQDWCgAhzgZAANoKACHqBgEA1goAIcgHAQDXCgAhqggBANcKACGrCAEA1woAIawIAQDXCgAhBMgHAAC_DAAgqggAAL8MACCrCAAAvwwAIKwIAAC_DAAgAwAAAPACACADAADxAgAwBAAA7QIAIAMAAADwAgAgAwAA8QIAMAQAAO0CACADAAAA8AIAIAMAAPECADAEAADtAgAgB8cGAQAAAAHOBkAAAAAB6gYBAAAAAcgHAQAAAAGqCAEAAAABqwgBAAAAAawIAQAAAAEBCAAA9QIAIAfHBgEAAAABzgZAAAAAAeoGAQAAAAHIBwEAAAABqggBAAAAAasIAQAAAAGsCAEAAAABAQgAAPcCADABCAAA9wIAMAfHBgEAxQwAIc4GQADJDAAh6gYBAMUMACHIBwEAxgwAIaoIAQDGDAAhqwgBAMYMACGsCAEAxgwAIQIAAADtAgAgCAAA-gIAIAfHBgEAxQwAIc4GQADJDAAh6gYBAMUMACHIBwEAxgwAIaoIAQDGDAAhqwgBAMYMACGsCAEAxgwAIQIAAADwAgAgCAAA_AIAIAIAAADwAgAgCAAA_AIAIAMAAADtAgAgDwAA9QIAIBAAAPoCACABAAAA7QIAIAEAAADwAgAgBxUAAJUTACAYAACXEwAgGQAAlhMAIMgHAAC_DAAgqggAAL8MACCrCAAAvwwAIKwIAAC_DAAgCsQGAADcCwAwxQYAAIMDABDGBgAA3AsAMMcGAQDECgAhzgZAAMgKACHqBgEAxAoAIcgHAQDFCgAhqggBAMUKACGrCAEAxQoAIawIAQDFCgAhAwAAAPACACADAACCAwAwFAAAgwMAIAMAAADwAgAgAwAA8QIAMAQAAO0CACANxAYAANsLADDFBgAAiQMAEMYGAADbCwAwxwYBAAAAAcoGAQDWCgAhzgZAANoKACHPBkAA2goAIfkGAQDWCgAhkwcBAAAAAaYIAQDXCgAhpwgBANcKACGoCAEA1woAIakIIADZCgAhAQAAAIYDACABAAAAhgMAIA3EBgAA2wsAMMUGAACJAwAQxgYAANsLADDHBgEA1goAIcoGAQDWCgAhzgZAANoKACHPBkAA2goAIfkGAQDWCgAhkwcBANYKACGmCAEA1woAIacIAQDXCgAhqAgBANcKACGpCCAA2QoAIQOmCAAAvwwAIKcIAAC_DAAgqAgAAL8MACADAAAAiQMAIAMAAIoDADAEAACGAwAgAwAAAIkDACADAACKAwAwBAAAhgMAIAMAAACJAwAgAwAAigMAMAQAAIYDACAKxwYBAAAAAcoGAQAAAAHOBkAAAAABzwZAAAAAAfkGAQAAAAGTBwEAAAABpggBAAAAAacIAQAAAAGoCAEAAAABqQggAAAAAQEIAACOAwAgCscGAQAAAAHKBgEAAAABzgZAAAAAAc8GQAAAAAH5BgEAAAABkwcBAAAAAaYIAQAAAAGnCAEAAAABqAgBAAAAAakIIAAAAAEBCAAAkAMAMAEIAACQAwAwCscGAQDFDAAhygYBAMUMACHOBkAAyQwAIc8GQADJDAAh-QYBAMUMACGTBwEAxQwAIaYIAQDGDAAhpwgBAMYMACGoCAEAxgwAIakIIADIDAAhAgAAAIYDACAIAACTAwAgCscGAQDFDAAhygYBAMUMACHOBkAAyQwAIc8GQADJDAAh-QYBAMUMACGTBwEAxQwAIaYIAQDGDAAhpwgBAMYMACGoCAEAxgwAIakIIADIDAAhAgAAAIkDACAIAACVAwAgAgAAAIkDACAIAACVAwAgAwAAAIYDACAPAACOAwAgEAAAkwMAIAEAAACGAwAgAQAAAIkDACAGFQAAkhMAIBgAAJQTACAZAACTEwAgpggAAL8MACCnCAAAvwwAIKgIAAC_DAAgDcQGAADaCwAwxQYAAJwDABDGBgAA2gsAMMcGAQDECgAhygYBAMQKACHOBkAAyAoAIc8GQADICgAh-QYBAMQKACGTBwEAxAoAIaYIAQDFCgAhpwgBAMUKACGoCAEAxQoAIakIIADHCgAhAwAAAIkDACADAACbAwAwFAAAnAMAIAMAAACJAwAgAwAAigMAMAQAAIYDACAKJgAA4woAIMQGAADZCwAwxQYAAEAAEMYGAADZCwAwxwYBAAAAAcgGAQAAAAHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHpBgEA1goAIQEAAACfAwAgAQAAAJ8DACABJgAApBEAIAMAAABAACADAACiAwAwBAAAnwMAIAMAAABAACADAACiAwAwBAAAnwMAIAMAAABAACADAACiAwAwBAAAnwMAIAcmAACREwAgxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHpBgEAAAABAQgAAKYDACAGxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHpBgEAAAABAQgAAKgDADABCAAAqAMAMAcmAACHEwAgxwYBAMUMACHIBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIekGAQDFDAAhAgAAAJ8DACAIAACrAwAgBscGAQDFDAAhyAYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACHpBgEAxQwAIQIAAABAACAIAACtAwAgAgAAAEAAIAgAAK0DACADAAAAnwMAIA8AAKYDACAQAACrAwAgAQAAAJ8DACABAAAAQAAgAxUAAIQTACAYAACGEwAgGQAAhRMAIAnEBgAA2AsAMMUGAAC0AwAQxgYAANgLADDHBgEAxAoAIcgGAQDECgAhzQYgAMcKACHOBkAAyAoAIc8GQADICgAh6QYBAMQKACEDAAAAQAAgAwAAswMAMBQAALQDACADAAAAQAAgAwAAogMAMAQAAJ8DACAJHgAA6AoAICwAANcLACDEBgAA1gsAMMUGAAC7AQAQxgYAANYLADDHBgEAAAABzgZAANoKACHPBkAA2goAIf4GAQAAAAEBAAAAtwMAIAEAAAC3AwAgAh4AAK8RACAsAACDEwAgAwAAALsBACADAAC6AwAwBAAAtwMAIAMAAAC7AQAgAwAAugMAMAQAALcDACADAAAAuwEAIAMAALoDADAEAAC3AwAgBh4AAIITACAsAAC-DQAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB_gYBAAAAAQEIAAC-AwAgBMcGAQAAAAHOBkAAAAABzwZAAAAAAf4GAQAAAAEBCAAAwAMAMAEIAADAAwAwBh4AAIETACAsAACtDQAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_gYBAMUMACECAAAAtwMAIAgAAMMDACAExwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_gYBAMUMACECAAAAuwEAIAgAAMUDACACAAAAuwEAIAgAAMUDACADAAAAtwMAIA8AAL4DACAQAADDAwAgAQAAALcDACABAAAAuwEAIAMVAAD-EgAgGAAAgBMAIBkAAP8SACAHxAYAANULADDFBgAAzAMAEMYGAADVCwAwxwYBAMQKACHOBkAAyAoAIc8GQADICgAh_gYBAMQKACEDAAAAuwEAIAMAAMsDADAUAADMAwAgAwAAALsBACADAAC6AwAwBAAAtwMAIAEAAAB3ACABAAAAdwAgAwAAAHUAIAMAAHYAMAQAAHcAIAMAAAB1ACADAAB2ADAEAAB3ACADAAAAdQAgAwAAdgAwBAAAdwAgCisAALwNACAyAAC9DQAgOAAAjBAAIMcGAQAAAAHOBkAAAAABzwZAAAAAAf8GAQAAAAGPBwIAAAABqAcBAAAAAaUIAQAAAAEBCAAA1AMAIAfHBgEAAAABzgZAAAAAAc8GQAAAAAH_BgEAAAABjwcCAAAAAagHAQAAAAGlCAEAAAABAQgAANYDADABCAAA1gMAMAEAAABIACAKKwAAuQ0AIDIAALoNACA4AACKEAAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_wYBAMUMACGPBwIAxwwAIagHAQDGDAAhpQgBAMUMACECAAAAdwAgCAAA2gMAIAfHBgEAxQwAIc4GQADJDAAhzwZAAMkMACH_BgEAxQwAIY8HAgDHDAAhqAcBAMYMACGlCAEAxQwAIQIAAAB1ACAIAADcAwAgAgAAAHUAIAgAANwDACABAAAASAAgAwAAAHcAIA8AANQDACAQAADaAwAgAQAAAHcAIAEAAAB1ACAGFQAA-RIAIBYAAPoSACAXAAD9EgAgGAAA_BIAIBkAAPsSACCoBwAAvwwAIArEBgAA1AsAMMUGAADkAwAQxgYAANQLADDHBgEAxAoAIc4GQADICgAhzwZAAMgKACH_BgEAxAoAIY8HAgDGCgAhqAcBAMUKACGlCAEAxAoAIQMAAAB1ACADAADjAwAwFAAA5AMAIAMAAAB1ACADAAB2ADAEAAB3ACABAAAANgAgAQAAADYAIAMAAAAzACADAAA1ADAEAAA2ACADAAAAMwAgAwAANQAwBAAANgAgAwAAADMAIAMAADUAMAQAADYAIA0kAAD4EgAgJQAA9RIAICYAAPYSACAoAAD3EgAgxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAABkwcBAAAAAaMIAQAAAAGkCAEAAAABAQgAAOwDACAJxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAABkwcBAAAAAaMIAQAAAAGkCAEAAAABAQgAAO4DADABCAAA7gMAMAEAAAAzACANJAAA0BIAICUAANESACAmAADSEgAgKAAA0xIAIMcGAQDFDAAhyAYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACHlBgEAxgwAIZMHAQDFDAAhowgBAMYMACGkCAEAxgwAIQIAAAA2ACAIAADyAwAgCccGAQDFDAAhyAYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACHlBgEAxgwAIZMHAQDFDAAhowgBAMYMACGkCAEAxgwAIQIAAAAzACAIAAD0AwAgAgAAADMAIAgAAPQDACABAAAAMwAgAwAAADYAIA8AAOwDACAQAADyAwAgAQAAADYAIAEAAAAzACAGFQAAzRIAIBgAAM8SACAZAADOEgAg5QYAAL8MACCjCAAAvwwAIKQIAAC_DAAgDMQGAADTCwAwxQYAAPwDABDGBgAA0wsAMMcGAQDECgAhyAYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACHlBgEAxQoAIZMHAQDECgAhowgBAMUKACGkCAEAxQoAIQMAAAAzACADAAD7AwAwFAAA_AMAIAMAAAAzACADAAA1ADAEAAA2ACALLQIA2AoAIcQGAADSCwAwxQYAAIIEABDGBgAA0gsAMMcGAQAAAAHIBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIekGAQDWCgAhoggBANcKACEBAAAA_wMAIAEAAAD_AwAgCy0CANgKACHEBgAA0gsAMMUGAACCBAAQxgYAANILADDHBgEA1goAIcgGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAh6QYBANYKACGiCAEA1woAIQGiCAAAvwwAIAMAAACCBAAgAwAAgwQAMAQAAP8DACADAAAAggQAIAMAAIMEADAEAAD_AwAgAwAAAIIEACADAACDBAAwBAAA_wMAIAgtAgAAAAHHBgEAAAAByAYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAekGAQAAAAGiCAEAAAABAQgAAIcEACAILQIAAAABxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHpBgEAAAABoggBAAAAAQEIAACJBAAwAQgAAIkEADAILQIAxwwAIccGAQDFDAAhyAYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACHpBgEAxQwAIaIIAQDGDAAhAgAAAP8DACAIAACMBAAgCC0CAMcMACHHBgEAxQwAIcgGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh6QYBAMUMACGiCAEAxgwAIQIAAACCBAAgCAAAjgQAIAIAAACCBAAgCAAAjgQAIAMAAAD_AwAgDwAAhwQAIBAAAIwEACABAAAA_wMAIAEAAACCBAAgBhUAAMgSACAWAADJEgAgFwAAzBIAIBgAAMsSACAZAADKEgAgoggAAL8MACALLQIAxgoAIcQGAADRCwAwxQYAAJUEABDGBgAA0QsAMMcGAQDECgAhyAYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACHpBgEAxAoAIaIIAQDFCgAhAwAAAIIEACADAACUBAAwFAAAlQQAIAMAAACCBAAgAwAAgwQAMAQAAP8DACABAAAAoQEAIAEAAAChAQAgAwAAAGQAIAMAAKABADAEAAChAQAgAwAAAGQAIAMAAKABADAEAAChAQAgAwAAAGQAIAMAAKABADAEAAChAQAgDyMAAMcSACAmAACgDwAgNQAAoQ8AIMcGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAGjBwEAAAABvwcIAAAAAZsIAQAAAAGdCAAAAJ0IAp4ICAAAAAGfCAgAAAABoAhAAAAAAaEIQAAAAAEBCAAAnQQAIAzHBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAABowcBAAAAAb8HCAAAAAGbCAEAAAABnQgAAACdCAKeCAgAAAABnwgIAAAAAaAIQAAAAAGhCEAAAAABAQgAAJ8EADABCAAAnwQAMA8jAADGEgAgJgAAhg8AIDUAAIcPACDHBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIaMHAQDFDAAhvwcIAPAMACGbCAEAxQwAIZ0IAACED50IIp4ICADzDQAhnwgIAPAMACGgCEAAyQwAIaEIQADJDAAhAgAAAKEBACAIAACiBAAgDMcGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAhowcBAMUMACG_BwgA8AwAIZsIAQDFDAAhnQgAAIQPnQginggIAPMNACGfCAgA8AwAIaAIQADJDAAhoQhAAMkMACECAAAAZAAgCAAApAQAIAIAAABkACAIAACkBAAgAwAAAKEBACAPAACdBAAgEAAAogQAIAEAAAChAQAgAQAAAGQAIAYVAADBEgAgFgAAwhIAIBcAAMUSACAYAADEEgAgGQAAwxIAIJ4IAAC_DAAgD8QGAADNCwAwxQYAAKsEABDGBgAAzQsAMMcGAQDECgAhzQYgAMcKACHOBkAAyAoAIc8GQADICgAhowcBAMQKACG_BwgA8goAIZsIAQDECgAhnQgAAM4LnQginggIAJwLACGfCAgA8goAIaAIQADICgAhoQhAAMgKACEDAAAAZAAgAwAAqgQAMBQAAKsEACADAAAAZAAgAwAAoAEAMAQAAKEBACABAAAAaAAgAQAAAGgAIAMAAABmACADAABnADAEAABoACADAAAAZgAgAwAAZwAwBAAAaAAgAwAAAGYAIAMAAGcAMAQAAGgAIAUrAACeDwAgNAAAgRAAIMcGAQAAAAH_BgEAAAAB0wcBAAAAAQEIAACzBAAgA8cGAQAAAAH_BgEAAAAB0wcBAAAAAQEIAAC1BAAwAQgAALUEADAFKwAAnA8AIDQAAP8PACDHBgEAxQwAIf8GAQDFDAAh0wcBAMUMACECAAAAaAAgCAAAuAQAIAPHBgEAxQwAIf8GAQDFDAAh0wcBAMUMACECAAAAZgAgCAAAugQAIAIAAABmACAIAAC6BAAgAwAAAGgAIA8AALMEACAQAAC4BAAgAQAAAGgAIAEAAABmACADFQAAvhIAIBgAAMASACAZAAC_EgAgBsQGAADMCwAwxQYAAMEEABDGBgAAzAsAMMcGAQDECgAh_wYBAMQKACHTBwEAxAoAIQMAAABmACADAADABAAwFAAAwQQAIAMAAABmACADAABnADAEAABoACAVxAYAAMsLADDFBgAAxwQAEMYGAADLCwAwxwYBAAAAAc8GQADaCgAhiwggANkKACGMCAEA1woAIY0IAQDXCgAhjggBANcKACGPCAEA1woAIZAIAQDXCgAhkQgBANcKACGSCCAA2QoAIZMIAQDXCgAhlAgBANcKACGVCAEA1woAIZYIIADZCgAhlwgBANYKACGYCAEA1woAIZkIAQDXCgAhmggBANcKACEBAAAAxAQAIAEAAADEBAAgFcQGAADLCwAwxQYAAMcEABDGBgAAywsAMMcGAQDWCgAhzwZAANoKACGLCCAA2QoAIYwIAQDXCgAhjQgBANcKACGOCAEA1woAIY8IAQDXCgAhkAgBANcKACGRCAEA1woAIZIIIADZCgAhkwgBANcKACGUCAEA1woAIZUIAQDXCgAhlgggANkKACGXCAEA1goAIZgIAQDXCgAhmQgBANcKACGaCAEA1woAIQyMCAAAvwwAII0IAAC_DAAgjggAAL8MACCPCAAAvwwAIJAIAAC_DAAgkQgAAL8MACCTCAAAvwwAIJQIAAC_DAAglQgAAL8MACCYCAAAvwwAIJkIAAC_DAAgmggAAL8MACADAAAAxwQAIAMAAMgEADAEAADEBAAgAwAAAMcEACADAADIBAAwBAAAxAQAIAMAAADHBAAgAwAAyAQAMAQAAMQEACASxwYBAAAAAc8GQAAAAAGLCCAAAAABjAgBAAAAAY0IAQAAAAGOCAEAAAABjwgBAAAAAZAIAQAAAAGRCAEAAAABkgggAAAAAZMIAQAAAAGUCAEAAAABlQgBAAAAAZYIIAAAAAGXCAEAAAABmAgBAAAAAZkIAQAAAAGaCAEAAAABAQgAAMwEACASxwYBAAAAAc8GQAAAAAGLCCAAAAABjAgBAAAAAY0IAQAAAAGOCAEAAAABjwgBAAAAAZAIAQAAAAGRCAEAAAABkgggAAAAAZMIAQAAAAGUCAEAAAABlQgBAAAAAZYIIAAAAAGXCAEAAAABmAgBAAAAAZkIAQAAAAGaCAEAAAABAQgAAM4EADABCAAAzgQAMBLHBgEAxQwAIc8GQADJDAAhiwggAMgMACGMCAEAxgwAIY0IAQDGDAAhjggBAMYMACGPCAEAxgwAIZAIAQDGDAAhkQgBAMYMACGSCCAAyAwAIZMIAQDGDAAhlAgBAMYMACGVCAEAxgwAIZYIIADIDAAhlwgBAMUMACGYCAEAxgwAIZkIAQDGDAAhmggBAMYMACECAAAAxAQAIAgAANEEACASxwYBAMUMACHPBkAAyQwAIYsIIADIDAAhjAgBAMYMACGNCAEAxgwAIY4IAQDGDAAhjwgBAMYMACGQCAEAxgwAIZEIAQDGDAAhkgggAMgMACGTCAEAxgwAIZQIAQDGDAAhlQgBAMYMACGWCCAAyAwAIZcIAQDFDAAhmAgBAMYMACGZCAEAxgwAIZoIAQDGDAAhAgAAAMcEACAIAADTBAAgAgAAAMcEACAIAADTBAAgAwAAAMQEACAPAADMBAAgEAAA0QQAIAEAAADEBAAgAQAAAMcEACAPFQAAuxIAIBgAAL0SACAZAAC8EgAgjAgAAL8MACCNCAAAvwwAII4IAAC_DAAgjwgAAL8MACCQCAAAvwwAIJEIAAC_DAAgkwgAAL8MACCUCAAAvwwAIJUIAAC_DAAgmAgAAL8MACCZCAAAvwwAIJoIAAC_DAAgFcQGAADKCwAwxQYAANoEABDGBgAAygsAMMcGAQDECgAhzwZAAMgKACGLCCAAxwoAIYwIAQDFCgAhjQgBAMUKACGOCAEAxQoAIY8IAQDFCgAhkAgBAMUKACGRCAEAxQoAIZIIIADHCgAhkwgBAMUKACGUCAEAxQoAIZUIAQDFCgAhlgggAMcKACGXCAEAxAoAIZgIAQDFCgAhmQgBAMUKACGaCAEAxQoAIQMAAADHBAAgAwAA2QQAMBQAANoEACADAAAAxwQAIAMAAMgEADAEAADEBAAgAQAAAKgBACABAAAAqAEAIAMAAACmAQAgAwAApwEAMAQAAKgBACADAAAApgEAIAMAAKcBADAEAACoAQAgAwAAAKYBACADAACnAQAwBAAAqAEAIAgjAAC6EgAgQgAAzA4AIMcGAQAAAAHIBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAABowcBAAAAAQEIAADiBAAgBscGAQAAAAHIBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAABowcBAAAAAQEIAADkBAAwAQgAAOQEADAIIwAAuRIAIEIAAL8OACDHBgEAxQwAIcgGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAhowcBAMUMACECAAAAqAEAIAgAAOcEACAGxwYBAMUMACHIBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIaMHAQDFDAAhAgAAAKYBACAIAADpBAAgAgAAAKYBACAIAADpBAAgAwAAAKgBACAPAADiBAAgEAAA5wQAIAEAAACoAQAgAQAAAKYBACADFQAAthIAIBgAALgSACAZAAC3EgAgCcQGAADJCwAwxQYAAPAEABDGBgAAyQsAMMcGAQDECgAhyAYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACGjBwEAxAoAIQMAAACmAQAgAwAA7wQAMBQAAPAEACADAAAApgEAIAMAAKcBADAEAACoAQAgAQAAAKwBACABAAAArAEAIAMAAACqAQAgAwAAqwEAMAQAAKwBACADAAAAqgEAIAMAAKsBADAEAACsAQAgAwAAAKoBACADAACrAQAwBAAArAEAIAsjAADKDgAgJwAAsw4AIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAGjBwEAAAABpAcBAAAAAaoHCAAAAAGJCAEAAAABighAAAAAAQEIAAD4BAAgCccGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAGjBwEAAAABpAcBAAAAAaoHCAAAAAGJCAEAAAABighAAAAAAQEIAAD6BAAwAQgAAPoEADALIwAAyA4AICcAALEOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIaMHAQDFDAAhpAcBAMUMACGqBwgA8AwAIYkIAQDGDAAhighAAMkMACECAAAArAEAIAgAAP0EACAJxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACGjBwEAxQwAIaQHAQDFDAAhqgcIAPAMACGJCAEAxgwAIYoIQADJDAAhAgAAAKoBACAIAAD_BAAgAgAAAKoBACAIAAD_BAAgAwAAAKwBACAPAAD4BAAgEAAA_QQAIAEAAACsAQAgAQAAAKoBACAGFQAAsRIAIBYAALISACAXAAC1EgAgGAAAtBIAIBkAALMSACCJCAAAvwwAIAzEBgAAyAsAMMUGAACGBQAQxgYAAMgLADDHBgEAxAoAIcgGAQDECgAhzgZAAMgKACHPBkAAyAoAIaMHAQDECgAhpAcBAMQKACGqBwgA8goAIYkIAQDFCgAhighAAMgKACEDAAAAqgEAIAMAAIUFADAUAACGBQAgAwAAAKoBACADAACrAQAwBAAArAEAIAotAgDYCgAhxAYAAMcLADDFBgAAjAUAEMYGAADHCwAwxwYBAAAAAc0GIADZCgAhzgZAANoKACHPBkAA2goAIYcIAQDWCgAhiAgBANYKACEBAAAAiQUAIAEAAACJBQAgCi0CANgKACHEBgAAxwsAMMUGAACMBQAQxgYAAMcLADDHBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIYcIAQDWCgAhiAgBANYKACEAAwAAAIwFACADAACNBQAwBAAAiQUAIAMAAACMBQAgAwAAjQUAMAQAAIkFACADAAAAjAUAIAMAAI0FADAEAACJBQAgBy0CAAAAAccGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAGHCAEAAAABiAgBAAAAAQEIAACRBQAgBy0CAAAAAccGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAGHCAEAAAABiAgBAAAAAQEIAACTBQAwAQgAAJMFADAHLQIAxwwAIccGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAhhwgBAMUMACGICAEAxQwAIQIAAACJBQAgCAAAlgUAIActAgDHDAAhxwYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACGHCAEAxQwAIYgIAQDFDAAhAgAAAIwFACAIAACYBQAgAgAAAIwFACAIAACYBQAgAwAAAIkFACAPAACRBQAgEAAAlgUAIAEAAACJBQAgAQAAAIwFACAFFQAArBIAIBYAAK0SACAXAACwEgAgGAAArxIAIBkAAK4SACAKLQIAxgoAIcQGAADGCwAwxQYAAJ8FABDGBgAAxgsAMMcGAQDECgAhzQYgAMcKACHOBkAAyAoAIc8GQADICgAhhwgBAMQKACGICAEAxAoAIQMAAACMBQAgAwAAngUAMBQAAJ8FACADAAAAjAUAIAMAAI0FADAEAACJBQAgCSYAAMULACDEBgAAxAsAMMUGAAClBQAQxgYAAMQLADDHBgEAAAABzQYgANkKACHPBkAA2goAIYUIQACFCwAhhghAAIULACEBAAAAogUAIAEAAACiBQAgCSYAAMULACDEBgAAxAsAMMUGAAClBQAQxgYAAMQLADDHBgEA1goAIc0GIADZCgAhzwZAANoKACGFCEAAhQsAIYYIQACFCwAhAyYAAKsSACCFCAAAvwwAIIYIAAC_DAAgAwAAAKUFACADAACmBQAwBAAAogUAIAMAAAClBQAgAwAApgUAMAQAAKIFACADAAAApQUAIAMAAKYFADAEAACiBQAgBiYAAKoSACDHBgEAAAABzQYgAAAAAc8GQAAAAAGFCEAAAAABhghAAAAAAQEIAACqBQAgBccGAQAAAAHNBiAAAAABzwZAAAAAAYUIQAAAAAGGCEAAAAABAQgAAKwFADABCAAArAUAMAYmAACgEgAgxwYBAMUMACHNBiAAyAwAIc8GQADJDAAhhQhAANsMACGGCEAA2wwAIQIAAACiBQAgCAAArwUAIAXHBgEAxQwAIc0GIADIDAAhzwZAAMkMACGFCEAA2wwAIYYIQADbDAAhAgAAAKUFACAIAACxBQAgAgAAAKUFACAIAACxBQAgAwAAAKIFACAPAACqBQAgEAAArwUAIAEAAACiBQAgAQAAAKUFACAFFQAAnRIAIBgAAJ8SACAZAACeEgAghQgAAL8MACCGCAAAvwwAIAjEBgAAwwsAMMUGAAC4BQAQxgYAAMMLADDHBgEAxAoAIc0GIADHCgAhzwZAAMgKACGFCEAA_woAIYYIQAD_CgAhAwAAAKUFACADAAC3BQAwFAAAuAUAIAMAAAClBQAgAwAApgUAMAQAAKIFACABAAAAkgEAIAEAAACSAQAgAwAAAJABACADAACRAQAwBAAAkgEAIAMAAACQAQAgAwAAkQEAMAQAAJIBACADAAAAkAEAIAMAAJEBADAEAACSAQAgBysAAJwSACAtAgAAAAE_AADXDwAgxwYBAAAAAc4GQAAAAAH_BgEAAAABhAgBAAAAAQEIAADABQAgBS0CAAAAAccGAQAAAAHOBkAAAAAB_wYBAAAAAYQIAQAAAAEBCAAAwgUAMAEIAADCBQAwBysAAJsSACAtAgDHDAAhPwAA1Q8AIMcGAQDFDAAhzgZAAMkMACH_BgEAxQwAIYQIAQDFDAAhAgAAAJIBACAIAADFBQAgBS0CAMcMACHHBgEAxQwAIc4GQADJDAAh_wYBAMUMACGECAEAxQwAIQIAAACQAQAgCAAAxwUAIAIAAACQAQAgCAAAxwUAIAMAAACSAQAgDwAAwAUAIBAAAMUFACABAAAAkgEAIAEAAACQAQAgBRUAAJYSACAWAACXEgAgFwAAmhIAIBgAAJkSACAZAACYEgAgCC0CAMYKACHEBgAAwgsAMMUGAADOBQAQxgYAAMILADDHBgEAxAoAIc4GQADICgAh_wYBAMQKACGECAEAxAoAIQMAAACQAQAgAwAAzQUAMBQAAM4FACADAAAAkAEAIAMAAJEBADAEAACSAQAgCMQGAADBCwAwxQYAANQFABDGBgAAwQsAMMcGAQAAAAHPBkAA2goAIYEIIADZCgAhgggBANcKACGDCAEA1woAIQEAAADRBQAgAQAAANEFACAIxAYAAMELADDFBgAA1AUAEMYGAADBCwAwxwYBANYKACHPBkAA2goAIYEIIADZCgAhgggBANcKACGDCAEA1woAIQKCCAAAvwwAIIMIAAC_DAAgAwAAANQFACADAADVBQAwBAAA0QUAIAMAAADUBQAgAwAA1QUAMAQAANEFACADAAAA1AUAIAMAANUFADAEAADRBQAgBccGAQAAAAHPBkAAAAABgQggAAAAAYIIAQAAAAGDCAEAAAABAQgAANkFACAFxwYBAAAAAc8GQAAAAAGBCCAAAAABgggBAAAAAYMIAQAAAAEBCAAA2wUAMAEIAADbBQAwBccGAQDFDAAhzwZAAMkMACGBCCAAyAwAIYIIAQDGDAAhgwgBAMYMACECAAAA0QUAIAgAAN4FACAFxwYBAMUMACHPBkAAyQwAIYEIIADIDAAhgggBAMYMACGDCAEAxgwAIQIAAADUBQAgCAAA4AUAIAIAAADUBQAgCAAA4AUAIAMAAADRBQAgDwAA2QUAIBAAAN4FACABAAAA0QUAIAEAAADUBQAgBRUAAJMSACAYAACVEgAgGQAAlBIAIIIIAAC_DAAggwgAAL8MACAIxAYAAMALADDFBgAA5wUAEMYGAADACwAwxwYBAMQKACHPBkAAyAoAIYEIIADHCgAhgggBAMUKACGDCAEAxQoAIQMAAADUBQAgAwAA5gUAMBQAAOcFACADAAAA1AUAIAMAANUFADAEAADRBQAgC8QGAAC9CwAwxQYAAO0FABDGBgAAvQsAMMcGAQAAAAHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHlBgEA1goAIZsHAAC_C4EIIqwHAQDXCgAh_wcAAL4L_wciAQAAAOoFACABAAAA6gUAIAvEBgAAvQsAMMUGAADtBQAQxgYAAL0LADDHBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIeUGAQDWCgAhmwcAAL8LgQgirAcBANcKACH_BwAAvgv_ByIBrAcAAL8MACADAAAA7QUAIAMAAO4FADAEAADqBQAgAwAAAO0FACADAADuBQAwBAAA6gUAIAMAAADtBQAgAwAA7gUAMAQAAOoFACAIxwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAeUGAQAAAAGbBwAAAIEIAqwHAQAAAAH_BwAAAP8HAgEIAADyBQAgCMcGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAABmwcAAACBCAKsBwEAAAAB_wcAAAD_BwIBCAAA9AUAMAEIAAD0BQAwCMcGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh5QYBAMUMACGbBwAAkhKBCCKsBwEAxgwAIf8HAACREv8HIgIAAADqBQAgCAAA9wUAIAjHBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDFDAAhmwcAAJISgQgirAcBAMYMACH_BwAAkRL_ByICAAAA7QUAIAgAAPkFACACAAAA7QUAIAgAAPkFACADAAAA6gUAIA8AAPIFACAQAAD3BQAgAQAAAOoFACABAAAA7QUAIAQVAACOEgAgGAAAkBIAIBkAAI8SACCsBwAAvwwAIAvEBgAAtgsAMMUGAACABgAQxgYAALYLADDHBgEAxAoAIc0GIADHCgAhzgZAAMgKACHPBkAAyAoAIeUGAQDECgAhmwcAALgLgQgirAcBAMUKACH_BwAAtwv_ByIDAAAA7QUAIAMAAP8FADAUAACABgAgAwAAAO0FACADAADuBQAwBAAA6gUAIAEAAAA7ACABAAAAOwAgAwAAADkAIAMAADoAMAQAADsAIAMAAAA5ACADAAA6ADAEAAA7ACADAAAAOQAgAwAAOgAwBAAAOwAgBycAAI0SACAtAgAAAAHHBgEAAAABzgZAAAAAAc8GQAAAAAGkBwEAAAAB_QcAAAD9BwIBCAAAiAYAIAYtAgAAAAHHBgEAAAABzgZAAAAAAc8GQAAAAAGkBwEAAAAB_QcAAAD9BwIBCAAAigYAMAEIAACKBgAwBycAAIwSACAtAgDHDAAhxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhpAcBAMUMACH9BwAAixL9ByICAAAAOwAgCAAAjQYAIAYtAgDHDAAhxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhpAcBAMUMACH9BwAAixL9ByICAAAAOQAgCAAAjwYAIAIAAAA5ACAIAACPBgAgAwAAADsAIA8AAIgGACAQAACNBgAgAQAAADsAIAEAAAA5ACAFFQAAhhIAIBYAAIcSACAXAACKEgAgGAAAiRIAIBkAAIgSACAJLQIAxgoAIcQGAACyCwAwxQYAAJYGABDGBgAAsgsAMMcGAQDECgAhzgZAAMgKACHPBkAAyAoAIaQHAQDECgAh_QcAALML_QciAwAAADkAIAMAAJUGADAUAACWBgAgAwAAADkAIAMAADoAMAQAADsAIA3EBgAAsQsAMMUGAACcBgAQxgYAALELADDHBgEAAAABzwZAANoKACHnBwEA1woAIfUHAQDXCgAh9gcgANkKACH3BwEA1woAIfgHIADZCgAh-QcBANcKACH6BwEA1woAIfsHIADZCgAhAQAAAJkGACABAAAAmQYAIA3EBgAAsQsAMMUGAACcBgAQxgYAALELADDHBgEA1goAIc8GQADaCgAh5wcBANcKACH1BwEA1woAIfYHIADZCgAh9wcBANcKACH4ByAA2QoAIfkHAQDXCgAh-gcBANcKACH7ByAA2QoAIQXnBwAAvwwAIPUHAAC_DAAg9wcAAL8MACD5BwAAvwwAIPoHAAC_DAAgAwAAAJwGACADAACdBgAwBAAAmQYAIAMAAACcBgAgAwAAnQYAMAQAAJkGACADAAAAnAYAIAMAAJ0GADAEAACZBgAgCscGAQAAAAHPBkAAAAAB5wcBAAAAAfUHAQAAAAH2ByAAAAAB9wcBAAAAAfgHIAAAAAH5BwEAAAAB-gcBAAAAAfsHIAAAAAEBCAAAoQYAIArHBgEAAAABzwZAAAAAAecHAQAAAAH1BwEAAAAB9gcgAAAAAfcHAQAAAAH4ByAAAAAB-QcBAAAAAfoHAQAAAAH7ByAAAAABAQgAAKMGADABCAAAowYAMArHBgEAxQwAIc8GQADJDAAh5wcBAMYMACH1BwEAxgwAIfYHIADIDAAh9wcBAMYMACH4ByAAyAwAIfkHAQDGDAAh-gcBAMYMACH7ByAAyAwAIQIAAACZBgAgCAAApgYAIArHBgEAxQwAIc8GQADJDAAh5wcBAMYMACH1BwEAxgwAIfYHIADIDAAh9wcBAMYMACH4ByAAyAwAIfkHAQDGDAAh-gcBAMYMACH7ByAAyAwAIQIAAACcBgAgCAAAqAYAIAIAAACcBgAgCAAAqAYAIAMAAACZBgAgDwAAoQYAIBAAAKYGACABAAAAmQYAIAEAAACcBgAgCBUAAIMSACAYAACFEgAgGQAAhBIAIOcHAAC_DAAg9QcAAL8MACD3BwAAvwwAIPkHAAC_DAAg-gcAAL8MACANxAYAALALADDFBgAArwYAEMYGAACwCwAwxwYBAMQKACHPBkAAyAoAIecHAQDFCgAh9QcBAMUKACH2ByAAxwoAIfcHAQDFCgAh-AcgAMcKACH5BwEAxQoAIfoHAQDFCgAh-wcgAMcKACEDAAAAnAYAIAMAAK4GADAUAACvBgAgAwAAAJwGACADAACdBgAwBAAAmQYAIAEAAACNAQAgAQAAAI0BACADAAAAiwEAIAMAAIwBADAEAACNAQAgAwAAAIsBACADAACMAQAwBAAAjQEAIAMAAACLAQAgAwAAjAEAMAQAAI0BACAhIwAA6w8AICsAAOAOACDHBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAf8GAQAAAAGTBwEAAAABlgcBAAAAAaMHAQAAAAHfBwEAAAAB4AcgAAAAAeEHIAAAAAHiByAAAAAB4wcgAAAAAeQHAADdDgAg5QcBAAAAAeYHAQAAAAHnBwEAAAAB6AcBAAAAAekHAQAAAAHqBwEAAAAB6wcBAAAAAewHAADeDgAg7QcBAAAAAe4HAQAAAAHvBwEAAAAB8AcBAAAAAfEHAADfDgAg8gcBAAAAAfMHAQAAAAH0BwIAAAABAQgAALcGACAfxwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAH_BgEAAAABkwcBAAAAAZYHAQAAAAGjBwEAAAAB3wcBAAAAAeAHIAAAAAHhByAAAAAB4gcgAAAAAeMHIAAAAAHkBwAA3Q4AIOUHAQAAAAHmBwEAAAAB5wcBAAAAAegHAQAAAAHpBwEAAAAB6gcBAAAAAesHAQAAAAHsBwAA3g4AIO0HAQAAAAHuBwEAAAAB7wcBAAAAAfAHAQAAAAHxBwAA3w4AIPIHAQAAAAHzBwEAAAAB9AcCAAAAAQEIAAC5BgAwAQgAALkGADAhIwAA6Q8AICsAANsOACDHBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh_wYBAMUMACGTBwEAxQwAIZYHAQDGDAAhowcBAMUMACHfBwEAxQwAIeAHIADIDAAh4QcgAMgMACHiByAAyAwAIeMHIADIDAAh5AcAANcOACDlBwEAxQwAIeYHAQDGDAAh5wcBAMYMACHoBwEAxgwAIekHAQDGDAAh6gcBAMYMACHrBwEAxgwAIewHAADYDgAg7QcBAMYMACHuBwEAxgwAIe8HAQDGDAAh8AcBAMYMACHxBwAA2Q4AIPIHAQDFDAAh8wcBAMUMACH0BwIAxwwAIQIAAACNAQAgCAAAvAYAIB_HBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh_wYBAMUMACGTBwEAxQwAIZYHAQDGDAAhowcBAMUMACHfBwEAxQwAIeAHIADIDAAh4QcgAMgMACHiByAAyAwAIeMHIADIDAAh5AcAANcOACDlBwEAxQwAIeYHAQDGDAAh5wcBAMYMACHoBwEAxgwAIekHAQDGDAAh6gcBAMYMACHrBwEAxgwAIewHAADYDgAg7QcBAMYMACHuBwEAxgwAIe8HAQDGDAAh8AcBAMYMACHxBwAA2Q4AIPIHAQDFDAAh8wcBAMUMACH0BwIAxwwAIQIAAACLAQAgCAAAvgYAIAIAAACLAQAgCAAAvgYAIAMAAACNAQAgDwAAtwYAIBAAALwGACABAAAAjQEAIAEAAACLAQAgERUAAP4RACAWAAD_EQAgFwAAghIAIBgAAIESACAZAACAEgAg6AYAAL8MACCWBwAAvwwAIOYHAAC_DAAg5wcAAL8MACDoBwAAvwwAIOkHAAC_DAAg6gcAAL8MACDrBwAAvwwAIO0HAAC_DAAg7gcAAL8MACDvBwAAvwwAIPAHAAC_DAAgIsQGAACvCwAwxQYAAMUGABDGBgAArwsAMMcGAQDECgAhzQYgAMcKACHOBkAAyAoAIc8GQADICgAh6AYBAMUKACH_BgEAxAoAIZMHAQDECgAhlgcBAMUKACGjBwEAxAoAId8HAQDECgAh4AcgAMcKACHhByAAxwoAIeIHIADHCgAh4wcgAMcKACHkBwAA3AoAIOUHAQDECgAh5gcBAMUKACHnBwEAxQoAIegHAQDFCgAh6QcBAMUKACHqBwEAxQoAIesHAQDFCgAh7AcAANwKACDtBwEAxQoAIe4HAQDFCgAh7wcBAMUKACHwBwEAxQoAIfEHAADcCgAg8gcBAMQKACHzBwEAxAoAIfQHAgDGCgAhAwAAAIsBACADAADEBgAwFAAAxQYAIAMAAACLAQAgAwAAjAEAMAQAAI0BACABAAAAVQAgAQAAAFUAIAMAAABTACADAABUADAEAABVACADAAAAUwAgAwAAVAAwBAAAVQAgAwAAAFMAIAMAAFQAMAQAAFUAIAoeAADoDQAgLQAAmQ0AIMcGAQAAAAHOBkAAAAAB-QYBAAAAAf4GAQAAAAGbBwAAAN0HArwHAQAAAAHdBwEAAAAB3gcgAAAAAQEIAADNBgAgCMcGAQAAAAHOBkAAAAAB-QYBAAAAAf4GAQAAAAGbBwAAAN0HArwHAQAAAAHdBwEAAAAB3gcgAAAAAQEIAADPBgAwAQgAAM8GADABAAAAVwAgCh4AAOYNACAtAACXDQAgxwYBAMUMACHOBkAAyQwAIfkGAQDFDAAh_gYBAMUMACGbBwAAlQ3dByK8BwEAxgwAId0HAQDFDAAh3gcgAMgMACECAAAAVQAgCAAA0wYAIAjHBgEAxQwAIc4GQADJDAAh-QYBAMUMACH-BgEAxQwAIZsHAACVDd0HIrwHAQDGDAAh3QcBAMUMACHeByAAyAwAIQIAAABTACAIAADVBgAgAgAAAFMAIAgAANUGACABAAAAVwAgAwAAAFUAIA8AAM0GACAQAADTBgAgAQAAAFUAIAEAAABTACAEFQAA-xEAIBgAAP0RACAZAAD8EQAgvAcAAL8MACALxAYAAKsLADDFBgAA3QYAEMYGAACrCwAwxwYBAMQKACHOBkAAyAoAIfkGAQDECgAh_gYBAMQKACGbBwAArAvdByK8BwEAxQoAId0HAQDECgAh3gcgAMcKACEDAAAAUwAgAwAA3AYAMBQAAN0GACADAAAAUwAgAwAAVAAwBAAAVQAgAQAAAGsAIAEAAABrACADAAAAVwAgAwAAagAwBAAAawAgAwAAAFcAIAMAAGoAMAQAAGsAIAMAAABXACADAABqADAEAABrACAiHgAA6w4AICMAAIoOACAsAACLDgAgLgAAjA4AIDMAAI0OACA0AACODgAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB6gYBAAAAAesGAQAAAAHsBgEAAAAB_gYBAAAAAaMHAQAAAAG-BwgAAAABvwcIAAAAAccHAgAAAAHIBwEAAAABygcAAADKBwLLBwgAAAABzQcAAADNBwLOBwEAAAABzwcAAADGBwLQBwEAAAAB0QcBAAAAAdIHAQAAAAHTBwEAAAAB1QcAAADVBwPWBwEAAAAB1wcBAAAAAdgHAQAAAAHZB0AAAAAB2gcBAAAAAdsHAQAAAAEBCAAA5QYAIBzHBgEAAAABzgZAAAAAAc8GQAAAAAHqBgEAAAAB6wYBAAAAAewGAQAAAAH-BgEAAAABowcBAAAAAb4HCAAAAAG_BwgAAAABxwcCAAAAAcgHAQAAAAHKBwAAAMoHAssHCAAAAAHNBwAAAM0HAs4HAQAAAAHPBwAAAMYHAtAHAQAAAAHRBwEAAAAB0gcBAAAAAdMHAQAAAAHVBwAAANUHA9YHAQAAAAHXBwEAAAAB2AcBAAAAAdkHQAAAAAHaBwEAAAAB2wcBAAAAAQEIAADnBgAwAQgAAOcGADABAAAAHgAgAQAAAC0AIAEAAABkACAiHgAA6Q4AICMAAM4NACAsAADPDQAgLgAA0A0AIDMAANENACA0AADSDQAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh6gYBAMYMACHrBgEAxgwAIewGAQDGDAAh_gYBAMYMACGjBwEAxgwAIb4HCADwDAAhvwcIAPAMACHHBwIAxwwAIcgHAQDGDAAhygcAAMkNygciywcIAPAMACHNBwAAyg3NByLOBwEAxgwAIc8HAADLDcYHItAHAQDGDAAh0QcBAMYMACHSBwEAxgwAIdMHAQDGDAAh1QcAAMwN1Qcj1gcBAMYMACHXBwEAxgwAIdgHAQDGDAAh2QdAANsMACHaBwEAxgwAIdsHAQDGDAAhAgAAAGsAIAgAAO0GACAcxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh6gYBAMYMACHrBgEAxgwAIewGAQDGDAAh_gYBAMYMACGjBwEAxgwAIb4HCADwDAAhvwcIAPAMACHHBwIAxwwAIcgHAQDGDAAhygcAAMkNygciywcIAPAMACHNBwAAyg3NByLOBwEAxgwAIc8HAADLDcYHItAHAQDGDAAh0QcBAMYMACHSBwEAxgwAIdMHAQDGDAAh1QcAAMwN1Qcj1gcBAMYMACHXBwEAxgwAIdgHAQDGDAAh2QdAANsMACHaBwEAxgwAIdsHAQDGDAAhAgAAAFcAIAgAAO8GACACAAAAVwAgCAAA7wYAIAEAAAAeACABAAAALQAgAQAAAGQAIAMAAABrACAPAADlBgAgEAAA7QYAIAEAAABrACABAAAAVwAgFxUAAPYRACAWAAD3EQAgFwAA-hEAIBgAAPkRACAZAAD4EQAg6gYAAL8MACDrBgAAvwwAIOwGAAC_DAAg_gYAAL8MACCjBwAAvwwAIMgHAAC_DAAgzgcAAL8MACDQBwAAvwwAINEHAAC_DAAg0gcAAL8MACDTBwAAvwwAINUHAAC_DAAg1gcAAL8MACDXBwAAvwwAINgHAAC_DAAg2QcAAL8MACDaBwAAvwwAINsHAAC_DAAgH8QGAAChCwAwxQYAAPkGABDGBgAAoQsAMMcGAQDECgAhzgZAAMgKACHPBkAAyAoAIeoGAQDFCgAh6wYBAMUKACHsBgEAxQoAIf4GAQDFCgAhowcBAMUKACG-BwgA8goAIb8HCADyCgAhxwcCAMYKACHIBwEAxQoAIcoHAACiC8oHIssHCADyCgAhzQcAAKMLzQcizgcBAMUKACHPBwAAnQvGByLQBwEAxQoAIdEHAQDFCgAh0gcBAMUKACHTBwEAxQoAIdUHAACkC9UHI9YHAQDFCgAh1wcBAMUKACHYBwEAxQoAIdkHQAD_CgAh2gcBAMUKACHbBwEAxQoAIQMAAABXACADAAD4BgAwFAAA-QYAIAMAAABXACADAABqADAEAABrACABAAAATgAgAQAAAE4AIAMAAABMACADAABNADAEAABOACADAAAATAAgAwAATQAwBAAATgAgAwAAAEwAIAMAAE0AMAQAAE4AIBEjAACHDgAgKwAAhQ4AIC0AAKwPACAyAACGDgAgNgAAiA4AIMcGAQAAAAH_BgEAAAABjwcCAAAAAZkHAAAAxgcCowcBAAAAAagHAQAAAAGqBwgAAAABvAcBAAAAAcIHCAAAAAHDBwgAAAABxAcIAAAAAcYHAgAAAAEBCAAAgQcAIAzHBgEAAAAB_wYBAAAAAY8HAgAAAAGZBwAAAMYHAqMHAQAAAAGoBwEAAAABqgcIAAAAAbwHAQAAAAHCBwgAAAABwwcIAAAAAcQHCAAAAAHGBwIAAAABAQgAAIMHADABCAAAgwcAMAEAAABIACARIwAA9w0AICsAAPUNACAtAACqDwAgMgAA9g0AIDYAAPgNACDHBgEAxQwAIf8GAQDFDAAhjwcCAMcMACGZBwAAyw3GByKjBwEAxQwAIagHAQDGDAAhqgcIAPAMACG8BwEAxQwAIcIHCADzDQAhwwcIAPAMACHEBwgA8AwAIcYHAgDHDAAhAgAAAE4AIAgAAIcHACAMxwYBAMUMACH_BgEAxQwAIY8HAgDHDAAhmQcAAMsNxgciowcBAMUMACGoBwEAxgwAIaoHCADwDAAhvAcBAMUMACHCBwgA8w0AIcMHCADwDAAhxAcIAPAMACHGBwIAxwwAIQIAAABMACAIAACJBwAgAgAAAEwAIAgAAIkHACABAAAASAAgAwAAAE4AIA8AAIEHACAQAACHBwAgAQAAAE4AIAEAAABMACAHFQAA8REAIBYAAPIRACAXAAD1EQAgGAAA9BEAIBkAAPMRACCoBwAAvwwAIMIHAAC_DAAgD8QGAACbCwAwxQYAAJEHABDGBgAAmwsAMMcGAQDECgAh_wYBAMQKACGPBwIAxgoAIZkHAACdC8YHIqMHAQDECgAhqAcBAMUKACGqBwgA8goAIbwHAQDECgAhwgcIAJwLACHDBwgA8goAIcQHCADyCgAhxgcCAMYKACEDAAAATAAgAwAAkAcAMBQAAJEHACADAAAATAAgAwAATQAwBAAATgAgAQAAAFsAIAEAAABbACADAAAAWQAgAwAAWgAwBAAAWwAgAwAAAFkAIAMAAFoAMAQAAFsAIAMAAABZACADAABaADAEAABbACANIwAAiQ0AICwAAIoNACAtAACIDQAgLwAA3Q0AIMcGAQAAAAHOBkAAAAABowcBAAAAAbwHAQAAAAG9BwgAAAABvgcIAAAAAb8HCAAAAAHABwgAAAABwQcBAAAAAQEIAACZBwAgCccGAQAAAAHOBkAAAAABowcBAAAAAbwHAQAAAAG9BwgAAAABvgcIAAAAAb8HCAAAAAHABwgAAAABwQcBAAAAAQEIAACbBwAwAQgAAJsHADABAAAAHgAgDSMAAPMMACAsAAD0DAAgLQAA8gwAIC8AANsNACDHBgEAxQwAIc4GQADJDAAhowcBAMUMACG8BwEAxQwAIb0HCADwDAAhvgcIAPAMACG_BwgA8AwAIcAHCADwDAAhwQcBAMYMACECAAAAWwAgCAAAnwcAIAnHBgEAxQwAIc4GQADJDAAhowcBAMUMACG8BwEAxQwAIb0HCADwDAAhvgcIAPAMACG_BwgA8AwAIcAHCADwDAAhwQcBAMYMACECAAAAWQAgCAAAoQcAIAIAAABZACAIAAChBwAgAQAAAB4AIAMAAABbACAPAACZBwAgEAAAnwcAIAEAAABbACABAAAAWQAgBhUAAOwRACAWAADtEQAgFwAA8BEAIBgAAO8RACAZAADuEQAgwQcAAL8MACAMxAYAAJoLADDFBgAAqQcAEMYGAACaCwAwxwYBAMQKACHOBkAAyAoAIaMHAQDECgAhvAcBAMQKACG9BwgA8goAIb4HCADyCgAhvwcIAPIKACHABwgA8goAIcEHAQDFCgAhAwAAAFkAIAMAAKgHADAUAACpBwAgAwAAAFkAIAMAAFoAMAQAAFsAIAEAAABgACABAAAAYAAgAwAAAF4AIAMAAF8AMAQAAGAAIAMAAABeACADAABfADAEAABgACADAAAAXgAgAwAAXwAwBAAAYAAgDCsAAIUNACAwAACDDgAgMQAAhA0AIDIAAIYNACDHBgEAAAAB_wYBAAAAAY8HAgAAAAGoBwEAAAABqgcIAAAAAbkHAQAAAAG6BwEAAAABuwcIAAAAAQEIAACxBwAgCMcGAQAAAAH_BgEAAAABjwcCAAAAAagHAQAAAAGqBwgAAAABuQcBAAAAAboHAQAAAAG7BwgAAAABAQgAALMHADABCAAAswcAMAEAAABIACAMKwAAgQ0AIDAAAIEOACAxAACADQAgMgAAgg0AIMcGAQDFDAAh_wYBAMUMACGPBwIAxwwAIagHAQDGDAAhqgcIAPAMACG5BwEAxQwAIboHAQDFDAAhuwcIAPAMACECAAAAYAAgCAAAtwcAIAjHBgEAxQwAIf8GAQDFDAAhjwcCAMcMACGoBwEAxgwAIaoHCADwDAAhuQcBAMUMACG6BwEAxQwAIbsHCADwDAAhAgAAAF4AIAgAALkHACACAAAAXgAgCAAAuQcAIAEAAABIACADAAAAYAAgDwAAsQcAIBAAALcHACABAAAAYAAgAQAAAF4AIAYVAADnEQAgFgAA6BEAIBcAAOsRACAYAADqEQAgGQAA6REAIKgHAAC_DAAgC8QGAACZCwAwxQYAAMEHABDGBgAAmQsAMMcGAQDECgAh_wYBAMQKACGPBwIAxgoAIagHAQDFCgAhqgcIAPIKACG5BwEAxAoAIboHAQDECgAhuwcIAPIKACEDAAAAXgAgAwAAwAcAMBQAAMEHACADAAAAXgAgAwAAXwAwBAAAYAAgCcQGAACYCwAwxQYAAMcHABDGBgAAmAsAMMcGAQAAAAHKBgEA1goAIc4GQADaCgAhzwZAANoKACH5BgEA1goAIZMHAQAAAAEBAAAAxAcAIAEAAADEBwAgCcQGAACYCwAwxQYAAMcHABDGBgAAmAsAMMcGAQDWCgAhygYBANYKACHOBkAA2goAIc8GQADaCgAh-QYBANYKACGTBwEA1goAIQADAAAAxwcAIAMAAMgHADAEAADEBwAgAwAAAMcHACADAADIBwAwBAAAxAcAIAMAAADHBwAgAwAAyAcAMAQAAMQHACAGxwYBAAAAAcoGAQAAAAHOBkAAAAABzwZAAAAAAfkGAQAAAAGTBwEAAAABAQgAAMwHACAGxwYBAAAAAcoGAQAAAAHOBkAAAAABzwZAAAAAAfkGAQAAAAGTBwEAAAABAQgAAM4HADABCAAAzgcAMAbHBgEAxQwAIcoGAQDFDAAhzgZAAMkMACHPBkAAyQwAIfkGAQDFDAAhkwcBAMUMACECAAAAxAcAIAgAANEHACAGxwYBAMUMACHKBgEAxQwAIc4GQADJDAAhzwZAAMkMACH5BgEAxQwAIZMHAQDFDAAhAgAAAMcHACAIAADTBwAgAgAAAMcHACAIAADTBwAgAwAAAMQHACAPAADMBwAgEAAA0QcAIAEAAADEBwAgAQAAAMcHACADFQAA5BEAIBgAAOYRACAZAADlEQAgCcQGAACXCwAwxQYAANoHABDGBgAAlwsAMMcGAQDECgAhygYBAMQKACHOBkAAyAoAIc8GQADICgAh-QYBAMQKACGTBwEAxAoAIQMAAADHBwAgAwAA2QcAMBQAANoHACADAAAAxwcAIAMAAMgHADAEAADEBwAgEMQGAACWCwAwxQYAAOAHABDGBgAAlgsAMMcGAQAAAAHPBkAA2goAIa4HIADZCgAhrwcgANkKACGwBwEA1goAIbEHAQDXCgAhsgcBANcKACGzByAA2QoAIbQHAQDWCgAhtQcBANcKACG2BwEA1woAIbcHAQDXCgAhuAcBANcKACEBAAAA3QcAIAEAAADdBwAgEMQGAACWCwAwxQYAAOAHABDGBgAAlgsAMMcGAQDWCgAhzwZAANoKACGuByAA2QoAIa8HIADZCgAhsAcBANYKACGxBwEA1woAIbIHAQDXCgAhswcgANkKACG0BwEA1goAIbUHAQDXCgAhtgcBANcKACG3BwEA1woAIbgHAQDXCgAhBrEHAAC_DAAgsgcAAL8MACC1BwAAvwwAILYHAAC_DAAgtwcAAL8MACC4BwAAvwwAIAMAAADgBwAgAwAA4QcAMAQAAN0HACADAAAA4AcAIAMAAOEHADAEAADdBwAgAwAAAOAHACADAADhBwAwBAAA3QcAIA3HBgEAAAABzwZAAAAAAa4HIAAAAAGvByAAAAABsAcBAAAAAbEHAQAAAAGyBwEAAAABswcgAAAAAbQHAQAAAAG1BwEAAAABtgcBAAAAAbcHAQAAAAG4BwEAAAABAQgAAOUHACANxwYBAAAAAc8GQAAAAAGuByAAAAABrwcgAAAAAbAHAQAAAAGxBwEAAAABsgcBAAAAAbMHIAAAAAG0BwEAAAABtQcBAAAAAbYHAQAAAAG3BwEAAAABuAcBAAAAAQEIAADnBwAwAQgAAOcHADANxwYBAMUMACHPBkAAyQwAIa4HIADIDAAhrwcgAMgMACGwBwEAxQwAIbEHAQDGDAAhsgcBAMYMACGzByAAyAwAIbQHAQDFDAAhtQcBAMYMACG2BwEAxgwAIbcHAQDGDAAhuAcBAMYMACECAAAA3QcAIAgAAOoHACANxwYBAMUMACHPBkAAyQwAIa4HIADIDAAhrwcgAMgMACGwBwEAxQwAIbEHAQDGDAAhsgcBAMYMACGzByAAyAwAIbQHAQDFDAAhtQcBAMYMACG2BwEAxgwAIbcHAQDGDAAhuAcBAMYMACECAAAA4AcAIAgAAOwHACACAAAA4AcAIAgAAOwHACADAAAA3QcAIA8AAOUHACAQAADqBwAgAQAAAN0HACABAAAA4AcAIAkVAADhEQAgGAAA4xEAIBkAAOIRACCxBwAAvwwAILIHAAC_DAAgtQcAAL8MACC2BwAAvwwAILcHAAC_DAAguAcAAL8MACAQxAYAAJULADDFBgAA8wcAEMYGAACVCwAwxwYBAMQKACHPBkAAyAoAIa4HIADHCgAhrwcgAMcKACGwBwEAxAoAIbEHAQDFCgAhsgcBAMUKACGzByAAxwoAIbQHAQDECgAhtQcBAMUKACG2BwEAxQoAIbcHAQDFCgAhuAcBAMUKACEDAAAA4AcAIAMAAPIHADAUAADzBwAgAwAAAOAHACADAADhBwAwBAAA3QcAIAvEBgAAlAsAMMUGAAD5BwAQxgYAAJQLADDHBgEAAAABzQYgANkKACHOBkAA2goAIc8GQADaCgAh5QYBANYKACH5BgEA1woAIawHAQDXCgAhrQcCANgKACEBAAAA9gcAIAEAAAD2BwAgC8QGAACUCwAwxQYAAPkHABDGBgAAlAsAMMcGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAh5QYBANYKACH5BgEA1woAIawHAQDXCgAhrQcCANgKACEC-QYAAL8MACCsBwAAvwwAIAMAAAD5BwAgAwAA-gcAMAQAAPYHACADAAAA-QcAIAMAAPoHADAEAAD2BwAgAwAAAPkHACADAAD6BwAwBAAA9gcAIAjHBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB5QYBAAAAAfkGAQAAAAGsBwEAAAABrQcCAAAAAQEIAAD-BwAgCMcGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAAB-QYBAAAAAawHAQAAAAGtBwIAAAABAQgAAIAIADABCAAAgAgAMAjHBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDFDAAh-QYBAMYMACGsBwEAxgwAIa0HAgDHDAAhAgAAAPYHACAIAACDCAAgCMcGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh5QYBAMUMACH5BgEAxgwAIawHAQDGDAAhrQcCAMcMACECAAAA-QcAIAgAAIUIACACAAAA-QcAIAgAAIUIACADAAAA9gcAIA8AAP4HACAQAACDCAAgAQAAAPYHACABAAAA-QcAIAcVAADcEQAgFgAA3REAIBcAAOARACAYAADfEQAgGQAA3hEAIPkGAAC_DAAgrAcAAL8MACALxAYAAJMLADDFBgAAjAgAEMYGAACTCwAwxwYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACHlBgEAxAoAIfkGAQDFCgAhrAcBAMUKACGtBwIAxgoAIQMAAAD5BwAgAwAAiwgAMBQAAIwIACADAAAA-QcAIAMAAPoHADAEAAD2BwAgAQAAAIkBACABAAAAiQEAIAMAAACHAQAgAwAAiAEAMAQAAIkBACADAAAAhwEAIAMAAIgBADAEAACJAQAgAwAAAIcBACADAACIAQAwBAAAiQEAIA0jAAD2DwAgKwAA-Q4AIMcGAQAAAAHOBkAAAAABzwZAAAAAAf8GAQAAAAGNBwEAAAABjwcCAAAAAaMHAQAAAAGoBwEAAAABqQcBAAAAAaoHCAAAAAGrBwEAAAABAQgAAJQIACALxwYBAAAAAc4GQAAAAAHPBkAAAAAB_wYBAAAAAY0HAQAAAAGPBwIAAAABowcBAAAAAagHAQAAAAGpBwEAAAABqgcIAAAAAasHAQAAAAEBCAAAlggAMAEIAACWCAAwDSMAAPQPACArAAD3DgAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_wYBAMUMACGNBwEAxgwAIY8HAgDHDAAhowcBAMUMACGoBwEAxgwAIakHAQDFDAAhqgcIAPAMACGrBwEAxgwAIQIAAACJAQAgCAAAmQgAIAvHBgEAxQwAIc4GQADJDAAhzwZAAMkMACH_BgEAxQwAIY0HAQDGDAAhjwcCAMcMACGjBwEAxQwAIagHAQDGDAAhqQcBAMUMACGqBwgA8AwAIasHAQDGDAAhAgAAAIcBACAIAACbCAAgAgAAAIcBACAIAACbCAAgAwAAAIkBACAPAACUCAAgEAAAmQgAIAEAAACJAQAgAQAAAIcBACAIFQAA1xEAIBYAANgRACAXAADbEQAgGAAA2hEAIBkAANkRACCNBwAAvwwAIKgHAAC_DAAgqwcAAL8MACAOxAYAAJILADDFBgAAoggAEMYGAACSCwAwxwYBAMQKACHOBkAAyAoAIc8GQADICgAh_wYBAMQKACGNBwEAxQoAIY8HAgDGCgAhowcBAMQKACGoBwEAxQoAIakHAQDECgAhqgcIAPIKACGrBwEAxQoAIQMAAACHAQAgAwAAoQgAMBQAAKIIACADAAAAhwEAIAMAAIgBADAEAACJAQAgAQAAADEAIAEAAAAxACADAAAALwAgAwAAMAAwBAAAMQAgAwAAAC8AIAMAADAAMAQAADEAIAMAAAAvACADAAAwADAEAAAxACAnIwAAohEAICcAANIQACApAADTEAAgKgAA1BAAIDYAANwQACA3AADXEAAgOQAA2BAAIDoAANUQACA7AADWEAAgPAAA2RAAID0AANoQACA-AADbEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpAcBAAAAAaUHAQAAAAGmBwEAAAABAQgAAKoIACAaxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGOBwEAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABkwcBAAAAAZQHAQAAAAGVBwAAzxAAIJYHAQAAAAGXBwIAAAABmQcAAACZBwKbBwAAAJsHApwHgAAAAAGdBwAA0BAAIJ8HAAAAnwcCoAcIAAAAAaEHIAAAAAGiBwAA0RAAIKMHAQAAAAGkBwEAAAABpQcBAAAAAaYHAQAAAAEBCAAArAgAMAEIAACsCAAwAQAAAEAAIAEAAABEACAnIwAAoBEAICcAAL4PACApAAC_DwAgKgAAwA8AIDYAAMgPACA3AADDDwAgOQAAxA8AIDoAAMEPACA7AADCDwAgPAAAxQ8AID0AAMYPACA-AADHDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAIQIAAAAxACAIAACxCAAgGscGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAIQIAAAAvACAIAACzCAAgAgAAAC8AIAgAALMIACABAAAAQAAgAQAAAEQAIAMAAAAxACAPAACqCAAgEAAAsQgAIAEAAAAxACABAAAALwAgChUAANIRACAWAADTEQAgFwAA1hEAIBgAANURACAZAADUEQAgjgcAAL8MACCWBwAAvwwAIJwHAAC_DAAgpQcAAL8MACCmBwAAvwwAIB3EBgAAhwsAMMUGAAC8CAAQxgYAAIcLADDHBgEAxAoAIcgGAQDECgAhzgZAAMgKACHPBkAAyAoAIegGAQDECgAhjgcBAMUKACGQBwgA8goAIZEHCADyCgAhkgcIAPIKACGTBwEAxAoAIZQHAQDECgAhlQcAANwKACCWBwEAxQoAIZcHAgDGCgAhmQcAAIgLmQcimwcAAIkLmwcinAcAAP4KACCdBwAA3AoAIJ8HAACKC58HIqAHCADyCgAhoQcgAMcKACGiBwAAiwsAIKMHAQDECgAhpAcBAMQKACGlBwEAxQoAIaYHAQDFCgAhAwAAAC8AIAMAALsIADAUAAC8CAAgAwAAAC8AIAMAADAAMAQAADEAIAEAAABKACABAAAASgAgAwAAAEgAIAMAAEkAMAQAAEoAIAMAAABIACADAABJADAEAABKACADAAAASAAgAwAASQAwBAAASgAgDysAANERACA2AADNEAAgNwAAyxAAIDkAAMwQACDHBgEAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAAB_wYBAAAAAY0HAQAAAAGOBwEAAAABjwcCAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAQEIAADECAAgC8cGAQAAAAHOBkAAAAABzwZAAAAAAeUGAQAAAAH_BgEAAAABjQcBAAAAAY4HAQAAAAGPBwIAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABAQgAAMYIADABCAAAxggAMA8rAADQEQAgNgAArhAAIDcAAKwQACA5AACtEAAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh5QYBAMYMACH_BgEAxQwAIY0HAQDFDAAhjgcBAMYMACGPBwIAxwwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIQIAAABKACAIAADJCAAgC8cGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh_wYBAMUMACGNBwEAxQwAIY4HAQDGDAAhjwcCAMcMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACECAAAASAAgCAAAywgAIAIAAABIACAIAADLCAAgAwAAAEoAIA8AAMQIACAQAADJCAAgAQAAAEoAIAEAAABIACAHFQAAyxEAIBYAAMwRACAXAADPEQAgGAAAzhEAIBkAAM0RACDlBgAAvwwAII4HAAC_DAAgDsQGAACGCwAwxQYAANIIABDGBgAAhgsAMMcGAQDECgAhzgZAAMgKACHPBkAAyAoAIeUGAQDFCgAh_wYBAMQKACGNBwEAxAoAIY4HAQDFCgAhjwcCAMYKACGQBwgA8goAIZEHCADyCgAhkgcIAPIKACEDAAAASAAgAwAA0QgAMBQAANIIACADAAAASAAgAwAASQAwBAAASgAgDsQGAACDCwAwxQYAANgIABDGBgAAgwsAMMcGAQAAAAHKBgEA1goAIc4GQADaCgAhzwZAANoKACGABwEAAAABgQcBANYKACGCBwEA1goAIYMHAQDXCgAhhAcAAIQLACCFByAA2QoAIYYHQACFCwAhAQAAANUIACABAAAA1QgAIA7EBgAAgwsAMMUGAADYCAAQxgYAAIMLADDHBgEA1goAIcoGAQDWCgAhzgZAANoKACHPBkAA2goAIYAHAQDWCgAhgQcBANYKACGCBwEA1goAIYMHAQDXCgAhhAcAAIQLACCFByAA2QoAIYYHQACFCwAhA4MHAAC_DAAghAcAAL8MACCGBwAAvwwAIAMAAADYCAAgAwAA2QgAMAQAANUIACADAAAA2AgAIAMAANkIADAEAADVCAAgAwAAANgIACADAADZCAAwBAAA1QgAIAvHBgEAxQwAIcoGAQDFDAAhzgZAAMkMACHPBkAAyQwAIYAHAQDFDAAhgQcBAMUMACGCBwEAxQwAIYMHAQDGDAAhhAeAAAAAAYUHIADIDAAhhgdAANsMACECAAAA1QgAIAgAAN0IACALxwYBAMUMACHKBgEAxQwAIc4GQADJDAAhzwZAAMkMACGABwEAxQwAIYEHAQDFDAAhggcBAMUMACGDBwEAxgwAIYQHgAAAAAGFByAAyAwAIYYHQADbDAAhAgAAANgIACAIAADfCAAgAgAAANgIACAIAADfCAAgAQAAANUIACABAAAA2AgAIAYVAADIEQAgGAAAyhEAIBkAAMkRACCDBwAAvwwAIIQHAAC_DAAghgcAAL8MACAOxAYAAP0KADDFBgAA5QgAEMYGAAD9CgAwxwYBAMQKACHKBgEAxAoAIc4GQADICgAhzwZAAMgKACGABwEAxAoAIYEHAQDECgAhggcBAMQKACGDBwEAxQoAIYQHAAD-CgAghQcgAMcKACGGB0AA_woAIQMAAADYCAAgAwAA5AgAMBQAAOUIACADAAAA2AgAIAMAANkIADAEAADVCAAgAQAAAIIBACABAAAAggEAIAMAAACAAQAgAwAAgQEAMAQAAIIBACADAAAAgAEAIAMAAIEBADAEAACCAQAgAwAAAIABACADAACBAQAwBAAAggEAIAkeAACgEAAgKwAApw0AIMcGAQAAAAHMBgIAAAABzgZAAAAAAc8GQAAAAAH9BgEAAAAB_gYBAAAAAf8GAQAAAAEBCAAA7QgAIAfHBgEAAAABzAYCAAAAAc4GQAAAAAHPBkAAAAAB_QYBAAAAAf4GAQAAAAH_BgEAAAABAQgAAO8IADABCAAA7wgAMAkeAACeEAAgKwAApQ0AIMcGAQDFDAAhzAYCAMcMACHOBkAAyQwAIc8GQADJDAAh_QYBAMYMACH-BgEAxQwAIf8GAQDFDAAhAgAAAIIBACAIAADyCAAgB8cGAQDFDAAhzAYCAMcMACHOBkAAyQwAIc8GQADJDAAh_QYBAMYMACH-BgEAxQwAIf8GAQDFDAAhAgAAAIABACAIAAD0CAAgAgAAAIABACAIAAD0CAAgAwAAAIIBACAPAADtCAAgEAAA8ggAIAEAAACCAQAgAQAAAIABACAGFQAAwxEAIBYAAMQRACAXAADHEQAgGAAAxhEAIBkAAMURACD9BgAAvwwAIArEBgAA_AoAMMUGAAD7CAAQxgYAAPwKADDHBgEAxAoAIcwGAgDGCgAhzgZAAMgKACHPBkAAyAoAIf0GAQDFCgAh_gYBAMQKACH_BgEAxAoAIQMAAACAAQAgAwAA-ggAMBQAAPsIACADAAAAgAEAIAMAAIEBADAEAACCAQAgDS0CANgKACHEBgAA-goAMMUGAACBCQAQxgYAAPoKADDHBgEAAAABzQYgANkKACHOBkAA2goAIc8GQADaCgAh6AYBANcKACH5BgEA1goAIfoGAQDWCgAh-wYBANcKACH8BgIA-woAIQEAAAD-CAAgAQAAAP4IACANLQIA2AoAIcQGAAD6CgAwxQYAAIEJABDGBgAA-goAMMcGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAh6AYBANcKACH5BgEA1goAIfoGAQDWCgAh-wYBANcKACH8BgIA-woAIQPoBgAAvwwAIPsGAAC_DAAg_AYAAL8MACADAAAAgQkAIAMAAIIJADAEAAD-CAAgAwAAAIEJACADAACCCQAwBAAA_ggAIAMAAACBCQAgAwAAggkAMAQAAP4IACAKLQIAAAABxwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAH5BgEAAAAB-gYBAAAAAfsGAQAAAAH8BgIAAAABAQgAAIYJACAKLQIAAAABxwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAH5BgEAAAAB-gYBAAAAAfsGAQAAAAH8BgIAAAABAQgAAIgJADABCAAAiAkAMAotAgDHDAAhxwYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIfkGAQDFDAAh-gYBAMUMACH7BgEAxgwAIfwGAgDCEQAhAgAAAP4IACAIAACLCQAgCi0CAMcMACHHBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh-QYBAMUMACH6BgEAxQwAIfsGAQDGDAAh_AYCAMIRACECAAAAgQkAIAgAAI0JACACAAAAgQkAIAgAAI0JACADAAAA_ggAIA8AAIYJACAQAACLCQAgAQAAAP4IACABAAAAgQkAIAgVAAC9EQAgFgAAvhEAIBcAAMERACAYAADAEQAgGQAAvxEAIOgGAAC_DAAg-wYAAL8MACD8BgAAvwwAIA0tAgDGCgAhxAYAAPYKADDFBgAAlAkAEMYGAAD2CgAwxwYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACHoBgEAxQoAIfkGAQDECgAh-gYBAMQKACH7BgEAxQoAIfwGAgD3CgAhAwAAAIEJACADAACTCQAwFAAAlAkAIAMAAACBCQAgAwAAggkAMAQAAP4IACAHxAYAAPQKADDFBgAAmgkAEMYGAAD0CgAwxwYBAAAAAc8GQADaCgAh9wYIAPUKACH4BggA9QoAIQEAAACXCQAgAQAAAJcJACAHxAYAAPQKADDFBgAAmgkAEMYGAAD0CgAwxwYBANYKACHPBkAA2goAIfcGCAD1CgAh-AYIAPUKACEAAwAAAJoJACADAACbCQAwBAAAlwkAIAMAAACaCQAgAwAAmwkAMAQAAJcJACADAAAAmgkAIAMAAJsJADAEAACXCQAgBMcGAQAAAAHPBkAAAAAB9wYIAAAAAfgGCAAAAAEBCAAAnwkAIATHBgEAAAABzwZAAAAAAfcGCAAAAAH4BggAAAABAQgAAKEJADABCAAAoQkAMATHBgEAxQwAIc8GQADJDAAh9wYIAPAMACH4BggA8AwAIQIAAACXCQAgCAAApAkAIATHBgEAxQwAIc8GQADJDAAh9wYIAPAMACH4BggA8AwAIQIAAACaCQAgCAAApgkAIAIAAACaCQAgCAAApgkAIAMAAACXCQAgDwAAnwkAIBAAAKQJACABAAAAlwkAIAEAAACaCQAgBRUAALgRACAWAAC5EQAgFwAAvBEAIBgAALsRACAZAAC6EQAgB8QGAADxCgAwxQYAAK0JABDGBgAA8QoAMMcGAQDECgAhzwZAAMgKACH3BggA8goAIfgGCADyCgAhAwAAAJoJACADAACsCQAwFAAArQkAIAMAAACaCQAgAwAAmwkAMAQAAJcJACAVIgAA6AoAICYAAOMKACA3AADpCgAgPAAA6goAID0AAOsKACA-AADtCgAgQQAA7AoAIEIAAO8KACBDAADuCgAgRAAA8AoAIMQGAADnCgAwxQYAAC0AEMYGAADnCgAwxwYBAAAAAcgGAQAAAAHOBkAA2goAIc8GQADaCgAh6AYBANcKACHpBgEA1woAIfUGAQDXCgAh9gYBAAAAAQEAAACwCQAgAQAAALAJACANIgAArxEAICYAAKQRACA3AACwEQAgPAAAsREAID0AALIRACA-AAC0EQAgQQAAsxEAIEIAALYRACBDAAC1EQAgRAAAtxEAIOgGAAC_DAAg6QYAAL8MACD1BgAAvwwAIAMAAAAtACADAACzCQAwBAAAsAkAIAMAAAAtACADAACzCQAwBAAAsAkAIAMAAAAtACADAACzCQAwBAAAsAkAIBIiAACuEQAgJgAA3hAAIDcAAN8QACA8AADgEAAgPQAA4RAAID4AAOMQACBBAADiEAAgQgAA5RAAIEMAAOQQACBEAADmEAAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAHpBgEAAAAB9QYBAAAAAfYGAQAAAAEBCAAAtwkAIAjHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAekGAQAAAAH1BgEAAAAB9gYBAAAAAQEIAAC5CQAwAQgAALkJADASIgAArREAICYAAJQOACA3AACVDgAgPAAAlg4AID0AAJcOACA-AACZDgAgQQAAmA4AIEIAAJsOACBDAACaDgAgRAAAnA4AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMYMACHpBgEAxgwAIfUGAQDGDAAh9gYBAMUMACECAAAAsAkAIAgAALwJACAIxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIekGAQDGDAAh9QYBAMYMACH2BgEAxQwAIQIAAAAtACAIAAC-CQAgAgAAAC0AIAgAAL4JACADAAAAsAkAIA8AALcJACAQAAC8CQAgAQAAALAJACABAAAALQAgBhUAAKoRACAYAACsEQAgGQAAqxEAIOgGAAC_DAAg6QYAAL8MACD1BgAAvwwAIAvEBgAA5goAMMUGAADFCQAQxgYAAOYKADDHBgEAxAoAIcgGAQDECgAhzgZAAMgKACHPBkAAyAoAIegGAQDFCgAh6QYBAMUKACH1BgEAxQoAIfYGAQDECgAhAwAAAC0AIAMAAMQJADAUAADFCQAgAwAAAC0AIAMAALMJADAEAACwCQAgFMQGAADlCgAwxQYAAMsJABDGBgAA5QoAMMcGAQAAAAHPBkAA2goAIeYGAQDWCgAh5wYBANcKACHoBgEA1goAIekGAQDXCgAh6gYBANcKACHrBgEA1woAIewGAQDXCgAh7QYBANcKACHuBgEA1woAIe8GAQDXCgAh8AYBANcKACHxBgEA1woAIfIGAQDXCgAh8wYBANYKACH0BgIA2AoAIQEAAADICQAgAQAAAMgJACAUxAYAAOUKADDFBgAAywkAEMYGAADlCgAwxwYBANYKACHPBkAA2goAIeYGAQDWCgAh5wYBANcKACHoBgEA1goAIekGAQDXCgAh6gYBANcKACHrBgEA1woAIewGAQDXCgAh7QYBANcKACHuBgEA1woAIe8GAQDXCgAh8AYBANcKACHxBgEA1woAIfIGAQDXCgAh8wYBANYKACH0BgIA2AoAIQvnBgAAvwwAIOkGAAC_DAAg6gYAAL8MACDrBgAAvwwAIOwGAAC_DAAg7QYAAL8MACDuBgAAvwwAIO8GAAC_DAAg8AYAAL8MACDxBgAAvwwAIPIGAAC_DAAgAwAAAMsJACADAADMCQAwBAAAyAkAIAMAAADLCQAgAwAAzAkAMAQAAMgJACADAAAAywkAIAMAAMwJADAEAADICQAgEccGAQAAAAHPBkAAAAAB5gYBAAAAAecGAQAAAAHoBgEAAAAB6QYBAAAAAeoGAQAAAAHrBgEAAAAB7AYBAAAAAe0GAQAAAAHuBgEAAAAB7wYBAAAAAfAGAQAAAAHxBgEAAAAB8gYBAAAAAfMGAQAAAAH0BgIAAAABAQgAANAJACARxwYBAAAAAc8GQAAAAAHmBgEAAAAB5wYBAAAAAegGAQAAAAHpBgEAAAAB6gYBAAAAAesGAQAAAAHsBgEAAAAB7QYBAAAAAe4GAQAAAAHvBgEAAAAB8AYBAAAAAfEGAQAAAAHyBgEAAAAB8wYBAAAAAfQGAgAAAAEBCAAA0gkAMAEIAADSCQAwEccGAQDFDAAhzwZAAMkMACHmBgEAxQwAIecGAQDGDAAh6AYBAMUMACHpBgEAxgwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIe0GAQDGDAAh7gYBAMYMACHvBgEAxgwAIfAGAQDGDAAh8QYBAMYMACHyBgEAxgwAIfMGAQDFDAAh9AYCAMcMACECAAAAyAkAIAgAANUJACARxwYBAMUMACHPBkAAyQwAIeYGAQDFDAAh5wYBAMYMACHoBgEAxQwAIekGAQDGDAAh6gYBAMYMACHrBgEAxgwAIewGAQDGDAAh7QYBAMYMACHuBgEAxgwAIe8GAQDGDAAh8AYBAMYMACHxBgEAxgwAIfIGAQDGDAAh8wYBAMUMACH0BgIAxwwAIQIAAADLCQAgCAAA1wkAIAIAAADLCQAgCAAA1wkAIAMAAADICQAgDwAA0AkAIBAAANUJACABAAAAyAkAIAEAAADLCQAgEBUAAKURACAWAACmEQAgFwAAqREAIBgAAKgRACAZAACnEQAg5wYAAL8MACDpBgAAvwwAIOoGAAC_DAAg6wYAAL8MACDsBgAAvwwAIO0GAAC_DAAg7gYAAL8MACDvBgAAvwwAIPAGAAC_DAAg8QYAAL8MACDyBgAAvwwAIBTEBgAA5AoAMMUGAADeCQAQxgYAAOQKADDHBgEAxAoAIc8GQADICgAh5gYBAMQKACHnBgEAxQoAIegGAQDECgAh6QYBAMUKACHqBgEAxQoAIesGAQDFCgAh7AYBAMUKACHtBgEAxQoAIe4GAQDFCgAh7wYBAMUKACHwBgEAxQoAIfEGAQDFCgAh8gYBAMUKACHzBgEAxAoAIfQGAgDGCgAhAwAAAMsJACADAADdCQAwFAAA3gkAIAMAAADLCQAgAwAAzAkAMAQAAMgJACAJJgAA4woAIMQGAADiCgAwxQYAAEQAEMYGAADiCgAwxwYBAAAAAcgGAQAAAAHOBkAA2goAIc8GQADaCgAh5QYBANYKACEBAAAA4QkAIAEAAADhCQAgASYAAKQRACADAAAARAAgAwAA5AkAMAQAAOEJACADAAAARAAgAwAA5AkAMAQAAOEJACADAAAARAAgAwAA5AkAMAQAAOEJACAGJgAAoxEAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAABAQgAAOgJACAFxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAeUGAQAAAAEBCAAA6gkAMAEIAADqCQAwBiYAAJcRACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDFDAAhAgAAAOEJACAIAADtCQAgBccGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh5QYBAMUMACECAAAARAAgCAAA7wkAIAIAAABEACAIAADvCQAgAwAAAOEJACAPAADoCQAgEAAA7QkAIAEAAADhCQAgAQAAAEQAIAMVAACUEQAgGAAAlhEAIBkAAJURACAIxAYAAOEKADDFBgAA9gkAEMYGAADhCgAwxwYBAMQKACHIBgEAxAoAIc4GQADICgAhzwZAAMgKACHlBgEAxAoAIQMAAABEACADAAD1CQAwFAAA9gkAIAMAAABEACADAADkCQAwBAAA4QkAIAjEBgAA4AoAMMUGAAD8CQAQxgYAAOAKADDHBgEAAAABzwZAANoKACHiBiAA2QoAIeMGAQDXCgAh5AYBANcKACEBAAAA-QkAIAEAAAD5CQAgCMQGAADgCgAwxQYAAPwJABDGBgAA4AoAMMcGAQDWCgAhzwZAANoKACHiBiAA2QoAIeMGAQDXCgAh5AYBANcKACEC4wYAAL8MACDkBgAAvwwAIAMAAAD8CQAgAwAA_QkAMAQAAPkJACADAAAA_AkAIAMAAP0JADAEAAD5CQAgAwAAAPwJACADAAD9CQAwBAAA-QkAIAXHBgEAAAABzwZAAAAAAeIGIAAAAAHjBgEAAAAB5AYBAAAAAQEIAACBCgAgBccGAQAAAAHPBkAAAAAB4gYgAAAAAeMGAQAAAAHkBgEAAAABAQgAAIMKADABCAAAgwoAMAXHBgEAxQwAIc8GQADJDAAh4gYgAMgMACHjBgEAxgwAIeQGAQDGDAAhAgAAAPkJACAIAACGCgAgBccGAQDFDAAhzwZAAMkMACHiBiAAyAwAIeMGAQDGDAAh5AYBAMYMACECAAAA_AkAIAgAAIgKACACAAAA_AkAIAgAAIgKACADAAAA-QkAIA8AAIEKACAQAACGCgAgAQAAAPkJACABAAAA_AkAIAUVAACREQAgGAAAkxEAIBkAAJIRACDjBgAAvwwAIOQGAAC_DAAgCMQGAADfCgAwxQYAAI8KABDGBgAA3woAMMcGAQDECgAhzwZAAMgKACHiBiAAxwoAIeMGAQDFCgAh5AYBAMUKACEDAAAA_AkAIAMAAI4KADAUAACPCgAgAwAAAPwJACADAAD9CQAwBAAA-QkAIAkcAADeCgAgxAYAAN0KADDFBgAAHAAQxgYAAN0KADDHBgEAAAAByAYBAAAAAc4GQADaCgAhzwZAANoKACHbBgAA3AoAIAEAAACSCgAgAQAAAJIKACABHAAAkBEAIAMAAAAcACADAACVCgAwBAAAkgoAIAMAAAAcACADAACVCgAwBAAAkgoAIAMAAAAcACADAACVCgAwBAAAkgoAIAYcAACPEQAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAdsGAACOEQAgAQgAAJkKACAFxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAdsGAACOEQAgAQgAAJsKADABCAAAmwoAMAYcAADODAAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHbBgAAzQwAIAIAAACSCgAgCAAAngoAIAXHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIdsGAADNDAAgAgAAABwAIAgAAKAKACACAAAAHAAgCAAAoAoAIAMAAACSCgAgDwAAmQoAIBAAAJ4KACABAAAAkgoAIAEAAAAcACADFQAAygwAIBgAAMwMACAZAADLDAAgCMQGAADbCgAwxQYAAKcKABDGBgAA2woAMMcGAQDECgAhyAYBAMQKACHOBkAAyAoAIc8GQADICgAh2wYAANwKACADAAAAHAAgAwAApgoAMBQAAKcKACADAAAAHAAgAwAAlQoAMAQAAJIKACANLQIA2AoAIcQGAADVCgAwxQYAAK0KABDGBgAA1QoAMMcGAQAAAAHIBgEA1goAIckGAQDXCgAhygYBANYKACHLBgEA1woAIcwGAgDYCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAhAQAAAKoKACABAAAAqgoAIA0tAgDYCgAhxAYAANUKADDFBgAArQoAEMYGAADVCgAwxwYBANYKACHIBgEA1goAIckGAQDXCgAhygYBANYKACHLBgEA1woAIcwGAgDYCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAhAskGAAC_DAAgywYAAL8MACADAAAArQoAIAMAAK4KADAEAACqCgAgAwAAAK0KACADAACuCgAwBAAAqgoAIAMAAACtCgAgAwAArgoAMAQAAKoKACAKLQIAAAABxwYBAAAAAcgGAQAAAAHJBgEAAAABygYBAAAAAcsGAQAAAAHMBgIAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAABAQgAALIKACAKLQIAAAABxwYBAAAAAcgGAQAAAAHJBgEAAAABygYBAAAAAcsGAQAAAAHMBgIAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAABAQgAALQKADABCAAAtAoAMAotAgDHDAAhxwYBAMUMACHIBgEAxQwAIckGAQDGDAAhygYBAMUMACHLBgEAxgwAIcwGAgDHDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAhAgAAAKoKACAIAAC3CgAgCi0CAMcMACHHBgEAxQwAIcgGAQDFDAAhyQYBAMYMACHKBgEAxQwAIcsGAQDGDAAhzAYCAMcMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACECAAAArQoAIAgAALkKACACAAAArQoAIAgAALkKACADAAAAqgoAIA8AALIKACAQAAC3CgAgAQAAAKoKACABAAAArQoAIAcVAADADAAgFgAAwQwAIBcAAMQMACAYAADDDAAgGQAAwgwAIMkGAAC_DAAgywYAAL8MACANLQIAxgoAIcQGAADDCgAwxQYAAMAKABDGBgAAwwoAMMcGAQDECgAhyAYBAMQKACHJBgEAxQoAIcoGAQDECgAhywYBAMUKACHMBgIAxgoAIc0GIADHCgAhzgZAAMgKACHPBkAAyAoAIQMAAACtCgAgAwAAvwoAMBQAAMAKACADAAAArQoAIAMAAK4KADAEAACqCgAgDS0CAMYKACHEBgAAwwoAMMUGAADACgAQxgYAAMMKADDHBgEAxAoAIcgGAQDECgAhyQYBAMUKACHKBgEAxAoAIcsGAQDFCgAhzAYCAMYKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACEOFQAAygoAIBgAANQKACAZAADUCgAg0AYBAAAAAdEGAQAAAATSBgEAAAAE0wYBAAAAAdQGAQAAAAHVBgEAAAAB1gYBAAAAAdcGAQDTCgAh2AYBAAAAAdkGAQAAAAHaBgEAAAABDhUAANEKACAYAADSCgAgGQAA0goAINAGAQAAAAHRBgEAAAAF0gYBAAAABdMGAQAAAAHUBgEAAAAB1QYBAAAAAdYGAQAAAAHXBgEA0AoAIdgGAQAAAAHZBgEAAAAB2gYBAAAAAQ0VAADKCgAgFgAAzwoAIBcAAMoKACAYAADKCgAgGQAAygoAINAGAgAAAAHRBgIAAAAE0gYCAAAABNMGAgAAAAHUBgIAAAAB1QYCAAAAAdYGAgAAAAHXBgIAzgoAIQUVAADKCgAgGAAAzQoAIBkAAM0KACDQBiAAAAAB1wYgAMwKACELFQAAygoAIBgAAMsKACAZAADLCgAg0AZAAAAAAdEGQAAAAATSBkAAAAAE0wZAAAAAAdQGQAAAAAHVBkAAAAAB1gZAAAAAAdcGQADJCgAhCxUAAMoKACAYAADLCgAgGQAAywoAINAGQAAAAAHRBkAAAAAE0gZAAAAABNMGQAAAAAHUBkAAAAAB1QZAAAAAAdYGQAAAAAHXBkAAyQoAIQjQBgIAAAAB0QYCAAAABNIGAgAAAATTBgIAAAAB1AYCAAAAAdUGAgAAAAHWBgIAAAAB1wYCAMoKACEI0AZAAAAAAdEGQAAAAATSBkAAAAAE0wZAAAAAAdQGQAAAAAHVBkAAAAAB1gZAAAAAAdcGQADLCgAhBRUAAMoKACAYAADNCgAgGQAAzQoAINAGIAAAAAHXBiAAzAoAIQLQBiAAAAAB1wYgAM0KACENFQAAygoAIBYAAM8KACAXAADKCgAgGAAAygoAIBkAAMoKACDQBgIAAAAB0QYCAAAABNIGAgAAAATTBgIAAAAB1AYCAAAAAdUGAgAAAAHWBgIAAAAB1wYCAM4KACEI0AYIAAAAAdEGCAAAAATSBggAAAAE0wYIAAAAAdQGCAAAAAHVBggAAAAB1gYIAAAAAdcGCADPCgAhDhUAANEKACAYAADSCgAgGQAA0goAINAGAQAAAAHRBgEAAAAF0gYBAAAABdMGAQAAAAHUBgEAAAAB1QYBAAAAAdYGAQAAAAHXBgEA0AoAIdgGAQAAAAHZBgEAAAAB2gYBAAAAAQjQBgIAAAAB0QYCAAAABdIGAgAAAAXTBgIAAAAB1AYCAAAAAdUGAgAAAAHWBgIAAAAB1wYCANEKACEL0AYBAAAAAdEGAQAAAAXSBgEAAAAF0wYBAAAAAdQGAQAAAAHVBgEAAAAB1gYBAAAAAdcGAQDSCgAh2AYBAAAAAdkGAQAAAAHaBgEAAAABDhUAAMoKACAYAADUCgAgGQAA1AoAINAGAQAAAAHRBgEAAAAE0gYBAAAABNMGAQAAAAHUBgEAAAAB1QYBAAAAAdYGAQAAAAHXBgEA0woAIdgGAQAAAAHZBgEAAAAB2gYBAAAAAQvQBgEAAAAB0QYBAAAABNIGAQAAAATTBgEAAAAB1AYBAAAAAdUGAQAAAAHWBgEAAAAB1wYBANQKACHYBgEAAAAB2QYBAAAAAdoGAQAAAAENLQIA2AoAIcQGAADVCgAwxQYAAK0KABDGBgAA1QoAMMcGAQDWCgAhyAYBANYKACHJBgEA1woAIcoGAQDWCgAhywYBANcKACHMBgIA2AoAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIQvQBgEAAAAB0QYBAAAABNIGAQAAAATTBgEAAAAB1AYBAAAAAdUGAQAAAAHWBgEAAAAB1wYBANQKACHYBgEAAAAB2QYBAAAAAdoGAQAAAAEL0AYBAAAAAdEGAQAAAAXSBgEAAAAF0wYBAAAAAdQGAQAAAAHVBgEAAAAB1gYBAAAAAdcGAQDSCgAh2AYBAAAAAdkGAQAAAAHaBgEAAAABCNAGAgAAAAHRBgIAAAAE0gYCAAAABNMGAgAAAAHUBgIAAAAB1QYCAAAAAdYGAgAAAAHXBgIAygoAIQLQBiAAAAAB1wYgAM0KACEI0AZAAAAAAdEGQAAAAATSBkAAAAAE0wZAAAAAAdQGQAAAAAHVBkAAAAAB1gZAAAAAAdcGQADLCgAhCMQGAADbCgAwxQYAAKcKABDGBgAA2woAMMcGAQDECgAhyAYBAMQKACHOBkAAyAoAIc8GQADICgAh2wYAANwKACAE0AYBAAAABdwGAQAAAAHdBgEAAAAE3gYBAAAABAkcAADeCgAgxAYAAN0KADDFBgAAHAAQxgYAAN0KADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIdsGAADcCgAgA98GAAAeACDgBgAAHgAg4QYAAB4AIAjEBgAA3woAMMUGAACPCgAQxgYAAN8KADDHBgEAxAoAIc8GQADICgAh4gYgAMcKACHjBgEAxQoAIeQGAQDFCgAhCMQGAADgCgAwxQYAAPwJABDGBgAA4AoAMMcGAQDWCgAhzwZAANoKACHiBiAA2QoAIeMGAQDXCgAh5AYBANcKACEIxAYAAOEKADDFBgAA9gkAEMYGAADhCgAwxwYBAMQKACHIBgEAxAoAIc4GQADICgAhzwZAAMgKACHlBgEAxAoAIQkmAADjCgAgxAYAAOIKADDFBgAARAAQxgYAAOIKADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIeUGAQDWCgAhA98GAAAvACDgBgAALwAg4QYAAC8AIBTEBgAA5AoAMMUGAADeCQAQxgYAAOQKADDHBgEAxAoAIc8GQADICgAh5gYBAMQKACHnBgEAxQoAIegGAQDECgAh6QYBAMUKACHqBgEAxQoAIesGAQDFCgAh7AYBAMUKACHtBgEAxQoAIe4GAQDFCgAh7wYBAMUKACHwBgEAxQoAIfEGAQDFCgAh8gYBAMUKACHzBgEAxAoAIfQGAgDGCgAhFMQGAADlCgAwxQYAAMsJABDGBgAA5QoAMMcGAQDWCgAhzwZAANoKACHmBgEA1goAIecGAQDXCgAh6AYBANYKACHpBgEA1woAIeoGAQDXCgAh6wYBANcKACHsBgEA1woAIe0GAQDXCgAh7gYBANcKACHvBgEA1woAIfAGAQDXCgAh8QYBANcKACHyBgEA1woAIfMGAQDWCgAh9AYCANgKACELxAYAAOYKADDFBgAAxQkAEMYGAADmCgAwxwYBAMQKACHIBgEAxAoAIc4GQADICgAhzwZAAMgKACHoBgEAxQoAIekGAQDFCgAh9QYBAMUKACH2BgEAxAoAIRUiAADoCgAgJgAA4woAIDcAAOkKACA8AADqCgAgPQAA6woAID4AAO0KACBBAADsCgAgQgAA7woAIEMAAO4KACBEAADwCgAgxAYAAOcKADDFBgAALQAQxgYAAOcKADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIegGAQDXCgAh6QYBANcKACH1BgEA1woAIfYGAQDWCgAhHB0AALEMACAfAACyDAAgIAAAswwAICEAALQMACAjAACLDAAgLgAAjAwAIDUAAOwKACA4AAC1DAAgOwAAqgwAIEUAAPAKACDEBgAArgwAMMUGAAAeABDGBgAArgwAMMcGAQDWCgAhyAYBANYKACHJBgAArwy-CCLOBkAA2goAIc8GQADaCgAh5QYBANcKACHrBgEA1goAIYUHIADZCgAhhgdAAIULACGZBwAAsAy_CCK8CCAA2QoAIb8IIADZCgAhwAgBANcKACHPCAAAHgAg0AgAAB4AIAPfBgAATAAg4AYAAEwAIOEGAABMACAD3wYAAGQAIOAGAABkACDhBgAAZAAgA98GAACHAQAg4AYAAIcBACDhBgAAhwEAIAPfBgAAVwAg4AYAAFcAIOEGAABXACAD3wYAAIsBACDgBgAAiwEAIOEGAACLAQAgA98GAACmAQAg4AYAAKYBACDhBgAApgEAIAPfBgAAqgEAIOAGAACqAQAg4QYAAKoBACAD3wYAAFkAIOAGAABZACDhBgAAWQAgB8QGAADxCgAwxQYAAK0JABDGBgAA8QoAMMcGAQDECgAhzwZAAMgKACH3BggA8goAIfgGCADyCgAhDRUAAMoKACAWAADPCgAgFwAAzwoAIBgAAM8KACAZAADPCgAg0AYIAAAAAdEGCAAAAATSBggAAAAE0wYIAAAAAdQGCAAAAAHVBggAAAAB1gYIAAAAAdcGCADzCgAhDRUAAMoKACAWAADPCgAgFwAAzwoAIBgAAM8KACAZAADPCgAg0AYIAAAAAdEGCAAAAATSBggAAAAE0wYIAAAAAdQGCAAAAAHVBggAAAAB1gYIAAAAAdcGCADzCgAhB8QGAAD0CgAwxQYAAJoJABDGBgAA9AoAMMcGAQDWCgAhzwZAANoKACH3BggA9QoAIfgGCAD1CgAhCNAGCAAAAAHRBggAAAAE0gYIAAAABNMGCAAAAAHUBggAAAAB1QYIAAAAAdYGCAAAAAHXBggAzwoAIQ0tAgDGCgAhxAYAAPYKADDFBgAAlAkAEMYGAAD2CgAwxwYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACHoBgEAxQoAIfkGAQDECgAh-gYBAMQKACH7BgEAxQoAIfwGAgD3CgAhDRUAANEKACAWAAD5CgAgFwAA0QoAIBgAANEKACAZAADRCgAg0AYCAAAAAdEGAgAAAAXSBgIAAAAF0wYCAAAAAdQGAgAAAAHVBgIAAAAB1gYCAAAAAdcGAgD4CgAhDRUAANEKACAWAAD5CgAgFwAA0QoAIBgAANEKACAZAADRCgAg0AYCAAAAAdEGAgAAAAXSBgIAAAAF0wYCAAAAAdQGAgAAAAHVBgIAAAAB1gYCAAAAAdcGAgD4CgAhCNAGCAAAAAHRBggAAAAF0gYIAAAABdMGCAAAAAHUBggAAAAB1QYIAAAAAdYGCAAAAAHXBggA-QoAIQ0tAgDYCgAhxAYAAPoKADDFBgAAgQkAEMYGAAD6CgAwxwYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHoBgEA1woAIfkGAQDWCgAh-gYBANYKACH7BgEA1woAIfwGAgD7CgAhCNAGAgAAAAHRBgIAAAAF0gYCAAAABdMGAgAAAAHUBgIAAAAB1QYCAAAAAdYGAgAAAAHXBgIA0QoAIQrEBgAA_AoAMMUGAAD7CAAQxgYAAPwKADDHBgEAxAoAIcwGAgDGCgAhzgZAAMgKACHPBkAAyAoAIf0GAQDFCgAh_gYBAMQKACH_BgEAxAoAIQ7EBgAA_QoAMMUGAADlCAAQxgYAAP0KADDHBgEAxAoAIcoGAQDECgAhzgZAAMgKACHPBkAAyAoAIYAHAQDECgAhgQcBAMQKACGCBwEAxAoAIYMHAQDFCgAhhAcAAP4KACCFByAAxwoAIYYHQAD_CgAhDxUAANEKACAYAACCCwAgGQAAggsAINAGgAAAAAHTBoAAAAAB1AaAAAAAAdUGgAAAAAHWBoAAAAAB1waAAAAAAYcHAQAAAAGIBwEAAAABiQcBAAAAAYoHgAAAAAGLB4AAAAABjAeAAAAAAQsVAADRCgAgGAAAgQsAIBkAAIELACDQBkAAAAAB0QZAAAAABdIGQAAAAAXTBkAAAAAB1AZAAAAAAdUGQAAAAAHWBkAAAAAB1wZAAIALACELFQAA0QoAIBgAAIELACAZAACBCwAg0AZAAAAAAdEGQAAAAAXSBkAAAAAF0wZAAAAAAdQGQAAAAAHVBkAAAAAB1gZAAAAAAdcGQACACwAhCNAGQAAAAAHRBkAAAAAF0gZAAAAABdMGQAAAAAHUBkAAAAAB1QZAAAAAAdYGQAAAAAHXBkAAgQsAIQzQBoAAAAAB0waAAAAAAdQGgAAAAAHVBoAAAAAB1gaAAAAAAdcGgAAAAAGHBwEAAAABiAcBAAAAAYkHAQAAAAGKB4AAAAABiweAAAAAAYwHgAAAAAEOxAYAAIMLADDFBgAA2AgAEMYGAACDCwAwxwYBANYKACHKBgEA1goAIc4GQADaCgAhzwZAANoKACGABwEA1goAIYEHAQDWCgAhggcBANYKACGDBwEA1woAIYQHAACECwAghQcgANkKACGGB0AAhQsAIQzQBoAAAAAB0waAAAAAAdQGgAAAAAHVBoAAAAAB1gaAAAAAAdcGgAAAAAGHBwEAAAABiAcBAAAAAYkHAQAAAAGKB4AAAAABiweAAAAAAYwHgAAAAAEI0AZAAAAAAdEGQAAAAAXSBkAAAAAF0wZAAAAAAdQGQAAAAAHVBkAAAAAB1gZAAAAAAdcGQACBCwAhDsQGAACGCwAwxQYAANIIABDGBgAAhgsAMMcGAQDECgAhzgZAAMgKACHPBkAAyAoAIeUGAQDFCgAh_wYBAMQKACGNBwEAxAoAIY4HAQDFCgAhjwcCAMYKACGQBwgA8goAIZEHCADyCgAhkgcIAPIKACEdxAYAAIcLADDFBgAAvAgAEMYGAACHCwAwxwYBAMQKACHIBgEAxAoAIc4GQADICgAhzwZAAMgKACHoBgEAxAoAIY4HAQDFCgAhkAcIAPIKACGRBwgA8goAIZIHCADyCgAhkwcBAMQKACGUBwEAxAoAIZUHAADcCgAglgcBAMUKACGXBwIAxgoAIZkHAACIC5kHIpsHAACJC5sHIpwHAAD-CgAgnQcAANwKACCfBwAAigufByKgBwgA8goAIaEHIADHCgAhogcAAIsLACCjBwEAxAoAIaQHAQDECgAhpQcBAMUKACGmBwEAxQoAIQcVAADKCgAgGAAAkQsAIBkAAJELACDQBgAAAJkHAtEGAAAAmQcI0gYAAACZBwjXBgAAkAuZByIHFQAAygoAIBgAAI8LACAZAACPCwAg0AYAAACbBwLRBgAAAJsHCNIGAAAAmwcI1wYAAI4LmwciBxUAAMoKACAYAACNCwAgGQAAjQsAINAGAAAAnwcC0QYAAACfBwjSBgAAAJ8HCNcGAACMC58HIgTQBgAAAKgHCdwGAAAAqAcD3QYAAACoBwjeBgAAAKgHCAcVAADKCgAgGAAAjQsAIBkAAI0LACDQBgAAAJ8HAtEGAAAAnwcI0gYAAACfBwjXBgAAjAufByIE0AYAAACfBwLRBgAAAJ8HCNIGAAAAnwcI1wYAAI0LnwciBxUAAMoKACAYAACPCwAgGQAAjwsAINAGAAAAmwcC0QYAAACbBwjSBgAAAJsHCNcGAACOC5sHIgTQBgAAAJsHAtEGAAAAmwcI0gYAAACbBwjXBgAAjwubByIHFQAAygoAIBgAAJELACAZAACRCwAg0AYAAACZBwLRBgAAAJkHCNIGAAAAmQcI1wYAAJALmQciBNAGAAAAmQcC0QYAAACZBwjSBgAAAJkHCNcGAACRC5kHIg7EBgAAkgsAMMUGAACiCAAQxgYAAJILADDHBgEAxAoAIc4GQADICgAhzwZAAMgKACH_BgEAxAoAIY0HAQDFCgAhjwcCAMYKACGjBwEAxAoAIagHAQDFCgAhqQcBAMQKACGqBwgA8goAIasHAQDFCgAhC8QGAACTCwAwxQYAAIwIABDGBgAAkwsAMMcGAQDECgAhzQYgAMcKACHOBkAAyAoAIc8GQADICgAh5QYBAMQKACH5BgEAxQoAIawHAQDFCgAhrQcCAMYKACELxAYAAJQLADDFBgAA-QcAEMYGAACUCwAwxwYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHlBgEA1goAIfkGAQDXCgAhrAcBANcKACGtBwIA2AoAIRDEBgAAlQsAMMUGAADzBwAQxgYAAJULADDHBgEAxAoAIc8GQADICgAhrgcgAMcKACGvByAAxwoAIbAHAQDECgAhsQcBAMUKACGyBwEAxQoAIbMHIADHCgAhtAcBAMQKACG1BwEAxQoAIbYHAQDFCgAhtwcBAMUKACG4BwEAxQoAIRDEBgAAlgsAMMUGAADgBwAQxgYAAJYLADDHBgEA1goAIc8GQADaCgAhrgcgANkKACGvByAA2QoAIbAHAQDWCgAhsQcBANcKACGyBwEA1woAIbMHIADZCgAhtAcBANYKACG1BwEA1woAIbYHAQDXCgAhtwcBANcKACG4BwEA1woAIQnEBgAAlwsAMMUGAADaBwAQxgYAAJcLADDHBgEAxAoAIcoGAQDECgAhzgZAAMgKACHPBkAAyAoAIfkGAQDECgAhkwcBAMQKACEJxAYAAJgLADDFBgAAxwcAEMYGAACYCwAwxwYBANYKACHKBgEA1goAIc4GQADaCgAhzwZAANoKACH5BgEA1goAIZMHAQDWCgAhC8QGAACZCwAwxQYAAMEHABDGBgAAmQsAMMcGAQDECgAh_wYBAMQKACGPBwIAxgoAIagHAQDFCgAhqgcIAPIKACG5BwEAxAoAIboHAQDECgAhuwcIAPIKACEMxAYAAJoLADDFBgAAqQcAEMYGAACaCwAwxwYBAMQKACHOBkAAyAoAIaMHAQDECgAhvAcBAMQKACG9BwgA8goAIb4HCADyCgAhvwcIAPIKACHABwgA8goAIcEHAQDFCgAhD8QGAACbCwAwxQYAAJEHABDGBgAAmwsAMMcGAQDECgAh_wYBAMQKACGPBwIAxgoAIZkHAACdC8YHIqMHAQDECgAhqAcBAMUKACGqBwgA8goAIbwHAQDECgAhwgcIAJwLACHDBwgA8goAIcQHCADyCgAhxgcCAMYKACENFQAA0QoAIBYAAPkKACAXAAD5CgAgGAAA-QoAIBkAAPkKACDQBggAAAAB0QYIAAAABdIGCAAAAAXTBggAAAAB1AYIAAAAAdUGCAAAAAHWBggAAAAB1wYIAKALACEHFQAAygoAIBgAAJ8LACAZAACfCwAg0AYAAADGBwLRBgAAAMYHCNIGAAAAxgcI1wYAAJ4LxgciBxUAAMoKACAYAACfCwAgGQAAnwsAINAGAAAAxgcC0QYAAADGBwjSBgAAAMYHCNcGAACeC8YHIgTQBgAAAMYHAtEGAAAAxgcI0gYAAADGBwjXBgAAnwvGByINFQAA0QoAIBYAAPkKACAXAAD5CgAgGAAA-QoAIBkAAPkKACDQBggAAAAB0QYIAAAABdIGCAAAAAXTBggAAAAB1AYIAAAAAdUGCAAAAAHWBggAAAAB1wYIAKALACEfxAYAAKELADDFBgAA-QYAEMYGAAChCwAwxwYBAMQKACHOBkAAyAoAIc8GQADICgAh6gYBAMUKACHrBgEAxQoAIewGAQDFCgAh_gYBAMUKACGjBwEAxQoAIb4HCADyCgAhvwcIAPIKACHHBwIAxgoAIcgHAQDFCgAhygcAAKILygciywcIAPIKACHNBwAAowvNByLOBwEAxQoAIc8HAACdC8YHItAHAQDFCgAh0QcBAMUKACHSBwEAxQoAIdMHAQDFCgAh1QcAAKQL1Qcj1gcBAMUKACHXBwEAxQoAIdgHAQDFCgAh2QdAAP8KACHaBwEAxQoAIdsHAQDFCgAhBxUAAMoKACAYAACqCwAgGQAAqgsAINAGAAAAygcC0QYAAADKBwjSBgAAAMoHCNcGAACpC8oHIgcVAADKCgAgGAAAqAsAIBkAAKgLACDQBgAAAM0HAtEGAAAAzQcI0gYAAADNBwjXBgAApwvNByIHFQAA0QoAIBgAAKYLACAZAACmCwAg0AYAAADVBwPRBgAAANUHCdIGAAAA1QcJ1wYAAKUL1QcjBxUAANEKACAYAACmCwAgGQAApgsAINAGAAAA1QcD0QYAAADVBwnSBgAAANUHCdcGAAClC9UHIwTQBgAAANUHA9EGAAAA1QcJ0gYAAADVBwnXBgAApgvVByMHFQAAygoAIBgAAKgLACAZAACoCwAg0AYAAADNBwLRBgAAAM0HCNIGAAAAzQcI1wYAAKcLzQciBNAGAAAAzQcC0QYAAADNBwjSBgAAAM0HCNcGAACoC80HIgcVAADKCgAgGAAAqgsAIBkAAKoLACDQBgAAAMoHAtEGAAAAygcI0gYAAADKBwjXBgAAqQvKByIE0AYAAADKBwLRBgAAAMoHCNIGAAAAygcI1wYAAKoLygciC8QGAACrCwAwxQYAAN0GABDGBgAAqwsAMMcGAQDECgAhzgZAAMgKACH5BgEAxAoAIf4GAQDECgAhmwcAAKwL3QcivAcBAMUKACHdBwEAxAoAId4HIADHCgAhBxUAAMoKACAYAACuCwAgGQAArgsAINAGAAAA3QcC0QYAAADdBwjSBgAAAN0HCNcGAACtC90HIgcVAADKCgAgGAAArgsAIBkAAK4LACDQBgAAAN0HAtEGAAAA3QcI0gYAAADdBwjXBgAArQvdByIE0AYAAADdBwLRBgAAAN0HCNIGAAAA3QcI1wYAAK4L3QciIsQGAACvCwAwxQYAAMUGABDGBgAArwsAMMcGAQDECgAhzQYgAMcKACHOBkAAyAoAIc8GQADICgAh6AYBAMUKACH_BgEAxAoAIZMHAQDECgAhlgcBAMUKACGjBwEAxAoAId8HAQDECgAh4AcgAMcKACHhByAAxwoAIeIHIADHCgAh4wcgAMcKACHkBwAA3AoAIOUHAQDECgAh5gcBAMUKACHnBwEAxQoAIegHAQDFCgAh6QcBAMUKACHqBwEAxQoAIesHAQDFCgAh7AcAANwKACDtBwEAxQoAIe4HAQDFCgAh7wcBAMUKACHwBwEAxQoAIfEHAADcCgAg8gcBAMQKACHzBwEAxAoAIfQHAgDGCgAhDcQGAACwCwAwxQYAAK8GABDGBgAAsAsAMMcGAQDECgAhzwZAAMgKACHnBwEAxQoAIfUHAQDFCgAh9gcgAMcKACH3BwEAxQoAIfgHIADHCgAh-QcBAMUKACH6BwEAxQoAIfsHIADHCgAhDcQGAACxCwAwxQYAAJwGABDGBgAAsQsAMMcGAQDWCgAhzwZAANoKACHnBwEA1woAIfUHAQDXCgAh9gcgANkKACH3BwEA1woAIfgHIADZCgAh-QcBANcKACH6BwEA1woAIfsHIADZCgAhCS0CAMYKACHEBgAAsgsAMMUGAACWBgAQxgYAALILADDHBgEAxAoAIc4GQADICgAhzwZAAMgKACGkBwEAxAoAIf0HAACzC_0HIgcVAADKCgAgGAAAtQsAIBkAALULACDQBgAAAP0HAtEGAAAA_QcI0gYAAAD9BwjXBgAAtAv9ByIHFQAAygoAIBgAALULACAZAAC1CwAg0AYAAAD9BwLRBgAAAP0HCNIGAAAA_QcI1wYAALQL_QciBNAGAAAA_QcC0QYAAAD9BwjSBgAAAP0HCNcGAAC1C_0HIgvEBgAAtgsAMMUGAACABgAQxgYAALYLADDHBgEAxAoAIc0GIADHCgAhzgZAAMgKACHPBkAAyAoAIeUGAQDECgAhmwcAALgLgQgirAcBAMUKACH_BwAAtwv_ByIHFQAAygoAIBgAALwLACAZAAC8CwAg0AYAAAD_BwLRBgAAAP8HCNIGAAAA_wcI1wYAALsL_wciBxUAAMoKACAYAAC6CwAgGQAAugsAINAGAAAAgQgC0QYAAACBCAjSBgAAAIEICNcGAAC5C4EIIgcVAADKCgAgGAAAugsAIBkAALoLACDQBgAAAIEIAtEGAAAAgQgI0gYAAACBCAjXBgAAuQuBCCIE0AYAAACBCALRBgAAAIEICNIGAAAAgQgI1wYAALoLgQgiBxUAAMoKACAYAAC8CwAgGQAAvAsAINAGAAAA_wcC0QYAAAD_BwjSBgAAAP8HCNcGAAC7C_8HIgTQBgAAAP8HAtEGAAAA_wcI0gYAAAD_BwjXBgAAvAv_ByILxAYAAL0LADDFBgAA7QUAEMYGAAC9CwAwxwYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHlBgEA1goAIZsHAAC_C4EIIqwHAQDXCgAh_wcAAL4L_wciBNAGAAAA_wcC0QYAAAD_BwjSBgAAAP8HCNcGAAC8C_8HIgTQBgAAAIEIAtEGAAAAgQgI0gYAAACBCAjXBgAAuguBCCIIxAYAAMALADDFBgAA5wUAEMYGAADACwAwxwYBAMQKACHPBkAAyAoAIYEIIADHCgAhgggBAMUKACGDCAEAxQoAIQjEBgAAwQsAMMUGAADUBQAQxgYAAMELADDHBgEA1goAIc8GQADaCgAhgQggANkKACGCCAEA1woAIYMIAQDXCgAhCC0CAMYKACHEBgAAwgsAMMUGAADOBQAQxgYAAMILADDHBgEAxAoAIc4GQADICgAh_wYBAMQKACGECAEAxAoAIQjEBgAAwwsAMMUGAAC4BQAQxgYAAMMLADDHBgEAxAoAIc0GIADHCgAhzwZAAMgKACGFCEAA_woAIYYIQAD_CgAhCSYAAMULACDEBgAAxAsAMMUGAAClBQAQxgYAAMQLADDHBgEA1goAIc0GIADZCgAhzwZAANoKACGFCEAAhQsAIYYIQACFCwAhA98GAACQAQAg4AYAAJABACDhBgAAkAEAIAotAgDGCgAhxAYAAMYLADDFBgAAnwUAEMYGAADGCwAwxwYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACGHCAEAxAoAIYgIAQDECgAhCi0CANgKACHEBgAAxwsAMMUGAACMBQAQxgYAAMcLADDHBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIYcIAQDWCgAhiAgBANYKACEMxAYAAMgLADDFBgAAhgUAEMYGAADICwAwxwYBAMQKACHIBgEAxAoAIc4GQADICgAhzwZAAMgKACGjBwEAxAoAIaQHAQDECgAhqgcIAPIKACGJCAEAxQoAIYoIQADICgAhCcQGAADJCwAwxQYAAPAEABDGBgAAyQsAMMcGAQDECgAhyAYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACGjBwEAxAoAIRXEBgAAygsAMMUGAADaBAAQxgYAAMoLADDHBgEAxAoAIc8GQADICgAhiwggAMcKACGMCAEAxQoAIY0IAQDFCgAhjggBAMUKACGPCAEAxQoAIZAIAQDFCgAhkQgBAMUKACGSCCAAxwoAIZMIAQDFCgAhlAgBAMUKACGVCAEAxQoAIZYIIADHCgAhlwgBAMQKACGYCAEAxQoAIZkIAQDFCgAhmggBAMUKACEVxAYAAMsLADDFBgAAxwQAEMYGAADLCwAwxwYBANYKACHPBkAA2goAIYsIIADZCgAhjAgBANcKACGNCAEA1woAIY4IAQDXCgAhjwgBANcKACGQCAEA1woAIZEIAQDXCgAhkgggANkKACGTCAEA1woAIZQIAQDXCgAhlQgBANcKACGWCCAA2QoAIZcIAQDWCgAhmAgBANcKACGZCAEA1woAIZoIAQDXCgAhBsQGAADMCwAwxQYAAMEEABDGBgAAzAsAMMcGAQDECgAh_wYBAMQKACHTBwEAxAoAIQ_EBgAAzQsAMMUGAACrBAAQxgYAAM0LADDHBgEAxAoAIc0GIADHCgAhzgZAAMgKACHPBkAAyAoAIaMHAQDECgAhvwcIAPIKACGbCAEAxAoAIZ0IAADOC50IIp4ICACcCwAhnwgIAPIKACGgCEAAyAoAIaEIQADICgAhBxUAAMoKACAYAADQCwAgGQAA0AsAINAGAAAAnQgC0QYAAACdCAjSBgAAAJ0ICNcGAADPC50IIgcVAADKCgAgGAAA0AsAIBkAANALACDQBgAAAJ0IAtEGAAAAnQgI0gYAAACdCAjXBgAAzwudCCIE0AYAAACdCALRBgAAAJ0ICNIGAAAAnQgI1wYAANALnQgiCy0CAMYKACHEBgAA0QsAMMUGAACVBAAQxgYAANELADDHBgEAxAoAIcgGAQDECgAhzQYgAMcKACHOBkAAyAoAIc8GQADICgAh6QYBAMQKACGiCAEAxQoAIQstAgDYCgAhxAYAANILADDFBgAAggQAEMYGAADSCwAwxwYBANYKACHIBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIekGAQDWCgAhoggBANcKACEMxAYAANMLADDFBgAA_AMAEMYGAADTCwAwxwYBAMQKACHIBgEAxAoAIc0GIADHCgAhzgZAAMgKACHPBkAAyAoAIeUGAQDFCgAhkwcBAMQKACGjCAEAxQoAIaQIAQDFCgAhCsQGAADUCwAwxQYAAOQDABDGBgAA1AsAMMcGAQDECgAhzgZAAMgKACHPBkAAyAoAIf8GAQDECgAhjwcCAMYKACGoBwEAxQoAIaUIAQDECgAhB8QGAADVCwAwxQYAAMwDABDGBgAA1QsAMMcGAQDECgAhzgZAAMgKACHPBkAAyAoAIf4GAQDECgAhCR4AAOgKACAsAADXCwAgxAYAANYLADDFBgAAuwEAEMYGAADWCwAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_gYBANYKACED3wYAAHUAIOAGAAB1ACDhBgAAdQAgCcQGAADYCwAwxQYAALQDABDGBgAA2AsAMMcGAQDECgAhyAYBAMQKACHNBiAAxwoAIc4GQADICgAhzwZAAMgKACHpBgEAxAoAIQomAADjCgAgxAYAANkLADDFBgAAQAAQxgYAANkLADDHBgEA1goAIcgGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAh6QYBANYKACENxAYAANoLADDFBgAAnAMAEMYGAADaCwAwxwYBAMQKACHKBgEAxAoAIc4GQADICgAhzwZAAMgKACH5BgEAxAoAIZMHAQDECgAhpggBAMUKACGnCAEAxQoAIagIAQDFCgAhqQggAMcKACENxAYAANsLADDFBgAAiQMAEMYGAADbCwAwxwYBANYKACHKBgEA1goAIc4GQADaCgAhzwZAANoKACH5BgEA1goAIZMHAQDWCgAhpggBANcKACGnCAEA1woAIagIAQDXCgAhqQggANkKACEKxAYAANwLADDFBgAAgwMAEMYGAADcCwAwxwYBAMQKACHOBkAAyAoAIeoGAQDECgAhyAcBAMUKACGqCAEAxQoAIasIAQDFCgAhrAgBAMUKACEKxAYAAN0LADDFBgAA8AIAEMYGAADdCwAwxwYBANYKACHOBkAA2goAIeoGAQDWCgAhyAcBANcKACGqCAEA1woAIasIAQDXCgAhrAgBANcKACEJxAYAAN4LADDFBgAA6gIAEMYGAADeCwAwxwYBAMQKACHOBkAAyAoAIc8GQADICgAhrQgBAMQKACGuCAEAxAoAIa8IQADICgAhCcQGAADfCwAwxQYAANcCABDGBgAA3wsAMMcGAQDWCgAhzgZAANoKACHPBkAA2goAIa0IAQDWCgAhrggBANYKACGvCEAA2goAIRDEBgAA4AsAMMUGAADRAgAQxgYAAOALADDHBgEAxAoAIc4GQADICgAhzwZAAMgKACH-BgEAxAoAIbAIAQDECgAhsQgBAMQKACGyCAEAxQoAIbMIAQDFCgAhtAgBAMUKACG1CEAA_woAIbYIQAD_CgAhtwgBAMUKACG4CAEAxQoAIQvEBgAA4QsAMMUGAAC7AgAQxgYAAOELADDHBgEAxAoAIc4GQADICgAhzwZAAMgKACH-BgEAxAoAIa8IQADICgAhuQgBAMQKACG6CAEAxQoAIbsIAQDFCgAhEMQGAADiCwAwxQYAAKUCABDGBgAA4gsAMMcGAQDECgAhyAYBAMQKACHJBgAA4wu-CCLOBkAAyAoAIc8GQADICgAh5QYBAMUKACHrBgEAxAoAIYUHIADHCgAhhgdAAP8KACGZBwAA5Au_CCK8CCAAxwoAIb8IIADHCgAhwAgBAMUKACEHFQAAygoAIBgAAOgLACAZAADoCwAg0AYAAAC-CALRBgAAAL4ICNIGAAAAvggI1wYAAOcLvggiBxUAAMoKACAYAADmCwAgGQAA5gsAINAGAAAAvwgC0QYAAAC_CAjSBgAAAL8ICNcGAADlC78IIgcVAADKCgAgGAAA5gsAIBkAAOYLACDQBgAAAL8IAtEGAAAAvwgI0gYAAAC_CAjXBgAA5Qu_CCIE0AYAAAC_CALRBgAAAL8ICNIGAAAAvwgI1wYAAOYLvwgiBxUAAMoKACAYAADoCwAgGQAA6AsAINAGAAAAvggC0QYAAAC-CAjSBgAAAL4ICNcGAADnC74IIgTQBgAAAL4IAtEGAAAAvggI0gYAAAC-CAjXBgAA6Au-CCIIxAYAAOkLADDFBgAAjQIAEMYGAADpCwAwxwYBAMQKACHOBkAAyAoAIc8GQADICgAhrggBAMQKACHBCAEAxAoAIQfEBgAA6gsAMMUGAAD3AQAQxgYAAOoLADDHBgEAxAoAIcgGAQDECgAhzgZAAMgKACHPBkAAyAoAIQhXAADsCwAgxAYAAOsLADDFBgAA5AEAEMYGAADrCwAwxwYBANYKACHIBgEA1goAIc4GQADaCgAhzwZAANoKACED3wYAAN4BACDgBgAA3gEAIOEGAADeAQAgAq4IAQAAAAHBCAEAAAABCVYAAO8LACDEBgAA7gsAMMUGAADeAQAQxgYAAO4LADDHBgEA1goAIc4GQADaCgAhzwZAANoKACGuCAEA1goAIcEIAQDWCgAhClcAAOwLACDEBgAA6wsAMMUGAADkAQAQxgYAAOsLADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIc8IAADkAQAg0AgAAOQBACANxAYAAPALADDFBgAA2QEAEMYGAADwCwAwxwYBAMQKACHIBgEAxAoAIc4GQADICgAhzwZAAMgKACHrBgEAxAoAIf4GAQDECgAhhQcgAMcKACGGB0AA_woAIcMIAQDFCgAhxAgBAMUKACEOIwAA8wsAICcAAPILACDEBgAA8QsAMMUGAACqAQAQxgYAAPELADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIaMHAQDWCgAhpAcBANYKACGqBwgA9QoAIYkIAQDXCgAhighAANoKACENIwAA8wsAIEIAAO8KACDEBgAA9AsAMMUGAACmAQAQxgYAAPQLADDHBgEA1goAIcgGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAhowcBANYKACHPCAAApgEAINAIAACmAQAgFyIAAOgKACAmAADjCgAgNwAA6QoAIDwAAOoKACA9AADrCgAgPgAA7QoAIEEAAOwKACBCAADvCgAgQwAA7goAIEQAAPAKACDEBgAA5woAMMUGAAAtABDGBgAA5woAMMcGAQDWCgAhyAYBANYKACHOBkAA2goAIc8GQADaCgAh6AYBANcKACHpBgEA1woAIfUGAQDXCgAh9gYBANYKACHPCAAALQAg0AgAAC0AIAsjAADzCwAgQgAA7woAIMQGAAD0CwAwxQYAAKYBABDGBgAA9AsAMMcGAQDWCgAhyAYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACGjBwEA1goAIRIjAADzCwAgJgAA-AsAIDUAAOwKACDEBgAA9QsAMMUGAABkABDGBgAA9QsAMMcGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAhowcBANYKACG_BwgA9QoAIZsIAQDWCgAhnQgAAPYLnQginggIAPcLACGfCAgA9QoAIaAIQADaCgAhoQhAANoKACEE0AYAAACdCALRBgAAAJ0ICNIGAAAAnQgI1wYAANALnQgiCNAGCAAAAAHRBggAAAAF0gYIAAAABdMGCAAAAAHUBggAAAAB1QYIAAAAAdYGCAAAAAHXBggA-QoAIQPfBgAAZgAg4AYAAGYAIOEGAABmACAC_wYBAAAAAYQIAQAAAAEKKwAA_AsAIC0CANgKACE_AAD7CwAgxAYAAPoLADDFBgAAkAEAEMYGAAD6CwAwxwYBANYKACHOBkAA2goAIf8GAQDWCgAhhAgBANYKACELJgAAxQsAIMQGAADECwAwxQYAAKUFABDGBgAAxAsAMMcGAQDWCgAhzQYgANkKACHPBkAA2goAIYUIQACFCwAhhghAAIULACHPCAAApQUAINAIAAClBQAgLCMAAPMLACAnAACeDAAgKQAApwwAICoAAKgMACA2AACWDAAgNwAA6QoAIDkAANcLACA6AACpDAAgOwAAqgwAIDwAAPgLACA9AADrCgAgPgAA7QoAIEAAAMULACDEBgAAowwAMMUGAAAvABDGBgAAowwAMMcGAQDWCgAhyAYBANYKACHOBkAA2goAIc8GQADaCgAh6AYBANYKACGOBwEA1woAIZAHCAD1CgAhkQcIAPUKACGSBwgA9QoAIZMHAQDWCgAhlAcBANYKACGVBwAA3AoAIJYHAQDXCgAhlwcCANgKACGZBwAApAyZByKbBwAApQybByKcBwAAhAsAIJ0HAADcCgAgnwcAAKYMnwcioAcIAPUKACGhByAA2QoAIaIHAACLCwAgowcBANYKACGkBwEA1goAIaUHAQDXCgAhpgcBANcKACHPCAAALwAg0AgAAC8AICQjAADzCwAgKwAA_AsAIMQGAAD9CwAwxQYAAIsBABDGBgAA_QsAMMcGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAh6AYBANcKACH_BgEA1goAIZMHAQDWCgAhlgcBANcKACGjBwEA1goAId8HAQDWCgAh4AcgANkKACHhByAA2QoAIeIHIADZCgAh4wcgANkKACHkBwAA3AoAIOUHAQDWCgAh5gcBANcKACHnBwEA1woAIegHAQDXCgAh6QcBANcKACHqBwEA1woAIesHAQDXCgAh7AcAANwKACDtBwEA1woAIe4HAQDXCgAh7wcBANcKACHwBwEA1woAIfEHAADcCgAg8gcBANYKACHzBwEA1goAIfQHAgDYCgAhECMAAPMLACArAAD8CwAgxAYAAP4LADDFBgAAhwEAEMYGAAD-CwAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_wYBANYKACGNBwEA1woAIY8HAgDYCgAhowcBANYKACGoBwEA1woAIakHAQDWCgAhqgcIAPUKACGrBwEA1woAIQL-BgEAAAAB_wYBAAAAAQweAADoCgAgKwAA_AsAIMQGAACADAAwxQYAAIABABDGBgAAgAwAMMcGAQDWCgAhzAYCANgKACHOBkAA2goAIc8GQADaCgAh_QYBANcKACH-BgEA1goAIf8GAQDWCgAhA_8GAQAAAAGoBwEAAAABpQgBAAAAAQ0rAAD8CwAgMgAAhAwAIDgAAIMMACDEBgAAggwAMMUGAAB1ABDGBgAAggwAMMcGAQDWCgAhzgZAANoKACHPBkAA2goAIf8GAQDWCgAhjwcCANgKACGoBwEA1woAIaUIAQDWCgAhCx4AAOgKACAsAADXCwAgxAYAANYLADDFBgAAuwEAEMYGAADWCwAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_gYBANYKACHPCAAAuwEAINAIAAC7AQAgFCsAAPwLACA2AACWDAAgNwAA6QoAIDkAANcLACDEBgAAmwwAMMUGAABIABDGBgAAmwwAMMcGAQDWCgAhzgZAANoKACHPBkAA2goAIeUGAQDXCgAh_wYBANYKACGNBwEA1goAIY4HAQDXCgAhjwcCANgKACGQBwgA9QoAIZEHCAD1CgAhkgcIAPUKACHPCAAASAAg0AgAAEgAICUeAACKDAAgIwAAiwwAICwAAOkKACAuAACMDAAgMwAA8AoAIDQAAI0MACDEBgAAhQwAMMUGAABXABDGBgAAhQwAMMcGAQDWCgAhzgZAANoKACHPBkAA2goAIeoGAQDXCgAh6wYBANcKACHsBgEA1woAIf4GAQDXCgAhowcBANcKACG-BwgA9QoAIb8HCAD1CgAhxwcCANgKACHIBwEA1woAIcoHAACGDMoHIssHCAD1CgAhzQcAAIcMzQcizgcBANcKACHPBwAAiAzGByLQBwEA1woAIdEHAQDXCgAh0gcBANcKACHTBwEA1woAIdUHAACJDNUHI9YHAQDXCgAh1wcBANcKACHYBwEA1woAIdkHQACFCwAh2gcBANcKACHbBwEA1woAIQTQBgAAAMoHAtEGAAAAygcI0gYAAADKBwjXBgAAqgvKByIE0AYAAADNBwLRBgAAAM0HCNIGAAAAzQcI1wYAAKgLzQciBNAGAAAAxgcC0QYAAADGBwjSBgAAAMYHCNcGAACfC8YHIgTQBgAAANUHA9EGAAAA1QcJ0gYAAADVBwnXBgAApgvVByMcHQAAsQwAIB8AALIMACAgAACzDAAgIQAAtAwAICMAAIsMACAuAACMDAAgNQAA7AoAIDgAALUMACA7AACqDAAgRQAA8AoAIMQGAACuDAAwxQYAAB4AEMYGAACuDAAwxwYBANYKACHIBgEA1goAIckGAACvDL4IIs4GQADaCgAhzwZAANoKACHlBgEA1woAIesGAQDWCgAhhQcgANkKACGGB0AAhQsAIZkHAACwDL8IIrwIIADZCgAhvwggANkKACHACAEA1woAIc8IAAAeACDQCAAAHgAgFyIAAOgKACAmAADjCgAgNwAA6QoAIDwAAOoKACA9AADrCgAgPgAA7QoAIEEAAOwKACBCAADvCgAgQwAA7goAIEQAAPAKACDEBgAA5woAMMUGAAAtABDGBgAA5woAMMcGAQDWCgAhyAYBANYKACHOBkAA2goAIc8GQADaCgAh6AYBANcKACHpBgEA1woAIfUGAQDXCgAh9gYBANYKACHPCAAALQAg0AgAAC0AIAPfBgAAUwAg4AYAAFMAIOEGAABTACAUIwAA8wsAICYAAPgLACA1AADsCgAgxAYAAPULADDFBgAAZAAQxgYAAPULADDHBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIaMHAQDWCgAhvwcIAPUKACGbCAEA1goAIZ0IAAD2C50IIp4ICAD3CwAhnwgIAPUKACGgCEAA2goAIaEIQADaCgAhzwgAAGQAINAIAABkACAC_wYBAAAAAdMHAQAAAAEIKwAA_AsAIDQAAJAMACDEBgAAjwwAMMUGAABmABDGBgAAjwwAMMcGAQDWCgAh_wYBANYKACHTBwEA1goAIRQjAADzCwAgJgAA-AsAIDUAAOwKACDEBgAA9QsAMMUGAABkABDGBgAA9QsAMMcGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAhowcBANYKACG_BwgA9QoAIZsIAQDWCgAhnQgAAPYLnQginggIAPcLACGfCAgA9QoAIaAIQADaCgAhoQhAANoKACHPCAAAZAAg0AgAAGQAIA8rAAD8CwAgMAAAkgwAIDEAAJMMACAyAACEDAAgxAYAAJEMADDFBgAAXgAQxgYAAJEMADDHBgEA1goAIf8GAQDWCgAhjwcCANgKACGoBwEA1woAIaoHCAD1CgAhuQcBANYKACG6BwEA1goAIbsHCAD1CgAhEiMAAPMLACAsAACWDAAgLQAAlQwAIC8AAIoMACDEBgAAlAwAMMUGAABZABDGBgAAlAwAMMcGAQDWCgAhzgZAANoKACGjBwEA1goAIbwHAQDWCgAhvQcIAPUKACG-BwgA9QoAIb8HCAD1CgAhwAcIAPUKACHBBwEA1woAIc8IAABZACDQCAAAWQAgFiMAAPMLACArAAD8CwAgLQAAlQwAIDIAAIQMACA2AACWDAAgxAYAAJoMADDFBgAATAAQxgYAAJoMADDHBgEA1goAIf8GAQDWCgAhjwcCANgKACGZBwAAiAzGByKjBwEA1goAIagHAQDXCgAhqgcIAPUKACG8BwEA1goAIcIHCAD3CwAhwwcIAPUKACHEBwgA9QoAIcYHAgDYCgAhzwgAAEwAINAIAABMACAQIwAA8wsAICwAAJYMACAtAACVDAAgLwAAigwAIMQGAACUDAAwxQYAAFkAEMYGAACUDAAwxwYBANYKACHOBkAA2goAIaMHAQDWCgAhvAcBANYKACG9BwgA9QoAIb4HCAD1CgAhvwcIAPUKACHABwgA9QoAIcEHAQDXCgAhJx4AAIoMACAjAACLDAAgLAAA6QoAIC4AAIwMACAzAADwCgAgNAAAjQwAIMQGAACFDAAwxQYAAFcAEMYGAACFDAAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh6gYBANcKACHrBgEA1woAIewGAQDXCgAh_gYBANcKACGjBwEA1woAIb4HCAD1CgAhvwcIAPUKACHHBwIA2AoAIcgHAQDXCgAhygcAAIYMygciywcIAPUKACHNBwAAhwzNByLOBwEA1woAIc8HAACIDMYHItAHAQDXCgAh0QcBANcKACHSBwEA1woAIdMHAQDXCgAh1QcAAIkM1Qcj1gcBANcKACHXBwEA1woAIdgHAQDXCgAh2QdAAIULACHaBwEA1woAIdsHAQDXCgAhzwgAAFcAINAIAABXACAD3wYAAF4AIOAGAABeACDhBgAAXgAgDR4AAOgKACAtAACZDAAgxAYAAJcMADDFBgAAUwAQxgYAAJcMADDHBgEA1goAIc4GQADaCgAh-QYBANYKACH-BgEA1goAIZsHAACYDN0HIrwHAQDXCgAh3QcBANYKACHeByAA2QoAIQTQBgAAAN0HAtEGAAAA3QcI0gYAAADdBwjXBgAArgvdByInHgAAigwAICMAAIsMACAsAADpCgAgLgAAjAwAIDMAAPAKACA0AACNDAAgxAYAAIUMADDFBgAAVwAQxgYAAIUMADDHBgEA1goAIc4GQADaCgAhzwZAANoKACHqBgEA1woAIesGAQDXCgAh7AYBANcKACH-BgEA1woAIaMHAQDXCgAhvgcIAPUKACG_BwgA9QoAIccHAgDYCgAhyAcBANcKACHKBwAAhgzKByLLBwgA9QoAIc0HAACHDM0HIs4HAQDXCgAhzwcAAIgMxgci0AcBANcKACHRBwEA1woAIdIHAQDXCgAh0wcBANcKACHVBwAAiQzVByPWBwEA1woAIdcHAQDXCgAh2AcBANcKACHZB0AAhQsAIdoHAQDXCgAh2wcBANcKACHPCAAAVwAg0AgAAFcAIBQjAADzCwAgKwAA_AsAIC0AAJUMACAyAACEDAAgNgAAlgwAIMQGAACaDAAwxQYAAEwAEMYGAACaDAAwxwYBANYKACH_BgEA1goAIY8HAgDYCgAhmQcAAIgMxgciowcBANYKACGoBwEA1woAIaoHCAD1CgAhvAcBANYKACHCBwgA9wsAIcMHCAD1CgAhxAcIAPUKACHGBwIA2AoAIRIrAAD8CwAgNgAAlgwAIDcAAOkKACA5AADXCwAgxAYAAJsMADDFBgAASAAQxgYAAJsMADDHBgEA1goAIc4GQADaCgAhzwZAANoKACHlBgEA1woAIf8GAQDWCgAhjQcBANYKACGOBwEA1woAIY8HAgDYCgAhkAcIAPUKACGRBwgA9QoAIZIHCAD1CgAhCicAAJ4MACAtAgDYCgAhxAYAAJwMADDFBgAAOQAQxgYAAJwMADDHBgEA1goAIc4GQADaCgAhzwZAANoKACGkBwEA1goAIf0HAACdDP0HIgTQBgAAAP0HAtEGAAAA_QcI0gYAAAD9BwjXBgAAtQv9ByISJAAAoAwAICUAAKEMACAmAADjCgAgKAAAogwAIMQGAACfDAAwxQYAADMAEMYGAACfDAAwxwYBANYKACHIBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIeUGAQDXCgAhkwcBANYKACGjCAEA1woAIaQIAQDXCgAhzwgAADMAINAIAAAzACAQJAAAoAwAICUAAKEMACAmAADjCgAgKAAAogwAIMQGAACfDAAwxQYAADMAEMYGAACfDAAwxwYBANYKACHIBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIeUGAQDXCgAhkwcBANYKACGjCAEA1woAIaQIAQDXCgAhEiQAAKAMACAlAAChDAAgJgAA4woAICgAAKIMACDEBgAAnwwAMMUGAAAzABDGBgAAnwwAMMcGAQDWCgAhyAYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHlBgEA1woAIZMHAQDWCgAhowgBANcKACGkCAEA1woAIc8IAAAzACDQCAAAMwAgA98GAAAzACDgBgAAMwAg4QYAADMAIAPfBgAAOQAg4AYAADkAIOEGAAA5ACAqIwAA8wsAICcAAJ4MACApAACnDAAgKgAAqAwAIDYAAJYMACA3AADpCgAgOQAA1wsAIDoAAKkMACA7AACqDAAgPAAA-AsAID0AAOsKACA-AADtCgAgQAAAxQsAIMQGAACjDAAwxQYAAC8AEMYGAACjDAAwxwYBANYKACHIBgEA1goAIc4GQADaCgAhzwZAANoKACHoBgEA1goAIY4HAQDXCgAhkAcIAPUKACGRBwgA9QoAIZIHCAD1CgAhkwcBANYKACGUBwEA1goAIZUHAADcCgAglgcBANcKACGXBwIA2AoAIZkHAACkDJkHIpsHAAClDJsHIpwHAACECwAgnQcAANwKACCfBwAApgyfByKgBwgA9QoAIaEHIADZCgAhogcAAIsLACCjBwEA1goAIaQHAQDWCgAhpQcBANcKACGmBwEA1woAIQTQBgAAAJkHAtEGAAAAmQcI0gYAAACZBwjXBgAAkQuZByIE0AYAAACbBwLRBgAAAJsHCNIGAAAAmwcI1wYAAI8LmwciBNAGAAAAnwcC0QYAAACfBwjSBgAAAJ8HCNcGAACNC58HIgwmAADjCgAgxAYAANkLADDFBgAAQAAQxgYAANkLADDHBgEA1goAIcgGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAh6QYBANYKACHPCAAAQAAg0AgAAEAAIAsmAADjCgAgxAYAAOIKADDFBgAARAAQxgYAAOIKADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIeUGAQDWCgAhzwgAAEQAINAIAABEACAD3wYAAEgAIOAGAABIACDhBgAASAAgA98GAACAAQAg4AYAAIABACDhBgAAgAEAIA4eAADoCgAgxAYAAKsMADDFBgAAKwAQxgYAAKsMADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIesGAQDWCgAh_gYBANYKACGFByAA2QoAIYYHQACFCwAhwwgBANcKACHECAEA1woAIREeAADoCgAgxAYAAKwMADDFBgAAJwAQxgYAAKwMADDHBgEA1goAIc4GQADaCgAhzwZAANoKACH-BgEA1goAIbAIAQDWCgAhsQgBANYKACGyCAEA1woAIbMIAQDXCgAhtAgBANcKACG1CEAAhQsAIbYIQACFCwAhtwgBANcKACG4CAEA1woAIQweAADoCgAgxAYAAK0MADDFBgAAIwAQxgYAAK0MADDHBgEA1goAIc4GQADaCgAhzwZAANoKACH-BgEA1goAIa8IQADaCgAhuQgBANYKACG6CAEA1woAIbsIAQDXCgAhGh0AALEMACAfAACyDAAgIAAAswwAICEAALQMACAjAACLDAAgLgAAjAwAIDUAAOwKACA4AAC1DAAgOwAAqgwAIEUAAPAKACDEBgAArgwAMMUGAAAeABDGBgAArgwAMMcGAQDWCgAhyAYBANYKACHJBgAArwy-CCLOBkAA2goAIc8GQADaCgAh5QYBANcKACHrBgEA1goAIYUHIADZCgAhhgdAAIULACGZBwAAsAy_CCK8CCAA2QoAIb8IIADZCgAhwAgBANcKACEE0AYAAAC-CALRBgAAAL4ICNIGAAAAvggI1wYAAOgLvggiBNAGAAAAvwgC0QYAAAC_CAjSBgAAAL8ICNcGAADmC78IIgscAADeCgAgxAYAAN0KADDFBgAAHAAQxgYAAN0KADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIdsGAADcCgAgzwgAABwAINAIAAAcACAD3wYAACMAIOAGAAAjACDhBgAAIwAgA98GAAAnACDgBgAAJwAg4QYAACcAIBAeAADoCgAgxAYAAKsMADDFBgAAKwAQxgYAAKsMADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIesGAQDWCgAh_gYBANYKACGFByAA2QoAIYYHQACFCwAhwwgBANcKACHECAEA1woAIc8IAAArACDQCAAAKwAgCx4AAOgKACAsAADXCwAgxAYAANYLADDFBgAAuwEAEMYGAADWCwAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_gYBANYKACHPCAAAuwEAINAIAAC7AQAgEywAALgMACDEBgAAtgwAMMUGAAAXABDGBgAAtgwAMMcGAQDECgAhzgZAAMgKACHqBgEAxQoAIewGAQDFCgAhuwcIAJwLACG-BwgAnAsAIb8HCACcCwAh0AcBAMUKACHRBwEAxQoAIdIHAQDFCgAhyQgBAMQKACHLCAAAtwzLCCLMCAEAxQoAIc0ICACcCwAhzghAAMgKACEHFQAAygoAIBgAALsMACAZAAC7DAAg0AYAAADLCALRBgAAAMsICNIGAAAAywgI1wYAALoMywgiDxUAAMoKACAYAAC5DAAgGQAAuQwAINAGgAAAAAHTBoAAAAAB1AaAAAAAAdUGgAAAAAHWBoAAAAAB1waAAAAAAYcHAQAAAAGIBwEAAAABiQcBAAAAAYoHgAAAAAGLB4AAAAABjAeAAAAAAQzQBoAAAAAB0waAAAAAAdQGgAAAAAHVBoAAAAAB1gaAAAAAAdcGgAAAAAGHBwEAAAABiAcBAAAAAYkHAQAAAAGKB4AAAAABiweAAAAAAYwHgAAAAAEHFQAAygoAIBgAALsMACAZAAC7DAAg0AYAAADLCALRBgAAAMsICNIGAAAAywgI1wYAALoMywgiBNAGAAAAywgC0QYAAADLCAjSBgAAAMsICNcGAAC7DMsIIhMsAAC-DAAgxAYAALwMADDFBgAABAAQxgYAALwMADDHBgEA1goAIc4GQADaCgAh6gYBANcKACHsBgEA1woAIbsHCAD3CwAhvgcIAPcLACG_BwgA9wsAIdAHAQDXCgAh0QcBANcKACHSBwEA1woAIckIAQDWCgAhywgAAL0MywgizAgBANcKACHNCAgA9wsAIc4IQADaCgAhBNAGAAAAywgC0QYAAADLCAjSBgAAAMsICNcGAAC7DMsIIgzQBoAAAAAB0waAAAAAAdQGgAAAAAHVBoAAAAAB1gaAAAAAAdcGgAAAAAGHBwEAAAABiAcBAAAAAYkHAQAAAAGKB4AAAAABiweAAAAAAYwHgAAAAAEAAAAAAAAB1AgBAAAAAQHUCAEAAAABBdQIAgAAAAHaCAIAAAAB2wgCAAAAAdwIAgAAAAHdCAIAAAABAdQIIAAAAAEB1AhAAAAAAQAAAALUCAEAAAAE3ggBAAAABQsPAADPDAAwEAAA1AwAMNEIAADQDAAw0ggAANEMADDTCAAA0gwAINQIAADTDAAw1QgAANMMADDWCAAA0wwAMNcIAADTDAAw2AgAANUMADDZCAAA1gwAMBUfAACFEQAgIAAAhhEAICEAAIcRACAjAACIEQAgLgAAjBEAIDUAAIkRACA4AACKEQAgOwAAixEAIEUAAI0RACDHBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAQIAAAAgACAPAACEEQAgAwAAACAAIA8AAIQRACAQAADcDAAgAQgAAPsVADAaHQAAsQwAIB8AALIMACAgAACzDAAgIQAAtAwAICMAAIsMACAuAACMDAAgNQAA7AoAIDgAALUMACA7AACqDAAgRQAA8AoAIMQGAACuDAAwxQYAAB4AEMYGAACuDAAwxwYBAAAAAcgGAQDWCgAhyQYAAK8MvggizgZAANoKACHPBkAA2goAIeUGAQDXCgAh6wYBAAAAAYUHIADZCgAhhgdAAIULACGZBwAAsAy_CCK8CCAA2QoAIb8IIADZCgAhwAgBANcKACECAAAAIAAgCAAA3AwAIAIAAADXDAAgCAAA2AwAIBDEBgAA1gwAMMUGAADXDAAQxgYAANYMADDHBgEA1goAIcgGAQDWCgAhyQYAAK8MvggizgZAANoKACHPBkAA2goAIeUGAQDXCgAh6wYBANYKACGFByAA2QoAIYYHQACFCwAhmQcAALAMvwgivAggANkKACG_CCAA2QoAIcAIAQDXCgAhEMQGAADWDAAwxQYAANcMABDGBgAA1gwAMMcGAQDWCgAhyAYBANYKACHJBgAArwy-CCLOBkAA2goAIc8GQADaCgAh5QYBANcKACHrBgEA1goAIYUHIADZCgAhhgdAAIULACGZBwAAsAy_CCK8CCAA2QoAIb8IIADZCgAhwAgBANcKACEMxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACEB1AgAAAC-CAIB1AgAAAC_CAIB1AhAAAAAARUfAADdDAAgIAAA3gwAICEAAN8MACAjAADgDAAgLgAA5AwAIDUAAOEMACA4AADiDAAgOwAA4wwAIEUAAOUMACDHBgEAxQwAIcgGAQDFDAAhyQYAANkMvggizgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh6wYBAMUMACGFByAAyAwAIYYHQADbDAAhmQcAANoMvwgivAggAMgMACG_CCAAyAwAIQsPAAD4EAAwEAAA_RAAMNEIAAD5EAAw0ggAAPoQADDTCAAA-xAAINQIAAD8EAAw1QgAAPwQADDWCAAA_BAAMNcIAAD8EAAw2AgAAP4QADDZCAAA_xAAMAsPAADsEAAwEAAA8RAAMNEIAADtEAAw0ggAAO4QADDTCAAA7xAAINQIAADwEAAw1QgAAPAQADDWCAAA8BAAMNcIAADwEAAw2AgAAPIQADDZCAAA8xAAMAcPAADnEAAgEAAA6hAAINEIAADoEAAg0ggAAOkQACDVCAAAKwAg1ggAACsAINcIAAAaACAHDwAAjw4AIBAAAJIOACDRCAAAkA4AINIIAACRDgAg1QgAAC0AINYIAAAtACDXCAAAsAkAIAsPAAC_DQAwEAAAxA0AMNEIAADADQAw0ggAAMENADDTCAAAwg0AINQIAADDDQAw1QgAAMMNADDWCAAAww0AMNcIAADDDQAw2AgAAMUNADDZCAAAxg0AMAcPAACoDQAgEAAAqw0AINEIAACpDQAg0ggAAKoNACDVCAAAuwEAINYIAAC7AQAg1wgAALcDACALDwAAmg0AMBAAAJ8NADDRCAAAmw0AMNIIAACcDQAw0wgAAJ0NACDUCAAAng0AMNUIAACeDQAw1ggAAJ4NADDXCAAAng0AMNgIAACgDQAw2QgAAKENADALDwAAiw0AMBAAAJANADDRCAAAjA0AMNIIAACNDQAw0wgAAI4NACDUCAAAjw0AMNUIAACPDQAw1ggAAI8NADDXCAAAjw0AMNgIAACRDQAw2QgAAJINADALDwAA5gwAMBAAAOsMADDRCAAA5wwAMNIIAADoDAAw0wgAAOkMACDUCAAA6gwAMNUIAADqDAAw1ggAAOoMADDXCAAA6gwAMNgIAADsDAAw2QgAAO0MADALIwAAiQ0AICwAAIoNACAtAACIDQAgxwYBAAAAAc4GQAAAAAGjBwEAAAABvAcBAAAAAb0HCAAAAAG-BwgAAAABvwcIAAAAAcAHCAAAAAECAAAAWwAgDwAAhw0AIAMAAABbACAPAACHDQAgEAAA8QwAIAEIAAD6FQAwECMAAPMLACAsAACWDAAgLQAAlQwAIC8AAIoMACDEBgAAlAwAMMUGAABZABDGBgAAlAwAMMcGAQAAAAHOBkAA2goAIaMHAQDWCgAhvAcBANYKACG9BwgA9QoAIb4HCAD1CgAhvwcIAPUKACHABwgA9QoAIcEHAQDXCgAhAgAAAFsAIAgAAPEMACACAAAA7gwAIAgAAO8MACAMxAYAAO0MADDFBgAA7gwAEMYGAADtDAAwxwYBANYKACHOBkAA2goAIaMHAQDWCgAhvAcBANYKACG9BwgA9QoAIb4HCAD1CgAhvwcIAPUKACHABwgA9QoAIcEHAQDXCgAhDMQGAADtDAAwxQYAAO4MABDGBgAA7QwAMMcGAQDWCgAhzgZAANoKACGjBwEA1goAIbwHAQDWCgAhvQcIAPUKACG-BwgA9QoAIb8HCAD1CgAhwAcIAPUKACHBBwEA1woAIQjHBgEAxQwAIc4GQADJDAAhowcBAMUMACG8BwEAxQwAIb0HCADwDAAhvgcIAPAMACG_BwgA8AwAIcAHCADwDAAhBdQICAAAAAHaCAgAAAAB2wgIAAAAAdwICAAAAAHdCAgAAAABCyMAAPMMACAsAAD0DAAgLQAA8gwAIMcGAQDFDAAhzgZAAMkMACGjBwEAxQwAIbwHAQDFDAAhvQcIAPAMACG-BwgA8AwAIb8HCADwDAAhwAcIAPAMACEFDwAA4hUAIBAAAPgVACDRCAAA4xUAINIIAAD3FQAg1wgAAGsAIAUPAADgFQAgEAAA9RUAINEIAADhFQAg0ggAAPQVACDXCAAAsAkAIAsPAAD1DAAwEAAA-gwAMNEIAAD2DAAw0ggAAPcMADDTCAAA-AwAINQIAAD5DAAw1QgAAPkMADDWCAAA-QwAMNcIAAD5DAAw2AgAAPsMADDZCAAA_AwAMAorAACFDQAgMQAAhA0AIDIAAIYNACDHBgEAAAAB_wYBAAAAAY8HAgAAAAGoBwEAAAABqgcIAAAAAboHAQAAAAG7BwgAAAABAgAAAGAAIA8AAIMNACADAAAAYAAgDwAAgw0AIBAAAP8MACABCAAA8xUAMA8rAAD8CwAgMAAAkgwAIDEAAJMMACAyAACEDAAgxAYAAJEMADDFBgAAXgAQxgYAAJEMADDHBgEAAAAB_wYBANYKACGPBwIA2AoAIagHAQDXCgAhqgcIAPUKACG5BwEA1goAIboHAQDWCgAhuwcIAPUKACECAAAAYAAgCAAA_wwAIAIAAAD9DAAgCAAA_gwAIAvEBgAA_AwAMMUGAAD9DAAQxgYAAPwMADDHBgEA1goAIf8GAQDWCgAhjwcCANgKACGoBwEA1woAIaoHCAD1CgAhuQcBANYKACG6BwEA1goAIbsHCAD1CgAhC8QGAAD8DAAwxQYAAP0MABDGBgAA_AwAMMcGAQDWCgAh_wYBANYKACGPBwIA2AoAIagHAQDXCgAhqgcIAPUKACG5BwEA1goAIboHAQDWCgAhuwcIAPUKACEHxwYBAMUMACH_BgEAxQwAIY8HAgDHDAAhqAcBAMYMACGqBwgA8AwAIboHAQDFDAAhuwcIAPAMACEKKwAAgQ0AIDEAAIANACAyAACCDQAgxwYBAMUMACH_BgEAxQwAIY8HAgDHDAAhqAcBAMYMACGqBwgA8AwAIboHAQDFDAAhuwcIAPAMACEFDwAA6BUAIBAAAPEVACDRCAAA6RUAINIIAADwFQAg1wgAAE4AIAUPAADmFQAgEAAA7hUAINEIAADnFQAg0ggAAO0VACDXCAAAMQAgBw8AAOQVACAQAADrFQAg0QgAAOUVACDSCAAA6hUAINUIAABIACDWCAAASAAg1wgAAEoAIAorAACFDQAgMQAAhA0AIDIAAIYNACDHBgEAAAAB_wYBAAAAAY8HAgAAAAGoBwEAAAABqgcIAAAAAboHAQAAAAG7BwgAAAABAw8AAOgVACDRCAAA6RUAINcIAABOACADDwAA5hUAINEIAADnFQAg1wgAADEAIAMPAADkFQAg0QgAAOUVACDXCAAASgAgCyMAAIkNACAsAACKDQAgLQAAiA0AIMcGAQAAAAHOBkAAAAABowcBAAAAAbwHAQAAAAG9BwgAAAABvgcIAAAAAb8HCAAAAAHABwgAAAABAw8AAOIVACDRCAAA4xUAINcIAABrACADDwAA4BUAINEIAADhFQAg1wgAALAJACAEDwAA9QwAMNEIAAD2DAAw0wgAAPgMACDXCAAA-QwAMAgtAACZDQAgxwYBAAAAAc4GQAAAAAH5BgEAAAABmwcAAADdBwK8BwEAAAAB3QcBAAAAAd4HIAAAAAECAAAAVQAgDwAAmA0AIAMAAABVACAPAACYDQAgEAAAlg0AIAEIAADfFQAwDR4AAOgKACAtAACZDAAgxAYAAJcMADDFBgAAUwAQxgYAAJcMADDHBgEAAAABzgZAANoKACH5BgEA1goAIf4GAQDWCgAhmwcAAJgM3QcivAcBANcKACHdBwEA1goAId4HIADZCgAhAgAAAFUAIAgAAJYNACACAAAAkw0AIAgAAJQNACALxAYAAJINADDFBgAAkw0AEMYGAACSDQAwxwYBANYKACHOBkAA2goAIfkGAQDWCgAh_gYBANYKACGbBwAAmAzdByK8BwEA1woAId0HAQDWCgAh3gcgANkKACELxAYAAJINADDFBgAAkw0AEMYGAACSDQAwxwYBANYKACHOBkAA2goAIfkGAQDWCgAh_gYBANYKACGbBwAAmAzdByK8BwEA1woAId0HAQDWCgAh3gcgANkKACEHxwYBAMUMACHOBkAAyQwAIfkGAQDFDAAhmwcAAJUN3QcivAcBAMYMACHdBwEAxQwAId4HIADIDAAhAdQIAAAA3QcCCC0AAJcNACDHBgEAxQwAIc4GQADJDAAh-QYBAMUMACGbBwAAlQ3dByK8BwEAxgwAId0HAQDFDAAh3gcgAMgMACEHDwAA2hUAIBAAAN0VACDRCAAA2xUAINIIAADcFQAg1QgAAFcAINYIAABXACDXCAAAawAgCC0AAJkNACDHBgEAAAABzgZAAAAAAfkGAQAAAAGbBwAAAN0HArwHAQAAAAHdBwEAAAAB3gcgAAAAAQMPAADaFQAg0QgAANsVACDXCAAAawAgBysAAKcNACDHBgEAAAABzAYCAAAAAc4GQAAAAAHPBkAAAAAB_QYBAAAAAf8GAQAAAAECAAAAggEAIA8AAKYNACADAAAAggEAIA8AAKYNACAQAACkDQAgAQgAANkVADANHgAA6AoAICsAAPwLACDEBgAAgAwAMMUGAACAAQAQxgYAAIAMADDHBgEAAAABzAYCANgKACHOBkAA2goAIc8GQADaCgAh_QYBANcKACH-BgEA1goAIf8GAQDWCgAhxggAAP8LACACAAAAggEAIAgAAKQNACACAAAAog0AIAgAAKMNACAKxAYAAKENADDFBgAAog0AEMYGAAChDQAwxwYBANYKACHMBgIA2AoAIc4GQADaCgAhzwZAANoKACH9BgEA1woAIf4GAQDWCgAh_wYBANYKACEKxAYAAKENADDFBgAAog0AEMYGAAChDQAwxwYBANYKACHMBgIA2AoAIc4GQADaCgAhzwZAANoKACH9BgEA1woAIf4GAQDWCgAh_wYBANYKACEGxwYBAMUMACHMBgIAxwwAIc4GQADJDAAhzwZAAMkMACH9BgEAxgwAIf8GAQDFDAAhBysAAKUNACDHBgEAxQwAIcwGAgDHDAAhzgZAAMkMACHPBkAAyQwAIf0GAQDGDAAh_wYBAMUMACEFDwAA1BUAIBAAANcVACDRCAAA1RUAINIIAADWFQAg1wgAADEAIAcrAACnDQAgxwYBAAAAAcwGAgAAAAHOBkAAAAABzwZAAAAAAf0GAQAAAAH_BgEAAAABAw8AANQVACDRCAAA1RUAINcIAAAxACAELAAAvg0AIMcGAQAAAAHOBkAAAAABzwZAAAAAAQIAAAC3AwAgDwAAqA0AIAMAAAC7AQAgDwAAqA0AIBAAAKwNACAGAAAAuwEAIAgAAKwNACAsAACtDQAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhBCwAAK0NACDHBgEAxQwAIc4GQADJDAAhzwZAAMkMACELDwAArg0AMBAAALMNADDRCAAArw0AMNIIAACwDQAw0wgAALENACDUCAAAsg0AMNUIAACyDQAw1ggAALINADDXCAAAsg0AMNgIAAC0DQAw2QgAALUNADAIKwAAvA0AIDIAAL0NACDHBgEAAAABzgZAAAAAAc8GQAAAAAH_BgEAAAABjwcCAAAAAagHAQAAAAECAAAAdwAgDwAAuw0AIAMAAAB3ACAPAAC7DQAgEAAAuA0AIAEIAADTFQAwDisAAPwLACAyAACEDAAgOAAAgwwAIMQGAACCDAAwxQYAAHUAEMYGAACCDAAwxwYBAAAAAc4GQADaCgAhzwZAANoKACH_BgEA1goAIY8HAgDYCgAhqAcBANcKACGlCAEA1goAIccIAACBDAAgAgAAAHcAIAgAALgNACACAAAAtg0AIAgAALcNACAKxAYAALUNADDFBgAAtg0AEMYGAAC1DQAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_wYBANYKACGPBwIA2AoAIagHAQDXCgAhpQgBANYKACEKxAYAALUNADDFBgAAtg0AEMYGAAC1DQAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_wYBANYKACGPBwIA2AoAIagHAQDXCgAhpQgBANYKACEGxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_wYBAMUMACGPBwIAxwwAIagHAQDGDAAhCCsAALkNACAyAAC6DQAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_wYBAMUMACGPBwIAxwwAIagHAQDGDAAhBQ8AAMsVACAQAADRFQAg0QgAAMwVACDSCAAA0BUAINcIAAAxACAHDwAAyRUAIBAAAM4VACDRCAAAyhUAINIIAADNFQAg1QgAAEgAINYIAABIACDXCAAASgAgCCsAALwNACAyAAC9DQAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB_wYBAAAAAY8HAgAAAAGoBwEAAAABAw8AAMsVACDRCAAAzBUAINcIAAAxACADDwAAyRUAINEIAADKFQAg1wgAAEoAIAQPAACuDQAw0QgAAK8NADDTCAAAsQ0AINcIAACyDQAwICMAAIoOACAsAACLDgAgLgAAjA4AIDMAAI0OACA0AACODgAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB6gYBAAAAAesGAQAAAAHsBgEAAAABowcBAAAAAb4HCAAAAAG_BwgAAAABxwcCAAAAAcgHAQAAAAHKBwAAAMoHAssHCAAAAAHNBwAAAM0HAs4HAQAAAAHPBwAAAMYHAtAHAQAAAAHRBwEAAAAB0gcBAAAAAdMHAQAAAAHVBwAAANUHA9YHAQAAAAHXBwEAAAAB2AcBAAAAAdkHQAAAAAHaBwEAAAAB2wcBAAAAAQIAAABrACAPAACJDgAgAwAAAGsAIA8AAIkOACAQAADNDQAgAQgAAMgVADAlHgAAigwAICMAAIsMACAsAADpCgAgLgAAjAwAIDMAAPAKACA0AACNDAAgxAYAAIUMADDFBgAAVwAQxgYAAIUMADDHBgEAAAABzgZAANoKACHPBkAA2goAIeoGAQDXCgAh6wYBANcKACHsBgEA1woAIf4GAQDXCgAhowcBANcKACG-BwgA9QoAIb8HCAD1CgAhxwcCANgKACHIBwEAAAABygcAAIYMygciywcIAPUKACHNBwAAhwzNByLOBwEA1woAIc8HAACIDMYHItAHAQDXCgAh0QcBANcKACHSBwEA1woAIdMHAQDXCgAh1QcAAIkM1Qcj1gcBANcKACHXBwEA1woAIdgHAQDXCgAh2QdAAIULACHaBwEA1woAIdsHAQAAAAECAAAAawAgCAAAzQ0AIAIAAADHDQAgCAAAyA0AIB_EBgAAxg0AMMUGAADHDQAQxgYAAMYNADDHBgEA1goAIc4GQADaCgAhzwZAANoKACHqBgEA1woAIesGAQDXCgAh7AYBANcKACH-BgEA1woAIaMHAQDXCgAhvgcIAPUKACG_BwgA9QoAIccHAgDYCgAhyAcBANcKACHKBwAAhgzKByLLBwgA9QoAIc0HAACHDM0HIs4HAQDXCgAhzwcAAIgMxgci0AcBANcKACHRBwEA1woAIdIHAQDXCgAh0wcBANcKACHVBwAAiQzVByPWBwEA1woAIdcHAQDXCgAh2AcBANcKACHZB0AAhQsAIdoHAQDXCgAh2wcBANcKACEfxAYAAMYNADDFBgAAxw0AEMYGAADGDQAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh6gYBANcKACHrBgEA1woAIewGAQDXCgAh_gYBANcKACGjBwEA1woAIb4HCAD1CgAhvwcIAPUKACHHBwIA2AoAIcgHAQDXCgAhygcAAIYMygciywcIAPUKACHNBwAAhwzNByLOBwEA1woAIc8HAACIDMYHItAHAQDXCgAh0QcBANcKACHSBwEA1woAIdMHAQDXCgAh1QcAAIkM1Qcj1gcBANcKACHXBwEA1woAIdgHAQDXCgAh2QdAAIULACHaBwEA1woAIdsHAQDXCgAhG8cGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIaMHAQDGDAAhvgcIAPAMACG_BwgA8AwAIccHAgDHDAAhyAcBAMYMACHKBwAAyQ3KByLLBwgA8AwAIc0HAADKDc0HIs4HAQDGDAAhzwcAAMsNxgci0AcBAMYMACHRBwEAxgwAIdIHAQDGDAAh0wcBAMYMACHVBwAAzA3VByPWBwEAxgwAIdcHAQDGDAAh2AcBAMYMACHZB0AA2wwAIdoHAQDGDAAh2wcBAMYMACEB1AgAAADKBwIB1AgAAADNBwIB1AgAAADGBwIB1AgAAADVBwMgIwAAzg0AICwAAM8NACAuAADQDQAgMwAA0Q0AIDQAANINACDHBgEAxQwAIc4GQADJDAAhzwZAAMkMACHqBgEAxgwAIesGAQDGDAAh7AYBAMYMACGjBwEAxgwAIb4HCADwDAAhvwcIAPAMACHHBwIAxwwAIcgHAQDGDAAhygcAAMkNygciywcIAPAMACHNBwAAyg3NByLOBwEAxgwAIc8HAADLDcYHItAHAQDGDAAh0QcBAMYMACHSBwEAxgwAIdMHAQDGDAAh1QcAAMwN1Qcj1gcBAMYMACHXBwEAxgwAIdgHAQDGDAAh2QdAANsMACHaBwEAxgwAIdsHAQDGDAAhBw8AAJ4VACAQAADGFQAg0QgAAJ8VACDSCAAAxRUAINUIAAAtACDWCAAALQAg1wgAALAJACALDwAA6Q0AMBAAAO4NADDRCAAA6g0AMNIIAADrDQAw0wgAAOwNACDUCAAA7Q0AMNUIAADtDQAw1ggAAO0NADDXCAAA7Q0AMNgIAADvDQAw2QgAAPANADALDwAA3g0AMBAAAOINADDRCAAA3w0AMNIIAADgDQAw0wgAAOENACDUCAAAjw0AMNUIAACPDQAw1ggAAI8NADDXCAAAjw0AMNgIAADjDQAw2QgAAJINADALDwAA0w0AMBAAANcNADDRCAAA1A0AMNIIAADVDQAw0wgAANYNACDUCAAA6gwAMNUIAADqDAAw1ggAAOoMADDXCAAA6gwAMNgIAADYDQAw2QgAAO0MADAHDwAAnBUAIBAAAMMVACDRCAAAnRUAINIIAADCFQAg1QgAAGQAINYIAABkACDXCAAAoQEAIAsjAACJDQAgLAAAig0AIC8AAN0NACDHBgEAAAABzgZAAAAAAaMHAQAAAAG9BwgAAAABvgcIAAAAAb8HCAAAAAHABwgAAAABwQcBAAAAAQIAAABbACAPAADcDQAgAwAAAFsAIA8AANwNACAQAADaDQAgAQgAAMEVADACAAAAWwAgCAAA2g0AIAIAAADuDAAgCAAA2Q0AIAjHBgEAxQwAIc4GQADJDAAhowcBAMUMACG9BwgA8AwAIb4HCADwDAAhvwcIAPAMACHABwgA8AwAIcEHAQDGDAAhCyMAAPMMACAsAAD0DAAgLwAA2w0AIMcGAQDFDAAhzgZAAMkMACGjBwEAxQwAIb0HCADwDAAhvgcIAPAMACG_BwgA8AwAIcAHCADwDAAhwQcBAMYMACEHDwAAvBUAIBAAAL8VACDRCAAAvRUAINIIAAC-FQAg1QgAAB4AINYIAAAeACDXCAAAIAAgCyMAAIkNACAsAACKDQAgLwAA3Q0AIMcGAQAAAAHOBkAAAAABowcBAAAAAb0HCAAAAAG-BwgAAAABvwcIAAAAAcAHCAAAAAHBBwEAAAABAw8AALwVACDRCAAAvRUAINcIAAAgACAIHgAA6A0AIMcGAQAAAAHOBkAAAAAB-QYBAAAAAf4GAQAAAAGbBwAAAN0HAt0HAQAAAAHeByAAAAABAgAAAFUAIA8AAOcNACADAAAAVQAgDwAA5w0AIBAAAOUNACABCAAAuxUAMAIAAABVACAIAADlDQAgAgAAAJMNACAIAADkDQAgB8cGAQDFDAAhzgZAAMkMACH5BgEAxQwAIf4GAQDFDAAhmwcAAJUN3Qci3QcBAMUMACHeByAAyAwAIQgeAADmDQAgxwYBAMUMACHOBkAAyQwAIfkGAQDFDAAh_gYBAMUMACGbBwAAlQ3dByLdBwEAxQwAId4HIADIDAAhBQ8AALYVACAQAAC5FQAg0QgAALcVACDSCAAAuBUAINcIAAAgACAIHgAA6A0AIMcGAQAAAAHOBkAAAAAB-QYBAAAAAf4GAQAAAAGbBwAAAN0HAt0HAQAAAAHeByAAAAABAw8AALYVACDRCAAAtxUAINcIAAAgACAPIwAAhw4AICsAAIUOACAyAACGDgAgNgAAiA4AIMcGAQAAAAH_BgEAAAABjwcCAAAAAZkHAAAAxgcCowcBAAAAAagHAQAAAAGqBwgAAAABwgcIAAAAAcMHCAAAAAHEBwgAAAABxgcCAAAAAQIAAABOACAPAACEDgAgAwAAAE4AIA8AAIQOACAQAAD0DQAgAQgAALUVADAUIwAA8wsAICsAAPwLACAtAACVDAAgMgAAhAwAIDYAAJYMACDEBgAAmgwAMMUGAABMABDGBgAAmgwAMMcGAQAAAAH_BgEA1goAIY8HAgDYCgAhmQcAAIgMxgciowcBANYKACGoBwEA1woAIaoHCAD1CgAhvAcBANYKACHCBwgA9wsAIcMHCAD1CgAhxAcIAPUKACHGBwIA2AoAIQIAAABOACAIAAD0DQAgAgAAAPENACAIAADyDQAgD8QGAADwDQAwxQYAAPENABDGBgAA8A0AMMcGAQDWCgAh_wYBANYKACGPBwIA2AoAIZkHAACIDMYHIqMHAQDWCgAhqAcBANcKACGqBwgA9QoAIbwHAQDWCgAhwgcIAPcLACHDBwgA9QoAIcQHCAD1CgAhxgcCANgKACEPxAYAAPANADDFBgAA8Q0AEMYGAADwDQAwxwYBANYKACH_BgEA1goAIY8HAgDYCgAhmQcAAIgMxgciowcBANYKACGoBwEA1woAIaoHCAD1CgAhvAcBANYKACHCBwgA9wsAIcMHCAD1CgAhxAcIAPUKACHGBwIA2AoAIQvHBgEAxQwAIf8GAQDFDAAhjwcCAMcMACGZBwAAyw3GByKjBwEAxQwAIagHAQDGDAAhqgcIAPAMACHCBwgA8w0AIcMHCADwDAAhxAcIAPAMACHGBwIAxwwAIQXUCAgAAAAB2ggIAAAAAdsICAAAAAHcCAgAAAAB3QgIAAAAAQ8jAAD3DQAgKwAA9Q0AIDIAAPYNACA2AAD4DQAgxwYBAMUMACH_BgEAxQwAIY8HAgDHDAAhmQcAAMsNxgciowcBAMUMACGoBwEAxgwAIaoHCADwDAAhwgcIAPMNACHDBwgA8AwAIcQHCADwDAAhxgcCAMcMACEFDwAApBUAIBAAALMVACDRCAAApRUAINIIAACyFQAg1wgAADEAIAcPAACiFQAgEAAAsBUAINEIAACjFQAg0ggAAK8VACDVCAAASAAg1ggAAEgAINcIAABKACAFDwAAoBUAIBAAAK0VACDRCAAAoRUAINIIAACsFQAg1wgAALAJACALDwAA-Q0AMBAAAP0NADDRCAAA-g0AMNIIAAD7DQAw0wgAAPwNACDUCAAA-QwAMNUIAAD5DAAw1ggAAPkMADDXCAAA-QwAMNgIAAD-DQAw2QgAAPwMADAKKwAAhQ0AIDAAAIMOACAyAACGDQAgxwYBAAAAAf8GAQAAAAGPBwIAAAABqAcBAAAAAaoHCAAAAAG5BwEAAAABuwcIAAAAAQIAAABgACAPAACCDgAgAwAAAGAAIA8AAIIOACAQAACADgAgAQgAAKsVADACAAAAYAAgCAAAgA4AIAIAAAD9DAAgCAAA_w0AIAfHBgEAxQwAIf8GAQDFDAAhjwcCAMcMACGoBwEAxgwAIaoHCADwDAAhuQcBAMUMACG7BwgA8AwAIQorAACBDQAgMAAAgQ4AIDIAAIINACDHBgEAxQwAIf8GAQDFDAAhjwcCAMcMACGoBwEAxgwAIaoHCADwDAAhuQcBAMUMACG7BwgA8AwAIQUPAACmFQAgEAAAqRUAINEIAACnFQAg0ggAAKgVACDXCAAAWwAgCisAAIUNACAwAACDDgAgMgAAhg0AIMcGAQAAAAH_BgEAAAABjwcCAAAAAagHAQAAAAGqBwgAAAABuQcBAAAAAbsHCAAAAAEDDwAAphUAINEIAACnFQAg1wgAAFsAIA8jAACHDgAgKwAAhQ4AIDIAAIYOACA2AACIDgAgxwYBAAAAAf8GAQAAAAGPBwIAAAABmQcAAADGBwKjBwEAAAABqAcBAAAAAaoHCAAAAAHCBwgAAAABwwcIAAAAAcQHCAAAAAHGBwIAAAABAw8AAKQVACDRCAAApRUAINcIAAAxACADDwAAohUAINEIAACjFQAg1wgAAEoAIAMPAACgFQAg0QgAAKEVACDXCAAAsAkAIAQPAAD5DQAw0QgAAPoNADDTCAAA_A0AINcIAAD5DAAwICMAAIoOACAsAACLDgAgLgAAjA4AIDMAAI0OACA0AACODgAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB6gYBAAAAAesGAQAAAAHsBgEAAAABowcBAAAAAb4HCAAAAAG_BwgAAAABxwcCAAAAAcgHAQAAAAHKBwAAAMoHAssHCAAAAAHNBwAAAM0HAs4HAQAAAAHPBwAAAMYHAtAHAQAAAAHRBwEAAAAB0gcBAAAAAdMHAQAAAAHVBwAAANUHA9YHAQAAAAHXBwEAAAAB2AcBAAAAAdkHQAAAAAHaBwEAAAAB2wcBAAAAAQMPAACeFQAg0QgAAJ8VACDXCAAAsAkAIAQPAADpDQAw0QgAAOoNADDTCAAA7A0AINcIAADtDQAwBA8AAN4NADDRCAAA3w0AMNMIAADhDQAg1wgAAI8NADAEDwAA0w0AMNEIAADUDQAw0wgAANYNACDXCAAA6gwAMAMPAACcFQAg0QgAAJ0VACDXCAAAoQEAIBAmAADeEAAgNwAA3xAAIDwAAOAQACA9AADhEAAgPgAA4xAAIEEAAOIQACBCAADlEAAgQwAA5BAAIEQAAOYQACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAekGAQAAAAH1BgEAAAABAgAAALAJACAPAACPDgAgAwAAAC0AIA8AAI8OACAQAACTDgAgEgAAAC0AIAgAAJMOACAmAACUDgAgNwAAlQ4AIDwAAJYOACA9AACXDgAgPgAAmQ4AIEEAAJgOACBCAACbDgAgQwAAmg4AIEQAAJwOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIRAmAACUDgAgNwAAlQ4AIDwAAJYOACA9AACXDgAgPgAAmQ4AIEEAAJgOACBCAACbDgAgQwAAmg4AIEQAAJwOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIQsPAACtDwAwEAAAsg8AMNEIAACuDwAw0ggAAK8PADDTCAAAsA8AINQIAACxDwAw1QgAALEPADDWCAAAsQ8AMNcIAACxDwAw2AgAALMPADDZCAAAtA8AMAsPAACiDwAwEAAApg8AMNEIAACjDwAw0ggAAKQPADDTCAAApQ8AINQIAADtDQAw1QgAAO0NADDWCAAA7Q0AMNcIAADtDQAw2AgAAKcPADDZCAAA8A0AMAsPAAD6DgAwEAAA_w4AMNEIAAD7DgAw0ggAAPwOADDTCAAA_Q4AINQIAAD-DgAw1QgAAP4OADDWCAAA_g4AMNcIAAD-DgAw2AgAAIAPADDZCAAAgQ8AMAsPAADsDgAwEAAA8Q4AMNEIAADtDgAw0ggAAO4OADDTCAAA7w4AINQIAADwDgAw1QgAAPAOADDWCAAA8A4AMNcIAADwDgAw2AgAAPIOADDZCAAA8w4AMAsPAADhDgAwEAAA5Q4AMNEIAADiDgAw0ggAAOMOADDTCAAA5A4AINQIAADDDQAw1QgAAMMNADDWCAAAww0AMNcIAADDDQAw2AgAAOYOADDZCAAAxg0AMAsPAADNDgAwEAAA0g4AMNEIAADODgAw0ggAAM8OADDTCAAA0A4AINQIAADRDgAw1QgAANEOADDWCAAA0Q4AMNcIAADRDgAw2AgAANMOADDZCAAA1A4AMAsPAAC0DgAwEAAAuQ4AMNEIAAC1DgAw0ggAALYOADDTCAAAtw4AINQIAAC4DgAw1QgAALgOADDWCAAAuA4AMNcIAAC4DgAw2AgAALoOADDZCAAAuw4AMAsPAACmDgAwEAAAqw4AMNEIAACnDgAw0ggAAKgOADDTCAAAqQ4AINQIAACqDgAw1QgAAKoOADDWCAAAqg4AMNcIAACqDgAw2AgAAKwOADDZCAAArQ4AMAsPAACdDgAwEAAAoQ4AMNEIAACeDgAw0ggAAJ8OADDTCAAAoA4AINQIAADqDAAw1QgAAOoMADDWCAAA6gwAMNcIAADqDAAw2AgAAKIOADDZCAAA7QwAMAssAACKDQAgLQAAiA0AIC8AAN0NACDHBgEAAAABzgZAAAAAAbwHAQAAAAG9BwgAAAABvgcIAAAAAb8HCAAAAAHABwgAAAABwQcBAAAAAQIAAABbACAPAAClDgAgAwAAAFsAIA8AAKUOACAQAACkDgAgAQgAAJsVADACAAAAWwAgCAAApA4AIAIAAADuDAAgCAAAow4AIAjHBgEAxQwAIc4GQADJDAAhvAcBAMUMACG9BwgA8AwAIb4HCADwDAAhvwcIAPAMACHABwgA8AwAIcEHAQDGDAAhCywAAPQMACAtAADyDAAgLwAA2w0AIMcGAQDFDAAhzgZAAMkMACG8BwEAxQwAIb0HCADwDAAhvgcIAPAMACG_BwgA8AwAIcAHCADwDAAhwQcBAMYMACELLAAAig0AIC0AAIgNACAvAADdDQAgxwYBAAAAAc4GQAAAAAG8BwEAAAABvQcIAAAAAb4HCAAAAAG_BwgAAAABwAcIAAAAAcEHAQAAAAEJJwAAsw4AIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAGkBwEAAAABqgcIAAAAAYkIAQAAAAGKCEAAAAABAgAAAKwBACAPAACyDgAgAwAAAKwBACAPAACyDgAgEAAAsA4AIAEIAACaFQAwDiMAAPMLACAnAADyCwAgxAYAAPELADDFBgAAqgEAEMYGAADxCwAwxwYBAAAAAcgGAQDWCgAhzgZAANoKACHPBkAA2goAIaMHAQDWCgAhpAcBANYKACGqBwgA9QoAIYkIAQDXCgAhighAANoKACECAAAArAEAIAgAALAOACACAAAArg4AIAgAAK8OACAMxAYAAK0OADDFBgAArg4AEMYGAACtDgAwxwYBANYKACHIBgEA1goAIc4GQADaCgAhzwZAANoKACGjBwEA1goAIaQHAQDWCgAhqgcIAPUKACGJCAEA1woAIYoIQADaCgAhDMQGAACtDgAwxQYAAK4OABDGBgAArQ4AMMcGAQDWCgAhyAYBANYKACHOBkAA2goAIc8GQADaCgAhowcBANYKACGkBwEA1goAIaoHCAD1CgAhiQgBANcKACGKCEAA2goAIQjHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIaQHAQDFDAAhqgcIAPAMACGJCAEAxgwAIYoIQADJDAAhCScAALEOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIaQHAQDFDAAhqgcIAPAMACGJCAEAxgwAIYoIQADJDAAhBQ8AAJUVACAQAACYFQAg0QgAAJYVACDSCAAAlxUAINcIAACoAQAgCScAALMOACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAABpAcBAAAAAaoHCAAAAAGJCAEAAAABighAAAAAAQMPAACVFQAg0QgAAJYVACDXCAAAqAEAIAZCAADMDgAgxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAECAAAAqAEAIA8AAMsOACADAAAAqAEAIA8AAMsOACAQAAC-DgAgAQgAAJQVADALIwAA8wsAIEIAAO8KACDEBgAA9AsAMMUGAACmAQAQxgYAAPQLADDHBgEAAAAByAYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACGjBwEA1goAIQIAAACoAQAgCAAAvg4AIAIAAAC8DgAgCAAAvQ4AIAnEBgAAuw4AMMUGAAC8DgAQxgYAALsOADDHBgEA1goAIcgGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAhowcBANYKACEJxAYAALsOADDFBgAAvA4AEMYGAAC7DgAwxwYBANYKACHIBgEA1goAIc0GIADZCgAhzgZAANoKACHPBkAA2goAIaMHAQDWCgAhBccGAQDFDAAhyAYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACEGQgAAvw4AIMcGAQDFDAAhyAYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACELDwAAwA4AMBAAAMQOADDRCAAAwQ4AMNIIAADCDgAw0wgAAMMOACDUCAAAqg4AMNUIAACqDgAw1ggAAKoOADDXCAAAqg4AMNgIAADFDgAw2QgAAK0OADAJIwAAyg4AIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAGjBwEAAAABqgcIAAAAAYkIAQAAAAGKCEAAAAABAgAAAKwBACAPAADJDgAgAwAAAKwBACAPAADJDgAgEAAAxw4AIAEIAACTFQAwAgAAAKwBACAIAADHDgAgAgAAAK4OACAIAADGDgAgCMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAhowcBAMUMACGqBwgA8AwAIYkIAQDGDAAhighAAMkMACEJIwAAyA4AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAhowcBAMUMACGqBwgA8AwAIYkIAQDGDAAhighAAMkMACEFDwAAjhUAIBAAAJEVACDRCAAAjxUAINIIAACQFQAg1wgAALAJACAJIwAAyg4AIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAGjBwEAAAABqgcIAAAAAYkIAQAAAAGKCEAAAAABAw8AAI4VACDRCAAAjxUAINcIAACwCQAgBkIAAMwOACDHBgEAAAAByAYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAQQPAADADgAw0QgAAMEOADDTCAAAww4AINcIAACqDgAwHysAAOAOACDHBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAf8GAQAAAAGTBwEAAAABlgcBAAAAAd8HAQAAAAHgByAAAAAB4QcgAAAAAeIHIAAAAAHjByAAAAAB5AcAAN0OACDlBwEAAAAB5gcBAAAAAecHAQAAAAHoBwEAAAAB6QcBAAAAAeoHAQAAAAHrBwEAAAAB7AcAAN4OACDtBwEAAAAB7gcBAAAAAe8HAQAAAAHwBwEAAAAB8QcAAN8OACDyBwEAAAAB8wcBAAAAAfQHAgAAAAECAAAAjQEAIA8AANwOACADAAAAjQEAIA8AANwOACAQAADaDgAgAQgAAI0VADAkIwAA8wsAICsAAPwLACDEBgAA_QsAMMUGAACLAQAQxgYAAP0LADDHBgEAAAABzQYgANkKACHOBkAA2goAIc8GQADaCgAh6AYBANcKACH_BgEA1goAIZMHAQAAAAGWBwEA1woAIaMHAQDWCgAh3wcBANYKACHgByAA2QoAIeEHIADZCgAh4gcgANkKACHjByAA2QoAIeQHAADcCgAg5QcBANYKACHmBwEA1woAIecHAQDXCgAh6AcBANcKACHpBwEA1woAIeoHAQDXCgAh6wcBANcKACHsBwAA3AoAIO0HAQDXCgAh7gcBANcKACHvBwEA1woAIfAHAQDXCgAh8QcAANwKACDyBwEA1goAIfMHAQDWCgAh9AcCANgKACECAAAAjQEAIAgAANoOACACAAAA1Q4AIAgAANYOACAixAYAANQOADDFBgAA1Q4AEMYGAADUDgAwxwYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHoBgEA1woAIf8GAQDWCgAhkwcBANYKACGWBwEA1woAIaMHAQDWCgAh3wcBANYKACHgByAA2QoAIeEHIADZCgAh4gcgANkKACHjByAA2QoAIeQHAADcCgAg5QcBANYKACHmBwEA1woAIecHAQDXCgAh6AcBANcKACHpBwEA1woAIeoHAQDXCgAh6wcBANcKACHsBwAA3AoAIO0HAQDXCgAh7gcBANcKACHvBwEA1woAIfAHAQDXCgAh8QcAANwKACDyBwEA1goAIfMHAQDWCgAh9AcCANgKACEixAYAANQOADDFBgAA1Q4AEMYGAADUDgAwxwYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHoBgEA1woAIf8GAQDWCgAhkwcBANYKACGWBwEA1woAIaMHAQDWCgAh3wcBANYKACHgByAA2QoAIeEHIADZCgAh4gcgANkKACHjByAA2QoAIeQHAADcCgAg5QcBANYKACHmBwEA1woAIecHAQDXCgAh6AcBANcKACHpBwEA1woAIeoHAQDXCgAh6wcBANcKACHsBwAA3AoAIO0HAQDXCgAh7gcBANcKACHvBwEA1woAIfAHAQDXCgAh8QcAANwKACDyBwEA1goAIfMHAQDWCgAh9AcCANgKACEexwYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIf8GAQDFDAAhkwcBAMUMACGWBwEAxgwAId8HAQDFDAAh4AcgAMgMACHhByAAyAwAIeIHIADIDAAh4wcgAMgMACHkBwAA1w4AIOUHAQDFDAAh5gcBAMYMACHnBwEAxgwAIegHAQDGDAAh6QcBAMYMACHqBwEAxgwAIesHAQDGDAAh7AcAANgOACDtBwEAxgwAIe4HAQDGDAAh7wcBAMYMACHwBwEAxgwAIfEHAADZDgAg8gcBAMUMACHzBwEAxQwAIfQHAgDHDAAhAtQIAQAAAATeCAEAAAAFAtQIAQAAAATeCAEAAAAFAtQIAQAAAATeCAEAAAAFHysAANsOACDHBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh_wYBAMUMACGTBwEAxQwAIZYHAQDGDAAh3wcBAMUMACHgByAAyAwAIeEHIADIDAAh4gcgAMgMACHjByAAyAwAIeQHAADXDgAg5QcBAMUMACHmBwEAxgwAIecHAQDGDAAh6AcBAMYMACHpBwEAxgwAIeoHAQDGDAAh6wcBAMYMACHsBwAA2A4AIO0HAQDGDAAh7gcBAMYMACHvBwEAxgwAIfAHAQDGDAAh8QcAANkOACDyBwEAxQwAIfMHAQDFDAAh9AcCAMcMACEFDwAAiBUAIBAAAIsVACDRCAAAiRUAINIIAACKFQAg1wgAADEAIB8rAADgDgAgxwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAH_BgEAAAABkwcBAAAAAZYHAQAAAAHfBwEAAAAB4AcgAAAAAeEHIAAAAAHiByAAAAAB4wcgAAAAAeQHAADdDgAg5QcBAAAAAeYHAQAAAAHnBwEAAAAB6AcBAAAAAekHAQAAAAHqBwEAAAAB6wcBAAAAAewHAADeDgAg7QcBAAAAAe4HAQAAAAHvBwEAAAAB8AcBAAAAAfEHAADfDgAg8gcBAAAAAfMHAQAAAAH0BwIAAAABAdQIAQAAAAQB1AgBAAAABAHUCAEAAAAEAw8AAIgVACDRCAAAiRUAINcIAAAxACAgHgAA6w4AICwAAIsOACAuAACMDgAgMwAAjQ4AIDQAAI4OACDHBgEAAAABzgZAAAAAAc8GQAAAAAHqBgEAAAAB6wYBAAAAAewGAQAAAAH-BgEAAAABvgcIAAAAAb8HCAAAAAHHBwIAAAAByAcBAAAAAcoHAAAAygcCywcIAAAAAc0HAAAAzQcCzgcBAAAAAc8HAAAAxgcC0AcBAAAAAdEHAQAAAAHSBwEAAAAB0wcBAAAAAdUHAAAA1QcD1gcBAAAAAdcHAQAAAAHYBwEAAAAB2QdAAAAAAdoHAQAAAAHbBwEAAAABAgAAAGsAIA8AAOoOACADAAAAawAgDwAA6g4AIBAAAOgOACABCAAAhxUAMAIAAABrACAIAADoDgAgAgAAAMcNACAIAADnDgAgG8cGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIf4GAQDGDAAhvgcIAPAMACG_BwgA8AwAIccHAgDHDAAhyAcBAMYMACHKBwAAyQ3KByLLBwgA8AwAIc0HAADKDc0HIs4HAQDGDAAhzwcAAMsNxgci0AcBAMYMACHRBwEAxgwAIdIHAQDGDAAh0wcBAMYMACHVBwAAzA3VByPWBwEAxgwAIdcHAQDGDAAh2AcBAMYMACHZB0AA2wwAIdoHAQDGDAAh2wcBAMYMACEgHgAA6Q4AICwAAM8NACAuAADQDQAgMwAA0Q0AIDQAANINACDHBgEAxQwAIc4GQADJDAAhzwZAAMkMACHqBgEAxgwAIesGAQDGDAAh7AYBAMYMACH-BgEAxgwAIb4HCADwDAAhvwcIAPAMACHHBwIAxwwAIcgHAQDGDAAhygcAAMkNygciywcIAPAMACHNBwAAyg3NByLOBwEAxgwAIc8HAADLDcYHItAHAQDGDAAh0QcBAMYMACHSBwEAxgwAIdMHAQDGDAAh1QcAAMwN1Qcj1gcBAMYMACHXBwEAxgwAIdgHAQDGDAAh2QdAANsMACHaBwEAxgwAIdsHAQDGDAAhBw8AAIIVACAQAACFFQAg0QgAAIMVACDSCAAAhBUAINUIAAAeACDWCAAAHgAg1wgAACAAICAeAADrDgAgLAAAiw4AIC4AAIwOACAzAACNDgAgNAAAjg4AIMcGAQAAAAHOBkAAAAABzwZAAAAAAeoGAQAAAAHrBgEAAAAB7AYBAAAAAf4GAQAAAAG-BwgAAAABvwcIAAAAAccHAgAAAAHIBwEAAAABygcAAADKBwLLBwgAAAABzQcAAADNBwLOBwEAAAABzwcAAADGBwLQBwEAAAAB0QcBAAAAAdIHAQAAAAHTBwEAAAAB1QcAAADVBwPWBwEAAAAB1wcBAAAAAdgHAQAAAAHZB0AAAAAB2gcBAAAAAdsHAQAAAAEDDwAAghUAINEIAACDFQAg1wgAACAAIAsrAAD5DgAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB_wYBAAAAAY0HAQAAAAGPBwIAAAABqAcBAAAAAakHAQAAAAGqBwgAAAABqwcBAAAAAQIAAACJAQAgDwAA-A4AIAMAAACJAQAgDwAA-A4AIBAAAPYOACABCAAAgRUAMBAjAADzCwAgKwAA_AsAIMQGAAD-CwAwxQYAAIcBABDGBgAA_gsAMMcGAQAAAAHOBkAA2goAIc8GQADaCgAh_wYBANYKACGNBwEA1woAIY8HAgDYCgAhowcBANYKACGoBwEA1woAIakHAQDWCgAhqgcIAPUKACGrBwEA1woAIQIAAACJAQAgCAAA9g4AIAIAAAD0DgAgCAAA9Q4AIA7EBgAA8w4AMMUGAAD0DgAQxgYAAPMOADDHBgEA1goAIc4GQADaCgAhzwZAANoKACH_BgEA1goAIY0HAQDXCgAhjwcCANgKACGjBwEA1goAIagHAQDXCgAhqQcBANYKACGqBwgA9QoAIasHAQDXCgAhDsQGAADzDgAwxQYAAPQOABDGBgAA8w4AMMcGAQDWCgAhzgZAANoKACHPBkAA2goAIf8GAQDWCgAhjQcBANcKACGPBwIA2AoAIaMHAQDWCgAhqAcBANcKACGpBwEA1goAIaoHCAD1CgAhqwcBANcKACEKxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_wYBAMUMACGNBwEAxgwAIY8HAgDHDAAhqAcBAMYMACGpBwEAxQwAIaoHCADwDAAhqwcBAMYMACELKwAA9w4AIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIf8GAQDFDAAhjQcBAMYMACGPBwIAxwwAIagHAQDGDAAhqQcBAMUMACGqBwgA8AwAIasHAQDGDAAhBQ8AAPwUACAQAAD_FAAg0QgAAP0UACDSCAAA_hQAINcIAAAxACALKwAA-Q4AIMcGAQAAAAHOBkAAAAABzwZAAAAAAf8GAQAAAAGNBwEAAAABjwcCAAAAAagHAQAAAAGpBwEAAAABqgcIAAAAAasHAQAAAAEDDwAA_BQAINEIAAD9FAAg1wgAADEAIA0mAACgDwAgNQAAoQ8AIMcGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAG_BwgAAAABmwgBAAAAAZ0IAAAAnQgCnggIAAAAAZ8ICAAAAAGgCEAAAAABoQhAAAAAAQIAAAChAQAgDwAAnw8AIAMAAAChAQAgDwAAnw8AIBAAAIUPACABCAAA-xQAMBIjAADzCwAgJgAA-AsAIDUAAOwKACDEBgAA9QsAMMUGAABkABDGBgAA9QsAMMcGAQAAAAHNBiAA2QoAIc4GQADaCgAhzwZAANoKACGjBwEA1goAIb8HCAD1CgAhmwgBAAAAAZ0IAAD2C50IIp4ICAD3CwAhnwgIAPUKACGgCEAA2goAIaEIQADaCgAhAgAAAKEBACAIAACFDwAgAgAAAIIPACAIAACDDwAgD8QGAACBDwAwxQYAAIIPABDGBgAAgQ8AMMcGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAhowcBANYKACG_BwgA9QoAIZsIAQDWCgAhnQgAAPYLnQginggIAPcLACGfCAgA9QoAIaAIQADaCgAhoQhAANoKACEPxAYAAIEPADDFBgAAgg8AEMYGAACBDwAwxwYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACGjBwEA1goAIb8HCAD1CgAhmwgBANYKACGdCAAA9gudCCKeCAgA9wsAIZ8ICAD1CgAhoAhAANoKACGhCEAA2goAIQvHBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIb8HCADwDAAhmwgBAMUMACGdCAAAhA-dCCKeCAgA8w0AIZ8ICADwDAAhoAhAAMkMACGhCEAAyQwAIQHUCAAAAJ0IAg0mAACGDwAgNQAAhw8AIMcGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAhvwcIAPAMACGbCAEAxQwAIZ0IAACED50IIp4ICADzDQAhnwgIAPAMACGgCEAAyQwAIaEIQADJDAAhCw8AAJEPADAQAACWDwAw0QgAAJIPADDSCAAAkw8AMNMIAACUDwAg1AgAAJUPADDVCAAAlQ8AMNYIAACVDwAw1wgAAJUPADDYCAAAlw8AMNkIAACYDwAwCw8AAIgPADAQAACMDwAw0QgAAIkPADDSCAAAig8AMNMIAACLDwAg1AgAAMMNADDVCAAAww0AMNYIAADDDQAw1wgAAMMNADDYCAAAjQ8AMNkIAADGDQAwIB4AAOsOACAjAACKDgAgLAAAiw4AIC4AAIwOACAzAACNDgAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB6gYBAAAAAesGAQAAAAHsBgEAAAAB_gYBAAAAAaMHAQAAAAG-BwgAAAABvwcIAAAAAccHAgAAAAHIBwEAAAABygcAAADKBwLLBwgAAAABzQcAAADNBwLOBwEAAAABzwcAAADGBwLQBwEAAAAB0QcBAAAAAdIHAQAAAAHVBwAAANUHA9YHAQAAAAHXBwEAAAAB2AcBAAAAAdkHQAAAAAHaBwEAAAAB2wcBAAAAAQIAAABrACAPAACQDwAgAwAAAGsAIA8AAJAPACAQAACPDwAgAQgAAPoUADACAAAAawAgCAAAjw8AIAIAAADHDQAgCAAAjg8AIBvHBgEAxQwAIc4GQADJDAAhzwZAAMkMACHqBgEAxgwAIesGAQDGDAAh7AYBAMYMACH-BgEAxgwAIaMHAQDGDAAhvgcIAPAMACG_BwgA8AwAIccHAgDHDAAhyAcBAMYMACHKBwAAyQ3KByLLBwgA8AwAIc0HAADKDc0HIs4HAQDGDAAhzwcAAMsNxgci0AcBAMYMACHRBwEAxgwAIdIHAQDGDAAh1QcAAMwN1Qcj1gcBAMYMACHXBwEAxgwAIdgHAQDGDAAh2QdAANsMACHaBwEAxgwAIdsHAQDGDAAhIB4AAOkOACAjAADODQAgLAAAzw0AIC4AANANACAzAADRDQAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh6gYBAMYMACHrBgEAxgwAIewGAQDGDAAh_gYBAMYMACGjBwEAxgwAIb4HCADwDAAhvwcIAPAMACHHBwIAxwwAIcgHAQDGDAAhygcAAMkNygciywcIAPAMACHNBwAAyg3NByLOBwEAxgwAIc8HAADLDcYHItAHAQDGDAAh0QcBAMYMACHSBwEAxgwAIdUHAADMDdUHI9YHAQDGDAAh1wcBAMYMACHYBwEAxgwAIdkHQADbDAAh2gcBAMYMACHbBwEAxgwAISAeAADrDgAgIwAAig4AICwAAIsOACAuAACMDgAgMwAAjQ4AIMcGAQAAAAHOBkAAAAABzwZAAAAAAeoGAQAAAAHrBgEAAAAB7AYBAAAAAf4GAQAAAAGjBwEAAAABvgcIAAAAAb8HCAAAAAHHBwIAAAAByAcBAAAAAcoHAAAAygcCywcIAAAAAc0HAAAAzQcCzgcBAAAAAc8HAAAAxgcC0AcBAAAAAdEHAQAAAAHSBwEAAAAB1QcAAADVBwPWBwEAAAAB1wcBAAAAAdgHAQAAAAHZB0AAAAAB2gcBAAAAAdsHAQAAAAEDKwAAng8AIMcGAQAAAAH_BgEAAAABAgAAAGgAIA8AAJ0PACADAAAAaAAgDwAAnQ8AIBAAAJsPACABCAAA-RQAMAkrAAD8CwAgNAAAkAwAIMQGAACPDAAwxQYAAGYAEMYGAACPDAAwxwYBAAAAAf8GAQDWCgAh0wcBANYKACHICAAAjgwAIAIAAABoACAIAACbDwAgAgAAAJkPACAIAACaDwAgBsQGAACYDwAwxQYAAJkPABDGBgAAmA8AMMcGAQDWCgAh_wYBANYKACHTBwEA1goAIQbEBgAAmA8AMMUGAACZDwAQxgYAAJgPADDHBgEA1goAIf8GAQDWCgAh0wcBANYKACECxwYBAMUMACH_BgEAxQwAIQMrAACcDwAgxwYBAMUMACH_BgEAxQwAIQUPAAD0FAAgEAAA9xQAINEIAAD1FAAg0ggAAPYUACDXCAAAMQAgAysAAJ4PACDHBgEAAAAB_wYBAAAAAQMPAAD0FAAg0QgAAPUUACDXCAAAMQAgDSYAAKAPACA1AAChDwAgxwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAb8HCAAAAAGbCAEAAAABnQgAAACdCAKeCAgAAAABnwgIAAAAAaAIQAAAAAGhCEAAAAABBA8AAJEPADDRCAAAkg8AMNMIAACUDwAg1wgAAJUPADAEDwAAiA8AMNEIAACJDwAw0wgAAIsPACDXCAAAww0AMA8rAACFDgAgLQAArA8AIDIAAIYOACA2AACIDgAgxwYBAAAAAf8GAQAAAAGPBwIAAAABmQcAAADGBwKoBwEAAAABqgcIAAAAAbwHAQAAAAHCBwgAAAABwwcIAAAAAcQHCAAAAAHGBwIAAAABAgAAAE4AIA8AAKsPACADAAAATgAgDwAAqw8AIBAAAKkPACABCAAA8xQAMAIAAABOACAIAACpDwAgAgAAAPENACAIAACoDwAgC8cGAQDFDAAh_wYBAMUMACGPBwIAxwwAIZkHAADLDcYHIqgHAQDGDAAhqgcIAPAMACG8BwEAxQwAIcIHCADzDQAhwwcIAPAMACHEBwgA8AwAIcYHAgDHDAAhDysAAPUNACAtAACqDwAgMgAA9g0AIDYAAPgNACDHBgEAxQwAIf8GAQDFDAAhjwcCAMcMACGZBwAAyw3GByKoBwEAxgwAIaoHCADwDAAhvAcBAMUMACHCBwgA8w0AIcMHCADwDAAhxAcIAPAMACHGBwIAxwwAIQUPAADuFAAgEAAA8RQAINEIAADvFAAg0ggAAPAUACDXCAAAawAgDysAAIUOACAtAACsDwAgMgAAhg4AIDYAAIgOACDHBgEAAAAB_wYBAAAAAY8HAgAAAAGZBwAAAMYHAqgHAQAAAAGqBwgAAAABvAcBAAAAAcIHCAAAAAHDBwgAAAABxAcIAAAAAcYHAgAAAAEDDwAA7hQAINEIAADvFAAg1wgAAGsAICUnAADSEAAgKQAA0xAAICoAANQQACA2AADcEAAgNwAA1xAAIDkAANgQACA6AADVEAAgOwAA1hAAIDwAANkQACA9AADaEAAgPgAA2xAAIEAAAN0QACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAY4HAQAAAAGQBwgAAAABkQcIAAAAAZIHCAAAAAGTBwEAAAABlAcBAAAAAZUHAADPEAAglgcBAAAAAZcHAgAAAAGZBwAAAJkHApsHAAAAmwcCnAeAAAAAAZ0HAADQEAAgnwcAAACfBwKgBwgAAAABoQcgAAAAAaIHAADREAAgpAcBAAAAAaUHAQAAAAGmBwEAAAABAgAAADEAIA8AAM4QACADAAAAMQAgDwAAzhAAIBAAAL0PACABCAAA7RQAMCojAADzCwAgJwAAngwAICkAAKcMACAqAACoDAAgNgAAlgwAIDcAAOkKACA5AADXCwAgOgAAqQwAIDsAAKoMACA8AAD4CwAgPQAA6woAID4AAO0KACBAAADFCwAgxAYAAKMMADDFBgAALwAQxgYAAKMMADDHBgEAAAAByAYBANYKACHOBkAA2goAIc8GQADaCgAh6AYBANYKACGOBwEAAAABkAcIAPUKACGRBwgA9QoAIZIHCAD1CgAhkwcBAAAAAZQHAQDWCgAhlQcAANwKACCWBwEA1woAIZcHAgDYCgAhmQcAAKQMmQcimwcAAKUMmwcinAcAAIQLACCdBwAA3AoAIJ8HAACmDJ8HIqAHCAD1CgAhoQcgANkKACGiBwAAiwsAIKMHAQDWCgAhpAcBANYKACGlBwEA1woAIaYHAQDXCgAhAgAAADEAIAgAAL0PACACAAAAtQ8AIAgAALYPACAdxAYAALQPADDFBgAAtQ8AEMYGAAC0DwAwxwYBANYKACHIBgEA1goAIc4GQADaCgAhzwZAANoKACHoBgEA1goAIY4HAQDXCgAhkAcIAPUKACGRBwgA9QoAIZIHCAD1CgAhkwcBANYKACGUBwEA1goAIZUHAADcCgAglgcBANcKACGXBwIA2AoAIZkHAACkDJkHIpsHAAClDJsHIpwHAACECwAgnQcAANwKACCfBwAApgyfByKgBwgA9QoAIaEHIADZCgAhogcAAIsLACCjBwEA1goAIaQHAQDWCgAhpQcBANcKACGmBwEA1woAIR3EBgAAtA8AMMUGAAC1DwAQxgYAALQPADDHBgEA1goAIcgGAQDWCgAhzgZAANoKACHPBkAA2goAIegGAQDWCgAhjgcBANcKACGQBwgA9QoAIZEHCAD1CgAhkgcIAPUKACGTBwEA1goAIZQHAQDWCgAhlQcAANwKACCWBwEA1woAIZcHAgDYCgAhmQcAAKQMmQcimwcAAKUMmwcinAcAAIQLACCdBwAA3AoAIJ8HAACmDJ8HIqAHCAD1CgAhoQcgANkKACGiBwAAiwsAIKMHAQDWCgAhpAcBANYKACGlBwEA1woAIaYHAQDXCgAhGccGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCkBwEAxQwAIaUHAQDGDAAhpgcBAMYMACEC1AgBAAAABN4IAQAAAAUB1AgAAACZBwIB1AgAAACbBwIC1AgBAAAABN4IAQAAAAUB1AgAAACfBwIC1AgAAACoBwjeCAAAAKgHAiUnAAC-DwAgKQAAvw8AICoAAMAPACA2AADIDwAgNwAAww8AIDkAAMQPACA6AADBDwAgOwAAwg8AIDwAAMUPACA9AADGDwAgPgAAxw8AIEAAAMkPACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDFDAAhjgcBAMYMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACGTBwEAxQwAIZQHAQDFDAAhlQcAALcPACCWBwEAxgwAIZcHAgDHDAAhmQcAALgPmQcimwcAALkPmwcinAeAAAAAAZ0HAAC6DwAgnwcAALsPnwcioAcIAPAMACGhByAAyAwAIaIHAAC8DwAgpAcBAMUMACGlBwEAxgwAIaYHAQDGDAAhBQ8AALgUACAQAADrFAAg0QgAALkUACDSCAAA6hQAINcIAAA2ACAHDwAAthQAIBAAAOgUACDRCAAAtxQAINIIAADnFAAg1QgAAEAAINYIAABAACDXCAAAnwMAIAcPAAC0FAAgEAAA5RQAINEIAAC1FAAg0ggAAOQUACDVCAAARAAg1ggAAEQAINcIAADhCQAgCw8AAKEQADAQAACmEAAw0QgAAKIQADDSCAAAoxAAMNMIAACkEAAg1AgAAKUQADDVCAAApRAAMNYIAAClEAAw1wgAAKUQADDYCAAApxAAMNkIAACoEAAwCw8AAJYQADAQAACaEAAw0QgAAJcQADDSCAAAmBAAMNMIAACZEAAg1AgAAJ4NADDVCAAAng0AMNYIAACeDQAw1wgAAJ4NADDYCAAAmxAAMNkIAAChDQAwCw8AAI0QADAQAACREAAw0QgAAI4QADDSCAAAjxAAMNMIAACQEAAg1AgAAO0NADDVCAAA7Q0AMNYIAADtDQAw1wgAAO0NADDYCAAAkhAAMNkIAADwDQAwCw8AAIIQADAQAACGEAAw0QgAAIMQADDSCAAAhBAAMNMIAACFEAAg1AgAALINADDVCAAAsg0AMNYIAACyDQAw1wgAALINADDYCAAAhxAAMNkIAAC1DQAwCw8AAPcPADAQAAD7DwAw0QgAAPgPADDSCAAA-Q8AMNMIAAD6DwAg1AgAAJUPADDVCAAAlQ8AMNYIAACVDwAw1wgAAJUPADDYCAAA_A8AMNkIAACYDwAwCw8AAOwPADAQAADwDwAw0QgAAO0PADDSCAAA7g8AMNMIAADvDwAg1AgAAPAOADDVCAAA8A4AMNYIAADwDgAw1wgAAPAOADDYCAAA8Q8AMNkIAADzDgAwCw8AAOEPADAQAADlDwAw0QgAAOIPADDSCAAA4w8AMNMIAADkDwAg1AgAANEOADDVCAAA0Q4AMNYIAADRDgAw1wgAANEOADDYCAAA5g8AMNkIAADUDgAwCw8AANgPADAQAADcDwAw0QgAANkPADDSCAAA2g8AMNMIAADbDwAg1AgAAPkMADDVCAAA-QwAMNYIAAD5DAAw1wgAAPkMADDYCAAA3Q8AMNkIAAD8DAAwCw8AAMoPADAQAADPDwAw0QgAAMsPADDSCAAAzA8AMNMIAADNDwAg1AgAAM4PADDVCAAAzg8AMNYIAADODwAw1wgAAM4PADDYCAAA0A8AMNkIAADRDwAwBS0CAAAAAT8AANcPACDHBgEAAAABzgZAAAAAAYQIAQAAAAECAAAAkgEAIA8AANYPACADAAAAkgEAIA8AANYPACAQAADUDwAgAQgAAOMUADALKwAA_AsAIC0CANgKACE_AAD7CwAgxAYAAPoLADDFBgAAkAEAEMYGAAD6CwAwxwYBAAAAAc4GQADaCgAh_wYBANYKACGECAEA1goAIcUIAAD5CwAgAgAAAJIBACAIAADUDwAgAgAAANIPACAIAADTDwAgCC0CANgKACHEBgAA0Q8AMMUGAADSDwAQxgYAANEPADDHBgEA1goAIc4GQADaCgAh_wYBANYKACGECAEA1goAIQgtAgDYCgAhxAYAANEPADDFBgAA0g8AEMYGAADRDwAwxwYBANYKACHOBkAA2goAIf8GAQDWCgAhhAgBANYKACEELQIAxwwAIccGAQDFDAAhzgZAAMkMACGECAEAxQwAIQUtAgDHDAAhPwAA1Q8AIMcGAQDFDAAhzgZAAMkMACGECAEAxQwAIQUPAADeFAAgEAAA4RQAINEIAADfFAAg0ggAAOAUACDXCAAAogUAIAUtAgAAAAE_AADXDwAgxwYBAAAAAc4GQAAAAAGECAEAAAABAw8AAN4UACDRCAAA3xQAINcIAACiBQAgCjAAAIMOACAxAACEDQAgMgAAhg0AIMcGAQAAAAGPBwIAAAABqAcBAAAAAaoHCAAAAAG5BwEAAAABugcBAAAAAbsHCAAAAAECAAAAYAAgDwAA4A8AIAMAAABgACAPAADgDwAgEAAA3w8AIAEIAADdFAAwAgAAAGAAIAgAAN8PACACAAAA_QwAIAgAAN4PACAHxwYBAMUMACGPBwIAxwwAIagHAQDGDAAhqgcIAPAMACG5BwEAxQwAIboHAQDFDAAhuwcIAPAMACEKMAAAgQ4AIDEAAIANACAyAACCDQAgxwYBAMUMACGPBwIAxwwAIagHAQDGDAAhqgcIAPAMACG5BwEAxQwAIboHAQDFDAAhuwcIAPAMACEKMAAAgw4AIDEAAIQNACAyAACGDQAgxwYBAAAAAY8HAgAAAAGoBwEAAAABqgcIAAAAAbkHAQAAAAG6BwEAAAABuwcIAAAAAR8jAADrDwAgxwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGTBwEAAAABlgcBAAAAAaMHAQAAAAHfBwEAAAAB4AcgAAAAAeEHIAAAAAHiByAAAAAB4wcgAAAAAeQHAADdDgAg5QcBAAAAAeYHAQAAAAHnBwEAAAAB6AcBAAAAAekHAQAAAAHqBwEAAAAB6wcBAAAAAewHAADeDgAg7QcBAAAAAe4HAQAAAAHvBwEAAAAB8AcBAAAAAfEHAADfDgAg8gcBAAAAAfMHAQAAAAH0BwIAAAABAgAAAI0BACAPAADqDwAgAwAAAI0BACAPAADqDwAgEAAA6A8AIAEIAADcFAAwAgAAAI0BACAIAADoDwAgAgAAANUOACAIAADnDwAgHscGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh6AYBAMYMACGTBwEAxQwAIZYHAQDGDAAhowcBAMUMACHfBwEAxQwAIeAHIADIDAAh4QcgAMgMACHiByAAyAwAIeMHIADIDAAh5AcAANcOACDlBwEAxQwAIeYHAQDGDAAh5wcBAMYMACHoBwEAxgwAIekHAQDGDAAh6gcBAMYMACHrBwEAxgwAIewHAADYDgAg7QcBAMYMACHuBwEAxgwAIe8HAQDGDAAh8AcBAMYMACHxBwAA2Q4AIPIHAQDFDAAh8wcBAMUMACH0BwIAxwwAIR8jAADpDwAgxwYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIZMHAQDFDAAhlgcBAMYMACGjBwEAxQwAId8HAQDFDAAh4AcgAMgMACHhByAAyAwAIeIHIADIDAAh4wcgAMgMACHkBwAA1w4AIOUHAQDFDAAh5gcBAMYMACHnBwEAxgwAIegHAQDGDAAh6QcBAMYMACHqBwEAxgwAIesHAQDGDAAh7AcAANgOACDtBwEAxgwAIe4HAQDGDAAh7wcBAMYMACHwBwEAxgwAIfEHAADZDgAg8gcBAMUMACHzBwEAxQwAIfQHAgDHDAAhBQ8AANcUACAQAADaFAAg0QgAANgUACDSCAAA2RQAINcIAACwCQAgHyMAAOsPACDHBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAZMHAQAAAAGWBwEAAAABowcBAAAAAd8HAQAAAAHgByAAAAAB4QcgAAAAAeIHIAAAAAHjByAAAAAB5AcAAN0OACDlBwEAAAAB5gcBAAAAAecHAQAAAAHoBwEAAAAB6QcBAAAAAeoHAQAAAAHrBwEAAAAB7AcAAN4OACDtBwEAAAAB7gcBAAAAAe8HAQAAAAHwBwEAAAAB8QcAAN8OACDyBwEAAAAB8wcBAAAAAfQHAgAAAAEDDwAA1xQAINEIAADYFAAg1wgAALAJACALIwAA9g8AIMcGAQAAAAHOBkAAAAABzwZAAAAAAY0HAQAAAAGPBwIAAAABowcBAAAAAagHAQAAAAGpBwEAAAABqgcIAAAAAasHAQAAAAECAAAAiQEAIA8AAPUPACADAAAAiQEAIA8AAPUPACAQAADzDwAgAQgAANYUADACAAAAiQEAIAgAAPMPACACAAAA9A4AIAgAAPIPACAKxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhjQcBAMYMACGPBwIAxwwAIaMHAQDFDAAhqAcBAMYMACGpBwEAxQwAIaoHCADwDAAhqwcBAMYMACELIwAA9A8AIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIY0HAQDGDAAhjwcCAMcMACGjBwEAxQwAIagHAQDGDAAhqQcBAMUMACGqBwgA8AwAIasHAQDGDAAhBQ8AANEUACAQAADUFAAg0QgAANIUACDSCAAA0xQAINcIAACwCQAgCyMAAPYPACDHBgEAAAABzgZAAAAAAc8GQAAAAAGNBwEAAAABjwcCAAAAAaMHAQAAAAGoBwEAAAABqQcBAAAAAaoHCAAAAAGrBwEAAAABAw8AANEUACDRCAAA0hQAINcIAACwCQAgAzQAAIEQACDHBgEAAAAB0wcBAAAAAQIAAABoACAPAACAEAAgAwAAAGgAIA8AAIAQACAQAAD-DwAgAQgAANAUADACAAAAaAAgCAAA_g8AIAIAAACZDwAgCAAA_Q8AIALHBgEAxQwAIdMHAQDFDAAhAzQAAP8PACDHBgEAxQwAIdMHAQDFDAAhBQ8AAMsUACAQAADOFAAg0QgAAMwUACDSCAAAzRQAINcIAAChAQAgAzQAAIEQACDHBgEAAAAB0wcBAAAAAQMPAADLFAAg0QgAAMwUACDXCAAAoQEAIAgyAAC9DQAgOAAAjBAAIMcGAQAAAAHOBkAAAAABzwZAAAAAAY8HAgAAAAGoBwEAAAABpQgBAAAAAQIAAAB3ACAPAACLEAAgAwAAAHcAIA8AAIsQACAQAACJEAAgAQgAAMoUADACAAAAdwAgCAAAiRAAIAIAAAC2DQAgCAAAiBAAIAbHBgEAxQwAIc4GQADJDAAhzwZAAMkMACGPBwIAxwwAIagHAQDGDAAhpQgBAMUMACEIMgAAug0AIDgAAIoQACDHBgEAxQwAIc4GQADJDAAhzwZAAMkMACGPBwIAxwwAIagHAQDGDAAhpQgBAMUMACEFDwAAxRQAIBAAAMgUACDRCAAAxhQAINIIAADHFAAg1wgAALcDACAIMgAAvQ0AIDgAAIwQACDHBgEAAAABzgZAAAAAAc8GQAAAAAGPBwIAAAABqAcBAAAAAaUIAQAAAAEDDwAAxRQAINEIAADGFAAg1wgAALcDACAPIwAAhw4AIC0AAKwPACAyAACGDgAgNgAAiA4AIMcGAQAAAAGPBwIAAAABmQcAAADGBwKjBwEAAAABqAcBAAAAAaoHCAAAAAG8BwEAAAABwgcIAAAAAcMHCAAAAAHEBwgAAAABxgcCAAAAAQIAAABOACAPAACVEAAgAwAAAE4AIA8AAJUQACAQAACUEAAgAQgAAMQUADACAAAATgAgCAAAlBAAIAIAAADxDQAgCAAAkxAAIAvHBgEAxQwAIY8HAgDHDAAhmQcAAMsNxgciowcBAMUMACGoBwEAxgwAIaoHCADwDAAhvAcBAMUMACHCBwgA8w0AIcMHCADwDAAhxAcIAPAMACHGBwIAxwwAIQ8jAAD3DQAgLQAAqg8AIDIAAPYNACA2AAD4DQAgxwYBAMUMACGPBwIAxwwAIZkHAADLDcYHIqMHAQDFDAAhqAcBAMYMACGqBwgA8AwAIbwHAQDFDAAhwgcIAPMNACHDBwgA8AwAIcQHCADwDAAhxgcCAMcMACEPIwAAhw4AIC0AAKwPACAyAACGDgAgNgAAiA4AIMcGAQAAAAGPBwIAAAABmQcAAADGBwKjBwEAAAABqAcBAAAAAaoHCAAAAAG8BwEAAAABwgcIAAAAAcMHCAAAAAHEBwgAAAABxgcCAAAAAQceAACgEAAgxwYBAAAAAcwGAgAAAAHOBkAAAAABzwZAAAAAAf0GAQAAAAH-BgEAAAABAgAAAIIBACAPAACfEAAgAwAAAIIBACAPAACfEAAgEAAAnRAAIAEIAADDFAAwAgAAAIIBACAIAACdEAAgAgAAAKINACAIAACcEAAgBscGAQDFDAAhzAYCAMcMACHOBkAAyQwAIc8GQADJDAAh_QYBAMYMACH-BgEAxQwAIQceAACeEAAgxwYBAMUMACHMBgIAxwwAIc4GQADJDAAhzwZAAMkMACH9BgEAxgwAIf4GAQDFDAAhBQ8AAL4UACAQAADBFAAg0QgAAL8UACDSCAAAwBQAINcIAAAgACAHHgAAoBAAIMcGAQAAAAHMBgIAAAABzgZAAAAAAc8GQAAAAAH9BgEAAAAB_gYBAAAAAQMPAAC-FAAg0QgAAL8UACDXCAAAIAAgDTYAAM0QACA3AADLEAAgOQAAzBAAIMcGAQAAAAHOBkAAAAABzwZAAAAAAeUGAQAAAAGNBwEAAAABjgcBAAAAAY8HAgAAAAGQBwgAAAABkQcIAAAAAZIHCAAAAAECAAAASgAgDwAAyhAAIAMAAABKACAPAADKEAAgEAAAqxAAIAEIAAC9FAAwEisAAPwLACA2AACWDAAgNwAA6QoAIDkAANcLACDEBgAAmwwAMMUGAABIABDGBgAAmwwAMMcGAQAAAAHOBkAA2goAIc8GQADaCgAh5QYBANcKACH_BgEA1goAIY0HAQDWCgAhjgcBAAAAAY8HAgDYCgAhkAcIAPUKACGRBwgA9QoAIZIHCAD1CgAhAgAAAEoAIAgAAKsQACACAAAAqRAAIAgAAKoQACAOxAYAAKgQADDFBgAAqRAAEMYGAACoEAAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh5QYBANcKACH_BgEA1goAIY0HAQDWCgAhjgcBANcKACGPBwIA2AoAIZAHCAD1CgAhkQcIAPUKACGSBwgA9QoAIQ7EBgAAqBAAMMUGAACpEAAQxgYAAKgQADDHBgEA1goAIc4GQADaCgAhzwZAANoKACHlBgEA1woAIf8GAQDWCgAhjQcBANYKACGOBwEA1woAIY8HAgDYCgAhkAcIAPUKACGRBwgA9QoAIZIHCAD1CgAhCscGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAhjQcBAMUMACGOBwEAxgwAIY8HAgDHDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhDTYAAK4QACA3AACsEAAgOQAArRAAIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAhjQcBAMUMACGOBwEAxgwAIY8HAgDHDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhCw8AAMEQADAQAADFEAAw0QgAAMIQADDSCAAAwxAAMNMIAADEEAAg1AgAAO0NADDVCAAA7Q0AMNYIAADtDQAw1wgAAO0NADDYCAAAxhAAMNkIAADwDQAwCw8AALgQADAQAAC8EAAw0QgAALkQADDSCAAAuhAAMNMIAAC7EAAg1AgAALINADDVCAAAsg0AMNYIAACyDQAw1wgAALINADDYCAAAvRAAMNkIAAC1DQAwCw8AAK8QADAQAACzEAAw0QgAALAQADDSCAAAsRAAMNMIAACyEAAg1AgAAPkMADDVCAAA-QwAMNYIAAD5DAAw1wgAAPkMADDYCAAAtBAAMNkIAAD8DAAwCisAAIUNACAwAACDDgAgMQAAhA0AIMcGAQAAAAH_BgEAAAABjwcCAAAAAaoHCAAAAAG5BwEAAAABugcBAAAAAbsHCAAAAAECAAAAYAAgDwAAtxAAIAMAAABgACAPAAC3EAAgEAAAthAAIAEIAAC8FAAwAgAAAGAAIAgAALYQACACAAAA_QwAIAgAALUQACAHxwYBAMUMACH_BgEAxQwAIY8HAgDHDAAhqgcIAPAMACG5BwEAxQwAIboHAQDFDAAhuwcIAPAMACEKKwAAgQ0AIDAAAIEOACAxAACADQAgxwYBAMUMACH_BgEAxQwAIY8HAgDHDAAhqgcIAPAMACG5BwEAxQwAIboHAQDFDAAhuwcIAPAMACEKKwAAhQ0AIDAAAIMOACAxAACEDQAgxwYBAAAAAf8GAQAAAAGPBwIAAAABqgcIAAAAAbkHAQAAAAG6BwEAAAABuwcIAAAAAQgrAAC8DQAgOAAAjBAAIMcGAQAAAAHOBkAAAAABzwZAAAAAAf8GAQAAAAGPBwIAAAABpQgBAAAAAQIAAAB3ACAPAADAEAAgAwAAAHcAIA8AAMAQACAQAAC_EAAgAQgAALsUADACAAAAdwAgCAAAvxAAIAIAAAC2DQAgCAAAvhAAIAbHBgEAxQwAIc4GQADJDAAhzwZAAMkMACH_BgEAxQwAIY8HAgDHDAAhpQgBAMUMACEIKwAAuQ0AIDgAAIoQACDHBgEAxQwAIc4GQADJDAAhzwZAAMkMACH_BgEAxQwAIY8HAgDHDAAhpQgBAMUMACEIKwAAvA0AIDgAAIwQACDHBgEAAAABzgZAAAAAAc8GQAAAAAH_BgEAAAABjwcCAAAAAaUIAQAAAAEPIwAAhw4AICsAAIUOACAtAACsDwAgNgAAiA4AIMcGAQAAAAH_BgEAAAABjwcCAAAAAZkHAAAAxgcCowcBAAAAAaoHCAAAAAG8BwEAAAABwgcIAAAAAcMHCAAAAAHEBwgAAAABxgcCAAAAAQIAAABOACAPAADJEAAgAwAAAE4AIA8AAMkQACAQAADIEAAgAQgAALoUADACAAAATgAgCAAAyBAAIAIAAADxDQAgCAAAxxAAIAvHBgEAxQwAIf8GAQDFDAAhjwcCAMcMACGZBwAAyw3GByKjBwEAxQwAIaoHCADwDAAhvAcBAMUMACHCBwgA8w0AIcMHCADwDAAhxAcIAPAMACHGBwIAxwwAIQ8jAAD3DQAgKwAA9Q0AIC0AAKoPACA2AAD4DQAgxwYBAMUMACH_BgEAxQwAIY8HAgDHDAAhmQcAAMsNxgciowcBAMUMACGqBwgA8AwAIbwHAQDFDAAhwgcIAPMNACHDBwgA8AwAIcQHCADwDAAhxgcCAMcMACEPIwAAhw4AICsAAIUOACAtAACsDwAgNgAAiA4AIMcGAQAAAAH_BgEAAAABjwcCAAAAAZkHAAAAxgcCowcBAAAAAaoHCAAAAAG8BwEAAAABwgcIAAAAAcMHCAAAAAHEBwgAAAABxgcCAAAAAQ02AADNEAAgNwAAyxAAIDkAAMwQACDHBgEAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAABjQcBAAAAAY4HAQAAAAGPBwIAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABBA8AAMEQADDRCAAAwhAAMNMIAADEEAAg1wgAAO0NADAEDwAAuBAAMNEIAAC5EAAw0wgAALsQACDXCAAAsg0AMAQPAACvEAAw0QgAALAQADDTCAAAshAAINcIAAD5DAAwJScAANIQACApAADTEAAgKgAA1BAAIDYAANwQACA3AADXEAAgOQAA2BAAIDoAANUQACA7AADWEAAgPAAA2RAAID0AANoQACA-AADbEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCkBwEAAAABpQcBAAAAAaYHAQAAAAEB1AgBAAAABAHUCAEAAAAEAdQIAAAAqAcIAw8AALgUACDRCAAAuRQAINcIAAA2ACADDwAAthQAINEIAAC3FAAg1wgAAJ8DACADDwAAtBQAINEIAAC1FAAg1wgAAOEJACAEDwAAoRAAMNEIAACiEAAw0wgAAKQQACDXCAAApRAAMAQPAACWEAAw0QgAAJcQADDTCAAAmRAAINcIAACeDQAwBA8AAI0QADDRCAAAjhAAMNMIAACQEAAg1wgAAO0NADAEDwAAghAAMNEIAACDEAAw0wgAAIUQACDXCAAAsg0AMAQPAAD3DwAw0QgAAPgPADDTCAAA-g8AINcIAACVDwAwBA8AAOwPADDRCAAA7Q8AMNMIAADvDwAg1wgAAPAOADAEDwAA4Q8AMNEIAADiDwAw0wgAAOQPACDXCAAA0Q4AMAQPAADYDwAw0QgAANkPADDTCAAA2w8AINcIAAD5DAAwBA8AAMoPADDRCAAAyw8AMNMIAADNDwAg1wgAAM4PADAEDwAArQ8AMNEIAACuDwAw0wgAALAPACDXCAAAsQ8AMAQPAACiDwAw0QgAAKMPADDTCAAApQ8AINcIAADtDQAwBA8AAPoOADDRCAAA-w4AMNMIAAD9DgAg1wgAAP4OADAEDwAA7A4AMNEIAADtDgAw0wgAAO8OACDXCAAA8A4AMAQPAADhDgAw0QgAAOIOADDTCAAA5A4AINcIAADDDQAwBA8AAM0OADDRCAAAzg4AMNMIAADQDgAg1wgAANEOADAEDwAAtA4AMNEIAAC1DgAw0wgAALcOACDXCAAAuA4AMAQPAACmDgAw0QgAAKcOADDTCAAAqQ4AINcIAACqDgAwBA8AAJ0OADDRCAAAng4AMNMIAACgDgAg1wgAAOoMADAJxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAesGAQAAAAGFByAAAAABhgdAAAAAAcMIAQAAAAHECAEAAAABAgAAABoAIA8AAOcQACADAAAAKwAgDwAA5xAAIBAAAOsQACALAAAAKwAgCAAA6xAAIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6wYBAMUMACGFByAAyAwAIYYHQADbDAAhwwgBAMYMACHECAEAxgwAIQnHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIcMIAQDGDAAhxAgBAMYMACEMxwYBAAAAAc4GQAAAAAHPBkAAAAABsAgBAAAAAbEIAQAAAAGyCAEAAAABswgBAAAAAbQIAQAAAAG1CEAAAAABtghAAAAAAbcIAQAAAAG4CAEAAAABAgAAACkAIA8AAPcQACADAAAAKQAgDwAA9xAAIBAAAPYQACABCAAAsxQAMBEeAADoCgAgxAYAAKwMADDFBgAAJwAQxgYAAKwMADDHBgEAAAABzgZAANoKACHPBkAA2goAIf4GAQDWCgAhsAgBANYKACGxCAEA1goAIbIIAQDXCgAhswgBANcKACG0CAEA1woAIbUIQACFCwAhtghAAIULACG3CAEA1woAIbgIAQDXCgAhAgAAACkAIAgAAPYQACACAAAA9BAAIAgAAPUQACAQxAYAAPMQADDFBgAA9BAAEMYGAADzEAAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_gYBANYKACGwCAEA1goAIbEIAQDWCgAhsggBANcKACGzCAEA1woAIbQIAQDXCgAhtQhAAIULACG2CEAAhQsAIbcIAQDXCgAhuAgBANcKACEQxAYAAPMQADDFBgAA9BAAEMYGAADzEAAwxwYBANYKACHOBkAA2goAIc8GQADaCgAh_gYBANYKACGwCAEA1goAIbEIAQDWCgAhsggBANcKACGzCAEA1woAIbQIAQDXCgAhtQhAAIULACG2CEAAhQsAIbcIAQDXCgAhuAgBANcKACEMxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhsAgBAMUMACGxCAEAxQwAIbIIAQDGDAAhswgBAMYMACG0CAEAxgwAIbUIQADbDAAhtghAANsMACG3CAEAxgwAIbgIAQDGDAAhDMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIbAIAQDFDAAhsQgBAMUMACGyCAEAxgwAIbMIAQDGDAAhtAgBAMYMACG1CEAA2wwAIbYIQADbDAAhtwgBAMYMACG4CAEAxgwAIQzHBgEAAAABzgZAAAAAAc8GQAAAAAGwCAEAAAABsQgBAAAAAbIIAQAAAAGzCAEAAAABtAgBAAAAAbUIQAAAAAG2CEAAAAABtwgBAAAAAbgIAQAAAAEHxwYBAAAAAc4GQAAAAAHPBkAAAAABrwhAAAAAAbkIAQAAAAG6CAEAAAABuwgBAAAAAQIAAAAlACAPAACDEQAgAwAAACUAIA8AAIMRACAQAACCEQAgAQgAALIUADAMHgAA6AoAIMQGAACtDAAwxQYAACMAEMYGAACtDAAwxwYBAAAAAc4GQADaCgAhzwZAANoKACH-BgEA1goAIa8IQADaCgAhuQgBAAAAAboIAQDXCgAhuwgBANcKACECAAAAJQAgCAAAghEAIAIAAACAEQAgCAAAgREAIAvEBgAA_xAAMMUGAACAEQAQxgYAAP8QADDHBgEA1goAIc4GQADaCgAhzwZAANoKACH-BgEA1goAIa8IQADaCgAhuQgBANYKACG6CAEA1woAIbsIAQDXCgAhC8QGAAD_EAAwxQYAAIARABDGBgAA_xAAMMcGAQDWCgAhzgZAANoKACHPBkAA2goAIf4GAQDWCgAhrwhAANoKACG5CAEA1goAIboIAQDXCgAhuwgBANcKACEHxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhrwhAAMkMACG5CAEAxQwAIboIAQDGDAAhuwgBAMYMACEHxwYBAMUMACHOBkAAyQwAIc8GQADJDAAhrwhAAMkMACG5CAEAxQwAIboIAQDGDAAhuwgBAMYMACEHxwYBAAAAAc4GQAAAAAHPBkAAAAABrwhAAAAAAbkIAQAAAAG6CAEAAAABuwgBAAAAARUfAACFEQAgIAAAhhEAICEAAIcRACAjAACIEQAgLgAAjBEAIDUAAIkRACA4AACKEQAgOwAAixEAIEUAAI0RACDHBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAQQPAAD4EAAw0QgAAPkQADDTCAAA-xAAINcIAAD8EAAwBA8AAOwQADDRCAAA7RAAMNMIAADvEAAg1wgAAPAQADADDwAA5xAAINEIAADoEAAg1wgAABoAIAMPAACPDgAg0QgAAJAOACDXCAAAsAkAIAQPAAC_DQAw0QgAAMANADDTCAAAwg0AINcIAADDDQAwAw8AAKgNACDRCAAAqQ0AINcIAAC3AwAgBA8AAJoNADDRCAAAmw0AMNMIAACdDQAg1wgAAJ4NADAEDwAAiw0AMNEIAACMDQAw0wgAAI4NACDXCAAAjw0AMAQPAADmDAAw0QgAAOcMADDTCAAA6QwAINcIAADqDAAwAdQIAQAAAAQEDwAAzwwAMNEIAADQDAAw0wgAANIMACDXCAAA0wwAMAAAAAAAAAALDwAAmBEAMBAAAJwRADDRCAAAmREAMNIIAACaEQAw0wgAAJsRACDUCAAAsQ8AMNUIAACxDwAw1ggAALEPADDXCAAAsQ8AMNgIAACdEQAw2QgAALQPADAlIwAAohEAICcAANIQACApAADTEAAgNgAA3BAAIDcAANcQACA5AADYEAAgOgAA1RAAIDsAANYQACA8AADZEAAgPQAA2hAAID4AANsQACBAAADdEAAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGOBwEAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABkwcBAAAAAZQHAQAAAAGVBwAAzxAAIJYHAQAAAAGXBwIAAAABmQcAAACZBwKbBwAAAJsHApwHgAAAAAGdBwAA0BAAIJ8HAAAAnwcCoAcIAAAAAaEHIAAAAAGiBwAA0RAAIKMHAQAAAAGkBwEAAAABpQcBAAAAAQIAAAAxACAPAAChEQAgAwAAADEAIA8AAKERACAQAACfEQAgAQgAALEUADACAAAAMQAgCAAAnxEAIAIAAAC1DwAgCAAAnhEAIBnHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDFDAAhjgcBAMYMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACGTBwEAxQwAIZQHAQDFDAAhlQcAALcPACCWBwEAxgwAIZcHAgDHDAAhmQcAALgPmQcimwcAALkPmwcinAeAAAAAAZ0HAAC6DwAgnwcAALsPnwcioAcIAPAMACGhByAAyAwAIaIHAAC8DwAgowcBAMUMACGkBwEAxQwAIaUHAQDGDAAhJSMAAKARACAnAAC-DwAgKQAAvw8AIDYAAMgPACA3AADDDwAgOQAAxA8AIDoAAMEPACA7AADCDwAgPAAAxQ8AID0AAMYPACA-AADHDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACEFDwAArBQAIBAAAK8UACDRCAAArRQAINIIAACuFAAg1wgAALAJACAlIwAAohEAICcAANIQACApAADTEAAgNgAA3BAAIDcAANcQACA5AADYEAAgOgAA1RAAIDsAANYQACA8AADZEAAgPQAA2hAAID4AANsQACBAAADdEAAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGOBwEAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABkwcBAAAAAZQHAQAAAAGVBwAAzxAAIJYHAQAAAAGXBwIAAAABmQcAAACZBwKbBwAAAJsHApwHgAAAAAGdBwAA0BAAIJ8HAAAAnwcCoAcIAAAAAaEHIAAAAAGiBwAA0RAAIKMHAQAAAAGkBwEAAAABpQcBAAAAAQMPAACsFAAg0QgAAK0UACDXCAAAsAkAIAQPAACYEQAw0QgAAJkRADDTCAAAmxEAINcIAACxDwAwAAAAAAAAAAAABQ8AAKcUACAQAACqFAAg0QgAAKgUACDSCAAAqRQAINcIAAAgACADDwAApxQAINEIAACoFAAg1wgAACAAIA0dAADbEwAgHwAA3BMAICAAAN0TACAhAADeEwAgIwAAyBMAIC4AAM4TACA1AACzEQAgOAAAzBMAIDsAANoTACBFAAC3EQAg5QYAAL8MACCGBwAAvwwAIMAIAAC_DAAgAAAAAAAAAAAAAAAAAAAAAAAABdQIAgAAAAHaCAIAAAAB2wgCAAAAAdwIAgAAAAHdCAIAAAABAAAAAAAAAAAAAAAAAAUPAACiFAAgEAAApRQAINEIAACjFAAg0ggAAKQUACDXCAAAMQAgAw8AAKIUACDRCAAAoxQAINcIAAAxACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1AgAAAD9BwIFDwAAnRQAIBAAAKAUACDRCAAAnhQAINIIAACfFAAg1wgAADYAIAMPAACdFAAg0QgAAJ4UACDXCAAANgAgAAAAAdQIAAAA_wcCAdQIAAAAgQgCAAAAAAAAAAAFDwAAmBQAIBAAAJsUACDRCAAAmRQAINIIAACaFAAg1wgAADEAIAMPAACYFAAg0QgAAJkUACDXCAAAMQAgAAAACw8AAKESADAQAAClEgAw0QgAAKISADDSCAAAoxIAMNMIAACkEgAg1AgAAM4PADDVCAAAzg8AMNYIAADODwAw1wgAAM4PADDYCAAAphIAMNkIAADRDwAwBSsAAJwSACAtAgAAAAHHBgEAAAABzgZAAAAAAf8GAQAAAAECAAAAkgEAIA8AAKkSACADAAAAkgEAIA8AAKkSACAQAACoEgAgAQgAAJcUADACAAAAkgEAIAgAAKgSACACAAAA0g8AIAgAAKcSACAELQIAxwwAIccGAQDFDAAhzgZAAMkMACH_BgEAxQwAIQUrAACbEgAgLQIAxwwAIccGAQDFDAAhzgZAAMkMACH_BgEAxQwAIQUrAACcEgAgLQIAAAABxwYBAAAAAc4GQAAAAAH_BgEAAAABBA8AAKESADDRCAAAohIAMNMIAACkEgAg1wgAAM4PADAAAAAAAAAAAAAAAAAAAAUPAACSFAAgEAAAlRQAINEIAACTFAAg0ggAAJQUACDXCAAAsAkAIAMPAACSFAAg0QgAAJMUACDXCAAAsAkAIAAAAAAAAAAAAAAABQ8AAI0UACAQAACQFAAg0QgAAI4UACDSCAAAjxQAINcIAACwCQAgAw8AAI0UACDRCAAAjhQAINcIAACwCQAgAAAAAAAAAAAHDwAAhRQAIBAAAIsUACDRCAAAhhQAINIIAACKFAAg1QgAADMAINYIAAAzACDXCAAANgAgCw8AAOkSADAQAADuEgAw0QgAAOoSADDSCAAA6xIAMNMIAADsEgAg1AgAAO0SADDVCAAA7RIAMNYIAADtEgAw1wgAAO0SADDYCAAA7xIAMNkIAADwEgAwCw8AAOASADAQAADkEgAw0QgAAOESADDSCAAA4hIAMNMIAADjEgAg1AgAALEPADDVCAAAsQ8AMNYIAACxDwAw1wgAALEPADDYCAAA5RIAMNkIAAC0DwAwCw8AANQSADAQAADZEgAw0QgAANUSADDSCAAA1hIAMNMIAADXEgAg1AgAANgSADDVCAAA2BIAMNYIAADYEgAw1wgAANgSADDYCAAA2hIAMNkIAADbEgAwBS0CAAAAAccGAQAAAAHOBkAAAAABzwZAAAAAAf0HAAAA_QcCAgAAADsAIA8AAN8SACADAAAAOwAgDwAA3xIAIBAAAN4SACABCAAAiRQAMAonAACeDAAgLQIA2AoAIcQGAACcDAAwxQYAADkAEMYGAACcDAAwxwYBAAAAAc4GQADaCgAhzwZAANoKACGkBwEA1goAIf0HAACdDP0HIgIAAAA7ACAIAADeEgAgAgAAANwSACAIAADdEgAgCS0CANgKACHEBgAA2xIAMMUGAADcEgAQxgYAANsSADDHBgEA1goAIc4GQADaCgAhzwZAANoKACGkBwEA1goAIf0HAACdDP0HIgktAgDYCgAhxAYAANsSADDFBgAA3BIAEMYGAADbEgAwxwYBANYKACHOBkAA2goAIc8GQADaCgAhpAcBANYKACH9BwAAnQz9ByIFLQIAxwwAIccGAQDFDAAhzgZAAMkMACHPBkAAyQwAIf0HAACLEv0HIgUtAgDHDAAhxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_QcAAIsS_QciBS0CAAAAAccGAQAAAAHOBkAAAAABzwZAAAAAAf0HAAAA_QcCJSMAAKIRACApAADTEAAgKgAA1BAAIDYAANwQACA3AADXEAAgOQAA2BAAIDoAANUQACA7AADWEAAgPAAA2RAAID0AANoQACA-AADbEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpQcBAAAAAaYHAQAAAAECAAAAMQAgDwAA6BIAIAMAAAAxACAPAADoEgAgEAAA5xIAIAEIAACIFAAwAgAAADEAIAgAAOcSACACAAAAtQ8AIAgAAOYSACAZxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpQcBAMYMACGmBwEAxgwAISUjAACgEQAgKQAAvw8AICoAAMAPACA2AADIDwAgNwAAww8AIDkAAMQPACA6AADBDwAgOwAAwg8AIDwAAMUPACA9AADGDwAgPgAAxw8AIEAAAMkPACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDFDAAhjgcBAMYMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACGTBwEAxQwAIZQHAQDFDAAhlQcAALcPACCWBwEAxgwAIZcHAgDHDAAhmQcAALgPmQcimwcAALkPmwcinAeAAAAAAZ0HAAC6DwAgnwcAALsPnwcioAcIAPAMACGhByAAyAwAIaIHAAC8DwAgowcBAMUMACGlBwEAxgwAIaYHAQDGDAAhJSMAAKIRACApAADTEAAgKgAA1BAAIDYAANwQACA3AADXEAAgOQAA2BAAIDoAANUQACA7AADWEAAgPAAA2RAAID0AANoQACA-AADbEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpQcBAAAAAaYHAQAAAAELJQAA9RIAICYAAPYSACAoAAD3EgAgxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAABkwcBAAAAAaMIAQAAAAECAAAANgAgDwAA9BIAIAMAAAA2ACAPAAD0EgAgEAAA8xIAIAEIAACHFAAwECQAAKAMACAlAAChDAAgJgAA4woAICgAAKIMACDEBgAAnwwAMMUGAAAzABDGBgAAnwwAMMcGAQAAAAHIBgEAAAABzQYgANkKACHOBkAA2goAIc8GQADaCgAh5QYBANcKACGTBwEAAAABowgBANcKACGkCAEA1woAIQIAAAA2ACAIAADzEgAgAgAAAPESACAIAADyEgAgDMQGAADwEgAwxQYAAPESABDGBgAA8BIAMMcGAQDWCgAhyAYBANYKACHNBiAA2QoAIc4GQADaCgAhzwZAANoKACHlBgEA1woAIZMHAQDWCgAhowgBANcKACGkCAEA1woAIQzEBgAA8BIAMMUGAADxEgAQxgYAAPASADDHBgEA1goAIcgGAQDWCgAhzQYgANkKACHOBkAA2goAIc8GQADaCgAh5QYBANcKACGTBwEA1goAIaMIAQDXCgAhpAgBANcKACEIxwYBAMUMACHIBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAhkwcBAMUMACGjCAEAxgwAIQslAADREgAgJgAA0hIAICgAANMSACDHBgEAxQwAIcgGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh5QYBAMYMACGTBwEAxQwAIaMIAQDGDAAhCyUAAPUSACAmAAD2EgAgKAAA9xIAIMcGAQAAAAHIBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB5QYBAAAAAZMHAQAAAAGjCAEAAAABBA8AAOkSADDRCAAA6hIAMNMIAADsEgAg1wgAAO0SADAEDwAA4BIAMNEIAADhEgAw0wgAAOMSACDXCAAAsQ8AMAQPAADUEgAw0QgAANUSADDTCAAA1xIAINcIAADYEgAwAw8AAIUUACDRCAAAhhQAINcIAAA2ACAAAAAAAAAAAAUPAACAFAAgEAAAgxQAINEIAACBFAAg0ggAAIIUACDXCAAAIAAgAw8AAIAUACDRCAAAgRQAINcIAAAgACAAAAAACw8AAIgTADAQAACMEwAw0QgAAIkTADDSCAAAihMAMNMIAACLEwAg1AgAALEPADDVCAAAsQ8AMNYIAACxDwAw1wgAALEPADDYCAAAjRMAMNkIAAC0DwAwJSMAAKIRACAnAADSEAAgKgAA1BAAIDYAANwQACA3AADXEAAgOQAA2BAAIDoAANUQACA7AADWEAAgPAAA2RAAID0AANoQACA-AADbEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpAcBAAAAAaYHAQAAAAECAAAAMQAgDwAAkBMAIAMAAAAxACAPAACQEwAgEAAAjxMAIAEIAAD_EwAwAgAAADEAIAgAAI8TACACAAAAtQ8AIAgAAI4TACAZxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpAcBAMUMACGmBwEAxgwAISUjAACgEQAgJwAAvg8AICoAAMAPACA2AADIDwAgNwAAww8AIDkAAMQPACA6AADBDwAgOwAAwg8AIDwAAMUPACA9AADGDwAgPgAAxw8AIEAAAMkPACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDFDAAhjgcBAMYMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACGTBwEAxQwAIZQHAQDFDAAhlQcAALcPACCWBwEAxgwAIZcHAgDHDAAhmQcAALgPmQcimwcAALkPmwcinAeAAAAAAZ0HAAC6DwAgnwcAALsPnwcioAcIAPAMACGhByAAyAwAIaIHAAC8DwAgowcBAMUMACGkBwEAxQwAIaYHAQDGDAAhJSMAAKIRACAnAADSEAAgKgAA1BAAIDYAANwQACA3AADXEAAgOQAA2BAAIDoAANUQACA7AADWEAAgPAAA2RAAID0AANoQACA-AADbEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpAcBAAAAAaYHAQAAAAEEDwAAiBMAMNEIAACJEwAw0wgAAIsTACDXCAAAsQ8AMAAAAAAAAAAAAAAAAAUPAAD6EwAgEAAA_RMAINEIAAD7EwAg0ggAAPwTACDXCAAAIAAgAw8AAPoTACDRCAAA-xMAINcIAAAgACAAAAAFDwAA9RMAIBAAAPgTACDRCAAA9hMAINIIAAD3EwAg1wgAACAAIAMPAAD1EwAg0QgAAPYTACDXCAAAIAAgAAAABw8AAPATACAQAADzEwAg0QgAAPETACDSCAAA8hMAINUIAAAcACDWCAAAHAAg1wgAAJIKACADDwAA8BMAINEIAADxEwAg1wgAAJIKACAAAAAFDwAA6xMAIBAAAO4TACDRCAAA7BMAINIIAADtEwAg1wgAANwBACADDwAA6xMAINEIAADsEwAg1wgAANwBACAAAAALDwAAsxMAMBAAALgTADDRCAAAtBMAMNIIAAC1EwAw0wgAALYTACDUCAAAtxMAMNUIAAC3EwAw1ggAALcTADDXCAAAtxMAMNgIAAC5EwAw2QgAALoTADAExwYBAAAAAc4GQAAAAAHPBkAAAAABrggBAAAAAQIAAADgAQAgDwAAvhMAIAMAAADgAQAgDwAAvhMAIBAAAL0TACABCAAA6hMAMApWAADvCwAgxAYAAO4LADDFBgAA3gEAEMYGAADuCwAwxwYBAAAAAc4GQADaCgAhzwZAANoKACGuCAEA1goAIcEIAQDWCgAhwggAAO0LACACAAAA4AEAIAgAAL0TACACAAAAuxMAIAgAALwTACAIxAYAALoTADDFBgAAuxMAEMYGAAC6EwAwxwYBANYKACHOBkAA2goAIc8GQADaCgAhrggBANYKACHBCAEA1goAIQjEBgAAuhMAMMUGAAC7EwAQxgYAALoTADDHBgEA1goAIc4GQADaCgAhzwZAANoKACGuCAEA1goAIcEIAQDWCgAhBMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIa4IAQDFDAAhBMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIa4IAQDFDAAhBMcGAQAAAAHOBkAAAAABzwZAAAAAAa4IAQAAAAEEDwAAsxMAMNEIAAC0EwAw0wgAALYTACDXCAAAtxMAMAABVwAAwBMAIAAAAAUPAADlEwAgEAAA6BMAINEIAADmEwAg0ggAAOcTACDXCAAAIAAgAw8AAOUTACDRCAAA5hMAINcIAAAgACACIwAAyBMAIEIAALYRACANIgAArxEAICYAAKQRACA3AACwEQAgPAAAsREAID0AALIRACA-AAC0EQAgQQAAsxEAIEIAALYRACBDAAC1EQAgRAAAtxEAIOgGAAC_DAAg6QYAAL8MACD1BgAAvwwAIAADJgAAqxIAIIUIAAC_DAAghggAAL8MACASIwAAyBMAICcAANQTACApAADXEwAgKgAA2BMAIDYAANMTACA3AACwEQAgOQAAgxMAIDoAANkTACA7AADaEwAgPAAAyRMAID0AALIRACA-AAC0EQAgQAAAqxIAII4HAAC_DAAglgcAAL8MACCcBwAAvwwAIKUHAAC_DAAgpgcAAL8MACACHgAArxEAICwAAIMTACAGKwAAyxMAIDYAANMTACA3AACwEQAgOQAAgxMAIOUGAAC_DAAgjgcAAL8MACAABCMAAMgTACAmAADJEwAgNQAAsxEAIJ4IAAC_DAAgBSMAAMgTACAsAADTEwAgLQAA0hMAIC8AAK8RACDBBwAAvwwAIAcjAADIEwAgKwAAyxMAIC0AANITACAyAADNEwAgNgAA0xMAIKgHAAC_DAAgwgcAAL8MACAYHgAArxEAICMAAMgTACAsAACwEQAgLgAAzhMAIDMAALcRACA0AADPEwAg6gYAAL8MACDrBgAAvwwAIOwGAAC_DAAg_gYAAL8MACCjBwAAvwwAIMgHAAC_DAAgzgcAAL8MACDQBwAAvwwAINEHAAC_DAAg0gcAAL8MACDTBwAAvwwAINUHAAC_DAAg1gcAAL8MACDXBwAAvwwAINgHAAC_DAAg2QcAAL8MACDaBwAAvwwAINsHAAC_DAAgAAckAADUEwAgJQAA1RMAICYAAKQRACAoAADWEwAg5QYAAL8MACCjCAAAvwwAIKQIAAC_DAAgAAABJgAApBEAIAEmAACkEQAgAAABHAAAkBEAIAAABB4AAK8RACCGBwAAvwwAIMMIAAC_DAAgxAgAAL8MACAAAAAAAAHUCAAAAMsIAhYdAACpEwAgHwAAhREAICAAAIYRACAjAACIEQAgLgAAjBEAIDUAAIkRACA4AACKEQAgOwAAixEAIEUAAI0RACDHBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAcAIAQAAAAECAAAAIAAgDwAA5RMAIAMAAAAeACAPAADlEwAgEAAA6RMAIBgAAAAeACAIAADpEwAgHQAAqBMAIB8AAN0MACAgAADeDAAgIwAA4AwAIC4AAOQMACA1AADhDAAgOAAA4gwAIDsAAOMMACBFAADlDAAgxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACHACAEAxgwAIRYdAACoEwAgHwAA3QwAICAAAN4MACAjAADgDAAgLgAA5AwAIDUAAOEMACA4AADiDAAgOwAA4wwAIEUAAOUMACDHBgEAxQwAIcgGAQDFDAAhyQYAANkMvggizgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh6wYBAMUMACGFByAAyAwAIYYHQADbDAAhmQcAANoMvwgivAggAMgMACG_CCAAyAwAIcAIAQDGDAAhBMcGAQAAAAHOBkAAAAABzwZAAAAAAa4IAQAAAAEExwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAQIAAADcAQAgDwAA6xMAIAMAAADkAQAgDwAA6xMAIBAAAO8TACAGAAAA5AEAIAgAAO8TACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIQTHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIQXHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB2wYAAI4RACACAAAAkgoAIA8AAPATACADAAAAHAAgDwAA8BMAIBAAAPQTACAHAAAAHAAgCAAA9BMAIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh2wYAAM0MACAFxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHbBgAAzQwAIBYdAACpEwAgIAAAhhEAICEAAIcRACAjAACIEQAgLgAAjBEAIDUAAIkRACA4AACKEQAgOwAAixEAIEUAAI0RACDHBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAcAIAQAAAAECAAAAIAAgDwAA9RMAIAMAAAAeACAPAAD1EwAgEAAA-RMAIBgAAAAeACAIAAD5EwAgHQAAqBMAICAAAN4MACAhAADfDAAgIwAA4AwAIC4AAOQMACA1AADhDAAgOAAA4gwAIDsAAOMMACBFAADlDAAgxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACHACAEAxgwAIRYdAACoEwAgIAAA3gwAICEAAN8MACAjAADgDAAgLgAA5AwAIDUAAOEMACA4AADiDAAgOwAA4wwAIEUAAOUMACDHBgEAxQwAIcgGAQDFDAAhyQYAANkMvggizgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh6wYBAMUMACGFByAAyAwAIYYHQADbDAAhmQcAANoMvwgivAggAMgMACG_CCAAyAwAIcAIAQDGDAAhFh0AAKkTACAfAACFEQAgIQAAhxEAICMAAIgRACAuAACMEQAgNQAAiREAIDgAAIoRACA7AACLEQAgRQAAjREAIMcGAQAAAAHIBgEAAAAByQYAAAC-CALOBkAAAAABzwZAAAAAAeUGAQAAAAHrBgEAAAABhQcgAAAAAYYHQAAAAAGZBwAAAL8IArwIIAAAAAG_CCAAAAABwAgBAAAAAQIAAAAgACAPAAD6EwAgAwAAAB4AIA8AAPoTACAQAAD-EwAgGAAAAB4AIAgAAP4TACAdAACoEwAgHwAA3QwAICEAAN8MACAjAADgDAAgLgAA5AwAIDUAAOEMACA4AADiDAAgOwAA4wwAIEUAAOUMACDHBgEAxQwAIcgGAQDFDAAhyQYAANkMvggizgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh6wYBAMUMACGFByAAyAwAIYYHQADbDAAhmQcAANoMvwgivAggAMgMACG_CCAAyAwAIcAIAQDGDAAhFh0AAKgTACAfAADdDAAgIQAA3wwAICMAAOAMACAuAADkDAAgNQAA4QwAIDgAAOIMACA7AADjDAAgRQAA5QwAIMcGAQDFDAAhyAYBAMUMACHJBgAA2Qy-CCLOBkAAyQwAIc8GQADJDAAh5QYBAMYMACHrBgEAxQwAIYUHIADIDAAhhgdAANsMACGZBwAA2gy_CCK8CCAAyAwAIb8IIADIDAAhwAgBAMYMACEZxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGOBwEAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABkwcBAAAAAZQHAQAAAAGVBwAAzxAAIJYHAQAAAAGXBwIAAAABmQcAAACZBwKbBwAAAJsHApwHgAAAAAGdBwAA0BAAIJ8HAAAAnwcCoAcIAAAAAaEHIAAAAAGiBwAA0RAAIKMHAQAAAAGkBwEAAAABpgcBAAAAARYdAACpEwAgHwAAhREAICAAAIYRACAhAACHEQAgIwAAiBEAIC4AAIwRACA1AACJEQAgOwAAixEAIEUAAI0RACDHBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAcAIAQAAAAECAAAAIAAgDwAAgBQAIAMAAAAeACAPAACAFAAgEAAAhBQAIBgAAAAeACAIAACEFAAgHQAAqBMAIB8AAN0MACAgAADeDAAgIQAA3wwAICMAAOAMACAuAADkDAAgNQAA4QwAIDsAAOMMACBFAADlDAAgxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACHACAEAxgwAIRYdAACoEwAgHwAA3QwAICAAAN4MACAhAADfDAAgIwAA4AwAIC4AAOQMACA1AADhDAAgOwAA4wwAIEUAAOUMACDHBgEAxQwAIcgGAQDFDAAhyQYAANkMvggizgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh6wYBAMUMACGFByAAyAwAIYYHQADbDAAhmQcAANoMvwgivAggAMgMACG_CCAAyAwAIcAIAQDGDAAhDCQAAPgSACAmAAD2EgAgKAAA9xIAIMcGAQAAAAHIBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB5QYBAAAAAZMHAQAAAAGjCAEAAAABpAgBAAAAAQIAAAA2ACAPAACFFAAgCMcGAQAAAAHIBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB5QYBAAAAAZMHAQAAAAGjCAEAAAABGccGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpQcBAAAAAaYHAQAAAAEFLQIAAAABxwYBAAAAAc4GQAAAAAHPBkAAAAAB_QcAAAD9BwIDAAAAMwAgDwAAhRQAIBAAAIwUACAOAAAAMwAgCAAAjBQAICQAANASACAmAADSEgAgKAAA0xIAIMcGAQDFDAAhyAYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACHlBgEAxgwAIZMHAQDFDAAhowgBAMYMACGkCAEAxgwAIQwkAADQEgAgJgAA0hIAICgAANMSACDHBgEAxQwAIcgGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh5QYBAMYMACGTBwEAxQwAIaMIAQDGDAAhpAgBAMYMACERIgAArhEAICYAAN4QACA3AADfEAAgPQAA4RAAID4AAOMQACBBAADiEAAgQgAA5RAAIEMAAOQQACBEAADmEAAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAHpBgEAAAAB9QYBAAAAAfYGAQAAAAECAAAAsAkAIA8AAI0UACADAAAALQAgDwAAjRQAIBAAAJEUACATAAAALQAgCAAAkRQAICIAAK0RACAmAACUDgAgNwAAlQ4AID0AAJcOACA-AACZDgAgQQAAmA4AIEIAAJsOACBDAACaDgAgRAAAnA4AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMYMACHpBgEAxgwAIfUGAQDGDAAh9gYBAMUMACERIgAArREAICYAAJQOACA3AACVDgAgPQAAlw4AID4AAJkOACBBAACYDgAgQgAAmw4AIEMAAJoOACBEAACcDgAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIekGAQDGDAAh9QYBAMYMACH2BgEAxQwAIREiAACuEQAgJgAA3hAAIDcAAN8QACA8AADgEAAgPQAA4RAAID4AAOMQACBBAADiEAAgQgAA5RAAIEQAAOYQACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAekGAQAAAAH1BgEAAAAB9gYBAAAAAQIAAACwCQAgDwAAkhQAIAMAAAAtACAPAACSFAAgEAAAlhQAIBMAAAAtACAIAACWFAAgIgAArREAICYAAJQOACA3AACVDgAgPAAAlg4AID0AAJcOACA-AACZDgAgQQAAmA4AIEIAAJsOACBEAACcDgAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIekGAQDGDAAh9QYBAMYMACH2BgEAxQwAIREiAACtEQAgJgAAlA4AIDcAAJUOACA8AACWDgAgPQAAlw4AID4AAJkOACBBAACYDgAgQgAAmw4AIEQAAJwOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIfYGAQDFDAAhBC0CAAAAAccGAQAAAAHOBkAAAAAB_wYBAAAAASYjAACiEQAgJwAA0hAAICkAANMQACAqAADUEAAgNgAA3BAAIDcAANcQACA5AADYEAAgOgAA1RAAIDsAANYQACA8AADZEAAgPQAA2hAAID4AANsQACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAY4HAQAAAAGQBwgAAAABkQcIAAAAAZIHCAAAAAGTBwEAAAABlAcBAAAAAZUHAADPEAAglgcBAAAAAZcHAgAAAAGZBwAAAJkHApsHAAAAmwcCnAeAAAAAAZ0HAADQEAAgnwcAAACfBwKgBwgAAAABoQcgAAAAAaIHAADREAAgowcBAAAAAaQHAQAAAAGlBwEAAAABpgcBAAAAAQIAAAAxACAPAACYFAAgAwAAAC8AIA8AAJgUACAQAACcFAAgKAAAAC8AIAgAAJwUACAjAACgEQAgJwAAvg8AICkAAL8PACAqAADADwAgNgAAyA8AIDcAAMMPACA5AADEDwAgOgAAwQ8AIDsAAMIPACA8AADFDwAgPQAAxg8AID4AAMcPACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDFDAAhjgcBAMYMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACGTBwEAxQwAIZQHAQDFDAAhlQcAALcPACCWBwEAxgwAIZcHAgDHDAAhmQcAALgPmQcimwcAALkPmwcinAeAAAAAAZ0HAAC6DwAgnwcAALsPnwcioAcIAPAMACGhByAAyAwAIaIHAAC8DwAgowcBAMUMACGkBwEAxQwAIaUHAQDGDAAhpgcBAMYMACEmIwAAoBEAICcAAL4PACApAAC_DwAgKgAAwA8AIDYAAMgPACA3AADDDwAgOQAAxA8AIDoAAMEPACA7AADCDwAgPAAAxQ8AID0AAMYPACA-AADHDwAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpAcBAMUMACGlBwEAxgwAIaYHAQDGDAAhDCQAAPgSACAlAAD1EgAgJgAA9hIAIMcGAQAAAAHIBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB5QYBAAAAAZMHAQAAAAGjCAEAAAABpAgBAAAAAQIAAAA2ACAPAACdFAAgAwAAADMAIA8AAJ0UACAQAAChFAAgDgAAADMAIAgAAKEUACAkAADQEgAgJQAA0RIAICYAANISACDHBgEAxQwAIcgGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh5QYBAMYMACGTBwEAxQwAIaMIAQDGDAAhpAgBAMYMACEMJAAA0BIAICUAANESACAmAADSEgAgxwYBAMUMACHIBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAhkwcBAMUMACGjCAEAxgwAIaQIAQDGDAAhJiMAAKIRACAnAADSEAAgKQAA0xAAICoAANQQACA2AADcEAAgNwAA1xAAIDkAANgQACA7AADWEAAgPAAA2RAAID0AANoQACA-AADbEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpAcBAAAAAaUHAQAAAAGmBwEAAAABAgAAADEAIA8AAKIUACADAAAALwAgDwAAohQAIBAAAKYUACAoAAAALwAgCAAAphQAICMAAKARACAnAAC-DwAgKQAAvw8AICoAAMAPACA2AADIDwAgNwAAww8AIDkAAMQPACA7AADCDwAgPAAAxQ8AID0AAMYPACA-AADHDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAISYjAACgEQAgJwAAvg8AICkAAL8PACAqAADADwAgNgAAyA8AIDcAAMMPACA5AADEDwAgOwAAwg8AIDwAAMUPACA9AADGDwAgPgAAxw8AIEAAAMkPACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDFDAAhjgcBAMYMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACGTBwEAxQwAIZQHAQDFDAAhlQcAALcPACCWBwEAxgwAIZcHAgDHDAAhmQcAALgPmQcimwcAALkPmwcinAeAAAAAAZ0HAAC6DwAgnwcAALsPnwcioAcIAPAMACGhByAAyAwAIaIHAAC8DwAgowcBAMUMACGkBwEAxQwAIaUHAQDGDAAhpgcBAMYMACEWHQAAqRMAIB8AAIURACAgAACGEQAgIQAAhxEAIC4AAIwRACA1AACJEQAgOAAAihEAIDsAAIsRACBFAACNEQAgxwYBAAAAAcgGAQAAAAHJBgAAAL4IAs4GQAAAAAHPBkAAAAAB5QYBAAAAAesGAQAAAAGFByAAAAABhgdAAAAAAZkHAAAAvwgCvAggAAAAAb8IIAAAAAHACAEAAAABAgAAACAAIA8AAKcUACADAAAAHgAgDwAApxQAIBAAAKsUACAYAAAAHgAgCAAAqxQAIB0AAKgTACAfAADdDAAgIAAA3gwAICEAAN8MACAuAADkDAAgNQAA4QwAIDgAAOIMACA7AADjDAAgRQAA5QwAIMcGAQDFDAAhyAYBAMUMACHJBgAA2Qy-CCLOBkAAyQwAIc8GQADJDAAh5QYBAMYMACHrBgEAxQwAIYUHIADIDAAhhgdAANsMACGZBwAA2gy_CCK8CCAAyAwAIb8IIADIDAAhwAgBAMYMACEWHQAAqBMAIB8AAN0MACAgAADeDAAgIQAA3wwAIC4AAOQMACA1AADhDAAgOAAA4gwAIDsAAOMMACBFAADlDAAgxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACHACAEAxgwAIREiAACuEQAgNwAA3xAAIDwAAOAQACA9AADhEAAgPgAA4xAAIEEAAOIQACBCAADlEAAgQwAA5BAAIEQAAOYQACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAekGAQAAAAH1BgEAAAAB9gYBAAAAAQIAAACwCQAgDwAArBQAIAMAAAAtACAPAACsFAAgEAAAsBQAIBMAAAAtACAIAACwFAAgIgAArREAIDcAAJUOACA8AACWDgAgPQAAlw4AID4AAJkOACBBAACYDgAgQgAAmw4AIEMAAJoOACBEAACcDgAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIekGAQDGDAAh9QYBAMYMACH2BgEAxQwAIREiAACtEQAgNwAAlQ4AIDwAAJYOACA9AACXDgAgPgAAmQ4AIEEAAJgOACBCAACbDgAgQwAAmg4AIEQAAJwOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIfYGAQDFDAAhGccGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpAcBAAAAAaUHAQAAAAEHxwYBAAAAAc4GQAAAAAHPBkAAAAABrwhAAAAAAbkIAQAAAAG6CAEAAAABuwgBAAAAAQzHBgEAAAABzgZAAAAAAc8GQAAAAAGwCAEAAAABsQgBAAAAAbIIAQAAAAGzCAEAAAABtAgBAAAAAbUIQAAAAAG2CEAAAAABtwgBAAAAAbgIAQAAAAEFxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAeUGAQAAAAECAAAA4QkAIA8AALQUACAGxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAHpBgEAAAABAgAAAJ8DACAPAAC2FAAgDCQAAPgSACAlAAD1EgAgKAAA9xIAIMcGAQAAAAHIBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAAB5QYBAAAAAZMHAQAAAAGjCAEAAAABpAgBAAAAAQIAAAA2ACAPAAC4FAAgC8cGAQAAAAH_BgEAAAABjwcCAAAAAZkHAAAAxgcCowcBAAAAAaoHCAAAAAG8BwEAAAABwgcIAAAAAcMHCAAAAAHEBwgAAAABxgcCAAAAAQbHBgEAAAABzgZAAAAAAc8GQAAAAAH_BgEAAAABjwcCAAAAAaUIAQAAAAEHxwYBAAAAAf8GAQAAAAGPBwIAAAABqgcIAAAAAbkHAQAAAAG6BwEAAAABuwcIAAAAAQrHBgEAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAABjQcBAAAAAY4HAQAAAAGPBwIAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABFh0AAKkTACAfAACFEQAgIAAAhhEAICEAAIcRACAjAACIEQAgLgAAjBEAIDUAAIkRACA4AACKEQAgRQAAjREAIMcGAQAAAAHIBgEAAAAByQYAAAC-CALOBkAAAAABzwZAAAAAAeUGAQAAAAHrBgEAAAABhQcgAAAAAYYHQAAAAAGZBwAAAL8IArwIIAAAAAG_CCAAAAABwAgBAAAAAQIAAAAgACAPAAC-FAAgAwAAAB4AIA8AAL4UACAQAADCFAAgGAAAAB4AIAgAAMIUACAdAACoEwAgHwAA3QwAICAAAN4MACAhAADfDAAgIwAA4AwAIC4AAOQMACA1AADhDAAgOAAA4gwAIEUAAOUMACDHBgEAxQwAIcgGAQDFDAAhyQYAANkMvggizgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh6wYBAMUMACGFByAAyAwAIYYHQADbDAAhmQcAANoMvwgivAggAMgMACG_CCAAyAwAIcAIAQDGDAAhFh0AAKgTACAfAADdDAAgIAAA3gwAICEAAN8MACAjAADgDAAgLgAA5AwAIDUAAOEMACA4AADiDAAgRQAA5QwAIMcGAQDFDAAhyAYBAMUMACHJBgAA2Qy-CCLOBkAAyQwAIc8GQADJDAAh5QYBAMYMACHrBgEAxQwAIYUHIADIDAAhhgdAANsMACGZBwAA2gy_CCK8CCAAyAwAIb8IIADIDAAhwAgBAMYMACEGxwYBAAAAAcwGAgAAAAHOBkAAAAABzwZAAAAAAf0GAQAAAAH-BgEAAAABC8cGAQAAAAGPBwIAAAABmQcAAADGBwKjBwEAAAABqAcBAAAAAaoHCAAAAAG8BwEAAAABwgcIAAAAAcMHCAAAAAHEBwgAAAABxgcCAAAAAQUeAACCEwAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB_gYBAAAAAQIAAAC3AwAgDwAAxRQAIAMAAAC7AQAgDwAAxRQAIBAAAMkUACAHAAAAuwEAIAgAAMkUACAeAACBEwAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh_gYBAMUMACEFHgAAgRMAIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIf4GAQDFDAAhBscGAQAAAAHOBkAAAAABzwZAAAAAAY8HAgAAAAGoBwEAAAABpQgBAAAAAQ4jAADHEgAgNQAAoQ8AIMcGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAGjBwEAAAABvwcIAAAAAZsIAQAAAAGdCAAAAJ0IAp4ICAAAAAGfCAgAAAABoAhAAAAAAaEIQAAAAAECAAAAoQEAIA8AAMsUACADAAAAZAAgDwAAyxQAIBAAAM8UACAQAAAAZAAgCAAAzxQAICMAAMYSACA1AACHDwAgxwYBAMUMACHNBiAAyAwAIc4GQADJDAAhzwZAAMkMACGjBwEAxQwAIb8HCADwDAAhmwgBAMUMACGdCAAAhA-dCCKeCAgA8w0AIZ8ICADwDAAhoAhAAMkMACGhCEAAyQwAIQ4jAADGEgAgNQAAhw8AIMcGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAhowcBAMUMACG_BwgA8AwAIZsIAQDFDAAhnQgAAIQPnQginggIAPMNACGfCAgA8AwAIaAIQADJDAAhoQhAAMkMACECxwYBAAAAAdMHAQAAAAERIgAArhEAICYAAN4QACA3AADfEAAgPAAA4BAAID4AAOMQACBBAADiEAAgQgAA5RAAIEMAAOQQACBEAADmEAAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAHpBgEAAAAB9QYBAAAAAfYGAQAAAAECAAAAsAkAIA8AANEUACADAAAALQAgDwAA0RQAIBAAANUUACATAAAALQAgCAAA1RQAICIAAK0RACAmAACUDgAgNwAAlQ4AIDwAAJYOACA-AACZDgAgQQAAmA4AIEIAAJsOACBDAACaDgAgRAAAnA4AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMYMACHpBgEAxgwAIfUGAQDGDAAh9gYBAMUMACERIgAArREAICYAAJQOACA3AACVDgAgPAAAlg4AID4AAJkOACBBAACYDgAgQgAAmw4AIEMAAJoOACBEAACcDgAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIekGAQDGDAAh9QYBAMYMACH2BgEAxQwAIQrHBgEAAAABzgZAAAAAAc8GQAAAAAGNBwEAAAABjwcCAAAAAaMHAQAAAAGoBwEAAAABqQcBAAAAAaoHCAAAAAGrBwEAAAABESIAAK4RACAmAADeEAAgNwAA3xAAIDwAAOAQACA9AADhEAAgQQAA4hAAIEIAAOUQACBDAADkEAAgRAAA5hAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAAB6QYBAAAAAfUGAQAAAAH2BgEAAAABAgAAALAJACAPAADXFAAgAwAAAC0AIA8AANcUACAQAADbFAAgEwAAAC0AIAgAANsUACAiAACtEQAgJgAAlA4AIDcAAJUOACA8AACWDgAgPQAAlw4AIEEAAJgOACBCAACbDgAgQwAAmg4AIEQAAJwOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIfYGAQDFDAAhESIAAK0RACAmAACUDgAgNwAAlQ4AIDwAAJYOACA9AACXDgAgQQAAmA4AIEIAAJsOACBDAACaDgAgRAAAnA4AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMYMACHpBgEAxgwAIfUGAQDGDAAh9gYBAMUMACEexwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGTBwEAAAABlgcBAAAAAaMHAQAAAAHfBwEAAAAB4AcgAAAAAeEHIAAAAAHiByAAAAAB4wcgAAAAAeQHAADdDgAg5QcBAAAAAeYHAQAAAAHnBwEAAAAB6AcBAAAAAekHAQAAAAHqBwEAAAAB6wcBAAAAAewHAADeDgAg7QcBAAAAAe4HAQAAAAHvBwEAAAAB8AcBAAAAAfEHAADfDgAg8gcBAAAAAfMHAQAAAAH0BwIAAAABB8cGAQAAAAGPBwIAAAABqAcBAAAAAaoHCAAAAAG5BwEAAAABugcBAAAAAbsHCAAAAAEFxwYBAAAAAc0GIAAAAAHPBkAAAAABhQhAAAAAAYYIQAAAAAECAAAAogUAIA8AAN4UACADAAAApQUAIA8AAN4UACAQAADiFAAgBwAAAKUFACAIAADiFAAgxwYBAMUMACHNBiAAyAwAIc8GQADJDAAhhQhAANsMACGGCEAA2wwAIQXHBgEAxQwAIc0GIADIDAAhzwZAAMkMACGFCEAA2wwAIYYIQADbDAAhBC0CAAAAAccGAQAAAAHOBkAAAAABhAgBAAAAAQMAAABEACAPAAC0FAAgEAAA5hQAIAcAAABEACAIAADmFAAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHlBgEAxQwAIQXHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDFDAAhAwAAAEAAIA8AALYUACAQAADpFAAgCAAAAEAAIAgAAOkUACDHBgEAxQwAIcgGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh6QYBAMUMACEGxwYBAMUMACHIBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIekGAQDFDAAhAwAAADMAIA8AALgUACAQAADsFAAgDgAAADMAIAgAAOwUACAkAADQEgAgJQAA0RIAICgAANMSACDHBgEAxQwAIcgGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAh5QYBAMYMACGTBwEAxQwAIaMIAQDGDAAhpAgBAMYMACEMJAAA0BIAICUAANESACAoAADTEgAgxwYBAMUMACHIBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAhkwcBAMUMACGjCAEAxgwAIaQIAQDGDAAhGccGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCkBwEAAAABpQcBAAAAAaYHAQAAAAEhHgAA6w4AICMAAIoOACAuAACMDgAgMwAAjQ4AIDQAAI4OACDHBgEAAAABzgZAAAAAAc8GQAAAAAHqBgEAAAAB6wYBAAAAAewGAQAAAAH-BgEAAAABowcBAAAAAb4HCAAAAAG_BwgAAAABxwcCAAAAAcgHAQAAAAHKBwAAAMoHAssHCAAAAAHNBwAAAM0HAs4HAQAAAAHPBwAAAMYHAtAHAQAAAAHRBwEAAAAB0gcBAAAAAdMHAQAAAAHVBwAAANUHA9YHAQAAAAHXBwEAAAAB2AcBAAAAAdkHQAAAAAHaBwEAAAAB2wcBAAAAAQIAAABrACAPAADuFAAgAwAAAFcAIA8AAO4UACAQAADyFAAgIwAAAFcAIAgAAPIUACAeAADpDgAgIwAAzg0AIC4AANANACAzAADRDQAgNAAA0g0AIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIf4GAQDGDAAhowcBAMYMACG-BwgA8AwAIb8HCADwDAAhxwcCAMcMACHIBwEAxgwAIcoHAADJDcoHIssHCADwDAAhzQcAAMoNzQcizgcBAMYMACHPBwAAyw3GByLQBwEAxgwAIdEHAQDGDAAh0gcBAMYMACHTBwEAxgwAIdUHAADMDdUHI9YHAQDGDAAh1wcBAMYMACHYBwEAxgwAIdkHQADbDAAh2gcBAMYMACHbBwEAxgwAISEeAADpDgAgIwAAzg0AIC4AANANACAzAADRDQAgNAAA0g0AIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIf4GAQDGDAAhowcBAMYMACG-BwgA8AwAIb8HCADwDAAhxwcCAMcMACHIBwEAxgwAIcoHAADJDcoHIssHCADwDAAhzQcAAMoNzQcizgcBAMYMACHPBwAAyw3GByLQBwEAxgwAIdEHAQDGDAAh0gcBAMYMACHTBwEAxgwAIdUHAADMDdUHI9YHAQDGDAAh1wcBAMYMACHYBwEAxgwAIdkHQADbDAAh2gcBAMYMACHbBwEAxgwAIQvHBgEAAAAB_wYBAAAAAY8HAgAAAAGZBwAAAMYHAqgHAQAAAAGqBwgAAAABvAcBAAAAAcIHCAAAAAHDBwgAAAABxAcIAAAAAcYHAgAAAAEmIwAAohEAICcAANIQACApAADTEAAgKgAA1BAAIDYAANwQACA3AADXEAAgOQAA2BAAIDoAANUQACA7AADWEAAgPQAA2hAAID4AANsQACBAAADdEAAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGOBwEAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABkwcBAAAAAZQHAQAAAAGVBwAAzxAAIJYHAQAAAAGXBwIAAAABmQcAAACZBwKbBwAAAJsHApwHgAAAAAGdBwAA0BAAIJ8HAAAAnwcCoAcIAAAAAaEHIAAAAAGiBwAA0RAAIKMHAQAAAAGkBwEAAAABpQcBAAAAAaYHAQAAAAECAAAAMQAgDwAA9BQAIAMAAAAvACAPAAD0FAAgEAAA-BQAICgAAAAvACAIAAD4FAAgIwAAoBEAICcAAL4PACApAAC_DwAgKgAAwA8AIDYAAMgPACA3AADDDwAgOQAAxA8AIDoAAMEPACA7AADCDwAgPQAAxg8AID4AAMcPACBAAADJDwAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpAcBAMUMACGlBwEAxgwAIaYHAQDGDAAhJiMAAKARACAnAAC-DwAgKQAAvw8AICoAAMAPACA2AADIDwAgNwAAww8AIDkAAMQPACA6AADBDwAgOwAAwg8AID0AAMYPACA-AADHDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAIQLHBgEAAAAB_wYBAAAAARvHBgEAAAABzgZAAAAAAc8GQAAAAAHqBgEAAAAB6wYBAAAAAewGAQAAAAH-BgEAAAABowcBAAAAAb4HCAAAAAG_BwgAAAABxwcCAAAAAcgHAQAAAAHKBwAAAMoHAssHCAAAAAHNBwAAAM0HAs4HAQAAAAHPBwAAAMYHAtAHAQAAAAHRBwEAAAAB0gcBAAAAAdUHAAAA1QcD1gcBAAAAAdcHAQAAAAHYBwEAAAAB2QdAAAAAAdoHAQAAAAHbBwEAAAABC8cGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAG_BwgAAAABmwgBAAAAAZ0IAAAAnQgCnggIAAAAAZ8ICAAAAAGgCEAAAAABoQhAAAAAASYjAACiEQAgJwAA0hAAICkAANMQACAqAADUEAAgNgAA3BAAIDcAANcQACA5AADYEAAgOgAA1RAAIDsAANYQACA8AADZEAAgPgAA2xAAIEAAAN0QACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAY4HAQAAAAGQBwgAAAABkQcIAAAAAZIHCAAAAAGTBwEAAAABlAcBAAAAAZUHAADPEAAglgcBAAAAAZcHAgAAAAGZBwAAAJkHApsHAAAAmwcCnAeAAAAAAZ0HAADQEAAgnwcAAACfBwKgBwgAAAABoQcgAAAAAaIHAADREAAgowcBAAAAAaQHAQAAAAGlBwEAAAABpgcBAAAAAQIAAAAxACAPAAD8FAAgAwAAAC8AIA8AAPwUACAQAACAFQAgKAAAAC8AIAgAAIAVACAjAACgEQAgJwAAvg8AICkAAL8PACAqAADADwAgNgAAyA8AIDcAAMMPACA5AADEDwAgOgAAwQ8AIDsAAMIPACA8AADFDwAgPgAAxw8AIEAAAMkPACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDFDAAhjgcBAMYMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACGTBwEAxQwAIZQHAQDFDAAhlQcAALcPACCWBwEAxgwAIZcHAgDHDAAhmQcAALgPmQcimwcAALkPmwcinAeAAAAAAZ0HAAC6DwAgnwcAALsPnwcioAcIAPAMACGhByAAyAwAIaIHAAC8DwAgowcBAMUMACGkBwEAxQwAIaUHAQDGDAAhpgcBAMYMACEmIwAAoBEAICcAAL4PACApAAC_DwAgKgAAwA8AIDYAAMgPACA3AADDDwAgOQAAxA8AIDoAAMEPACA7AADCDwAgPAAAxQ8AID4AAMcPACBAAADJDwAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpAcBAMUMACGlBwEAxgwAIaYHAQDGDAAhCscGAQAAAAHOBkAAAAABzwZAAAAAAf8GAQAAAAGNBwEAAAABjwcCAAAAAagHAQAAAAGpBwEAAAABqgcIAAAAAasHAQAAAAEWHQAAqRMAIB8AAIURACAgAACGEQAgIQAAhxEAICMAAIgRACAuAACMEQAgOAAAihEAIDsAAIsRACBFAACNEQAgxwYBAAAAAcgGAQAAAAHJBgAAAL4IAs4GQAAAAAHPBkAAAAAB5QYBAAAAAesGAQAAAAGFByAAAAABhgdAAAAAAZkHAAAAvwgCvAggAAAAAb8IIAAAAAHACAEAAAABAgAAACAAIA8AAIIVACADAAAAHgAgDwAAghUAIBAAAIYVACAYAAAAHgAgCAAAhhUAIB0AAKgTACAfAADdDAAgIAAA3gwAICEAAN8MACAjAADgDAAgLgAA5AwAIDgAAOIMACA7AADjDAAgRQAA5QwAIMcGAQDFDAAhyAYBAMUMACHJBgAA2Qy-CCLOBkAAyQwAIc8GQADJDAAh5QYBAMYMACHrBgEAxQwAIYUHIADIDAAhhgdAANsMACGZBwAA2gy_CCK8CCAAyAwAIb8IIADIDAAhwAgBAMYMACEWHQAAqBMAIB8AAN0MACAgAADeDAAgIQAA3wwAICMAAOAMACAuAADkDAAgOAAA4gwAIDsAAOMMACBFAADlDAAgxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACHACAEAxgwAIRvHBgEAAAABzgZAAAAAAc8GQAAAAAHqBgEAAAAB6wYBAAAAAewGAQAAAAH-BgEAAAABvgcIAAAAAb8HCAAAAAHHBwIAAAAByAcBAAAAAcoHAAAAygcCywcIAAAAAc0HAAAAzQcCzgcBAAAAAc8HAAAAxgcC0AcBAAAAAdEHAQAAAAHSBwEAAAAB0wcBAAAAAdUHAAAA1QcD1gcBAAAAAdcHAQAAAAHYBwEAAAAB2QdAAAAAAdoHAQAAAAHbBwEAAAABJiMAAKIRACAnAADSEAAgKQAA0xAAICoAANQQACA2AADcEAAgNwAA1xAAIDkAANgQACA6AADVEAAgOwAA1hAAIDwAANkQACA9AADaEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpAcBAAAAAaUHAQAAAAGmBwEAAAABAgAAADEAIA8AAIgVACADAAAALwAgDwAAiBUAIBAAAIwVACAoAAAALwAgCAAAjBUAICMAAKARACAnAAC-DwAgKQAAvw8AICoAAMAPACA2AADIDwAgNwAAww8AIDkAAMQPACA6AADBDwAgOwAAwg8AIDwAAMUPACA9AADGDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAISYjAACgEQAgJwAAvg8AICkAAL8PACAqAADADwAgNgAAyA8AIDcAAMMPACA5AADEDwAgOgAAwQ8AIDsAAMIPACA8AADFDwAgPQAAxg8AIEAAAMkPACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDFDAAhjgcBAMYMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACGTBwEAxQwAIZQHAQDFDAAhlQcAALcPACCWBwEAxgwAIZcHAgDHDAAhmQcAALgPmQcimwcAALkPmwcinAeAAAAAAZ0HAAC6DwAgnwcAALsPnwcioAcIAPAMACGhByAAyAwAIaIHAAC8DwAgowcBAMUMACGkBwEAxQwAIaUHAQDGDAAhpgcBAMYMACEexwYBAAAAAc0GIAAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAH_BgEAAAABkwcBAAAAAZYHAQAAAAHfBwEAAAAB4AcgAAAAAeEHIAAAAAHiByAAAAAB4wcgAAAAAeQHAADdDgAg5QcBAAAAAeYHAQAAAAHnBwEAAAAB6AcBAAAAAekHAQAAAAHqBwEAAAAB6wcBAAAAAewHAADeDgAg7QcBAAAAAe4HAQAAAAHvBwEAAAAB8AcBAAAAAfEHAADfDgAg8gcBAAAAAfMHAQAAAAH0BwIAAAABESIAAK4RACAmAADeEAAgNwAA3xAAIDwAAOAQACA9AADhEAAgPgAA4xAAIEEAAOIQACBDAADkEAAgRAAA5hAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAAB6QYBAAAAAfUGAQAAAAH2BgEAAAABAgAAALAJACAPAACOFQAgAwAAAC0AIA8AAI4VACAQAACSFQAgEwAAAC0AIAgAAJIVACAiAACtEQAgJgAAlA4AIDcAAJUOACA8AACWDgAgPQAAlw4AID4AAJkOACBBAACYDgAgQwAAmg4AIEQAAJwOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIfYGAQDFDAAhESIAAK0RACAmAACUDgAgNwAAlQ4AIDwAAJYOACA9AACXDgAgPgAAmQ4AIEEAAJgOACBDAACaDgAgRAAAnA4AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMYMACHpBgEAxgwAIfUGAQDGDAAh9gYBAMUMACEIxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAaMHAQAAAAGqBwgAAAABiQgBAAAAAYoIQAAAAAEFxwYBAAAAAcgGAQAAAAHNBiAAAAABzgZAAAAAAc8GQAAAAAEHIwAAuhIAIMcGAQAAAAHIBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAABowcBAAAAAQIAAACoAQAgDwAAlRUAIAMAAACmAQAgDwAAlRUAIBAAAJkVACAJAAAApgEAIAgAAJkVACAjAAC5EgAgxwYBAMUMACHIBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIaMHAQDFDAAhByMAALkSACDHBgEAxQwAIcgGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAhowcBAMUMACEIxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAaQHAQAAAAGqBwgAAAABiQgBAAAAAYoIQAAAAAEIxwYBAAAAAc4GQAAAAAG8BwEAAAABvQcIAAAAAb4HCAAAAAG_BwgAAAABwAcIAAAAAcEHAQAAAAEOIwAAxxIAICYAAKAPACDHBgEAAAABzQYgAAAAAc4GQAAAAAHPBkAAAAABowcBAAAAAb8HCAAAAAGbCAEAAAABnQgAAACdCAKeCAgAAAABnwgIAAAAAaAIQAAAAAGhCEAAAAABAgAAAKEBACAPAACcFQAgESIAAK4RACAmAADeEAAgNwAA3xAAIDwAAOAQACA9AADhEAAgPgAA4xAAIEIAAOUQACBDAADkEAAgRAAA5hAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAAB6QYBAAAAAfUGAQAAAAH2BgEAAAABAgAAALAJACAPAACeFQAgESIAAK4RACAmAADeEAAgPAAA4BAAID0AAOEQACA-AADjEAAgQQAA4hAAIEIAAOUQACBDAADkEAAgRAAA5hAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAAB6QYBAAAAAfUGAQAAAAH2BgEAAAABAgAAALAJACAPAACgFQAgDisAANERACA2AADNEAAgOQAAzBAAIMcGAQAAAAHOBkAAAAABzwZAAAAAAeUGAQAAAAH_BgEAAAABjQcBAAAAAY4HAQAAAAGPBwIAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABAgAAAEoAIA8AAKIVACAmIwAAohEAICcAANIQACApAADTEAAgKgAA1BAAIDYAANwQACA5AADYEAAgOgAA1RAAIDsAANYQACA8AADZEAAgPQAA2hAAID4AANsQACBAAADdEAAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGOBwEAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABkwcBAAAAAZQHAQAAAAGVBwAAzxAAIJYHAQAAAAGXBwIAAAABmQcAAACZBwKbBwAAAJsHApwHgAAAAAGdBwAA0BAAIJ8HAAAAnwcCoAcIAAAAAaEHIAAAAAGiBwAA0RAAIKMHAQAAAAGkBwEAAAABpQcBAAAAAaYHAQAAAAECAAAAMQAgDwAApBUAIAwjAACJDQAgLQAAiA0AIC8AAN0NACDHBgEAAAABzgZAAAAAAaMHAQAAAAG8BwEAAAABvQcIAAAAAb4HCAAAAAG_BwgAAAABwAcIAAAAAcEHAQAAAAECAAAAWwAgDwAAphUAIAMAAABZACAPAACmFQAgEAAAqhUAIA4AAABZACAIAACqFQAgIwAA8wwAIC0AAPIMACAvAADbDQAgxwYBAMUMACHOBkAAyQwAIaMHAQDFDAAhvAcBAMUMACG9BwgA8AwAIb4HCADwDAAhvwcIAPAMACHABwgA8AwAIcEHAQDGDAAhDCMAAPMMACAtAADyDAAgLwAA2w0AIMcGAQDFDAAhzgZAAMkMACGjBwEAxQwAIbwHAQDFDAAhvQcIAPAMACG-BwgA8AwAIb8HCADwDAAhwAcIAPAMACHBBwEAxgwAIQfHBgEAAAAB_wYBAAAAAY8HAgAAAAGoBwEAAAABqgcIAAAAAbkHAQAAAAG7BwgAAAABAwAAAC0AIA8AAKAVACAQAACuFQAgEwAAAC0AIAgAAK4VACAiAACtEQAgJgAAlA4AIDwAAJYOACA9AACXDgAgPgAAmQ4AIEEAAJgOACBCAACbDgAgQwAAmg4AIEQAAJwOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIfYGAQDFDAAhESIAAK0RACAmAACUDgAgPAAAlg4AID0AAJcOACA-AACZDgAgQQAAmA4AIEIAAJsOACBDAACaDgAgRAAAnA4AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMYMACHpBgEAxgwAIfUGAQDGDAAh9gYBAMUMACEDAAAASAAgDwAAohUAIBAAALEVACAQAAAASAAgCAAAsRUAICsAANARACA2AACuEAAgOQAArRAAIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh_wYBAMUMACGNBwEAxQwAIY4HAQDGDAAhjwcCAMcMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACEOKwAA0BEAIDYAAK4QACA5AACtEAAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh5QYBAMYMACH_BgEAxQwAIY0HAQDFDAAhjgcBAMYMACGPBwIAxwwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIQMAAAAvACAPAACkFQAgEAAAtBUAICgAAAAvACAIAAC0FQAgIwAAoBEAICcAAL4PACApAAC_DwAgKgAAwA8AIDYAAMgPACA5AADEDwAgOgAAwQ8AIDsAAMIPACA8AADFDwAgPQAAxg8AID4AAMcPACBAAADJDwAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpAcBAMUMACGlBwEAxgwAIaYHAQDGDAAhJiMAAKARACAnAAC-DwAgKQAAvw8AICoAAMAPACA2AADIDwAgOQAAxA8AIDoAAMEPACA7AADCDwAgPAAAxQ8AID0AAMYPACA-AADHDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAIQvHBgEAAAAB_wYBAAAAAY8HAgAAAAGZBwAAAMYHAqMHAQAAAAGoBwEAAAABqgcIAAAAAcIHCAAAAAHDBwgAAAABxAcIAAAAAcYHAgAAAAEWHQAAqRMAIB8AAIURACAgAACGEQAgIQAAhxEAICMAAIgRACA1AACJEQAgOAAAihEAIDsAAIsRACBFAACNEQAgxwYBAAAAAcgGAQAAAAHJBgAAAL4IAs4GQAAAAAHPBkAAAAAB5QYBAAAAAesGAQAAAAGFByAAAAABhgdAAAAAAZkHAAAAvwgCvAggAAAAAb8IIAAAAAHACAEAAAABAgAAACAAIA8AALYVACADAAAAHgAgDwAAthUAIBAAALoVACAYAAAAHgAgCAAAuhUAIB0AAKgTACAfAADdDAAgIAAA3gwAICEAAN8MACAjAADgDAAgNQAA4QwAIDgAAOIMACA7AADjDAAgRQAA5QwAIMcGAQDFDAAhyAYBAMUMACHJBgAA2Qy-CCLOBkAAyQwAIc8GQADJDAAh5QYBAMYMACHrBgEAxQwAIYUHIADIDAAhhgdAANsMACGZBwAA2gy_CCK8CCAAyAwAIb8IIADIDAAhwAgBAMYMACEWHQAAqBMAIB8AAN0MACAgAADeDAAgIQAA3wwAICMAAOAMACA1AADhDAAgOAAA4gwAIDsAAOMMACBFAADlDAAgxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACHACAEAxgwAIQfHBgEAAAABzgZAAAAAAfkGAQAAAAH-BgEAAAABmwcAAADdBwLdBwEAAAAB3gcgAAAAARYdAACpEwAgHwAAhREAICAAAIYRACAhAACHEQAgIwAAiBEAIC4AAIwRACA1AACJEQAgOAAAihEAIDsAAIsRACDHBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAcAIAQAAAAECAAAAIAAgDwAAvBUAIAMAAAAeACAPAAC8FQAgEAAAwBUAIBgAAAAeACAIAADAFQAgHQAAqBMAIB8AAN0MACAgAADeDAAgIQAA3wwAICMAAOAMACAuAADkDAAgNQAA4QwAIDgAAOIMACA7AADjDAAgxwYBAMUMACHIBgEAxQwAIckGAADZDL4IIs4GQADJDAAhzwZAAMkMACHlBgEAxgwAIesGAQDFDAAhhQcgAMgMACGGB0AA2wwAIZkHAADaDL8IIrwIIADIDAAhvwggAMgMACHACAEAxgwAIRYdAACoEwAgHwAA3QwAICAAAN4MACAhAADfDAAgIwAA4AwAIC4AAOQMACA1AADhDAAgOAAA4gwAIDsAAOMMACDHBgEAxQwAIcgGAQDFDAAhyQYAANkMvggizgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh6wYBAMUMACGFByAAyAwAIYYHQADbDAAhmQcAANoMvwgivAggAMgMACG_CCAAyAwAIcAIAQDGDAAhCMcGAQAAAAHOBkAAAAABowcBAAAAAb0HCAAAAAG-BwgAAAABvwcIAAAAAcAHCAAAAAHBBwEAAAABAwAAAGQAIA8AAJwVACAQAADEFQAgEAAAAGQAIAgAAMQVACAjAADGEgAgJgAAhg8AIMcGAQDFDAAhzQYgAMgMACHOBkAAyQwAIc8GQADJDAAhowcBAMUMACG_BwgA8AwAIZsIAQDFDAAhnQgAAIQPnQginggIAPMNACGfCAgA8AwAIaAIQADJDAAhoQhAAMkMACEOIwAAxhIAICYAAIYPACDHBgEAxQwAIc0GIADIDAAhzgZAAMkMACHPBkAAyQwAIaMHAQDFDAAhvwcIAPAMACGbCAEAxQwAIZ0IAACED50IIp4ICADzDQAhnwgIAPAMACGgCEAAyQwAIaEIQADJDAAhAwAAAC0AIA8AAJ4VACAQAADHFQAgEwAAAC0AIAgAAMcVACAiAACtEQAgJgAAlA4AIDcAAJUOACA8AACWDgAgPQAAlw4AID4AAJkOACBCAACbDgAgQwAAmg4AIEQAAJwOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIfYGAQDFDAAhESIAAK0RACAmAACUDgAgNwAAlQ4AIDwAAJYOACA9AACXDgAgPgAAmQ4AIEIAAJsOACBDAACaDgAgRAAAnA4AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMYMACHpBgEAxgwAIfUGAQDGDAAh9gYBAMUMACEbxwYBAAAAAc4GQAAAAAHPBkAAAAAB6gYBAAAAAesGAQAAAAHsBgEAAAABowcBAAAAAb4HCAAAAAG_BwgAAAABxwcCAAAAAcgHAQAAAAHKBwAAAMoHAssHCAAAAAHNBwAAAM0HAs4HAQAAAAHPBwAAAMYHAtAHAQAAAAHRBwEAAAAB0gcBAAAAAdMHAQAAAAHVBwAAANUHA9YHAQAAAAHXBwEAAAAB2AcBAAAAAdkHQAAAAAHaBwEAAAAB2wcBAAAAAQ4rAADREQAgNgAAzRAAIDcAAMsQACDHBgEAAAABzgZAAAAAAc8GQAAAAAHlBgEAAAAB_wYBAAAAAY0HAQAAAAGOBwEAAAABjwcCAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAQIAAABKACAPAADJFQAgJiMAAKIRACAnAADSEAAgKQAA0xAAICoAANQQACA2AADcEAAgNwAA1xAAIDoAANUQACA7AADWEAAgPAAA2RAAID0AANoQACA-AADbEAAgQAAA3RAAIMcGAQAAAAHIBgEAAAABzgZAAAAAAc8GQAAAAAHoBgEAAAABjgcBAAAAAZAHCAAAAAGRBwgAAAABkgcIAAAAAZMHAQAAAAGUBwEAAAABlQcAAM8QACCWBwEAAAABlwcCAAAAAZkHAAAAmQcCmwcAAACbBwKcB4AAAAABnQcAANAQACCfBwAAAJ8HAqAHCAAAAAGhByAAAAABogcAANEQACCjBwEAAAABpAcBAAAAAaUHAQAAAAGmBwEAAAABAgAAADEAIA8AAMsVACADAAAASAAgDwAAyRUAIBAAAM8VACAQAAAASAAgCAAAzxUAICsAANARACA2AACuEAAgNwAArBAAIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh_wYBAMUMACGNBwEAxQwAIY4HAQDGDAAhjwcCAMcMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACEOKwAA0BEAIDYAAK4QACA3AACsEAAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh5QYBAMYMACH_BgEAxQwAIY0HAQDFDAAhjgcBAMYMACGPBwIAxwwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIQMAAAAvACAPAADLFQAgEAAA0hUAICgAAAAvACAIAADSFQAgIwAAoBEAICcAAL4PACApAAC_DwAgKgAAwA8AIDYAAMgPACA3AADDDwAgOgAAwQ8AIDsAAMIPACA8AADFDwAgPQAAxg8AID4AAMcPACBAAADJDwAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpAcBAMUMACGlBwEAxgwAIaYHAQDGDAAhJiMAAKARACAnAAC-DwAgKQAAvw8AICoAAMAPACA2AADIDwAgNwAAww8AIDoAAMEPACA7AADCDwAgPAAAxQ8AID0AAMYPACA-AADHDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAIQbHBgEAAAABzgZAAAAAAc8GQAAAAAH_BgEAAAABjwcCAAAAAagHAQAAAAEmIwAAohEAICcAANIQACApAADTEAAgKgAA1BAAIDYAANwQACA3AADXEAAgOQAA2BAAIDoAANUQACA8AADZEAAgPQAA2hAAID4AANsQACBAAADdEAAgxwYBAAAAAcgGAQAAAAHOBkAAAAABzwZAAAAAAegGAQAAAAGOBwEAAAABkAcIAAAAAZEHCAAAAAGSBwgAAAABkwcBAAAAAZQHAQAAAAGVBwAAzxAAIJYHAQAAAAGXBwIAAAABmQcAAACZBwKbBwAAAJsHApwHgAAAAAGdBwAA0BAAIJ8HAAAAnwcCoAcIAAAAAaEHIAAAAAGiBwAA0RAAIKMHAQAAAAGkBwEAAAABpQcBAAAAAaYHAQAAAAECAAAAMQAgDwAA1BUAIAMAAAAvACAPAADUFQAgEAAA2BUAICgAAAAvACAIAADYFQAgIwAAoBEAICcAAL4PACApAAC_DwAgKgAAwA8AIDYAAMgPACA3AADDDwAgOQAAxA8AIDoAAMEPACA8AADFDwAgPQAAxg8AID4AAMcPACBAAADJDwAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpAcBAMUMACGlBwEAxgwAIaYHAQDGDAAhJiMAAKARACAnAAC-DwAgKQAAvw8AICoAAMAPACA2AADIDwAgNwAAww8AIDkAAMQPACA6AADBDwAgPAAAxQ8AID0AAMYPACA-AADHDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAIQbHBgEAAAABzAYCAAAAAc4GQAAAAAHPBkAAAAAB_QYBAAAAAf8GAQAAAAEhHgAA6w4AICMAAIoOACAsAACLDgAgMwAAjQ4AIDQAAI4OACDHBgEAAAABzgZAAAAAAc8GQAAAAAHqBgEAAAAB6wYBAAAAAewGAQAAAAH-BgEAAAABowcBAAAAAb4HCAAAAAG_BwgAAAABxwcCAAAAAcgHAQAAAAHKBwAAAMoHAssHCAAAAAHNBwAAAM0HAs4HAQAAAAHPBwAAAMYHAtAHAQAAAAHRBwEAAAAB0gcBAAAAAdMHAQAAAAHVBwAAANUHA9YHAQAAAAHXBwEAAAAB2AcBAAAAAdkHQAAAAAHaBwEAAAAB2wcBAAAAAQIAAABrACAPAADaFQAgAwAAAFcAIA8AANoVACAQAADeFQAgIwAAAFcAIAgAAN4VACAeAADpDgAgIwAAzg0AICwAAM8NACAzAADRDQAgNAAA0g0AIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIf4GAQDGDAAhowcBAMYMACG-BwgA8AwAIb8HCADwDAAhxwcCAMcMACHIBwEAxgwAIcoHAADJDcoHIssHCADwDAAhzQcAAMoNzQcizgcBAMYMACHPBwAAyw3GByLQBwEAxgwAIdEHAQDGDAAh0gcBAMYMACHTBwEAxgwAIdUHAADMDdUHI9YHAQDGDAAh1wcBAMYMACHYBwEAxgwAIdkHQADbDAAh2gcBAMYMACHbBwEAxgwAISEeAADpDgAgIwAAzg0AICwAAM8NACAzAADRDQAgNAAA0g0AIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIf4GAQDGDAAhowcBAMYMACG-BwgA8AwAIb8HCADwDAAhxwcCAMcMACHIBwEAxgwAIcoHAADJDcoHIssHCADwDAAhzQcAAMoNzQcizgcBAMYMACHPBwAAyw3GByLQBwEAxgwAIdEHAQDGDAAh0gcBAMYMACHTBwEAxgwAIdUHAADMDdUHI9YHAQDGDAAh1wcBAMYMACHYBwEAxgwAIdkHQADbDAAh2gcBAMYMACHbBwEAxgwAIQfHBgEAAAABzgZAAAAAAfkGAQAAAAGbBwAAAN0HArwHAQAAAAHdBwEAAAAB3gcgAAAAAREiAACuEQAgJgAA3hAAIDcAAN8QACA8AADgEAAgPQAA4RAAID4AAOMQACBBAADiEAAgQgAA5RAAIEMAAOQQACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAekGAQAAAAH1BgEAAAAB9gYBAAAAAQIAAACwCQAgDwAA4BUAICEeAADrDgAgIwAAig4AICwAAIsOACAuAACMDgAgNAAAjg4AIMcGAQAAAAHOBkAAAAABzwZAAAAAAeoGAQAAAAHrBgEAAAAB7AYBAAAAAf4GAQAAAAGjBwEAAAABvgcIAAAAAb8HCAAAAAHHBwIAAAAByAcBAAAAAcoHAAAAygcCywcIAAAAAc0HAAAAzQcCzgcBAAAAAc8HAAAAxgcC0AcBAAAAAdEHAQAAAAHSBwEAAAAB0wcBAAAAAdUHAAAA1QcD1gcBAAAAAdcHAQAAAAHYBwEAAAAB2QdAAAAAAdoHAQAAAAHbBwEAAAABAgAAAGsAIA8AAOIVACAOKwAA0REAIDcAAMsQACA5AADMEAAgxwYBAAAAAc4GQAAAAAHPBkAAAAAB5QYBAAAAAf8GAQAAAAGNBwEAAAABjgcBAAAAAY8HAgAAAAGQBwgAAAABkQcIAAAAAZIHCAAAAAECAAAASgAgDwAA5BUAICYjAACiEQAgJwAA0hAAICkAANMQACAqAADUEAAgNwAA1xAAIDkAANgQACA6AADVEAAgOwAA1hAAIDwAANkQACA9AADaEAAgPgAA2xAAIEAAAN0QACDHBgEAAAAByAYBAAAAAc4GQAAAAAHPBkAAAAAB6AYBAAAAAY4HAQAAAAGQBwgAAAABkQcIAAAAAZIHCAAAAAGTBwEAAAABlAcBAAAAAZUHAADPEAAglgcBAAAAAZcHAgAAAAGZBwAAAJkHApsHAAAAmwcCnAeAAAAAAZ0HAADQEAAgnwcAAACfBwKgBwgAAAABoQcgAAAAAaIHAADREAAgowcBAAAAAaQHAQAAAAGlBwEAAAABpgcBAAAAAQIAAAAxACAPAADmFQAgECMAAIcOACArAACFDgAgLQAArA8AIDIAAIYOACDHBgEAAAAB_wYBAAAAAY8HAgAAAAGZBwAAAMYHAqMHAQAAAAGoBwEAAAABqgcIAAAAAbwHAQAAAAHCBwgAAAABwwcIAAAAAcQHCAAAAAHGBwIAAAABAgAAAE4AIA8AAOgVACADAAAASAAgDwAA5BUAIBAAAOwVACAQAAAASAAgCAAA7BUAICsAANARACA3AACsEAAgOQAArRAAIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeUGAQDGDAAh_wYBAMUMACGNBwEAxQwAIY4HAQDGDAAhjwcCAMcMACGQBwgA8AwAIZEHCADwDAAhkgcIAPAMACEOKwAA0BEAIDcAAKwQACA5AACtEAAgxwYBAMUMACHOBkAAyQwAIc8GQADJDAAh5QYBAMYMACH_BgEAxQwAIY0HAQDFDAAhjgcBAMYMACGPBwIAxwwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIQMAAAAvACAPAADmFQAgEAAA7xUAICgAAAAvACAIAADvFQAgIwAAoBEAICcAAL4PACApAAC_DwAgKgAAwA8AIDcAAMMPACA5AADEDwAgOgAAwQ8AIDsAAMIPACA8AADFDwAgPQAAxg8AID4AAMcPACBAAADJDwAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxQwAIY4HAQDGDAAhkAcIAPAMACGRBwgA8AwAIZIHCADwDAAhkwcBAMUMACGUBwEAxQwAIZUHAAC3DwAglgcBAMYMACGXBwIAxwwAIZkHAAC4D5kHIpsHAAC5D5sHIpwHgAAAAAGdBwAAug8AIJ8HAAC7D58HIqAHCADwDAAhoQcgAMgMACGiBwAAvA8AIKMHAQDFDAAhpAcBAMUMACGlBwEAxgwAIaYHAQDGDAAhJiMAAKARACAnAAC-DwAgKQAAvw8AICoAAMAPACA3AADDDwAgOQAAxA8AIDoAAMEPACA7AADCDwAgPAAAxQ8AID0AAMYPACA-AADHDwAgQAAAyQ8AIMcGAQDFDAAhyAYBAMUMACHOBkAAyQwAIc8GQADJDAAh6AYBAMUMACGOBwEAxgwAIZAHCADwDAAhkQcIAPAMACGSBwgA8AwAIZMHAQDFDAAhlAcBAMUMACGVBwAAtw8AIJYHAQDGDAAhlwcCAMcMACGZBwAAuA-ZByKbBwAAuQ-bByKcB4AAAAABnQcAALoPACCfBwAAuw-fByKgBwgA8AwAIaEHIADIDAAhogcAALwPACCjBwEAxQwAIaQHAQDFDAAhpQcBAMYMACGmBwEAxgwAIQMAAABMACAPAADoFQAgEAAA8hUAIBIAAABMACAIAADyFQAgIwAA9w0AICsAAPUNACAtAACqDwAgMgAA9g0AIMcGAQDFDAAh_wYBAMUMACGPBwIAxwwAIZkHAADLDcYHIqMHAQDFDAAhqAcBAMYMACGqBwgA8AwAIbwHAQDFDAAhwgcIAPMNACHDBwgA8AwAIcQHCADwDAAhxgcCAMcMACEQIwAA9w0AICsAAPUNACAtAACqDwAgMgAA9g0AIMcGAQDFDAAh_wYBAMUMACGPBwIAxwwAIZkHAADLDcYHIqMHAQDFDAAhqAcBAMYMACGqBwgA8AwAIbwHAQDFDAAhwgcIAPMNACHDBwgA8AwAIcQHCADwDAAhxgcCAMcMACEHxwYBAAAAAf8GAQAAAAGPBwIAAAABqAcBAAAAAaoHCAAAAAG6BwEAAAABuwcIAAAAAQMAAAAtACAPAADgFQAgEAAA9hUAIBMAAAAtACAIAAD2FQAgIgAArREAICYAAJQOACA3AACVDgAgPAAAlg4AID0AAJcOACA-AACZDgAgQQAAmA4AIEIAAJsOACBDAACaDgAgxwYBAMUMACHIBgEAxQwAIc4GQADJDAAhzwZAAMkMACHoBgEAxgwAIekGAQDGDAAh9QYBAMYMACH2BgEAxQwAIREiAACtEQAgJgAAlA4AIDcAAJUOACA8AACWDgAgPQAAlw4AID4AAJkOACBBAACYDgAgQgAAmw4AIEMAAJoOACDHBgEAxQwAIcgGAQDFDAAhzgZAAMkMACHPBkAAyQwAIegGAQDGDAAh6QYBAMYMACH1BgEAxgwAIfYGAQDFDAAhAwAAAFcAIA8AAOIVACAQAAD5FQAgIwAAAFcAIAgAAPkVACAeAADpDgAgIwAAzg0AICwAAM8NACAuAADQDQAgNAAA0g0AIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIf4GAQDGDAAhowcBAMYMACG-BwgA8AwAIb8HCADwDAAhxwcCAMcMACHIBwEAxgwAIcoHAADJDcoHIssHCADwDAAhzQcAAMoNzQcizgcBAMYMACHPBwAAyw3GByLQBwEAxgwAIdEHAQDGDAAh0gcBAMYMACHTBwEAxgwAIdUHAADMDdUHI9YHAQDGDAAh1wcBAMYMACHYBwEAxgwAIdkHQADbDAAh2gcBAMYMACHbBwEAxgwAISEeAADpDgAgIwAAzg0AICwAAM8NACAuAADQDQAgNAAA0g0AIMcGAQDFDAAhzgZAAMkMACHPBkAAyQwAIeoGAQDGDAAh6wYBAMYMACHsBgEAxgwAIf4GAQDGDAAhowcBAMYMACG-BwgA8AwAIb8HCADwDAAhxwcCAMcMACHIBwEAxgwAIcoHAADJDcoHIssHCADwDAAhzQcAAMoNzQcizgcBAMYMACHPBwAAyw3GByLQBwEAxgwAIdEHAQDGDAAh0gcBAMYMACHTBwEAxgwAIdUHAADMDdUHI9YHAQDGDAAh1wcBAMYMACHYBwEAxgwAIdkHQADbDAAh2gcBAMYMACHbBwEAxgwAIQjHBgEAAAABzgZAAAAAAaMHAQAAAAG8BwEAAAABvQcIAAAAAb4HCAAAAAG_BwgAAAABwAcIAAAAAQzHBgEAAAAByAYBAAAAAckGAAAAvggCzgZAAAAAAc8GQAAAAAHlBgEAAAAB6wYBAAAAAYUHIAAAAAGGB0AAAAABmQcAAAC_CAK8CCAAAAABvwggAAAAAQAAAAAFFQAGFgAHFwAIGAAJGQAKAAAAAAAFFQAGFgAHFwAIGAAJGQAKAR4ADQsVADYdHQ4fJhAgKhEhLAwjLhIuvgEeNboBHTi8ASg7vQErRb8BHwIVAA8cIQ0BHCIAAR4ADQEeAA0LFQA1IgANJjITN58BHDyiASI9owEsPqUBLUGkAR1CrwEzQ6kBMkSwAR8OFQAxIwASJwAUKUEXKkUZNo8BIDeEARw5hQEnOksbO4MBKzyGASM9igEsPo4BLUCTAS4FFQAWJDQUJTcUJjgTKDwVAScAFAMlPQAmPgAoPwACFQAYJkITASZDAAIVABomRhMBJkcABRUAKisAEzZ8IDdPHDl4JwYVACYjABIrABMtAB0ychs2cyAHFQAlHlANI1ESLFIcLlYeM1wfNGUiAh4ADS1YHQUVACEjABIsYSAtAB0vXQ0EKwATMAAfMQAcMmIbASxjAAQVACQjABImaSM1bB0CKwATNAAiAiZtADVuAAMsbwAucAAzcQABNnQAAysAEzJ7GzgAKAMVACkeAA0seScBLHoAAzZ_ADd9ADl-AAIeAA0rABMCIwASKwATAiMAEisAEwIrABM_AC8CFQAwJpQBLgEmlQEACTadAQA3mAEAOZkBADqWAQA7lwEAPJoBAD2bAQA-nAEAQJ4BAAMVADQjABJCrQEzAiMAEicAMgFCrgEACSaxAQA3sgEAPLMBAD20AQA-tgEAQbUBAEK4AQBDtwEARLkBAAYfwAEAIMEBAC7EAQA1wgEAO8MBAEXFAQABHgANAR4ADQMVADoYADsZADwAAAADFQA6GAA7GQA8AhUAQFfhAT8BVgA-AVfiAQAAAAMVAEQYAEUZAEYAAAADFQBEGABFGQBGAVYAPgFWAD4DFQBLGABMGQBNAAAAAxUASxgATBkATQEdmgIOAR2gAg4DFQBSGABTGQBUAAAAAxUAUhgAUxkAVAEeAA0BHgANAxUAWRgAWhkAWwAAAAMVAFkYAFoZAFsBHgANAR4ADQMVAGAYAGEZAGIAAAADFQBgGABhGQBiAAAAAxUAaBgAaRkAagAAAAMVAGgYAGkZAGoAAAADFQBwGABxGQByAAAAAxUAcBgAcRkAcgAAAAMVAHgYAHkZAHoAAAADFQB4GAB5GQB6AAADFQB_GACAARkAgQEAAAADFQB_GACAARkAgQEBHgANAR4ADQMVAIYBGACHARkAiAEAAAADFQCGARgAhwEZAIgBAysAEzLZAxs4ACgDKwATMt8DGzgAKAUVAI0BFgCOARcAjwEYAJABGQCRAQAAAAAABRUAjQEWAI4BFwCPARgAkAEZAJEBASTxAxQBJPcDFAMVAJYBGACXARkAmAEAAAADFQCWARgAlwEZAJgBAAAABRUAngEWAJ8BFwCgARgAoQEZAKIBAAAAAAAFFQCeARYAnwEXAKABGAChARkAogEBIwASASMAEgUVAKcBFgCoARcAqQEYAKoBGQCrAQAAAAAABRUApwEWAKgBFwCpARgAqgEZAKsBAisAEzQAIgIrABM0ACIDFQCwARgAsQEZALIBAAAAAxUAsAEYALEBGQCyAQAAAAMVALgBGAC5ARkAugEAAAADFQC4ARgAuQEZALoBASMAEgEjABIDFQC_ARgAwAEZAMEBAAAAAxUAvwEYAMABGQDBAQIjABInADICIwASJwAyBRUAxgEWAMcBFwDIARgAyQEZAMoBAAAAAAAFFQDGARYAxwEXAMgBGADJARkAygEAAAAFFQDQARYA0QEXANIBGADTARkA1AEAAAAAAAUVANABFgDRARcA0gEYANMBGQDUAQAAAxUA2QEYANoBGQDbAQAAAAMVANkBGADaARkA2wECKwATPwAvAisAEz8ALwUVAOABFgDhARcA4gEYAOMBGQDkAQAAAAAABRUA4AEWAOEBFwDiARgA4wEZAOQBAAAAAxUA6gEYAOsBGQDsAQAAAAMVAOoBGADrARkA7AEAAAADFQDyARgA8wEZAPQBAAAAAxUA8gEYAPMBGQD0AQEnABQBJwAUBRUA-QEWAPoBFwD7ARgA_AEZAP0BAAAAAAAFFQD5ARYA-gEXAPsBGAD8ARkA_QEAAAADFQCDAhgAhAIZAIUCAAAAAxUAgwIYAIQCGQCFAgIjABIrABMCIwASKwATBRUAigIWAIsCFwCMAhgAjQIZAI4CAAAAAAAFFQCKAhYAiwIXAIwCGACNAhkAjgICHgANLdIGHQIeAA0t2AYdAxUAkwIYAJQCGQCVAgAAAAMVAJMCGACUAhkAlQIDHuoGDSPrBhI07AYiAx7yBg0j8wYSNPQGIgUVAJoCFgCbAhcAnAIYAJ0CGQCeAgAAAAAABRUAmgIWAJsCFwCcAhgAnQIZAJ4CBCMAEisAEy0AHTKGBxsEIwASKwATLQAdMowHGwUVAKMCFgCkAhcApQIYAKYCGQCnAgAAAAAABRUAowIWAKQCFwClAhgApgIZAKcCAyMAEi0AHS-eBw0DIwASLQAdL6QHDQUVAKwCFgCtAhcArgIYAK8CGQCwAgAAAAAABRUArAIWAK0CFwCuAhgArwIZALACBCsAEzAAHzEAHDK2BxsEKwATMAAfMQAcMrwHGwUVALUCFgC2AhcAtwIYALgCGQC5AgAAAAAABRUAtQIWALYCFwC3AhgAuAIZALkCAAAAAxUAvwIYAMACGQDBAgAAAAMVAL8CGADAAhkAwQIAAAADFQDHAhgAyAIZAMkCAAAAAxUAxwIYAMgCGQDJAgAAAAUVAM8CFgDQAhcA0QIYANICGQDTAgAAAAAABRUAzwIWANACFwDRAhgA0gIZANMCAiMAEisAEwIjABIrABMFFQDYAhYA2QIXANoCGADbAhkA3AIAAAAAAAUVANgCFgDZAhcA2gIYANsCGQDcAgQjABInABQprwgXKrAIGQQjABInABQptggXKrcIGQUVAOECFgDiAhcA4wIYAOQCGQDlAgAAAAAABRUA4QIWAOICFwDjAhgA5AIZAOUCASsAEwErABMFFQDqAhYA6wIXAOwCGADtAhkA7gIAAAAAAAUVAOoCFgDrAhcA7AIYAO0CGQDuAgAAAxUA8wIYAPQCGQD1AgAAAAMVAPMCGAD0AhkA9QICHgANKwATAh4ADSsAEwUVAPoCFgD7AhcA_AIYAP0CGQD-AgAAAAAABRUA-gIWAPsCFwD8AhgA_QIZAP4CAAAABRUAhAMWAIUDFwCGAxgAhwMZAIgDAAAAAAAFFQCEAxYAhQMXAIYDGACHAxkAiAMAAAAFFQCOAxYAjwMXAJADGACRAxkAkgMAAAAAAAUVAI4DFgCPAxcAkAMYAJEDGQCSAwEiAA0BIgANAxUAlwMYAJgDGQCZAwAAAAMVAJcDGACYAxkAmQMAAAAFFQCfAxYAoAMXAKEDGACiAxkAowMAAAAAAAUVAJ8DFgCgAxcAoQMYAKIDGQCjAwAAAxUAqAMYAKkDGQCqAwAAAAMVAKgDGACpAxkAqgMAAAADFQCwAxgAsQMZALIDAAAAAxUAsAMYALEDGQCyAwAAAxUAtwMYALgDGQC5AwAAAAMVALcDGAC4AxkAuQMAAAAFFQC_AxYAwAMXAMEDGADCAxkAwwMAAAAAAAUVAL8DFgDAAxcAwQMYAMIDGQDDAwECAQIDAQUGAQYHAQcIAQkKAQoMAgsNAwwPAQ0RAg4SBBETARIUARMVAhoYBRsZC0YbDEfGAQxIyAEMSckBDErKAQxLzAEMTM4BAk3PATdO0QEMT9MBAlDUAThR1QEMUtYBDFPXAQJU2gE5VdsBPVjdAT5Z4wE-WuYBPlvnAT5c6AE-XeoBPl7sAQJf7QFBYO8BPmHxAQJi8gFCY_MBPmT0AT5l9QECZvgBQ2f5AUdo-gE_afsBP2r8AT9r_QE_bP4BP22AAj9uggICb4MCSHCFAj9xhwICcogCSXOJAj90igI_dYsCAnaOAkp3jwJOeJACDXmRAg16kgINe5MCDXyUAg19lgINfpgCAn-ZAk-AAZwCDYEBngICggGfAlCDAaECDYQBogINhQGjAgKGAaYCUYcBpwJViAGoAhCJAakCEIoBqgIQiwGrAhCMAawCEI0BrgIQjgGwAgKPAbECVpABswIQkQG1AgKSAbYCV5MBtwIQlAG4AhCVAbkCApYBvAJYlwG9AlyYAb4CEZkBvwIRmgHAAhGbAcECEZwBwgIRnQHEAhGeAcYCAp8BxwJdoAHJAhGhAcsCAqIBzAJeowHNAhGkAc4CEaUBzwICpgHSAl-nAdMCY6gB1QJkqQHWAmSqAdkCZKsB2gJkrAHbAmStAd0CZK4B3wICrwHgAmWwAeICZLEB5AICsgHlAmazAeYCZLQB5wJktQHoAgK2AesCZ7cB7AJruAHuAmy5Ae8CbLoB8gJsuwHzAmy8AfQCbL0B9gJsvgH4AgK_AfkCbcAB-wJswQH9AgLCAf4CbsMB_wJsxAGAA2zFAYEDAsYBhANvxwGFA3PIAYcDdMkBiAN0ygGLA3TLAYwDdMwBjQN0zQGPA3TOAZEDAs8BkgN10AGUA3TRAZYDAtIBlwN20wGYA3TUAZkDdNUBmgMC1gGdA3fXAZ4De9gBoAMX2QGhAxfaAaMDF9sBpAMX3AGlAxfdAacDF94BqQMC3wGqA3zgAawDF-EBrgMC4gGvA33jAbADF-QBsQMX5QGyAwLmAbUDfucBtgOCAegBuAMo6QG5AyjqAbsDKOsBvAMo7AG9AyjtAb8DKO4BwQMC7wHCA4MB8AHEAyjxAcYDAvIBxwOEAfMByAMo9AHJAyj1AcoDAvYBzQOFAfcBzgOJAfgBzwMn-QHQAyf6AdEDJ_sB0gMn_AHTAyf9AdUDJ_4B1wMC_wHYA4oBgALbAyeBAt0DAoIC3gOLAYMC4AMnhALhAyeFAuIDAoYC5QOMAYcC5gOSAYgC5wMUiQLoAxSKAukDFIsC6gMUjALrAxSNAu0DFI4C7wMCjwLwA5MBkALzAxSRAvUDApIC9gOUAZMC-AMUlAL5AxSVAvoDApYC_QOVAZcC_gOZAZgCgASaAZkCgQSaAZoChASaAZsChQSaAZwChgSaAZ0CiASaAZ4CigQCnwKLBJsBoAKNBJoBoQKPBAKiApAEnAGjApEEmgGkApIEmgGlApMEAqYClgSdAacClwSjAagCmAQiqQKZBCKqApoEIqsCmwQirAKcBCKtAp4EIq4CoAQCrwKhBKQBsAKjBCKxAqUEArICpgSlAbMCpwQitAKoBCK1AqkEArYCrASmAbcCrQSsAbgCrgQjuQKvBCO6ArAEI7sCsQQjvAKyBCO9ArQEI74CtgQCvwK3BK0BwAK5BCPBArsEAsICvASuAcMCvQQjxAK-BCPFAr8EAsYCwgSvAccCwwSzAcgCxQS0AckCxgS0AcoCyQS0AcsCygS0AcwCywS0Ac0CzQS0Ac4CzwQCzwLQBLUB0ALSBLQB0QLUBALSAtUEtgHTAtYEtAHUAtcEtAHVAtgEAtYC2wS3AdcC3AS7AdgC3QQy2QLeBDLaAt8EMtsC4AQy3ALhBDLdAuMEMt4C5QQC3wLmBLwB4ALoBDLhAuoEAuIC6wS9AeMC7AQy5ALtBDLlAu4EAuYC8QS-AecC8gTCAegC8wQz6QL0BDPqAvUEM-sC9gQz7AL3BDPtAvkEM-4C-wQC7wL8BMMB8AL-BDPxAoAFAvICgQXEAfMCggUz9AKDBTP1AoQFAvYChwXFAfcCiAXLAfgCigXMAfkCiwXMAfoCjgXMAfsCjwXMAfwCkAXMAf0CkgXMAf4ClAUC_wKVBc0BgAOXBcwBgQOZBQKCA5oFzgGDA5sFzAGEA5wFzAGFA50FAoYDoAXPAYcDoQXVAYgDowUviQOkBS-KA6cFL4sDqAUvjAOpBS-NA6sFL44DrQUCjwOuBdYBkAOwBS-RA7IFApIDswXXAZMDtAUvlAO1BS-VA7YFApYDuQXYAZcDugXcAZgDuwUumQO8BS6aA70FLpsDvgUunAO_BS6dA8EFLp4DwwUCnwPEBd0BoAPGBS6hA8gFAqIDyQXeAaMDygUupAPLBS6lA8wFAqYDzwXfAacD0AXlAagD0gXmAakD0wXmAaoD1gXmAasD1wXmAawD2AXmAa0D2gXmAa4D3AUCrwPdBecBsAPfBeYBsQPhBQKyA-IF6AGzA-MF5gG0A-QF5gG1A-UFArYD6AXpAbcD6QXtAbgD6wXuAbkD7AXuAboD7wXuAbsD8AXuAbwD8QXuAb0D8wXuAb4D9QUCvwP2Be8BwAP4Be4BwQP6BQLCA_sF8AHDA_wF7gHEA_0F7gHFA_4FAsYDgQbxAccDggb1AcgDgwYVyQOEBhXKA4UGFcsDhgYVzAOHBhXNA4kGFc4DiwYCzwOMBvYB0AOOBhXRA5AGAtIDkQb3AdMDkgYV1AOTBhXVA5QGAtYDlwb4AdcDmAb-AdgDmgb_AdkDmwb_AdoDngb_AdsDnwb_AdwDoAb_Ad0Dogb_Ad4DpAYC3wOlBoAC4AOnBv8B4QOpBgLiA6oGgQLjA6sG_wHkA6wG_wHlA60GAuYDsAaCAucDsQaGAugDsgYt6QOzBi3qA7QGLesDtQYt7AO2Bi3tA7gGLe4DugYC7wO7BocC8AO9Bi3xA78GAvIDwAaIAvMDwQYt9APCBi31A8MGAvYDxgaJAvcDxwaPAvgDyAYe-QPJBh76A8oGHvsDywYe_APMBh79A84GHv4D0AYC_wPRBpACgATUBh6BBNYGAoIE1waRAoME2QYehATaBh6FBNsGAoYE3gaSAocE3waWAogE4AYdiQThBh2KBOIGHYsE4wYdjATkBh2NBOYGHY4E6AYCjwTpBpcCkATuBh2RBPAGApIE8QaYApME9QYdlAT2Bh2VBPcGApYE-gaZApcE-wafApgE_AYcmQT9BhyaBP4GHJsE_wYcnASABxydBIIHHJ4EhAcCnwSFB6ACoASIBxyhBIoHAqIEiwehAqMEjQccpASOBxylBI8HAqYEkgeiAqcEkweoAqgElAcfqQSVBx-qBJYHH6sElwcfrASYBx-tBJoHH64EnAcCrwSdB6kCsASgBx-xBKIHArIEoweqArMEpQcftASmBx-1BKcHArYEqgerArcEqwexArgErAcguQStByC6BK4HILsErwcgvASwByC9BLIHIL4EtAcCvwS1B7ICwAS4ByDBBLoHAsIEuwezAsMEvQcgxAS-ByDFBL8HAsYEwge0AscEwwe6AsgExQe7AskExge7AsoEyQe7AssEyge7AswEywe7As0EzQe7As4EzwcCzwTQB7wC0ATSB7sC0QTUBwLSBNUHvQLTBNYHuwLUBNcHuwLVBNgHAtYE2we-AtcE3AfCAtgE3gfDAtkE3wfDAtoE4gfDAtsE4wfDAtwE5AfDAt0E5gfDAt4E6AcC3wTpB8QC4ATrB8MC4QTtBwLiBO4HxQLjBO8HwwLkBPAHwwLlBPEHAuYE9AfGAucE9QfKAugE9wfLAukE-AfLAuoE-wfLAusE_AfLAuwE_QfLAu0E_wfLAu4EgQgC7wSCCMwC8ASECMsC8QSGCALyBIcIzQLzBIgIywL0BIkIywL1BIoIAvYEjQjOAvcEjgjUAvgEjwgs-QSQCCz6BJEILPsEkggs_ASTCCz9BJUILP4ElwgC_wSYCNUCgAWaCCyBBZwIAoIFnQjWAoMFnggshAWfCCyFBaAIAoYFowjXAocFpAjdAogFpQgTiQWmCBOKBacIE4sFqAgTjAWpCBONBasIE44FrQgCjwWuCN4CkAWyCBORBbQIApIFtQjfApMFuAgTlAW5CBOVBboIApYFvQjgApcFvgjmApgFvwgbmQXACBuaBcEIG5sFwggbnAXDCBudBcUIG54FxwgCnwXICOcCoAXKCBuhBcwIAqIFzQjoAqMFzggbpAXPCBulBdAIAqYF0wjpAqcF1AjvAqgF1gjwAqkF1wjwAqoF2gjwAqsF2wjwAqwF3AjwAq0F3gjwAq4F4AgCrwXhCPECsAXiCPACsQXjCAKyBeYI8gKzBecI9gK0BegIK7UF6QgrtgXqCCu3BesIK7gF7AgruQXuCCu6BfAIArsF8Qj3ArwF8wgrvQX1CAK-BfYI-AK_BfcIK8AF-AgrwQX5CALCBfwI-QLDBf0I_wLEBf8IgAPFBYAJgAPGBYMJgAPHBYQJgAPIBYUJgAPJBYcJgAPKBYkJAssFigmBA8wFjAmAA80FjgkCzgWPCYIDzwWQCYAD0AWRCYAD0QWSCQLSBZUJgwPTBZYJiQPUBZgJigPVBZkJigPWBZwJigPXBZ0JigPYBZ4JigPZBaAJigPaBaIJAtsFowmLA9wFpQmKA90FpwkC3gWoCYwD3wWpCYoD4AWqCYoD4QWrCQLiBa4JjQPjBa8JkwPkBbEJEuUFsgkS5gW0CRLnBbUJEugFtgkS6QW4CRLqBboJAusFuwmUA-wFvQkS7QW_CQLuBcAJlQPvBcEJEvAFwgkS8QXDCQLyBcYJlgPzBccJmgP0BckJmwP1BcoJmwP2Bc0JmwP3Bc4JmwP4Bc8JmwP5BdEJmwP6BdMJAvsF1AmcA_wF1gmbA_0F2AkC_gXZCZ0D_wXaCZsDgAbbCZsDgQbcCQKCBt8JngODBuAJpAOEBuIJGYUG4wkZhgblCRmHBuYJGYgG5wkZiQbpCRmKBusJAosG7AmlA4wG7gkZjQbwCQKOBvEJpgOPBvIJGZAG8wkZkQb0CQKSBvcJpwOTBvgJqwOUBvoJrAOVBvsJrAOWBv4JrAOXBv8JrAOYBoAKrAOZBoIKrAOaBoQKApsGhQqtA5wGhwqsA50GiQoCngaKCq4DnwaLCqwDoAaMCqwDoQaNCgKiBpAKrwOjBpEKswOkBpMKDqUGlAoOpgaWCg6nBpcKDqgGmAoOqQaaCg6qBpwKAqsGnQq0A6wGnwoOrQahCgKuBqIKtQOvBqMKDrAGpAoOsQalCgKyBqgKtgOzBqkKugO0BqsKuwO1BqwKuwO2Bq8KuwO3BrAKuwO4BrEKuwO5BrMKuwO6BrUKArsGtgq8A7wGuAq7A70GugoCvga7Cr0Dvwa8CrsDwAa9CrsDwQa-CgLCBsEKvgPDBsIKxAM"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// src/generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AbandonedCheckoutScalarFieldEnum: () => AbandonedCheckoutScalarFieldEnum,
  AccountScalarFieldEnum: () => AccountScalarFieldEnum,
  AdminScalarFieldEnum: () => AdminScalarFieldEnum,
  AnyNull: () => AnyNull2,
  AttributeScalarFieldEnum: () => AttributeScalarFieldEnum,
  AttributeValueScalarFieldEnum: () => AttributeValueScalarFieldEnum,
  BlockedPhoneScalarFieldEnum: () => BlockedPhoneScalarFieldEnum,
  BlogScalarFieldEnum: () => BlogScalarFieldEnum,
  BrandScalarFieldEnum: () => BrandScalarFieldEnum,
  CartItemScalarFieldEnum: () => CartItemScalarFieldEnum,
  CartScalarFieldEnum: () => CartScalarFieldEnum,
  CategoryScalarFieldEnum: () => CategoryScalarFieldEnum,
  ClientLogoScalarFieldEnum: () => ClientLogoScalarFieldEnum,
  CouponProductScalarFieldEnum: () => CouponProductScalarFieldEnum,
  CouponScalarFieldEnum: () => CouponScalarFieldEnum,
  CourierSettingScalarFieldEnum: () => CourierSettingScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  DocumentEmbeddingScalarFieldEnum: () => DocumentEmbeddingScalarFieldEnum,
  ExpenseCategoryScalarFieldEnum: () => ExpenseCategoryScalarFieldEnum,
  ExpenseScalarFieldEnum: () => ExpenseScalarFieldEnum,
  FaqScalarFieldEnum: () => FaqScalarFieldEnum,
  FlashSaleProductScalarFieldEnum: () => FlashSaleProductScalarFieldEnum,
  FlashSaleScalarFieldEnum: () => FlashSaleScalarFieldEnum,
  GtmSettingScalarFieldEnum: () => GtmSettingScalarFieldEnum,
  HeroSliderScalarFieldEnum: () => HeroSliderScalarFieldEnum,
  HomeCategorySectionScalarFieldEnum: () => HomeCategorySectionScalarFieldEnum,
  HomePromoScalarFieldEnum: () => HomePromoScalarFieldEnum,
  JsonNull: () => JsonNull2,
  JsonNullValueFilter: () => JsonNullValueFilter,
  JsonNullValueInput: () => JsonNullValueInput,
  LandingPageScalarFieldEnum: () => LandingPageScalarFieldEnum,
  ModelName: () => ModelName,
  NotificationScalarFieldEnum: () => NotificationScalarFieldEnum,
  NullTypes: () => NullTypes2,
  NullableJsonNullValueInput: () => NullableJsonNullValueInput,
  NullsOrder: () => NullsOrder,
  OrderItemScalarFieldEnum: () => OrderItemScalarFieldEnum,
  OrderReturnItemScalarFieldEnum: () => OrderReturnItemScalarFieldEnum,
  OrderReturnScalarFieldEnum: () => OrderReturnScalarFieldEnum,
  OrderScalarFieldEnum: () => OrderScalarFieldEnum,
  PageContentScalarFieldEnum: () => PageContentScalarFieldEnum,
  PaymentSettingScalarFieldEnum: () => PaymentSettingScalarFieldEnum,
  PopupScalarFieldEnum: () => PopupScalarFieldEnum,
  PosCartItemScalarFieldEnum: () => PosCartItemScalarFieldEnum,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  ProductScalarFieldEnum: () => ProductScalarFieldEnum,
  ProductVariantScalarFieldEnum: () => ProductVariantScalarFieldEnum,
  QueryMode: () => QueryMode,
  ReviewScalarFieldEnum: () => ReviewScalarFieldEnum,
  SampleWorkScalarFieldEnum: () => SampleWorkScalarFieldEnum,
  SessionScalarFieldEnum: () => SessionScalarFieldEnum,
  ShippingSettingScalarFieldEnum: () => ShippingSettingScalarFieldEnum,
  ShopScalarFieldEnum: () => ShopScalarFieldEnum,
  SiteSettingScalarFieldEnum: () => SiteSettingScalarFieldEnum,
  SizeChartScalarFieldEnum: () => SizeChartScalarFieldEnum,
  SmsSettingScalarFieldEnum: () => SmsSettingScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  StaffRoleScalarFieldEnum: () => StaffRoleScalarFieldEnum,
  TestimonialScalarFieldEnum: () => TestimonialScalarFieldEnum,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  VerificationScalarFieldEnum: () => VerificationScalarFieldEnum,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.8.0",
  engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  AbandonedCheckout: "AbandonedCheckout",
  Admin: "Admin",
  Attribute: "Attribute",
  AttributeValue: "AttributeValue",
  User: "User",
  Session: "Session",
  Account: "Account",
  Verification: "Verification",
  BlockedPhone: "BlockedPhone",
  Blog: "Blog",
  Brand: "Brand",
  Cart: "Cart",
  CartItem: "CartItem",
  Category: "Category",
  ClientLogo: "ClientLogo",
  Coupon: "Coupon",
  CouponProduct: "CouponProduct",
  CourierSetting: "CourierSetting",
  ExpenseCategory: "ExpenseCategory",
  Expense: "Expense",
  Faq: "Faq",
  FlashSale: "FlashSale",
  FlashSaleProduct: "FlashSaleProduct",
  GtmSetting: "GtmSetting",
  HeroSlider: "HeroSlider",
  HomeCategorySection: "HomeCategorySection",
  HomePromo: "HomePromo",
  LandingPage: "LandingPage",
  Notification: "Notification",
  Order: "Order",
  OrderItem: "OrderItem",
  OrderReturn: "OrderReturn",
  OrderReturnItem: "OrderReturnItem",
  PageContent: "PageContent",
  PaymentSetting: "PaymentSetting",
  Popup: "Popup",
  PosCartItem: "PosCartItem",
  Product: "Product",
  ProductVariant: "ProductVariant",
  DocumentEmbedding: "DocumentEmbedding",
  Review: "Review",
  SampleWork: "SampleWork",
  ShippingSetting: "ShippingSetting",
  Shop: "Shop",
  SiteSetting: "SiteSetting",
  SizeChart: "SizeChart",
  SmsSetting: "SmsSetting",
  StaffRole: "StaffRole",
  Testimonial: "Testimonial"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var AbandonedCheckoutScalarFieldEnum = {
  id: "id",
  sessionToken: "sessionToken",
  source: "source",
  landingPageSlug: "landingPageSlug",
  fullName: "fullName",
  phone: "phone",
  address: "address",
  district: "district",
  notes: "notes",
  items: "items",
  subtotal: "subtotal",
  shippingFee: "shippingFee",
  discountAmount: "discountAmount",
  total: "total",
  createdAt: "createdAt",
  lastActivityAt: "lastActivityAt"
};
var AdminScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  profilePhoto: "profilePhoto",
  contactNumber: "contactNumber",
  isDeleted: "isDeleted",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  deletedAt: "deletedAt",
  userId: "userId"
};
var AttributeScalarFieldEnum = {
  id: "id",
  name: "name",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var AttributeValueScalarFieldEnum = {
  id: "id",
  value: "value",
  attributeId: "attributeId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  emailVerified: "emailVerified",
  role: "role",
  status: "status",
  needPasswordChange: "needPasswordChange",
  isDeleted: "isDeleted",
  deletedAt: "deletedAt",
  image: "image",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  staffRoleId: "staffRoleId"
};
var SessionScalarFieldEnum = {
  id: "id",
  expiresAt: "expiresAt",
  token: "token",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  ipAddress: "ipAddress",
  userAgent: "userAgent",
  userId: "userId"
};
var AccountScalarFieldEnum = {
  id: "id",
  accountId: "accountId",
  providerId: "providerId",
  userId: "userId",
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  idToken: "idToken",
  accessTokenExpiresAt: "accessTokenExpiresAt",
  refreshTokenExpiresAt: "refreshTokenExpiresAt",
  scope: "scope",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var VerificationScalarFieldEnum = {
  id: "id",
  identifier: "identifier",
  value: "value",
  expiresAt: "expiresAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var BlockedPhoneScalarFieldEnum = {
  id: "id",
  phone: "phone",
  reason: "reason",
  orderNumber: "orderNumber",
  blockedById: "blockedById",
  blockedBy: "blockedBy",
  createdAt: "createdAt"
};
var BlogScalarFieldEnum = {
  id: "id",
  title: "title",
  slug: "slug",
  excerpt: "excerpt",
  content: "content",
  coverImage: "coverImage",
  author: "author",
  isPublished: "isPublished",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var BrandScalarFieldEnum = {
  id: "id",
  name: "name",
  logo: "logo",
  isActive: "isActive",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CartScalarFieldEnum = {
  id: "id",
  userId: "userId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CartItemScalarFieldEnum = {
  id: "id",
  quantity: "quantity",
  cartId: "cartId",
  productId: "productId",
  productVariantId: "productVariantId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CategoryScalarFieldEnum = {
  id: "id",
  name: "name",
  slug: "slug",
  icon: "icon",
  image: "image",
  isActive: "isActive",
  parentId: "parentId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ClientLogoScalarFieldEnum = {
  id: "id",
  name: "name",
  logo: "logo",
  website: "website",
  order: "order",
  isActive: "isActive",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CouponScalarFieldEnum = {
  id: "id",
  code: "code",
  discountType: "discountType",
  discountAmount: "discountAmount",
  maxDiscountAmount: "maxDiscountAmount",
  minPurchaseAmount: "minPurchaseAmount",
  startDate: "startDate",
  endDate: "endDate",
  isActive: "isActive",
  shopId: "shopId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var CouponProductScalarFieldEnum = {
  id: "id",
  couponId: "couponId",
  productId: "productId"
};
var CourierSettingScalarFieldEnum = {
  id: "id",
  pathaoEnabled: "pathaoEnabled",
  pathaoBaseUrl: "pathaoBaseUrl",
  pathaoClientId: "pathaoClientId",
  pathaoClientSecret: "pathaoClientSecret",
  pathaoUsername: "pathaoUsername",
  pathaoPassword: "pathaoPassword",
  pathaoStoreId: "pathaoStoreId",
  steadfastEnabled: "steadfastEnabled",
  steadfastApiKey: "steadfastApiKey",
  steadfastSecretKey: "steadfastSecretKey",
  steadfastWebhookAuthToken: "steadfastWebhookAuthToken",
  redxEnabled: "redxEnabled",
  redxMode: "redxMode",
  redxAccessToken: "redxAccessToken",
  redxPickupStoreId: "redxPickupStoreId",
  redxWebhookToken: "redxWebhookToken",
  updatedAt: "updatedAt"
};
var ExpenseCategoryScalarFieldEnum = {
  id: "id",
  name: "name",
  isActive: "isActive",
  shopId: "shopId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ExpenseScalarFieldEnum = {
  id: "id",
  name: "name",
  price: "price",
  note: "note",
  date: "date",
  categoryId: "categoryId",
  shopId: "shopId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var FaqScalarFieldEnum = {
  id: "id",
  question: "question",
  answer: "answer",
  order: "order",
  isActive: "isActive",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var FlashSaleScalarFieldEnum = {
  id: "id",
  isActive: "isActive",
  startTime: "startTime",
  endTime: "endTime",
  updatedAt: "updatedAt"
};
var FlashSaleProductScalarFieldEnum = {
  id: "id",
  flashSaleId: "flashSaleId",
  productId: "productId",
  order: "order",
  createdAt: "createdAt"
};
var GtmSettingScalarFieldEnum = {
  id: "id",
  isEnabled: "isEnabled",
  containerId: "containerId",
  scriptDomain: "scriptDomain",
  updatedAt: "updatedAt"
};
var HeroSliderScalarFieldEnum = {
  id: "id",
  image: "image",
  mediaType: "mediaType",
  type: "type",
  link: "link",
  isActive: "isActive",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var HomeCategorySectionScalarFieldEnum = {
  id: "id",
  categoryId: "categoryId",
  displayType: "displayType",
  order: "order",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var HomePromoScalarFieldEnum = {
  id: "id",
  tickerText: "tickerText",
  tickerEnabled: "tickerEnabled",
  bannerImage: "bannerImage",
  bannerLink: "bannerLink",
  bannerEnabled: "bannerEnabled",
  productsBannerImage: "productsBannerImage",
  productsBannerLink: "productsBannerLink",
  productsBannerEnabled: "productsBannerEnabled",
  updatedAt: "updatedAt"
};
var LandingPageScalarFieldEnum = {
  id: "id",
  slug: "slug",
  isActive: "isActive",
  themeColor: "themeColor",
  showGallerySection: "showGallerySection",
  showAboutSection: "showAboutSection",
  showDescriptionSection: "showDescriptionSection",
  showReviewsSection: "showReviewsSection",
  sectionOrder: "sectionOrder",
  productId: "productId",
  shopId: "shopId",
  campaignTitle: "campaignTitle",
  campaignShortDescription: "campaignShortDescription",
  bannerImage: "bannerImage",
  regularPriceLabel: "regularPriceLabel",
  offerPriceLabel: "offerPriceLabel",
  galleryHeading: "galleryHeading",
  galleryDescription: "galleryDescription",
  galleryImages: "galleryImages",
  aboutHeading: "aboutHeading",
  aboutDescription: "aboutDescription",
  videoUrl: "videoUrl",
  descriptionTitle: "descriptionTitle",
  description: "description",
  reviewHeading: "reviewHeading",
  reviewImages: "reviewImages",
  orderFormHeading: "orderFormHeading",
  orderButtonText: "orderButtonText",
  views: "views",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var NotificationScalarFieldEnum = {
  id: "id",
  type: "type",
  title: "title",
  message: "message",
  isRead: "isRead",
  userId: "userId",
  orderId: "orderId",
  createdAt: "createdAt"
};
var OrderScalarFieldEnum = {
  id: "id",
  orderSeq: "orderSeq",
  orderNumber: "orderNumber",
  orderType: "orderType",
  totalAmount: "totalAmount",
  paymentStatus: "paymentStatus",
  paymentMethod: "paymentMethod",
  orderStatus: "orderStatus",
  fullName: "fullName",
  phone: "phone",
  email: "email",
  address: "address",
  district: "district",
  notes: "notes",
  userId: "userId",
  shopId: "shopId",
  discountAmount: "discountAmount",
  shippingFee: "shippingFee",
  couponId: "couponId",
  courierProvider: "courierProvider",
  courierConsignmentId: "courierConsignmentId",
  courierTrackingCode: "courierTrackingCode",
  courierStatus: "courierStatus",
  courierAssignedAt: "courierAssignedAt",
  paymentValId: "paymentValId",
  bkashPaymentId: "bkashPaymentId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var OrderItemScalarFieldEnum = {
  id: "id",
  quantity: "quantity",
  price: "price",
  costPrice: "costPrice",
  vendorEarning: "vendorEarning",
  platformEarning: "platformEarning",
  status: "status",
  returnedQuantity: "returnedQuantity",
  orderId: "orderId",
  productId: "productId",
  productVariantId: "productVariantId",
  shopId: "shopId"
};
var OrderReturnScalarFieldEnum = {
  id: "id",
  orderId: "orderId",
  shopId: "shopId",
  refundAmount: "refundAmount",
  shippingFee: "shippingFee",
  discountAmount: "discountAmount",
  newTotalAmount: "newTotalAmount",
  processedByAdminId: "processedByAdminId",
  createdAt: "createdAt"
};
var OrderReturnItemScalarFieldEnum = {
  id: "id",
  orderReturnId: "orderReturnId",
  orderItemId: "orderItemId",
  productId: "productId",
  productVariantId: "productVariantId",
  quantity: "quantity",
  price: "price",
  subtotal: "subtotal"
};
var PageContentScalarFieldEnum = {
  id: "id",
  slug: "slug",
  title: "title",
  content: "content",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var PaymentSettingScalarFieldEnum = {
  id: "id",
  codEnabled: "codEnabled",
  sslcommerzEnabled: "sslcommerzEnabled",
  sslcommerzMode: "sslcommerzMode",
  sslcommerzStoreId: "sslcommerzStoreId",
  sslcommerzStorePassword: "sslcommerzStorePassword",
  bkashEnabled: "bkashEnabled",
  bkashMode: "bkashMode",
  bkashAppKey: "bkashAppKey",
  bkashAppSecret: "bkashAppSecret",
  bkashUsername: "bkashUsername",
  bkashPassword: "bkashPassword",
  updatedAt: "updatedAt"
};
var PopupScalarFieldEnum = {
  id: "id",
  title: "title",
  image: "image",
  link: "link",
  delaySeconds: "delaySeconds",
  isActive: "isActive",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var PosCartItemScalarFieldEnum = {
  id: "id",
  shopId: "shopId",
  productId: "productId",
  productVariantId: "productVariantId",
  productName: "productName",
  price: "price",
  quantity: "quantity",
  combination: "combination",
  productImage: "productImage",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ProductScalarFieldEnum = {
  id: "id",
  name: "name",
  slug: "slug",
  description: "description",
  shortDescription: "shortDescription",
  images: "images",
  videoUrl: "videoUrl",
  stock: "stock",
  status: "status",
  type: "type",
  attributes: "attributes",
  sku: "sku",
  purchasePrice: "purchasePrice",
  regularPrice: "regularPrice",
  sellPrice: "sellPrice",
  tags: "tags",
  vatType: "vatType",
  vatPercentage: "vatPercentage",
  freeShipping: "freeShipping",
  highlights: "highlights",
  shopId: "shopId",
  categoryId: "categoryId",
  brandId: "brandId",
  sizeChartId: "sizeChartId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ProductVariantScalarFieldEnum = {
  id: "id",
  productId: "productId",
  combination: "combination",
  sku: "sku",
  quantity: "quantity",
  purchasePrice: "purchasePrice",
  regularPrice: "regularPrice",
  sellPrice: "sellPrice",
  image: "image",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var DocumentEmbeddingScalarFieldEnum = {
  id: "id",
  chunkKey: "chunkKey",
  sourceType: "sourceType",
  sourceId: "sourceId",
  sourceLabel: "sourceLabel",
  content: "content",
  metadata: "metadata",
  isDeleted: "isDeleted",
  deletedAt: "deletedAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ReviewScalarFieldEnum = {
  id: "id",
  rating: "rating",
  comment: "comment",
  userId: "userId",
  productId: "productId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SampleWorkScalarFieldEnum = {
  id: "id",
  title: "title",
  description: "description",
  fileUrl: "fileUrl",
  publicId: "publicId",
  fileSize: "fileSize",
  order: "order",
  isActive: "isActive",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ShippingSettingScalarFieldEnum = {
  id: "id",
  insideDhakaShippingFee: "insideDhakaShippingFee",
  outsideDhakaShippingFee: "outsideDhakaShippingFee",
  updatedAt: "updatedAt"
};
var ShopScalarFieldEnum = {
  id: "id",
  name: "name",
  description: "description",
  logo: "logo",
  banner: "banner",
  vendorId: "vendorId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SiteSettingScalarFieldEnum = {
  id: "id",
  siteName: "siteName",
  tagline: "tagline",
  description: "description",
  logo: "logo",
  phone: "phone",
  email: "email",
  address: "address",
  facebook: "facebook",
  youtube: "youtube",
  instagram: "instagram",
  linkedin: "linkedin",
  tiktok: "tiktok",
  whatsapp: "whatsapp",
  copyrightText: "copyrightText",
  lowStockThreshold: "lowStockThreshold",
  updatedAt: "updatedAt"
};
var SizeChartScalarFieldEnum = {
  id: "id",
  name: "name",
  image: "image",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SmsSettingScalarFieldEnum = {
  id: "id",
  enabled: "enabled",
  apiKey: "apiKey",
  senderId: "senderId",
  updatedAt: "updatedAt"
};
var StaffRoleScalarFieldEnum = {
  id: "id",
  name: "name",
  permissions: "permissions",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var TestimonialScalarFieldEnum = {
  id: "id",
  name: "name",
  role: "role",
  content: "content",
  avatar: "avatar",
  rating: "rating",
  order: "order",
  isActive: "isActive",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var JsonNullValueInput = {
  JsonNull: JsonNull2
};
var NullableJsonNullValueInput = {
  DbNull: DbNull2,
  JsonNull: JsonNull2
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var JsonNullValueFilter = {
  DbNull: DbNull2,
  JsonNull: JsonNull2,
  AnyNull: AnyNull2
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var defineExtension = runtime2.Extensions.defineExtension;

// src/generated/prisma/enums.ts
var Role = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  USER: "USER"
};
var UserStatus = {
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
  PENDING: "PENDING",
  DELETED: "DELETED"
};
var ProductStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  DELETED: "DELETED"
};
var OrderStatus = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED"
};
var PaymentStatus = {
  PENDING: "PENDING",
  PAID: "PAID",
  FAILED: "FAILED",
  REFUNDED: "REFUNDED"
};
var ProductType = {
  SIMPLE: "SIMPLE",
  VARIABLE: "VARIABLE"
};
var OrderType = {
  ONLINE: "ONLINE",
  POS: "POS",
  LANDING_PAGE: "LANDING_PAGE"
};
var CheckoutSource = {
  STOREFRONT: "STOREFRONT",
  LANDING_PAGE: "LANDING_PAGE"
};
var CourierProvider = {
  PATHAO: "PATHAO",
  STEADFAST: "STEADFAST",
  REDX: "REDX"
};
var HomeCategoryDisplayType = {
  BEST_SELLING: "BEST_SELLING",
  LATEST: "LATEST"
};
var ProductHighlight = {
  NEW_ARRIVAL: "NEW_ARRIVAL",
  TRENDING: "TRENDING",
  TOP_SELLING: "TOP_SELLING",
  OUR_SERVICE: "OUR_SERVICE"
};
var HeroSliderType = {
  SLIDE: "SLIDE",
  BANNER: "BANNER"
};
var HeroMediaType = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO"
};
var NotificationType = {
  ORDER_PLACED: "ORDER_PLACED",
  ORDER_STATUS_CHANGED: "ORDER_STATUS_CHANGED",
  PAYMENT_STATUS_CHANGED: "PAYMENT_STATUS_CHANGED",
  ORDER_RETURN_PROCESSED: "ORDER_RETURN_PROCESSED"
};

// src/generated/prisma/client.ts
globalThis["__dirname"] = path2.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/app/lib/auth.ts
import { PrismaPg } from "@prisma/adapter-pg";
import { bearer, emailOTP } from "better-auth/plugins";

// src/app/utils/email.ts
import ejs from "ejs";
import status2 from "http-status";
import nodemailer from "nodemailer";
import path3 from "path";
var transporter = nodemailer.createTransport({
  host: envVars.EMAIL_SENDER.SMTP_HOST,
  secure: true,
  auth: {
    user: envVars.EMAIL_SENDER.SMTP_USER,
    pass: envVars.EMAIL_SENDER.SMTP_PASS
  },
  port: Number(envVars.EMAIL_SENDER.SMTP_PORT)
});
var sendEmail = async ({
  subject,
  templateData,
  templateName,
  to,
  attachments
}) => {
  try {
    const templatePath = path3.resolve(
      process.cwd(),
      `src/app/templates/${templateName}.ejs`
    );
    const html = await ejs.renderFile(templatePath, templateData);
    const info = await transporter.sendMail({
      from: envVars.EMAIL_SENDER.SMTP_FROM,
      to,
      subject,
      html,
      attachments: attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content,
        contentType: attachment.contentType
      }))
    });
    console.log(`Email sent to ${to} : ${info.messageId}`);
  } catch (error) {
    console.log("Email Sending Error", error.message);
    throw new AppError_default(status2.INTERNAL_SERVER_ERROR, "Failed to send email");
  }
};

// src/app/lib/auth.ts
var adapter = new PrismaPg({ connectionString: envVars.DATABASE_URL });
var prisma = new PrismaClient({ adapter });
var auth = betterAuth({
  baseURL: envVars.BETTER_AUTH_URL,
  secret: envVars.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  },
  socialProviders: {
    google: {
      clientId: envVars.GOOGLE_CLIENT_ID,
      clientSecret: envVars.GOOGLE_CLIENT_SECRET,
      // callbackUrl: envVars.GOOGLE_CALLBACK_URL,
      mapProfileToUser: () => {
        return {
          role: Role.USER,
          status: UserStatus.ACTIVE,
          needPasswordChange: false,
          emailVerified: true,
          isDeleted: false,
          deletedAt: null
        };
      }
    }
  },
  // Email verification is temporarily OFF: no OTP is sent and new users are
  // created as verified (see databaseHooks below). Set these back to true and
  // remove the hook to turn it on again.
  emailVerification: {
    sendOnSignUp: false,
    sendOnSignIn: false,
    autoSignInAfterVerification: true
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => ({
          data: { ...user, emailVerified: true }
        })
      }
    }
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "USER"
      },
      status: {
        type: "string",
        required: false,
        defaultValue: "ACTIVE"
      },
      isDeleted: {
        type: "boolean",
        required: false,
        defaultValue: false
      },
      needPasswordChange: {
        type: "boolean",
        required: false,
        defaultValue: false
      }
    }
  },
  plugins: [
    bearer(),
    emailOTP({
      overrideDefaultEmailVerification: true,
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "email-verification") {
          const user = await prisma.user.findUnique({
            where: {
              email
            }
          });
          if (!user) {
            console.error(
              `User with email ${email} not found. Cannot send verification OTP.`
            );
            return;
          }
          if (user && user.role === Role.SUPER_ADMIN) {
            console.log(
              `User with email ${email} is a super admin. Skipping sending verification OTP.`
            );
            return;
          }
          if (user && !user.emailVerified) {
            sendEmail({
              to: email,
              subject: "Verify your email",
              templateName: "otp",
              templateData: {
                name: user.name,
                otp
              }
            });
          }
        } else if (type === "forget-password") {
          const user = await prisma.user.findUnique({
            where: {
              email
            }
          });
          if (user) {
            sendEmail({
              to: email,
              subject: "Password Reset OTP",
              templateName: "otp",
              templateData: {
                name: user.name,
                otp
              }
            });
          }
        }
      },
      expiresIn: 2 * 60,
      // 2 minutes in seconds
      otpLength: 6
    })
  ],
  session: {
    expiresIn: 60 * 60 * 60 * 24,
    // 1 day in seconds
    updateAge: 60 * 60 * 60 * 24,
    // 1 day in seconds
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 60 * 24
      // 1 day in seconds
    }
  },
  redirectURLs: {
    signIn: `${envVars.BETTER_AUTH_URL}/api/v1/auth/google/success`
  },
  trustedOrigins: [
    process.env.BETTER_AUTH_URL || "http://localhost:5000",
    envVars.FRONTEND_URL,
    // The Google redirect page (/api/v1/auth/login/google) is served by the
    // backend and calls sign-in from there, so its origin must be trusted too.
    process.env.BACKEND_URL || `http://localhost:${envVars.PORT}`
  ],
  advanced: {
    // disableCSRFCheck: true,
    useSecureCookies: false,
    cookies: {
      state: {
        attributes: {
          sameSite: "none",
          secure: process.env.NODE_ENV === "production",
          httpOnly: true,
          path: "/"
        }
      },
      sessionToken: {
        attributes: {
          sameSite: "none",
          secure: process.env.NODE_ENV === "production",
          httpOnly: true,
          path: "/"
        }
      }
    }
  }
});

// src/app/routes/index.ts
import { Router as Router35 } from "express";

// src/app/module/auth/auth.router.ts
import { Router } from "express";

// src/app/shared/catchAsync.ts
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

// src/app/module/auth/auth.service.ts
import status3 from "http-status";

// src/app/lib/prisma.ts
import { PrismaPg as PrismaPg2 } from "@prisma/adapter-pg";
var connectionString = envVars.DATABASE_URL;
var adapter2 = new PrismaPg2({ connectionString });
var prisma2 = new PrismaClient({ adapter: adapter2 });

// src/app/utils/cookie.ts
var setCookie = (res, key, value, options) => {
  res.cookie(key, value, options);
};
var getCookie = (req, key) => {
  return req.cookies[key];
};
var clearCookie = (res, key, options) => {
  res.clearCookie(key, options);
};
var CookieUtils = {
  setCookie,
  getCookie,
  clearCookie
};

// src/app/utils/jwt.ts
import jwt from "jsonwebtoken";
var createToken = (payload, secret, { expiresIn }) => {
  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};
var verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      success: true,
      data: decoded
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      error
    };
  }
};
var decodeToken = (token) => {
  const decoded = jwt.decode(token);
  return decoded;
};
var jwtUtils = {
  createToken,
  verifyToken,
  decodeToken
};

// src/app/utils/token.ts
var getAccessToken = (payload) => {
  const accessToken = jwtUtils.createToken(
    payload,
    envVars.ACCESS_TOKEN_SECRET,
    { expiresIn: envVars.ACCESS_TOKEN_EXPIRES_IN }
  );
  return accessToken;
};
var getRefreshToken = (payload) => {
  const refreshToken = jwtUtils.createToken(
    payload,
    envVars.REFRESH_TOKEN_SECRET,
    { expiresIn: envVars.REFRESH_TOKEN_EXPIRES_IN }
  );
  return refreshToken;
};
var setAccessTokenCookie = (res, token) => {
  CookieUtils.setCookie(res, "accessToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //1 day
    maxAge: 60 * 60 * 24 * 1e3
  });
};
var setRefreshTokenCookie = (res, token) => {
  CookieUtils.setCookie(res, "refreshToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //7d
    maxAge: 60 * 60 * 24 * 1e3 * 7
  });
};
var setBetterAuthSessionCookie = (res, token) => {
  CookieUtils.setCookie(res, "better-auth.session_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //1 day
    maxAge: 60 * 60 * 24 * 1e3
  });
};
var tokenUtils = {
  getAccessToken,
  getRefreshToken,
  setAccessTokenCookie,
  setRefreshTokenCookie,
  setBetterAuthSessionCookie
};

// src/app/module/auth/auth.service.ts
var registerUser = async (payload) => {
  const { name, email, password } = payload;
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password
      //default values
      // needsPasswordChange: false,
      // role: Role.USER
    }
  });
  if (!data.user) {
    throw new AppError_default(status3.BAD_REQUEST, "Failed to register user");
  }
  const accessToken = tokenUtils.getAccessToken({
    userId: data.user.id,
    role: data.user.role,
    name: data.user.name,
    email: data.user.email,
    status: data.user.status,
    isDeleted: data.user.isDeleted,
    emailVerified: data.user.emailVerified
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: data.user.id,
    role: data.user.role,
    name: data.user.name,
    email: data.user.email,
    status: data.user.status,
    isDeleted: data.user.isDeleted,
    emailVerified: data.user.emailVerified
  });
  return {
    ...data,
    accessToken,
    refreshToken
  };
};
var loginUser = async (payload) => {
  const { email, password } = payload;
  const data = await auth.api.signInEmail({
    body: {
      email,
      password
    }
  });
  if (data.user.status === UserStatus.BLOCKED) {
    throw new AppError_default(status3.FORBIDDEN, "User is blocked");
  }
  if (data.user.isDeleted || data.user.status === UserStatus.DELETED) {
    throw new AppError_default(status3.NOT_FOUND, "User is deleted");
  }
  const accessToken = tokenUtils.getAccessToken({
    userId: data.user.id,
    role: data.user.role,
    name: data.user.name,
    email: data.user.email,
    status: data.user.status,
    isDeleted: data.user.isDeleted,
    emailVerified: data.user.emailVerified
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: data.user.id,
    role: data.user.role,
    name: data.user.name,
    email: data.user.email,
    status: data.user.status,
    isDeleted: data.user.isDeleted,
    emailVerified: data.user.emailVerified
  });
  return {
    ...data,
    accessToken,
    refreshToken
  };
};
var getMe = async (user) => {
  const isUserExists = await prisma2.user.findUnique({
    where: {
      id: user.userId
    },
    include: { staffRole: { select: { name: true, permissions: true } } }
  });
  if (!isUserExists) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  const { staffRole, ...me } = isUserExists;
  const isStaff = me.role === "ADMIN" && Boolean(me.staffRoleId);
  return {
    ...me,
    // Staff: the dashboard sections they may open. null = full access.
    permissions: isStaff ? staffRole?.permissions ?? [] : null,
    staffRoleName: isStaff ? staffRole?.name ?? null : null
  };
};
var getNewToken = async (refreshToken, sessionToken) => {
  if (!sessionToken) {
    throw new AppError_default(status3.UNAUTHORIZED, "Session token is missing");
  }
  const isSessionTokenExists = await prisma2.session.findUnique({
    where: {
      token: sessionToken
    },
    include: {
      user: true
    }
  });
  if (!isSessionTokenExists) {
    throw new AppError_default(status3.UNAUTHORIZED, "Invalid session token");
  }
  const verifiedRefreshToken = jwtUtils.verifyToken(
    refreshToken,
    envVars.REFRESH_TOKEN_SECRET
  );
  if (!verifiedRefreshToken.success && verifiedRefreshToken.error) {
    throw new AppError_default(status3.UNAUTHORIZED, "Invalid refresh token");
  }
  const data = verifiedRefreshToken.data;
  const newAccessToken = tokenUtils.getAccessToken({
    userId: data.userId,
    role: data.role,
    name: data.name,
    email: data.email,
    status: data.status,
    isDeleted: data.isDeleted,
    emailVerified: data.emailVerified
  });
  const newRefreshToken = tokenUtils.getRefreshToken({
    userId: data.userId,
    role: data.role,
    name: data.name,
    email: data.email,
    status: data.status,
    isDeleted: data.isDeleted,
    emailVerified: data.emailVerified
  });
  const { token } = await prisma2.session.update({
    where: {
      token: sessionToken
    },
    data: {
      token: sessionToken,
      expiresAt: new Date(Date.now() + 60 * 60 * 60 * 24 * 1e3),
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
    sessionToken: token
  };
};
var changePassword = async (payload, sessionToken) => {
  const session = await auth.api.getSession({
    headers: new Headers({
      Authorization: `Bearer ${sessionToken}`
    })
  });
  if (!session) {
    throw new AppError_default(status3.UNAUTHORIZED, "Invalid session token");
  }
  const { currentPassword, newPassword } = payload;
  const result = await auth.api.changePassword({
    body: {
      currentPassword,
      newPassword,
      revokeOtherSessions: true
    },
    headers: new Headers({
      Authorization: `Bearer ${sessionToken}`
    })
  });
  if (session.user.needPasswordChange) {
    await prisma2.user.update({
      where: {
        id: session.user.id
      },
      data: {
        needPasswordChange: false
      }
    });
  }
  const accessToken = tokenUtils.getAccessToken({
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name,
    email: session.user.email,
    status: session.user.status,
    isDeleted: session.user.isDeleted,
    emailVerified: session.user.emailVerified
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name,
    email: session.user.email,
    status: session.user.status,
    isDeleted: session.user.isDeleted,
    emailVerified: session.user.emailVerified
  });
  return {
    ...result,
    accessToken,
    refreshToken
  };
};
var logoutUser = async (sessionToken) => {
  const result = await auth.api.signOut({
    headers: new Headers({
      Authorization: `Bearer ${sessionToken}`
    })
  });
  return result;
};
var verifyEmail = async (email, otp) => {
  const result = await auth.api.verifyEmailOTP({
    body: {
      email,
      otp
    }
  });
  if (result.status && !result.user.emailVerified) {
    await prisma2.user.update({
      where: {
        email
      },
      data: {
        emailVerified: true
      }
    });
  }
};
var forgetPassword = async (email) => {
  const isUserExist = await prisma2.user.findUnique({
    where: {
      email
    }
  });
  if (!isUserExist) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  if (!isUserExist.emailVerified) {
    throw new AppError_default(status3.BAD_REQUEST, "Email not verified");
  }
  if (isUserExist.isDeleted || isUserExist.status === UserStatus.DELETED) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  await auth.api.requestPasswordResetEmailOTP({
    body: {
      email
    }
  });
};
var resetPassword = async (email, otp, newPassword) => {
  const isUserExist = await prisma2.user.findUnique({
    where: {
      email
    }
  });
  if (!isUserExist) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  if (!isUserExist.emailVerified) {
    throw new AppError_default(status3.BAD_REQUEST, "Email not verified");
  }
  if (isUserExist.isDeleted || isUserExist.status === UserStatus.DELETED) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  await auth.api.resetPasswordEmailOTP({
    body: {
      email,
      otp,
      password: newPassword
    }
  });
  if (isUserExist.needPasswordChange) {
    await prisma2.user.update({
      where: {
        id: isUserExist.id
      },
      data: {
        needPasswordChange: false
      }
    });
  }
  await prisma2.session.deleteMany({
    where: {
      userId: isUserExist.id
    }
  });
};
var googleLoginSuccess = async (session) => {
  const accessToken = tokenUtils.getAccessToken({
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: session.user.id,
    role: session.user.role,
    name: session.user.name
  });
  return {
    accessToken,
    refreshToken
  };
};
var updateProfile = async (user, payload) => {
  const isUserExists = await prisma2.user.findUnique({
    where: {
      id: user.userId
    }
  });
  if (!isUserExists) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  const result = await prisma2.user.update({
    where: {
      id: user.userId
    },
    data: payload
  });
  return result;
};
var AuthService = {
  registerUser,
  loginUser,
  getMe,
  getNewToken,
  changePassword,
  logoutUser,
  googleLoginSuccess,
  verifyEmail,
  forgetPassword,
  resetPassword,
  updateProfile
};

// src/app/shared/sendResponse.ts
var sendResponse = (res, responseData) => {
  const { httpStatusCode, success, message, data, meta } = responseData;
  res.status(httpStatusCode).json({
    success,
    message,
    data,
    meta
  });
};

// src/app/module/auth/auth.controller.ts
import status4 from "http-status";
var import_ms = __toESM(require_ms(), 1);
var registerUser2 = catchAsync(async (req, res) => {
  const maxAge = (0, import_ms.default)(envVars.ACCESS_TOKEN_EXPIRES_IN);
  console.log({ maxAge });
  const payload = req.body;
  console.log(payload);
  const result = await AuthService.registerUser(payload);
  const { accessToken, refreshToken, token, ...rest } = result;
  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, refreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, token);
  sendResponse(res, {
    httpStatusCode: status4.CREATED,
    success: true,
    message: "User registered successfully",
    data: {
      token,
      accessToken,
      refreshToken,
      ...rest
    }
  });
});
var loginUser2 = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await AuthService.loginUser(payload);
  const { accessToken, refreshToken, token, ...rest } = result;
  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, refreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, token);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "User logged in successfully",
    data: {
      token,
      accessToken,
      refreshToken,
      ...rest
    }
  });
});
var getMe2 = catchAsync(async (req, res) => {
  const user = req.user;
  console.log({ user });
  const result = await AuthService.getMe(user);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "User profile fetched successfully",
    data: result
  });
});
var getNewToken2 = catchAsync(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const betterAuthSessionToken = req.cookies["better-auth.session_token"];
  if (!refreshToken) {
    throw new AppError_default(status4.UNAUTHORIZED, "Refresh token is missing");
  }
  const result = await AuthService.getNewToken(
    refreshToken,
    betterAuthSessionToken
  );
  const { accessToken, refreshToken: newRefreshToken, sessionToken } = result;
  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, newRefreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, sessionToken);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "New tokens generated successfully",
    data: {
      accessToken,
      refreshToken: newRefreshToken,
      sessionToken
    }
  });
});
var changePassword2 = catchAsync(async (req, res) => {
  const payload = req.body;
  const betterAuthSessionToken = req.cookies["better-auth.session_token"];
  const result = await AuthService.changePassword(
    payload,
    betterAuthSessionToken
  );
  const { accessToken, refreshToken, token } = result;
  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, refreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, token);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "Password changed successfully",
    data: result
  });
});
var logoutUser2 = catchAsync(async (req, res) => {
  const betterAuthSessionToken = req.cookies["better-auth.session_token"];
  const result = await AuthService.logoutUser(betterAuthSessionToken);
  CookieUtils.clearCookie(res, "accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  CookieUtils.clearCookie(res, "refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  CookieUtils.clearCookie(res, "better-auth.session_token", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "User logged out successfully",
    data: result
  });
});
var verifyEmail2 = catchAsync(async (req, res) => {
  const { email, otp } = req.body;
  await AuthService.verifyEmail(email, otp);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "Email verified successfully"
  });
});
var forgetPassword2 = catchAsync(async (req, res) => {
  const { email } = req.body;
  await AuthService.forgetPassword(email);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "Password reset OTP sent to email successfully"
  });
});
var resetPassword2 = catchAsync(async (req, res) => {
  const { email, otp, newPassword } = req.body;
  await AuthService.resetPassword(email, otp, newPassword);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "Password reset successfully"
  });
});
var googleLogin = catchAsync((req, res) => {
  const redirectPath = req.query.redirect || "/dashboard";
  const encodedRedirectPath = encodeURIComponent(redirectPath);
  const callbackURL = `${envVars.BETTER_AUTH_URL}/api/v1/auth/google/success?redirect=${encodedRedirectPath}`;
  res.render("googleRedirect", {
    callbackURL,
    betterAuthUrl: envVars.BETTER_AUTH_URL
  });
});
var googleLoginSuccess2 = catchAsync(async (req, res) => {
  const redirectPath = req.query.redirect || "/dashboard";
  const sessionToken = req.cookies["better-auth.session_token"];
  if (!sessionToken) {
    return res.redirect(`${envVars.FRONTEND_URL}/login?error=oauth_failed`);
  }
  const session = await auth.api.getSession({
    headers: {
      Cookie: `better-auth.session_token=${sessionToken}`
    }
  });
  if (!session) {
    return res.redirect(`${envVars.FRONTEND_URL}/login?error=no_session_found`);
  }
  if (session && !session.user) {
    return res.redirect(`${envVars.FRONTEND_URL}/login?error=no_user_found`);
  }
  const result = await AuthService.googleLoginSuccess(session);
  const { accessToken, refreshToken } = result;
  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, refreshToken);
  const isValidRedirectPath = redirectPath.startsWith("/") && !redirectPath.startsWith("//");
  const finalRedirectPath = isValidRedirectPath ? redirectPath : "/dashboard";
  res.redirect(`${envVars.FRONTEND_URL}${finalRedirectPath}`);
});
var handleOAuthError = catchAsync((req, res) => {
  const error = req.query.error || "oauth_failed";
  res.redirect(`${envVars.FRONTEND_URL}/login?error=${error}`);
});
var updateProfile2 = catchAsync(async (req, res) => {
  const user = req.user;
  const payload = req.file?.path ? { ...req.body, image: req.file.path } : req.body;
  const result = await AuthService.updateProfile(user, payload);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "User profile updated successfully",
    data: result
  });
});
var AuthController = {
  registerUser: registerUser2,
  loginUser: loginUser2,
  getMe: getMe2,
  getNewToken: getNewToken2,
  changePassword: changePassword2,
  logoutUser: logoutUser2,
  googleLogin,
  googleLoginSuccess: googleLoginSuccess2,
  handleOAuthError,
  verifyEmail: verifyEmail2,
  forgetPassword: forgetPassword2,
  resetPassword: resetPassword2,
  updateProfile: updateProfile2
};

// src/app/middleware/checkAuth.ts
import status5 from "http-status";

// src/app/module/staff/staffPermissions.ts
var PERMISSION_GROUPS = [
  {
    group: "Dashboard",
    permissions: [
      { key: "dashboard.view", label: "View dashboard & sales figures" }
    ]
  },
  {
    group: "Products",
    permissions: [
      { key: "product.view", label: "View products" },
      { key: "product.create", label: "Add products" },
      { key: "product.update", label: "Edit products" },
      { key: "product.delete", label: "Delete products" },
      { key: "stock.manage", label: "Manage low stock" },
      { key: "category.manage", label: "Manage categories" },
      { key: "brand.manage", label: "Manage brands" },
      { key: "attribute.manage", label: "Manage attributes" },
      { key: "sizeChart.manage", label: "Manage size charts" }
    ]
  },
  {
    group: "Orders",
    permissions: [
      { key: "order.view", label: "View orders" },
      { key: "order.update", label: "Update orders (status, courier, items)" },
      { key: "order.delete", label: "Delete orders" },
      { key: "return.manage", label: "Process returns" },
      { key: "pos.use", label: "Use POS" }
    ]
  },
  {
    group: "Marketing",
    permissions: [
      { key: "coupon.manage", label: "Manage coupons" },
      { key: "flashSale.manage", label: "Manage flash sale" },
      { key: "landingPage.manage", label: "Manage landing pages" }
    ]
  },
  {
    group: "Website",
    permissions: [
      { key: "homepage.manage", label: "Manage homepage (sliders, banners, popups, testimonials, clients, sample works)" },
      { key: "page.manage", label: "Manage pages & FAQ" },
      { key: "blog.manage", label: "Manage blogs" }
    ]
  },
  {
    group: "Reports & Expenses",
    permissions: [
      { key: "report.view", label: "View reports & analytics" },
      { key: "expense.manage", label: "Manage expenses" }
    ]
  },
  {
    group: "Customers",
    permissions: [{ key: "customer.manage", label: "View & block customers" }]
  },
  {
    group: "Settings",
    permissions: [
      { key: "setting.manage", label: "Site, payment, courier, SMS & shipping settings" }
    ]
  }
];
var ALL_PERMISSIONS = PERMISSION_GROUPS.flatMap(
  (g) => g.permissions.map((p) => p.key)
);
var isRead = (method) => method === "GET";
var requiredStaffPermission = (path5, method) => {
  const [, base = "", ...rest] = path5.split("/");
  const sub = `/${rest.join("/")}`;
  switch (base) {
    // Personal / shopper endpoints any signed-in account uses
    case "auth":
    case "cart":
    case "notifications":
    case "payments":
    case "reviews":
      return null;
    case "analytics":
      return sub.startsWith("/admin") ? "dashboard.view" : null;
    case "products":
      if (sub.startsWith("/generate-sku")) return ["product.create", "product.update"];
      if (method === "POST") return "product.create";
      if (method === "DELETE") return "product.delete";
      return "product.update";
    case "ai":
      return sub.startsWith("/analyze-business") ? "report.view" : ["product.create", "product.update"];
    case "low-stock":
      return "stock.manage";
    case "categories":
      return "category.manage";
    case "brands":
      return "brand.manage";
    case "attributes":
      return "attribute.manage";
    case "size-charts":
      return isRead(method) ? ["sizeChart.manage", "product.create", "product.update"] : "sizeChart.manage";
    case "orders":
      if (sub === "/" && method === "POST" || sub.startsWith("/my-orders")) {
        return null;
      }
      if (method === "DELETE") return "order.delete";
      if (isRead(method)) return "order.view";
      return "order.update";
    case "abandoned-checkouts":
      return method === "DELETE" ? "order.delete" : "order.view";
    case "order-returns":
      return "return.manage";
    case "blocked-phones":
      return "order.update";
    case "pos":
      return sub.startsWith("/products") && isRead(method) ? ["pos.use", "order.update"] : "pos.use";
    case "coupons":
      return "coupon.manage";
    case "flash-sale":
      return "flashSale.manage";
    case "landing-pages":
      return "landingPage.manage";
    case "hero-sliders":
    case "home-promo":
    case "home-category-sections":
    case "testimonials":
    case "client-logos":
    case "popups":
    case "sample-works":
      return "homepage.manage";
    case "pages":
    case "faqs":
      return "page.manage";
    case "blogs":
      return "blog.manage";
    case "sales-report":
    case "profit-loss":
    case "platform-report":
    case "district-report":
    case "customer-segment-report":
      return "report.view";
    case "expenses":
      return "expense.manage";
    case "admin":
      return "customer.manage";
    case "site-settings":
    case "shipping-settings":
    case "gtm-settings":
    case "payment-settings":
    case "courier-settings":
    case "sms-settings":
    case "shops":
      return "setting.manage";
    // Includes /staff: roles and staff accounts are for full admins only
    default:
      return void 0;
  }
};
var hasStaffPermission = (granted, rule) => {
  if (rule === null) return true;
  if (rule === void 0) return false;
  const needed = Array.isArray(rule) ? rule : [rule];
  return needed.some((p) => granted.includes(p));
};

// src/app/middleware/checkAuth.ts
var staffRoleInclude = {
  staffRole: { select: { permissions: true } }
};
var getStaffPermissions = (user) => user.role === Role.ADMIN && user.staffRoleId ? user.staffRole?.permissions ?? [] : void 0;
var checkAuth = (...authRoles) => async (req, res, next) => {
  try {
    const sessionToken = CookieUtils.getCookie(
      req,
      "better-auth.session_token"
    );
    if (!sessionToken) {
      throw new AppError_default(
        status5.UNAUTHORIZED,
        "Unauthorized access! No session token provided."
      );
    }
    if (sessionToken) {
      const sessionExists = await prisma2.session.findFirst({
        where: {
          token: sessionToken,
          expiresAt: {
            gt: /* @__PURE__ */ new Date()
          }
        },
        include: {
          user: { include: staffRoleInclude }
        }
      });
      if (sessionExists && sessionExists.user) {
        const user = sessionExists.user;
        const now = /* @__PURE__ */ new Date();
        const expiresAt = new Date(sessionExists.expiresAt);
        const createdAt = new Date(sessionExists.createdAt);
        const sessionLifeTime = expiresAt.getTime() - createdAt.getTime();
        const timeRemaining = expiresAt.getTime() - now.getTime();
        const percentRemaining = timeRemaining / sessionLifeTime * 100;
        if (percentRemaining < 20) {
          res.setHeader("X-Session-Refresh", "true");
          res.setHeader("X-Session-Expires-At", expiresAt.toISOString());
          res.setHeader("X-Time-Remaining", timeRemaining.toString());
          console.log("Session Expiring Soon!!");
        }
        if (user.status === UserStatus.BLOCKED || user.status === UserStatus.DELETED) {
          throw new AppError_default(
            status5.UNAUTHORIZED,
            "Unauthorized access! User is not active."
          );
        }
        if (user.isDeleted) {
          throw new AppError_default(
            status5.UNAUTHORIZED,
            "Unauthorized access! User is deleted."
          );
        }
        if (authRoles.length > 0 && !authRoles.includes(user.role)) {
          throw new AppError_default(
            status5.FORBIDDEN,
            "Forbidden access! You do not have permission to access this resource."
          );
        }
        req.user = {
          userId: user.id,
          role: user.role,
          email: user.email,
          staffPermissions: getStaffPermissions(user)
        };
      }
      const accessToken2 = CookieUtils.getCookie(req, "accessToken");
      if (!accessToken2) {
        throw new AppError_default(
          status5.UNAUTHORIZED,
          "Unauthorized access! No access token provided."
        );
      }
    }
    const accessToken = CookieUtils.getCookie(req, "accessToken");
    if (!accessToken) {
      throw new AppError_default(
        status5.UNAUTHORIZED,
        "Unauthorized access! No access token provided."
      );
    }
    const verifiedToken = jwtUtils.verifyToken(
      accessToken,
      envVars.ACCESS_TOKEN_SECRET
    );
    if (!verifiedToken.success) {
      throw new AppError_default(
        status5.UNAUTHORIZED,
        "Unauthorized access! Invalid access token."
      );
    }
    if (!req.user) {
      const userExists = await prisma2.user.findUnique({
        where: { id: verifiedToken.data.userId },
        include: staffRoleInclude
      });
      if (!userExists || userExists.isDeleted || userExists.status === UserStatus.BLOCKED || userExists.status === UserStatus.DELETED) {
        throw new AppError_default(
          status5.UNAUTHORIZED,
          "Unauthorized access! User no longer exists or is inactive."
        );
      }
      req.user = {
        userId: userExists.id,
        role: userExists.role,
        email: userExists.email,
        staffPermissions: getStaffPermissions(userExists)
      };
    }
    if (authRoles.length > 0 && !authRoles.includes(req.user.role)) {
      throw new AppError_default(
        status5.FORBIDDEN,
        "Forbidden access! You do not have permission to access this resource."
      );
    }
    if (req.user.staffPermissions) {
      const path5 = req.originalUrl.split("?")[0].replace(/^\/api\/v1/, "");
      const rule = requiredStaffPermission(path5, req.method);
      if (!hasStaffPermission(req.user.staffPermissions, rule)) {
        throw new AppError_default(
          status5.FORBIDDEN,
          "Your role does not have access to this section."
        );
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

// src/app/config/multer.config.ts
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// src/app/config/cloudinary.config.ts
import { v2 as cloudinary } from "cloudinary";
import status6 from "http-status";
cloudinary.config({
  cloud_name: envVars.CLOUDINARY.CLOUDINARY_CLOUD_NAME,
  api_key: envVars.CLOUDINARY.CLOUDINARY_API_KEY,
  api_secret: envVars.CLOUDINARY.CLOUDINARY_API_SECRET
});
var deleteFileFromCloudinary = async (url) => {
  try {
    const regex = /\/v\d+\/(.+?)(?:\.[a-zA-Z0-9]+)+$/;
    const match = url.match(regex);
    if (match && match[1]) {
      const publicId = match[1];
      await cloudinary.uploader.destroy(publicId, {
        resource_type: "image"
      });
      console.log(`File ${publicId} deleted from cloudinary`);
    }
  } catch (error) {
    console.error("Error deleting file from Cloudinary:", error);
    throw new AppError_default(
      status6.INTERNAL_SERVER_ERROR,
      "Failed to delete file from Cloudinary"
    );
  }
};
var cloudinaryUpload = cloudinary;

// src/app/config/multer.config.ts
var storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: async (req, file) => {
    const originalName = file.originalname;
    const extension = originalName.split(".").pop()?.toLocaleLowerCase();
    const fileNameWithoutExtension = originalName.split(".").slice(0, -1).join(".").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
    const uniqueName = Math.random().toString(36).substring(2) + "-" + Date.now() + "-" + fileNameWithoutExtension;
    const folder = extension === "pdf" ? "pdfs" : file.mimetype.startsWith("video/") ? "videos" : "images";
    return {
      folder: `abtrims/${folder}`,
      public_id: uniqueName,
      resource_type: "auto"
    };
  }
});
var multerUpload = multer({ storage });

// src/app/module/auth/auth.router.ts
var router = Router();
router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.get(
  "/me",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN, Role.USER),
  AuthController.getMe
);
router.post("/refresh-token", AuthController.getNewToken);
router.post(
  "/change-password",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN, Role.USER),
  AuthController.changePassword
);
router.post(
  "/logout",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN, Role.USER),
  AuthController.logoutUser
);
router.get("/login/google", AuthController.googleLogin);
router.get("/google/success", AuthController.googleLoginSuccess);
router.get("/oauth/error", AuthController.handleOAuthError);
router.post("/verify-email", AuthController.verifyEmail);
router.post("/forget-password", AuthController.forgetPassword);
router.post("/reset-password", AuthController.resetPassword);
router.patch(
  "/update-profile",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN, Role.USER),
  multerUpload.single("file"),
  AuthController.updateProfile
);
var AuthRoutes = router;

// src/app/module/category/category.route.ts
import { Router as Router2 } from "express";

// src/app/middleware/validateRequest.ts
var validateRequest = (zodSchema) => {
  return (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    console.log(req.body);
    const parsedResult = zodSchema.safeParse(req.body);
    if (!parsedResult.success) {
      return next(parsedResult.error);
    }
    req.body = parsedResult.data;
    next();
  };
};

// src/app/module/category/category.controller.ts
import status8 from "http-status";

// src/app/module/category/category.service.ts
import status7 from "http-status";

// src/app/utils/QueryBuilder.ts
var QueryBuilder = class {
  constructor(model, queryParams, config2 = {}) {
    this.model = model;
    this.queryParams = queryParams;
    this.config = config2;
    this.query = {
      where: {},
      include: {},
      orderBy: {},
      skip: 0,
      take: 10
    };
    this.countQuery = {
      where: {}
    };
  }
  model;
  queryParams;
  config;
  query;
  countQuery;
  page = 1;
  limit = 10;
  skip = 0;
  sortBy = "createdAt";
  sortOrder = "desc";
  selectFields;
  search() {
    const { searchTerm } = this.queryParams;
    const { searchableFields } = this.config;
    if (searchTerm && searchableFields && searchableFields.length > 0) {
      const searchConditions = searchableFields.map(
        (field) => {
          if (field.includes(".")) {
            const parts = field.split(".");
            if (parts.length === 2) {
              const [relation, nestedField] = parts;
              const stringFilter2 = {
                contains: searchTerm,
                mode: "insensitive"
              };
              return {
                [relation]: {
                  [nestedField]: stringFilter2
                }
              };
            } else if (parts.length === 3) {
              const [relation, nestedRelation, nestedField] = parts;
              const stringFilter2 = {
                contains: searchTerm,
                mode: "insensitive"
              };
              return {
                [relation]: {
                  some: {
                    [nestedRelation]: {
                      [nestedField]: stringFilter2
                    }
                  }
                }
              };
            }
          }
          const stringFilter = {
            contains: searchTerm,
            mode: "insensitive"
          };
          return {
            [field]: stringFilter
          };
        }
      );
      const whereConditions = this.query.where;
      whereConditions.OR = searchConditions;
      const countWhereConditions = this.countQuery.where;
      countWhereConditions.OR = searchConditions;
    }
    return this;
  }
  filter() {
    const { filterableFields } = this.config;
    const excludedField = [
      "searchTerm",
      "page",
      "limit",
      "sortBy",
      "sortOrder",
      "sort",
      "fields",
      "include"
    ];
    const filterParams = {};
    Object.keys(this.queryParams).forEach((key) => {
      if (!excludedField.includes(key)) {
        filterParams[key] = this.queryParams[key];
      }
    });
    const queryWhere = this.query.where;
    const countQueryWhere = this.countQuery.where;
    Object.keys(filterParams).forEach((key) => {
      const value = filterParams[key];
      if (value === void 0 || value === "") {
        return;
      }
      const isAllowedField = !filterableFields || filterableFields.length === 0 || filterableFields.includes(key);
      if (key.includes(".")) {
        const parts = key.split(".");
        if (filterableFields && !filterableFields.includes(key)) {
          return;
        }
        if (parts.length === 2) {
          const [relation, nestedField] = parts;
          if (!queryWhere[relation]) {
            queryWhere[relation] = {};
            countQueryWhere[relation] = {};
          }
          const queryRelation = queryWhere[relation];
          const countRelation = countQueryWhere[relation];
          queryRelation[nestedField] = this.parseFilterValue(value);
          countRelation[nestedField] = this.parseFilterValue(value);
          return;
        } else if (parts.length === 3) {
          const [relation, nestedRelation, nestedField] = parts;
          if (!queryWhere[relation]) {
            queryWhere[relation] = {
              some: {}
            };
            countQueryWhere[relation] = {
              some: {}
            };
          }
          const queryRelation = queryWhere[relation];
          const countRelation = countQueryWhere[relation];
          if (!queryRelation.some) {
            queryRelation.some = {};
          }
          if (!countRelation.some) {
            countRelation.some = {};
          }
          const querySome = queryRelation.some;
          const countSome = countRelation.some;
          if (!querySome[nestedRelation]) {
            querySome[nestedRelation] = {};
          }
          if (!countSome[nestedRelation]) {
            countSome[nestedRelation] = {};
          }
          const queryNestedRelation = querySome[nestedRelation];
          const countNestedRelation = countSome[nestedRelation];
          queryNestedRelation[nestedField] = this.parseFilterValue(value);
          countNestedRelation[nestedField] = this.parseFilterValue(value);
          return;
        }
      }
      if (!isAllowedField) {
        return;
      }
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        queryWhere[key] = this.parseRangeFilter(
          value
        );
        countQueryWhere[key] = this.parseRangeFilter(
          value
        );
        return;
      }
      queryWhere[key] = this.parseFilterValue(value);
      countQueryWhere[key] = this.parseFilterValue(value);
    });
    return this;
  }
  paginate() {
    const page = Number(this.queryParams.page) || 1;
    const limit = Number(this.queryParams.limit) || 10;
    this.page = page;
    this.limit = limit;
    this.skip = (page - 1) * limit;
    this.query.skip = this.skip;
    this.query.take = this.limit;
    return this;
  }
  sort() {
    const sortBy = this.queryParams.sortBy || "createdAt";
    const sortOrder = this.queryParams.sortOrder === "asc" ? "asc" : "desc";
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
    if (sortBy.includes(".")) {
      const parts = sortBy.split(".");
      if (parts.length === 2) {
        const [relation, nestedField] = parts;
        this.query.orderBy = {
          [relation]: {
            [nestedField]: sortOrder
          }
        };
      } else if (parts.length === 3) {
        const [relation, nestedRelation, nestedField] = parts;
        this.query.orderBy = {
          [relation]: {
            [nestedRelation]: {
              [nestedField]: sortOrder
            }
          }
        };
      } else {
        this.query.orderBy = {
          [sortBy]: sortOrder
        };
      }
    } else {
      this.query.orderBy = {
        [sortBy]: sortOrder
      };
    }
    return this;
  }
  // Leave heavy columns out of the result (Prisma `omit`)
  omit(fields) {
    this.query.omit = fields;
    return this;
  }
  fields() {
    const fieldsParam = this.queryParams.fields;
    if (fieldsParam && typeof fieldsParam === "string") {
      const fieldsArray = fieldsParam?.split(",").map((field) => field.trim());
      this.selectFields = {};
      fieldsArray?.forEach((field) => {
        if (this.selectFields) {
          this.selectFields[field] = true;
        }
      });
      this.query.select = this.selectFields;
      delete this.query.include;
    }
    return this;
  }
  include(relation) {
    if (this.selectFields) {
      return this;
    }
    this.query.include = {
      ...this.query.include,
      ...relation
    };
    return this;
  }
  dynamicInclude(includeConfig, defaultInclude) {
    if (this.selectFields) {
      return this;
    }
    const result = {};
    defaultInclude?.forEach((field) => {
      if (includeConfig[field]) {
        result[field] = includeConfig[field];
      }
    });
    const includeParam = this.queryParams.include;
    if (includeParam && typeof includeParam === "string") {
      const requestedRelations = includeParam.split(",").map((relation) => relation.trim());
      requestedRelations.forEach((relation) => {
        if (includeConfig[relation]) {
          result[relation] = includeConfig[relation];
        }
      });
    }
    this.query.include = {
      ...this.query.include,
      ...result
    };
    return this;
  }
  where(condition) {
    this.query.where = this.deepMerge(
      this.query.where,
      condition
    );
    this.countQuery.where = this.deepMerge(
      this.countQuery.where,
      condition
    );
    return this;
  }
  async execute() {
    const [total, data] = await Promise.all([
      this.model.count(
        this.countQuery
      ),
      this.model.findMany(
        this.query
      )
    ]);
    const totalPages = Math.ceil(total / this.limit);
    return {
      data,
      meta: {
        page: this.page,
        limit: this.limit,
        total,
        totalPages
      }
    };
  }
  async count() {
    return await this.model.count(
      this.countQuery
    );
  }
  getQuery() {
    return this.query;
  }
  deepMerge(target, source) {
    const result = { ...target };
    for (const key in source) {
      if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
        if (result[key] && typeof result[key] === "object" && !Array.isArray(result[key])) {
          result[key] = this.deepMerge(
            result[key],
            source[key]
          );
        } else {
          result[key] = source[key];
        }
      } else {
        result[key] = source[key];
      }
    }
    return result;
  }
  parseFilterValue(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (typeof value === "string" && !isNaN(Number(value)) && value != "") {
      return Number(value);
    }
    if (Array.isArray(value)) {
      return { in: value.map((item) => this.parseFilterValue(item)) };
    }
    return value;
  }
  parseRangeFilter(value) {
    const rangeQuery = {};
    Object.keys(value).forEach((operator) => {
      const operatorValue = value[operator];
      const parsedValue = typeof operatorValue === "string" && !isNaN(Number(operatorValue)) ? Number(operatorValue) : operatorValue;
      switch (operator) {
        case "lt":
        case "lte":
        case "gt":
        case "gte":
        case "equals":
        case "not":
        case "contains":
        case "startsWith":
        case "endsWith":
          rangeQuery[operator] = parsedValue;
          break;
        case "in":
        case "notIn":
          if (Array.isArray(operatorValue)) {
            rangeQuery[operator] = operatorValue;
          } else {
            rangeQuery[operator] = [parsedValue];
          }
          break;
        default:
          break;
      }
    });
    return Object.keys(rangeQuery).length > 0 ? rangeQuery : value;
  }
};

// src/app/utils/generateSlug.ts
var toSlug = (text) => {
  const slug = text.toLowerCase().trim().replace(/[^\p{L}\p{M}\p{N}\s-]/gu, "").replace(/[\s_]+/g, "-").replace(/--+/g, "-").replace(/^-+|-+$/g, "");
  return slug || `item-${Date.now().toString(36)}`;
};
var generateUniqueSlug = async (prisma3, name, model, excludeId) => {
  const baseSlug = toSlug(name);
  let slug = baseSlug;
  let counter = 2;
  while (true) {
    let existing = null;
    if (model === "product") {
      existing = await prisma3.product.findUnique({
        where: { slug },
        select: { id: true }
      });
    } else if (model === "category") {
      existing = await prisma3.category.findUnique({
        where: { slug },
        select: { id: true }
      });
    } else if (model === "landingPage") {
      existing = await prisma3.landingPage.findUnique({
        where: { slug },
        select: { id: true }
      });
    } else if (model === "blog") {
      existing = await prisma3.blog.findUnique({
        where: { slug },
        select: { id: true }
      });
    }
    if (!existing) break;
    if (excludeId && existing.id === excludeId) break;
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

// src/app/utils/memoryCache.ts
var store = /* @__PURE__ */ new Map();
var inflight = /* @__PURE__ */ new Map();
var keyFor = (prefix, args) => args.length ? `${prefix}:${JSON.stringify(args)}` : prefix;
var invalidateCache = (...prefixes) => {
  for (const key of store.keys()) {
    if (prefixes.some((p) => key === p || key.startsWith(`${p}:`))) {
      store.delete(key);
    }
  }
};
var cached = (prefix, ttlMs, loader) => async (...args) => {
  const key = keyFor(prefix, args);
  const hit = store.get(key);
  if (hit && hit.expiresAt > Date.now()) return hit.value;
  const pending = inflight.get(key);
  if (pending) return pending;
  const promise = loader(...args).then((value) => {
    store.set(key, { value, expiresAt: Date.now() + ttlMs });
    return value;
  }).finally(() => inflight.delete(key));
  inflight.set(key, promise);
  return promise;
};
var invalidates = (prefixes, fn) => async (...args) => {
  try {
    return await fn(...args);
  } finally {
    invalidateCache(...prefixes);
  }
};
var MINUTE = 60 * 1e3;

// src/app/module/category/category.service.ts
var createCategory = async (payload) => {
  if (payload.parentId) {
    const parent = await prisma2.category.findUnique({
      where: { id: payload.parentId }
    });
    if (!parent) {
      throw new AppError_default(status7.NOT_FOUND, "Parent category not found");
    }
  }
  const slug = await generateUniqueSlug(prisma2, payload.name, "category");
  const category = await prisma2.category.create({
    data: { ...payload, slug },
    include: { parent: true, subcategories: true }
  });
  return category;
};
var getAllCategories = async (queryParams) => {
  const result = await new QueryBuilder(prisma2.category, queryParams, {
    searchableFields: ["name", "slug"],
    filterableFields: ["isActive", "parentId"]
  }).search().filter().sort().paginate().include({ parent: true, subcategories: true }).execute();
  return result;
};
var getAllSubcategories = async (parentId, queryParams) => {
  const parent = await prisma2.category.findUnique({ where: { id: parentId } });
  if (!parent) {
    throw new AppError_default(status7.NOT_FOUND, "Parent category not found");
  }
  const result = await new QueryBuilder(prisma2.category, queryParams, {
    searchableFields: ["name", "slug"]
  }).search().filter().where({ parentId }).sort().paginate().execute();
  return result;
};
var getCategoryById = async (id) => {
  const category = await prisma2.category.findUnique({
    where: { id },
    include: { parent: true, subcategories: true }
  });
  if (!category) {
    throw new AppError_default(status7.NOT_FOUND, "Category not found");
  }
  return category;
};
var updateCategory = async (id, payload) => {
  const existing = await prisma2.category.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError_default(status7.NOT_FOUND, "Category not found");
  }
  let slug;
  if (payload.name && payload.name !== existing.name) {
    slug = await generateUniqueSlug(prisma2, payload.name, "category", id);
  }
  const updated = await prisma2.category.update({
    where: { id },
    data: { ...payload, ...slug && { slug } },
    include: { parent: true, subcategories: true }
  });
  return updated;
};
var deleteCategory = async (id) => {
  const existing = await prisma2.category.findUnique({
    where: { id },
    include: { subcategories: true, products: { take: 1 } }
  });
  if (!existing) {
    throw new AppError_default(status7.NOT_FOUND, "Category not found");
  }
  if (existing.products.length > 0) {
    throw new AppError_default(
      status7.BAD_REQUEST,
      "Cannot delete category with associated products"
    );
  }
  if (existing.subcategories.length > 0) {
    throw new AppError_default(
      status7.BAD_REQUEST,
      "Cannot delete category that has subcategories. Delete subcategories first."
    );
  }
  await prisma2.category.delete({ where: { id } });
  return { message: "Category deleted successfully" };
};
var CATEGORY = ["categories", "subcategories", "home-sections"];
var CategoryService = {
  createCategory: invalidates(CATEGORY, createCategory),
  getAllCategories: cached("categories", 5 * MINUTE, getAllCategories),
  getAllSubcategories: cached("subcategories", 5 * MINUTE, getAllSubcategories),
  getCategoryById,
  updateCategory: invalidates(CATEGORY, updateCategory),
  deleteCategory: invalidates(CATEGORY, deleteCategory)
};

// src/app/module/category/category.controller.ts
var createCategory2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.files && typeof req.files === "object") {
    const files = req.files;
    if (files.image && files.image[0]) {
      payload.image = files.image[0].path;
    }
    if (files.icon && files.icon[0]) {
      payload.icon = files.icon[0].path;
    }
  }
  const result = await CategoryService.createCategory(payload);
  sendResponse(res, {
    httpStatusCode: status8.CREATED,
    success: true,
    message: "Category created successfully",
    data: result
  });
});
var getAllCategories2 = catchAsync(async (req, res) => {
  const { data, meta } = await CategoryService.getAllCategories(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status8.OK,
    success: true,
    message: "Categories fetched successfully",
    data,
    meta
  });
});
var getAllSubcategories2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { data, meta } = await CategoryService.getAllSubcategories(
    id,
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status8.OK,
    success: true,
    message: "Subcategories fetched successfully",
    data,
    meta
  });
});
var getCategoryById2 = catchAsync(async (req, res) => {
  const result = await CategoryService.getCategoryById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status8.OK,
    success: true,
    message: "Category fetched successfully",
    data: result
  });
});
var updateCategory2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.files && typeof req.files === "object") {
    const files = req.files;
    if (files.image && files.image[0]) {
      payload.image = files.image[0].path;
    }
    if (files.icon && files.icon[0]) {
      payload.icon = files.icon[0].path;
    }
  }
  const result = await CategoryService.updateCategory(
    req.params.id,
    payload
  );
  sendResponse(res, {
    httpStatusCode: status8.OK,
    success: true,
    message: "Category updated successfully",
    data: result
  });
});
var deleteCategory2 = catchAsync(async (req, res) => {
  const result = await CategoryService.deleteCategory(req.params.id);
  sendResponse(res, {
    httpStatusCode: status8.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var CategoryController = {
  createCategory: createCategory2,
  getAllCategories: getAllCategories2,
  getAllSubcategories: getAllSubcategories2,
  getCategoryById: getCategoryById2,
  updateCategory: updateCategory2,
  deleteCategory: deleteCategory2
};

// src/app/module/category/category.validation.ts
import z from "zod";
var createCategoryZodSchema = z.object({
  name: z.string().min(1, "Category name is required"),
  icon: z.string().optional(),
  image: z.string().optional(),
  parentId: z.string().nullable().optional()
  // for subcategory
});
var updateCategoryZodSchema = z.object({
  name: z.string().min(1).optional(),
  icon: z.string().optional(),
  image: z.string().optional(),
  isActive: z.boolean().optional(),
  parentId: z.string().nullable().optional()
});

// src/app/module/category/category.route.ts
var router2 = Router2();
router2.get("/", CategoryController.getAllCategories);
router2.get("/:id", CategoryController.getCategoryById);
router2.get("/:id/subcategories", CategoryController.getAllSubcategories);
router2.post(
  "/",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  multerUpload.fields([
    { name: "image", maxCount: 1 },
    { name: "icon", maxCount: 1 }
  ]),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(createCategoryZodSchema),
  CategoryController.createCategory
);
router2.patch(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  multerUpload.fields([
    { name: "image", maxCount: 1 },
    { name: "icon", maxCount: 1 }
  ]),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(updateCategoryZodSchema),
  CategoryController.updateCategory
);
router2.delete(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  CategoryController.deleteCategory
);
var CategoryRoutes = router2;

// src/app/module/shop/shop.route.ts
import { Router as Router3 } from "express";

// src/app/module/shop/shop.controller.ts
import status10 from "http-status";

// src/app/module/shop/shop.service.ts
import status9 from "http-status";
var getDefaultShop = async () => {
  const shop = await prisma2.shop.findFirst();
  if (!shop) {
    throw new AppError_default(status9.NOT_FOUND, "Store is not set up yet");
  }
  return shop;
};
var getDefaultShopId = async () => {
  const shop = await getDefaultShop();
  return shop.id;
};
var updateStore = async (payload) => {
  const shop = await getDefaultShop();
  const updatedShop = await prisma2.shop.update({
    where: { id: shop.id },
    data: payload
  });
  return updatedShop;
};
var ShopService = {
  getDefaultShop,
  getDefaultShopId,
  updateStore
};

// src/app/module/shop/shop.controller.ts
var getStore = catchAsync(async (req, res) => {
  const result = await ShopService.getDefaultShop();
  sendResponse(res, {
    httpStatusCode: status10.OK,
    success: true,
    message: "Store details fetched successfully",
    data: result
  });
});
var updateStore2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.files && typeof req.files === "object") {
    const files = req.files;
    if (files.logo && files.logo[0]) {
      payload.logo = files.logo[0].path;
    }
    if (files.banner && files.banner[0]) {
      payload.banner = files.banner[0].path;
    }
  }
  const result = await ShopService.updateStore(payload);
  sendResponse(res, {
    httpStatusCode: status10.OK,
    success: true,
    message: "Store updated successfully",
    data: result
  });
});
var ShopController = {
  getStore,
  updateStore: updateStore2
};

// src/app/module/shop/shop.validation.ts
import z2 from "zod";
var updateStoreZodSchema = z2.object({
  name: z2.string().min(1).optional(),
  description: z2.string().optional()
});

// src/app/module/shop/shop.route.ts
var router3 = Router3();
router3.get("/", ShopController.getStore);
router3.patch(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.fields([
    { name: "logo", maxCount: 1 },
    { name: "banner", maxCount: 1 }
  ]),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(updateStoreZodSchema),
  ShopController.updateStore
);
var ShopRoutes = router3;

// src/app/module/product/product.route.ts
import { Router as Router4 } from "express";

// src/app/module/product/product.controller.ts
import status12 from "http-status";

// src/app/module/product/product.service.ts
import status11 from "http-status";

// src/app/utils/generateSku.ts
var randomSixDigits = () => Math.floor(Math.random() * 1e6).toString().padStart(6, "0");
var generateUniqueSku = async (prisma3, excludeProductId, excludeVariantId) => {
  const MAX_ATTEMPTS = 20;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const sku = randomSixDigits();
    const [productMatch, variantMatch] = await Promise.all([
      prisma3.product.findUnique({ where: { sku }, select: { id: true } }),
      prisma3.productVariant.findUnique({ where: { sku }, select: { id: true } })
    ]);
    const productConflict = productMatch && productMatch.id !== excludeProductId;
    const variantConflict = variantMatch && variantMatch.id !== excludeVariantId;
    if (!productConflict && !variantConflict) {
      return sku;
    }
  }
  throw new Error("Failed to generate a unique SKU after multiple attempts");
};

// src/app/module/rag/embedding.service.ts
var sleep = (ms2) => new Promise((resolve) => setTimeout(resolve, ms2));
var EmbeddingService = class {
  apikey;
  apiUrl = "https://openrouter.ai/api/v1";
  embeddingModel;
  constructor() {
    this.apikey = envVars.RAG.OPENROUTER_API_KEY || "";
    this.embeddingModel = envVars.RAG.OPENROUTER_EMBEDDING_MODEL || "nvidia/llama-nemotron-embed-vl-1b-v2:free";
    if (!this.apikey) {
      throw new Error("OPENROUTER_API_KEY is not set in .env");
    }
  }
  // Free models allow only a few requests per minute and answer 429 when
  // busy, so rate-limit and server errors are retried with growing waits
  async generateEmbedding(text, maxAttempts = 5) {
    for (let attempt = 1; ; attempt++) {
      const response = await fetch(`${this.apiUrl}/embeddings`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apikey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          input: text,
          model: this.embeddingModel
        })
      });
      const retryable = response.status === 429 || response.status >= 500;
      if (retryable && attempt < maxAttempts) {
        const retryAfter = Number(response.headers.get("retry-after"));
        const waitMs = Number.isFinite(retryAfter) && retryAfter > 0 ? Math.min(retryAfter * 1e3, 3e4) : Math.min(1e3 * 2 ** attempt, 2e4);
        await sleep(waitMs);
        continue;
      }
      if (!response.ok) {
        throw new Error(`OpenRouter API Error: ${response.status}`);
      }
      const data = await response.json();
      if (!data.data || data.data.length == 0) {
        throw new Error("No embedding data returned");
      }
      return data.data[0].embedding;
    }
  }
};

// src/app/module/rag/indexing.service.ts
var toVectorLiteral = (vector) => `[${vector.join(",")}]`;
var plainText = (html, max = 1500) => (html ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim().slice(0, max);
var taka = (value) => `\u09F3${Math.round(value).toLocaleString("en-US")}`;
var chunk = (text, size = 1200) => {
  const parts = [];
  for (let i = 0; i < text.length; i += size) parts.push(text.slice(i, i + size));
  return parts.length ? parts : [""];
};
var LIVE_PRODUCT = { status: { in: [ProductStatus.ACTIVE, ProductStatus.OUT_OF_STOCK] } };
var loadProducts = (where) => prisma2.product.findMany({
  where,
  select: {
    id: true,
    name: true,
    slug: true,
    status: true,
    stock: true,
    sku: true,
    tags: true,
    sellPrice: true,
    regularPrice: true,
    shortDescription: true,
    description: true,
    category: { select: { name: true, parent: { select: { name: true } } } },
    brand: { select: { name: true } },
    variants: { select: { combination: true, sellPrice: true, quantity: true } },
    reviews: { select: { rating: true } }
  }
});
var IndexingService = class {
  embeddingService;
  constructor() {
    this.embeddingService = new EmbeddingService();
  }
  async indexDocument(chunkKey, sourceType, sourceId, content, sourceLabel, metadata) {
    const embedding = await this.embeddingService.generateEmbedding(content);
    const vectorLiteral = toVectorLiteral(embedding);
    await prisma2.$executeRaw(prismaNamespace_exports.sql`
      INSERT INTO "document_embeddings"
      ("id", "chunkKey", "sourceType", "sourceId", "sourceLabel", "content", "metadata", "embedding", "updatedAt")
      VALUES
      (
        gen_random_uuid(),
        ${chunkKey},
        ${sourceType},
        ${sourceId},
        ${sourceLabel || null},
        ${content},
        ${JSON.stringify(metadata || {})} :: jsonb,
        CAST(${vectorLiteral} AS vector(2048)),
        NOW()
      )
      ON CONFLICT ("chunkKey")
      DO UPDATE SET
        "sourceType" = EXCLUDED."sourceType",
        "sourceId" = EXCLUDED."sourceId",
        "sourceLabel" = EXCLUDED."sourceLabel",
        "content" = EXCLUDED."content",
        "metadata" = EXCLUDED."metadata",
        "embedding" = EXCLUDED."embedding",
        "isDeleted" = false,
        "deletedAt" = null,
        "updatedAt" = NOW()
    `);
  }
  // ── What the assistant knows ──────────────────────────────────────────
  productDoc(product) {
    const category = product.category.parent ? `${product.category.parent.name} > ${product.category.name}` : product.category.name;
    const inStock = product.status === ProductStatus.ACTIVE && product.stock > 0;
    const variants = product.variants.length ? product.variants.map(
      (v) => `${v.combination}: ${taka(v.sellPrice)}${v.quantity > 0 ? "" : " (out of stock)"}`
    ).join("; ") : null;
    const ratings = product.reviews.map((r) => r.rating);
    const rating = ratings.length ? `${(ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)}/5 from ${ratings.length} reviews` : null;
    const content = [
      `Product: ${product.name}`,
      `Category: ${category}`,
      product.brand && `Brand: ${product.brand.name}`,
      `Price: ${taka(product.sellPrice)}${product.regularPrice > product.sellPrice ? ` (regular ${taka(product.regularPrice)})` : ""}`,
      variants && `Options: ${variants}`,
      `Availability: ${inStock ? "In stock" : "Out of stock"}`,
      product.sku && `Product code: ${product.sku}`,
      product.tags.length > 0 && `Tags: ${product.tags.join(", ")}`,
      rating && `Rating: ${rating}`,
      `Summary: ${plainText(product.shortDescription, 400)}`,
      `Details: ${plainText(product.description, 1200)}`,
      `Link: /products/${product.slug}`
    ].filter(Boolean).join("\n");
    return {
      chunkKey: `product-${product.id}`,
      sourceType: "PRODUCT",
      sourceId: product.id,
      sourceLabel: product.name,
      content,
      metadata: { productId: product.id, slug: product.slug, categoryName: product.category.name }
    };
  }
  async buildAllDocs() {
    const [products, categories, site, shipping, payment, faqs, pages] = await Promise.all([
      loadProducts(LIVE_PRODUCT),
      prisma2.category.findMany({
        where: { isActive: true },
        select: {
          id: true,
          name: true,
          parent: { select: { name: true } },
          subcategories: { where: { isActive: true }, select: { name: true } },
          _count: { select: { products: { where: LIVE_PRODUCT } } }
        }
      }),
      prisma2.siteSetting.findUnique({ where: { id: "default" } }),
      prisma2.shippingSetting.findUnique({ where: { id: "default" } }),
      prisma2.paymentSetting.findUnique({ where: { id: "default" } }),
      prisma2.faq.findMany({ where: { isActive: true }, orderBy: { order: "asc" } }),
      prisma2.pageContent.findMany()
    ]);
    const docs = products.map((p) => this.productDoc(p));
    for (const c of categories) {
      docs.push({
        chunkKey: `category-${c.id}`,
        sourceType: "CATEGORY",
        sourceId: c.id,
        sourceLabel: c.name,
        content: [
          `Category: ${c.parent ? `${c.parent.name} > ${c.name}` : c.name}`,
          c.subcategories.length > 0 && `Subcategories: ${c.subcategories.map((s) => s.name).join(", ")}`,
          `Products available: ${c._count.products}`,
          `Link: /products?categoryId=${c.id}`
        ].filter(Boolean).join("\n")
      });
    }
    const storeName = site?.siteName || "AB Trims";
    docs.push({
      chunkKey: "store-info",
      sourceType: "STORE",
      sourceId: "default",
      sourceLabel: `${storeName} store information`,
      content: [
        `Store: ${storeName}`,
        site?.description && `About: ${plainText(site.description, 600)}`,
        site?.phone && `Phone: ${site.phone}`,
        site?.whatsapp && `WhatsApp: ${site.whatsapp}`,
        site?.email && `Email: ${site.email}`,
        site?.address && `Address: ${site.address}`,
        site?.facebook && `Facebook: ${site.facebook}`,
        shipping && `Delivery charge: Inside Dhaka ${taka(shipping.insideDhakaShippingFee)}, Outside Dhaka ${taka(shipping.outsideDhakaShippingFee)}`,
        `Payment methods: Cash on Delivery${payment?.bkashEnabled ? ", bKash" : ""}${payment?.sslcommerzEnabled ? ", card / mobile banking (SSLCommerz)" : ""}`,
        "Order tracking: use Track Order with the order number and phone number."
      ].filter(Boolean).join("\n")
    });
    for (const faq of faqs) {
      docs.push({
        chunkKey: `faq-${faq.id}`,
        sourceType: "FAQ",
        sourceId: faq.id,
        sourceLabel: faq.question,
        content: `Question: ${faq.question}
Answer: ${plainText(faq.answer, 1500)}`
      });
    }
    for (const page of pages) {
      const text = plainText(page.content, 6e3);
      if (!text) continue;
      chunk(text).forEach(
        (part, i) => docs.push({
          chunkKey: `page-${page.slug}-${i}`,
          sourceType: "PAGE",
          sourceId: page.id,
          sourceLabel: page.title,
          content: `${page.title}:
${part}`
        })
      );
    }
    return docs;
  }
  // Full rebuild. Unchanged entries are skipped (no embedding call) and
  // entries for things that no longer exist are removed.
  async indexABTrimsData() {
    const docs = await this.buildAllDocs();
    const existing = await prisma2.$queryRaw(prismaNamespace_exports.sql`
      SELECT "chunkKey", content FROM "document_embeddings" WHERE "isDeleted" = false
    `);
    const current = new Map(existing.map((e) => [e.chunkKey, e.content]));
    let indexed = 0;
    let skipped = 0;
    let failed = 0;
    for (const doc of docs) {
      if (current.get(doc.chunkKey) === doc.content) {
        skipped++;
        continue;
      }
      if (indexed + failed > 0) await new Promise((r) => setTimeout(r, 400));
      try {
        await this.indexDocument(
          doc.chunkKey,
          doc.sourceType,
          doc.sourceId,
          doc.content,
          doc.sourceLabel,
          doc.metadata
        );
        indexed++;
      } catch (error) {
        failed++;
        console.error(`RAG: could not index ${doc.chunkKey}:`, error.message);
      }
    }
    const keep = docs.map((d) => d.chunkKey);
    const removed = await prisma2.$executeRaw(prismaNamespace_exports.sql`
      UPDATE "document_embeddings"
      SET "isDeleted" = true, "deletedAt" = NOW()
      WHERE "isDeleted" = false AND "chunkKey" NOT IN (${prismaNamespace_exports.join(keep)})
    `);
    return {
      success: failed === 0,
      message: `Indexed ${indexed}, unchanged ${skipped}, removed ${removed}${failed ? `, failed ${failed}` : ""} (total ${docs.length} entries).`
    };
  }
  // Keep one product up to date after it is added, edited or removed
  async syncProduct(productId) {
    const [product] = await loadProducts({ id: productId, ...LIVE_PRODUCT });
    if (!product) {
      await prisma2.$executeRaw(prismaNamespace_exports.sql`
        UPDATE "document_embeddings" SET "isDeleted" = true, "deletedAt" = NOW()
        WHERE "chunkKey" = ${`product-${productId}`} AND "isDeleted" = false
      `);
      return;
    }
    const doc = this.productDoc(product);
    await this.indexDocument(
      doc.chunkKey,
      doc.sourceType,
      doc.sourceId,
      doc.content,
      doc.sourceLabel,
      doc.metadata
    );
  }
};

// src/app/module/rag/ragSync.ts
var indexer = null;
var queueProductIndexSync = (productId) => {
  if (!productId) return;
  try {
    indexer ??= new IndexingService();
  } catch {
    return;
  }
  void indexer.syncProduct(productId).catch(
    (error) => console.error(`RAG: product ${productId} not re-indexed:`, error.message)
  );
};

// src/app/module/product/product.service.ts
var createProduct = async (payload) => {
  const category = await prisma2.category.findUnique({
    where: { id: payload.categoryId }
  });
  if (!category) {
    throw new AppError_default(status11.NOT_FOUND, "Category not found");
  }
  const shopId = await ShopService.getDefaultShopId();
  const slug = await generateUniqueSlug(prisma2, payload.name, "product");
  const { variants, ...productData } = payload;
  const product = await prisma2.product.create({
    data: {
      ...productData,
      shopId,
      slug,
      status: ProductStatus.ACTIVE,
      ...variants && variants.length > 0 && {
        variants: {
          create: variants
        }
      }
    },
    include: {
      category: true,
      brand: true,
      sizeChart: true,
      shop: true,
      variants: true
    }
  });
  return product;
};
var generateSku = async () => {
  const sku = await generateUniqueSku(prisma2);
  return { sku };
};
var getAllProducts = async (queryParams) => {
  const {
    minPrice,
    maxPrice,
    categoryId,
    sortBy,
    highlight,
    searchTerm,
    view,
    ...remainingQuery
  } = queryParams;
  const filter = { ...remainingQuery };
  if (!filter.status) {
    filter.status = ProductStatus.ACTIVE;
  }
  if (minPrice || maxPrice) {
    filter.sellPrice = {};
    if (minPrice) filter.sellPrice.gte = Number(minPrice);
    if (maxPrice) filter.sellPrice.lte = Number(maxPrice);
  }
  if (categoryId) {
    if (Array.isArray(categoryId)) {
      filter.categoryId = { in: categoryId };
    } else if (typeof categoryId === "string" && categoryId.includes(",")) {
      filter.categoryId = { in: categoryId.split(",") };
    } else {
      filter.categoryId = categoryId;
    }
  }
  if (sortBy) {
    if (sortBy === "price_asc") {
      filter.sortBy = "sellPrice";
      filter.sortOrder = "asc";
    } else if (sortBy === "price_desc") {
      filter.sortBy = "sellPrice";
      filter.sortOrder = "desc";
    } else if (sortBy === "newest") {
      filter.sortBy = "createdAt";
      filter.sortOrder = "desc";
    } else if (sortBy === "popularity") {
      filter.sortBy = "reviews";
      filter.sortOrder = "desc";
    }
  }
  const productQuery = new QueryBuilder(prisma2.product, filter, {
    filterableFields: ["categoryId", "brandId", "shopId", "status", "sellPrice"]
  }).filter().sort().paginate();
  const term = typeof searchTerm === "string" ? searchTerm.trim() : "";
  if (term) {
    const contains = (value) => ({
      contains: value,
      mode: "insensitive"
    });
    const words = term.split(/\s+/).filter(Boolean);
    productQuery.where({
      OR: [
        { AND: words.map((word) => ({ name: contains(word) })) },
        { sku: contains(term) },
        { variants: { some: { sku: contains(term) } } },
        { tags: { hasSome: [term, term.toLowerCase()] } },
        { category: { name: contains(term) } },
        { brand: { name: contains(term) } }
      ]
    });
  }
  if (typeof highlight === "string" && Object.values(ProductHighlight).includes(highlight)) {
    productQuery.where({
      highlights: { has: highlight }
    });
  }
  if (view === "card") {
    productQuery.omit({ description: true, purchasePrice: true }).include({
      category: true,
      brand: true,
      variants: { omit: { purchasePrice: true } }
    });
  } else {
    productQuery.include({
      category: true,
      brand: true,
      sizeChart: true,
      shop: true,
      variants: true
    });
  }
  const result = await productQuery.execute();
  return result;
};
var getProductById = async (id) => {
  const product = await prisma2.product.findUnique({
    where: { id },
    include: {
      category: true,
      brand: true,
      sizeChart: true,
      shop: true,
      variants: true,
      reviews: {
        include: {
          user: true
        }
      }
    }
  });
  if (!product) {
    throw new AppError_default(status11.NOT_FOUND, "Product not found");
  }
  return product;
};
var getProductBySlug = async (slug) => {
  const product = await prisma2.product.findUnique({
    where: { slug },
    include: {
      category: true,
      brand: true,
      sizeChart: true,
      shop: true,
      variants: true,
      reviews: true
    }
  });
  if (!product) {
    throw new AppError_default(status11.NOT_FOUND, "Product not found");
  }
  return product;
};
var updateProduct = async (id, payload) => {
  const existingProduct = await prisma2.product.findUnique({
    where: { id }
  });
  if (!existingProduct) {
    throw new AppError_default(status11.NOT_FOUND, "Product not found");
  }
  let slug;
  if (payload.name && payload.name !== existingProduct.name) {
    slug = await generateUniqueSlug(prisma2, payload.name, "product", id);
  }
  const { variants, ...productData } = payload;
  const updatedProduct = await prisma2.$transaction(async (tx) => {
    if (variants !== void 0) {
      await tx.productVariant.deleteMany({
        where: { productId: id }
      });
      if (variants && variants.length > 0) {
        await tx.productVariant.createMany({
          data: variants.map((v) => ({
            ...v,
            productId: id
          }))
        });
      }
    }
    return await tx.product.update({
      where: { id },
      data: {
        ...productData,
        ...slug && { slug }
      },
      include: {
        category: true,
        brand: true,
        sizeChart: true,
        shop: true,
        variants: true
      }
    });
  });
  return updatedProduct;
};
var getProductVariants = async (productId) => {
  const product = await prisma2.product.findUnique({
    where: { id: productId },
    include: { variants: true }
  });
  if (!product) {
    throw new AppError_default(status11.NOT_FOUND, "Product not found");
  }
  return product.variants;
};
var uploadVariantImage = async (productId, variantId, imageUrl) => {
  const product = await prisma2.product.findUnique({
    where: { id: productId }
  });
  if (!product) {
    throw new AppError_default(status11.NOT_FOUND, "Product not found");
  }
  const variant = await prisma2.productVariant.findUnique({
    where: { id: variantId }
  });
  if (!variant || variant.productId !== productId) {
    throw new AppError_default(status11.NOT_FOUND, "Variant not found for this product");
  }
  const updated = await prisma2.productVariant.update({
    where: { id: variantId },
    data: { image: imageUrl }
  });
  return updated;
};
var deleteProduct = async (id) => {
  const product = await prisma2.product.findUnique({
    where: { id }
  });
  if (!product) {
    throw new AppError_default(status11.NOT_FOUND, "Product not found");
  }
  await prisma2.product.update({
    where: { id },
    data: { status: ProductStatus.DELETED }
  });
  return { message: "Product deleted successfully" };
};
var PRODUCT_VIEWS = ["home-sections", "flash-sale"];
var withIndexSync = (pickId, fn) => async (...args) => {
  const result = await fn(...args);
  queueProductIndexSync(pickId(args, result));
  return result;
};
var ProductService = {
  createProduct: invalidates(
    PRODUCT_VIEWS,
    withIndexSync((_args, product) => product?.id, createProduct)
  ),
  generateSku,
  getAllProducts,
  getProductById,
  getProductBySlug,
  updateProduct: invalidates(
    PRODUCT_VIEWS,
    withIndexSync(([id]) => id, updateProduct)
  ),
  deleteProduct: invalidates(
    PRODUCT_VIEWS,
    withIndexSync(([id]) => id, deleteProduct)
  ),
  getProductVariants,
  uploadVariantImage
};

// src/app/module/product/product.controller.ts
var createProduct2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.files && Array.isArray(req.files)) {
    payload.images = req.files.map((file) => file.path);
  }
  const result = await ProductService.createProduct(payload);
  sendResponse(res, {
    httpStatusCode: status12.CREATED,
    success: true,
    message: "Product created successfully",
    data: result
  });
});
var generateSku2 = catchAsync(async (req, res) => {
  const result = await ProductService.generateSku();
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "SKU generated successfully",
    data: result
  });
});
var getAllProducts2 = catchAsync(async (req, res) => {
  const { data, meta } = await ProductService.getAllProducts(req.query);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Products fetched successfully",
    data,
    meta
  });
});
var getProductById2 = catchAsync(async (req, res) => {
  const result = await ProductService.getProductById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Product fetched successfully",
    data: result
  });
});
var getProductBySlug2 = catchAsync(async (req, res) => {
  const result = await ProductService.getProductBySlug(req.params.slug);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Product fetched successfully",
    data: result
  });
});
var updateProduct2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = { ...req.body };
  if (req.files && Array.isArray(req.files) && req.files.length > 0) {
    payload.images = req.files.map((file) => file.path);
  }
  const result = await ProductService.updateProduct(id, payload);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Product updated successfully",
    data: result
  });
});
var deleteProduct2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.deleteProduct(id);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var getProductVariants2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.getProductVariants(id);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Product variants fetched successfully",
    data: result
  });
});
var uploadVariantImage2 = catchAsync(async (req, res) => {
  const { productId, variantId } = req.params;
  if (!req.file) {
    return sendResponse(res, {
      httpStatusCode: status12.BAD_REQUEST,
      success: false,
      message: "No image file uploaded",
      data: null
    });
  }
  const imageUrl = req.file.path;
  const result = await ProductService.uploadVariantImage(
    productId,
    variantId,
    imageUrl
  );
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Variant image uploaded successfully",
    data: result
  });
});
var ProductController = {
  createProduct: createProduct2,
  generateSku: generateSku2,
  getAllProducts: getAllProducts2,
  getProductById: getProductById2,
  getProductBySlug: getProductBySlug2,
  updateProduct: updateProduct2,
  deleteProduct: deleteProduct2,
  getProductVariants: getProductVariants2,
  uploadVariantImage: uploadVariantImage2
};

// src/app/module/product/product.validation.ts
import z3 from "zod";
var variantSchema = z3.object({
  combination: z3.string().min(1, "Combination is required"),
  sku: z3.string().trim().min(1).optional().nullable(),
  quantity: z3.number().int().nonnegative("Quantity cannot be negative"),
  purchasePrice: z3.number().positive("Purchase price must be positive"),
  regularPrice: z3.number().positive("Regular price must be positive"),
  sellPrice: z3.number().positive("Sell price must be positive"),
  image: z3.string().optional().nullable()
});
var isYoutubeOrFacebook = (value) => {
  try {
    return /(^|\.)(youtube\.com|youtu\.be|facebook\.com|fb\.watch)$/i.test(
      new URL(value).hostname
    );
  } catch {
    return false;
  }
};
var videoUrlSchema = z3.union([
  z3.literal(""),
  z3.url("Enter a valid video link").refine(isYoutubeOrFacebook, "Only YouTube or Facebook video links are supported")
]).nullable().optional().transform((v) => v === "" ? null : v);
var createProductZodSchema = z3.object({
  name: z3.string().min(1, "Product name is required"),
  description: z3.string().min(1, "Description is required"),
  shortDescription: z3.string().min(1, "Short description is required"),
  videoUrl: videoUrlSchema,
  sku: z3.string().trim().min(1).optional().nullable(),
  stock: z3.number().int().nonnegative("Stock cannot be negative"),
  purchasePrice: z3.number().positive("Purchase price must be positive"),
  regularPrice: z3.number().positive("Regular price must be positive"),
  sellPrice: z3.number().positive("Sell price must be positive"),
  categoryId: z3.string().uuid("Invalid category ID"),
  brandId: z3.string().uuid("Invalid brand ID").optional().nullable(),
  sizeChartId: z3.string().uuid("Invalid size chart ID").optional().nullable(),
  tags: z3.array(z3.string()).optional(),
  type: z3.enum(["SIMPLE", "VARIABLE"]).optional().default("SIMPLE"),
  attributes: z3.any().optional(),
  variants: z3.array(variantSchema).optional(),
  vatType: z3.enum(["INCLUDED", "EXCLUDED"]).optional().default("INCLUDED"),
  vatPercentage: z3.coerce.number().nonnegative().optional().default(0),
  freeShipping: z3.coerce.boolean().optional().default(false),
  highlights: z3.array(z3.enum(["NEW_ARRIVAL", "TRENDING", "TOP_SELLING", "OUR_SERVICE"])).optional().default([])
});
var updateProductZodSchema = z3.object({
  name: z3.string().optional(),
  description: z3.string().optional(),
  shortDescription: z3.string().optional(),
  videoUrl: videoUrlSchema,
  sku: z3.string().trim().min(1).optional().nullable(),
  stock: z3.number().int().nonnegative().optional(),
  purchasePrice: z3.number().positive().optional(),
  regularPrice: z3.number().positive().optional(),
  sellPrice: z3.number().positive().optional(),
  categoryId: z3.string().uuid().optional(),
  brandId: z3.string().uuid().optional().nullable(),
  sizeChartId: z3.string().uuid().optional().nullable(),
  status: z3.enum(["ACTIVE", "DRAFT", "OUT_OF_STOCK", "DELETED"]).optional(),
  tags: z3.array(z3.string()).optional(),
  type: z3.enum(["SIMPLE", "VARIABLE"]).optional(),
  attributes: z3.any().optional(),
  variants: z3.array(variantSchema).optional(),
  vatType: z3.enum(["INCLUDED", "EXCLUDED"]).optional(),
  vatPercentage: z3.coerce.number().nonnegative().optional(),
  freeShipping: z3.coerce.boolean().optional(),
  highlights: z3.array(z3.enum(["NEW_ARRIVAL", "TRENDING", "TOP_SELLING", "OUR_SERVICE"])).optional()
});

// src/app/module/product/product.route.ts
var router4 = Router4();
router4.get("/", ProductController.getAllProducts);
router4.get(
  "/generate-sku",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  ProductController.generateSku
);
router4.get("/:id", ProductController.getProductById);
router4.get("/slug/:slug", ProductController.getProductBySlug);
router4.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.array("images", 5),
  // allow up to 5 images
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(createProductZodSchema),
  ProductController.createProduct
);
router4.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.array("images", 5),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(updateProductZodSchema),
  ProductController.updateProduct
);
router4.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  ProductController.deleteProduct
);
router4.get(
  "/:id/variants",
  ProductController.getProductVariants
);
router4.patch(
  "/:productId/variants/:variantId/image",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("image"),
  ProductController.uploadVariantImage
);
var ProductRoutes = router4;

// src/app/module/cart/cart.route.ts
import { Router as Router5 } from "express";

// src/app/module/cart/cart.controller.ts
import status14 from "http-status";

// src/app/module/cart/cart.service.ts
import status13 from "http-status";
var getCart = async (userId) => {
  let cart = await prisma2.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          product: {
            include: {
              shop: true
            }
          },
          productVariant: true
        }
      }
    }
  });
  if (!cart) {
    const userExists = await prisma2.user.findUnique({
      where: { id: userId }
    });
    if (!userExists) {
      throw new AppError_default(status13.NOT_FOUND, "User not found");
    }
    cart = await prisma2.cart.create({
      data: { userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                shop: true
              }
            },
            productVariant: true
          }
        }
      }
    });
  }
  return cart;
};
var addToCart = async (userId, payload) => {
  const product = await prisma2.product.findUnique({
    where: { id: payload.productId },
    include: { variants: true }
  });
  if (!product) {
    throw new AppError_default(status13.NOT_FOUND, "Product not found");
  }
  if (product.type === "VARIABLE" && payload.productVariantId) {
    const variant = product.variants.find((v) => v.id === payload.productVariantId);
    if (!variant) {
      throw new AppError_default(status13.NOT_FOUND, "Product variant not found");
    }
    if (variant.quantity < payload.quantity) {
      throw new AppError_default(status13.BAD_REQUEST, "Insufficient stock for this variation");
    }
  } else {
    if (product.stock < payload.quantity) {
      throw new AppError_default(status13.BAD_REQUEST, "Insufficient stock");
    }
  }
  let cart = await prisma2.cart.findUnique({ where: { userId } });
  if (!cart) {
    cart = await prisma2.cart.create({ data: { userId } });
  }
  const existingItem = await prisma2.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId: payload.productId,
      productVariantId: payload.productVariantId || null
    }
  });
  if (existingItem) {
    const targetQuantity = existingItem.quantity + payload.quantity;
    if (product.type === "VARIABLE" && payload.productVariantId) {
      const variant = product.variants.find((v) => v.id === payload.productVariantId);
      if (variant && variant.quantity < targetQuantity) {
        throw new AppError_default(status13.BAD_REQUEST, "Insufficient stock for this variation");
      }
    } else {
      if (product.stock < targetQuantity) {
        throw new AppError_default(status13.BAD_REQUEST, "Insufficient stock");
      }
    }
    return await prisma2.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: targetQuantity }
    });
  } else {
    return await prisma2.cartItem.create({
      data: {
        cartId: cart.id,
        productId: payload.productId,
        productVariantId: payload.productVariantId || null,
        quantity: payload.quantity
      }
    });
  }
};
var updateCartItemQuantity = async (userId, payload) => {
  const cart = await prisma2.cart.findUnique({ where: { userId } });
  if (!cart) throw new AppError_default(status13.NOT_FOUND, "Cart not found");
  const existingItem = await prisma2.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId: payload.productId,
      productVariantId: payload.productVariantId || null
    }
  });
  if (!existingItem) throw new AppError_default(status13.NOT_FOUND, "Item not found in cart");
  if (payload.quantity <= 0) {
    return await prisma2.cartItem.delete({ where: { id: existingItem.id } });
  }
  const product = await prisma2.product.findUnique({
    where: { id: payload.productId },
    include: { variants: true }
  });
  if (product) {
    if (product.type === "VARIABLE" && payload.productVariantId) {
      const variant = product.variants.find((v) => v.id === payload.productVariantId);
      if (variant && variant.quantity < payload.quantity) {
        throw new AppError_default(status13.BAD_REQUEST, "Insufficient stock for this variation");
      }
    } else {
      if (product.stock < payload.quantity) {
        throw new AppError_default(status13.BAD_REQUEST, "Insufficient stock");
      }
    }
  }
  return await prisma2.cartItem.update({
    where: { id: existingItem.id },
    data: { quantity: payload.quantity }
  });
};
var removeFromCart = async (userId, productId, productVariantId) => {
  const cart = await prisma2.cart.findUnique({ where: { userId } });
  if (!cart) throw new AppError_default(status13.NOT_FOUND, "Cart not found");
  const existingItem = await prisma2.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId,
      productVariantId: productVariantId || null
    }
  });
  if (!existingItem) throw new AppError_default(status13.NOT_FOUND, "Item not found in cart");
  await prisma2.cartItem.delete({ where: { id: existingItem.id } });
  return { message: "Item removed from cart" };
};
var clearCart = async (userId) => {
  const cart = await prisma2.cart.findUnique({ where: { userId } });
  if (!cart) throw new AppError_default(status13.NOT_FOUND, "Cart not found");
  await prisma2.cartItem.deleteMany({
    where: { cartId: cart.id }
  });
  return { message: "Cart cleared" };
};
var CartService = {
  getCart,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart
};

// src/app/module/cart/cart.controller.ts
var getCart2 = catchAsync(async (req, res) => {
  const result = await CartService.getCart(req.user.userId);
  sendResponse(res, {
    httpStatusCode: status14.OK,
    success: true,
    message: "Cart fetched successfully",
    data: result
  });
});
var addToCart2 = catchAsync(async (req, res) => {
  const result = await CartService.addToCart(req.user.userId, req.body);
  sendResponse(res, {
    httpStatusCode: status14.CREATED,
    success: true,
    message: "Item added to cart",
    data: result
  });
});
var updateCartItemQuantity2 = catchAsync(async (req, res) => {
  const result = await CartService.updateCartItemQuantity(
    req.user.userId,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status14.OK,
    success: true,
    message: "Cart updated",
    data: result
  });
});
var removeFromCart2 = catchAsync(async (req, res) => {
  const result = await CartService.removeFromCart(
    req.user.userId,
    req.params.productId,
    req.query.productVariantId
  );
  sendResponse(res, {
    httpStatusCode: status14.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var clearCart2 = catchAsync(async (req, res) => {
  const result = await CartService.clearCart(req.user.userId);
  sendResponse(res, {
    httpStatusCode: status14.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var CartController = {
  getCart: getCart2,
  addToCart: addToCart2,
  updateCartItemQuantity: updateCartItemQuantity2,
  removeFromCart: removeFromCart2,
  clearCart: clearCart2
};

// src/app/module/cart/cart.validation.ts
import z4 from "zod";
var addToCartZodSchema = z4.object({
  productId: z4.string().uuid("Invalid product ID"),
  productVariantId: z4.string().uuid("Invalid product variant ID").optional().nullable(),
  quantity: z4.number().int().positive("Quantity must be at least 1")
});
var updateCartItemZodSchema = z4.object({
  productId: z4.string().uuid("Invalid product ID"),
  productVariantId: z4.string().uuid("Invalid product variant ID").optional().nullable(),
  quantity: z4.number().int().nonnegative("Quantity cannot be negative")
});

// src/app/module/cart/cart.route.ts
var router5 = Router5();
router5.use(checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN));
router5.get("/", CartController.getCart);
router5.post(
  "/add",
  validateRequest(addToCartZodSchema),
  CartController.addToCart
);
router5.patch(
  "/update",
  validateRequest(updateCartItemZodSchema),
  CartController.updateCartItemQuantity
);
router5.delete("/remove/:productId", CartController.removeFromCart);
router5.delete("/clear", CartController.clearCart);
var CartRoutes = router5;

// src/app/module/order/order.route.ts
import { Router as Router6 } from "express";

// src/app/middleware/rateLimiter.ts
import { rateLimit } from "express-rate-limit";
var globalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  // 15 minutes
  limit: 1e4,
  // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: "draft-8",
  // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,
  // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes"
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json(options.message);
  }
});
var authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  // 15 minutes
  limit: 1e3,
  // Limit each IP to 10 requests per 15 minutes for auth
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts, please try again after 15 minutes"
  }
});
var guestOrderRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  // 15 minutes
  limit: 20,
  // Limit each IP to 20 guest orders per 15 minutes
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many orders placed from this device, please try again later"
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json(options.message);
  }
});
var abandonedCheckoutTrackRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  // 15 minutes
  limit: 60,
  // Limit each IP to 60 autosave pings per 15 minutes
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests, please try again later"
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json(options.message);
  }
});
var orderTrackRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1e3,
  // 15 minutes
  limit: 15,
  // Limit each IP to 15 track attempts per 15 minutes
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many order lookup attempts, please try again later"
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json(options.message);
  }
});

// src/app/module/order/order.controller.ts
import status20 from "http-status";

// src/app/module/order/order.service.ts
import status19 from "http-status";

// src/app/module/blocked-phone/blockedPhone.service.ts
import status15 from "http-status";
var normalizePhone = (raw3) => {
  let digits = (raw3 ?? "").replace(/\D/g, "");
  if (digits.startsWith("880")) digits = digits.slice(2);
  else if (digits.startsWith("88") && digits.length === 13) digits = digits.slice(2);
  if (digits.length === 10 && digits.startsWith("1")) digits = `0${digits}`;
  return digits;
};
var BLOCKED_PHONE_MESSAGE = "Orders can't be placed with this phone number. Please contact us if you think this is a mistake.";
var assertPhoneAllowed = async (phone) => {
  const normalized = normalizePhone(phone);
  if (!normalized) return;
  const blocked = await prisma2.blockedPhone.findUnique({ where: { phone: normalized } });
  if (blocked) throw new AppError_default(status15.FORBIDDEN, BLOCKED_PHONE_MESSAGE);
};
var findBlocked = async (phones) => {
  const normalized = Array.from(
    new Set(phones.filter(Boolean).map((p) => normalizePhone(p)))
  );
  if (normalized.length === 0) return /* @__PURE__ */ new Set();
  const rows = await prisma2.blockedPhone.findMany({
    where: { phone: { in: normalized } },
    select: { phone: true }
  });
  return new Set(rows.map((r) => r.phone));
};
var getBlockedPhones = async (searchTerm) => {
  const term = searchTerm?.trim();
  return prisma2.blockedPhone.findMany({
    where: term ? {
      OR: [
        { phone: { contains: normalizePhone(term) || term } },
        { reason: { contains: term, mode: "insensitive" } },
        { orderNumber: { contains: term, mode: "insensitive" } }
      ]
    } : {},
    orderBy: { createdAt: "desc" }
  });
};
var blockPhone = async (payload, admin2) => {
  let phone = payload.phone;
  let orderNumber = null;
  if (payload.orderId) {
    const order = await prisma2.order.findUnique({
      where: { id: payload.orderId },
      select: { phone: true, orderNumber: true }
    });
    if (!order) throw new AppError_default(status15.NOT_FOUND, "Order not found");
    phone = order.phone ?? void 0;
    orderNumber = order.orderNumber;
  }
  const normalized = normalizePhone(phone ?? "");
  if (!/^01\d{9}$/.test(normalized)) {
    throw new AppError_default(status15.BAD_REQUEST, "Enter a valid 11-digit mobile number (01XXXXXXXXX)");
  }
  const existing = await prisma2.blockedPhone.findUnique({ where: { phone: normalized } });
  if (existing) return existing;
  const adminUser = await prisma2.user.findUnique({
    where: { id: admin2.userId },
    select: { name: true }
  });
  return prisma2.blockedPhone.create({
    data: {
      phone: normalized,
      reason: payload.reason?.trim() || null,
      orderNumber,
      blockedById: admin2.userId,
      blockedBy: adminUser?.name ?? null
    }
  });
};
var unblockPhone = async (id) => {
  const existing = await prisma2.blockedPhone.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status15.NOT_FOUND, "This number is not blocked");
  await prisma2.blockedPhone.delete({ where: { id } });
  return { id, phone: existing.phone };
};
var BlockedPhoneService = {
  assertPhoneAllowed,
  findBlocked,
  getBlockedPhones,
  blockPhone,
  unblockPhone
};

// src/app/utils/generateOrderNumber.ts
var ORDER_NUMBER_PREFIX = {
  ONLINE: "ONL",
  POS: "POS",
  LANDING_PAGE: "LP"
};
var generateOrderNumber = (orderType, orderSeq) => {
  return `${ORDER_NUMBER_PREFIX[orderType]}-${String(orderSeq).padStart(6, "0")}`;
};

// src/app/module/notification/notification.service.ts
var notifyOrderPlaced = async (order) => {
  const recipients = /* @__PURE__ */ new Map();
  if (order.userId) {
    recipients.set(order.userId, NotificationType.ORDER_PLACED);
  }
  const admins = await prisma2.user.findMany({
    where: { role: { in: [Role.ADMIN, Role.SUPER_ADMIN] } },
    select: { id: true }
  });
  for (const admin2 of admins) {
    recipients.set(admin2.id, NotificationType.ORDER_PLACED);
  }
  if (recipients.size === 0) return;
  await prisma2.notification.createMany({
    data: [...recipients.keys()].map((userId) => ({
      userId,
      orderId: order.id,
      type: NotificationType.ORDER_PLACED,
      title: userId === order.userId ? "Order Placed Successfully" : "New Order Received",
      message: userId === order.userId ? `Your order #${order.orderNumber} has been placed successfully.` : `A new order #${order.orderNumber} has been placed.`
    }))
  });
};
var notifyOrderStatusChanged = async (order, previousStatus) => {
  if (!order.userId || order.orderStatus === previousStatus) return;
  await prisma2.notification.create({
    data: {
      userId: order.userId,
      orderId: order.id,
      type: NotificationType.ORDER_STATUS_CHANGED,
      title: "Order Status Updated",
      message: `Your order #${order.orderNumber} is now ${order.orderStatus.toLowerCase()}.`
    }
  });
};
var notifyPaymentStatusChanged = async (order, previousPaymentStatus) => {
  if (!order.userId || order.paymentStatus === previousPaymentStatus) return;
  await prisma2.notification.create({
    data: {
      userId: order.userId,
      orderId: order.id,
      type: NotificationType.PAYMENT_STATUS_CHANGED,
      title: "Payment Status Updated",
      message: `Payment for your order #${order.orderNumber} is now ${order.paymentStatus.toLowerCase()}.`
    }
  });
};
var notifyOrderReturnProcessed = async (order, refundAmount) => {
  if (!order.userId) return;
  await prisma2.notification.create({
    data: {
      userId: order.userId,
      orderId: order.id,
      type: NotificationType.ORDER_RETURN_PROCESSED,
      title: "Return Processed",
      message: `A return of \u09F3${refundAmount.toFixed(2)} has been processed for your order #${order.orderNumber}.`
    }
  });
};
var getMyNotifications = async (userId, limit) => {
  const [notifications, unreadCount] = await Promise.all([
    prisma2.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: limit
    }),
    prisma2.notification.count({ where: { userId, isRead: false } })
  ]);
  return { notifications, unreadCount };
};
var markAsRead = async (userId, id) => {
  await prisma2.notification.updateMany({
    where: { id, userId },
    data: { isRead: true }
  });
};
var markAllAsRead = async (userId) => {
  await prisma2.notification.updateMany({
    where: { userId, isRead: false },
    data: { isRead: true }
  });
};
var NotificationService = {
  notifyOrderPlaced,
  notifyOrderStatusChanged,
  notifyPaymentStatusChanged,
  notifyOrderReturnProcessed,
  getMyNotifications,
  markAsRead,
  markAllAsRead
};

// src/app/module/abandoned-checkout/abandonedCheckout.service.ts
var pickDefined = (obj) => {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (obj[key] !== void 0) result[key] = obj[key];
  }
  return result;
};
var trackCheckout = async (payload) => {
  const { sessionToken, ...rest } = payload;
  const data = pickDefined(rest);
  return prisma2.abandonedCheckout.upsert({
    where: { sessionToken },
    create: {
      sessionToken,
      source: payload.source || CheckoutSource.STOREFRONT,
      items: payload.items ?? [],
      ...data
    },
    update: data
  });
};
var getAbandonedCheckouts = async (queryParams) => {
  const query = new QueryBuilder(prisma2.abandonedCheckout, queryParams, {
    searchableFields: ["fullName", "phone", "address"]
  }).search().filter().sort().paginate();
  return query.execute();
};
var deleteAbandonedCheckout = async (id) => {
  return prisma2.abandonedCheckout.delete({ where: { id } });
};
var deleteBySessionToken = async (sessionToken) => {
  try {
    await prisma2.abandonedCheckout.deleteMany({ where: { sessionToken } });
  } catch {
  }
};
var AbandonedCheckoutService = {
  trackCheckout,
  getAbandonedCheckouts,
  deleteAbandonedCheckout,
  deleteBySessionToken
};

// src/app/module/courier/pathaoCourier.service.ts
import status16 from "http-status";

// src/app/module/courier-setting/courierSetting.service.ts
var getCourierSettings = async () => {
  let settings = await prisma2.courierSetting.findUnique({
    where: { id: "default" }
  });
  if (!settings) {
    settings = await prisma2.courierSetting.create({
      data: { id: "default" }
    });
  }
  return settings;
};
var updatePathaoSettings = async (payload) => {
  await getCourierSettings();
  return prisma2.courierSetting.update({
    where: { id: "default" },
    data: payload
  });
};
var updateSteadfastSettings = async (payload) => {
  await getCourierSettings();
  return prisma2.courierSetting.update({
    where: { id: "default" },
    data: payload
  });
};
var updateRedxSettings = async (payload) => {
  await getCourierSettings();
  return prisma2.courierSetting.update({
    where: { id: "default" },
    data: payload
  });
};
var CourierSettingService = {
  getCourierSettings,
  updatePathaoSettings,
  updateSteadfastSettings,
  updateRedxSettings
};

// src/app/module/courier/pathaoCourier.service.ts
var cachedToken = null;
var getAccessToken2 = async (baseUrl, credentials) => {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 6e4) {
    return cachedToken.accessToken;
  }
  const res = await fetch(`${baseUrl}/aladdin/api/v1/issue-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: credentials.clientId,
      client_secret: credentials.clientSecret,
      username: credentials.username,
      password: credentials.password,
      grant_type: "password"
    })
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new AppError_default(
      status16.BAD_GATEWAY,
      `Pathao auth failed: ${data.message || res.statusText}`
    );
  }
  cachedToken = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (Number(data.expires_in) || 3600) * 1e3
  };
  return cachedToken.accessToken;
};
var createOrder = async (order, itemQuantity) => {
  const settings = await CourierSettingService.getCourierSettings();
  if (!settings.pathaoEnabled) {
    throw new AppError_default(status16.BAD_REQUEST, "Pathao courier is not enabled in settings");
  }
  if (!settings.pathaoBaseUrl || !settings.pathaoClientId || !settings.pathaoClientSecret || !settings.pathaoUsername || !settings.pathaoPassword || !settings.pathaoStoreId) {
    throw new AppError_default(status16.BAD_REQUEST, "Pathao settings are incomplete");
  }
  const baseUrl = settings.pathaoBaseUrl.replace(/\/$/, "");
  const token = await getAccessToken2(baseUrl, {
    clientId: settings.pathaoClientId,
    clientSecret: settings.pathaoClientSecret,
    username: settings.pathaoUsername,
    password: settings.pathaoPassword
  });
  const amountToCollect = order.paymentStatus === "PAID" ? 0 : Math.round(order.totalAmount);
  const res = await fetch(`${baseUrl}/aladdin/api/v1/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      store_id: Number(settings.pathaoStoreId),
      merchant_order_id: order.orderNumber,
      recipient_name: order.fullName,
      recipient_phone: order.phone,
      recipient_address: `${order.address}, ${order.district}`,
      delivery_type: 48,
      // normal delivery
      item_type: 2,
      // parcel
      special_instruction: order.notes || void 0,
      item_quantity: Math.max(1, itemQuantity),
      item_weight: 0.5,
      amount_to_collect: amountToCollect,
      item_description: `Order ${order.orderNumber}`
    })
  });
  const data = await res.json();
  if (!res.ok || data.type === "error") {
    throw new AppError_default(
      status16.BAD_GATEWAY,
      `Pathao order creation failed: ${data.message || res.statusText}`
    );
  }
  const consignmentId = data?.data?.consignment_id;
  const orderStatus = data?.data?.order_status;
  return {
    consignmentId: consignmentId ? String(consignmentId) : void 0,
    trackingCode: consignmentId ? String(consignmentId) : void 0,
    statusText: orderStatus || "Pending"
  };
};
var PathaoCourierService = {
  createOrder
};

// src/app/module/courier/steadfastCourier.service.ts
import status17 from "http-status";
var STEADFAST_BASE_URL = "https://portal.packzy.com/api/v1";
var createOrder2 = async (order) => {
  const settings = await CourierSettingService.getCourierSettings();
  if (!settings.steadfastEnabled) {
    throw new AppError_default(status17.BAD_REQUEST, "Steadfast courier is not enabled in settings");
  }
  if (!settings.steadfastApiKey || !settings.steadfastSecretKey) {
    throw new AppError_default(status17.BAD_REQUEST, "Steadfast settings are incomplete");
  }
  const codAmount = order.paymentStatus === "PAID" ? 0 : order.totalAmount;
  const res = await fetch(`${STEADFAST_BASE_URL}/create_order`, {
    method: "POST",
    headers: {
      "Api-Key": settings.steadfastApiKey,
      "Secret-Key": settings.steadfastSecretKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      invoice: order.orderNumber,
      recipient_name: order.fullName,
      recipient_phone: order.phone,
      recipient_address: `${order.address}, ${order.district}`,
      cod_amount: codAmount,
      note: order.notes || void 0
    })
  });
  const data = await res.json();
  if (!res.ok || data.status !== 200) {
    throw new AppError_default(
      status17.BAD_GATEWAY,
      `Steadfast order creation failed: ${data.message || res.statusText}`
    );
  }
  const consignment = data.consignment;
  return {
    consignmentId: consignment?.consignment_id ? String(consignment.consignment_id) : void 0,
    trackingCode: consignment?.tracking_code,
    statusText: consignment?.status || "in_review"
  };
};
var SteadfastCourierService = {
  createOrder: createOrder2
};

// src/app/module/courier/redxCourier.service.ts
import status18 from "http-status";
var BASE_URLS = {
  SANDBOX: "https://sandbox.redx.com.bd/v1.0.0-beta",
  LIVE: "https://openapi.redx.com.bd/v1.0.0-beta"
};
var getConfig = async () => {
  const settings = await CourierSettingService.getCourierSettings();
  if (!settings.redxEnabled) {
    throw new AppError_default(status18.BAD_REQUEST, "RedX courier is not enabled in settings");
  }
  if (!settings.redxAccessToken) {
    throw new AppError_default(status18.BAD_REQUEST, "RedX access token is missing in Courier Settings");
  }
  return {
    baseUrl: settings.redxMode === "LIVE" ? BASE_URLS.LIVE : BASE_URLS.SANDBOX,
    token: settings.redxAccessToken.replace(/^Bearer\s+/i, ""),
    pickupStoreId: settings.redxPickupStoreId
  };
};
var request = async (path5, init2 = {}) => {
  const { baseUrl, token } = await getConfig();
  const res = await fetch(`${baseUrl}${path5}`, {
    ...init2,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "API-ACCESS-TOKEN": `Bearer ${token}`,
      ...init2.headers ?? {}
    }
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = data?.message || data?.errors && Object.values(data.errors).flat().join(", ") || res.statusText;
    throw new AppError_default(status18.BAD_GATEWAY, `RedX: ${detail}`);
  }
  return data;
};
var areaCache = /* @__PURE__ */ new Map();
var getAreas = async (district) => {
  const key = (district ?? "").trim().toLowerCase();
  const hit = areaCache.get(key);
  if (hit && hit.expiresAt > Date.now()) return hit.areas;
  const query = key ? `?district_name=${encodeURIComponent(district.trim())}` : "";
  const data = await request(`/areas${query}`);
  const areas = (data.areas ?? []).sort((a, b) => a.name.localeCompare(b.name));
  areaCache.set(key, { areas, expiresAt: Date.now() + 24 * 60 * 60 * 1e3 });
  return areas;
};
var createOrder3 = async (order, area, items) => {
  const { pickupStoreId } = await getConfig();
  const cashToCollect = order.paymentStatus === "PAID" ? 0 : Math.round(order.totalAmount);
  const itemCount = items.reduce((n, i) => n + i.quantity, 0);
  const data = await request("/parcel", {
    method: "POST",
    body: JSON.stringify({
      customer_name: order.fullName,
      customer_phone: order.phone,
      delivery_area: area.name,
      delivery_area_id: area.id,
      customer_address: `${order.address}, ${order.district}`,
      merchant_invoice_id: order.orderNumber,
      cash_collection_amount: String(cashToCollect),
      // RedX wants grams; ~500 g per item is a safe default for apparel
      parcel_weight: Math.max(500, itemCount * 500),
      instruction: order.notes || "",
      value: Math.round(order.totalAmount),
      ...pickupStoreId && { pickup_store_id: Number(pickupStoreId) },
      parcel_details_json: items.map((i) => ({
        name: i.name.slice(0, 100),
        category: "General",
        value: Math.round(i.price * i.quantity)
      }))
    })
  });
  if (!data.tracking_id) {
    throw new AppError_default(status18.BAD_GATEWAY, "RedX did not return a tracking ID");
  }
  return {
    consignmentId: data.tracking_id,
    trackingCode: data.tracking_id,
    statusText: "pickup-pending"
  };
};
var RedxCourierService = {
  getAreas,
  createOrder: createOrder3
};

// src/app/module/sms-setting/smsSetting.service.ts
var getSmsSettings = async () => {
  let settings = await prisma2.smsSetting.findUnique({
    where: { id: "default" }
  });
  if (!settings) {
    settings = await prisma2.smsSetting.create({
      data: { id: "default" }
    });
  }
  return settings;
};
var updateSmsSettings = async (payload) => {
  await getSmsSettings();
  return prisma2.smsSetting.update({
    where: { id: "default" },
    data: payload
  });
};
var SmsSettingService = {
  getSmsSettings,
  updateSmsSettings
};

// src/app/module/sms/sms.service.ts
var BULKSMS_BASE_URL = "http://bulksmsbd.net/api/smsapi";
var normalizePhone2 = (phone) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("88")) return digits;
  if (digits.startsWith("0")) return `88${digits}`;
  return `88${digits}`;
};
var sendSms = async (phone, message) => {
  try {
    const settings = await SmsSettingService.getSmsSettings();
    if (!settings.enabled || !settings.apiKey || !settings.senderId) return;
    const params = new URLSearchParams({
      api_key: settings.apiKey,
      type: "text",
      number: normalizePhone2(phone),
      senderid: settings.senderId,
      message
    });
    await fetch(`${BULKSMS_BASE_URL}?${params.toString()}`);
  } catch (error) {
    console.error("Failed to send SMS:", error);
  }
};
var SmsService = {
  sendSms
};

// src/app/module/order/bdCourier.service.ts
var BDCourierService = class {
  apiKey;
  apiUrl;
  constructor() {
    this.apiKey = envVars.BDCOURIER.API_KEY || "";
    this.apiUrl = envVars.BDCOURIER.API_BASE_URL || "https://api.bdcourier.com";
    if (!this.apiKey) {
      throw new Error("BDCourier API key is missing...");
    }
  }
  async checkPhone(phone) {
    try {
      const response = await fetch(`${this.apiUrl}/courier-check`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone })
      });
      const data = await response.json();
      if (!response.ok || data.status !== "success") {
        throw new Error(
          `BDCourier API error: ${response.status} - ${data.message || "unknown error"}`
        );
      }
      return data;
    } catch (error) {
      console.error("Error checking phone with BDCourier:", error);
      throw error;
    }
  }
};

// src/app/module/order/order.service.ts
var COMMISSION_RATE = 0.1;
var createOrder4 = async (userId, payload) => {
  await BlockedPhoneService.assertPhoneAllowed(payload.phone);
  let orderItemsToProcess = [];
  let isFromCart = false;
  if (payload.items && payload.items.length > 0) {
    for (const item of payload.items) {
      const product = await prisma2.product.findUnique({
        where: { id: item.productId },
        include: { variants: true }
      });
      if (!product) throw new AppError_default(status19.NOT_FOUND, `Product not found: ${item.productId}`);
      let sellPrice = product.sellPrice;
      let variant = null;
      if (product.type === "VARIABLE" && item.productVariantId) {
        variant = product.variants.find((v) => v.id === item.productVariantId);
        if (!variant) throw new AppError_default(status19.NOT_FOUND, `Product variant not found: ${item.productVariantId}`);
        sellPrice = variant.sellPrice;
      }
      orderItemsToProcess.push({
        productId: item.productId,
        productVariantId: item.productVariantId || null,
        quantity: item.quantity,
        product,
        variant,
        sellPrice
      });
    }
  } else {
    if (!userId) {
      throw new AppError_default(status19.BAD_REQUEST, "No items provided for order");
    }
    const cart = await prisma2.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                variants: true
              }
            },
            productVariant: true
          }
        }
      }
    });
    if (!cart || cart.items.length === 0) {
      throw new AppError_default(status19.BAD_REQUEST, "Your cart is empty");
    }
    orderItemsToProcess = cart.items.map((item) => {
      let sellPrice = item.product.sellPrice;
      if (item.product.type === "VARIABLE" && item.productVariant) {
        sellPrice = item.productVariant.sellPrice;
      }
      return {
        productId: item.productId,
        productVariantId: item.productVariantId,
        quantity: item.quantity,
        product: item.product,
        variant: item.productVariant,
        sellPrice
      };
    });
    isFromCart = true;
  }
  const order = await prisma2.$transaction(async (tx) => {
    let totalAmount = 0;
    for (const item of orderItemsToProcess) {
      if (item.variant) {
        if (item.variant.quantity < item.quantity) {
          throw new AppError_default(
            status19.BAD_REQUEST,
            `Insufficient stock for variation of product: ${item.product.name}`
          );
        }
      } else {
        if (item.product.stock < item.quantity) {
          throw new AppError_default(
            status19.BAD_REQUEST,
            `Insufficient stock for product: ${item.product.name}`
          );
        }
      }
      totalAmount += item.sellPrice * item.quantity;
    }
    const discountAmount = payload.discountAmount || 0;
    const shippingFee = payload.shippingFee || 0;
    const finalTotalAmount = Math.max(0, totalAmount + shippingFee - discountAmount);
    const order2 = await tx.order.create({
      data: {
        userId,
        orderType: payload.orderType || OrderType.ONLINE,
        totalAmount: finalTotalAmount,
        discountAmount,
        shippingFee,
        couponId: payload.couponId || null,
        fullName: payload.fullName,
        phone: payload.phone,
        email: payload.email?.trim() || null,
        address: payload.address,
        district: payload.district,
        notes: payload.notes,
        orderStatus: OrderStatus.PENDING,
        paymentMethod: payload.paymentMethod || "COD"
      }
    });
    const orderWithNumber = await tx.order.update({
      where: { id: order2.id },
      data: { orderNumber: generateOrderNumber(order2.orderType, order2.orderSeq) }
    });
    for (const item of orderItemsToProcess) {
      const itemTotal = item.sellPrice * item.quantity;
      const itemCommission = itemTotal * COMMISSION_RATE;
      const vendorEarning = itemTotal - itemCommission;
      await tx.orderItem.create({
        data: {
          orderId: order2.id,
          productId: item.productId,
          productVariantId: item.productVariantId,
          quantity: item.quantity,
          price: item.sellPrice,
          costPrice: item.variant?.purchasePrice ?? item.product.purchasePrice,
          shopId: item.product.shopId,
          platformEarning: itemCommission,
          vendorEarning
        }
      });
      if (item.productVariantId) {
        await tx.productVariant.update({
          where: { id: item.productVariantId },
          data: {
            quantity: {
              decrement: item.quantity
            }
          }
        });
        await tx.product.update({
          where: { id: item.productId },
          data: {
            stock: {
              decrement: item.quantity
            }
          }
        });
      } else {
        await tx.product.update({
          where: { id: item.productId },
          data: {
            stock: {
              decrement: item.quantity
            }
          }
        });
      }
    }
    const cart = userId ? await tx.cart.findUnique({ where: { userId } }) : null;
    if (cart) {
      if (isFromCart) {
        await tx.cartItem.deleteMany({
          where: { cartId: cart.id }
        });
      } else {
        for (const item of orderItemsToProcess) {
          await tx.cartItem.deleteMany({
            where: {
              cartId: cart.id,
              productId: item.productId,
              productVariantId: item.productVariantId || null
            }
          });
        }
      }
    }
    return orderWithNumber;
  });
  await NotificationService.notifyOrderPlaced(order);
  if (order.phone) {
    await SmsService.sendSms(
      order.phone,
      `Hello ${order.fullName || "Customer"}, your order (ID: ${order.orderNumber}) has been received! We will start processing soon. Thank you for shopping with us.`
    );
  }
  if (payload.checkoutSessionToken) {
    await AbandonedCheckoutService.deleteBySessionToken(payload.checkoutSessionToken);
  }
  return order;
};
var orderListInclude = {
  items: {
    select: {
      id: true,
      orderId: true,
      productId: true,
      productVariantId: true,
      quantity: true,
      returnedQuantity: true,
      price: true,
      status: true,
      product: {
        select: {
          id: true,
          name: true,
          slug: true,
          images: true,
          sku: true,
          type: true,
          attributes: true
        }
      },
      productVariant: {
        select: { id: true, combination: true, sku: true, image: true }
      }
    }
  },
  user: {
    select: { id: true, name: true, email: true }
  }
};
var DHAKA_OFFSET = "+06:00";
var dateRangeWhere = (from, to) => {
  const valid = (v) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
  const createdAt = {};
  if (valid(from)) createdAt.gte = /* @__PURE__ */ new Date(`${from}T00:00:00${DHAKA_OFFSET}`);
  if (valid(to)) createdAt.lte = /* @__PURE__ */ new Date(`${to}T23:59:59.999${DHAKA_OFFSET}`);
  return Object.keys(createdAt).length ? { createdAt } : null;
};
var buildOrderListQuery = (queryParams) => {
  const { from, to, ...rest } = queryParams;
  const orderQuery = new QueryBuilder(prisma2.order, rest, {
    searchableFields: ["orderNumber", "fullName", "phone", "address", "district"],
    filterableFields: ["orderStatus", "paymentStatus", "userId", "orderType"]
  }).search().filter().sort().paginate().include(orderListInclude);
  const range = dateRangeWhere(from, to);
  if (range) orderQuery.where(range);
  return orderQuery;
};
var getAllOrders = async (queryParams) => {
  const result = await buildOrderListQuery(queryParams).execute();
  const orders = result.data;
  const blocked = await BlockedPhoneService.findBlocked(orders.map((o) => o.phone));
  return {
    ...result,
    data: orders.map((o) => ({
      ...o,
      isPhoneBlocked: o.phone ? blocked.has(normalizePhone(o.phone)) : false
    }))
  };
};
var EXPORT_LIMIT = 1e4;
var exportOrders = async (queryParams) => {
  const result = await buildOrderListQuery({
    ...queryParams,
    page: "1",
    limit: String(EXPORT_LIMIT)
  }).execute();
  return { orders: result.data, total: result.meta.total, limit: EXPORT_LIMIT };
};
var getOrderById = async (id, userId, role) => {
  const order = await prisma2.order.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          product: true,
          productVariant: true,
          shop: true
        }
      },
      user: {
        select: { id: true, name: true, email: true }
      }
    }
  });
  if (!order) {
    throw new AppError_default(status19.NOT_FOUND, "Order not found");
  }
  if (role !== "ADMIN" && role !== "SUPER_ADMIN" && order.userId !== userId) {
    throw new AppError_default(status19.FORBIDDEN, "Access denied");
  }
  return order;
};
var PUBLIC_ORDER_SELECT = {
  id: true,
  orderNumber: true,
  orderType: true,
  orderStatus: true,
  paymentStatus: true,
  paymentMethod: true,
  totalAmount: true,
  discountAmount: true,
  shippingFee: true,
  fullName: true,
  phone: true,
  email: true,
  address: true,
  district: true,
  notes: true,
  createdAt: true,
  items: {
    select: {
      id: true,
      quantity: true,
      returnedQuantity: true,
      price: true,
      status: true,
      product: { select: { id: true, name: true, images: true } },
      productVariant: { select: { id: true, combination: true } }
    }
  }
};
var getPublicOrderById = async (id) => {
  const order = await prisma2.order.findUnique({
    where: { id },
    select: PUBLIC_ORDER_SELECT
  });
  if (!order) {
    throw new AppError_default(status19.NOT_FOUND, "Order not found");
  }
  return order;
};
var trackOrder = async (orderNumber, phone) => {
  const order = await prisma2.order.findFirst({
    where: { orderNumber: orderNumber.trim(), phone: phone.trim() },
    select: PUBLIC_ORDER_SELECT
  });
  if (!order) {
    throw new AppError_default(
      status19.NOT_FOUND,
      "No order found with that order number and phone number. Please check your details."
    );
  }
  return order;
};
var checkOrderFraud = async (id, userId, role) => {
  const order = await getOrderById(id, userId, role);
  const phone = order.phone?.trim();
  const isValidPhone = !!phone && phone.toUpperCase() !== "N/A" && phone.length >= 10;
  if (!isValidPhone) {
    return { hasPhone: false };
  }
  const bdCourierService = new BDCourierService();
  const report = await bdCourierService.checkPhone(phone);
  return { hasPhone: true, phone, report };
};
var updateOrderStatus = async (id, statusValue) => {
  const existingOrder = await prisma2.order.findUnique({ where: { id } });
  if (!existingOrder) throw new AppError_default(status19.NOT_FOUND, "Order not found");
  const updatedOrder = await prisma2.$transaction(async (tx) => {
    const order = await tx.order.update({
      where: { id },
      data: { orderStatus: statusValue }
    });
    await tx.orderItem.updateMany({
      where: { orderId: id },
      data: { status: statusValue }
    });
    return order;
  });
  await NotificationService.notifyOrderStatusChanged(updatedOrder, existingOrder.orderStatus);
  if (updatedOrder.phone && statusValue !== existingOrder.orderStatus) {
    const name = updatedOrder.fullName || "Customer";
    const orderRef = updatedOrder.orderNumber || updatedOrder.id;
    const statusMessages = {
      [OrderStatus.PROCESSING]: `Hi ${name}, your order (ID: ${orderRef}) is now being processed.`,
      [OrderStatus.SHIPPED]: `Hi ${name}, your order (ID: ${orderRef}) has been shipped! Our delivery team will contact you soon.`,
      [OrderStatus.DELIVERED]: `Hi ${name}, your order (ID: ${orderRef}) has been delivered successfully! Thank you for shopping with us.`,
      [OrderStatus.CANCELLED]: `Hi ${name}, your order (ID: ${orderRef}) has been cancelled. If this wasn't you, please contact support.`
    };
    const message = statusMessages[statusValue];
    if (message) await SmsService.sendSms(updatedOrder.phone, message);
  }
  return updatedOrder;
};
var updateOrderDiscount = async (id, discountAmount) => {
  const order = await prisma2.order.findUnique({
    where: { id },
    include: { items: true }
  });
  if (!order) throw new AppError_default(status19.NOT_FOUND, "Order not found");
  const itemsSubtotal = order.items.reduce(
    (sum, item) => sum + item.price * (item.quantity - item.returnedQuantity),
    0
  );
  const newTotalAmount = Math.max(0, itemsSubtotal + order.shippingFee - discountAmount);
  const updatedOrder = await prisma2.order.update({
    where: { id },
    data: { discountAmount, totalAmount: newTotalAmount }
  });
  return updatedOrder;
};
var updatePaymentStatus = async (id, paymentStatus) => {
  const existingOrder = await prisma2.order.findUnique({ where: { id } });
  if (!existingOrder) throw new AppError_default(status19.NOT_FOUND, "Order not found");
  const updatedOrder = await prisma2.order.update({
    where: { id },
    data: { paymentStatus }
  });
  await NotificationService.notifyPaymentStatusChanged(updatedOrder, existingOrder.paymentStatus);
  return updatedOrder;
};
var assignCourier = async (id, provider, options = {}) => {
  const order = await prisma2.order.findUnique({
    where: { id },
    include: { items: { include: { product: { select: { name: true } } } } }
  });
  if (!order) throw new AppError_default(status19.NOT_FOUND, "Order not found");
  if (!order.fullName || !order.phone || !order.address || !order.district) {
    throw new AppError_default(status19.BAD_REQUEST, "Order is missing recipient name/phone/address/district");
  }
  if (order.courierProvider) {
    throw new AppError_default(
      status19.BAD_REQUEST,
      `Order is already assigned to ${order.courierProvider} (${order.courierTrackingCode || order.courierConsignmentId})`
    );
  }
  const orderInput = {
    orderNumber: order.orderNumber || order.id,
    fullName: order.fullName,
    phone: order.phone,
    address: order.address,
    district: order.district,
    notes: order.notes,
    totalAmount: order.totalAmount,
    paymentStatus: order.paymentStatus
  };
  const itemQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0);
  let result;
  if (provider === CourierProvider.PATHAO) {
    result = await PathaoCourierService.createOrder(orderInput, itemQuantity);
  } else if (provider === CourierProvider.REDX) {
    if (!options.redxArea) {
      throw new AppError_default(status19.BAD_REQUEST, "Select the RedX delivery area");
    }
    result = await RedxCourierService.createOrder(
      orderInput,
      options.redxArea,
      order.items.map((item) => ({
        name: item.product?.name ?? "Item",
        quantity: item.quantity - item.returnedQuantity,
        price: item.price
      }))
    );
  } else {
    result = await SteadfastCourierService.createOrder(orderInput);
  }
  return prisma2.order.update({
    where: { id },
    data: {
      courierProvider: provider,
      courierConsignmentId: result.consignmentId,
      courierTrackingCode: result.trackingCode,
      courierStatus: result.statusText,
      courierAssignedAt: /* @__PURE__ */ new Date()
    }
  });
};
var updateOrderItemStatus = async (itemId, statusValue) => {
  const orderItem = await prisma2.orderItem.findUnique({
    where: { id: itemId }
  });
  if (!orderItem) {
    throw new AppError_default(status19.NOT_FOUND, "Order item not found");
  }
  const updatedItem = await prisma2.orderItem.update({
    where: { id: itemId },
    data: { status: statusValue }
  });
  const existingOrder = await prisma2.order.findUnique({ where: { id: orderItem.orderId } });
  const updatedOrder = await prisma2.order.update({
    where: { id: orderItem.orderId },
    data: { orderStatus: statusValue }
  });
  if (existingOrder) {
    await NotificationService.notifyOrderStatusChanged(updatedOrder, existingOrder.orderStatus);
  }
  return updatedItem;
};
var updateOrderItem = async (itemId, payload) => {
  const orderItem = await prisma2.orderItem.findUnique({
    where: { id: itemId },
    include: { order: true }
  });
  if (!orderItem) {
    throw new AppError_default(status19.NOT_FOUND, "Order item not found");
  }
  const isContentEdit = payload.productId !== void 0 || payload.productVariantId !== void 0 || payload.quantity !== void 0;
  if (!isContentEdit) {
    return updateOrderItemStatus(itemId, payload.status);
  }
  if (orderItem.order.orderType !== OrderType.POS) {
    if (orderItem.status !== OrderStatus.PENDING && orderItem.status !== OrderStatus.PROCESSING) {
      throw new AppError_default(
        status19.BAD_REQUEST,
        "This item can no longer be edited once it has shipped"
      );
    }
  }
  const newProductId = payload.productId ?? orderItem.productId;
  const newProductVariantId = payload.productVariantId !== void 0 ? payload.productVariantId : orderItem.productVariantId;
  const newQuantity = payload.quantity ?? orderItem.quantity;
  const product = await prisma2.product.findUnique({
    where: { id: newProductId },
    include: { variants: true }
  });
  if (!product) throw new AppError_default(status19.NOT_FOUND, `Product not found: ${newProductId}`);
  let variant = null;
  if (newProductVariantId) {
    variant = product.variants.find((v) => v.id === newProductVariantId);
    if (!variant) {
      throw new AppError_default(status19.NOT_FOUND, `Product variant not found: ${newProductVariantId}`);
    }
  }
  const sellPrice = variant?.sellPrice ?? product.sellPrice;
  const costPrice = variant?.purchasePrice ?? product.purchasePrice;
  const updatedItem = await prisma2.$transaction(async (tx) => {
    if (orderItem.productVariantId) {
      await tx.productVariant.update({
        where: { id: orderItem.productVariantId },
        data: { quantity: { increment: orderItem.quantity } }
      });
    }
    await tx.product.update({
      where: { id: orderItem.productId },
      data: { stock: { increment: orderItem.quantity } }
    });
    if (newProductVariantId) {
      const freshVariant = await tx.productVariant.findUnique({
        where: { id: newProductVariantId }
      });
      if (!freshVariant || freshVariant.quantity < newQuantity) {
        throw new AppError_default(
          status19.BAD_REQUEST,
          `Insufficient stock for variation of product: ${product.name}`
        );
      }
      await tx.productVariant.update({
        where: { id: newProductVariantId },
        data: { quantity: { decrement: newQuantity } }
      });
      await tx.product.update({
        where: { id: newProductId },
        data: { stock: { decrement: newQuantity } }
      });
    } else {
      const freshProduct = await tx.product.findUnique({ where: { id: newProductId } });
      if (!freshProduct || freshProduct.stock < newQuantity) {
        throw new AppError_default(status19.BAD_REQUEST, `Insufficient stock for product: ${product.name}`);
      }
      await tx.product.update({
        where: { id: newProductId },
        data: { stock: { decrement: newQuantity } }
      });
    }
    const itemTotal = sellPrice * newQuantity;
    const platformEarning = itemTotal * COMMISSION_RATE;
    const vendorEarning = itemTotal - platformEarning;
    const item = await tx.orderItem.update({
      where: { id: itemId },
      data: {
        productId: newProductId,
        productVariantId: newProductVariantId,
        quantity: newQuantity,
        price: sellPrice,
        costPrice,
        vendorEarning,
        platformEarning,
        ...payload.status !== void 0 && { status: payload.status }
      }
    });
    const allItems = await tx.orderItem.findMany({ where: { orderId: orderItem.orderId } });
    const itemsTotal = allItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const newTotalAmount = Math.max(
      0,
      itemsTotal + orderItem.order.shippingFee - orderItem.order.discountAmount
    );
    await tx.order.update({
      where: { id: orderItem.orderId },
      data: {
        totalAmount: newTotalAmount,
        ...payload.status !== void 0 && { orderStatus: payload.status }
      }
    });
    return item;
  });
  if (payload.status !== void 0) {
    const updatedOrder = await prisma2.order.findUnique({ where: { id: orderItem.orderId } });
    if (updatedOrder) {
      await NotificationService.notifyOrderStatusChanged(updatedOrder, orderItem.order.orderStatus);
    }
  }
  return updatedItem;
};
var deleteOrder = async (id) => {
  return await prisma2.$transaction(async (tx) => {
    await tx.orderItem.deleteMany({
      where: { orderId: id }
    });
    return await tx.order.delete({
      where: { id }
    });
  });
};
var OrderService = {
  createOrder: createOrder4,
  exportOrders,
  getAllOrders,
  getOrderById,
  getPublicOrderById,
  trackOrder,
  updateOrderStatus,
  updateOrderDiscount,
  updatePaymentStatus,
  assignCourier,
  deleteOrder,
  updateOrderItemStatus,
  updateOrderItem,
  checkOrderFraud
};

// src/app/module/order/order.controller.ts
var createOrder5 = catchAsync(async (req, res) => {
  const result = await OrderService.createOrder(req.user.userId, req.body);
  sendResponse(res, {
    httpStatusCode: status20.CREATED,
    success: true,
    message: "Order placed successfully",
    data: result
  });
});
var getAllOrders2 = catchAsync(async (req, res) => {
  const { data, meta } = await OrderService.getAllOrders(req.query);
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Orders fetched successfully",
    data,
    meta
  });
});
var exportOrders2 = catchAsync(async (req, res) => {
  const result = await OrderService.exportOrders(req.query);
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Orders exported successfully",
    data: result
  });
});
var getMyOrders = catchAsync(async (req, res) => {
  const { data, meta } = await OrderService.getAllOrders({
    ...req.query,
    userId: req.user.userId
  });
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "My orders fetched successfully",
    data,
    meta
  });
});
var getOrderById2 = catchAsync(async (req, res) => {
  const result = await OrderService.getOrderById(
    req.params.id,
    req.user.userId,
    req.user.role
  );
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order details fetched successfully",
    data: result
  });
});
var getPublicOrderById2 = catchAsync(async (req, res) => {
  const result = await OrderService.getPublicOrderById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order details fetched successfully",
    data: result
  });
});
var trackOrder2 = catchAsync(async (req, res) => {
  const result = await OrderService.trackOrder(
    req.body.orderNumber,
    req.body.phone
  );
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order details fetched successfully",
    data: result
  });
});
var checkOrderFraud2 = catchAsync(async (req, res) => {
  const result = await OrderService.checkOrderFraud(
    req.params.id,
    req.user.userId,
    req.user.role
  );
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Fraud check fetched successfully",
    data: result
  });
});
var updateOrderStatus2 = catchAsync(async (req, res) => {
  const result = await OrderService.updateOrderStatus(
    req.params.id,
    req.body.status
  );
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order status updated successfully",
    data: result
  });
});
var updateOrderDiscount2 = catchAsync(async (req, res) => {
  const result = await OrderService.updateOrderDiscount(
    req.params.id,
    req.body.discountAmount
  );
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order discount updated successfully",
    data: result
  });
});
var updatePaymentStatus2 = catchAsync(async (req, res) => {
  const result = await OrderService.updatePaymentStatus(
    req.params.id,
    req.body.paymentStatus
  );
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Payment status updated successfully",
    data: result
  });
});
var assignCourier2 = catchAsync(async (req, res) => {
  const { provider, redxAreaId, redxAreaName } = req.body;
  const result = await OrderService.assignCourier(req.params.id, provider, {
    ...redxAreaId && redxAreaName && { redxArea: { id: redxAreaId, name: redxAreaName } }
  });
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order assigned to courier successfully",
    data: result
  });
});
var deleteOrder2 = catchAsync(async (req, res) => {
  const result = await OrderService.deleteOrder(req.params.id);
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order deleted successfully",
    data: result
  });
});
var updateOrderItemStatus2 = catchAsync(async (req, res) => {
  const result = await OrderService.updateOrderItemStatus(
    req.params.id,
    req.body.status
  );
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order item status updated successfully",
    data: result
  });
});
var updateOrderItem2 = catchAsync(async (req, res) => {
  const result = await OrderService.updateOrderItem(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "Order item updated successfully",
    data: result
  });
});
var getRedxAreas = catchAsync(async (req, res) => {
  const result = await RedxCourierService.getAreas(req.query.district);
  sendResponse(res, {
    httpStatusCode: status20.OK,
    success: true,
    message: "RedX areas fetched successfully",
    data: result
  });
});
var OrderController = {
  getRedxAreas,
  exportOrders: exportOrders2,
  createOrder: createOrder5,
  getAllOrders: getAllOrders2,
  getMyOrders,
  getOrderById: getOrderById2,
  getPublicOrderById: getPublicOrderById2,
  trackOrder: trackOrder2,
  updateOrderStatus: updateOrderStatus2,
  updateOrderDiscount: updateOrderDiscount2,
  updatePaymentStatus: updatePaymentStatus2,
  assignCourier: assignCourier2,
  deleteOrder: deleteOrder2,
  updateOrderItemStatus: updateOrderItemStatus2,
  updateOrderItem: updateOrderItem2,
  checkOrderFraud: checkOrderFraud2
};

// src/app/module/order/order.validation.ts
import z6 from "zod";

// src/app/utils/bdPhone.ts
import z5 from "zod";
var BD_MOBILE_REGEX = /^01[3-9]\d{8}$/;
var BD_MOBILE_MESSAGE = "Enter a valid 11-digit Bangladeshi mobile number (e.g. 017XXXXXXXX)";
var normalizeBdPhone = (raw3) => {
  let digits = raw3.replace(/[০-৯]/g, (d) => String(d.charCodeAt(0) - 2534)).replace(/\D/g, "");
  if (digits.startsWith("880") && digits.length === 13) digits = digits.slice(2);
  return digits;
};
var bdMobilePhoneSchema = z5.string({ message: "Phone number is required" }).trim().min(1, "Phone number is required").transform(normalizeBdPhone).refine((phone) => BD_MOBILE_REGEX.test(phone), BD_MOBILE_MESSAGE);

// src/app/module/order/order.validation.ts
var createOrderZodSchema = z6.object({
  fullName: z6.string().min(1, "Full name is required"),
  phone: bdMobilePhoneSchema,
  email: z6.union([z6.string().trim().email("Enter a valid email address"), z6.literal("")]).optional(),
  address: z6.string().min(1, "Address is required"),
  district: z6.string().min(1, "District is required"),
  notes: z6.string().optional(),
  items: z6.array(
    z6.object({
      productId: z6.string().uuid(),
      productVariantId: z6.string().uuid().optional().nullable(),
      quantity: z6.number().int().positive()
    })
  ).optional(),
  couponId: z6.string().uuid().optional().nullable(),
  discountAmount: z6.number().optional(),
  shippingFee: z6.number().optional(),
  checkoutSessionToken: z6.string().optional(),
  paymentMethod: z6.enum(["COD", "SSLCOMMERZ", "BKASH"]).optional()
});
var updateOrderStatusZodSchema = z6.object({
  status: z6.enum(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"])
});
var updateOrderDiscountZodSchema = z6.object({
  discountAmount: z6.number().min(0, "Discount cannot be negative")
});
var updatePaymentStatusZodSchema = z6.object({
  paymentStatus: z6.enum(["PENDING", "PAID", "FAILED", "REFUNDED"])
});
var assignCourierZodSchema = z6.object({
  provider: z6.enum(["PATHAO", "STEADFAST", "REDX"]),
  // RedX only: the delivery area picked from RedX's area list
  redxAreaId: z6.number().int().positive().optional(),
  redxAreaName: z6.string().trim().min(1).optional()
}).refine((v) => v.provider !== "REDX" || v.redxAreaId && v.redxAreaName, {
  message: "Select the RedX delivery area"
});
var trackOrderZodSchema = z6.object({
  orderNumber: z6.string().min(1, "Order number is required"),
  phone: z6.string().min(1, "Phone number is required")
});
var updateOrderItemZodSchema = z6.object({
  status: z6.enum(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"]).optional(),
  productId: z6.string().min(1).optional(),
  productVariantId: z6.string().nullable().optional(),
  quantity: z6.number().int().positive().optional()
}).refine((data) => Object.keys(data).length > 0, {
  message: "At least one field must be provided"
});

// src/app/module/order/order.route.ts
var router6 = Router6();
router6.post(
  "/",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createOrderZodSchema),
  OrderController.createOrder
);
router6.get(
  "/my-orders",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  OrderController.getMyOrders
);
router6.patch(
  "/items/:id/status",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateOrderStatusZodSchema),
  OrderController.updateOrderItemStatus
);
router6.patch(
  "/items/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateOrderItemZodSchema),
  OrderController.updateOrderItem
);
router6.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  OrderController.getAllOrders
);
router6.get(
  "/redx-areas",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  OrderController.getRedxAreas
);
router6.get(
  "/export",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  OrderController.exportOrders
);
router6.patch(
  "/:id/status",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateOrderStatusZodSchema),
  OrderController.updateOrderStatus
);
router6.patch(
  "/:id/discount",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateOrderDiscountZodSchema),
  OrderController.updateOrderDiscount
);
router6.patch(
  "/:id/payment-status",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updatePaymentStatusZodSchema),
  OrderController.updatePaymentStatus
);
router6.patch(
  "/:id/assign-courier",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(assignCourierZodSchema),
  OrderController.assignCourier
);
router6.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  OrderController.deleteOrder
);
router6.get("/:id/public", OrderController.getPublicOrderById);
router6.post(
  "/track",
  orderTrackRateLimiter,
  validateRequest(trackOrderZodSchema),
  OrderController.trackOrder
);
router6.get(
  "/:id",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  OrderController.getOrderById
);
router6.get(
  "/:id/fraud-check",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  OrderController.checkOrderFraud
);
var OrderRoutes = router6;

// src/app/module/order-return/orderReturn.route.ts
import { Router as Router7 } from "express";

// src/app/module/order-return/orderReturn.controller.ts
import status22 from "http-status";

// src/app/module/order-return/orderReturn.service.ts
import status21 from "http-status";
var processOrderReturn = async (payload, adminId) => {
  const shopId = await ShopService.getDefaultShopId();
  const order = await prisma2.order.findUnique({
    where: { id: payload.orderId },
    include: { items: true }
  });
  if (!order) throw new AppError_default(status21.NOT_FOUND, "Order not found");
  const requestedMap = new Map(payload.items.map((i) => [i.orderItemId, i.quantity]));
  const targetItems = order.items.filter((item) => requestedMap.has(item.id));
  if (targetItems.length !== requestedMap.size) {
    throw new AppError_default(status21.BAD_REQUEST, "One or more order items were not found on this order");
  }
  for (const item of targetItems) {
    const requestedQty = requestedMap.get(item.id);
    const remaining = item.quantity - item.returnedQuantity;
    if (requestedQty > remaining) {
      throw new AppError_default(
        status21.BAD_REQUEST,
        `Return quantity for "${item.id}" exceeds the remaining returnable quantity (${remaining})`
      );
    }
  }
  const orderReturn = await prisma2.$transaction(async (tx) => {
    let refundAmount = 0;
    const returnItemsData = [];
    for (const item of targetItems) {
      const requestedQty = requestedMap.get(item.id);
      const newReturnedQuantity = item.returnedQuantity + requestedQty;
      const remainingQuantity = item.quantity - newReturnedQuantity;
      await tx.orderItem.update({
        where: { id: item.id },
        data: {
          returnedQuantity: newReturnedQuantity
        }
      });
      if (item.productVariantId) {
        await tx.productVariant.update({
          where: { id: item.productVariantId },
          data: { quantity: { increment: requestedQty } }
        });
      }
      await tx.product.update({
        where: { id: item.productId },
        data: { stock: { increment: requestedQty } }
      });
      const subtotal = item.price * requestedQty;
      refundAmount += subtotal;
      returnItemsData.push({
        orderItemId: item.id,
        productId: item.productId,
        productVariantId: item.productVariantId,
        quantity: requestedQty,
        price: item.price,
        subtotal
      });
    }
    const allItems = await tx.orderItem.findMany({ where: { orderId: order.id } });
    const itemsRemainingSubtotal = allItems.reduce(
      (sum, i) => sum + i.price * (i.quantity - i.returnedQuantity),
      0
    );
    const newTotalAmount = Math.max(
      0,
      itemsRemainingSubtotal + order.shippingFee - order.discountAmount
    );
    await tx.order.update({
      where: { id: order.id },
      data: { totalAmount: newTotalAmount }
    });
    return tx.orderReturn.create({
      data: {
        orderId: order.id,
        shopId,
        refundAmount,
        shippingFee: order.shippingFee,
        discountAmount: order.discountAmount,
        newTotalAmount,
        processedByAdminId: adminId,
        items: {
          create: returnItemsData
        }
      },
      include: {
        items: {
          include: { product: true, productVariant: true }
        }
      }
    });
  });
  await NotificationService.notifyOrderReturnProcessed(order, orderReturn.refundAmount);
  return orderReturn;
};
var getAllOrderReturns = async (queryParams) => {
  const orderReturnQuery = new QueryBuilder(prisma2.orderReturn, queryParams, {
    searchableFields: ["order.orderNumber", "order.fullName", "order.phone"]
  }).search().filter().sort().paginate().include({
    order: {
      select: {
        id: true,
        orderNumber: true,
        fullName: true,
        phone: true,
        district: true
      }
    },
    items: {
      include: { product: true, productVariant: true }
    }
  });
  return await orderReturnQuery.execute();
};
var getReturnsByOrderId = async (orderId) => {
  return await prisma2.orderReturn.findMany({
    where: { orderId },
    include: {
      items: {
        include: { product: true, productVariant: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });
};
var OrderReturnService = {
  processOrderReturn,
  getAllOrderReturns,
  getReturnsByOrderId
};

// src/app/module/order-return/orderReturn.controller.ts
var processOrderReturn2 = catchAsync(async (req, res) => {
  const result = await OrderReturnService.processOrderReturn(
    req.body,
    req.user.userId
  );
  sendResponse(res, {
    httpStatusCode: status22.CREATED,
    success: true,
    message: "Return processed and order updated successfully",
    data: result
  });
});
var getAllOrderReturns2 = catchAsync(async (req, res) => {
  const { data, meta } = await OrderReturnService.getAllOrderReturns(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status22.OK,
    success: true,
    message: "Order returns fetched successfully",
    data,
    meta
  });
});
var getReturnsByOrderId2 = catchAsync(async (req, res) => {
  const result = await OrderReturnService.getReturnsByOrderId(
    req.params.orderId
  );
  sendResponse(res, {
    httpStatusCode: status22.OK,
    success: true,
    message: "Order returns fetched successfully",
    data: result
  });
});
var OrderReturnController = {
  processOrderReturn: processOrderReturn2,
  getAllOrderReturns: getAllOrderReturns2,
  getReturnsByOrderId: getReturnsByOrderId2
};

// src/app/module/order-return/orderReturn.validation.ts
import z7 from "zod";
var processOrderReturnZodSchema = z7.object({
  orderId: z7.string().uuid(),
  items: z7.array(
    z7.object({
      orderItemId: z7.string().uuid(),
      quantity: z7.number().int().positive()
    })
  ).min(1, "At least one item must be selected for return")
});

// src/app/module/order-return/orderReturn.route.ts
var router7 = Router7();
router7.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router7.post(
  "/",
  validateRequest(processOrderReturnZodSchema),
  OrderReturnController.processOrderReturn
);
router7.get("/", OrderReturnController.getAllOrderReturns);
router7.get("/order/:orderId", OrderReturnController.getReturnsByOrderId);
var OrderReturnRoutes = router7;

// src/app/module/review/review.route.ts
import { Router as Router8 } from "express";

// src/app/module/review/review.controller.ts
import status24 from "http-status";

// src/app/module/review/review.service.ts
import status23 from "http-status";
var createReview = async (userId, payload) => {
  const hasPurchased = await prisma2.order.findFirst({
    where: {
      userId,
      orderStatus: OrderStatus.DELIVERED,
      items: {
        some: {
          productId: payload.productId
        }
      }
    }
  });
  if (!hasPurchased) {
    throw new AppError_default(
      status23.FORBIDDEN,
      "You can only review products you have purchased and received"
    );
  }
  const existingReview = await prisma2.review.findUnique({
    where: {
      userId_productId: {
        userId,
        productId: payload.productId
      }
    }
  });
  if (existingReview) {
    throw new AppError_default(status23.BAD_REQUEST, "You have already reviewed this product");
  }
  const review = await prisma2.review.create({
    data: {
      userId,
      productId: payload.productId,
      rating: payload.rating,
      comment: payload.comment
    },
    include: {
      user: {
        select: { name: true, image: true }
      }
    }
  });
  return review;
};
var getProductReviews = async (productId) => {
  return await prisma2.review.findMany({
    where: { productId },
    include: {
      user: {
        select: { name: true, image: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });
};
var getMyReviews = async (userId) => {
  return await prisma2.review.findMany({
    where: { userId },
    include: {
      product: {
        select: { name: true, images: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });
};
var deleteReview = async (userId, reviewId, role) => {
  const review = await prisma2.review.findUnique({
    where: { id: reviewId }
  });
  if (!review) {
    throw new AppError_default(status23.NOT_FOUND, "Review not found");
  }
  if (role !== "ADMIN" && role !== "SUPER_ADMIN" && review.userId !== userId) {
    throw new AppError_default(status23.FORBIDDEN, "Access denied");
  }
  await prisma2.review.delete({ where: { id: reviewId } });
  return { message: "Review deleted successfully" };
};
var ReviewService = {
  createReview,
  getProductReviews,
  deleteReview,
  getMyReviews
};

// src/app/module/review/review.controller.ts
var createReview2 = catchAsync(async (req, res) => {
  const result = await ReviewService.createReview(
    req.user.userId,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status24.CREATED,
    success: true,
    message: "Review submitted successfully",
    data: result
  });
});
var getProductReviews2 = catchAsync(async (req, res) => {
  const result = await ReviewService.getProductReviews(
    req.params.productId
  );
  sendResponse(res, {
    httpStatusCode: status24.OK,
    success: true,
    message: "Reviews fetched successfully",
    data: result
  });
});
var getMyReviews2 = catchAsync(async (req, res) => {
  const result = await ReviewService.getMyReviews(req.user.userId);
  sendResponse(res, {
    httpStatusCode: status24.OK,
    success: true,
    message: "Your reviews fetched successfully",
    data: result
  });
});
var deleteReview2 = catchAsync(async (req, res) => {
  const result = await ReviewService.deleteReview(
    req.user.userId,
    req.params.id,
    req.user.role
  );
  sendResponse(res, {
    httpStatusCode: status24.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var ReviewController = {
  createReview: createReview2,
  getProductReviews: getProductReviews2,
  deleteReview: deleteReview2,
  getMyReviews: getMyReviews2
};

// src/app/module/review/review.validation.ts
import z8 from "zod";
var createReviewZodSchema = z8.object({
  productId: z8.string().uuid("Invalid product ID"),
  rating: z8.number().int().min(1).max(5, "Rating must be between 1 and 5"),
  comment: z8.string().min(1, "Comment is required")
});
var updateReviewZodSchema = z8.object({
  rating: z8.number().int().min(1).max(5).optional(),
  comment: z8.string().min(1).optional()
});

// src/app/module/review/review.route.ts
var router8 = Router8();
router8.get("/product/:productId", ReviewController.getProductReviews);
router8.get(
  "/my-reviews",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  ReviewController.getMyReviews
);
router8.post(
  "/",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createReviewZodSchema),
  ReviewController.createReview
);
router8.delete(
  "/:id",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  ReviewController.deleteReview
);
var ReviewRoutes = router8;

// src/app/module/analytics/analytics.route.ts
import { Router as Router9 } from "express";

// src/app/module/analytics/analytics.controller.ts
import status26 from "http-status";

// src/app/module/low-stock/lowStock.service.ts
import status25 from "http-status";
var DEFAULT_THRESHOLD = 5;
var getThreshold = async () => {
  const settings = await prisma2.siteSetting.findUnique({
    where: { id: "default" },
    select: { lowStockThreshold: true }
  });
  return settings?.lowStockThreshold ?? DEFAULT_THRESHOLD;
};
var findLowStockRows = async (threshold, searchTerm) => {
  const term = searchTerm?.trim();
  const contains = (value) => ({
    contains: value,
    mode: "insensitive"
  });
  const notDeleted = { status: { not: ProductStatus.DELETED } };
  const [simpleProducts, variants] = await Promise.all([
    prisma2.product.findMany({
      where: {
        ...notDeleted,
        type: ProductType.SIMPLE,
        stock: { lte: threshold },
        ...term && { OR: [{ name: contains(term) }, { sku: contains(term) }] }
      },
      select: {
        id: true,
        name: true,
        slug: true,
        images: true,
        sku: true,
        stock: true,
        category: { select: { name: true } }
      }
    }),
    prisma2.productVariant.findMany({
      where: {
        quantity: { lte: threshold },
        product: { ...notDeleted, type: ProductType.VARIABLE },
        ...term && {
          OR: [
            { sku: contains(term) },
            { combination: contains(term) },
            { product: { name: contains(term) } }
          ]
        }
      },
      select: {
        id: true,
        combination: true,
        sku: true,
        quantity: true,
        image: true,
        product: {
          select: {
            id: true,
            name: true,
            slug: true,
            images: true,
            sku: true,
            category: { select: { name: true } }
          }
        }
      }
    })
  ]);
  const rows = [
    ...simpleProducts.map((p) => ({
      key: p.id,
      productId: p.id,
      variantId: null,
      name: p.name,
      slug: p.slug,
      image: p.images[0] ?? null,
      sku: p.sku,
      combination: null,
      category: p.category?.name ?? null,
      stock: p.stock
    })),
    ...variants.map((v) => ({
      key: v.id,
      productId: v.product.id,
      variantId: v.id,
      name: v.product.name,
      slug: v.product.slug,
      image: v.image || v.product.images[0] || null,
      sku: v.sku || v.product.sku,
      combination: v.combination,
      category: v.product.category?.name ?? null,
      stock: v.quantity
    }))
  ];
  return rows.sort((a, b) => a.stock - b.stock || a.name.localeCompare(b.name));
};
var getLowStock = async (queryParams) => {
  const threshold = await getThreshold();
  const searchTerm = typeof queryParams.searchTerm === "string" ? queryParams.searchTerm : "";
  const type = queryParams.type === "out" || queryParams.type === "low" ? queryParams.type : "all";
  const page = Math.max(1, Number(queryParams.page) || 1);
  const limit = Math.min(100, Math.max(1, Number(queryParams.limit) || 20));
  const allRows = await findLowStockRows(threshold, searchTerm);
  const outCount = allRows.filter((r) => r.stock <= 0).length;
  const rows = type === "out" ? allRows.filter((r) => r.stock <= 0) : type === "low" ? allRows.filter((r) => r.stock > 0) : allRows;
  return {
    data: {
      rows: rows.slice((page - 1) * limit, page * limit),
      counts: {
        all: allRows.length,
        low: allRows.length - outCount,
        out: outCount
      },
      threshold
    },
    meta: {
      page,
      limit,
      total: rows.length,
      totalPages: Math.max(1, Math.ceil(rows.length / limit))
    }
  };
};
var getLowStockCounts = async () => {
  const threshold = await getThreshold();
  const rows = await findLowStockRows(threshold);
  const out = rows.filter((r) => r.stock <= 0).length;
  return { threshold, low: rows.length - out, out, all: rows.length };
};
var updateStock = async (payload) => {
  const product = await prisma2.product.findUnique({
    where: { id: payload.productId },
    select: { id: true, type: true, status: true }
  });
  if (!product || product.status === ProductStatus.DELETED) {
    throw new AppError_default(status25.NOT_FOUND, "Product not found");
  }
  const reactivate = product.status === ProductStatus.OUT_OF_STOCK && payload.stock > 0 ? { status: ProductStatus.ACTIVE } : {};
  if (payload.variantId) {
    const variant = await prisma2.productVariant.findFirst({
      where: { id: payload.variantId, productId: product.id },
      select: { quantity: true }
    });
    if (!variant) throw new AppError_default(status25.NOT_FOUND, "Variant not found");
    const delta = payload.stock - variant.quantity;
    await prisma2.$transaction([
      prisma2.productVariant.update({
        where: { id: payload.variantId },
        data: { quantity: payload.stock }
      }),
      prisma2.product.update({
        where: { id: product.id },
        data: { stock: { increment: delta }, ...reactivate }
      })
    ]);
  } else {
    if (product.type === ProductType.VARIABLE) {
      throw new AppError_default(
        status25.BAD_REQUEST,
        "Set the stock of a variable product per variant"
      );
    }
    await prisma2.product.update({
      where: { id: product.id },
      data: { stock: payload.stock, ...reactivate }
    });
  }
  return {
    productId: product.id,
    variantId: payload.variantId ?? null,
    stock: payload.stock
  };
};
var LowStockService = {
  getLowStock,
  getLowStockCounts,
  updateStock
};

// src/app/module/analytics/analytics.service.ts
var earning = { orderStatus: { not: OrderStatus.CANCELLED } };
var DHAKA_OFFSET_MS = 6 * 60 * 60 * 1e3;
var dhakaMidnight = (year, month, day) => new Date(Date.UTC(year, month, day) - DHAKA_OFFSET_MS);
var getAdminAnalytics = async () => {
  const dhakaNow = new Date(Date.now() + DHAKA_OFFSET_MS);
  const year = dhakaNow.getUTCFullYear();
  const month = dhakaNow.getUTCMonth();
  const startOfToday = dhakaMidnight(year, month, dhakaNow.getUTCDate());
  const startOfMonth = dhakaMidnight(year, month, 1);
  const [
    totalUsers,
    totalProducts,
    totalOrders,
    orderStats,
    todayStats,
    monthStats,
    statusGroups,
    returnStats,
    returnedUnits,
    stock,
    recentOrders
  ] = await Promise.all([
    prisma2.user.count({ where: { role: Role.USER } }),
    prisma2.product.count({ where: { status: { not: ProductStatus.DELETED } } }),
    prisma2.order.count(),
    prisma2.order.aggregate({ where: earning, _sum: { totalAmount: true } }),
    prisma2.order.aggregate({
      where: { ...earning, createdAt: { gte: startOfToday } },
      _sum: { totalAmount: true },
      _count: true
    }),
    prisma2.order.aggregate({
      where: { ...earning, createdAt: { gte: startOfMonth } },
      _sum: { totalAmount: true },
      _count: true
    }),
    prisma2.order.groupBy({ by: ["orderType", "orderStatus"], _count: true }),
    prisma2.orderReturn.aggregate({ _sum: { refundAmount: true }, _count: true }),
    prisma2.orderReturnItem.aggregate({ _sum: { quantity: true } }),
    LowStockService.getLowStockCounts(),
    prisma2.order.findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      select: {
        id: true,
        orderNumber: true,
        orderType: true,
        fullName: true,
        phone: true,
        totalAmount: true,
        orderStatus: true,
        paymentStatus: true,
        createdAt: true
      }
    })
  ]);
  const countStatuses = (type) => Object.fromEntries(
    Object.values(OrderStatus).map((s) => [
      s,
      statusGroups.find((g) => g.orderType === type && g.orderStatus === s)?._count ?? 0
    ])
  );
  const orderStatus = {
    online: countStatuses(OrderType.ONLINE),
    landingPage: countStatuses(OrderType.LANDING_PAGE)
  };
  const revenueTrend = await Promise.all(
    Array.from({ length: 6 }, async (_, i) => {
      const start = dhakaMidnight(year, month - 5 + i, 1);
      const end = dhakaMidnight(year, month - 4 + i, 1);
      const stats = await prisma2.order.aggregate({
        where: { ...earning, createdAt: { gte: start, lt: end } },
        _sum: { totalAmount: true },
        _count: true
      });
      const label = new Date(Date.UTC(year, month - 5 + i, 1));
      return {
        month: label.toLocaleString("en-US", { month: "short", timeZone: "UTC" }),
        year: label.getUTCFullYear(),
        revenue: stats._sum.totalAmount || 0,
        orders: stats._count
      };
    })
  );
  const categoryDistribution = await prisma2.category.findMany({
    select: {
      name: true,
      _count: {
        select: {
          products: true
        }
      }
    }
  });
  return {
    summary: {
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue: orderStats._sum.totalAmount || 0
    },
    today: {
      orders: todayStats._count,
      revenue: todayStats._sum.totalAmount || 0
    },
    thisMonth: {
      orders: monthStats._count,
      revenue: monthStats._sum.totalAmount || 0
    },
    orderStatus,
    returns: {
      count: returnStats._count,
      units: returnedUnits._sum.quantity || 0,
      refundAmount: returnStats._sum.refundAmount || 0
    },
    stock,
    recentOrders,
    revenueTrend,
    categoryDistribution
  };
};
var getUserAnalytics = async (userId) => {
  const [totalOrders, orderStats, recentOrders] = await Promise.all([
    prisma2.order.count({ where: { userId } }),
    prisma2.order.aggregate({
      where: { userId },
      _sum: {
        totalAmount: true
      }
    }),
    prisma2.order.findMany({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              select: {
                name: true,
                images: true
              }
            }
          }
        }
      },
      orderBy: { createdAt: "desc" },
      take: 5
    })
  ]);
  return {
    summary: {
      totalOrders,
      totalSpending: orderStats._sum.totalAmount || 0
    },
    recentOrders
  };
};
var AnalyticsService = {
  getAdminAnalytics,
  getUserAnalytics
};

// src/app/module/analytics/analytics.controller.ts
var getAdminAnalytics2 = catchAsync(async (req, res) => {
  const result = await AnalyticsService.getAdminAnalytics();
  sendResponse(res, {
    httpStatusCode: status26.OK,
    success: true,
    message: "Admin analytics fetched successfully",
    data: result
  });
});
var getUserAnalytics2 = catchAsync(async (req, res) => {
  const result = await AnalyticsService.getUserAnalytics(
    req.user.userId
  );
  sendResponse(res, {
    httpStatusCode: status26.OK,
    success: true,
    message: "User analytics fetched successfully",
    data: result
  });
});
var AnalyticsController = {
  getAdminAnalytics: getAdminAnalytics2,
  getUserAnalytics: getUserAnalytics2
};

// src/app/module/analytics/analytics.route.ts
var router9 = Router9();
router9.get(
  "/admin",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AnalyticsController.getAdminAnalytics
);
router9.get(
  "/user",
  checkAuth(Role.USER),
  AnalyticsController.getUserAnalytics
);
var AnalyticsRoutes = router9;

// src/app/module/rag/rag.route.ts
import { Router as Router10 } from "express";

// src/app/module/rag/rag.controller.ts
import status28 from "http-status";

// src/app/module/rag/llm.service.ts
import status27 from "http-status";
var extractJson = (text, isValid = () => true) => {
  if (!text) return null;
  const cleaned = text.replace(/```(?:json)?/gi, "").trim();
  try {
    const whole = JSON.parse(cleaned);
    if (isValid(whole)) return whole;
  } catch {
  }
  for (let start = 0; start < cleaned.length; start++) {
    const open = cleaned[start];
    if (open !== "{" && open !== "[") continue;
    const close = open === "{" ? "}" : "]";
    let depth = 0;
    let inString = false;
    let escaped = false;
    for (let i = start; i < cleaned.length; i++) {
      const ch = cleaned[i];
      if (inString) {
        if (escaped) escaped = false;
        else if (ch === "\\") escaped = true;
        else if (ch === '"') inString = false;
        continue;
      }
      if (ch === '"') inString = true;
      else if (ch === open) depth++;
      else if (ch === close && --depth === 0) {
        try {
          const value = JSON.parse(cleaned.slice(start, i + 1));
          if (isValid(value)) return value;
        } catch {
        }
        break;
      }
    }
  }
  return null;
};
var LLMService = class {
  apiKey;
  apiUrl = "https://openrouter.ai/api/v1";
  model;
  fallbackModels;
  constructor() {
    this.apiKey = envVars.RAG.OPENROUTER_API_KEY || "";
    this.model = envVars.RAG.OPENROUTER_LLM_MODEL || "google/gemini-2.0-flash-001";
    this.fallbackModels = (envVars.RAG.OPENROUTER_LLM_FALLBACK_MODELS ?? []).filter((m) => m !== this.model).slice(0, 2);
    if (!this.apiKey) {
      throw new Error("OpenRouter API key is missing...");
    }
  }
  async generateResponse(prompt, context = [], asJson = false, systemOverride) {
    try {
      let fullPrompt = context.length > 0 ? `Context information:
${context.join("\n\n")}

Question: ${prompt}

Answer based on the context above.` : prompt;
      if (asJson) {
        fullPrompt += `

Return ONLY a valid JSON object. Do not include any markdown formatting like \`\`\`json.`;
      }
      const systemMessage = systemOverride ? systemOverride : asJson ? "You are a helpful assistant for AB Trims, an e-commerce platform. Answer questions based on the provided context. You MUST respond with ONLY valid JSON format. Do not include markdown tags." : "You are a helpful assistant for AB Trims, an e-commerce platform. Answer questions based on the provided context. If the context does not contain the answer, say you don't have enough information.";
      const bodyPayload = {
        model: this.model,
        // OpenRouter moves on to these when the main model errors or is busy
        ...this.fallbackModels.length > 0 && {
          models: [this.model, ...this.fallbackModels]
        },
        messages: [
          {
            role: "system",
            content: systemMessage
          },
          {
            role: "user",
            content: fullPrompt
          }
        ],
        temperature: 0.1,
        max_tokens: asJson ? 4e3 : 1500,
        // Reasoning models: think briefly and keep the thinking out of the
        // reply, so it doesn't leak in front of the JSON. Others ignore this.
        reasoning: { effort: "low", exclude: true }
      };
      const send = () => fetch(`${this.apiUrl}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://abtrims.com",
          "X-Title": "AB Trims RAG System"
        },
        body: JSON.stringify(bodyPayload)
      });
      const RETRY_WAITS_MS = [2e3, 4e3];
      for (let attempt = 0; ; attempt++) {
        const response = await send();
        const data = await response.json().catch(() => ({}));
        const apiError = !response.ok || data?.error ? data?.error : null;
        if (response.ok && !apiError) {
          return data.choices?.[0]?.message?.content ?? "";
        }
        const code = Number(apiError?.code ?? response.status);
        const retryable = code === 429 || code === 408 || code >= 500;
        if (!retryable || attempt >= RETRY_WAITS_MS.length) {
          throw new Error(
            `OpenRouter API error: ${code} - ${apiError?.message || "unknown error"}`
          );
        }
        const retryAfter = Number(response.headers.get("retry-after"));
        const wait = Number.isFinite(retryAfter) && retryAfter > 0 ? Math.min(retryAfter * 1e3, 8e3) : RETRY_WAITS_MS[attempt];
        console.warn(
          `OpenRouter busy (${code} ${apiError?.message ?? ""}); retrying in ${wait}ms`
        );
        await new Promise((r) => setTimeout(r, wait));
      }
    } catch (error) {
      console.error("Error generating LLM response:", error);
      throw error;
    }
  }
  /**
   * Ask for JSON and return it parsed. Retries once when the reply has no
   * usable JSON, then fails with a readable error instead of a raw
   * "Unexpected token" SyntaxError.
   */
  async generateJson(prompt, isValid = () => true, attempts = 2) {
    for (let attempt = 1; attempt <= attempts; attempt++) {
      const reply = await this.generateResponse(prompt, [], true);
      const parsed = extractJson(reply, isValid);
      if (parsed !== null) return parsed;
      console.warn(
        `LLM reply had no valid JSON (attempt ${attempt}/${attempts}):`,
        String(reply).slice(0, 300)
      );
    }
    throw new AppError_default(
      status27.BAD_GATEWAY,
      "The AI returned an unexpected response. Please try again."
    );
  }
};

// src/app/module/rag/rag.service.ts
var SHOP_ASSISTANT_PROMPT = [
  "You are the friendly shopping assistant of AB Trims, an online store in Bangladesh.",
  "Answer only from the store information in the context. Never invent products, prices or policies.",
  "Reply in the customer's language: Bangla if they write in Bangla (or Banglish), otherwise English.",
  "Prices are in Bangladeshi Taka (\u09F3).",
  "When suggesting products, list each with its name, price and its link exactly as given (e.g. /products/...).",
  "Keep answers short and clear. Use plain text only: no markdown, no ** or #.",
  "If the context does not have the answer, say so politely and suggest contacting the store by phone or WhatsApp, giving the number if it is in the context."
].join(" ");
var RAGService = class {
  embeddingService;
  llmService;
  indexingService;
  constructor() {
    this.embeddingService = new EmbeddingService();
    this.indexingService = new IndexingService();
    this.llmService = new LLMService();
  }
  async ingestData() {
    return this.indexingService.indexABTrimsData();
  }
  async retrieveRelevantDocuments(query, limit = 5, sourceType) {
    let queryEmbedding;
    try {
      queryEmbedding = await this.embeddingService.generateEmbedding(query, 3);
    } catch (error) {
      console.warn("RAG: embedding failed, using keyword search:", error.message);
      return this.keywordSearch(query, limit, sourceType);
    }
    try {
      const vectorLiteral = `[${queryEmbedding.join(",")}]`;
      const results = await prisma2.$queryRaw(prismaNamespace_exports.sql`
          SELECT id, "chunkKey", "sourceType", "sourceId", "sourceLabel", content, metadata, 1 - (embedding <=> CAST(${vectorLiteral} AS vector(2048))) as similarity
          FROM "document_embeddings"
          WHERE "isDeleted" = false
          ${sourceType ? prismaNamespace_exports.sql`AND "sourceType" = ${sourceType}` : prismaNamespace_exports.empty}
          ORDER BY embedding <=> CAST(${vectorLiteral} AS vector(2048))
          Limit ${limit}
          `);
      return results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async keywordSearch(query, limit, sourceType) {
    const words = query.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter((w) => w.length > 2).slice(0, 8);
    if (words.length === 0) return [];
    const matches = prismaNamespace_exports.join(
      words.map((w) => prismaNamespace_exports.sql`(CASE WHEN content ILIKE ${"%" + w + "%"} THEN 1 ELSE 0 END)`),
      " + "
    );
    return prisma2.$queryRaw(prismaNamespace_exports.sql`
      SELECT id, "chunkKey", "sourceType", "sourceId", "sourceLabel", content, metadata, 0 as similarity
      FROM "document_embeddings"
      WHERE "isDeleted" = false
      ${sourceType ? prismaNamespace_exports.sql`AND "sourceType" = ${sourceType}` : prismaNamespace_exports.empty}
      ORDER BY (${matches}) DESC, "updatedAt" DESC
      LIMIT ${limit}
    `);
  }
  async generateAnswer(query, limit = 5, sourceType, asJson = false) {
    try {
      const relevantDocs = await this.retrieveRelevantDocuments(
        query,
        limit,
        sourceType
      );
      const storeInfo = await prisma2.$queryRaw(prismaNamespace_exports.sql`
        SELECT content FROM "document_embeddings"
        WHERE "chunkKey" = 'store-info' AND "isDeleted" = false
      `);
      const context = [
        ...storeInfo.map((d) => d.content),
        ...relevantDocs.filter((doc) => doc.content && doc.chunkKey !== "store-info").map((doc) => doc.content)
      ];
      let answer;
      try {
        const ask = () => this.llmService.generateResponse(
          query,
          context,
          asJson,
          asJson ? void 0 : SHOP_ASSISTANT_PROMPT
        );
        answer = await ask();
        if (!asJson && !String(answer ?? "").trim()) answer = await ask();
        if (!asJson && !String(answer ?? "").trim()) {
          throw new Error("Empty answer from the AI model");
        }
      } catch (error) {
        if (asJson) throw error;
        console.warn("RAG: answer generation failed:", error.message);
        const phone = /Phone: (.+)/.exec(storeInfo[0]?.content ?? "")?.[1];
        const whatsapp = /WhatsApp: (.+)/.exec(storeInfo[0]?.content ?? "")?.[1];
        const contact = [phone && `call ${phone}`, whatsapp && `WhatsApp ${whatsapp}`].filter(Boolean).join(" or ");
        answer = `Sorry, I'm getting a lot of questions right now. Please ask again in a minute${contact ? `, or ${contact}` : ""}.`;
      }
      if (asJson && typeof answer === "string") {
        answer = answer.replace(/```json\n?/, "").replace(/```$/, "").trim();
        try {
          answer = JSON.parse(answer);
        } catch (e) {
          console.error("JSON Parse failed, returning raw string");
        }
      }
      return {
        answer,
        sources: relevantDocs.map((doc) => ({
          id: doc.id,
          sourceType: doc.sourceType,
          sourceLabel: doc.sourceLabel,
          similarity: doc.similarity
        })),
        contextUsed: context.length > 0
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getStats() {
    const totalDocuments = await prisma2.$queryRaw(prismaNamespace_exports.sql`
        SELECT COUNT(*) as count FROM "document_embeddings" WHERE "isDeleted" = false;
    `);
    return {
      totalActiveDocuments: Number(totalDocuments[0]?.count ?? 0),
      timestamp: /* @__PURE__ */ new Date()
    };
  }
};

// src/app/module/rag/rag.controller.ts
var ragService = new RAGService();
var getStats = catchAsync(async (req, res) => {
  const result = await ragService.getStats();
  sendResponse(res, {
    success: true,
    httpStatusCode: status28.OK,
    message: "RAG stats retrieved successfully",
    data: result
  });
});
var ingestData = catchAsync(async (req, res) => {
  const result = await ragService.ingestData();
  sendResponse(res, {
    success: true,
    httpStatusCode: status28.OK,
    message: "Data ingestion completed",
    data: result
  });
});
var queryRag = catchAsync(async (req, res) => {
  const { query, limit, sourceType } = req.body;
  if (!query) {
    throw new Error("Query is required");
  }
  const result = await ragService.generateAnswer(
    query,
    limit ?? 6,
    sourceType,
    false
  );
  sendResponse(res, {
    success: true,
    httpStatusCode: status28.OK,
    message: "Answer generated successfully",
    data: result
  });
});
var RagController = {
  getStats,
  ingestData,
  queryRag
};

// src/app/module/rag/rag.route.ts
var router10 = Router10();
router10.get("/stats", RagController.getStats);
router10.post(
  "/ingest",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  RagController.ingestData
);
router10.post("/query", RagController.queryRag);
var RagRoutes = router10;

// src/app/module/admin/admin.route.ts
import { Router as Router11 } from "express";

// src/app/module/admin/admin.controller.ts
import status30 from "http-status";

// src/app/module/admin/admin.service.ts
import status29 from "http-status";
var getAllAdmins = async () => {
  const admins = await prisma2.admin.findMany({
    include: {
      user: true
    }
  });
  return admins;
};
var getAllUsers = async () => {
  const users = await prisma2.user.findMany({
    where: {
      isDeleted: false
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return users;
};
var getAdminById = async (id) => {
  const admin2 = await prisma2.admin.findUnique({
    where: {
      id
    },
    include: {
      user: true
    }
  });
  return admin2;
};
var updateAdmin = async (id, payload) => {
  const isAdminExist = await prisma2.admin.findUnique({
    where: {
      id
    }
  });
  if (!isAdminExist) {
    throw new AppError_default(status29.NOT_FOUND, "Admin Or Super Admin not found");
  }
  const { admin: admin2 } = payload;
  const updatedAdmin = await prisma2.admin.update({
    where: {
      id
    },
    data: {
      ...admin2
    }
  });
  return updatedAdmin;
};
var deleteAdmin = async (id, user) => {
  const isAdminExist = await prisma2.admin.findUnique({
    where: {
      id
    }
  });
  if (!isAdminExist) {
    throw new AppError_default(status29.NOT_FOUND, "Admin Or Super Admin not found");
  }
  if (isAdminExist.id === user.userId) {
    throw new AppError_default(status29.BAD_REQUEST, "You cannot delete yourself");
  }
  const result = await prisma2.$transaction(async (tx) => {
    await tx.admin.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: /* @__PURE__ */ new Date()
      }
    });
    await tx.user.update({
      where: { id: isAdminExist.userId },
      data: {
        isDeleted: true,
        deletedAt: /* @__PURE__ */ new Date(),
        status: UserStatus.DELETED
      }
    });
    await tx.session.deleteMany({
      where: { userId: isAdminExist.userId }
    });
    await tx.account.deleteMany({
      where: { userId: isAdminExist.userId }
    });
    const admin2 = await getAdminById(id);
    return admin2;
  });
  return result;
};
var deleteUser = async (id, adminUser) => {
  const userToDelete = await prisma2.user.findUnique({
    where: { id }
  });
  if (!userToDelete) {
    throw new AppError_default(status29.NOT_FOUND, "User not found");
  }
  if (userToDelete.id === adminUser.userId) {
    throw new AppError_default(status29.BAD_REQUEST, "You cannot delete yourself");
  }
  const requester = await prisma2.user.findUnique({
    where: { id: adminUser.userId }
  });
  if (requester?.role === Role.ADMIN && (userToDelete.role === Role.ADMIN || userToDelete.role === Role.SUPER_ADMIN)) {
    throw new AppError_default(
      status29.FORBIDDEN,
      "Admin cannot delete another Admin or Super Admin"
    );
  }
  const result = await prisma2.$transaction(async (tx) => {
    const deletedUser = await tx.user.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: /* @__PURE__ */ new Date(),
        status: UserStatus.DELETED
      }
    });
    await tx.session.deleteMany({ where: { userId: id } });
    await tx.account.deleteMany({ where: { userId: id } });
    return deletedUser;
  });
  return result;
};
var changeUserStatus = async (user, payload) => {
  const isAdminExists = await prisma2.admin.findUniqueOrThrow({
    where: {
      email: user.email
    },
    include: {
      user: true
    }
  });
  const { userId, userStatus } = payload;
  const userToChangeStatus = await prisma2.user.findUniqueOrThrow({
    where: {
      id: userId
    }
  });
  const selfStatusChange = isAdminExists.userId === userId;
  if (selfStatusChange) {
    throw new AppError_default(status29.BAD_REQUEST, "You cannot change your own status");
  }
  if (isAdminExists.user.role === Role.ADMIN && userToChangeStatus.role === Role.SUPER_ADMIN) {
    throw new AppError_default(
      status29.BAD_REQUEST,
      "You cannot change the status of super admin. Only super admin can change the status of another super admin"
    );
  }
  if (isAdminExists.user.role === Role.ADMIN && userToChangeStatus.role === Role.ADMIN) {
    throw new AppError_default(
      status29.BAD_REQUEST,
      "You cannot change the status of another admin. Only super admin can change the status of another admin"
    );
  }
  if (userStatus === UserStatus.DELETED) {
    throw new AppError_default(
      status29.BAD_REQUEST,
      "You cannot set user status to deleted."
    );
  }
  const updatedUser = await prisma2.user.update({
    where: {
      id: userId
    },
    data: {
      status: userStatus
    }
  });
  return updatedUser;
};
var changeUserRole = async (user, payload) => {
  const actingAdmin = await prisma2.admin.findUniqueOrThrow({
    where: { email: user.email },
    include: { user: true }
  });
  if (actingAdmin.user.role !== Role.SUPER_ADMIN) {
    throw new AppError_default(
      status29.FORBIDDEN,
      "Only Super Admin can change user roles"
    );
  }
  const { userId, role } = payload;
  const userToChangeRole = await prisma2.user.findUniqueOrThrow({
    where: { id: userId },
    include: { admin: true }
  });
  const selfRoleChange = actingAdmin.userId === userId;
  if (selfRoleChange) {
    throw new AppError_default(status29.BAD_REQUEST, "You cannot change your own role");
  }
  const result = await prisma2.$transaction(async (tx) => {
    const updatedUser = await tx.user.update({
      where: { id: userId },
      data: { role }
    });
    if (role === Role.ADMIN || role === Role.SUPER_ADMIN) {
      if (!userToChangeRole.admin) {
        await tx.admin.create({
          data: {
            userId: userToChangeRole.id,
            name: userToChangeRole.name,
            email: userToChangeRole.email,
            profilePhoto: userToChangeRole.image
          }
        });
      }
    } else if (role === Role.USER) {
      if (userToChangeRole.admin) {
        await tx.admin.delete({
          where: { userId: userToChangeRole.id }
        });
      }
    }
    return updatedUser;
  });
  return result;
};
var getStats2 = async () => {
  const [adminCount, superAdminCount, userCount] = await Promise.all([
    prisma2.user.count({ where: { role: Role.ADMIN, isDeleted: false } }),
    prisma2.user.count({ where: { role: Role.SUPER_ADMIN, isDeleted: false } }),
    prisma2.user.count({ where: { role: Role.USER, isDeleted: false } })
  ]);
  return {
    adminCount,
    superAdminCount,
    userCount
  };
};
var AdminService = {
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  changeUserStatus,
  changeUserRole,
  getAllUsers,
  deleteUser,
  getStats: getStats2
};

// src/app/module/admin/admin.controller.ts
var getAllAdmins2 = catchAsync(async (req, res) => {
  const result = await AdminService.getAllAdmins();
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "Admins fetched successfully",
    data: result
  });
});
var getAllUsers2 = catchAsync(async (req, res) => {
  const result = await AdminService.getAllUsers();
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "Users fetched successfully",
    data: result
  });
});
var getAdminById2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const admin2 = await AdminService.getAdminById(id);
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "Admin fetched successfully",
    data: admin2
  });
});
var updateAdmin2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const updatedAdmin = await AdminService.updateAdmin(id, payload);
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "Admin updated successfully",
    data: updatedAdmin
  });
});
var deleteAdmin2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const result = await AdminService.deleteAdmin(id, user);
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "Admin deleted successfully",
    data: result
  });
});
var deleteUser2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const adminUser = req.user;
  const result = await AdminService.deleteUser(id, adminUser);
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "User deleted successfully",
    data: result
  });
});
var changeUserStatus2 = catchAsync(async (req, res) => {
  const user = req.user;
  const payload = req.body;
  const result = await AdminService.changeUserStatus(user, payload);
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "User status changed successfully",
    data: result
  });
});
var changeUserRole2 = catchAsync(async (req, res) => {
  const user = req.user;
  const payload = req.body;
  const result = await AdminService.changeUserRole(user, payload);
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "User role changed successfully",
    data: result
  });
});
var getStats3 = catchAsync(async (req, res) => {
  const result = await AdminService.getStats();
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "Admin stats fetched successfully",
    data: result
  });
});
var AdminController = {
  getAllAdmins: getAllAdmins2,
  updateAdmin: updateAdmin2,
  deleteAdmin: deleteAdmin2,
  getAdminById: getAdminById2,
  changeUserStatus: changeUserStatus2,
  changeUserRole: changeUserRole2,
  getAllUsers: getAllUsers2,
  deleteUser: deleteUser2,
  getStats: getStats3
};

// src/app/module/admin/admin.validation.ts
import z9 from "zod";
var updateAdminZodSchema = z9.object({
  admin: z9.object({
    name: z9.string("Name must be a string").optional(),
    profilePhoto: z9.url("Profile photo must be a valid URL").optional(),
    contactNumber: z9.string("Contact number must be a string").min(11, "Contact number must be at least 11 characters").max(14, "Contact number must be at most 15 characters").optional()
  }).optional()
});

// src/app/module/admin/admin.route.ts
var router11 = Router11();
router11.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AdminController.getAllAdmins
);
router11.get(
  "/stats",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AdminController.getStats
);
router11.get(
  "/users/all",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AdminController.getAllUsers
);
router11.patch(
  "/change-user-status",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  AdminController.changeUserStatus
);
router11.patch(
  "/change-user-role",
  checkAuth(Role.SUPER_ADMIN),
  AdminController.changeUserRole
);
router11.get(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AdminController.getAdminById
);
router11.patch(
  "/:id",
  checkAuth(Role.SUPER_ADMIN),
  validateRequest(updateAdminZodSchema),
  AdminController.updateAdmin
);
router11.delete("/:id", checkAuth(Role.SUPER_ADMIN), AdminController.deleteAdmin);
router11.delete(
  "/users/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  AdminController.deleteUser
);
var AdminRoutes = router11;

// src/app/module/ai/ai.route.ts
import express from "express";

// src/app/module/ai/ai.controller.ts
import status32 from "http-status";

// src/app/module/ai/ai.service.ts
import status31 from "http-status";
var escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var toBulletList = (value) => {
  if (typeof value === "string" && /<li[\s>]/i.test(value)) return value.trim();
  const points = (Array.isArray(value) ? value.map(String) : String(value ?? "").split(/\n+|(?<=[.!?])\s+/)).map((p) => p.replace(/<[^>]*>/g, "").replace(/^[\s•*\-–]+/, "").trim()).filter(Boolean);
  if (points.length === 0) return "";
  return `<ul>${points.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>`;
};
var generateProductData = async (title) => {
  const llmService = new LLMService();
  const prompt = `You are an expert e-commerce copywriter. Based on the product title '${title}', generate a detailed and engaging product description and SEO tags.
  
  Return the response as a JSON object with the following fields:
  1. 'description': A detailed HTML formatted description (using <p>, <ul>, <li>, <strong> tags) including features and benefits.
  2. 'shortDescription': 4 to 5 short key points about the product, as an HTML bullet list: <ul><li>point</li>...</ul>. Each point one short line (max ~10 words), e.g. a key feature or benefit.
  3. 'tags': An array of 5 SEO-friendly search keywords.
  
  Return ONLY the JSON object. Do not include markdown code blocks.`;
  const data = await llmService.generateJson(
    prompt,
    (v) => v && typeof v === "object" && typeof v.description === "string" && (typeof v.shortDescription === "string" || Array.isArray(v.shortDescription))
  );
  return {
    description: data.description,
    shortDescription: toBulletList(data.shortDescription),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : []
  };
};
var getRecommendations = async (productId) => {
  const currentProduct = await prisma2.product.findUnique({
    where: { id: productId },
    include: { category: true }
  });
  if (!currentProduct) {
    throw new AppError_default(status31.NOT_FOUND, "Product not found");
  }
  const candidateProducts = await prisma2.product.findMany({
    where: {
      categoryId: currentProduct.categoryId,
      id: { not: productId },
      stock: { gt: 0 }
    },
    take: 20,
    select: {
      id: true,
      name: true,
      shortDescription: true,
      sellPrice: true,
      images: true,
      tags: true
    }
  });
  if (candidateProducts.length === 0) {
    return [];
  }
  const llmService = new LLMService();
  const candidateList = candidateProducts.map(
    (p, i) => `${i + 1}. ID: ${p.id} | Name: ${p.name} | Tags: ${p.tags?.join(", ")}`
  ).join("\n");
  const prompt = `You are an AI recommendation engine for an e-commerce platform.

A customer is viewing this product:
- Name: "${currentProduct.name}"
- Category: "${currentProduct.category?.name}"
- Tags: "${currentProduct.tags?.join(", ")}"

From the following candidate products in the same category, select the TOP 4 most relevant recommendations.
Prioritize similarity in use-case, tags, and complementary items.

Candidates:
${candidateList}

Return ONLY a JSON array of exactly 4 product IDs (strings), like this:
["id1", "id2", "id3", "id4"]

Return ONLY the JSON array. No explanation, no markdown.`;
  const recommendedIds = await llmService.generateJson(
    prompt,
    (v) => Array.isArray(v) && v.every((id) => typeof id === "string")
  );
  const recommendations = await prisma2.product.findMany({
    where: { id: { in: recommendedIds } },
    select: {
      id: true,
      name: true,
      shortDescription: true,
      sellPrice: true,
      regularPrice: true,
      images: true,
      category: { select: { name: true } }
    }
  });
  return recommendedIds.map((id) => recommendations.find((p) => p.id === id)).filter(Boolean);
};
var analyzeBusiness = async () => {
  const [orderStats, categorySales, topProducts, summary] = await Promise.all(
    [
      // Revenue Summary
      prisma2.order.aggregate({
        _sum: { totalAmount: true },
        _count: { id: true }
      }),
      // Sales by Category
      prisma2.category.findMany({
        include: {
          products: {
            select: {
              orderItems: {
                select: {
                  price: true,
                  quantity: true
                }
              }
            }
          }
        }
      }),
      // Top 5 Products by Quantity
      prisma2.orderItem.groupBy({
        by: ["productId"],
        _sum: { quantity: true },
        orderBy: { _sum: { quantity: "desc" } },
        take: 5
      }),
      // Total counts
      prisma2.user.count({ where: { role: Role.USER } })
    ]
  );
  const processedCategorySales = categorySales.map((cat) => ({
    name: cat.name,
    totalRevenue: cat.products.reduce(
      (acc, p) => acc + p.orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      0
    )
  })).sort((a, b) => b.totalRevenue - a.totalRevenue);
  const topProductDetails = await prisma2.product.findMany({
    where: { id: { in: topProducts.map((p) => p.productId) } },
    select: { name: true }
  });
  const llmService = new LLMService();
  const context = {
    totalRevenue: orderStats._sum.totalAmount || 0,
    totalOrders: orderStats._count.id,
    totalCustomers: summary,
    categoryPerformance: processedCategorySales,
    topSellingProducts: topProductDetails.map((p) => p.name)
  };
  const prompt = `You are a Business Analyst. Analyze this data:
  ${JSON.stringify(context, null, 2)}
  
  Return ONLY a JSON object: {"analysis": "HTML_STRING"}
  The HTML_STRING must use <h3>, <p>, <ul>, <li> tags for structure.
  Do not include any other text or markdown code blocks.`;
  const { analysis } = await llmService.generateJson(
    prompt,
    (v) => v && typeof v.analysis === "string"
  );
  const finalHTML = analysis;
  return {
    insights: finalHTML,
    generatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
};
var AIService = {
  generateProductData,
  getRecommendations,
  analyzeBusiness
};

// src/app/module/ai/ai.controller.ts
var generateProductData2 = catchAsync(async (req, res) => {
  const { title } = req.body;
  const result = await AIService.generateProductData(title);
  sendResponse(res, {
    httpStatusCode: status32.OK,
    success: true,
    message: "Product data generated successfully",
    data: result
  });
});
var getRecommendations2 = catchAsync(async (req, res) => {
  const { productId } = req.body;
  const result = await AIService.getRecommendations(productId);
  sendResponse(res, {
    httpStatusCode: status32.OK,
    success: true,
    message: "Recommendations fetched successfully",
    data: result
  });
});
var analyzeBusiness2 = catchAsync(async (req, res) => {
  const result = await AIService.analyzeBusiness();
  sendResponse(res, {
    httpStatusCode: status32.OK,
    success: true,
    message: "Business insights generated successfully",
    data: result
  });
});
var AIController = {
  generateProductData: generateProductData2,
  getRecommendations: getRecommendations2,
  analyzeBusiness: analyzeBusiness2
};

// src/app/module/ai/ai.route.ts
var router12 = express.Router();
router12.post(
  "/generate-product-data",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AIController.generateProductData
);
router12.post("/recommendations", AIController.getRecommendations);
router12.post(
  "/analyze-business",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AIController.analyzeBusiness
);
var AIRoutes = router12;

// src/app/module/attribute/attribute.route.ts
import { Router as Router12 } from "express";

// src/app/module/attribute/attribute.controller.ts
import status34 from "http-status";

// src/app/module/attribute/attribute.service.ts
import status33 from "http-status";
var createAttribute = async (payload) => {
  const existing = await prisma2.attribute.findFirst({
    where: { name: payload.name }
  });
  if (existing) {
    throw new AppError_default(
      status33.BAD_REQUEST,
      "Attribute with this name already exists"
    );
  }
  const attribute = await prisma2.attribute.create({
    data: { name: payload.name },
    include: { values: true }
  });
  return attribute;
};
var getAllAttributes = async () => {
  return await prisma2.attribute.findMany({
    include: { values: true },
    orderBy: { createdAt: "desc" }
  });
};
var getAttributeById = async (id) => {
  const attribute = await prisma2.attribute.findUnique({
    where: { id },
    include: { values: true }
  });
  if (!attribute) {
    throw new AppError_default(status33.NOT_FOUND, "Attribute not found");
  }
  return attribute;
};
var updateAttribute = async (id, payload) => {
  const attribute = await prisma2.attribute.findUnique({ where: { id } });
  if (!attribute) {
    throw new AppError_default(status33.NOT_FOUND, "Attribute not found");
  }
  const existing = await prisma2.attribute.findFirst({
    where: {
      name: payload.name,
      NOT: { id }
    }
  });
  if (existing) {
    throw new AppError_default(
      status33.BAD_REQUEST,
      "Attribute with this name already exists"
    );
  }
  const updated = await prisma2.attribute.update({
    where: { id },
    data: { name: payload.name },
    include: { values: true }
  });
  return updated;
};
var deleteAttribute = async (id) => {
  const attribute = await prisma2.attribute.findUnique({ where: { id } });
  if (!attribute) {
    throw new AppError_default(status33.NOT_FOUND, "Attribute not found");
  }
  await prisma2.attribute.delete({ where: { id } });
  return { message: "Attribute deleted successfully" };
};
var addAttributeValue = async (attributeId, payload) => {
  const attribute = await prisma2.attribute.findUnique({
    where: { id: attributeId }
  });
  if (!attribute) {
    throw new AppError_default(status33.NOT_FOUND, "Attribute not found");
  }
  const existing = await prisma2.attributeValue.findUnique({
    where: {
      value_attributeId: {
        value: payload.value,
        attributeId
      }
    }
  });
  if (existing) {
    throw new AppError_default(
      status33.BAD_REQUEST,
      "Value already exists for this attribute"
    );
  }
  const attributeValue = await prisma2.attributeValue.create({
    data: {
      value: payload.value,
      attributeId
    }
  });
  return attributeValue;
};
var deleteAttributeValue = async (valueId) => {
  const value = await prisma2.attributeValue.findUnique({
    where: { id: valueId }
  });
  if (!value) {
    throw new AppError_default(status33.NOT_FOUND, "Attribute value not found");
  }
  await prisma2.attributeValue.delete({ where: { id: valueId } });
  return { message: "Attribute value deleted successfully" };
};
var updateAttributeValue = async (valueId, payload) => {
  const value = await prisma2.attributeValue.findUnique({
    where: { id: valueId }
  });
  if (!value) {
    throw new AppError_default(status33.NOT_FOUND, "Attribute value not found");
  }
  const existing = await prisma2.attributeValue.findFirst({
    where: {
      value: payload.value,
      attributeId: value.attributeId,
      NOT: { id: valueId }
    }
  });
  if (existing) {
    throw new AppError_default(
      status33.BAD_REQUEST,
      "Value already exists for this attribute"
    );
  }
  const updatedValue = await prisma2.attributeValue.update({
    where: { id: valueId },
    data: { value: payload.value }
  });
  return updatedValue;
};
var AttributeService = {
  createAttribute,
  getAllAttributes,
  getAttributeById,
  updateAttribute,
  deleteAttribute,
  addAttributeValue,
  deleteAttributeValue,
  updateAttributeValue
};

// src/app/module/attribute/attribute.controller.ts
var createAttribute2 = catchAsync(async (req, res) => {
  const result = await AttributeService.createAttribute(req.body);
  sendResponse(res, {
    httpStatusCode: status34.CREATED,
    success: true,
    message: "Attribute created successfully",
    data: result
  });
});
var getAllAttributes2 = catchAsync(async (req, res) => {
  const result = await AttributeService.getAllAttributes();
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: "Attributes fetched successfully",
    data: result
  });
});
var getAttributeById2 = catchAsync(async (req, res) => {
  const result = await AttributeService.getAttributeById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: "Attribute fetched successfully",
    data: result
  });
});
var updateAttribute2 = catchAsync(async (req, res) => {
  const result = await AttributeService.updateAttribute(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: "Attribute updated successfully",
    data: result
  });
});
var deleteAttribute2 = catchAsync(async (req, res) => {
  const result = await AttributeService.deleteAttribute(req.params.id);
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var addAttributeValue2 = catchAsync(async (req, res) => {
  const result = await AttributeService.addAttributeValue(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status34.CREATED,
    success: true,
    message: "Attribute value added successfully",
    data: result
  });
});
var deleteAttributeValue2 = catchAsync(async (req, res) => {
  const result = await AttributeService.deleteAttributeValue(
    req.params.valueId
  );
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var updateAttributeValue2 = catchAsync(async (req, res) => {
  const result = await AttributeService.updateAttributeValue(
    req.params.valueId,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: "Attribute value updated successfully",
    data: result
  });
});
var AttributeController = {
  createAttribute: createAttribute2,
  getAllAttributes: getAllAttributes2,
  getAttributeById: getAttributeById2,
  updateAttribute: updateAttribute2,
  deleteAttribute: deleteAttribute2,
  addAttributeValue: addAttributeValue2,
  deleteAttributeValue: deleteAttributeValue2,
  updateAttributeValue: updateAttributeValue2
};

// src/app/module/attribute/attribute.validation.ts
import z10 from "zod";
var createAttributeZodSchema = z10.object({
  name: z10.string().min(1, "Attribute name is required")
});
var updateAttributeZodSchema = z10.object({
  name: z10.string().min(1, "Attribute name is required")
});
var addAttributeValueZodSchema = z10.object({
  value: z10.string().min(1, "Attribute value is required")
});

// src/app/module/attribute/attribute.route.ts
var router13 = Router12();
router13.get("/", AttributeController.getAllAttributes);
router13.get("/:id", AttributeController.getAttributeById);
router13.post(
  "/",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  validateRequest(createAttributeZodSchema),
  AttributeController.createAttribute
);
router13.patch(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  validateRequest(updateAttributeZodSchema),
  AttributeController.updateAttribute
);
router13.delete(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  AttributeController.deleteAttribute
);
router13.post(
  "/:id/values",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  validateRequest(addAttributeValueZodSchema),
  AttributeController.addAttributeValue
);
router13.delete(
  "/values/:valueId",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  AttributeController.deleteAttributeValue
);
router13.patch(
  "/values/:valueId",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  validateRequest(addAttributeValueZodSchema),
  AttributeController.updateAttributeValue
);
var AttributeRoutes = router13;

// src/app/module/coupon/coupon.route.ts
import { Router as Router13 } from "express";

// src/app/module/coupon/coupon.controller.ts
import status36 from "http-status";

// src/app/module/coupon/coupon.service.ts
import status35 from "http-status";
var createCoupon = async (payload) => {
  const { productIds, ...couponData } = payload;
  if (new Date(couponData.endDate) <= new Date(couponData.startDate)) {
    throw new AppError_default(status35.BAD_REQUEST, "End date must be after start date");
  }
  const existing = await prisma2.coupon.findUnique({ where: { code: couponData.code } });
  if (existing) {
    throw new AppError_default(status35.CONFLICT, "Coupon code already exists");
  }
  const products = await prisma2.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true }
  });
  if (products.length !== productIds.length) {
    throw new AppError_default(status35.BAD_REQUEST, "Some products do not exist");
  }
  const shopId = await ShopService.getDefaultShopId();
  const coupon = await prisma2.coupon.create({
    data: {
      ...couponData,
      shopId,
      startDate: new Date(couponData.startDate),
      endDate: new Date(couponData.endDate),
      products: {
        create: productIds.map((productId) => ({ productId }))
      }
    },
    include: {
      products: {
        include: {
          product: {
            select: { id: true, name: true, images: true }
          }
        }
      }
    }
  });
  return coupon;
};
var getAllCoupons = async (queryParams) => {
  const result = await new QueryBuilder(prisma2.coupon, queryParams, {
    searchableFields: ["code"],
    filterableFields: ["isActive", "discountType"]
  }).search().filter().sort().paginate().include({
    products: {
      include: {
        product: {
          select: { id: true, name: true, images: true }
        }
      }
    }
  }).execute();
  return result;
};
var getCouponById = async (id) => {
  const coupon = await prisma2.coupon.findUnique({
    where: { id },
    include: {
      products: {
        include: {
          product: {
            select: { id: true, name: true, images: true }
          }
        }
      }
    }
  });
  if (!coupon) {
    throw new AppError_default(status35.NOT_FOUND, "Coupon not found");
  }
  return coupon;
};
var toggleCouponStatus = async (id) => {
  const coupon = await prisma2.coupon.findUnique({ where: { id } });
  if (!coupon) {
    throw new AppError_default(status35.NOT_FOUND, "Coupon not found");
  }
  const updated = await prisma2.coupon.update({
    where: { id },
    data: { isActive: !coupon.isActive }
  });
  return updated;
};
var deleteCoupon = async (id) => {
  const coupon = await prisma2.coupon.findUnique({ where: { id } });
  if (!coupon) {
    throw new AppError_default(status35.NOT_FOUND, "Coupon not found");
  }
  await prisma2.coupon.delete({ where: { id } });
  return { message: "Coupon deleted successfully" };
};
var validateCoupon = async (payload) => {
  const { code, items } = payload;
  const coupon = await prisma2.coupon.findUnique({
    where: { code: code.toUpperCase() },
    include: {
      products: true
    }
  });
  if (!coupon) {
    throw new AppError_default(status35.NOT_FOUND, "Invalid coupon code");
  }
  if (!coupon.isActive) {
    throw new AppError_default(status35.BAD_REQUEST, "This coupon is inactive");
  }
  const now = /* @__PURE__ */ new Date();
  if (now < new Date(coupon.startDate) || now > new Date(coupon.endDate)) {
    throw new AppError_default(status35.BAD_REQUEST, "This coupon has expired");
  }
  const couponProductIds = coupon.products.map((cp) => cp.productId);
  const eligibleItems = items.filter(
    (item) => couponProductIds.includes(item.productId)
  );
  if (eligibleItems.length === 0) {
    throw new AppError_default(
      status35.BAD_REQUEST,
      "This coupon is not applicable to the products in your cart"
    );
  }
  const eligibleSubtotal = eligibleItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  if (eligibleSubtotal < coupon.minPurchaseAmount) {
    throw new AppError_default(
      status35.BAD_REQUEST,
      `Minimum purchase amount of \u09F3${coupon.minPurchaseAmount} not met for this coupon`
    );
  }
  let discount = 0;
  if (coupon.discountType === "FLAT") {
    discount = Math.min(coupon.discountAmount, eligibleSubtotal);
  } else if (coupon.discountType === "PERCENTAGE") {
    discount = eligibleSubtotal * (coupon.discountAmount / 100);
    if (coupon.maxDiscountAmount) {
      discount = Math.min(discount, coupon.maxDiscountAmount);
    }
  }
  return {
    couponId: coupon.id,
    code: coupon.code,
    discountAmount: parseFloat(discount.toFixed(2)),
    discountType: coupon.discountType
  };
};
var CouponService = {
  createCoupon,
  getAllCoupons,
  getCouponById,
  toggleCouponStatus,
  deleteCoupon,
  validateCoupon
};

// src/app/module/coupon/coupon.controller.ts
var createCoupon2 = catchAsync(async (req, res) => {
  const result = await CouponService.createCoupon(req.body);
  sendResponse(res, {
    httpStatusCode: status36.CREATED,
    success: true,
    message: "Coupon created successfully",
    data: result
  });
});
var getAllCoupons2 = catchAsync(async (req, res) => {
  const { data, meta } = await CouponService.getAllCoupons(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status36.OK,
    success: true,
    message: "Coupons fetched successfully",
    data,
    meta
  });
});
var getCouponById2 = catchAsync(async (req, res) => {
  const result = await CouponService.getCouponById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status36.OK,
    success: true,
    message: "Coupon fetched successfully",
    data: result
  });
});
var toggleCouponStatus2 = catchAsync(async (req, res) => {
  const result = await CouponService.toggleCouponStatus(req.params.id);
  sendResponse(res, {
    httpStatusCode: status36.OK,
    success: true,
    message: "Coupon status updated",
    data: result
  });
});
var deleteCoupon2 = catchAsync(async (req, res) => {
  const result = await CouponService.deleteCoupon(req.params.id);
  sendResponse(res, {
    httpStatusCode: status36.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var validateCoupon2 = catchAsync(async (req, res) => {
  const result = await CouponService.validateCoupon(req.body);
  sendResponse(res, {
    httpStatusCode: status36.OK,
    success: true,
    message: "Coupon applied successfully",
    data: result
  });
});
var CouponController = {
  createCoupon: createCoupon2,
  getAllCoupons: getAllCoupons2,
  getCouponById: getCouponById2,
  toggleCouponStatus: toggleCouponStatus2,
  deleteCoupon: deleteCoupon2,
  validateCoupon: validateCoupon2
};

// src/app/module/coupon/coupon.validation.ts
import z11 from "zod";
var createCouponZodSchema = z11.object({
  code: z11.string().min(3, "Coupon code must be at least 3 characters").max(30, "Coupon code must be at most 30 characters").regex(
    /^[A-Z0-9_-]+$/,
    "Only uppercase letters, numbers, hyphens and underscores allowed"
  ),
  discountType: z11.enum(["FLAT", "PERCENTAGE"]),
  discountAmount: z11.number().positive("Discount amount must be positive"),
  maxDiscountAmount: z11.number().positive().optional(),
  minPurchaseAmount: z11.number().min(0).default(0),
  startDate: z11.string().datetime({ offset: true }),
  endDate: z11.string().datetime({ offset: true }),
  productIds: z11.array(z11.string().uuid()).min(1, "At least one product required")
});
var updateCouponZodSchema = z11.object({
  isActive: z11.boolean().optional(),
  endDate: z11.string().datetime({ offset: true }).optional()
});

// src/app/module/coupon/coupon.route.ts
var router14 = Router13();
router14.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(createCouponZodSchema),
  CouponController.createCoupon
);
router14.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  CouponController.getAllCoupons
);
router14.get(
  "/:id",
  CouponController.getCouponById
);
router14.patch(
  "/:id/status",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  CouponController.toggleCouponStatus
);
router14.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  CouponController.deleteCoupon
);
router14.post("/validate", CouponController.validateCoupon);
var CouponRoutes = router14;

// src/app/module/shipping-setting/shippingSetting.route.ts
import express2 from "express";

// src/app/module/shipping-setting/shippingSetting.service.ts
var getShippingSettings = async () => {
  let settings = await prisma2.shippingSetting.findUnique({
    where: { id: "default" }
  });
  if (!settings) {
    settings = await prisma2.shippingSetting.create({
      data: {
        id: "default",
        insideDhakaShippingFee: 70,
        outsideDhakaShippingFee: 130
      }
    });
  }
  return settings;
};
var updateShippingSettings = async (payload) => {
  await getShippingSettings();
  const result = await prisma2.shippingSetting.update({
    where: { id: "default" },
    data: payload
  });
  return result;
};
var ShippingSettingService = {
  getShippingSettings: cached("shipping-settings", 5 * MINUTE, getShippingSettings),
  updateShippingSettings: invalidates(["shipping-settings"], updateShippingSettings)
};

// src/app/module/shipping-setting/shippingSetting.controller.ts
var getShippingSettings2 = catchAsync(async (req, res) => {
  const result = await ShippingSettingService.getShippingSettings();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Shipping settings retrieved successfully",
    data: result
  });
});
var updateShippingSettings2 = catchAsync(async (req, res) => {
  const result = await ShippingSettingService.updateShippingSettings(req.body);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Shipping settings updated successfully",
    data: result
  });
});
var ShippingSettingController = {
  getShippingSettings: getShippingSettings2,
  updateShippingSettings: updateShippingSettings2
};

// src/app/module/shipping-setting/shippingSetting.validation.ts
import { z as z12 } from "zod";
var updateShippingSettingZodSchema = z12.object({
  insideDhakaShippingFee: z12.number().nonnegative().optional(),
  outsideDhakaShippingFee: z12.number().nonnegative().optional()
});

// src/app/module/shipping-setting/shippingSetting.route.ts
var router15 = express2.Router();
router15.get(
  "/",
  ShippingSettingController.getShippingSettings
);
router15.patch(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateShippingSettingZodSchema),
  ShippingSettingController.updateShippingSettings
);
var ShippingSettingRoutes = router15;

// src/app/module/gtm-setting/gtmSetting.route.ts
import express3 from "express";

// src/app/module/gtm-setting/gtmSetting.service.ts
import status37 from "http-status";
var getGtmSettings = async () => {
  return prisma2.gtmSetting.upsert({
    where: { id: "default" },
    update: {},
    create: { id: "default" }
  });
};
var getPublicGtmSettings = async () => {
  const settings = await getGtmSettings();
  if (!settings.isEnabled || !settings.containerId) return null;
  return {
    containerId: settings.containerId,
    scriptDomain: settings.scriptDomain
  };
};
var updateGtmSettings = async (payload) => {
  const current = await getGtmSettings();
  const containerId = payload.containerId === void 0 ? current.containerId : payload.containerId || null;
  const isEnabled = payload.isEnabled ?? current.isEnabled;
  if (isEnabled && !containerId) {
    throw new AppError_default(
      status37.BAD_REQUEST,
      "Add the GTM container ID before turning tracking on"
    );
  }
  return prisma2.gtmSetting.update({
    where: { id: "default" },
    data: {
      isEnabled,
      containerId,
      ...payload.scriptDomain !== void 0 && {
        // Stored without a trailing slash: the client appends /gtm.js
        scriptDomain: payload.scriptDomain.replace(/\/+$/, "") || null
      }
    }
  });
};
var GtmSettingService = {
  getGtmSettings,
  getPublicGtmSettings: cached("gtm-settings", 5 * MINUTE, getPublicGtmSettings),
  updateGtmSettings: invalidates(["gtm-settings"], updateGtmSettings)
};

// src/app/module/gtm-setting/gtmSetting.controller.ts
var getPublicGtmSettings2 = catchAsync(async (req, res) => {
  const result = await GtmSettingService.getPublicGtmSettings();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "GTM settings retrieved successfully",
    data: result
  });
});
var getGtmSettings2 = catchAsync(async (req, res) => {
  const result = await GtmSettingService.getGtmSettings();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "GTM settings retrieved successfully",
    data: result
  });
});
var updateGtmSettings2 = catchAsync(async (req, res) => {
  const result = await GtmSettingService.updateGtmSettings(req.body);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "GTM settings updated successfully",
    data: result
  });
});
var GtmSettingController = {
  getPublicGtmSettings: getPublicGtmSettings2,
  getGtmSettings: getGtmSettings2,
  updateGtmSettings: updateGtmSettings2
};

// src/app/module/gtm-setting/gtmSetting.validation.ts
import { z as z13 } from "zod";
var updateGtmSettingZodSchema = z13.object({
  isEnabled: z13.boolean().optional(),
  containerId: z13.union([
    z13.string().trim().toUpperCase().regex(/^GTM-[A-Z0-9]{4,12}$/, "Container ID looks like GTM-XXXXXXX"),
    z13.literal("")
  ]).optional(),
  scriptDomain: z13.union([
    z13.url("Enter a full URL, e.g. https://sgtm.example.com").refine((v) => v.startsWith("https://"), "The domain must use https://"),
    z13.literal("")
  ]).optional()
});

// src/app/module/gtm-setting/gtmSetting.route.ts
var router16 = express3.Router();
router16.get("/public", GtmSettingController.getPublicGtmSettings);
router16.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  GtmSettingController.getGtmSettings
);
router16.patch(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateGtmSettingZodSchema),
  GtmSettingController.updateGtmSettings
);
var GtmSettingRoutes = router16;

// src/app/module/hero-slider/heroSlider.route.ts
import express4 from "express";

// src/app/module/hero-slider/heroSlider.service.ts
import status38 from "http-status";
var MAX_BANNERS = 2;
var createHeroSlider = async (req) => {
  const file = req.file;
  if (!file) {
    throw new AppError_default(status38.BAD_REQUEST, "No image or video file uploaded");
  }
  const mediaType = file.mimetype?.startsWith("video/") ? HeroMediaType.VIDEO : HeroMediaType.IMAGE;
  const type = req.body?.type === HeroSliderType.BANNER ? HeroSliderType.BANNER : HeroSliderType.SLIDE;
  const link = typeof req.body?.link === "string" && req.body.link.trim() ? req.body.link.trim() : null;
  if (type === HeroSliderType.BANNER && mediaType === HeroMediaType.VIDEO) {
    throw new AppError_default(
      status38.BAD_REQUEST,
      "Offer banners must be images. Videos can only be used as slides."
    );
  }
  if (type === HeroSliderType.BANNER) {
    const bannerCount = await prisma2.heroSlider.count({
      where: { type: HeroSliderType.BANNER }
    });
    if (bannerCount >= MAX_BANNERS) {
      throw new AppError_default(
        status38.BAD_REQUEST,
        `Only ${MAX_BANNERS} side banners are allowed. Delete one first.`
      );
    }
  }
  const result = await prisma2.heroSlider.create({
    data: {
      image: file.path,
      mediaType,
      type,
      link
    }
  });
  return result;
};
var getHeroSliders = async () => {
  const result = await prisma2.heroSlider.findMany({
    orderBy: { createdAt: "desc" }
  });
  return result;
};
var deleteHeroSlider = async (id) => {
  const result = await prisma2.heroSlider.delete({
    where: { id }
  });
  return result;
};
var HeroSliderService = {
  createHeroSlider: invalidates(["hero-sliders"], createHeroSlider),
  getHeroSliders: cached("hero-sliders", 5 * MINUTE, getHeroSliders),
  deleteHeroSlider: invalidates(["hero-sliders"], deleteHeroSlider)
};

// src/app/module/hero-slider/heroSlider.controller.ts
var createHeroSlider2 = catchAsync(async (req, res) => {
  const result = await HeroSliderService.createHeroSlider(req);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Hero slider created successfully",
    data: result
  });
});
var getHeroSliders2 = catchAsync(async (req, res) => {
  const result = await HeroSliderService.getHeroSliders();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Hero sliders retrieved successfully",
    data: result
  });
});
var deleteHeroSlider2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await HeroSliderService.deleteHeroSlider(id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Hero slider deleted successfully",
    data: result
  });
});
var HeroSliderController = {
  createHeroSlider: createHeroSlider2,
  getHeroSliders: getHeroSliders2,
  deleteHeroSlider: deleteHeroSlider2
};

// src/app/module/hero-slider/heroSlider.route.ts
var router17 = express4.Router();
router17.get("/", HeroSliderController.getHeroSliders);
router17.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("image"),
  HeroSliderController.createHeroSlider
);
router17.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  HeroSliderController.deleteHeroSlider
);
var HeroSliderRoutes = router17;

// src/app/module/brand/brand.route.ts
import express5 from "express";

// src/app/module/brand/brand.service.ts
import status39 from "http-status";
var parseBoolean = (value) => value === void 0 ? void 0 : value === true || value === "true";
var createBrand = async (req) => {
  const file = req.file;
  const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
  if (!name) throw new AppError_default(status39.BAD_REQUEST, "Brand name is required");
  if (!file) throw new AppError_default(status39.BAD_REQUEST, "Brand logo is required");
  const exists = await prisma2.brand.findUnique({ where: { name } });
  if (exists) {
    throw new AppError_default(status39.CONFLICT, `Brand "${name}" already exists`);
  }
  return prisma2.brand.create({
    data: {
      name,
      logo: file.path,
      isActive: parseBoolean(req.body?.isActive) ?? true
    }
  });
};
var getBrands = async (includeInactive) => {
  return prisma2.brand.findMany({
    where: includeInactive ? {} : { isActive: true },
    orderBy: { name: "asc" },
    include: { _count: { select: { products: true } } }
  });
};
var updateBrand = async (id, req) => {
  const existing = await prisma2.brand.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status39.NOT_FOUND, "Brand not found");
  const file = req.file;
  const name = typeof req.body?.name === "string" && req.body.name.trim() ? req.body.name.trim() : void 0;
  if (name && name !== existing.name) {
    const clash = await prisma2.brand.findUnique({ where: { name } });
    if (clash) {
      throw new AppError_default(status39.CONFLICT, `Brand "${name}" already exists`);
    }
  }
  return prisma2.brand.update({
    where: { id },
    data: {
      ...name && { name },
      ...file && { logo: file.path },
      ...parseBoolean(req.body?.isActive) !== void 0 && {
        isActive: parseBoolean(req.body?.isActive)
      }
    }
  });
};
var deleteBrand = async (id) => {
  const existing = await prisma2.brand.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status39.NOT_FOUND, "Brand not found");
  return prisma2.brand.delete({ where: { id } });
};
var BrandService = {
  createBrand: invalidates(["brands"], createBrand),
  getBrands: cached("brands", 5 * MINUTE, getBrands),
  updateBrand: invalidates(["brands"], updateBrand),
  deleteBrand: invalidates(["brands"], deleteBrand)
};

// src/app/module/brand/brand.controller.ts
var createBrand2 = catchAsync(async (req, res) => {
  const result = await BrandService.createBrand(req);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Brand created successfully",
    data: result
  });
});
var getBrands2 = catchAsync(async (req, res) => {
  const result = await BrandService.getBrands(req.query.all === "true");
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Brands retrieved successfully",
    data: result
  });
});
var updateBrand2 = catchAsync(async (req, res) => {
  const result = await BrandService.updateBrand(req.params.id, req);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Brand updated successfully",
    data: result
  });
});
var deleteBrand2 = catchAsync(async (req, res) => {
  const result = await BrandService.deleteBrand(req.params.id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Brand deleted successfully",
    data: result
  });
});
var BrandController = {
  createBrand: createBrand2,
  getBrands: getBrands2,
  updateBrand: updateBrand2,
  deleteBrand: deleteBrand2
};

// src/app/module/brand/brand.route.ts
var router18 = express5.Router();
router18.get("/", BrandController.getBrands);
router18.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("logo"),
  BrandController.createBrand
);
router18.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("logo"),
  BrandController.updateBrand
);
router18.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  BrandController.deleteBrand
);
var BrandRoutes = router18;

// src/app/module/home-promo/homePromo.route.ts
import express6 from "express";

// src/app/module/home-promo/homePromo.service.ts
var ID = "default";
var getHomePromo = async () => {
  return await prisma2.homePromo.findUnique({ where: { id: ID } }) ?? await prisma2.homePromo.create({ data: { id: ID } });
};
var parseBoolean2 = (value) => value === void 0 ? void 0 : value === true || value === "true";
var parseText = (value) => typeof value === "string" ? value.trim() || null : void 0;
var updateHomePromo = async (req) => {
  await getHomePromo();
  const body = req.body ?? {};
  const files = req.files ?? {};
  const file = files.bannerImage?.[0];
  const productsFile = files.productsBannerImage?.[0];
  return prisma2.homePromo.update({
    where: { id: ID },
    data: {
      tickerText: parseText(body.tickerText),
      tickerEnabled: parseBoolean2(body.tickerEnabled),
      bannerLink: parseText(body.bannerLink),
      bannerEnabled: parseBoolean2(body.bannerEnabled),
      ...file ? { bannerImage: file.path } : parseBoolean2(body.removeBanner) ? { bannerImage: null } : {},
      productsBannerLink: parseText(body.productsBannerLink),
      productsBannerEnabled: parseBoolean2(body.productsBannerEnabled),
      ...productsFile ? { productsBannerImage: productsFile.path } : parseBoolean2(body.removeProductsBanner) ? { productsBannerImage: null } : {}
    }
  });
};
var HomePromoService = {
  getHomePromo: cached("home-promo", 5 * MINUTE, getHomePromo),
  updateHomePromo: invalidates(["home-promo"], updateHomePromo)
};

// src/app/module/home-promo/homePromo.controller.ts
var getHomePromo2 = catchAsync(async (req, res) => {
  const result = await HomePromoService.getHomePromo();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Home promo retrieved successfully",
    data: result
  });
});
var updateHomePromo2 = catchAsync(async (req, res) => {
  const result = await HomePromoService.updateHomePromo(req);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Home promo updated successfully",
    data: result
  });
});
var HomePromoController = { getHomePromo: getHomePromo2, updateHomePromo: updateHomePromo2 };

// src/app/module/home-promo/homePromo.route.ts
var router19 = express6.Router();
router19.get("/", HomePromoController.getHomePromo);
router19.patch(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "productsBannerImage", maxCount: 1 }
  ]),
  HomePromoController.updateHomePromo
);
var HomePromoRoutes = router19;

// src/app/module/home-category-section/homeCategorySection.route.ts
import express7 from "express";

// src/app/module/home-category-section/homeCategorySection.service.ts
var categorySelect = {
  id: true,
  name: true,
  slug: true,
  image: true,
  icon: true
};
var productInclude = {
  category: true,
  shop: true,
  variants: true
};
var getHomeCategorySections = async () => {
  const sections = await prisma2.homeCategorySection.findMany({
    orderBy: { order: "asc" },
    include: { category: { select: categorySelect } }
  });
  return sections;
};
var replaceHomeCategorySections = async (sections) => {
  await prisma2.$transaction([
    prisma2.homeCategorySection.deleteMany({}),
    prisma2.homeCategorySection.createMany({
      data: sections.map((section, index) => ({
        categoryId: section.categoryId,
        displayType: section.displayType,
        order: index
      }))
    })
  ]);
  return getHomeCategorySections();
};
var resolveCategoryProducts = async (categoryId, displayType, limit) => {
  if (displayType === HomeCategoryDisplayType.LATEST) {
    return prisma2.product.findMany({
      where: { categoryId, status: ProductStatus.ACTIVE },
      orderBy: { createdAt: "desc" },
      take: limit,
      include: productInclude
    });
  }
  const grouped = await prisma2.orderItem.groupBy({
    by: ["productId"],
    where: {
      status: OrderStatus.DELIVERED,
      product: { categoryId, status: ProductStatus.ACTIVE }
    },
    _sum: { quantity: true, returnedQuantity: true }
  });
  const rankedIds = grouped.map((g) => ({
    productId: g.productId,
    netQuantity: (g._sum.quantity ?? 0) - (g._sum.returnedQuantity ?? 0)
  })).filter((g) => g.netQuantity > 0).sort((a, b) => b.netQuantity - a.netQuantity).slice(0, limit).map((g) => g.productId);
  const rankedProducts = rankedIds.length ? await prisma2.product.findMany({
    where: { id: { in: rankedIds } },
    include: productInclude
  }) : [];
  const rankedProductMap = new Map(rankedProducts.map((p) => [p.id, p]));
  const orderedRanked = rankedIds.map((id) => rankedProductMap.get(id)).filter((p) => Boolean(p));
  const remaining = limit - orderedRanked.length;
  if (remaining <= 0) {
    return orderedRanked;
  }
  const fallbackProducts = await prisma2.product.findMany({
    where: {
      categoryId,
      status: ProductStatus.ACTIVE,
      id: { notIn: rankedIds }
    },
    orderBy: { createdAt: "desc" },
    take: remaining,
    include: productInclude
  });
  return [...orderedRanked, ...fallbackProducts];
};
var getHomepageSections = async (limit) => {
  const sections = await prisma2.homeCategorySection.findMany({
    orderBy: { order: "asc" },
    include: { category: { select: categorySelect } }
  });
  const result = await Promise.all(
    sections.map(async (section) => ({
      id: section.id,
      displayType: section.displayType,
      order: section.order,
      category: section.category,
      products: await resolveCategoryProducts(
        section.categoryId,
        section.displayType,
        limit
      )
    }))
  );
  return result;
};
var HomeCategorySectionService = {
  getHomeCategorySections,
  replaceHomeCategorySections: invalidates(["home-sections"], replaceHomeCategorySections),
  resolveCategoryProducts,
  getHomepageSections: cached("home-sections", MINUTE, getHomepageSections)
};

// src/app/module/home-category-section/homeCategorySection.controller.ts
var getHomeCategorySections2 = catchAsync(
  async (req, res) => {
    const result = await HomeCategorySectionService.getHomeCategorySections();
    sendResponse(res, {
      httpStatusCode: 200,
      success: true,
      message: "Home category sections retrieved successfully",
      data: result
    });
  }
);
var updateHomeCategorySections = catchAsync(
  async (req, res) => {
    const { sections } = req.body;
    const result = await HomeCategorySectionService.replaceHomeCategorySections(sections);
    sendResponse(res, {
      httpStatusCode: 200,
      success: true,
      message: "Home category sections updated successfully",
      data: result
    });
  }
);
var getHomepageSections2 = catchAsync(
  async (req, res) => {
    const parsedLimit = Number(req.query.limit);
    const limit = Number.isFinite(parsedLimit) && parsedLimit > 0 ? parsedLimit : 8;
    const result = await HomeCategorySectionService.getHomepageSections(
      limit
    );
    sendResponse(res, {
      httpStatusCode: 200,
      success: true,
      message: "Homepage category sections retrieved successfully",
      data: result
    });
  }
);
var HomeCategorySectionController = {
  getHomeCategorySections: getHomeCategorySections2,
  updateHomeCategorySections,
  getHomepageSections: getHomepageSections2
};

// src/app/module/home-category-section/homeCategorySection.validation.ts
import z14 from "zod";
var homeCategorySectionItemZodSchema = z14.object({
  categoryId: z14.string().min(1, "categoryId is required"),
  displayType: z14.enum(["BEST_SELLING", "LATEST"])
});
var updateHomeCategorySectionsZodSchema = z14.object({
  sections: z14.array(homeCategorySectionItemZodSchema)
});

// src/app/module/home-category-section/homeCategorySection.route.ts
var router20 = express7.Router();
router20.get("/homepage", HomeCategorySectionController.getHomepageSections);
router20.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  HomeCategorySectionController.getHomeCategorySections
);
router20.put(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateHomeCategorySectionsZodSchema),
  HomeCategorySectionController.updateHomeCategorySections
);
var HomeCategorySectionRoutes = router20;

// src/app/module/pos/pos.route.ts
import { Router as Router14 } from "express";

// src/app/module/pos/pos.controller.ts
import status41 from "http-status";

// src/app/module/pos/pos.service.ts
import status40 from "http-status";
var COMMISSION_RATE2 = 0.1;
var getShopProducts = async (shopId, queryParams) => {
  const productQuery = new QueryBuilder(prisma2.product, queryParams, {
    searchableFields: ["name", "slug"],
    // Can add barcode if added to schema
    filterableFields: ["status"]
  }).search().filter().sort().paginate().include({
    variants: true,
    category: true
  }).where({
    shopId,
    status: ProductStatus.ACTIVE
  });
  return await productQuery.execute();
};
var getPosCart = async (shopId) => {
  return await prisma2.posCartItem.findMany({
    where: { shopId },
    orderBy: { createdAt: "desc" }
  });
};
var addToPosCart = async (shopId, payload) => {
  const existingItem = await prisma2.posCartItem.findFirst({
    where: {
      shopId,
      productId: payload.productId,
      productVariantId: payload.productVariantId || null
    }
  });
  if (existingItem) {
    return await prisma2.posCartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + payload.quantity }
    });
  }
  return await prisma2.posCartItem.create({
    data: {
      shopId,
      productId: payload.productId,
      productVariantId: payload.productVariantId || null,
      productName: payload.productName,
      price: payload.price,
      quantity: payload.quantity,
      combination: payload.combination,
      productImage: payload.productImage
    }
  });
};
var updatePosCartItem = async (shopId, id, quantity) => {
  const item = await prisma2.posCartItem.findUnique({ where: { id } });
  if (!item || item.shopId !== shopId) {
    throw new AppError_default(status40.NOT_FOUND, "Cart item not found");
  }
  return await prisma2.posCartItem.update({
    where: { id },
    data: { quantity }
  });
};
var deletePosCartItem = async (shopId, id) => {
  const item = await prisma2.posCartItem.findUnique({ where: { id } });
  if (!item || item.shopId !== shopId) {
    throw new AppError_default(status40.NOT_FOUND, "Cart item not found");
  }
  return await prisma2.posCartItem.delete({
    where: { id }
  });
};
var clearPosCart = async (shopId) => {
  return await prisma2.posCartItem.deleteMany({
    where: { shopId }
  });
};
var createPosOrder = async (shopId, payload) => {
  const cartItems = await prisma2.posCartItem.findMany({
    where: { shopId },
    include: {
      product: { include: { variants: true } }
    }
  });
  if (cartItems.length === 0) {
    throw new AppError_default(status40.BAD_REQUEST, "POS cart is empty");
  }
  const order = await prisma2.$transaction(async (tx) => {
    for (const item of cartItems) {
      if (item.productVariantId) {
        const variant = item.product.variants.find((v) => v.id === item.productVariantId);
        if (!variant || variant.quantity < item.quantity) {
          throw new AppError_default(
            status40.BAD_REQUEST,
            `Not enough stock for variant ${item.combination} of ${item.productName}`
          );
        }
      } else {
        if (item.product.stock < item.quantity) {
          throw new AppError_default(
            status40.BAD_REQUEST,
            `Not enough stock for product ${item.productName}`
          );
        }
      }
    }
    const newOrder = await tx.order.create({
      data: {
        orderType: OrderType.POS,
        shopId,
        // POS sales are walk-in and not tied to a registered customer account.
        userId: null,
        totalAmount: payload.total,
        discountAmount: payload.discount,
        shippingFee: payload.shippingCharge,
        paymentStatus: PaymentStatus.PAID,
        orderStatus: OrderStatus.DELIVERED,
        paymentMethod: payload.payment.method,
        fullName: payload.customer?.name || "Walk-in Customer",
        phone: payload.customer?.phone || "N/A",
        address: payload.customer?.address || "N/A",
        district: payload.customer?.district || "N/A",
        notes: payload.customer?.note || null
      }
    });
    const orderWithNumber = await tx.order.update({
      where: { id: newOrder.id },
      data: { orderNumber: generateOrderNumber(newOrder.orderType, newOrder.orderSeq) }
    });
    for (const item of cartItems) {
      const itemTotal = item.price * item.quantity;
      const itemCommission = itemTotal * COMMISSION_RATE2;
      const vendorEarning = itemTotal - itemCommission;
      const variant = item.productVariantId ? item.product.variants.find((v) => v.id === item.productVariantId) : null;
      await tx.orderItem.create({
        data: {
          orderId: newOrder.id,
          productId: item.productId,
          productVariantId: item.productVariantId,
          shopId,
          quantity: item.quantity,
          price: item.price,
          costPrice: variant?.purchasePrice ?? item.product.purchasePrice,
          platformEarning: itemCommission,
          vendorEarning,
          status: OrderStatus.DELIVERED
        }
      });
      if (item.productVariantId) {
        await tx.productVariant.update({
          where: { id: item.productVariantId },
          data: { quantity: { decrement: item.quantity } }
        });
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } }
        });
      } else {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } }
        });
      }
    }
    await tx.posCartItem.deleteMany({
      where: { shopId }
    });
    return orderWithNumber;
  });
  return order;
};
var getPosOrders = async (shopId, queryParams) => {
  const orderQuery = new QueryBuilder(prisma2.order, queryParams, {
    searchableFields: ["orderNumber", "phone", "fullName"],
    filterableFields: ["paymentMethod"]
  }).search().filter().sort().paginate().include({
    items: {
      include: {
        product: true,
        productVariant: true
      }
    }
  }).where({
    shopId,
    orderType: OrderType.POS
  });
  return await orderQuery.execute();
};
var PosService = {
  getShopProducts,
  getPosCart,
  addToPosCart,
  updatePosCartItem,
  deletePosCartItem,
  clearPosCart,
  createPosOrder,
  getPosOrders
};

// src/app/module/pos/pos.controller.ts
var getShopProducts2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const result = await PosService.getShopProducts(shopId, req.query);
  sendResponse(res, {
    httpStatusCode: status41.OK,
    success: true,
    message: "POS Products fetched successfully",
    ...result
  });
});
var getPosCart2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.getPosCart(shopId);
  sendResponse(res, {
    httpStatusCode: status41.OK,
    success: true,
    message: "POS Cart fetched successfully",
    data
  });
});
var addToPosCart2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.addToPosCart(shopId, req.body);
  sendResponse(res, {
    httpStatusCode: status41.OK,
    success: true,
    message: "Item added to POS cart",
    data
  });
});
var updatePosCartItem2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.updatePosCartItem(
    shopId,
    req.params.id,
    req.body.quantity
  );
  sendResponse(res, {
    httpStatusCode: status41.OK,
    success: true,
    message: "POS Cart item updated successfully",
    data
  });
});
var deletePosCartItem2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.deletePosCartItem(shopId, req.params.id);
  sendResponse(res, {
    httpStatusCode: status41.OK,
    success: true,
    message: "POS Cart item removed successfully",
    data
  });
});
var clearPosCart2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  await PosService.clearPosCart(shopId);
  sendResponse(res, {
    httpStatusCode: status41.OK,
    success: true,
    message: "POS Cart cleared successfully",
    data: null
  });
});
var createPosOrder2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.createPosOrder(shopId, req.body);
  sendResponse(res, {
    httpStatusCode: status41.CREATED,
    success: true,
    message: "POS Order created successfully",
    data
  });
});
var getPosOrders2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const result = await PosService.getPosOrders(shopId, req.query);
  sendResponse(res, {
    httpStatusCode: status41.OK,
    success: true,
    message: "POS Orders fetched successfully",
    ...result
  });
});
var PosController = {
  getShopProducts: getShopProducts2,
  getPosCart: getPosCart2,
  addToPosCart: addToPosCart2,
  updatePosCartItem: updatePosCartItem2,
  deletePosCartItem: deletePosCartItem2,
  clearPosCart: clearPosCart2,
  createPosOrder: createPosOrder2,
  getPosOrders: getPosOrders2
};

// src/app/module/pos/pos.validation.ts
import { z as z15 } from "zod";
var addToPosCartZodSchema = z15.object({
  productId: z15.string({ message: "Product ID is required" }).min(1, "Product ID is required"),
  productVariantId: z15.string().optional().nullable(),
  productName: z15.string({ message: "Product Name is required" }).min(1, "Product Name is required"),
  price: z15.number({ message: "Price is required" }).min(0),
  quantity: z15.number().int().min(1).default(1),
  combination: z15.string().optional().nullable(),
  productImage: z15.string().optional().nullable()
});
var updatePosCartItemZodSchema = z15.object({
  quantity: z15.number().int().min(1, "Quantity must be at least 1")
});
var createPosOrderZodSchema = z15.object({
  subtotal: z15.number(),
  discount: z15.number().default(0),
  tax: z15.number().default(0),
  shippingCharge: z15.number().default(0),
  total: z15.number(),
  coupon: z15.string().optional().nullable(),
  customer: z15.object({
    name: z15.string().optional().nullable(),
    phone: bdMobilePhoneSchema,
    address: z15.string().optional().nullable(),
    district: z15.string().optional().nullable(),
    note: z15.string().optional().nullable()
  }),
  payment: z15.object({
    method: z15.string().default("Cash"),
    amount: z15.number().default(0),
    change: z15.number().default(0)
  })
});

// src/app/module/pos/pos.route.ts
var router21 = Router14();
router21.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router21.get("/products", PosController.getShopProducts);
router21.get("/cart", PosController.getPosCart);
router21.post(
  "/cart",
  validateRequest(addToPosCartZodSchema),
  PosController.addToPosCart
);
router21.patch(
  "/cart/:id",
  validateRequest(updatePosCartItemZodSchema),
  PosController.updatePosCartItem
);
router21.delete("/cart/:id", PosController.deletePosCartItem);
router21.delete("/cart", PosController.clearPosCart);
router21.post(
  "/orders",
  validateRequest(createPosOrderZodSchema),
  PosController.createPosOrder
);
router21.get("/orders", PosController.getPosOrders);
var PosRoutes = router21;

// src/app/module/site-setting/siteSetting.route.ts
import { Router as Router15 } from "express";

// src/app/module/site-setting/siteSetting.service.ts
var getSiteSettings = async () => {
  let settings = await prisma2.siteSetting.findUnique({
    where: { id: "default" }
  });
  if (!settings) {
    settings = await prisma2.siteSetting.create({
      data: { id: "default" }
    });
  }
  return settings;
};
var updateSiteSettings = async (payload) => {
  await getSiteSettings();
  const result = await prisma2.siteSetting.update({
    where: { id: "default" },
    data: payload
  });
  return result;
};
var SiteSettingService = {
  getSiteSettings: cached("site-settings", 5 * MINUTE, getSiteSettings),
  updateSiteSettings: invalidates(["site-settings"], updateSiteSettings)
};

// src/app/module/site-setting/siteSetting.controller.ts
var getSiteSettings2 = catchAsync(async (req, res) => {
  const result = await SiteSettingService.getSiteSettings();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Site settings retrieved successfully",
    data: result
  });
});
var updateSiteSettings2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.file) {
    payload.logo = req.file.path;
  }
  const result = await SiteSettingService.updateSiteSettings(payload);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Site settings updated successfully",
    data: result
  });
});
var SiteSettingController = {
  getSiteSettings: getSiteSettings2,
  updateSiteSettings: updateSiteSettings2
};

// src/app/module/site-setting/siteSetting.validation.ts
import { z as z16 } from "zod";
var updateSiteSettingZodSchema = z16.object({
  siteName: z16.string().min(1).optional(),
  tagline: z16.string().optional(),
  description: z16.string().optional(),
  phone: z16.string().optional(),
  email: z16.email().optional().or(z16.literal("")),
  address: z16.string().optional(),
  facebook: z16.url().optional().or(z16.literal("")),
  youtube: z16.url().optional().or(z16.literal("")),
  instagram: z16.url().optional().or(z16.literal("")),
  linkedin: z16.url().optional().or(z16.literal("")),
  tiktok: z16.url().optional().or(z16.literal("")),
  whatsapp: z16.string().optional(),
  copyrightText: z16.string().optional(),
  lowStockThreshold: z16.coerce.number().int().min(0).max(1e5).optional()
});

// src/app/module/site-setting/siteSetting.route.ts
var router22 = Router15();
router22.get("/", SiteSettingController.getSiteSettings);
router22.patch(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("logo"),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(updateSiteSettingZodSchema),
  SiteSettingController.updateSiteSettings
);
var SiteSettingRoutes = router22;

// src/app/module/landing-page/landingPage.route.ts
import { Router as Router16 } from "express";

// src/app/module/landing-page/landingPage.controller.ts
import status43 from "http-status";

// src/app/module/landing-page/landingPage.service.ts
import status42 from "http-status";
var createLandingPage = async (payload) => {
  const product = await prisma2.product.findUnique({
    where: { id: payload.productId }
  });
  if (!product) {
    throw new AppError_default(status42.NOT_FOUND, "Product not found");
  }
  const shopId = await ShopService.getDefaultShopId();
  const slug = await generateUniqueSlug(prisma2, payload.campaignTitle, "landingPage");
  const landingPage = await prisma2.landingPage.create({
    data: {
      ...payload,
      slug,
      shopId
    }
  });
  return landingPage;
};
var getMyLandingPages = async (queryParams) => {
  const query = new QueryBuilder(prisma2.landingPage, queryParams, {
    searchableFields: ["campaignTitle"],
    filterableFields: ["isActive"]
  }).include({ product: { select: { id: true, name: true, images: true, slug: true } } }).search().filter().sort().paginate();
  return await query.execute();
};
var getLandingPageById = async (id) => {
  const landingPage = await prisma2.landingPage.findUnique({
    where: { id },
    include: { product: true }
  });
  if (!landingPage) {
    throw new AppError_default(status42.NOT_FOUND, "Landing page not found");
  }
  return landingPage;
};
var getLandingPageBySlug = async (slug) => {
  const landingPage = await prisma2.landingPage.findUnique({
    where: { slug },
    include: {
      product: {
        include: {
          variants: true,
          shop: { select: { id: true, name: true, logo: true } }
        }
      }
    }
  });
  if (!landingPage || !landingPage.isActive) {
    throw new AppError_default(status42.NOT_FOUND, "Landing page not found");
  }
  prisma2.landingPage.update({ where: { id: landingPage.id }, data: { views: { increment: 1 } } }).catch(() => void 0);
  return landingPage;
};
var updateLandingPage = async (id, payload) => {
  const existing = await prisma2.landingPage.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError_default(status42.NOT_FOUND, "Landing page not found");
  }
  if (payload.productId) {
    const product = await prisma2.product.findUnique({
      where: { id: payload.productId }
    });
    if (!product) {
      throw new AppError_default(status42.NOT_FOUND, "Product not found");
    }
  }
  let slug;
  if (payload.campaignTitle && payload.campaignTitle !== existing.campaignTitle) {
    slug = await generateUniqueSlug(prisma2, payload.campaignTitle, "landingPage", id);
  }
  const updated = await prisma2.landingPage.update({
    where: { id },
    data: { ...payload, ...slug && { slug } },
    include: { product: true }
  });
  return updated;
};
var deleteLandingPage = async (id) => {
  const existing = await prisma2.landingPage.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError_default(status42.NOT_FOUND, "Landing page not found");
  }
  await prisma2.landingPage.delete({ where: { id } });
  return { message: "Landing page deleted successfully" };
};
var createGuestOrder = async (slug, payload) => {
  const landingPage = await prisma2.landingPage.findUnique({ where: { slug } });
  if (!landingPage || !landingPage.isActive) {
    throw new AppError_default(status42.NOT_FOUND, "Landing page not found");
  }
  const order = await OrderService.createOrder(null, {
    fullName: payload.fullName,
    phone: payload.phone,
    address: payload.address,
    district: payload.district,
    shippingFee: payload.shippingFee,
    orderType: OrderType.LANDING_PAGE,
    checkoutSessionToken: payload.checkoutSessionToken,
    notes: payload.notes || void 0,
    paymentMethod: payload.paymentMethod ?? "COD",
    items: [
      {
        productId: landingPage.productId,
        productVariantId: payload.productVariantId || void 0,
        quantity: payload.quantity
      }
    ]
  });
  return order;
};
var LandingPageService = {
  createLandingPage,
  getMyLandingPages,
  getLandingPageById,
  getLandingPageBySlug,
  updateLandingPage,
  deleteLandingPage,
  createGuestOrder
};

// src/app/module/landing-page/landingPage.controller.ts
var createLandingPage2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.files && typeof req.files === "object") {
    const files = req.files;
    if (files.bannerImage?.[0]) {
      payload.bannerImage = files.bannerImage[0].path;
    }
    if (files.galleryImages?.length) {
      payload.galleryImages = files.galleryImages.map((f) => f.path);
    }
    if (files.reviewImages?.length) {
      payload.reviewImages = files.reviewImages.map((f) => f.path);
    }
  }
  const result = await LandingPageService.createLandingPage(payload);
  sendResponse(res, {
    httpStatusCode: status43.CREATED,
    success: true,
    message: "Landing page created successfully",
    data: result
  });
});
var getMyLandingPages2 = catchAsync(async (req, res) => {
  const { data, meta } = await LandingPageService.getMyLandingPages(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status43.OK,
    success: true,
    message: "Landing pages retrieved successfully",
    data,
    meta
  });
});
var getLandingPageById2 = catchAsync(async (req, res) => {
  const result = await LandingPageService.getLandingPageById(
    req.params.id
  );
  sendResponse(res, {
    httpStatusCode: status43.OK,
    success: true,
    message: "Landing page retrieved successfully",
    data: result
  });
});
var getLandingPageBySlug2 = catchAsync(async (req, res) => {
  const result = await LandingPageService.getLandingPageBySlug(req.params.slug);
  sendResponse(res, {
    httpStatusCode: status43.OK,
    success: true,
    message: "Landing page retrieved successfully",
    data: result
  });
});
var updateLandingPage2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.files && typeof req.files === "object") {
    const files = req.files;
    if (files.bannerImage?.[0]) {
      payload.bannerImage = files.bannerImage[0].path;
    }
    if (files.galleryImages?.length) {
      const uploaded = files.galleryImages.map((f) => f.path);
      payload.galleryImages = [...payload.galleryImages || [], ...uploaded];
    }
    if (files.reviewImages?.length) {
      const uploaded = files.reviewImages.map((f) => f.path);
      payload.reviewImages = [...payload.reviewImages || [], ...uploaded];
    }
  }
  const result = await LandingPageService.updateLandingPage(
    req.params.id,
    payload
  );
  sendResponse(res, {
    httpStatusCode: status43.OK,
    success: true,
    message: "Landing page updated successfully",
    data: result
  });
});
var deleteLandingPage2 = catchAsync(async (req, res) => {
  const result = await LandingPageService.deleteLandingPage(
    req.params.id
  );
  sendResponse(res, {
    httpStatusCode: status43.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var createGuestOrder2 = catchAsync(async (req, res) => {
  const result = await LandingPageService.createGuestOrder(
    req.params.slug,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status43.CREATED,
    success: true,
    message: "Order placed successfully",
    data: result
  });
});
var LandingPageController = {
  createLandingPage: createLandingPage2,
  getMyLandingPages: getMyLandingPages2,
  getLandingPageById: getLandingPageById2,
  getLandingPageBySlug: getLandingPageBySlug2,
  updateLandingPage: updateLandingPage2,
  deleteLandingPage: deleteLandingPage2,
  createGuestOrder: createGuestOrder2
};

// src/app/module/landing-page/landingPage.validation.ts
import { z as z17 } from "zod";
var createLandingPageZodSchema = z17.object({
  productId: z17.uuid("A valid product must be selected"),
  campaignTitle: z17.string().min(1, "Campaign title is required"),
  campaignShortDescription: z17.string().optional(),
  regularPriceLabel: z17.string().optional(),
  offerPriceLabel: z17.string().optional(),
  galleryHeading: z17.string().optional(),
  galleryDescription: z17.string().optional(),
  aboutHeading: z17.string().optional(),
  aboutDescription: z17.string().optional(),
  videoUrl: z17.url().optional().or(z17.literal("")),
  descriptionTitle: z17.string().optional(),
  description: z17.string().optional(),
  reviewHeading: z17.string().optional(),
  orderFormHeading: z17.string().optional(),
  orderButtonText: z17.string().optional(),
  isActive: z17.boolean().optional(),
  themeColor: z17.string().optional(),
  showGallerySection: z17.boolean().optional(),
  showAboutSection: z17.boolean().optional(),
  showDescriptionSection: z17.boolean().optional(),
  showReviewsSection: z17.boolean().optional(),
  sectionOrder: z17.array(z17.enum(["price", "gallery", "about", "description", "reviews"])).optional()
});
var updateLandingPageZodSchema = z17.object({
  productId: z17.uuid().optional(),
  campaignTitle: z17.string().min(1).optional(),
  campaignShortDescription: z17.string().optional(),
  regularPriceLabel: z17.string().optional(),
  offerPriceLabel: z17.string().optional(),
  galleryHeading: z17.string().optional(),
  galleryDescription: z17.string().optional(),
  // URLs of previously uploaded gallery images to keep (newly uploaded files are appended by the server)
  galleryImages: z17.array(z17.string()).optional(),
  aboutHeading: z17.string().optional(),
  aboutDescription: z17.string().optional(),
  videoUrl: z17.url().optional().or(z17.literal("")),
  descriptionTitle: z17.string().optional(),
  description: z17.string().optional(),
  reviewHeading: z17.string().optional(),
  // URLs of previously uploaded review images to keep (newly uploaded files are appended by the server)
  reviewImages: z17.array(z17.string()).optional(),
  orderFormHeading: z17.string().optional(),
  orderButtonText: z17.string().optional(),
  isActive: z17.boolean().optional(),
  themeColor: z17.string().optional(),
  showGallerySection: z17.boolean().optional(),
  showAboutSection: z17.boolean().optional(),
  showDescriptionSection: z17.boolean().optional(),
  showReviewsSection: z17.boolean().optional(),
  sectionOrder: z17.array(z17.enum(["price", "gallery", "about", "description", "reviews"])).optional()
});
var createGuestLandingOrderZodSchema = z17.object({
  fullName: z17.string().min(1, "Full name is required"),
  phone: bdMobilePhoneSchema,
  address: z17.string().min(1, "Address is required"),
  district: z17.string().min(1, "District is required"),
  productVariantId: z17.uuid().optional().nullable(),
  quantity: z17.number().int().positive(),
  shippingFee: z17.number().nonnegative().optional(),
  checkoutSessionToken: z17.string().optional(),
  notes: z17.string().trim().max(1e3).optional(),
  paymentMethod: z17.enum(["COD", "BKASH"]).optional()
});

// src/app/module/landing-page/landingPage.route.ts
var router23 = Router16();
var landingPageFileFields = multerUpload.fields([
  { name: "bannerImage", maxCount: 1 },
  { name: "galleryImages", maxCount: 10 },
  { name: "reviewImages", maxCount: 10 }
]);
var parseJsonBody = (req, res, next) => {
  if (req.body.data) {
    req.body = JSON.parse(req.body.data);
  }
  next();
};
router23.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  landingPageFileFields,
  parseJsonBody,
  validateRequest(createLandingPageZodSchema),
  LandingPageController.createLandingPage
);
router23.get(
  "/my-landing-pages",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  LandingPageController.getMyLandingPages
);
router23.get(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  LandingPageController.getLandingPageById
);
router23.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  landingPageFileFields,
  parseJsonBody,
  validateRequest(updateLandingPageZodSchema),
  LandingPageController.updateLandingPage
);
router23.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  LandingPageController.deleteLandingPage
);
router23.get("/slug/:slug", LandingPageController.getLandingPageBySlug);
router23.post(
  "/slug/:slug/order",
  guestOrderRateLimiter,
  validateRequest(createGuestLandingOrderZodSchema),
  LandingPageController.createGuestOrder
);
var LandingPageRoutes = router23;

// src/app/module/sales-report/sales-report.route.ts
import { Router as Router17 } from "express";

// src/app/module/sales-report/sales-report.controller.ts
import status44 from "http-status";

// src/app/utils/periodSummary.ts
var sumByPeriod = (entries) => {
  const now = /* @__PURE__ */ new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrowStart = new Date(startOfToday);
  tomorrowStart.setDate(tomorrowStart.getDate() + 1);
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);
  const startOfWeek = new Date(startOfToday);
  startOfWeek.setDate(startOfWeek.getDate() - 6);
  const startOfLastWeek = new Date(startOfWeek);
  startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const summary = {
    today: 0,
    yesterday: 0,
    thisWeek: 0,
    lastWeek: 0,
    thisMonth: 0,
    lastMonth: 0,
    allTime: 0
  };
  for (const { amount, date } of entries) {
    summary.allTime += amount;
    if (date >= startOfToday && date < tomorrowStart) summary.today += amount;
    if (date >= startOfYesterday && date < startOfToday) summary.yesterday += amount;
    if (date >= startOfWeek && date < tomorrowStart) summary.thisWeek += amount;
    if (date >= startOfLastWeek && date < startOfWeek) summary.lastWeek += amount;
    if (date >= startOfMonth && date < tomorrowStart) summary.thisMonth += amount;
    if (date >= startOfLastMonth && date < startOfMonth) summary.lastMonth += amount;
  }
  return summary;
};

// src/app/module/sales-report/sales-report.service.ts
var getSalesSummary = async () => {
  const shopId = await ShopService.getDefaultShopId();
  const deliveredItems = await prisma2.orderItem.findMany({
    where: { shopId, status: OrderStatus.DELIVERED },
    select: {
      price: true,
      quantity: true,
      returnedQuantity: true,
      order: { select: { createdAt: true } }
    }
  });
  return sumByPeriod(
    deliveredItems.map((item) => ({
      // Returned units were refunded — they never count as sales.
      amount: item.price * (item.quantity - item.returnedQuantity),
      date: item.order.createdAt
    }))
  );
};
var getSalesReportItems = async (range) => {
  const shopId = await ShopService.getDefaultShopId();
  let dateFilter;
  if (range.startDate || range.endDate) {
    dateFilter = {};
    if (range.startDate) dateFilter.gte = new Date(range.startDate);
    if (range.endDate) {
      const end = new Date(range.endDate);
      end.setHours(23, 59, 59, 999);
      dateFilter.lte = end;
    }
  }
  const items = await prisma2.orderItem.findMany({
    where: {
      shopId,
      status: OrderStatus.DELIVERED,
      ...dateFilter && { order: { createdAt: dateFilter } }
    },
    include: {
      product: { select: { name: true } },
      productVariant: { select: { combination: true } },
      order: { select: { orderNumber: true, orderType: true, createdAt: true } }
    },
    orderBy: { order: { createdAt: "desc" } }
  });
  const productMap = /* @__PURE__ */ new Map();
  let totalSales = 0;
  let totalQuantity = 0;
  const result = items.map((item) => {
    const netQuantity = item.quantity - item.returnedQuantity;
    const lineTotal = item.price * netQuantity;
    totalSales += lineTotal;
    totalQuantity += netQuantity;
    const existing = productMap.get(item.productId);
    if (existing) {
      existing.quantity += netQuantity;
      existing.total += lineTotal;
    } else {
      productMap.set(item.productId, {
        name: item.product.name,
        quantity: netQuantity,
        total: lineTotal
      });
    }
    return {
      id: item.id,
      productId: item.productId,
      product: item.product,
      productVariant: item.productVariant,
      price: item.price,
      quantity: item.quantity,
      returnedQuantity: item.returnedQuantity,
      lineTotal,
      order: item.order
    };
  });
  return {
    items: result,
    productSummary: Array.from(productMap.values()),
    totals: {
      totalSales,
      totalQuantity
    }
  };
};
var SalesReportService = {
  getSalesSummary,
  getSalesReportItems
};

// src/app/module/sales-report/sales-report.controller.ts
var getSalesSummary2 = catchAsync(async (req, res) => {
  const result = await SalesReportService.getSalesSummary();
  sendResponse(res, {
    httpStatusCode: status44.OK,
    success: true,
    message: "Sales summary fetched successfully",
    data: result
  });
});
var getSalesReportItems2 = catchAsync(async (req, res) => {
  const { startDate, endDate } = req.query;
  const result = await SalesReportService.getSalesReportItems({
    startDate,
    endDate
  });
  sendResponse(res, {
    httpStatusCode: status44.OK,
    success: true,
    message: "Sales report fetched successfully",
    data: result
  });
});
var SalesReportController = {
  getSalesSummary: getSalesSummary2,
  getSalesReportItems: getSalesReportItems2
};

// src/app/module/sales-report/sales-report.route.ts
var router24 = Router17();
router24.get("/summary", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SalesReportController.getSalesSummary);
router24.get("/items", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SalesReportController.getSalesReportItems);
var SalesReportRoutes = router24;

// src/app/module/expense/expense.route.ts
import { Router as Router18 } from "express";

// src/app/module/expense/expense.controller.ts
import status46 from "http-status";

// src/app/module/expense/expense.service.ts
import status45 from "http-status";
var createCategory3 = async (payload) => {
  const shopId = await ShopService.getDefaultShopId();
  return prisma2.expenseCategory.create({
    data: { name: payload.name, shopId }
  });
};
var getMyCategories = async (queryParams) => {
  return new QueryBuilder(prisma2.expenseCategory, queryParams, {
    searchableFields: ["name"],
    filterableFields: ["isActive"]
  }).search().filter().sort().paginate().execute();
};
var updateCategory3 = async (id, payload) => {
  const category = await prisma2.expenseCategory.findUnique({ where: { id } });
  if (!category) throw new AppError_default(status45.NOT_FOUND, "Expense category not found");
  return prisma2.expenseCategory.update({ where: { id }, data: payload });
};
var deleteCategory3 = async (id) => {
  const category = await prisma2.expenseCategory.findUnique({ where: { id } });
  if (!category) throw new AppError_default(status45.NOT_FOUND, "Expense category not found");
  const expenseCount = await prisma2.expense.count({ where: { categoryId: id } });
  if (expenseCount > 0) {
    throw new AppError_default(
      status45.BAD_REQUEST,
      "Cannot delete a category that has expenses. Deactivate it instead."
    );
  }
  await prisma2.expenseCategory.delete({ where: { id } });
  return { message: "Expense category deleted successfully" };
};
var createExpense = async (payload) => {
  const category = await prisma2.expenseCategory.findUnique({
    where: { id: payload.categoryId }
  });
  if (!category) {
    throw new AppError_default(status45.BAD_REQUEST, "Invalid expense category");
  }
  const shopId = await ShopService.getDefaultShopId();
  return prisma2.expense.create({
    data: {
      name: payload.name,
      price: payload.price,
      note: payload.note,
      date: new Date(payload.date),
      categoryId: payload.categoryId,
      shopId
    },
    include: { category: { select: { id: true, name: true } } }
  });
};
var getMyExpenses = async (queryParams) => {
  const { startDate, endDate, ...rest } = queryParams;
  let dateFilter;
  if (startDate || endDate) {
    dateFilter = {};
    if (startDate) dateFilter.gte = new Date(startDate);
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      dateFilter.lte = end;
    }
  }
  return new QueryBuilder(prisma2.expense, rest, {
    searchableFields: ["name", "note"],
    filterableFields: ["categoryId"]
  }).search().filter().where({ ...dateFilter && { date: dateFilter } }).sort().paginate().include({ category: { select: { id: true, name: true } } }).execute();
};
var updateExpense = async (id, payload) => {
  const expense = await prisma2.expense.findUnique({ where: { id } });
  if (!expense) throw new AppError_default(status45.NOT_FOUND, "Expense not found");
  if (payload.categoryId) {
    const category = await prisma2.expenseCategory.findUnique({
      where: { id: payload.categoryId }
    });
    if (!category) {
      throw new AppError_default(status45.BAD_REQUEST, "Invalid expense category");
    }
  }
  return prisma2.expense.update({
    where: { id },
    data: {
      ...payload.name !== void 0 && { name: payload.name },
      ...payload.price !== void 0 && { price: payload.price },
      ...payload.note !== void 0 && { note: payload.note },
      ...payload.date !== void 0 && { date: new Date(payload.date) },
      ...payload.categoryId !== void 0 && { categoryId: payload.categoryId }
    },
    include: { category: { select: { id: true, name: true } } }
  });
};
var deleteExpense = async (id) => {
  const expense = await prisma2.expense.findUnique({ where: { id } });
  if (!expense) throw new AppError_default(status45.NOT_FOUND, "Expense not found");
  await prisma2.expense.delete({ where: { id } });
  return { message: "Expense deleted successfully" };
};
var getExpenseReportSummary = async () => {
  const shopId = await ShopService.getDefaultShopId();
  const expenses = await prisma2.expense.findMany({
    where: { shopId },
    select: { price: true, date: true }
  });
  return sumByPeriod(expenses.map((expense) => ({ amount: expense.price, date: expense.date })));
};
var ExpenseService = {
  createCategory: createCategory3,
  getMyCategories,
  updateCategory: updateCategory3,
  deleteCategory: deleteCategory3,
  createExpense,
  getMyExpenses,
  updateExpense,
  deleteExpense,
  getExpenseReportSummary
};

// src/app/module/expense/expense.controller.ts
var createCategory4 = catchAsync(async (req, res) => {
  const result = await ExpenseService.createCategory(req.body);
  sendResponse(res, {
    httpStatusCode: status46.CREATED,
    success: true,
    message: "Expense category created successfully",
    data: result
  });
});
var getMyCategories2 = catchAsync(async (req, res) => {
  const { data, meta } = await ExpenseService.getMyCategories(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: "Expense categories fetched successfully",
    data,
    meta
  });
});
var updateCategory4 = catchAsync(async (req, res) => {
  const result = await ExpenseService.updateCategory(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: "Expense category updated successfully",
    data: result
  });
});
var deleteCategory4 = catchAsync(async (req, res) => {
  const result = await ExpenseService.deleteCategory(req.params.id);
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var createExpense2 = catchAsync(async (req, res) => {
  const result = await ExpenseService.createExpense(req.body);
  sendResponse(res, {
    httpStatusCode: status46.CREATED,
    success: true,
    message: "Expense added successfully",
    data: result
  });
});
var getMyExpenses2 = catchAsync(async (req, res) => {
  const { data, meta } = await ExpenseService.getMyExpenses(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: "Expenses fetched successfully",
    data,
    meta
  });
});
var updateExpense2 = catchAsync(async (req, res) => {
  const result = await ExpenseService.updateExpense(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: "Expense updated successfully",
    data: result
  });
});
var deleteExpense2 = catchAsync(async (req, res) => {
  const result = await ExpenseService.deleteExpense(req.params.id);
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var getExpenseReportSummary2 = catchAsync(async (req, res) => {
  const result = await ExpenseService.getExpenseReportSummary();
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: "Expense report fetched successfully",
    data: result
  });
});
var ExpenseController = {
  createCategory: createCategory4,
  getMyCategories: getMyCategories2,
  updateCategory: updateCategory4,
  deleteCategory: deleteCategory4,
  createExpense: createExpense2,
  getMyExpenses: getMyExpenses2,
  updateExpense: updateExpense2,
  deleteExpense: deleteExpense2,
  getExpenseReportSummary: getExpenseReportSummary2
};

// src/app/module/expense/expense.validation.ts
import z18 from "zod";
var createExpenseCategoryZodSchema = z18.object({
  name: z18.string().min(1, "Name is required").max(100)
});
var updateExpenseCategoryZodSchema = z18.object({
  name: z18.string().min(1, "Name is required").max(100).optional(),
  isActive: z18.boolean().optional()
});
var createExpenseZodSchema = z18.object({
  categoryId: z18.string().uuid("Invalid expense category"),
  name: z18.string().min(1, "Name is required").max(150),
  price: z18.number().positive("Price must be positive"),
  note: z18.string().max(500).optional(),
  date: z18.string().min(1, "Date is required")
});
var updateExpenseZodSchema = z18.object({
  categoryId: z18.string().uuid("Invalid expense category").optional(),
  name: z18.string().min(1, "Name is required").max(150).optional(),
  price: z18.number().positive("Price must be positive").optional(),
  note: z18.string().max(500).optional(),
  date: z18.string().min(1).optional()
});

// src/app/module/expense/expense.route.ts
var router25 = Router18();
router25.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router25.post(
  "/categories",
  validateRequest(createExpenseCategoryZodSchema),
  ExpenseController.createCategory
);
router25.get("/categories", ExpenseController.getMyCategories);
router25.patch(
  "/categories/:id",
  validateRequest(updateExpenseCategoryZodSchema),
  ExpenseController.updateCategory
);
router25.delete("/categories/:id", ExpenseController.deleteCategory);
router25.get("/report/summary", ExpenseController.getExpenseReportSummary);
router25.post("/", validateRequest(createExpenseZodSchema), ExpenseController.createExpense);
router25.get("/", ExpenseController.getMyExpenses);
router25.patch("/:id", validateRequest(updateExpenseZodSchema), ExpenseController.updateExpense);
router25.delete("/:id", ExpenseController.deleteExpense);
var ExpenseRoutes = router25;

// src/app/module/profit-loss/profit-loss.route.ts
import { Router as Router19 } from "express";

// src/app/module/profit-loss/profit-loss.controller.ts
import status47 from "http-status";

// src/app/module/profit-loss/profit-loss.service.ts
var buildOrderSubtotals = (items) => {
  const subtotals = /* @__PURE__ */ new Map();
  for (const item of items) {
    const lineTotal = item.price * (item.quantity - item.returnedQuantity);
    subtotals.set(item.orderId, (subtotals.get(item.orderId) || 0) + lineTotal);
  }
  return subtotals;
};
var getProfitLossSummary = async () => {
  const shopId = await ShopService.getDefaultShopId();
  const items = await prisma2.orderItem.findMany({
    where: { shopId, status: OrderStatus.DELIVERED },
    select: {
      orderId: true,
      price: true,
      quantity: true,
      returnedQuantity: true,
      costPrice: true,
      product: { select: { purchasePrice: true } },
      productVariant: { select: { purchasePrice: true } },
      order: { select: { discountAmount: true, shippingFee: true, createdAt: true } }
    }
  });
  const orderSubtotals = buildOrderSubtotals(items);
  const salesEntries = [];
  const costEntries = [];
  const discountEntries = [];
  const profitEntries = [];
  const shippingSeenOrderIds = /* @__PURE__ */ new Set();
  const shippingEntries = [];
  for (const item of items) {
    const netQuantity = item.quantity - item.returnedQuantity;
    const lineTotal = item.price * netQuantity;
    const unitCost = item.costPrice ?? item.productVariant?.purchasePrice ?? item.product.purchasePrice;
    const lineCost = unitCost * netQuantity;
    const orderSubtotal = orderSubtotals.get(item.orderId) || 0;
    const ratio = orderSubtotal > 0 ? lineTotal / orderSubtotal : 0;
    const lineDiscount = (item.order.discountAmount || 0) * ratio;
    const date = item.order.createdAt;
    salesEntries.push({ amount: lineTotal, date });
    costEntries.push({ amount: lineCost, date });
    discountEntries.push({ amount: lineDiscount, date });
    profitEntries.push({ amount: lineTotal - lineCost - lineDiscount, date });
    if (!shippingSeenOrderIds.has(item.orderId)) {
      shippingSeenOrderIds.add(item.orderId);
      shippingEntries.push({ amount: item.order.shippingFee || 0, date });
    }
  }
  const expenses = await prisma2.expense.findMany({
    where: { shopId },
    select: { price: true, date: true }
  });
  const expenseEntries = expenses.map((expense2) => ({ amount: expense2.price, date: expense2.date }));
  const sales = sumByPeriod(salesEntries);
  const cost = sumByPeriod(costEntries);
  const discount = sumByPeriod(discountEntries);
  const shipping = sumByPeriod(shippingEntries);
  const profit = sumByPeriod(profitEntries);
  const expense = sumByPeriod(expenseEntries);
  const periods = Object.keys(profit);
  const netProfit = periods.reduce((acc, period) => {
    acc[period] = profit[period] - expense[period];
    return acc;
  }, {});
  return { sales, cost, discount, shipping, profit, expense, netProfit };
};
var getProfitLossItems = async (range) => {
  const shopId = await ShopService.getDefaultShopId();
  let dateFilter;
  if (range.startDate || range.endDate) {
    dateFilter = {};
    if (range.startDate) dateFilter.gte = new Date(range.startDate);
    if (range.endDate) {
      const end = new Date(range.endDate);
      end.setHours(23, 59, 59, 999);
      dateFilter.lte = end;
    }
  }
  const items = await prisma2.orderItem.findMany({
    where: {
      shopId,
      status: OrderStatus.DELIVERED,
      ...dateFilter && { order: { createdAt: dateFilter } }
    },
    include: {
      product: { select: { id: true, name: true, purchasePrice: true } },
      productVariant: { select: { id: true, combination: true, purchasePrice: true } },
      order: {
        select: {
          orderNumber: true,
          orderType: true,
          discountAmount: true,
          shippingFee: true,
          createdAt: true
        }
      }
    },
    orderBy: { order: { createdAt: "desc" } }
  });
  const orderSubtotals = buildOrderSubtotals(items);
  let totalSales = 0;
  let totalCost = 0;
  let totalDiscount = 0;
  let totalProfit = 0;
  let totalShipping = 0;
  const shippingSeenOrderIds = /* @__PURE__ */ new Set();
  const result = items.map((item) => {
    const netQuantity = item.quantity - item.returnedQuantity;
    const lineTotal = item.price * netQuantity;
    const unitCost = item.costPrice ?? item.productVariant?.purchasePrice ?? item.product.purchasePrice;
    const lineCost = unitCost * netQuantity;
    const orderSubtotal = orderSubtotals.get(item.orderId) || 0;
    const ratio = orderSubtotal > 0 ? lineTotal / orderSubtotal : 0;
    const lineDiscount = (item.order.discountAmount || 0) * ratio;
    const lineProfit = lineTotal - lineCost - lineDiscount;
    totalSales += lineTotal;
    totalCost += lineCost;
    totalDiscount += lineDiscount;
    totalProfit += lineProfit;
    if (!shippingSeenOrderIds.has(item.orderId)) {
      shippingSeenOrderIds.add(item.orderId);
      totalShipping += item.order.shippingFee || 0;
    }
    return {
      id: item.id,
      product: item.product,
      productVariant: item.productVariant,
      price: item.price,
      quantity: item.quantity,
      returnedQuantity: item.returnedQuantity,
      unitCost,
      lineTotal,
      lineCost,
      lineDiscount,
      lineProfit,
      order: item.order
    };
  });
  return {
    items: result,
    totals: { totalSales, totalCost, totalDiscount, totalShipping, totalProfit }
  };
};
var ProfitLossService = {
  getProfitLossSummary,
  getProfitLossItems
};

// src/app/module/profit-loss/profit-loss.controller.ts
var getProfitLossSummary2 = catchAsync(async (req, res) => {
  const result = await ProfitLossService.getProfitLossSummary();
  sendResponse(res, {
    httpStatusCode: status47.OK,
    success: true,
    message: "Profit & loss summary fetched successfully",
    data: result
  });
});
var getProfitLossItems2 = catchAsync(async (req, res) => {
  const { startDate, endDate } = req.query;
  const result = await ProfitLossService.getProfitLossItems({
    startDate,
    endDate
  });
  sendResponse(res, {
    httpStatusCode: status47.OK,
    success: true,
    message: "Profit & loss report fetched successfully",
    data: result
  });
});
var ProfitLossController = {
  getProfitLossSummary: getProfitLossSummary2,
  getProfitLossItems: getProfitLossItems2
};

// src/app/module/profit-loss/profit-loss.route.ts
var router26 = Router19();
router26.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router26.get("/summary", ProfitLossController.getProfitLossSummary);
router26.get("/items", ProfitLossController.getProfitLossItems);
var ProfitLossRoutes = router26;

// src/app/module/platform-report/platform-report.route.ts
import { Router as Router20 } from "express";

// src/app/module/platform-report/platform-report.controller.ts
import status48 from "http-status";

// src/app/module/platform-report/platform-report.service.ts
var buildDateFilter = (range) => {
  if (!range.startDate && !range.endDate) return void 0;
  const filter = {};
  if (range.startDate) filter.gte = new Date(range.startDate);
  if (range.endDate) {
    const end = new Date(range.endDate);
    end.setHours(23, 59, 59, 999);
    filter.lte = end;
  }
  return filter;
};
var getPlatformSummary = async () => {
  const items = await prisma2.orderItem.findMany({
    where: { status: OrderStatus.DELIVERED },
    select: {
      price: true,
      quantity: true,
      returnedQuantity: true,
      order: { select: { createdAt: true } }
    }
  });
  const gmv = sumByPeriod(
    items.map((item) => ({
      // Returned units were refunded — they never count toward GMV.
      amount: item.price * (item.quantity - item.returnedQuantity),
      date: item.order.createdAt
    }))
  );
  return { gmv };
};
var getPlatformOverview = async (range) => {
  const dateFilter = buildDateFilter(range);
  const items = await prisma2.orderItem.findMany({
    where: {
      status: OrderStatus.DELIVERED,
      ...dateFilter && { order: { createdAt: dateFilter } }
    },
    select: {
      orderId: true,
      price: true,
      quantity: true,
      returnedQuantity: true,
      productId: true,
      product: { select: { name: true } },
      order: { select: { orderType: true } }
    }
  });
  let gmv = 0;
  const orderIds = /* @__PURE__ */ new Set();
  const byOrderTypeMap = /* @__PURE__ */ new Map();
  const productMap = /* @__PURE__ */ new Map();
  for (const item of items) {
    const netQuantity = item.quantity - item.returnedQuantity;
    const lineTotal = item.price * netQuantity;
    gmv += lineTotal;
    orderIds.add(item.orderId);
    const typeBucket = byOrderTypeMap.get(item.order.orderType) || { gmv: 0, count: 0 };
    typeBucket.gmv += lineTotal;
    typeBucket.count += 1;
    byOrderTypeMap.set(item.order.orderType, typeBucket);
    const productBucket = productMap.get(item.productId) || {
      productId: item.productId,
      name: item.product.name,
      quantity: 0,
      revenue: 0
    };
    productBucket.quantity += netQuantity;
    productBucket.revenue += lineTotal;
    productMap.set(item.productId, productBucket);
  }
  const orderStatusGroups = await prisma2.order.groupBy({
    by: ["orderStatus"],
    _count: { id: true },
    where: dateFilter ? { createdAt: dateFilter } : void 0
  });
  const topProducts = Array.from(productMap.values()).sort((a, b) => b.revenue - a.revenue).slice(0, 8);
  return {
    totals: {
      gmv,
      orderCount: orderIds.size,
      avgOrderValue: orderIds.size > 0 ? gmv / orderIds.size : 0
    },
    byOrderType: Array.from(byOrderTypeMap.entries()).map(([orderType, v]) => ({
      orderType,
      ...v
    })),
    byOrderStatus: orderStatusGroups.map((g) => ({
      orderStatus: g.orderStatus,
      count: g._count.id
    })),
    topProducts
  };
};
var getPlatformItems = async (range) => {
  const dateFilter = buildDateFilter(range);
  const orderWhere = {};
  if (dateFilter) orderWhere.createdAt = dateFilter;
  if (range.orderType && Object.values(OrderType).includes(range.orderType)) {
    orderWhere.orderType = range.orderType;
  }
  const items = await prisma2.orderItem.findMany({
    where: {
      status: OrderStatus.DELIVERED,
      ...Object.keys(orderWhere).length > 0 && { order: orderWhere }
    },
    include: {
      product: { select: { id: true, name: true } },
      productVariant: { select: { id: true, combination: true } },
      order: { select: { orderNumber: true, orderType: true, createdAt: true } }
    },
    orderBy: { order: { createdAt: "desc" } }
  });
  let totalGmv = 0;
  let totalQuantity = 0;
  const result = items.map((item) => {
    const netQuantity = item.quantity - item.returnedQuantity;
    const lineTotal = item.price * netQuantity;
    totalGmv += lineTotal;
    totalQuantity += netQuantity;
    return {
      id: item.id,
      product: item.product,
      productVariant: item.productVariant,
      price: item.price,
      quantity: item.quantity,
      returnedQuantity: item.returnedQuantity,
      lineTotal,
      order: item.order
    };
  });
  return {
    items: result,
    totals: { totalGmv, totalQuantity }
  };
};
var PlatformReportService = {
  getPlatformSummary,
  getPlatformOverview,
  getPlatformItems
};

// src/app/module/platform-report/platform-report.controller.ts
var getPlatformSummary2 = catchAsync(async (req, res) => {
  const result = await PlatformReportService.getPlatformSummary();
  sendResponse(res, {
    httpStatusCode: status48.OK,
    success: true,
    message: "Platform summary fetched successfully",
    data: result
  });
});
var getPlatformOverview2 = catchAsync(async (req, res) => {
  const { startDate, endDate } = req.query;
  const result = await PlatformReportService.getPlatformOverview({ startDate, endDate });
  sendResponse(res, {
    httpStatusCode: status48.OK,
    success: true,
    message: "Platform overview fetched successfully",
    data: result
  });
});
var getPlatformItems2 = catchAsync(async (req, res) => {
  const { startDate, endDate, orderType } = req.query;
  const result = await PlatformReportService.getPlatformItems({
    startDate,
    endDate,
    orderType
  });
  sendResponse(res, {
    httpStatusCode: status48.OK,
    success: true,
    message: "Platform report items fetched successfully",
    data: result
  });
});
var PlatformReportController = {
  getPlatformSummary: getPlatformSummary2,
  getPlatformOverview: getPlatformOverview2,
  getPlatformItems: getPlatformItems2
};

// src/app/module/platform-report/platform-report.route.ts
var router27 = Router20();
router27.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router27.get("/summary", PlatformReportController.getPlatformSummary);
router27.get("/overview", PlatformReportController.getPlatformOverview);
router27.get("/items", PlatformReportController.getPlatformItems);
var PlatformReportRoutes = router27;

// src/app/module/district-report/districtReport.route.ts
import { Router as Router21 } from "express";

// src/app/module/district-report/districtReport.controller.ts
import status49 from "http-status";

// src/app/module/district-report/districtReport.service.ts
var buildDateFilter2 = (range) => {
  if (!range.startDate && !range.endDate) return void 0;
  const filter = {};
  if (range.startDate) filter.gte = new Date(range.startDate);
  if (range.endDate) {
    const end = new Date(range.endDate);
    end.setHours(23, 59, 59, 999);
    filter.lte = end;
  }
  return filter;
};
var getDistrictReportOverview = async (range) => {
  const dateFilter = buildDateFilter2(range);
  const items = await prisma2.orderItem.findMany({
    where: {
      status: OrderStatus.DELIVERED,
      ...dateFilter && { order: { createdAt: dateFilter } }
    },
    select: {
      quantity: true,
      returnedQuantity: true,
      price: true,
      productId: true,
      product: { select: { name: true } },
      order: {
        select: {
          id: true,
          orderNumber: true,
          fullName: true,
          phone: true,
          district: true,
          orderType: true,
          createdAt: true
        }
      }
    }
  });
  const districtMap = /* @__PURE__ */ new Map();
  const productMap = /* @__PURE__ */ new Map();
  const orderMap = /* @__PURE__ */ new Map();
  for (const item of items) {
    const netQuantity = item.quantity - item.returnedQuantity;
    if (netQuantity <= 0) continue;
    const revenue = netQuantity * item.price;
    const district = item.order.district?.trim() || "Unknown";
    const districtBucket = districtMap.get(district) || {
      district,
      totalRevenue: 0,
      totalQuantity: 0,
      orderIds: /* @__PURE__ */ new Set(),
      products: /* @__PURE__ */ new Map()
    };
    districtBucket.totalRevenue += revenue;
    districtBucket.totalQuantity += netQuantity;
    districtBucket.orderIds.add(item.order.id);
    const districtProductBucket = districtBucket.products.get(item.productId) || {
      productId: item.productId,
      name: item.product.name,
      quantity: 0,
      revenue: 0
    };
    districtProductBucket.quantity += netQuantity;
    districtProductBucket.revenue += revenue;
    districtBucket.products.set(item.productId, districtProductBucket);
    districtMap.set(district, districtBucket);
    const productBucket = productMap.get(item.productId) || {
      productId: item.productId,
      name: item.product.name,
      quantity: 0,
      revenue: 0
    };
    productBucket.quantity += netQuantity;
    productBucket.revenue += revenue;
    productMap.set(item.productId, productBucket);
    const orderBucket = orderMap.get(item.order.id) || {
      id: item.order.id,
      orderNumber: item.order.orderNumber,
      fullName: item.order.fullName,
      phone: item.order.phone,
      district: item.order.district,
      orderType: item.order.orderType,
      createdAt: item.order.createdAt,
      totalAmount: 0,
      items: []
    };
    orderBucket.totalAmount += revenue;
    orderBucket.items.push({ productName: item.product.name, quantity: netQuantity });
    orderMap.set(item.order.id, orderBucket);
  }
  const districts = Array.from(districtMap.values()).map((bucket) => ({
    district: bucket.district,
    totalOrders: bucket.orderIds.size,
    totalRevenue: bucket.totalRevenue,
    totalQuantity: bucket.totalQuantity,
    topProducts: Array.from(bucket.products.values()).sort((a, b) => b.quantity - a.quantity).slice(0, 5)
  })).sort((a, b) => b.totalRevenue - a.totalRevenue);
  const topProducts = Array.from(productMap.values()).sort((a, b) => b.quantity - a.quantity).slice(0, 10);
  const orders = Array.from(orderMap.values()).sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
  const summary = {
    totalOrders: orderMap.size,
    totalRevenue: districts.reduce((sum, d) => sum + d.totalRevenue, 0),
    totalQuantity: districts.reduce((sum, d) => sum + d.totalQuantity, 0),
    totalDistricts: districts.length
  };
  return { summary, districts, topProducts, orders };
};
var DistrictReportService = {
  getDistrictReportOverview
};

// src/app/module/district-report/districtReport.controller.ts
var getOverview = catchAsync(async (req, res) => {
  const { startDate, endDate } = req.query;
  const result = await DistrictReportService.getDistrictReportOverview({ startDate, endDate });
  sendResponse(res, {
    httpStatusCode: status49.OK,
    success: true,
    message: "District report overview fetched successfully",
    data: result
  });
});
var DistrictReportController = {
  getOverview
};

// src/app/module/district-report/districtReport.route.ts
var router28 = Router21();
router28.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router28.get("/overview", DistrictReportController.getOverview);
var DistrictReportRoutes = router28;

// src/app/module/customer-segment-report/customerSegmentReport.route.ts
import { Router as Router22 } from "express";

// src/app/module/customer-segment-report/customerSegmentReport.controller.ts
import status50 from "http-status";

// src/app/module/customer-segment-report/customerSegmentReport.service.ts
var buildDateFilter3 = (range) => {
  if (!range.startDate && !range.endDate) return void 0;
  const filter = {};
  if (range.startDate) filter.gte = new Date(range.startDate);
  if (range.endDate) {
    const end = new Date(range.endDate);
    end.setHours(23, 59, 59, 999);
    filter.lte = end;
  }
  return filter;
};
var resolveSegment = (totalOrders) => {
  if (totalOrders >= 5) return "LOYAL";
  if (totalOrders >= 2) return "REGULAR";
  return "NEW";
};
var getCustomerSegmentOverview = async (range) => {
  const dateFilter = buildDateFilter3(range);
  const items = await prisma2.orderItem.findMany({
    where: {
      status: OrderStatus.DELIVERED,
      ...dateFilter && { order: { createdAt: dateFilter } }
    },
    select: {
      quantity: true,
      returnedQuantity: true,
      price: true,
      order: {
        select: {
          id: true,
          phone: true,
          fullName: true,
          district: true,
          orderType: true,
          createdAt: true
        }
      }
    }
  });
  const customerMap = /* @__PURE__ */ new Map();
  const unidentifiedOrderIds = /* @__PURE__ */ new Set();
  for (const item of items) {
    const netQuantity = item.quantity - item.returnedQuantity;
    if (netQuantity <= 0) continue;
    const revenue = netQuantity * item.price;
    const rawPhone = item.order.phone?.trim();
    if (!rawPhone || rawPhone.toLowerCase() === "n/a") {
      unidentifiedOrderIds.add(item.order.id);
      continue;
    }
    const bucket = customerMap.get(rawPhone) || {
      phone: rawPhone,
      fullName: item.order.fullName,
      district: item.order.district,
      orderIds: /* @__PURE__ */ new Set(),
      totalRevenue: 0,
      totalQuantity: 0,
      firstOrderDate: item.order.createdAt,
      lastOrderDate: item.order.createdAt
    };
    bucket.totalRevenue += revenue;
    bucket.totalQuantity += netQuantity;
    bucket.orderIds.add(item.order.id);
    if (item.order.createdAt < bucket.firstOrderDate) {
      bucket.firstOrderDate = item.order.createdAt;
    }
    if (item.order.createdAt >= bucket.lastOrderDate) {
      bucket.lastOrderDate = item.order.createdAt;
      bucket.fullName = item.order.fullName;
      bucket.district = item.order.district;
    }
    customerMap.set(rawPhone, bucket);
  }
  const rankedCustomers = Array.from(customerMap.values()).map((bucket) => ({
    phone: bucket.phone,
    fullName: bucket.fullName,
    district: bucket.district,
    totalOrders: bucket.orderIds.size,
    totalRevenue: bucket.totalRevenue,
    totalQuantity: bucket.totalQuantity,
    firstOrderDate: bucket.firstOrderDate,
    lastOrderDate: bucket.lastOrderDate,
    segment: resolveSegment(bucket.orderIds.size)
  })).sort((a, b) => b.totalRevenue - a.totalRevenue);
  const highSpenderIdx = Math.max(0, Math.ceil(rankedCustomers.length * 0.1) - 1);
  const highSpenderThreshold = rankedCustomers.length > 0 ? rankedCustomers[highSpenderIdx].totalRevenue : 0;
  const customers = rankedCustomers.map((customer) => ({
    ...customer,
    isHighSpender: customer.totalRevenue >= highSpenderThreshold && highSpenderThreshold > 0
  }));
  const segmentBreakdown = ["NEW", "REGULAR", "LOYAL"].map((segment) => {
    const segmentCustomers = customers.filter((customer) => customer.segment === segment);
    return {
      segment,
      count: segmentCustomers.length,
      totalRevenue: segmentCustomers.reduce((sum, customer) => sum + customer.totalRevenue, 0)
    };
  });
  const summary = {
    totalCustomers: customers.length,
    newCustomers: customers.filter((customer) => customer.segment === "NEW").length,
    regularCustomers: customers.filter((customer) => customer.segment === "REGULAR").length,
    loyalCustomers: customers.filter((customer) => customer.segment === "LOYAL").length,
    highSpenderCount: customers.filter((customer) => customer.isHighSpender).length,
    totalRevenue: customers.reduce((sum, customer) => sum + customer.totalRevenue, 0),
    unidentifiedOrders: unidentifiedOrderIds.size
  };
  return { summary, segmentBreakdown, highSpenderThreshold, customers };
};
var CustomerSegmentReportService = {
  getCustomerSegmentOverview
};

// src/app/module/customer-segment-report/customerSegmentReport.controller.ts
var getOverview2 = catchAsync(async (req, res) => {
  const { startDate, endDate } = req.query;
  const result = await CustomerSegmentReportService.getCustomerSegmentOverview({
    startDate,
    endDate
  });
  sendResponse(res, {
    httpStatusCode: status50.OK,
    success: true,
    message: "Customer segment report overview fetched successfully",
    data: result
  });
});
var CustomerSegmentReportController = {
  getOverview: getOverview2
};

// src/app/module/customer-segment-report/customerSegmentReport.route.ts
var router29 = Router22();
router29.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router29.get("/overview", CustomerSegmentReportController.getOverview);
var CustomerSegmentReportRoutes = router29;

// src/app/module/notification/notification.route.ts
import { Router as Router23 } from "express";

// src/app/module/notification/notification.controller.ts
import status51 from "http-status";
var getMyNotifications2 = catchAsync(async (req, res) => {
  const limit = req.query.limit ? Number(req.query.limit) : 10;
  const result = await NotificationService.getMyNotifications(
    req.user.userId,
    limit
  );
  sendResponse(res, {
    httpStatusCode: status51.OK,
    success: true,
    message: "Notifications fetched successfully",
    data: result
  });
});
var markAsRead2 = catchAsync(async (req, res) => {
  await NotificationService.markAsRead(
    req.user.userId,
    req.params.id
  );
  sendResponse(res, {
    httpStatusCode: status51.OK,
    success: true,
    message: "Notification marked as read",
    data: null
  });
});
var markAllAsRead2 = catchAsync(async (req, res) => {
  await NotificationService.markAllAsRead(req.user.userId);
  sendResponse(res, {
    httpStatusCode: status51.OK,
    success: true,
    message: "All notifications marked as read",
    data: null
  });
});
var NotificationController = {
  getMyNotifications: getMyNotifications2,
  markAsRead: markAsRead2,
  markAllAsRead: markAllAsRead2
};

// src/app/module/notification/notification.route.ts
var router30 = Router23();
router30.get(
  "/",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  NotificationController.getMyNotifications
);
router30.patch(
  "/read-all",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  NotificationController.markAllAsRead
);
router30.patch(
  "/:id/read",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  NotificationController.markAsRead
);
var NotificationRoutes = router30;

// src/app/module/abandoned-checkout/abandonedCheckout.route.ts
import { Router as Router24 } from "express";

// src/app/module/abandoned-checkout/abandonedCheckout.controller.ts
import status52 from "http-status";
var trackCheckout2 = catchAsync(async (req, res) => {
  const result = await AbandonedCheckoutService.trackCheckout(req.body);
  sendResponse(res, {
    httpStatusCode: status52.OK,
    success: true,
    message: "Checkout progress saved",
    data: result
  });
});
var getAbandonedCheckouts2 = catchAsync(async (req, res) => {
  const { data, meta } = await AbandonedCheckoutService.getAbandonedCheckouts(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status52.OK,
    success: true,
    message: "Abandoned checkouts fetched successfully",
    data,
    meta
  });
});
var deleteAbandonedCheckout2 = catchAsync(async (req, res) => {
  const result = await AbandonedCheckoutService.deleteAbandonedCheckout(
    req.params.id
  );
  sendResponse(res, {
    httpStatusCode: status52.OK,
    success: true,
    message: "Abandoned checkout deleted successfully",
    data: result
  });
});
var AbandonedCheckoutController = {
  trackCheckout: trackCheckout2,
  getAbandonedCheckouts: getAbandonedCheckouts2,
  deleteAbandonedCheckout: deleteAbandonedCheckout2
};

// src/app/module/abandoned-checkout/abandonedCheckout.validation.ts
import z19 from "zod";
var abandonedCheckoutItemZodSchema = z19.object({
  productId: z19.string(),
  productVariantId: z19.string().nullable().optional(),
  name: z19.string(),
  variantName: z19.string().nullable().optional(),
  image: z19.string().nullable().optional(),
  quantity: z19.number().int().positive(),
  price: z19.number()
});
var trackAbandonedCheckoutZodSchema = z19.object({
  sessionToken: z19.string().min(1, "Session token is required"),
  source: z19.enum(["STOREFRONT", "LANDING_PAGE"]).optional(),
  landingPageSlug: z19.string().nullable().optional(),
  fullName: z19.string().nullable().optional(),
  phone: z19.string().nullable().optional(),
  address: z19.string().nullable().optional(),
  district: z19.string().nullable().optional(),
  notes: z19.string().nullable().optional(),
  items: z19.array(abandonedCheckoutItemZodSchema).optional(),
  subtotal: z19.number().optional(),
  shippingFee: z19.number().optional(),
  discountAmount: z19.number().optional(),
  total: z19.number().optional()
});

// src/app/module/abandoned-checkout/abandonedCheckout.route.ts
var router31 = Router24();
router31.post(
  "/track",
  abandonedCheckoutTrackRateLimiter,
  validateRequest(trackAbandonedCheckoutZodSchema),
  AbandonedCheckoutController.trackCheckout
);
router31.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AbandonedCheckoutController.getAbandonedCheckouts
);
router31.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AbandonedCheckoutController.deleteAbandonedCheckout
);
var AbandonedCheckoutRoutes = router31;

// src/app/module/courier-setting/courierSetting.route.ts
import { Router as Router25 } from "express";

// src/app/module/courier-setting/courierSetting.controller.ts
import status53 from "http-status";
var getCourierSettings2 = catchAsync(async (req, res) => {
  const result = await CourierSettingService.getCourierSettings();
  sendResponse(res, {
    httpStatusCode: status53.OK,
    success: true,
    message: "Courier settings retrieved successfully",
    data: result
  });
});
var updatePathaoSettings2 = catchAsync(async (req, res) => {
  const result = await CourierSettingService.updatePathaoSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status53.OK,
    success: true,
    message: "Pathao settings updated successfully",
    data: result
  });
});
var updateSteadfastSettings2 = catchAsync(async (req, res) => {
  const result = await CourierSettingService.updateSteadfastSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status53.OK,
    success: true,
    message: "Steadfast settings updated successfully",
    data: result
  });
});
var updateRedxSettings2 = catchAsync(async (req, res) => {
  const result = await CourierSettingService.updateRedxSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status53.OK,
    success: true,
    message: "RedX settings updated successfully",
    data: result
  });
});
var CourierSettingController = {
  updateRedxSettings: updateRedxSettings2,
  getCourierSettings: getCourierSettings2,
  updatePathaoSettings: updatePathaoSettings2,
  updateSteadfastSettings: updateSteadfastSettings2
};

// src/app/module/courier-setting/courierSetting.validation.ts
import { z as z20 } from "zod";
var updatePathaoSettingZodSchema = z20.object({
  pathaoEnabled: z20.boolean().optional(),
  pathaoBaseUrl: z20.string().optional().nullable(),
  pathaoClientId: z20.string().optional().nullable(),
  pathaoClientSecret: z20.string().optional().nullable(),
  pathaoUsername: z20.string().optional().nullable(),
  pathaoPassword: z20.string().optional().nullable(),
  pathaoStoreId: z20.string().optional().nullable()
});
var updateSteadfastSettingZodSchema = z20.object({
  steadfastEnabled: z20.boolean().optional(),
  steadfastApiKey: z20.string().optional().nullable(),
  steadfastSecretKey: z20.string().optional().nullable(),
  steadfastWebhookAuthToken: z20.string().optional().nullable()
});
var updateRedxSettingZodSchema = z20.object({
  redxEnabled: z20.boolean().optional(),
  redxMode: z20.enum(["SANDBOX", "LIVE"]).optional(),
  redxAccessToken: z20.string().trim().optional().nullable(),
  redxPickupStoreId: z20.string().trim().optional().nullable(),
  redxWebhookToken: z20.string().trim().optional().nullable()
});

// src/app/module/courier-setting/courierSetting.route.ts
var router32 = Router25();
router32.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router32.get("/", CourierSettingController.getCourierSettings);
router32.patch(
  "/pathao",
  validateRequest(updatePathaoSettingZodSchema),
  CourierSettingController.updatePathaoSettings
);
router32.patch(
  "/steadfast",
  validateRequest(updateSteadfastSettingZodSchema),
  CourierSettingController.updateSteadfastSettings
);
router32.patch(
  "/redx",
  validateRequest(updateRedxSettingZodSchema),
  CourierSettingController.updateRedxSettings
);
var CourierSettingRoutes = router32;

// src/app/module/courier-webhook/courierWebhook.route.ts
import { Router as Router26 } from "express";

// src/app/module/courier-webhook/courierWebhook.service.ts
import status54 from "http-status";
var DELIVERY_STATUS_TO_ORDER_STATUS = {
  delivered: OrderStatus.DELIVERED,
  cancelled: OrderStatus.CANCELLED
};
var processSteadfastWebhook = async (payload, authHeader) => {
  const settings = await CourierSettingService.getCourierSettings();
  if (settings.steadfastWebhookAuthToken) {
    const expected = `Bearer ${settings.steadfastWebhookAuthToken}`;
    if (authHeader !== expected) {
      throw new AppError_default(status54.UNAUTHORIZED, "Invalid webhook auth token");
    }
  }
  const order = await prisma2.order.findFirst({
    where: {
      OR: [
        ...payload.invoice ? [{ orderNumber: payload.invoice }] : [],
        ...payload.consignment_id ? [{ courierConsignmentId: String(payload.consignment_id) }] : []
      ]
    }
  });
  if (!order) {
    throw new AppError_default(status54.NOT_FOUND, "Order not found for this webhook");
  }
  if (payload.notification_type === "delivery_status" && payload.status) {
    await prisma2.order.update({
      where: { id: order.id },
      data: { courierStatus: payload.status }
    });
    const mappedStatus = DELIVERY_STATUS_TO_ORDER_STATUS[payload.status.toLowerCase()];
    if (mappedStatus && order.orderStatus !== mappedStatus) {
      await OrderService.updateOrderStatus(order.id, mappedStatus);
    }
  } else if (payload.notification_type === "tracking_update" && payload.tracking_message) {
    await prisma2.order.update({
      where: { id: order.id },
      data: { courierStatus: payload.tracking_message }
    });
  }
  return { received: true };
};
var REDX_STATUS_TO_ORDER_STATUS = {
  delivered: OrderStatus.DELIVERED
};
var processRedxWebhook = async (payload, token) => {
  const settings = await CourierSettingService.getCourierSettings();
  if (settings.redxWebhookToken && token !== settings.redxWebhookToken) {
    throw new AppError_default(status54.UNAUTHORIZED, "Invalid webhook token");
  }
  const trackingId = payload.tracking_number || payload.tracking_id;
  const invoice = payload.invoice_number || payload.merchant_invoice_id;
  const order = await prisma2.order.findFirst({
    where: {
      courierProvider: "REDX",
      OR: [
        ...trackingId ? [{ courierTrackingCode: trackingId }, { courierConsignmentId: trackingId }] : [],
        ...invoice ? [{ orderNumber: invoice }] : []
      ]
    }
  });
  if (!order) throw new AppError_default(status54.NOT_FOUND, "Order not found for this webhook");
  if (payload.status) {
    await prisma2.order.update({
      where: { id: order.id },
      data: { courierStatus: payload.status }
    });
    const mapped = REDX_STATUS_TO_ORDER_STATUS[payload.status.toLowerCase()];
    if (mapped && order.orderStatus !== mapped) {
      await OrderService.updateOrderStatus(order.id, mapped);
    }
  }
  return { received: true };
};
var CourierWebhookService = {
  processSteadfastWebhook,
  processRedxWebhook
};

// src/app/module/courier-webhook/courierWebhook.controller.ts
var handleSteadfastWebhook = async (req, res) => {
  try {
    await CourierWebhookService.processSteadfastWebhook(
      req.body,
      req.headers.authorization
    );
    res.status(200).json({
      status: "success",
      message: "Webhook received successfully."
    });
  } catch (error) {
    const statusCode = error instanceof AppError_default ? error.statusCode : 500;
    const message = error instanceof AppError_default ? error.message : "Failed to process webhook";
    res.status(statusCode).json({ status: "error", message });
  }
};
var handleRedxWebhook = async (req, res) => {
  try {
    await CourierWebhookService.processRedxWebhook(req.body, req.query.token);
    res.status(200).json({ success: true, message: "Webhook received" });
  } catch (error) {
    const statusCode = error instanceof AppError_default ? error.statusCode : 500;
    const message = error instanceof AppError_default ? error.message : "Failed to process webhook";
    res.status(statusCode).json({ success: false, message });
  }
};
var CourierWebhookController = {
  handleSteadfastWebhook,
  handleRedxWebhook
};

// src/app/module/courier-webhook/courierWebhook.route.ts
var router33 = Router26();
router33.post("/steadfast", CourierWebhookController.handleSteadfastWebhook);
router33.post("/redx", CourierWebhookController.handleRedxWebhook);
var CourierWebhookRoutes = router33;

// src/app/module/payment-setting/paymentSetting.route.ts
import { Router as Router27 } from "express";

// src/app/module/payment-setting/paymentSetting.controller.ts
import status55 from "http-status";

// src/app/module/payment-setting/paymentSetting.service.ts
var getPaymentSettings = async () => {
  let settings = await prisma2.paymentSetting.findUnique({
    where: { id: "default" }
  });
  if (!settings) {
    settings = await prisma2.paymentSetting.create({
      data: { id: "default" }
    });
  }
  return settings;
};
var updateCodSettings = async (payload) => {
  await getPaymentSettings();
  return prisma2.paymentSetting.update({
    where: { id: "default" },
    data: payload
  });
};
var updateSslcommerzSettings = async (payload) => {
  await getPaymentSettings();
  return prisma2.paymentSetting.update({
    where: { id: "default" },
    data: payload
  });
};
var updateBkashSettings = async (payload) => {
  await getPaymentSettings();
  return prisma2.paymentSetting.update({
    where: { id: "default" },
    data: payload
  });
};
var getPublicPaymentSettings = async () => {
  const settings = await getPaymentSettings();
  return {
    codEnabled: true,
    sslcommerzEnabled: settings.sslcommerzEnabled,
    bkashEnabled: settings.bkashEnabled
  };
};
var PAYMENT = ["payment-settings", "payment-methods"];
var PaymentSettingService = {
  getPaymentSettings: cached("payment-settings", 5 * MINUTE, getPaymentSettings),
  getPublicPaymentSettings: cached("payment-methods", 5 * MINUTE, getPublicPaymentSettings),
  updateBkashSettings: invalidates(PAYMENT, updateBkashSettings),
  updateCodSettings: invalidates(PAYMENT, updateCodSettings),
  updateSslcommerzSettings: invalidates(PAYMENT, updateSslcommerzSettings)
};

// src/app/module/payment-setting/paymentSetting.controller.ts
var getPublicPaymentSettings2 = catchAsync(async (req, res) => {
  const result = await PaymentSettingService.getPublicPaymentSettings();
  sendResponse(res, {
    httpStatusCode: status55.OK,
    success: true,
    message: "Payment methods retrieved successfully",
    data: result
  });
});
var getPaymentSettings2 = catchAsync(async (req, res) => {
  const result = await PaymentSettingService.getPaymentSettings();
  sendResponse(res, {
    httpStatusCode: status55.OK,
    success: true,
    message: "Payment settings retrieved successfully",
    data: result
  });
});
var updateCodSettings2 = catchAsync(async (req, res) => {
  const result = await PaymentSettingService.updateCodSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status55.OK,
    success: true,
    message: "COD settings updated successfully",
    data: result
  });
});
var updateSslcommerzSettings2 = catchAsync(async (req, res) => {
  const result = await PaymentSettingService.updateSslcommerzSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status55.OK,
    success: true,
    message: "SSLCommerz settings updated successfully",
    data: result
  });
});
var updateBkashSettings2 = catchAsync(async (req, res) => {
  const result = await PaymentSettingService.updateBkashSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status55.OK,
    success: true,
    message: "bKash settings updated successfully",
    data: result
  });
});
var PaymentSettingController = {
  getPublicPaymentSettings: getPublicPaymentSettings2,
  getPaymentSettings: getPaymentSettings2,
  updateBkashSettings: updateBkashSettings2,
  updateCodSettings: updateCodSettings2,
  updateSslcommerzSettings: updateSslcommerzSettings2
};

// src/app/module/payment-setting/paymentSetting.validation.ts
import { z as z21 } from "zod";
var updateCodSettingZodSchema = z21.object({
  codEnabled: z21.boolean().optional()
});
var updateSslcommerzSettingZodSchema = z21.object({
  sslcommerzEnabled: z21.boolean().optional(),
  sslcommerzMode: z21.enum(["SANDBOX", "LIVE"]).optional(),
  sslcommerzStoreId: z21.string().optional().nullable(),
  sslcommerzStorePassword: z21.string().optional().nullable()
});
var updateBkashSettingZodSchema = z21.object({
  bkashEnabled: z21.boolean().optional(),
  bkashMode: z21.enum(["SANDBOX", "LIVE"]).optional(),
  bkashAppKey: z21.string().trim().optional().nullable(),
  bkashAppSecret: z21.string().trim().optional().nullable(),
  bkashUsername: z21.string().trim().optional().nullable(),
  bkashPassword: z21.string().trim().optional().nullable()
});

// src/app/module/payment-setting/paymentSetting.route.ts
var router34 = Router27();
router34.get("/", PaymentSettingController.getPublicPaymentSettings);
router34.get(
  "/admin",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  PaymentSettingController.getPaymentSettings
);
router34.patch(
  "/cod",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateCodSettingZodSchema),
  PaymentSettingController.updateCodSettings
);
router34.patch(
  "/sslcommerz",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateSslcommerzSettingZodSchema),
  PaymentSettingController.updateSslcommerzSettings
);
router34.patch(
  "/bkash",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateBkashSettingZodSchema),
  PaymentSettingController.updateBkashSettings
);
var PaymentSettingRoutes = router34;

// src/app/module/payment/payment.route.ts
import { Router as Router28 } from "express";

// src/app/module/payment/payment.controller.ts
import status59 from "http-status";

// src/app/module/payment/payment.service.ts
import status58 from "http-status";

// src/app/module/payment/sslcommerz.service.ts
import status56 from "http-status";
var getConfig2 = async () => {
  const settings = await PaymentSettingService.getPaymentSettings();
  if (!settings.sslcommerzEnabled) {
    throw new AppError_default(status56.BAD_REQUEST, "SSLCommerz is not enabled");
  }
  if (!settings.sslcommerzStoreId || !settings.sslcommerzStorePassword) {
    throw new AppError_default(
      status56.BAD_REQUEST,
      "SSLCommerz Store ID / Store Password are not configured in Payment Settings"
    );
  }
  const baseUrl = settings.sslcommerzMode === "LIVE" ? "https://securepay.sslcommerz.com" : "https://sandbox.sslcommerz.com";
  return {
    storeId: settings.sslcommerzStoreId,
    storePassword: settings.sslcommerzStorePassword,
    baseUrl
  };
};
var backendApiBaseUrl = () => `${process.env.BACKEND_URL || `http://localhost:${envVars.PORT}`}/api/v1`;
var initiateSession = async (order) => {
  const { storeId, storePassword, baseUrl } = await getConfig2();
  const apiBase = backendApiBaseUrl();
  const body = new URLSearchParams({
    store_id: storeId,
    store_passwd: storePassword,
    total_amount: String(order.totalAmount),
    currency: "BDT",
    tran_id: order.orderNumber,
    product_category: "General",
    success_url: `${apiBase}/payments/sslcommerz/success`,
    fail_url: `${apiBase}/payments/sslcommerz/fail`,
    cancel_url: `${apiBase}/payments/sslcommerz/cancel`,
    ipn_url: `${apiBase}/payments/sslcommerz/ipn`,
    cus_name: order.fullName,
    cus_email: "customer@example.com",
    cus_phone: order.phone,
    cus_add1: order.address,
    cus_city: order.district,
    cus_country: "Bangladesh",
    product_name: `Order ${order.orderNumber}`,
    product_profile: "physical-goods",
    shipping_method: "NO"
  });
  const res = await fetch(`${baseUrl}/gwprocess/v4/api.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString()
  });
  const data = await res.json();
  if (data.status !== "SUCCESS" || !data.GatewayPageURL) {
    throw new AppError_default(
      status56.BAD_GATEWAY,
      `SSLCommerz session init failed: ${data.failedreason || "unknown error"}`
    );
  }
  return data.GatewayPageURL;
};
var validateTransaction = async (valId) => {
  const { storeId, storePassword, baseUrl } = await getConfig2();
  const params = new URLSearchParams({
    val_id: valId,
    store_id: storeId,
    store_passwd: storePassword,
    format: "json"
  });
  const res = await fetch(
    `${baseUrl}/validator/api/validationserverAPI.php?${params.toString()}`
  );
  const data = await res.json();
  return data;
};
var SslcommerzService = {
  initiateSession,
  validateTransaction
};

// src/app/module/payment/bkash.service.ts
import status57 from "http-status";
var BASE_URLS2 = {
  SANDBOX: "https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout",
  LIVE: "https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout"
};
var SUCCESS = "0000";
var getConfig3 = async () => {
  const settings = await PaymentSettingService.getPaymentSettings();
  if (!settings.bkashEnabled) {
    throw new AppError_default(status57.BAD_REQUEST, "bKash payment is not enabled");
  }
  const { bkashAppKey, bkashAppSecret, bkashUsername, bkashPassword } = settings;
  if (!bkashAppKey || !bkashAppSecret || !bkashUsername || !bkashPassword) {
    throw new AppError_default(
      status57.BAD_REQUEST,
      "bKash credentials are not configured in Payment Settings"
    );
  }
  return {
    baseUrl: settings.bkashMode === "LIVE" ? BASE_URLS2.LIVE : BASE_URLS2.SANDBOX,
    appKey: bkashAppKey,
    appSecret: bkashAppSecret,
    username: bkashUsername,
    password: bkashPassword
  };
};
var cachedToken2 = null;
var grantToken = async (config2) => {
  const key = `${config2.baseUrl}|${config2.appKey}|${config2.username}`;
  if (cachedToken2 && cachedToken2.key === key && cachedToken2.expiresAt > Date.now()) {
    return cachedToken2.token;
  }
  const res = await fetch(`${config2.baseUrl}/token/grant`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      username: config2.username,
      password: config2.password
    },
    body: JSON.stringify({ app_key: config2.appKey, app_secret: config2.appSecret })
  });
  const data = await res.json().catch(() => ({}));
  if (!data.id_token) {
    throw new AppError_default(
      status57.BAD_GATEWAY,
      `bKash authentication failed: ${data.statusMessage || data.msg || "check the bKash credentials"}`
    );
  }
  const lifetimeMs = Math.max(60, (data.expires_in ?? 3600) - 300) * 1e3;
  cachedToken2 = { key, token: data.id_token, expiresAt: Date.now() + lifetimeMs };
  return data.id_token;
};
var call = async (path5, body) => {
  const config2 = await getConfig3();
  const token = await grantToken(config2);
  const res = await fetch(`${config2.baseUrl}${path5}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
      "X-APP-Key": config2.appKey
    },
    body: JSON.stringify(body)
  });
  return await res.json().catch(() => ({}));
};
var createPayment = async (payload) => {
  const data = await call("/create", {
    mode: "0011",
    payerReference: payload.payerReference,
    callbackURL: payload.callbackURL,
    amount: payload.amount.toFixed(2),
    currency: "BDT",
    intent: "sale",
    merchantInvoiceNumber: payload.invoiceNumber
  });
  if (data.statusCode !== SUCCESS || !data.paymentID || !data.bkashURL) {
    throw new AppError_default(
      status57.BAD_GATEWAY,
      `bKash payment could not be started: ${data.statusMessage || data.errorMessage || "unknown error"}`
    );
  }
  return { paymentID: data.paymentID, bkashURL: data.bkashURL };
};
var executePayment = (paymentID) => call("/execute", { paymentID });
var queryPayment = (paymentID) => call("/payment/status", { paymentID });
var isCompleted = (result) => result.statusCode === SUCCESS && result.transactionStatus === "Completed";
var BkashService = {
  createPayment,
  executePayment,
  queryPayment,
  isCompleted
};

// src/app/module/payment/payment.service.ts
var initiateSslcommerzPayment = async (orderId, userId) => {
  const order = await prisma2.order.findUnique({ where: { id: orderId } });
  if (!order) throw new AppError_default(status58.NOT_FOUND, "Order not found");
  if (order.userId !== userId) {
    throw new AppError_default(status58.FORBIDDEN, "This order does not belong to you");
  }
  if (order.paymentStatus === PaymentStatus.PAID) {
    throw new AppError_default(status58.BAD_REQUEST, "This order has already been paid");
  }
  if (!order.orderNumber || !order.fullName || !order.phone || !order.address || !order.district) {
    throw new AppError_default(status58.BAD_REQUEST, "Order is missing required details for payment");
  }
  const settings = await PaymentSettingService.getPaymentSettings();
  if (!settings.sslcommerzEnabled) {
    throw new AppError_default(status58.BAD_REQUEST, "SSLCommerz is not enabled");
  }
  const gatewayPageURL = await SslcommerzService.initiateSession({
    orderNumber: order.orderNumber,
    totalAmount: order.totalAmount,
    fullName: order.fullName,
    phone: order.phone,
    address: order.address,
    district: order.district
  });
  return { gatewayPageURL, orderId: order.id };
};
var confirmSslcommerzPayment = async (tranId, valId) => {
  const order = await prisma2.order.findUnique({ where: { orderNumber: tranId } });
  if (!order) throw new AppError_default(status58.NOT_FOUND, "Order not found for this transaction");
  if (order.paymentStatus === PaymentStatus.PAID) {
    return order;
  }
  const validation = await SslcommerzService.validateTransaction(valId);
  const isValid = validation.status === "VALID" || validation.status === "VALIDATED";
  const amountMatches = Math.abs(Number(validation.amount) - order.totalAmount) < 1;
  if (!isValid || !amountMatches) {
    await OrderService.updatePaymentStatus(order.id, PaymentStatus.FAILED);
    throw new AppError_default(status58.BAD_REQUEST, "Payment could not be validated");
  }
  await prisma2.order.update({
    where: { id: order.id },
    data: { paymentMethod: "SSLCOMMERZ", paymentValId: valId }
  });
  await OrderService.updatePaymentStatus(order.id, PaymentStatus.PAID);
  return order;
};
var markSslcommerzPaymentFailed = async (tranId) => {
  const order = await prisma2.order.findUnique({ where: { orderNumber: tranId } });
  if (order && order.paymentStatus !== PaymentStatus.PAID) {
    await OrderService.updatePaymentStatus(order.id, PaymentStatus.FAILED);
  }
  return order;
};
var initiateBkashPayment = async (orderId, requester) => {
  const order = await prisma2.order.findUnique({ where: { id: orderId } });
  if (!order) throw new AppError_default(status58.NOT_FOUND, "Order not found");
  if ("guest" in requester) {
    if (order.orderType !== OrderType.LANDING_PAGE || order.userId) {
      throw new AppError_default(status58.FORBIDDEN, "This order can't be paid here");
    }
  } else if (order.userId !== requester.userId) {
    throw new AppError_default(status58.FORBIDDEN, "This order does not belong to you");
  }
  if (order.paymentStatus === PaymentStatus.PAID) {
    throw new AppError_default(status58.BAD_REQUEST, "This order has already been paid");
  }
  if (order.orderStatus === OrderStatus.CANCELLED) {
    throw new AppError_default(status58.BAD_REQUEST, "This order has been cancelled");
  }
  if (!order.orderNumber) {
    throw new AppError_default(status58.BAD_REQUEST, "Order is missing its order number");
  }
  const { paymentID, bkashURL } = await BkashService.createPayment({
    amount: order.totalAmount,
    invoiceNumber: `${order.orderNumber}-${Date.now().toString(36).toUpperCase()}`,
    payerReference: order.phone || order.orderNumber,
    callbackURL: `${backendApiBaseUrl()}/payments/bkash/callback`
  });
  await prisma2.order.update({
    where: { id: order.id },
    data: { paymentMethod: "BKASH", bkashPaymentId: paymentID }
  });
  return { bkashURL, orderId: order.id };
};
var handleBkashCallback = async (paymentID, callbackStatus) => {
  if (!paymentID) return { ok: false, reason: "failed" };
  const order = await prisma2.order.findUnique({ where: { bkashPaymentId: paymentID } });
  if (!order) return { ok: false, reason: "failed" };
  if (order.paymentStatus === PaymentStatus.PAID) return { ok: true, orderId: order.id };
  const fail = async (reason) => {
    await OrderService.updatePaymentStatus(order.id, PaymentStatus.FAILED);
    return { ok: false, orderId: order.id, orderType: order.orderType, reason };
  };
  if (callbackStatus !== "success") {
    return fail(callbackStatus === "cancel" ? "cancelled" : "failed");
  }
  let result = await BkashService.executePayment(paymentID).catch(() => null);
  if (!result || !BkashService.isCompleted(result)) {
    result = await BkashService.queryPayment(paymentID).catch(() => null);
  }
  const amountMatches = result?.amount !== void 0 && Math.abs(Number(result.amount) - order.totalAmount) < 1;
  if (!result || !BkashService.isCompleted(result) || !amountMatches) {
    return fail("failed");
  }
  await prisma2.order.update({
    where: { id: order.id },
    data: { paymentMethod: "BKASH", paymentValId: result.trxID ?? null }
  });
  await OrderService.updatePaymentStatus(order.id, PaymentStatus.PAID);
  return { ok: true, orderId: order.id };
};
var PaymentService = {
  initiateSslcommerzPayment,
  confirmSslcommerzPayment,
  markSslcommerzPaymentFailed,
  initiateBkashPayment,
  handleBkashCallback
};

// src/app/module/payment/payment.controller.ts
var initiateSslcommerzPayment2 = catchAsync(async (req, res) => {
  const result = await PaymentService.initiateSslcommerzPayment(
    req.body.orderId,
    req.user.userId
  );
  sendResponse(res, {
    httpStatusCode: status59.OK,
    success: true,
    message: "Payment session created successfully",
    data: result
  });
});
var getCallbackField = (req, field) => req.body?.[field] || req.query?.[field];
var handleSuccess = async (req, res) => {
  const tranId = getCallbackField(req, "tran_id");
  const valId = getCallbackField(req, "val_id");
  if (!tranId || !valId) {
    return res.redirect(303, `${envVars.FRONTEND_URL}/payment-failed`);
  }
  try {
    const order = await PaymentService.confirmSslcommerzPayment(tranId, valId);
    return res.redirect(303, `${envVars.FRONTEND_URL}/order-confirmation/${order.id}`);
  } catch {
    return res.redirect(
      303,
      `${envVars.FRONTEND_URL}/payment-failed?tran_id=${encodeURIComponent(tranId)}`
    );
  }
};
var handleFail = async (req, res) => {
  const tranId = getCallbackField(req, "tran_id");
  if (tranId) await PaymentService.markSslcommerzPaymentFailed(tranId);
  return res.redirect(
    303,
    `${envVars.FRONTEND_URL}/payment-failed${tranId ? `?tran_id=${encodeURIComponent(tranId)}` : ""}`
  );
};
var handleCancel = async (req, res) => {
  const tranId = getCallbackField(req, "tran_id");
  if (tranId) await PaymentService.markSslcommerzPaymentFailed(tranId);
  return res.redirect(
    303,
    `${envVars.FRONTEND_URL}/payment-failed${tranId ? `?tran_id=${encodeURIComponent(tranId)}&reason=cancelled` : "?reason=cancelled"}`
  );
};
var handleIpn = async (req, res) => {
  const tranId = getCallbackField(req, "tran_id");
  const valId = getCallbackField(req, "val_id");
  try {
    if (tranId && valId) {
      await PaymentService.confirmSslcommerzPayment(tranId, valId);
    }
    res.status(200).json({ status: "success", message: "IPN received" });
  } catch {
    res.status(200).json({ status: "success", message: "IPN received" });
  }
};
var initiateBkashPayment2 = catchAsync(async (req, res) => {
  const result = await PaymentService.initiateBkashPayment(req.body.orderId, {
    userId: req.user.userId
  });
  sendResponse(res, {
    httpStatusCode: status59.OK,
    success: true,
    message: "bKash payment created successfully",
    data: result
  });
});
var initiateBkashGuestPayment = catchAsync(async (req, res) => {
  const result = await PaymentService.initiateBkashPayment(req.body.orderId, {
    guest: true
  });
  sendResponse(res, {
    httpStatusCode: status59.OK,
    success: true,
    message: "bKash payment created successfully",
    data: result
  });
});
var handleBkashCallback2 = async (req, res) => {
  const result = await PaymentService.handleBkashCallback(
    getCallbackField(req, "paymentID"),
    getCallbackField(req, "status")
  ).catch(() => ({ ok: false, reason: "failed" }));
  if (result.ok) {
    return res.redirect(303, `${envVars.FRONTEND_URL}/order-confirmation/${result.orderId}`);
  }
  const params = new URLSearchParams({ method: "bkash" });
  if (result.reason === "cancelled") params.set("reason", "cancelled");
  if ("orderId" in result && result.orderId) {
    params.set("order", result.orderId);
    if (result.orderType === "LANDING_PAGE") params.set("guest", "1");
  }
  return res.redirect(303, `${envVars.FRONTEND_URL}/payment-failed?${params.toString()}`);
};
var PaymentController = {
  initiateSslcommerzPayment: initiateSslcommerzPayment2,
  handleSuccess,
  handleFail,
  handleCancel,
  handleIpn,
  initiateBkashPayment: initiateBkashPayment2,
  initiateBkashGuestPayment,
  handleBkashCallback: handleBkashCallback2
};

// src/app/module/payment/payment.route.ts
var router35 = Router28();
router35.post(
  "/sslcommerz/initiate",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  PaymentController.initiateSslcommerzPayment
);
router35.route("/sslcommerz/success").get(PaymentController.handleSuccess).post(PaymentController.handleSuccess);
router35.route("/sslcommerz/fail").get(PaymentController.handleFail).post(PaymentController.handleFail);
router35.route("/sslcommerz/cancel").get(PaymentController.handleCancel).post(PaymentController.handleCancel);
router35.post("/sslcommerz/ipn", PaymentController.handleIpn);
router35.post(
  "/bkash/initiate",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  PaymentController.initiateBkashPayment
);
router35.post(
  "/bkash/initiate-guest",
  guestOrderRateLimiter,
  PaymentController.initiateBkashGuestPayment
);
router35.get("/bkash/callback", PaymentController.handleBkashCallback);
var PaymentRoutes = router35;

// src/app/module/sms-setting/smsSetting.route.ts
import { Router as Router29 } from "express";

// src/app/module/sms-setting/smsSetting.controller.ts
import status60 from "http-status";
var getSmsSettings2 = catchAsync(async (req, res) => {
  const result = await SmsSettingService.getSmsSettings();
  sendResponse(res, {
    httpStatusCode: status60.OK,
    success: true,
    message: "SMS settings retrieved successfully",
    data: result
  });
});
var updateSmsSettings2 = catchAsync(async (req, res) => {
  const result = await SmsSettingService.updateSmsSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status60.OK,
    success: true,
    message: "SMS settings updated successfully",
    data: result
  });
});
var SmsSettingController = {
  getSmsSettings: getSmsSettings2,
  updateSmsSettings: updateSmsSettings2
};

// src/app/module/sms-setting/smsSetting.validation.ts
import { z as z22 } from "zod";
var updateSmsSettingZodSchema = z22.object({
  enabled: z22.boolean().optional(),
  apiKey: z22.string().optional().nullable(),
  senderId: z22.string().optional().nullable()
});

// src/app/module/sms-setting/smsSetting.route.ts
var router36 = Router29();
router36.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router36.get("/", SmsSettingController.getSmsSettings);
router36.patch(
  "/",
  validateRequest(updateSmsSettingZodSchema),
  SmsSettingController.updateSmsSettings
);
var SmsSettingRoutes = router36;

// src/app/module/page-content/pageContent.route.ts
import express8 from "express";

// src/app/module/page-content/pageContent.service.ts
var defaultTitles = {
  "about-us": "About Us",
  "terms-and-conditions": "Terms and Conditions",
  "privacy-policy": "Privacy Policy",
  "refund-policy": "Refund Policy"
};
var titleCaseFromSlug = (slug) => slug.split("-").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
var pageContentSelect = {
  slug: true,
  title: true,
  content: true,
  updatedAt: true
};
var getPageContent = async (slug) => {
  let page = await prisma2.pageContent.findUnique({
    where: { slug },
    select: pageContentSelect
  });
  if (!page) {
    page = await prisma2.pageContent.create({
      data: {
        slug,
        title: defaultTitles[slug] ?? titleCaseFromSlug(slug),
        content: ""
      },
      select: pageContentSelect
    });
  }
  return page;
};
var upsertPageContent = async (slug, payload) => {
  const page = await prisma2.pageContent.upsert({
    where: { slug },
    update: payload,
    create: { slug, ...payload },
    select: pageContentSelect
  });
  return page;
};
var PageContentService = {
  getPageContent,
  upsertPageContent
};

// src/app/module/page-content/pageContent.controller.ts
var getPageContent2 = catchAsync(async (req, res) => {
  const result = await PageContentService.getPageContent(
    req.params.slug
  );
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Page content retrieved successfully",
    data: result
  });
});
var updatePageContent = catchAsync(async (req, res) => {
  const { title, content } = req.body;
  const result = await PageContentService.upsertPageContent(
    req.params.slug,
    { title, content }
  );
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Page content updated successfully",
    data: result
  });
});
var PageContentController = {
  getPageContent: getPageContent2,
  updatePageContent
};

// src/app/module/page-content/pageContent.validation.ts
import z23 from "zod";
var updatePageContentZodSchema = z23.object({
  title: z23.string().min(1, "title is required"),
  content: z23.string()
});

// src/app/module/page-content/pageContent.route.ts
var router37 = express8.Router();
router37.get("/:slug", PageContentController.getPageContent);
router37.put(
  "/:slug",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updatePageContentZodSchema),
  PageContentController.updatePageContent
);
var PageContentRoutes = router37;

// src/app/module/faq/faq.route.ts
import express9 from "express";

// src/app/module/faq/faq.service.ts
var faqSelect = {
  id: true,
  question: true,
  answer: true,
  order: true,
  isActive: true
};
var getFaqs = async () => {
  const faqs = await prisma2.faq.findMany({
    orderBy: { order: "asc" },
    select: faqSelect
  });
  return faqs;
};
var getPublicFaqs = async () => {
  const faqs = await prisma2.faq.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
    select: faqSelect
  });
  return faqs;
};
var replaceFaqs = async (faqs) => {
  await prisma2.$transaction([
    prisma2.faq.deleteMany({}),
    prisma2.faq.createMany({
      data: faqs.map((faq, index) => ({
        question: faq.question,
        answer: faq.answer,
        isActive: faq.isActive,
        order: index
      }))
    })
  ]);
  return getFaqs();
};
var FaqService = {
  getFaqs,
  getPublicFaqs: cached("faqs", 5 * MINUTE, getPublicFaqs),
  replaceFaqs: invalidates(["faqs"], replaceFaqs)
};

// src/app/module/faq/faq.controller.ts
var getFaqs2 = catchAsync(async (req, res) => {
  const result = await FaqService.getFaqs();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Faqs retrieved successfully",
    data: result
  });
});
var getPublicFaqs2 = catchAsync(async (req, res) => {
  const result = await FaqService.getPublicFaqs();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Faqs retrieved successfully",
    data: result
  });
});
var updateFaqs = catchAsync(async (req, res) => {
  const { faqs } = req.body;
  const result = await FaqService.replaceFaqs(faqs);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Faqs updated successfully",
    data: result
  });
});
var FaqController = {
  getFaqs: getFaqs2,
  getPublicFaqs: getPublicFaqs2,
  updateFaqs
};

// src/app/module/faq/faq.validation.ts
import z24 from "zod";
var faqItemZodSchema = z24.object({
  question: z24.string().min(1, "question is required"),
  answer: z24.string().min(1, "answer is required"),
  isActive: z24.boolean()
});
var updateFaqsZodSchema = z24.object({
  faqs: z24.array(faqItemZodSchema)
});

// src/app/module/faq/faq.route.ts
var router38 = express9.Router();
router38.get("/public", FaqController.getPublicFaqs);
router38.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  FaqController.getFaqs
);
router38.put(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateFaqsZodSchema),
  FaqController.updateFaqs
);
var FaqRoutes = router38;

// src/app/module/flash-sale/flashSale.route.ts
import express10 from "express";

// src/app/module/flash-sale/flashSale.service.ts
var adminProductSelect = {
  id: true,
  name: true,
  slug: true,
  images: true,
  sellPrice: true,
  regularPrice: true,
  status: true
};
var productInclude2 = {
  category: true,
  shop: true,
  variants: true
};
var ensureFlashSale = async () => {
  let flashSale = await prisma2.flashSale.findUnique({
    where: { id: "default" }
  });
  if (!flashSale) {
    flashSale = await prisma2.flashSale.create({
      data: { id: "default" }
    });
  }
  return flashSale;
};
var getFlashSale = async () => {
  await ensureFlashSale();
  const flashSale = await prisma2.flashSale.findUniqueOrThrow({
    where: { id: "default" },
    include: {
      products: {
        orderBy: { order: "asc" },
        include: { product: { select: adminProductSelect } }
      }
    }
  });
  return {
    isActive: flashSale.isActive,
    startTime: flashSale.startTime,
    endTime: flashSale.endTime,
    products: flashSale.products.map((entry) => ({
      productId: entry.productId,
      order: entry.order,
      product: entry.product
    }))
  };
};
var replaceFlashSale = async (payload) => {
  const startTime = payload.startTime ? new Date(payload.startTime) : null;
  const endTime = payload.endTime ? new Date(payload.endTime) : null;
  await prisma2.$transaction([
    prisma2.flashSale.upsert({
      where: { id: "default" },
      update: {
        isActive: payload.isActive,
        startTime,
        endTime
      },
      create: {
        id: "default",
        isActive: payload.isActive,
        startTime,
        endTime
      }
    }),
    prisma2.flashSaleProduct.deleteMany({
      where: { flashSaleId: "default" }
    }),
    prisma2.flashSaleProduct.createMany({
      data: payload.productIds.map((productId, index) => ({
        flashSaleId: "default",
        productId,
        order: index
      }))
    })
  ]);
  return getFlashSale();
};
var getPublicFlashSale = async () => {
  const flashSale = await prisma2.flashSale.findUnique({
    where: { id: "default" }
  });
  const startTime = flashSale?.startTime ?? null;
  const endTime = flashSale?.endTime ?? null;
  const now = /* @__PURE__ */ new Date();
  const isVisible = Boolean(
    flashSale?.isActive && startTime && endTime && now >= startTime && now <= endTime
  );
  if (!isVisible) {
    return {
      isVisible: false,
      startTime,
      endTime,
      products: []
    };
  }
  const entries = await prisma2.flashSaleProduct.findMany({
    where: { flashSaleId: "default" },
    orderBy: { order: "asc" }
  });
  const productIds = entries.map((entry) => entry.productId);
  const products = productIds.length ? await prisma2.product.findMany({
    where: { id: { in: productIds }, status: ProductStatus.ACTIVE },
    include: productInclude2
  }) : [];
  const productMap = new Map(products.map((product) => [product.id, product]));
  const orderedProducts = productIds.map((id) => productMap.get(id)).filter((product) => Boolean(product));
  return {
    isVisible: true,
    startTime,
    endTime,
    products: orderedProducts
  };
};
var FlashSaleService = {
  getFlashSale,
  replaceFlashSale: invalidates(["flash-sale"], replaceFlashSale),
  getPublicFlashSale: cached("flash-sale", 30 * 1e3, getPublicFlashSale)
};

// src/app/module/flash-sale/flashSale.controller.ts
var getFlashSale2 = catchAsync(async (req, res) => {
  const result = await FlashSaleService.getFlashSale();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Flash sale retrieved successfully",
    data: result
  });
});
var updateFlashSale = catchAsync(async (req, res) => {
  const result = await FlashSaleService.replaceFlashSale(req.body);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Flash sale updated successfully",
    data: result
  });
});
var getPublicFlashSale2 = catchAsync(async (req, res) => {
  const result = await FlashSaleService.getPublicFlashSale();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Flash sale retrieved successfully",
    data: result
  });
});
var FlashSaleController = {
  getFlashSale: getFlashSale2,
  updateFlashSale,
  getPublicFlashSale: getPublicFlashSale2
};

// src/app/module/flash-sale/flashSale.validation.ts
import z25 from "zod";
var updateFlashSaleZodSchema = z25.object({
  isActive: z25.boolean(),
  startTime: z25.string().datetime({ offset: true }).nullable(),
  endTime: z25.string().datetime({ offset: true }).nullable(),
  productIds: z25.array(z25.string())
});

// src/app/module/flash-sale/flashSale.route.ts
var router39 = express10.Router();
router39.get("/public", FlashSaleController.getPublicFlashSale);
router39.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  FlashSaleController.getFlashSale
);
router39.put(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateFlashSaleZodSchema),
  FlashSaleController.updateFlashSale
);
var FlashSaleRoutes = router39;

// src/app/module/blog/blog.route.ts
import { Router as Router30 } from "express";

// src/app/module/blog/blog.controller.ts
import status62 from "http-status";

// src/app/module/blog/blog.service.ts
import status61 from "http-status";
var createBlog = async (payload) => {
  const slug = await generateUniqueSlug(prisma2, payload.title, "blog");
  const blog = await prisma2.blog.create({
    data: { ...payload, slug }
  });
  return blog;
};
var getAllBlogs = async (queryParams) => {
  const result = await new QueryBuilder(prisma2.blog, queryParams, {
    searchableFields: ["title"]
  }).search().filter().where({ isPublished: true }).sort().paginate().execute();
  return result;
};
var getAllBlogsAdmin = async (queryParams) => {
  const result = await new QueryBuilder(prisma2.blog, queryParams, {
    searchableFields: ["title"]
  }).search().filter().sort().paginate().execute();
  return result;
};
var getBlogById = async (id) => {
  const blog = await prisma2.blog.findUnique({ where: { id } });
  if (!blog) {
    throw new AppError_default(status61.NOT_FOUND, "Blog not found");
  }
  return blog;
};
var getBlogBySlug = async (slug) => {
  const blog = await prisma2.blog.findUnique({ where: { slug } });
  if (!blog || !blog.isPublished) {
    throw new AppError_default(status61.NOT_FOUND, "Blog not found");
  }
  return blog;
};
var updateBlog = async (id, payload) => {
  const existing = await prisma2.blog.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError_default(status61.NOT_FOUND, "Blog not found");
  }
  let slug;
  if (payload.title && payload.title !== existing.title) {
    slug = await generateUniqueSlug(prisma2, payload.title, "blog", id);
  }
  const { removeCoverImage, ...rest } = payload;
  let coverImage = rest.coverImage;
  if (rest.coverImage && existing.coverImage) {
    await deleteFileFromCloudinary(existing.coverImage);
  } else if (removeCoverImage && existing.coverImage && !rest.coverImage) {
    await deleteFileFromCloudinary(existing.coverImage);
    coverImage = null;
  }
  const updated = await prisma2.blog.update({
    where: { id },
    data: { ...rest, coverImage, ...slug && { slug } }
  });
  return updated;
};
var deleteBlog = async (id) => {
  const existing = await prisma2.blog.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError_default(status61.NOT_FOUND, "Blog not found");
  }
  await prisma2.blog.delete({ where: { id } });
  if (existing.coverImage) {
    await deleteFileFromCloudinary(existing.coverImage);
  }
  return { message: "Blog deleted successfully" };
};
var BlogService = {
  createBlog,
  getAllBlogs,
  getAllBlogsAdmin,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog
};

// src/app/module/blog/blog.controller.ts
var createBlog2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.file) {
    payload.coverImage = req.file.path;
  }
  const result = await BlogService.createBlog(payload);
  sendResponse(res, {
    httpStatusCode: status62.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result
  });
});
var getAllBlogs2 = catchAsync(async (req, res) => {
  const { data, meta } = await BlogService.getAllBlogs(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status62.OK,
    success: true,
    message: "Blogs fetched successfully",
    data,
    meta
  });
});
var getAllBlogsAdmin2 = catchAsync(async (req, res) => {
  const { data, meta } = await BlogService.getAllBlogsAdmin(
    req.query
  );
  sendResponse(res, {
    httpStatusCode: status62.OK,
    success: true,
    message: "Blogs fetched successfully",
    data,
    meta
  });
});
var getBlogById2 = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status62.OK,
    success: true,
    message: "Blog fetched successfully",
    data: result
  });
});
var getBlogBySlug2 = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogBySlug(req.params.slug);
  sendResponse(res, {
    httpStatusCode: status62.OK,
    success: true,
    message: "Blog fetched successfully",
    data: result
  });
});
var updateBlog2 = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  if (req.file) {
    payload.coverImage = req.file.path;
  }
  const result = await BlogService.updateBlog(
    req.params.id,
    payload
  );
  sendResponse(res, {
    httpStatusCode: status62.OK,
    success: true,
    message: "Blog updated successfully",
    data: result
  });
});
var deleteBlog2 = catchAsync(async (req, res) => {
  const result = await BlogService.deleteBlog(req.params.id);
  sendResponse(res, {
    httpStatusCode: status62.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var BlogController = {
  createBlog: createBlog2,
  getAllBlogs: getAllBlogs2,
  getAllBlogsAdmin: getAllBlogsAdmin2,
  getBlogById: getBlogById2,
  getBlogBySlug: getBlogBySlug2,
  updateBlog: updateBlog2,
  deleteBlog: deleteBlog2
};

// src/app/module/blog/blog.validation.ts
import z26 from "zod";
var createBlogZodSchema = z26.object({
  title: z26.string().min(1, "Title is required"),
  excerpt: z26.string().optional(),
  content: z26.string().min(1, "Content is required"),
  author: z26.string().optional(),
  isPublished: z26.boolean().optional().default(false)
});
var updateBlogZodSchema = z26.object({
  title: z26.string().min(1).optional(),
  excerpt: z26.string().optional(),
  content: z26.string().min(1).optional(),
  author: z26.string().optional(),
  isPublished: z26.boolean().optional(),
  removeCoverImage: z26.boolean().optional()
});

// src/app/module/blog/blog.route.ts
var router40 = Router30();
router40.get("/", BlogController.getAllBlogs);
router40.get(
  "/admin",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  BlogController.getAllBlogsAdmin
);
router40.get("/slug/:slug", BlogController.getBlogBySlug);
router40.get(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  BlogController.getBlogById
);
router40.post(
  "/",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  multerUpload.single("coverImage"),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(createBlogZodSchema),
  BlogController.createBlog
);
router40.patch(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  multerUpload.single("coverImage"),
  (req, res, next) => {
    if (req.body.data) {
      req.body = JSON.parse(req.body.data);
    }
    next();
  },
  validateRequest(updateBlogZodSchema),
  BlogController.updateBlog
);
router40.delete(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  BlogController.deleteBlog
);
var BlogRoutes = router40;

// src/app/module/testimonial/testimonial.route.ts
import express11 from "express";

// src/app/module/testimonial/testimonial.service.ts
import status63 from "http-status";
var parseBoolean3 = (value) => value === void 0 ? void 0 : value === true || value === "true";
var parseText2 = (value) => typeof value === "string" ? value.trim() || null : void 0;
var parseRating = (value) => {
  const rating = Number(value);
  return Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : void 0;
};
var parseOrder = (value) => value === void 0 || value === "" || !Number.isInteger(Number(value)) ? void 0 : Number(value);
var orderBy = [{ order: "asc" }, { createdAt: "desc" }];
var createTestimonial = async (req) => {
  const body = req.body ?? {};
  const file = req.file;
  const name = parseText2(body.name);
  const content = parseText2(body.content);
  if (!name) throw new AppError_default(status63.BAD_REQUEST, "Name is required");
  if (!content) throw new AppError_default(status63.BAD_REQUEST, "Review text is required");
  return prisma2.testimonial.create({
    data: {
      name,
      content,
      role: parseText2(body.role),
      rating: parseRating(body.rating) ?? 5,
      order: parseOrder(body.order) ?? 0,
      isActive: parseBoolean3(body.isActive) ?? true,
      avatar: file?.path ?? null
    }
  });
};
var getTestimonials = async (includeInactive) => {
  return prisma2.testimonial.findMany({
    where: includeInactive ? {} : { isActive: true },
    orderBy
  });
};
var updateTestimonial = async (id, req) => {
  const existing = await prisma2.testimonial.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status63.NOT_FOUND, "Testimonial not found");
  const body = req.body ?? {};
  const file = req.file;
  const name = parseText2(body.name);
  const content = parseText2(body.content);
  return prisma2.testimonial.update({
    where: { id },
    data: {
      ...name && { name },
      ...content && { content },
      role: parseText2(body.role),
      rating: parseRating(body.rating),
      order: parseOrder(body.order),
      isActive: parseBoolean3(body.isActive),
      ...file ? { avatar: file.path } : parseBoolean3(body.removeAvatar) ? { avatar: null } : {}
    }
  });
};
var deleteTestimonial = async (id) => {
  const existing = await prisma2.testimonial.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status63.NOT_FOUND, "Testimonial not found");
  return prisma2.testimonial.delete({ where: { id } });
};
var TestimonialService = {
  createTestimonial: invalidates(["testimonials"], createTestimonial),
  getTestimonials: cached("testimonials", 5 * MINUTE, getTestimonials),
  updateTestimonial: invalidates(["testimonials"], updateTestimonial),
  deleteTestimonial: invalidates(["testimonials"], deleteTestimonial)
};

// src/app/module/testimonial/testimonial.controller.ts
var createTestimonial2 = catchAsync(async (req, res) => {
  const result = await TestimonialService.createTestimonial(req);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Testimonial created successfully",
    data: result
  });
});
var getTestimonials2 = catchAsync(async (req, res) => {
  const result = await TestimonialService.getTestimonials(req.query.all === "true");
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Testimonials retrieved successfully",
    data: result
  });
});
var updateTestimonial2 = catchAsync(async (req, res) => {
  const result = await TestimonialService.updateTestimonial(
    req.params.id,
    req
  );
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Testimonial updated successfully",
    data: result
  });
});
var deleteTestimonial2 = catchAsync(async (req, res) => {
  const result = await TestimonialService.deleteTestimonial(req.params.id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Testimonial deleted successfully",
    data: result
  });
});
var TestimonialController = {
  createTestimonial: createTestimonial2,
  getTestimonials: getTestimonials2,
  updateTestimonial: updateTestimonial2,
  deleteTestimonial: deleteTestimonial2
};

// src/app/module/testimonial/testimonial.route.ts
var router41 = express11.Router();
router41.get("/", TestimonialController.getTestimonials);
router41.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("avatar"),
  TestimonialController.createTestimonial
);
router41.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("avatar"),
  TestimonialController.updateTestimonial
);
router41.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  TestimonialController.deleteTestimonial
);
var TestimonialRoutes = router41;

// src/app/module/client-logo/clientLogo.route.ts
import express12 from "express";

// src/app/module/client-logo/clientLogo.service.ts
import status64 from "http-status";
var parseBoolean4 = (value) => value === void 0 ? void 0 : value === true || value === "true";
var parseText3 = (value) => typeof value === "string" ? value.trim() || null : void 0;
var parseOrder2 = (value) => value === void 0 || value === "" || !Number.isInteger(Number(value)) ? void 0 : Number(value);
var orderBy2 = [{ order: "asc" }, { createdAt: "asc" }];
var createClientLogo = async (req) => {
  const body = req.body ?? {};
  const file = req.file;
  const name = parseText3(body.name);
  if (!name) throw new AppError_default(status64.BAD_REQUEST, "Client name is required");
  if (!file) throw new AppError_default(status64.BAD_REQUEST, "Client logo is required");
  return prisma2.clientLogo.create({
    data: {
      name,
      logo: file.path,
      website: parseText3(body.website),
      order: parseOrder2(body.order) ?? 0,
      isActive: parseBoolean4(body.isActive) ?? true
    }
  });
};
var getClientLogos = async (includeInactive) => {
  return prisma2.clientLogo.findMany({
    where: includeInactive ? {} : { isActive: true },
    orderBy: orderBy2
  });
};
var updateClientLogo = async (id, req) => {
  const existing = await prisma2.clientLogo.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status64.NOT_FOUND, "Client not found");
  const body = req.body ?? {};
  const file = req.file;
  const name = parseText3(body.name);
  return prisma2.clientLogo.update({
    where: { id },
    data: {
      ...name && { name },
      ...file && { logo: file.path },
      website: parseText3(body.website),
      order: parseOrder2(body.order),
      isActive: parseBoolean4(body.isActive)
    }
  });
};
var deleteClientLogo = async (id) => {
  const existing = await prisma2.clientLogo.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status64.NOT_FOUND, "Client not found");
  return prisma2.clientLogo.delete({ where: { id } });
};
var ClientLogoService = {
  createClientLogo: invalidates(["client-logos"], createClientLogo),
  getClientLogos: cached("client-logos", 5 * MINUTE, getClientLogos),
  updateClientLogo: invalidates(["client-logos"], updateClientLogo),
  deleteClientLogo: invalidates(["client-logos"], deleteClientLogo)
};

// src/app/module/client-logo/clientLogo.controller.ts
var createClientLogo2 = catchAsync(async (req, res) => {
  const result = await ClientLogoService.createClientLogo(req);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Client added successfully",
    data: result
  });
});
var getClientLogos2 = catchAsync(async (req, res) => {
  const result = await ClientLogoService.getClientLogos(req.query.all === "true");
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Clients retrieved successfully",
    data: result
  });
});
var updateClientLogo2 = catchAsync(async (req, res) => {
  const result = await ClientLogoService.updateClientLogo(
    req.params.id,
    req
  );
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Client updated successfully",
    data: result
  });
});
var deleteClientLogo2 = catchAsync(async (req, res) => {
  const result = await ClientLogoService.deleteClientLogo(req.params.id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Client deleted successfully",
    data: result
  });
});
var ClientLogoController = {
  createClientLogo: createClientLogo2,
  getClientLogos: getClientLogos2,
  updateClientLogo: updateClientLogo2,
  deleteClientLogo: deleteClientLogo2
};

// src/app/module/client-logo/clientLogo.route.ts
var router42 = express12.Router();
router42.get("/", ClientLogoController.getClientLogos);
router42.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("logo"),
  ClientLogoController.createClientLogo
);
router42.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("logo"),
  ClientLogoController.updateClientLogo
);
router42.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  ClientLogoController.deleteClientLogo
);
var ClientLogoRoutes = router42;

// src/app/module/popup/popup.route.ts
import express13 from "express";

// src/app/module/popup/popup.service.ts
import status65 from "http-status";
var MAX_DELAY_SECONDS = 60;
var parseBoolean5 = (value) => value === void 0 ? void 0 : value === true || value === "true";
var parseText4 = (value) => typeof value === "string" ? value.trim() || null : void 0;
var parseDelay = (value) => {
  if (value === void 0 || value === "") return void 0;
  const delay = Number(value);
  if (!Number.isInteger(delay) || delay < 0 || delay > MAX_DELAY_SECONDS) {
    throw new AppError_default(
      status65.BAD_REQUEST,
      `Delay must be a whole number between 0 and ${MAX_DELAY_SECONDS} seconds`
    );
  }
  return delay;
};
var parseLink = (value) => {
  const link = parseText4(value);
  if (link && !/^(https?:\/\/|\/)/i.test(link)) {
    throw new AppError_default(
      status65.BAD_REQUEST,
      "Link must start with http://, https:// or /"
    );
  }
  return link;
};
var createPopup = async (req) => {
  const body = req.body ?? {};
  const file = req.file;
  if (!file) throw new AppError_default(status65.BAD_REQUEST, "Popup image is required");
  const isActive = parseBoolean5(body.isActive) ?? true;
  const data = {
    title: parseText4(body.title),
    image: file.path,
    link: parseLink(body.link),
    delaySeconds: parseDelay(body.delaySeconds) ?? 3,
    isActive
  };
  return prisma2.$transaction(async (tx) => {
    if (isActive) {
      await tx.popup.updateMany({
        where: { isActive: true },
        data: { isActive: false }
      });
    }
    return tx.popup.create({ data });
  });
};
var getPopups = async () => {
  return prisma2.popup.findMany({ orderBy: { createdAt: "desc" } });
};
var getActivePopup = async () => {
  return prisma2.popup.findFirst({
    where: { isActive: true },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      image: true,
      link: true,
      delaySeconds: true,
      updatedAt: true
    }
  });
};
var updatePopup = async (id, req) => {
  const existing = await prisma2.popup.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status65.NOT_FOUND, "Popup not found");
  const body = req.body ?? {};
  const file = req.file;
  const isActive = parseBoolean5(body.isActive);
  const data = {
    title: parseText4(body.title),
    link: parseLink(body.link),
    delaySeconds: parseDelay(body.delaySeconds),
    isActive,
    ...file && { image: file.path }
  };
  return prisma2.$transaction(async (tx) => {
    if (isActive) {
      await tx.popup.updateMany({
        where: { isActive: true, id: { not: id } },
        data: { isActive: false }
      });
    }
    return tx.popup.update({ where: { id }, data });
  });
};
var deletePopup = async (id) => {
  const existing = await prisma2.popup.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status65.NOT_FOUND, "Popup not found");
  return prisma2.popup.delete({ where: { id } });
};
var PopupService = {
  createPopup: invalidates(["popups"], createPopup),
  getPopups,
  getActivePopup: cached("popups", 5 * MINUTE, getActivePopup),
  updatePopup: invalidates(["popups"], updatePopup),
  deletePopup: invalidates(["popups"], deletePopup)
};

// src/app/module/popup/popup.controller.ts
var createPopup2 = catchAsync(async (req, res) => {
  const result = await PopupService.createPopup(req);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Popup created successfully",
    data: result
  });
});
var getPopups2 = catchAsync(async (req, res) => {
  const result = await PopupService.getPopups();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Popups retrieved successfully",
    data: result
  });
});
var getActivePopup2 = catchAsync(async (req, res) => {
  const result = await PopupService.getActivePopup();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Active popup retrieved successfully",
    data: result
  });
});
var updatePopup2 = catchAsync(async (req, res) => {
  const result = await PopupService.updatePopup(req.params.id, req);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Popup updated successfully",
    data: result
  });
});
var deletePopup2 = catchAsync(async (req, res) => {
  const result = await PopupService.deletePopup(req.params.id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Popup deleted successfully",
    data: result
  });
});
var PopupController = {
  createPopup: createPopup2,
  getPopups: getPopups2,
  getActivePopup: getActivePopup2,
  updatePopup: updatePopup2,
  deletePopup: deletePopup2
};

// src/app/module/popup/popup.route.ts
var router43 = express13.Router();
router43.get("/active", PopupController.getActivePopup);
router43.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  PopupController.getPopups
);
router43.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("image"),
  PopupController.createPopup
);
router43.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("image"),
  PopupController.updatePopup
);
router43.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  PopupController.deletePopup
);
var PopupRoutes = router43;

// src/app/module/size-chart/sizeChart.route.ts
import express14 from "express";

// src/app/module/size-chart/sizeChart.service.ts
import status66 from "http-status";
var readName = (req) => typeof req.body?.name === "string" ? req.body.name.trim() : "";
var assertNameFree = async (name, exceptId) => {
  const clash = await prisma2.sizeChart.findUnique({ where: { name } });
  if (clash && clash.id !== exceptId) {
    throw new AppError_default(status66.CONFLICT, `Size chart "${name}" already exists`);
  }
};
var createSizeChart = async (req) => {
  const file = req.file;
  const name = readName(req);
  if (!name) throw new AppError_default(status66.BAD_REQUEST, "Size chart name is required");
  if (!file) throw new AppError_default(status66.BAD_REQUEST, "Size chart image is required");
  await assertNameFree(name);
  return prisma2.sizeChart.create({ data: { name, image: file.path } });
};
var getSizeCharts = async () => {
  return prisma2.sizeChart.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { products: true } } }
  });
};
var updateSizeChart = async (id, req) => {
  const existing = await prisma2.sizeChart.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status66.NOT_FOUND, "Size chart not found");
  const file = req.file;
  const name = readName(req);
  if (name && name !== existing.name) await assertNameFree(name, id);
  return prisma2.sizeChart.update({
    where: { id },
    data: {
      ...name && { name },
      ...file && { image: file.path }
    }
  });
};
var deleteSizeChart = async (id) => {
  const existing = await prisma2.sizeChart.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status66.NOT_FOUND, "Size chart not found");
  return prisma2.sizeChart.delete({ where: { id } });
};
var SizeChartService = {
  createSizeChart,
  getSizeCharts,
  updateSizeChart,
  deleteSizeChart
};

// src/app/module/size-chart/sizeChart.controller.ts
var createSizeChart2 = catchAsync(async (req, res) => {
  const result = await SizeChartService.createSizeChart(req);
  sendResponse(res, {
    httpStatusCode: 201,
    success: true,
    message: "Size chart created successfully",
    data: result
  });
});
var getSizeCharts2 = catchAsync(async (req, res) => {
  const result = await SizeChartService.getSizeCharts();
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Size charts retrieved successfully",
    data: result
  });
});
var updateSizeChart2 = catchAsync(async (req, res) => {
  const result = await SizeChartService.updateSizeChart(req.params.id, req);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Size chart updated successfully",
    data: result
  });
});
var deleteSizeChart2 = catchAsync(async (req, res) => {
  const result = await SizeChartService.deleteSizeChart(req.params.id);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Size chart deleted successfully",
    data: result
  });
});
var SizeChartController = {
  createSizeChart: createSizeChart2,
  getSizeCharts: getSizeCharts2,
  updateSizeChart: updateSizeChart2,
  deleteSizeChart: deleteSizeChart2
};

// src/app/module/size-chart/sizeChart.route.ts
var router44 = express14.Router();
router44.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SizeChartController.getSizeCharts
);
router44.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("image"),
  SizeChartController.createSizeChart
);
router44.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("image"),
  SizeChartController.updateSizeChart
);
router44.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  SizeChartController.deleteSizeChart
);
var SizeChartRoutes = router44;

// src/app/module/low-stock/lowStock.route.ts
import { Router as Router31 } from "express";

// src/app/module/low-stock/lowStock.controller.ts
var getLowStock2 = catchAsync(async (req, res) => {
  const result = await LowStockService.getLowStock(req.query);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Low stock products retrieved successfully",
    data: result.data,
    meta: result.meta
  });
});
var updateStock2 = catchAsync(async (req, res) => {
  const result = await LowStockService.updateStock(req.body);
  sendResponse(res, {
    httpStatusCode: 200,
    success: true,
    message: "Stock updated successfully",
    data: result
  });
});
var LowStockController = { getLowStock: getLowStock2, updateStock: updateStock2 };

// src/app/module/low-stock/lowStock.validation.ts
import { z as z27 } from "zod";
var updateStockZodSchema = z27.object({
  productId: z27.string().uuid("Invalid product ID"),
  variantId: z27.string().uuid("Invalid variant ID").optional().nullable(),
  stock: z27.number().int().min(0, "Stock cannot be negative")
});

// src/app/module/low-stock/lowStock.route.ts
var router45 = Router31();
router45.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router45.get("/", LowStockController.getLowStock);
router45.patch(
  "/stock",
  validateRequest(updateStockZodSchema),
  LowStockController.updateStock
);
var LowStockRoutes = router45;

// src/app/module/staff/staff.route.ts
import { Router as Router32 } from "express";

// src/app/module/staff/staff.service.ts
import status67 from "http-status";
var cleanPermissions = (permissions) => Array.from(new Set(permissions.filter((p) => ALL_PERMISSIONS.includes(p))));
var getPermissionCatalog = () => PERMISSION_GROUPS;
var getRoles = async () => {
  return prisma2.staffRole.findMany({
    orderBy: { name: "asc" },
    include: {
      _count: { select: { users: { where: { isDeleted: false } } } }
    }
  });
};
var assertRoleNameFree = async (name, exceptId) => {
  const clash = await prisma2.staffRole.findUnique({ where: { name } });
  if (clash && clash.id !== exceptId) {
    throw new AppError_default(status67.CONFLICT, `A role named "${name}" already exists`);
  }
};
var createRole = async (payload) => {
  const name = payload.name.trim();
  await assertRoleNameFree(name);
  return prisma2.staffRole.create({
    data: { name, permissions: cleanPermissions(payload.permissions) }
  });
};
var updateRole = async (id, payload) => {
  const existing = await prisma2.staffRole.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status67.NOT_FOUND, "Role not found");
  const name = payload.name?.trim();
  if (name && name !== existing.name) await assertRoleNameFree(name, id);
  return prisma2.staffRole.update({
    where: { id },
    data: {
      ...name && { name },
      ...payload.permissions && {
        permissions: cleanPermissions(payload.permissions)
      }
    }
  });
};
var deleteRole = async (id) => {
  const existing = await prisma2.staffRole.findUnique({
    where: { id },
    include: { _count: { select: { users: true } } }
  });
  if (!existing) throw new AppError_default(status67.NOT_FOUND, "Role not found");
  if (existing._count.users > 0) {
    throw new AppError_default(
      status67.BAD_REQUEST,
      `${existing._count.users} staff account(s) still use "${existing.name}". Move them to another role first.`
    );
  }
  return prisma2.staffRole.delete({ where: { id } });
};
var staffSelect = {
  id: true,
  name: true,
  email: true,
  status: true,
  image: true,
  createdAt: true,
  staffRole: { select: { id: true, name: true } },
  admin: { select: { contactNumber: true } }
};
var getStaff = async (query) => {
  const term = query.searchTerm?.trim();
  const users = await prisma2.user.findMany({
    where: {
      role: Role.ADMIN,
      staffRoleId: query.staffRoleId || { not: null },
      isDeleted: false,
      ...term && {
        OR: [
          { name: { contains: term, mode: "insensitive" } },
          { email: { contains: term, mode: "insensitive" } },
          { admin: { contactNumber: { contains: term } } }
        ]
      }
    },
    orderBy: { createdAt: "desc" },
    select: staffSelect
  });
  return users.map(({ admin: admin2, ...user }) => ({
    ...user,
    phone: admin2?.contactNumber ?? null
  }));
};
var findStaffOrThrow = async (id) => {
  const user = await prisma2.user.findUnique({ where: { id } });
  if (!user || user.isDeleted || user.role !== Role.ADMIN || !user.staffRoleId) {
    throw new AppError_default(status67.NOT_FOUND, "Staff account not found");
  }
  return user;
};
var assertRoleExists = async (staffRoleId) => {
  const role = await prisma2.staffRole.findUnique({ where: { id: staffRoleId } });
  if (!role) throw new AppError_default(status67.BAD_REQUEST, "Selected role does not exist");
};
var setPassword = async (userId, password) => {
  const ctx = await auth.$context;
  const hash = await ctx.password.hash(password);
  await ctx.internalAdapter.updatePassword(userId, hash);
};
var createStaff = async (payload) => {
  const email = payload.email.trim().toLowerCase();
  await assertRoleExists(payload.staffRoleId);
  const existing = await prisma2.user.findUnique({ where: { email } });
  if (existing) {
    throw new AppError_default(status67.CONFLICT, "An account with this email already exists");
  }
  const result = await auth.api.signUpEmail({
    body: { name: payload.name.trim(), email, password: payload.password }
  });
  if (!result?.user) {
    throw new AppError_default(status67.BAD_REQUEST, "Failed to create staff account");
  }
  const userId = result.user.id;
  await prisma2.$transaction([
    prisma2.user.update({
      where: { id: userId },
      data: {
        role: Role.ADMIN,
        staffRoleId: payload.staffRoleId,
        emailVerified: true
      }
    }),
    prisma2.admin.create({
      data: {
        userId,
        name: payload.name.trim(),
        email,
        contactNumber: payload.phone?.trim() || null
      }
    }),
    // Sign-up opens a session for the new account; the admin creating it
    // should not hold that session
    prisma2.session.deleteMany({ where: { userId } })
  ]);
  return (await getStaff({})).find((s) => s.id === userId);
};
var updateStaff = async (id, payload) => {
  const user = await findStaffOrThrow(id);
  if (payload.staffRoleId) await assertRoleExists(payload.staffRoleId);
  const name = payload.name?.trim();
  await prisma2.$transaction([
    prisma2.user.update({
      where: { id },
      data: {
        ...name && { name },
        ...payload.staffRoleId && { staffRoleId: payload.staffRoleId },
        ...payload.status && { status: payload.status }
      }
    }),
    prisma2.admin.upsert({
      where: { userId: id },
      create: {
        userId: id,
        name: name || user.name,
        email: user.email,
        contactNumber: payload.phone?.trim() || null
      },
      update: {
        ...name && { name },
        ...payload.phone !== void 0 && {
          contactNumber: payload.phone.trim() || null
        }
      }
    }),
    // A blocked account is signed out everywhere right away
    ...payload.status === "BLOCKED" ? [prisma2.session.deleteMany({ where: { userId: id } })] : []
  ]);
  if (payload.password) {
    await setPassword(id, payload.password);
    await prisma2.session.deleteMany({ where: { userId: id } });
  }
  return (await getStaff({})).find((s) => s.id === id);
};
var deleteStaff = async (id) => {
  await findStaffOrThrow(id);
  await prisma2.$transaction([
    prisma2.user.update({
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: /* @__PURE__ */ new Date(),
        status: UserStatus.DELETED,
        // Frees the role so it can be deleted later
        staffRoleId: null,
        role: Role.USER
      }
    }),
    prisma2.admin.updateMany({
      where: { userId: id },
      data: { isDeleted: true, deletedAt: /* @__PURE__ */ new Date() }
    }),
    prisma2.session.deleteMany({ where: { userId: id } }),
    prisma2.account.deleteMany({ where: { userId: id } })
  ]);
  return { id };
};
var StaffService = {
  getPermissionCatalog,
  getRoles,
  createRole,
  updateRole,
  deleteRole,
  getStaff,
  createStaff,
  updateStaff,
  deleteStaff
};

// src/app/module/staff/staff.controller.ts
var ok = (res, message, data, code = 200) => sendResponse(res, { httpStatusCode: code, success: true, message, data });
var getPermissions = catchAsync(async (req, res) => {
  ok(res, "Permissions retrieved successfully", StaffService.getPermissionCatalog());
});
var getRoles2 = catchAsync(async (req, res) => {
  ok(res, "Roles retrieved successfully", await StaffService.getRoles());
});
var createRole2 = catchAsync(async (req, res) => {
  ok(res, "Role created successfully", await StaffService.createRole(req.body), 201);
});
var updateRole2 = catchAsync(async (req, res) => {
  ok(
    res,
    "Role updated successfully",
    await StaffService.updateRole(req.params.id, req.body)
  );
});
var deleteRole2 = catchAsync(async (req, res) => {
  ok(res, "Role deleted successfully", await StaffService.deleteRole(req.params.id));
});
var getStaff2 = catchAsync(async (req, res) => {
  ok(
    res,
    "Staff retrieved successfully",
    await StaffService.getStaff({
      staffRoleId: req.query.staffRoleId,
      searchTerm: req.query.searchTerm
    })
  );
});
var createStaff2 = catchAsync(async (req, res) => {
  ok(res, "Staff account created successfully", await StaffService.createStaff(req.body), 201);
});
var updateStaff2 = catchAsync(async (req, res) => {
  ok(
    res,
    "Staff account updated successfully",
    await StaffService.updateStaff(req.params.id, req.body)
  );
});
var deleteStaff2 = catchAsync(async (req, res) => {
  ok(res, "Staff account deleted successfully", await StaffService.deleteStaff(req.params.id));
});
var StaffController = {
  getPermissions,
  getRoles: getRoles2,
  createRole: createRole2,
  updateRole: updateRole2,
  deleteRole: deleteRole2,
  getStaff: getStaff2,
  createStaff: createStaff2,
  updateStaff: updateStaff2,
  deleteStaff: deleteStaff2
};

// src/app/module/staff/staff.validation.ts
import { z as z28 } from "zod";
var createRoleZodSchema = z28.object({
  name: z28.string().trim().min(1, "Role name is required").max(50),
  permissions: z28.array(z28.string()).default([])
});
var updateRoleZodSchema = z28.object({
  name: z28.string().trim().min(1).max(50).optional(),
  permissions: z28.array(z28.string()).optional()
});
var createStaffZodSchema = z28.object({
  name: z28.string().trim().min(1, "Name is required"),
  email: z28.email("Enter a valid email"),
  phone: z28.string().trim().optional(),
  password: z28.string().min(8, "Password must be at least 8 characters"),
  staffRoleId: z28.string().uuid("Select a role")
});
var updateStaffZodSchema = z28.object({
  name: z28.string().trim().min(1).optional(),
  phone: z28.string().trim().optional(),
  staffRoleId: z28.string().uuid().optional(),
  status: z28.enum(["ACTIVE", "BLOCKED"]).optional(),
  password: z28.string().min(8, "Password must be at least 8 characters").optional().or(z28.literal("").transform(() => void 0))
});

// src/app/module/staff/staff.route.ts
var router46 = Router32();
router46.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router46.get("/permissions", StaffController.getPermissions);
router46.get("/roles", StaffController.getRoles);
router46.post("/roles", validateRequest(createRoleZodSchema), StaffController.createRole);
router46.patch("/roles/:id", validateRequest(updateRoleZodSchema), StaffController.updateRole);
router46.delete("/roles/:id", StaffController.deleteRole);
router46.get("/users", StaffController.getStaff);
router46.post("/users", validateRequest(createStaffZodSchema), StaffController.createStaff);
router46.patch("/users/:id", validateRequest(updateStaffZodSchema), StaffController.updateStaff);
router46.delete("/users/:id", StaffController.deleteStaff);
var StaffRoutes = router46;

// src/app/module/sample-work/sampleWork.route.ts
import { Router as Router33 } from "express";

// src/app/module/sample-work/sampleWork.service.ts
import status68 from "http-status";
var FOLDER = "abtrims/sample-works";
var { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = envVars.CLOUDINARY;
var getUploadSignature = () => {
  const timestamp = Math.round(Date.now() / 1e3);
  const signature = cloudinaryUpload.utils.api_sign_request(
    { timestamp, folder: FOLDER },
    CLOUDINARY_API_SECRET
  );
  return {
    timestamp,
    signature,
    folder: FOLDER,
    apiKey: CLOUDINARY_API_KEY,
    cloudName: CLOUDINARY_CLOUD_NAME
  };
};
var assertOwnFile = (url) => {
  if (!url.startsWith(`https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/`)) {
    throw new AppError_default(status68.BAD_REQUEST, "Upload the PDF here, links from elsewhere are not accepted");
  }
};
var getPublicSampleWorks = async () => {
  return prisma2.sampleWork.findMany({
    where: { isActive: true },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    select: {
      id: true,
      title: true,
      description: true,
      fileUrl: true,
      fileSize: true
    }
  });
};
var getAllSampleWorks = async () => {
  return prisma2.sampleWork.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }]
  });
};
var createSampleWork = async (payload) => {
  assertOwnFile(payload.fileUrl);
  return prisma2.sampleWork.create({
    data: {
      title: payload.title.trim(),
      description: payload.description?.trim() || null,
      fileUrl: payload.fileUrl,
      publicId: payload.publicId ?? null,
      fileSize: payload.fileSize ?? null,
      order: payload.order ?? 0,
      isActive: payload.isActive ?? true
    }
  });
};
var destroyFile = async (publicId) => {
  if (!publicId) return;
  await cloudinaryUpload.uploader.destroy(publicId, { resource_type: "image" }).catch(() => void 0);
};
var updateSampleWork = async (id, payload) => {
  const existing = await prisma2.sampleWork.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status68.NOT_FOUND, "Sample work not found");
  if (payload.fileUrl) assertOwnFile(payload.fileUrl);
  const updated = await prisma2.sampleWork.update({
    where: { id },
    data: {
      ...payload.title !== void 0 && { title: payload.title.trim() },
      ...payload.description !== void 0 && {
        description: payload.description?.trim() || null
      },
      ...payload.fileUrl && {
        fileUrl: payload.fileUrl,
        publicId: payload.publicId ?? null,
        fileSize: payload.fileSize ?? null
      },
      ...payload.order !== void 0 && { order: payload.order },
      ...payload.isActive !== void 0 && { isActive: payload.isActive }
    }
  });
  if (payload.fileUrl && payload.fileUrl !== existing.fileUrl) {
    await destroyFile(existing.publicId);
  }
  return updated;
};
var deleteSampleWork = async (id) => {
  const existing = await prisma2.sampleWork.findUnique({ where: { id } });
  if (!existing) throw new AppError_default(status68.NOT_FOUND, "Sample work not found");
  await prisma2.sampleWork.delete({ where: { id } });
  await destroyFile(existing.publicId);
  return { id };
};
var getFileUrl = async (id, download) => {
  const item = await prisma2.sampleWork.findUnique({ where: { id } });
  if (!item) throw new AppError_default(status68.NOT_FOUND, "Sample work not found");
  if (!item.publicId) return item.fileUrl;
  return cloudinaryUpload.utils.private_download_url(item.publicId, "pdf", {
    resource_type: "image",
    type: "upload",
    attachment: download,
    expires_at: Math.round(Date.now() / 1e3) + 60 * 60
  });
};
var SampleWorkService = {
  getFileUrl,
  getUploadSignature,
  getPublicSampleWorks: cached("sample-works", 5 * MINUTE, getPublicSampleWorks),
  getAllSampleWorks,
  createSampleWork: invalidates(["sample-works"], createSampleWork),
  updateSampleWork: invalidates(["sample-works"], updateSampleWork),
  deleteSampleWork: invalidates(["sample-works"], deleteSampleWork)
};

// src/app/module/sample-work/sampleWork.controller.ts
var ok2 = (res, message, data, code = 200) => sendResponse(res, { httpStatusCode: code, success: true, message, data });
var getPublicSampleWorks2 = catchAsync(async (req, res) => {
  ok2(res, "Sample works retrieved successfully", await SampleWorkService.getPublicSampleWorks());
});
var getAllSampleWorks2 = catchAsync(async (req, res) => {
  ok2(res, "Sample works retrieved successfully", await SampleWorkService.getAllSampleWorks());
});
var getUploadSignature2 = catchAsync(async (req, res) => {
  ok2(res, "Upload signature created", SampleWorkService.getUploadSignature());
});
var createSampleWork2 = catchAsync(async (req, res) => {
  ok2(res, "Sample work added", await SampleWorkService.createSampleWork(req.body), 201);
});
var updateSampleWork2 = catchAsync(async (req, res) => {
  ok2(
    res,
    "Sample work updated",
    await SampleWorkService.updateSampleWork(req.params.id, req.body)
  );
});
var deleteSampleWork2 = catchAsync(async (req, res) => {
  ok2(res, "Sample work deleted", await SampleWorkService.deleteSampleWork(req.params.id));
});
var openFile = catchAsync(async (req, res) => {
  const url = await SampleWorkService.getFileUrl(
    req.params.id,
    req.query.download === "1"
  );
  res.setHeader("Cache-Control", "no-store");
  res.redirect(302, url);
});
var SampleWorkController = {
  openFile,
  getPublicSampleWorks: getPublicSampleWorks2,
  getAllSampleWorks: getAllSampleWorks2,
  getUploadSignature: getUploadSignature2,
  createSampleWork: createSampleWork2,
  updateSampleWork: updateSampleWork2,
  deleteSampleWork: deleteSampleWork2
};

// src/app/module/sample-work/sampleWork.validation.ts
import { z as z29 } from "zod";
var createSampleWorkZodSchema = z29.object({
  title: z29.string().trim().min(1, "Title is required").max(150),
  description: z29.string().trim().max(500).optional().nullable(),
  fileUrl: z29.url("Upload the PDF first"),
  publicId: z29.string().optional().nullable(),
  fileSize: z29.number().int().nonnegative().optional().nullable(),
  order: z29.number().int().optional(),
  isActive: z29.boolean().optional()
});
var updateSampleWorkZodSchema = createSampleWorkZodSchema.partial();

// src/app/module/sample-work/sampleWork.route.ts
var router47 = Router33();
var admin = checkAuth(Role.ADMIN, Role.SUPER_ADMIN);
router47.get("/", SampleWorkController.getPublicSampleWorks);
router47.get("/admin", admin, SampleWorkController.getAllSampleWorks);
router47.get("/:id/file", SampleWorkController.openFile);
router47.post("/upload-signature", admin, SampleWorkController.getUploadSignature);
router47.post("/", admin, validateRequest(createSampleWorkZodSchema), SampleWorkController.createSampleWork);
router47.patch("/:id", admin, validateRequest(updateSampleWorkZodSchema), SampleWorkController.updateSampleWork);
router47.delete("/:id", admin, SampleWorkController.deleteSampleWork);
var SampleWorkRoutes = router47;

// src/app/module/blocked-phone/blockedPhone.route.ts
import { Router as Router34 } from "express";
import { z as z30 } from "zod";
var blockPhoneZodSchema = z30.object({
  phone: z30.string().trim().optional(),
  orderId: z30.string().uuid().optional(),
  reason: z30.string().trim().max(300).optional()
}).refine((v) => v.phone || v.orderId, { message: "Phone number or order is required" });
var router48 = Router34();
router48.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router48.get(
  "/",
  catchAsync(async (req, res) => {
    const data = await BlockedPhoneService.getBlockedPhones(req.query.searchTerm);
    sendResponse(res, { httpStatusCode: 200, success: true, message: "Blocked numbers retrieved", data });
  })
);
router48.post(
  "/",
  validateRequest(blockPhoneZodSchema),
  catchAsync(async (req, res) => {
    const data = await BlockedPhoneService.blockPhone(req.body, req.user);
    sendResponse(res, { httpStatusCode: 201, success: true, message: `${data.phone} is blocked`, data });
  })
);
router48.delete(
  "/:id",
  catchAsync(async (req, res) => {
    const data = await BlockedPhoneService.unblockPhone(req.params.id);
    sendResponse(res, { httpStatusCode: 200, success: true, message: `${data.phone} is unblocked`, data });
  })
);
var BlockedPhoneRoutes = router48;

// src/app/routes/index.ts
var router49 = Router35();
router49.use("/auth", AuthRoutes);
router49.use("/admin", AdminRoutes);
router49.use("/categories", CategoryRoutes);
router49.use("/shops", ShopRoutes);
router49.use("/products", ProductRoutes);
router49.use("/cart", CartRoutes);
router49.use("/orders", OrderRoutes);
router49.use("/order-returns", OrderReturnRoutes);
router49.use("/reviews", ReviewRoutes);
router49.use("/analytics", AnalyticsRoutes);
router49.use("/rag", RagRoutes);
router49.use("/ai", AIRoutes);
router49.use("/attributes", AttributeRoutes);
router49.use("/coupons", CouponRoutes);
router49.use("/shipping-settings", ShippingSettingRoutes);
router49.use("/gtm-settings", GtmSettingRoutes);
router49.use("/hero-sliders", HeroSliderRoutes);
router49.use("/brands", BrandRoutes);
router49.use("/home-promo", HomePromoRoutes);
router49.use("/home-category-sections", HomeCategorySectionRoutes);
router49.use("/pos", PosRoutes);
router49.use("/site-settings", SiteSettingRoutes);
router49.use("/landing-pages", LandingPageRoutes);
router49.use("/sales-report", SalesReportRoutes);
router49.use("/expenses", ExpenseRoutes);
router49.use("/profit-loss", ProfitLossRoutes);
router49.use("/platform-report", PlatformReportRoutes);
router49.use("/district-report", DistrictReportRoutes);
router49.use("/customer-segment-report", CustomerSegmentReportRoutes);
router49.use("/notifications", NotificationRoutes);
router49.use("/abandoned-checkouts", AbandonedCheckoutRoutes);
router49.use("/courier-settings", CourierSettingRoutes);
router49.use("/courier-webhooks", CourierWebhookRoutes);
router49.use("/payment-settings", PaymentSettingRoutes);
router49.use("/payments", PaymentRoutes);
router49.use("/sms-settings", SmsSettingRoutes);
router49.use("/pages", PageContentRoutes);
router49.use("/faqs", FaqRoutes);
router49.use("/flash-sale", FlashSaleRoutes);
router49.use("/blogs", BlogRoutes);
router49.use("/testimonials", TestimonialRoutes);
router49.use("/client-logos", ClientLogoRoutes);
router49.use("/popups", PopupRoutes);
router49.use("/size-charts", SizeChartRoutes);
router49.use("/low-stock", LowStockRoutes);
router49.use("/staff", StaffRoutes);
router49.use("/sample-works", SampleWorkRoutes);
router49.use("/blocked-phones", BlockedPhoneRoutes);
var IndexRoutes = router49;

// src/app/middleware/globalErrorHandler.ts
import * as Sentry from "@sentry/node";
import status71 from "http-status";
import z31 from "zod";

// src/app/errorHelpers/handlePrismaErrors.ts
import status69 from "http-status";
var getStatusCodeFromPrismaError = (errorCode) => {
  if (errorCode === "P2002") {
    return status69.CONFLICT;
  }
  if (["P2025", "P2001", "P2015", "P2018"].includes(errorCode)) {
    return status69.NOT_FOUND;
  }
  if (["P1000", "P6002"].includes(errorCode)) {
    return status69.UNAUTHORIZED;
  }
  if (["P1010", "P6010"].includes(errorCode)) {
    return status69.FORBIDDEN;
  }
  if (errorCode === "P6003") {
    return status69.PAYMENT_REQUIRED;
  }
  if (["P1008", "P2004", "P6004"].includes(errorCode)) {
    return status69.GATEWAY_TIMEOUT;
  }
  if (errorCode === "P5011") {
    return status69.TOO_MANY_REQUESTS;
  }
  if (errorCode === "P6009") {
    return 413;
  }
  if (errorCode.startsWith("P1") || ["P2024", "P2037", "P6008"].includes(errorCode)) {
    return status69.SERVICE_UNAVAILABLE;
  }
  if (errorCode.startsWith("P2")) {
    return status69.BAD_REQUEST;
  }
  if (errorCode.startsWith("P3") || errorCode.startsWith("P4")) {
    return status69.INTERNAL_SERVER_ERROR;
  }
  return status69.INTERNAL_SERVER_ERROR;
};
var formatErrorMeta = (meta) => {
  if (!meta) return "";
  const parts = [];
  if (meta.target) {
    parts.push(`Field(s): ${String(meta.target)}`);
  }
  if (meta.field_name) {
    parts.push(`Field: ${String(meta.field_name)}`);
  }
  if (meta.column_name) {
    parts.push(`Column: ${String(meta.column_name)}`);
  }
  if (meta.table) {
    parts.push(`Table: ${String(meta.table)}`);
  }
  if (meta.model_name) {
    parts.push(`Model: ${String(meta.model_name)}`);
  }
  if (meta.relation_name) {
    parts.push(`Relation: ${String(meta.relation_name)}`);
  }
  if (meta.constraint) {
    parts.push(`Constraint: ${String(meta.constraint)}`);
  }
  if (meta.database_error) {
    parts.push(`Database Error: ${String(meta.database_error)}`);
  }
  return parts.length > 0 ? parts.join(" |") : "";
};
var handlePrismaClientKnownRequestError = (error) => {
  const statusCode = getStatusCodeFromPrismaError(error.code);
  const metaInfo = formatErrorMeta(error.meta);
  let cleanMessage = error.message;
  cleanMessage = cleanMessage.replace(/Invalid `.*?` invocation:?\s*/i, "");
  const lines = cleanMessage.split("\n").filter((line) => line.trim());
  const mainMessage = lines[0] || "An error occurred with the database operation.";
  const errorSources = [
    {
      path: error.code,
      message: metaInfo ? `${mainMessage} | ${metaInfo}` : mainMessage
    }
  ];
  if (error.meta?.cause) {
    errorSources.push({
      path: "cause",
      message: String(error.meta.cause)
    });
  }
  return {
    success: false,
    statusCode,
    message: `Prisma Client Known Request Error: ${mainMessage}`,
    errorSources
  };
};
var handlePrismaClientUnknownError = (error) => {
  let cleanMessage = error.message;
  cleanMessage = cleanMessage.replace(/Invalid `.*?` invocation:?\s*/i, "");
  const lines = cleanMessage.split("\n").filter((line) => line.trim());
  const mainMessage = lines[0] || "An unknown error occurred with the database operation.";
  const errorSources = [
    {
      path: "Unknown Prisma Error",
      message: mainMessage
    }
  ];
  return {
    success: false,
    statusCode: status69.INTERNAL_SERVER_ERROR,
    message: `Prisma Client Unknown Request Error: ${mainMessage}`,
    errorSources
  };
};
var handlePrismaClientValidationError = (error) => {
  let cleanMessage = error.message;
  cleanMessage = cleanMessage.replace(/Invalid `.*?` invocation:?\s*/i, "");
  const lines = cleanMessage.split("\n").filter((line) => line.trim());
  const errorSources = [];
  const fieldMatch = cleanMessage.match(/Argument `(\w+)`/i);
  const fieldName = fieldMatch ? fieldMatch[1] : "Unknown Field";
  const mainMessage = lines.find(
    (line) => !line.includes("Argument") && !line.includes("\u2192") && line.length > 10
  ) || lines[0] || "Invalid query parameters provided to the database operation.";
  errorSources.push({
    path: fieldName,
    message: mainMessage
  });
  return {
    success: false,
    statusCode: status69.BAD_REQUEST,
    message: `Prisma Client Validation Error: ${mainMessage}`,
    errorSources
  };
};
var handlerPrismaClientInitializationError = (error) => {
  const statusCode = error.errorCode ? getStatusCodeFromPrismaError(error.errorCode) : status69.SERVICE_UNAVAILABLE;
  const cleanMessage = error.message;
  cleanMessage.replace(/Invalid `.*?` invocation:?\s*/i, "");
  const lines = cleanMessage.split("\n").filter((line) => line.trim());
  const mainMessage = lines[0] || "An error occurred while initializing the Prisma Client.";
  const errorSources = [
    {
      path: error.errorCode || "Initialization Error",
      message: mainMessage
    }
  ];
  return {
    success: false,
    statusCode,
    message: `Prisma Client Initialization Error: ${mainMessage}`,
    errorSources
  };
};
var handlerPrismaClientRustPanicError = () => {
  const errorSources = [
    {
      path: "Rust Engine Crashed",
      message: "The database engine encountered a fatal error and crashed. This is usually due to an internal bug in the Prisma engine or an unexpected edge case in the database operation. Please check the Prisma logs for more details and consider reporting this issue to the Prisma team if it persists."
    }
  ];
  return {
    success: false,
    statusCode: status69.INTERNAL_SERVER_ERROR,
    message: "Prisma Client Rust Panic Error: The database engine crashed due to a fatal error.",
    errorSources
  };
};

// src/app/errorHelpers/handleZodError.ts
import status70 from "http-status";
var handleZodError = (err) => {
  const statusCode = status70.BAD_REQUEST;
  const message = "Zod Validation Error";
  const errorSources = [];
  err.issues.forEach((issue) => {
    errorSources.push({
      path: issue.path.join(" => "),
      message: issue.message
    });
  });
  return {
    success: false,
    message,
    errorSources,
    statusCode
  };
};

// src/app/utils/deleteUploadedFilesFromGlobalErrorHandler.ts
var deleteUploadedFilesFromGlobalErrorHandler = async (req) => {
  try {
    const filesToDelete = [];
    if (req.file && req.file?.path) {
      filesToDelete.push(req.file.path);
    } else if (req.files && typeof req.files === "object" && !Array.isArray(req.files)) {
      Object.values(req.files).forEach((fileArray) => {
        if (Array.isArray(fileArray)) {
          fileArray.forEach((file) => {
            if (file.path) {
              filesToDelete.push(file.path);
            }
          });
        }
      });
    } else if (req.files && Array.isArray(req.files) && req.files.length > 0) {
      req.files.forEach((file) => {
        if (file.path) {
          filesToDelete.push(file.path);
        }
      });
    }
    if (filesToDelete.length > 0) {
      await Promise.all(
        filesToDelete.map((url) => deleteFileFromCloudinary(url))
      );
      console.log(
        `
Deleted ${filesToDelete.length} uploaded file(s) from Cloudinary due to an error during request processing.
`
      );
    }
  } catch (error) {
    console.error(
      "Error deleting uploaded files from Global Error Handler",
      error
    );
  }
};

// src/app/middleware/globalErrorHandler.ts
var globalErrorHandler = async (err, req, res, next) => {
  if (envVars.NODE_ENV === "development") {
    console.log("Error from Global Error Handler", err);
  }
  if (envVars.SENTRY_DSN) {
    Sentry.captureException(err);
  }
  await deleteUploadedFilesFromGlobalErrorHandler(req);
  let errorSources = [];
  let statusCode = status71.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  let stack = void 0;
  if (err instanceof prismaNamespace_exports.PrismaClientKnownRequestError) {
    const simplifiedError = handlePrismaClientKnownRequestError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof prismaNamespace_exports.PrismaClientUnknownRequestError) {
    const simplifiedError = handlePrismaClientUnknownError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof prismaNamespace_exports.PrismaClientValidationError) {
    const simplifiedError = handlePrismaClientValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof prismaNamespace_exports.PrismaClientRustPanicError) {
    const simplifiedError = handlerPrismaClientRustPanicError();
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof prismaNamespace_exports.PrismaClientInitializationError) {
    const simplifiedError = handlerPrismaClientInitializationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof z31.ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof AppError_default) {
    statusCode = err.statusCode;
    message = err.message;
    stack = err.stack;
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  } else if (err instanceof Error) {
    statusCode = status71.INTERNAL_SERVER_ERROR;
    message = err.message;
    stack = err.stack;
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  }
  const errorResponse = {
    success: false,
    message,
    errorSources,
    error: envVars.NODE_ENV === "development" ? err : void 0,
    stack: envVars.NODE_ENV === "development" ? stack : void 0
  };
  res.status(statusCode).json(errorResponse);
};

// src/app/middleware/notFound.ts
import status72 from "http-status";
var notFound = (req, res) => {
  res.status(status72.NOT_FOUND).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
};

// src/app.ts
var app = express15();
if (envVars.SENTRY_DSN) {
  Sentry2.init({
    dsn: envVars.SENTRY_DSN,
    integrations: [nodeProfilingIntegration()],
    // Performance Monitoring
    tracesSampleRate: 1,
    //  Capture 100% of the transactions
    // Set sampling rate for profiling - this is relative to tracesSampleRate
    profilesSampleRate: 1
  });
  Sentry2.setupExpressErrorHandler(app);
}
app.set("view engine", "ejs");
app.set("views", path4.join(process.cwd(), "src/app/templates"));
app.set("query parser", (str) => qs.parse(str));
app.use(requestLogger);
app.use(
  cors({
    origin: [
      envVars.FRONTEND_URL,
      envVars.BETTER_AUTH_URL,
      "http://localhost:3000",
      "http://localhost:5000"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.use("/api/auth", toNodeHandler(auth));
app.use(express15.urlencoded({ extended: true }));
app.use(express15.json());
app.use(cookieParser());
app.use("/api", globalRateLimiter);
app.use("/api/v1", IndexRoutes);
app.get("/", (req, res) => {
  res.send("Hello from AB Trims Server!");
});
app.use(notFound);
app.use(globalErrorHandler);
var app_default = app;

export {
  envVars,
  Role,
  auth,
  prisma2 as prisma,
  startLogCleanupScheduler,
  app_default
};
