import React from "react";
import { motion } from "framer-motion";

const units = [
  { name: "Balamban Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/90e495bcb_BALAMBAN.png" },
  { name: "Barili Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/d9a68fa8d_BARILI.png" },
  { name: "Borbon Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/ee7fc23d9_BORBON.png" },
  { name: "SC-Carcar City Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/9228dd34f_CARCAR.png" },
  { name: "Cebu City Central", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/488396c7f_CCC.png" },
  { name: "Daanbantayan Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/bcd6374c2_DAANBANTAYAN.png" },
  { name: "Dalaguete Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/d1e8f0feb_DALAGUETE.png" },
  { name: "Danao City Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/dc0a909e0_DANAOCITY.png" },
  { name: "Liloan Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/4776376af_LILOAN.png" },
  { name: "Lapu-Lapu City-Cordova Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/21da1e9fc_LLCC.png" },
  { name: "Malabuyoc Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/dc797a1af_MALABUYOC.png" },
  { name: "Mandaue City Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/227eac616_MANDAUECITY.png" },
  { name: "Minglanilla Central Command", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/fb2e89ad4_MCC.png" },
  { name: "Medellin Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/b80d61ef8_MEDELLIN.png" },
  { name: "Naga City Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/0628ef0ad_NAGA1.png" },
  { name: "SC-San Fernando Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/ffe82ce1a_SANFERNANDO.png" },
  { name: "Sogod Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/eb05b21e4_SOGOD.png" },
  { name: "Tabogon Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/e8d2d2aff_TABOGON.png" },
  { name: "Tabuelan Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/a46fbdc3f_TABUELAN.png" },
  { name: "CCC-Talamban Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/71767e800_TALAMBAN.png" },
  { name: "Toledo City Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/8243bcc40_TOLEDO.png" },
  { name: "Tuburan Unit", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/21ea1f505_TUBURAN.png" },
];

export default function UnitsSection() {
  return (
    <section id="units" className="relative py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-red-500 font-semibold tracking-widest text-sm mb-2">OUR CHAPTERS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 mb-3"
            style={{ textShadow: "0 0 20px rgba(234, 179, 8, 0.2)" }}>
            24 Area Units Strong
          </h2>
          <div className="flex items-center justify-center gap-8 mt-4">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white">24</p>
              <p className="text-gray-500 text-xs tracking-widest">AREA UNITS</p>
            </div>
            <div className="w-px h-10 bg-gray-700" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white">1</p>
              <p className="text-gray-500 text-xs tracking-widest">BROTHERHOOD</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {units.map((unit, i) => (
            <motion.div
              key={unit.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="group"
            >
              <div className="bg-black border-2 border-yellow-600/60 rounded-xl p-3 sm:p-4 flex flex-col items-center text-center hover:border-yellow-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-2 ring-2 ring-yellow-600/60 group-hover:ring-yellow-400 transition-all duration-300">
                  <img
                    src={unit.logo}
                    alt={unit.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-[10px] sm:text-xs font-bold leading-tight uppercase tracking-wide">{unit.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}