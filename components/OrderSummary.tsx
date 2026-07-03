"use client";

import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="rounded-[2.5rem] border border-[#EFCACA] bg-[#FFF7F7] p-7 shadow-[0_20px_50px_rgba(111,10,18,0.10)]">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#C89B3C]">
          Order
        </p>

        <h2 className="mt-2 font-serif text-3xl font-bold text-[#6F0A12]">
          Order Summary
        </h2>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-[#2B2B2B]/60">
          No items in cart.
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.slug}-${item.weight}`}
                className="rounded-[1.5rem] border border-[#EFCACA] bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#6F0A12]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#2B2B2B]/60">
                      {item.weight} × {item.quantity}
                    </p>
                  </div>

                  <p className="font-black text-[#C1121F]">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-[#EFCACA] pt-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#6F0A12]">
                Total
              </span>

              <span className="text-3xl font-black text-[#C1121F]">
                ₹{totalPrice}
              </span>
            </div>

            <p className="mt-3 text-sm text-[#2B2B2B]/55">
              Delivery charges (if applicable) will be confirmed by Jeet Bakery.
            </p>
          </div>
        </>
      )}
    </div>
  );
}