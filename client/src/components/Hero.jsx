import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/assets/Hero-firstpagephoto.png",
  "/assets/Hero-alt1.png",
  "/assets/Hero-alt2.png"
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>We connect<span className="highlight">over 600 Mongolian students</span> pursuing
           higher education in the US.</h1>
          <p>
            <span className="underline-creative">🎓 AMSA</span> empowers,
            supports, and unites the <span className="underline-creative">Mongolian student community</span> 
            across America 🤩
          </p>
          <div className="cta-buttons">
            <a href="/join" className="hero-btn primary">👉 Join Our Network</a>
            <a href="/programs" className="hero-btn secondary">🌱 Explore Our Programs</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={images[currentImage]} alt="Mongolian students" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
