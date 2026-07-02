import Image from "next/image";

const galleryImages = [
  { src: "/images/jeet-bakery/gallery1.webp", title: "Signature Cakes" },
  { src: "/images/jeet-bakery/gallery2.webp", title: "Fresh Pastries" },
  { src: "/images/jeet-bakery/gallery3.webp", title: "Party Hall Setup" },
  { src: "/images/jeet-bakery/gallery4.webp", title: "Fast Food Corner" },
  { src: "/images/jeet-bakery/gallery5.webp", title: "Birthday Decorations" },
  { src: "/images/jeet-bakery/gallery6.webp", title: "Bakery Counter" },
];

export default function Gallery() {
  return (
    <section className="bg-[#FFF9F3] px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#4E342E] md:text-5xl">
            Sweet Moments at Jeet Bakery
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#1F1F1F]/70">
            A glimpse of our bakery products, celebration orders and fresh
            treats made for happy occasions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className="group relative overflow-hidden rounded-[2rem] border border-[#E8D9C8] bg-white p-3 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={600}
                height={450}
                className="h-72 w-full rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 px-5 py-4 shadow-md backdrop-blur">
                <p className="text-lg font-bold text-[#4E342E]">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}