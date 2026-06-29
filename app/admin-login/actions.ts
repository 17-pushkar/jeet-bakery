"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createAdminSession } from "@/lib/auth";

export async function loginAdmin(formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const admin = await prisma.adminUser.findUnique({
    where: {
      email,
    },
  });

  if (!admin) {
    throw new Error("Invalid email or password");
  }

  const isPasswordCorrect = await bcrypt.compare(password, admin.password);

  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  await createAdminSession(admin.id);

  redirect("/admin");
}
