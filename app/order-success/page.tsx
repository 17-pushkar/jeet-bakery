import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-50 px-6">
      <section className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">
        <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />

        <h1 className="mt-6 text-4xl font-bold text-zinc-900">
          Order Sent Successfully!
        </h1>

        <p className="mt-4 text-lg text-zinc-600">
          Thank you for choosing Munna Sweets.
          <br />
          Our team will contact you shortly to confirm your order.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-block rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          Continue Shopping
        </Link>
      </section>
    </main>
  );
}