import React from "react";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section id="vision" className="relative py-12 sm:py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 border border-yellow-600/30 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-yellow-400">Vision</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              To be the leading motorcycle riders organization in the Philippines, recognized for promoting road 
              safety, fostering genuine brotherhood, and making a meaningful impact in every community we reach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 border border-red-600/30 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-red-400">Mission</h3>
            </div>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Promote responsible riding and road safety awareness.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Build a strong network of riders united by respect and loyalty.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Engage in community outreach and charitable activities.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Develop leaders of integrity across all area units.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}