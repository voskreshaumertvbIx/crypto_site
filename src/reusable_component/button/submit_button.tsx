import React, { FC } from 'react';
import { SubmitButtonProps } from '../../interfaces';

const SubmitButton:FC<SubmitButtonProps> = ({text, className}) => {
  return (
    <div>
      <button  className="gradient-btn text-inherit font-bold py-2 px-4 rounded-[10px]">{text}</button>
    </div>
  );
}

export default SubmitButton;
