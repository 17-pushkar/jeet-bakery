import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

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
      className="group relative block overflow-hidden rounded-[2rem] border border-[#EFCACA] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:border-[#C89B3C]/60 hover:shadow-[0_28px_70px_rgba(111,10,18,0.18)]"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden bg-[#FFF3F3]">
        {/* Decorative Glow */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#C1121F]/10 blur-3xl transition duration-500 group-hover:bg-[#C89B3C]/15" />

        {/* Favourite */}
        <div className="absolute right-5 top-5 z-20 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition duration-300 group-hover:scale-110">
  <Heart className="h-5 w-5 text-[#C1121F]" />
</div>

        {/* Badge */}
        {badge && (
          <span className="absolute left-5 top-5 z-20 rounded-full bg-[#C1121F] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg">
            {badge}
          </span>
        )}

        {/* Product Image */}
        <Image
          src={image}
          alt={name}
          width={600}
          height={450}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-bold text-[#6F0A12]">
            {name}
          </h3>

          <span className="rounded-full bg-[#FFE4E4] px-3 py-1 text-xs font-bold text-[#C1121F]">
            Premium
          </span>
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[#C89B3C]">★★★★★</span>

          <span className="text-sm text-zinc-500">
            4.9 Rating
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-2 leading-7 text-zinc-600">
          {description}
        </p>

        {/* Bottom */}
        <div className="mt-7 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#C89B3C]">
              Starting From
            </p>

            <p className="mt-1 text-2xl font-black text-[#6F0A12]">
              {price}
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#C1121F] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg transition duration-300 group-hover:bg-[#9B0D18]">
            View
            <ArrowRight
              size={16}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}