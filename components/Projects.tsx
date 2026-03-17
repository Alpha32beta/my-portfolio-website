"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Clock } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  accent: string;
  status?: "live" | "in-development";
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Vibe Station",
    description:
      "A full-featured Spotify-inspired music streaming platform with end-to-end authentication, custom playlists, liked songs, play history, shuffle/repeat, and auto-play. Integrates Deezer API for 20,000+ tracks. Built with a 4-table PostgreSQL schema and Supabase Row Level Security so every user's data stays scoped to their account.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind", "Vercel"],
    link: "https://vibe-station-delta.vercel.app/",
    github: "https://github.com/Alpha32beta/Vibe-Station.git",
    image: "/vibe-station.png",
    accent: "from-green-500/20 to-emerald-600/20",
    status: "live",
    featured: true,
  },
  {
    title: "Advanced Weather App",
    description:
      "Real-time weather data for 200,000+ global cities via OpenWeatherMap API, with geolocation support for automatic local forecasts. Users can save favourite cities across sessions via Supabase authentication. Includes caching logic to reduce redundant API calls.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind", "OpenWeatherMap API"],
    link: "https://advance-weather-app-sigma.vercel.app/",
    github: "https://github.com/Alpha32beta/Advance-Weather-app.git",
    image: "/weather.png",
    accent: "from-blue-500/20 to-cyan-600/20",
    status: "live",
  },
  {
    title: "Currency Converter",
    description:
      "Real-time currency converter supporting 150+ international currencies with live exchange rates. Clean dropdown interface with instant conversion results and a fully responsive mobile layout.",
    tech: ["JavaScript", "HTML5", "CSS3", "Exchange Rate API"],
    link: "https://newcurrencyconverter.vercel.app/",
    image: "/currency-converter.png",
    accent: "from-purple-500/20 to-pink-600/20",
    status: "live",
  },
  {
    title: "Raeki",
    description:
      "A multi-tenant food delivery SaaS currently in active development. Features restaurant listings with open/closed status logic, featured restaurant tiers, and a premium subscription model. Being built across both a React Native mobile app (Expo, EAS Build) and a web prototype (React, TypeScript).",
    tech: ["React Native", "Expo", "TypeScript", "Tailwind", "EAS Build"],
    accent: "from-amber-500/20 to-orange-600/20",
    status: "in-development",
    featured: true,
  },
  {
    title: "Task Manager",
    description:
      "Interactive to-do app with full CRUD, local storage persistence, and clean task organisation. Focused on minimal, distraction-free UX.",
    tech: ["React", "TypeScript", "CSS3"],
    link: "https://todo-list-mu-dun-41.vercel.app/",
    github: "https://github.com/Alpha32beta/Todo-list.git",
    image: "/todo.png",
    accent: "from-gray-500/20 to-slate-600/20",
    status: "live",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isInDev = project.status === "in-development";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative bg-[#111] border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
        isInDev
          ? "border-amber-400/40 hover:border-amber-400"
          : "border-gray-800 hover:border-amber-400/50"
      } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      {/* In development badge */}
      {isInDev && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full">
          <Clock className="w-3 h-3 text-amber-400" />
          <span className="text-amber-400 text-xs font-bold">In Development</span>
        </div>
      )}

      {/* Live badge */}
      {!isInDev && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-semibold">Live</span>
        </div>
      )}

      {/* Image / gradient header */}
      <div className={`h-44 bg-gradient-to-br ${project.accent} flex items-center justify-center overflow-hidden`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 opacity-40">
            <div className="w-16 h-16 rounded-2xl border-2 border-amber-400 flex items-center justify-center">
              <span className="text-amber-400 font-black text-2xl">R</span>
            </div>
            <span className="text-amber-400 font-bold text-sm tracking-widest uppercase">Raeki</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <h3 className="text-white font-black text-lg group-hover:text-amber-400 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-gray-800 text-gray-400 text-xs font-medium rounded-lg border border-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.link || project.github) && (
          <div className="flex items-center gap-4 pt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors"
              >
                View Live
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm font-semibold transition-colors"
              >
                GitHub
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-400/3 rounded-full blur-[120px] pointer-events-none" />

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
            What I've built
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            My <span className="text-amber-400">Work</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
