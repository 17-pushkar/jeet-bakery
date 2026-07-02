"use client";

import Image from "next/image";
import {
  CalendarCheck,
  CakeSlice,
  PartyPopper,
  Sparkles,
} from "lucide-react";

export default function PartyHall() {
  return (
    <section id="party-hall" className="bg-[#4E342E] px-6 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem] border border-[#C89B3C]/40"></div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl">
            <Image
              src="/images/jeet-bakery/party-hall.webp"
              alt="Jeet Bakery Party Hall"
              width={700}
              height={700}
              className="h-[520px] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">
            Celebration Lounge
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Celebrate Every Special Moment With Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            From birthday celebrations to family gatherings, Jeet Bakery offers
            a beautifully decorated party hall along with delicious food,
            premium cakes and complete celebration arrangements.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              { title: "Hall Booking", icon: CalendarCheck },
              { title: "Designer Cakes", icon: CakeSlice },
              { title: "Decoration Setup", icon: Sparkles },
              { title: "Snacks & Catering", icon: PartyPopper },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:bg-white/20"
                >
                  <Icon className="text-[#C89B3C]" size={32} />

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <form
            className="mt-10 space-y-4 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (
                form.elements.namedItem("name") as HTMLInputElement
              ).value;

              const phone = (
                form.elements.namedItem("phone") as HTMLInputElement
              ).value;

              const date = (
                form.elements.namedItem("date") as HTMLInputElement
              ).value;

              const time = (
                form.elements.namedItem("time") as HTMLInputElement
              ).value;

              const guests = (
                form.elements.namedItem("guests") as HTMLInputElement
              ).value;

              const occasion = (
                form.elements.namedItem("occasion") as HTMLSelectElement
              ).value;

              const message = (
                form.elements.namedItem("message") as HTMLTextAreaElement
              ).value;

              const text = `Hello Jeet Bakery,

I want to enquire about party hall booking.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}
Occasion: ${occasion}

Message:
${message}`;

              window.open(
                `https://wa.me/919255247406?text=${encodeURIComponent(text)}`,
                "_blank"
              );
            }}
          >
            <h3 className="font-serif text-2xl font-bold text-white">
              Party Hall Booking Enquiry
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="rounded-xl border border-white/15 bg-white px-4 py-3 text-[#1F1F1F] outline-none"
              />

              <input
                name="phone"
                required
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl border border-white/15 bg-white px-4 py-3 text-[#1F1F1F] outline-none"
              />

              <input
                name="date"
                required
                type="date"
                className="rounded-xl border border-white/15 bg-white px-4 py-3 text-[#1F1F1F] outline-none"
              />

              <input
                name="time"
                required
                type="time"
                className="rounded-xl border border-white/15 bg-white px-4 py-3 text-[#1F1F1F] outline-none"
              />

              <input
                name="guests"
                required
                min="1"
                type="number"
                placeholder="Number of Guests"
                className="rounded-xl border border-white/15 bg-white px-4 py-3 text-[#1F1F1F] outline-none"
              />

              <select
                name="occasion"
                required
                className="rounded-xl border border-white/15 bg-white px-4 py-3 text-[#1F1F1F] outline-none"
              >
                <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Kitty Party">Kitty Party</option>
                <option value="Family Gathering">Family Gathering</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="Extra message or requirements"
              className="w-full rounded-xl border border-white/15 bg-white px-4 py-3 text-[#1F1F1F] outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#C89B3C] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#4E342E]"
            >
              Send Booking Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}