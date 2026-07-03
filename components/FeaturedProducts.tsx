import ProductCard from "./ProductCard";
import { prisma } from "@/lib/prisma";

export default async function FeaturedProducts() {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
    include: {
      weightOptions: true,
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 3,
  });

  const formattedProducts = products.map((product) => ({
    ...product,
    badge: product.badge ?? undefined,
    price: `₹${
      product.weightOptions.find((option) => option.weight === "1kg")?.price ??
      0
    }/kg`,
  }));

  return (
    <section
      id="featured-cakes"
      className="relative overflow-hidden bg-[#FFF2F2] px-6 py-24 md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.12),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
              Featured Cakes
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#6F0A12] md:text-6xl">
              Signature Cakes for Every Celebration
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#2B2B2B]/70">
              Explore our premium featured items selected for birthdays,
              parties, family moments, and sweet celebrations.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {formattedProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}