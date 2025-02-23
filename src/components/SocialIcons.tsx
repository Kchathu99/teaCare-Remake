import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialIcons: React.FC = () => {
  return (
    <div className="mt-6 flex space-x-4">
      <FontAwesomeIcon icon={faLinkedin} className="text-[#D8E9A8] hover:text-white text-2xl cursor-pointer" />
      <FontAwesomeIcon icon={faGithub} className="text-[#D8E9A8] hover:text-white text-2xl cursor-pointer" />
      <FontAwesomeIcon icon={faTwitter} className="text-[#D8E9A8] hover:text-white text-2xl cursor-pointer" />
    </div>
  );
};

export default SocialIcons;
