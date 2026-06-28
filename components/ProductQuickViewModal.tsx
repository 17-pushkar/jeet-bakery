"use client";

import Image from "next/image";

type ProductQuickViewModalProps = {
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
  ingredients: string[];
  onClose: () => void;
};

export default function ProductQuickViewModal({
  name,
  price,
  image,
  description,
  category,
  ingredients,
  onClose,
}: ProductQuickViewModalProps) {
  return (
    <div
  onClick={onClose}
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
>
      <div
  onClick={(e) => e.stopPropagation()}
  className="relative w-full max-w-4xl rounded-3xl bg-white p-6 shadow-2xl"
>
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-2xl font-bold text-zinc-500 hover:text-zinc-900"
        >
          ×
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-2xl md:h-96">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          <div>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-600">
              {category}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-zinc-900">{name}</h2>

            <p className="mt-3 text-2xl font-bold text-orange-600">{price}</p>

            <p className="mt-4 text-zinc-600">{description}</p>

            <h3 className="mt-6 font-semibold text-zinc-900">Ingredients</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700"
                >
                  {ingredient}
                </span>
              ))}
            </div>

            <a
              href={`https://wa.me/919999999999?text=I want to order ${name}`}
              target="_blank"
              className="mt-8 inline-block rounded-full bg-orange-600 px-7 py-3 font-semibold text-white transition hover:bg-orange-700"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}