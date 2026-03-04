"use client";

import { motion } from "framer-motion";
import { User, Code, Palette, Rocket } from "lucide-react";
import GradientText from "./GradientText";

 export default function About() {
  const traits = [
    { icon: Code, text: "Clean Code", color: "text-blue-400" },
    { icon: Palette, text: "Modern UI", color: "text-purple-400" },
    { icon: Rocket, text: "Fast Delivery", color: "text-orange-400" },
    { icon: User, text: "Team Player", color: "text-green-400" },
  ];

  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Happy Clients", value: "100%" },
    { label: "Cups of Coffee", value: "1k+" },
  ];

  return (
      <motion.section
      id="about"
      className="relative flex flex-col gap-18 items-center justify-center min-h-screen py-24 px-8 md:px-16 bg-transparent text-white overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none ">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col justify-center items-center">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              About Me
            </GradientText>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left — text + trait cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h3 className="text-2xl font-semibold text-blue-400">Who am I?</h3>

            <p className="text-lg text-white/70 leading-relaxed font-light">
              I&apos;m an aspiring junior Software Developer and IT student with hands-on experience 
              building academic and personal projects. Skilled in Web and Mobile application development, 
              problem-solving, and learning new technologies. 
            </p>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Highly motivated to grow through real-world development opportunities 
              and contribute to team success.
            </p>

          {/* Trait cards */}
            <div className="grid grid-cols-2 gap-6 pt-6 justify-items-center lg:justify-items-start">
              {traits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="
                    flex items-center gap-4
                    text-white/80
                    bg-white/5
                    border border-white/5
                    hover:border-blue-500/20
                    hover:bg-white/10
                    backdrop-blur-sm
                    px-5 py-4
                    min-w-[150px]
                    rounded-xl
                    transition-all duration-300
                  "
                >
                  <div className="p-3 bg-white/5 rounded-lg">
                    <item.icon size={20} className={item.color} />
                  </div>
                  <span className="text-base font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-square max-w-md group bg-white/5">
              <img
                //src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            </div>

            {/* Corner accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/50 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-purple-500/50 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>

     <div className="w-full max-w-6xl mx-auto relative z-10">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 justify-items-center">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="
              text-center 
              p-8 
              min-w-[160px]
              rounded-2xl 
              bg-white/5 
              border border-white/5 
              hover:border-blue-500/20 
              hover:bg-white/10
              transition-all duration-300
              backdrop-blur-sm
            "
          >
            <div className="text-4xl font-bold text-blue-400 mb-2">
              {stat.value}
            </div>
            <div className="text-xs uppercase tracking-widest text-white/40">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
      
    {/* </section> */}
      </motion.section>
  );
}