"use client";

import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import TextType from "./TextType";
import Galaxy from "./Galaxy";
import GradientText from "./GradientText";
import ShinyText from './ShinyText';

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="
        relative overflow-hidden
        flex flex-col items-center justify-center text-center
        mt-20
        px-6 py-32
        h-screen
        bg-gradient-to-b from-brand-dark to-brand-blue
        text-white
        scroll-smooth
      "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* ✨ BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-brand-light/20 blur-[140px] rounded-full" />
          {/* <Galaxy /> */}
      </div>

      <motion.div
        className="absolute top-24 right-10 w-36 h-36 bg-brand-light/25 blur-2xl rounded-full"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 left-12 w-48 h-48 bg-brand-blue/25 blur-3xl rounded-full"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* ✨ MAIN HEADING */}
      <motion.h1
        className="
          font-extrabold leading-tight mb-4
          bg-gradient-to-r from-[#F3F4F6] to-[#0033FF]
          text-transparent bg-clip-text
        "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="text-[40px] md:text-[60px] font-extrabold leading-tight">
          <TextType 
            text={["Hello, I'm Lin Thybo","A Software Developer", "Welcome to my Portfolio!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|" variableSpeed={undefined} onSentenceComplete={undefined}/>
        </div>
      </motion.h1>
      {/* ✨ SUBHEADING */}
      <motion.h3
        className="text-lg md:text-xl max-w-2xl mb-8v"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
      <ShinyText
        text="Crafting elegant solutions through code and creativity." 
        disabled={false} 
        speed={3} 
        className='custom-class' 
      />
      </motion.h3>

      {/* ✨ SCROLL TEXT */}
      <motion.h5
        className="text-sm text-gray-300 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        
         <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            
           Scroll down to explore more ↓
          </GradientText>
      </motion.h5>
      {/* <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div> */}
    </motion.section>
  );
}
