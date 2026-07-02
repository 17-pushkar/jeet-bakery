import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Jeet Bakery | Cakes, Fast Food & Party Hall Booking",
    template: "%s | Jeet Bakery",
  },
  description:
    "Jeet Bakery offers delicious cakes, pastries, pizzas, burgers, snacks, chocolates, birthday decorations, party supplies and premium party hall booking for every celebration.",
  keywords: [
    "Jeet Bakery",
    "Birthday Cakes",
    "Custom Cakes",
    "Pastries",
    "Bakery",
    "Pizza",
    "Burger",
    "Fast Food",
    "Birthday Decoration",
    "Party Hall",
    "Party Booking",
    "Chocolate",
    "Snacks",
    "Celebration",
  ],
  authors: [{ name: "Jeet Bakery" }],
  metadataBase: new URL("https://jeet-bakery.vercel.app"),
  openGraph: {
    title: "Jeet Bakery | Cakes, Fast Food & Party Hall Booking",
    description:
      "Fresh cakes, delicious fast food, party decorations, premium birthday celebrations and party hall booking.",
    url: "https://jeet-bakery.vercel.app",
    siteName: "Jeet Bakery",
    type: "website",
    images: [
    {
      url: "/brand/jeet-bakery-logo.png",
      width: 1200,
      height: 630,
      alt: "Jeet Bakery",
    },
  ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeet Bakery | Cakes, Fast Food & Party Hall Booking",
    description:
      "Fresh cakes, delicious fast food, party decorations and premium birthday celebrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <CartProvider>
          {children}
          <Toaster position="top-center" />
        </CartProvider>
      </body>
    </html>
  );
}