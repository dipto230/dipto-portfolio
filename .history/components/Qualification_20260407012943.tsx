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
    side: "left",
    title: "SSC",
    institute: "Khulna Public College",
    details: "2019",
  },
];

export default function Qualification() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".timeline-item");

    items.forEach((item: any, i) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: item.classList.contains("left") ? -100 : 100,
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
    <section className="py-24" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-16"
      >
        Qualification
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-300 -translate-x-1/2" />

        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-item flex mb-16 ${
              item.side === "left" ? "left justify-start" : "right justify-end"
            }`}
          >
            {/* Content */}
            <div
              className={`w-[45%] p-6 rounded-2xl shadow-lg backdrop-blur bg-white/80 border border-gray-200 ${
                item.side === "left" ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.institute}</p>
              <p className="text-sm text-gray-500">{item.details}</p>
            </div>

            {/* Dot */}
            <div className="absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 mt-3 shadow-md" />
          </div>
        ))}
      </div>
    </section>
  );
}