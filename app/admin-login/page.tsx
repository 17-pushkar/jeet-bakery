import Image from "next/image";
import { LockKeyhole } from "lucide-react";
import { loginAdmin } from "./actions";

export default function AdminLoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF2F2] px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.12),transparent_35%)]" />

      <section className="relative w-full max-w-md overflow-hidden rounded-[3rem] border border-[#EFCACA] bg-white shadow-[0_30px_80px_rgba(111,10,18,0.14)]">
        <div className="relative bg-[#3A0509] px-8 py-10 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(200,155,60,0.16),transparent_34%)]" />

          <div className="relative">
            <Image
              src="/brand/jeet-bakery-logo.png"
              alt="Jeet Bakery Logo"
              width={90}
              height={90}
              className="mx-auto rounded-full bg-white p-1"
              priority
            />

            <p className="mt-5 text-sm font-black uppercase tracking-[0.3em] text-[#C89B3C]">
              Jeet Bakery
            </p>

            <h1 className="mt-3 font-serif text-4xl font-bold">
              Admin Login
            </h1>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-7 flex items-center gap-3 rounded-2xl border border-[#EFCACA] bg-[#FFF7F7] p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFE4E4] text-[#C1121F]">
              <LockKeyhole size={22} />
            </div>

            <p className="text-sm leading-6 text-[#2B2B2B]/70">
              Sign in to manage products, orders and bakery dashboard.
            </p>
          </div>

          <form action={loginAdmin} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#6F0A12]">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-[#EFCACA] bg-[#FFF7F7] px-4 py-3 text-[#2B2B2B] placeholder:text-[#2B2B2B]/40 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
                placeholder="admin@jeetbakery.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#6F0A12]">
                Password
              </label>

              <input
                type="password"
                name="password"
                required
                className="w-full rounded-xl border border-[#EFCACA] bg-[#FFF7F7] px-4 py-3 text-[#2B2B2B] placeholder:text-[#2B2B2B]/40 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#C1121F] py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(193,18,31,0.30)] transition hover:-translate-y-1 hover:bg-[#9B0D18]"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}