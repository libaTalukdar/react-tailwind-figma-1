import React from "react";
import img1 from "/Group 38.png";
import img2 from "/Group 39.png";
import img3 from "/vase-1-b 2 (1).png";

const blogPosts = [
  {
    title: (
      <>
        Make myspace your best <br /> designed space
      </>
    ),
    description: "Learn how to elevate your design game with practical advice.",
    image: img1,
    alt: "Design tips",
    label: "Design",
  },
  {
    title: (
      <>
        My company culture has <br /> changed today
      </>
    ),
    description:
      "Streamline your process and boost productivity with smart tools.",
    image: img2,
    alt: "Workflow",
    label: "3D illustration",
  },
  {
    title: (
      <>
        Professionals in craft! All <br /> products were super great
      </>
    ),
    description: "Discover techniques to stay focused and get more done.",
    image: img3,
    alt: "Productivity hacks",
    label: "Development",
  },
];

const BlogSection = () => {
  return (
    <section className="w-full max-w-[1300px] mx-auto px-8 md:px-20 py-16 bg-white">
      <h3 className="text-4xl font-bold text-left mb-10">
        Get more from our blog
      </h3>
      <p className="text-xl text-left mb-5">
        There are a lot of different components that will
        <br /> help you create the perfect look for your project
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow p-6 text-center md:text-left"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="mx-auto mb-4 w-[200px] h-[220px]"
            />
            <h4 className="text-xl font-semibold mb-2 ">{post.title}</h4>
            <p className="text-gray-600 text-center md:text-left">
              {post.description}
            </p>
            <button className="px-4 py-2 mt-3 bg-blue-100 text-blue-700 rounded hover:bg-red-700 transition">
              {post.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
