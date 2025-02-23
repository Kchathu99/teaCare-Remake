import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, value, onChange, type = "text", required = false }) => {
  return (
    <div>
      <label className="block text-[#D8E9A8]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-[#D8E9A8] outline-none text-[#D8E9A8] py-2 "
        required={required}
      />
    </div>
  );
};

export default TextInput;
