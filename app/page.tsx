"use client"

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<{ name: string; confidence: string } | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      // Dummy result
      setTimeout(() => {
        setResult({
          name: 'AK-47',
          confidence: '94.7%',
        });
      }, 1000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">WeaponID - AI Detection</h1>

      <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full bg-gray-700 text-white border border-gray-600 mb-4 p-2 rounded"
        />

        {selectedImage && (
          <div className="mb-4">
            <Image
              src={selectedImage}
              alt="Uploaded Preview"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        )}

        {result && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">Prediction Result:</h2>
            <p className="text-lg mt-2">Weapon: {result.name}</p>
            <p className="text-gray-300">Confidence: {result.confidence}</p>
          </div>
        )}
      </div>
    </main>
  );
}
