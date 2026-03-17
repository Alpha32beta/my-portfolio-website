"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/itule-godstime-9339a0339", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Alpha32beta", label: "GitHub" },
  { icon: Mail, href: "mailto:itulegodstime3546@gmail.com", label: "Email" },
];

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#080808] border-t border-gray-800/60 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Left */}
        <div className="text-center sm:text-left">
          <button
            onClick={() => onNavigate("home")}
            className="font-black text-white text-lg hover:text-amber-400 transition-colors"
          >
            Godstime<span className="text-amber-400">.</span>
          </button>
          <p className="text-gray-600 text-xs mt-1">
            © {new Date().getFullYear()} Itule Godstime · Built with React & Next.js
          </p>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-3">
          {LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-9 h-9 rounded-lg bg-[#111] border border-gray-800 hover:border-amber-400/50 flex items-center justify-center text-gray-500 hover:text-amber-400 transition-all duration-200"
              title={link.label}
            >
              <link.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
