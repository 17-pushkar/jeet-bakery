import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteProductButton from "@/components/DeleteProductButton";

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; stock?: string }>;
}) {
  const { search, stock } = await searchParams;

  const products = await prisma.product.findMany({
    where: {
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" as const } },
              { category: { contains: search, mode: "insensitive" as const } },
              { slug: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {}),
      ...(stock === "low"
        ? {
            stock: {
              lte: 10,
            },
          }
        : {}),
    },
    include: {
      weightOptions: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-[#FFF2F2] px-4 py-20 sm:px-6 sm:py-24">
      <section className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#C89B3C]">
              Admin Panel
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold text-[#6F0A12]">
              Products
            </h1>

            <p className="mt-2 text-[#2B2B2B]/65">
              Manage all Jeet Bakery products.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <form action="/admin/products">
              <input
                type="text"
                name="search"
                defaultValue={search ?? ""}
                placeholder="🔍 Search products..."
                className="w-full rounded-xl border border-[#EFCACA] bg-white px-4 py-3 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20 sm:w-72"
              />
            </form>

            {(search || stock) && (
              <Link
                href="/admin/products"
                className="rounded-xl border border-[#EFCACA] bg-white px-4 py-3 text-sm font-bold text-[#6F0A12] hover:bg-[#FFF3F3]"
              >
                Clear
              </Link>
            )}

            <Link
              href="/admin/products?stock=low"
              className={`rounded-xl px-4 py-3 text-sm font-bold ${
                stock === "low"
                  ? "bg-[#C89B3C] text-white"
                  : "border border-[#C89B3C]/40 bg-[#FFF3F3] text-[#6F0A12] hover:bg-[#FFE4E4]"
              }`}
            >
              Low Stock
            </Link>

            <Link
              href="/admin/products/new"
              className="rounded-full bg-[#C1121F] px-6 py-3 font-bold text-white transition hover:bg-[#9B0D18]"
            >
              Add Product
            </Link>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-[#EFCACA] bg-white p-8 text-center shadow-md">
            <p className="text-[#2B2B2B]/65">No products found.</p>
          </div>
        ) : (
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#EFCACA] bg-white shadow-md">
            <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1.5fr] gap-4 border-b border-[#EFCACA] bg-[#FFF3F3] px-6 py-4 text-sm font-black text-[#6F0A12] md:grid">
              <p>Product</p>
              <p>Category</p>
              <p>1kg Price</p>
              <p>Stock</p>
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
                  className="grid gap-5 border-b border-[#EFCACA] p-5 last:border-b-0 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1.5fr] md:items-center md:px-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#FFF3F3]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="font-bold text-[#6F0A12]">
                        {product.name}
                      </h2>
                      <p className="text-sm text-[#2B2B2B]/50">
                        /products/{product.slug}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-[#2B2B2B]/70">
                    {product.category}
                  </p>

                  <p className="text-sm font-black text-[#C1121F]">₹{price}</p>

                  <div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        product.stock === 0
                          ? "bg-red-100 text-red-700"
                          : product.stock <= 10
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {product.stock} in stock
                    </span>
                  </div>

                  <div>
                    {product.badge ? (
                      <span className="rounded-full bg-[#FFE4E4] px-3 py-1 text-xs font-bold text-[#C1121F]">
                        {product.badge}
                      </span>
                    ) : (
                      <span className="text-sm text-zinc-400">No badge</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:justify-end">
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full rounded-full bg-[#FFF3F3] px-4 py-2 text-sm font-bold text-[#6F0A12] hover:bg-[#FFE4E4] sm:w-auto"
                    >
                      View
                    </Link>

                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="w-full rounded-full bg-[#C1121F] px-4 py-2 text-sm font-bold text-white hover:bg-[#9B0D18] sm:w-auto"
                    >
                      Edit
                    </Link>

                    <DeleteProductButton
                      productId={product.id}
                      productName={product.name}
                    />
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