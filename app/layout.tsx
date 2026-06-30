import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Munna Sweets | Fresh Indian Sweets & Namkeen",
    template: "%s | Munna Sweets",
  },
  description:
    "Munna Sweets offers fresh Indian sweets, namkeen, gift boxes, and festive specials prepared with premium ingredients and traditional recipes.",
  keywords: [
    "Munna Sweets",
    "Indian sweets",
    "Mithai",
    "Rasgulla",
    "Gulab Jamun",
    "Kaju Katli",
    "Namkeen",
    "Sweet Shop",
    "Fresh Sweets",
  ],
  authors: [{ name: "Munna Sweets" }],

  metadataBase: new URL("https://munna-sweets.vercel.app"),

openGraph: {
  title: "Munna Sweets | Fresh Indian Sweets & Namkeen",
  description:
    "Fresh Indian sweets, namkeen, gift boxes and festive specials.",
  url: "https://munna-sweets.vercel.app",
  siteName: "Munna Sweets",
  type: "website",
},

twitter: {
  card: "summary_large_image",
  title: "Munna Sweets | Fresh Indian Sweets & Namkeen",
  description:
    "Fresh Indian sweets, namkeen, gift boxes and festive specials.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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