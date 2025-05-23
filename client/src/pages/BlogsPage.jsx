import React, { useState } from "react";
import "./BlogsPage.css";
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
    <section className="blogs-page">
      <h2 className="blogs-heading">
        <span className="highlight">Announcements</span>and <span className="highlight-yellow">Stories</span>
      </h2>
      <div className="blogs-list">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-text">
              <h3>{blog.title}</h3>
              <p>
                {expanded === index ? blog.full : blog.preview}
              </p>
              <button
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
                className="read-more-button"
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
