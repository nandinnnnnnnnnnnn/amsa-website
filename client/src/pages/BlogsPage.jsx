import React, { useState } from "react";
import blog1 from "/assets/Hero-background.png";
import blog2 from "/assets/Hero-background.png";
import blog3 from "/assets/Hero-background.png";

const blogs = [
  {
    title: "Journey to the U.S. – My College Story",
    image: blog1,
    preview: "Applying to college abroad was never easy, but I found strength in unexpected places...",
    full: "Applying to college abroad was never easy, but I found strength in unexpected places. I’ll take you through my decision-making, how I chose my major, and how AMSA helped me stay confident even in rejection.",
  },
  {
    title: "Interview Tips & Timeline",
    image: blog2,
    preview: "From application to acceptance: here's how I prepared for my college interview...",
    full: "From application to acceptance: here's how I prepared for my college interview. I'll share my prep strategy, the kinds of questions I faced, and tips I wish I knew earlier!",
  },
  {
    title: "What AMSA Meant to Me",
    image: blog3,
    preview: "Joining AMSA wasn't just a decision, it was a turning point...",
    full: "Joining AMSA wasn't just a decision, it was a turning point. I made lifelong friends, gained leadership experience, and found a home away from home. Here’s what you should know before joining.",
  },
];

export default function BlogsPage() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-[#FFFCF3] py-16 px-4 font-poppins">
      <h2 className="text-3xl md:text-4xl text-center font-['Syne-Bold'] text-[#001A78] mb-12">
        <span className="text-[#001A78]">Announcements</span>
        {" and "}
        <span className="text-[#FFCA3A]">Stories</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 max-w-full w-full sm:w-[300px] flex flex-col cursor-pointer animate-fade-up"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-[200px] object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-['Syne-Bold'] text-[#001A78] mb-2">{blog.title}</h3>
              <p className="text-sm text-[#333] leading-relaxed flex-grow">
                {expanded === index ? blog.full : blog.preview}
              </p>
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="mt-4 inline-block border-2 border-[#001A78] text-[#001A78] px-4 py-2 rounded-lg text-sm hover:bg-[#FFCA3A] transition-all"
              >
                {expanded === index ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
