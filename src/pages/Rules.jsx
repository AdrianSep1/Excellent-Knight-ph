import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/b20696d12_FINALLOGO4.png";

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

export default function Rules() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-gray-800 shadow-lg shadow-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="EKPI" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              <span className="text-white font-black text-sm sm:text-lg tracking-wider">EXCELLENT KNIGHTS</span>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-semibold">Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-24 sm:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-red-500 font-semibold tracking-widest text-sm mb-2">GOVERNANCE</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 mb-3"
              style={{ textShadow: "0 0 20px rgba(234, 179, 8, 0.2)" }}>
              Rules & Regulations
            </h1>
            <p className="text-gray-500 text-sm">Constitution and By-Laws of EKPI</p>
          </motion.div>

          <div className="space-y-3">
            {rules.map((rule, i) => (
              <RuleItem key={rule.title} rule={rule} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}