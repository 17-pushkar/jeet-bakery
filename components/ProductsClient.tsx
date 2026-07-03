"use client";

import { useState } from "react";
import ProductGridCard from "@/components/ProductGridCard";
import { Search, SlidersHorizontal } from "lucide-react";

type Product = {
  name: string;
  slug: string;
  price: string;
  stock: number;
  image: string;
  description: string;
  category: string;
  ingredients: string[];
  badge?: string | null;
  weightOptions: {
    weight: string;
    price: number;
  }[];
};

export default function ProductsClient({ products }: { products: Product[] }) {
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);

      if (sortBy === "price-low") {
        return (
          (a.weightOptions[0]?.price ?? 0) -
          (b.weightOptions[0]?.price ?? 0)
        );
      }

      if (sortBy === "price-high") {
        return (
          (b.weightOptions[0]?.price ?? 0) -
          (a.weightOptions[0]?.price ?? 0)
        );
      }

      return 0;
    });

  return (
    <main className="min-h-screen bg-[#FFF2F2] text-[#2B2B2B]">
      <section className="relative overflow-hidden bg-[#3A0509] px-6 py-24 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.35),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_36%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            Jeet Bakery Menu
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
            Explore Cakes, Fast Food & Birthday Specials
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Browse fresh cakes, pastries, fast food, chocolates and birthday
            celebration essentials from Jeet Bakery.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-24 md:px-8">
        <div className="mx-auto -mt-12 max-w-7xl">
          <div className="rounded-[2.5rem] border border-[#EFCACA] bg-white p-5 shadow-[0_25px_70px_rgba(111,10,18,0.14)]">
            <div className="grid gap-4 md:grid-cols-[1fr_260px]">
              <div className="relative">
                <Search
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C1121F]"
                  size={22}
                />

                <input
                  type="text"
                  placeholder="Search cakes, pizza, chocolates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-[#EFCACA] bg-[#FFF7F7] px-14 py-4 text-[#2B2B2B] outline-none transition placeholder:text-[#2B2B2B]/45 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
                />
              </div>

              <div className="relative">
                <SlidersHorizontal
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C1121F]"
                  size={22}
                />

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none rounded-full border border-[#EFCACA] bg-[#FFF7F7] px-14 py-4 text-[#6F0A12] outline-none transition focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
                >
                  <option value="default">Sort: Default</option>
                  <option value="name">Name A-Z</option>
                  <option value="price-low">Price Low to High</option>
                  <option value="price-high">Price High to Low</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-[0.14em] transition ${
                    selectedCategory === category
                      ? "border-[#C1121F] bg-[#C1121F] text-white shadow-[0_12px_28px_rgba(193,18,31,0.28)]"
                      : "border-[#EFCACA] bg-white text-[#6F0A12] hover:border-[#C89B3C] hover:bg-[#FFE4E4]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C89B3C]">
                Product Catalogue
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#6F0A12] md:text-5xl">
                Available Items
              </h2>
            </div>

            <p className="hidden rounded-full border border-[#EFCACA] bg-white px-5 py-3 text-sm font-bold text-[#6F0A12] shadow-sm md:block">
              {filteredProducts.length} items found
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-[#EFCACA] bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#6F0A12]">
                No products found
              </h2>

              <p className="mt-3 text-[#2B2B2B]/65">
                Try searching another product or category.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductGridCard
                  key={product.slug}
                  name={product.name}
                  slug={product.slug}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  category={product.category}
                  ingredients={product.ingredients}
                  badge={product.badge ?? undefined}
                  stock={product.stock}
                  weightOptions={product.weightOptions}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}