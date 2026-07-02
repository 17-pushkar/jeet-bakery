"use client";

import { useState } from "react";
import ProductGridCard from "@/components/ProductGridCard";

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
        return (a.weightOptions[0]?.price ?? 0) - (b.weightOptions[0]?.price ?? 0);
      }

      if (sortBy === "price-high") {
        return (b.weightOptions[0]?.price ?? 0) - (a.weightOptions[0]?.price ?? 0);
      }

      return 0;
    });

  return (
    <main className="min-h-screen bg-[#FFF9F3] px-6 py-24 text-[#1F1F1F] md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Our Bakery Menu
          </p>

          <h1 className="mt-4 text-5xl font-bold text-[#4E342E] md:text-6xl">
            Cakes, Fast Food & Party Essentials
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#1F1F1F]/70">
            Explore fresh cakes, pastries, pizzas, burgers, chocolates and
            birthday celebration items from Jeet Bakery.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-[1fr_220px]">
          <input
            type="text"
            placeholder="Search cakes, pizza, chocolates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full border border-[#E8D9C8] bg-white px-6 py-4 text-[#1F1F1F] shadow-sm outline-none transition placeholder:text-[#1F1F1F]/45 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-full border border-[#E8D9C8] bg-white px-6 py-4 text-[#4E342E] shadow-sm outline-none transition focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
          >
            <option value="default">Sort: Default</option>
            <option value="name">Name A-Z</option>
            <option value="price-low">Price Low to High</option>
            <option value="price-high">Price High to Low</option>
          </select>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-[0.14em] transition ${
                selectedCategory === category
                  ? "border-[#4E342E] bg-[#4E342E] text-white shadow-md"
                  : "border-[#E8D9C8] bg-white text-[#4E342E] hover:border-[#C89B3C] hover:bg-[#F6E7D8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-14 rounded-[2rem] border border-[#E8D9C8] bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-[#4E342E]">
              No products found
            </h2>
            <p className="mt-3 text-[#1F1F1F]/65">
              Try searching another product or category.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </main>
  );
}