"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["home", "about", "skills", "projects", "contact"] as const;

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (section: string) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-amber-400/20 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={() => handleNav("home")}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center font-black text-black text-sm tracking-tight shadow-lg shadow-amber-400/30 group-hover:shadow-amber-400/60 transition-shadow duration-300">
              GT
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Godstime<span className="text-amber-400">.</span>
            </span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((section) => (
              <motion.button
                key={section}
                onClick={() => handleNav(section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-lg capitalize text-sm font-medium transition-all duration-200 ${
                  activeSection === section
                    ? "text-amber-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === section && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-amber-400/10 rounded-lg border border-amber-400/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{section}</span>
              </motion.button>
            ))}
            <motion.a
              href="/Godstime_Itule_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 bg-amber-400 text-black text-sm font-bold rounded-lg hover:bg-amber-300 transition-colors duration-200 shadow-lg shadow-amber-400/20"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-amber-400 p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4 space-y-1 overflow-hidden"
            >
              {NAV_LINKS.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => handleNav(section)}
                  whileTap={{ scale: 0.97 }}
                  className={`block w-full text-left px-4 py-3 capitalize rounded-lg text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "bg-amber-400/10 text-amber-400 border border-amber-400/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section}
                </motion.button>
              ))}
              <a
                href="/Godstime_Itule_CV.pdf"
                download
                className="block w-full text-center mt-3 px-4 py-3 bg-amber-400 text-black text-sm font-bold rounded-lg hover:bg-amber-300 transition-colors"
              >
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
