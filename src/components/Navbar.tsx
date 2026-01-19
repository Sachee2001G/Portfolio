"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const links = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => {
          const id = link.href.replace("#", "");
          const element = document.getElementById(id || "home"); // Assuming 'home' is the ID for the top section if link is just '#'
          // If href is '#', we might target the top of the page.
          // Let's assume the Hero section might not have an ID, so we treat
          // scrollY < someThreshold as Home.
          if (link.href === "#") return { id: "home", offset: 0, height: 500 }; // Fallback

          if (element) {
            return {
              id,
              offset: element.offsetTop,
              height: element.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY + 200; // Offset for better triggering

      // Special case for Home/Top
      if (scrollPosition < 500) {
        setActiveTab("Home");
        return;
      }

      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.offset &&
          scrollPosition < section.offset + section.height
        ) {
          // Find the name associated with this ID
          const link = links.find((l) => l.href === `#${section.id}`);
          if (link) setActiveTab(link.name);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-8 inset-x-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="pointer-events-auto relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-indigo-500/20 blur-xl rounded-full" />
        <div className="relative bg-white/70 backdrop-blur-2xl border border-white/20 rounded-full p-1.5 flex items-center gap-1 shadow-xl shadow-black/5 ring-1 ring-black/5">
          {links.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                  isActive
                    ? "text-white"
                    : "text-gray-500 hover:text-black hover:bg-black/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full -z-10 shadow-lg shadow-indigo-500/30"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <link.icon
                    size={18}
                    className={cn(
                      "transition-transform duration-300",
                      isActive && "scale-110"
                    )}
                  />
                  <span
                    className={cn(
                      "hidden sm:inline-block",
                      isActive
                        ? "inline-block font-semibold"
                        : "hidden sm:hidden"
                    )}
                  >
                    {link.name}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
