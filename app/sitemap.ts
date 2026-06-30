import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://munna-sweets.vercel.app",
      priority: 1,
    },
    {
      url: "https://munna-sweets.vercel.app/products",
      priority: 0.9,
    },
    {
      url: "https://munna-sweets.vercel.app/contact",
      priority: 0.8,
    },
  ];
}