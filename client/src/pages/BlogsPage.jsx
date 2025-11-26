import React, { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setError("");
        const { blogs } = await api("/api/blogs");
        setBlogs(blogs || []);
      } catch (e) {
        setError(e?.message || "Failed to load blogs");
      }
    };
    load();
  }, []);

  return (
    <section className="bg-[#FFFCF3] py-16 px-4 font-poppins">
      <h2 className="text-3xl md:text-4xl text-center font-['Syne-Bold'] text-[#001A78] mb-12">
        <span className="text-[#001A78]">Announcements</span>
        {" and "}
        <span className="text-[#FFCA3A]">Stories</span>
      </h2>

      {error && <p className="text-red-600 text-center mb-4 text-sm">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {blogs.map((blog, index) => (
          <div
            key={blog.id || index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 max-w-full w-full sm:w-[300px] flex flex-col cursor-pointer animate-fade-up"
          >
            <img src={blog.coverImageUrl || "/assets/Hero-background.png"} alt={blog.title} className="w-full h-[200px] object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-['Syne-Bold'] text-[#001A78] mb-2">{blog.title}</h3>
              <p className="text-sm text-[#333] leading-relaxed flex-grow">
                {expanded === index ? blog.content : blog.content?.slice(0, 180) + (blog.content?.length > 180 ? "..." : "")}
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
        {blogs.length === 0 && !error && (
          <p className="text-sm text-gray-600 text-center col-span-full">No blogs yet.</p>
        )}
      </div>
    </section>
  );
}
