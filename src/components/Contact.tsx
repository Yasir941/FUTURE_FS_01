"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        // Automatically route emails to the provided user key
        formData.append("access_key", "646064ff-fba1-4284-861a-513cda441706");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            
            if (data.success) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000); // Re-enable form after 5s
            } else {
                setStatus("idle");
                console.error("Form error:", data);
            }
        } catch (error) {
            setStatus("idle");
            console.error("Network error submitting form:", error);
        }
    };

    return (
        <section id="contact" className="relative z-20 w-full bg-black py-40 px-8 md:px-16 flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                
                {/* Left Side: Header & Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Typewriter text="Get In Touch" delay={0.1} className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 uppercase tracking-[0.4em] font-bold mb-6 inline-block" />
                    <Typewriter text={"Let's Build\nSomething."} delay={0.3} className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8 tracking-tighter leading-none pr-8" />
                    <p className="text-white/60 text-lg font-light max-w-md mb-16 mt-4">
                        Have a project in mind or want to collaborate? Drop me a message below or reach out directly—let&apos;s make it happen.
                    </p>
                    <div className="flex flex-col gap-6 font-medium text-white/80">
                        <Magnetic>
                            <a href="mailto:yasirazam941@gmail.com" className="flex items-center gap-4 hover:text-fuchsia-400 transition-colors group">
                                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-fuchsia-400 transition-all shadow-[0_0_20px_rgba(217,70,239,0)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] text-white/50 group-hover:text-fuchsia-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </span>
                                Email
                            </a>
                        </Magnetic>
                        
                        <Magnetic>
                            <a href="https://www.linkedin.com/in/yasir-azam-1b6205320" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-fuchsia-400 transition-colors group">
                                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-fuchsia-400 transition-all shadow-[0_0_20px_rgba(217,70,239,0)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] text-white/50 group-hover:text-fuchsia-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </span>
                                LinkedIn
                            </a>
                        </Magnetic>
                        
                        <Magnetic>
                            <a href="https://github.com/Yasir941" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-fuchsia-400 transition-colors group">
                                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-fuchsia-400 transition-all shadow-[0_0_20px_rgba(217,70,239,0)] group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] text-white/50 group-hover:text-fuchsia-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </span>
                                GitHub
                            </a>
                        </Magnetic>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.form 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    onSubmit={handleSubmit} 
                    className="w-full flex flex-col gap-6 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_100px_rgba(255,255,255,0.02)]"
                >
                    <div className="flex flex-col gap-3">
                        <label className="text-xs uppercase tracking-[0.2em] text-fuchsia-400/80 font-bold px-2">Name</label>
                        <input required type="text" name="name" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-fuchsia-500/50 focus:bg-white/10 transition-all font-light" />
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <label className="text-xs uppercase tracking-[0.2em] text-fuchsia-400/80 font-bold px-2">Email</label>
                        <input required type="email" name="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-fuchsia-500/50 focus:bg-white/10 transition-all font-light" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="text-xs uppercase tracking-[0.2em] text-fuchsia-400/80 font-bold px-2">Message</label>
                        <textarea required name="message" rows={4} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-fuchsia-500/50 focus:bg-white/10 transition-all resize-none font-light"></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status !== "idle"}
                        className="relative mt-4 w-full py-5 rounded-xl bg-white text-black font-extrabold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 hover:shadow-[0_0_60px_rgba(217,70,239,0.5)] overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            {status === "idle" ? "Send Message" : status === "submitting" ? "Sending..." : "Message Sent ✓"}
                        </span>
                    </button>
                </motion.form>

            </div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center mt-32 text-white/30 text-xs tracking-widest uppercase w-full"
            >
                <p>© 2026 Yasir Azam. All rights reserved.</p>
            </motion.div>
        </section>
    );
}
