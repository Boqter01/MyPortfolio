"use client";

import { Mail, Send, Github, Linkedin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GradientText from "./GradientText";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    sublabel: "boqter007@example.com",
    href: "mailto:boqter007@example.com",
    num: "01",
  },
  {
    icon: Send,
    label: "Telegram",
    sublabel: "t.me/boqter01",
    href: "https://t.me/b0qter01",
    num: "02",
    external: true,
  },
  {
    icon: Phone,
    label: "Call",
    sublabel: "088 975 9399",
    href: "tel:0889759399",
    num: "03",
  }, 
 
  {
    icon: Github,
    label: "GitHub",
    sublabel: "github.com/boqter01",
    href: "https://github.com/boqter01",
    num: "04",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sublabel: "linkedin.com/in/boqter",
    href: "https://linkedin.com/in/",
    num: "05",
    external: true,
  },
];

export default function Contact() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:wght@300;400;500&display=swap');
      `}</style>

      <section id="contact" className="contact-section">
        <div className="ambient-left" />
        <div className="ambient-right" />

        <div className="contact-inner">
          {/* Eyebrow */}
          
             <GradientText
                          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                          animationSpeed={3}
                          showBorder={false}
                          className="custom-class"
                        >
                         ✦ &nbsp; Let's connect
                        </GradientText>      
          

          {/* Headline */}
          <h2 className={`headline ${mounted ? "visible" : ""}`}>
            Get in <em>touch.</em>
          </h2>

          <p className={`tagline ${mounted ? "visible" : ""}`}>
            Available for freelance, collaboration & new opportunities
          </p>

          <div className="divider" />

          {/* Contact rows */}
          <ul className="contact-list">
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <li
                  key={c.num}
                  className={`contact-item ${mounted ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
                >
                  <a
                    href={c.href}
                    className="contact-link"
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span className="item-num">{c.num}</span>
                    <span className="item-icon">
                      <Icon size={16} />
                    </span>
                    <span className="item-text">
                      <span className="item-label">{c.label}</span>
                      <span className="item-sublabel">{c.sublabel}</span>
                    </span>
                    {/* Arrow */}
                    <svg
                      className="item-arrow"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}