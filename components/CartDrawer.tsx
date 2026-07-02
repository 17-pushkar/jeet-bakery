"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm">
      <div className="fixed right-0 top-0 z-[9999] flex h-screen w-full max-w-md flex-col bg-[#FFF9F3] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#E8D9C8] bg-[#4E342E] px-6 py-5 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C89B3C]">
              Jeet Bakery
            </p>

            <h2 className="mt-1 font-serif text-2xl font-bold">Your Cart</h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
            aria-label="Close cart"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-[#E8D9C8] bg-white p-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6E7D8] text-[#4E342E]">
                <ShoppingBag size={30} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold text-[#1F1F1F]">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Add cakes, pastries, fast food, or party supplies to place your
                order.
              </p>

              <Link
                href="/products"
                onClick={onClose}
                className="mt-6 rounded-full bg-[#4E342E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3b2722]"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.slug}-${item.weight}`}
                  className="rounded-3xl border border-[#E8D9C8] bg-white p-4 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#F6E7D8]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#1F1F1F]">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-sm text-zinc-500">
                            {item.weight}
                          </p>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.slug, item.weight)}
                          className="rounded-full p-2 text-red-500 transition hover:bg-red-50"
                          title="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <p className="mt-3 font-bold text-[#4E342E]">
                        ₹{item.price}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center overflow-hidden rounded-full border border-[#E8D9C8] bg-[#FFF9F3]">
                          <button
                            onClick={() =>
                              decreaseQuantity(item.slug, item.weight)
                            }
                            className="flex h-9 w-9 items-center justify-center text-[#4E342E] transition hover:bg-[#F6E7D8]"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="min-w-9 text-center text-sm font-bold text-[#1F1F1F]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.slug, item.weight)
                            }
                            className="flex h-9 w-9 items-center justify-center text-[#4E342E] transition hover:bg-[#F6E7D8]"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <p className="text-sm font-bold text-[#C89B3C]">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-[#E8D9C8] bg-white p-6">
            <div className="flex items-center justify-between text-xl font-bold text-[#1F1F1F]">
              <span>Total</span>
              <span className="text-[#4E342E]">₹{totalPrice}</span>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="mt-5 block w-full rounded-full bg-[#4E342E] py-4 text-center font-semibold text-white transition hover:bg-[#3b2722]"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}