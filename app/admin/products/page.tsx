import Link from "next/link";
import { products } from "@/lib/products";

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-24">
      <section className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">Products</h1>
            <p className="mt-2 text-zinc-600">Manage all sweets products.</p>
          </div>

          <button className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white">
            Add Product
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-md">
          {products.map((product) => (
            <div
              key={product.slug}
              className="flex items-center justify-between border-b p-5 last:border-b-0"
            >
              <div>
                <h2 className="text-xl font-bold text-zinc-900">
                  {product.name}
                </h2>
                <p className="text-zinc-600">{product.price}</p>
              </div>

              <Link
                href={`/products/${product.slug}`}
                className="text-sm font-semibold text-orange-600"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
