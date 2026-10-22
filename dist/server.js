import {
  Role,
  app_default,
  auth,
  envVars,
  prisma,
  startLogCleanupScheduler
} from "./chunk-SV6H25B6.js";

// src/app/utils/seed.ts
var seedSuperAdmin = async () => {
  try {
    const isSuperAdminExist = await prisma.user.findFirst({
      where: {
        role: Role.SUPER_ADMIN
      }
    });
    if (isSuperAdminExist) {
      console.log("Super admin already exists. Skipping seeding super admin.");
      return;
    }
    const superAdminUser = await auth.api.signUpEmail({
      body: {
        email: envVars.SUPER_ADMIN_EMAIL,
        password: envVars.SUPER_ADMIN_PASSWORD,
        name: "Super Admin",
        role: Role.SUPER_ADMIN,
        needPasswordChange: false,
        rememberMe: false
      }
    });
    await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: {
          id: superAdminUser.user.id
        },
        data: {
          emailVerified: true
        }
      });
      await tx.admin.create({
        data: {
          userId: superAdminUser.user.id,
          name: "Super Admin",
          email: envVars.SUPER_ADMIN_EMAIL
        }
      });
    });
    const superAdmin = await prisma.admin.findFirst({
      where: {
        email: envVars.SUPER_ADMIN_EMAIL
      },
      include: {
        user: true
      }
    });
    console.log("Super Admin Created ", superAdmin);
  } catch (error) {
    console.error("Error seeding super admin: ", error);
    await prisma.user.delete({
      where: {
        email: envVars.SUPER_ADMIN_EMAIL
      }
    });
  }
};
var seedDefaultShop = async () => {
  try {
    const existingShop = await prisma.shop.findFirst();
    if (existingShop) {
      console.log("Store already exists. Skipping store seed.");
      return;
    }
    const superAdmin = await prisma.user.findFirst({
      where: { role: Role.SUPER_ADMIN }
    });
    if (!superAdmin) {
      console.log("No super admin found yet. Skipping store seed.");
      return;
    }
    const shop = await prisma.shop.create({
      data: {
        name: "AB Trims",
        vendorId: superAdmin.id
      }
    });
    console.log("Store created ", shop);
  } catch (error) {
    console.error("Error seeding store: ", error);
  }
};

// src/server.ts
var server;
var bootstrap = async () => {
  try {
    await seedSuperAdmin();
    await seedDefaultShop();
    startLogCleanupScheduler();
    server = app_default.listen(envVars.PORT, () => {
      console.log(`Server is running on http://localhost:${envVars.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received. Shutting down server...");
  if (server) {
    server.close(() => {
      console.log("Server closed gracefully.");
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("SIGINT", () => {
  console.log("SIGINT signal received. Shutting down server...");
  if (server) {
    server.close(() => {
      console.log("Server closed gracefully.");
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception Detected... Shutting down server", error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("unhandledRejection", (error) => {
  console.log("Unhandled Rejection Detected... Shutting down server", error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
bootstrap();
