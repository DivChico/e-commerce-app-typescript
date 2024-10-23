// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-2xl font-bold">E-com</div>
        <nav className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="/services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
