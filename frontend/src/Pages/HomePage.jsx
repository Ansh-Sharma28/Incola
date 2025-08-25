import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard"; // 👈 import glow card

export default function HomePage() {
  return (
    <div className="text-gray-200 font-sans bg-[#0f0f0f]">
      {/* Navbar */}
      <Navbar />
      <div className="h-22" /> {/* spacer same as navbar height */}
      <Hero />

      {/* Services */}
      <section
        id="services"
        className="py-20 px-8 max-w-6xl mx-auto bg-[#141414]"
      >
        <h3 className="text-3xl font-bold mb-12 text-center text-gold">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard
            title="Resident Management"
            description="Track residents, communications, and requests in one premium dashboard."
          />
          <ServiceCard
            title="Payments & Billing"
            description="Luxury means ease — seamless digital payments, invoicing, and financial reports."
          />
          <ServiceCard
            title="Community Engagement"
            description="Elevate living standards with events, polls, and premium community features."
          />
        </div>
      </section>

      {/* Case Studies / Work */}
      <section id="work" className="py-20 px-8 bg-[#111111]">
        <h3 className="text-3xl font-bold mb-12 text-center text-gold">
          Proven Results
        </h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-[#1a1a1a] border border-gold/40 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Sunrise Residency
            </h4>
            <p className="text-gray-400">
              Reduced billing errors by 40% and elevated resident satisfaction in under 3 months.
            </p>
          </div>
          <div className="p-8 bg-[#1a1a1a] border border-gold/40 rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Greenfield Apartments
            </h4>
            <p className="text-gray-400">
              Streamlined maintenance requests with a 2x faster resolution rate.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-[#0d0d0d] border-t border-gold/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Incola. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">
              Privacy
            </a>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
            <a href="#" className="hover:text-gold">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
