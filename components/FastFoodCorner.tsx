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
    <section className="bg-[#FFF9F3] py-24 px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Fast Food Corner
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#4E342E]">
            Freshly Prepared Every Day
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#1F1F1F]/70">
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
                className="rounded-[2rem] border border-[#E8D9C8] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F6E7D8] text-[#4E342E]">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#4E342E]">
                  {item.name}
                </h3>

                <p className="mt-3 leading-7 text-[#1F1F1F]/70">
                  {item.description}
                </p>

                <Link
                  href="/products"
                  className="mt-6 inline-block text-sm font-bold uppercase tracking-[0.15em] text-[#C89B3C]"
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