import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface ContactCardProps {
  city: string;
  address: string;
  borderColor: string;
  textColor: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ city, address, borderColor, textColor }) => {
  return (
    <div className="mt-4 flex items-center space-x-4">
      <div className={`w-12 h-12 bg-transparent border ${borderColor} rounded-full flex items-center justify-center`}>
        <span className={`${textColor} text-xl`}><FontAwesomeIcon icon={faLocationDot}/></span>
      </div>
      <div>
        <h4 className="font-semibold text-lg">{city}</h4>
        <p className="text-[#D8E9A8]">{address}</p>
      </div>
    </div>
  );
};

export default ContactCard;
