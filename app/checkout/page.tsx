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

    const message = `Hello Munna Sweets, I want to place an order:

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
      <main className="min-h-screen bg-orange-50 px-6 py-24">
        <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-lg">
          <h1 className="text-4xl font-bold text-zinc-900">
            Your cart is empty
          </h1>
          <p className="mt-3 text-zinc-600">
            Please add some sweets to your cart before checkout.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-block rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Browse Products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-24">
      <section className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-zinc-900">Checkout</h1>
        <p className="mt-3 text-zinc-600">
          Enter your details to place your order on WhatsApp.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-xl border border-orange-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="rounded-xl border border-orange-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />

            <textarea
              placeholder="Delivery Address"
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="rounded-xl border border-orange-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-zinc-400"
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