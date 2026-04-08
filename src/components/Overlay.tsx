"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Strict non-overlapping zones ensuring a clean screen between sections
  const op1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  const op2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1.1]);

  const op3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.55, 0.85], [0.9, 1.1]);
  
  const op4 = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]);
  const scale4 = useTransform(scrollYProgress, [0.9, 1], [0.9, 1.1]);

  const outlineStyle = { WebkitTextStroke: '1px rgba(255,255,255,0.6)' };

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1: Hi (Left) */}
        <motion.div 
            style={{ opacity: op1, scale: scale1 }}
            className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 origin-left"
        >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent" style={outlineStyle}>
                Hi.
            </h1>
        </motion.div>

        {/* Section 2: I am Yasir Azam (Right) */}
        <motion.div 
            style={{ opacity: op2, scale: scale2 }}
            className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 text-right origin-right"
        >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent leading-none" style={outlineStyle}>
                I am <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-teal-600 drop-shadow-[0_0_80px_rgba(16,185,129,0.3)]" style={{ WebkitTextStroke: '0px' }}>Yasir Azam.</span>
            </h2>
        </motion.div>

        {/* Section 3: Explore technology (Left) */}
        <motion.div 
            style={{ opacity: op3, scale: scale3 }}
            className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-4xl origin-left"
        >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent leading-tight" style={outlineStyle}>
                Let&apos;s explore together in the world of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200" style={{ WebkitTextStroke: '0px' }}>
                    Technology.
                </span>
            </h2>
        </motion.div>

        {/* Section 4: Let's Connect (Right) */}
        <motion.div 
            style={{ opacity: op4, scale: scale4 }}
            className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 text-right origin-right"
        >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent" style={outlineStyle}>
                Let&apos;s <br/>
                <span className="border-b-8 border-emerald-500 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 drop-shadow-[0_0_50px_rgba(16,185,129,0.2)]" style={{ WebkitTextStroke: '0px' }}>Connect.</span>
            </h1>
        </motion.div>

      </div>
    </div>
  );
}
