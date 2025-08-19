import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div className="text-text font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <section id="services" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center text-subheading">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 border border-accent rounded-2xl bg-background shadow-lg hover:shadow-accent/40 transition">
            <h4 className="text-xl font-semibold mb-4 text-heading">Resident Management</h4>
            <p className="text-text">
              Track residents, communications, and requests in one premium dashboard.
            </p>
          </div>
          <div className="p-8 border border-accent rounded-2xl bg-background shadow-lg hover:shadow-accent/40 transition">
            <h4 className="text-xl font-semibold mb-4 text-heading">Payments & Billing</h4>
            <p className="text-text">
              Luxury means ease — seamless digital payments, invoicing, and financial reports.
            </p>
          </div>
          <div className="p-8 border border-accent rounded-2xl bg-background shadow-lg hover:shadow-accent/40 transition">
            <h4 className="text-xl font-semibold mb-4 text-heading">Community Engagement</h4>
            <p className="text-text">
              Elevate living standards with events, polls, and premium community features.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies / Work */}
      <section id="work" className="py-20 px-8 bg-velvet">
        <h3 className="text-3xl font-bold mb-12 text-center text-subheading">
          Proven Results
        </h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="p-8 bg-velvet border border-accent rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-heading">Sunrise Residency</h4>
            <p className="text-text">
              Reduced billing errors by 40% and elevated resident satisfaction in under 3 months.
            </p>
          </div>
          <div className="p-8 bg-velvet border border-accent rounded-2xl shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-heading">Greenfield Apartments</h4>
            <p className="text-text">
              Streamlined maintenance requests with a 2x faster resolution rate.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-velvet border-t border-accent">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-text">
          <p>&copy; {new Date().getFullYear()} Incola. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
