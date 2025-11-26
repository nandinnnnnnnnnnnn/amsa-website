import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { api } from "../lib/api";

const BlogPreviewSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        setError("");
        const { blogs } = await api("/api/blogs");
        setBlogs((blogs || []).slice(0, 3));
      } catch (e) {
        setError(e?.message || "Failed to load blogs");
      }
    };
    load();
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

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <div className="flex flex-wrap justify-center gap-8">
        {blogs.map((post) => (
          <div
            key={post.id}
            data-aos="fade-up"
            className="bg-white w-[300px] rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:bg-[#fffbeb] transition-all duration-300 flex flex-col"
          >
            <img
              src={post.coverImageUrl || "/assets/Hero-alt1.png"}
              alt={post.title}
              className="h-[200px] w-full object-cover"
            />
            <div className="flex flex-col gap-2 p-4 text-left flex-grow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-[#333] flex-grow overflow-hidden">{post.content}</p>
              <Link
                to="/blogs"
                className="inline-block text-sm font-medium border border-[#001A78] text-[#001A78] px-4 py-2 rounded-md hover:bg-[#FFCA3A] hover:text-black hover:border-[#FFCA3A] transition self-center"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
        {blogs.length === 0 && !error && (
          <p className="text-sm text-gray-600">No blogs yet.</p>
        )}
      </div>
    </section>
  );
};

export default BlogPreviewSection;
