"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 🔥 Section animation
      gsap.from(".contact-left > *", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".contact-form", {
        opacity: 0,
        x: 80,
        duration: 1.2,
        ease: "power3.out",
      });

      // ✨ Floating subtle animation
      gsap.to(".contact-form", {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ✨ Input focus glow
      const inputs = document.querySelectorAll(".input-field");

      inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          gsap.to(input, {
            boxShadow: "0 0 15px rgba(59,130,246,0.6)",
            borderColor: "#3b82f6",
            duration: 0.3,
          });
        });

        input.addEventListener("blur", () => {
          gsap.to(input, {
            boxShadow: "0 0 0px rgba(0,0,0,0)",
            borderColor: "rgba(255,255,255,0.2)",
            duration: 0.3,
          });
        });
      });

      // ✨ Button hover (magnetic feel)
      const btn = document.querySelector(".send-btn");

      btn?.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.05,
          boxShadow: "0 0 25px rgba(59,130,246,0.6)",
          duration: 0.3,
        });
      });

      btn?.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          boxShadow: "0 0 15px rgba(59,130,246,0.4)",
          duration: 0.3,
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-[#050816] via-[#0b1120] to-[#050816]"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="contact-left">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let’s Build Something Meaningful 🚀
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Great products start with great conversations. If you have an idea,
            opportunity, or just want to connect — I'm always ready.
          </p>

          <div className="space-y-4">
            
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="text-blue-400" size={18} />
              <span>01521239465 / 9773085703</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <MessageCircle className="text-green-400" size={18} />
              <span>WhatsApp Available</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="text-red-400" size={18} />
              <span>diptoroy103148@gmail.com</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div
          className="contact-form p-8 rounded-2xl border border-white/10 
          bg-white/5 backdrop-blur-xl 
          shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
          <form className="space-y-5">
            
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                className="input-field w-full mt-1 px-4 py-2 rounded-lg 
                bg-transparent border border-white/20 text-white 
                focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                className="input-field w-full mt-1 px-4 py-2 rounded-lg 
                bg-transparent border border-white/20 text-white 
                focus:outline-none"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                rows={4}
                className="input-field w-full mt-1 px-4 py-2 rounded-lg 
                bg-transparent border border-white/20 text-white 
                focus:outline-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="send-btn w-full py-3 rounded-lg 
              bg-blue-500 text-white font-medium 
              shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
