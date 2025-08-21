import React from "react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b bg-gradient-to-b from-gold  via-white to-gold backdrop-blur-lg">
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
        <a href="#services" className=" text-zinc-950 hover:text-gold">Services</a>
        <a href="#work" className="text-zinc-950 hover:text-gold">Work</a>
        <a href="#about" className="text-zinc-950 hover:text-gold">About</a>
        <a href="#about" className="text-zinc-950 hover:text-gold">Contact</a>
      </nav>
    </header>
  );
}
