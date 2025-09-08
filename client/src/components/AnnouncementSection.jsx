import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const announcements = [
  {
    title: "AGM 2024 Registration is Live!",
    description: "Join us this Thanksgiving at the Mongolian Embassy in Washington, DC. Limited spots available!",
    image: "/assets/announcements/agm2024.jpg",
  },
  {
    title: "New Mentorship Program",
    description: "Global Mind is now accepting applications for mentees and mentors. Apply by June 15!",
    image: "/assets/announcements/globalmind.jpg",
  },
];

export default function AnnouncementSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white px-8 py-16 text-center font-poppins">
      <h2 className="text-4xl font-['Syne-Bold'] text-[#001A78] mb-10">Announcements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {announcements.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative h-[300px] w-full max-w-sm rounded-xl bg-cover bg-center overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg-[#FFFCF3]/85 hover:bg-[#FFCA3A]/85 text-[#171414] h-full p-6 flex flex-col justify-start transition-all">
              <h3 className="text-lg font-bold text-[#001A78] mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
