"use client";

import { useCart } from "@/context/CartContext";

export default function OrderSummary() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
   return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6">
      <h2 className="text-2xl font-bold text-zinc-900">
        Order Summary
      </h2>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-zinc-600">
          No items in cart.
        </p>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.slug}-${item.weight}`}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-zinc-900">
                    {item.name}
                  </p>

                 <p className="text-sm text-zinc-500">
  {item.weight} × {item.quantity}
</p>
                </div>

               <p className="font-semibold text-orange-600">
  ₹{item.price * item.quantity}
</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-5">
            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}