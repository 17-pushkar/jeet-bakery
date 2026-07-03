const testimonials = [
  {
    name: "Happy Customer",
    role: "Birthday Celebration",
    review:
      "The birthday cake looked beautiful and tasted amazing. Everything was fresh and perfectly prepared.",
  },
  {
    name: "Local Customer",
    role: "Party Hall Booking",
    review:
      "The decoration, snacks and party arrangements were wonderful. Our family had a great experience.",
  },
  {
    name: "Regular Customer",
    role: "Bakery & Fast Food",
    review:
      "Fresh pastries, delicious fast food and excellent service. Jeet Bakery is now our favourite bakery.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#3A0509] px-6 py-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.25),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.12),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            Testimonials
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
            Loved By Our Customers
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Every smile, birthday celebration and repeat visit motivates us to
            serve even better every day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[2rem] border border-[#C89B3C]/20 bg-white/[0.08] p-8 shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/50"
            >
              <div className="text-2xl text-[#E8C978]">
                ★★★★★
              </div>

              <p className="mt-6 text-lg italic leading-8 text-white/85">
                "{testimonial.review}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <h3 className="text-xl font-bold text-white">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}