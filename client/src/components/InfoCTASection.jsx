import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faEnvelope, faUsers } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const ctas = [
  {
    icon: faUserPlus,
    label: "Become a member",
    action: "Register to AMSA!",
    link: "/signup/member",
  },
  {
    icon: faEnvelope,
    label: "Wanna contribute?",
    action: "Contact us",
    link: "/contact",
  },
  {
    icon: faUsers,
    label: "Participating?",
    action: "Join AGM with us!",
    link: "/programs",
  },
];

const InfoCTASection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center font-poppins" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl mb-10 font-['Syne-Bold'] font-bold text-[#001A78]">
        Are you a{" "}
        <span className="bg-[#e3e9f4] text-[#001A78] px-2 py-1 rounded-[10px] font-poppins font-semibold">
          Mongolian
        </span>{" "}
        student in{" "}
        <span className="bg-[#e3e9f4] text-[#001A78] px-2 py-1 rounded-[10px] font-poppins font-semibold">
          US
        </span>
        ?
      </h2>

      <div className="flex flex-col gap-6">
        {ctas.map((item, index) => (
          <a
            href={item.link}
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="flex justify-between items-center px-6 py-4 border-b border-gray-300 text-[#171414] hover:bg-[#f9f9f9] transition-all transform hover:scale-[1.02] no-underline"
          >
            <div className="flex items-center gap-3 text-[#001A78] text-lg font-medium">
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
              {item.label}
            </div>
            <div className="text-[#001A78] font-bold">{item.action} →</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InfoCTASection;
