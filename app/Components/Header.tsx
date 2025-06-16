import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg shadow-md p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">WeaponID</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link href="#how-it-works" className="text-gray-700 hover:text-black">How It Works</Link>
        <Link href="#about" className="text-gray-700 hover:text-black">About</Link>
        <Link href="#login" className="text-blue-600 hover:underline">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
