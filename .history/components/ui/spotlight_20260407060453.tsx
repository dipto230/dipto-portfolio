"use client";

import { motion } from "framer-motion";

export const Spotlight = ({
  className,
  fill = "#6366f1",
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0.5, 0.6],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: fill,
          top: "20%",
          left: "30%",
          mixBlendMode: "screen",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};