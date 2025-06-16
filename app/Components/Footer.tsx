import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 text-sm py-4 mt-10 text-center">
      <p>
        &copy; {new Date().getFullYear()} WeaponID. Built with 💻 for transparency in conflict zones.
      </p>
    </footer>
  );
};

export default Footer;
