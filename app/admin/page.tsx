export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  IndianRupee,
  Package,
  Plus,
  ShoppingBag,
  Users,
} from "lucide-react";
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

  const stats = [
    {
      label: "Total Products",
      value: totalProducts,
      icon: Package,
    },
    {
      label: "Total Orders",
      value: totalOrders,
      icon: ShoppingBag,
    },
    {
      label: "Customers",
      value: totalCustomers,
      icon: Users,
    },
    {
      label: "Total Revenue",
      value: `₹${totalRevenue}`,
      icon: IndianRupee,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF2F2] px-6 py-10 lg:py-12">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[#C89B3C]/40 bg-[#3A0509] p-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Jeet Bakery Admin
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-[#FFE4E4]">
            Manage products, orders, customers, and bakery operations from one
            premium dashboard.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-[#EFCACA] bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE4E4] text-[#C1121F]">
                  <Icon size={22} />
                </div>

                <p className="mt-5 text-sm font-medium text-zinc-500">
                  {item.label}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#6F0A12]">
                  {item.value}
                </h2>
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <Link
            href="/admin/products?stock=low"
            className="flex items-center justify-between gap-4 rounded-3xl border border-[#C89B3C]/50 bg-[#FFF3F3] p-6 transition hover:bg-[#FFE4E4]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
                Stock Alert
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#6F0A12]">
                {lowStockProducts} Low Stock Products
              </h2>
            </div>

            <AlertTriangle className="text-[#C89B3C]" size={34} />
          </Link>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-[#EFCACA] bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#6F0A12]">
              Quick Actions
            </h2>

            <div className="mt-6 grid gap-4">
              <Link
                href="/admin/products/new"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#C1121F] px-5 py-3 font-semibold text-white transition hover:bg-[#9B0D18]"
              >
                <Plus size={18} />
                Add Product
              </Link>

              <Link
                href="/admin/products"
                className="rounded-xl border border-[#C89B3C] px-5 py-3 text-center font-semibold text-[#6F0A12] transition hover:bg-[#FFF3F3]"
              >
                View Products
              </Link>

              <Link
                href="/admin/orders"
                className="rounded-xl border border-[#C89B3C] px-5 py-3 text-center font-semibold text-[#6F0A12] transition hover:bg-[#FFF3F3]"
              >
                View Orders
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[#EFCACA] bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif text-2xl font-bold text-[#6F0A12]">
                Recent Orders
              </h2>

              <Link
                href="/admin/orders"
                className="text-sm font-semibold text-[#C1121F] hover:text-[#9B0D18]"
              >
                View all
              </Link>
            </div>

            {recentOrders.length === 0 ? (
              <p className="mt-6 rounded-2xl bg-[#FFF3F3] p-5 text-zinc-600">
                No orders yet.
              </p>
            ) : (
              <div className="mt-6 space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#EFCACA] bg-[#FFF3F3] p-4"
                  >
                    <div>
                      <p className="font-semibold text-[#2B2B2B]">
                        {order.customer.name}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {order.customer.phone}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-[#C1121F]">
                        ₹{order.totalAmount}
                      </p>

                      <p className="mt-1 text-sm font-medium text-[#C89B3C]">
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-[#EFCACA] bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-serif text-2xl font-bold text-[#6F0A12]">
              Latest Products
            </h2>

            <Link
              href="/admin/products"
              className="text-sm font-semibold text-[#C1121F] hover:text-[#9B0D18]"
            >
              View all
            </Link>
          </div>

          {latestProducts.length === 0 ? (
            <p className="mt-6 rounded-2xl bg-[#FFF3F3] p-5 text-zinc-600">
              No products added yet.
            </p>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {latestProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-2xl border border-[#EFCACA] bg-[#FFF3F3]"
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
                    <p className="font-semibold text-[#2B2B2B]">
                      {product.name}
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      {product.category}
                    </p>

                    <p className="mt-3 text-sm font-medium text-[#C89B3C]">
                      {product.featured ? "Featured Product" : "Regular Product"}
                    </p>

                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="mt-4 block rounded-xl bg-[#C1121F] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#9B0D18]"
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