"use client";

import React from "react";
import { Spotlight } from "./ui/spotlight";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* 🌟 Background Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#ffffff10" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#a855f7" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#3b82f6" />

      {/* 🌌 Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />

      {/* 🔥 Main Content */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center z-10">

        {/* 👈 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-purple-400 uppercase tracking-widest text-sm">
            Hello, I'm
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Dipto Roy
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Full Stack Developer • Problem Solver • UI/UX Designer  
            <br />
            I build modern, scalable and visually stunning web applications.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              View Projects
            </button>
          </div>
        </motion.div>

        {/* 👉 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-20"></div>

            <Image
              src="/your-image.png" // 🔁 replace with your image
              alt="Dipto Roy"
              fill
              className="object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;