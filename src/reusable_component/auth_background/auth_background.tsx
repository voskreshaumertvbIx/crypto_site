import React from 'react';

const AuthBackground = () => {
  return (
    <div className="relative bg-auth_background h-screen">
      <img 
        src="./img/auth/gradient.png" 
        alt="Gradient" 
        className="absolute bottom-0 z-0"
      />
      <img 
        src="./img/auth/Enviro.png" 
        alt="Server" 
        className="absolute left-0 bottom-0 z-10" 
      />
      <img 
        src="./img/auth/hosting.png" 
        alt="Hosting" 
        className="absolute left-20 bottom-0 z-20" 
      />
      <img 
        src="./img/auth/Bubble.png" 
        alt="Bubbles" 
        className="absolute left-12 bottom-5 z-30" 
      />
    </div>
  );
}

export default AuthBackground;
