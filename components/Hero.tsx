import Image from "next/image";
import Link from "next/link";
import { CakeSlice, ChefHat, PartyPopper, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] overflow-hidden bg-[#3A0509]">
      <Image
        src="/images/jeet-bakery/hero.webp"
        alt="Jeet Bakery premium cakes"
        fill
        priority
        className="object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#3A0509] via-[#6F0A12]/85 to-[#3A0509]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3A0509]/95 via-transparent to-[#3A0509]/25" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-6 py-16 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#C89B3C]">
            Premium Bakery • Café • Celebrations
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            Celebrate Every Moment
            <br />
            <span className="text-[#E8C978]">with</span> Jeet Bakery
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
            From premium cakes and pastries to delicious fast food and party
            hall booking — we make every celebration unforgettable.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-[#C1121F] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(193,18,31,0.4)] transition duration-300 hover:-translate-y-1 hover:bg-[#9B0D18]"
            >
              Explore Menu
            </Link>

            <Link
              href="/#party-hall"
              className="rounded-full border-2 border-[#C89B3C] bg-black/20 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#E8C978] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Book Party Hall
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-[#C89B3C]/25 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: CakeSlice, title: "Premium Quality", text: "Finest Ingredients" },
            { icon: ChefHat, title: "Freshly Made", text: "Every Single Day" },
            { icon: PartyPopper, title: "Perfect for All", text: "Occasions" },
            { icon: MapPin, title: "Party Hall", text: "For Memorable Events" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C89B3C]/40 bg-white/10 text-[#E8C978] backdrop-blur">
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-white/70">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}