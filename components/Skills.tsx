"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    label: "Styling & UI",
    skills: [
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tint: true },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    label: "Mobile",
    skills: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", tint: true },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", invert: true },
    ],
  },
];

interface Skill {
  name: string;
  icon: string;
  tint?: boolean;
  invert?: boolean;
}

function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group flex flex-col items-center gap-3 p-4 bg-[#111] border border-gray-800 hover:border-amber-400/50 rounded-2xl transition-all duration-300 cursor-default min-w-[90px]"
    >
      <div className="w-10 h-10 flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className={`w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 ${
            skill.invert ? "invert brightness-200" : ""
          } ${skill.tint ? "opacity-80" : ""}`}
        />
      </div>
      <span className="text-xs font-semibold text-gray-400 group-hover:text-amber-400 transition-colors text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#080808] relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/3 rounded-full blur-[100px] pointer-events-none" />

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
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            My <span className="text-amber-400">Skills</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
                  {category.label}
                </span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, si) => (
                  <SkillChip
                    key={skill.name}
                    skill={skill}
                    index={ci * 6 + si}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 p-6 bg-[#111] border border-gray-800 rounded-2xl flex flex-wrap items-center gap-4"
        >
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
            Currently deepening:
          </span>
          {["React Native / Expo", "EAS Build", "Node.js"].map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
