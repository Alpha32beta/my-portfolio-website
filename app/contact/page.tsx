"use client";

import { useState } from "react";
import SocialLinks from "../components/social-link";
import { createClient } from "@supabase/supabase-js";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const Contacts = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

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

      setSuccess(true);
      setEmail("");
      setMessage("");
      
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="m-12 animate-[slideIn_0.5s_ease-out_forwards]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-6 justify-center items-center max-w-2xl w-full">
          
          
          <h1 className="text-xl lg:text-2xl text-white font-extrabold font-[Poppins]">
            GET IN TOUCH
          </h1>

          <p className="text-white text-base tracking-wide font-inter text-center">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>

          
          <div className="flex justify-center w-full my-4">
            <SocialLinks />
          </div>

          
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            
            
            <div>
              <label htmlFor="email" className="block text-white font-inter mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
              />
            </div>

            
            <div>
              <label htmlFor="message" className="block text-white font-inter mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                placeholder="Tell me about your project or just say hello..."
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-200 resize-none"
              />
            </div>

            
            {success && (
              <div className="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 rounded-lg">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            
            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer font-bold transition-all duration-200 px-6 py-3 rounded-full bg-yellow-400 border border-transparent flex items-center justify-center text-[15px] text-black hover:bg-yellow-300 hover:text-yellow-900 hover:border-yellow-400 active:scale-95 group w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <PaperAirplaneIcon className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </main>
  );
};

export default Contacts;