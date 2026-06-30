export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const [
    totalProducts,
    totalOrders,
    totalCustomers,
    revenueData,
    lowStockProducts,
    recentOrders,
    latestProducts,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
    prisma.customer.count(),
    prisma.order.aggregate({
      _sum: {
        totalAmount: true,
      },
    }),
    prisma.product.count({
      where: {
        stock: {
          lte: 10,
        },
      },
    }),
    prisma.order.findMany({
      take: 5,
      include: {
        customer: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.product.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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

          <Link
  href="/admin/products?stock=low"
            className="rounded-3xl bg-yellow-50 p-6 shadow-md transition hover:bg-yellow-100"
          >
            <p className="text-sm font-medium text-yellow-700">
              Low Stock Products
            </p>
            <h2 className="mt-3 text-3xl font-bold text-yellow-800">
              {lowStockProducts}
            </h2>
          </Link>
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
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-zinc-900">
                Recent Orders
              </h2>

              <Link
                href="/admin/orders"
                className="text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                View all
              </Link>
            </div>

            {recentOrders.length === 0 ? (
              <p className="mt-6 rounded-2xl bg-zinc-50 p-5 text-zinc-600">
                No orders yet.
              </p>
            ) : (
              <div className="mt-6 space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4"
                  >
                    <div>
                      <p className="font-semibold text-zinc-900">
                        {order.customer.name}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {order.customer.phone}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-green-700">
                        ₹{order.totalAmount}
                      </p>

                      <p className="mt-1 text-sm font-medium text-orange-600">
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-zinc-900">
              Latest Products
            </h2>

            <Link
              href="/admin/products"
              className="text-sm font-semibold text-orange-600 hover:text-orange-700"
            >
              View all
            </Link>
          </div>

          {latestProducts.length === 0 ? (
            <p className="mt-6 rounded-2xl bg-zinc-50 p-5 text-zinc-600">
              No products added yet.
            </p>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {latestProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50"
                >
                  <div className="relative h-36 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <p className="font-semibold text-zinc-900">
                      {product.name}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      {product.category}
                    </p>

                    <p className="mt-3 text-sm font-medium text-orange-600">
                      {product.featured ? "Featured Product" : "Regular Product"}
                    </p>

                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="mt-4 block rounded-xl bg-orange-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-orange-700"
                    >
                      Edit Product
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}