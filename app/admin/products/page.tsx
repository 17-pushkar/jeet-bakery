import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteProduct } from "./actions";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      weightOptions: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-24">
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold uppercase tracking-wide text-orange-500">
              Admin Panel
            </p>
            <h1 className="mt-2 text-4xl font-bold text-zinc-900">Products</h1>
            <p className="mt-2 text-zinc-600">Manage all sweets products.</p>
          </div>

          <Link
            href="/admin/products/new"
            className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Add Product
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="mt-8 rounded-3xl bg-white p-8 text-center shadow-md">
            <p className="text-zinc-600">No products found.</p>
          </div>
        ) : (
          <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-md">
            <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-4 border-b bg-orange-50 px-6 py-4 text-sm font-bold text-zinc-700 md:grid">
              <p>Product</p>
              <p>Category</p>
              <p>1kg Price</p>
              <p>Badge</p>
              <p className="text-right">Actions</p>
            </div>

            {products.map((product) => {
              const price =
                product.weightOptions.find((item) => item.weight === "1kg")
                  ?.price ?? 0;

              return (
                <div
                  key={product.id}
                  className="grid gap-4 border-b p-5 last:border-b-0 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] md:items-center md:px-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-orange-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="font-bold text-zinc-900">
                        {product.name}
                      </h2>
                      <p className="text-sm text-zinc-500">
                        /products/{product.slug}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-zinc-700">
                    {product.category}
                  </p>

                  <p className="text-sm font-bold text-orange-600">
                    ₹{price}
                  </p>

                  <div>
                    {product.badge ? (
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                        {product.badge}
                      </span>
                    ) : (
                      <span className="text-sm text-zinc-400">No badge</span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:justify-end">
                    <Link
                      href={`/products/${product.slug}`}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-200"
                    >
                      View
                    </Link>

                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-100"
                    >
                      Edit
                    </Link>

                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />

                      <button
                        type="submit"
                        className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}