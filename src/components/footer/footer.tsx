// src/components/Footer.tsx

import React from 'react';
import footerItems from './footer_data';


const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12">
      <div className="container mx-auto flex justify-evenly">
        {footerItems.map((section) => (
          <div key={section.category}>
            <h4 className="text-pink-500 font-semibold mb-4">{section.category}</h4>
            <ul>
              {section.items.map((item) => (
                <li key={item.name} className="mb-2">
                  <a href={item.link} className="text-gray-700 hover:text-pink-500">
                    {item.name}
                    {item.isNew && (
                      <span className="bg-gray-200 text-gray-800 text-xs ml-2 px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='w-full h-[100px] bg-[#C23893] flex items-center justify-center' >
        <p className='text-text_color'>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
