import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black/80 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo/Title */}
        <a
          href="#about"
          className="text-3xl font-bold text-green-400 tracking-wide animate-pulse"
        >
          MyPortfolio
        </a>

        {/* Navigation Links */}
        <nav className="mt-3 sm:mt-0 flex flex-wrap justify-center sm:justify-end gap-4 text-sm sm:text-base text-white font-medium">
          <a
            href="#about"
            className="transition duration-300 hover:text-green-400 hover:scale-105"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition duration-300 hover:text-green-400 hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="transition duration-300 hover:text-green-400 hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="transition duration-300 hover:text-green-400 hover:scale-105"
          >
            Experience
          </a>
          <a
            href="#certificates"
            className="transition duration-300 hover:text-green-400 hover:scale-105"
          >
            Certificate
          </a>
          <a
            href="#contact"
            className="transition duration-300 hover:text-green-400 hover:scale-105"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
