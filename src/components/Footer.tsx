"use client";

import { useState, useEffect } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setShowFooter(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`w-full bg-[#1E5128] text-white p-4 text-center transition-all duration-300 ${
        showFooter ? "block" : "hidden"
      }`}
    >
      <p>&copy; {new Date().getFullYear()} TeaCare+. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
