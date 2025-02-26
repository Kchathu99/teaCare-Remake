"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import animationData from "@/animations/Animation2.json";
import leaf from "@/images/leaf2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";


const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Identifier() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <section className="h-fit mt-16 md:mt-24 lg:mt-40 flex items-center justify-center bg-[#D8E9A8] px-6 md:px-20">
      <div className="max-w- w-full grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left">
          <h3 className="text-[#1E5128] text-sm font-semibold uppercase mb-2">
            What we do
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Making Tea Farming <br /> More Sustainable.
          </h1>
          <p className="text-gray-600 mt-4">
          Healthy tea plants are essential for quality and yield. Detect diseases early to protect your crops and ensure sustainability.
          </p>
          <p className="font-bold mt-4">🌿🌿 Upload Your Leaf Image Below</p>
          <button className="mt-6 px-6 py-3 bg-[#1E5128] text-white text-lg font-medium rounded-lg shadow-md  transition">
            Upload
            <FontAwesomeIcon icon={faUpload} className="ml-3"/>
          </button>
        </div>

        {/* Right Side - Animation & Image */}
        <div className="relative hidden sm:flex items-center justify-center ">
          <div className="absolute w-[500px] h-[500px]">
            <Lottie animationData={animationData} loop={true} />
          </div>
          {isVisible && (
            <Image
              src={leaf}
              alt="Identifier"
              width={400}
              height={400}
              className="z-10 drop-shadow-xl"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
