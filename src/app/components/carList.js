import React from "react";
import CarCard from "./carCard";

const CarList = ({ Cars }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
      {Cars.map((car, index) => (
        <CarCard key={index} car={car} index={index} />
      ))}
    </div>
  );
};


export default CarList;
