import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/hero/incola-hero-1.jpeg",
  "/hero/incola-hero-2.jpeg",
  "/hero/incola-hero-3.jpeg",
  "/hero/incola-hero-4.jpeg",
];
const titles = ["Spaces", "Wellness", "Nature", "Comfort"];
const initialTitle = "Housing";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const startTimerRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (startTimerRef.current) clearTimeout(startTimerRef.current);
  };

  const startAutoplay = () => {
    clearTimers();
    startTimerRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }, 5000);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    startAutoplay();
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoplay();
  };

  const goToSlide = (i) => {
    setIndex(i);
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return clearTimers;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const titleVariants = {
    initial: hasStarted
      ? { opacity: 0, x: 20 }
      : { opacity: 0, color: "var(--heading)" },
    animate: hasStarted
      ? { opacity: 1, x: 0, transition: { duration: 0.8 } }
      : {
          opacity: 1,
          color: ["var(--heading)", "var(--gold)"],
          transition: { delay: 1, duration: 2.5, ease: "easeInOut" },
        },
    exit: { opacity: 0, x: -20, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative h-[500px] flex items-center justify-center bg-gray-200 px-[40px] overflow-hidden">
      <div className="relative flex items-center justify-center w-full max-w-6xl">
        {/* TEXT */}
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: -450, opacity: 1 }}
          transition={{ delay: 3, duration: 1.2, ease: "easeInOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent"
          >
            Incola
          </motion.h1>

          <div className="flex justify-center gap-3">
            <div className="w-[160px] flex justify-end ">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={hasStarted ? index : "initial-title"}
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-4xl font-bold"
                >
                  {hasStarted ? titles[index] : initialTitle}
                </motion.h2>
              </AnimatePresence>
            </div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, color: "var(--gold)" }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-4xl font-bold"
            >
              Redefined
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="mt-8 px-6 py-3 bg-accent text-background text-lg font-semibold rounded-lg hover:bg-antique transition"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.5, duration: 1.2 }}
          className="absolute right-0 w-[800px] h-[450px] rounded-2xl shadow-lg overflow-hidden bg-white flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-antique/40"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-antique/40"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-gold scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
