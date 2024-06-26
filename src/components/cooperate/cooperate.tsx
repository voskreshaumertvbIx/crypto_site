import React from 'react';

const companys = ['1.png','2.png','3.png','4.png','5.png'];
const Cooperate = () => {
  return (
    <div className='h-[132px] bg-gray-900 flex justify-around items-center'>
      {
        companys.map((link, index) => {
          return <img key={index} src={`./img/companys/${link}`} alt={`company logo ${index}`} />
        })
      }
    </div>
  );
}

export default Cooperate;
