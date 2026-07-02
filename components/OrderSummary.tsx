"use client";

import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="rounded-[2rem] border border-[#E8D9C8] bg-[#FFF9F3] p-6">
      <h2 className="text-2xl font-bold text-[#4E342E]">Order Summary</h2>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-[#1F1F1F]/60">No items in cart.</p>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.slug}-${item.weight}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-[#E8D9C8] bg-white p-4"
              >
                <div>
                  <p className="font-bold text-[#4E342E]">{item.name}</p>

                  <p className="mt-1 text-sm text-[#1F1F1F]/55">
                    {item.weight} × {item.quantity}
                  </p>
                </div>

                <p className="font-bold text-[#C89B3C]">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-[#E8D9C8] pt-5">
            <div className="flex items-center justify-between text-2xl font-bold text-[#4E342E]">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}