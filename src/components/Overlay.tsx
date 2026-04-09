"use client";

import { motion, useTransform, useSpring, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const smoothScroll = useSpring(progress, { 
    stiffness: 50, 
    damping: 25,
    restDelta: 0.001
  });

  const op1 = useTransform(smoothScroll, [0, 0.1, 0.15], [1, 1, 0]);
  const scale1 = useTransform(smoothScroll, [0, 0.15], [1, 1.05]);

  const op2 = useTransform(smoothScroll, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const scale2 = useTransform(smoothScroll, [0.2, 0.5], [0.95, 1.05]);

  const op3 = useTransform(smoothScroll, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const scale3 = useTransform(smoothScroll, [0.55, 0.85], [0.95, 1.05]);
  
  const op4 = useTransform(smoothScroll, [0.9, 0.95, 1], [0, 1, 1]);
  const scale4 = useTransform(smoothScroll, [0.9, 1], [0.95, 1.05]);

  // Responsive alignment classes: centered on mobile, alternating on desktop
  const commonClass = "absolute top-1/2 -translate-y-1/2 w-full md:w-auto px-6 md:px-24 will-change-[opacity,transform] flex flex-col items-center md:items-start text-center md:text-left";
  const commonClassRight = "absolute top-1/2 -translate-y-1/2 w-full md:w-auto px-6 md:px-24 will-change-[opacity,transform] flex flex-col items-center md:items-end text-center md:text-right";
  
  const textOutlineClass = "text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent text-outline text-balance";
  const rainbowClass = "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 drop-shadow-[0_0_20px_rgba(217,70,239,0.3)]";

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
      
      {/* Section 1: Hi */}
      <motion.div 
        style={{ opacity: isMounted ? op1 : 1, scale: isMounted ? scale1 : 1 }} 
        className={`${commonClass && 'left-0 md:left-24'} ${commonClass}`}
      >
          <h1 className={textOutlineClass}>Hi.</h1>
      </motion.div>

      {/* Following sections animate after mount */}
      {isMounted && (
        <>
          {/* Section 2: Yasir Azam */}
          <motion.div style={{ opacity: op2, scale: scale2 }} className={`${commonClassRight} right-0 md:right-24`}>
              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent leading-none text-outline text-balance">
                  I am <br />
                  <span className={`${rainbowClass} !-webkit-text-stroke-0`}>
                      Yasir Azam.
                  </span>
              </h2>
          </motion.div>

          {/* Section 3: Digital Frontier */}
          <motion.div style={{ opacity: op3, scale: scale3 }} className={`${commonClass} left-0 md:left-24`}>
              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-transparent leading-none text-outline text-balance">
                  Innovating the <br/>
                  <span className={`${rainbowClass} !-webkit-text-stroke-0`}>
                      Digital Frontier.
                  </span>
              </h2>
          </motion.div>

          {/* Section 4: Collaborate */}
          <motion.div style={{ opacity: op4, scale: scale4 }} className={`${commonClassRight} right-0 md:right-24`}>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent leading-none text-outline text-balance">
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
