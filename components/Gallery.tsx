import Image from "next/image";

const galleryImages = [
  { src: "/images/jeet-bakery/gallery1.webp", title: "Signature Cakes" },
  { src: "/images/jeet-bakery/gallery2.webp", title: "Fresh Pastries" },
  { src: "/images/jeet-bakery/gallery3.webp", title: "Birthday Party Hall" },
  { src: "/images/jeet-bakery/gallery4.webp", title: "Fast Food Corner" },
  { src: "/images/jeet-bakery/gallery5.webp", title: "Birthday Decorations" },
  { src: "/images/jeet-bakery/gallery6.webp", title: "Bakery Counter" },
];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[#FFF2F2] px-6 py-24 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.12),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            Gallery
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#6F0A12] md:text-6xl">
            Sweet Moments at Jeet Bakery
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#2B2B2B]/70">
            A glimpse of our cakes, birthday decorations, party hall setup,
            fast food corner and fresh bakery treats.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[#EFCACA] bg-white p-3 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/60 hover:shadow-[0_28px_70px_rgba(111,10,18,0.18)]"
            >
              <div className="relative h-80 overflow-hidden rounded-[1.5rem]">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3A0509]/85 via-[#3A0509]/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#C89B3C]">
                    Jeet Bakery
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}