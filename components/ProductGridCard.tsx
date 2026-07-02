"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

type WeightOption = {
  weight: string;
  price: number;
};

type ProductGridCardProps = {
  name: string;
  slug: string;
  price: string;
  image: string;
  description: string;
  category: string;
  ingredients: string[];
  badge?: string;
  stock: number;
  weightOptions: WeightOption[];
};

export default function ProductGridCard({
  name,
  slug,
  image,
  description,
  category,
  badge,
  stock,
  weightOptions,
}: ProductGridCardProps) {
  const { addToCart } = useCart();
  const selectedWeight = weightOptions[0] ?? { weight: "Default", price: 0 };
  const isOutOfStock = stock <= 0;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#E8D9C8] bg-white shadow-sm">
      <img src={image} alt={name} className="h-72 w-full object-cover" />

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {badge && (
            <span className="rounded-full bg-[#C89B3C] px-3 py-1 text-xs font-bold text-white">
              {badge}
            </span>
          )}
          <span className="rounded-full bg-[#F6E7D8] px-3 py-1 text-xs font-bold text-[#4E342E]">
            {category}
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-bold text-[#4E342E]">{name}</h2>

        <p className="mt-3 line-clamp-2 text-[#1F1F1F]/70">{description}</p>

        <p className="mt-4 text-2xl font-bold text-[#C89B3C]">
          ₹{selectedWeight.price}
        </p>

        <div className="mt-6 grid gap-3">
          <button
            type="button"
            disabled={isOutOfStock}
            onClick={() => {
              if (isOutOfStock) return;

              addToCart({
                name,
                slug,
                price: selectedWeight.price,
                weight: selectedWeight.weight,
                image,
                quantity: 1,
              });

              toast.success(`${name} added to cart!`);
            }}
            className="rounded-full bg-[#4E342E] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white"
          >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>

          <Link
            href={`/products/${slug}`}
            className="rounded-full border border-[#E8D9C8] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#4E342E]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}