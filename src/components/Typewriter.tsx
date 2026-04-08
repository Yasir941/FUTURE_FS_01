"use client";

import { motion, Variants } from "framer-motion";

export default function Typewriter({ 
    text, 
    className, 
    delay = 0 
}: { 
    text: string; 
    className?: string;
    delay?: number;
}) {
  const characters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const charVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.1 }
    },
  };

  return (
    <motion.div
      aria-label={text.replace(/\n/g, " ")}
      role="heading"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      className={className}
    >
      {characters.map((char, i) => {
        if (char === "\n") return <br key={i} />;
        return (
          <motion.span
            aria-hidden="true"
            key={i}
            variants={charVariant}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
