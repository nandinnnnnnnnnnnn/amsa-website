import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const programs = [
  {
    title: "Change Your Future (CYF)",
    description:
      "A one-day event inspiring Mongolian high schoolers to explore studying in the U.S. Reached 2300+ students in 3 years.",
    image: "/assets/programs/1.png",
  },
  {
    title: "Best University Opportunity Program (BUOP)",
    description:
      "A summer program helping over 1600 students prepare for U.S. universities over 10 years, offering scholarships and mentorship.",
    image: "/assets/programs/2.png",
  },
  {
    title: "Annual General Meeting (AGM)",
    description:
      "Our flagship conference connecting Mongolian students and professionals through workshops, keynotes, and networking events.",
    image: "/assets/programs/3.png",
  },
  {
    title: "Temege Fundraising Campaign",
    description:
      "A yearly fundraiser supporting underprivileged students and building long-term scholarship programs for the AMSA community.",
    image: "/assets/programs/4.png",
  },
];

export default function ProgramsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6 bg-white text-center font-poppins">
      <h2 className="text-4xl font-['Syne-Bold'] text-[#001A78] mb-12">Our Programs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
        {programs.map((program, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative h-[300px] w-full max-w-[320px] rounded-2xl overflow-hidden bg-cover bg-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundImage: `url(${program.image})` }}
          >
            <div className="flex flex-col justify-start h-full p-6 bg-[#FFFCF3]/85 hover:bg-[#FFCA3A]/85 transition-colors duration-300">
              <h3 className="text-[#001A78] text-lg font-bold mb-2">{program.title}</h3>
              <p className="text-sm text-[#171414]">{program.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="/programs"
          className="inline-block border-2 border-[#001A78] text-[#001A78] px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#FFCA3A] transition-all duration-300"
        >
          🌱 Explore All Programs
        </a>
      </div>
    </section>
  );
}
