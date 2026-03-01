"use client";

import { motion } from "framer-motion";
import { easeOut, easeInOut } from "framer-motion";
import GradientText from "./GradientText";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "C#", "Java"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Angular", "React", "Next.js", ".NET", "Node.js"],
    },
    {
      category: "Database Management",
      items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & Practices",
      items: ["Git", "REST APIs", "Agile", "Test-Driven Development"],
    },
    {
      category: "Other Skills",
      items: ["Problem-solving", "Debugging", "Performance Optimization", "Team Collaboration"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

 

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    transition: {
      duration: 0.3,
      ease: easeInOut,
    }
  }
};


  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-20 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl w-full h-full mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-2xl md:text-3xl font-bold mb-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#ff40f6", "#ff9040", "#40ffaa"]}
              animationSpeed={4}
              showBorder={false}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold"
            >
              Technical Expertise
            </GradientText>
          </div>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A comprehensive overview of my technical skills and competencies
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
          key={index}
          className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 
          backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 
          hover:border-brand-light/30 transition-all duration-500 overflow-hidden"
          variants={cardVariants}
          whileHover="hover"
>
    {/* Background Layer Behind Content */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/5 to-brand-light/5 
    rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

    {/* Shine Effect Behind Content */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 
    to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] 
    transition-transform duration-1000 -z-10"></div>

    {/* Real Content */}
    <div className="relative z-20 p-2 ">
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-[#F3F4F6] to-[#0033FF] bg-clip-text text-transparent">
          {skillGroup.category}
        </h3>
    </div>

    <motion.ul className="space-y-2" variants={containerVariants}>
      {skillGroup.items.map((skill, skillIndex) => (
        <motion.li
          key={skillIndex}
          className="flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300"
          variants={itemVariants}
        >
          
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  </div>
</motion.div>

          ))}
        </motion.div>

        {/* Additional Decorative Element */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-dark/20 to-brand-light/20 backdrop-blur-sm border border-gray-700/50 rounded-full">
            <span className="text-brand-light mr-2">🚀</span>
            <span className="text-sm md:text-base font-semibold text-gray-300">
              Continuously learning and expanding my skill set
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}