import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  description: string;
  badge?: string;
  slug?: string;
};

export default function ProductCard({
  name,
  price,
  image,
  description,
  badge,
  slug,
}: ProductCardProps) {
  const productHref = slug
    ? `/products/${slug}`
    : `/products/${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link
      href={productHref}
      className="group relative block overflow-hidden rounded-[2rem] border border-[#E8D9C8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/70 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden bg-[#F6E7D8]">
        <button
          type="button"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow-md transition hover:scale-110 hover:bg-[#F6E7D8]"
        >
          <Heart className="h-5 w-5 text-[#4E342E]" />
        </button>

        {badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#C89B3C] px-4 py-1.5 text-sm font-semibold text-white shadow-md">
            {badge}
          </span>
        )}

        <Image
          src={image}
          alt={name}
          width={500}
          height={380}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#4E342E]">{name}</h3>

        <div className="mt-2 flex items-center gap-1 text-[#C89B3C]">
          ★★★★★
          <span className="ml-2 text-sm text-[#1F1F1F]/55">(4.9)</span>
        </div>

        <p className="mt-3 line-clamp-2 leading-7 text-[#1F1F1F]/70">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-xl font-bold text-[#4E342E]">{price}</span>

          <span className="rounded-full bg-[#4E342E] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.15em] text-white transition group-hover:bg-[#C89B3C]">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}