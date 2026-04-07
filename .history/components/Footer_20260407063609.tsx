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
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      // hover animation
      gsap.utils.toArray(".hover-link").forEach((el: any) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { y: -2, duration: 0.2 });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { y: 0, duration: 0.2 });
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative py-16 bg-[#020617] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand */}
          <div className="footer-item">
            <h2 className="text-2xl font-semibold text-white">
              Dipto Roy
            </h2>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Full Stack Developer focused on building scalable, high-performance
              applications with clean user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h3 className="text-sm text-gray-300 mb-3 uppercase tracking-wider">
              Explore
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#about" className="hover-link hover:text-white transition">About</a>
              <a href="#skills" className="hover-link hover:text-white transition">Skills</a>
              <a href="#projects" className="hover-link hover:text-white transition">Projects</a>
              <a href="/resume.pdf" target="_blank" className="hover-link hover:text-white transition">
                Resume
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-item">
            <h3 className="text-sm text-gray-300 mb-3 uppercase tracking-wider">
              Contact
            </h3>

            <a
              href="mailto:diptroy103148@gmail.com"
              className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <Mail size={18} />
              <span className="text-sm">diptroy103148@gmail.com</span>
            </a>

            {/* Fiverr CTA */}
            <a
              href="https://www.fiverr.com/s/5rXDYek"
              target="_blank"
              className="inline-block mt-4 px-5 py-2 text-sm border border-white/20 rounded-full 
              text-white hover:bg-white hover:text-black transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-[1px] bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p className="footer-item">
            © {new Date().getFullYear()} Dipto Roy. All rights reserved.
          </p>

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