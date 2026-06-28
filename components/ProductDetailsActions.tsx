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
    weightOptions: WeightOption[];
  };
};

export default function ProductDetailsActions({
  product,
}: ProductDetailsActionsProps) {
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[2]);
  const { addToCart } = useCart();

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-zinc-900">Select Weight</h2>

      <div className="mt-3 flex flex-wrap gap-3">
        {product.weightOptions.map((option) => (
          <button
            key={option.weight}
            type="button"
            onClick={() => setSelectedWeight(option)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              selectedWeight.weight === option.weight
                ? "border-orange-600 bg-orange-600 text-white"
                : "border-orange-200 text-zinc-700 hover:bg-orange-50"
            }`}
          >
            {option.weight}
          </button>
        ))}
      </div>

      <p className="mt-5 text-2xl font-bold text-orange-600">
        ₹{selectedWeight.price}
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={() => {
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
          className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
        >
          <ShoppingBag className="h-5 w-5" />
          Add to Cart
        </button>

        <Link
          href="/products"
          className="rounded-full border border-orange-300 px-8 py-4 text-center font-semibold text-orange-600 transition hover:bg-orange-100"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}