import { prisma } from "@/lib/prisma";
import ImageUploadInput from "@/components/ImageUploadInput";
import { updateProduct } from "../../actions";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: { weightOptions: true },
  });

  if (!product) {
    return (
      <main className="min-h-screen bg-[#FFF2F2] p-10">
        <h1 className="text-3xl font-bold text-[#6F0A12]">
          Product not found
        </h1>
      </main>
    );
  }

  const getPrice = (weight: string) =>
    product.weightOptions.find((item) => item.weight === weight)?.price ?? 0;

  const inputClass =
    "w-full rounded-xl border border-[#EFCACA] bg-white px-4 py-3 text-[#2B2B2B] placeholder:text-zinc-400 outline-none transition focus:border-[#C89B3C] focus:ring-2 focus:ring-[#E8C978]/40";

  return (
    <main className="min-h-screen bg-[#FFF2F2] px-6 py-10">
      <section className="mx-auto max-w-3xl">
        <div className="rounded-[2rem] border border-[#C89B3C]/40 bg-[#3A0509] p-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B3C]">
            Jeet Bakery Admin
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold">Edit Product</h1>

          <p className="mt-3 text-[#FFE4E4]">
            Update product details, stock, image, and pricing.
          </p>
        </div>

        <form
          action={updateProduct}
          className="mt-8 space-y-5 rounded-3xl border border-[#EFCACA] bg-white p-8 shadow-sm"
        >
          <input type="hidden" name="id" value={product.id} />

          <input name="name" defaultValue={product.name} className={inputClass} />

          <input name="slug" defaultValue={product.slug} className={inputClass} />

          <div>
            <label className="mb-2 block font-semibold text-[#6F0A12]">
              Product Image
            </label>

            <ImageUploadInput defaultImage={product.image} />
          </div>

          <input
            name="category"
            defaultValue={product.category}
            className={inputClass}
          />

          <input
            name="stock"
            type="number"
            min="0"
            defaultValue={product.stock}
            className={inputClass}
            placeholder="Stock quantity"
          />

          <input
            name="badge"
            defaultValue={product.badge ?? ""}
            className={inputClass}
          />

          <textarea
            name="description"
            defaultValue={product.description}
            className={inputClass}
            rows={4}
          />

          <input
            name="ingredients"
            defaultValue={product.ingredients.join(", ")}
            className={inputClass}
          />

          <h2 className="pt-4 font-serif text-2xl font-bold text-[#6F0A12]">
            Weight Prices
          </h2>

          <input
            name="price250g"
            type="number"
            defaultValue={getPrice("250g")}
            className={inputClass}
          />

          <input
            name="price500g"
            type="number"
            defaultValue={getPrice("500g")}
            className={inputClass}
          />

          <input
            name="price1kg"
            type="number"
            defaultValue={getPrice("1kg")}
            className={inputClass}
          />

          <input
            name="price2kg"
            type="number"
            defaultValue={getPrice("2kg")}
            className={inputClass}
          />

          <button
            type="submit"
            className="rounded-full bg-[#C1121F] px-7 py-3 font-semibold text-white transition hover:bg-[#9B0D18]"
          >
            Update Product
          </button>
        </form>
      </section>
    </main>
  );
}