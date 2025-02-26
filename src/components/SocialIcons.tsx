import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLinkedin, 
  faGithub, 
  faTwitter, 
  faFacebook, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface SocialIconsProps {
  linkedin?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  email?: string;
  color?: string; // Dynamic color prop
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  linkedin, github, twitter, facebook, instagram, email, color = "#1E5128" 
}) => {
  return (
    <div className="mt-4 flex space-x-4">
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl cursor-pointer transition-colors duration-300" style={{ color }} />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="text-2xl cursor-pointer transition-colors duration-300" style={{ color }} />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-2xl cursor-pointer transition-colors duration-300" style={{ color }} />
        </a>
      )}
      {facebook && (
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl cursor-pointer transition-colors duration-300" style={{ color }} />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl cursor-pointer transition-colors duration-300" style={{ color }} />
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl cursor-pointer transition-colors duration-300" style={{ color }} />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
