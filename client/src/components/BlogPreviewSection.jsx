import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const blogPosts = [
  {
    title: "LOREM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    image: "/assets/FloatingGallery/Floating7.png",
  },
  {
    title: "JOURNEY FROM ULAANBAATAR TO US",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    image: "/assets/Hero-firstpagephoto.png",
  },
  {
    title: "HOW I PREPARED MY INTERVIEW",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    image: "/assets/Hero-alt1.png",
  },
];

const BlogPreviewSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-transparent px-4 py-16 text-center text-[#001A78] font-poppins">
      <h2
        data-aos="fade-up"
        className="text-4xl font-['Syne-Bold'] mb-10"
      >
        <span>Podcast</span> and{" "}
        <span className="border-b-[3px] border-[#FFCA3A]">Blog</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="bg-white w-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:bg-[#fffbeb] transition-all duration-300 flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-[200px] w-full object-cover"
            />
            <div className="flex flex-col gap-2 p-4 text-left flex-grow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-[#333] flex-grow">{post.text}</p>
              <a
                href="#"
                className="inline-block text-sm font-medium border border-[#001A78] text-[#001A78] px-4 py-2 rounded-md hover:bg-[#FFCA3A] hover:text-black hover:border-[#FFCA3A] transition self-center"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreviewSection;
