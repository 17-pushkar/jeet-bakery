"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-2xl shadow-lg">
            🍬
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-orange-600">
              Munna Sweets
            </h1>
            <p className="-mt-1 text-xs tracking-widest text-gray-500">
              SINCE 1995
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-orange-600 transition">
  Home
</Link>

<Link href="/products" className="hover:text-orange-600 transition">
  All Products
</Link>

<Link href="/#sweets" className="hover:text-orange-600 transition">
  Sweets
</Link>
<Link href="/#about" className="hover:text-orange-600 transition">
  About
</Link>
<Link href="/#contact" className="hover:text-orange-600 transition">
  Contact
</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-xl md:block">
            Order Now
          </button>

          <div className="relative">
  <button type="button" onClick={() => setIsCartOpen(true)}>
  <ShoppingBag className="h-6 w-6 cursor-pointer" />
</button>

  {cartCount > 0 && (
    <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-xs font-bold text-white">
      {cartCount}
    </span>
  )}
</div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t bg-white px-6 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
  Home
</Link>

<Link href="/products" onClick={() => setIsOpen(false)}>
  All Products
</Link>

<Link href="/#sweets" onClick={() => setIsOpen(false)}>
  Sweets
</Link>

<Link href="/#about" onClick={() => setIsOpen(false)}>
  About
</Link>

<Link href="/#contact" onClick={() => setIsOpen(false)}>
  Contact
</Link>

            <button className="mt-2 rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white">
              Order Now
            </button>
          </div>
        </div>
      )}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          </header>
  );
}