import ImageUploadInput from "@/components/ImageUploadInput";
import { createProduct } from "../actions";

export default function NewProductPage() {
  const inputClass =
    "w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200";

  return (
    <main className="min-h-screen bg-zinc-100 px-6 py-24">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md">
        <h1 className="text-4xl font-bold text-zinc-900">Add New Product</h1>

        <form action={createProduct} className="mt-8 space-y-5">
          <input name="name" required className={inputClass} placeholder="Product name" />

          <input
            name="slug"
            required
            pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
            title="Use lowercase letters, numbers, and hyphens only. Example: motichoor-laddu"
            className={inputClass}
            placeholder="Slug e.g. motichoor-laddu"
          />

         <div>
  <label className="mb-2 block font-semibold text-zinc-800">
    Product Image
  </label>

  <ImageUploadInput />
</div>

          <input name="category" required className={inputClass} placeholder="Category" />
          <input
  name="stock"
  required
  min="0"
  type="number"
  className={inputClass}
  placeholder="Stock quantity e.g. 25"
/>

          <input name="badge" className={inputClass} placeholder="Badge e.g. ⭐ Best Seller" />

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
            placeholder="Ingredients separated by comma e.g. Khoya, Sugar, Ghee"
          />

          <h2 className="pt-4 text-2xl font-bold text-zinc-900">Weight Prices</h2>

          <input name="price250g" required min="1" type="number" className={inputClass} placeholder="250g price e.g. 60" />
          <input name="price500g" required min="1" type="number" className={inputClass} placeholder="500g price e.g. 110" />
          <input name="price1kg" required min="1" type="number" className={inputClass} placeholder="1kg price e.g. 220" />
          <input name="price2kg" required min="1" type="number" className={inputClass} placeholder="2kg price e.g. 430" />

          <button
            type="submit"
            className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Save Product
          </button>
        </form>
      </section>
    </main>
  );
}