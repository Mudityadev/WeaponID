import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-500 text-sm py-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} <strong className="text-black font-medium">WeaponID</strong>.The Muditya Raghav Producton.
      </p>
    </footer>
  );
};

export default Footer;
