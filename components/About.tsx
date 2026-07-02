import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-[#F6E7D8] px-6 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] border border-[#C89B3C]/40"></div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E8D9C8] bg-white p-3 shadow-2xl">
            <Image
              src="/images/jeet-bakery/bakery.webp"
              alt="Premium bakery interior at Jeet Bakery"
              width={700}
              height={700}
              className="h-[500px] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            About Jeet Bakery
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#4E342E] md:text-5xl">
            More Than A Bakery,
            <br />
            We Create Celebrations.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#1F1F1F]/75">
            Jeet Bakery is your complete destination for delicious cakes,
            pastries, bakery items, fast food, chocolates, party supplies and
            memorable birthday celebrations.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#1F1F1F]/75">
            Whether you're planning a birthday, family gathering, anniversary,
            or simply craving fresh bakery products, we bring premium quality,
            beautiful presentation and unforgettable taste together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-[#4E342E] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#C89B3C]"
            >
              Explore Products
            </Link>

            <Link
              href="/#party-hall"
              className="rounded-full border border-[#C89B3C] bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#4E342E] transition hover:bg-[#FFF9F3]"
            >
              Book Party Hall
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}