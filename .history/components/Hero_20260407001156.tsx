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
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  if (!isClient) return null;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      
      {/* Premium Spotlights - Updated with #a8dadc */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#a8dadc15" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#a8dadc20" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#a8dadc25" />
      <Spotlight className="bottom-10 right-1/4 h-[60vh] w-[40vw]" fill="#a8dadc10" />

   
      <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
      
     
      <div className="absolute inset-0 pointer-events-none opacity-40" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 218, 220, 0.08) 0%, transparent 70%)'
        }}
      />

   
      <div className="container mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center z-10 relative">

      
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            transform: isClient ? `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` : "translate(0, 0)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
          className="space-y-8"
        >
       
          {/* <motion.div
            variants={itemVariants}
            className="inline-flex"
          >
            <div className="px-4 py-2 rounded-full bg-white/8 backdrop-blur-xl border border-[#a8dadc]/30 hover:border-[#a8dadc] transition-all duration-300 hover:bg-white/12">
              <span className="text-[#a8dadc] text-sm font-semibold tracking-widest">
                ✨ Welcome to My Portfolio
              </span>
            </div>
          </motion.div> */}

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-[#a8dadc] to-[#a8dadc] bg-clip-text text-transparent leading-tight">
              Dipto Roy
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#a8dadc] to-white"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-white">
              Full Stack Developer • Problem Solver • UI/UX Designer
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Crafting elegant digital solutions with modern design and cutting-edge technology. 
              Building scalable, beautiful applications that make a real impact.
            </p>
          </motion.div>

         
          <motion.div variants={itemVariants} className="flex gap-4 pt-6">
          
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-[#a8dadc] font-bold shadow-lg hover:shadow-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </motion.button>

           
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-[#a8dadc]/10 backdrop-blur-md border border-[#a8dadc]/30 hover:border-[#a8dadc] text-white font-bold transition-all duration-300 shadow-lg hover:shadow-[#a8dadc]/20"
            >
              View My Work
            </motion.button>
          </motion.div>

   
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
            {[
              { number: "10+", label: "Projects" },
              { number: "2+", label: "Years" },
              { number: "100%", label: "Dedication" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-[#a8dadc]/20 hover:border-[#a8dadc]/50 transition-colors">
                <motion.p 
                  custom={i}
                  variants={textVariants}
                  className="text-2xl font-bold text-transparent bg-gradient-to-r from-white to-[#a8dadc] bg-clip-text"
                >
                  {stat.number}
                </motion.p>
                <p className="text-xs text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Premium Image with Cursor Tracking */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            transform: isClient ? `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` : "translate(0, 0)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]">
            
            {/* Premium Glow Effects - #a8dadc */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a8dadc]/50 via-white/20 to-[#a8dadc]/40 blur-3xl opacity-15"
            />
            
            <motion.div
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute inset-3 rounded-full bg-gradient-to-r from-white/30 via-[#a8dadc]/20 to-[#a8dadc]/20 blur-2xl opacity-20"
            />

            {/* Premium Glass Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-[#a8dadc]/40 shadow-2xl overflow-hidden p-1 group"
            >
              {/* Animated Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a8dadc]/40 via-white/40 to-[#a8dadc]/40 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              />

              {/* Inner circular image */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/your-image-1.png"
                  alt="Dipto Roy"
                  fill
                  className="object-cover w-full h-full"
                />
                
           
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10" />
              </div>
            </motion.div>

         
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.cos(i * 120 * Math.PI / 180) * 50, 0],
                  y: [0, Math.sin(i * 120 * Math.PI / 180) * 50, 0],
                }}
                transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#a8dadc] to-white"
                style={{
                  top: "50%",
                  left: "50%",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#a8dadc]/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gradient-to-r from-[#a8dadc] to-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;