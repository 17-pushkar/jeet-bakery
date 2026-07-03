import Link from "next/link";
import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  Package,
  ShoppingBag,
} from "lucide-react";
import { getAdminSession } from "@/lib/auth";
import { logoutAdmin } from "./actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin-login");
  }

  return (
    <div className="min-h-screen bg-[#FFF2F2]">
      <aside className="fixed left-0 top-0 hidden h-full w-64 overflow-hidden border-r border-[#EFCACA] bg-[#3A0509] text-white lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_34%)]" />

        <div className="relative flex h-full flex-col p-6">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#C89B3C]">
              Jeet Bakery
            </h2>

            <p className="mt-2 text-sm text-white/70">
              Premium Admin Panel
            </p>
          </div>

          <nav className="mt-12 space-y-3">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold transition hover:bg-white/10 hover:text-[#C89B3C]"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

            <Link
              href="/admin/products"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold transition hover:bg-white/10 hover:text-[#C89B3C]"
            >
              <Package size={20} />
              Products
            </Link>

            <Link
              href="/admin/orders"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold transition hover:bg-white/10 hover:text-[#C89B3C]"
            >
              <ShoppingBag size={20} />
              Orders
            </Link>
          </nav>

          <form action={logoutAdmin} className="mt-auto">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C1121F] px-4 py-3 font-bold text-white shadow-[0_15px_35px_rgba(193,18,31,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#9B0D18]"
            >
              <LogOut size={18} />
              Logout
            </button>
          </form>
        </div>
      </aside>

      <div className="lg:ml-64">{children}</div>
    </div>
  );
}