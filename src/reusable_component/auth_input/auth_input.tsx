import React from "react";
import { ReusableInputProps } from "./../../interfaces/index";

const ReusableInput: React.FC<ReusableInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="mb-2">
      <label className="text-text_color text-font_large font-semibold">{label}</label>
      <input
        className="w-full bg-input_background rounded-10"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ReusableInput;
