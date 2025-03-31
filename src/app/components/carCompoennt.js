"use client";
import React, { useState } from "react";
import CarList from "./carList";
import SearchBar from "./carSearch";
import BudgetFilter from "./budgetFilter";
import FuelFilter from "./fuelFilter";
import BodyTypeFilter from "./carBodyTypeFilter";
import TransmissionFilter from "./TransmissionFilter";
import ColorFilter from "./ColorFilter";
import SeatsFilter from "./SeatsFilter";
import OwnerFilter from "./OwnerFilter";
import RTOFilter from "./RTOFilter";
import DiscountFilter from "./DiscountFilter";
import KmDrivenFilter from "./KmDrivenFilter";
import Cars from "./carObject";

const CarComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [minBudget, setMinBudget] = useState(100000);
  const [maxBudget, setMaxBudget] = useState(2500000);
  const [selectedFuels, setSelectedFuels] = useState([]);
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [selectedTransmission, setSelectedTransmission] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(null);
  const [selectedOwners, setSelectedOwners] = useState([]);
  const [selectedRTOs, setSelectedRTOs] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState(null);


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // State for toggling sidebar
  // Assuming Cars is your car data

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  const handleBudgetChange = (min, max) => {
    setMinBudget(min);
    setMaxBudget(max);
  };

  const filteredCars = Cars.filter((car) => {
    const carDiscount = parseInt(car.discount); // Convert discount string (e.g., "5%") to a number

    return (
      (car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.modelYear.toString().includes(searchQuery)) &&
      car.price >= minBudget &&
      car.price <= maxBudget &&
      (selectedFuels.length === 0 || selectedFuels.includes(car.fuel)) &&
      (!selectedBodyType || car.bodyType === selectedBodyType) &&
      (!selectedTransmission || car.transmission === selectedTransmission) &&
      (!selectedColor || car.color === selectedColor) &&
      (!selectedSeats || car.seats === selectedSeats) &&
      (selectedOwners.length === 0 || selectedOwners.includes(car.owners)) &&
      (selectedRTOs.length === 0 || selectedRTOs.includes(car.RTO)) &&
      (!selectedDiscount || carDiscount >= selectedDiscount) // Filter discount correctly
    );
  });

  return (
    <div className="container mx-auto flex relative">
    {/* Overlay */}
    {isSidebarOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={toggleSidebar}
      ></div>
    )}

    {/* Sidebar */}
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out z-50
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:w-1/5`}
    >
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-gray-700 text-2xl absolute top-4 right-4"
      >
        ✖ {/* Close Icon */}
      </button>

      <BudgetFilter onBudgetChange={handleBudgetChange} />
      <FuelFilter onFuelChange={setSelectedFuels} carData={Cars} />
      <BodyTypeFilter onBodyTypeChange={setSelectedBodyType} carData={Cars} />
      <TransmissionFilter onTransmissionChange={setSelectedTransmission} carData={Cars} />
      <ColorFilter onColorChange={setSelectedColor} carData={Cars} />
      <SeatsFilter onSeatsChange={setSelectedSeats} carData={Cars} />
      <OwnerFilter onOwnerChange={setSelectedOwners} carData={Cars} />
      <RTOFilter onRTOChange={setSelectedRTOs} carData={Cars} />
      <DiscountFilter onDiscountChange={setSelectedDiscount} />
    </div>

    {/* Main Content */}
    <div className="flex-1 p-4 relative z-10">
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-4 text-2xl text-gray-700 fixed top-20 left-4 z-50 bg-white rounded-full shadow-md"
      >
        &#9776; {/* Hamburger Icon */}
      </button>

      <h1 className="text-3xl font-bold text-center my-6">Car Listings</h1>
      <SearchBar onSearch={setSearchQuery} />
      <CarList Cars={filteredCars} />
    </div>
  </div>
  );
};

export default CarComponent;
