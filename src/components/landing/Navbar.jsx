import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_695f6c9229c96290eaa3c4b5/b20696d12_FINALLOGO4.png";

const navLinks = [
  { label: "Home", href: "#home", scroll: true },
  { label: "About", href: "#about", scroll: true },
  { label: "Units", href: "#units", scroll: true },
  { label: "Vision & Mission", href: "#vision", scroll: true },
  { label: "Rules", href: "/Rules", scroll: false },
  { label: "Contact", href: "#contact", scroll: true },
  { label: "Join", href: "/Join", scroll: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (link) => {
    setMobileOpen(false);
    if (link.scroll) {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = link.href;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 shadow-lg shadow-red-900/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="EKPI" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <span className="text-white font-black text-sm sm:text-lg tracking-wider">EXCELLENT KNIGHTS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link)}
                className={link.label === "Join"
                  ? "bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-black tracking-wide px-4 py-2 rounded-lg transition-colors duration-200"
                  : "text-gray-300 hover:text-yellow-400 text-sm font-semibold tracking-wide transition-colors duration-200"
                }
              >
                {link.label}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-red-900/30">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link)}
                className="block w-full text-left text-gray-300 hover:text-yellow-400 text-sm font-semibold py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}