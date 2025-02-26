"use client";

import { useState } from "react";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import ContactCard from "@/components/ContactCard";
import SocialIcons from "@/components/SocialIcons";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", phone: "", email: "", message: "" }); // Clear form
  };

  return (
    <section className="w-full h-fit py-20  bg-[#191A19] text-white flex items-center justify-center px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Locations */}
        <div>
          <h3 className="text-[#D8E9A8] text-lg font-semibold">Get in touch</h3>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">Let's start a conversation.</h2>

          <ContactCard
            city="Instutute of Technology, University of Moratuwa"
            address=" RX5V+C9F, Diyagama Ln, Homagama"
            borderColor="border-[#4E9F3D]"
            textColor="text-[#4E9F3D]"
          />
         

          <SocialIcons />
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="bg-transparent md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput label="Your Name" name="name" value={formData.name} onChange={handleChange} required />
            <TextInput label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="mt-4">
            <TextInput label="Email" name="email" value={formData.email} onChange={handleChange} type="email" required />
          </div>

          <div className="mt-4">
            <TextArea label="Your message here" name="message" value={formData.message} onChange={handleChange} required />
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#D8E9A8] text-black px-6 py-2 rounded-md font-medium transition duration-200 "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
