"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep loader for 2.5 seconds to allow Three.js and assets to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center overflow-hidden pointer-events-auto"
        >
          {/* Unique Animation - Typography & Progress */}
          <div className="relative flex flex-col items-center">
            {/* Morphing Pink Circle */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute -inset-8 bg-[#FB64B6] blur-[25px] opacity-30 -z-10"
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white font-display text-5xl md:text-7xl font-bold tracking-widest uppercase mb-4"
            >
              Azka
            </motion.h1>
            
            <motion.div 
              className="h-[2px] bg-white/20 w-[200px] md:w-[300px] relative overflow-hidden rounded-full"
            >
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#FB64B6]"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/60 font-mono text-sm mt-4 uppercase tracking-[0.3em]"
            >
              System Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
