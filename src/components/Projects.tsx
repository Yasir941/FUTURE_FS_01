"use client";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import TiltCard from "@/components/TiltCard";

export default function Projects() {
  const experiences = [
    {
      title: "HelpDesk",
      category: "HackInTime (2nd Runner Up)",
      desc: "Full-stack AI Knowledge Ecosystem built with Next.js 16, Convex, and LangChain. Features RAG document analysis, instant flashcards, and smart quizzes.",
      number: "01"
    },
    {
      title: "Lumina.ai",
      category: "Frontend Web App",
      desc: "A high-performance AI platform concept featuring a modern dark-mode-first emerald glow aesthetic. Built with React and Tailwind CSS.",
      number: "02"
    },
    {
      title: "Dr. Abdul Kalam Awards",
      category: "Edu Café Season 9 (2023)",
      desc: "Awarded 1st Runner-Up for innovative pitching and technical approach at the Edu Café Season 9.",
      number: "03"
    },
    {
      title: "Student Engagement & Events",
      category: "Student Leadership",
      desc: "Coordinated major events like Onam, Pinktober, Freshers' Bowling, and Support for Gaza Charity initiatives.",
      number: "04"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-40 px-6 md:px-24 bg-[#0a0a0a] section-optimize">
      <div className="max-w-6xl mx-auto">
        
        <Typewriter 
            text="Key Achievements & Experience" 
            className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 uppercase tracking-[0.4em] font-bold mb-12 text-center md:text-left inline-block"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div 
                key={exp.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="group relative cursor-pointer"
            >
              <TiltCard>
                <div className="relative min-h-[22rem] h-auto w-full rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-700 hover:bg-gradient-to-br hover:from-fuchsia-900/40 hover:to-indigo-900/20 hover:border-fuchsia-500/30 hover:shadow-[0_0_100px_rgba(217,70,239,0.1)] flex">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-0"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                    <p className="text-white/5 text-5xl md:text-6xl font-black tracking-tighter transition-all duration-500 group-hover:text-fuchsia-500/30 group-hover:translate-x-2">{exp.number}</p>
                    <div>
                        <p className="text-fuchsia-400 mb-1 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold transition-all duration-500 group-hover:tracking-[0.3em]">{exp.category}</p>
                        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-200 group-hover:to-indigo-200 text-balance">
                            {exp.title}
                        </h3>
                        <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed max-w-md opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 text-shadow-sm text-balance">
                            {exp.desc}
                        </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
