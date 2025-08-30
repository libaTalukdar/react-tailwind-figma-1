import React from "react";


export default function Management() {
  const features = [
    {
      title: "Management",
      description: "Software platform for running your new internet business",
      icon: "💾",
    },
    {
      title: "Entertainment",
      description: "Software platform for running your new internet business",
      icon: "🎮",
    },
    {
      title: "Marketing",
      description: "Software platform for running your new internet business",
      icon: "📸",
    },
    {
      title: "References",
      description: "Software platform for running your new internet business",
      icon: "🧭",
    },
  ];

   const socials = [
    { href: "#", icon: "ri-facebook-circle-fill" },
    { href: "#", icon: "ri-instagram-fill" },
    { href: "#", icon: "ri-twitter-x-fill" },
  ];


  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Features */}
        <div className="grid grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            The quickest way <br /> to create modern <br /> presentation
          </h1>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-center md:text-left">
            Best software platform for running an internet business.<br/> We build
            the most powerful and flexible tools for internet commerce.
          </p>
          <button className="px-6 py-3 bg-purple-100 text-purple-600 font-medium rounded-lg hover:bg-purple-200 transition">
            Explore All →
          </button>

          {/* Social Icons */}
         
          <div className="flex gap-4 justify-center md:justify-start text-gray-500 text-lg">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-2xl hover:text-red-800 hover:translate-y-1.5 transition-transform"
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
        </div>
      </div>
    </section>
  );
}
