import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { api } from "../lib/api";

export default function AnnouncementSection() {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        setError("");
        const { announcements } = await api("/api/announcements");
        setAnnouncements((announcements || []).slice(0, 3));
      } catch (e) {
        setError(e?.message || "Failed to load announcements");
      }
    };
    load();
  }, []);

  return (
    <section className="bg-white px-8 py-16 text-center font-poppins">
      <h2 className="text-4xl font-['Syne-Bold'] text-[#001A78] mb-10">Announcements</h2>

      {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {announcements.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className="relative h-[300px] w-full max-w-sm rounded-xl bg-cover bg-center overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ backgroundImage: `url(${item.coverImageUrl || "/assets/announcements/agm2024.jpg"})` }}
          >
            <div className="bg-[#FFFCF3]/85 hover:bg-[#FFCA3A]/85 text-[#171414] h-full p-6 flex flex-col justify-start transition-all">
              <h3 className="text-lg font-bold text-[#001A78] mb-2">{item.title}</h3>
              <p className="text-sm">{item.body}</p>
            </div>
          </div>
        ))}

        {announcements.length === 0 && !error && (
          <p className="text-sm text-gray-600 col-span-full">No announcements yet.</p>
        )}
      </div>
    </section>
  );
}
