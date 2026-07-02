const testimonials = [
  {
    name: "Rohit Sharma",
    review:
      "The birthday cake looked beautiful and tasted amazing. Everyone at the party loved it!",
  },
  {
    name: "Neha Verma",
    review:
      "The party hall decoration was excellent and the staff managed everything perfectly. Highly recommended.",
  },
  {
    name: "Aman Gupta",
    review:
      "Fresh pastries, delicious pizza and excellent service. Jeet Bakery has become our family's favourite place.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F6E7D8] px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#4E342E] md:text-5xl">
            Loved by Our Customers
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#1F1F1F]/70">
            Every smile, celebration and repeat visit motivates us to serve even
            better.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[2rem] border border-[#E8D9C8] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#C89B3C] hover:shadow-xl"
            >
              <div className="text-[#C89B3C] text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-5 italic leading-8 text-[#1F1F1F]/70">
                "{testimonial.review}"
              </p>

              <div className="mt-8 border-t border-[#E8D9C8] pt-5">
                <h3 className="text-xl font-bold text-[#4E342E]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#C89B3C]">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}