"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

type QualificationItem = {
  side: "left" | "right";
  title: string;
  institute: string;
  details: string;
};

const data: QualificationItem[] = [
  {
    side: "right",
    title: "B.Tech in CSE",
    institute: "Parul University",
    details: "Batch 2023 - 2027 (Pursuing)",
  },
  {
    side: "left",
    title: "HSC",
    institute: "Khulna Public College",
    details: "2021",
  },
  {
    side: "right", // ✅ SSC now right side
    title: "SSC",
    institute: "Khulna Public College",
    details: "2019",
  },
];

export default function Qualification() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".timeline-item");

    items.forEach((item: any) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: item.classList.contains("left") ? -120 : 120,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      className="py-24 bg-gradient-to-b from-[#050816] via-[#0b1120] to-[#050816]"
      ref={containerRef}
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-20 text-white tracking-wide"
      >
        Qualification
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* ✨ Glowing Center Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/0 via-blue-400 to-blue-400/0 blur-[1px] -translate-x-1/2" />
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-blue-400 shadow-[0_0_12px_#3b82f6] -translate-x-1/2" />

        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-item relative flex mb-20 ${
              item.side === "left" ? "left justify-start" : "right justify-end"
            }`}
          >
            {/* ✨ Card */}
            <div
              className={`w-[45%] p-6 rounded-2xl backdrop-blur-xl 
              bg-white/5 border border-white/10 text-white
              shadow-[0_0_25px_rgba(59,130,246,0.15)]
              hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
              transition-all duration-300
              ${
                item.side === "left" ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.institute}</p>
              <p className="text-sm text-gray-400">{item.details}</p>
            </div>

            {/* ✨ Glow Dot */}
            <div className="absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 mt-3 shadow-[0_0_15px_#3b82f6,0_0_30px_#3b82f6]" />
          </div>
        ))}
      </div>
    </section>
  );
}
