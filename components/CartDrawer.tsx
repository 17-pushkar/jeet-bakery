"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm">
      <div className="fixed right-0 top-0 z-[9999] flex h-screen w-full max-w-md flex-col overflow-hidden bg-[#FFF2F2] shadow-2xl">

        {/* Header */}
        <div className="relative overflow-hidden bg-[#3A0509] px-6 py-6 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_34%)]" />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C89B3C]">
                Jeet Bakery
              </p>

              <h2 className="mt-1 font-serif text-3xl font-bold">
                Your Cart
              </h2>
            </div>

            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#EFCACA] bg-white p-8 text-center shadow-sm">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFE4E4] text-[#C1121F]">
                <ShoppingBag size={30} />
              </div>

              <h3 className="mt-5 font-serif text-3xl font-bold text-[#6F0A12]">
                Your Cart is Empty
              </h3>

              <p className="mt-3 text-[#2B2B2B]/65 leading-7">
                Add delicious cakes, pastries or fast food to start your order.
              </p>

              <Link
                href="/products"
                onClick={onClose}
                className="mt-7 rounded-full bg-[#C1121F] px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9B0D18]"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.slug}-${item.weight}`}
                  className="rounded-[2rem] border border-[#EFCACA] bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex gap-4">

                    <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-[#FFF3F3]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">

                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#6F0A12]">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-sm font-bold text-[#C89B3C]">
                            {item.weight}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(item.slug, item.weight)
                          }
                          className="rounded-full p-2 text-[#C1121F] transition hover:bg-[#FFE4E4]"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <p className="mt-3 text-xl font-black text-[#6F0A12]">
                        ₹{item.price}
                      </p>

                      <div className="mt-4 flex items-center justify-between">

                        <div className="flex items-center overflow-hidden rounded-full border border-[#EFCACA]">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.slug, item.weight)
                            }
                            className="flex h-9 w-9 items-center justify-center hover:bg-[#FFE4E4]"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="w-10 text-center font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.slug, item.weight)
                            }
                            className="flex h-9 w-9 items-center justify-center hover:bg-[#FFE4E4]"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <p className="font-black text-[#C1121F]">
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

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#EFCACA] bg-white p-6">

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#6F0A12]">
                Total
              </span>

              <span className="text-3xl font-black text-[#C1121F]">
                ₹{totalPrice}
              </span>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="mt-6 block w-full rounded-full bg-[#C1121F] py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(193,18,31,0.30)] transition duration-300 hover:-translate-y-1 hover:bg-[#9B0D18]"
            >
              Proceed to Checkout
            </Link>

          </div>
        )}
      </div>
    </div>
  );
}