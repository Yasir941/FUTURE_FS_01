"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Only render on devices that use a mouse (ignore touch devices)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsReady(true);
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is hovering over an interactive element (a, button, or anything with group/hover class)
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.closest('input') !== null || 
        target.closest('textarea') !== null ||
        target.closest('.group') !== null;
      
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isReady) return null;

  return (
    <>
      {/* Central Solid Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.05 }}
      />
      
      {/* Outer Glow Ring that trails slightly behind */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border rounded-full pointer-events-none z-[9998] flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(244,114,182,0.8)" : "rgba(217,70,239,0.3)", // Rose to Fuchsia
          backgroundColor: isHovering ? "rgba(244,114,182,0.15)" : "rgba(217,70,239,0.05)"
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
