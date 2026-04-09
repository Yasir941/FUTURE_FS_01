"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Overlay() {
  const [isMounted, setIsMounted] = useState(false);
  
  // By not passing a target, it uses the window's global scroll progress.
  // This is highly efficient since it syncs with ScrollyCanvas's overall height.
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Smooth out the scroll input for premium feel
  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 50, 
    damping: 25,
    restDelta: 0.001
  });

  // Section 1: Hi - SCALED FOR LCP
  // We use [0, 0.05, 0.1] so it starts visible and hides early.
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
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex flex-col justify-center px-6 md:px-24">
      
      {/* Section 1: Hi - STATIC FIRST APPROACH */}
      {/* Before mount, we show a basic version that the browser doesn't need JS to render, fixing LCP */}
      <motion.div 
        style={{ opacity: isMounted ? op1 : 1, scale: isMounted ? scale1 : 1 }} 
        className={`${commonClass} left-6 md:left-24 origin-left`}
      >
          <h1 className={textOutlineClass}>Hi.</h1>
      </motion.div>

      {/* Following sections only animate after mount to keep the core thread lean initially */}
      {isMounted && (
        <>
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
        </>
      )}
    </div>
  );
}
