// src/components/CarProfile.jsx
import React from "react";

export default function CarProfile({ car }) {
  if (!car) return null;

  const info = car.basicInfo;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-[400px] mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-3">{info?.name || "Unknown Car"}</h2>
      <p><strong>Brand:</strong> {info?.brand}</p>
      <p><strong>Model:</strong> {info?.model}</p>
      <p><strong>Price:</strong> ₹{info?.price}</p>
      <p><strong>Fuel Type:</strong> {info?.fuelType}</p>
      <p><strong>Transmission:</strong> {info?.transmission}</p>
    </div>
  );
}
