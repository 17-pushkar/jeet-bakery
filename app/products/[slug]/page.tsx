import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Gulab Jamun",
    slug: "gulab-jamun",
    price: "₹220/kg",
    image: "/gulab-jamun.webp",
    description:
      "Soft, juicy and rich gulab jamuns made with premium ingredients and dipped in fragrant sugar syrup.",
    ingredients: ["Khoya", "Sugar", "Cardamom", "Ghee"],
  },
  {
    name: "Rasgulla",
    slug: "rasgulla",
    price: "₹200/kg",
    image: "/rasgulla.webp",
    description:
      "Fresh, spongy and delicious rasgullas prepared with soft chhena and light sugar syrup.",
    ingredients: ["Chhena", "Sugar", "Water", "Rose essence"],
  },
  {
    name: "Kaju Katli",
    slug: "kaju-katli",
    price: "₹850/kg",
    image: "/kaju-katli.webp",
    description:
      "Premium kaju katli made with fine cashews, smooth texture and a rich traditional taste.",
    ingredients: ["Cashew", "Sugar", "Ghee", "Silver leaf"],
  },
];

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-zinc-900">Product not found</h1>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 text-white"
        >
          Go back home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-24">
      <section className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-2 md:p-10">
        <div className="relative h-80 overflow-hidden rounded-3xl md:h-[480px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Munna Sweets Special
          </p>

          <h1 className="mt-3 text-4xl font-bold text-zinc-900">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl font-bold text-orange-600">
            {product.price}
          </p>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            {product.description}
          </p>

          <div className="mt-6">
  <h2 className="text-lg font-semibold text-zinc-900">
    Available Quantity
  </h2>

  <div className="mt-3 flex flex-wrap gap-3">
    {["250g", "500g", "1kg", "2kg"].map((quantity) => (
      <span
        key={quantity}
        className="rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-700"
      >
        {quantity}
      </span>
    ))}
  </div>
</div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-zinc-900">
              Ingredients
            </h2>

            <div className="mt-3 flex flex-wrap gap-3">
              {product.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/919999999999?text=I want to order ${product.name}`}
              target="_blank"
              className="rounded-full bg-orange-500 px-8 py-4 text-center font-semibold text-white transition hover:bg-orange-600"
            >
              Order on WhatsApp
            </a>

            <Link
              href="/"
              className="rounded-full border border-orange-300 px-8 py-4 text-center font-semibold text-orange-600 transition hover:bg-orange-100"
            >
              Back to Home
            </Link>
          </div>
        </div>
            </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <h2 className="text-3xl font-bold text-zinc-900">
          Related Products
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-zinc-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-semibold text-orange-600">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}