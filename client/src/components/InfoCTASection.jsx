// src/components/InfoCTASection.jsx
import React from "react";
import "./InfoCTASection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faEnvelope, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ctas = [
  {
    icon: faUserPlus,
    label: "Become a member",
    action: "Register to AMSA!",
    link: "/join"
  },
  {
    icon: faEnvelope,
    label: "Wanna contribute?",
    action: "Contact us",
    link: "/contact"
  },
  {
    icon: faUsers,
    label: "Participating?",
    action: "Join AGM with us!",
    link: "/programs"
  }
];

const InfoCTASection = () => (
<section className="info-cta-section" data-aos="fade-up">
  <h2 className="info-title">
    Are you a <span className="highlight">Mongolian</span> student in <span className="highlight">US</span>?
  </h2>

  <div className="cta-list">
    {ctas.map((item, index) => (
      <a href={item.link} className="cta-row" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
        <FontAwesomeIcon icon={item.icon} className="cta-icon" />
        <span className="cta-label">{item.label}</span>
        <span className="cta-action">{item.action}</span>
        <span className="cta-arrow">→</span>
      </a>
    ))}
  </div>
</section>

);

export default InfoCTASection;
