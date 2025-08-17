import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative text-center py-32 px-6 
      bg-white"
    >
      {/* "Incola" */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent"
      >
        Incola
      </motion.h1>

      {/* Housing + Redefined */}
      <div className="flex justify-center gap-3">
        {/* Housing morphs from heading to gold */}
        <motion.h2
          initial={{ opacity: 0, color: "var(--heading)" }}
          animate={{ opacity: 1, color: ["var(--heading)", "var(--gold)"] }}
          transition={{ delay: 1, duration: 2.5, ease: "easeInOut" }}
          className="text-4xl font-bold"
        >
          Housing
        </motion.h2>

        {/* Redefined slides in gold */}
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, color: "var(--gold)" }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Redefined
        </motion.h2>
      </div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="mt-8 px-6 py-3 bg-accent text-background text-lg font-semibold rounded-lg hover:bg-antique transition"
      >
        Get Started
      </motion.button>
    </section>
  );
}
