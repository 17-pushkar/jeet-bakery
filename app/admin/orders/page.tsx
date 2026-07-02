export const dynamic = "force-dynamic";

import { Phone, MapPin, Search, CalendarDays } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { updateOrderStatus } from "./actions";

const statuses = ["Pending", "Preparing", "Ready", "Delivered"];

function getStatusClass(status: string) {
  if (status === "Pending") return "bg-yellow-100 text-yellow-800";
  if (status === "Preparing") return "bg-blue-100 text-blue-800";
  if (status === "Ready") return "bg-purple-100 text-purple-800";
  if (status === "Delivered") return "bg-green-100 text-green-800";
  return "bg-zinc-100 text-zinc-700";
}

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;

  const orders = await prisma.order.findMany({
    where: search
      ? {
          customer: {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { phone: { contains: search, mode: "insensitive" } },
              { address: { contains: search, mode: "insensitive" } },
            ],
          },
        }
      : undefined,
    include: {
      customer: true,
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#FFF9F3] px-4 py-10 sm:px-6">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[#E8D9C8] bg-[#4E342E] p-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Jeet Bakery Admin
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold">Orders</h1>

          <p className="mt-3 text-[#F6E7D8]">
            View customer details, ordered items, payment totals, and update
            order status.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <form action="/admin/orders" className="relative w-full sm:max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4E342E]"
            />

            <input
              type="text"
              name="search"
              defaultValue={search ?? ""}
              placeholder="Search by name, phone, or address..."
              className="w-full rounded-xl border border-[#E8D9C8] bg-white px-11 py-3 text-sm outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#F6E7D8]"
            />
          </form>

          {search && (
            <a
              href="/admin/orders"
              className="rounded-xl border border-[#E8D9C8] bg-white px-5 py-3 text-center text-sm font-semibold text-[#4E342E] hover:bg-[#F6E7D8]"
            >
              Clear Search
            </a>
          )}
        </div>

        {orders.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-[#E8D9C8] bg-white p-8 text-center shadow-sm">
            <p className="text-zinc-600">No orders found.</p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-3xl border border-[#E8D9C8] bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-col gap-5 border-b border-[#E8D9C8] pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#1F1F1F]">
                      {order.customer.name}
                    </h2>

                    <p className="mt-3 flex items-center gap-2 break-words text-zinc-600">
                      <Phone size={17} className="text-[#C89B3C]" />
                      {order.customer.phone}
                    </p>

                    <p className="mt-2 flex items-start gap-2 break-words text-zinc-600">
                      <MapPin size={17} className="mt-1 text-[#C89B3C]" />
                      {order.customer.address}
                    </p>

                    <p className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                      <CalendarDays size={16} className="text-[#C89B3C]" />
                      {new Date(order.createdAt).toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span
                      className={`inline-block rounded-full px-4 py-2 text-sm font-bold ${getStatusClass(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>

                    <p className="mt-4 text-3xl font-bold text-[#4E342E]">
                      ₹{order.totalAmount}
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="font-serif text-xl font-bold text-[#1F1F1F]">
                    Ordered Items
                  </h3>

                  <div className="mt-3 space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-2 rounded-2xl border border-[#E8D9C8] bg-[#FFF9F3] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="font-semibold text-[#1F1F1F]">
                            {item.product.name}
                          </p>

                          <p className="text-sm text-zinc-600">
                            {item.weight} × {item.quantity}
                          </p>
                        </div>

                        <p className="font-bold text-[#4E342E]">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <form
                  action={updateOrderStatus}
                  className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <input type="hidden" name="orderId" value={order.id} />

                  <select
                    name="status"
                    defaultValue={order.status}
                    className="w-full rounded-xl border border-[#E8D9C8] bg-white px-4 py-3 text-sm font-medium text-[#1F1F1F] outline-none focus:border-[#C89B3C] sm:w-auto"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#4E342E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#3b2722] sm:w-auto"
                  >
                    Update Status
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}