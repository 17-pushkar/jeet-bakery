"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageUploadInput({
  defaultImage = "",
}: {
  defaultImage?: string;
}) {
  const [imageUrl, setImageUrl] = useState(defaultImage);
  const [isUploading, setIsUploading] = useState(false);

  async function handleUpload(file: File) {
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setImageUrl(data.imageUrl);
    setIsUploading(false);
  }

  return (
    <div className="space-y-4">
      <label
        htmlFor="product-image"
        className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50 p-8 text-center transition hover:border-orange-500 hover:bg-orange-100"
      >
        <div className="text-5xl">📷</div>

        <p className="mt-3 text-lg font-semibold text-zinc-900">
          Click to upload product image
        </p>

        <p className="mt-1 text-sm text-zinc-500">
          JPG, PNG or WEBP
        </p>

        <input
          id="product-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) handleUpload(file);
          }}
        />
      </label>

      {isUploading && (
        <div className="rounded-xl bg-orange-100 px-4 py-3 text-center font-medium text-orange-700">
          Uploading image...
        </div>
      )}

      {imageUrl && (
  <div className="space-y-3">
    <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-orange-100">
      <Image
        src={imageUrl}
        alt="Uploaded product image"
        fill
        className="object-cover"
      />
    </div>

    <div className="rounded-xl bg-green-100 px-4 py-3 text-center font-medium text-green-700">
      ✅ Image uploaded successfully
    </div>
  </div>
)}

      <input type="hidden" name="image" value={imageUrl} />
    </div>
  );
}