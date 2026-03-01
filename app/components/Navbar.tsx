"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full  fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-gray-800 tracking-wide">
          BOQTER
        </h1>
        <div className="flex space-x-6 text-gray-600 font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <a
                href={item.href}
                className="hover:text-brand-light transition"
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
}
