"use client";

import { useEffect } from "react";
import gsap from "gsap";

const experiences = [
  {
    role: "Frontend Web Development Intern",
    company: "Saiket Systems",
    duration: "Sep 2025 – Oct 2025",
    points: [
      "Developed responsive web apps using React.js, HTML, CSS, and JavaScript",
      "Enhanced UI/UX and optimized performance with senior developers",
      "Integrated APIs and dynamic features",
      "Used Git for version control and collaboration",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    duration: "Oct 2025 – Nov 2025",
    points: [
      "Built reusable UI components using React.js and Bootstrap",
      "Integrated REST APIs and improved performance",
      "Worked in Agile development cycles",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "ShadowFox",
    duration: "Oct 2025 – Nov 2025",
    points: [
      "Built ML models for prediction and analysis",
      "Used Pandas & NumPy for preprocessing",
      "Optimized models using Scikit-learn",
      "Visualized insights effectively",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "ElevateX",
    duration: "Aug 2025 – Sep 2025",
    points: [
      "Developed modern UI with React.js & Tailwind CSS",
      "Improved responsiveness and cross-browser support",
      "Converted UI/UX designs into clean code",
      "Implemented feedback from design reviews",
    ],
  },
];

export default function Experience() {
  useEffect(() => {
    gsap.fromTo(
      ".exp-card",
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#050816] via-[#0b1120] to-[#050816]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-card p-6 rounded-2xl border border-white/10 
              bg-white/5 backdrop-blur-lg 
              shadow-[0_0_20px_rgba(59,130,246,0.1)]
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
              transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-blue-300">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-300 mb-3">{exp.company}</p>

              <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
