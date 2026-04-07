"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Image animation on scroll
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
        markers: false,
      },
      y: -50,
      opacity: 1,
      duration: 1,
    });

    // Text animation on scroll
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const shortAbout = "I am a passionate Full Stack Developer and Computer Science student at Parul University, currently in my 5th semester. I specialize in building scalable, high-performance, and user-friendly web applications using modern technologies.";

  const fullAbout = [
    "I am a passionate Full Stack Developer and Computer Science student at Parul University, currently in my 5th semester. I specialize in building scalable, high-performance, and user-friendly web applications using modern technologies.",
    "I have strong hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js), along with TypeScript and Next.js for building robust and production-ready applications. On the backend, I work with Node.js and Go to design efficient, scalable systems and RESTful APIs.",
    "I am also experienced in authentication systems (JWT, Firebase), cloud services like AWS (including S3), and containerization using Docker. Additionally, I have a growing interest in Artificial Intelligence and Machine Learning, working with tools such as Python, Scikit-learn, and TensorFlow to build data-driven solutions.",
    "With multiple internships and real-world project experience, I have developed strong problem-solving skills and a deep understanding of both frontend and backend development. I am a fast learner, highly adaptable, and always eager to explore new technologies and build impactful digital products.",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 px-6 md:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 218, 220, 0.05) 0%, transparent 70%)'
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-[#a8dadc] to-white bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#a8dadc] to-transparent mx-auto max-w-xs"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE - Image with Glass Effect */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center sticky top-32"
          >
            <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-[45%_55%_50%_50%/50%_50%_50%_50%]">
              
              {/* Animated Glow Background */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-[45%_55%_50%_50%/50%_50%_50%_50%] bg-gradient-to-r from-[#a8dadc]/40 via-white/20 to-[#a8dadc]/40 blur-3xl opacity-20"
              />

              {/* Glass Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
               className="absolute inset-0 rounded-[45%_55%_50%_50%/50%_50%_50%_50%] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl border border-[#a8dadc]/40 shadow-2xl overflow-hidden p-1 group"
              >
                {/* Animated Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-[40%_60%_50%_50%] bg-gradient-to-r from-[#a8dadc]/60 via-white/40 to-[#a8dadc]/60 opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                />

                {/* Image */}
                 <div className="relative w-full h-full rounded-[45%_55%_50%_50%/50%_50%_50%_50%] overflow-hidden">
                  <Image
                    src="/your-image-1.png"
                    alt="Dipto Roy"
                    fill
                    className="object-cover w-full h-full"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.cos(i * 120 * Math.PI / 180) * 60, 0],
                    y: [0, Math.sin(i * 120 * Math.PI / 180) * 60, 0],
                  }}
                  transition={{ duration: 10 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#a8dadc] to-white"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Short Preview */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {shortAbout}
            </motion.p>

            {/* Full Content - Expandable */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 overflow-hidden"
                >
                  {fullAbout.slice(1).map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="text-lg text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}

                  {/* Skills Preview - Show when expanded */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="pt-4 space-y-4"
                  >
                    <h3 className="text-[#a8dadc] font-bold text-lg">Key Technologies:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "React.js",
                        "Node.js",
                        "TypeScript",
                        "MongoDB",
                        "Next.js",
                        "AWS",
                        "Docker",
                        "Go",
                        "Python",
                      ].map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                          className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-[#a8dadc]/30 hover:border-[#a8dadc]/70 text-white text-sm font-medium transition-all hover:bg-[#a8dadc]/20 text-center"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More / Read Less Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#a8dadc] to-white text-slate-900 font-bold shadow-lg hover:shadow-[#a8dadc]/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
