import React from "react";
import { FaWallet } from "react-icons/fa";
const card = [
  {
    logo: 'wallet.png',
    name: 'Connect wallet & exchanges',
    text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.'
  },
  {
    logo: 'eye.png',
    name: 'Connect wallet & exchanges',
    text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.'
  },
  {
    logo: 'wallet.png',
    name: 'Connect wallet & exchanges',
    text: 'Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut volup.'
  },
];

const PortfolioTracking = () => {
  return (
    <div className="text-text_color  flex justify-center flex-col items-center mt-[100px]">
      <div className="mb-8 text-center ">
        <h1 className="text-font_subhead font-bold mb-4">Automated portfolio tracking</h1>
        <p className="text-descp_text_color ">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
          voluptas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {card.map(({ logo, name, text }, index) => (
           <div key={index} className="p-6 rounded-lg shadow-md flex flex-col items-center text-center w-[344px] border border-pink-500">
           <p className="text-font_section_header text-left font-bold mb-2">{index + 1}</p>
           <div className="w-[50px] h-[50px] flex items-center justify-center">
             <FaWallet className="w-full h-full" />
           </div>
           <h2 className="text-font_section_header font-semibold leading-[104%] mb-2">{name}</h2>
           <p className="text-font_main_text text-descp_text_color mb-[50px]">{text}</p>
         </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTracking;
