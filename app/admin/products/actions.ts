"use server";

import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { redirect } from "next/navigation";

function getCloudinaryPublicId(imageUrl: string) {
  if (!imageUrl.includes("res.cloudinary.com")) return null;

  const parts = imageUrl.split("/upload/");
  if (!parts[1]) return null;

  const pathAfterUpload = parts[1].replace(/^v\d+\//, "");
  const publicId = pathAfterUpload.replace(/\.[^/.]+$/, "");

  return publicId;
}

async function deleteCloudinaryImage(imageUrl: string) {
  const publicId = getCloudinaryPublicId(imageUrl);

  if (!publicId) return;

  await cloudinary.uploader.destroy(publicId);
}

export async function createProduct(formData: FormData) {
  const name = String(formData.get("name"));
  const slug = String(formData.get("slug"));
  const image = String(formData.get("image"));
  const category = String(formData.get("category"));
  const badge = String(formData.get("badge"));
  const description = String(formData.get("description"));
  const ingredientsText = String(formData.get("ingredients"));
  const stock = Number(formData.get("stock"));

  const ingredients = ingredientsText
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  await prisma.product.create({
    data: {
      name,
      slug,
      image,
      category,
      badge,
      description,
      ingredients,
      featured: true,
      stock,
      weightOptions: {
        create: [
          { weight: "250g", price: Number(formData.get("price250g")) },
          { weight: "500g", price: Number(formData.get("price500g")) },
          { weight: "1kg", price: Number(formData.get("price1kg")) },
          { weight: "2kg", price: Number(formData.get("price2kg")) },
        ],
      },
    },
  });

  redirect("/admin/products");
}

export async function deleteProduct(formData: FormData) {
  const id = String(formData.get("id"));

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (product?.image) {
    await deleteCloudinaryImage(product.image);
  }

  await prisma.product.delete({
    where: {
      id,
    },
  });

  redirect("/admin/products");
}

export async function updateProduct(formData: FormData) {
  const id = String(formData.get("id"));
  const newImage = String(formData.get("image"));

  const existingProduct = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  const ingredients = String(formData.get("ingredients"))
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  await prisma.product.update({
    where: { id },
    data: {
      name: String(formData.get("name")),
      slug: String(formData.get("slug")),
      image: newImage,
      category: String(formData.get("category")),
      stock: Number(formData.get("stock")),
      badge: String(formData.get("badge")),
      description: String(formData.get("description")),
      ingredients,
      weightOptions: {
        deleteMany: {},
        create: [
          { weight: "250g", price: Number(formData.get("price250g")) },
          { weight: "500g", price: Number(formData.get("price500g")) },
          { weight: "1kg", price: Number(formData.get("price1kg")) },
          { weight: "2kg", price: Number(formData.get("price2kg")) },
        ],
      },
    },
  });

  if (existingProduct?.image && existingProduct.image !== newImage) {
    await deleteCloudinaryImage(existingProduct.image);
  }

  redirect("/admin/products");
}