"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/images/Logo.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > lastScrollTop);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 md:px-20 py-3 z-50 transition-all duration-300 bg-[#D8E9A8] 
        ${scrolling ? "shadow-md" : "shadow-none"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li>
            <Link
              href="/#identifier"
              className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1"
            >
              Identifier
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Get In Touch Button (Desktop) */}
        <div className="hidden md:flex">
          <Link
            href="/#contact"
            className="border-2 border-[#1E5128] text-[#1E5128] px-4 py-2 rounded-lg font-medium transition duration-200 hover:bg-[#1E5128] hover:text-white"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1E5128]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#D8E9A8] shadow-md py-4 ">
          <ul className="flex flex-col items-center space-y-4 text-black font-medium">
            <li>
              <Link
                href="/#identifier"
                className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1"
                onClick={() => setIsOpen(false)}
              >
                Identifier
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-[#1E5128] transition duration-200 hover:underline hover:underline-offset-1"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="border-2 border-[#1E5128] text-[#1E5128] px-4 py-2 rounded-lg font-medium transition duration-200 hover:bg-[#1E5128] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
