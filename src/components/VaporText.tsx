import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface VaporTextProps {
  text: string;
  className?: string;
}

export default function VaporText({ text, className = "" }: VaporTextProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const characters = text.split("");

  return (
    <div className={`relative ${className}`}>
      <div className="flex justify-center flex-wrap">
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={
              mounted
                ? {
                    opacity: [0, 1, 0.8, 1],
                    y: [50, -10, 0],
                    filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
                    textShadow: [
                      "0 0 0px rgba(139, 92, 246, 0)",
                      "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)",
                      "0 0 10px rgba(139, 92, 246, 0.6), 0 0 20px rgba(139, 92, 246, 0.4)",
                      "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 1.2,
              delay: index * 0.08,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="inline-block vapor-char"
            style={{
              textShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
      
      {/* Reflection effect */}
      <div className="absolute inset-0 flex justify-center flex-wrap opacity-30 blur-sm" style={{ top: "100%" }}>
        {characters.map((char, index) => (
          <motion.span
            key={`reflection-${char}-${index}`}
            animate={
              mounted
                ? {
                    opacity: [0, 0.3, 0.2, 0.3],
                    y: [0, 10, 0],
                  }
                : {}
            }
            transition={{
              duration: 1.2,
              delay: index * 0.08,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="inline-block"
            style={{
              transform: "scaleY(-1)",
              background: "linear-gradient(to bottom, rgba(139, 92, 246, 0.3), transparent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
