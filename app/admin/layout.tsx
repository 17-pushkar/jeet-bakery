import Link from "next/link";
import { redirect } from "next/navigation";
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
    <div className="min-h-screen bg-zinc-100">
      <aside className="fixed left-0 top-0 hidden h-full w-64 bg-zinc-900 p-6 text-white lg:block">
        <h2 className="text-2xl font-bold">Munna Sweets</h2>
        <p className="mt-1 text-sm text-zinc-400">Admin Panel</p>

        <nav className="mt-10 space-y-3">
          <Link href="/admin" className="block rounded-xl px-4 py-3 hover:bg-zinc-800">
            Dashboard
          </Link>

          <Link href="/admin/products" className="block rounded-xl px-4 py-3 hover:bg-zinc-800">
            Products
          </Link>

          <Link href="/admin/orders" className="block rounded-xl px-4 py-3 hover:bg-zinc-800">
            Orders
          </Link>
        </nav>

        <form action={logoutAdmin} className="absolute bottom-6 left-6 right-6">
          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700"
          >
            Logout
          </button>
        </form>
      </aside>

      <div className="lg:ml-64">{children}</div>
    </div>
  );
}