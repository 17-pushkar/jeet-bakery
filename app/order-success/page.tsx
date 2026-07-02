import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFF9F3] px-6">
      <section className="w-full max-w-xl rounded-[2.5rem] border border-[#E8D9C8] bg-white p-10 text-center shadow-xl">
        <CheckCircle2 className="mx-auto h-20 w-20 text-[#C89B3C]" />

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
          Order Confirmed
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#4E342E]">
          Order Sent Successfully!
        </h1>

        <p className="mt-4 text-lg leading-8 text-[#1F1F1F]/70">
          Thank you for choosing Jeet Bakery.
          <br />
          Our team will contact you shortly to confirm your order.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block rounded-full bg-[#4E342E] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#C89B3C]"
        >
          Continue Shopping
        </Link>
      </section>
    </main>
  );
}