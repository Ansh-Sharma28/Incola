// src/pages/HomePage.jsx
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-black-900 text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gold-400/50 sticky top-0 bg-black-900 z-50">
        <h1 className="text-2xl font-bold text-gold-400">Incola</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-gold-300 transition">Services</a>
          <a href="#work" className="hover:text-gold-300 transition">Work</a>
          <a href="#about" className="hover:text-gold-300 transition">About</a>
          <a
            href="#contact"
            className="px-4 py-2 bg-gold-400 text-black-900 rounded-lg hover:bg-gold-300 font-medium transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-32 px-6 bg-gradient-to-r from-black-900 via-gray-950 to-black-900">
        <h2 className="text-6xl font-extrabold leading-tight mb-6 text-gold-400">
          Luxury Living, Simplified
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
          Incola transforms residential communities into premium experiences — 
          with seamless management, elegant design, and smart engagement.
        </p>
        <button className="px-8 py-3 bg-gold-400 text-black-900 text-lg font-semibold rounded-lg hover:bg-gold-300 transition shadow-lg hover:shadow-gold-400/40">
          Get Started
        </button>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-8 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-16 text-center text-gold-400">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 border border-gold-400/60 rounded-2xl bg-black-900 shadow-lg hover:shadow-gold-400/30 transition">
            <h4 className="text-xl font-semibold mb-4 text-gold-300">Resident Management</h4>
            <p className="text-gray-300">Track residents, communications, and requests in one premium dashboard.</p>
          </div>
          <div className="p-8 border border-gold-400/60 rounded-2xl bg-black-900 shadow-lg hover:shadow-gold-400/30 transition">
            <h4 className="text-xl font-semibold mb-4 text-gold-300">Payments & Billing</h4>
            <p className="text-gray-300">Luxury means ease — seamless digital payments, invoicing, and financial reports.</p>
          </div>
          <div className="p-8 border border-gold-400/60 rounded-2xl bg-black-900 shadow-lg hover:shadow-gold-400/30 transition">
            <h4 className="text-xl font-semibold mb-4 text-gold-300">Community Engagement</h4>
            <p className="text-gray-300">Elevate living standards with events, polls, and premium community features.</p>
          </div>
        </div>
      </section>

      {/* Case Studies / Work */}
      <section id="work" className="py-24 px-8 bg-gray-950">
        <h3 className="text-4xl font-bold mb-16 text-center text-gold-400">
          Proven Results
        </h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-black-900 border border-gold-400/60 rounded-2xl shadow-lg hover:shadow-gold-400/20 transition">
            <h4 className="text-xl font-semibold mb-3 text-gold-300">Sunrise Residency</h4>
            <p className="text-gray-300">
              Reduced billing errors by 40% and elevated resident satisfaction in under 3 months.
            </p>
          </div>
          <div className="p-8 bg-black-900 border border-gold-400/60 rounded-2xl shadow-lg hover:shadow-gold-400/20 transition">
            <h4 className="text-xl font-semibold mb-3 text-gold-300">Greenfield Apartments</h4>
            <p className="text-gray-300">
              Streamlined maintenance requests with a 2x faster resolution rate.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-black-900 border-t border-gold-400/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Incola. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-300 transition">Privacy</a>
            <a href="#" className="hover:text-gold-300 transition">Terms</a>
            <a href="#" className="hover:text-gold-300 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
