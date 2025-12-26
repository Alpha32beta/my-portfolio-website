"use client";

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Rocket, Lightbulb, Puzzle, Smile, ExternalLink, Mail } from 'lucide-react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const EnhancedPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [formErrors, setFormErrors] = useState({ email: '', message: '' });

  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 91 },
    { name: 'JavaScript', level: 90 },
    { name: 'Tailwind', level: 92 },
    { name: 'React', level: 91 },
    { name: 'Next.js', level: 95 },
    { name: 'Supabase', level: 90 },
    { name: 'GitHub', level: 98 }
  ];

  const projects = [
    {
      title: 'Vibe',
      description: 'A Spotify-inspired music streaming application that allows users to discover, play, and organize music. Built with Next.js and Supabase, featuring user authentication, playlist management, and real-time audio playback. Demonstrates proficiency in full-stack development, API integration, and modern frontend frameworks.',
      tech: ['Next.js', 'Supabase', 'Tailwind', 'Vercel'],
      link: 'https://vibe-station-delta.vercel.app/',
      color: 'from-green-500 to-emerald-500',
      image: '/vibe-station.png'
    },
    {
      title: 'Advanced Weather App',
      description: 'A responsive weather application with real-time data and beautiful UI',
      tech: ['React', 'API Integration', 'Tailwind', 'Supabase'],
      link: 'https://advance-weather-app-sigma.vercel.app/',
      color: 'from-blue-500 to-cyan-500',
      image: '/weather.png'
    },
    {
      title: 'Currency Converter App',
      description: 'A simple, fast currency converter with real-time rates and easy multi-currency tracking.',
      tech: ['HTML', 'CSS', 'Javascript', 'API Integration'],
      link: 'https://newcurrencyconverter.vercel.app/',
      color: 'from-purple-500 to-pink-500',
      image: '/currency-converter.png'
    },
    {
      title: 'Todo List App',
      description: 'A clean, easy-to-use to-do app that helps you organize tasks, set priorities, and stay productive.',
      tech: ['HTML', 'CSS', 'Javascript'],
      link: 'https://todo-list-mu-dun-41.vercel.app/',
      color: 'from-green-500 to-emerald-500',
      image: '/todo.png'
    }
  ];

  const traits = [
    { icon: Rocket, text: 'Fast Learner' },
    { icon: Lightbulb, text: 'Creative Thinker' },
    { icon: Puzzle, text: 'Problem Solver' },
    { icon: Smile, text: 'Calm Under Pressure' }
  ];

  const technologies = [
    { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
  ];

  const socialLinks = [
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg', label: 'LinkedIn', url: 'https://www.linkedin.com/in/itule-godstime-9339a0339?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', label: 'GitHub', url: 'https://github.com/Alpha32beta' },
    { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg', label: 'Facebook', url: 'https://www.facebook.com/share/1CsorEboLW/' },
    { image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', label: 'Instagram', url: '' }
  ];

  // SCROLL SPY - Auto-update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form validation
  const validateForm = () => {
    const errors = { email: '', message: '' };
    let isValid = true;

    if (!email.trim()) {
      errors.email = 'Please enter your email address';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = 'Please enter your message';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: '', message: '' });
    setFormErrors({ email: '', message: '' });

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const { error: supabaseError } = await supabase
        .from("contact_messages")
        .insert([
          {
            email: email,
            message: message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (supabaseError) throw supabaseError;

      setFormStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      setEmail('');
      setMessage('');
      
      setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    } catch (err: any) {
      setFormStatus({ 
        type: 'error', 
        message: err.message || 'Something went wrong. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-yellow-500/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center font-bold text-black text-sm"
              >
                GT
              </motion.div>
              <span className="text-lg sm:text-xl font-bold text-yellow-400">Godstime</span>
            </div>

            <div className="hidden md:flex gap-6 lg:gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-yellow-400 text-sm lg:text-base ${
                    activeSection === section ? 'text-yellow-400 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-yellow-400"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-3"
            >
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-2 capitalize hover:bg-yellow-400/10 rounded-lg transition-colors ${
                    activeSection === section ? 'bg-yellow-400/10 text-yellow-400' : ''
                  }`}
                >
                  {section}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      
      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <motion.div 
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-xs sm:text-sm font-semibold mb-2 sm:mb-4"
              >
                <Mail className="w-4 h-4" />
                Welcome to my portfolio
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                I'm <span className="text-yellow-400">Itule Godstime</span>
              </motion.h1>
              
              <motion.h2 
                variants={fadeInUp}
                transition={{ duration: 0.7 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300"
              >
                Web Developer
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.8 }}
                className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed"
              >
                AKA <span className="text-yellow-400 font-semibold">The Alchemist</span>. I turn ideas and imagination into reality through web development. Crafting clean, user-friendly experiences that makes a difference.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                transition={{ duration: 0.9 }}
                className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-bold text-sm sm:text-base rounded-full hover:bg-yellow-300 transition-all duration-300 flex items-center gap-2"
                >
                  View My Work
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-sm sm:text-base rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0 mt-8 lg:mt-0"
            >
              <div className="relative">
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                    <img 
                      src="/suit-profile.jpg" 
                      alt="Itule Godstime" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full flex items-center justify-center p-3"
                >
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" 
                    alt="Tech" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              <span className="text-yellow-400">T</span>echnologies I Use
            </h3>
            <p className="text-gray-400 text-base sm:text-lg">Modern tools for modern solutions</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.name} 
                variants={zoomIn}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:bg-gray-800 min-w-[120px] sm:min-w-[140px]"
                >
                  <motion.div 
                    animate={tech.name === 'React' ? { rotate: 360 } : {}}
                    transition={tech.name === 'React' ? { 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "linear" 
                    } : {}}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 p-2"
                  >
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <span className="font-semibold text-sm sm:text-base text-white group-hover:text-yellow-400 transition-colors text-center">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            <span className="text-yellow-400">About</span> Me
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed"
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/30 p-6 sm:p-8 rounded-2xl border border-gray-700/50"
            >
              <p>
                I'm a Fullstack web developer focused on crafting clean and user-friendly experiences. I'm really passionate about building responsive and interactive websites. I don't just build I genuinely love what I do, and nothing gives me more joy than seeing my work come to life.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.7 }}
              className="bg-gray-800/30 p-6 sm:p-8 rounded-2xl border border-gray-700/50"
            >
              <p>
                One of my goals in life is to be of service to humanity by improving the lives of the people around me and people all over the world through technology and innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
      <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              My <span className="text-yellow-400">Skills</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 sm:mb-16 text-sm sm:text-base">Technologies I work with daily</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
          >
            {skills.map((skill) => (
              <motion.div 
                key={skill.name} 
                variants={zoomIn}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/50 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-3 sm:mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="#1f2937"
                        strokeWidth="6"
                        fill="none"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="#facc15"
                        strokeWidth="6"
                        fill="none"
                        initial={{ strokeDasharray: "0, 282.7" }}
                        whileInView={{ strokeDasharray: `${skill.level * 2.827}, 282.7` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400">{skill.level}%</span>
                    </div>
                  </div>
                  <p className="text-center text-xs sm:text-sm lg:text-base font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {skill.name}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          
          <div className="mt-16 sm:mt-20">
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
            >
              Personality <span className="text-yellow-400">Traits</span>
            </motion.h3>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {traits.map((trait, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 text-center"
                >
                  <trait.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 text-yellow-400" />
                  <p className="text-sm sm:text-base font-semibold text-white">{trait.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      
      <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              My <span className="text-yellow-400">Work</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 sm:mb-16 text-sm sm:text-base">Recent projects I've worked on</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={zoomIn}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-yellow-400 overflow-hidden transition-all duration-300"
              >
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.color} flex items-center justify-center p-8`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full sm:w-full sm:h-full object-contain"
                  />
                </div>
                
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-400">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-yellow-400/10 text-yellow-400 text-xs sm:text-sm rounded-full border border-yellow-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors text-sm sm:text-base"
                  >
                    View Project
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
              Get In <span className="text-yellow-400">Touch</span>
            </h2>
            <p className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base px-4">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
          </motion.div>

        
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={zoomIn}
                whileHover={{ scale: 1.15, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 border border-gray-700 hover:border-yellow-400 flex items-center justify-center transition-all duration-300 p-2"
                title={social.label}
              >
                <img 
                  src={social.image} 
                  alt={social.label}
                  className="w-full h-full object-contain"
                />
              </motion.a>
            ))}
          </motion.div>

          
          <motion.form 
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                }}
                placeholder="example@email.com"
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-gray-800 border ${
                  formErrors.email ? 'border-red-500' : 'border-gray-700'
                } text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm sm:text-base`}
              />
              {formErrors.email && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-red-400 text-sm"
                >
                  {formErrors.email}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Your Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                }}
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-gray-800 border ${
                  formErrors.message ? 'border-red-500' : 'border-gray-700'
                } text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none text-sm sm:text-base`}
              />
              {formErrors.message && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-red-400 text-sm"
                >
                  {formErrors.message}
                </motion.p>
              )}
            </motion.div>

            {formStatus.message && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-3 sm:p-4 rounded-xl text-sm sm:text-base ${
                  formStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500 text-green-300' 
                    : 'bg-red-500/20 border border-red-500 text-red-300'
                }`}
              >
                {formStatus.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-bold text-sm sm:text-base rounded-full hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
              {!loading && <Send className="w-4 h-4 sm:w-5 sm:h-5" />}
            </motion.button>
          </motion.form>
        </div>
      </section>

      
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-900 border-t border-gray-800">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm sm:text-base">
                © 2025 <span className="text-yellow-400 font-semibold">Itule Godstime</span>. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
                Built with passion and lots of ☕
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-yellow-400 flex items-center justify-center transition-all duration-300 hover:scale-110 p-1.5"
                >
                  <img 
                    src={social.image} 
                    alt={social.label}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default EnhancedPortfolio;
