"use client";

import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      {/* Left logo */}
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-black text-lg" />
        <span className="text-xl font-bold tracking-tight text-black">WEAPON ID | Muditya Raghav</span>
      </div>

      {/* Right navigation */}
      <div className="flex items-center space-x-6">
        <Link href="#" className="text-sm font-medium text-gray-800 hover:underline">
          Search Weapons
        </Link>
        <Link href="#" className="text-sm font-medium text-gray-800 hover:underline">
          User History
        </Link>
        <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
          <FaUserCircle className="text-2xl text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;
