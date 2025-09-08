import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Anudari Naran-Ochir",
    role: "President",
    school: "Vanderbilt University",
    graduation: "2025",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Namuun Zolbadrakh",
    role: "Project Manager",
    school: "Vanderbilt University",
    graduation: "2025",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Amarbayasgalan Anar",
    role: "Marketing Manager",
    school: "Trinity College",
    graduation: "2026",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Nandintsetseg Batsaikhan",
    role: "Director of Technology",
    school: "Weber State University",
    graduation: "2026",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Garid Mendbayar",
    role: "Director of Finance",
    school: "Vanderbilt University",
    graduation: "2025",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Telmen Amarbayasgalan",
    role: "Project Manager",
    school: "Whitworth University",
    graduation: "2026",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Anujin Naranbaatar",
    role: "Director of Public Relations",
    school: "Stanford University",
    graduation: "2025",
    image: "https://via.placeholder.com/150",
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6 text-center font-poppins bg-white">
      <h2 className="text-4xl font-['Syne-Bold'] text-[#001A78] mb-2">
        Meet Our Executive Team 2025
      </h2>
      <p className="text-base text-[#333] mb-12 max-w-2xl mx-auto">
        Our dedicated students driving AMSA’s mission across U.S. universities.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="w-[220px] min-h-[320px] p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[120px] h-[120px] mx-auto rounded-full object-cover border-4 border-[#FFCA3A] mb-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/logo.png";
              }}
            />
            <h3 className="text-lg font-semibold text-[#001A78] mb-1">
              {member.name}
            </h3>
            <p className="text-[#073D97] font-medium mb-1">{member.role}</p>
            <p className="text-[#333] text-sm">{member.school}</p>
            <p className="text-[#333] text-sm">Class of {member.graduation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
