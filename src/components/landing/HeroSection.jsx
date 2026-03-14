import React from "react";
import { motion } from "framer-motion";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/b20696d12_FINALLOGO4.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={LOGO_URL}
            alt="Excellent Knights Philippines Inc."
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain mx-auto drop-shadow-[0_0_40px_rgba(212,168,67,0.3)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-wider"
          style={{ textShadow: "0 0 30px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.2)" }}
        >
          EXCELLENT <span className="text-yellow-400">KNIGHTS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-300 font-medium tracking-widest"
        >
          PHILIPPINES INC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 inline-block"
        >
          <p className="text-orange-400 text-base sm:text-lg font-semibold italic tracking-wide"
            style={{ textShadow: "0 0 20px rgba(234, 88, 12, 0.3)" }}>
            "Knights with a Golden Heart"
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-3 text-gray-500 text-xs tracking-widest"
        >
          EST. 2024 • SEC NO: 2025040198376-05
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold rounded-full tracking-wider hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/40"
          >
            DISCOVER MORE
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}