import { loginAdmin } from "./actions";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFF9F3] px-6">
      <div className="w-full max-w-md rounded-[2rem] border border-[#E8D9C8] bg-white p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
          Jeet Bakery
        </p>

        <h1 className="mt-3 font-serif text-4xl font-bold text-[#1F1F1F]">
          Admin Login
        </h1>

        <p className="mt-3 text-zinc-600">
          Sign in to manage Jeet Bakery.
        </p>

        <form action={loginAdmin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1F1F1F]">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-[#E8D9C8] px-4 py-3 text-[#1F1F1F] placeholder:text-zinc-400 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#F6E7D8]"
              placeholder="admin@jeetbakery.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1F1F1F]">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              className="w-full rounded-xl border border-[#E8D9C8] px-4 py-3 text-[#1F1F1F] placeholder:text-zinc-400 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#F6E7D8]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#4E342E] py-3 font-semibold text-white transition hover:bg-[#3b2722]"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}