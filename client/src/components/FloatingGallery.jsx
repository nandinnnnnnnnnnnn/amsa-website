// src/components/FloatingGallery.jsx
import React from "react";
import "./FloatingGallery.css";

const imageNames = [
  "Floating1.png", "Floating2.png", "Floating3.png",
  "Floating4.png", "Floating5.png", "Floating6.png",
  "Floating7.png", "Floating8.png", "Floating9.png"
];

const FloatingGallery = () => {
  return (
    <section className="floating-gallery">
      <div className="balloon-container">
        {imageNames.map((img, index) => (
          <img
            key={index}
            src={`/assets/FloatingGallery/${img}`}
            alt={`Event ${index + 1}`}
            className={`balloon balloon${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FloatingGallery;
