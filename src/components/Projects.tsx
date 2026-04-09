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
      number: "01",
      tags: ["Next.js", "LangChain", "Convex", "RAG"],
      accent: "from-rose-500/20 to-fuchsia-500/10",
      glow: "from-rose-400/20 via-transparent to-transparent",
    },
    {
      title: "Lumina.ai",
      category: "Frontend Web App",
      desc: "A high-performance AI platform concept featuring a modern dark-mode-first emerald glow aesthetic. Built with React and Tailwind CSS.",
      number: "02",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      accent: "from-fuchsia-500/20 to-indigo-500/10",
      glow: "from-fuchsia-400/20 via-transparent to-transparent",
    },
    {
      title: "Dr. Abdul Kalam Awards",
      category: "Edu Café Season 9 (2023)",
      desc: "Awarded 1st Runner-Up for innovative pitching and technical approach at the Edu Café Season 9.",
      number: "03",
      tags: ["Public Speaking", "Innovation", "Leadership"],
      accent: "from-indigo-500/20 to-violet-500/10",
      glow: "from-indigo-400/20 via-transparent to-transparent",
    },
    {
      title: "Student Engagement & Events",
      category: "Student Leadership",
      desc: "Coordinated major events like Onam, Pinktober, Freshers' Bowling, and Support for Gaza Charity initiatives.",
      number: "04",
      tags: ["Event Planning", "Team Coordination", "Community"],
      accent: "from-violet-500/20 to-rose-500/10",
      glow: "from-violet-400/20 via-transparent to-transparent",
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
                <div className={`relative min-h-[22rem] h-auto w-full rounded-3xl overflow-hidden bg-gradient-to-br ${exp.accent} border border-white/5 backdrop-blur-sm transition-all duration-700 hover:border-fuchsia-500/30 hover:shadow-[0_0_100px_rgba(217,70,239,0.1)] flex`}>
                  {/* Top gradient accent */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.glow} opacity-60 z-0`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-0"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                    <p className="text-white/5 text-5xl md:text-6xl font-black tracking-tighter transition-all duration-500 group-hover:text-fuchsia-500/20 group-hover:translate-x-2">{exp.number}</p>
                    <div>
                        <p className="text-fuchsia-400 mb-1 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold transition-all duration-500 group-hover:tracking-[0.3em]">{exp.category}</p>
                        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-200 group-hover:to-indigo-200 text-balance">
                            {exp.title}
                        </h3>
                        <p className="text-white/60 text-sm font-medium leading-relaxed opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 mb-4 text-balance">
                            {exp.desc}
                        </p>
                        {/* Tech/Skill Tags */}
                        <div className="flex flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                          {exp.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-fuchsia-500/30 text-fuchsia-300/80 bg-fuchsia-500/5">
                              {tag}
                            </span>
                          ))}
                        </div>
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
