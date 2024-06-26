import React, { FC } from 'react';
import { SubmitButtonProps } from '../../interfaces';

const SubmitButton: FC<SubmitButtonProps> = ({ text, className, onClick }) => {
  return (
    <div>
      <button onClick={()=>{}} className={`gradient-btn text-inherit font-bold py-2 px-4 rounded-[10px] ${className}`}>
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;