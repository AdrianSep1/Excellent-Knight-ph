import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const rules = [
  {
    title: "Article I – Name & Nature",
    content: "The organization shall be known as Excellent Knights Philippines Inc. (EKPI), a non-stock, non-profit motorcycle riders organization duly registered with the SEC."
  },
  {
    title: "Article II – Membership",
    content: "Membership is open to all motorcycle riders who uphold the values of EKPI. Members must be of legal age, possess a valid driver's license, and abide by the Constitution and By-Laws."
  },
  {
    title: "Article III – Duties & Responsibilities",
    content: "Every member shall attend meetings, rides, and activities; pay dues on time; respect fellow members; follow traffic rules; and uphold the organization's name with honor."
  },
  {
    title: "Article IV – Area Units",
    content: "EKPI operates through Area Units across different localities. Each unit is headed by an Area Unit Commander and follows the national organization's guidelines."
  },
  {
    title: "Article V – Officers & Elections",
    content: "National and area unit officers are elected through a democratic process. Officers serve a fixed term and may be re-elected subject to the organization's rules."
  },
  {
    title: "Article VI – Code of Conduct",
    content: "Members shall conduct themselves with discipline, respect, and integrity at all times. Violations may result in sanctions as determined by the Disciplinary Committee."
  },
  {
    title: "Article VII – Meetings & Rides",
    content: "Regular meetings shall be held monthly. Official rides must follow the organization's safety protocols including proper gear, convoy discipline, and route planning."
  },
  {
    title: "Article VIII – Amendments",
    content: "This Constitution may be amended by a two-thirds vote of the General Assembly, with proper notice and deliberation period as prescribed."
  }
];

function RuleItem({ rule, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 sm:p-5 bg-gray-950 border border-gray-800 rounded-xl hover:border-red-700/40 transition-all duration-200"
      >
        <span className="text-white font-semibold text-sm sm:text-base text-left">{rule.title}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 ml-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 py-3 bg-gray-950/50 border-x border-b border-gray-800 rounded-b-xl -mt-1">
              <p className="text-gray-400 text-sm leading-relaxed">{rule.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function RulesSection() {
  return (
    <section id="rules" className="relative py-16 sm:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-red-500 font-semibold tracking-widest text-sm mb-2">GOVERNANCE</p>
          <h2 className="text-3xl sm:text-4xl font-black text-yellow-400"
            style={{ textShadow: "0 0 20px rgba(234, 179, 8, 0.2)" }}>
            Rules & Regulations
          </h2>
        </motion.div>

        <div className="space-y-3">
          {rules.map((rule, i) => (
            <RuleItem key={rule.title} rule={rule} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}