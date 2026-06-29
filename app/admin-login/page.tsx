import { loginAdmin } from "./actions";
export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-zinc-900">
          Admin Login
        </h1>

        <p className="mt-2 text-zinc-600">
          Sign in to manage Munna Sweets.
        </p>

       <form action={loginAdmin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-orange-500"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-orange-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}