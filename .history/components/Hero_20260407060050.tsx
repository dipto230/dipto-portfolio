"use client";

import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/spotlight";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">

      {/* ✅ Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f172a] animate-gradient" />

      {/* ✅ Soft Floating Blobs (very subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#a8dadc]/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* ✅ Spotlights (your original) */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#a8dadc15" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#a8dadc20" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#a8dadc25" />
      <Spotlight className="bottom-10 right-1/4 h-[60vh] w-[40vw]" fill="#a8dadc10" />

      {/* Grid (reduced intensity) */}
      <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(168, 218, 220, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center z-10 relative">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
          className="space-y-8"
        >
          {/* Label */}
          <div className="inline-flex">
            <div className="px-4 py-2 rounded-full bg-[#a8dadc]/10 backdrop-blur-xl border border-[#a8dadc]/40">
              <span className="text-[#a8dadc] text-sm font-semibold tracking-widest">
                ✨ Welcome to My Portfolio
              </span>
            </div>
          </div>

          {/* Name */}
          <div className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-[#a8dadc] to-[#a8dadc] bg-clip-text text-transparent leading-tight">
              Dipto Roy
            </h1>
          </div>

          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-white">
              Full Stack Developer • Problem Solver • UI/UX Designer
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Crafting elegant digital solutions with modern design and cutting-edge technology.
              Building scalable, beautiful applications that make a real impact.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-[#a8dadc] font-bold transition-all">
              Get In Touch
            </button>

            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-[#a8dadc]/30 text-white font-bold">
              View My Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { number: "10+", label: "Projects" },
              { number: "2+", label: "Years" },
              { number: "100%", label: "Dedication" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-[#a8dadc]/20">
                <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-white to-[#a8dadc] bg-clip-text">
                  {stat.number}
                </p>
                <p className="text-xs text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
          className="flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border border-[#a8dadc]/30">
            <Image
              src="/your-image-1.png"
              alt="Dipto Roy"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;