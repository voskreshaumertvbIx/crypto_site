import React from 'react';

const SubMain = () => {
  return (
    <div className='relative flex justify-center items-start pt-[160px]'>
      <div className='flex flex-col items-start w-[40%] text-left mt-[15%]'>
        <h1 className='text-font_header text-text_color break-normal leading-[93px]'>live and <br /> on-demand trading</h1>
        <p className='text-font_large text-descp_text_color w-[85%] mt-4'>
          Lorem ipsum dolor sit amet. Qui consequatur sint 33 volupta officia et sint laboriosam sed ipsa sint ut voluptatum labore et possimus voluptas.
        </p>
        <button className='border border-white px-3 py-2 mt-6 text-text_color'>Explore Now</button>
      </div>
      <div className='ml-[100px]'>
        <img src="./img/auth/phone.png" alt="Phone" className='mt-8'/>
      </div>
    </div>
  );
}

export default SubMain;
