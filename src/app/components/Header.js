"use client";
import { useState } from "react";
import { FaUserCircle, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [location, setLocation] = useState("Mumbai");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const countries = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-white relative w-full z-50">
      {/* Left - Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="https://media.cars24.com/cars24/seo/static/1_20230830_1693395013.png"
          alt="CARS24"
          className="h-8"
        />

        {/* Location Modal Trigger */}
        <div className="relative hidden md:block">
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <span className="text-lg font-medium">{location}</span>
            <IoMdArrowDropdown size={18} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation - Hidden on Mobile */}
      <nav
        className={`md:flex space-x-6 text-gray-700 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-transform transform md:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:flex-row flex-col p-5 md:p-0`}
      >
        {["Buy used car", "Sell car", "Car finance", "New cars", "Car services"].map((item, index) => (
          <div key={index} className="flex items-center space-x-1 cursor-pointer py-2 md:py-0">
            <span>{item}</span>
            <IoMdArrowDropdown size={16} />
          </div>
        ))}
      </nav>

      {/* Right - Icons & Account */}
      <div className="flex items-center space-x-4">
        <FaHeart size={20} className="text-gray-600 cursor-pointer hidden md:block" />
        <div className="flex items-center space-x-2 cursor-pointer hidden md:flex">
          <FaUserCircle size={24} className="text-gray-600" />
          <span>Hello, Ankit</span>
          <IoMdArrowDropdown size={16} />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Select Your City</h2>
            <ul>
              {countries.map((city, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setLocation(city);
                    setModalOpen(false);
                  }}
                >
                  {city}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;