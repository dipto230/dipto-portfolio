'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Package, 
  Cloud,
  Lock,
  Zap,
  Github,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      color: '#a8dadc',
      icon: Code2,
      skills: [
        { name: 'JavaScript', icon: '𝐉𝐒' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '𝐓𝐒' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TailwindCSS', icon: '🎨' },
        { name: 'DaisyUI', icon: '🌼' },
        { name: 'Radix UI', icon: '◈' },
        { name: 'Shadcn', icon: '✨' },
      ]
    },
    {
      category: 'Backend',
      color: '#a8dadc',
      icon: Database,
      skills: [
        { name: 'Node.js', icon: '🟩' },
        { name: 'API', icon: '🔌' },
        { name: 'Go', icon: '🐹' },
        { name: 'Python', icon: '🐍' },
      ]
    },
    {
      category: 'Database & ORM',
      color: '#a8dadc',
      icon: Package,
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'Prisma', icon: '📦' },
      ]
    },
    {
      category: 'Authentication & Security',
      color: '#a8dadc',
      icon: Lock,
      skills: [
        { name: 'JWT', icon: '🔐' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Better Auth', icon: '✅' },
      ]
    },
    {
      category: 'DevOps & Tools',
      color: '#a8dadc',
      icon: Cloud,
      skills: [
        { name: 'Docker', icon: '🐳' },
        { name: 'GitHub', icon: '🐙' },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: 'rgba(168, 218, 220, 0.3)',
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
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
            Tech Stack
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#a8dadc] to-transparent mx-auto max-w-xs"
          />
        </motion.div>

        {/* Skills Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) =>
            category.skills.map((skill, skillIndex) => (
              <motion.div
                key={`${category.category}-${skillIndex}`}
                variants={skillBadgeVariants}
                whileHover="hover"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#a8dadc]/20 to-[#a8dadc]/10 border border-[#a8dadc]/30 hover:border-[#a8dadc]/60 transition-all duration-300 cursor-default"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="text-base font-semibold text-white whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-[#a8dadc] to-transparent mx-auto max-w-xs origin-center"
        />
      </div>
    </section>
  );
};

export default Skills;
