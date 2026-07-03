import Link from "next/link";
import {
  CakeSlice,
  Croissant,
  Gift,
  PartyPopper,
  Pizza,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Birthday Cakes",
    description: "Custom cakes for birthdays, anniversaries, and celebrations.",
    icon: CakeSlice,
    href: "/products",
  },
  {
    title: "Pastries & Bakery",
    description: "Fresh pastries, biscuits, chocolates, and bakery treats.",
    icon: Croissant,
    href: "/products",
  },
  {
    title: "Fast Food",
    description: "Pizza, burgers, snacks, chips, and party food items.",
    icon: Pizza,
    href: "/products",
  },
  {
    title: "Party Supplies",
    description: "Caps, candles, decorations, and birthday essentials.",
    icon: Gift,
    href: "/products",
  },
  {
    title: "Party Hall",
    description: "Book our celebration space for birthdays and small events.",
    icon: PartyPopper,
    href: "/#party-hall",
  },
  {
    title: "Birthday Setup",
    description: "Decoration support and setup services for special moments.",
    icon: Sparkles,
    href: "/#party-hall",
  },
];

export default function ShopByCategory() {
  return (
    <section className="relative overflow-hidden bg-[#3A0509] px-6 py-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            Shop by Category
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
            Everything for Taste,
            <br />
            Treats & Celebrations
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            From fresh bakery items to birthday party essentials, Jeet Bakery
            brings your celebration needs together in one premium place.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group relative overflow-hidden rounded-[2rem] border border-[#C89B3C]/20 bg-white/[0.07] p-7 shadow-[0_25px_60px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/55 hover:bg-white/[0.1]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C1121F]/25 blur-2xl transition duration-300 group-hover:bg-[#C89B3C]/20" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#C89B3C]/35 bg-black/20 text-[#E8C978] shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-[#C1121F] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="relative mt-7 text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="relative mt-4 leading-7 text-white/70">
                  {category.description}
                </p>

                <p className="relative mt-7 text-sm font-black uppercase tracking-[0.2em] text-[#C89B3C] transition group-hover:text-[#E8C978]">
                  Explore →
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}