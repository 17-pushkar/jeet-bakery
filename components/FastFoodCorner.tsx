import Link from "next/link";
import { Pizza, Hamburger, Sandwich, Soup } from "lucide-react";

const items = [
  {
    name: "Pizza",
    description: "Cheesy freshly baked pizzas with delicious toppings.",
    icon: Pizza,
  },
  {
    name: "Burgers",
    description: "Loaded burgers made with fresh ingredients.",
    icon: Hamburger,
  },
  {
    name: "Sandwiches",
    description: "Grilled sandwiches perfect for every snack break.",
    icon: Sandwich,
  },
  {
    name: "Snacks",
    description: "Fries, rolls, patties and much more.",
    icon: Soup,
  },
];

export default function FastFoodCorner() {
  return (
    <section className="relative overflow-hidden bg-[#FFF2F2] px-6 py-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.14),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            Fast Food Corner
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#6F0A12] md:text-6xl">
            Freshly Prepared
            <br />
            Every Day
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#2B2B2B]/70">
            Enjoy delicious fast food made fresh with premium ingredients,
            perfect for college students, families and evening cravings.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="group rounded-[2rem] border border-[#EFCACA] bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-3 hover:border-[#C89B3C]/60 hover:shadow-[0_28px_70px_rgba(111,10,18,0.16)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFE4E4] text-[#C1121F] transition duration-300 group-hover:scale-110 group-hover:bg-[#C1121F] group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#6F0A12]">
                  {item.name}
                </h3>

                <p className="mt-4 leading-7 text-[#2B2B2B]/70">
                  {item.description}
                </p>

                <Link
                  href="/products"
                  className="mt-7 inline-block text-sm font-black uppercase tracking-[0.15em] text-[#C89B3C] transition group-hover:text-[#C1121F]"
                >
                  Explore →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}