"use client";

import Image from "next/image";
import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

type WeightOption = {
  weight: string;
  price: number;
};

type ProductQuickViewModalProps = {
  name: string;
  slug: string;
  price: string;
  image: string;
  description: string;
  category: string;
  ingredients: string[];
  stock: number;
  weightOptions: WeightOption[];
  onClose: () => void;
};

export default function ProductQuickViewModal({
  name,
  slug,
  image,
  description,
  category,
  ingredients,
  stock,
  weightOptions,
  onClose,
}: ProductQuickViewModalProps) {
  const [selectedWeight, setSelectedWeight] = useState(
    weightOptions[0] ?? { weight: "Default", price: 0 }
  );

  const { addToCart } = useCart();
  const isOutOfStock = stock <= 0;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl rounded-[2.5rem] border border-[#E8D9C8] bg-[#FFF9F3] p-5 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 rounded-full bg-white p-3 text-[#4E342E] shadow-md transition hover:bg-[#F6E7D8]"
        >
          <X size={20} />
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-[#F6E7D8]">
  <Image
    src={image}
    alt={name}
    width={700}
    height={700}
    className="h-80 w-full object-cover md:h-[500px]"
  />

            {isOutOfStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/55">
                <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-red-600">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center p-2 md:p-4">
            <span className="w-fit rounded-full bg-[#F6E7D8] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4E342E]">
              {category}
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#4E342E]">{name}</h2>

            <p className="mt-4 text-3xl font-bold text-[#C89B3C]">
              ₹{selectedWeight.price}
            </p>

            <p className="mt-4 leading-8 text-[#1F1F1F]/70">{description}</p>

            <div className="mt-6">
              <h3 className="font-bold text-[#4E342E]">Select Option</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {weightOptions.map((option) => (
                  <button
                    key={option.weight}
                    type="button"
                    onClick={() => setSelectedWeight(option)}
                    className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                      selectedWeight.weight === option.weight
                        ? "border-[#4E342E] bg-[#4E342E] text-white"
                        : "border-[#E8D9C8] bg-white text-[#4E342E] hover:border-[#C89B3C]"
                    }`}
                  >
                    {option.weight}
                  </button>
                ))}
              </div>
            </div>

            <h3 className="mt-6 font-bold text-[#4E342E]">Ingredients</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full border border-[#E8D9C8] bg-white px-3 py-1.5 text-sm font-medium text-[#4E342E]"
                >
                  {ingredient}
                </span>
              ))}
            </div>

            <button
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

                toast.success(`${name} ${selectedWeight.weight} added to cart!`);
              }}
              className={`mt-8 flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] transition ${
                isOutOfStock
                  ? "cursor-not-allowed bg-zinc-300 text-zinc-500"
                  : "bg-[#4E342E] text-white hover:bg-[#C89B3C]"
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}