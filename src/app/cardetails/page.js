"use client";
import { useRouter } from "next/router";
import React from 'react'
import Cars from '../components/carObject'
import { useSearchParams } from "next/navigation"; 


const page = () => {


  const router = useRouter();
  const { carName } = router.query;

  // Find the car that matches the selected name
  const car = Cars.find((c) => c.name === carName);

  if (!car) {
    return <p className="text-center text-red-500 text-xl mt-10">Car not found!</p>;
  }



  return (
    <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-2xl font-bold">{car.modelYear} {car.brand} {car.name}</h1>
    <img src={car.image} alt={car.name} className="w-full h-80 object-cover mt-4 rounded-lg" />
    
    <p className="text-gray-600 mt-2">
      {car.kmDriven} km | {car.fuel} | {car.transmission}
    </p>

    <p className="text-lg font-bold text-green-600 mt-4">
      ₹{car.price.toLocaleString()} lakh
    </p>

    <div className="bg-gray-100 p-4 mt-4 rounded-lg">
      <p><strong>Body Type:</strong> {car.bodyType}</p>
      <p><strong>Seats:</strong> {car.seats}</p>
      <p><strong>RTO:</strong> {car.RTO}</p>
      <p><strong>Safety Rating:</strong> {car.safety} ⭐</p>
    </div>

    <p className="mt-4 text-gray-500">📍 {car.location}</p>
  </div>
  )
}

export default page