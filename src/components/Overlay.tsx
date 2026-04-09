"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll input for premium feel
  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 50, 
    damping: 25,
    restDelta: 0.001
  });

  // Section 1: Hi
  const op1 = useTransform(smoothScroll, [0, 0.1, 0.15], [1, 1, 0]);
  const scale1 = useTransform(smoothScroll, [0, 0.15], [1, 1.05]);

  // Section 2: Yasir Azam
  const op2 = useTransform(smoothScroll, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const scale2 = useTransform(smoothScroll, [0.2, 0.5], [0.95, 1.05]);

  // Section 3: Digital Frontier
  const op3 = useTransform(smoothScroll, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const scale3 = useTransform(smoothScroll, [0.55, 0.85], [0.95, 1.05]);
  
  // Section 4: Collaborate
  const op4 = useTransform(smoothScroll, [0.9, 0.95, 1], [0, 1, 1]);
  const scale4 = useTransform(smoothScroll, [0.9, 1], [0.95, 1.05]);

  const commonClass = "absolute top-1/2 -translate-y-1/2 will-change-[opacity,transform]";
  const textOutlineClass = "text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent text-outline";
  const rainbowClass = "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 drop-shadow-[0_0_20px_rgba(217,70,239,0.3)]";

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-24 overflow-hidden">
        
        {/* Section 1: Hi */}
        <motion.div style={{ opacity: op1, scale: scale1 }} className={`${commonClass} left-6 md:left-24 origin-left`}>
            <h1 className={textOutlineClass}>Hi.</h1>
        </motion.div>

        {/* Section 2: Yasir Azam */}
        <motion.div style={{ opacity: op2, scale: scale2 }} className={`${commonClass} right-6 md:right-24 text-right origin-right`}>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent leading-none text-outline">
                I am <br />
                <span className={`${rainbowClass} !-webkit-text-stroke-0`}>
                    Yasir Azam.
                </span>
            </h2>
        </motion.div>

        {/* Section 3: Digital Frontier */}
        <motion.div style={{ opacity: op3, scale: scale3 }} className={`${commonClass} left-6 md:left-24 origin-left`}>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-transparent leading-none text-outline">
                Innovating the <br/>
                <span className={`${rainbowClass} !-webkit-text-stroke-0`}>
                    Digital Frontier.
                </span>
            </h2>
        </motion.div>

        {/* Section 4: Collaborate */}
        <motion.div style={{ opacity: op4, scale: scale4 }} className={`${commonClass} right-6 md:right-24 text-right origin-right`}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent leading-none text-outline">
                Let&apos;s <br/>
                <span className={`border-b-4 md:border-b-8 border-fuchsia-500 pb-2 ${rainbowClass} !-webkit-text-stroke-0`}>
                    Collaborate.
                </span>
            </h1>
        </motion.div>

      </div>
    </div>
  );
}
