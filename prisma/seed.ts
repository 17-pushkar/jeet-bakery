import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const products = [
  {
    name: "Chocolate Truffle Cake",
    slug: "chocolate-truffle-cake",
    description: "Rich chocolate cake for birthdays and premium celebrations.",
    image: "/images/jeet-bakery/cakes.webp",
    category: "Cakes",
    badge: "Best Seller",
    ingredients: ["Chocolate", "Cream", "Cocoa", "Cake Sponge"],
    featured: true,
    stock: 20,
    weightOptions: [
      { weight: "500g", price: 350 },
      { weight: "1kg", price: 650 },
      { weight: "2kg", price: 1250 },
    ],
  },
  {
    name: "Black Forest Cake",
    slug: "black-forest-cake",
    description: "Classic black forest cake with cream and chocolate flakes.",
    image: "/images/jeet-bakery/cakes.webp",
    category: "Cakes",
    badge: "Popular",
    ingredients: ["Chocolate", "Cream", "Cherry", "Cake Sponge"],
    featured: true,
    stock: 18,
    weightOptions: [
      { weight: "500g", price: 320 },
      { weight: "1kg", price: 600 },
      { weight: "2kg", price: 1150 },
    ],
  },
  {
    name: "Red Velvet Cake",
    slug: "red-velvet-cake",
    description: "Elegant red velvet cake with smooth cream frosting.",
    image: "/images/jeet-bakery/cakes.webp",
    category: "Cakes",
    badge: "Premium",
    ingredients: ["Red Velvet Sponge", "Cream Cheese", "Sugar"],
    featured: true,
    stock: 15,
    weightOptions: [
      { weight: "500g", price: 420 },
      { weight: "1kg", price: 800 },
      { weight: "2kg", price: 1550 },
    ],
  },
  {
    name: "Pineapple Cake",
    slug: "pineapple-cake",
    description: "Soft pineapple cake with fruity flavour and fresh cream.",
    image: "/images/jeet-bakery/cakes.webp",
    category: "Cakes",
    badge: "Fresh",
    ingredients: ["Pineapple", "Cream", "Vanilla Sponge"],
    featured: false,
    stock: 16,
    weightOptions: [
      { weight: "500g", price: 300 },
      { weight: "1kg", price: 550 },
    ],
  },
  {
    name: "Chocolate Pastry",
    slug: "chocolate-pastry",
    description: "Soft chocolate pastry for quick sweet cravings.",
    image: "/images/jeet-bakery/pastries.webp",
    category: "Pastries",
    badge: "New",
    ingredients: ["Chocolate", "Cream", "Cake Sponge"],
    featured: false,
    stock: 30,
    weightOptions: [{ weight: "1pc", price: 60 }],
  },
  {
    name: "Pineapple Pastry",
    slug: "pineapple-pastry",
    description: "Fresh pineapple pastry with light cream.",
    image: "/images/jeet-bakery/pastries.webp",
    category: "Pastries",
    badge: null,
    ingredients: ["Pineapple", "Cream", "Sponge"],
    featured: false,
    stock: 25,
    weightOptions: [{ weight: "1pc", price: 55 }],
  },
  {
    name: "Margherita Pizza",
    slug: "margherita-pizza",
    description: "Cheesy pizza made fresh for evening cravings.",
    image: "/images/jeet-bakery/pizza.webp",
    category: "Fast Food",
    badge: "Hot",
    ingredients: ["Cheese", "Pizza Base", "Tomato Sauce"],
    featured: false,
    stock: 20,
    weightOptions: [{ weight: "Regular", price: 149 }],
  },
  {
    name: "Veg Loaded Pizza",
    slug: "veg-loaded-pizza",
    description: "Loaded vegetable pizza with cheese and toppings.",
    image: "/images/jeet-bakery/pizza.webp",
    category: "Fast Food",
    badge: "Popular",
    ingredients: ["Cheese", "Capsicum", "Onion", "Corn"],
    featured: false,
    stock: 18,
    weightOptions: [{ weight: "Regular", price: 199 }],
  },
  {
    name: "Cheese Burger",
    slug: "cheese-burger",
    description: "Fresh burger with cheese, veggies and sauces.",
    image: "/images/jeet-bakery/burgers.webp",
    category: "Fast Food",
    badge: null,
    ingredients: ["Bun", "Cheese", "Veg Patty", "Sauce"],
    featured: false,
    stock: 25,
    weightOptions: [{ weight: "1pc", price: 89 }],
  },
  {
    name: "Birthday Candles",
    slug: "birthday-candles",
    description: "Beautiful candles for cakes and celebrations.",
    image: "/images/jeet-bakery/decorations.webp",
    category: "Party Supplies",
    badge: "Essential",
    ingredients: ["Wax", "Decoration"],
    featured: false,
    stock: 50,
    weightOptions: [{ weight: "1 pack", price: 49 }],
  },
];

async function main() {
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.weightOption.deleteMany();
  await prisma.product.deleteMany();

  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        image: product.image,
        category: product.category,
        badge: product.badge,
        ingredients: product.ingredients,
        featured: product.featured,
        stock: product.stock,
        weightOptions: {
          create: product.weightOptions,
        },
      },
    });
  }

  console.log("Jeet Bakery products seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });