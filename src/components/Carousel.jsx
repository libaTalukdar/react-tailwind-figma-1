import React, { useState } from "react";
import img1 from "/Group 35.png";
import img2 from "/Component 1.png";
import img3 from "/Group 39.png";


export default function Carousel() {
  const slides = [
    {
      title: (
        <>
          Make more time <br /> for the work <br /> that matters most
        </>
      ),
      description: (
        <>
          Best software platform for <br /> running an internet business.
        </>
      ),
      image: img1,
    },
    {
      title: (
        <>
          Grow your business
          <br />
          with powerful tools
        </>
      ),
      description: "Everything you need to scale your startup globally.",
      image: img2,
    },
    {
      title: "Simplify your workflow",
      description: "Automate tasks and focus on what really matters.",
      image: img3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between p-8">
      {/* Left Content */}
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug ">
          {slides[currentIndex].title}
        </h1>
        <p className="text-gray-600">{slides[currentIndex].description}</p>

        {/* Buttons */}
        <div className="flex space-x-2 mt-4">
          <i
            className="ri-arrow-left-s-line w-10 h-10 flex p-2 items-center justify-center bg-black text-white rounded-full hover:bg-gray-100 hover:text-gray-950
          "
            onClick={prevSlide}
          ></i>
          
          <i
            className="ri-arrow-right-s-line w-10 h-10 p-2 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-100 hover:text-gray-950"
            onClick={nextSlide}
          ></i>
          
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-80 h-auto object-contain"
        />
      </div>
    </div>
  );
}
