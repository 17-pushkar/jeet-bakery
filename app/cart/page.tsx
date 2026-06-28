"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-24">
      <section className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-zinc-900">Your Cart</h1>
        <p className="mt-3 text-zinc-600">
          Review your selected sweets before checkout.
        </p>

        {cartItems.length === 0 ? (
          <div className="mt-10 text-center">
            <p className="text-zinc-600">Your cart is empty.</p>
            <Link
              href="/products"
              className="mt-5 inline-block rounded-full bg-orange-600 px-6 py-3 font-semibold text-white"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.slug}
                className="flex items-center gap-5 rounded-2xl border border-orange-100 p-4"
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold text-zinc-900">{item.name}</h2>
                  <p className="text-sm text-zinc-500">
  Weight: {item.weight}
</p>
                  <p className="font-semibold text-orange-600">{item.price}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <button
  onClick={() => decreaseQuantity(item.slug, item.weight)}
  className="h-8 w-8 rounded-full border"
>
  -
</button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
  onClick={() => increaseQuantity(item.slug, item.weight)}
  className="h-8 w-8 rounded-full border"
>
  +
</button>
                  </div>
                </div>

                <button
  onClick={() => removeFromCart(item.slug, item.weight)}
  className="text-red-500"
>
  <Trash2 />
</button>
              </div>
            ))}

           <div className="border-t pt-6">
  <div className="flex justify-between text-2xl font-bold">
    <span>Total</span>
    <span>₹{totalPrice}</span>
  </div>

  <Link
    href="/checkout"
    className="mt-6 block rounded-full bg-orange-600 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
  >
    Proceed to Checkout
  </Link>
</div>
          </div>
        )}
      </section>
    </main>
  );
}