import React from "react";

export default function Bomb() {
  return (
    <section className="w-full max-w-[1400px] mx-auto bg-indigo-500 px-6 md:px-16 py-16">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row items-center gap-2">
        
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-white leading-snug">
            The quickest way to create <br /> awesome presentation
          </h2>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/bomb 1.png" 
            alt="Illustration"
            className="w-48 md:w-64"
          />
        </div>
      </div>
    </section>
  );
}
