"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Github, Mail, ArrowUp } from "lucide-react";


export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative py-12 bg-gradient-to-b from-[#050816] to-[#020617] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Name + Tagline */}
          <div className="footer-item text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">
              Dipto Roy
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Building modern, scalable & impactful digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-item flex gap-5">
            <a
              href="https://github.com/dipto230"
              target="_blank"
              className="p-2 rounded-lg bg-white/5 border border-white/10 
              hover:bg-white/10 transition"
            >
              <Github size={18} className="text-gray-300" />
            </a>

            <a
              href="#"
              className="p-2 rounded-lg bg-white/5 border border-white/10 
              hover:bg-white/10 transition"
            >
              <Linkedin size={18} className="text-gray-300" />
            </a>

            <a
              href="mailto:diptroy103148@gmail.com"
              className="p-2 rounded-lg bg-white/5 border border-white/10 
              hover:bg-white/10 transition"
            >
              <Mail size={18} className="text-gray-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-[1px] bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          
          <p className="footer-item">
            © {new Date().getFullYear()} Dipto Roy. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="footer-item flex items-center gap-2 hover:text-white transition"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
