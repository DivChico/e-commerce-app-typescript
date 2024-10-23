// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-sm">
          &copy; 2024 abdullah hamdy alatawwna. All rights reserved.
        </div>
        <div className="space-x-4">
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
