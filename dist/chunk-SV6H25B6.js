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
      OPENROUTER_LLM_MODEL: process.env.OPENROUTER_LLM_MODEL
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
import express8 from "express";
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
  "inlineSchema": 'model AbandonedCheckout {\n  id           String         @id @default(uuid())\n  sessionToken String         @unique\n  source       CheckoutSource @default(STOREFRONT)\n\n  landingPageSlug String?\n\n  // Whatever the customer had filled in before leaving \u2014 all optional since\n  // a snapshot can be saved before any field is touched (items-only).\n  fullName String?\n  phone    String?\n  address  String?\n  district String?\n  notes    String?\n\n  items          Json // snapshot: [{ productId, productVariantId, name, variantName, image, quantity, price }]\n  subtotal       Float?\n  shippingFee    Float?\n  discountAmount Float?\n  total          Float?\n\n  createdAt      DateTime @default(now())\n  lastActivityAt DateTime @default(now()) @updatedAt\n\n  @@index([lastActivityAt])\n  @@map("abandoned_checkouts")\n}\n\nmodel Admin {\n  id            String    @id @default(uuid(7))\n  name          String\n  email         String    @unique\n  profilePhoto  String?\n  contactNumber String?\n  isDeleted     Boolean   @default(false)\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n  deletedAt     DateTime?\n\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([email])\n  @@index([isDeleted])\n  @@map("admins")\n}\n\nmodel Attribute {\n  id        String           @id @default(uuid())\n  name      String           @unique\n  values    AttributeValue[]\n  createdAt DateTime         @default(now())\n  updatedAt DateTime         @updatedAt\n\n  @@map("attributes")\n}\n\nmodel AttributeValue {\n  id          String    @id @default(uuid())\n  value       String\n  attributeId String\n  attribute   Attribute @relation(fields: [attributeId], references: [id], onDelete: Cascade)\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n\n  @@unique([value, attributeId])\n  @@index([attributeId])\n  @@map("attribute_values")\n}\n\nmodel User {\n  id                 String     @id\n  name               String\n  email              String\n  emailVerified      Boolean    @default(false)\n  role               Role       @default(USER)\n  status             UserStatus @default(ACTIVE)\n  needPasswordChange Boolean    @default(false)\n  isDeleted          Boolean    @default(false)\n  deletedAt          DateTime?\n  image              String?\n  createdAt          DateTime   @default(now())\n  updatedAt          DateTime   @updatedAt\n\n  // Relations\n  sessions              Session[]\n  accounts              Account[]\n  admin                 Admin?\n  shop                  Shop?\n  orders                Order[]\n  cart                  Cart?\n  reviews               Review[]\n  notifications         Notification[]\n  processedOrderReturns OrderReturn[]  @relation("OrderReturnProcessedBy")\n\n  @@unique([email])\n  @@index([role])\n  @@index([status])\n  @@index([isDeleted])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nmodel Blog {\n  id          String   @id @default(uuid())\n  title       String\n  slug        String   @unique\n  excerpt     String?\n  content     String\n  coverImage  String?\n  author      String?\n  isPublished Boolean  @default(false)\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  @@index([slug])\n  @@map("blogs")\n}\n\nmodel Cart {\n  id    String     @id @default(uuid())\n  items CartItem[]\n\n  // Relations\n  userId String @unique\n  user   User   @relation(fields: [userId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("carts")\n}\n\nmodel CartItem {\n  id       String @id @default(uuid())\n  quantity Int    @default(1)\n\n  // Relations\n  cartId           String\n  cart             Cart            @relation(fields: [cartId], references: [id], onDelete: Cascade)\n  productId        String\n  product          Product         @relation(fields: [productId], references: [id])\n  productVariantId String?\n  productVariant   ProductVariant? @relation(fields: [productVariantId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([cartId, productId, productVariantId]) // prevent duplicate variant in same cart\n  @@index([cartId])\n  @@index([productId])\n  @@index([productVariantId])\n  @@map("cart_items")\n}\n\nmodel Category {\n  id       String  @id @default(uuid())\n  name     String  @unique\n  slug     String  @unique\n  icon     String?\n  image    String?\n  isActive Boolean @default(true)\n\n  // Self-relation for subcategories\n  parentId      String?\n  parent        Category?  @relation("CategoryToSubcategory", fields: [parentId], references: [id])\n  subcategories Category[] @relation("CategoryToSubcategory")\n\n  products             Product[]\n  homeCategorySections HomeCategorySection[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([parentId])\n  @@index([slug])\n  @@map("categories")\n}\n\nenum DiscountType {\n  FLAT\n  PERCENTAGE\n}\n\nmodel Coupon {\n  id                String       @id @default(uuid())\n  code              String       @unique\n  discountType      DiscountType\n  discountAmount    Float\n  maxDiscountAmount Float?\n  minPurchaseAmount Float        @default(0)\n  startDate         DateTime\n  endDate           DateTime\n  isActive          Boolean      @default(true)\n\n  // Relations\n  shopId   String\n  shop     Shop            @relation(fields: [shopId], references: [id], onDelete: Cascade)\n  products CouponProduct[]\n  orders   Order[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([code])\n  @@map("coupons")\n}\n\nmodel CouponProduct {\n  id        String  @id @default(uuid())\n  couponId  String\n  productId String\n  coupon    Coupon  @relation(fields: [couponId], references: [id], onDelete: Cascade)\n  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)\n\n  @@unique([couponId, productId])\n  @@map("coupon_products")\n}\n\nmodel CourierSetting {\n  id String @id @default("default") // a single row\n\n  pathaoEnabled      Boolean @default(false)\n  pathaoBaseUrl      String?\n  pathaoClientId     String?\n  pathaoClientSecret String?\n  pathaoUsername     String?\n  pathaoPassword     String?\n  pathaoStoreId      String?\n\n  steadfastEnabled          Boolean @default(false)\n  steadfastApiKey           String?\n  steadfastSecretKey        String?\n  steadfastWebhookAuthToken String?\n\n  updatedAt DateTime @updatedAt\n\n  @@map("courier_settings")\n}\n\nenum Role {\n  SUPER_ADMIN\n  ADMIN\n  USER\n}\n\nenum UserStatus {\n  ACTIVE\n  BLOCKED\n  PENDING\n  DELETED\n}\n\nenum ProductStatus {\n  ACTIVE\n  DRAFT\n  OUT_OF_STOCK\n  DELETED\n}\n\nenum OrderStatus {\n  PENDING\n  PROCESSING\n  SHIPPED\n  DELIVERED\n  CANCELLED\n}\n\nenum PaymentStatus {\n  PENDING\n  PAID\n  FAILED\n  REFUNDED\n}\n\nenum ProductType {\n  SIMPLE\n  VARIABLE\n}\n\nenum OrderType {\n  ONLINE\n  POS\n  LANDING_PAGE\n}\n\nenum VatType {\n  INCLUDED\n  EXCLUDED\n}\n\nenum CheckoutSource {\n  STOREFRONT\n  LANDING_PAGE\n}\n\nenum CourierProvider {\n  PATHAO\n  STEADFAST\n}\n\nenum HomeCategoryDisplayType {\n  BEST_SELLING\n  LATEST\n}\n\nmodel ExpenseCategory {\n  id       String  @id @default(uuid())\n  name     String\n  isActive Boolean @default(true)\n\n  shopId   String\n  shop     Shop      @relation(fields: [shopId], references: [id], onDelete: Cascade)\n  expenses Expense[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@map("expense_categories")\n}\n\nmodel Expense {\n  id    String   @id @default(uuid())\n  name  String\n  price Float\n  note  String?\n  date  DateTime\n\n  categoryId String\n  category   ExpenseCategory @relation(fields: [categoryId], references: [id])\n  shopId     String\n  shop       Shop            @relation(fields: [shopId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([categoryId])\n  @@map("expenses")\n}\n\nmodel Faq {\n  id        String   @id @default(uuid())\n  question  String\n  answer    String\n  order     Int      @default(0)\n  isActive  Boolean  @default(true)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("faqs")\n}\n\nmodel FlashSale {\n  id        String    @id @default("default") // a single row\n  isActive  Boolean   @default(false)\n  startTime DateTime?\n  endTime   DateTime?\n  updatedAt DateTime  @updatedAt\n\n  products FlashSaleProduct[]\n\n  @@map("flash_sales")\n}\n\nmodel FlashSaleProduct {\n  id          String    @id @default(uuid())\n  flashSaleId String    @default("default")\n  flashSale   FlashSale @relation(fields: [flashSaleId], references: [id], onDelete: Cascade)\n  productId   String\n  product     Product   @relation(fields: [productId], references: [id], onDelete: Cascade)\n  order       Int       @default(0)\n  createdAt   DateTime  @default(now())\n\n  @@unique([flashSaleId, productId])\n  @@index([productId])\n  @@map("flash_sale_products")\n}\n\nmodel HeroSlider {\n  id        String   @id @default(uuid())\n  image     String\n  isActive  Boolean  @default(true)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("hero_sliders")\n}\n\nmodel HomeCategorySection {\n  id          String                  @id @default(uuid())\n  categoryId  String\n  category    Category                @relation(fields: [categoryId], references: [id], onDelete: Cascade)\n  displayType HomeCategoryDisplayType @default(BEST_SELLING)\n  order       Int                     @default(0)\n  createdAt   DateTime                @default(now())\n  updatedAt   DateTime                @updatedAt\n\n  @@index([categoryId])\n  @@map("home_category_sections")\n}\n\nmodel LandingPage {\n  id       String  @id @default(uuid())\n  slug     String  @unique\n  isActive Boolean @default(true)\n\n  // Design \u2014 theme color key (see LANDING_PAGE_THEMES on the client), per-section visibility,\n  // and section order (see LANDING_PAGE_SECTION_KEYS on the client)\n  themeColor             String   @default("violet")\n  showGallerySection     Boolean  @default(true)\n  showAboutSection       Boolean  @default(true)\n  showDescriptionSection Boolean  @default(true)\n  showReviewsSection     Boolean  @default(true)\n  sectionOrder           String[] @default(["price", "gallery", "about", "description", "reviews"])\n\n  // Relations\n  productId String\n  product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)\n  shopId    String\n  shop      Shop    @relation(fields: [shopId], references: [id], onDelete: Cascade)\n\n  // Header\n  campaignTitle            String\n  campaignShortDescription String?\n  bannerImage              String?\n\n  // Price highlight labels (free text set by the seller, e.g. "\u09AA\u09C2\u09B0\u09CD\u09AC\u09C7\u09B0 \u09AE\u09C2\u09B2\u09CD\u09AF" / "Regular Price")\n  regularPriceLabel String?\n  offerPriceLabel   String?\n\n  // Gallery\n  galleryHeading     String?\n  galleryDescription String?\n  galleryImages      String[]\n\n  // About + video\n  aboutHeading     String?\n  aboutDescription String?\n  videoUrl         String?\n\n  // Long description\n  descriptionTitle String?\n  description      String?\n\n  // Reviews\n  reviewHeading String?\n  reviewImages  String[]\n\n  // Order form\n  orderFormHeading String @default("Order Now")\n  orderButtonText  String @default("\u0985\u09B0\u09CD\u09A1\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8")\n\n  views Int @default(0)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([productId])\n  @@map("landing_pages")\n}\n\nenum NotificationType {\n  ORDER_PLACED\n  ORDER_STATUS_CHANGED\n  PAYMENT_STATUS_CHANGED\n  ORDER_RETURN_PROCESSED\n}\n\nmodel Notification {\n  id      String           @id @default(uuid())\n  type    NotificationType\n  title   String\n  message String\n  isRead  Boolean          @default(false)\n\n  // Relations\n  userId  String\n  user    User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n  orderId String?\n  order   Order?  @relation(fields: [orderId], references: [id], onDelete: SetNull)\n\n  createdAt DateTime @default(now())\n\n  @@index([userId, isRead])\n  @@index([userId, createdAt])\n  @@map("notifications")\n}\n\nmodel Order {\n  id            String        @id @default(uuid())\n  orderSeq      Int           @default(autoincrement())\n  orderNumber   String?       @unique\n  orderType     OrderType     @default(ONLINE)\n  totalAmount   Float\n  paymentStatus PaymentStatus @default(PENDING)\n  paymentMethod String? // cash, card, mfs, other\n  orderStatus   OrderStatus   @default(PENDING)\n\n  // Shipping address (structured)\n  fullName String?\n  phone    String?\n  address  String?\n  district String?\n\n  notes String? // Optional customer notes\n\n  // Relations\n  userId        String?\n  user          User?          @relation(fields: [userId], references: [id])\n  shopId        String?\n  shop          Shop?          @relation(fields: [shopId], references: [id])\n  items         OrderItem[]\n  notifications Notification[]\n  returns       OrderReturn[]\n\n  discountAmount Float   @default(0)\n  shippingFee    Float   @default(0)\n  couponId       String?\n  coupon         Coupon? @relation(fields: [couponId], references: [id])\n\n  // Courier assignment (Pathao / Steadfast) \u2014 set once an admin dispatches the order\n  courierProvider      CourierProvider?\n  courierConsignmentId String?\n  courierTrackingCode  String?\n  courierStatus        String?\n  courierAssignedAt    DateTime?\n\n  // Set once an SSLCommerz payment for this order has been validated\n  paymentValId String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([userId])\n  @@index([shopId])\n  @@index([paymentStatus])\n  @@index([orderStatus])\n  @@index([district])\n  @@index([couponId])\n  @@map("orders")\n}\n\nmodel OrderItem {\n  id        String @id @default(uuid())\n  quantity  Int\n  price     Float // Sell price at time of purchase\n  costPrice Float? // Purchase/cost price at time of purchase (null for orders placed before this field existed)\n\n  // Vendor payout tracking\n  vendorEarning   Float // price * quantity - commission\n  platformEarning Float // commission amount\n\n  // Item fulfillment status (per vendor)\n  status OrderStatus @default(PENDING)\n\n  // How much of `quantity` has been returned so far (remaining = quantity - returnedQuantity)\n  returnedQuantity Int @default(0)\n\n  // Relations\n  orderId          String\n  order            Order             @relation(fields: [orderId], references: [id])\n  productId        String\n  product          Product           @relation(fields: [productId], references: [id])\n  productVariantId String?\n  productVariant   ProductVariant?   @relation(fields: [productVariantId], references: [id])\n  shopId           String\n  shop             Shop              @relation(fields: [shopId], references: [id])\n  returnItems      OrderReturnItem[]\n\n  @@index([orderId])\n  @@index([shopId])\n  @@index([productId])\n  @@index([productVariantId])\n  @@map("order_items")\n}\n\nmodel OrderReturn {\n  id                 String  @id @default(uuid())\n  orderId            String\n  order              Order   @relation(fields: [orderId], references: [id])\n  shopId             String // every item in one submission belongs to the same seller\'s shop\n  shop               Shop    @relation(fields: [shopId], references: [id])\n  refundAmount       Float // sum(returnQty * price) for this submission\n  shippingFee        Float // order.shippingFee snapshot after this return\n  discountAmount     Float // order.discountAmount snapshot after this return\n  newTotalAmount     Float // order.totalAmount right after this return\n  processedByAdminId String?\n  processedByAdmin   User?   @relation("OrderReturnProcessedBy", fields: [processedByAdminId], references: [id])\n\n  items OrderReturnItem[]\n\n  createdAt DateTime @default(now())\n\n  @@index([orderId])\n  @@index([shopId])\n  @@map("order_returns")\n}\n\nmodel OrderReturnItem {\n  id               String          @id @default(uuid())\n  orderReturnId    String\n  orderReturn      OrderReturn     @relation(fields: [orderReturnId], references: [id], onDelete: Cascade)\n  orderItemId      String\n  orderItem        OrderItem       @relation(fields: [orderItemId], references: [id])\n  productId        String\n  product          Product         @relation(fields: [productId], references: [id])\n  productVariantId String?\n  productVariant   ProductVariant? @relation(fields: [productVariantId], references: [id])\n  quantity         Int\n  price            Float\n  subtotal         Float\n\n  @@index([orderReturnId])\n  @@index([orderItemId])\n  @@map("order_return_items")\n}\n\nmodel PageContent {\n  id        String   @id @default(uuid())\n  slug      String   @unique\n  title     String\n  content   String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("page_contents")\n}\n\nmodel PaymentSetting {\n  id String @id @default("default") // a single row\n\n  codEnabled Boolean @default(true)\n\n  sslcommerzEnabled       Boolean @default(false)\n  sslcommerzMode          String  @default("SANDBOX") // SANDBOX | LIVE\n  sslcommerzStoreId       String?\n  sslcommerzStorePassword String?\n\n  updatedAt DateTime @updatedAt\n\n  @@map("payment_settings")\n}\n\nmodel PosCartItem {\n  id String @id @default(uuid())\n\n  shopId String\n  shop   Shop   @relation(fields: [shopId], references: [id])\n\n  productId String\n  product   Product @relation(fields: [productId], references: [id])\n\n  productVariantId String?\n\n  productName  String\n  price        Float\n  quantity     Int     @default(1)\n  combination  String? // variant label e.g. "XL-Red"\n  productImage String?\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([productId])\n  @@map("pos_cart_items")\n}\n\nmodel Product {\n  id               String        @id @default(uuid())\n  name             String\n  slug             String        @unique\n  description      String\n  shortDescription String\n  images           String[]\n  stock            Int           @default(0)\n  status           ProductStatus @default(DRAFT)\n  type             ProductType   @default(SIMPLE)\n  attributes       Json?\n\n  // SKU / Barcode (SIMPLE products only \u2014 VARIABLE products carry it per-variant)\n  sku String? @unique\n\n  // Pricing\n  purchasePrice Float // What vendor bought it for (internal cost)\n  regularPrice  Float // Original MRP / crossed-out price shown to customer\n  sellPrice     Float // Actual selling price (what customer pays)\n\n  // Tags / searchability\n  tags String[]\n\n  // Vat, Shipping, Featured configuration\n  vatType       VatType @default(INCLUDED)\n  vatPercentage Float   @default(0)\n  freeShipping  Boolean @default(false)\n  isFeatured    Boolean @default(false)\n\n  // Relations\n  shopId     String\n  shop       Shop     @relation(fields: [shopId], references: [id])\n  categoryId String\n  category   Category @relation(fields: [categoryId], references: [id])\n\n  variants         ProductVariant[]\n  reviews          Review[]\n  orderItems       OrderItem[]\n  cartItems        CartItem[]\n  coupons          CouponProduct[]\n  posCartItems     PosCartItem[]\n  landingPages     LandingPage[]\n  returnItems      OrderReturnItem[]\n  flashSaleEntries FlashSaleProduct[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([shopId])\n  @@index([categoryId])\n  @@index([status])\n  @@index([slug])\n  @@map("products")\n}\n\nmodel ProductVariant {\n  id          String  @id @default(uuid())\n  productId   String\n  product     Product @relation(fields: [productId], references: [id], onDelete: Cascade)\n  combination String // e.g. "XL-Red-500gm"\n  sku         String? @unique\n\n  quantity      Int     @default(0)\n  purchasePrice Float\n  regularPrice  Float\n  sellPrice     Float\n  image         String?\n\n  orderItems  OrderItem[]\n  cartItems   CartItem[]\n  returnItems OrderReturnItem[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([productId])\n  @@map("product_variants")\n}\n\nmodel DocumentEmbedding {\n  id String @id @default(uuid(7))\n\n  chunkKey    String  @unique\n  sourceType  String\n  sourceId    String\n  sourceLabel String?\n  content     String\n  metadata    Json?\n\n  embedding Unsupported("vector(2048)")\n\n  isDeleted Boolean   @default(false)\n  deletedAt DateTime?\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n\n  @@index([sourceType], name: "idx_document_embeddings_sourceType")\n  @@index([sourceId], name: "idx_document_embeddings_sourceId")\n  @@map("document_embeddings")\n}\n\nmodel Review {\n  id      String  @id @default(uuid())\n  rating  Int     @default(5) // 1\u20135 scale\n  comment String?\n\n  // Relations\n  userId    String\n  user      User    @relation(fields: [userId], references: [id])\n  productId String\n  product   Product @relation(fields: [productId], references: [id])\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([userId, productId]) // one review per product per user\n  @@index([productId])\n  @@index([userId])\n  @@map("reviews")\n}\n\ngenerator client {\n  provider        = "prisma-client"\n  output          = "../../src/generated/prisma"\n  previewFeatures = ["postgresqlExtensions"]\n}\n\ndatasource db {\n  provider   = "postgresql"\n  extensions = [vector]\n}\n\nmodel ShippingSetting {\n  id                      String @id @default("default") // a single row\n  insideDhakaShippingFee  Float  @default(70)\n  outsideDhakaShippingFee Float  @default(130)\n\n  updatedAt DateTime @updatedAt\n\n  @@map("shipping_settings")\n}\n\n// Single-vendor store: exactly one row is expected to exist (see seed.ts).\nmodel Shop {\n  id          String  @id @default(uuid())\n  name        String  @unique\n  description String?\n  logo        String?\n  banner      String?\n\n  // Relations\n  vendorId          String            @unique\n  vendor            User              @relation(fields: [vendorId], references: [id])\n  products          Product[]\n  orderItems        OrderItem[]\n  coupons           Coupon[]\n  posCartItems      PosCartItem[]\n  posOrders         Order[]\n  landingPages      LandingPage[]\n  expenseCategories ExpenseCategory[]\n  expenses          Expense[]\n  orderReturns      OrderReturn[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("shops")\n}\n\nmodel SiteSetting {\n  id          String  @id @default("default") // a single row\n  siteName    String  @default("AB Trims")\n  tagline     String?\n  description String  @default("Your ultimate multivendor marketplace. Discover premium products from verified sellers across the nation.")\n  logo        String?\n  phone       String?\n  email       String?\n  address     String?\n\n  facebook  String?\n  youtube   String?\n  instagram String?\n  linkedin  String?\n  tiktok    String?\n  whatsapp  String?\n\n  copyrightText String @default("All rights reserved.")\n\n  updatedAt DateTime @updatedAt\n\n  @@map("site_settings")\n}\n\nmodel SmsSetting {\n  id String @id @default("default") // a single row\n\n  enabled  Boolean @default(false)\n  apiKey   String?\n  senderId String?\n\n  updatedAt DateTime @updatedAt\n\n  @@map("sms_settings")\n}\n',
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
config.runtimeDataModel = JSON.parse('{"models":{"AbandonedCheckout":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"sessionToken","kind":"scalar","type":"String"},{"name":"source","kind":"enum","type":"CheckoutSource"},{"name":"landingPageSlug","kind":"scalar","type":"String"},{"name":"fullName","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"district","kind":"scalar","type":"String"},{"name":"notes","kind":"scalar","type":"String"},{"name":"items","kind":"scalar","type":"Json"},{"name":"subtotal","kind":"scalar","type":"Float"},{"name":"shippingFee","kind":"scalar","type":"Float"},{"name":"discountAmount","kind":"scalar","type":"Float"},{"name":"total","kind":"scalar","type":"Float"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"lastActivityAt","kind":"scalar","type":"DateTime"}],"dbName":"abandoned_checkouts"},"Admin":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"profilePhoto","kind":"scalar","type":"String"},{"name":"contactNumber","kind":"scalar","type":"String"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AdminToUser"}],"dbName":"admins"},"Attribute":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"values","kind":"object","type":"AttributeValue","relationName":"AttributeToAttributeValue"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"attributes"},"AttributeValue":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"attributeId","kind":"scalar","type":"String"},{"name":"attribute","kind":"object","type":"Attribute","relationName":"AttributeToAttributeValue"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"attribute_values"},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"role","kind":"enum","type":"Role"},{"name":"status","kind":"enum","type":"UserStatus"},{"name":"needPasswordChange","kind":"scalar","type":"Boolean"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"admin","kind":"object","type":"Admin","relationName":"AdminToUser"},{"name":"shop","kind":"object","type":"Shop","relationName":"ShopToUser"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToUser"},{"name":"cart","kind":"object","type":"Cart","relationName":"CartToUser"},{"name":"reviews","kind":"object","type":"Review","relationName":"ReviewToUser"},{"name":"notifications","kind":"object","type":"Notification","relationName":"NotificationToUser"},{"name":"processedOrderReturns","kind":"object","type":"OrderReturn","relationName":"OrderReturnProcessedBy"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Blog":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"excerpt","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"coverImage","kind":"scalar","type":"String"},{"name":"author","kind":"scalar","type":"String"},{"name":"isPublished","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"blogs"},"Cart":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"items","kind":"object","type":"CartItem","relationName":"CartToCartItem"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"CartToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"carts"},"CartItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"cartId","kind":"scalar","type":"String"},{"name":"cart","kind":"object","type":"Cart","relationName":"CartToCartItem"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"CartItemToProduct"},{"name":"productVariantId","kind":"scalar","type":"String"},{"name":"productVariant","kind":"object","type":"ProductVariant","relationName":"CartItemToProductVariant"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"cart_items"},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"icon","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"parentId","kind":"scalar","type":"String"},{"name":"parent","kind":"object","type":"Category","relationName":"CategoryToSubcategory"},{"name":"subcategories","kind":"object","type":"Category","relationName":"CategoryToSubcategory"},{"name":"products","kind":"object","type":"Product","relationName":"CategoryToProduct"},{"name":"homeCategorySections","kind":"object","type":"HomeCategorySection","relationName":"CategoryToHomeCategorySection"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"categories"},"Coupon":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"code","kind":"scalar","type":"String"},{"name":"discountType","kind":"enum","type":"DiscountType"},{"name":"discountAmount","kind":"scalar","type":"Float"},{"name":"maxDiscountAmount","kind":"scalar","type":"Float"},{"name":"minPurchaseAmount","kind":"scalar","type":"Float"},{"name":"startDate","kind":"scalar","type":"DateTime"},{"name":"endDate","kind":"scalar","type":"DateTime"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"CouponToShop"},{"name":"products","kind":"object","type":"CouponProduct","relationName":"CouponToCouponProduct"},{"name":"orders","kind":"object","type":"Order","relationName":"CouponToOrder"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"coupons"},"CouponProduct":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"couponId","kind":"scalar","type":"String"},{"name":"productId","kind":"scalar","type":"String"},{"name":"coupon","kind":"object","type":"Coupon","relationName":"CouponToCouponProduct"},{"name":"product","kind":"object","type":"Product","relationName":"CouponProductToProduct"}],"dbName":"coupon_products"},"CourierSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"pathaoEnabled","kind":"scalar","type":"Boolean"},{"name":"pathaoBaseUrl","kind":"scalar","type":"String"},{"name":"pathaoClientId","kind":"scalar","type":"String"},{"name":"pathaoClientSecret","kind":"scalar","type":"String"},{"name":"pathaoUsername","kind":"scalar","type":"String"},{"name":"pathaoPassword","kind":"scalar","type":"String"},{"name":"pathaoStoreId","kind":"scalar","type":"String"},{"name":"steadfastEnabled","kind":"scalar","type":"Boolean"},{"name":"steadfastApiKey","kind":"scalar","type":"String"},{"name":"steadfastSecretKey","kind":"scalar","type":"String"},{"name":"steadfastWebhookAuthToken","kind":"scalar","type":"String"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"courier_settings"},"ExpenseCategory":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"ExpenseCategoryToShop"},{"name":"expenses","kind":"object","type":"Expense","relationName":"ExpenseToExpenseCategory"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"expense_categories"},"Expense":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"note","kind":"scalar","type":"String"},{"name":"date","kind":"scalar","type":"DateTime"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"ExpenseCategory","relationName":"ExpenseToExpenseCategory"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"ExpenseToShop"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"expenses"},"Faq":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"question","kind":"scalar","type":"String"},{"name":"answer","kind":"scalar","type":"String"},{"name":"order","kind":"scalar","type":"Int"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"faqs"},"FlashSale":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"startTime","kind":"scalar","type":"DateTime"},{"name":"endTime","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"products","kind":"object","type":"FlashSaleProduct","relationName":"FlashSaleToFlashSaleProduct"}],"dbName":"flash_sales"},"FlashSaleProduct":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"flashSaleId","kind":"scalar","type":"String"},{"name":"flashSale","kind":"object","type":"FlashSale","relationName":"FlashSaleToFlashSaleProduct"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"FlashSaleProductToProduct"},{"name":"order","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":"flash_sale_products"},"HeroSlider":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"hero_sliders"},"HomeCategorySection":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToHomeCategorySection"},{"name":"displayType","kind":"enum","type":"HomeCategoryDisplayType"},{"name":"order","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"home_category_sections"},"LandingPage":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"isActive","kind":"scalar","type":"Boolean"},{"name":"themeColor","kind":"scalar","type":"String"},{"name":"showGallerySection","kind":"scalar","type":"Boolean"},{"name":"showAboutSection","kind":"scalar","type":"Boolean"},{"name":"showDescriptionSection","kind":"scalar","type":"Boolean"},{"name":"showReviewsSection","kind":"scalar","type":"Boolean"},{"name":"sectionOrder","kind":"scalar","type":"String"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"LandingPageToProduct"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"LandingPageToShop"},{"name":"campaignTitle","kind":"scalar","type":"String"},{"name":"campaignShortDescription","kind":"scalar","type":"String"},{"name":"bannerImage","kind":"scalar","type":"String"},{"name":"regularPriceLabel","kind":"scalar","type":"String"},{"name":"offerPriceLabel","kind":"scalar","type":"String"},{"name":"galleryHeading","kind":"scalar","type":"String"},{"name":"galleryDescription","kind":"scalar","type":"String"},{"name":"galleryImages","kind":"scalar","type":"String"},{"name":"aboutHeading","kind":"scalar","type":"String"},{"name":"aboutDescription","kind":"scalar","type":"String"},{"name":"videoUrl","kind":"scalar","type":"String"},{"name":"descriptionTitle","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"reviewHeading","kind":"scalar","type":"String"},{"name":"reviewImages","kind":"scalar","type":"String"},{"name":"orderFormHeading","kind":"scalar","type":"String"},{"name":"orderButtonText","kind":"scalar","type":"String"},{"name":"views","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"landing_pages"},"Notification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"type","kind":"enum","type":"NotificationType"},{"name":"title","kind":"scalar","type":"String"},{"name":"message","kind":"scalar","type":"String"},{"name":"isRead","kind":"scalar","type":"Boolean"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"NotificationToUser"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"NotificationToOrder"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":"notifications"},"Order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderSeq","kind":"scalar","type":"Int"},{"name":"orderNumber","kind":"scalar","type":"String"},{"name":"orderType","kind":"enum","type":"OrderType"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"paymentStatus","kind":"enum","type":"PaymentStatus"},{"name":"paymentMethod","kind":"scalar","type":"String"},{"name":"orderStatus","kind":"enum","type":"OrderStatus"},{"name":"fullName","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"district","kind":"scalar","type":"String"},{"name":"notes","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"OrderToUser"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"OrderToShop"},{"name":"items","kind":"object","type":"OrderItem","relationName":"OrderToOrderItem"},{"name":"notifications","kind":"object","type":"Notification","relationName":"NotificationToOrder"},{"name":"returns","kind":"object","type":"OrderReturn","relationName":"OrderToOrderReturn"},{"name":"discountAmount","kind":"scalar","type":"Float"},{"name":"shippingFee","kind":"scalar","type":"Float"},{"name":"couponId","kind":"scalar","type":"String"},{"name":"coupon","kind":"object","type":"Coupon","relationName":"CouponToOrder"},{"name":"courierProvider","kind":"enum","type":"CourierProvider"},{"name":"courierConsignmentId","kind":"scalar","type":"String"},{"name":"courierTrackingCode","kind":"scalar","type":"String"},{"name":"courierStatus","kind":"scalar","type":"String"},{"name":"courierAssignedAt","kind":"scalar","type":"DateTime"},{"name":"paymentValId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"orders"},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"price","kind":"scalar","type":"Float"},{"name":"costPrice","kind":"scalar","type":"Float"},{"name":"vendorEarning","kind":"scalar","type":"Float"},{"name":"platformEarning","kind":"scalar","type":"Float"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"returnedQuantity","kind":"scalar","type":"Int"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderItem"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"OrderItemToProduct"},{"name":"productVariantId","kind":"scalar","type":"String"},{"name":"productVariant","kind":"object","type":"ProductVariant","relationName":"OrderItemToProductVariant"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"OrderItemToShop"},{"name":"returnItems","kind":"object","type":"OrderReturnItem","relationName":"OrderItemToOrderReturnItem"}],"dbName":"order_items"},"OrderReturn":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderReturn"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"OrderReturnToShop"},{"name":"refundAmount","kind":"scalar","type":"Float"},{"name":"shippingFee","kind":"scalar","type":"Float"},{"name":"discountAmount","kind":"scalar","type":"Float"},{"name":"newTotalAmount","kind":"scalar","type":"Float"},{"name":"processedByAdminId","kind":"scalar","type":"String"},{"name":"processedByAdmin","kind":"object","type":"User","relationName":"OrderReturnProcessedBy"},{"name":"items","kind":"object","type":"OrderReturnItem","relationName":"OrderReturnToOrderReturnItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":"order_returns"},"OrderReturnItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"orderReturnId","kind":"scalar","type":"String"},{"name":"orderReturn","kind":"object","type":"OrderReturn","relationName":"OrderReturnToOrderReturnItem"},{"name":"orderItemId","kind":"scalar","type":"String"},{"name":"orderItem","kind":"object","type":"OrderItem","relationName":"OrderItemToOrderReturnItem"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"OrderReturnItemToProduct"},{"name":"productVariantId","kind":"scalar","type":"String"},{"name":"productVariant","kind":"object","type":"ProductVariant","relationName":"OrderReturnItemToProductVariant"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"price","kind":"scalar","type":"Float"},{"name":"subtotal","kind":"scalar","type":"Float"}],"dbName":"order_return_items"},"PageContent":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"page_contents"},"PaymentSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"codEnabled","kind":"scalar","type":"Boolean"},{"name":"sslcommerzEnabled","kind":"scalar","type":"Boolean"},{"name":"sslcommerzMode","kind":"scalar","type":"String"},{"name":"sslcommerzStoreId","kind":"scalar","type":"String"},{"name":"sslcommerzStorePassword","kind":"scalar","type":"String"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"payment_settings"},"PosCartItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"PosCartItemToShop"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"PosCartItemToProduct"},{"name":"productVariantId","kind":"scalar","type":"String"},{"name":"productName","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"combination","kind":"scalar","type":"String"},{"name":"productImage","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"pos_cart_items"},"Product":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"shortDescription","kind":"scalar","type":"String"},{"name":"images","kind":"scalar","type":"String"},{"name":"stock","kind":"scalar","type":"Int"},{"name":"status","kind":"enum","type":"ProductStatus"},{"name":"type","kind":"enum","type":"ProductType"},{"name":"attributes","kind":"scalar","type":"Json"},{"name":"sku","kind":"scalar","type":"String"},{"name":"purchasePrice","kind":"scalar","type":"Float"},{"name":"regularPrice","kind":"scalar","type":"Float"},{"name":"sellPrice","kind":"scalar","type":"Float"},{"name":"tags","kind":"scalar","type":"String"},{"name":"vatType","kind":"enum","type":"VatType"},{"name":"vatPercentage","kind":"scalar","type":"Float"},{"name":"freeShipping","kind":"scalar","type":"Boolean"},{"name":"isFeatured","kind":"scalar","type":"Boolean"},{"name":"shopId","kind":"scalar","type":"String"},{"name":"shop","kind":"object","type":"Shop","relationName":"ProductToShop"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToProduct"},{"name":"variants","kind":"object","type":"ProductVariant","relationName":"ProductToProductVariant"},{"name":"reviews","kind":"object","type":"Review","relationName":"ProductToReview"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"OrderItemToProduct"},{"name":"cartItems","kind":"object","type":"CartItem","relationName":"CartItemToProduct"},{"name":"coupons","kind":"object","type":"CouponProduct","relationName":"CouponProductToProduct"},{"name":"posCartItems","kind":"object","type":"PosCartItem","relationName":"PosCartItemToProduct"},{"name":"landingPages","kind":"object","type":"LandingPage","relationName":"LandingPageToProduct"},{"name":"returnItems","kind":"object","type":"OrderReturnItem","relationName":"OrderReturnItemToProduct"},{"name":"flashSaleEntries","kind":"object","type":"FlashSaleProduct","relationName":"FlashSaleProductToProduct"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"products"},"ProductVariant":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"ProductToProductVariant"},{"name":"combination","kind":"scalar","type":"String"},{"name":"sku","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"purchasePrice","kind":"scalar","type":"Float"},{"name":"regularPrice","kind":"scalar","type":"Float"},{"name":"sellPrice","kind":"scalar","type":"Float"},{"name":"image","kind":"scalar","type":"String"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"OrderItemToProductVariant"},{"name":"cartItems","kind":"object","type":"CartItem","relationName":"CartItemToProductVariant"},{"name":"returnItems","kind":"object","type":"OrderReturnItem","relationName":"OrderReturnItemToProductVariant"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"product_variants"},"DocumentEmbedding":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"chunkKey","kind":"scalar","type":"String"},{"name":"sourceType","kind":"scalar","type":"String"},{"name":"sourceId","kind":"scalar","type":"String"},{"name":"sourceLabel","kind":"scalar","type":"String"},{"name":"content","kind":"scalar","type":"String"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"isDeleted","kind":"scalar","type":"Boolean"},{"name":"deletedAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"document_embeddings"},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"productId","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"Product","relationName":"ProductToReview"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"reviews"},"ShippingSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"insideDhakaShippingFee","kind":"scalar","type":"Float"},{"name":"outsideDhakaShippingFee","kind":"scalar","type":"Float"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"shipping_settings"},"Shop":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"logo","kind":"scalar","type":"String"},{"name":"banner","kind":"scalar","type":"String"},{"name":"vendorId","kind":"scalar","type":"String"},{"name":"vendor","kind":"object","type":"User","relationName":"ShopToUser"},{"name":"products","kind":"object","type":"Product","relationName":"ProductToShop"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"OrderItemToShop"},{"name":"coupons","kind":"object","type":"Coupon","relationName":"CouponToShop"},{"name":"posCartItems","kind":"object","type":"PosCartItem","relationName":"PosCartItemToShop"},{"name":"posOrders","kind":"object","type":"Order","relationName":"OrderToShop"},{"name":"landingPages","kind":"object","type":"LandingPage","relationName":"LandingPageToShop"},{"name":"expenseCategories","kind":"object","type":"ExpenseCategory","relationName":"ExpenseCategoryToShop"},{"name":"expenses","kind":"object","type":"Expense","relationName":"ExpenseToShop"},{"name":"orderReturns","kind":"object","type":"OrderReturn","relationName":"OrderReturnToShop"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"shops"},"SiteSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"siteName","kind":"scalar","type":"String"},{"name":"tagline","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"logo","kind":"scalar","type":"String"},{"name":"phone","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"address","kind":"scalar","type":"String"},{"name":"facebook","kind":"scalar","type":"String"},{"name":"youtube","kind":"scalar","type":"String"},{"name":"instagram","kind":"scalar","type":"String"},{"name":"linkedin","kind":"scalar","type":"String"},{"name":"tiktok","kind":"scalar","type":"String"},{"name":"whatsapp","kind":"scalar","type":"String"},{"name":"copyrightText","kind":"scalar","type":"String"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"site_settings"},"SmsSetting":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"enabled","kind":"scalar","type":"Boolean"},{"name":"apiKey","kind":"scalar","type":"String"},{"name":"senderId","kind":"scalar","type":"String"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"sms_settings"}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","AbandonedCheckout.findUnique","AbandonedCheckout.findUniqueOrThrow","orderBy","cursor","AbandonedCheckout.findFirst","AbandonedCheckout.findFirstOrThrow","AbandonedCheckout.findMany","data","AbandonedCheckout.createOne","AbandonedCheckout.createMany","AbandonedCheckout.createManyAndReturn","AbandonedCheckout.updateOne","AbandonedCheckout.updateMany","AbandonedCheckout.updateManyAndReturn","create","update","AbandonedCheckout.upsertOne","AbandonedCheckout.deleteOne","AbandonedCheckout.deleteMany","having","_count","_avg","_sum","_min","_max","AbandonedCheckout.groupBy","AbandonedCheckout.aggregate","user","sessions","accounts","admin","vendor","shop","parent","subcategories","products","category","homeCategorySections","product","items","order","notifications","processedByAdmin","orderReturn","orderItem","productVariant","returns","coupon","orders","returnItems","orderItems","cart","cartItems","variants","reviews","coupons","posCartItems","landingPages","flashSale","flashSaleEntries","posOrders","expenses","expenseCategories","orderReturns","processedOrderReturns","Admin.findUnique","Admin.findUniqueOrThrow","Admin.findFirst","Admin.findFirstOrThrow","Admin.findMany","Admin.createOne","Admin.createMany","Admin.createManyAndReturn","Admin.updateOne","Admin.updateMany","Admin.updateManyAndReturn","Admin.upsertOne","Admin.deleteOne","Admin.deleteMany","Admin.groupBy","Admin.aggregate","attribute","values","Attribute.findUnique","Attribute.findUniqueOrThrow","Attribute.findFirst","Attribute.findFirstOrThrow","Attribute.findMany","Attribute.createOne","Attribute.createMany","Attribute.createManyAndReturn","Attribute.updateOne","Attribute.updateMany","Attribute.updateManyAndReturn","Attribute.upsertOne","Attribute.deleteOne","Attribute.deleteMany","Attribute.groupBy","Attribute.aggregate","AttributeValue.findUnique","AttributeValue.findUniqueOrThrow","AttributeValue.findFirst","AttributeValue.findFirstOrThrow","AttributeValue.findMany","AttributeValue.createOne","AttributeValue.createMany","AttributeValue.createManyAndReturn","AttributeValue.updateOne","AttributeValue.updateMany","AttributeValue.updateManyAndReturn","AttributeValue.upsertOne","AttributeValue.deleteOne","AttributeValue.deleteMany","AttributeValue.groupBy","AttributeValue.aggregate","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","User.upsertOne","User.deleteOne","User.deleteMany","User.groupBy","User.aggregate","Session.findUnique","Session.findUniqueOrThrow","Session.findFirst","Session.findFirstOrThrow","Session.findMany","Session.createOne","Session.createMany","Session.createManyAndReturn","Session.updateOne","Session.updateMany","Session.updateManyAndReturn","Session.upsertOne","Session.deleteOne","Session.deleteMany","Session.groupBy","Session.aggregate","Account.findUnique","Account.findUniqueOrThrow","Account.findFirst","Account.findFirstOrThrow","Account.findMany","Account.createOne","Account.createMany","Account.createManyAndReturn","Account.updateOne","Account.updateMany","Account.updateManyAndReturn","Account.upsertOne","Account.deleteOne","Account.deleteMany","Account.groupBy","Account.aggregate","Verification.findUnique","Verification.findUniqueOrThrow","Verification.findFirst","Verification.findFirstOrThrow","Verification.findMany","Verification.createOne","Verification.createMany","Verification.createManyAndReturn","Verification.updateOne","Verification.updateMany","Verification.updateManyAndReturn","Verification.upsertOne","Verification.deleteOne","Verification.deleteMany","Verification.groupBy","Verification.aggregate","Blog.findUnique","Blog.findUniqueOrThrow","Blog.findFirst","Blog.findFirstOrThrow","Blog.findMany","Blog.createOne","Blog.createMany","Blog.createManyAndReturn","Blog.updateOne","Blog.updateMany","Blog.updateManyAndReturn","Blog.upsertOne","Blog.deleteOne","Blog.deleteMany","Blog.groupBy","Blog.aggregate","Cart.findUnique","Cart.findUniqueOrThrow","Cart.findFirst","Cart.findFirstOrThrow","Cart.findMany","Cart.createOne","Cart.createMany","Cart.createManyAndReturn","Cart.updateOne","Cart.updateMany","Cart.updateManyAndReturn","Cart.upsertOne","Cart.deleteOne","Cart.deleteMany","Cart.groupBy","Cart.aggregate","CartItem.findUnique","CartItem.findUniqueOrThrow","CartItem.findFirst","CartItem.findFirstOrThrow","CartItem.findMany","CartItem.createOne","CartItem.createMany","CartItem.createManyAndReturn","CartItem.updateOne","CartItem.updateMany","CartItem.updateManyAndReturn","CartItem.upsertOne","CartItem.deleteOne","CartItem.deleteMany","CartItem.groupBy","CartItem.aggregate","Category.findUnique","Category.findUniqueOrThrow","Category.findFirst","Category.findFirstOrThrow","Category.findMany","Category.createOne","Category.createMany","Category.createManyAndReturn","Category.updateOne","Category.updateMany","Category.updateManyAndReturn","Category.upsertOne","Category.deleteOne","Category.deleteMany","Category.groupBy","Category.aggregate","Coupon.findUnique","Coupon.findUniqueOrThrow","Coupon.findFirst","Coupon.findFirstOrThrow","Coupon.findMany","Coupon.createOne","Coupon.createMany","Coupon.createManyAndReturn","Coupon.updateOne","Coupon.updateMany","Coupon.updateManyAndReturn","Coupon.upsertOne","Coupon.deleteOne","Coupon.deleteMany","Coupon.groupBy","Coupon.aggregate","CouponProduct.findUnique","CouponProduct.findUniqueOrThrow","CouponProduct.findFirst","CouponProduct.findFirstOrThrow","CouponProduct.findMany","CouponProduct.createOne","CouponProduct.createMany","CouponProduct.createManyAndReturn","CouponProduct.updateOne","CouponProduct.updateMany","CouponProduct.updateManyAndReturn","CouponProduct.upsertOne","CouponProduct.deleteOne","CouponProduct.deleteMany","CouponProduct.groupBy","CouponProduct.aggregate","CourierSetting.findUnique","CourierSetting.findUniqueOrThrow","CourierSetting.findFirst","CourierSetting.findFirstOrThrow","CourierSetting.findMany","CourierSetting.createOne","CourierSetting.createMany","CourierSetting.createManyAndReturn","CourierSetting.updateOne","CourierSetting.updateMany","CourierSetting.updateManyAndReturn","CourierSetting.upsertOne","CourierSetting.deleteOne","CourierSetting.deleteMany","CourierSetting.groupBy","CourierSetting.aggregate","ExpenseCategory.findUnique","ExpenseCategory.findUniqueOrThrow","ExpenseCategory.findFirst","ExpenseCategory.findFirstOrThrow","ExpenseCategory.findMany","ExpenseCategory.createOne","ExpenseCategory.createMany","ExpenseCategory.createManyAndReturn","ExpenseCategory.updateOne","ExpenseCategory.updateMany","ExpenseCategory.updateManyAndReturn","ExpenseCategory.upsertOne","ExpenseCategory.deleteOne","ExpenseCategory.deleteMany","ExpenseCategory.groupBy","ExpenseCategory.aggregate","Expense.findUnique","Expense.findUniqueOrThrow","Expense.findFirst","Expense.findFirstOrThrow","Expense.findMany","Expense.createOne","Expense.createMany","Expense.createManyAndReturn","Expense.updateOne","Expense.updateMany","Expense.updateManyAndReturn","Expense.upsertOne","Expense.deleteOne","Expense.deleteMany","Expense.groupBy","Expense.aggregate","Faq.findUnique","Faq.findUniqueOrThrow","Faq.findFirst","Faq.findFirstOrThrow","Faq.findMany","Faq.createOne","Faq.createMany","Faq.createManyAndReturn","Faq.updateOne","Faq.updateMany","Faq.updateManyAndReturn","Faq.upsertOne","Faq.deleteOne","Faq.deleteMany","Faq.groupBy","Faq.aggregate","FlashSale.findUnique","FlashSale.findUniqueOrThrow","FlashSale.findFirst","FlashSale.findFirstOrThrow","FlashSale.findMany","FlashSale.createOne","FlashSale.createMany","FlashSale.createManyAndReturn","FlashSale.updateOne","FlashSale.updateMany","FlashSale.updateManyAndReturn","FlashSale.upsertOne","FlashSale.deleteOne","FlashSale.deleteMany","FlashSale.groupBy","FlashSale.aggregate","FlashSaleProduct.findUnique","FlashSaleProduct.findUniqueOrThrow","FlashSaleProduct.findFirst","FlashSaleProduct.findFirstOrThrow","FlashSaleProduct.findMany","FlashSaleProduct.createOne","FlashSaleProduct.createMany","FlashSaleProduct.createManyAndReturn","FlashSaleProduct.updateOne","FlashSaleProduct.updateMany","FlashSaleProduct.updateManyAndReturn","FlashSaleProduct.upsertOne","FlashSaleProduct.deleteOne","FlashSaleProduct.deleteMany","FlashSaleProduct.groupBy","FlashSaleProduct.aggregate","HeroSlider.findUnique","HeroSlider.findUniqueOrThrow","HeroSlider.findFirst","HeroSlider.findFirstOrThrow","HeroSlider.findMany","HeroSlider.createOne","HeroSlider.createMany","HeroSlider.createManyAndReturn","HeroSlider.updateOne","HeroSlider.updateMany","HeroSlider.updateManyAndReturn","HeroSlider.upsertOne","HeroSlider.deleteOne","HeroSlider.deleteMany","HeroSlider.groupBy","HeroSlider.aggregate","HomeCategorySection.findUnique","HomeCategorySection.findUniqueOrThrow","HomeCategorySection.findFirst","HomeCategorySection.findFirstOrThrow","HomeCategorySection.findMany","HomeCategorySection.createOne","HomeCategorySection.createMany","HomeCategorySection.createManyAndReturn","HomeCategorySection.updateOne","HomeCategorySection.updateMany","HomeCategorySection.updateManyAndReturn","HomeCategorySection.upsertOne","HomeCategorySection.deleteOne","HomeCategorySection.deleteMany","HomeCategorySection.groupBy","HomeCategorySection.aggregate","LandingPage.findUnique","LandingPage.findUniqueOrThrow","LandingPage.findFirst","LandingPage.findFirstOrThrow","LandingPage.findMany","LandingPage.createOne","LandingPage.createMany","LandingPage.createManyAndReturn","LandingPage.updateOne","LandingPage.updateMany","LandingPage.updateManyAndReturn","LandingPage.upsertOne","LandingPage.deleteOne","LandingPage.deleteMany","LandingPage.groupBy","LandingPage.aggregate","Notification.findUnique","Notification.findUniqueOrThrow","Notification.findFirst","Notification.findFirstOrThrow","Notification.findMany","Notification.createOne","Notification.createMany","Notification.createManyAndReturn","Notification.updateOne","Notification.updateMany","Notification.updateManyAndReturn","Notification.upsertOne","Notification.deleteOne","Notification.deleteMany","Notification.groupBy","Notification.aggregate","Order.findUnique","Order.findUniqueOrThrow","Order.findFirst","Order.findFirstOrThrow","Order.findMany","Order.createOne","Order.createMany","Order.createManyAndReturn","Order.updateOne","Order.updateMany","Order.updateManyAndReturn","Order.upsertOne","Order.deleteOne","Order.deleteMany","Order.groupBy","Order.aggregate","OrderItem.findUnique","OrderItem.findUniqueOrThrow","OrderItem.findFirst","OrderItem.findFirstOrThrow","OrderItem.findMany","OrderItem.createOne","OrderItem.createMany","OrderItem.createManyAndReturn","OrderItem.updateOne","OrderItem.updateMany","OrderItem.updateManyAndReturn","OrderItem.upsertOne","OrderItem.deleteOne","OrderItem.deleteMany","OrderItem.groupBy","OrderItem.aggregate","OrderReturn.findUnique","OrderReturn.findUniqueOrThrow","OrderReturn.findFirst","OrderReturn.findFirstOrThrow","OrderReturn.findMany","OrderReturn.createOne","OrderReturn.createMany","OrderReturn.createManyAndReturn","OrderReturn.updateOne","OrderReturn.updateMany","OrderReturn.updateManyAndReturn","OrderReturn.upsertOne","OrderReturn.deleteOne","OrderReturn.deleteMany","OrderReturn.groupBy","OrderReturn.aggregate","OrderReturnItem.findUnique","OrderReturnItem.findUniqueOrThrow","OrderReturnItem.findFirst","OrderReturnItem.findFirstOrThrow","OrderReturnItem.findMany","OrderReturnItem.createOne","OrderReturnItem.createMany","OrderReturnItem.createManyAndReturn","OrderReturnItem.updateOne","OrderReturnItem.updateMany","OrderReturnItem.updateManyAndReturn","OrderReturnItem.upsertOne","OrderReturnItem.deleteOne","OrderReturnItem.deleteMany","OrderReturnItem.groupBy","OrderReturnItem.aggregate","PageContent.findUnique","PageContent.findUniqueOrThrow","PageContent.findFirst","PageContent.findFirstOrThrow","PageContent.findMany","PageContent.createOne","PageContent.createMany","PageContent.createManyAndReturn","PageContent.updateOne","PageContent.updateMany","PageContent.updateManyAndReturn","PageContent.upsertOne","PageContent.deleteOne","PageContent.deleteMany","PageContent.groupBy","PageContent.aggregate","PaymentSetting.findUnique","PaymentSetting.findUniqueOrThrow","PaymentSetting.findFirst","PaymentSetting.findFirstOrThrow","PaymentSetting.findMany","PaymentSetting.createOne","PaymentSetting.createMany","PaymentSetting.createManyAndReturn","PaymentSetting.updateOne","PaymentSetting.updateMany","PaymentSetting.updateManyAndReturn","PaymentSetting.upsertOne","PaymentSetting.deleteOne","PaymentSetting.deleteMany","PaymentSetting.groupBy","PaymentSetting.aggregate","PosCartItem.findUnique","PosCartItem.findUniqueOrThrow","PosCartItem.findFirst","PosCartItem.findFirstOrThrow","PosCartItem.findMany","PosCartItem.createOne","PosCartItem.createMany","PosCartItem.createManyAndReturn","PosCartItem.updateOne","PosCartItem.updateMany","PosCartItem.updateManyAndReturn","PosCartItem.upsertOne","PosCartItem.deleteOne","PosCartItem.deleteMany","PosCartItem.groupBy","PosCartItem.aggregate","Product.findUnique","Product.findUniqueOrThrow","Product.findFirst","Product.findFirstOrThrow","Product.findMany","Product.createOne","Product.createMany","Product.createManyAndReturn","Product.updateOne","Product.updateMany","Product.updateManyAndReturn","Product.upsertOne","Product.deleteOne","Product.deleteMany","Product.groupBy","Product.aggregate","ProductVariant.findUnique","ProductVariant.findUniqueOrThrow","ProductVariant.findFirst","ProductVariant.findFirstOrThrow","ProductVariant.findMany","ProductVariant.createOne","ProductVariant.createMany","ProductVariant.createManyAndReturn","ProductVariant.updateOne","ProductVariant.updateMany","ProductVariant.updateManyAndReturn","ProductVariant.upsertOne","ProductVariant.deleteOne","ProductVariant.deleteMany","ProductVariant.groupBy","ProductVariant.aggregate","DocumentEmbedding.findUnique","DocumentEmbedding.findUniqueOrThrow","DocumentEmbedding.findFirst","DocumentEmbedding.findFirstOrThrow","DocumentEmbedding.findMany","DocumentEmbedding.updateOne","DocumentEmbedding.updateMany","DocumentEmbedding.updateManyAndReturn","DocumentEmbedding.deleteOne","DocumentEmbedding.deleteMany","DocumentEmbedding.groupBy","DocumentEmbedding.aggregate","Review.findUnique","Review.findUniqueOrThrow","Review.findFirst","Review.findFirstOrThrow","Review.findMany","Review.createOne","Review.createMany","Review.createManyAndReturn","Review.updateOne","Review.updateMany","Review.updateManyAndReturn","Review.upsertOne","Review.deleteOne","Review.deleteMany","Review.groupBy","Review.aggregate","ShippingSetting.findUnique","ShippingSetting.findUniqueOrThrow","ShippingSetting.findFirst","ShippingSetting.findFirstOrThrow","ShippingSetting.findMany","ShippingSetting.createOne","ShippingSetting.createMany","ShippingSetting.createManyAndReturn","ShippingSetting.updateOne","ShippingSetting.updateMany","ShippingSetting.updateManyAndReturn","ShippingSetting.upsertOne","ShippingSetting.deleteOne","ShippingSetting.deleteMany","ShippingSetting.groupBy","ShippingSetting.aggregate","Shop.findUnique","Shop.findUniqueOrThrow","Shop.findFirst","Shop.findFirstOrThrow","Shop.findMany","Shop.createOne","Shop.createMany","Shop.createManyAndReturn","Shop.updateOne","Shop.updateMany","Shop.updateManyAndReturn","Shop.upsertOne","Shop.deleteOne","Shop.deleteMany","Shop.groupBy","Shop.aggregate","SiteSetting.findUnique","SiteSetting.findUniqueOrThrow","SiteSetting.findFirst","SiteSetting.findFirstOrThrow","SiteSetting.findMany","SiteSetting.createOne","SiteSetting.createMany","SiteSetting.createManyAndReturn","SiteSetting.updateOne","SiteSetting.updateMany","SiteSetting.updateManyAndReturn","SiteSetting.upsertOne","SiteSetting.deleteOne","SiteSetting.deleteMany","SiteSetting.groupBy","SiteSetting.aggregate","SmsSetting.findUnique","SmsSetting.findUniqueOrThrow","SmsSetting.findFirst","SmsSetting.findFirstOrThrow","SmsSetting.findMany","SmsSetting.createOne","SmsSetting.createMany","SmsSetting.createManyAndReturn","SmsSetting.updateOne","SmsSetting.updateMany","SmsSetting.updateManyAndReturn","SmsSetting.upsertOne","SmsSetting.deleteOne","SmsSetting.deleteMany","SmsSetting.groupBy","SmsSetting.aggregate","AND","OR","NOT","id","enabled","apiKey","senderId","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","siteName","tagline","description","logo","phone","email","address","facebook","youtube","instagram","linkedin","tiktok","whatsapp","copyrightText","name","banner","vendorId","createdAt","every","some","none","insideDhakaShippingFee","outsideDhakaShippingFee","rating","comment","userId","productId","chunkKey","sourceType","sourceId","sourceLabel","content","metadata","isDeleted","deletedAt","string_contains","string_starts_with","string_ends_with","array_starts_with","array_ends_with","array_contains","combination","sku","quantity","purchasePrice","regularPrice","sellPrice","image","slug","shortDescription","images","stock","ProductStatus","status","ProductType","type","attributes","tags","VatType","vatType","vatPercentage","freeShipping","isFeatured","shopId","categoryId","has","hasEvery","hasSome","productVariantId","productName","price","productImage","codEnabled","sslcommerzEnabled","sslcommerzMode","sslcommerzStoreId","sslcommerzStorePassword","title","orderReturnId","orderItemId","subtotal","orderId","refundAmount","shippingFee","discountAmount","newTotalAmount","processedByAdminId","costPrice","vendorEarning","platformEarning","OrderStatus","returnedQuantity","orderSeq","orderNumber","OrderType","orderType","totalAmount","PaymentStatus","paymentStatus","paymentMethod","orderStatus","fullName","district","notes","couponId","CourierProvider","courierProvider","courierConsignmentId","courierTrackingCode","courierStatus","courierAssignedAt","paymentValId","NotificationType","message","isRead","isActive","themeColor","showGallerySection","showAboutSection","showDescriptionSection","showReviewsSection","sectionOrder","campaignTitle","campaignShortDescription","bannerImage","regularPriceLabel","offerPriceLabel","galleryHeading","galleryDescription","galleryImages","aboutHeading","aboutDescription","videoUrl","descriptionTitle","reviewHeading","reviewImages","orderFormHeading","orderButtonText","views","HomeCategoryDisplayType","displayType","flashSaleId","startTime","endTime","question","answer","note","date","pathaoEnabled","pathaoBaseUrl","pathaoClientId","pathaoClientSecret","pathaoUsername","pathaoPassword","pathaoStoreId","steadfastEnabled","steadfastApiKey","steadfastSecretKey","steadfastWebhookAuthToken","code","DiscountType","discountType","maxDiscountAmount","minPurchaseAmount","startDate","endDate","icon","parentId","cartId","excerpt","coverImage","author","isPublished","identifier","value","expiresAt","accountId","providerId","accessToken","refreshToken","idToken","accessTokenExpiresAt","refreshTokenExpiresAt","scope","password","token","ipAddress","userAgent","emailVerified","Role","role","UserStatus","needPasswordChange","attributeId","value_attributeId","profilePhoto","contactNumber","flashSaleId_productId","userId_productId","cartId_productId_productVariantId","couponId_productId","sessionToken","CheckoutSource","source","landingPageSlug","total","lastActivityAt","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","push","increment","decrement","multiply","divide"]'),
  graph: "3xLnAuwEEygAAJEKACCgBQAAjwoAMKEFAAAEABCiBQAAjwoAMKMFAQAAAAG3BQEAzAgAIbkFAQDMCAAhxAVAAM0IACGDBggA1wkAIYYGCADXCQAhhwYIANcJACGYBgEAzAgAIZkGAQDMCAAhmgYBAMwIACH8BgEAAAAB_gYAAJAK_gYi_wYBAMwIACGABwgA1wkAIYEHQADNCAAhAQAAAAEAIAEAAAABACATKAAAkQoAIKAFAACPCgAwoQUAAAQAEKIFAACPCgAwowUBAMoIACG3BQEAzAgAIbkFAQDMCAAhxAVAAM0IACGDBggA1wkAIYYGCADXCQAhhwYIANcJACGYBgEAzAgAIZkGAQDMCAAhmgYBAMwIACH8BgEAyggAIf4GAACQCv4GIv8GAQDMCAAhgAcIANcJACGBB0AAzQgAIQq3BQAAkgoAILkFAACSCgAggwYAAJIKACCGBgAAkgoAIIcGAACSCgAgmAYAAJIKACCZBgAAkgoAIJoGAACSCgAg_wYAAJIKACCABwAAkgoAIAMAAAAEACADAAAFADAEAAABACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIBAogAAAAAGjBQEAAAABtwUBAAAAAbkFAQAAAAHEBUAAAAABgwYIAAAAAYYGCAAAAAGHBggAAAABmAYBAAAAAZkGAQAAAAGaBgEAAAAB_AYBAAAAAf4GAAAA_gYC_wYBAAAAAYAHCAAAAAGBB0AAAAABAQgAAAkAIBAogAAAAAGjBQEAAAABtwUBAAAAAbkFAQAAAAHEBUAAAAABgwYIAAAAAYYGCAAAAAGHBggAAAABmAYBAAAAAZkGAQAAAAGaBgEAAAAB_AYBAAAAAf4GAAAA_gYC_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_AkAIDIAAPQJACAzAADUCAAgNQAAsQkAIDYAAIUKACA3AADHCQAgOAAA2AkAIDkAANYIACA6AADYCAAgPAAAoAkAIKAFAACBCgAwoQUAACgAEKIFAACBCgAwowUBAAAAAacFQADNCAAhtQUBAMoIACHBBQEAyggAIcQFQADNCAAh3QUBAAAAAd8FCADhCAAh4AUIAOEIACHhBQgA4QgAIeMFAQAAAAHkBQEAyggAIeUFAADwCAAg5gUCAKMJACHoBQAAggroBSLqBQAAgwrqBSLrBQAA7AgAIOwFAADwCAAg7gUAAIQK7gUi7wUIAOEIACHwBSAAywgAIfEFIADLCAAh8gUBAMoIACHzBQEAyggAIQMAAAAoACADAAApADAEAAAqACAQIgAA_gkAICMAAP8JACAkAADTCAAgJgAAgAoAIKAFAAD9CQAwoQUAACwAEKIFAAD9CQAwowUBAMoIACGnBUAAzQgAIcEFAQDKCAAhxAVAAM0IACHiBQEAzAgAIeMFAQDKCAAhpgYgAMsIACHZBgEAzAgAIdoGAQDMCAAhAQAAACwAIAciAADREAAgIwAA0hAAICQAAOMNACAmAADTEAAg4gUAAJIKACDZBgAAkgoAINoGAACSCgAgECIAAP4JACAjAAD_CQAgJAAA0wgAICYAAIAKACCgBQAA_QkAMKEFAAAsABCiBQAA_QkAMKMFAQAAAAGnBUAAzQgAIcEFAQAAAAHEBUAAzQgAIeIFAQDMCAAh4wUBAAAAAaYGIADLCAAh2QYBAMwIACHaBgEAzAgAIQMAAAAsACADAAAuADAEAAAvACADAAAAKAAgAwAAKQAwBAAAKgAgCiUAAPwJACApAgCjCQAhoAUAAPoJADChBQAAMgAQogUAAPoJADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHzBQEAyggAIb8GAAD7Cb8GIgElAADREAAgCiUAAPwJACApAgCjCQAhoAUAAPoJADChBQAAMgAQogUAAPoJADCjBQEAAAABpwVAAM0IACHEBUAAzQgAIfMFAQDKCAAhvwYAAPsJvwYiAwAAADIAIAMAADMAMAQAADQAIAEAAAAsACABAAAAKAAgAQAAADIAIBInAADcCQAgMgAA9AkAIDMAANQIACA1AACxCQAgoAUAAPkJADChBQAAOQAQogUAAPkJADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHNBQEAyggAIdwFAQDKCAAh3QUBAMwIACHeBQIAowkAId8FCADhCAAh4AUIAOEIACHhBQgA4QgAIeIFAQDMCAAhBicAAMoQACAyAADQEAAgMwAA5A0AIDUAALAPACDdBQAAkgoAIOIFAACSCgAgEicAANwJACAyAAD0CQAgMwAA1AgAIDUAALEJACCgBQAA-QkAMKEFAAA5ABCiBQAA-QkAMKMFAQAAAAGnBUAAzQgAIcQFQADNCAAhzQUBAMoIACHcBQEAyggAId0FAQAAAAHeBQIAowkAId8FCADhCAAh4AUIAOEIACHhBQgA4QgAIeIFAQDMCAAhAwAAADkAIAMAADoAMAQAADsAIBQhAADTCQAgJwAA3AkAICkAAPMJACAuAADkCQAgMgAA9AkAIKAFAAD4CQAwoQUAAD0AEKIFAAD4CQAwowUBAMoIACHNBQEAyggAId4FAgCjCQAh6AUAAOgJjgYi8gUBAMoIACH3BQEAzAgAIfkFCADhCAAhhAYBAMoIACGKBggA1wkAIYsGCADhCAAhjAYIAOEIACGOBgIAowkAIQchAACmEAAgJwAAyhAAICkAAM8QACAuAADLEAAgMgAA0BAAIPcFAACSCgAgigYAAJIKACAUIQAA0wkAICcAANwJACApAADzCQAgLgAA5AkAIDIAAPQJACCgBQAA-AkAMKEFAAA9ABCiBQAA-AkAMKMFAQAAAAHNBQEAyggAId4FAgCjCQAh6AUAAOgJjgYi8gUBAMoIACH3BQEAzAgAIfkFCADhCAAhhAYBAMoIACGKBggA1wkAIYsGCADhCAAhjAYIAOEIACGOBgIAowkAIQMAAAA9ACADAAA-ADAEAAA_ACAYHQAAwgkAIB4AAMMJACAfAADECQAgIQAAxQkAICoAAMgJACAxAADXCAAgNAAAxgkAIDcAAMcJACBBAADbCAAgoAUAAL8JADChBQAAQQAQogUAAL8JADCjBQEAyggAIacFQADNCAAhuAUBAMoIACHBBQEAyggAIcQFQADNCAAh1AUgAMsIACHVBUAA7QgAIeIFAQDMCAAh6AUAAMEJ8wYi7wYgAMsIACHxBgAAwAnxBiLzBiAAywgAIQEAAABBACABAAAAJgAgAwAAAD0AIAMAAD4AMAQAAD8AIA0cAADSCAAgKQAA9wkAIKAFAAD1CQAwoQUAAEUAEKIFAAD1CQAwowUBAMoIACHEBUAAzQgAIcwFAQDKCAAh6gUAAPYJpAYigAYBAMoIACGEBgEAzAgAIaQGAQDKCAAhpQYgAMsIACEDHAAA4g0AICkAAM8QACCEBgAAkgoAIA0cAADSCAAgKQAA9wkAIKAFAAD1CQAwoQUAAEUAEKIFAAD1CQAwowUBAAAAAcQFQADNCAAhzAUBAMoIACHqBQAA9gmkBiKABgEAyggAIYQGAQDMCAAhpAYBAMoIACGlBiAAywgAIQMAAABFACADAABGADAEAABHACAjHAAA6gkAICEAAMUJACAoAADUCAAgKgAAyAkAIC8AANsIACAwAADrCQAgoAUAAOUJADChBQAASQAQogUAAOUJADCjBQEAyggAIacFQADNCAAhtwUBAMwIACG5BQEAzAgAIcQFQADNCAAhzAUBAMwIACHyBQEAzAgAIYYGCADhCAAhhwYIAOEIACGPBgIAowkAIZAGAQDMCAAhkgYAAOYJkgYikwYIAOEIACGVBgAA5wmVBiKWBgEAzAgAIZcGAADoCY4GIpgGAQDMCAAhmQYBAMwIACGaBgEAzAgAIZsGAQDMCAAhnQYAAOkJnQYjngYBAMwIACGfBgEAzAgAIaAGAQDMCAAhoQZAAO0IACGiBgEAzAgAIQEAAABJACAQIQAA0wkAICgAAPQJACApAADzCQAgKwAA6gkAIKAFAADyCQAwoQUAAEsAEKIFAADyCQAwowUBAMoIACHEBUAAzQgAIfIFAQDKCAAhhAYBAMoIACGFBggA4QgAIYYGCADhCAAhhwYIAOEIACGIBggA4QgAIYkGAQDMCAAhBSEAAKYQACAoAADQEAAgKQAAzxAAICsAAOINACCJBgAAkgoAIBAhAADTCQAgKAAA9AkAICkAAPMJACArAADqCQAgoAUAAPIJADChBQAASwAQogUAAPIJADCjBQEAAAABxAVAAM0IACHyBQEAyggAIYQGAQDKCAAhhQYIAOEIACGGBggA4QgAIYcGCADhCAAhiAYIAOEIACGJBgEAzAgAIQMAAABLACADAABMADAEAABNACABAAAAQQAgDycAANwJACAsAADwCQAgLQAA8QkAIC4AAOQJACCgBQAA7wkAMKEFAABQABCiBQAA7wkAMKMFAQDKCAAhzQUBAMoIACHeBQIAowkAIfcFAQDMCAAh-QUIAOEIACGBBgEAyggAIYIGAQDKCAAhgwYIAOEIACEFJwAAyhAAICwAAM0QACAtAADOEAAgLgAAyxAAIPcFAACSCgAgDycAANwJACAsAADwCQAgLQAA8QkAIC4AAOQJACCgBQAA7wkAMKEFAABQABCiBQAA7wkAMKMFAQAAAAHNBQEAyggAId4FAgCjCQAh9wUBAMwIACH5BQgA4QgAIYEGAQDKCAAhggYBAMoIACGDBggA4QgAIQMAAABQACADAABRADAEAABSACABAAAAOQAgAQAAAFAAIBIhAADTCQAgJAAA2AkAIDEAANcIACCgBQAA1QkAMKEFAABWABCiBQAA1QkAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIfIFAQDKCAAhhwYIAOEIACGmBiAAywgAIdIGAQDKCAAh1AYAANYJ1AYi1QYIANcJACHWBggA4QgAIdcGQADNCAAh2AZAAM0IACEBAAAAVgAgCCcAANwJACAwAADuCQAgoAUAAO0JADChBQAAWAAQogUAAO0JADCjBQEAyggAIc0FAQDKCAAhmwYBAMoIACECJwAAyhAAIDAAAMwQACAJJwAA3AkAIDAAAO4JACCgBQAA7QkAMKEFAABYABCiBQAA7QkAMKMFAQAAAAHNBQEAyggAIZsGAQDKCAAh-wYAAOwJACADAAAAWAAgAwAAWQAwBAAAWgAgFhwAAOINACAhAACmEAAgKAAA5A0AICoAAKkQACAvAADrDQAgMAAAzBAAILcFAACSCgAguQUAAJIKACDMBQAAkgoAIPIFAACSCgAgkAYAAJIKACCWBgAAkgoAIJgGAACSCgAgmQYAAJIKACCaBgAAkgoAIJsGAACSCgAgnQYAAJIKACCeBgAAkgoAIJ8GAACSCgAgoAYAAJIKACChBgAAkgoAIKIGAACSCgAgIxwAAOoJACAhAADFCQAgKAAA1AgAICoAAMgJACAvAADbCAAgMAAA6wkAIKAFAADlCQAwoQUAAEkAEKIFAADlCQAwowUBAAAAAacFQADNCAAhtwUBAMwIACG5BQEAzAgAIcQFQADNCAAhzAUBAMwIACHyBQEAzAgAIYYGCADhCAAhhwYIAOEIACGPBgIAowkAIZAGAQAAAAGSBgAA5gmSBiKTBggA4QgAIZUGAADnCZUGIpYGAQDMCAAhlwYAAOgJjgYimAYBAMwIACGZBgEAzAgAIZoGAQDMCAAhmwYBAMwIACGdBgAA6QmdBiOeBgEAzAgAIZ8GAQDMCAAhoAYBAMwIACGhBkAA7QgAIaIGAQDMCAAhAwAAAEkAIAMAAFwAMAQAAF0AIAEAAABYACABAAAASQAgAQAAAD0AIAEAAABFACABAAAASwAgAQAAADkAIAMAAABQACADAABRADAEAABSACABAAAAUAAgDScAANwJACAuAADkCQAgNAAA4wkAIKAFAADiCQAwoQUAAGcAEKIFAADiCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhzQUBAMoIACHeBQIAowkAIfcFAQDMCAAh2wYBAMoIACEEJwAAyhAAIC4AAMsQACA0AACnEAAg9wUAAJIKACAOJwAA3AkAIC4AAOQJACA0AADjCQAgoAUAAOIJADChBQAAZwAQogUAAOIJADCjBQEAAAABpwVAAM0IACHEBUAAzQgAIc0FAQDKCAAh3gUCAKMJACH3BQEAzAgAIdsGAQDKCAAh-gYAAOEJACADAAAAZwAgAwAAaAAwBAAAaQAgAwAAAGcAIAMAAGgAMAQAAGkAIAEAAABnACABAAAAOQAgAwAAAFAAIAMAAFEAMAQAAFIAIAEAAAA9ACABAAAAZwAgAQAAAFAAIAwcAADSCAAgJwAA3AkAIKAFAADgCQAwoQUAAHIAEKIFAADgCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhygUCAKMJACHLBQEAzAgAIcwFAQDKCAAhzQUBAMoIACEDHAAA4g0AICcAAMoQACDLBQAAkgoAIA0cAADSCAAgJwAA3AkAIKAFAADgCQAwoQUAAHIAEKIFAADgCQAwowUBAAAAAacFQADNCAAhxAVAAM0IACHKBQIAowkAIcsFAQDMCAAhzAUBAMoIACHNBQEAyggAIfkGAADfCQAgAwAAAHIAIAMAAHMAMAQAAHQAIAMAAAA9ACADAAA-ADAEAAA_ACADAAAAZwAgAwAAaAAwBAAAaQAgAwAAAFgAIAMAAFkAMAQAAFoAIBAhAADTCQAgJwAA3AkAIKAFAADeCQAwoQUAAHkAEKIFAADeCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhzQUBAMoIACHcBQEAzAgAId4FAgCjCQAh8gUBAMoIACH3BQEAzAgAIfgFAQDKCAAh-QUIAOEIACH6BQEAzAgAIQUhAACmEAAgJwAAyhAAINwFAACSCgAg9wUAAJIKACD6BQAAkgoAIBAhAADTCQAgJwAA3AkAIKAFAADeCQAwoQUAAHkAEKIFAADeCQAwowUBAAAAAacFQADNCAAhxAVAAM0IACHNBQEAyggAIdwFAQDMCAAh3gUCAKMJACHyBQEAyggAIfcFAQDMCAAh-AUBAMoIACH5BQgA4QgAIfoFAQDMCAAhAwAAAHkAIAMAAHoAMAQAAHsAICQhAADTCQAgJwAA3AkAIKAFAADdCQAwoQUAAH0AEKIFAADdCQAwowUBAMoIACGnBUAAzQgAIbUFAQDMCAAhxAVAAM0IACHNBQEAyggAIeMFAQDKCAAh8gUBAMoIACGmBiAAywgAIacGAQDKCAAhqAYgAMsIACGpBiAAywgAIaoGIADLCAAhqwYgAMsIACGsBgAA8AgAIK0GAQDKCAAhrgYBAMwIACGvBgEAzAgAIbAGAQDMCAAhsQYBAMwIACGyBgEAzAgAIbMGAQDMCAAhtAYAAPAIACC1BgEAzAgAIbYGAQDMCAAhtwYBAMwIACG4BgEAzAgAIbkGAQDMCAAhugYAAPAIACC7BgEAyggAIbwGAQDKCAAhvQYCAKMJACEOIQAAphAAICcAAMoQACC1BQAAkgoAIK4GAACSCgAgrwYAAJIKACCwBgAAkgoAILEGAACSCgAgsgYAAJIKACCzBgAAkgoAILUGAACSCgAgtgYAAJIKACC3BgAAkgoAILgGAACSCgAguQYAAJIKACAkIQAA0wkAICcAANwJACCgBQAA3QkAMKEFAAB9ABCiBQAA3QkAMKMFAQAAAAGnBUAAzQgAIbUFAQDMCAAhxAVAAM0IACHNBQEAyggAIeMFAQAAAAHyBQEAyggAIaYGIADLCAAhpwYBAMoIACGoBiAAywgAIakGIADLCAAhqgYgAMsIACGrBiAAywgAIawGAADwCAAgrQYBAMoIACGuBgEAzAgAIa8GAQDMCAAhsAYBAMwIACGxBgEAzAgAIbIGAQDMCAAhswYBAMwIACG0BgAA8AgAILUGAQDMCAAhtgYBAMwIACG3BgEAzAgAIbgGAQDMCAAhuQYBAMwIACG6BgAA8AgAILsGAQDKCAAhvAYBAMoIACG9BgIAowkAIQMAAAB9ACADAAB-ADAEAAB_ACADAAAAUAAgAwAAUQAwBAAAUgAgCicAANwJACApAgCjCQAhOwAA2wkAIKAFAADaCQAwoQUAAIIBABCiBQAA2gkAMKMFAQDKCAAhxAVAAM0IACHNBQEAyggAIcAGAQDKCAAhAicAAMoQACA7AADJEAAgCycAANwJACApAgCjCQAhOwAA2wkAIKAFAADaCQAwoQUAAIIBABCiBQAA2gkAMKMFAQAAAAHEBUAAzQgAIc0FAQDKCAAhwAYBAMoIACH4BgAA2QkAIAMAAACCAQAgAwAAgwEAMAQAAIQBACADAAAAggEAIAMAAIMBADAEAACEAQAgAQAAAIIBACABAAAAOQAgAQAAAHIAIAEAAAA9ACABAAAAZwAgAQAAAFgAIAEAAAB5ACABAAAAfQAgAQAAAFAAIAEAAACCAQAgAwAAAD0AIAMAAD4AMAQAAD8AIAQhAACmEAAgJAAAyBAAIDEAAOcNACDVBgAAkgoAIBIhAADTCQAgJAAA2AkAIDEAANcIACCgBQAA1QkAMKEFAABWABCiBQAA1QkAMKMFAQAAAAGnBUAAzQgAIcQFQADNCAAh8gUBAMoIACGHBggA4QgAIaYGIADLCAAh0gYBAAAAAdQGAADWCdQGItUGCADXCQAh1gYIAOEIACHXBkAAzQgAIdgGQADNCAAhAwAAAFYAIAMAAJIBADAEAACTAQAgAwAAAHkAIAMAAHoAMAQAAHsAIAMAAABJACADAABcADAEAABdACADAAAAfQAgAwAAfgAwBAAAfwAgCyEAANMJACA-AADaCAAgoAUAANQJADChBQAAmAEAEKIFAADUCQAwowUBAMoIACGnBUAAzQgAIcEFAQDKCAAhxAVAAM0IACHyBQEAyggAIaYGIADLCAAhAiEAAKYQACA-AADqDQAgCyEAANMJACA-AADaCAAgoAUAANQJADChBQAAmAEAEKIFAADUCQAwowUBAAAAAacFQADNCAAhwQUBAMoIACHEBUAAzQgAIfIFAQDKCAAhpgYgAMsIACEDAAAAmAEAIAMAAJkBADAEAACaAQAgDiEAANMJACAlAADSCQAgoAUAANEJADChBQAAnAEAEKIFAADRCQAwowUBAMoIACGnBUAAzQgAIcEFAQDKCAAhxAVAAM0IACHyBQEAyggAIfMFAQDKCAAh-QUIAOEIACHFBgEAzAgAIcYGQADNCAAhAyEAAKYQACAlAADHEAAgxQYAAJIKACAOIQAA0wkAICUAANIJACCgBQAA0QkAMKEFAACcAQAQogUAANEJADCjBQEAAAABpwVAAM0IACHBBQEAyggAIcQFQADNCAAh8gUBAMoIACHzBQEAyggAIfkFCADhCAAhxQYBAMwIACHGBkAAzQgAIQMAAACcAQAgAwAAnQEAMAQAAJ4BACABAAAAnAEAIAMAAACcAQAgAwAAnQEAMAQAAJ4BACADAAAASwAgAwAATAAwBAAATQAgAQAAACgAIAEAAAA9ACABAAAAVgAgAQAAAHkAIAEAAABJACABAAAAfQAgAQAAAJgBACABAAAAnAEAIAEAAABLACADAAAASQAgAwAAXAAwBAAAXQAgCRwAANIIACAoAACxCQAgoAUAALAJADChBQAArQEAEKIFAACwCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhzAUBAMoIACEBAAAArQEAIAMAAAByACADAABzADAEAAB0ACADAAAARQAgAwAARgAwBAAARwAgAwAAAEsAIAMAAEwAMAQAAE0AIAEAAAAcACABAAAAIAAgAQAAAEkAIAEAAAByACABAAAARQAgAQAAAEsAIAEAAAAaACAEHAAA4g0AINUFAACSCgAg9gYAAJIKACD3BgAAkgoAIAMAAAAkACADAAC5AQAwBAAAGgAgAwAAACQAIAMAALkBADAEAAAaACADAAAAJAAgAwAAuQEAMAQAABoAIAscAADGEAAgowUBAAAAAacFQAAAAAG4BQEAAAABwQUBAAAAAcQFQAAAAAHMBQEAAAAB1AUgAAAAAdUFQAAAAAH2BgEAAAAB9wYBAAAAAQEIAAC9AQAgCqMFAQAAAAGnBUAAAAABuAUBAAAAAcEFAQAAAAHEBUAAAAABzAUBAAAAAdQFIAAAAAHVBUAAAAAB9gYBAAAAAfcGAQAAAAEBCAAAvwEAMAEIAAC_AQAwCxwAAMUQACCjBQEAlgoAIacFQACZCgAhuAUBAJYKACHBBQEAlgoAIcQFQACZCgAhzAUBAJYKACHUBSAAlwoAIdUFQACZCwAh9gYBAJgKACH3BgEAmAoAIQIAAAAaACAIAADCAQAgCqMFAQCWCgAhpwVAAJkKACG4BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHMBQEAlgoAIdQFIACXCgAh1QVAAJkLACH2BgEAmAoAIfcGAQCYCgAhAgAAACQAIAgAAMQBACACAAAAJAAgCAAAxAEAIAMAAAAaACAPAAC9AQAgEAAAwgEAIAEAAAAaACABAAAAJAAgBhUAAMIQACAYAADEEAAgGQAAwxAAINUFAACSCgAg9gYAAJIKACD3BgAAkgoAIA2gBQAA0AkAMKEFAADLAQAQogUAANAJADCjBQEAuwgAIacFQAC-CAAhuAUBALsIACHBBQEAuwgAIcQFQAC-CAAhzAUBALsIACHUBSAAvAgAIdUFQADnCAAh9gYBAL0IACH3BgEAvQgAIQMAAAAkACADAADKAQAwFAAAywEAIAMAAAAkACADAAC5AQAwBAAAGgAgCFMAAMwJACCgBQAAywkAMKEFAADWAQAQogUAAMsJADCjBQEAAAABpwVAAM0IACHBBQEAAAABxAVAAM0IACEBAAAAzgEAIAlSAADPCQAgoAUAAM4JADChBQAA0AEAEKIFAADOCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAh4QYBAMoIACH0BgEAyggAIQFSAADBEAAgClIAAM8JACCgBQAAzgkAMKEFAADQAQAQogUAAM4JADCjBQEAAAABpwVAAM0IACHEBUAAzQgAIeEGAQDKCAAh9AYBAMoIACH1BgAAzQkAIAMAAADQAQAgAwAA0QEAMAQAANIBACABAAAA0AEAIAEAAADOAQAgCFMAAMwJACCgBQAAywkAMKEFAADWAQAQogUAAMsJADCjBQEAyggAIacFQADNCAAhwQUBAMoIACHEBUAAzQgAIQFTAADAEAAgAwAAANYBACADAADXAQAwBAAAzgEAIAMAAADWAQAgAwAA1wEAMAQAAM4BACADAAAA1gEAIAMAANcBADAEAADOAQAgBVMAAL8QACCjBQEAAAABpwVAAAAAAcEFAQAAAAHEBUAAAAABAQgAANsBACAEowUBAAAAAacFQAAAAAHBBQEAAAABxAVAAAAAAQEIAADdAQAwAQgAAN0BADAFUwAAshAAIKMFAQCWCgAhpwVAAJkKACHBBQEAlgoAIcQFQACZCgAhAgAAAM4BACAIAADgAQAgBKMFAQCWCgAhpwVAAJkKACHBBQEAlgoAIcQFQACZCgAhAgAAANYBACAIAADiAQAgAgAAANYBACAIAADiAQAgAwAAAM4BACAPAADbAQAgEAAA4AEAIAEAAADOAQAgAQAAANYBACADFQAArxAAIBgAALEQACAZAACwEAAgB6AFAADKCQAwoQUAAOkBABCiBQAAygkAMKMFAQC7CAAhpwVAAL4IACHBBQEAuwgAIcQFQAC-CAAhAwAAANYBACADAADoAQAwFAAA6QEAIAMAAADWAQAgAwAA1wEAMAQAAM4BACABAAAA0gEAIAEAAADSAQAgAwAAANABACADAADRAQAwBAAA0gEAIAMAAADQAQAgAwAA0QEAMAQAANIBACADAAAA0AEAIAMAANEBADAEAADSAQAgBlIAAK4QACCjBQEAAAABpwVAAAAAAcQFQAAAAAHhBgEAAAAB9AYBAAAAAQEIAADxAQAgBaMFAQAAAAGnBUAAAAABxAVAAAAAAeEGAQAAAAH0BgEAAAABAQgAAPMBADABCAAA8wEAMAZSAACtEAAgowUBAJYKACGnBUAAmQoAIcQFQACZCgAh4QYBAJYKACH0BgEAlgoAIQIAAADSAQAgCAAA9gEAIAWjBQEAlgoAIacFQACZCgAhxAVAAJkKACHhBgEAlgoAIfQGAQCWCgAhAgAAANABACAIAAD4AQAgAgAAANABACAIAAD4AQAgAwAAANIBACAPAADxAQAgEAAA9gEAIAEAAADSAQAgAQAAANABACADFQAAqhAAIBgAAKwQACAZAACrEAAgCKAFAADJCQAwoQUAAP8BABCiBQAAyQkAMKMFAQC7CAAhpwVAAL4IACHEBUAAvggAIeEGAQC7CAAh9AYBALsIACEDAAAA0AEAIAMAAP4BADAUAAD_AQAgAwAAANABACADAADRAQAwBAAA0gEAIBgdAADCCQAgHgAAwwkAIB8AAMQJACAhAADFCQAgKgAAyAkAIDEAANcIACA0AADGCQAgNwAAxwkAIEEAANsIACCgBQAAvwkAMKEFAABBABCiBQAAvwkAMKMFAQAAAAGnBUAAzQgAIbgFAQAAAAHBBQEAyggAIcQFQADNCAAh1AUgAMsIACHVBUAA7QgAIeIFAQDMCAAh6AUAAMEJ8wYi7wYgAMsIACHxBgAAwAnxBiLzBiAAywgAIQEAAACCAgAgAQAAAIICACALHQAAoxAAIB4AAKQQACAfAAClEAAgIQAAphAAICoAAKkQACAxAADnDQAgNAAApxAAIDcAAKgQACBBAADrDQAg1QUAAJIKACDiBQAAkgoAIAMAAABBACADAACFAgAwBAAAggIAIAMAAABBACADAACFAgAwBAAAggIAIAMAAABBACADAACFAgAwBAAAggIAIBUdAACaEAAgHgAAmxAAIB8AAJwQACAhAACdEAAgKgAAoRAAIDEAAJ4QACA0AACfEAAgNwAAoBAAIEEAAKIQACCjBQEAAAABpwVAAAAAAbgFAQAAAAHBBQEAAAABxAVAAAAAAdQFIAAAAAHVBUAAAAAB4gUBAAAAAegFAAAA8wYC7wYgAAAAAfEGAAAA8QYC8wYgAAAAAQEIAACJAgAgDKMFAQAAAAGnBUAAAAABuAUBAAAAAcEFAQAAAAHEBUAAAAAB1AUgAAAAAdUFQAAAAAHiBQEAAAAB6AUAAADzBgLvBiAAAAAB8QYAAADxBgLzBiAAAAABAQgAAIsCADABCAAAiwIAMBUdAADGDwAgHgAAxw8AIB8AAMgPACAhAADJDwAgKgAAzQ8AIDEAAMoPACA0AADLDwAgNwAAzA8AIEEAAM4PACCjBQEAlgoAIacFQACZCgAhuAUBAJYKACHBBQEAlgoAIcQFQACZCgAh1AUgAJcKACHVBUAAmQsAIeIFAQCYCgAh6AUAAMUP8wYi7wYgAJcKACHxBgAAxA_xBiLzBiAAlwoAIQIAAACCAgAgCAAAjgIAIAyjBQEAlgoAIacFQACZCgAhuAUBAJYKACHBBQEAlgoAIcQFQACZCgAh1AUgAJcKACHVBUAAmQsAIeIFAQCYCgAh6AUAAMUP8wYi7wYgAJcKACHxBgAAxA_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-CAAh4AYBALsIACHhBgEAuwgAIeIGQAC-CAAhAwAAAMkCACADAADbAgAwFAAA3AIAIAMAAADJAgAgAwAAygIAMAQAAMYCACANoAUAALMJADChBQAA4gIAEKIFAACzCQAwowUBAAAAAacFQADNCAAhxAVAAM0IACHSBQEAyggAIeMFAQAAAAGABgEAyggAIdwGAQDMCAAh3QYBAMwIACHeBgEAzAgAId8GIADLCAAhAQAAAN8CACABAAAA3wIAIA2gBQAAswkAMKEFAADiAgAQogUAALMJADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHSBQEAyggAIeMFAQDKCAAhgAYBAMoIACHcBgEAzAgAId0GAQDMCAAh3gYBAMwIACHfBiAAywgAIQPcBgAAkgoAIN0GAACSCgAg3gYAAJIKACADAAAA4gIAIAMAAOMCADAEAADfAgAgAwAAAOICACADAADjAgAwBAAA3wIAIAMAAADiAgAgAwAA4wIAMAQAAN8CACAKowUBAAAAAacFQAAAAAHEBUAAAAAB0gUBAAAAAeMFAQAAAAGABgEAAAAB3AYBAAAAAd0GAQAAAAHeBgEAAAAB3wYgAAAAAQEIAADnAgAgCqMFAQAAAAGnBUAAAAABxAVAAAAAAdIFAQAAAAHjBQEAAAABgAYBAAAAAdwGAQAAAAHdBgEAAAAB3gYBAAAAAd8GIAAAAAEBCAAA6QIAMAEIAADpAgAwCqMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIdIFAQCWCgAh4wUBAJYKACGABgEAlgoAIdwGAQCYCgAh3QYBAJgKACHeBgEAmAoAId8GIACXCgAhAgAAAN8CACAIAADsAgAgCqMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIdIFAQCWCgAh4wUBAJYKACGABgEAlgoAIdwGAQCYCgAh3QYBAJgKACHeBgEAmAoAId8GIACXCgAhAgAAAOICACAIAADuAgAgAgAAAOICACAIAADuAgAgAwAAAN8CACAPAADnAgAgEAAA7AIAIAEAAADfAgAgAQAAAOICACAGFQAAsQ8AIBgAALMPACAZAACyDwAg3AYAAJIKACDdBgAAkgoAIN4GAACSCgAgDaAFAACyCQAwoQUAAPUCABCiBQAAsgkAMKMFAQC7CAAhpwVAAL4IACHEBUAAvggAIdIFAQC7CAAh4wUBALsIACGABgEAuwgAIdwGAQC9CAAh3QYBAL0IACHeBgEAvQgAId8GIAC8CAAhAwAAAOICACADAAD0AgAwFAAA9QIAIAMAAADiAgAgAwAA4wIAMAQAAN8CACAJHAAA0ggAICgAALEJACCgBQAAsAkAMKEFAACtAQAQogUAALAJADCjBQEAAAABpwVAAM0IACHEBUAAzQgAIcwFAQAAAAEBAAAA-AIAIAEAAAD4AgAgAhwAAOINACAoAACwDwAgAwAAAK0BACADAAD7AgAwBAAA-AIAIAMAAACtAQAgAwAA-wIAMAQAAPgCACADAAAArQEAIAMAAPsCADAEAAD4AgAgBhwAAK8PACAoAACuDwAgowUBAAAAAacFQAAAAAHEBUAAAAABzAUBAAAAAQEIAAD_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-wMAIAIAAADvAwAgCAAA-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-DgAgFwAAwQ4AIBgAAMAOACAZAAC_DgAgCCkCAOMIACGgBQAAnQkAMKEFAAD2BAAQogUAAJ0JADCjBQEAuwgAIcQFQAC-CAAhzQUBALsIACHABgEAuwgAIQMAAACCAQAgAwAA9QQAMBQAAPYEACADAAAAggEAIAMAAIMBADAEAACEAQAgCKAFAACcCQAwoQUAAPwEABCiBQAAnAkAMKMFAQAAAAGnBUAAzQgAIcQFQADNCAAh4gUBAMoIACGmBiAAywgAIQEAAAD5BAAgAQAAAPkEACAIoAUAAJwJADChBQAA_AQAEKIFAACcCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAh4gUBAMoIACGmBiAAywgAIQADAAAA_AQAIAMAAP0EADAEAAD5BAAgAwAAAPwEACADAAD9BAAwBAAA-QQAIAMAAAD8BAAgAwAA_QQAMAQAAPkEACAFowUBAAAAAacFQAAAAAHEBUAAAAAB4gUBAAAAAaYGIAAAAAEBCAAAgQUAIAWjBQEAAAABpwVAAAAAAcQFQAAAAAHiBQEAAAABpgYgAAAAAQEIAACDBQAwAQgAAIMFADAFowUBAJYKACGnBUAAmQoAIcQFQACZCgAh4gUBAJYKACGmBiAAlwoAIQIAAAD5BAAgCAAAhgUAIAWjBQEAlgoAIacFQACZCgAhxAVAAJkKACHiBQEAlgoAIaYGIACXCgAhAgAAAPwEACAIAACIBQAgAgAAAPwEACAIAACIBQAgAwAAAPkEACAPAACBBQAgEAAAhgUAIAEAAAD5BAAgAQAAAPwEACADFQAAug4AIBgAALwOACAZAAC7DgAgCKAFAACbCQAwoQUAAI8FABCiBQAAmwkAMKMFAQC7CAAhpwVAAL4IACHEBUAAvggAIeIFAQC7CAAhpgYgALwIACEDAAAA_AQAIAMAAI4FADAUAACPBQAgAwAAAPwEACADAAD9BAAwBAAA-QQAIAEAAAA0ACABAAAANAAgAwAAADIAIAMAADMAMAQAADQAIAMAAAAyACADAAAzADAEAAA0ACADAAAAMgAgAwAAMwAwBAAANAAgByUAALkOACApAgAAAAGjBQEAAAABpwVAAAAAAcQFQAAAAAHzBQEAAAABvwYAAAC_BgIBCAAAlwUAIAYpAgAAAAGjBQEAAAABpwVAAAAAAcQFQAAAAAHzBQEAAAABvwYAAAC_BgIBCAAAmQUAMAEIAACZBQAwByUAALgOACApAgDDCgAhowUBAJYKACGnBUAAmQoAIcQFQACZCgAh8wUBAJYKACG_BgAAtw6_BiICAAAANAAgCAAAnAUAIAYpAgDDCgAhowUBAJYKACGnBUAAmQoAIcQFQACZCgAh8wUBAJYKACG_BgAAtw6_BiICAAAAMgAgCAAAngUAIAIAAAAyACAIAACeBQAgAwAAADQAIA8AAJcFACAQAACcBQAgAQAAADQAIAEAAAAyACAFFQAAsg4AIBYAALMOACAXAAC2DgAgGAAAtQ4AIBkAALQOACAJKQIA4wgAIaAFAACXCQAwoQUAAKUFABCiBQAAlwkAMKMFAQC7CAAhpwVAAL4IACHEBUAAvggAIfMFAQC7CAAhvwYAAJgJvwYiAwAAADIAIAMAAKQFADAUAAClBQAgAwAAADIAIAMAADMAMAQAADQAIAEAAAB_ACABAAAAfwAgAwAAAH0AIAMAAH4AMAQAAH8AIAMAAAB9ACADAAB-ADAEAAB_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-ADAEAAB_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_ACADAAAAPQAgAwAAPgAwBAAAPwAgAwAAAD0AIAMAAD4AMAQAAD8AIAMAAAA9ACADAAA-ADAEAAA_ACARIQAA2AsAICcAANYLACApAACiDAAgLgAA1wsAIDIAANkLACCjBQEAAAABzQUBAAAAAd4FAgAAAAHoBQAAAI4GAvIFAQAAAAH3BQEAAAAB-QUIAAAAAYQGAQAAAAGKBggAAAABiwYIAAAAAYwGCAAAAAGOBgIAAAABAQgAAPcFACAMowUBAAAAAc0FAQAAAAHeBQIAAAAB6AUAAACOBgLyBQEAAAAB9wUBAAAAAfkFCAAAAAGEBgEAAAABigYIAAAAAYsGCAAAAAGMBggAAAABjgYCAAAAAQEIAAD5BQAwAQgAAPkFADABAAAAOQAgESEAAMgLACAnAADGCwAgKQAAoAwAIC4AAMcLACAyAADJCwAgowUBAJYKACHNBQEAlgoAId4FAgDDCgAh6AUAAJcLjgYi8gUBAJYKACH3BQEAmAoAIfkFCAC0CgAhhAYBAJYKACGKBggAxAsAIYsGCAC0CgAhjAYIALQKACGOBgIAwwoAIQIAAAA_ACAIAAD9BQAgDKMFAQCWCgAhzQUBAJYKACHeBQIAwwoAIegFAACXC44GIvIFAQCWCgAh9wUBAJgKACH5BQgAtAoAIYQGAQCWCgAhigYIAMQLACGLBggAtAoAIYwGCAC0CgAhjgYCAMMKACECAAAAPQAgCAAA_wUAIAIAAAA9ACAIAAD_BQAgAQAAADkAIAMAAAA_ACAPAAD3BQAgEAAA_QUAIAEAAAA_ACABAAAAPQAgBxUAAJ4OACAWAACfDgAgFwAAog4AIBgAAKEOACAZAACgDgAg9wUAAJIKACCKBgAAkgoAIA-gBQAAgQkAMKEFAACHBgAQogUAAIEJADCjBQEAuwgAIc0FAQC7CAAh3gUCAOMIACHoBQAAgwmOBiLyBQEAuwgAIfcFAQC9CAAh-QUIAN0IACGEBgEAuwgAIYoGCACCCQAhiwYIAN0IACGMBggA3QgAIY4GAgDjCAAhAwAAAD0AIAMAAIYGADAUAACHBgAgAwAAAD0AIAMAAD4AMAQAAD8AIAEAAABNACABAAAATQAgAwAAAEsAIAMAAEwAMAQAAE0AIAMAAABLACADAABMADAEAABNACADAAAASwAgAwAATAAwBAAATQAgDSEAAKoLACAoAADPCgAgKQAAzQoAICsAAM4KACCjBQEAAAABxAVAAAAAAfIFAQAAAAGEBgEAAAABhQYIAAAAAYYGCAAAAAGHBggAAAABiAYIAAAAAYkGAQAAAAEBCAAAjwYAIAmjBQEAAAABxAVAAAAAAfIFAQAAAAGEBgEAAAABhQYIAAAAAYYGCAAAAAGHBggAAAABiAYIAAAAAYkGAQAAAAEBCAAAkQYAMAEIAACRBgAwAQAAAEEAIA0hAACoCwAgKAAAuAoAICkAALYKACArAAC3CgAgowUBAJYKACHEBUAAmQoAIfIFAQCWCgAhhAYBAJYKACGFBggAtAoAIYYGCAC0CgAhhwYIALQKACGIBggAtAoAIYkGAQCYCgAhAgAAAE0AIAgAAJUGACAJowUBAJYKACHEBUAAmQoAIfIFAQCWCgAhhAYBAJYKACGFBggAtAoAIYYGCAC0CgAhhwYIALQKACGIBggAtAoAIYkGAQCYCgAhAgAAAEsAIAgAAJcGACACAAAASwAgCAAAlwYAIAEAAABBACADAAAATQAgDwAAjwYAIBAAAJUGACABAAAATQAgAQAAAEsAIAYVAACZDgAgFgAAmg4AIBcAAJ0OACAYAACcDgAgGQAAmw4AIIkGAACSCgAgDKAFAACACQAwoQUAAJ8GABCiBQAAgAkAMKMFAQC7CAAhxAVAAL4IACHyBQEAuwgAIYQGAQC7CAAhhQYIAN0IACGGBggA3QgAIYcGCADdCAAhiAYIAN0IACGJBgEAvQgAIQMAAABLACADAACeBgAwFAAAnwYAIAMAAABLACADAABMADAEAABNACABAAAAUgAgAQAAAFIAIAMAAABQACADAABRADAEAABSACADAAAAUAAgAwAAUQAwBAAAUgAgAwAAAFAAIAMAAFEAMAQAAFIAIAwnAADKCgAgLAAA1AsAIC0AAMkKACAuAADLCgAgowUBAAAAAc0FAQAAAAHeBQIAAAAB9wUBAAAAAfkFCAAAAAGBBgEAAAABggYBAAAAAYMGCAAAAAEBCAAApwYAIAijBQEAAAABzQUBAAAAAd4FAgAAAAH3BQEAAAAB-QUIAAAAAYEGAQAAAAGCBgEAAAABgwYIAAAAAQEIAACpBgAwAQgAAKkGADABAAAAOQAgDCcAAMYKACAsAADSCwAgLQAAxQoAIC4AAMcKACCjBQEAlgoAIc0FAQCWCgAh3gUCAMMKACH3BQEAmAoAIfkFCAC0CgAhgQYBAJYKACGCBgEAlgoAIYMGCAC0CgAhAgAAAFIAIAgAAK0GACAIowUBAJYKACHNBQEAlgoAId4FAgDDCgAh9wUBAJgKACH5BQgAtAoAIYEGAQCWCgAhggYBAJYKACGDBggAtAoAIQIAAABQACAIAACvBgAgAgAAAFAAIAgAAK8GACABAAAAOQAgAwAAAFIAIA8AAKcGACAQAACtBgAgAQAAAFIAIAEAAABQACAGFQAAlA4AIBYAAJUOACAXAACYDgAgGAAAlw4AIBkAAJYOACD3BQAAkgoAIAugBQAA_wgAMKEFAAC3BgAQogUAAP8IADCjBQEAuwgAIc0FAQC7CAAh3gUCAOMIACH3BQEAvQgAIfkFCADdCAAhgQYBALsIACGCBgEAuwgAIYMGCADdCAAhAwAAAFAAIAMAALYGADAUAAC3BgAgAwAAAFAAIAMAAFEAMAQAAFIAIAmgBQAA_ggAMKEFAAC9BgAQogUAAP4IADCjBQEAAAABpwVAAM0IACHEBUAAzQgAIdIFAQDKCAAh4wUBAAAAAYAGAQDKCAAhAQAAALoGACABAAAAugYAIAmgBQAA_ggAMKEFAAC9BgAQogUAAP4IADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHSBQEAyggAIeMFAQDKCAAhgAYBAMoIACEAAwAAAL0GACADAAC-BgAwBAAAugYAIAMAAAC9BgAgAwAAvgYAMAQAALoGACADAAAAvQYAIAMAAL4GADAEAAC6BgAgBqMFAQAAAAGnBUAAAAABxAVAAAAAAdIFAQAAAAHjBQEAAAABgAYBAAAAAQEIAADCBgAgBqMFAQAAAAGnBUAAAAABxAVAAAAAAdIFAQAAAAHjBQEAAAABgAYBAAAAAQEIAADEBgAwAQgAAMQGADAGowUBAJYKACGnBUAAmQoAIcQFQACZCgAh0gUBAJYKACHjBQEAlgoAIYAGAQCWCgAhAgAAALoGACAIAADHBgAgBqMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIdIFAQCWCgAh4wUBAJYKACGABgEAlgoAIQIAAAC9BgAgCAAAyQYAIAIAAAC9BgAgCAAAyQYAIAMAAAC6BgAgDwAAwgYAIBAAAMcGACABAAAAugYAIAEAAAC9BgAgAxUAAJEOACAYAACTDgAgGQAAkg4AIAmgBQAA_QgAMKEFAADQBgAQogUAAP0IADCjBQEAuwgAIacFQAC-CAAhxAVAAL4IACHSBQEAuwgAIeMFAQC7CAAhgAYBALsIACEDAAAAvQYAIAMAAM8GADAUAADQBgAgAwAAAL0GACADAAC-BgAwBAAAugYAIAqgBQAA_AgAMKEFAADWBgAQogUAAPwIADCjBQEAAAABpwVAAM0IACH7BSAAywgAIfwFIADLCAAh_QUBAMoIACH-BQEAzAgAIf8FAQDMCAAhAQAAANMGACABAAAA0wYAIAqgBQAA_AgAMKEFAADWBgAQogUAAPwIADCjBQEAyggAIacFQADNCAAh-wUgAMsIACH8BSAAywgAIf0FAQDKCAAh_gUBAMwIACH_BQEAzAgAIQL-BQAAkgoAIP8FAACSCgAgAwAAANYGACADAADXBgAwBAAA0wYAIAMAAADWBgAgAwAA1wYAMAQAANMGACADAAAA1gYAIAMAANcGADAEAADTBgAgB6MFAQAAAAGnBUAAAAAB-wUgAAAAAfwFIAAAAAH9BQEAAAAB_gUBAAAAAf8FAQAAAAEBCAAA2wYAIAejBQEAAAABpwVAAAAAAfsFIAAAAAH8BSAAAAAB_QUBAAAAAf4FAQAAAAH_BQEAAAABAQgAAN0GADABCAAA3QYAMAejBQEAlgoAIacFQACZCgAh-wUgAJcKACH8BSAAlwoAIf0FAQCWCgAh_gUBAJgKACH_BQEAmAoAIQIAAADTBgAgCAAA4AYAIAejBQEAlgoAIacFQACZCgAh-wUgAJcKACH8BSAAlwoAIf0FAQCWCgAh_gUBAJgKACH_BQEAmAoAIQIAAADWBgAgCAAA4gYAIAIAAADWBgAgCAAA4gYAIAMAAADTBgAgDwAA2wYAIBAAAOAGACABAAAA0wYAIAEAAADWBgAgBRUAAI4OACAYAACQDgAgGQAAjw4AIP4FAACSCgAg_wUAAJIKACAKoAUAAPsIADChBQAA6QYAEKIFAAD7CAAwowUBALsIACGnBUAAvggAIfsFIAC8CAAh_AUgALwIACH9BQEAuwgAIf4FAQC9CAAh_wUBAL0IACEDAAAA1gYAIAMAAOgGADAUAADpBgAgAwAAANYGACADAADXBgAwBAAA0wYAIAEAAAB7ACABAAAAewAgAwAAAHkAIAMAAHoAMAQAAHsAIAMAAAB5ACADAAB6ADAEAAB7ACADAAAAeQAgAwAAegAwBAAAewAgDSEAAOkMACAnAADtCwAgowUBAAAAAacFQAAAAAHEBUAAAAABzQUBAAAAAdwFAQAAAAHeBQIAAAAB8gUBAAAAAfcFAQAAAAH4BQEAAAAB-QUIAAAAAfoFAQAAAAEBCAAA8QYAIAujBQEAAAABpwVAAAAAAcQFQAAAAAHNBQEAAAAB3AUBAAAAAd4FAgAAAAHyBQEAAAAB9wUBAAAAAfgFAQAAAAH5BQgAAAAB-gUBAAAAAQEIAADzBgAwAQgAAPMGADANIQAA5wwAICcAAOsLACCjBQEAlgoAIacFQACZCgAhxAVAAJkKACHNBQEAlgoAIdwFAQCYCgAh3gUCAMMKACHyBQEAlgoAIfcFAQCYCgAh-AUBAJYKACH5BQgAtAoAIfoFAQCYCgAhAgAAAHsAIAgAAPYGACALowUBAJYKACGnBUAAmQoAIcQFQACZCgAhzQUBAJYKACHcBQEAmAoAId4FAgDDCgAh8gUBAJYKACH3BQEAmAoAIfgFAQCWCgAh-QUIALQKACH6BQEAmAoAIQIAAAB5ACAIAAD4BgAgAgAAAHkAIAgAAPgGACADAAAAewAgDwAA8QYAIBAAAPYGACABAAAAewAgAQAAAHkAIAgVAACJDgAgFgAAig4AIBcAAI0OACAYAACMDgAgGQAAiw4AINwFAACSCgAg9wUAAJIKACD6BQAAkgoAIA6gBQAA-ggAMKEFAAD_BgAQogUAAPoIADCjBQEAuwgAIacFQAC-CAAhxAVAAL4IACHNBQEAuwgAIdwFAQC9CAAh3gUCAOMIACHyBQEAuwgAIfcFAQC9CAAh-AUBALsIACH5BQgA3QgAIfoFAQC9CAAhAwAAAHkAIAMAAP4GADAUAAD_BgAgAwAAAHkAIAMAAHoAMAQAAHsAIAEAAAAqACABAAAAKgAgAwAAACgAIAMAACkAMAQAACoAIAMAAAAoACADAAApADAEAAAqACADAAAAKAAgAwAAKQAwBAAAKgAgIiEAAIgOACAlAADODQAgMgAA1g0AIDMAANENACA1AADSDQAgNgAAzw0AIDcAANANACA4AADTDQAgOQAA1A0AIDoAANUNACA8AADXDQAgowUBAAAAAacFQAAAAAG1BQEAAAABwQUBAAAAAcQFQAAAAAHdBQEAAAAB3wUIAAAAAeAFCAAAAAHhBQgAAAAB4wUBAAAAAeQFAQAAAAHlBQAAzA0AIOYFAgAAAAHoBQAAAOgFAuoFAAAA6gUC6wWAAAAAAewFAADNDQAg7gUAAADuBQLvBQgAAAAB8AUgAAAAAfEFIAAAAAHyBQEAAAAB8wUBAAAAAQEIAACHBwAgF6MFAQAAAAGnBUAAAAABtQUBAAAAAcEFAQAAAAHEBUAAAAAB3QUBAAAAAd8FCAAAAAHgBQgAAAAB4QUIAAAAAeMFAQAAAAHkBQEAAAAB5QUAAMwNACDmBQIAAAAB6AUAAADoBQLqBQAAAOoFAusFgAAAAAHsBQAAzQ0AIO4FAAAA7gUC7wUIAAAAAfAFIAAAAAHxBSAAAAAB8gUBAAAAAfMFAQAAAAEBCAAAiQcAMAEIAACJBwAwIiEAAIcOACAlAACzDAAgMgAAuwwAIDMAALYMACA1AAC3DAAgNgAAtAwAIDcAALUMACA4AAC4DAAgOQAAuQwAIDoAALoMACA8AAC8DAAgowUBAJYKACGnBUAAmQoAIbUFAQCWCgAhwQUBAJYKACHEBUAAmQoAId0FAQCYCgAh3wUIALQKACHgBQgAtAoAIeEFCAC0CgAh4wUBAJYKACHkBQEAlgoAIeUFAACtDAAg5gUCAMMKACHoBQAArgzoBSLqBQAArwzqBSLrBYAAAAAB7AUAALAMACDuBQAAsQzuBSLvBQgAtAoAIfAFIACXCgAh8QUgAJcKACHyBQEAlgoAIfMFAQCWCgAhAgAAACoAIAgAAIwHACAXowUBAJYKACGnBUAAmQoAIbUFAQCWCgAhwQUBAJYKACHEBUAAmQoAId0FAQCYCgAh3wUIALQKACHgBQgAtAoAIeEFCAC0CgAh4wUBAJYKACHkBQEAlgoAIeUFAACtDAAg5gUCAMMKACHoBQAArgzoBSLqBQAArwzqBSLrBYAAAAAB7AUAALAMACDuBQAAsQzuBSLvBQgAtAoAIfAFIACXCgAh8QUgAJcKACHyBQEAlgoAIfMFAQCWCgAhAgAAACgAIAgAAI4HACACAAAAKAAgCAAAjgcAIAMAAAAqACAPAACHBwAgEAAAjAcAIAEAAAAqACABAAAAKAAgBxUAAIIOACAWAACDDgAgFwAAhg4AIBgAAIUOACAZAACEDgAg3QUAAJIKACDrBQAAkgoAIBqgBQAA7wgAMKEFAACVBwAQogUAAO8IADCjBQEAuwgAIacFQAC-CAAhtQUBALsIACHBBQEAuwgAIcQFQAC-CAAh3QUBAL0IACHfBQgA3QgAIeAFCADdCAAh4QUIAN0IACHjBQEAuwgAIeQFAQC7CAAh5QUAAPAIACDmBQIA4wgAIegFAADxCOgFIuoFAADyCOoFIusFAADmCAAg7AUAAPAIACDuBQAA8wjuBSLvBQgA3QgAIfAFIAC8CAAh8QUgALwIACHyBQEAuwgAIfMFAQC7CAAhAwAAACgAIAMAAJQHADAUAACVBwAgAwAAACgAIAMAACkAMAQAACoAIAEAAAA7ACABAAAAOwAgAwAAADkAIAMAADoAMAQAADsAIAMAAAA5ACADAAA6ADAEAAA7ACADAAAAOQAgAwAAOgAwBAAAOwAgDycAAIEOACAyAADKDQAgMwAAyA0AIDUAAMkNACCjBQEAAAABpwVAAAAAAcQFQAAAAAHNBQEAAAAB3AUBAAAAAd0FAQAAAAHeBQIAAAAB3wUIAAAAAeAFCAAAAAHhBQgAAAAB4gUBAAAAAQEIAACdBwAgC6MFAQAAAAGnBUAAAAABxAVAAAAAAc0FAQAAAAHcBQEAAAAB3QUBAAAAAd4FAgAAAAHfBQgAAAAB4AUIAAAAAeEFCAAAAAHiBQEAAAABAQgAAJ8HADABCAAAnwcAMA8nAACADgAgMgAAqQ0AIDMAAKcNACA1AACoDQAgowUBAJYKACGnBUAAmQoAIcQFQACZCgAhzQUBAJYKACHcBQEAlgoAId0FAQCYCgAh3gUCAMMKACHfBQgAtAoAIeAFCAC0CgAh4QUIALQKACHiBQEAmAoAIQIAAAA7ACAIAACiBwAgC6MFAQCWCgAhpwVAAJkKACHEBUAAmQoAIc0FAQCWCgAh3AUBAJYKACHdBQEAmAoAId4FAgDDCgAh3wUIALQKACHgBQgAtAoAIeEFCAC0CgAh4gUBAJgKACECAAAAOQAgCAAApAcAIAIAAAA5ACAIAACkBwAgAwAAADsAIA8AAJ0HACAQAACiBwAgAQAAADsAIAEAAAA5ACAHFQAA-w0AIBYAAPwNACAXAAD_DQAgGAAA_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_AADfDQAgQAAA4Q0AIKMFAQAAAAGnBUAAAAABtQUBAAAAAbYFAQAAAAHBBQEAAAABwgUBAAAAAcMFAQAAAAHEBUAAAAABAQgAAPcHACAIowUBAAAAAacFQAAAAAG1BQEAAAABtgUBAAAAAcEFAQAAAAHCBQEAAAABwwUBAAAAAcQFQAAAAAEBCAAA-QcAMAEIAAD5BwAwEiAAAKAKACAkAAChCgAgMwAAogoAIDgAAKMKACA5AACkCgAgOgAApgoAID0AAKUKACA-AACoCgAgPwAApwoAIEAAAKkKACCjBQEAlgoAIacFQACZCgAhtQUBAJgKACG2BQEAmAoAIcEFAQCWCgAhwgUBAJgKACHDBQEAlgoAIcQFQACZCgAhAgAAAPAHACAIAAD8BwAgCKMFAQCWCgAhpwVAAJkKACG1BQEAmAoAIbYFAQCYCgAhwQUBAJYKACHCBQEAmAoAIcMFAQCWCgAhxAVAAJkKACECAAAAJgAgCAAA_gcAIAIAAAAmACAIAAD-BwAgAwAAAPAHACAPAAD3BwAgEAAA_AcAIAEAAADwBwAgAQAAACYAIAYVAACdCgAgGAAAnwoAIBkAAJ4KACC1BQAAkgoAILYFAACSCgAgwgUAAJIKACALoAUAANAIADChBQAAhQgAEKIFAADQCAAwowUBALsIACGnBUAAvggAIbUFAQC9CAAhtgUBAL0IACHBBQEAuwgAIcIFAQC9CAAhwwUBALsIACHEBUAAvggAIQMAAAAmACADAACECAAwFAAAhQgAIAMAAAAmACADAADzBwAwBAAA8AcAIBOgBQAAzwgAMKEFAACLCAAQogUAAM8IADCjBQEAAAABpwVAAM0IACGzBQEAyggAIbQFAQDMCAAhtQUBAMoIACG2BQEAzAgAIbcFAQDMCAAhuAUBAMwIACG5BQEAzAgAIboFAQDMCAAhuwUBAMwIACG8BQEAzAgAIb0FAQDMCAAhvgUBAMwIACG_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_CQAwoQUAAEEAEKIFAAC_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-CAAhtQUBALsIACHBBQEAuwgAIcQFQAC-CAAh3QUBAL0IACHfBQgA3QgAIeAFCADdCAAh4QUIAN0IACHjBQEAuwgAIeQFAQC7CAAh5QUAAPAIACDmBQIA4wgAIegFAADxCOgFIuoFAADyCOoFIusFAADmCAAg7AUAAPAIACDuBQAA8wjuBSLvBQgA3QgAIfAFIAC8CAAh8QUgALwIACHyBQEAuwgAIfMFAQC7CAAhBKgFAQAAAAX0BQEAAAAB9QUBAAAABPYFAQAAAAQHFQAAwAgAIBgAAPkIACAZAAD5CAAgqAUAAADoBQKpBQAAAOgFCKoFAAAA6AUIrwUAAPgI6AUiBxUAAMAIACAYAAD3CAAgGQAA9wgAIKgFAAAA6gUCqQUAAADqBQiqBQAAAOoFCK8FAAD2COoFIgcVAADACAAgGAAA9QgAIBkAAPUIACCoBQAAAO4FAqkFAAAA7gUIqgUAAADuBQivBQAA9AjuBSIHFQAAwAgAIBgAAPUIACAZAAD1CAAgqAUAAADuBQKpBQAAAO4FCKoFAAAA7gUIrwUAAPQI7gUiBKgFAAAA7gUCqQUAAADuBQiqBQAAAO4FCK8FAAD1CO4FIgcVAADACAAgGAAA9wgAIBkAAPcIACCoBQAAAOoFAqkFAAAA6gUIqgUAAADqBQivBQAA9gjqBSIEqAUAAADqBQKpBQAAAOoFCKoFAAAA6gUIrwUAAPcI6gUiBxUAAMAIACAYAAD5CAAgGQAA-QgAIKgFAAAA6AUCqQUAAADoBQiqBQAAAOgFCK8FAAD4COgFIgSoBQAAAOgFAqkFAAAA6AUIqgUAAADoBQivBQAA-QjoBSIOoAUAAPoIADChBQAA_wYAEKIFAAD6CAAwowUBALsIACGnBUAAvggAIcQFQAC-CAAhzQUBALsIACHcBQEAvQgAId4FAgDjCAAh8gUBALsIACH3BQEAvQgAIfgFAQC7CAAh-QUIAN0IACH6BQEAvQgAIQqgBQAA-wgAMKEFAADpBgAQogUAAPsIADCjBQEAuwgAIacFQAC-CAAh-wUgALwIACH8BSAAvAgAIf0FAQC7CAAh_gUBAL0IACH_BQEAvQgAIQqgBQAA_AgAMKEFAADWBgAQogUAAPwIADCjBQEAyggAIacFQADNCAAh-wUgAMsIACH8BSAAywgAIf0FAQDKCAAh_gUBAMwIACH_BQEAzAgAIQmgBQAA_QgAMKEFAADQBgAQogUAAP0IADCjBQEAuwgAIacFQAC-CAAhxAVAAL4IACHSBQEAuwgAIeMFAQC7CAAhgAYBALsIACEJoAUAAP4IADChBQAAvQYAEKIFAAD-CAAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAh0gUBAMoIACHjBQEAyggAIYAGAQDKCAAhC6AFAAD_CAAwoQUAALcGABCiBQAA_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_BgivBQAAmQm_BiIHFQAAwAgAIBgAAJoJACAZAACaCQAgqAUAAAC_BgKpBQAAAL8GCKoFAAAAvwYIrwUAAJkJvwYiBKgFAAAAvwYCqQUAAAC_BgiqBQAAAL8GCK8FAACaCb8GIgigBQAAmwkAMKEFAACPBQAQogUAAJsJADCjBQEAuwgAIacFQAC-CAAhxAVAAL4IACHiBQEAuwgAIaYGIAC8CAAhCKAFAACcCQAwoQUAAPwEABCiBQAAnAkAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIeIFAQDKCAAhpgYgAMsIACEIKQIA4wgAIaAFAACdCQAwoQUAAPYEABCiBQAAnQkAMKMFAQC7CAAhxAVAAL4IACHNBQEAuwgAIcAGAQC7CAAhCKAFAACeCQAwoQUAAOAEABCiBQAAngkAMKMFAQC7CAAhpwVAAL4IACGmBiAAvAgAIcEGQADnCAAhwgZAAOcIACEJJAAAoAkAIKAFAACfCQAwoQUAAM0EABCiBQAAnwkAMKMFAQDKCAAhpwVAAM0IACGmBiAAywgAIcEGQADtCAAhwgZAAO0IACEDxQUAAIIBACDGBQAAggEAIMcFAACCAQAgCikCAOMIACGgBQAAoQkAMKEFAADHBAAQogUAAKEJADCjBQEAuwgAIacFQAC-CAAhxAVAAL4IACGmBiAAvAgAIcMGAQC7CAAhxAYBALsIACEKKQIAowkAIaAFAACiCQAwoQUAALQEABCiBQAAogkAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIaYGIADLCAAhwwYBAMoIACHEBgEAyggAIQioBQIAAAABqQUCAAAABKoFAgAAAASrBQIAAAABrAUCAAAAAa0FAgAAAAGuBQIAAAABrwUCAMAIACEMoAUAAKQJADChBQAArgQAEKIFAACkCQAwowUBALsIACGnBUAAvggAIcEFAQC7CAAhxAVAAL4IACHyBQEAuwgAIfMFAQC7CAAh-QUIAN0IACHFBgEAvQgAIcYGQAC-CAAhCaAFAAClCQAwoQUAAJgEABCiBQAApQkAMKMFAQC7CAAhpwVAAL4IACHBBQEAuwgAIcQFQAC-CAAh8gUBALsIACGmBiAAvAgAIRCgBQAApgkAMKEFAACCBAAQogUAAKYJADCjBQEAuwgAIacFQAC-CAAhxwYgALwIACHIBgEAvQgAIckGAQC9CAAhygYBAL0IACHLBgEAvQgAIcwGAQC9CAAhzQYBAL0IACHOBiAAvAgAIc8GAQC9CAAh0AYBAL0IACHRBgEAvQgAIRCgBQAApwkAMKEFAADvAwAQogUAAKcJADCjBQEAyggAIacFQADNCAAhxwYgAMsIACHIBgEAzAgAIckGAQDMCAAhygYBAMwIACHLBgEAzAgAIcwGAQDMCAAhzQYBAMwIACHOBiAAywgAIc8GAQDMCAAh0AYBAMwIACHRBgEAzAgAIQagBQAAqAkAMKEFAADpAwAQogUAAKgJADCjBQEAuwgAIc0FAQC7CAAhmwYBALsIACEPoAUAAKkJADChBQAA0wMAEKIFAACpCQAwowUBALsIACGnBUAAvggAIcQFQAC-CAAh8gUBALsIACGHBggA3QgAIaYGIAC8CAAh0gYBALsIACHUBgAAqgnUBiLVBggAggkAIdYGCADdCAAh1wZAAL4IACHYBkAAvggAIQcVAADACAAgGAAArAkAIBkAAKwJACCoBQAAANQGAqkFAAAA1AYIqgUAAADUBgivBQAAqwnUBiIHFQAAwAgAIBgAAKwJACAZAACsCQAgqAUAAADUBgKpBQAAANQGCKoFAAAA1AYIrwUAAKsJ1AYiBKgFAAAA1AYCqQUAAADUBgiqBQAAANQGCK8FAACsCdQGIgygBQAArQkAMKEFAAC9AwAQogUAAK0JADCjBQEAuwgAIacFQAC-CAAhwQUBALsIACHEBUAAvggAIeIFAQC9CAAh4wUBALsIACGmBiAAvAgAIdkGAQC9CAAh2gYBAL0IACEKoAUAAK4JADChBQAApQMAEKIFAACuCQAwowUBALsIACGnBUAAvggAIcQFQAC-CAAhzQUBALsIACHeBQIA4wgAIfcFAQC9CAAh2wYBALsIACEHoAUAAK8JADChBQAAjQMAEKIFAACvCQAwowUBALsIACGnBUAAvggAIcQFQAC-CAAhzAUBALsIACEJHAAA0ggAICgAALEJACCgBQAAsAkAMKEFAACtAQAQogUAALAJADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHMBQEAyggAIQPFBQAAZwAgxgUAAGcAIMcFAABnACANoAUAALIJADChBQAA9QIAEKIFAACyCQAwowUBALsIACGnBUAAvggAIcQFQAC-CAAh0gUBALsIACHjBQEAuwgAIYAGAQC7CAAh3AYBAL0IACHdBgEAvQgAId4GAQC9CAAh3wYgALwIACENoAUAALMJADChBQAA4gIAEKIFAACzCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAh0gUBAMoIACHjBQEAyggAIYAGAQDKCAAh3AYBAMwIACHdBgEAzAgAId4GAQDMCAAh3wYgAMsIACEJoAUAALQJADChBQAA3AIAEKIFAAC0CQAwowUBALsIACGnBUAAvggAIcQFQAC-CAAh4AYBALsIACHhBgEAuwgAIeIGQAC-CAAhCaAFAAC1CQAwoQUAAMkCABCiBQAAtQkAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIeAGAQDKCAAh4QYBAMoIACHiBkAAzQgAIRCgBQAAtgkAMKEFAADDAgAQogUAALYJADCjBQEAuwgAIacFQAC-CAAhxAVAAL4IACHMBQEAuwgAIeMGAQC7CAAh5AYBALsIACHlBgEAvQgAIeYGAQC9CAAh5wYBAL0IACHoBkAA5wgAIekGQADnCAAh6gYBAL0IACHrBgEAvQgAIQugBQAAtwkAMKEFAACtAgAQogUAALcJADCjBQEAuwgAIacFQAC-CAAhxAVAAL4IACHMBQEAuwgAIeIGQAC-CAAh7AYBALsIACHtBgEAvQgAIe4GAQC9CAAhD6AFAAC4CQAwoQUAAJcCABCiBQAAuAkAMKMFAQC7CAAhpwVAAL4IACG4BQEAuwgAIcEFAQC7CAAhxAVAAL4IACHUBSAAvAgAIdUFQADnCAAh4gUBAL0IACHoBQAAugnzBiLvBiAAvAgAIfEGAAC5CfEGIvMGIAC8CAAhBxUAAMAIACAYAAC-CQAgGQAAvgkAIKgFAAAA8QYCqQUAAADxBgiqBQAAAPEGCK8FAAC9CfEGIgcVAADACAAgGAAAvAkAIBkAALwJACCoBQAAAPMGAqkFAAAA8wYIqgUAAADzBgivBQAAuwnzBiIHFQAAwAgAIBgAALwJACAZAAC8CQAgqAUAAADzBgKpBQAAAPMGCKoFAAAA8wYIrwUAALsJ8wYiBKgFAAAA8wYCqQUAAADzBgiqBQAAAPMGCK8FAAC8CfMGIgcVAADACAAgGAAAvgkAIBkAAL4JACCoBQAAAPEGAqkFAAAA8QYIqgUAAADxBgivBQAAvQnxBiIEqAUAAADxBgKpBQAAAPEGCKoFAAAA8QYIrwUAAL4J8QYiGB0AAMIJACAeAADDCQAgHwAAxAkAICEAAMUJACAqAADICQAgMQAA1wgAIDQAAMYJACA3AADHCQAgQQAA2wgAIKAFAAC_CQAwoQUAAEEAEKIFAAC_CQAwowUBAMoIACGnBUAAzQgAIbgFAQDKCAAhwQUBAMoIACHEBUAAzQgAIdQFIADLCAAh1QVAAO0IACHiBQEAzAgAIegFAADBCfMGIu8GIADLCAAh8QYAAMAJ8QYi8wYgAMsIACEEqAUAAADxBgKpBQAAAPEGCKoFAAAA8QYIrwUAAL4J8QYiBKgFAAAA8wYCqQUAAADzBgiqBQAAAPMGCK8FAAC8CfMGIgPFBQAAHAAgxgUAABwAIMcFAAAcACADxQUAACAAIMYFAAAgACDHBQAAIAAgEBwAANIIACCgBQAAhgoAMKEFAAAkABCiBQAAhgoAMKMFAQDKCAAhpwVAAM0IACG4BQEAyggAIcEFAQDKCAAhxAVAAM0IACHMBQEAyggAIdQFIADLCAAh1QVAAO0IACH2BgEAzAgAIfcGAQDMCAAhggcAACQAIIMHAAAkACAXIAAA0ggAICQAANMIACAzAADUCAAgOAAA1QgAIDkAANYIACA6AADYCAAgPQAA1wgAID4AANoIACA_AADZCAAgQAAA2wgAIKAFAADRCAAwoQUAACYAEKIFAADRCAAwowUBAMoIACGnBUAAzQgAIbUFAQDMCAAhtgUBAMwIACHBBQEAyggAIcIFAQDMCAAhwwUBAMoIACHEBUAAzQgAIYIHAAAmACCDBwAAJgAgCxwAANIIACAoAACxCQAgoAUAALAJADChBQAArQEAEKIFAACwCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhzAUBAMoIACGCBwAArQEAIIMHAACtAQAgA8UFAAByACDGBQAAcgAgxwUAAHIAIAPFBQAARQAgxgUAAEUAIMcFAABFACAIoAUAAMkJADChBQAA_wEAEKIFAADJCQAwowUBALsIACGnBUAAvggAIcQFQAC-CAAh4QYBALsIACH0BgEAuwgAIQegBQAAygkAMKEFAADpAQAQogUAAMoJADCjBQEAuwgAIacFQAC-CAAhwQUBALsIACHEBUAAvggAIQhTAADMCQAgoAUAAMsJADChBQAA1gEAEKIFAADLCQAwowUBAMoIACGnBUAAzQgAIcEFAQDKCAAhxAVAAM0IACEDxQUAANABACDGBQAA0AEAIMcFAADQAQAgAuEGAQAAAAH0BgEAAAABCVIAAM8JACCgBQAAzgkAMKEFAADQAQAQogUAAM4JADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHhBgEAyggAIfQGAQDKCAAhClMAAMwJACCgBQAAywkAMKEFAADWAQAQogUAAMsJADCjBQEAyggAIacFQADNCAAhwQUBAMoIACHEBUAAzQgAIYIHAADWAQAggwcAANYBACANoAUAANAJADChBQAAywEAEKIFAADQCQAwowUBALsIACGnBUAAvggAIbgFAQC7CAAhwQUBALsIACHEBUAAvggAIcwFAQC7CAAh1AUgALwIACHVBUAA5wgAIfYGAQC9CAAh9wYBAL0IACEOIQAA0wkAICUAANIJACCgBQAA0QkAMKEFAACcAQAQogUAANEJADCjBQEAyggAIacFQADNCAAhwQUBAMoIACHEBUAAzQgAIfIFAQDKCAAh8wUBAMoIACH5BQgA4QgAIcUGAQDMCAAhxgZAAM0IACENIQAA0wkAID4AANoIACCgBQAA1AkAMKEFAACYAQAQogUAANQJADCjBQEAyggAIacFQADNCAAhwQUBAMoIACHEBUAAzQgAIfIFAQDKCAAhpgYgAMsIACGCBwAAmAEAIIMHAACYAQAgFyAAANIIACAkAADTCAAgMwAA1AgAIDgAANUIACA5AADWCAAgOgAA2AgAID0AANcIACA-AADaCAAgPwAA2QgAIEAAANsIACCgBQAA0QgAMKEFAAAmABCiBQAA0QgAMKMFAQDKCAAhpwVAAM0IACG1BQEAzAgAIbYFAQDMCAAhwQUBAMoIACHCBQEAzAgAIcMFAQDKCAAhxAVAAM0IACGCBwAAJgAggwcAACYAIAshAADTCQAgPgAA2ggAIKAFAADUCQAwoQUAAJgBABCiBQAA1AkAMKMFAQDKCAAhpwVAAM0IACHBBQEAyggAIcQFQADNCAAh8gUBAMoIACGmBiAAywgAIRIhAADTCQAgJAAA2AkAIDEAANcIACCgBQAA1QkAMKEFAABWABCiBQAA1QkAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIfIFAQDKCAAhhwYIAOEIACGmBiAAywgAIdIGAQDKCAAh1AYAANYJ1AYi1QYIANcJACHWBggA4QgAIdcGQADNCAAh2AZAAM0IACEEqAUAAADUBgKpBQAAANQGCKoFAAAA1AYIrwUAAKwJ1AYiCKgFCAAAAAGpBQgAAAAFqgUIAAAABasFCAAAAAGsBQgAAAABrQUIAAAAAa4FCAAAAAGvBQgAhwkAIQPFBQAAWAAgxgUAAFgAIMcFAABYACACzQUBAAAAAcAGAQAAAAEKJwAA3AkAICkCAKMJACE7AADbCQAgoAUAANoJADChBQAAggEAEKIFAADaCQAwowUBAMoIACHEBUAAzQgAIc0FAQDKCAAhwAYBAMoIACELJAAAoAkAIKAFAACfCQAwoQUAAM0EABCiBQAAnwkAMKMFAQDKCAAhpwVAAM0IACGmBiAAywgAIcEGQADtCAAhwgZAAO0IACGCBwAAzQQAIIMHAADNBAAgJyEAANMJACAlAAD8CQAgMgAA9AkAIDMAANQIACA1AACxCQAgNgAAhQoAIDcAAMcJACA4AADYCQAgOQAA1ggAIDoAANgIACA8AACgCQAgoAUAAIEKADChBQAAKAAQogUAAIEKADCjBQEAyggAIacFQADNCAAhtQUBAMoIACHBBQEAyggAIcQFQADNCAAh3QUBAMwIACHfBQgA4QgAIeAFCADhCAAh4QUIAOEIACHjBQEAyggAIeQFAQDKCAAh5QUAAPAIACDmBQIAowkAIegFAACCCugFIuoFAACDCuoFIusFAADsCAAg7AUAAPAIACDuBQAAhAruBSLvBQgA4QgAIfAFIADLCAAh8QUgAMsIACHyBQEAyggAIfMFAQDKCAAhggcAACgAIIMHAAAoACAkIQAA0wkAICcAANwJACCgBQAA3QkAMKEFAAB9ABCiBQAA3QkAMKMFAQDKCAAhpwVAAM0IACG1BQEAzAgAIcQFQADNCAAhzQUBAMoIACHjBQEAyggAIfIFAQDKCAAhpgYgAMsIACGnBgEAyggAIagGIADLCAAhqQYgAMsIACGqBiAAywgAIasGIADLCAAhrAYAAPAIACCtBgEAyggAIa4GAQDMCAAhrwYBAMwIACGwBgEAzAgAIbEGAQDMCAAhsgYBAMwIACGzBgEAzAgAIbQGAADwCAAgtQYBAMwIACG2BgEAzAgAIbcGAQDMCAAhuAYBAMwIACG5BgEAzAgAIboGAADwCAAguwYBAMoIACG8BgEAyggAIb0GAgCjCQAhECEAANMJACAnAADcCQAgoAUAAN4JADChBQAAeQAQogUAAN4JADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHNBQEAyggAIdwFAQDMCAAh3gUCAKMJACHyBQEAyggAIfcFAQDMCAAh-AUBAMoIACH5BQgA4QgAIfoFAQDMCAAhAswFAQAAAAHNBQEAAAABDBwAANIIACAnAADcCQAgoAUAAOAJADChBQAAcgAQogUAAOAJADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHKBQIAowkAIcsFAQDMCAAhzAUBAMoIACHNBQEAyggAIQPNBQEAAAAB9wUBAAAAAdsGAQAAAAENJwAA3AkAIC4AAOQJACA0AADjCQAgoAUAAOIJADChBQAAZwAQogUAAOIJADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHNBQEAyggAId4FAgCjCQAh9wUBAMwIACHbBgEAyggAIQscAADSCAAgKAAAsQkAIKAFAACwCQAwoQUAAK0BABCiBQAAsAkAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIcwFAQDKCAAhggcAAK0BACCDBwAArQEAIBQnAADcCQAgMgAA9AkAIDMAANQIACA1AACxCQAgoAUAAPkJADChBQAAOQAQogUAAPkJADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHNBQEAyggAIdwFAQDKCAAh3QUBAMwIACHeBQIAowkAId8FCADhCAAh4AUIAOEIACHhBQgA4QgAIeIFAQDMCAAhggcAADkAIIMHAAA5ACAjHAAA6gkAICEAAMUJACAoAADUCAAgKgAAyAkAIC8AANsIACAwAADrCQAgoAUAAOUJADChBQAASQAQogUAAOUJADCjBQEAyggAIacFQADNCAAhtwUBAMwIACG5BQEAzAgAIcQFQADNCAAhzAUBAMwIACHyBQEAzAgAIYYGCADhCAAhhwYIAOEIACGPBgIAowkAIZAGAQDMCAAhkgYAAOYJkgYikwYIAOEIACGVBgAA5wmVBiKWBgEAzAgAIZcGAADoCY4GIpgGAQDMCAAhmQYBAMwIACGaBgEAzAgAIZsGAQDMCAAhnQYAAOkJnQYjngYBAMwIACGfBgEAzAgAIaAGAQDMCAAhoQZAAO0IACGiBgEAzAgAIQSoBQAAAJIGAqkFAAAAkgYIqgUAAACSBgivBQAAkQmSBiIEqAUAAACVBgKpBQAAAJUGCKoFAAAAlQYIrwUAAI8JlQYiBKgFAAAAjgYCqQUAAACOBgiqBQAAAI4GCK8FAACFCY4GIgSoBQAAAJ0GA6kFAAAAnQYJqgUAAACdBgmvBQAAjQmdBiMaHQAAwgkAIB4AAMMJACAfAADECQAgIQAAxQkAICoAAMgJACAxAADXCAAgNAAAxgkAIDcAAMcJACBBAADbCAAgoAUAAL8JADChBQAAQQAQogUAAL8JADCjBQEAyggAIacFQADNCAAhuAUBAMoIACHBBQEAyggAIcQFQADNCAAh1AUgAMsIACHVBUAA7QgAIeIFAQDMCAAh6AUAAMEJ8wYi7wYgAMsIACHxBgAAwAnxBiLzBiAAywgAIYIHAABBACCDBwAAQQAgFCEAANMJACAkAADYCQAgMQAA1wgAIKAFAADVCQAwoQUAAFYAEKIFAADVCQAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAh8gUBAMoIACGHBggA4QgAIaYGIADLCAAh0gYBAMoIACHUBgAA1gnUBiLVBggA1wkAIdYGCADhCAAh1wZAAM0IACHYBkAAzQgAIYIHAABWACCDBwAAVgAgAs0FAQAAAAGbBgEAAAABCCcAANwJACAwAADuCQAgoAUAAO0JADChBQAAWAAQogUAAO0JADCjBQEAyggAIc0FAQDKCAAhmwYBAMoIACEUIQAA0wkAICQAANgJACAxAADXCAAgoAUAANUJADChBQAAVgAQogUAANUJADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHyBQEAyggAIYcGCADhCAAhpgYgAMsIACHSBgEAyggAIdQGAADWCdQGItUGCADXCQAh1gYIAOEIACHXBkAAzQgAIdgGQADNCAAhggcAAFYAIIMHAABWACAPJwAA3AkAICwAAPAJACAtAADxCQAgLgAA5AkAIKAFAADvCQAwoQUAAFAAEKIFAADvCQAwowUBAMoIACHNBQEAyggAId4FAgCjCQAh9wUBAMwIACH5BQgA4QgAIYEGAQDKCAAhggYBAMoIACGDBggA4QgAIRIhAADTCQAgKAAA9AkAICkAAPMJACArAADqCQAgoAUAAPIJADChBQAASwAQogUAAPIJADCjBQEAyggAIcQFQADNCAAh8gUBAMoIACGEBgEAyggAIYUGCADhCAAhhgYIAOEIACGHBggA4QgAIYgGCADhCAAhiQYBAMwIACGCBwAASwAggwcAAEsAIBYhAADTCQAgJwAA3AkAICkAAPMJACAuAADkCQAgMgAA9AkAIKAFAAD4CQAwoQUAAD0AEKIFAAD4CQAwowUBAMoIACHNBQEAyggAId4FAgCjCQAh6AUAAOgJjgYi8gUBAMoIACH3BQEAzAgAIfkFCADhCAAhhAYBAMoIACGKBggA1wkAIYsGCADhCAAhjAYIAOEIACGOBgIAowkAIYIHAAA9ACCDBwAAPQAgECEAANMJACAoAAD0CQAgKQAA8wkAICsAAOoJACCgBQAA8gkAMKEFAABLABCiBQAA8gkAMKMFAQDKCAAhxAVAAM0IACHyBQEAyggAIYQGAQDKCAAhhQYIAOEIACGGBggA4QgAIYcGCADhCAAhiAYIAOEIACGJBgEAzAgAISUcAADqCQAgIQAAxQkAICgAANQIACAqAADICQAgLwAA2wgAIDAAAOsJACCgBQAA5QkAMKEFAABJABCiBQAA5QkAMKMFAQDKCAAhpwVAAM0IACG3BQEAzAgAIbkFAQDMCAAhxAVAAM0IACHMBQEAzAgAIfIFAQDMCAAhhgYIAOEIACGHBggA4QgAIY8GAgCjCQAhkAYBAMwIACGSBgAA5gmSBiKTBggA4QgAIZUGAADnCZUGIpYGAQDMCAAhlwYAAOgJjgYimAYBAMwIACGZBgEAzAgAIZoGAQDMCAAhmwYBAMwIACGdBgAA6QmdBiOeBgEAzAgAIZ8GAQDMCAAhoAYBAMwIACGhBkAA7QgAIaIGAQDMCAAhggcAAEkAIIMHAABJACADxQUAAFAAIMYFAABQACDHBQAAUAAgDRwAANIIACApAAD3CQAgoAUAAPUJADChBQAARQAQogUAAPUJADCjBQEAyggAIcQFQADNCAAhzAUBAMoIACHqBQAA9gmkBiKABgEAyggAIYQGAQDMCAAhpAYBAMoIACGlBiAAywgAIQSoBQAAAKQGAqkFAAAApAYIqgUAAACkBgivBQAAlQmkBiIlHAAA6gkAICEAAMUJACAoAADUCAAgKgAAyAkAIC8AANsIACAwAADrCQAgoAUAAOUJADChBQAASQAQogUAAOUJADCjBQEAyggAIacFQADNCAAhtwUBAMwIACG5BQEAzAgAIcQFQADNCAAhzAUBAMwIACHyBQEAzAgAIYYGCADhCAAhhwYIAOEIACGPBgIAowkAIZAGAQDMCAAhkgYAAOYJkgYikwYIAOEIACGVBgAA5wmVBiKWBgEAzAgAIZcGAADoCY4GIpgGAQDMCAAhmQYBAMwIACGaBgEAzAgAIZsGAQDMCAAhnQYAAOkJnQYjngYBAMwIACGfBgEAzAgAIaAGAQDMCAAhoQZAAO0IACGiBgEAzAgAIYIHAABJACCDBwAASQAgFCEAANMJACAnAADcCQAgKQAA8wkAIC4AAOQJACAyAAD0CQAgoAUAAPgJADChBQAAPQAQogUAAPgJADCjBQEAyggAIc0FAQDKCAAh3gUCAKMJACHoBQAA6AmOBiLyBQEAyggAIfcFAQDMCAAh-QUIAOEIACGEBgEAyggAIYoGCADXCQAhiwYIAOEIACGMBggA4QgAIY4GAgCjCQAhEicAANwJACAyAAD0CQAgMwAA1AgAIDUAALEJACCgBQAA-QkAMKEFAAA5ABCiBQAA-QkAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIc0FAQDKCAAh3AUBAMoIACHdBQEAzAgAId4FAgCjCQAh3wUIAOEIACHgBQgA4QgAIeEFCADhCAAh4gUBAMwIACEKJQAA_AkAICkCAKMJACGgBQAA-gkAMKEFAAAyABCiBQAA-gkAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIfMFAQDKCAAhvwYAAPsJvwYiBKgFAAAAvwYCqQUAAAC_BgiqBQAAAL8GCK8FAACaCb8GIhIiAAD-CQAgIwAA_wkAICQAANMIACAmAACACgAgoAUAAP0JADChBQAALAAQogUAAP0JADCjBQEAyggAIacFQADNCAAhwQUBAMoIACHEBUAAzQgAIeIFAQDMCAAh4wUBAMoIACGmBiAAywgAIdkGAQDMCAAh2gYBAMwIACGCBwAALAAggwcAACwAIBAiAAD-CQAgIwAA_wkAICQAANMIACAmAACACgAgoAUAAP0JADChBQAALAAQogUAAP0JADCjBQEAyggAIacFQADNCAAhwQUBAMoIACHEBUAAzQgAIeIFAQDMCAAh4wUBAMoIACGmBiAAywgAIdkGAQDMCAAh2gYBAMwIACESIgAA_gkAICMAAP8JACAkAADTCAAgJgAAgAoAIKAFAAD9CQAwoQUAACwAEKIFAAD9CQAwowUBAMoIACGnBUAAzQgAIcEFAQDKCAAhxAVAAM0IACHiBQEAzAgAIeMFAQDKCAAhpgYgAMsIACHZBgEAzAgAIdoGAQDMCAAhggcAACwAIIMHAAAsACADxQUAACwAIMYFAAAsACDHBQAALAAgA8UFAAAyACDGBQAAMgAgxwUAADIAICUhAADTCQAgJQAA_AkAIDIAAPQJACAzAADUCAAgNQAAsQkAIDYAAIUKACA3AADHCQAgOAAA2AkAIDkAANYIACA6AADYCAAgPAAAoAkAIKAFAACBCgAwoQUAACgAEKIFAACBCgAwowUBAMoIACGnBUAAzQgAIbUFAQDKCAAhwQUBAMoIACHEBUAAzQgAId0FAQDMCAAh3wUIAOEIACHgBQgA4QgAIeEFCADhCAAh4wUBAMoIACHkBQEAyggAIeUFAADwCAAg5gUCAKMJACHoBQAAggroBSLqBQAAgwrqBSLrBQAA7AgAIOwFAADwCAAg7gUAAIQK7gUi7wUIAOEIACHwBSAAywgAIfEFIADLCAAh8gUBAMoIACHzBQEAyggAIQSoBQAAAOgFAqkFAAAA6AUIqgUAAADoBQivBQAA-QjoBSIEqAUAAADqBQKpBQAAAOoFCKoFAAAA6gUIrwUAAPcI6gUiBKgFAAAA7gUCqQUAAADuBQiqBQAAAO4FCK8FAAD1CO4FIgPFBQAAOQAgxgUAADkAIMcFAAA5ACAOHAAA0ggAIKAFAACGCgAwoQUAACQAEKIFAACGCgAwowUBAMoIACGnBUAAzQgAIbgFAQDKCAAhwQUBAMoIACHEBUAAzQgAIcwFAQDKCAAh1AUgAMsIACHVBUAA7QgAIfYGAQDMCAAh9wYBAMwIACERHAAA0ggAIKAFAACHCgAwoQUAACAAEKIFAACHCgAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhzAUBAMoIACHjBgEAyggAIeQGAQDKCAAh5QYBAMwIACHmBgEAzAgAIecGAQDMCAAh6AZAAO0IACHpBkAA7QgAIeoGAQDMCAAh6wYBAMwIACEMHAAA0ggAIKAFAACICgAwoQUAABwAEKIFAACICgAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhzAUBAMoIACHiBkAAzQgAIewGAQDKCAAh7QYBAMwIACHuBgEAzAgAIRMoAACLCgAgoAUAAIkKADChBQAAFwAQogUAAIkKADCjBQEAuwgAIbcFAQC9CAAhuQUBAL0IACHEBUAAvggAIYMGCACCCQAhhgYIAIIJACGHBggAggkAIZgGAQC9CAAhmQYBAL0IACGaBgEAvQgAIfwGAQC7CAAh_gYAAIoK_gYi_wYBAL0IACGABwgAggkAIYEHQAC-CAAhBxUAAMAIACAYAACOCgAgGQAAjgoAIKgFAAAA_gYCqQUAAAD-BgiqBQAAAP4GCK8FAACNCv4GIg8VAADACAAgGAAAjAoAIBkAAIwKACCoBYAAAAABqwWAAAAAAawFgAAAAAGtBYAAAAABrgWAAAAAAa8FgAAAAAHWBQEAAAAB1wUBAAAAAdgFAQAAAAHZBYAAAAAB2gWAAAAAAdsFgAAAAAEMqAWAAAAAAasFgAAAAAGsBYAAAAABrQWAAAAAAa4FgAAAAAGvBYAAAAAB1gUBAAAAAdcFAQAAAAHYBQEAAAAB2QWAAAAAAdoFgAAAAAHbBYAAAAABBxUAAMAIACAYAACOCgAgGQAAjgoAIKgFAAAA_gYCqQUAAAD-BgiqBQAAAP4GCK8FAACNCv4GIgSoBQAAAP4GAqkFAAAA_gYIqgUAAAD-BgivBQAAjgr-BiITKAAAkQoAIKAFAACPCgAwoQUAAAQAEKIFAACPCgAwowUBAMoIACG3BQEAzAgAIbkFAQDMCAAhxAVAAM0IACGDBggA1wkAIYYGCADXCQAhhwYIANcJACGYBgEAzAgAIZkGAQDMCAAhmgYBAMwIACH8BgEAyggAIf4GAACQCv4GIv8GAQDMCAAhgAcIANcJACGBB0AAzQgAIQSoBQAAAP4GAqkFAAAA_gYIqgUAAAD-BgivBQAAjgr-BiIMqAWAAAAAAasFgAAAAAGsBYAAAAABrQWAAAAAAa4FgAAAAAGvBYAAAAAB1gUBAAAAAdcFAQAAAAHYBQEAAAAB2QWAAAAAAdoFgAAAAAHbBYAAAAABAAAAAAGHBwEAAAABAYcHIAAAAAEBhwcBAAAAAQGHB0AAAAABAAAAAAAABQ8AAK0RACAQAADeEgAghAcAAK4RACCFBwAA3RIAIIoHAACCAgAgCw8AAKMMADAQAACoDAAwhAcAAKQMADCFBwAApQwAMIYHAACmDAAghwcAAKcMADCIBwAApwwAMIkHAACnDAAwigcAAKcMADCLBwAAqQwAMIwHAACqDAAwCw8AAJgMADAQAACcDAAwhAcAAJkMADCFBwAAmgwAMIYHAACbDAAghwcAAL4LADCIBwAAvgsAMIkHAAC-CwAwigcAAL4LADCLBwAAnQwAMIwHAADBCwAwCw8AAO4LADAQAADzCwAwhAcAAO8LADCFBwAA8AsAMIYHAADxCwAghwcAAPILADCIBwAA8gsAMIkHAADyCwAwigcAAPILADCLBwAA9AsAMIwHAAD1CwAwCw8AAOALADAQAADlCwAwhAcAAOELADCFBwAA4gsAMIYHAADjCwAghwcAAOQLADCIBwAA5AsAMIkHAADkCwAwigcAAOQLADCLBwAA5gsAMIwHAADnCwAwCw8AAIsLADAQAACQCwAwhAcAAIwLADCFBwAAjQsAMIYHAACOCwAghwcAAI8LADCIBwAAjwsAMIkHAACPCwAwigcAAI8LADCLBwAAkQsAMIwHAACSCwAwCw8AAPcKADAQAAD8CgAwhAcAAPgKADCFBwAA-QoAMIYHAAD6CgAghwcAAPsKADCIBwAA-woAMIkHAAD7CgAwigcAAPsKADCLBwAA_QoAMIwHAAD-CgAwCw8AAN4KADAQAADjCgAwhAcAAN8KADCFBwAA4AoAMIYHAADhCgAghwcAAOIKADCIBwAA4goAMIkHAADiCgAwigcAAOIKADCLBwAA5AoAMIwHAADlCgAwCw8AANAKADAQAADVCgAwhAcAANEKADCFBwAA0goAMIYHAADTCgAghwcAANQKADCIBwAA1AoAMIkHAADUCgAwigcAANQKADCLBwAA1goAMIwHAADXCgAwCw8AAKoKADAQAACvCgAwhAcAAKsKADCFBwAArAoAMIYHAACtCgAghwcAAK4KADCIBwAArgoAMIkHAACuCgAwigcAAK4KADCLBwAAsAoAMIwHAACxCgAwCygAAM8KACApAADNCgAgKwAAzgoAIKMFAQAAAAHEBUAAAAABhAYBAAAAAYUGCAAAAAGGBggAAAABhwYIAAAAAYgGCAAAAAGJBgEAAAABAgAAAE0AIA8AAMwKACADAAAATQAgDwAAzAoAIBAAALUKACABCAAA3BIAMBAhAADTCQAgKAAA9AkAICkAAPMJACArAADqCQAgoAUAAPIJADChBQAASwAQogUAAPIJADCjBQEAAAABxAVAAM0IACHyBQEAyggAIYQGAQDKCAAhhQYIAOEIACGGBggA4QgAIYcGCADhCAAhiAYIAOEIACGJBgEAzAgAIQIAAABNACAIAAC1CgAgAgAAALIKACAIAACzCgAgDKAFAACxCgAwoQUAALIKABCiBQAAsQoAMKMFAQDKCAAhxAVAAM0IACHyBQEAyggAIYQGAQDKCAAhhQYIAOEIACGGBggA4QgAIYcGCADhCAAhiAYIAOEIACGJBgEAzAgAIQygBQAAsQoAMKEFAACyCgAQogUAALEKADCjBQEAyggAIcQFQADNCAAh8gUBAMoIACGEBgEAyggAIYUGCADhCAAhhgYIAOEIACGHBggA4QgAIYgGCADhCAAhiQYBAMwIACEIowUBAJYKACHEBUAAmQoAIYQGAQCWCgAhhQYIALQKACGGBggAtAoAIYcGCAC0CgAhiAYIALQKACGJBgEAmAoAIQWHBwgAAAABjgcIAAAAAY8HCAAAAAGQBwgAAAABkQcIAAAAAQsoAAC4CgAgKQAAtgoAICsAALcKACCjBQEAlgoAIcQFQACZCgAhhAYBAJYKACGFBggAtAoAIYYGCAC0CgAhhwYIALQKACGIBggAtAoAIYkGAQCYCgAhBQ8AAMQSACAQAADaEgAghAcAAMUSACCFBwAA2RIAIIoHAABdACAHDwAAwhIAIBAAANcSACCEBwAAwxIAIIUHAADWEgAgiAcAAEEAIIkHAABBACCKBwAAggIAIAsPAAC5CgAwEAAAvgoAMIQHAAC6CgAwhQcAALsKADCGBwAAvAoAIIcHAAC9CgAwiAcAAL0KADCJBwAAvQoAMIoHAAC9CgAwiwcAAL8KADCMBwAAwAoAMAonAADKCgAgLQAAyQoAIC4AAMsKACCjBQEAAAABzQUBAAAAAd4FAgAAAAH3BQEAAAAB-QUIAAAAAYIGAQAAAAGDBggAAAABAgAAAFIAIA8AAMgKACADAAAAUgAgDwAAyAoAIBAAAMQKACABCAAA1RIAMA8nAADcCQAgLAAA8AkAIC0AAPEJACAuAADkCQAgoAUAAO8JADChBQAAUAAQogUAAO8JADCjBQEAAAABzQUBAMoIACHeBQIAowkAIfcFAQDMCAAh-QUIAOEIACGBBgEAyggAIYIGAQDKCAAhgwYIAOEIACECAAAAUgAgCAAAxAoAIAIAAADBCgAgCAAAwgoAIAugBQAAwAoAMKEFAADBCgAQogUAAMAKADCjBQEAyggAIc0FAQDKCAAh3gUCAKMJACH3BQEAzAgAIfkFCADhCAAhgQYBAMoIACGCBgEAyggAIYMGCADhCAAhC6AFAADACgAwoQUAAMEKABCiBQAAwAoAMKMFAQDKCAAhzQUBAMoIACHeBQIAowkAIfcFAQDMCAAh-QUIAOEIACGBBgEAyggAIYIGAQDKCAAhgwYIAOEIACEHowUBAJYKACHNBQEAlgoAId4FAgDDCgAh9wUBAJgKACH5BQgAtAoAIYIGAQCWCgAhgwYIALQKACEFhwcCAAAAAY4HAgAAAAGPBwIAAAABkAcCAAAAAZEHAgAAAAEKJwAAxgoAIC0AAMUKACAuAADHCgAgowUBAJYKACHNBQEAlgoAId4FAgDDCgAh9wUBAJgKACH5BQgAtAoAIYIGAQCWCgAhgwYIALQKACEFDwAAyhIAIBAAANMSACCEBwAAyxIAIIUHAADSEgAgigcAAD8AIAUPAADIEgAgEAAA0BIAIIQHAADJEgAghQcAAM8SACCKBwAAKgAgBw8AAMYSACAQAADNEgAghAcAAMcSACCFBwAAzBIAIIgHAAA5ACCJBwAAOQAgigcAADsAIAonAADKCgAgLQAAyQoAIC4AAMsKACCjBQEAAAABzQUBAAAAAd4FAgAAAAH3BQEAAAAB-QUIAAAAAYIGAQAAAAGDBggAAAABAw8AAMoSACCEBwAAyxIAIIoHAAA_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_ACAPAACGCwAgAwAAAH8AIA8AAIYLACAQAACECwAgAQgAALQSADAkIQAA0wkAICcAANwJACCgBQAA3QkAMKEFAAB9ABCiBQAA3QkAMKMFAQAAAAGnBUAAzQgAIbUFAQDMCAAhxAVAAM0IACHNBQEAyggAIeMFAQAAAAHyBQEAyggAIaYGIADLCAAhpwYBAMoIACGoBiAAywgAIakGIADLCAAhqgYgAMsIACGrBiAAywgAIawGAADwCAAgrQYBAMoIACGuBgEAzAgAIa8GAQDMCAAhsAYBAMwIACGxBgEAzAgAIbIGAQDMCAAhswYBAMwIACG0BgAA8AgAILUGAQDMCAAhtgYBAMwIACG3BgEAzAgAIbgGAQDMCAAhuQYBAMwIACG6BgAA8AgAILsGAQDKCAAhvAYBAMoIACG9BgIAowkAIQIAAAB_ACAIAACECwAgAgAAAP8KACAIAACACwAgIqAFAAD-CgAwoQUAAP8KABCiBQAA_goAMKMFAQDKCAAhpwVAAM0IACG1BQEAzAgAIcQFQADNCAAhzQUBAMoIACHjBQEAyggAIfIFAQDKCAAhpgYgAMsIACGnBgEAyggAIagGIADLCAAhqQYgAMsIACGqBiAAywgAIasGIADLCAAhrAYAAPAIACCtBgEAyggAIa4GAQDMCAAhrwYBAMwIACGwBgEAzAgAIbEGAQDMCAAhsgYBAMwIACGzBgEAzAgAIbQGAADwCAAgtQYBAMwIACG2BgEAzAgAIbcGAQDMCAAhuAYBAMwIACG5BgEAzAgAIboGAADwCAAguwYBAMoIACG8BgEAyggAIb0GAgCjCQAhIqAFAAD-CgAwoQUAAP8KABCiBQAA_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-CwAwiAcAAL4LADCJBwAAvgsAMIoHAAC-CwAwiwcAAMALADCMBwAAwQsAMAsPAACrCwAwEAAAsAsAMIQHAACsCwAwhQcAAK0LADCGBwAArgsAIIcHAACvCwAwiAcAAK8LADCJBwAArwsAMIoHAACvCwAwiwcAALELADCMBwAAsgsAMAsPAACgCwAwEAAApAsAMIQHAAChCwAwhQcAAKILADCGBwAAowsAIIcHAACuCgAwiAcAAK4KADCJBwAArgoAMIoHAACuCgAwiwcAAKULADCMBwAAsQoAMAcPAACCEgAgEAAAqRIAIIQHAACDEgAghQcAAKgSACCIBwAAVgAgiQcAAFYAIIoHAACTAQAgCyEAAKoLACAoAADPCgAgKwAAzgoAIKMFAQAAAAHEBUAAAAAB8gUBAAAAAYUGCAAAAAGGBggAAAABhwYIAAAAAYgGCAAAAAGJBgEAAAABAgAAAE0AIA8AAKkLACADAAAATQAgDwAAqQsAIBAAAKcLACABCAAApxIAMAIAAABNACAIAACnCwAgAgAAALIKACAIAACmCwAgCKMFAQCWCgAhxAVAAJkKACHyBQEAlgoAIYUGCAC0CgAhhgYIALQKACGHBggAtAoAIYgGCAC0CgAhiQYBAJgKACELIQAAqAsAICgAALgKACArAAC3CgAgowUBAJYKACHEBUAAmQoAIfIFAQCWCgAhhQYIALQKACGGBggAtAoAIYcGCAC0CgAhiAYIALQKACGJBgEAmAoAIQUPAACiEgAgEAAApRIAIIQHAACjEgAghQcAAKQSACCKBwAA8AcAIAshAACqCwAgKAAAzwoAICsAAM4KACCjBQEAAAABxAVAAAAAAfIFAQAAAAGFBggAAAABhgYIAAAAAYcGCAAAAAGIBggAAAABiQYBAAAAAQMPAACiEgAghAcAAKMSACCKBwAA8AcAIAgcAAC5CwAgowUBAAAAAcQFQAAAAAHMBQEAAAAB6gUAAACkBgKABgEAAAABpAYBAAAAAaUGIAAAAAECAAAARwAgDwAAuAsAIAMAAABHACAPAAC4CwAgEAAAtgsAIAEIAAChEgAwDRwAANIIACApAAD3CQAgoAUAAPUJADChBQAARQAQogUAAPUJADCjBQEAAAABxAVAAM0IACHMBQEAyggAIeoFAAD2CaQGIoAGAQDKCAAhhAYBAMwIACGkBgEAyggAIaUGIADLCAAhAgAAAEcAIAgAALYLACACAAAAswsAIAgAALQLACALoAUAALILADChBQAAswsAEKIFAACyCwAwowUBAMoIACHEBUAAzQgAIcwFAQDKCAAh6gUAAPYJpAYigAYBAMoIACGEBgEAzAgAIaQGAQDKCAAhpQYgAMsIACELoAUAALILADChBQAAswsAEKIFAACyCwAwowUBAMoIACHEBUAAzQgAIcwFAQDKCAAh6gUAAPYJpAYigAYBAMoIACGEBgEAzAgAIaQGAQDKCAAhpQYgAMsIACEHowUBAJYKACHEBUAAmQoAIcwFAQCWCgAh6gUAALULpAYigAYBAJYKACGkBgEAlgoAIaUGIACXCgAhAYcHAAAApAYCCBwAALcLACCjBQEAlgoAIcQFQACZCgAhzAUBAJYKACHqBQAAtQukBiKABgEAlgoAIaQGAQCWCgAhpQYgAJcKACEFDwAAnBIAIBAAAJ8SACCEBwAAnRIAIIUHAACeEgAgigcAAIICACAIHAAAuQsAIKMFAQAAAAHEBUAAAAABzAUBAAAAAeoFAAAApAYCgAYBAAAAAaQGAQAAAAGlBiAAAAABAw8AAJwSACCEBwAAnRIAIIoHAACCAgAgDyEAANgLACAnAADWCwAgLgAA1wsAIDIAANkLACCjBQEAAAABzQUBAAAAAd4FAgAAAAHoBQAAAI4GAvIFAQAAAAH3BQEAAAAB-QUIAAAAAYoGCAAAAAGLBggAAAABjAYIAAAAAY4GAgAAAAECAAAAPwAgDwAA1QsAIAMAAAA_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-QUIALQKACH6BQEAmAoAIQUPAAD8EQAgEAAA_xEAIIQHAAD9EQAghQcAAP4RACCKBwAAKgAgCycAAO0LACCjBQEAAAABpwVAAAAAAcQFQAAAAAHNBQEAAAAB3AUBAAAAAd4FAgAAAAH3BQEAAAAB-AUBAAAAAfkFCAAAAAH6BQEAAAABAw8AAPwRACCEBwAA_REAIIoHAAAqACANJAAAlgwAIDEAAJcMACCjBQEAAAABpwVAAAAAAcQFQAAAAAGHBggAAAABpgYgAAAAAdIGAQAAAAHUBgAAANQGAtUGCAAAAAHWBggAAAAB1wZAAAAAAdgGQAAAAAECAAAAkwEAIA8AAJUMACADAAAAkwEAIA8AAJUMACAQAAD5CwAgAQgAAPsRADASIQAA0wkAICQAANgJACAxAADXCAAgoAUAANUJADChBQAAVgAQogUAANUJADCjBQEAAAABpwVAAM0IACHEBUAAzQgAIfIFAQDKCAAhhwYIAOEIACGmBiAAywgAIdIGAQAAAAHUBgAA1gnUBiLVBggA1wkAIdYGCADhCAAh1wZAAM0IACHYBkAAzQgAIQIAAACTAQAgCAAA-QsAIAIAAAD2CwAgCAAA9wsAIA-gBQAA9QsAMKEFAAD2CwAQogUAAPULADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHyBQEAyggAIYcGCADhCAAhpgYgAMsIACHSBgEAyggAIdQGAADWCdQGItUGCADXCQAh1gYIAOEIACHXBkAAzQgAIdgGQADNCAAhD6AFAAD1CwAwoQUAAPYLABCiBQAA9QsAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIfIFAQDKCAAhhwYIAOEIACGmBiAAywgAIdIGAQDKCAAh1AYAANYJ1AYi1QYIANcJACHWBggA4QgAIdcGQADNCAAh2AZAAM0IACELowUBAJYKACGnBUAAmQoAIcQFQACZCgAhhwYIALQKACGmBiAAlwoAIdIGAQCWCgAh1AYAAPgL1AYi1QYIAMQLACHWBggAtAoAIdcGQACZCgAh2AZAAJkKACEBhwcAAADUBgINJAAA-gsAIDEAAPsLACCjBQEAlgoAIacFQACZCgAhxAVAAJkKACGHBggAtAoAIaYGIACXCgAh0gYBAJYKACHUBgAA-AvUBiLVBggAxAsAIdYGCAC0CgAh1wZAAJkKACHYBkAAmQoAIQsPAACHDAAwEAAAjAwAMIQHAACIDAAwhQcAAIkMADCGBwAAigwAIIcHAACLDAAwiAcAAIsMADCJBwAAiwwAMIoHAACLDAAwiwcAAI0MADCMBwAAjgwAMAsPAAD8CwAwEAAAgAwAMIQHAAD9CwAwhQcAAP4LADCGBwAA_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_AsAMIQHAAD9CwAwhgcAAP8LACCKBwAAjwsAMA8nAADWCwAgKQAAogwAIC4AANcLACAyAADZCwAgowUBAAAAAc0FAQAAAAHeBQIAAAAB6AUAAACOBgL3BQEAAAAB-QUIAAAAAYQGAQAAAAGKBggAAAABiwYIAAAAAYwGCAAAAAGOBgIAAAABAgAAAD8AIA8AAKEMACADAAAAPwAgDwAAoQwAIBAAAJ8MACABCAAA7hEAMAIAAAA_ACAIAACfDAAgAgAAAMILACAIAACeDAAgC6MFAQCWCgAhzQUBAJYKACHeBQIAwwoAIegFAACXC44GIvcFAQCYCgAh-QUIALQKACGEBgEAlgoAIYoGCADECwAhiwYIALQKACGMBggAtAoAIY4GAgDDCgAhDycAAMYLACApAACgDAAgLgAAxwsAIDIAAMkLACCjBQEAlgoAIc0FAQCWCgAh3gUCAMMKACHoBQAAlwuOBiL3BQEAmAoAIfkFCAC0CgAhhAYBAJYKACGKBggAxAsAIYsGCAC0CgAhjAYIALQKACGOBgIAwwoAIQUPAADpEQAgEAAA7BEAIIQHAADqEQAghQcAAOsRACCKBwAAXQAgDycAANYLACApAACiDAAgLgAA1wsAIDIAANkLACCjBQEAAAABzQUBAAAAAd4FAgAAAAHoBQAAAI4GAvcFAQAAAAH5BQgAAAABhAYBAAAAAYoGCAAAAAGLBggAAAABjAYIAAAAAY4GAgAAAAEDDwAA6REAIIQHAADqEQAgigcAAF0AICAlAADODQAgMgAA1g0AIDMAANENACA1AADSDQAgNgAAzw0AIDcAANANACA4AADTDQAgOQAA1A0AIDoAANUNACA8AADXDQAgowUBAAAAAacFQAAAAAG1BQEAAAABwQUBAAAAAcQFQAAAAAHdBQEAAAAB3wUIAAAAAeAFCAAAAAHhBQgAAAAB4wUBAAAAAeQFAQAAAAHlBQAAzA0AIOYFAgAAAAHoBQAAAOgFAuoFAAAA6gUC6wWAAAAAAewFAADNDQAg7gUAAADuBQLvBQgAAAAB8AUgAAAAAfEFIAAAAAHzBQEAAAABAgAAACoAIA8AAMsNACADAAAAKgAgDwAAyw0AIBAAALIMACABCAAA6BEAMCUhAADTCQAgJQAA_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-QwAMIgHAAD5DAAwiQcAAPkMADCKBwAA-QwAMIsHAAD7DAAwjAcAAPwMADALDwAA6gwAMBAAAO4MADCEBwAA6wwAMIUHAADsDAAwhgcAAO0MACCHBwAAiwwAMIgHAACLDAAwiQcAAIsMADCKBwAAiwwAMIsHAADvDAAwjAcAAI4MADALDwAA3wwAMBAAAOMMADCEBwAA4AwAMIUHAADhDAAwhgcAAOIMACCHBwAA5AsAMIgHAADkCwAwiQcAAOQLADCKBwAA5AsAMIsHAADkDAAwjAcAAOcLADALDwAA1AwAMBAAANgMADCEBwAA1QwAMIUHAADWDAAwhgcAANcMACCHBwAA-woAMIgHAAD7CgAwiQcAAPsKADCKBwAA-woAMIsHAADZDAAwjAcAAP4KADALDwAAywwAMBAAAM8MADCEBwAAzAwAMIUHAADNDAAwhgcAAM4MACCHBwAAvQoAMIgHAAC9CgAwiQcAAL0KADCKBwAAvQoAMIsHAADQDAAwjAcAAMAKADALDwAAvQwAMBAAAMIMADCEBwAAvgwAMIUHAAC_DAAwhgcAAMAMACCHBwAAwQwAMIgHAADBDAAwiQcAAMEMADCKBwAAwQwAMIsHAADDDAAwjAcAAMQMADAFKQIAAAABOwAAygwAIKMFAQAAAAHEBUAAAAABwAYBAAAAAQIAAACEAQAgDwAAyQwAIAMAAACEAQAgDwAAyQwAIBAAAMcMACABCAAA5BEAMAsnAADcCQAgKQIAowkAITsAANsJACCgBQAA2gkAMKEFAACCAQAQogUAANoJADCjBQEAAAABxAVAAM0IACHNBQEAyggAIcAGAQDKCAAh-AYAANkJACACAAAAhAEAIAgAAMcMACACAAAAxQwAIAgAAMYMACAIKQIAowkAIaAFAADEDAAwoQUAAMUMABCiBQAAxAwAMKMFAQDKCAAhxAVAAM0IACHNBQEAyggAIcAGAQDKCAAhCCkCAKMJACGgBQAAxAwAMKEFAADFDAAQogUAAMQMADCjBQEAyggAIcQFQADNCAAhzQUBAMoIACHABgEAyggAIQQpAgDDCgAhowUBAJYKACHEBUAAmQoAIcAGAQCWCgAhBSkCAMMKACE7AADIDAAgowUBAJYKACHEBUAAmQoAIcAGAQCWCgAhBQ8AAN8RACAQAADiEQAghAcAAOARACCFBwAA4REAIIoHAADKBAAgBSkCAAAAATsAAMoMACCjBQEAAAABxAVAAAAAAcAGAQAAAAEDDwAA3xEAIIQHAADgEQAgigcAAMoEACAKLAAA1AsAIC0AAMkKACAuAADLCgAgowUBAAAAAd4FAgAAAAH3BQEAAAAB-QUIAAAAAYEGAQAAAAGCBgEAAAABgwYIAAAAAQIAAABSACAPAADTDAAgAwAAAFIAIA8AANMMACAQAADSDAAgAQgAAN4RADACAAAAUgAgCAAA0gwAIAIAAADBCgAgCAAA0QwAIAejBQEAlgoAId4FAgDDCgAh9wUBAJgKACH5BQgAtAoAIYEGAQCWCgAhggYBAJYKACGDBggAtAoAIQosAADSCwAgLQAAxQoAIC4AAMcKACCjBQEAlgoAId4FAgDDCgAh9wUBAJgKACH5BQgAtAoAIYEGAQCWCgAhggYBAJYKACGDBggAtAoAIQosAADUCwAgLQAAyQoAIC4AAMsKACCjBQEAAAAB3gUCAAAAAfcFAQAAAAH5BQgAAAABgQYBAAAAAYIGAQAAAAGDBggAAAABHyEAAN4MACCjBQEAAAABpwVAAAAAAbUFAQAAAAHEBUAAAAAB4wUBAAAAAfIFAQAAAAGmBiAAAAABpwYBAAAAAagGIAAAAAGpBiAAAAABqgYgAAAAAasGIAAAAAGsBgAAhwsAIK0GAQAAAAGuBgEAAAABrwYBAAAAAbAGAQAAAAGxBgEAAAABsgYBAAAAAbMGAQAAAAG0BgAAiAsAILUGAQAAAAG2BgEAAAABtwYBAAAAAbgGAQAAAAG5BgEAAAABugYAAIkLACC7BgEAAAABvAYBAAAAAb0GAgAAAAECAAAAfwAgDwAA3QwAIAMAAAB_ACAPAADdDAAgEAAA2wwAIAEIAADdEQAwAgAAAH8AIAgAANsMACACAAAA_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_DAAgAgAAAP0MACAIAAD-DAAgCqAFAAD8DAAwoQUAAP0MABCiBQAA_AwAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIc0FAQDKCAAh3gUCAKMJACH3BQEAzAgAIdsGAQDKCAAhCqAFAAD8DAAwoQUAAP0MABCiBQAA_AwAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIc0FAQDKCAAh3gUCAKMJACH3BQEAzAgAIdsGAQDKCAAhBqMFAQCWCgAhpwVAAJkKACHEBUAAmQoAId4FAgDDCgAh9wUBAJgKACHbBgEAlgoAIQguAACBDQAgNAAAgA0AIKMFAQCWCgAhpwVAAJkKACHEBUAAmQoAId4FAgDDCgAh9wUBAJgKACHbBgEAlgoAIQUPAADDEQAgEAAAyREAIIQHAADEEQAghQcAAMgRACCKBwAA-AIAIAcPAADBEQAgEAAAxhEAIIQHAADCEQAghQcAAMURACCIBwAAOQAgiQcAADkAIIoHAAA7ACAILgAAhA0AIDQAAIMNACCjBQEAAAABpwVAAAAAAcQFQAAAAAHeBQIAAAAB9wUBAAAAAdsGAQAAAAEDDwAAwxEAIIQHAADEEQAgigcAAPgCACADDwAAwREAIIQHAADCEQAgigcAADsAIA8hAADYCwAgKQAAogwAIC4AANcLACAyAADZCwAgowUBAAAAAd4FAgAAAAHoBQAAAI4GAvIFAQAAAAH3BQEAAAAB-QUIAAAAAYQGAQAAAAGKBggAAAABiwYIAAAAAYwGCAAAAAGOBgIAAAABAgAAAD8AIA8AAI0NACADAAAAPwAgDwAAjQ0AIBAAAIwNACABCAAAwBEAMAIAAAA_ACAIAACMDQAgAgAAAMILACAIAACLDQAgC6MFAQCWCgAh3gUCAMMKACHoBQAAlwuOBiLyBQEAlgoAIfcFAQCYCgAh-QUIALQKACGEBgEAlgoAIYoGCADECwAhiwYIALQKACGMBggAtAoAIY4GAgDDCgAhDyEAAMgLACApAACgDAAgLgAAxwsAIDIAAMkLACCjBQEAlgoAId4FAgDDCgAh6AUAAJcLjgYi8gUBAJYKACH3BQEAmAoAIfkFCAC0CgAhhAYBAJYKACGKBggAxAsAIYsGCAC0CgAhjAYIALQKACGOBgIAwwoAIQ8hAADYCwAgKQAAogwAIC4AANcLACAyAADZCwAgowUBAAAAAd4FAgAAAAHoBQAAAI4GAvIFAQAAAAH3BQEAAAAB-QUIAAAAAYQGAQAAAAGKBggAAAABiwYIAAAAAYwGCAAAAAGOBgIAAAABBxwAAJsNACCjBQEAAAABpwVAAAAAAcQFQAAAAAHKBQIAAAABywUBAAAAAcwFAQAAAAECAAAAdAAgDwAAmg0AIAMAAAB0ACAPAACaDQAgEAAAmA0AIAEIAAC_EQAwDRwAANIIACAnAADcCQAgoAUAAOAJADChBQAAcgAQogUAAOAJADCjBQEAAAABpwVAAM0IACHEBUAAzQgAIcoFAgCjCQAhywUBAMwIACHMBQEAyggAIc0FAQDKCAAh-QYAAN8JACACAAAAdAAgCAAAmA0AIAIAAACWDQAgCAAAlw0AIAqgBQAAlQ0AMKEFAACWDQAQogUAAJUNADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHKBQIAowkAIcsFAQDMCAAhzAUBAMoIACHNBQEAyggAIQqgBQAAlQ0AMKEFAACWDQAQogUAAJUNADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHKBQIAowkAIcsFAQDMCAAhzAUBAMoIACHNBQEAyggAIQajBQEAlgoAIacFQACZCgAhxAVAAJkKACHKBQIAwwoAIcsFAQCYCgAhzAUBAJYKACEHHAAAmQ0AIKMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIcoFAgDDCgAhywUBAJgKACHMBQEAlgoAIQUPAAC6EQAgEAAAvREAIIQHAAC7EQAghQcAALwRACCKBwAAggIAIAccAACbDQAgowUBAAAAAacFQAAAAAHEBUAAAAABygUCAAAAAcsFAQAAAAHMBQEAAAABAw8AALoRACCEBwAAuxEAIIoHAACCAgAgDTIAAMoNACAzAADIDQAgNQAAyQ0AIKMFAQAAAAGnBUAAAAABxAVAAAAAAdwFAQAAAAHdBQEAAAAB3gUCAAAAAd8FCAAAAAHgBQgAAAAB4QUIAAAAAeIFAQAAAAECAAAAOwAgDwAAxw0AIAMAAAA7ACAPAADHDQAgEAAApg0AIAEIAAC5EQAwEicAANwJACAyAAD0CQAgMwAA1AgAIDUAALEJACCgBQAA-QkAMKEFAAA5ABCiBQAA-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_ACAPAADGDQAgEAAAxQ0AIAEIAACxEQAwAgAAAD8AIAgAAMUNACACAAAAwgsAIAgAAMQNACALowUBAJYKACHNBQEAlgoAId4FAgDDCgAh6AUAAJcLjgYi8gUBAJYKACH5BQgAtAoAIYQGAQCWCgAhigYIAMQLACGLBggAtAoAIYwGCAC0CgAhjgYCAMMKACEPIQAAyAsAICcAAMYLACApAACgDAAgMgAAyQsAIKMFAQCWCgAhzQUBAJYKACHeBQIAwwoAIegFAACXC44GIvIFAQCWCgAh-QUIALQKACGEBgEAlgoAIYoGCADECwAhiwYIALQKACGMBggAtAoAIY4GAgDDCgAhDyEAANgLACAnAADWCwAgKQAAogwAIDIAANkLACCjBQEAAAABzQUBAAAAAd4FAgAAAAHoBQAAAI4GAvIFAQAAAAH5BQgAAAABhAYBAAAAAYoGCAAAAAGLBggAAAABjAYIAAAAAY4GAgAAAAENMgAAyg0AIDMAAMgNACA1AADJDQAgowUBAAAAAacFQAAAAAHEBUAAAAAB3AUBAAAAAd0FAQAAAAHeBQIAAAAB3wUIAAAAAeAFCAAAAAHhBQgAAAAB4gUBAAAAAQQPAAC-DQAwhAcAAL8NADCGBwAAwQ0AIIoHAAC-CwAwBA8AALMNADCEBwAAtA0AMIYHAAC2DQAgigcAAPkMADAEDwAAqg0AMIQHAACrDQAwhgcAAK0NACCKBwAAvQoAMCAlAADODQAgMgAA1g0AIDMAANENACA1AADSDQAgNgAAzw0AIDcAANANACA4AADTDQAgOQAA1A0AIDoAANUNACA8AADXDQAgowUBAAAAAacFQAAAAAG1BQEAAAABwQUBAAAAAcQFQAAAAAHdBQEAAAAB3wUIAAAAAeAFCAAAAAHhBQgAAAAB4wUBAAAAAeQFAQAAAAHlBQAAzA0AIOYFAgAAAAHoBQAAAOgFAuoFAAAA6gUC6wWAAAAAAewFAADNDQAg7gUAAADuBQLvBQgAAAAB8AUgAAAAAfEFIAAAAAHzBQEAAAABAYcHAQAAAAQBhwcBAAAABAMPAACvEQAghAcAALARACCKBwAALwAgBA8AAJwNADCEBwAAnQ0AMIYHAACfDQAgigcAAKANADAEDwAAjg0AMIQHAACPDQAwhgcAAJENACCKBwAAkg0AMAQPAACFDQAwhAcAAIYNADCGBwAAiA0AIIoHAAC-CwAwBA8AAPUMADCEBwAA9gwAMIYHAAD4DAAgigcAAPkMADAEDwAA6gwAMIQHAADrDAAwhgcAAO0MACCKBwAAiwwAMAQPAADfDAAwhAcAAOAMADCGBwAA4gwAIIoHAADkCwAwBA8AANQMADCEBwAA1QwAMIYHAADXDAAgigcAAPsKADAEDwAAywwAMIQHAADMDAAwhgcAAM4MACCKBwAAvQoAMAQPAAC9DAAwhAcAAL4MADCGBwAAwAwAIIoHAADBDAAwAw8AAK0RACCEBwAArhEAIIoHAACCAgAgBA8AAKMMADCEBwAApAwAMIYHAACmDAAgigcAAKcMADAEDwAAmAwAMIQHAACZDAAwhgcAAJsMACCKBwAAvgsAMAQPAADuCwAwhAcAAO8LADCGBwAA8QsAIIoHAADyCwAwBA8AAOALADCEBwAA4QsAMIYHAADjCwAgigcAAOQLADAEDwAAiwsAMIQHAACMCwAwhgcAAI4LACCKBwAAjwsAMAQPAAD3CgAwhAcAAPgKADCGBwAA-goAIIoHAAD7CgAwBA8AAN4KADCEBwAA3woAMIYHAADhCgAgigcAAOIKADAEDwAA0AoAMIQHAADRCgAwhgcAANMKACCKBwAA1AoAMAQPAACqCgAwhAcAAKsKADCGBwAArQoAIIoHAACuCgAwCx0AAKMQACAeAACkEAAgHwAApRAAICEAAKYQACAqAACpEAAgMQAA5w0AIDQAAKcQACA3AACoEAAgQQAA6w0AINUFAACSCgAg4gUAAJIKACAAAAAAAAAAAAAAAAAAAAAAAAAABQ8AAKgRACAQAACrEQAghAcAAKkRACCFBwAAqhEAIIoHAAAqACADDwAAqBEAIIQHAACpEQAgigcAACoAIAAAAAAAAAAABQ8AAKMRACAQAACmEQAghAcAAKQRACCFBwAApREAIIoHAAAqACADDwAAoxEAIIQHAACkEQAgigcAACoAIAAAAAAABQ8AAJ4RACAQAAChEQAghAcAAJ8RACCFBwAAoBEAIIoHAADwBwAgAw8AAJ4RACCEBwAAnxEAIIoHAADwBwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcPAACZEQAgEAAAnBEAIIQHAACaEQAghQcAAJsRACCIBwAASQAgiQcAAEkAIIoHAABdACADDwAAmREAIIQHAACaEQAgigcAAF0AIAAAAAAAAAAAAAABhwcAAAC_BgIFDwAAlBEAIBAAAJcRACCEBwAAlREAIIUHAACWEQAgigcAAC8AIAMPAACUEQAghAcAAJURACCKBwAALwAgAAAAAAAAAAAFDwAAjxEAIBAAAJIRACCEBwAAkBEAIIUHAACREQAgigcAACoAIAMPAACPEQAghAcAAJARACCKBwAAKgAgAAAACw8AAMgOADAQAADMDgAwhAcAAMkOADCFBwAAyg4AMIYHAADLDgAghwcAAMEMADCIBwAAwQwAMIkHAADBDAAwigcAAMEMADCLBwAAzQ4AMIwHAADEDAAwBScAAMMOACApAgAAAAGjBQEAAAABxAVAAAAAAc0FAQAAAAECAAAAhAEAIA8AANAOACADAAAAhAEAIA8AANAOACAQAADPDgAgAQgAAI4RADACAAAAhAEAIAgAAM8OACACAAAAxQwAIAgAAM4OACAEKQIAwwoAIaMFAQCWCgAhxAVAAJkKACHNBQEAlgoAIQUnAADCDgAgKQIAwwoAIaMFAQCWCgAhxAVAAJkKACHNBQEAlgoAIQUnAADDDgAgKQIAAAABowUBAAAAAcQFQAAAAAHNBQEAAAABBA8AAMgOADCEBwAAyQ4AMIYHAADLDgAgigcAAMEMADAAAAAAAAAAAAAAAAAAAAUPAACJEQAgEAAAjBEAIIQHAACKEQAghQcAAIsRACCKBwAA8AcAIAMPAACJEQAghAcAAIoRACCKBwAA8AcAIAAAAAAAAAAAAAAABQ8AAIQRACAQAACHEQAghAcAAIURACCFBwAAhhEAIIoHAADwBwAgAw8AAIQRACCEBwAAhREAIIoHAADwBwAgAAAABw8AAPwQACAQAACCEQAghAcAAP0QACCFBwAAgREAIIgHAAAsACCJBwAALAAgigcAAC8AIAsPAACLDwAwEAAAkA8AMIQHAACMDwAwhQcAAI0PADCGBwAAjg8AIIcHAACPDwAwiAcAAI8PADCJBwAAjw8AMIoHAACPDwAwiwcAAJEPADCMBwAAkg8AMAsPAACCDwAwEAAAhg8AMIQHAACDDwAwhQcAAIQPADCGBwAAhQ8AIIcHAACnDAAwiAcAAKcMADCJBwAApwwAMIoHAACnDAAwiwcAAIcPADCMBwAAqgwAMAsPAAD2DgAwEAAA-w4AMIQHAAD3DgAwhQcAAPgOADCGBwAA-Q4AIIcHAAD6DgAwiAcAAPoOADCJBwAA-g4AMIoHAAD6DgAwiwcAAPwOADCMBwAA_Q4AMAUpAgAAAAGjBQEAAAABpwVAAAAAAcQFQAAAAAG_BgAAAL8GAgIAAAA0ACAPAACBDwAgAwAAADQAIA8AAIEPACAQAACADwAgAQgAAIARADAKJQAA_AkAICkCAKMJACGgBQAA-gkAMKEFAAAyABCiBQAA-gkAMKMFAQAAAAGnBUAAzQgAIcQFQADNCAAh8wUBAMoIACG_BgAA-wm_BiICAAAANAAgCAAAgA8AIAIAAAD-DgAgCAAA_w4AIAkpAgCjCQAhoAUAAP0OADChBQAA_g4AEKIFAAD9DgAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAh8wUBAMoIACG_BgAA-wm_BiIJKQIAowkAIaAFAAD9DgAwoQUAAP4OABCiBQAA_Q4AMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIfMFAQDKCAAhvwYAAPsJvwYiBSkCAMMKACGjBQEAlgoAIacFQACZCgAhxAVAAJkKACG_BgAAtw6_BiIFKQIAwwoAIaMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIb8GAAC3Dr8GIgUpAgAAAAGjBQEAAAABpwVAAAAAAcQFQAAAAAG_BgAAAL8GAiAhAACIDgAgMgAA1g0AIDMAANENACA1AADSDQAgNgAAzw0AIDcAANANACA4AADTDQAgOQAA1A0AIDoAANUNACA8AADXDQAgowUBAAAAAacFQAAAAAG1BQEAAAABwQUBAAAAAcQFQAAAAAHdBQEAAAAB3wUIAAAAAeAFCAAAAAHhBQgAAAAB4wUBAAAAAeQFAQAAAAHlBQAAzA0AIOYFAgAAAAHoBQAAAOgFAuoFAAAA6gUC6wWAAAAAAewFAADNDQAg7gUAAADuBQLvBQgAAAAB8AUgAAAAAfEFIAAAAAHyBQEAAAABAgAAACoAIA8AAIoPACADAAAAKgAgDwAAig8AIBAAAIkPACABCAAA_xAAMAIAAAAqACAIAACJDwAgAgAAAKsMACAIAACIDwAgFqMFAQCWCgAhpwVAAJkKACG1BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHdBQEAmAoAId8FCAC0CgAh4AUIALQKACHhBQgAtAoAIeMFAQCWCgAh5AUBAJYKACHlBQAArQwAIOYFAgDDCgAh6AUAAK4M6AUi6gUAAK8M6gUi6wWAAAAAAewFAACwDAAg7gUAALEM7gUi7wUIALQKACHwBSAAlwoAIfEFIACXCgAh8gUBAJYKACEgIQAAhw4AIDIAALsMACAzAAC2DAAgNQAAtwwAIDYAALQMACA3AAC1DAAgOAAAuAwAIDkAALkMACA6AAC6DAAgPAAAvAwAIKMFAQCWCgAhpwVAAJkKACG1BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHdBQEAmAoAId8FCAC0CgAh4AUIALQKACHhBQgAtAoAIeMFAQCWCgAh5AUBAJYKACHlBQAArQwAIOYFAgDDCgAh6AUAAK4M6AUi6gUAAK8M6gUi6wWAAAAAAewFAACwDAAg7gUAALEM7gUi7wUIALQKACHwBSAAlwoAIfEFIACXCgAh8gUBAJYKACEgIQAAiA4AIDIAANYNACAzAADRDQAgNQAA0g0AIDYAAM8NACA3AADQDQAgOAAA0w0AIDkAANQNACA6AADVDQAgPAAA1w0AIKMFAQAAAAGnBUAAAAABtQUBAAAAAcEFAQAAAAHEBUAAAAAB3QUBAAAAAd8FCAAAAAHgBQgAAAAB4QUIAAAAAeMFAQAAAAHkBQEAAAAB5QUAAMwNACDmBQIAAAAB6AUAAADoBQLqBQAAAOoFAusFgAAAAAHsBQAAzQ0AIO4FAAAA7gUC7wUIAAAAAfAFIAAAAAHxBSAAAAAB8gUBAAAAAQsjAACXDwAgJAAAmA8AICYAAJkPACCjBQEAAAABpwVAAAAAAcEFAQAAAAHEBUAAAAAB4gUBAAAAAeMFAQAAAAGmBiAAAAAB2QYBAAAAAQIAAAAvACAPAACWDwAgAwAAAC8AIA8AAJYPACAQAACVDwAgAQgAAP4QADAQIgAA_gkAICMAAP8JACAkAADTCAAgJgAAgAoAIKAFAAD9CQAwoQUAACwAEKIFAAD9CQAwowUBAAAAAacFQADNCAAhwQUBAAAAAcQFQADNCAAh4gUBAMwIACHjBQEAAAABpgYgAMsIACHZBgEAzAgAIdoGAQDMCAAhAgAAAC8AIAgAAJUPACACAAAAkw8AIAgAAJQPACAMoAUAAJIPADChBQAAkw8AEKIFAACSDwAwowUBAMoIACGnBUAAzQgAIcEFAQDKCAAhxAVAAM0IACHiBQEAzAgAIeMFAQDKCAAhpgYgAMsIACHZBgEAzAgAIdoGAQDMCAAhDKAFAACSDwAwoQUAAJMPABCiBQAAkg8AMKMFAQDKCAAhpwVAAM0IACHBBQEAyggAIcQFQADNCAAh4gUBAMwIACHjBQEAyggAIaYGIADLCAAh2QYBAMwIACHaBgEAzAgAIQijBQEAlgoAIacFQACZCgAhwQUBAJYKACHEBUAAmQoAIeIFAQCYCgAh4wUBAJYKACGmBiAAlwoAIdkGAQCYCgAhCyMAAPMOACAkAAD0DgAgJgAA9Q4AIKMFAQCWCgAhpwVAAJkKACHBBQEAlgoAIcQFQACZCgAh4gUBAJgKACHjBQEAlgoAIaYGIACXCgAh2QYBAJgKACELIwAAlw8AICQAAJgPACAmAACZDwAgowUBAAAAAacFQAAAAAHBBQEAAAABxAVAAAAAAeIFAQAAAAHjBQEAAAABpgYgAAAAAdkGAQAAAAEEDwAAiw8AMIQHAACMDwAwhgcAAI4PACCKBwAAjw8AMAQPAACCDwAwhAcAAIMPADCGBwAAhQ8AIIoHAACnDAAwBA8AAPYOADCEBwAA9w4AMIYHAAD5DgAgigcAAPoOADADDwAA_BAAIIQHAAD9EAAgigcAAC8AIAAAAAAAAAAACw8AAKUPADAQAACpDwAwhAcAAKYPADCFBwAApw8AMIYHAACoDwAghwcAAPkMADCIBwAA-QwAMIkHAAD5DAAwigcAAPkMADCLBwAAqg8AMIwHAAD8DAAwBQ8AAPYQACAQAAD6EAAghAcAAPcQACCFBwAA-RAAIIoHAACCAgAgCCcAAL0NACAuAACEDQAgowUBAAAAAacFQAAAAAHEBUAAAAABzQUBAAAAAd4FAgAAAAH3BQEAAAABAgAAAGkAIA8AAK0PACADAAAAaQAgDwAArQ8AIBAAAKwPACABCAAA-BAAMAIAAABpACAIAACsDwAgAgAAAP0MACAIAACrDwAgBqMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIc0FAQCWCgAh3gUCAMMKACH3BQEAmAoAIQgnAAC7DQAgLgAAgQ0AIKMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIc0FAQCWCgAh3gUCAMMKACH3BQEAmAoAIQgnAAC9DQAgLgAAhA0AIKMFAQAAAAGnBUAAAAABxAVAAAAAAc0FAQAAAAHeBQIAAAAB9wUBAAAAAQQPAAClDwAwhAcAAKYPADCGBwAAqA8AIIoHAAD5DAAwAw8AAPYQACCEBwAA9xAAIIoHAACCAgAgAAAAAAAAAAAAAAUPAADxEAAgEAAA9BAAIIQHAADyEAAghQcAAPMQACCKBwAAggIAIAMPAADxEAAghAcAAPIQACCKBwAAggIAIAAAAAUPAADsEAAgEAAA7xAAIIQHAADtEAAghQcAAO4QACCKBwAAggIAIAMPAADsEAAghAcAAO0QACCKBwAAggIAIAAAAAGHBwAAAPEGAgGHBwAAAPMGAgsPAACOEAAwEAAAkxAAMIQHAACPEAAwhQcAAJAQADCGBwAAkRAAIIcHAACSEAAwiAcAAJIQADCJBwAAkhAAMIoHAACSEAAwiwcAAJQQADCMBwAAlRAAMAsPAACCEAAwEAAAhxAAMIQHAACDEAAwhQcAAIQQADCGBwAAhRAAIIcHAACGEAAwiAcAAIYQADCJBwAAhhAAMIoHAACGEAAwiwcAAIgQADCMBwAAiRAAMAcPAAD9DwAgEAAAgBAAIIQHAAD-DwAghQcAAP8PACCIBwAAJAAgiQcAACQAIIoHAAAaACAHDwAA-A8AIBAAAPsPACCEBwAA-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-A8AIAMAAAAmACAPAAD4DwAgEAAA_A8AIBIAAAAmACAIAAD8DwAgJAAAoQoAIDMAAKIKACA4AACjCgAgOQAApAoAIDoAAKYKACA9AAClCgAgPgAAqAoAID8AAKcKACBAAACpCgAgowUBAJYKACGnBUAAmQoAIbUFAQCYCgAhtgUBAJgKACHBBQEAlgoAIcIFAQCYCgAhxAVAAJkKACEQJAAAoQoAIDMAAKIKACA4AACjCgAgOQAApAoAIDoAAKYKACA9AAClCgAgPgAAqAoAID8AAKcKACBAAACpCgAgowUBAJYKACGnBUAAmQoAIbUFAQCYCgAhtgUBAJgKACHBBQEAlgoAIcIFAQCYCgAhxAVAAJkKACEJowUBAAAAAacFQAAAAAG4BQEAAAABwQUBAAAAAcQFQAAAAAHUBSAAAAAB1QVAAAAAAfYGAQAAAAH3BgEAAAABAgAAABoAIA8AAP0PACADAAAAJAAgDwAA_Q8AIBAAAIEQACALAAAAJAAgCAAAgRAAIKMFAQCWCgAhpwVAAJkKACG4BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHUBSAAlwoAIdUFQACZCwAh9gYBAJgKACH3BgEAmAoAIQmjBQEAlgoAIacFQACZCgAhuAUBAJYKACHBBQEAlgoAIcQFQACZCgAh1AUgAJcKACHVBUAAmQsAIfYGAQCYCgAh9wYBAJgKACEMowUBAAAAAacFQAAAAAHEBUAAAAAB4wYBAAAAAeQGAQAAAAHlBgEAAAAB5gYBAAAAAecGAQAAAAHoBkAAAAAB6QZAAAAAAeoGAQAAAAHrBgEAAAABAgAAACIAIA8AAI0QACADAAAAIgAgDwAAjRAAIBAAAIwQACABCAAA5xAAMBEcAADSCAAgoAUAAIcKADChBQAAIAAQogUAAIcKADCjBQEAAAABpwVAAM0IACHEBUAAzQgAIcwFAQDKCAAh4wYBAMoIACHkBgEAyggAIeUGAQDMCAAh5gYBAMwIACHnBgEAzAgAIegGQADtCAAh6QZAAO0IACHqBgEAzAgAIesGAQDMCAAhAgAAACIAIAgAAIwQACACAAAAihAAIAgAAIsQACAQoAUAAIkQADChBQAAihAAEKIFAACJEAAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhzAUBAMoIACHjBgEAyggAIeQGAQDKCAAh5QYBAMwIACHmBgEAzAgAIecGAQDMCAAh6AZAAO0IACHpBkAA7QgAIeoGAQDMCAAh6wYBAMwIACEQoAUAAIkQADChBQAAihAAEKIFAACJEAAwowUBAMoIACGnBUAAzQgAIcQFQADNCAAhzAUBAMoIACHjBgEAyggAIeQGAQDKCAAh5QYBAMwIACHmBgEAzAgAIecGAQDMCAAh6AZAAO0IACHpBkAA7QgAIeoGAQDMCAAh6wYBAMwIACEMowUBAJYKACGnBUAAmQoAIcQFQACZCgAh4wYBAJYKACHkBgEAlgoAIeUGAQCYCgAh5gYBAJgKACHnBgEAmAoAIegGQACZCwAh6QZAAJkLACHqBgEAmAoAIesGAQCYCgAhDKMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIeMGAQCWCgAh5AYBAJYKACHlBgEAmAoAIeYGAQCYCgAh5wYBAJgKACHoBkAAmQsAIekGQACZCwAh6gYBAJgKACHrBgEAmAoAIQyjBQEAAAABpwVAAAAAAcQFQAAAAAHjBgEAAAAB5AYBAAAAAeUGAQAAAAHmBgEAAAAB5wYBAAAAAegGQAAAAAHpBkAAAAAB6gYBAAAAAesGAQAAAAEHowUBAAAAAacFQAAAAAHEBUAAAAAB4gZAAAAAAewGAQAAAAHtBgEAAAAB7gYBAAAAAQIAAAAeACAPAACZEAAgAwAAAB4AIA8AAJkQACAQAACYEAAgAQgAAOYQADAMHAAA0ggAIKAFAACICgAwoQUAABwAEKIFAACICgAwowUBAAAAAacFQADNCAAhxAVAAM0IACHMBQEAyggAIeIGQADNCAAh7AYBAAAAAe0GAQDMCAAh7gYBAMwIACECAAAAHgAgCAAAmBAAIAIAAACWEAAgCAAAlxAAIAugBQAAlRAAMKEFAACWEAAQogUAAJUQADCjBQEAyggAIacFQADNCAAhxAVAAM0IACHMBQEAyggAIeIGQADNCAAh7AYBAMoIACHtBgEAzAgAIe4GAQDMCAAhC6AFAACVEAAwoQUAAJYQABCiBQAAlRAAMKMFAQDKCAAhpwVAAM0IACHEBUAAzQgAIcwFAQDKCAAh4gZAAM0IACHsBgEAyggAIe0GAQDMCAAh7gYBAMwIACEHowUBAJYKACGnBUAAmQoAIcQFQACZCgAh4gZAAJkKACHsBgEAlgoAIe0GAQCYCgAh7gYBAJgKACEHowUBAJYKACGnBUAAmQoAIcQFQACZCgAh4gZAAJkKACHsBgEAlgoAIe0GAQCYCgAh7gYBAJgKACEHowUBAAAAAacFQAAAAAHEBUAAAAAB4gZAAAAAAewGAQAAAAHtBgEAAAAB7gYBAAAAAQQPAACOEAAwhAcAAI8QADCGBwAAkRAAIIoHAACSEAAwBA8AAIIQADCEBwAAgxAAMIYHAACFEAAgigcAAIYQADADDwAA_Q8AIIQHAAD-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_zBiLvBiAAlwoAIfEGAADED_EGIvMGIACXCgAhFB0AAMYPACAeAADHDwAgIQAAyQ8AICoAAM0PACAxAADKDwAgNAAAyw8AIDcAAMwPACBBAADODwAgowUBAJYKACGnBUAAmQoAIbgFAQCWCgAhwQUBAJYKACHEBUAAmQoAIdQFIACXCgAh1QVAAJkLACHiBQEAmAoAIegFAADFD_MGIu8GIACXCgAh8QYAAMQP8QYi8wYgAJcKACEEowUBAAAAAacFQAAAAAHEBUAAAAAB4QYBAAAAAQSjBQEAAAABpwVAAAAAAcEFAQAAAAHEBUAAAAABAgAAAM4BACAPAADhEAAgAwAAANYBACAPAADhEAAgEAAA5RAAIAYAAADWAQAgCAAA5RAAIKMFAQCWCgAhpwVAAJkKACHBBQEAlgoAIcQFQACZCgAhBKMFAQCWCgAhpwVAAJkKACHBBQEAlgoAIcQFQACZCgAhB6MFAQAAAAGnBUAAAAABxAVAAAAAAeIGQAAAAAHsBgEAAAAB7QYBAAAAAe4GAQAAAAEMowUBAAAAAacFQAAAAAHEBUAAAAAB4wYBAAAAAeQGAQAAAAHlBgEAAAAB5gYBAAAAAecGAQAAAAHoBkAAAAAB6QZAAAAAAeoGAQAAAAHrBgEAAAABGaMFAQAAAAGnBUAAAAABtwUBAAAAAbkFAQAAAAHEBUAAAAAB8gUBAAAAAYYGCAAAAAGHBggAAAABjwYCAAAAAZAGAQAAAAGSBgAAAJIGApMGCAAAAAGVBgAAAJUGApYGAQAAAAGXBgAAAI4GApgGAQAAAAGZBgEAAAABmgYBAAAAAZsGAQAAAAGdBgAAAJ0GA54GAQAAAAGfBgEAAAABoAYBAAAAAaEGQAAAAAGiBgEAAAABBqMFAQAAAAGnBUAAAAABxAVAAAAAAcoFAgAAAAHLBQEAAAABzQUBAAAAAQejBQEAAAABxAVAAAAAAeoFAAAApAYCgAYBAAAAAYQGAQAAAAGkBgEAAAABpQYgAAAAAQijBQEAAAABxAVAAAAAAfIFAQAAAAGEBgEAAAABhQYIAAAAAYYGCAAAAAGHBggAAAABiAYIAAAAARQeAACbEAAgHwAAnBAAICEAAJ0QACAqAAChEAAgMQAAnhAAIDQAAJ8QACA3AACgEAAgQQAAohAAIKMFAQAAAAGnBUAAAAABuAUBAAAAAcEFAQAAAAHEBUAAAAAB1AUgAAAAAdUFQAAAAAHiBQEAAAAB6AUAAADzBgLvBiAAAAAB8QYAAADxBgLzBiAAAAABAgAAAIICACAPAADsEAAgAwAAAEEAIA8AAOwQACAQAADwEAAgFgAAAEEAIAgAAPAQACAeAADHDwAgHwAAyA8AICEAAMkPACAqAADNDwAgMQAAyg8AIDQAAMsPACA3AADMDwAgQQAAzg8AIKMFAQCWCgAhpwVAAJkKACG4BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHUBSAAlwoAIdUFQACZCwAh4gUBAJgKACHoBQAAxQ_zBiLvBiAAlwoAIfEGAADED_EGIvMGIACXCgAhFB4AAMcPACAfAADIDwAgIQAAyQ8AICoAAM0PACAxAADKDwAgNAAAyw8AIDcAAMwPACBBAADODwAgowUBAJYKACGnBUAAmQoAIbgFAQCWCgAhwQUBAJYKACHEBUAAmQoAIdQFIACXCgAh1QVAAJkLACHiBQEAmAoAIegFAADFD_MGIu8GIACXCgAh8QYAAMQP8QYi8wYgAJcKACEUHQAAmhAAIB8AAJwQACAhAACdEAAgKgAAoRAAIDEAAJ4QACA0AACfEAAgNwAAoBAAIEEAAKIQACCjBQEAAAABpwVAAAAAAbgFAQAAAAHBBQEAAAABxAVAAAAAAdQFIAAAAAHVBUAAAAAB4gUBAAAAAegFAAAA8wYC7wYgAAAAAfEGAAAA8QYC8wYgAAAAAQIAAACCAgAgDwAA8RAAIAMAAABBACAPAADxEAAgEAAA9RAAIBYAAABBACAIAAD1EAAgHQAAxg8AIB8AAMgPACAhAADJDwAgKgAAzQ8AIDEAAMoPACA0AADLDwAgNwAAzA8AIEEAAM4PACCjBQEAlgoAIacFQACZCgAhuAUBAJYKACHBBQEAlgoAIcQFQACZCgAh1AUgAJcKACHVBUAAmQsAIeIFAQCYCgAh6AUAAMUP8wYi7wYgAJcKACHxBgAAxA_xBiLzBiAAlwoAIRQdAADGDwAgHwAAyA8AICEAAMkPACAqAADNDwAgMQAAyg8AIDQAAMsPACA3AADMDwAgQQAAzg8AIKMFAQCWCgAhpwVAAJkKACG4BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHUBSAAlwoAIdUFQACZCwAh4gUBAJgKACHoBQAAxQ_zBiLvBiAAlwoAIfEGAADED_EGIvMGIACXCgAhFB0AAJoQACAeAACbEAAgHwAAnBAAICEAAJ0QACAqAAChEAAgMQAAnhAAIDcAAKAQACBBAACiEAAgowUBAAAAAacFQAAAAAG4BQEAAAABwQUBAAAAAcQFQAAAAAHUBSAAAAAB1QVAAAAAAeIFAQAAAAHoBQAAAPMGAu8GIAAAAAHxBgAAAPEGAvMGIAAAAAECAAAAggIAIA8AAPYQACAGowUBAAAAAacFQAAAAAHEBUAAAAABzQUBAAAAAd4FAgAAAAH3BQEAAAABAwAAAEEAIA8AAPYQACAQAAD7EAAgFgAAAEEAIAgAAPsQACAdAADGDwAgHgAAxw8AIB8AAMgPACAhAADJDwAgKgAAzQ8AIDEAAMoPACA3AADMDwAgQQAAzg8AIKMFAQCWCgAhpwVAAJkKACG4BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHUBSAAlwoAIdUFQACZCwAh4gUBAJgKACHoBQAAxQ_zBiLvBiAAlwoAIfEGAADED_EGIvMGIACXCgAhFB0AAMYPACAeAADHDwAgHwAAyA8AICEAAMkPACAqAADNDwAgMQAAyg8AIDcAAMwPACBBAADODwAgowUBAJYKACGnBUAAmQoAIbgFAQCWCgAhwQUBAJYKACHEBUAAmQoAIdQFIACXCgAh1QVAAJkLACHiBQEAmAoAIegFAADFD_MGIu8GIACXCgAh8QYAAMQP8QYi8wYgAJcKACEMIgAAmg8AICQAAJgPACAmAACZDwAgowUBAAAAAacFQAAAAAHBBQEAAAABxAVAAAAAAeIFAQAAAAHjBQEAAAABpgYgAAAAAdkGAQAAAAHaBgEAAAABAgAAAC8AIA8AAPwQACAIowUBAAAAAacFQAAAAAHBBQEAAAABxAVAAAAAAeIFAQAAAAHjBQEAAAABpgYgAAAAAdkGAQAAAAEWowUBAAAAAacFQAAAAAG1BQEAAAABwQUBAAAAAcQFQAAAAAHdBQEAAAAB3wUIAAAAAeAFCAAAAAHhBQgAAAAB4wUBAAAAAeQFAQAAAAHlBQAAzA0AIOYFAgAAAAHoBQAAAOgFAuoFAAAA6gUC6wWAAAAAAewFAADNDQAg7gUAAADuBQLvBQgAAAAB8AUgAAAAAfEFIAAAAAHyBQEAAAABBSkCAAAAAaMFAQAAAAGnBUAAAAABxAVAAAAAAb8GAAAAvwYCAwAAACwAIA8AAPwQACAQAACDEQAgDgAAACwAIAgAAIMRACAiAADyDgAgJAAA9A4AICYAAPUOACCjBQEAlgoAIacFQACZCgAhwQUBAJYKACHEBUAAmQoAIeIFAQCYCgAh4wUBAJYKACGmBiAAlwoAIdkGAQCYCgAh2gYBAJgKACEMIgAA8g4AICQAAPQOACAmAAD1DgAgowUBAJYKACGnBUAAmQoAIcEFAQCWCgAhxAVAAJkKACHiBQEAmAoAIeMFAQCWCgAhpgYgAJcKACHZBgEAmAoAIdoGAQCYCgAhESAAANgNACAkAADZDQAgMwAA2g0AIDkAANwNACA6AADeDQAgPQAA3Q0AID4AAOANACA_AADfDQAgQAAA4Q0AIKMFAQAAAAGnBUAAAAABtQUBAAAAAbYFAQAAAAHBBQEAAAABwgUBAAAAAcMFAQAAAAHEBUAAAAABAgAAAPAHACAPAACEEQAgAwAAACYAIA8AAIQRACAQAACIEQAgEwAAACYAIAgAAIgRACAgAACgCgAgJAAAoQoAIDMAAKIKACA5AACkCgAgOgAApgoAID0AAKUKACA-AACoCgAgPwAApwoAIEAAAKkKACCjBQEAlgoAIacFQACZCgAhtQUBAJgKACG2BQEAmAoAIcEFAQCWCgAhwgUBAJgKACHDBQEAlgoAIcQFQACZCgAhESAAAKAKACAkAAChCgAgMwAAogoAIDkAAKQKACA6AACmCgAgPQAApQoAID4AAKgKACA_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_xBiLzBiAAlwoAIRQdAADGDwAgHgAAxw8AIB8AAMgPACAhAADJDwAgKgAAzQ8AIDEAAMoPACA0AADLDwAgQQAAzg8AIKMFAQCWCgAhpwVAAJkKACG4BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHUBSAAlwoAIdUFQACZCwAh4gUBAJgKACHoBQAAxQ_zBiLvBiAAlwoAIfEGAADED_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_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_xBiLzBiAAlwoAIRQdAADGDwAgHgAAxw8AIB8AAMgPACAhAADJDwAgMQAAyg8AIDQAAMsPACA3AADMDwAgQQAAzg8AIKMFAQCWCgAhpwVAAJkKACG4BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHUBSAAlwoAIdUFQACZCwAh4gUBAJgKACHoBQAAxQ_zBiLvBiAAlwoAIfEGAADED_EGIvMGIACXCgAhB6MFAQAAAAHEBUAAAAABzAUBAAAAAeoFAAAApAYCgAYBAAAAAaQGAQAAAAGlBiAAAAABESAAANgNACAkAADZDQAgMwAA2g0AIDgAANsNACA5AADcDQAgOgAA3g0AID0AAN0NACA-AADgDQAgPwAA3w0AIKMFAQAAAAGnBUAAAAABtQUBAAAAAbYFAQAAAAHBBQEAAAABwgUBAAAAAcMFAQAAAAHEBUAAAAABAgAAAPAHACAPAACiEgAgAwAAACYAIA8AAKISACAQAACmEgAgEwAAACYAIAgAAKYSACAgAACgCgAgJAAAoQoAIDMAAKIKACA4AACjCgAgOQAApAoAIDoAAKYKACA9AAClCgAgPgAAqAoAID8AAKcKACCjBQEAlgoAIacFQACZCgAhtQUBAJgKACG2BQEAmAoAIcEFAQCWCgAhwgUBAJgKACHDBQEAlgoAIcQFQACZCgAhESAAAKAKACAkAAChCgAgMwAAogoAIDgAAKMKACA5AACkCgAgOgAApgoAID0AAKUKACA-AACoCgAgPwAApwoAIKMFAQCWCgAhpwVAAJkKACG1BQEAmAoAIbYFAQCYCgAhwQUBAJYKACHCBQEAmAoAIcMFAQCWCgAhxAVAAJkKACEIowUBAAAAAcQFQAAAAAHyBQEAAAABhQYIAAAAAYYGCAAAAAGHBggAAAABiAYIAAAAAYkGAQAAAAEDAAAAVgAgDwAAghIAIBAAAKoSACAQAAAAVgAgCAAAqhIAICEAAO0OACAkAAD6CwAgowUBAJYKACGnBUAAmQoAIcQFQACZCgAh8gUBAJYKACGHBggAtAoAIaYGIACXCgAh0gYBAJYKACHUBgAA-AvUBiLVBggAxAsAIdYGCAC0CgAh1wZAAJkKACHYBkAAmQoAIQ4hAADtDgAgJAAA-gsAIKMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIfIFAQCWCgAhhwYIALQKACGmBiAAlwoAIdIGAQCWCgAh1AYAAPgL1AYi1QYIAMQLACHWBggAtAoAIdcGQACZCgAh2AZAAJkKACEDAAAAQQAgDwAAhBIAIBAAAK0SACAWAAAAQQAgCAAArRIAIB0AAMYPACAeAADHDwAgHwAAyA8AICEAAMkPACAqAADNDwAgNAAAyw8AIDcAAMwPACBBAADODwAgowUBAJYKACGnBUAAmQoAIbgFAQCWCgAhwQUBAJYKACHEBUAAmQoAIdQFIACXCgAh1QVAAJkLACHiBQEAmAoAIegFAADFD_MGIu8GIACXCgAh8QYAAMQP8QYi8wYgAJcKACEUHQAAxg8AIB4AAMcPACAfAADIDwAgIQAAyQ8AICoAAM0PACA0AADLDwAgNwAAzA8AIEEAAM4PACCjBQEAlgoAIacFQACZCgAhuAUBAJYKACHBBQEAlgoAIcQFQACZCgAh1AUgAJcKACHVBUAAmQsAIeIFAQCYCgAh6AUAAMUP8wYi7wYgAJcKACHxBgAAxA_xBiLzBiAAlwoAIRmjBQEAAAABpwVAAAAAAbcFAQAAAAG5BQEAAAABxAVAAAAAAcwFAQAAAAGGBggAAAABhwYIAAAAAY8GAgAAAAGQBgEAAAABkgYAAACSBgKTBggAAAABlQYAAACVBgKWBgEAAAABlwYAAACOBgKYBgEAAAABmQYBAAAAAZoGAQAAAAGbBgEAAAABnQYAAACdBgOeBgEAAAABnwYBAAAAAaAGAQAAAAGhBkAAAAABogYBAAAAASEhAACIDgAgJQAAzg0AIDIAANYNACAzAADRDQAgNQAA0g0AIDYAAM8NACA3AADQDQAgOAAA0w0AIDkAANQNACA8AADXDQAgowUBAAAAAacFQAAAAAG1BQEAAAABwQUBAAAAAcQFQAAAAAHdBQEAAAAB3wUIAAAAAeAFCAAAAAHhBQgAAAAB4wUBAAAAAeQFAQAAAAHlBQAAzA0AIOYFAgAAAAHoBQAAAOgFAuoFAAAA6gUC6wWAAAAAAewFAADNDQAg7gUAAADuBQLvBQgAAAAB8AUgAAAAAfEFIAAAAAHyBQEAAAAB8wUBAAAAAQIAAAAqACAPAACvEgAgAwAAACgAIA8AAK8SACAQAACzEgAgIwAAACgAIAgAALMSACAhAACHDgAgJQAAswwAIDIAALsMACAzAAC2DAAgNQAAtwwAIDYAALQMACA3AAC1DAAgOAAAuAwAIDkAALkMACA8AAC8DAAgowUBAJYKACGnBUAAmQoAIbUFAQCWCgAhwQUBAJYKACHEBUAAmQoAId0FAQCYCgAh3wUIALQKACHgBQgAtAoAIeEFCAC0CgAh4wUBAJYKACHkBQEAlgoAIeUFAACtDAAg5gUCAMMKACHoBQAArgzoBSLqBQAArwzqBSLrBYAAAAAB7AUAALAMACDuBQAAsQzuBSLvBQgAtAoAIfAFIACXCgAh8QUgAJcKACHyBQEAlgoAIfMFAQCWCgAhISEAAIcOACAlAACzDAAgMgAAuwwAIDMAALYMACA1AAC3DAAgNgAAtAwAIDcAALUMACA4AAC4DAAgOQAAuQwAIDwAALwMACCjBQEAlgoAIacFQACZCgAhtQUBAJYKACHBBQEAlgoAIcQFQACZCgAh3QUBAJgKACHfBQgAtAoAIeAFCAC0CgAh4QUIALQKACHjBQEAlgoAIeQFAQCWCgAh5QUAAK0MACDmBQIAwwoAIegFAACuDOgFIuoFAACvDOoFIusFgAAAAAHsBQAAsAwAIO4FAACxDO4FIu8FCAC0CgAh8AUgAJcKACHxBSAAlwoAIfIFAQCWCgAh8wUBAJYKACEeowUBAAAAAacFQAAAAAG1BQEAAAABxAVAAAAAAc0FAQAAAAHjBQEAAAABpgYgAAAAAacGAQAAAAGoBiAAAAABqQYgAAAAAaoGIAAAAAGrBiAAAAABrAYAAIcLACCtBgEAAAABrgYBAAAAAa8GAQAAAAGwBgEAAAABsQYBAAAAAbIGAQAAAAGzBgEAAAABtAYAAIgLACC1BgEAAAABtgYBAAAAAbcGAQAAAAG4BgEAAAABuQYBAAAAAboGAACJCwAguwYBAAAAAbwGAQAAAAG9BgIAAAABESAAANgNACAkAADZDQAgMwAA2g0AIDgAANsNACA5AADcDQAgOgAA3g0AID0AAN0NACA_AADfDQAgQAAA4Q0AIKMFAQAAAAGnBUAAAAABtQUBAAAAAbYFAQAAAAHBBQEAAAABwgUBAAAAAcMFAQAAAAHEBUAAAAABAgAAAPAHACAPAAC1EgAgAwAAACYAIA8AALUSACAQAAC5EgAgEwAAACYAIAgAALkSACAgAACgCgAgJAAAoQoAIDMAAKIKACA4AACjCgAgOQAApAoAIDoAAKYKACA9AAClCgAgPwAApwoAIEAAAKkKACCjBQEAlgoAIacFQACZCgAhtQUBAJgKACG2BQEAmAoAIcEFAQCWCgAhwgUBAJgKACHDBQEAlgoAIcQFQACZCgAhESAAAKAKACAkAAChCgAgMwAAogoAIDgAAKMKACA5AACkCgAgOgAApgoAID0AAKUKACA_AACnCgAgQAAAqQoAIKMFAQCWCgAhpwVAAJkKACG1BQEAmAoAIbYFAQCYCgAhwQUBAJYKACHCBQEAmAoAIcMFAQCWCgAhxAVAAJkKACEIowUBAAAAAacFQAAAAAHBBQEAAAABxAVAAAAAAfIFAQAAAAH5BQgAAAABxQYBAAAAAcYGQAAAAAEFowUBAAAAAacFQAAAAAHBBQEAAAABxAVAAAAAAaYGIAAAAAEHIQAA4Q4AIKMFAQAAAAGnBUAAAAABwQUBAAAAAcQFQAAAAAHyBQEAAAABpgYgAAAAAQIAAACaAQAgDwAAvBIAIAMAAACYAQAgDwAAvBIAIBAAAMASACAJAAAAmAEAIAgAAMASACAhAADgDgAgowUBAJYKACGnBUAAmQoAIcEFAQCWCgAhxAVAAJkKACHyBQEAlgoAIaYGIACXCgAhByEAAOAOACCjBQEAlgoAIacFQACZCgAhwQUBAJYKACHEBUAAmQoAIfIFAQCWCgAhpgYgAJcKACEIowUBAAAAAacFQAAAAAHBBQEAAAABxAVAAAAAAfMFAQAAAAH5BQgAAAABxQYBAAAAAcYGQAAAAAEUHQAAmhAAIB4AAJsQACAfAACcEAAgIQAAnRAAICoAAKEQACAxAACeEAAgNAAAnxAAIDcAAKAQACCjBQEAAAABpwVAAAAAAbgFAQAAAAHBBQEAAAABxAVAAAAAAdQFIAAAAAHVBUAAAAAB4gUBAAAAAegFAAAA8wYC7wYgAAAAAfEGAAAA8QYC8wYgAAAAAQIAAACCAgAgDwAAwhIAIB8cAADbCwAgIQAAhgwAICgAANwLACAqAADdCwAgMAAA3wsAIKMFAQAAAAGnBUAAAAABtwUBAAAAAbkFAQAAAAHEBUAAAAABzAUBAAAAAfIFAQAAAAGGBggAAAABhwYIAAAAAY8GAgAAAAGQBgEAAAABkgYAAACSBgKTBggAAAABlQYAAACVBgKWBgEAAAABlwYAAACOBgKYBgEAAAABmQYBAAAAAZoGAQAAAAGbBgEAAAABnQYAAACdBgOeBgEAAAABnwYBAAAAAaAGAQAAAAGhBkAAAAABogYBAAAAAQIAAABdACAPAADEEgAgDicAAIEOACAzAADIDQAgNQAAyQ0AIKMFAQAAAAGnBUAAAAABxAVAAAAAAc0FAQAAAAHcBQEAAAAB3QUBAAAAAd4FAgAAAAHfBQgAAAAB4AUIAAAAAeEFCAAAAAHiBQEAAAABAgAAADsAIA8AAMYSACAhIQAAiA4AICUAAM4NACAzAADRDQAgNQAA0g0AIDYAAM8NACA3AADQDQAgOAAA0w0AIDkAANQNACA6AADVDQAgPAAA1w0AIKMFAQAAAAGnBUAAAAABtQUBAAAAAcEFAQAAAAHEBUAAAAAB3QUBAAAAAd8FCAAAAAHgBQgAAAAB4QUIAAAAAeMFAQAAAAHkBQEAAAAB5QUAAMwNACDmBQIAAAAB6AUAAADoBQLqBQAAAOoFAusFgAAAAAHsBQAAzQ0AIO4FAAAA7gUC7wUIAAAAAfAFIAAAAAHxBSAAAAAB8gUBAAAAAfMFAQAAAAECAAAAKgAgDwAAyBIAIBAhAADYCwAgJwAA1gsAICkAAKIMACAuAADXCwAgowUBAAAAAc0FAQAAAAHeBQIAAAAB6AUAAACOBgLyBQEAAAAB9wUBAAAAAfkFCAAAAAGEBgEAAAABigYIAAAAAYsGCAAAAAGMBggAAAABjgYCAAAAAQIAAAA_ACAPAADKEgAgAwAAADkAIA8AAMYSACAQAADOEgAgEAAAADkAIAgAAM4SACAnAACADgAgMwAApw0AIDUAAKgNACCjBQEAlgoAIacFQACZCgAhxAVAAJkKACHNBQEAlgoAIdwFAQCWCgAh3QUBAJgKACHeBQIAwwoAId8FCAC0CgAh4AUIALQKACHhBQgAtAoAIeIFAQCYCgAhDicAAIAOACAzAACnDQAgNQAAqA0AIKMFAQCWCgAhpwVAAJkKACHEBUAAmQoAIc0FAQCWCgAh3AUBAJYKACHdBQEAmAoAId4FAgDDCgAh3wUIALQKACHgBQgAtAoAIeEFCAC0CgAh4gUBAJgKACEDAAAAKAAgDwAAyBIAIBAAANESACAjAAAAKAAgCAAA0RIAICEAAIcOACAlAACzDAAgMwAAtgwAIDUAALcMACA2AAC0DAAgNwAAtQwAIDgAALgMACA5AAC5DAAgOgAAugwAIDwAALwMACCjBQEAlgoAIacFQACZCgAhtQUBAJYKACHBBQEAlgoAIcQFQACZCgAh3QUBAJgKACHfBQgAtAoAIeAFCAC0CgAh4QUIALQKACHjBQEAlgoAIeQFAQCWCgAh5QUAAK0MACDmBQIAwwoAIegFAACuDOgFIuoFAACvDOoFIusFgAAAAAHsBQAAsAwAIO4FAACxDO4FIu8FCAC0CgAh8AUgAJcKACHxBSAAlwoAIfIFAQCWCgAh8wUBAJYKACEhIQAAhw4AICUAALMMACAzAAC2DAAgNQAAtwwAIDYAALQMACA3AAC1DAAgOAAAuAwAIDkAALkMACA6AAC6DAAgPAAAvAwAIKMFAQCWCgAhpwVAAJkKACG1BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHdBQEAmAoAId8FCAC0CgAh4AUIALQKACHhBQgAtAoAIeMFAQCWCgAh5AUBAJYKACHlBQAArQwAIOYFAgDDCgAh6AUAAK4M6AUi6gUAAK8M6gUi6wWAAAAAAewFAACwDAAg7gUAALEM7gUi7wUIALQKACHwBSAAlwoAIfEFIACXCgAh8gUBAJYKACHzBQEAlgoAIQMAAAA9ACAPAADKEgAgEAAA1BIAIBIAAAA9ACAIAADUEgAgIQAAyAsAICcAAMYLACApAACgDAAgLgAAxwsAIKMFAQCWCgAhzQUBAJYKACHeBQIAwwoAIegFAACXC44GIvIFAQCWCgAh9wUBAJgKACH5BQgAtAoAIYQGAQCWCgAhigYIAMQLACGLBggAtAoAIYwGCAC0CgAhjgYCAMMKACEQIQAAyAsAICcAAMYLACApAACgDAAgLgAAxwsAIKMFAQCWCgAhzQUBAJYKACHeBQIAwwoAIegFAACXC44GIvIFAQCWCgAh9wUBAJgKACH5BQgAtAoAIYQGAQCWCgAhigYIAMQLACGLBggAtAoAIYwGCAC0CgAhjgYCAMMKACEHowUBAAAAAc0FAQAAAAHeBQIAAAAB9wUBAAAAAfkFCAAAAAGCBgEAAAABgwYIAAAAAQMAAABBACAPAADCEgAgEAAA2BIAIBYAAABBACAIAADYEgAgHQAAxg8AIB4AAMcPACAfAADIDwAgIQAAyQ8AICoAAM0PACAxAADKDwAgNAAAyw8AIDcAAMwPACCjBQEAlgoAIacFQACZCgAhuAUBAJYKACHBBQEAlgoAIcQFQACZCgAh1AUgAJcKACHVBUAAmQsAIeIFAQCYCgAh6AUAAMUP8wYi7wYgAJcKACHxBgAAxA_xBiLzBiAAlwoAIRQdAADGDwAgHgAAxw8AIB8AAMgPACAhAADJDwAgKgAAzQ8AIDEAAMoPACA0AADLDwAgNwAAzA8AIKMFAQCWCgAhpwVAAJkKACG4BQEAlgoAIcEFAQCWCgAhxAVAAJkKACHUBSAAlwoAIdUFQACZCwAh4gUBAJgKACHoBQAAxQ_zBiLvBiAAlwoAIfEGAADED_EGIvMGIACXCgAhAwAAAEkAIA8AAMQSACAQAADbEgAgIQAAAEkAIAgAANsSACAcAACbCwAgIQAAhAwAICgAAJwLACAqAACdCwAgMAAAnwsAIKMFAQCWCgAhpwVAAJkKACG3BQEAmAoAIbkFAQCYCgAhxAVAAJkKACHMBQEAmAoAIfIFAQCYCgAhhgYIALQKACGHBggAtAoAIY8GAgDDCgAhkAYBAJgKACGSBgAAlQuSBiKTBggAtAoAIZUGAACWC5UGIpYGAQCYCgAhlwYAAJcLjgYimAYBAJgKACGZBgEAmAoAIZoGAQCYCgAhmwYBAJgKACGdBgAAmAudBiOeBgEAmAoAIZ8GAQCYCgAhoAYBAJgKACGhBkAAmQsAIaIGAQCYCgAhHxwAAJsLACAhAACEDAAgKAAAnAsAICoAAJ0LACAwAACfCwAgowUBAJYKACGnBUAAmQoAIbcFAQCYCgAhuQUBAJgKACHEBUAAmQoAIcwFAQCYCgAh8gUBAJgKACGGBggAtAoAIYcGCAC0CgAhjwYCAMMKACGQBgEAmAoAIZIGAACVC5IGIpMGCAC0CgAhlQYAAJYLlQYilgYBAJgKACGXBgAAlwuOBiKYBgEAmAoAIZkGAQCYCgAhmgYBAJgKACGbBgEAmAoAIZ0GAACYC50GI54GAQCYCgAhnwYBAJgKACGgBgEAmAoAIaEGQACZCwAhogYBAJgKACEIowUBAAAAAcQFQAAAAAGEBgEAAAABhQYIAAAAAYYGCAAAAAGHBggAAAABiAYIAAAAAYkGAQAAAAEDAAAAQQAgDwAArREAIBAAAN8SACAWAAAAQQAgCAAA3xIAIB0AAMYPACAeAADHDwAgHwAAyA8AICoAAM0PACAxAADKDwAgNAAAyw8AIDcAAMwPACBBAADODwAgowUBAJYKACGnBUAAmQoAIbgFAQCWCgAhwQUBAJYKACHEBUAAmQoAIdQFIACXCgAh1QVAAJkLACHiBQEAmAoAIegFAADFD_MGIu8GIACXCgAh8QYAAMQP8QYi8wYgAJcKACEUHQAAxg8AIB4AAMcPACAfAADIDwAgKgAAzQ8AIDEAAMoPACA0AADLDwAgNwAAzA8AIEEAAM4PACCjBQEAlgoAIacFQACZCgAhuAUBAJYKACHBBQEAlgoAIcQFQACZCgAh1AUgAJcKACHVBUAAmQsAIeIFAQCYCgAh6AUAAMUP8wYi7wYgAJcKACHxBgAAxA_xBiLzBiAAlwoAIQAAAAAFFQAGFgAHFwAIGAAJGQAKAAAAAAAFFQAGFgAHFwAIGAAJGQAKARwADQoVADAdHw4eIw8fJQwhJxAqsAEYMawBFzSuASI3rwElQbEBGQEcAA0BHAANCxUALyAADSQrETORARY4lAEcOZUBJjqXASc9lgEXPqEBLT-bASxAogEZDBUAKyEAECUAEjKBARozdhY1dyE2PBU3dSU4eB05fCY6gAEnPIUBKAUVABQiLRIjMBIkMREmNRMBJQASAyM2ACQ3ACY4AAUVACQnABEybhozQBY1aiEGFQAgIQAQJwARKQAXLmQVMmUaBxUAHxxCDSFDEChEFipIGC9OGTBXHAIcAA0pShcFFQAbIQAQKFMaKQAXK08NBCcAESwAGS0AFi5UFQEoVQAEFQAeIQAQJFsdMV4XAicAETAAHAIkXwAxYAADKGEAKmIAL2MAATJmAAMnABEubRU0ACIDFQAjHAANKGshAShsAAMycQAzbwA1cAACHAANJwARAiEAECcAEQIhABAnABECJwAROwApAhUAKiSGASgBJIcBAAkyjwEAM4oBADWLAQA2iAEAN4kBADiMAQA5jQEAOo4BADyQAQADFQAuIQAQPp8BLQIhABAlACwBPqABAAkkowEAM6QBADilAQA5pgEAOqgBAD2nAQA-qgEAP6kBAECrAQAGHbIBAB6zAQAqtgEAMbQBADe1AQBBtwEAARwADQEcAA0DFQA0GAA1GQA2AAAAAxUANBgANRkANgIVADpT0wE5AVIAOAFT1AEAAAADFQA-GAA_GQBAAAAAAxUAPhgAPxkAQAFSADgBUgA4AxUARRgARhkARwAAAAMVAEUYAEYZAEcAAAMVAEwYAE0ZAE4AAAADFQBMGABNGQBOARwADQEcAA0DFQBTGABUGQBVAAAAAxUAUxgAVBkAVQEcAA0BHAANAxUAWhgAWxkAXAAAAAMVAFoYAFsZAFwAAAADFQBiGABjGQBkAAAAAxUAYhgAYxkAZAAAAAMVAGoYAGsZAGwAAAADFQBqGABrGQBsARwADQEcAA0DFQBxGAByGQBzAAAAAxUAcRgAchkAcwMnABEumgMVNAAiAycAES6gAxU0ACIFFQB4FgB5FwB6GAB7GQB8AAAAAAAFFQB4FgB5FwB6GAB7GQB8ASKyAxIBIrgDEgMVAIEBGACCARkAgwEAAAADFQCBARgAggEZAIMBASEAEAEhABAFFQCIARYAiQEXAIoBGACLARkAjAEAAAAAAAUVAIgBFgCJARcAigEYAIsBGQCMAQInABEwABwCJwARMAAcAxUAkQEYAJIBGQCTAQAAAAMVAJEBGACSARkAkwEAAAADFQCZARgAmgEZAJsBAAAAAxUAmQEYAJoBGQCbAQEhABABIQAQAxUAoAEYAKEBGQCiAQAAAAMVAKABGAChARkAogECIQAQJQAsAiEAECUALAUVAKcBFgCoARcAqQEYAKoBGQCrAQAAAAAABRUApwEWAKgBFwCpARgAqgEZAKsBAAAABRUAsQEWALIBFwCzARgAtAEZALUBAAAAAAAFFQCxARYAsgEXALMBGAC0ARkAtQEAAAMVALoBGAC7ARkAvAEAAAADFQC6ARgAuwEZALwBAicAETsAKQInABE7ACkFFQDBARYAwgEXAMMBGADEARkAxQEAAAAAAAUVAMEBFgDCARcAwwEYAMQBGQDFAQAAAAMVAMsBGADMARkAzQEAAAADFQDLARgAzAEZAM0BASUAEgElABIFFQDSARYA0wEXANQBGADVARkA1gEAAAAAAAUVANIBFgDTARcA1AEYANUBGQDWAQIhABAnABECIQAQJwARBRUA2wEWANwBFwDdARgA3gEZAN8BAAAAAAAFFQDbARYA3AEXAN0BGADeARkA3wECHAANKcgFFwIcAA0pzgUXAxUA5AEYAOUBGQDmAQAAAAMVAOQBGADlARkA5gEDHOAFDSHhBRAw4gUcAxzoBQ0h6QUQMOoFHAUVAOsBFgDsARcA7QEYAO4BGQDvAQAAAAAABRUA6wEWAOwBFwDtARgA7gEZAO8BBCEAECcAESkAFy78BRUEIQAQJwARKQAXLoIGFQUVAPQBFgD1ARcA9gEYAPcBGQD4AQAAAAAABRUA9AEWAPUBFwD2ARgA9wEZAPgBAyEAECkAFyuUBg0DIQAQKQAXK5oGDQUVAP0BFgD-ARcA_wEYAIACGQCBAgAAAAAABRUA_QEWAP4BFwD_ARgAgAIZAIECBCcAESwAGS0AFi6sBhUEJwARLAAZLQAWLrIGFQUVAIYCFgCHAhcAiAIYAIkCGQCKAgAAAAAABRUAhgIWAIcCFwCIAhgAiQIZAIoCAAAAAxUAkAIYAJECGQCSAgAAAAMVAJACGACRAhkAkgIAAAADFQCYAhgAmQIZAJoCAAAAAxUAmAIYAJkCGQCaAgIhABAnABECIQAQJwARBRUAnwIWAKACFwChAhgAogIZAKMCAAAAAAAFFQCfAhYAoAIXAKECGACiAhkAowICIQAQJQASAiEAECUAEgUVAKgCFgCpAhcAqgIYAKsCGQCsAgAAAAAABRUAqAIWAKkCFwCqAhgAqwIZAKwCAScAEQEnABEFFQCxAhYAsgIXALMCGAC0AhkAtQIAAAAAAAUVALECFgCyAhcAswIYALQCGQC1AgAAAxUAugIYALsCGQC8AgAAAAMVALoCGAC7AhkAvAICHAANJwARAhwADScAEQUVAMECFgDCAhcAwwIYAMQCGQDFAgAAAAAABRUAwQIWAMICFwDDAhgAxAIZAMUCAAAABRUAywIWAMwCFwDNAhgAzgIZAM8CAAAAAAAFFQDLAhYAzAIXAM0CGADOAhkAzwIBIAANASAADQMVANQCGADVAhkA1gIAAAADFQDUAhgA1QIZANYCAAAAAxUA3AIYAN0CGQDeAgAAAAMVANwCGADdAhkA3gIAAAADFQDkAhgA5QIZAOYCAAAAAxUA5AIYAOUCGQDmAgECAQIDAQUGAQYHAQcIAQkKAQoMAgsNAwwPAQ0RAg4SBBETARIUARMVAhoYBRsZC0IbDEO4AQxEugEMRbsBDEa8AQxHvgEMSMABAknBATFKwwEMS8UBAkzGATJNxwEMTsgBDE_JAQJQzAEzUc0BN1TPAThV1QE4VtgBOFfZAThY2gE4WdwBOFreAQJb3wE7XOEBOF3jAQJe5AE8X-UBOGDmAThh5wECYuoBPWPrAUFk7AE5Ze0BOWbuATln7wE5aPABOWnyATlq9AECa_UBQmz3ATlt-QECbvoBQ2_7ATlw_AE5cf0BAnKAAkRzgQJIdIMCDXWEAg12hgINd4cCDXiIAg15igINeowCAnuNAkl8jwINfZECAn6SAkp_kwINgAGUAg2BAZUCAoIBmAJLgwGZAk-EAZoCDoUBmwIOhgGcAg6HAZ0CDogBngIOiQGgAg6KAaICAosBowJQjAGlAg6NAacCAo4BqAJRjwGpAg6QAaoCDpEBqwICkgGuAlKTAa8CVpQBsAIPlQGxAg-WAbICD5cBswIPmAG0Ag-ZAbYCD5oBuAICmwG5AlecAbsCD50BvQICngG-AlifAb8CD6ABwAIPoQHBAgKiAcQCWaMBxQJdpAHHAl6lAcgCXqYBywJepwHMAl6oAc0CXqkBzwJeqgHRAgKrAdICX6wB1AJerQHWAgKuAdcCYK8B2AJesAHZAl6xAdoCArIB3QJhswHeAmW0AeACZrUB4QJmtgHkAma3AeUCZrgB5gJmuQHoAma6AeoCArsB6wJnvAHtAma9Ae8CAr4B8AJovwHxAmbAAfICZsEB8wICwgH2AmnDAfcCbcQB-QIixQH6AiLGAfwCIscB_QIiyAH-AiLJAYADIsoBggMCywGDA27MAYUDIs0BhwMCzgGIA2_PAYkDItABigMi0QGLAwLSAY4DcNMBjwN01AGQAyHVAZEDIdYBkgMh1wGTAyHYAZQDIdkBlgMh2gGYAwLbAZkDddwBnAMh3QGeAwLeAZ8Ddt8BoQMh4AGiAyHhAaMDAuIBpgN34wGnA33kAagDEuUBqQMS5gGqAxLnAasDEugBrAMS6QGuAxLqAbADAusBsQN-7AG0AxLtAbYDAu4BtwN_7wG5AxLwAboDEvEBuwMC8gG-A4AB8wG_A4QB9AHAAxz1AcEDHPYBwgMc9wHDAxz4AcQDHPkBxgMc-gHIAwL7AckDhQH8AcsDHP0BzQMC_gHOA4YB_wHPAxyAAtADHIEC0QMCggLUA4cBgwLVA40BhALWAx2FAtcDHYYC2AMdhwLZAx2IAtoDHYkC3AMdigLeAwKLAt8DjgGMAuEDHY0C4wMCjgLkA48BjwLlAx2QAuYDHZEC5wMCkgLqA5ABkwLrA5QBlALtA5UBlQLuA5UBlgLxA5UBlwLyA5UBmALzA5UBmQL1A5UBmgL3AwKbAvgDlgGcAvoDlQGdAvwDAp4C_QOXAZ8C_gOVAaAC_wOVAaECgAQCogKDBJgBowKEBJwBpAKFBCylAoYELKYChwQspwKIBCyoAokELKkCiwQsqgKNBAKrAo4EnQGsApAELK0CkgQCrgKTBJ4BrwKUBCywApUELLEClgQCsgKZBJ8BswKaBKMBtAKbBC21ApwELbYCnQQttwKeBC24Ap8ELbkCoQQtugKjBAK7AqQEpAG8AqYELb0CqAQCvgKpBKUBvwKqBC3AAqsELcECrAQCwgKvBKYBwwKwBKwBxAKyBK0BxQKzBK0BxgK2BK0BxwK3BK0ByAK4BK0ByQK6BK0BygK8BALLAr0ErgHMAr8ErQHNAsEEAs4CwgSvAc8CwwStAdACxAStAdECxQQC0gLIBLAB0wLJBLYB1ALLBCnVAswEKdYCzwQp1wLQBCnYAtEEKdkC0wQp2gLVBALbAtYEtwHcAtgEKd0C2gQC3gLbBLgB3wLcBCngAt0EKeEC3gQC4gLhBLkB4wLiBL0B5ALjBCjlAuQEKOYC5QQo5wLmBCjoAucEKOkC6QQo6gLrBALrAuwEvgHsAu4EKO0C8AQC7gLxBL8B7wLyBCjwAvMEKPEC9AQC8gL3BMAB8wL4BMYB9AL6BMcB9QL7BMcB9gL-BMcB9wL_BMcB-AKABccB-QKCBccB-gKEBQL7AoUFyAH8AocFxwH9AokFAv4CigXJAf8CiwXHAYADjAXHAYEDjQUCggOQBcoBgwORBc4BhAOSBROFA5MFE4YDlAUThwOVBROIA5YFE4kDmAUTigOaBQKLA5sFzwGMA50FE40DnwUCjgOgBdABjwOhBROQA6IFE5EDowUCkgOmBdEBkwOnBdcBlAOoBSeVA6kFJ5YDqgUnlwOrBSeYA6wFJ5kDrgUnmgOwBQKbA7EF2AGcA7MFJ50DtQUCngO2BdkBnwO3BSegA7gFJ6EDuQUCogO8BdoBowO9BeABpAO-BRilA78FGKYDwAUYpwPBBRioA8IFGKkDxAUYqgPGBQKrA8cF4QGsA8oFGK0DzAUCrgPNBeIBrwPPBRiwA9AFGLED0QUCsgPUBeMBswPVBecBtAPWBRe1A9cFF7YD2AUXtwPZBRe4A9oFF7kD3AUXugPeBQK7A98F6AG8A-QFF70D5gUCvgPnBekBvwPrBRfAA-wFF8ED7QUCwgPwBeoBwwPxBfABxAPyBRbFA_MFFsYD9AUWxwP1BRbIA_YFFskD-AUWygP6BQLLA_sF8QHMA_4FFs0DgAYCzgOBBvIBzwODBhbQA4QGFtEDhQYC0gOIBvMB0wOJBvkB1AOKBhnVA4sGGdYDjAYZ1wONBhnYA44GGdkDkAYZ2gOSBgLbA5MG-gHcA5YGGd0DmAYC3gOZBvsB3wObBhngA5wGGeEDnQYC4gOgBvwB4wOhBoIC5AOiBhrlA6MGGuYDpAYa5wOlBhroA6YGGukDqAYa6gOqBgLrA6sGgwLsA64GGu0DsAYC7gOxBoQC7wOzBhrwA7QGGvEDtQYC8gO4BoUC8wO5BosC9AO7BowC9QO8BowC9gO_BowC9wPABowC-APBBowC-QPDBowC-gPFBgL7A8YGjQL8A8gGjAL9A8oGAv4DywaOAv8DzAaMAoAEzQaMAoEEzgYCggTRBo8CgwTSBpMChATUBpQChQTVBpQChgTYBpQChwTZBpQCiATaBpQCiQTcBpQCigTeBgKLBN8GlQKMBOEGlAKNBOMGAo4E5AaWAo8E5QaUApAE5gaUApEE5wYCkgTqBpcCkwTrBpsClATsBiaVBO0GJpYE7gYmlwTvBiaYBPAGJpkE8gYmmgT0BgKbBPUGnAKcBPcGJp0E-QYCngT6Bp0CnwT7BiagBPwGJqEE_QYCogSAB54CowSBB6QCpASCBxGlBIMHEaYEhAcRpwSFBxGoBIYHEakEiAcRqgSKBwKrBIsHpQKsBI0HEa0EjwcCrgSQB6YCrwSRBxGwBJIHEbEEkwcCsgSWB6cCswSXB60CtASYBxW1BJkHFbYEmgcVtwSbBxW4BJwHFbkEngcVugSgBwK7BKEHrgK8BKMHFb0EpQcCvgSmB68CvwSnBxXABKgHFcEEqQcCwgSsB7ACwwStB7YCxASvB7cCxQSwB7cCxgSzB7cCxwS0B7cCyAS1B7cCyQS3B7cCygS5BwLLBLoHuALMBLsHtwLNBLwHAs4Evwe5As8EwAe9AtAEwQcl0QTCByXSBMMHJdMExAcl1ATFByXVBMcHJdYEyQcC1wTKB74C2ATMByXZBM4HAtoEzwe_AtsE0Acl3ATRByXdBNIHAt4E1QfAAt8E1gfGAuAE2AfHAuEE2QfHAuIE3AfHAuME3QfHAuQE3gfHAuUE4AfHAuYE4gcC5wTjB8gC6ATlB8cC6QTnBwLqBOgHyQLrBOkHxwLsBOoHxwLtBOsHAu4E7gfKAu8E7wfQAvAE8QcQ8QTyBxDyBPQHEPME9QcQ9AT2BxD1BPgHEPYE-gcC9wT7B9EC-AT9BxD5BP8HAvoEgAjSAvsEgQgQ_ASCCBD9BIMIAv4EhgjTAv8EhwjXAoAFiQjYAoEFigjYAoIFjQjYAoMFjgjYAoQFjwjYAoUFkQjYAoYFkwgChwWUCNkCiAWWCNgCiQWYCAKKBZkI2gKLBZoI2AKMBZsI2AKNBZwIAo4FnwjbAo8FoAjfApAFogjgApEFowjgApIFpgjgApMFpwjgApQFqAjgApUFqgjgApYFrAgClwWtCOECmAWvCOACmQWxCAKaBbII4gKbBbMI4AKcBbQI4AKdBbUIAp4FuAjjAp8FuQjnAg"
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
  BlogScalarFieldEnum: () => BlogScalarFieldEnum,
  CartItemScalarFieldEnum: () => CartItemScalarFieldEnum,
  CartScalarFieldEnum: () => CartScalarFieldEnum,
  CategoryScalarFieldEnum: () => CategoryScalarFieldEnum,
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
  HeroSliderScalarFieldEnum: () => HeroSliderScalarFieldEnum,
  HomeCategorySectionScalarFieldEnum: () => HomeCategorySectionScalarFieldEnum,
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
  SessionScalarFieldEnum: () => SessionScalarFieldEnum,
  ShippingSettingScalarFieldEnum: () => ShippingSettingScalarFieldEnum,
  ShopScalarFieldEnum: () => ShopScalarFieldEnum,
  SiteSettingScalarFieldEnum: () => SiteSettingScalarFieldEnum,
  SmsSettingScalarFieldEnum: () => SmsSettingScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
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
  Blog: "Blog",
  Cart: "Cart",
  CartItem: "CartItem",
  Category: "Category",
  Coupon: "Coupon",
  CouponProduct: "CouponProduct",
  CourierSetting: "CourierSetting",
  ExpenseCategory: "ExpenseCategory",
  Expense: "Expense",
  Faq: "Faq",
  FlashSale: "FlashSale",
  FlashSaleProduct: "FlashSaleProduct",
  HeroSlider: "HeroSlider",
  HomeCategorySection: "HomeCategorySection",
  LandingPage: "LandingPage",
  Notification: "Notification",
  Order: "Order",
  OrderItem: "OrderItem",
  OrderReturn: "OrderReturn",
  OrderReturnItem: "OrderReturnItem",
  PageContent: "PageContent",
  PaymentSetting: "PaymentSetting",
  PosCartItem: "PosCartItem",
  Product: "Product",
  ProductVariant: "ProductVariant",
  DocumentEmbedding: "DocumentEmbedding",
  Review: "Review",
  ShippingSetting: "ShippingSetting",
  Shop: "Shop",
  SiteSetting: "SiteSetting",
  SmsSetting: "SmsSetting"
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
  updatedAt: "updatedAt"
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
var HeroSliderScalarFieldEnum = {
  id: "id",
  image: "image",
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
  isFeatured: "isFeatured",
  shopId: "shopId",
  categoryId: "categoryId",
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
  updatedAt: "updatedAt"
};
var SmsSettingScalarFieldEnum = {
  id: "id",
  enabled: "enabled",
  apiKey: "apiKey",
  senderId: "senderId",
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
  STEADFAST: "STEADFAST"
};
var HomeCategoryDisplayType = {
  BEST_SELLING: "BEST_SELLING",
  LATEST: "LATEST"
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
  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true
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
    envVars.FRONTEND_URL
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
import { Router as Router31 } from "express";

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
    }
  });
  if (!isUserExists) {
    throw new AppError_default(status3.NOT_FOUND, "User not found");
  }
  return isUserExists;
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
          user: true
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
          email: user.email
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
        where: { id: verifiedToken.data.userId }
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
        email: userExists.email
      };
    }
    if (authRoles.length > 0 && !authRoles.includes(req.user.role)) {
      throw new AppError_default(
        status5.FORBIDDEN,
        "Forbidden access! You do not have permission to access this resource."
      );
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
    const folder = extension === "pdf" ? "pdfs" : "images";
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
      next(parsedResult.error);
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
var CategoryService = {
  createCategory,
  getAllCategories,
  getAllSubcategories,
  getCategoryById,
  updateCategory,
  deleteCategory
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
  const { minPrice, maxPrice, categoryId, sortBy, ...remainingQuery } = queryParams;
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
    searchableFields: ["name", "description", "sku"],
    filterableFields: ["categoryId", "shopId", "status", "sellPrice"]
  }).search().filter().sort().paginate().include({
    category: true,
    shop: true,
    variants: true
  });
  const result = await productQuery.execute();
  return result;
};
var getProductById = async (id) => {
  const product = await prisma2.product.findUnique({
    where: { id },
    include: {
      category: true,
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
var ProductService = {
  createProduct,
  generateSku,
  getAllProducts,
  getProductById,
  getProductBySlug,
  updateProduct,
  deleteProduct,
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
var createProductZodSchema = z3.object({
  name: z3.string().min(1, "Product name is required"),
  description: z3.string().min(1, "Description is required"),
  shortDescription: z3.string().min(1, "Short description is required"),
  sku: z3.string().trim().min(1).optional().nullable(),
  stock: z3.number().int().nonnegative("Stock cannot be negative"),
  purchasePrice: z3.number().positive("Purchase price must be positive"),
  regularPrice: z3.number().positive("Regular price must be positive"),
  sellPrice: z3.number().positive("Sell price must be positive"),
  categoryId: z3.string().uuid("Invalid category ID"),
  tags: z3.array(z3.string()).optional(),
  type: z3.enum(["SIMPLE", "VARIABLE"]).optional().default("SIMPLE"),
  attributes: z3.any().optional(),
  variants: z3.array(variantSchema).optional(),
  vatType: z3.enum(["INCLUDED", "EXCLUDED"]).optional().default("INCLUDED"),
  vatPercentage: z3.coerce.number().nonnegative().optional().default(0),
  freeShipping: z3.coerce.boolean().optional().default(false),
  isFeatured: z3.coerce.boolean().optional().default(false)
});
var updateProductZodSchema = z3.object({
  name: z3.string().optional(),
  description: z3.string().optional(),
  shortDescription: z3.string().optional(),
  sku: z3.string().trim().min(1).optional().nullable(),
  stock: z3.number().int().nonnegative().optional(),
  purchasePrice: z3.number().positive().optional(),
  regularPrice: z3.number().positive().optional(),
  sellPrice: z3.number().positive().optional(),
  categoryId: z3.string().uuid().optional(),
  status: z3.enum(["ACTIVE", "DRAFT", "OUT_OF_STOCK", "DELETED"]).optional(),
  tags: z3.array(z3.string()).optional(),
  type: z3.enum(["SIMPLE", "VARIABLE"]).optional(),
  attributes: z3.any().optional(),
  variants: z3.array(variantSchema).optional(),
  vatType: z3.enum(["INCLUDED", "EXCLUDED"]).optional(),
  vatPercentage: z3.coerce.number().nonnegative().optional(),
  freeShipping: z3.coerce.boolean().optional(),
  isFeatured: z3.coerce.boolean().optional()
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
import status18 from "http-status";

// src/app/module/order/order.service.ts
import status17 from "http-status";

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
  for (const admin of admins) {
    recipients.set(admin.id, NotificationType.ORDER_PLACED);
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
import status15 from "http-status";

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
var CourierSettingService = {
  getCourierSettings,
  updatePathaoSettings,
  updateSteadfastSettings
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
      status15.BAD_GATEWAY,
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
    throw new AppError_default(status15.BAD_REQUEST, "Pathao courier is not enabled in settings");
  }
  if (!settings.pathaoBaseUrl || !settings.pathaoClientId || !settings.pathaoClientSecret || !settings.pathaoUsername || !settings.pathaoPassword || !settings.pathaoStoreId) {
    throw new AppError_default(status15.BAD_REQUEST, "Pathao settings are incomplete");
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
      status15.BAD_GATEWAY,
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
import status16 from "http-status";
var STEADFAST_BASE_URL = "https://portal.packzy.com/api/v1";
var createOrder2 = async (order) => {
  const settings = await CourierSettingService.getCourierSettings();
  if (!settings.steadfastEnabled) {
    throw new AppError_default(status16.BAD_REQUEST, "Steadfast courier is not enabled in settings");
  }
  if (!settings.steadfastApiKey || !settings.steadfastSecretKey) {
    throw new AppError_default(status16.BAD_REQUEST, "Steadfast settings are incomplete");
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
      status16.BAD_GATEWAY,
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
var normalizePhone = (phone) => {
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
      number: normalizePhone(phone),
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
var createOrder3 = async (userId, payload) => {
  let orderItemsToProcess = [];
  let isFromCart = false;
  if (payload.items && payload.items.length > 0) {
    for (const item of payload.items) {
      const product = await prisma2.product.findUnique({
        where: { id: item.productId },
        include: { variants: true }
      });
      if (!product) throw new AppError_default(status17.NOT_FOUND, `Product not found: ${item.productId}`);
      let sellPrice = product.sellPrice;
      let variant = null;
      if (product.type === "VARIABLE" && item.productVariantId) {
        variant = product.variants.find((v) => v.id === item.productVariantId);
        if (!variant) throw new AppError_default(status17.NOT_FOUND, `Product variant not found: ${item.productVariantId}`);
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
      throw new AppError_default(status17.BAD_REQUEST, "No items provided for order");
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
      throw new AppError_default(status17.BAD_REQUEST, "Your cart is empty");
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
            status17.BAD_REQUEST,
            `Insufficient stock for variation of product: ${item.product.name}`
          );
        }
      } else {
        if (item.product.stock < item.quantity) {
          throw new AppError_default(
            status17.BAD_REQUEST,
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
var getAllOrders = async (queryParams) => {
  const orderQuery = new QueryBuilder(prisma2.order, queryParams, {
    searchableFields: [
      "orderNumber",
      "address",
      "district",
      "fullName",
      "phone",
      "shop.name",
      "items.shop.name"
    ],
    filterableFields: ["orderStatus", "paymentStatus", "userId", "orderType"]
  }).search().filter().sort().paginate().include({
    items: {
      include: {
        product: true,
        productVariant: true,
        shop: true
      }
    },
    user: {
      select: { id: true, name: true, email: true }
    },
    shop: {
      select: { id: true, name: true }
    }
  });
  return await orderQuery.execute();
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
    throw new AppError_default(status17.NOT_FOUND, "Order not found");
  }
  if (role !== "ADMIN" && role !== "SUPER_ADMIN" && order.userId !== userId) {
    throw new AppError_default(status17.FORBIDDEN, "Access denied");
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
    throw new AppError_default(status17.NOT_FOUND, "Order not found");
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
      status17.NOT_FOUND,
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
  if (!existingOrder) throw new AppError_default(status17.NOT_FOUND, "Order not found");
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
  if (!order) throw new AppError_default(status17.NOT_FOUND, "Order not found");
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
  if (!existingOrder) throw new AppError_default(status17.NOT_FOUND, "Order not found");
  const updatedOrder = await prisma2.order.update({
    where: { id },
    data: { paymentStatus }
  });
  await NotificationService.notifyPaymentStatusChanged(updatedOrder, existingOrder.paymentStatus);
  return updatedOrder;
};
var assignCourier = async (id, provider) => {
  const order = await prisma2.order.findUnique({
    where: { id },
    include: { items: true }
  });
  if (!order) throw new AppError_default(status17.NOT_FOUND, "Order not found");
  if (!order.fullName || !order.phone || !order.address || !order.district) {
    throw new AppError_default(status17.BAD_REQUEST, "Order is missing recipient name/phone/address/district");
  }
  if (order.courierProvider) {
    throw new AppError_default(
      status17.BAD_REQUEST,
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
  const result = provider === CourierProvider.PATHAO ? await PathaoCourierService.createOrder(orderInput, itemQuantity) : await SteadfastCourierService.createOrder(orderInput);
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
    throw new AppError_default(status17.NOT_FOUND, "Order item not found");
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
    throw new AppError_default(status17.NOT_FOUND, "Order item not found");
  }
  const isContentEdit = payload.productId !== void 0 || payload.productVariantId !== void 0 || payload.quantity !== void 0;
  if (!isContentEdit) {
    return updateOrderItemStatus(itemId, payload.status);
  }
  if (orderItem.order.orderType !== OrderType.POS) {
    if (orderItem.status !== OrderStatus.PENDING && orderItem.status !== OrderStatus.PROCESSING) {
      throw new AppError_default(
        status17.BAD_REQUEST,
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
  if (!product) throw new AppError_default(status17.NOT_FOUND, `Product not found: ${newProductId}`);
  let variant = null;
  if (newProductVariantId) {
    variant = product.variants.find((v) => v.id === newProductVariantId);
    if (!variant) {
      throw new AppError_default(status17.NOT_FOUND, `Product variant not found: ${newProductVariantId}`);
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
          status17.BAD_REQUEST,
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
        throw new AppError_default(status17.BAD_REQUEST, `Insufficient stock for product: ${product.name}`);
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
  createOrder: createOrder3,
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
var createOrder4 = catchAsync(async (req, res) => {
  const result = await OrderService.createOrder(req.user.userId, req.body);
  sendResponse(res, {
    httpStatusCode: status18.CREATED,
    success: true,
    message: "Order placed successfully",
    data: result
  });
});
var getAllOrders2 = catchAsync(async (req, res) => {
  const { data, meta } = await OrderService.getAllOrders(req.query);
  sendResponse(res, {
    httpStatusCode: status18.OK,
    success: true,
    message: "Orders fetched successfully",
    data,
    meta
  });
});
var getMyOrders = catchAsync(async (req, res) => {
  const { data, meta } = await OrderService.getAllOrders({
    ...req.query,
    userId: req.user.userId
  });
  sendResponse(res, {
    httpStatusCode: status18.OK,
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
    httpStatusCode: status18.OK,
    success: true,
    message: "Order details fetched successfully",
    data: result
  });
});
var getPublicOrderById2 = catchAsync(async (req, res) => {
  const result = await OrderService.getPublicOrderById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status18.OK,
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
    httpStatusCode: status18.OK,
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
    httpStatusCode: status18.OK,
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
    httpStatusCode: status18.OK,
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
    httpStatusCode: status18.OK,
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
    httpStatusCode: status18.OK,
    success: true,
    message: "Payment status updated successfully",
    data: result
  });
});
var assignCourier2 = catchAsync(async (req, res) => {
  const result = await OrderService.assignCourier(
    req.params.id,
    req.body.provider
  );
  sendResponse(res, {
    httpStatusCode: status18.OK,
    success: true,
    message: "Order assigned to courier successfully",
    data: result
  });
});
var deleteOrder2 = catchAsync(async (req, res) => {
  const result = await OrderService.deleteOrder(req.params.id);
  sendResponse(res, {
    httpStatusCode: status18.OK,
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
    httpStatusCode: status18.OK,
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
    httpStatusCode: status18.OK,
    success: true,
    message: "Order item updated successfully",
    data: result
  });
});
var OrderController = {
  createOrder: createOrder4,
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
import z5 from "zod";
var createOrderZodSchema = z5.object({
  fullName: z5.string().min(1, "Full name is required"),
  phone: z5.string().min(1, "Phone number is required").regex(/^01\d{9}$/, "Enter a valid 11-digit Bangladeshi mobile number starting with 01"),
  address: z5.string().min(1, "Address is required"),
  district: z5.string().min(1, "District is required"),
  notes: z5.string().optional(),
  items: z5.array(
    z5.object({
      productId: z5.string().uuid(),
      productVariantId: z5.string().uuid().optional().nullable(),
      quantity: z5.number().int().positive()
    })
  ).optional(),
  couponId: z5.string().uuid().optional().nullable(),
  discountAmount: z5.number().optional(),
  shippingFee: z5.number().optional(),
  checkoutSessionToken: z5.string().optional(),
  paymentMethod: z5.enum(["COD", "SSLCOMMERZ"]).optional()
});
var updateOrderStatusZodSchema = z5.object({
  status: z5.enum(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"])
});
var updateOrderDiscountZodSchema = z5.object({
  discountAmount: z5.number().min(0, "Discount cannot be negative")
});
var updatePaymentStatusZodSchema = z5.object({
  paymentStatus: z5.enum(["PENDING", "PAID", "FAILED", "REFUNDED"])
});
var assignCourierZodSchema = z5.object({
  provider: z5.enum(["PATHAO", "STEADFAST"])
});
var trackOrderZodSchema = z5.object({
  orderNumber: z5.string().min(1, "Order number is required"),
  phone: z5.string().min(1, "Phone number is required")
});
var updateOrderItemZodSchema = z5.object({
  status: z5.enum(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"]).optional(),
  productId: z5.string().min(1).optional(),
  productVariantId: z5.string().nullable().optional(),
  quantity: z5.number().int().positive().optional()
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
import status20 from "http-status";

// src/app/module/order-return/orderReturn.service.ts
import status19 from "http-status";
var processOrderReturn = async (payload, adminId) => {
  const shopId = await ShopService.getDefaultShopId();
  const order = await prisma2.order.findUnique({
    where: { id: payload.orderId },
    include: { items: true }
  });
  if (!order) throw new AppError_default(status19.NOT_FOUND, "Order not found");
  const requestedMap = new Map(payload.items.map((i) => [i.orderItemId, i.quantity]));
  const targetItems = order.items.filter((item) => requestedMap.has(item.id));
  if (targetItems.length !== requestedMap.size) {
    throw new AppError_default(status19.BAD_REQUEST, "One or more order items were not found on this order");
  }
  for (const item of targetItems) {
    const requestedQty = requestedMap.get(item.id);
    const remaining = item.quantity - item.returnedQuantity;
    if (requestedQty > remaining) {
      throw new AppError_default(
        status19.BAD_REQUEST,
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
    httpStatusCode: status20.CREATED,
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
    httpStatusCode: status20.OK,
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
    httpStatusCode: status20.OK,
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
import z6 from "zod";
var processOrderReturnZodSchema = z6.object({
  orderId: z6.string().uuid(),
  items: z6.array(
    z6.object({
      orderItemId: z6.string().uuid(),
      quantity: z6.number().int().positive()
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
import status22 from "http-status";

// src/app/module/review/review.service.ts
import status21 from "http-status";
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
      status21.FORBIDDEN,
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
    throw new AppError_default(status21.BAD_REQUEST, "You have already reviewed this product");
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
    throw new AppError_default(status21.NOT_FOUND, "Review not found");
  }
  if (role !== "ADMIN" && role !== "SUPER_ADMIN" && review.userId !== userId) {
    throw new AppError_default(status21.FORBIDDEN, "Access denied");
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
    httpStatusCode: status22.CREATED,
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
    httpStatusCode: status22.OK,
    success: true,
    message: "Reviews fetched successfully",
    data: result
  });
});
var getMyReviews2 = catchAsync(async (req, res) => {
  const result = await ReviewService.getMyReviews(req.user.userId);
  sendResponse(res, {
    httpStatusCode: status22.OK,
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
    httpStatusCode: status22.OK,
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
import z7 from "zod";
var createReviewZodSchema = z7.object({
  productId: z7.string().uuid("Invalid product ID"),
  rating: z7.number().int().min(1).max(5, "Rating must be between 1 and 5"),
  comment: z7.string().min(1, "Comment is required")
});
var updateReviewZodSchema = z7.object({
  rating: z7.number().int().min(1).max(5).optional(),
  comment: z7.string().min(1).optional()
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
import status23 from "http-status";

// src/app/module/analytics/analytics.service.ts
var getAdminAnalytics = async () => {
  const [totalUsers, totalProducts, totalOrders, orderStats] = await Promise.all([
    prisma2.user.count({ where: { role: Role.USER } }),
    prisma2.product.count(),
    prisma2.order.count(),
    prisma2.order.aggregate({
      _sum: {
        totalAmount: true
      }
    })
  ]);
  const sixMonthsAgo = /* @__PURE__ */ new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const monthlyRevenue = await prisma2.order.findMany({
    where: {
      createdAt: {
        gte: sixMonthsAgo
      }
    },
    select: {
      totalAmount: true,
      createdAt: true
    }
  });
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
    monthlyRevenue,
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
    httpStatusCode: status23.OK,
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
    httpStatusCode: status23.OK,
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
import status24 from "http-status";

// src/app/module/rag/embedding.service.ts
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
  async generateEmbedding(text) {
    try {
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
      if (!response.ok) {
        throw new Error(`OpenRouter API Error: ${response.status}`);
      }
      const data = await response.json();
      if (!data.data || data.data.length == 0) {
        throw new Error("No embedding data returned");
      }
      return data.data[0].embedding;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};

// src/app/module/rag/indexing.service.ts
var toVectorLiteral = (vector) => `[${vector.join(",")}]`;
var IndexingService = class {
  embeddingService;
  constructor() {
    this.embeddingService = new EmbeddingService();
  }
  async indexDocument(chunkKey, sourceType, sourceId, content, sourceLabel, metadata) {
    try {
      const embedding = await this.embeddingService.generateEmbedding(content);
      const vectorLiteral = toVectorLiteral(embedding);
      await prisma2.$executeRaw(prismaNamespace_exports.sql`
        INSERT INTO "document_embeddings"
        (
          "id",
          "chunkKey",
          "sourceType",
          "sourceId",
          "sourceLabel",
          "content",
          "metadata",
          "embedding",
          "updatedAt"
        )
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
    } catch (error) {
      console.log("Error in indexDocument:", error);
      throw error;
    }
  }
  async indexABTrimsData() {
    try {
      console.log("Fetching AB Trims data for indexing....");
      const products = await prisma2.product.findMany({
        include: {
          category: true,
          shop: true,
          reviews: true
        }
      });
      for (const product of products) {
        const reviewsText = product.reviews.length > 0 ? product.reviews.map((r) => `- Rating: ${r.rating}/5. Comment: ${r.comment}`).join("\n") : "No reviews yet.";
        const content = `Product Name: ${product.name}
            Description: ${product.description}
            Category: ${product.category.name}
            Shop: ${product.shop.name}
            Price: $${product.sellPrice} (Regular: $${product.regularPrice})
            Stock Status: ${product.stock > 0 ? "In Stock" : "Out of Stock"}
            Tags: ${product.tags.join(", ")}
            User Reviews:
            ${reviewsText}`;
        const metadata = {
          productId: product.id,
          name: product.name,
          shopName: product.shop.name,
          categoryName: product.category.name
        };
        await this.indexDocument(
          `product-${product.id}`,
          "PRODUCT",
          product.id,
          content,
          product.name,
          metadata
        );
      }
      const shops = await prisma2.shop.findMany();
      for (const shop of shops) {
        const content = `Shop Name: ${shop.name}
            Description: ${shop.description}
            Created At: ${shop.createdAt}`;
        await this.indexDocument(
          `shop-${shop.id}`,
          "SHOP",
          shop.id,
          content,
          shop.name,
          { shopId: shop.id, name: shop.name }
        );
      }
      return {
        success: true,
        message: `Indexed ${products.length} products and ${shops.length} shops.`
      };
    } catch (error) {
      console.log("Error in indexABTrimsData:", error);
      throw error;
    }
  }
};

// src/app/module/rag/llm.service.ts
var LLMService = class {
  apiKey;
  apiUrl = "https://openrouter.ai/api/v1";
  model;
  constructor() {
    this.apiKey = envVars.RAG.OPENROUTER_API_KEY || "";
    this.model = envVars.RAG.OPENROUTER_LLM_MODEL || "google/gemini-2.0-flash-001";
    if (!this.apiKey) {
      throw new Error("OpenRouter API key is missing...");
    }
  }
  async generateResponse(prompt, context = [], asJson = false) {
    try {
      let fullPrompt = context.length > 0 ? `Context information:
${context.join("\n\n")}

Question: ${prompt}

Answer based on the context above.` : prompt;
      if (asJson) {
        fullPrompt += `

Return ONLY a valid JSON object. Do not include any markdown formatting like \`\`\`json.`;
      }
      const systemMessage = asJson ? "You are a helpful assistant for AB Trims, an e-commerce platform. Answer questions based on the provided context. You MUST respond with ONLY valid JSON format. Do not include markdown tags." : "You are a helpful assistant for AB Trims, an e-commerce platform. Answer questions based on the provided context. If the context does not contain the answer, say you don't have enough information.";
      const bodyPayload = {
        model: this.model,
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
        max_tokens: 1500
      };
      const response = await fetch(`${this.apiUrl}/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://abtrims.com",
          "X-Title": "AB Trims RAG System"
        },
        body: JSON.stringify(bodyPayload)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `OpenRouter API error: ${response.status} - ${errorData.error?.message || "unknown error"}`
        );
      }
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error generating LLM response:", error);
      throw error;
    }
  }
};

// src/app/module/rag/rag.service.ts
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
    try {
      const queryEmbedding = await this.embeddingService.generateEmbedding(query);
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
  async generateAnswer(query, limit = 5, sourceType, asJson = false) {
    try {
      const relevantDocs = await this.retrieveRelevantDocuments(
        query,
        limit,
        sourceType
      );
      const context = relevantDocs.filter((doc) => doc.content).map((doc) => doc.content);
      let answer = await this.llmService.generateResponse(
        query,
        context,
        asJson
      );
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
    httpStatusCode: status24.OK,
    message: "RAG stats retrieved successfully",
    data: result
  });
});
var ingestData = catchAsync(async (req, res) => {
  const result = await ragService.ingestData();
  sendResponse(res, {
    success: true,
    httpStatusCode: status24.OK,
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
    limit ?? 5,
    sourceType,
    false
  );
  sendResponse(res, {
    success: true,
    httpStatusCode: status24.OK,
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
router10.post("/ingest", RagController.ingestData);
router10.post("/query", RagController.queryRag);
var RagRoutes = router10;

// src/app/module/admin/admin.route.ts
import { Router as Router11 } from "express";

// src/app/module/admin/admin.controller.ts
import status26 from "http-status";

// src/app/module/admin/admin.service.ts
import status25 from "http-status";
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
  const admin = await prisma2.admin.findUnique({
    where: {
      id
    },
    include: {
      user: true
    }
  });
  return admin;
};
var updateAdmin = async (id, payload) => {
  const isAdminExist = await prisma2.admin.findUnique({
    where: {
      id
    }
  });
  if (!isAdminExist) {
    throw new AppError_default(status25.NOT_FOUND, "Admin Or Super Admin not found");
  }
  const { admin } = payload;
  const updatedAdmin = await prisma2.admin.update({
    where: {
      id
    },
    data: {
      ...admin
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
    throw new AppError_default(status25.NOT_FOUND, "Admin Or Super Admin not found");
  }
  if (isAdminExist.id === user.userId) {
    throw new AppError_default(status25.BAD_REQUEST, "You cannot delete yourself");
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
    const admin = await getAdminById(id);
    return admin;
  });
  return result;
};
var deleteUser = async (id, adminUser) => {
  const userToDelete = await prisma2.user.findUnique({
    where: { id }
  });
  if (!userToDelete) {
    throw new AppError_default(status25.NOT_FOUND, "User not found");
  }
  if (userToDelete.id === adminUser.userId) {
    throw new AppError_default(status25.BAD_REQUEST, "You cannot delete yourself");
  }
  const requester = await prisma2.user.findUnique({
    where: { id: adminUser.userId }
  });
  if (requester?.role === Role.ADMIN && (userToDelete.role === Role.ADMIN || userToDelete.role === Role.SUPER_ADMIN)) {
    throw new AppError_default(
      status25.FORBIDDEN,
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
    throw new AppError_default(status25.BAD_REQUEST, "You cannot change your own status");
  }
  if (isAdminExists.user.role === Role.ADMIN && userToChangeStatus.role === Role.SUPER_ADMIN) {
    throw new AppError_default(
      status25.BAD_REQUEST,
      "You cannot change the status of super admin. Only super admin can change the status of another super admin"
    );
  }
  if (isAdminExists.user.role === Role.ADMIN && userToChangeStatus.role === Role.ADMIN) {
    throw new AppError_default(
      status25.BAD_REQUEST,
      "You cannot change the status of another admin. Only super admin can change the status of another admin"
    );
  }
  if (userStatus === UserStatus.DELETED) {
    throw new AppError_default(
      status25.BAD_REQUEST,
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
      status25.FORBIDDEN,
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
    throw new AppError_default(status25.BAD_REQUEST, "You cannot change your own role");
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
    httpStatusCode: status26.OK,
    success: true,
    message: "Admins fetched successfully",
    data: result
  });
});
var getAllUsers2 = catchAsync(async (req, res) => {
  const result = await AdminService.getAllUsers();
  sendResponse(res, {
    httpStatusCode: status26.OK,
    success: true,
    message: "Users fetched successfully",
    data: result
  });
});
var getAdminById2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const admin = await AdminService.getAdminById(id);
  sendResponse(res, {
    httpStatusCode: status26.OK,
    success: true,
    message: "Admin fetched successfully",
    data: admin
  });
});
var updateAdmin2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const updatedAdmin = await AdminService.updateAdmin(id, payload);
  sendResponse(res, {
    httpStatusCode: status26.OK,
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
    httpStatusCode: status26.OK,
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
    httpStatusCode: status26.OK,
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
    httpStatusCode: status26.OK,
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
    httpStatusCode: status26.OK,
    success: true,
    message: "User role changed successfully",
    data: result
  });
});
var getStats3 = catchAsync(async (req, res) => {
  const result = await AdminService.getStats();
  sendResponse(res, {
    httpStatusCode: status26.OK,
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
import z8 from "zod";
var updateAdminZodSchema = z8.object({
  admin: z8.object({
    name: z8.string("Name must be a string").optional(),
    profilePhoto: z8.url("Profile photo must be a valid URL").optional(),
    contactNumber: z8.string("Contact number must be a string").min(11, "Contact number must be at least 11 characters").max(14, "Contact number must be at most 15 characters").optional()
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
import status28 from "http-status";

// src/app/module/ai/ai.service.ts
import status27 from "http-status";
var generateProductData = async (title) => {
  const llmService = new LLMService();
  const prompt = `You are an expert e-commerce copywriter. Based on the product title '${title}', generate a detailed and engaging product description and SEO tags.
  
  Return the response as a JSON object with the following fields:
  1. 'description': A detailed HTML formatted description (using <p>, <ul>, <li>, <strong> tags) including features and benefits.
  2. 'shortDescription': A catchy 1-2 sentence summary for social media or preview.
  3. 'tags': An array of 5 SEO-friendly search keywords.
  
  Return ONLY the JSON object. Do not include markdown code blocks.`;
  const response = await llmService.generateResponse(prompt, [], true);
  const cleanedResponse = response.replace(/```json|```/g, "").trim();
  return JSON.parse(cleanedResponse);
};
var getRecommendations = async (productId) => {
  const currentProduct = await prisma2.product.findUnique({
    where: { id: productId },
    include: { category: true }
  });
  if (!currentProduct) {
    throw new AppError_default(status27.NOT_FOUND, "Product not found");
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
  const response = await llmService.generateResponse(prompt, [], true);
  const cleanedResponse = response.replace(/```json|```/g, "").trim();
  const recommendedIds = JSON.parse(cleanedResponse);
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
  const response = await llmService.generateResponse(prompt, [], true);
  let finalHTML = "";
  try {
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsedResponse = JSON.parse(jsonMatch[0]);
      finalHTML = parsedResponse.analysis || response;
    } else {
      finalHTML = response;
    }
  } catch (error) {
    finalHTML = response.replace(/```json|```/g, "").trim();
  }
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
    httpStatusCode: status28.OK,
    success: true,
    message: "Product data generated successfully",
    data: result
  });
});
var getRecommendations2 = catchAsync(async (req, res) => {
  const { productId } = req.body;
  const result = await AIService.getRecommendations(productId);
  sendResponse(res, {
    httpStatusCode: status28.OK,
    success: true,
    message: "Recommendations fetched successfully",
    data: result
  });
});
var analyzeBusiness2 = catchAsync(async (req, res) => {
  const result = await AIService.analyzeBusiness();
  sendResponse(res, {
    httpStatusCode: status28.OK,
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
import status30 from "http-status";

// src/app/module/attribute/attribute.service.ts
import status29 from "http-status";
var createAttribute = async (payload) => {
  const existing = await prisma2.attribute.findFirst({
    where: { name: payload.name }
  });
  if (existing) {
    throw new AppError_default(
      status29.BAD_REQUEST,
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
    throw new AppError_default(status29.NOT_FOUND, "Attribute not found");
  }
  return attribute;
};
var updateAttribute = async (id, payload) => {
  const attribute = await prisma2.attribute.findUnique({ where: { id } });
  if (!attribute) {
    throw new AppError_default(status29.NOT_FOUND, "Attribute not found");
  }
  const existing = await prisma2.attribute.findFirst({
    where: {
      name: payload.name,
      NOT: { id }
    }
  });
  if (existing) {
    throw new AppError_default(
      status29.BAD_REQUEST,
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
    throw new AppError_default(status29.NOT_FOUND, "Attribute not found");
  }
  await prisma2.attribute.delete({ where: { id } });
  return { message: "Attribute deleted successfully" };
};
var addAttributeValue = async (attributeId, payload) => {
  const attribute = await prisma2.attribute.findUnique({
    where: { id: attributeId }
  });
  if (!attribute) {
    throw new AppError_default(status29.NOT_FOUND, "Attribute not found");
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
      status29.BAD_REQUEST,
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
    throw new AppError_default(status29.NOT_FOUND, "Attribute value not found");
  }
  await prisma2.attributeValue.delete({ where: { id: valueId } });
  return { message: "Attribute value deleted successfully" };
};
var updateAttributeValue = async (valueId, payload) => {
  const value = await prisma2.attributeValue.findUnique({
    where: { id: valueId }
  });
  if (!value) {
    throw new AppError_default(status29.NOT_FOUND, "Attribute value not found");
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
      status29.BAD_REQUEST,
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
    httpStatusCode: status30.CREATED,
    success: true,
    message: "Attribute created successfully",
    data: result
  });
});
var getAllAttributes2 = catchAsync(async (req, res) => {
  const result = await AttributeService.getAllAttributes();
  sendResponse(res, {
    httpStatusCode: status30.OK,
    success: true,
    message: "Attributes fetched successfully",
    data: result
  });
});
var getAttributeById2 = catchAsync(async (req, res) => {
  const result = await AttributeService.getAttributeById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status30.OK,
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
    httpStatusCode: status30.OK,
    success: true,
    message: "Attribute updated successfully",
    data: result
  });
});
var deleteAttribute2 = catchAsync(async (req, res) => {
  const result = await AttributeService.deleteAttribute(req.params.id);
  sendResponse(res, {
    httpStatusCode: status30.OK,
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
    httpStatusCode: status30.CREATED,
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
    httpStatusCode: status30.OK,
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
    httpStatusCode: status30.OK,
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
import z9 from "zod";
var createAttributeZodSchema = z9.object({
  name: z9.string().min(1, "Attribute name is required")
});
var updateAttributeZodSchema = z9.object({
  name: z9.string().min(1, "Attribute name is required")
});
var addAttributeValueZodSchema = z9.object({
  value: z9.string().min(1, "Attribute value is required")
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
import status32 from "http-status";

// src/app/module/coupon/coupon.service.ts
import status31 from "http-status";
var createCoupon = async (payload) => {
  const { productIds, ...couponData } = payload;
  if (new Date(couponData.endDate) <= new Date(couponData.startDate)) {
    throw new AppError_default(status31.BAD_REQUEST, "End date must be after start date");
  }
  const existing = await prisma2.coupon.findUnique({ where: { code: couponData.code } });
  if (existing) {
    throw new AppError_default(status31.CONFLICT, "Coupon code already exists");
  }
  const products = await prisma2.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true }
  });
  if (products.length !== productIds.length) {
    throw new AppError_default(status31.BAD_REQUEST, "Some products do not exist");
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
    throw new AppError_default(status31.NOT_FOUND, "Coupon not found");
  }
  return coupon;
};
var toggleCouponStatus = async (id) => {
  const coupon = await prisma2.coupon.findUnique({ where: { id } });
  if (!coupon) {
    throw new AppError_default(status31.NOT_FOUND, "Coupon not found");
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
    throw new AppError_default(status31.NOT_FOUND, "Coupon not found");
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
    throw new AppError_default(status31.NOT_FOUND, "Invalid coupon code");
  }
  if (!coupon.isActive) {
    throw new AppError_default(status31.BAD_REQUEST, "This coupon is inactive");
  }
  const now = /* @__PURE__ */ new Date();
  if (now < new Date(coupon.startDate) || now > new Date(coupon.endDate)) {
    throw new AppError_default(status31.BAD_REQUEST, "This coupon has expired");
  }
  const couponProductIds = coupon.products.map((cp) => cp.productId);
  const eligibleItems = items.filter(
    (item) => couponProductIds.includes(item.productId)
  );
  if (eligibleItems.length === 0) {
    throw new AppError_default(
      status31.BAD_REQUEST,
      "This coupon is not applicable to the products in your cart"
    );
  }
  const eligibleSubtotal = eligibleItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  if (eligibleSubtotal < coupon.minPurchaseAmount) {
    throw new AppError_default(
      status31.BAD_REQUEST,
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
    httpStatusCode: status32.CREATED,
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
    httpStatusCode: status32.OK,
    success: true,
    message: "Coupons fetched successfully",
    data,
    meta
  });
});
var getCouponById2 = catchAsync(async (req, res) => {
  const result = await CouponService.getCouponById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status32.OK,
    success: true,
    message: "Coupon fetched successfully",
    data: result
  });
});
var toggleCouponStatus2 = catchAsync(async (req, res) => {
  const result = await CouponService.toggleCouponStatus(req.params.id);
  sendResponse(res, {
    httpStatusCode: status32.OK,
    success: true,
    message: "Coupon status updated",
    data: result
  });
});
var deleteCoupon2 = catchAsync(async (req, res) => {
  const result = await CouponService.deleteCoupon(req.params.id);
  sendResponse(res, {
    httpStatusCode: status32.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var validateCoupon2 = catchAsync(async (req, res) => {
  const result = await CouponService.validateCoupon(req.body);
  sendResponse(res, {
    httpStatusCode: status32.OK,
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
import z10 from "zod";
var createCouponZodSchema = z10.object({
  code: z10.string().min(3, "Coupon code must be at least 3 characters").max(30, "Coupon code must be at most 30 characters").regex(
    /^[A-Z0-9_-]+$/,
    "Only uppercase letters, numbers, hyphens and underscores allowed"
  ),
  discountType: z10.enum(["FLAT", "PERCENTAGE"]),
  discountAmount: z10.number().positive("Discount amount must be positive"),
  maxDiscountAmount: z10.number().positive().optional(),
  minPurchaseAmount: z10.number().min(0).default(0),
  startDate: z10.string().datetime({ offset: true }),
  endDate: z10.string().datetime({ offset: true }),
  productIds: z10.array(z10.string().uuid()).min(1, "At least one product required")
});
var updateCouponZodSchema = z10.object({
  isActive: z10.boolean().optional(),
  endDate: z10.string().datetime({ offset: true }).optional()
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
  getShippingSettings,
  updateShippingSettings
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
import { z as z11 } from "zod";
var updateShippingSettingZodSchema = z11.object({
  insideDhakaShippingFee: z11.number().nonnegative().optional(),
  outsideDhakaShippingFee: z11.number().nonnegative().optional()
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

// src/app/module/hero-slider/heroSlider.route.ts
import express3 from "express";

// src/app/module/hero-slider/heroSlider.service.ts
var createHeroSlider = async (req) => {
  const file = req.file;
  if (!file) {
    throw new Error("No image file uploaded");
  }
  const result = await prisma2.heroSlider.create({
    data: {
      image: file.path
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
  createHeroSlider,
  getHeroSliders,
  deleteHeroSlider
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
var router16 = express3.Router();
router16.get("/", HeroSliderController.getHeroSliders);
router16.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.single("image"),
  HeroSliderController.createHeroSlider
);
router16.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  HeroSliderController.deleteHeroSlider
);
var HeroSliderRoutes = router16;

// src/app/module/home-category-section/homeCategorySection.route.ts
import express4 from "express";

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
  replaceHomeCategorySections,
  resolveCategoryProducts,
  getHomepageSections
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
import z12 from "zod";
var homeCategorySectionItemZodSchema = z12.object({
  categoryId: z12.string().min(1, "categoryId is required"),
  displayType: z12.enum(["BEST_SELLING", "LATEST"])
});
var updateHomeCategorySectionsZodSchema = z12.object({
  sections: z12.array(homeCategorySectionItemZodSchema)
});

// src/app/module/home-category-section/homeCategorySection.route.ts
var router17 = express4.Router();
router17.get("/homepage", HomeCategorySectionController.getHomepageSections);
router17.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  HomeCategorySectionController.getHomeCategorySections
);
router17.put(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateHomeCategorySectionsZodSchema),
  HomeCategorySectionController.updateHomeCategorySections
);
var HomeCategorySectionRoutes = router17;

// src/app/module/pos/pos.route.ts
import { Router as Router14 } from "express";

// src/app/module/pos/pos.controller.ts
import status34 from "http-status";

// src/app/module/pos/pos.service.ts
import status33 from "http-status";
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
    throw new AppError_default(status33.NOT_FOUND, "Cart item not found");
  }
  return await prisma2.posCartItem.update({
    where: { id },
    data: { quantity }
  });
};
var deletePosCartItem = async (shopId, id) => {
  const item = await prisma2.posCartItem.findUnique({ where: { id } });
  if (!item || item.shopId !== shopId) {
    throw new AppError_default(status33.NOT_FOUND, "Cart item not found");
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
    throw new AppError_default(status33.BAD_REQUEST, "POS cart is empty");
  }
  const order = await prisma2.$transaction(async (tx) => {
    for (const item of cartItems) {
      if (item.productVariantId) {
        const variant = item.product.variants.find((v) => v.id === item.productVariantId);
        if (!variant || variant.quantity < item.quantity) {
          throw new AppError_default(
            status33.BAD_REQUEST,
            `Not enough stock for variant ${item.combination} of ${item.productName}`
          );
        }
      } else {
        if (item.product.stock < item.quantity) {
          throw new AppError_default(
            status33.BAD_REQUEST,
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
    httpStatusCode: status34.OK,
    success: true,
    message: "POS Products fetched successfully",
    ...result
  });
});
var getPosCart2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.getPosCart(shopId);
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: "POS Cart fetched successfully",
    data
  });
});
var addToPosCart2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.addToPosCart(shopId, req.body);
  sendResponse(res, {
    httpStatusCode: status34.OK,
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
    httpStatusCode: status34.OK,
    success: true,
    message: "POS Cart item updated successfully",
    data
  });
});
var deletePosCartItem2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.deletePosCartItem(shopId, req.params.id);
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: "POS Cart item removed successfully",
    data
  });
});
var clearPosCart2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  await PosService.clearPosCart(shopId);
  sendResponse(res, {
    httpStatusCode: status34.OK,
    success: true,
    message: "POS Cart cleared successfully",
    data: null
  });
});
var createPosOrder2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const data = await PosService.createPosOrder(shopId, req.body);
  sendResponse(res, {
    httpStatusCode: status34.CREATED,
    success: true,
    message: "POS Order created successfully",
    data
  });
});
var getPosOrders2 = catchAsync(async (req, res) => {
  const shopId = await ShopService.getDefaultShopId();
  const result = await PosService.getPosOrders(shopId, req.query);
  sendResponse(res, {
    httpStatusCode: status34.OK,
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
import { z as z13 } from "zod";
var addToPosCartZodSchema = z13.object({
  productId: z13.string({ message: "Product ID is required" }).min(1, "Product ID is required"),
  productVariantId: z13.string().optional().nullable(),
  productName: z13.string({ message: "Product Name is required" }).min(1, "Product Name is required"),
  price: z13.number({ message: "Price is required" }).min(0),
  quantity: z13.number().int().min(1).default(1),
  combination: z13.string().optional().nullable(),
  productImage: z13.string().optional().nullable()
});
var updatePosCartItemZodSchema = z13.object({
  quantity: z13.number().int().min(1, "Quantity must be at least 1")
});
var createPosOrderZodSchema = z13.object({
  subtotal: z13.number(),
  discount: z13.number().default(0),
  tax: z13.number().default(0),
  shippingCharge: z13.number().default(0),
  total: z13.number(),
  coupon: z13.string().optional().nullable(),
  customer: z13.object({
    name: z13.string().optional().nullable(),
    phone: z13.string({ message: "Customer phone number is required" }).regex(/^01\d{9}$/, "Enter a valid 11-digit Bangladeshi mobile number starting with 01"),
    address: z13.string().optional().nullable(),
    district: z13.string().optional().nullable(),
    note: z13.string().optional().nullable()
  }),
  payment: z13.object({
    method: z13.string().default("Cash"),
    amount: z13.number().default(0),
    change: z13.number().default(0)
  })
});

// src/app/module/pos/pos.route.ts
var router18 = Router14();
router18.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router18.get("/products", PosController.getShopProducts);
router18.get("/cart", PosController.getPosCart);
router18.post(
  "/cart",
  validateRequest(addToPosCartZodSchema),
  PosController.addToPosCart
);
router18.patch(
  "/cart/:id",
  validateRequest(updatePosCartItemZodSchema),
  PosController.updatePosCartItem
);
router18.delete("/cart/:id", PosController.deletePosCartItem);
router18.delete("/cart", PosController.clearPosCart);
router18.post(
  "/orders",
  validateRequest(createPosOrderZodSchema),
  PosController.createPosOrder
);
router18.get("/orders", PosController.getPosOrders);
var PosRoutes = router18;

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
  getSiteSettings,
  updateSiteSettings
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
import { z as z14 } from "zod";
var updateSiteSettingZodSchema = z14.object({
  siteName: z14.string().min(1).optional(),
  tagline: z14.string().optional(),
  description: z14.string().optional(),
  phone: z14.string().optional(),
  email: z14.email().optional().or(z14.literal("")),
  address: z14.string().optional(),
  facebook: z14.url().optional().or(z14.literal("")),
  youtube: z14.url().optional().or(z14.literal("")),
  instagram: z14.url().optional().or(z14.literal("")),
  linkedin: z14.url().optional().or(z14.literal("")),
  tiktok: z14.url().optional().or(z14.literal("")),
  whatsapp: z14.string().optional(),
  copyrightText: z14.string().optional()
});

// src/app/module/site-setting/siteSetting.route.ts
var router19 = Router15();
router19.get("/", SiteSettingController.getSiteSettings);
router19.patch(
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
var SiteSettingRoutes = router19;

// src/app/module/landing-page/landingPage.route.ts
import { Router as Router16 } from "express";

// src/app/module/landing-page/landingPage.controller.ts
import status36 from "http-status";

// src/app/module/landing-page/landingPage.service.ts
import status35 from "http-status";
var createLandingPage = async (payload) => {
  const product = await prisma2.product.findUnique({
    where: { id: payload.productId }
  });
  if (!product) {
    throw new AppError_default(status35.NOT_FOUND, "Product not found");
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
    throw new AppError_default(status35.NOT_FOUND, "Landing page not found");
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
    throw new AppError_default(status35.NOT_FOUND, "Landing page not found");
  }
  prisma2.landingPage.update({ where: { id: landingPage.id }, data: { views: { increment: 1 } } }).catch(() => void 0);
  return landingPage;
};
var updateLandingPage = async (id, payload) => {
  const existing = await prisma2.landingPage.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError_default(status35.NOT_FOUND, "Landing page not found");
  }
  if (payload.productId) {
    const product = await prisma2.product.findUnique({
      where: { id: payload.productId }
    });
    if (!product) {
      throw new AppError_default(status35.NOT_FOUND, "Product not found");
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
    throw new AppError_default(status35.NOT_FOUND, "Landing page not found");
  }
  await prisma2.landingPage.delete({ where: { id } });
  return { message: "Landing page deleted successfully" };
};
var createGuestOrder = async (slug, payload) => {
  const landingPage = await prisma2.landingPage.findUnique({ where: { slug } });
  if (!landingPage || !landingPage.isActive) {
    throw new AppError_default(status35.NOT_FOUND, "Landing page not found");
  }
  const order = await OrderService.createOrder(null, {
    fullName: payload.fullName,
    phone: payload.phone,
    address: payload.address,
    district: payload.district,
    shippingFee: payload.shippingFee,
    orderType: OrderType.LANDING_PAGE,
    checkoutSessionToken: payload.checkoutSessionToken,
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
    httpStatusCode: status36.CREATED,
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
    httpStatusCode: status36.OK,
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
    httpStatusCode: status36.OK,
    success: true,
    message: "Landing page retrieved successfully",
    data: result
  });
});
var getLandingPageBySlug2 = catchAsync(async (req, res) => {
  const result = await LandingPageService.getLandingPageBySlug(req.params.slug);
  sendResponse(res, {
    httpStatusCode: status36.OK,
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
    httpStatusCode: status36.OK,
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
    httpStatusCode: status36.OK,
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
    httpStatusCode: status36.CREATED,
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
import { z as z15 } from "zod";
var createLandingPageZodSchema = z15.object({
  productId: z15.uuid("A valid product must be selected"),
  campaignTitle: z15.string().min(1, "Campaign title is required"),
  campaignShortDescription: z15.string().optional(),
  regularPriceLabel: z15.string().optional(),
  offerPriceLabel: z15.string().optional(),
  galleryHeading: z15.string().optional(),
  galleryDescription: z15.string().optional(),
  aboutHeading: z15.string().optional(),
  aboutDescription: z15.string().optional(),
  videoUrl: z15.url().optional().or(z15.literal("")),
  descriptionTitle: z15.string().optional(),
  description: z15.string().optional(),
  reviewHeading: z15.string().optional(),
  orderFormHeading: z15.string().optional(),
  orderButtonText: z15.string().optional(),
  isActive: z15.boolean().optional(),
  themeColor: z15.string().optional(),
  showGallerySection: z15.boolean().optional(),
  showAboutSection: z15.boolean().optional(),
  showDescriptionSection: z15.boolean().optional(),
  showReviewsSection: z15.boolean().optional(),
  sectionOrder: z15.array(z15.enum(["price", "gallery", "about", "description", "reviews"])).optional()
});
var updateLandingPageZodSchema = z15.object({
  productId: z15.uuid().optional(),
  campaignTitle: z15.string().min(1).optional(),
  campaignShortDescription: z15.string().optional(),
  regularPriceLabel: z15.string().optional(),
  offerPriceLabel: z15.string().optional(),
  galleryHeading: z15.string().optional(),
  galleryDescription: z15.string().optional(),
  // URLs of previously uploaded gallery images to keep (newly uploaded files are appended by the server)
  galleryImages: z15.array(z15.string()).optional(),
  aboutHeading: z15.string().optional(),
  aboutDescription: z15.string().optional(),
  videoUrl: z15.url().optional().or(z15.literal("")),
  descriptionTitle: z15.string().optional(),
  description: z15.string().optional(),
  reviewHeading: z15.string().optional(),
  // URLs of previously uploaded review images to keep (newly uploaded files are appended by the server)
  reviewImages: z15.array(z15.string()).optional(),
  orderFormHeading: z15.string().optional(),
  orderButtonText: z15.string().optional(),
  isActive: z15.boolean().optional(),
  themeColor: z15.string().optional(),
  showGallerySection: z15.boolean().optional(),
  showAboutSection: z15.boolean().optional(),
  showDescriptionSection: z15.boolean().optional(),
  showReviewsSection: z15.boolean().optional(),
  sectionOrder: z15.array(z15.enum(["price", "gallery", "about", "description", "reviews"])).optional()
});
var createGuestLandingOrderZodSchema = z15.object({
  fullName: z15.string().min(1, "Full name is required"),
  phone: z15.string().min(1, "Phone number is required").regex(/^01\d{9}$/, "Enter a valid 11-digit Bangladeshi mobile number starting with 01"),
  address: z15.string().min(1, "Address is required"),
  district: z15.string().min(1, "District is required"),
  productVariantId: z15.uuid().optional().nullable(),
  quantity: z15.number().int().positive(),
  shippingFee: z15.number().nonnegative().optional(),
  checkoutSessionToken: z15.string().optional()
});

// src/app/module/landing-page/landingPage.route.ts
var router20 = Router16();
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
router20.post(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  landingPageFileFields,
  parseJsonBody,
  validateRequest(createLandingPageZodSchema),
  LandingPageController.createLandingPage
);
router20.get(
  "/my-landing-pages",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  LandingPageController.getMyLandingPages
);
router20.get(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  LandingPageController.getLandingPageById
);
router20.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  landingPageFileFields,
  parseJsonBody,
  validateRequest(updateLandingPageZodSchema),
  LandingPageController.updateLandingPage
);
router20.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  LandingPageController.deleteLandingPage
);
router20.get("/slug/:slug", LandingPageController.getLandingPageBySlug);
router20.post(
  "/slug/:slug/order",
  guestOrderRateLimiter,
  validateRequest(createGuestLandingOrderZodSchema),
  LandingPageController.createGuestOrder
);
var LandingPageRoutes = router20;

// src/app/module/sales-report/sales-report.route.ts
import { Router as Router17 } from "express";

// src/app/module/sales-report/sales-report.controller.ts
import status37 from "http-status";

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
    httpStatusCode: status37.OK,
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
    httpStatusCode: status37.OK,
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
var router21 = Router17();
router21.get("/summary", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SalesReportController.getSalesSummary);
router21.get("/items", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SalesReportController.getSalesReportItems);
var SalesReportRoutes = router21;

// src/app/module/expense/expense.route.ts
import { Router as Router18 } from "express";

// src/app/module/expense/expense.controller.ts
import status39 from "http-status";

// src/app/module/expense/expense.service.ts
import status38 from "http-status";
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
  if (!category) throw new AppError_default(status38.NOT_FOUND, "Expense category not found");
  return prisma2.expenseCategory.update({ where: { id }, data: payload });
};
var deleteCategory3 = async (id) => {
  const category = await prisma2.expenseCategory.findUnique({ where: { id } });
  if (!category) throw new AppError_default(status38.NOT_FOUND, "Expense category not found");
  const expenseCount = await prisma2.expense.count({ where: { categoryId: id } });
  if (expenseCount > 0) {
    throw new AppError_default(
      status38.BAD_REQUEST,
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
    throw new AppError_default(status38.BAD_REQUEST, "Invalid expense category");
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
  if (!expense) throw new AppError_default(status38.NOT_FOUND, "Expense not found");
  if (payload.categoryId) {
    const category = await prisma2.expenseCategory.findUnique({
      where: { id: payload.categoryId }
    });
    if (!category) {
      throw new AppError_default(status38.BAD_REQUEST, "Invalid expense category");
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
  if (!expense) throw new AppError_default(status38.NOT_FOUND, "Expense not found");
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
    httpStatusCode: status39.CREATED,
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
    httpStatusCode: status39.OK,
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
    httpStatusCode: status39.OK,
    success: true,
    message: "Expense category updated successfully",
    data: result
  });
});
var deleteCategory4 = catchAsync(async (req, res) => {
  const result = await ExpenseService.deleteCategory(req.params.id);
  sendResponse(res, {
    httpStatusCode: status39.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var createExpense2 = catchAsync(async (req, res) => {
  const result = await ExpenseService.createExpense(req.body);
  sendResponse(res, {
    httpStatusCode: status39.CREATED,
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
    httpStatusCode: status39.OK,
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
    httpStatusCode: status39.OK,
    success: true,
    message: "Expense updated successfully",
    data: result
  });
});
var deleteExpense2 = catchAsync(async (req, res) => {
  const result = await ExpenseService.deleteExpense(req.params.id);
  sendResponse(res, {
    httpStatusCode: status39.OK,
    success: true,
    message: result.message,
    data: null
  });
});
var getExpenseReportSummary2 = catchAsync(async (req, res) => {
  const result = await ExpenseService.getExpenseReportSummary();
  sendResponse(res, {
    httpStatusCode: status39.OK,
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
import z16 from "zod";
var createExpenseCategoryZodSchema = z16.object({
  name: z16.string().min(1, "Name is required").max(100)
});
var updateExpenseCategoryZodSchema = z16.object({
  name: z16.string().min(1, "Name is required").max(100).optional(),
  isActive: z16.boolean().optional()
});
var createExpenseZodSchema = z16.object({
  categoryId: z16.string().uuid("Invalid expense category"),
  name: z16.string().min(1, "Name is required").max(150),
  price: z16.number().positive("Price must be positive"),
  note: z16.string().max(500).optional(),
  date: z16.string().min(1, "Date is required")
});
var updateExpenseZodSchema = z16.object({
  categoryId: z16.string().uuid("Invalid expense category").optional(),
  name: z16.string().min(1, "Name is required").max(150).optional(),
  price: z16.number().positive("Price must be positive").optional(),
  note: z16.string().max(500).optional(),
  date: z16.string().min(1).optional()
});

// src/app/module/expense/expense.route.ts
var router22 = Router18();
router22.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router22.post(
  "/categories",
  validateRequest(createExpenseCategoryZodSchema),
  ExpenseController.createCategory
);
router22.get("/categories", ExpenseController.getMyCategories);
router22.patch(
  "/categories/:id",
  validateRequest(updateExpenseCategoryZodSchema),
  ExpenseController.updateCategory
);
router22.delete("/categories/:id", ExpenseController.deleteCategory);
router22.get("/report/summary", ExpenseController.getExpenseReportSummary);
router22.post("/", validateRequest(createExpenseZodSchema), ExpenseController.createExpense);
router22.get("/", ExpenseController.getMyExpenses);
router22.patch("/:id", validateRequest(updateExpenseZodSchema), ExpenseController.updateExpense);
router22.delete("/:id", ExpenseController.deleteExpense);
var ExpenseRoutes = router22;

// src/app/module/profit-loss/profit-loss.route.ts
import { Router as Router19 } from "express";

// src/app/module/profit-loss/profit-loss.controller.ts
import status40 from "http-status";

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
    httpStatusCode: status40.OK,
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
    httpStatusCode: status40.OK,
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
var router23 = Router19();
router23.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router23.get("/summary", ProfitLossController.getProfitLossSummary);
router23.get("/items", ProfitLossController.getProfitLossItems);
var ProfitLossRoutes = router23;

// src/app/module/platform-report/platform-report.route.ts
import { Router as Router20 } from "express";

// src/app/module/platform-report/platform-report.controller.ts
import status41 from "http-status";

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
    httpStatusCode: status41.OK,
    success: true,
    message: "Platform summary fetched successfully",
    data: result
  });
});
var getPlatformOverview2 = catchAsync(async (req, res) => {
  const { startDate, endDate } = req.query;
  const result = await PlatformReportService.getPlatformOverview({ startDate, endDate });
  sendResponse(res, {
    httpStatusCode: status41.OK,
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
    httpStatusCode: status41.OK,
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
var router24 = Router20();
router24.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router24.get("/summary", PlatformReportController.getPlatformSummary);
router24.get("/overview", PlatformReportController.getPlatformOverview);
router24.get("/items", PlatformReportController.getPlatformItems);
var PlatformReportRoutes = router24;

// src/app/module/district-report/districtReport.route.ts
import { Router as Router21 } from "express";

// src/app/module/district-report/districtReport.controller.ts
import status42 from "http-status";

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
    httpStatusCode: status42.OK,
    success: true,
    message: "District report overview fetched successfully",
    data: result
  });
});
var DistrictReportController = {
  getOverview
};

// src/app/module/district-report/districtReport.route.ts
var router25 = Router21();
router25.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router25.get("/overview", DistrictReportController.getOverview);
var DistrictReportRoutes = router25;

// src/app/module/customer-segment-report/customerSegmentReport.route.ts
import { Router as Router22 } from "express";

// src/app/module/customer-segment-report/customerSegmentReport.controller.ts
import status43 from "http-status";

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
    httpStatusCode: status43.OK,
    success: true,
    message: "Customer segment report overview fetched successfully",
    data: result
  });
});
var CustomerSegmentReportController = {
  getOverview: getOverview2
};

// src/app/module/customer-segment-report/customerSegmentReport.route.ts
var router26 = Router22();
router26.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router26.get("/overview", CustomerSegmentReportController.getOverview);
var CustomerSegmentReportRoutes = router26;

// src/app/module/notification/notification.route.ts
import { Router as Router23 } from "express";

// src/app/module/notification/notification.controller.ts
import status44 from "http-status";
var getMyNotifications2 = catchAsync(async (req, res) => {
  const limit = req.query.limit ? Number(req.query.limit) : 10;
  const result = await NotificationService.getMyNotifications(
    req.user.userId,
    limit
  );
  sendResponse(res, {
    httpStatusCode: status44.OK,
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
    httpStatusCode: status44.OK,
    success: true,
    message: "Notification marked as read",
    data: null
  });
});
var markAllAsRead2 = catchAsync(async (req, res) => {
  await NotificationService.markAllAsRead(req.user.userId);
  sendResponse(res, {
    httpStatusCode: status44.OK,
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
var router27 = Router23();
router27.get(
  "/",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  NotificationController.getMyNotifications
);
router27.patch(
  "/read-all",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  NotificationController.markAllAsRead
);
router27.patch(
  "/:id/read",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  NotificationController.markAsRead
);
var NotificationRoutes = router27;

// src/app/module/abandoned-checkout/abandonedCheckout.route.ts
import { Router as Router24 } from "express";

// src/app/module/abandoned-checkout/abandonedCheckout.controller.ts
import status45 from "http-status";
var trackCheckout2 = catchAsync(async (req, res) => {
  const result = await AbandonedCheckoutService.trackCheckout(req.body);
  sendResponse(res, {
    httpStatusCode: status45.OK,
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
    httpStatusCode: status45.OK,
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
    httpStatusCode: status45.OK,
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
import z17 from "zod";
var abandonedCheckoutItemZodSchema = z17.object({
  productId: z17.string(),
  productVariantId: z17.string().nullable().optional(),
  name: z17.string(),
  variantName: z17.string().nullable().optional(),
  image: z17.string().nullable().optional(),
  quantity: z17.number().int().positive(),
  price: z17.number()
});
var trackAbandonedCheckoutZodSchema = z17.object({
  sessionToken: z17.string().min(1, "Session token is required"),
  source: z17.enum(["STOREFRONT", "LANDING_PAGE"]).optional(),
  landingPageSlug: z17.string().nullable().optional(),
  fullName: z17.string().nullable().optional(),
  phone: z17.string().nullable().optional(),
  address: z17.string().nullable().optional(),
  district: z17.string().nullable().optional(),
  notes: z17.string().nullable().optional(),
  items: z17.array(abandonedCheckoutItemZodSchema).optional(),
  subtotal: z17.number().optional(),
  shippingFee: z17.number().optional(),
  discountAmount: z17.number().optional(),
  total: z17.number().optional()
});

// src/app/module/abandoned-checkout/abandonedCheckout.route.ts
var router28 = Router24();
router28.post(
  "/track",
  abandonedCheckoutTrackRateLimiter,
  validateRequest(trackAbandonedCheckoutZodSchema),
  AbandonedCheckoutController.trackCheckout
);
router28.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AbandonedCheckoutController.getAbandonedCheckouts
);
router28.delete(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AbandonedCheckoutController.deleteAbandonedCheckout
);
var AbandonedCheckoutRoutes = router28;

// src/app/module/courier-setting/courierSetting.route.ts
import { Router as Router25 } from "express";

// src/app/module/courier-setting/courierSetting.controller.ts
import status46 from "http-status";
var getCourierSettings2 = catchAsync(async (req, res) => {
  const result = await CourierSettingService.getCourierSettings();
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: "Courier settings retrieved successfully",
    data: result
  });
});
var updatePathaoSettings2 = catchAsync(async (req, res) => {
  const result = await CourierSettingService.updatePathaoSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: "Pathao settings updated successfully",
    data: result
  });
});
var updateSteadfastSettings2 = catchAsync(async (req, res) => {
  const result = await CourierSettingService.updateSteadfastSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status46.OK,
    success: true,
    message: "Steadfast settings updated successfully",
    data: result
  });
});
var CourierSettingController = {
  getCourierSettings: getCourierSettings2,
  updatePathaoSettings: updatePathaoSettings2,
  updateSteadfastSettings: updateSteadfastSettings2
};

// src/app/module/courier-setting/courierSetting.validation.ts
import { z as z18 } from "zod";
var updatePathaoSettingZodSchema = z18.object({
  pathaoEnabled: z18.boolean().optional(),
  pathaoBaseUrl: z18.string().optional().nullable(),
  pathaoClientId: z18.string().optional().nullable(),
  pathaoClientSecret: z18.string().optional().nullable(),
  pathaoUsername: z18.string().optional().nullable(),
  pathaoPassword: z18.string().optional().nullable(),
  pathaoStoreId: z18.string().optional().nullable()
});
var updateSteadfastSettingZodSchema = z18.object({
  steadfastEnabled: z18.boolean().optional(),
  steadfastApiKey: z18.string().optional().nullable(),
  steadfastSecretKey: z18.string().optional().nullable(),
  steadfastWebhookAuthToken: z18.string().optional().nullable()
});

// src/app/module/courier-setting/courierSetting.route.ts
var router29 = Router25();
router29.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router29.get("/", CourierSettingController.getCourierSettings);
router29.patch(
  "/pathao",
  validateRequest(updatePathaoSettingZodSchema),
  CourierSettingController.updatePathaoSettings
);
router29.patch(
  "/steadfast",
  validateRequest(updateSteadfastSettingZodSchema),
  CourierSettingController.updateSteadfastSettings
);
var CourierSettingRoutes = router29;

// src/app/module/courier-webhook/courierWebhook.route.ts
import { Router as Router26 } from "express";

// src/app/module/courier-webhook/courierWebhook.service.ts
import status47 from "http-status";
var DELIVERY_STATUS_TO_ORDER_STATUS = {
  delivered: OrderStatus.DELIVERED,
  cancelled: OrderStatus.CANCELLED
};
var processSteadfastWebhook = async (payload, authHeader) => {
  const settings = await CourierSettingService.getCourierSettings();
  if (settings.steadfastWebhookAuthToken) {
    const expected = `Bearer ${settings.steadfastWebhookAuthToken}`;
    if (authHeader !== expected) {
      throw new AppError_default(status47.UNAUTHORIZED, "Invalid webhook auth token");
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
    throw new AppError_default(status47.NOT_FOUND, "Order not found for this webhook");
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
var CourierWebhookService = {
  processSteadfastWebhook
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
var CourierWebhookController = {
  handleSteadfastWebhook
};

// src/app/module/courier-webhook/courierWebhook.route.ts
var router30 = Router26();
router30.post("/steadfast", CourierWebhookController.handleSteadfastWebhook);
var CourierWebhookRoutes = router30;

// src/app/module/payment-setting/paymentSetting.route.ts
import { Router as Router27 } from "express";

// src/app/module/payment-setting/paymentSetting.controller.ts
import status48 from "http-status";

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
var PaymentSettingService = {
  getPaymentSettings,
  updateCodSettings,
  updateSslcommerzSettings
};

// src/app/module/payment-setting/paymentSetting.controller.ts
var getPaymentSettings2 = catchAsync(async (req, res) => {
  const result = await PaymentSettingService.getPaymentSettings();
  sendResponse(res, {
    httpStatusCode: status48.OK,
    success: true,
    message: "Payment settings retrieved successfully",
    data: result
  });
});
var updateCodSettings2 = catchAsync(async (req, res) => {
  const result = await PaymentSettingService.updateCodSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status48.OK,
    success: true,
    message: "COD settings updated successfully",
    data: result
  });
});
var updateSslcommerzSettings2 = catchAsync(async (req, res) => {
  const result = await PaymentSettingService.updateSslcommerzSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status48.OK,
    success: true,
    message: "SSLCommerz settings updated successfully",
    data: result
  });
});
var PaymentSettingController = {
  getPaymentSettings: getPaymentSettings2,
  updateCodSettings: updateCodSettings2,
  updateSslcommerzSettings: updateSslcommerzSettings2
};

// src/app/module/payment-setting/paymentSetting.validation.ts
import { z as z19 } from "zod";
var updateCodSettingZodSchema = z19.object({
  codEnabled: z19.boolean().optional()
});
var updateSslcommerzSettingZodSchema = z19.object({
  sslcommerzEnabled: z19.boolean().optional(),
  sslcommerzMode: z19.enum(["SANDBOX", "LIVE"]).optional(),
  sslcommerzStoreId: z19.string().optional().nullable(),
  sslcommerzStorePassword: z19.string().optional().nullable()
});

// src/app/module/payment-setting/paymentSetting.route.ts
var router31 = Router27();
router31.get("/", PaymentSettingController.getPaymentSettings);
router31.patch(
  "/cod",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateCodSettingZodSchema),
  PaymentSettingController.updateCodSettings
);
router31.patch(
  "/sslcommerz",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateSslcommerzSettingZodSchema),
  PaymentSettingController.updateSslcommerzSettings
);
var PaymentSettingRoutes = router31;

// src/app/module/payment/payment.route.ts
import { Router as Router28 } from "express";

// src/app/module/payment/payment.controller.ts
import status51 from "http-status";

// src/app/module/payment/payment.service.ts
import status50 from "http-status";

// src/app/module/payment/sslcommerz.service.ts
import status49 from "http-status";
var getConfig = async () => {
  const settings = await PaymentSettingService.getPaymentSettings();
  if (!settings.sslcommerzEnabled) {
    throw new AppError_default(status49.BAD_REQUEST, "SSLCommerz is not enabled");
  }
  if (!settings.sslcommerzStoreId || !settings.sslcommerzStorePassword) {
    throw new AppError_default(
      status49.BAD_REQUEST,
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
  const { storeId, storePassword, baseUrl } = await getConfig();
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
      status49.BAD_GATEWAY,
      `SSLCommerz session init failed: ${data.failedreason || "unknown error"}`
    );
  }
  return data.GatewayPageURL;
};
var validateTransaction = async (valId) => {
  const { storeId, storePassword, baseUrl } = await getConfig();
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

// src/app/module/payment/payment.service.ts
var initiateSslcommerzPayment = async (orderId, userId) => {
  const order = await prisma2.order.findUnique({ where: { id: orderId } });
  if (!order) throw new AppError_default(status50.NOT_FOUND, "Order not found");
  if (order.userId !== userId) {
    throw new AppError_default(status50.FORBIDDEN, "This order does not belong to you");
  }
  if (order.paymentStatus === PaymentStatus.PAID) {
    throw new AppError_default(status50.BAD_REQUEST, "This order has already been paid");
  }
  if (!order.orderNumber || !order.fullName || !order.phone || !order.address || !order.district) {
    throw new AppError_default(status50.BAD_REQUEST, "Order is missing required details for payment");
  }
  const settings = await PaymentSettingService.getPaymentSettings();
  if (!settings.sslcommerzEnabled) {
    throw new AppError_default(status50.BAD_REQUEST, "SSLCommerz is not enabled");
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
  if (!order) throw new AppError_default(status50.NOT_FOUND, "Order not found for this transaction");
  if (order.paymentStatus === PaymentStatus.PAID) {
    return order;
  }
  const validation = await SslcommerzService.validateTransaction(valId);
  const isValid = validation.status === "VALID" || validation.status === "VALIDATED";
  const amountMatches = Math.abs(Number(validation.amount) - order.totalAmount) < 1;
  if (!isValid || !amountMatches) {
    await OrderService.updatePaymentStatus(order.id, PaymentStatus.FAILED);
    throw new AppError_default(status50.BAD_REQUEST, "Payment could not be validated");
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
var PaymentService = {
  initiateSslcommerzPayment,
  confirmSslcommerzPayment,
  markSslcommerzPaymentFailed
};

// src/app/module/payment/payment.controller.ts
var initiateSslcommerzPayment2 = catchAsync(async (req, res) => {
  const result = await PaymentService.initiateSslcommerzPayment(
    req.body.orderId,
    req.user.userId
  );
  sendResponse(res, {
    httpStatusCode: status51.OK,
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
var PaymentController = {
  initiateSslcommerzPayment: initiateSslcommerzPayment2,
  handleSuccess,
  handleFail,
  handleCancel,
  handleIpn
};

// src/app/module/payment/payment.route.ts
var router32 = Router28();
router32.post(
  "/sslcommerz/initiate",
  checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN),
  PaymentController.initiateSslcommerzPayment
);
router32.route("/sslcommerz/success").get(PaymentController.handleSuccess).post(PaymentController.handleSuccess);
router32.route("/sslcommerz/fail").get(PaymentController.handleFail).post(PaymentController.handleFail);
router32.route("/sslcommerz/cancel").get(PaymentController.handleCancel).post(PaymentController.handleCancel);
router32.post("/sslcommerz/ipn", PaymentController.handleIpn);
var PaymentRoutes = router32;

// src/app/module/sms-setting/smsSetting.route.ts
import { Router as Router29 } from "express";

// src/app/module/sms-setting/smsSetting.controller.ts
import status52 from "http-status";
var getSmsSettings2 = catchAsync(async (req, res) => {
  const result = await SmsSettingService.getSmsSettings();
  sendResponse(res, {
    httpStatusCode: status52.OK,
    success: true,
    message: "SMS settings retrieved successfully",
    data: result
  });
});
var updateSmsSettings2 = catchAsync(async (req, res) => {
  const result = await SmsSettingService.updateSmsSettings(req.body);
  sendResponse(res, {
    httpStatusCode: status52.OK,
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
import { z as z20 } from "zod";
var updateSmsSettingZodSchema = z20.object({
  enabled: z20.boolean().optional(),
  apiKey: z20.string().optional().nullable(),
  senderId: z20.string().optional().nullable()
});

// src/app/module/sms-setting/smsSetting.route.ts
var router33 = Router29();
router33.use(checkAuth(Role.ADMIN, Role.SUPER_ADMIN));
router33.get("/", SmsSettingController.getSmsSettings);
router33.patch(
  "/",
  validateRequest(updateSmsSettingZodSchema),
  SmsSettingController.updateSmsSettings
);
var SmsSettingRoutes = router33;

// src/app/module/page-content/pageContent.route.ts
import express5 from "express";

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
import z21 from "zod";
var updatePageContentZodSchema = z21.object({
  title: z21.string().min(1, "title is required"),
  content: z21.string()
});

// src/app/module/page-content/pageContent.route.ts
var router34 = express5.Router();
router34.get("/:slug", PageContentController.getPageContent);
router34.put(
  "/:slug",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updatePageContentZodSchema),
  PageContentController.updatePageContent
);
var PageContentRoutes = router34;

// src/app/module/faq/faq.route.ts
import express6 from "express";

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
  getPublicFaqs,
  replaceFaqs
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
import z22 from "zod";
var faqItemZodSchema = z22.object({
  question: z22.string().min(1, "question is required"),
  answer: z22.string().min(1, "answer is required"),
  isActive: z22.boolean()
});
var updateFaqsZodSchema = z22.object({
  faqs: z22.array(faqItemZodSchema)
});

// src/app/module/faq/faq.route.ts
var router35 = express6.Router();
router35.get("/public", FaqController.getPublicFaqs);
router35.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  FaqController.getFaqs
);
router35.put(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateFaqsZodSchema),
  FaqController.updateFaqs
);
var FaqRoutes = router35;

// src/app/module/flash-sale/flashSale.route.ts
import express7 from "express";

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
  replaceFlashSale,
  getPublicFlashSale
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
import z23 from "zod";
var updateFlashSaleZodSchema = z23.object({
  isActive: z23.boolean(),
  startTime: z23.string().datetime({ offset: true }).nullable(),
  endTime: z23.string().datetime({ offset: true }).nullable(),
  productIds: z23.array(z23.string())
});

// src/app/module/flash-sale/flashSale.route.ts
var router36 = express7.Router();
router36.get("/public", FlashSaleController.getPublicFlashSale);
router36.get(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  FlashSaleController.getFlashSale
);
router36.put(
  "/",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  validateRequest(updateFlashSaleZodSchema),
  FlashSaleController.updateFlashSale
);
var FlashSaleRoutes = router36;

// src/app/module/blog/blog.route.ts
import { Router as Router30 } from "express";

// src/app/module/blog/blog.controller.ts
import status54 from "http-status";

// src/app/module/blog/blog.service.ts
import status53 from "http-status";
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
    throw new AppError_default(status53.NOT_FOUND, "Blog not found");
  }
  return blog;
};
var getBlogBySlug = async (slug) => {
  const blog = await prisma2.blog.findUnique({ where: { slug } });
  if (!blog || !blog.isPublished) {
    throw new AppError_default(status53.NOT_FOUND, "Blog not found");
  }
  return blog;
};
var updateBlog = async (id, payload) => {
  const existing = await prisma2.blog.findUnique({ where: { id } });
  if (!existing) {
    throw new AppError_default(status53.NOT_FOUND, "Blog not found");
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
    throw new AppError_default(status53.NOT_FOUND, "Blog not found");
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
    httpStatusCode: status54.CREATED,
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
    httpStatusCode: status54.OK,
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
    httpStatusCode: status54.OK,
    success: true,
    message: "Blogs fetched successfully",
    data,
    meta
  });
});
var getBlogById2 = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogById(req.params.id);
  sendResponse(res, {
    httpStatusCode: status54.OK,
    success: true,
    message: "Blog fetched successfully",
    data: result
  });
});
var getBlogBySlug2 = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogBySlug(req.params.slug);
  sendResponse(res, {
    httpStatusCode: status54.OK,
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
    httpStatusCode: status54.OK,
    success: true,
    message: "Blog updated successfully",
    data: result
  });
});
var deleteBlog2 = catchAsync(async (req, res) => {
  const result = await BlogService.deleteBlog(req.params.id);
  sendResponse(res, {
    httpStatusCode: status54.OK,
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
import z24 from "zod";
var createBlogZodSchema = z24.object({
  title: z24.string().min(1, "Title is required"),
  excerpt: z24.string().optional(),
  content: z24.string().min(1, "Content is required"),
  author: z24.string().optional(),
  isPublished: z24.boolean().optional().default(false)
});
var updateBlogZodSchema = z24.object({
  title: z24.string().min(1).optional(),
  excerpt: z24.string().optional(),
  content: z24.string().min(1).optional(),
  author: z24.string().optional(),
  isPublished: z24.boolean().optional(),
  removeCoverImage: z24.boolean().optional()
});

// src/app/module/blog/blog.route.ts
var router37 = Router30();
router37.get("/", BlogController.getAllBlogs);
router37.get(
  "/admin",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  BlogController.getAllBlogsAdmin
);
router37.get("/slug/:slug", BlogController.getBlogBySlug);
router37.get(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  BlogController.getBlogById
);
router37.post(
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
router37.patch(
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
router37.delete(
  "/:id",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  BlogController.deleteBlog
);
var BlogRoutes = router37;

// src/app/routes/index.ts
var router38 = Router31();
router38.use("/auth", AuthRoutes);
router38.use("/admin", AdminRoutes);
router38.use("/categories", CategoryRoutes);
router38.use("/shops", ShopRoutes);
router38.use("/products", ProductRoutes);
router38.use("/cart", CartRoutes);
router38.use("/orders", OrderRoutes);
router38.use("/order-returns", OrderReturnRoutes);
router38.use("/reviews", ReviewRoutes);
router38.use("/analytics", AnalyticsRoutes);
router38.use("/rag", RagRoutes);
router38.use("/ai", AIRoutes);
router38.use("/attributes", AttributeRoutes);
router38.use("/coupons", CouponRoutes);
router38.use("/shipping-settings", ShippingSettingRoutes);
router38.use("/hero-sliders", HeroSliderRoutes);
router38.use("/home-category-sections", HomeCategorySectionRoutes);
router38.use("/pos", PosRoutes);
router38.use("/site-settings", SiteSettingRoutes);
router38.use("/landing-pages", LandingPageRoutes);
router38.use("/sales-report", SalesReportRoutes);
router38.use("/expenses", ExpenseRoutes);
router38.use("/profit-loss", ProfitLossRoutes);
router38.use("/platform-report", PlatformReportRoutes);
router38.use("/district-report", DistrictReportRoutes);
router38.use("/customer-segment-report", CustomerSegmentReportRoutes);
router38.use("/notifications", NotificationRoutes);
router38.use("/abandoned-checkouts", AbandonedCheckoutRoutes);
router38.use("/courier-settings", CourierSettingRoutes);
router38.use("/courier-webhooks", CourierWebhookRoutes);
router38.use("/payment-settings", PaymentSettingRoutes);
router38.use("/payments", PaymentRoutes);
router38.use("/sms-settings", SmsSettingRoutes);
router38.use("/pages", PageContentRoutes);
router38.use("/faqs", FaqRoutes);
router38.use("/flash-sale", FlashSaleRoutes);
router38.use("/blogs", BlogRoutes);
var IndexRoutes = router38;

// src/app/middleware/globalErrorHandler.ts
import * as Sentry from "@sentry/node";
import status57 from "http-status";
import z25 from "zod";

// src/app/errorHelpers/handlePrismaErrors.ts
import status55 from "http-status";
var getStatusCodeFromPrismaError = (errorCode) => {
  if (errorCode === "P2002") {
    return status55.CONFLICT;
  }
  if (["P2025", "P2001", "P2015", "P2018"].includes(errorCode)) {
    return status55.NOT_FOUND;
  }
  if (["P1000", "P6002"].includes(errorCode)) {
    return status55.UNAUTHORIZED;
  }
  if (["P1010", "P6010"].includes(errorCode)) {
    return status55.FORBIDDEN;
  }
  if (errorCode === "P6003") {
    return status55.PAYMENT_REQUIRED;
  }
  if (["P1008", "P2004", "P6004"].includes(errorCode)) {
    return status55.GATEWAY_TIMEOUT;
  }
  if (errorCode === "P5011") {
    return status55.TOO_MANY_REQUESTS;
  }
  if (errorCode === "P6009") {
    return 413;
  }
  if (errorCode.startsWith("P1") || ["P2024", "P2037", "P6008"].includes(errorCode)) {
    return status55.SERVICE_UNAVAILABLE;
  }
  if (errorCode.startsWith("P2")) {
    return status55.BAD_REQUEST;
  }
  if (errorCode.startsWith("P3") || errorCode.startsWith("P4")) {
    return status55.INTERNAL_SERVER_ERROR;
  }
  return status55.INTERNAL_SERVER_ERROR;
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
    statusCode: status55.INTERNAL_SERVER_ERROR,
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
    statusCode: status55.BAD_REQUEST,
    message: `Prisma Client Validation Error: ${mainMessage}`,
    errorSources
  };
};
var handlerPrismaClientInitializationError = (error) => {
  const statusCode = error.errorCode ? getStatusCodeFromPrismaError(error.errorCode) : status55.SERVICE_UNAVAILABLE;
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
    statusCode: status55.INTERNAL_SERVER_ERROR,
    message: "Prisma Client Rust Panic Error: The database engine crashed due to a fatal error.",
    errorSources
  };
};

// src/app/errorHelpers/handleZodError.ts
import status56 from "http-status";
var handleZodError = (err) => {
  const statusCode = status56.BAD_REQUEST;
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
  let statusCode = status57.INTERNAL_SERVER_ERROR;
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
  } else if (err instanceof z25.ZodError) {
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
    statusCode = status57.INTERNAL_SERVER_ERROR;
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
import status58 from "http-status";
var notFound = (req, res) => {
  res.status(status58.NOT_FOUND).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
};

// src/app.ts
var app = express8();
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
app.use(express8.urlencoded({ extended: true }));
app.use(express8.json());
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
