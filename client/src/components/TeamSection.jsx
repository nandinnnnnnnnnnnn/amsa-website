// src/components/TeamSection.jsx
import React, { useEffect } from "react";
import "./TeamSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Anudari Naran-Ochir",
    role: "President",
    school: "Vanderbilt University",
    graduation: "2025",
    image: "https://via.placeholder.com/150"
},
  {
    name: "Namuun Zolbadrakh",
    role: "Project Manager",
    school: "Vanderbilt University",
    graduation: "2025",
    image: "https://via.placeholder.com/150"
},
  {
    name: "Amarbayasgalan Anar",
    role: "Marketing Manager",
    school: "Trinity College",
    graduation: "2026",
    image: "https://via.placeholder.com/150"
},
  {
    name: "Nandintsetseg Batsaikhan",
    role: "Director of Technology",
    school: "Weber State University",
    graduation: "2026",
    image: "https://via.placeholder.com/150"
},
  {
    name: "Garid Mendbayar",
    role: "Director of Finance",
    school: "Vanderbilt University",
    graduation: "2025",
    image: "https://via.placeholder.com/150"
},
  {
    name: "Telmen Amarbayasgalan",
    role: "Project Manager",
    school: "Whitworth University",
    graduation: "2026",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Anujin Naranbaatar",
    role: "Director of Public Relations",
    school: "Stanford University",
    graduation: "2025",
    image: "https://via.placeholder.com/150"
},
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="team-section">
      <h2 className="team-heading">Meet Our Executive Team 2025</h2>
      <p className="team-subheading">
        Our dedicated students driving AMSA’s mission across U.S. universities.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} data-aos="fade-up">
            <img
                src={member.image}
                alt={member.name}
                className="team-photo"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/logo.png"; // local
                }}
                />

            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="school">{member.school}</p>
            <p className="grad">Class of {member.graduation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
