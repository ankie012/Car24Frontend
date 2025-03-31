import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import clsx from "clsx";

const CarCard = ({ car, index }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation(); // Prevents navigation when clicking the heart
    setLiked(!liked);
  };

  return (
    // <Link href={`/cardetails?carName=${encodeURIComponent(car.name)}`} passHref>
      <div className="cursor-pointer">
        <Card
          className={clsx(
            "p-4 rounded-2xl border relative w-full min-w-[300px] sm:min-w-[400px] md:min-w-[250px] lg:min-w-[300px] transition-transform transform hover:scale-105 mx-auto",
            index % 2 === 0 ? "bg-gray-50 shadow-lg" : "bg-white shadow-md",
            "mb-6"
          )}
        >
          {/* Heart Icon (Clickable) */}
          <Heart
            className={clsx(
              "absolute top-4 right-4 cursor-pointer transition-colors duration-300",
              liked ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-red-500"
            )}
            onClick={toggleLike}
          />

          {/* Car Image */}
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-40 object-cover rounded-lg"
          />

          <CardContent className="mt-4">
            <h2 className="text-lg font-bold">
              {car.modelYear} {car.brand} {car.name} {car.variant}
            </h2>

            <p className="text-sm text-gray-500">
              {car.kmDriven} km | {car.fuel} | {car.transmission}
            </p>

            <div className="flex justify-between items-center mt-2">
              <p className="text-md font-semibold text-blue-600">
                EMI ₹{car.emi}/m
              </p>
              <p className="text-lg font-bold text-green-600">
                ₹{car.price.toLocaleString()} lakh
              </p>
            </div>

            <p className="text-xs text-gray-400">+ other charges</p>

            <div className="flex flex-wrap gap-2 mt-3 text-xs">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                CARS24 Assured
              </span>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full">
                Highlights
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-2">📍 {car.location}</p>
          </CardContent>
        </Card>
      </div>
    // </Link>
  );
};

export default CarCard;
