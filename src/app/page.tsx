"use client"; // Ensure this runs on the client-side
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
import Identifier from "@/app/identifier/page";
import Services from "@/app/services/page";
import AboutUs from "@/app/aboutUs/page";
import ContactUs from "@/app/contactUs/page";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <section id="identifier">
          <Identifier />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </div>

      {/* Scroll to Top Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
}
