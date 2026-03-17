"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

// Floating code snippets for the background
const CODE_LINES = [
  `const developer = "Godstime";`,
  `import React, { useState } from 'react';`,
  `export default function App() {`,
  `  const [built, setBuild] = useState(true);`,
  `npx create-next-app@latest raeki`,
  `supabase.from('users').select('*')`,
  `tailwind.config = { theme: { extend: {} } }`,
  `git commit -m "ship it 🚀"`,
  `const alchemist = ideas => reality;`,
  `<motion.div whileHover={{ scale: 1.05 }}>`,
  `type Props = { children: ReactNode }`,
  `async function fetchData(url: string) {`,
  `return <Component {...props} />`,
  `useState<User | null>(null)`,
  `border-radius: var(--radius-lg)`,
];

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Animated code background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: [0, 0.18, 0.12, 0.18, 0] }}
            transition={{
              duration: 8 + (i * 1.3) % 6,
              repeat: Infinity,
              delay: i * 0.9,
              ease: "easeInOut",
            }}
            className="absolute font-mono text-amber-400/60 text-xs sm:text-sm whitespace-nowrap"
            style={{
              top: `${(i * 6.5) % 95}%`,
              left: `${(i * 13) % 60}%`,
              transform: `rotate(${(i % 3) - 1}deg)`,
            }}
          >
            {line}
          </motion.div>
        ))}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,191,36,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,191,36,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow center-left */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left — Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-xs font-semibold tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Available for remote work
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight"
            >
              <span className="text-white">Itule</span>
              <br />
              <span className="text-amber-400">Godstime</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="h-px w-8 bg-amber-400" />
              <span className="text-gray-300 text-lg sm:text-xl font-semibold tracking-wide">
                Frontend Developer
              </span>
            </motion.div>

            {/* Alchemist tagline */}
           <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            AKA{" "}
            <span className="text-amber-400 font-bold">The Alchemist</span>
            {". "}I take ideas and turn them into things you can actually open in a browser.
            React, Next.js, TypeScript. Currently building{" "}
            <span className="text-white font-semibold">Raeki</span>,
            a food delivery app in React Native.
          </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("projects")}
                className="px-8 py-4 bg-amber-400 text-black font-bold text-sm rounded-xl hover:bg-amber-300 transition-all duration-200 flex items-center gap-2 shadow-xl shadow-amber-400/25"
              >
                View My Work
                <ExternalLink className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("contact")}
                className="px-8 py-4 border border-gray-600 text-white font-bold text-sm rounded-xl hover:border-amber-400 hover:text-amber-400 transition-all duration-200"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="flex gap-8 justify-center lg:justify-start pt-4"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "5+", label: "Projects Shipped" },
                { value: "100%", label: "Remote Ready" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black text-amber-400">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-2xl bg-amber-400/10 blur-xl" />

            {/* Code snippet card floating top-left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 bg-[#111] border border-amber-400/30 rounded-xl px-4 py-3 shadow-2xl"
            >
              <p className="font-mono text-xs text-amber-400">
                <span className="text-gray-500">const </span>
                dev<span className="text-gray-500"> = </span>
                <span className="text-green-400">"Godstime"</span>
              </p>
            </motion.div>

            {/* React Native badge floating bottom-right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 z-20 bg-[#111] border border-amber-400/30 rounded-xl px-4 py-3 shadow-2xl flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <p className="font-mono text-xs text-gray-300">
                Building <span className="text-amber-400 font-bold">Raeki</span>
              </p>
            </motion.div>

            {/* Photo frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative corner brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400 rounded-tl-lg z-10" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400 rounded-tr-lg z-10" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400 rounded-bl-lg z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400 rounded-br-lg z-10" />

              {/* Subtle code overlay on image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                <img
                  src="/suit-profile.jpg"
                  alt="Itule Godstime"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Subtle amber gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={() => onNavigate("about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-amber-400 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
