import React from 'react';

const footerLinks = {
    Home:['Become Affiliate', 'Go Unlimited', 'Services'],
  Products: ['Design Systems','Themes & Templates', 'Mockups','Presentation','Wireframes Kits', 'UI Kits'],
  Logals: ['License', 'Refund Policy','About Us' ,'Contact'],
  Blog: ['Business Stores', 'Global Stores','Learning','Social Media'],
  
};

const Footer = () => {
    const socials = [
    { href: "#", icon: "ri-facebook-circle-fill" },
    { href: "#", icon: "ri-instagram-fill" },
    { href: "#", icon: "ri-twitter-x-fill" },
  ];
  return (
    <footer className=" w-full max-w-[1400px] mx-auto bg-black text-gray-300 px-8 md:px-20 py-16">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Logo */}
        <div >
            <img src="footerLogo.png" alt="footer-logo" />
          
        </div>

        {/* Dynamic Link Columns */}
        {Object.entries(footerLinks).map(([section, links], index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-3">{section}</h3>
            <ul className="space-y-2 text-sm">
              {links.map((link, i) => (
                <li key={i} className="hover:text-white cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      
      {/* Bottom Note */}
      <div className="mt-12 border-t border-t-white px-8 md:px-12 flex justify-between items-center text-center text-sm text-gray-500">
        
        <p>&copy; {new Date().getFullYear()} Degic. </p>
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
    </footer>
  );
};

export default Footer;
