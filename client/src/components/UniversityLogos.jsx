// src/components/UniversityLogos.jsx
import React from "react";
import "./UniversityLogos.css";

const logos = [
    "brown.png",
    "columbia.png",
    "harvard-logo-black-transparent.png",
    "JonhsHopkins.png",
    "mit.png",
    "mountholyoke.png",
    "NYU.png",
    "stanford-logo-black-transparent.png",
    "vanderbilt.png",
    "wesleyan.png"
  ];

function UniversityLogos() {
  return (
    <div className="logo-section">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={`/assets/universities/${logo}`}
            alt={`Logo ${index}`}
            className="logo-img"
          />
        ))}
      </div>
    </div>
  );
}

export default UniversityLogos;
