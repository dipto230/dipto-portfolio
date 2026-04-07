"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-transparent backdrop-blur-xl border-b border-[#a8dadc]/20"
    >
      <div className="container mx-auto px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* LEFT SIDE - Logo Only */}
          <Link href="#" className="flex items-center gap-3 group">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative w-12 h-12 rounded-full overflow-hidden border border-[#a8dadc]/30 hover:border-[#a8dadc] transition-colors flex-shrink-0"
            >
              <Image
                src="/logo-dipto.png"
                alt="Dipto Logo"
                fill
                className="object-cover"
              />
            </motion.div>
          </Link>

          {/* RIGHT SIDE - Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-[#a8dadc] font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#a8dadc] to-white group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#a8dadc] to-white text-slate-900 font-bold shadow-lg hover:shadow-[#a8dadc]/50 transition-all"
            >
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-gray-300 hover:text-[#a8dadc] font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#a8dadc] to-white text-slate-900 font-bold w-full"
            >
              Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
