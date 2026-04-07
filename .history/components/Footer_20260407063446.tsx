"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, ArrowUp } from "lucide-react";

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
      className="relative py-14 bg-gradient-to-b from-[#050816] to-[#020617] border-t border-white/10 overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 blur-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Name + Tagline */}
          <div className="footer-item text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white tracking-wide">
              Dipto Roy
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-md">
              Full Stack Developer crafting scalable, performant & user-focused digital products.
            </p>
          </div>

          {/* Actions */}
          <div className="footer-item flex items-center gap-6">

            {/* Email */}
            <a
              href="mailto:diptroy103148@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
              <Mail size={18} />
              <span className="text-sm">Email</span>
            </a>

            {/* Fiverr (highlighted CTA) */}
            <a
              href="https://www.fiverr.com/s/5rXDYek"
              target="_blank"
              className="px-4 py-1.5 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p className="footer-item">
            © {new Date().getFullYear()} Dipto Roy. Built with passion & precision.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="footer-item flex items-center gap-2 hover:text-white transition group"
          >
            Back to top
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}