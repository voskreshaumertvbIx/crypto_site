import React from "react";
const teams = [
  "./img/team/111.png",
  "./img/team/222.png",
  "./img/team/333.png",
];
const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-text_color mt-[7%] text-center">
      <h1 className="text-font_h1 font-medium">Testimonials</h1>
      <p className="text-descp_text_color text-font_large w-[60%] mb-[30px]">
        Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia
        et sint laboriosam sed ipsa sint ut voluptatum labore et.
      </p>
      <div className="flex justify-center">
        {teams.map((path) => (
          <img src={path} alt="" key={path} className=" object-contain m-[5px]"/>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
