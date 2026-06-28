import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-24">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-zinc-900">Admin Dashboard</h1>
        <p className="mt-3 text-zinc-600">
          Manage products, orders, and customers for Munna Sweets.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link
            href="/admin/products"
            className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-zinc-900">Products</h2>
            <p className="mt-2 text-zinc-600">Add, edit, and delete sweets.</p>
          </Link>

          <Link
            href="/admin/orders"
            className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-zinc-900">Orders</h2>
            <p className="mt-2 text-zinc-600">View customer orders.</p>
          </Link>

          <Link
            href="/admin/customers"
            className="rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold text-zinc-900">Customers</h2>
            <p className="mt-2 text-zinc-600">Manage customer information.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}