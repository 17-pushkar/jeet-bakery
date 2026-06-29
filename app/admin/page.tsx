export const dynamic = "force-dynamic";

import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const [totalProducts, totalOrders, totalCustomers, revenueData] =
    await Promise.all([
      prisma.product.count(),
      prisma.order.count(),
      prisma.customer.count(),
      prisma.order.aggregate({
        _sum: {
          totalAmount: true,
        },
      }),
    ]);

  const totalRevenue = revenueData._sum.totalAmount || 0;

  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-24">
      <section className="mx-auto max-w-6xl">
        <div>
          <h1 className="text-4xl font-bold text-zinc-900">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-zinc-600">
            Manage products, orders, and customers for Munna Sweets.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <p className="text-sm font-medium text-zinc-500">Total Products</p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              {totalProducts}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <p className="text-sm font-medium text-zinc-500">Total Orders</p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              {totalOrders}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <p className="text-sm font-medium text-zinc-500">Customers</p>
            <h2 className="mt-3 text-3xl font-bold text-zinc-900">
              {totalCustomers}
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <p className="text-sm font-medium text-zinc-500">Total Revenue</p>
            <h2 className="mt-3 text-3xl font-bold text-green-700">
              ₹{totalRevenue}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-zinc-900">
              Quick Actions
            </h2>

            <div className="mt-6 grid gap-4">
              <Link
                href="/admin/products/new"
                className="rounded-xl bg-orange-600 px-5 py-3 text-center font-semibold text-white hover:bg-orange-700"
              >
                ➕ Add Product
              </Link>

              <Link
                href="/admin/products"
                className="rounded-xl border border-orange-200 px-5 py-3 text-center font-semibold text-orange-600 hover:bg-orange-50"
              >
                🍬 View Products
              </Link>

              <Link
                href="/admin/orders"
                className="rounded-xl border border-orange-200 px-5 py-3 text-center font-semibold text-orange-600 hover:bg-orange-50"
              >
                📦 View Orders
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md lg:col-span-2">
            <h2 className="text-2xl font-bold text-zinc-900">
              Welcome Back 👋
            </h2>

            <p className="mt-4 text-zinc-600">
              Manage products, monitor orders, and keep your Munna Sweets store
              updated from one place.
            </p>

            <div className="mt-6 rounded-2xl bg-orange-50 p-5">
              <p className="text-sm text-orange-700">Tip:</p>

              <p className="mt-2 text-zinc-700">
                Add new sweets regularly and keep product prices updated so
                customers always see the latest catalogue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}