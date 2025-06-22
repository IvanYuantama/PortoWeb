import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Organization", href: "#organization" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificate" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="font-bold text-xl text-gray-800 dark:text-white">Ivan Yuantama</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative hover:text-blue-500 transition-colors duration-300">
                <span className="after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:hover:scale-x-100 after:origin-left after:transition-transform after:duration-300">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Dark Mode Toggle + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Sliding Toggle */}
          <div className="relative w-14 h-8" onClick={toggleDarkMode}>
            <div
              className={`absolute top-0 left-0 w-full h-full flex items-center px-1 rounded-full cursor-pointer 
                transition duration-300 ${darkMode ? "bg-gray-700" : "bg-yellow-300"}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"}`} />
            </div>
            <span className="absolute left-1 top-1 text-sm pointer-events-none pl-0.5 pt-0.5">{darkMode ? "🌙" : " ☀️"}</span>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800 dark:text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 pb-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block text-base hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
