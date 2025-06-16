"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<{
    name: string;
    confidence: string;
  } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      // Dummy result
      setTimeout(() => {
        setResult({
          name: "AK-74M",
          confidence: "95.2%",
        });
      }, 1000);
    }
  };

  return (
    <main className="bg-white min-h-screen py-10 px-6 text-black">
      <h1 className="text-4xl font-bold text-center mb-6">
        Identify weapons with <span className="italic font-semibold">AI</span>
      </h1>

      <div className="flex flex-col items-center">
        {/* Upload button */}
        <label
          htmlFor="upload"
          className="cursor-pointer flex items-center justify-center border border-gray-300 px-6 py-4 rounded-xl text-gray-700 hover:bg-gray-100 transition mb-10"
        >
          <span className="text-xl mr-2">＋</span>
          Upload an image of a weapon…
          <input
            type="file"
            id="upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        {/* Result display */}
        {selectedImage && result && (
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center">
            {/* Image + label */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 w-full md:w-1/2 shadow">
              <Image
                src={selectedImage}
                alt="Weapon Preview"
                width={500}
                height={300}
                className="rounded-lg mb-4 object-contain"
              />
              <h2 className="text-2xl font-bold">{result.name}</h2>
              <p className="text-gray-600">{result.confidence}</p>
            </div>

            {/* Metadata panel */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 w-full md:w-1/2 shadow">
              <h3 className="text-xl font-semibold mb-4">Weapon Intelligence</h3>
              <div className="text-sm text-gray-800 space-y-2">
                <p><strong>Origin Country:</strong> Russia</p>
                <p><strong>Type:</strong> Assault Rifle</p>
                <p><strong>Manufacturer:</strong> Kalashnikov Concern</p>
                <p><strong>Production Years:</strong> 1991–present</p>
                <p><strong>How It Works:</strong> Gas-operated, rotating bolt</p>
                <p><strong>Conflict Zones Used:</strong> Syrian Civil War, War in Donbas</p>
                <p><strong>Last Known Use:</strong> Bakhmut, January 2023</p>
                <p><strong>Export History:</strong> Belarus, India, Mongolia</p>
                <p>
                  <strong>External Sources:</strong>{" "}
                  <a href="https://wikipedia.org" className="text-blue-600 hover:underline" target="_blank">Wikipedia</a>,{" "}
                  <a href="https://sipri.org" className="text-blue-600 hover:underline" target="_blank">SIPRI</a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
