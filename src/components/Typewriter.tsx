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
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const charVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.05 }
    },
  };

  // Splitting by words to prevent character-level wrapping
  // We keep the spaces and newlines as separate units
  const words = text.split(/(\s+)/);

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
      {words.map((word, wordIndex) => {
        // Handle newlines
        if (word.includes("\n")) {
            return <br key={`br-${wordIndex}`} />;
        }
        
        // Handle spaces
        if (word.trim() === "") {
            return (
                <span key={`space-${wordIndex}`} className="inline-block whitespace-pre">
                    {" "}
                </span>
            );
        }

        // Handle regular words - WRAP IN A NON-BREAKING ATOMIC FLEX CONTAINER
        return (
            <span key={`word-${wordIndex}`} className="inline-flex flex-nowrap whitespace-nowrap">
                {Array.from(word).map((char, charIndex) => (
                    <motion.span
                        aria-hidden="true"
                        key={`${wordIndex}-${charIndex}`}
                        variants={charVariant}
                        className="inline-block"
                    >
                        {char}
                    </motion.span>
                ))}
            </span>
        );
      })}
    </motion.div>
  );
}
