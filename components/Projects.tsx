"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "LawHive",
    description:
      "Modern legal service platform with role-based access, secure authentication, booking system, and online payments.",
    image: "/projects/lawhive.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Prisma", "Stripe"],
    live: "https://assignment-5-client-six.vercel.app",
    github: "https://github.com/dipto230/assignment-5client",
  },
  {
    title: "MediStore",
    description:
      "Multi-vendor medicine e-commerce platform with inventory, order management, and scalable architecture.",
    image: "/projects/medistore.png",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Express"],
    live: "https://medistore-client-side.vercel.app",
    github: "https://github.com/dipto230/ASSIGNMENT-4-FRONTEND",
  },
  {
    title: "AI Creative Suite",
    description:
      "AI-powered platform for image generation, background removal, and resume feedback.",
    image: "/projects/ai.png",
    tech: ["React", "Vite", "OpenAI", "Cloudinary"],
    live: "https://quick-ai-live-client.vercel.app",
    github: "https://github.com/dipto230/QUICK-AI-LIVE",
  },
  {
    title: "Hotel Booking System",
    description:
      "Full-stack booking system with authentication, dashboards, and real-time booking.",
    image: "/projects/hotel.png",
    tech: ["React", "Redux", "MongoDB", "Node.js"],
    live: "https://hotel-managment-updated-lma9.vercel.app",
    github: "https://github.com/dipto230/HOTEL-MANAGMENT-UPDATED",
  },
  {
    title: "Sports Vision Analytics",
    description:
      "Computer vision system to track and analyze player movements using deep learning.",
    image: "/projects/sports.png",
    tech: ["Python", "OpenCV", "YOLOv8", "ML"],
    github: "https://github.com/dipto230/football-analysis-with-ai",
  },

  // Page 2
  {
    title: "NLP Language Model Analysis",
    description:
      "Research project evaluating GPT-2, DistilBERT using NLP metrics and visualization.",
    image: "/projects/nlp.png",
    tech: ["Python", "Transformers", "BERT"],
    github: "https://github.com/dipto230/shadowfox-task-4.0",
  },
  {
    title: "Loan Prediction",
    description:
      "ML model predicting loan approval using classification techniques.",
    image: "/projects/loan.png",
    tech: ["Python", "Scikit-learn"],
    github: "https://github.com/dipto230/Shadowfox-tastk-3.0",
  },
  {
    title: "House Price Prediction",
    description:
      "Regression-based ML system to estimate house prices.",
    image: "/projects/house.png",
    tech: ["Python", "Linear Regression"],
    github: "https://github.com/dipto230/PRODIGY_ML_01",
  },
];

export default function Projects() {
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;
  const start = (page - 1) * itemsPerPage;
  const currentProjects = projects.slice(start, start + itemsPerPage);

  return (
    <section className="py-24 bg-gradient-to-b from-[#050816] via-[#0b1120] to-[#050816]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Projects
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 
              bg-white/5 backdrop-blur-lg 
              shadow-[0_0_20px_rgba(59,130,246,0.1)]
              hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
              transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                      bg-blue-500/10 text-blue-300 border border-blue-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-sm px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Live
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-4">
          <button
            onClick={() => setPage(1)}
            className={`px-4 py-2 rounded-lg ${
              page === 1
                ? "bg-blue-500 text-white"
                : "bg-white/10 text-gray-300"
            }`}
          >
            1
          </button>
          <button
            onClick={() => setPage(2)}
            className={`px-4 py-2 rounded-lg ${
              page === 2
                ? "bg-blue-500 text-white"
                : "bg-white/10 text-gray-300"
            }`}
          >
            2
          </button>
        </div>
      </div>
    </section>
  );
}
