import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Heart, Star } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Road Safety", desc: "Promoting responsible riding and safety awareness across all chapters." },
  { icon: Users, title: "Camaraderie", desc: "Building lifelong bonds of brotherhood and unity among riders." },
  { icon: Heart, title: "Community Service", desc: "Giving back to communities through outreach and charity programs." },
  { icon: Star, title: "Leadership", desc: "Developing principled leaders who uphold honor and excellence." },
];

export default function WhoWeAreSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-red-500 font-semibold tracking-widest text-sm mb-2">WHO WE ARE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 mb-4"
            style={{ textShadow: "0 0 20px rgba(234, 179, 8, 0.2)" }}>
            The Legend Begins
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Excellent Knights Philippines Inc. (EKPI) is a brotherhood of motorcycle riders bound by honor, 
            camaraderie, and service. Founded in 2024 and SEC-registered, we ride as one family with a golden heart — 
            committed to road safety, community upliftment, and the spirit of excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center h-full hover:border-red-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-900/10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-red-700 to-orange-600 flex items-center justify-center shadow-lg shadow-red-900/30">
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}