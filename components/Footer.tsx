import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3A0509] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.10),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/brand/jeet-bakery-logo.png"
                alt="Jeet Bakery Logo"
                width={70}
                height={70}
                className="rounded-full bg-white p-1"
              />

              <div>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Jeet Bakery
                </h2>

                <p className="text-sm uppercase tracking-[0.25em] text-[#C89B3C]">
                  Bakery • Café • Celebrations
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-white/75">
              Fresh cakes, pastries, bakery treats, fast food and birthday
              celebrations — everything under one trusted bakery brand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-white/75">
              <Link href="/" className="transition hover:text-[#C89B3C]">
                Home
              </Link>

              <Link href="/products" className="transition hover:text-[#C89B3C]">
                Products
              </Link>

              <Link href="/#about" className="transition hover:text-[#C89B3C]">
                About
              </Link>

              <Link href="/#party-hall" className="transition hover:text-[#C89B3C]">
                Party Hall
              </Link>

              <Link href="/#contact" className="transition hover:text-[#C89B3C]">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">
                <Phone className="mt-1 text-[#C89B3C]" size={18} />

                <span className="text-white/75">
                  +91 92153 73537
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 text-[#C89B3C]" size={18} />

                <span className="text-white/75">
                  jeetbakery@gmail.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 text-[#C89B3C]" size={18} />

                <span className="text-white/75">
                  Hisar, Haryana
                </span>
              </div>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Our Services
            </h3>

            <div className="mt-6 space-y-3 text-white/75">
              <p>🎂 Designer Cakes</p>
              <p>🥐 Fresh Bakery</p>
              <p>🍕 Fast Food</p>
              <p>🎉 Birthday Party Hall</p>
              <p>🎈 Birthday Decoration</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-white/60 md:flex-row">
            <p>
              © 2026 Jeet Bakery. All Rights Reserved.
            </p>

            <p className="text-[#C89B3C]">
              Fresh • Premium • Celebrations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}