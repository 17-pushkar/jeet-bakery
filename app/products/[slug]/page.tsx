import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import ProductDetailsActions from "@/components/ProductDetailsActions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Jeet Bakery`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      weightOptions: true,
    },
  });

  if (!product) {
    return (
      <main className="min-h-screen bg-[#FFF9F3] px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#4E342E]">
          Product not found
        </h1>

        <Link
          href="/products"
          className="mt-6 inline-block rounded-full bg-[#4E342E] px-7 py-3 font-semibold text-white transition hover:bg-[#C89B3C]"
        >
          Go back to products
        </Link>
      </main>
    );
  }

  const relatedProducts = await prisma.product.findMany({
    where: {
      slug: {
        not: slug,
      },
      category: product.category,
    },
    include: {
      weightOptions: true,
    },
    take: 3,
  });

  const displayPrice = `₹${product.weightOptions[0]?.price ?? 0}`;

  return (
    <main className="min-h-screen bg-[#FFF9F3] px-6 py-24 text-[#1F1F1F] md:px-8">
      <section className="mx-auto grid max-w-7xl gap-12 rounded-[2.5rem] border border-[#E8D9C8] bg-white p-5 shadow-xl lg:grid-cols-2 lg:p-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#F6E7D8]">
          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            priority
            className="h-[420px] w-full object-cover md:h-[620px]"
          />

          {product.badge && (
            <span className="absolute left-5 top-5 rounded-full bg-[#C89B3C] px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-md">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Jeet Bakery Special
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-[#4E342E]">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-[#C89B3C]">
            <span>★★★★★</span>
            <span className="text-sm font-medium text-[#1F1F1F]/55">
              4.9 Customer Rating
            </span>
          </div>

          <p className="mt-5 text-3xl font-bold text-[#C89B3C]">
            Starting from {displayPrice}
          </p>

          <p className="mt-5 text-lg leading-8 text-[#1F1F1F]/70">
            {product.description}
          </p>

          <div className="mt-6 rounded-[2rem] border border-[#E8D9C8] bg-[#FFF9F3] p-6">
            <h2 className="text-xl font-bold text-[#4E342E]">
              Product Details
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">
                  Category
                </p>
                <p className="mt-1 font-semibold text-[#4E342E]">
                  {product.category}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">
                  Stock
                </p>
                <p className="mt-1 font-semibold text-[#4E342E]">
                  {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-[#4E342E]">Ingredients</h2>

            <div className="mt-3 flex flex-wrap gap-3">
              {product.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full border border-[#E8D9C8] bg-[#F6E7D8] px-4 py-2 text-sm font-semibold text-[#4E342E]"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <ProductDetailsActions
            product={{
              name: product.name,
              slug: product.slug,
              image: product.image,
              stock: product.stock,
              weightOptions: product.weightOptions,
            }}
          />
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mx-auto mt-16 max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
              You may also like
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#4E342E]">
              Related Products
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => {
              const itemPrice = `₹${item.weightOptions[0]?.price ?? 0}`;

              return (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group overflow-hidden rounded-[2rem] border border-[#E8D9C8] bg-white shadow-sm transition hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-xl"
                >
                  <div className="relative h-60 overflow-hidden bg-[#F6E7D8]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#4E342E]">
                      {item.name}
                    </h3>

                    <p className="mt-2 font-bold text-[#C89B3C]">
                      Starting from {itemPrice}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}