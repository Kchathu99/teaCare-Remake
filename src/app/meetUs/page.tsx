"use client";

import Image from "next/image";
import Janith from "@/images/janith.jpg";
import Isuranga from "@/images/isuranga.jpg";
import Nishara from "@/images/nishara.jpg";
import Kanchana from "@/images/kanchana.jpg";
import Sewwandhi from "@/images/sewwandi.jpg";
import FloatingLines from "@/components/FloatingLines";
import SocialIcons from "@/components/SocialIcons";

const teamMembers = [
  {
    name: "Janith Kanchana Premasiri",
    role: "AI/ML Developer",
    image: Janith,
    social: {
      linkedin: "https://www.linkedin.com/in/janith-kanchana",
      github: "https://github.com/janithkanchana",
      facebook: "https://www.facebook.com/janithkanchana",
      instagram: "https://www.instagram.com/janithkanchana",
      email: "janith@example.com",
      color: "white",
    },
  },
  {
    name: "Isuranga Charuka Jayasinghe",
    role: "Software Developer",
    image: Isuranga,
    social: {
      linkedin: "https://www.linkedin.com/in/isuranga",
      github: "https://github.com/isuranga",
      facebook: "https://www.facebook.com/isuranga",
      instagram: "https://www.instagram.com/isuranga",
      email: "isuranga@example.com",
      color: "white",
    },
  },
  {
    name: "Nishara Sewmini Harischandra",
    role: "Software Developer/UI/UX Designer",
    image: Nishara,
    social: {
      linkedin: "https://www.linkedin.com/in/nishara",
      github: "https://github.com/nishara",
      facebook: "https://www.facebook.com/nishara",
      instagram: "https://www.instagram.com/nishara",
      email: "nishara@example.com",
      color: "white",
    },
  },
  {
    name: "Kanchana C. Senevirathna",
    role: "Software Developer",
    image: Kanchana,
    social: {
      linkedin: "https://www.linkedin.com/in/kanchana",
      github: "https://github.com/kanchana",
      facebook: "https://www.facebook.com/kanchana",
      instagram: "https://www.instagram.com/kanchana",
      email: "kanchana@example.com",
      color: "white",
    },
  },
  {
    name: "Sewwandhi Vishaka Perera",
    role: "Software Developer/QA Tester",
    image: Sewwandhi,
    social: {
      linkedin: "https://www.linkedin.com/in/sewwandhi",
      github: "https://github.com/sewwandhi",
      facebook: "https://www.facebook.com/sewwandhi",
      instagram: "https://www.instagram.com/sewwandhi",
      email: "sewwandhi@example.com",
      color: "white",
    },
  },
];
const researchSections = [
  {
    title: "Our Research Focus",
    description:
      "Tea leaf diseases, if undetected, can lead to major crop losses. To address this, we've developed an AI-powered image-based disease detection system that:",
    points: [
      "Uses deep learning to analyze leaf images.",
      "Detects infections with high accuracy.",
      "Provides real-time health reports for better decision-making.",
    ],
  },
  {
    title: "Why It Matters",
    description:
      "Our AI-driven approach empowers tea farmers by:",
    points: [
      "Early disease detection – Prevents crop damage before it spreads.",
      "AI-powered smart farming – Enhances efficiency and precision.",
      "Sustainable agriculture – Reduces chemical usage, improving long-term yield.",
    ],
  },
];


const MeetUs = () => {
  return (
    <div className="bg-[#D8E9A8] lg:py-16 px-8">
      <div>
      <section className="text-center mt-16">
          <h4 className="text-[#1E5128] font-semibold">Our Team</h4>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 my-4">
            Meet our multidisciplinary team.
          </h2>
          <p className="text-gray-900">
            We are a team of five passionate students from the Institute of Technology, University of Moratuwa, working together on an innovative research project. Our mission is to leverage AI and image processing to revolutionize tea farming by enabling early disease detection.
          </p>
          <div className="flex justify-center align-center">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8 mt-8 ">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center group relative grid justify-center">
                  <div className="relative w-80 h-80 overflow-hidden rounded-lg">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      className="group-hover:brightness-50 transition duration-300 justify-center align-center"
                    />
                    {/* Social Icons on Hover */}
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <SocialIcons {...member.social} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16 lg:px-20">
          {researchSections.map((section, index) => (
            <div key={index} className="sm:border-gray-900 sm:border-l-2 sm:border-r-2 sm:p-6">
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {section.title}
              </h2>
              <h6 className="text-gray-900 mt-2 text-justify">
                {section.description}
              </h6>
              <ul className="list-disc pl-5 mt-4 text-gray-700 text-justify">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>

      <div className="relative w-full h-40 overflow-hidden">
        <FloatingLines />
      </div>
    </div>
  );
};

export default MeetUs;
