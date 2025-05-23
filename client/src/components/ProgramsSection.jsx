// src/components/ProgramsSection.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProgramsSection.css";

const programs = [
  {
    title: "Change Your Future (CYF)",
    description: "A one-day event inspiring Mongolian high schoolers to explore studying in the U.S. Reached 2300+ students in 3 years.",
    image: "/assets/programs/1.png",
  },
  {
    title: "Best University Opportunity Program (BUOP)",
    description: "A summer program helping over 1600 students prepare for U.S. universities over 10 years, offering scholarships and mentorship.",
    image: "/assets/programs/2.png",
  },
  {
    title: "Annual General Meeting (AGM)",
    description: "Our flagship conference connecting Mongolian students and professionals through workshops, keynotes, and networking events.",
    image: "/assets/programs/3.png",
  },
  {
    title: "Temege Fundraising Campaign",
    description: "A yearly fundraiser supporting underprivileged students and building long-term scholarship programs for the AMSA community.",
    image: "/assets/programs/4.png",
  },
];

function ProgramsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="programs-section">
      <h2 className="programs-title">Our Programs</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div
            className="program-card"
            data-aos="fade-up"
            key={index}
            style={{ backgroundImage: `url(${program.image})` }}
          >
            <div className="program-overlay">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cta-buttons">
        <a href="/programs" className="program-btn secondary">🌱 Explore All Programs</a>
      </div>
    </section>
  );
}

export default ProgramsSection;
