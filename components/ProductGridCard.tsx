"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductQuickViewModal from "./ProductQuickViewModal";

type ProductGridCardProps = {
  name: string;
  slug: string;
  price: string;
  image: string;
  description: string;
  category: string;
  ingredients: string[];
  badge?: string;
};

export default function ProductGridCard({
  name,
  slug,
  price,
  image,
  description,
  category,
  ingredients,
  badge,
}: ProductGridCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:shadow-xl">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {badge && (
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
              {badge}
            </span>
          )}

          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-600">
            {category}
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-bold text-zinc-900">{name}</h2>

        <p className="mt-2 text-zinc-600">{description}</p>

        <p className="mt-4 text-xl font-bold text-orange-600">{price}</p>

        <div className="mt-5 flex gap-3">
          <Link
            href={`/products/${slug}`}
            className="rounded-full bg-orange-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            View Details
          </Link>

          <button
            type="button"
            onClick={() => setIsQuickViewOpen(true)}
            className="rounded-full border border-orange-300 px-5 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100"
          >
            Quick View
          </button>
        </div>
      </div>
          {isQuickViewOpen && (
        <ProductQuickViewModal
          name={name}
          price={price}
          image={image}
          description={description}
          category={category}
          ingredients={ingredients}
          onClose={() => setIsQuickViewOpen(false)}
        />
      )}
    </div>
  );
}