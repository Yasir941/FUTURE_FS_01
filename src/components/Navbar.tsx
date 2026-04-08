"use client";

import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

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
  }, [links]);

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92vw] sm:w-[90vw] md:w-auto max-w-2xl">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between md:justify-center gap-1 md:gap-6 shadow-2xl">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name.toLowerCase())}
            className={`relative text-[10px] sm:text-xs font-bold uppercase tracking-widest md:tracking-[0.2em] transition-colors duration-300 px-1 md:px-0 ${
              active === link.name.toLowerCase() ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-400" : "text-white/60 hover:text-white"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
