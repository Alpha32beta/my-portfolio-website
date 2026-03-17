"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Users } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Frontend Specialist",
    desc: "React, Next.js, TypeScript — built to production standards.",
  },
  {
    icon: Smartphone,
    title: "Mobile Builder",
    desc: "Currently building Raeki in React Native with Expo.",
  },
  {
    icon: Globe,
    title: "Full-Feature Apps",
    desc: "Auth, databases, APIs — end-to-end ownership of every project.",
  },
  {
    icon: Users,
    title: "Remote-Ready",
    desc: "Async communication, Git workflows, independent delivery.",
  },
];

const TRAINING = [
  { name: "freeCodeCamp", detail: "Responsive Web Design & JS Algorithms" },
  { name: "Net Ninja", detail: "React, Next.js, TypeScript deep dives" },
  { name: "Traversy Media", detail: "Full-stack project-based learning" },
  { name: "Carburant Technology", detail: "Real internship — production code" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Who I am
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            About <span className="text-amber-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
           <p className="text-gray-300 text-lg leading-relaxed">
                I taught myself frontend development through freeCodeCamp, Net Ninja, and Traversy Media. No bootcamp, no CS degree. I then got an internship at{" "}
                <span className="text-amber-400 font-semibold">
                  Carburant Technology Limited
                </span>{" "}
                in{" "}
                <span className="text-white font-semibold">Benin City, Nigeria</span>{" "}
                and did the real thing: shipping components, integrating APIs, and writing code that went into a live product.
              </p>

              <p className="text-gray-400 text-base leading-relaxed">
                Right now I'm building{" "}
                <span className="text-amber-400 font-semibold">Raeki</span>, a
                multi-tenant food delivery SaaS in React Native and Expo. It's
                the kind of project that pushes everything at once: product thinking,
                mobile architecture, backend integration, and UI craft.
              </p>

              <p className="text-gray-400 text-base leading-relaxed">
                Long term I want my work to matter beyond the screen. I want to use what
                I build to improve the lives of people in my community. That's the real reason behind every line of code.
              </p>

            {/* Training timeline */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">
                How I learned
              </p>
              <div className="space-y-3">
                {TRAINING.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-white font-semibold text-sm">
                        {item.name}
                      </span>
                      <span className="text-gray-500 text-sm"> — {item.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-[#111] border border-gray-800 hover:border-amber-400/40 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-amber-400/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="sm:col-span-2 bg-amber-400/5 border border-amber-400/20 rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">
                  Open to full-time remote roles
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Available immediately · Benin City, Nigeria
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
