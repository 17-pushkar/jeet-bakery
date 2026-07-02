import Link from "next/link";
import { redirect } from "next/navigation";
import { LayoutDashboard, LogOut, Package, ShoppingBag } from "lucide-react";
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
    <div className="min-h-screen bg-[#FFF9F3]">
      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-[#E8D9C8] bg-[#4E342E] p-6 text-white lg:block">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#C89B3C]">
            Jeet Bakery
          </h2>
          <p className="mt-1 text-sm text-[#F6E7D8]/80">
            Admin Panel
          </p>
        </div>

        <nav className="mt-10 space-y-3">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#FFF9F3] transition hover:bg-white/10 hover:text-[#C89B3C]"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            href="/admin/products"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#FFF9F3] transition hover:bg-white/10 hover:text-[#C89B3C]"
          >
            <Package size={18} />
            Products
          </Link>

          <Link
            href="/admin/orders"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#FFF9F3] transition hover:bg-white/10 hover:text-[#C89B3C]"
          >
            <ShoppingBag size={18} />
            Orders
          </Link>
        </nav>

        <form action={logoutAdmin} className="absolute bottom-6 left-6 right-6">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C89B3C] px-4 py-3 font-semibold text-[#4E342E] transition hover:bg-[#d8ad52]"
          >
            <LogOut size={18} />
            Logout
          </button>
        </form>
      </aside>

      <div className="lg:ml-64">{children}</div>
    </div>
  );
}