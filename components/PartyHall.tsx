"use client";

import Image from "next/image";
import {
  CalendarCheck,
  CakeSlice,
  Gift,
  PartyPopper,
  Sparkles,
} from "lucide-react";

const highlights = [
  "Designer Birthday Cakes",
  "Balloon Decoration",
  "Snacks & Fast Food",
  "Birthday Accessories",
  "Complete Party Setup",
  "Celebration Under One Roof",
];

export default function PartyHall() {
  return (
    <section
      id="party-hall"
      className="relative overflow-hidden bg-[#3A0509] px-6 py-24 md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_36%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="overflow-hidden rounded-[3rem] border border-[#C89B3C]/25 bg-white/[0.08] p-3 shadow-2xl backdrop-blur">
          <Image
            src="/images/jeet-bakery/party-hall.webp"
            alt="Jeet Bakery Birthday Party Hall"
            width={900}
            height={650}
            className="h-[430px] w-full rounded-[2.5rem] object-cover"
          />

          <div className="p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C89B3C]">
              Birthday Party Experience
            </p>

            <h3 className="mt-3 font-serif text-3xl font-bold text-white">
              Everything for Your Birthday Celebration
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#C89B3C]/20 bg-black/15 px-4 py-3 text-sm font-bold text-white/90"
                >
                  ✦ {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            Birthday Party Hall
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
            Celebrate Your Birthday With Jeet Bakery
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Make birthdays special with our decorated party hall, designer
            cakes, snacks, fast food and complete birthday setup support — all
            available in one place.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Hall Booking", icon: CalendarCheck },
              { title: "Birthday Cakes", icon: CakeSlice },
              { title: "Decoration Setup", icon: Sparkles },
              { title: "Snacks & Fast Food", icon: PartyPopper },
              { title: "Birthday Accessories", icon: Gift },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-[#C89B3C]/20 bg-white/[0.08] p-5 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/50 hover:bg-white/[0.12]"
                >
                  <Icon
                    className="text-[#E8C978] transition group-hover:scale-110"
                    size={30}
                  />

                  <h3 className="mt-3 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <form
            className="mt-8 space-y-4 rounded-[2rem] border border-[#C89B3C]/20 bg-white/[0.08] p-6 shadow-2xl backdrop-blur"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;

              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
              const date = (form.elements.namedItem("date") as HTMLInputElement).value;
              const time = (form.elements.namedItem("time") as HTMLInputElement).value;
              const guests = (form.elements.namedItem("guests") as HTMLInputElement).value;
              const occasion = (form.elements.namedItem("occasion") as HTMLSelectElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

              const text = `Hello Jeet Bakery,

I want to enquire about birthday party hall booking.

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
              Birthday Party Booking Enquiry
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["name", "Your Name", "text"],
                ["phone", "Phone Number", "tel"],
                ["date", "", "date"],
                ["time", "", "time"],
                ["guests", "Number of Guests", "number"],
              ].map(([name, placeholder, type]) => (
                <input
                  key={name}
                  name={name}
                  required
                  min={name === "guests" ? "1" : undefined}
                  type={type}
                  placeholder={placeholder}
                  className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#2B2B2B] outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/30"
                />
              ))}

              <select
                name="occasion"
                required
                className="rounded-xl border border-white/10 bg-white px-4 py-3 text-[#2B2B2B] outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/30"
              >
                <option value="">Select Occasion</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Kids Birthday">Kids Birthday</option>
                <option value="Theme Birthday">Theme Birthday</option>
                <option value="Small Birthday Gathering">
                  Small Birthday Gathering
                </option>
                <option value="Other Birthday Celebration">
                  Other Birthday Celebration
                </option>
              </select>
            </div>

            <textarea
              name="message"
              rows={3}
              placeholder="Extra message or birthday party requirements"
              className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-[#2B2B2B] outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/30"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#C1121F] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_18px_35px_rgba(193,18,31,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#9B0D18] hover:shadow-[0_22px_45px_rgba(193,18,31,0.45)]"
            >
              Send Birthday Booking Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}