"use client";

import Image from "next/image";
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Party Hall", href: "/#party-hall" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#EFCACA] bg-[#FFF2F2]/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/jeet-bakery-logo.png"
              alt="Jeet Bakery Logo"
              width={76}
              height={76}
              priority
              className="h-16 w-16 rounded-full object-contain shadow-sm md:h-20 md:w-20"
            />

            <div className="leading-tight">
              <p className="font-serif text-2xl font-bold tracking-wide text-[#6F0A12]">
                Jeet Bakery
              </p>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C89B3C]">
                Bakery • Café • Celebrations
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-[0.18em] text-[#6F0A12] transition hover:text-[#C1121F]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full border border-[#EFCACA] bg-white p-3 text-[#6F0A12] shadow-sm transition hover:border-[#C1121F] hover:bg-[#FFE4E4] hover:text-[#C1121F]"
              aria-label="Open cart"
            >
              <ShoppingBag size={22} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C1121F] px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-[#EFCACA] bg-white p-3 text-[#6F0A12] shadow-sm transition hover:border-[#C1121F] hover:bg-[#FFE4E4] md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="border-t border-[#EFCACA] bg-[#FFF2F2] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6F0A12] transition hover:bg-[#FFE4E4] hover:text-[#C1121F]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}