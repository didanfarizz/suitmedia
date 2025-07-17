// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

const Hero = ({ links, activePath }) => {
  const [heroText, setHeroText] = useState('');

  useEffect(() => {
    const currentLink = links.find((link) => {
      if (link.link === '/') {
        return activePath === '/';
      }
      return activePath.startsWith(link.link);
    });

    setHeroText(currentLink ? currentLink.label : 'Ideas');
  }, [activePath, links]);

  return (
    <div className="">
      <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center">
        <div className="absolute inset-0">
          <img src="banner.jpg" alt="hero" width={100} height={100} className="w-full h-full" />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{heroText}</h1>
          <p className="text-xl md:text-2xl">Where all our great things begin</p>
        </div>
      </div>
      <div className="relative h-64 bg-white w-full -mt-32 -skew-y-7 z-20"></div>
    </div>
  );
};

export default Hero;
