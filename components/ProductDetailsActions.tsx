"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

type WeightOption = {
  weight: string;
  price: number;
};

type ProductDetailsActionsProps = {
  product: {
    name: string;
    slug: string;
    image: string;
    stock: number;
    weightOptions: WeightOption[];
  };
};

export default function ProductDetailsActions({
  product,
}: ProductDetailsActionsProps) {
  const [selectedWeight, setSelectedWeight] = useState(
    product.weightOptions[0] ?? { weight: "Default", price: 0 }
  );

  const { addToCart } = useCart();
  const isOutOfStock = product.stock <= 0;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-white">Select Option</h2>

      <div className="mt-4 flex flex-wrap gap-3">
        {product.weightOptions.map((option) => (
          <button
            key={option.weight}
            type="button"
            onClick={() => setSelectedWeight(option)}
            className={`rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-[0.14em] transition ${
              selectedWeight.weight === option.weight
                ? "border-[#C1121F] bg-[#C1121F] text-white shadow-[0_12px_28px_rgba(193,18,31,0.35)]"
                : "border-[#C89B3C]/25 bg-white/[0.08] text-white hover:border-[#C89B3C] hover:bg-white/[0.12]"
            }`}
          >
            {option.weight}
          </button>
        ))}
      </div>

      <p className="mt-6 text-3xl font-black text-[#E8C978]">
        ₹{selectedWeight.price}
      </p>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row">
        <button
          disabled={isOutOfStock}
          onClick={() => {
            if (isOutOfStock) return;

            addToCart({
              name: product.name,
              slug: product.slug,
              price: selectedWeight.price,
              weight: selectedWeight.weight,
              image: product.image,
              quantity: 1,
            });

            toast.success(
              `${product.name} ${selectedWeight.weight} added to cart!`
            );
          }}
          className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-black uppercase tracking-[0.18em] transition duration-300 ${
            isOutOfStock
              ? "cursor-not-allowed bg-zinc-500 text-zinc-300"
              : "bg-[#C1121F] text-white shadow-[0_18px_35px_rgba(193,18,31,0.35)] hover:-translate-y-1 hover:bg-[#9B0D18]"
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>

        <Link
          href="/products"
          className="rounded-full border border-[#C89B3C]/35 bg-white/[0.08] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#E8C978] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.12]"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  );
}