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

    window.open(
      `https://wa.me/7897820892?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    clearCart();
    window.location.href = "/order-success";
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#FFF9F3] px-6 py-24">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-[#E8D9C8] bg-white p-10 text-center shadow-lg">
          <h1 className="text-4xl font-bold text-[#4E342E]">
            Your cart is empty
          </h1>

          <p className="mt-3 text-[#1F1F1F]/65">
            Please add cakes, snacks or party items before checkout.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-full bg-[#4E342E] px-7 py-3 font-bold text-white transition hover:bg-[#C89B3C]"
          >
            Browse Menu
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF9F3] px-6 py-24 md:px-8">
      <section className="mx-auto max-w-6xl rounded-[2.5rem] border border-[#E8D9C8] bg-white p-6 shadow-xl md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
          Checkout
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#4E342E]">
          Complete Your Order
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#1F1F1F]/70">
          Enter your details and place your Jeet Bakery order directly through
          WhatsApp.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-2xl border border-[#E8D9C8] bg-[#FFF9F3] px-5 py-4 text-[#1F1F1F] outline-none transition placeholder:text-[#1F1F1F]/45 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="rounded-2xl border border-[#E8D9C8] bg-[#FFF9F3] px-5 py-4 text-[#1F1F1F] outline-none transition placeholder:text-[#1F1F1F]/45 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
            />

            <textarea
              placeholder="Delivery Address"
              rows={5}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="rounded-2xl border border-[#E8D9C8] bg-[#FFF9F3] px-5 py-4 text-[#1F1F1F] outline-none transition placeholder:text-[#1F1F1F]/45 focus:border-[#C89B3C] focus:ring-4 focus:ring-[#C89B3C]/15"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#4E342E] py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#C89B3C] disabled:cursor-not-allowed disabled:bg-zinc-400"
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