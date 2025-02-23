import Image from "next/image";
import Janith from "@/images/janith.jpg";
import Isuranga from "@/images/isuranga.jpg";
import Nishara from "@/images/nishara.jpg";
import Kanchana from "@/images/kanchana.jpg";
import Sewwandhi from "@/images/sewwandi.jpg";
import FloatingLines from "@/components/FloatingLines";

const teamMembers = [
  { name: "Janith Kanchana Premasiri", role: "AI/ML Developer", image: Janith },
  { name: "Isuranga Charuka Jayasinghe", role: "Software Developer", image: Isuranga },
  { name: "Nishara Sewmini Harischandra", role: "Software Developer/UI/UX Designer", image: Nishara },
  { name: "Kanchana C. Senevirathna", role: "Software Developer", image: Kanchana },
  { name: "Sewwandhi Vishaka Perera", role: "Software Developer/QA Tester", image: Sewwandhi },
];

const MeetUs = () => {
  return (
    <div className="bg-[#D8E9A8] min-h-screen py-16 px-8">
      {/* Wrapper to keep layout structured */}
      <div>

        {/* Team Section */}
        <section className="text-center mt-16">
          <h4 className="text-[#1E5128] font-semibold">Our Team</h4>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 my-4">
            Meet our multidisciplinary team.
          </h2>
          <p className="text-gray-900">
            We are a team of five passionate students from the Institute of Technology, University of Moratuwa, working together on an innovative research project. Our mission is to leverage AI and image processing to revolutionize tea farming by enabling early disease detection.
          </p>
          <div className="flex justify-center align-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="flex justify-center">
                    <div className="relative w-80 h-80 overflow-hidden rounded-lg">
                      <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Importance Sections */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16 px-20">
          {/* Research Focus */}
          <div className="border-gray-900 border-l-2 border-r-2 p-6">
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Our Research Focus
            </h2>
            <h6 className="text-gray-900 mt-2">
              Tea leaf diseases, if undetected, can lead to major crop losses. To address this, we've developed an AI-powered image-based disease detection system that:
            </h6>
            <ul className="list-disc pl-5 mt-4 text-gray-700">
              <li>Uses deep learning to analyze leaf images.</li>
              <li>Detects infections with high accuracy.</li>
              <li>Provides real-time health reports for better decision-making.</li>
            </ul>
          </div>

          {/* Why It Matters */}
          <div className="border-gray-900 border-l-2 border-r-2 p-6">
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Why It Matters
            </h2>
            <h6 className="text-gray-900 mt-2">
              Our AI-driven approach empowers tea farmers by:
            </h6>
            <ul className="list-disc pl-5 mt-4 text-gray-700">
              <li>Early disease detection – Prevents crop damage before it spreads.</li>
              <li>AI-powered smart farming – Enhances efficiency and precision.</li>
              <li>Sustainable agriculture – Reduces chemical usage, improving long-term yield.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Floating Lines (Placed AFTER the sections) */}
      <div className="relative w-full h-40 overflow-hidden">
        <FloatingLines />
      </div>
    </div>
  );
};

export default MeetUs;
