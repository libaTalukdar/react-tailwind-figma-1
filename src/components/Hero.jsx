import React from "react";

const Hero = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-8 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between bg-white">
      
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Simply explained <br /> with illustrations
        </h1>
        <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
          There are a lot of different components that will help you create the
          perfect look for your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img src="Component 1.png" alt="Illustration" className="w-80 md:w-[450px]" />
      </div>
    </section>
  );
};

export default Hero;
