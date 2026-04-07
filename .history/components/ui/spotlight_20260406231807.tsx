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
      animate={{ opacity: 0.6 }}
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: fill,
          top: "20%",
          left: "30%",
          mixBlendMode: "screen",
          opacity: 0.8,
        }}
      />
    </motion.div>
  );
};