"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const titles = ["Developer", "Aditya"];

export const AnimatedTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 1200); // Reduced from 2000ms to 1200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block relative h-[1.1em] min-w-[300px] overflow-hidden">
      <AnimatePresence mode="wait">
        <m.span
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            duration: 0.3, // Reduced from 0.5s to 0.3s
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-primary-500 absolute left-0 whitespace-nowrap"
        >
          {titles[currentIndex]}
        </m.span>
      </AnimatePresence>
    </div>
  );
};
