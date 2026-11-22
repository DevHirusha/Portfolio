import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 md:px-20 py-6 relative z-10">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500 tracking-wider">
        Dev<span className="text-orange-500">Hirusha</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm text-gray-300 font-medium">
        <li className="text-blue-500 cursor-pointer">Home</li>

        <li className="hover:text-blue-500 cursor-pointer transition-colors">
          About
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition-colors">
          Skills
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition-colors">
          Education
        </li>

        <li className="hover:text-blue-500 cursor-pointer transition-colors">
          Contact
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden text-2xl cursor-pointer">
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
