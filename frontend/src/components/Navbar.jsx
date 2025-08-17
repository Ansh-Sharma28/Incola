import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-6 border-b border-accent">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <img
  src="/logo.png"
  alt="Incola Logo"
  className="h-12 md:h-16 lg:h-18 w-auto object-contain"
/>




      </a>

      {/* Nav Links */}
      <nav className="space-x-6">
        <a href="#services" className="hover:text-accent">Services</a>
        <a href="#work" className="hover:text-accent">Work</a>
        <a href="#about" className="hover:text-accent">About</a>
        <a
          href="#contact"
          className="px-4 py-2 bg-accent text-background rounded-lg hover:bg-antique font-medium"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
