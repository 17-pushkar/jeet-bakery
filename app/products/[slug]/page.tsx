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
      <main className="min-h-screen bg-[#FFF2F2] px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#6F0A12]">
          Product not found
        </h1>

        <Link
          href="/products"
          className="mt-6 inline-block rounded-full bg-[#C1121F] px-7 py-3 font-bold text-white transition hover:bg-[#9B0D18]"
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
    <main className="min-h-screen bg-[#FFF2F2] text-[#2B2B2B]">
      <section className="relative overflow-hidden bg-[#3A0509] px-6 py-20 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.35),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_36%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/products"
            className="text-sm font-black uppercase tracking-[0.18em] text-[#C89B3C] transition hover:text-[#E8C978]"
          >
            ← Back to Products
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-[#C1121F]/25 to-[#C89B3C]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[3rem] border border-[#C89B3C]/25 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={900}
                  height={900}
                  priority
                  className="h-[430px] w-full rounded-[2.5rem] object-cover md:h-[620px]"
                />

                {product.badge && (
                  <span className="absolute left-7 top-7 rounded-full bg-[#C1121F] px-5 py-2 text-xs font-black uppercase tracking-[0.15em] text-white shadow-lg">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
                Jeet Bakery Special
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight text-white md:text-7xl">
                {product.name}
              </h1>

              <div className="mt-5 flex items-center gap-3 text-[#E8C978]">
                <span>★★★★★</span>
                <span className="text-sm font-medium text-white/65">
                  4.9 Customer Rating
                </span>
              </div>

              <p className="mt-6 text-3xl font-black text-[#E8C978]">
                Starting from {displayPrice}
              </p>

              <p className="mt-6 text-lg leading-8 text-white/75">
                {product.description}
              </p>

              <div className="mt-8 rounded-[2rem] border border-[#C89B3C]/20 bg-white/[0.08] p-6 shadow-xl backdrop-blur">
                <h2 className="text-xl font-bold text-white">
                  Product Details
                </h2>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C89B3C]">
                      Category
                    </p>

                    <p className="mt-2 font-bold text-white">
                      {product.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#C89B3C]">
                      Stock
                    </p>

                    <p className="mt-2 font-bold text-white">
                      {product.stock > 0
                        ? `${product.stock} available`
                        : "Out of stock"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <h2 className="text-xl font-bold text-white">Ingredients</h2>

                <div className="mt-4 flex flex-wrap gap-3">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="rounded-full border border-[#C89B3C]/25 bg-white/[0.08] px-4 py-2 text-sm font-bold text-white/85"
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
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="relative overflow-hidden px-6 py-24 md:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.10),transparent_34%)]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
                You may also like
              </p>

              <h2 className="mt-5 text-4xl font-bold text-[#6F0A12] md:text-6xl">
                Related Products
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => {
                const itemPrice = `₹${item.weightOptions[0]?.price ?? 0}`;

                return (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="group overflow-hidden rounded-[2rem] border border-[#EFCACA] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-3 hover:border-[#C89B3C]/60 hover:shadow-[0_28px_70px_rgba(111,10,18,0.18)]"
                  >
                    <div className="relative h-72 overflow-hidden bg-[#FFF3F3]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-7">
                      <h3 className="font-serif text-2xl font-bold text-[#6F0A12]">
                        {item.name}
                      </h3>

                      <p className="mt-3 font-black text-[#C89B3C]">
                        Starting from {itemPrice}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}