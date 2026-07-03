"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
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
    <div className="group overflow-hidden rounded-[2rem] border border-[#EFCACA] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-3 hover:border-[#C89B3C]/60 hover:shadow-[0_28px_70px_rgba(111,10,18,0.18)]">
      <div className="relative overflow-hidden bg-[#FFF3F3]">
        <Image
          src={image}
          alt={name}
          width={700}
          height={500}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          {badge && (
            <span className="rounded-full bg-[#C1121F] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg">
              {badge}
            </span>
          )}

          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#6F0A12] shadow-lg backdrop-blur">
            {category}
          </span>
        </div>

        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#3A0509]/70">
            <span className="rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#C1121F]">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-7">
        <h2 className="font-serif text-2xl font-bold text-[#6F0A12]">
          {name}
        </h2>

        <p className="mt-4 line-clamp-2 leading-7 text-[#2B2B2B]/70">
          {description}
        </p>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#C89B3C]">
              Starting From
            </p>

            <p className="mt-1 text-2xl font-black text-[#6F0A12]">
              ₹{selectedWeight.price}
            </p>
          </div>

          <p className="rounded-full bg-[#FFE4E4] px-3 py-1 text-xs font-bold text-[#C1121F]">
            {selectedWeight.weight}
          </p>
        </div>

        <div className="mt-7 grid gap-3">
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
            className="flex items-center justify-center gap-2 rounded-full bg-[#C1121F] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_30px_rgba(193,18,31,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#9B0D18] disabled:cursor-not-allowed disabled:bg-zinc-400 disabled:shadow-none"
          >
            <ShoppingBag size={18} />
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>

          <Link
            href={`/products/${slug}`}
            className="flex items-center justify-center gap-2 rounded-full border border-[#EFCACA] px-5 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-[#6F0A12] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C] hover:bg-[#FFE4E4]"
          >
            View Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}