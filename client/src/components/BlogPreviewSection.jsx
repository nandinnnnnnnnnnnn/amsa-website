// src/components/BlogPreviewSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BlogPreviewSection.css";

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
    <section className="blog-preview-section">
      <h2 data-aos="fade-up">
        <span>Podcast</span> and{" "}
        <span className="underline">Blog</span>
      </h2>
      <div className="blog-cards">
        {blogPosts.map((post, idx) => (
          <div className="blog-card" key={idx} data-aos="fade-up">
            <img src={post.image} alt={post.title} />
            <div className="card-content">
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreviewSection;
