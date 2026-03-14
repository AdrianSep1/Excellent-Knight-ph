import React from "react";
import { motion } from "framer-motion";

export default function PreambleSection() {
  return (
    <section className="relative py-12 sm:py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-yellow-500 to-orange-500 rounded-full" />
          
          <div className="pl-6 sm:pl-8">
            <p className="text-red-500 font-semibold tracking-widest text-sm mb-2">PREAMBLE</p>
            <h2 className="text-2xl sm:text-3xl font-black text-yellow-400 mb-4"
              style={{ textShadow: "0 0 20px rgba(234, 179, 8, 0.2)" }}>
              Our Founding Covenant
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We, the members of Excellent Knights Philippines Inc. (EKPI), imploring the aid of Almighty God, 
              in order to promote Road Safety and Awareness, build a lasting brotherhood founded on mutual respect 
              and camaraderie, extend our service to the communities we ride through, uphold principles of good 
              governance and accountable leadership, and protect the welfare and rights of every member, do hereby 
              ordain and promulgate this Constitution and By-Laws.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}