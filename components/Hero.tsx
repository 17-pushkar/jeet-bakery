import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F3]">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#C89B3C]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#4E342E]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Luxury Bakery • Premium Café • Celebration Lounge
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-[#4E342E] md:text-7xl">
            Celebrate Every Moment With Jeet Bakery
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#1F1F1F]/75">
            Fresh cakes, pastries, fast food, party supplies, birthday setups,
            and party hall booking — everything for your perfect celebration
            under one premium roof.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-[#4E342E] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition hover:bg-[#3A241F]"
            >
              Explore Menu
            </Link>

            <Link
              href="/#party-hall"
              className="rounded-full border border-[#C89B3C] bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#4E342E] shadow-sm transition hover:bg-[#F6E7D8]"
            >
              Book Party Hall
            </Link>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              "Custom Cakes",
              "Fast Food",
              "Party Setup",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#E8D9C8] bg-white/80 p-4 text-center shadow-sm"
              >
                <p className="text-sm font-semibold text-[#4E342E]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[3rem] border border-[#C89B3C]/40" />

          <div className="relative overflow-hidden rounded-[3rem] border border-[#E8D9C8] bg-white p-3 shadow-2xl">
            <Image
              src="/images/jeet-bakery/hero.webp"
              alt="Premium sweets and bakery items at Jeet Bakery"
              width={900}
              height={900}
              priority
              className="h-[420px] w-full rounded-[2.5rem] object-cover md:h-[560px]"
            />
          </div>

          <div className="absolute -bottom-6 left-6 rounded-3xl border border-[#E8D9C8] bg-white px-6 py-5 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C89B3C]">
              Premium Orders
            </p>
            <p className="mt-1 text-2xl font-bold text-[#4E342E]">
              Cakes • Snacks • Parties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}