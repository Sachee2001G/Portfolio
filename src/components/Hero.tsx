"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      {/* Left Aligned Socials Vertical at Bottom */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed left-6 md:left-12 bottom-12 hidden md:flex flex-col items-center gap-4 z-50"
      >
        <div className="flex flex-col items-center gap-6">
          {[
            { icon: Github, href: "https://github.com/sachee2001g" },
            { icon: Linkedin, href: "https://linkedin.com/in/sachee-ghimire" },
            { icon: Mail, href: "mailto:sacheeghimire@gmail.com" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-all transform hover:scale-110 hover:-translate-x-1"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        <div className="w-[1px] h-16 bg-black/30" />
      </motion.div>

      {/* Main Centered Content */}
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-100 bg-white/60 backdrop-blur-md shadow-sm mx-auto"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">
              Available for new projects
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-pink-500 leading-[0.75] font-bebas mb-6">
            Sachee <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 tracking-[0.001em]">
              Ghimire
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            IT Engineer blending AI/ML with full-stack creativity and building
            seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#projects"
              className="px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              View Selected Works
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-black font-medium hover:bg-white transition-all hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 z-20"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
