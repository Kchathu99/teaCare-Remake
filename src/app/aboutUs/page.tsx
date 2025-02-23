"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Research from "@/images/close-up-green-leaves-nature.jpg";

const AboutUs = () => {
  const router = useRouter(); 

  const handleNavigation = () => {
    router.push("/meetUs"); 
  };

  return (
    <section className="relative pl-20 bg-[#D8E9A8]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between">
        {/* Left Content */}
        <div className="w-full text-center lg:text-left">
          <h4 className="text-[#1E5128] text-lg font-semibold">About Us</h4>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Building next <br /> generation crops.
          </h2>
          <p className="text-gray-600 mt-4">
            🌿 We are a team of five students from the Institute of Technology, University of Moratuwa, 
            dedicated to developing innovative solutions for the agricultural sector.
          </p>
          <p className="text-gray-600 mt-6">
            🌿 As part of our research project, we created an AI-powered tea leaf disease detection 
            system to help tea farmers identify plant diseases early and take preventive measures.
          </p>
          <button
            onClick={handleNavigation} // Navigate on click
            className="mt-6 bg-[#1E5128] text-white px-6 py-3 rounded-lg shadow-md transition duration-200 hover:bg-[#163d20]"
          >
            Meet Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full relative">
          <div className="w-fullrelative overflow-hidden">
            <Image 
              src={Research}
              alt="About Us"
              style={{ clipPath: "ellipse(100% 120% at 100% 100%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
