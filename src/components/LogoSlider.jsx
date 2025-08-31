import React from "react";

export default function LogoSlider() {
  const logos = [
    "Path.png",
    "Shape.png",
    "Shape_2.png",
    "Shape_5 (1).png",
   
    "Shape_10.png",
    "Combined Shape.png"
    
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto overflow-hidden bg-white py-6">
      <div className="flex  animate-wiggle">
        {/* Duplicate the list for seamless looping */}
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="brand logo"
            className="h-12 w-18 mx-8"
          />
        ))}
      </div>
    </div>
  );
}
