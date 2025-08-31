import React from "react";


export default function WorkSection() {
  const features = [
    "Many ways to use illustrations in design",
    "Simply explained with illustrations",
    "Make more time for the work",
  ];

  return (
    <section className="w-full max-w-[1300px] mx-auto  bg-white space-y-10">
      {/* Section 1 */}
      <div className="px-8 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between ">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="cake 2.png" 
            alt="Illustration"
            className="w-72 md:w-96"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center md:text-left my-8 md:my-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Make more time <br /> for the work
          </h2>

          <ul className="space-y-3 text-gray-600">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <i className="ri-checkbox-circle-line text-green-500"></i>
                
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Learn more →
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="px-8 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center justify-between ">
        {/* Left Text */}
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left my-8 md:my-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Make more time <br /> for the work
          </h2>

          <ul className="space-y-3 text-gray-600">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <i className="ri-checkbox-circle-line text-green-500"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Learn more →
          </button>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="Group 17.png" 
            alt="Illustration"
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}
