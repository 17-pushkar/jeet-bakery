import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

const products = [
  {
    name: "Gulab Jamun",
    price: "₹320 / kg",
    image: "/gulab-jamun.webp",
    description: "Soft milk dumplings soaked in delicious sugar syrup.",
    badge: "⭐ Best Seller",
  },
  {
    name: "Rasgulla",
    price: "₹300 / kg",
    image: "/rasgulla.webp",
    description: "Fresh cottage cheese balls prepared every day.",
    badge: "🔥 Most Popular",
  },
  {
    name: "Kaju Katli",
    price: "₹900 / kg",
    image: "/kaju-katli.webp",
    description: "Premium cashew sweet made with the finest ingredients.",
    badge: "👑 Premium",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="sweets" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Our Special Sweets"
          subtitle="Freshly prepared every day using premium ingredients and traditional recipes."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}