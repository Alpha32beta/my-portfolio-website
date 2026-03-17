"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/itule-godstime-9339a0339",
    icon: Linkedin,
    color: "hover:border-blue-400 hover:text-blue-400",
  },
  {
    label: "GitHub",
    url: "https://github.com/Alpha32beta",
    icon: Github,
    color: "hover:border-white hover:text-white",
  },
  {
    label: "Email",
    url: "mailto:itulegodstime3546@gmail.com",
    icon: Mail,
    color: "hover:border-amber-400 hover:text-amber-400",
  },
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({ email: "", message: "" });

  const validate = () => {
    const e = { email: "", message: "" };
    let valid = true;
    if (!email.trim()) { e.email = "Email is required"; valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { e.email = "Enter a valid email"; valid = false; }
    if (!message.trim()) { e.message = "Message is required"; valid = false; }
    setErrors(e);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: "", message: "" });
    if (!validate()) return;
    setLoading(true);
    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([{ email, message, created_at: new Date().toISOString() }]);
      if (error) throw error;
      setFormStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
      setEmail("");
      setMessage("");
      setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
    } catch (err: any) {
      setFormStatus({ type: "error", message: err.message || "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#080808] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/3 rounded-full blur-[120px] pointer-events-none" />

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
            Let's talk
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Get In <span className="text-amber-400">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm actively looking for full-time remote frontend roles. If you're
              building something and need a developer who ships clean, well-crafted
              interfaces — let's talk.
            </p>

            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-sm">Benin City, Nigeria — Open to remote worldwide</span>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm">Available immediately · Full-time</span>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-3 bg-[#111] border border-gray-800 rounded-xl text-gray-500 text-sm font-semibold transition-all duration-200 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({ ...errors, email: "" }); }}
                  placeholder="you@example.com"
                  className={`w-full px-5 py-4 rounded-xl bg-[#111] border ${
                    errors.email ? "border-red-500" : "border-gray-800"
                  } text-white placeholder-gray-600 focus:outline-none focus:border-amber-400 transition-colors text-sm`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-red-400 text-xs"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors({ ...errors, message: "" }); }}
                  rows={6}
                  placeholder="Tell me about the role or project..."
                  className={`w-full px-5 py-4 rounded-xl bg-[#111] border ${
                    errors.message ? "border-red-500" : "border-gray-800"
                  } text-white placeholder-gray-600 focus:outline-none focus:border-amber-400 transition-colors resize-none text-sm`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-red-400 text-xs"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-xl text-sm font-medium ${
                    formStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {formStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-4 bg-amber-400 text-black font-bold text-sm rounded-xl hover:bg-amber-300 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send className="w-4 h-4" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
