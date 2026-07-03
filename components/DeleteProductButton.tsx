"use client";

import { deleteProduct } from "@/app/admin/products/actions";

type DeleteProductButtonProps = {
  productId: string;
  productName: string;
};

export default function DeleteProductButton({
  productId,
  productName,
}: DeleteProductButtonProps) {
  return (
    <form
      action={deleteProduct}
      onSubmit={(event) => {
        const confirmed = window.confirm(
          `Are you sure you want to delete "${productName}"?`
        );

        if (!confirmed) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={productId} />

      <button
        type="submit"
        className="w-full rounded-full border border-[#C1121F]/20 bg-[#FFE4E4] px-4 py-2 text-sm font-semibold text-[#C1121F] transition hover:bg-[#C1121F] hover:text-white sm:w-72"
      >
        Delete Product
      </button>
    </form>
  );
}