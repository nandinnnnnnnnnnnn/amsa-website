// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FaInstagram, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="amsa-footer">
      <div className="footer-content">
        {/* Left side: heading + subtext + icons */}
        <div className="footer-text">
          <h2>
          🔊 Association of <br />Mongolian Students in America <br /> will always be here for you 🇺🇸
          </h2>
          <p>
            Feel free to reach out, our Instagram is always online — <br />
            it might be faster if you also reach out through Instagram.
          </p>
          <div className="social-icons">
            <a href="mailto:your@email.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right side: contact form */}
        <form className="footer-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email address" required />
          <input type="text" placeholder="Your phone number" />
          <input type="text" placeholder="Your school" />
          <textarea placeholder="Your message..." rows="4" required></textarea>
          <button type="submit" className="footer-btn">Send Message →</button>
        </form>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} AMSA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
