import React, { useState } from 'react';
import Logo from '../logo/logo';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../Routes/routes';

const links = ['Home', 'About', 'Services', 'Events'];

const Header = () => {
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState('');

  const handleLinkClick = (link:string) => {
    setSelectedLink(link);
  };
  const handleSignIn = () =>{
    navigate(ROUTES.register)
  }
  return (
    <div className='fixed z-40 text-text_color flex justify-between items-center h-[80px] w-[1440px]'>
      <div className='flex items-center ml-[70px]'>
        <Logo />
        <h1 className='ml-2 text-font_medium'>Crypto</h1>
      </div>
      <div className='flex justify-between w-[23%]'>
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            onClick={() => handleLinkClick(link)}
            className={`text-[20px] text-descp_text_color px-2 py-1 
            ${selectedLink === link ? 'text-white border-b-2 border-white' : 'hover:text-white hover:border-b-2 hover:border-white'}`}
          >
            {link}
          </a>
        ))}
      </div>
      <button onClick={handleSignIn} className='border border-white px-3 py-2 mr-[70px]'>Sign in</button>
    </div>
  );
};

export default Header;
