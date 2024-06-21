import React from "react";
import { ReusableInputProps } from "./../../interfaces/index";

const ReusableInput: React.FC<ReusableInputProps> = ({ id, name, label, type = 'text', value, onChange }) => {
  return (
    <div className="mb-2">
      <label className="text-text_color text-font_large font-semibold ">{label}</label>
      <input
        className="w-full bg-input_background rounded-md mt-2 p-1"
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
      />
    </div>
  );
};

export default ReusableInput;
