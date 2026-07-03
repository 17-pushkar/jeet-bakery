import Image from "next/image";
import Link from "next/link";
import { CakeSlice, PartyPopper, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FFF2F2] px-6 py-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.12),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-[#C1121F]/18 to-[#C89B3C]/18 blur-2xl" />

          <div className="relative overflow-hidden rounded-[3rem] border border-[#EFCACA] bg-white p-3 shadow-[0_30px_80px_rgba(111,10,18,0.16)]">
            <Image
              src="/images/jeet-bakery/bakery.webp"
              alt="Premium bakery interior at Jeet Bakery"
              width={700}
              height={700}
              className="h-[500px] w-full rounded-[2.5rem] object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            About Jeet Bakery
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#6F0A12] md:text-6xl">
            More Than A Bakery,
            <br />
            We Create Birthday Celebrations.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#2B2B2B]/75">
            Jeet Bakery is your complete destination for fresh cakes, pastries,
            bakery items, fast food, chocolates, party supplies and memorable
            birthday celebrations.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#2B2B2B]/75">
            From designer birthday cakes to decorated party hall bookings, we
            bring taste, presentation and celebration support together under one
            trusted bakery brand.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Fresh Cakes", icon: CakeSlice },
              { title: "Birthday Setup", icon: Sparkles },
              { title: "Party Hall", icon: PartyPopper },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#EFCACA] bg-white p-5 shadow-sm"
                >
                  <Icon className="text-[#C1121F]" size={28} />
                  <p className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-[#6F0A12]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-[#C1121F] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_18px_35px_rgba(193,18,31,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#9B0D18]"
            >
              Explore Products
            </Link>

            <Link
              href="/#party-hall"
              className="rounded-full border-2 border-[#C89B3C] bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#6F0A12] transition duration-300 hover:-translate-y-1 hover:bg-[#FFE4E4]"
            >
              Book Birthday Hall
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}