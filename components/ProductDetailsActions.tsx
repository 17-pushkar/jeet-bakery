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
      <h2 className="text-xl font-bold text-[#4E342E]">Select Option</h2>

      <div className="mt-4 flex flex-wrap gap-3">
        {product.weightOptions.map((option) => (
          <button
            key={option.weight}
            type="button"
            onClick={() => setSelectedWeight(option)}
            className={`rounded-full border px-5 py-2.5 text-sm font-bold uppercase tracking-[0.14em] transition ${
              selectedWeight.weight === option.weight
                ? "border-[#4E342E] bg-[#4E342E] text-white"
                : "border-[#E8D9C8] bg-[#FFF9F3] text-[#4E342E] hover:border-[#C89B3C] hover:bg-[#F6E7D8]"
            }`}
          >
            {option.weight}
          </button>
        ))}
      </div>

      <p className="mt-6 text-3xl font-bold text-[#C89B3C]">
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
          className={`flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] transition ${
            isOutOfStock
              ? "cursor-not-allowed bg-zinc-300 text-zinc-500"
              : "bg-[#4E342E] text-white hover:bg-[#C89B3C]"
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>

        <Link
          href="/products"
          className="rounded-full border border-[#E8D9C8] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#4E342E] transition hover:border-[#C89B3C] hover:bg-[#F6E7D8]"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  );
}