import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Check if admin exists
  const existingAdmin = await prisma.user.findUnique({
    where: { email: "aoudiamohand70@gmail.com" }
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("Test123@", 10);
    const admin = await prisma.user.create({
      data: {
        email: "aoudiamohand70@gmail.com",
        name: "Admin User",
        password: hashedPassword,
        role: "ADMIN",
      }
    });
    console.log("✅ Admin created:", admin.email);
  } else {
    console.log("✅ Admin already exists:", existingAdmin.email);
  }

  // List all users
  const users = await prisma.user.findMany();
  console.log("All users:", users.map(u => ({ email: u.email, role: u.role })));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());