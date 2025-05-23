import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="/" className="logo-link">
          <img src="/assets/logo.png" alt="AMSA Logo" className="logo-img" />
        </a>

        <div className="burger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/programs">Programs</a>
          <a href="/team">Team</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/login" className="login-btn">Become a Member / Login</a>
        </nav>
      </div>
    </header>
  );
}
