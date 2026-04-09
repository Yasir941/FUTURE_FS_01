"use client";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";

export default function About() {
  return (
    <section id="about" className="relative z-20 w-full bg-[#0a0a0a] py-24 md:py-40 px-6 md:px-24 overflow-hidden section-optimize">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center text-center md:text-left">
        
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
        >
          <Typewriter text="About Me" delay={0.1} className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 uppercase tracking-[0.4em] font-bold mb-6 inline-block" />
          <Typewriter text="Engineering Digital Excellence." delay={0.3} className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-tight mb-8 tracking-tighter" />
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-8 mt-4 text-left md:text-justify text-balance">
            As a driven 1st Year Computer Science undergraduate, I am focused on building high-performance, intelligent digital systems. My technical journey sits at the intersection of complex problem-solving and sleek, modern design architectures—bridging the gap between robust software engineering and an intuitive user experience.
          </p>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-12 text-left md:text-justify text-balance">
             Beyond the screen, I am deeply committed to real-world impact. Serving as the Joint Secretary for the Westford Student Council (2024–2025), I orchestrate large-scale events and student wellness initiatives. This unique blend of technical execution and active leadership allows me to drive results effectively in agile, collaborative team environments.
          </p>

          <a
            href="/Yasir_Azam_CV.pdf"
            download="Yasir_Azam_CV.pdf"
            className="inline-block px-10 py-5 rounded-full bg-white text-black font-extrabold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(217,70,239,0.4)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-3">
              <span>View / Download CV</span>
              <svg className="w-5 h-5 relative -top-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </span>
          </a>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center w-full"
        >
             <div className="w-full max-w-md aspect-square rounded-full backdrop-blur-2xl bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/5 border border-fuchsia-500/20 flex flex-col items-center justify-center p-12 relative overflow-hidden group shadow-[0_0_100px_rgba(217,70,239,0.1)]">
                 <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <div className="text-center z-10 transition-transform duration-500 group-hover:scale-110">
                     <p className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-rose-400 via-fuchsia-500 to-indigo-600 mb-4 drop-shadow-2xl">100%</p>
                     <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/80">Attendance</p>
                     <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400/80 mt-2">Record & Dedication</p>
                 </div>
             </div>
        </motion.div>
        
      </div>
    </section>
  );
}
