import React from 'react';
import { data_features } from './data_features';




const Features = () => {
  return (
    <div>
      <section className='flex items-center text-text_color'>
        <div className='w-[50%]'>
        <img src="./img/features/first.png" alt="" />
        </div>
        <div className='flex flex-col w-[50%]'>
      <p className='text-[20px] text-[#C23893] leading-[28px]'>FEATURES</p>
      <h1 className='text-font_subhead leading-[48px] mb-5'>Crypto Premium</h1>
      {
        data_features.map(({icon, name, text})=>{
          return <section> 
            <div className='flex mb-3'>
            <img className='mr-2'src={icon} alt="" /><p className='text-font_large capitalize'>{name}</p></div>
            <p className='text-descp_text_color text-font_large leading-[168.5%] mb-3'>{text}</p>
          </section>
        })
      }
      </div>
      </section>
    </div>
  );
}

export default Features;
