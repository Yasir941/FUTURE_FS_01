"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px", 
        threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach(link => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const onScroll = () => { if (menuOpen) setMenuOpen(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-4 flex items-center justify-center gap-6 shadow-2xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name.toLowerCase())}
              className={`relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                active === link.name.toLowerCase() ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500" : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className="fixed top-5 right-5 z-[60] md:hidden w-11 h-11 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-[5px] shadow-xl"
      >
        <motion.span
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-[2px] bg-white rounded-full block"
        />
        <motion.span
          animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-[2px] bg-white rounded-full block"
        />
        <motion.span
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-[2px] bg-white rounded-full block"
        />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] md:hidden bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
            onClick={() => setMenuOpen(false)}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { setActive(link.name.toLowerCase()); setMenuOpen(false); }}
                className={`text-4xl font-black tracking-tighter transition-all duration-300 ${
                  active === link.name.toLowerCase()
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
