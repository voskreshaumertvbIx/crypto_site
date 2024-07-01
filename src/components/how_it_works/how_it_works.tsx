import React from "react";

const HowItWorks = () => {
  return (
    <div className="flex  items-center text-text_color mt-[7%]">
      <img src="./img/phones.png" alt="phones" />
      <section className="ml-[60px]">
        <p className="text-[#962F79] text-font_section_header text-bold">How it works</p>
        <h1 className="text-font_h1 leading-[104.5%] font-medium w-[70%] mb-8">Viewing long- term and short -term forcast</h1>
        <p className="text-font_large text-descp_text_color w-[65%] mb-8">
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
          et sint laboriosam sed ipsa sint ut voluptatum labore et possimus
          voluptas.
        </p>
        <button  className='border border-white px-3 py-2 mr-[70px]'>Explore Now</button>
      </section>
    </div>
  );
};

export default HowItWorks;
