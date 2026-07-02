import { Award, CakeSlice, PartyPopper, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: CakeSlice,
    title: "Fresh Bakery Items",
    description: "Cakes, pastries, biscuits and chocolates prepared with care.",
  },
  {
    icon: PartyPopper,
    title: "Complete Party Solution",
    description: "Party hall, birthday setup, snacks and decoration essentials.",
  },
  {
    icon: Award,
    title: "Premium Taste",
    description: "Quality ingredients and beautiful presentation for every order.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Hygienic",
    description: "Prepared in a neat kitchen with attention to freshness.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FFF9F3] px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#4E342E] md:text-5xl">
            Why Choose Jeet Bakery?
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#1F1F1F]/70">
            From daily cravings to birthday celebrations, Jeet Bakery brings
            taste, quality and party convenience together.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-[#E8D9C8] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-xl"
              >
                <Icon className="h-12 w-12 text-[#C89B3C]" />

                <h3 className="mt-6 text-2xl font-bold text-[#4E342E]">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-[#1F1F1F]/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}