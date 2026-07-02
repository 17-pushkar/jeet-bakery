import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4E342E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#C89B3C]">
              Jeet Bakery
            </h2>

            <p className="mt-4 leading-7 text-[#F6E7D8]">
              Premium Bakery • Café • Fast Food • Celebration Lounge

              <br />
              Freshly baked every day with quality ingredients and exceptional
              taste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#FFF9F3]">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[#F6E7D8]">
              <Link href="/" className="hover:text-[#C89B3C]">
                Home
              </Link>

              <Link href="/products" className="hover:text-[#C89B3C]">
                Products
              </Link>

              <Link href="/#about" className="hover:text-[#C89B3C]">
                About
              </Link>

              <Link href="/#contact" className="hover:text-[#C89B3C]">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#FFF9F3]">
              Contact
            </h3>

            <div className="mt-4 space-y-4 text-[#F6E7D8]">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C89B3C]" />
                <span>+91 92552 47406</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C89B3C]" />
                <span>jeetbakery@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C89B3C]" />
                <span>Hisar, Haryana</span>
              </div>
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-xl font-semibold text-[#FFF9F3]">
              Our Specialities
            </h3>

            <ul className="mt-4 space-y-2 text-[#F6E7D8]">
              <li>🎂 Designer Cakes</li>
              <li>🥐 Fresh Bakery</li>
              <li>🍕 Fast Food</li>
              <li>☕ Café</li>
              <li>🎉 Party Hall</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[#6D4C41] pt-6 text-center text-sm text-[#F6E7D8]">
          © 2026 Jeet Bakery. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}