"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFF9F3] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Contact Us"
          subtitle="Visit Jeet Bakery or send us a message for cakes, café orders, fast food, party supplies, or celebration bookings."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-[#E8D9C8] bg-white p-5 shadow-sm">
              <MapPin className="h-8 w-8 text-[#C89B3C]" />

              <div>
                <h3 className="text-lg font-bold text-[#4E342E]">
                  Address
                </h3>

                <p className="text-zinc-600">
                  Hisar, Haryana, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[#E8D9C8] bg-white p-5 shadow-sm">
              <Phone className="h-8 w-8 text-[#C89B3C]" />

              <div>
                <h3 className="text-lg font-bold text-[#4E342E]">
                  Phone
                </h3>

                <p className="text-zinc-600">
                  +91 92552 47406
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[#E8D9C8] bg-white p-5 shadow-sm">
              <Mail className="h-8 w-8 text-[#C89B3C]" />

              <div>
                <h3 className="text-lg font-bold text-[#4E342E]">
                  Email
                </h3>

                <p className="text-zinc-600">
                  jeetbakery@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[#E8D9C8] bg-white p-5 shadow-sm">
              <Clock className="h-8 w-8 text-[#C89B3C]" />

              <div>
                <h3 className="text-lg font-bold text-[#4E342E]">
                  Opening Hours
                </h3>

                <p className="text-zinc-600">
                  Monday – Sunday
                  <br />
                  8:00 AM – 10:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E8D9C8] bg-white p-8 shadow-sm">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;

                const name = (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value;

                const email = (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value;

                const phone = (
                  form.elements.namedItem("phone") as HTMLInputElement
                ).value;

                const message = (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                ).value;

                const text = `Hello Jeet Bakery,

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

                window.open(
                  `https://wa.me/9215373537?text=${encodeURIComponent(text)}`,
                  "_blank"
                );
              }}
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-[#E8D9C8] p-3 outline-none focus:border-[#C89B3C]"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[#E8D9C8] p-3 outline-none focus:border-[#C89B3C]"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-[#E8D9C8] p-3 outline-none focus:border-[#C89B3C]"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-[#E8D9C8] p-3 outline-none focus:border-[#C89B3C]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#4E342E] py-3 font-semibold text-white transition hover:bg-[#3b2722]"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}