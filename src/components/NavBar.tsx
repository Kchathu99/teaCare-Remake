"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/Logo.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-20 py-3 z-50 transition-all duration-300 bg-[#D8E9A8] 
        ${scrolling ? "shadow-md" : "shadow-none"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
        <Image src={Logo} alt="Logo" width={60} height={60} />
        </Link>
        {/* Navigation Links */}
        <ul className="flex space-x-12 text-black font-medium">
          <li>
            <Link href="/#identifier" className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1">
              Identifier
            </Link>
          </li>
          <li>
            <Link href="/#services" className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1">
              Services
            </Link>
          </li>
          <li>
            <Link href="/#about" className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1">
              About Us
            </Link>
          </li>
        </ul>

        {/* Get In Touch Button */}
        <Link
          href="/#contact"
          className="border-2 border-[#1E5128] text-[#1E5128] px-4 py-2 rounded-lg font-medium transition duration-200 hover:bg-[#1E5128] hover:text-white"
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
