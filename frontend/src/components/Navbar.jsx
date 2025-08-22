import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 border-b transition-all duration-500 ease-in-out ${
        isSticky
          ? "bg-[#111]/95 border-gold/30 backdrop-blur-lg shadow-lg"
          : "bg-[#111]/80 border-gold/20 backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Incola Logo"
          className="h-10 md:h-12 lg:h-14 w-auto object-contain"
        />
      </a>

      {/* Nav Links */}
      <nav className="space-x-6">
        <a
          href="#services"
          className="text-gray-200 hover:text-gold transition-colors duration-300"
        >
          Services
        </a>
        <a
          href="#work"
          className="text-gray-200 hover:text-gold transition-colors duration-300"
        >
          Work
        </a>
        <a
          href="#about"
          className="text-gray-200 hover:text-gold transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-200 hover:text-gold transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
