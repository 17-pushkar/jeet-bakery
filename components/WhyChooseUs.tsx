import {
  Award,
  CakeSlice,
  PartyPopper,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: CakeSlice,
    title: "Fresh Bakery",
    description:
      "Fresh cakes, pastries, chocolates and bakery items prepared every day.",
  },
  {
    icon: PartyPopper,
    title: "Birthday Specialists",
    description:
      "Designer cakes, birthday hall and complete celebration support.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Quality ingredients with beautiful presentation in every order.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Hygienic",
    description:
      "Prepared with cleanliness, freshness and customer satisfaction in mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#FFF2F2] px-6 py-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.10),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            Why Jeet Bakery
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#6F0A12] md:text-6xl">
            Fresh Taste.
            <br />
            Premium Celebrations.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#2B2B2B]/70">
            Everything you need for birthdays and celebrations —
            fresh bakery products, designer cakes, delicious fast food
            and a beautiful party hall under one trusted bakery.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[2rem] border border-[#EFCACA] bg-white p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-3 hover:border-[#C89B3C]/60 hover:shadow-[0_28px_70px_rgba(111,10,18,0.18)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFE4E4] text-[#C1121F] transition duration-300 group-hover:scale-110 group-hover:bg-[#C1121F] group-hover:text-white">
                  <Icon size={34} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#6F0A12]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[#2B2B2B]/70">
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