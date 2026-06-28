export default function AdminOrdersPage() {
  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-24">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-zinc-900">Orders</h1>
        <p className="mt-2 text-zinc-600">
          Customer orders will appear here after we connect the database.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-8 text-center shadow-md">
          <p className="text-zinc-600">No orders yet.</p>
        </div>
      </section>
    </main>
  );
}