"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Layers3,
  Sparkles,
} from "lucide-react";
import GradientText from "./GradientText";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive websites built with React, Next.js, and TypeScript.",
      color: "text-blue-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Cross-platform mobile apps with intuitive interfaces and smooth experiences.",
      color: "text-purple-400",
    },
    {
      icon: Layers3,
      title: "Full-Stack Development",
      description:
        "Scalable APIs, databases, authentication, and complete end-to-end solutions.",
      color: "text-orange-400",
    },
    {
      icon: Sparkles,
      title: "Interactive Experiences",
      description:
        "Premium animations, 3D interactions, and immersive digital experiences.",
      color: "text-green-400",
    },
  ];

  return (
    <section
      id="services"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 py-24 text-white md:px-16"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />
        <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold md:text-6xl">
            <GradientText
              colors={[
                "#40ffaa",
                "#4079ff",
                "#40ffaa",
                "#4079ff",
                "#40ffaa",
              ]}
              animationSpeed={3}
              showBorder={false}
            >
              My Services
            </GradientText>
          </h2>

          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-white/70">
            I build modern digital experiences that combine clean code,
            beautiful interfaces, and high performance to help businesses
            stand out online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-blue-500/30
                hover:bg-white/[0.05]
              "
            >
              {/* Animated Gradient Border */}
              <div
                className="
                  absolute inset-0 rounded-[28px]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-[linear-gradient(135deg,rgba(64,121,255,0.12),rgba(64,255,170,0.08),transparent)]
                "
              />

              {/* Glow */}
              <div
                className="
                  absolute -right-20 -top-20
                  h-40 w-40
                  rounded-full
                  bg-blue-500/20
                  blur-[90px]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-5">
                  {/* Icon */}
                  <div
                    className="
                      flex h-16 w-16 items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <service.icon
                      size={30}
                      className={`${service.color} transition-all duration-500`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      transition-colors
                      duration-300
                      group-hover:text-blue-300
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="
                    text-base
                    leading-relaxed
                    text-white/60
                    transition-colors
                    duration-300
                    group-hover:text-white/80
                  "
                >
                  {service.description}
                </p>

                {/* Bottom Line */}
                <div
                  className="
                    mt-8
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}