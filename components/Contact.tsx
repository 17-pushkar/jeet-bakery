"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF2F2] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.10),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C89B3C]">
            Contact Us
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#6F0A12] md:text-6xl">
            We'd Love To Hear From You
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#2B2B2B]/70">
            Whether you're ordering a cake, booking our birthday party hall or
            planning a celebration, we're here to help.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "Address",
                value: "Hisar, Haryana, India",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91 92153 73537",
              },
              {
                icon: Mail,
                title: "Email",
                value: "jeetbakery@gmail.com",
              },
              {
                icon: Clock,
                title: "Opening Hours",
                value: "Monday – Sunday\n8:00 AM – 10:00 PM",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-5 rounded-[2rem] border border-[#EFCACA] bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#C89B3C]/60"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFE4E4] text-[#C1121F]">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#6F0A12]">
                      {item.title}
                    </h3>

                    <p className="mt-2 whitespace-pre-line leading-7 text-[#2B2B2B]/70">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="rounded-[2.5rem] border border-[#EFCACA] bg-white p-8 shadow-[0_25px_70px_rgba(111,10,18,0.12)]">
            <h3 className="font-serif text-3xl font-bold text-[#6F0A12]">
              Send a Message
            </h3>

            <p className="mt-2 text-[#2B2B2B]/70">
              We'll get back to you as soon as possible.
            </p>

            <form
              className="mt-8 space-y-5"
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
                  `https://wa.me/919215373537?text=${encodeURIComponent(text)}`,
                  "_blank"
                );
              }}
            >
              {[
                ["name", "Your Name", "text"],
                ["email", "Email Address", "email"],
                ["phone", "Phone Number", "tel"],
              ].map(([name, placeholder, type]) => (
                <input
                  key={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  required
                  className="w-full rounded-xl border border-[#EFCACA] px-5 py-4 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
                />
              ))}

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us how we can help..."
                className="w-full rounded-xl border border-[#EFCACA] px-5 py-4 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#C1121F] py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(193,18,31,0.30)] transition duration-300 hover:-translate-y-1 hover:bg-[#9B0D18]"
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