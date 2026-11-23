import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skill" },
    { name: "Education", path: "/education" },
    { name: "ContactUs", path: "/contactus" },
  ];

  return (
    <nav className="flex items-center justify-between px-8 md:px-20 py-6 relative z-10 bg-[#0a0a0a] text-white font-sans">
      {/* Logo */}
      <NavLink
        to="/"
        className="text-2xl font-bold text-blue-500 tracking-wider"
      >
        Dev<span className="text-orange-500">Hirusha</span>
      </NavLink>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm text-gray-300 font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `cursor-pointer transition-colors hover:text-blue-500 ${
                  isActive ? "text-blue-500" : "text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl cursor-pointer">
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
