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
    <section className="bg-[#FFF9F3] px-6 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Shop by Category
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#4E342E] md:text-5xl">
            Everything for Taste, Treats & Celebrations
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#1F1F1F]/70">
            From fresh bakery items to birthday party essentials, Jeet Bakery
            brings your celebration needs together in one premium place.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-[2rem] border border-[#E8D9C8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#C89B3C]/70 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F6E7D8] text-[#4E342E] transition group-hover:bg-[#4E342E] group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#4E342E]">
                  {category.title}
                </h3>

                <p className="mt-3 leading-7 text-[#1F1F1F]/70">
                  {category.description}
                </p>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                  View More
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}