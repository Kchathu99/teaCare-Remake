import React from "react";

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange, required = false }) => {
  return (
    <div>
      <label className="block text-[#D8E9A8]">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        className="w-full bg-transparent border-b border-[#D8E9A8] outline-none text-[#D8E9A8] py-2 "
        required={required}
      ></textarea>
    </div>
  );
};

export default TextArea;
