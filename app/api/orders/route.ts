import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type CartItem = {
  slug: string;
  quantity: number;
  weight: string;
  price: number;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Cart is empty" },
        { status: 400 }
      );
    }

    const items: CartItem[] = body.items;

    const order = await prisma.$transaction(async (tx) => {
      for (const item of items) {
        const product = await tx.product.findUnique({
          where: {
            slug: String(item.slug),
          },
        });

        if (!product) {
          throw new Error(`Product not found: ${item.slug}`);
        }

        if (product.stock < Number(item.quantity)) {
          throw new Error(
            `Not enough stock for ${product.name}. Available stock: ${product.stock}`
          );
        }
      }

      for (const item of items) {
        await tx.product.update({
          where: {
            slug: String(item.slug),
          },
          data: {
            stock: {
              decrement: Number(item.quantity),
            },
          },
        });
      }

      return tx.order.create({
        data: {
          totalAmount: Number(body.totalAmount),
          customer: {
            create: {
              name: String(body.name),
              phone: String(body.phone),
              address: String(body.address),
            },
          },
          items: {
            create: items.map((item) => ({
              quantity: Number(item.quantity),
              weight: String(item.weight),
              price: Number(item.price),
              product: {
                connect: {
                  slug: String(item.slug),
                },
              },
            })),
          },
        },
      });
    });

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (error) {
    console.error("ORDER_API_ERROR:", error);

    const message =
      error instanceof Error ? error.message : "Order failed";

    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}