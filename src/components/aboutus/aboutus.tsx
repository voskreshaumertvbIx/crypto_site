import React from 'react';

const Aboutus = () => {
  return (
    <div className='flex flex-col text-center text-text_color'>
      <p className='text-[#962F79]  text-font_medium font-bold'>About us</p>
      <h1 className='text-font_h1 leading-[60px] mb-4'>We’re a distributed team</h1>
      <p className='text-descp_text_color text-font_large mb-[50px]'>We have offices and teams all around the world.</p>
      <img src="./img/map.png" alt="" />
    </div>
  );
}

export default Aboutus;
