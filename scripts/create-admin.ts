import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";

async function main() {
  const email = "admin@munnasweets.com";
  const password = "admin123";

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.adminUser.upsert({
    where: {
      email,
    },
    update: {
      password: hashedPassword,
    },
    create: {
      name: "Munna Sweets Admin",
      email,
      password: hashedPassword,
    },
  });

  console.log("Admin user created successfully");
  console.log("Email:", email);
  console.log("Password:", password);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });