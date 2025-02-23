"use client";

import Image from "next/image";

import service from "@/images/1735550975262.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faCamera,
    faChartBar,
    faBell,
    faLightbulb,
  } from "@fortawesome/free-solid-svg-icons";


export default function Services() {
    const services = [
        {
          icon: faLeaf,
          title: "Instant Disease Detection",
          description: "Quickly analyze tea leaves using AI to identify diseases and suggest treatments.",
        },
        {
          icon: faCamera,
          title: "Image-Based Diagnosis",
          description: "Simply upload a leaf image, and our system detects infections with high accuracy.",
        },
        {
          icon: faChartBar,
          title: "Detailed Health Reports",
          description: "Get a full report on leaf health, disease type, and recommended treatments.",
        },
        {
          icon: faBell,
          title: "Real-Time Alerts",
          description: "Receive instant notifications when early signs of disease are detected.",
        },
        {
            icon: faLightbulb,
            title: "Smart Farming Insights",
            description: "Optimize your tea garden with AI-driven recommendations for healthier crops.",
          },
      ];
    
  return (
    <section className="h-screen flex items-center justify-center bg-transparent px-20">
      <div className=" w-full  items-center">
    
        <div className="text-left">
          <h3 className="text-[#1E5128] text-sm font-semibold uppercase mb-2">
            How WE DO IT....
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-12">
          AI-Powered Tea Leaf Diagnosis
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <li
              key={index}
              className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center"
            >
              <FontAwesomeIcon icon={service.icon} className="text-green-600 text-4xl mb-3" />
              <h3 className="text-xl font-semibold text-green-600">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
