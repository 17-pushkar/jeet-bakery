import ImageUploadInput from "@/components/ImageUploadInput";
import { createProduct } from "../actions";

export default function NewProductPage() {
  const inputClass =
    "w-full rounded-xl border border-[#EFCACA] bg-white px-4 py-3 text-[#2B2B2B] placeholder:text-zinc-400 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#E8C978]/40";

  return (
    <main className="min-h-screen bg-[#FFF2F2] px-6 py-10">
      <section className="mx-auto max-w-3xl">
        <div className="rounded-[2rem] border border-[#C89B3C]/40 bg-[#3A0509] p-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Jeet Bakery Admin
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold">
            Add New Product
          </h1>

          <p className="mt-3 text-[#FFE4E4]">
            Add cakes, pastries, fast food, party supplies, and bakery items.
          </p>
        </div>

        <form
          action={createProduct}
          className="mt-8 space-y-5 rounded-3xl border border-[#EFCACA] bg-white p-8 shadow-sm"
        >
          <input
            name="name"
            required
            className={inputClass}
            placeholder="Product name"
          />

          <input
            name="slug"
            required
            pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
            title="Use lowercase letters, numbers, and hyphens only. Example: chocolate-truffle-cake"
            className={inputClass}
            placeholder="Slug e.g. chocolate-truffle-cake"
          />

          <div>
            <label className="mb-2 block font-semibold text-[#6F0A12]">
              Product Image
            </label>

            <ImageUploadInput />
          </div>

          <input
            name="category"
            required
            className={inputClass}
            placeholder="Category e.g. Cakes"
          />

          <input
            name="stock"
            required
            min="0"
            type="number"
            className={inputClass}
            placeholder="Stock quantity e.g. 25"
          />

          <input
            name="badge"
            className={inputClass}
            placeholder="Badge e.g. ⭐ Best Seller"
          />

          <textarea
            name="description"
            required
            className={inputClass}
            placeholder="Description"
            rows={4}
          />

          <input
            name="ingredients"
            required
            className={inputClass}
            placeholder="Ingredients separated by comma e.g. Chocolate, Cream, Sponge"
          />

          <h2 className="pt-4 font-serif text-2xl font-bold text-[#6F0A12]">
            Weight Prices
          </h2>

          <input
            name="price250g"
            required
            min="1"
            type="number"
            className={inputClass}
            placeholder="250g price e.g. 150"
          />

          <input
            name="price500g"
            required
            min="1"
            type="number"
            className={inputClass}
            placeholder="500g price e.g. 300"
          />

          <input
            name="price1kg"
            required
            min="1"
            type="number"
            className={inputClass}
            placeholder="1kg price e.g. 600"
          />

          <input
            name="price2kg"
            required
            min="1"
            type="number"
            className={inputClass}
            placeholder="2kg price e.g. 1150"
          />

          <button
            type="submit"
            className="rounded-full bg-[#C1121F] px-7 py-3 font-semibold text-white transition hover:bg-[#9B0D18]"
          >
            Save Product
          </button>
        </form>
      </section>
    </main>
  );
}