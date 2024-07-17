import React from "react";
import { ReusableInputProps } from "./../../interfaces/index";

const ReusableInput: React.FC<ReusableInputProps> = ({ id, name, label, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="mb-2">
      <label className="text-text_color text-font_large font-semibold ">{label}</label>
      <input
        className="w-full bg-[#FFA3BE] h-[47px] rounded-md mt-2 p-1"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
      />
    </div>
  );
};

export default ReusableInput;
