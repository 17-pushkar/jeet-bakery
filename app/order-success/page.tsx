"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";

export default function OrderSuccessPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedMessage = sessionStorage.getItem(
      "jeetBakeryWhatsAppMessage"
    );

    if (savedMessage) {
      setMessage(savedMessage);
    }
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF2F2] px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.12),transparent_35%)]" />

      <section className="relative w-full max-w-2xl overflow-hidden rounded-[3rem] border border-[#EFCACA] bg-white shadow-[0_30px_80px_rgba(111,10,18,0.14)]">

        <div className="relative bg-[#3A0509] px-10 py-12 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_34%)]" />

          <div className="relative">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#C89B3C] bg-white">
              <CheckCircle2 className="h-14 w-14 text-[#C89B3C]" />
            </div>

            <p className="mt-6 text-sm font-black uppercase tracking-[0.35em] text-[#E8C978]">
              Order Saved
            </p>

            <h1 className="mt-4 font-serif text-5xl font-bold">
              Thank You!
            </h1>
          </div>
        </div>

        <div className="px-10 py-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#6F0A12]">
            Your Order is Ready
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#2B2B2B]/70">
            Your order has been prepared successfully.
            <br />
            Please send it on WhatsApp so Jeet Bakery can confirm it.
          </p>

          <div className="mt-10 flex flex-col gap-4">

            <button
              onClick={() => {
                if (!message) return;

                window.location.href = `https://wa.me/919215373537?text=${encodeURIComponent(
                  message
                )}`;
              }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              Send Order on WhatsApp
            </button>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-[#C1121F] px-10 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(193,18,31,0.30)] transition hover:-translate-y-1 hover:bg-[#9B0D18]"
            >
              Continue Shopping
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}