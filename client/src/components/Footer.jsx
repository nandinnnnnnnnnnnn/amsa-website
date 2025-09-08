import React from "react";
import { FaInstagram, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001A78] text-[#FFFCF3] px-8 py-16 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-4xl font-['Syne-Bold'] mb-4">
            🔊 Association of <br />
            Mongolian Students in America <br />
            will always be here for you 🇺🇸
          </h2>
          <p className="text-base mb-6">
            Feel free to reach out, our Instagram is always online — <br />
            it might be faster if you also reach out through Instagram.
          </p>
          <div className="flex gap-4 text-3xl">
            <a href="mailto:your@email.com" target="_blank" rel="noreferrer" className="hover:text-[#FFCA3A] transition">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#FFCA3A] transition">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#FFCA3A] transition">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FFCA3A] transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form className="flex-1 min-w-[300px] flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            required
            className="bg-transparent border border-[#FFFCF3] px-4 py-3 rounded-md placeholder:text-[#e6e6e6] text-[#FFFCF3]"
          />
          <input
            type="email"
            placeholder="Your email address"
            required
            className="bg-transparent border border-[#FFFCF3] px-4 py-3 rounded-md placeholder:text-[#e6e6e6] text-[#FFFCF3]"
          />
          <input
            type="text"
            placeholder="Your phone number"
            className="bg-transparent border border-[#FFFCF3] px-4 py-3 rounded-md placeholder:text-[#e6e6e6] text-[#FFFCF3]"
          />
          <input
            type="text"
            placeholder="Your school"
            className="bg-transparent border border-[#FFFCF3] px-4 py-3 rounded-md placeholder:text-[#e6e6e6] text-[#FFFCF3]"
          />
          <textarea
            placeholder="Your message..."
            rows="4"
            required
            className="bg-transparent border border-[#FFFCF3] px-4 py-3 rounded-md placeholder:text-[#e6e6e6] text-[#FFFCF3]"
          ></textarea>
          <button
            type="submit"
            className="bg-transparent text-[#FFFCF3] border-2 border-[#FFFCF3] px-6 py-3 rounded-md font-semibold hover:bg-[#FFCA3A] hover:text-[#001A78] hover:border-[#FFCA3A] transition"
          >
            Send Message →
          </button>
        </form>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-12 text-[#FFFCF3]">
        © {new Date().getFullYear()} AMSA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
