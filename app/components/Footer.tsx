"use client";

import { useEffect, useState } from "react";
import ShinyText from "./ShinyText";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  // Run after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
   <footer className="bg-brand-blue text-#F3F4F6 py-6 justify-items-center">
    <div className={`footer-line ${mounted ? "visible" : ""}`}>
      <div className="flex items-center justify-center gap-2">
        <span className="footer-copy"><ShinyText text="© 2026 Boqter" /></span>
        <span className="footer-dot" />
      </div>
    </div>
</footer>
  );
}