"use server";

import { deleteAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function logoutAdmin() {
  await deleteAdminSession();
  redirect("/admin-login");
}