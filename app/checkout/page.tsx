"use client";

import Link from "next/link";
import { useState } from "react";
import OrderSummary from "@/components/OrderSummary";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add products before checkout.");
      return;
    }

    setIsSubmitting(true);

    await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        totalAmount: totalPrice,
        items: cartItems,
      }),
    });

    const message = `Hello Jeet Bakery, I want to place an order:

Name: ${name}
Phone: ${phone}
Address: ${address}

Order:
${cartItems
  .map(
    (item) =>
      `${item.name} (${item.weight}) x ${item.quantity} = ₹${
        item.price * item.quantity
      }`
  )
  .join("\n")}

Total: ₹${totalPrice}`;

   sessionStorage.setItem("jeetBakeryWhatsAppMessage", message);

clearCart();
window.location.href = "/order-success";
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#FFF2F2] px-6 py-24">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-[#EFCACA] bg-white p-10 text-center shadow-[0_25px_70px_rgba(111,10,18,0.12)]">
          <h1 className="text-4xl font-bold text-[#6F0A12]">
            Your cart is empty
          </h1>

          <p className="mt-3 text-[#2B2B2B]/65">
            Please add cakes, snacks or birthday items before checkout.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-full bg-[#C1121F] px-7 py-3 font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#9B0D18]"
          >
            Browse Menu
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF2F2] px-6 py-24 md:px-8">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#EFCACA] bg-white shadow-[0_25px_70px_rgba(111,10,18,0.14)]">
        <div className="relative bg-[#3A0509] px-6 py-10 text-white md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_34%)]" />

          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
              Checkout
            </p>

            <h1 className="mt-4 text-5xl font-bold text-white">
              Complete Your Order
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
              Enter your details and place your Jeet Bakery order directly
              through WhatsApp.
            </p>
          </div>
        </div>

        <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-2xl border border-[#EFCACA] bg-[#FFF7F7] px-5 py-4 text-[#2B2B2B] outline-none transition placeholder:text-[#2B2B2B]/45 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="rounded-2xl border border-[#EFCACA] bg-[#FFF7F7] px-5 py-4 text-[#2B2B2B] outline-none transition placeholder:text-[#2B2B2B]/45 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
            />

            <textarea
              placeholder="Delivery Address"
              rows={5}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="rounded-2xl border border-[#EFCACA] bg-[#FFF7F7] px-5 py-4 text-[#2B2B2B] outline-none transition placeholder:text-[#2B2B2B]/45 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#C1121F] py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(193,18,31,0.28)] transition hover:-translate-y-1 hover:bg-[#9B0D18] disabled:cursor-not-allowed disabled:bg-zinc-400 disabled:shadow-none"
            >
              {isSubmitting ? "Placing Order..." : "Place Order on WhatsApp"}
            </button>
          </form>

          <OrderSummary />
        </div>
      </section>
    </main>
  );
}