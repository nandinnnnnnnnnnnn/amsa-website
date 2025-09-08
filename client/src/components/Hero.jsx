import React, { useState, useEffect } from "react";

const images = [
  "/assets/Hero-firstpagephoto.png",
  "/assets/Hero-alt1.png",
  "/assets/Hero-alt2.png"
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-[url('/assets/Hero-background.png')] bg-cover bg-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffff3bf] to-[#fffcf3a6] z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-wrap justify-between items-center gap-16">
        {/* Text Section */}
        <div className="flex-1 min-w-[320px]">
          <h1 className="font-['Syne-Bold'] text-[60px] font-extrabold leading-tight text-[#001A78]">
            We connect{" "}
            <span className="font-black bg-gradient-to-tr from-[#d62828] to-[#001A78] bg-clip-text text-transparent">
              over 600 Mongolian students
            </span>{" "}
            pursuing higher education in the US.
          </h1>
          <p className="text-[#001A78] text-2xl leading-relaxed mb-8 font-poppins">
            <span className="relative font-semibold inline-block underline-creative">
              AMSA
              <span className="absolute bottom-0 left-0 w-full h-[14px] bg-no-repeat bg-contain bg-[url('/assets/underline-squiggle.svg')]"></span>
            </span>{" "}
            empowers, supports, and unites the{" "}
            <span className="relative font-semibold inline-block underline-creative">
              Mongolian student community
              <span className="absolute bottom-0 left-0 w-full h-[14px] bg-no-repeat bg-contain bg-[url('/assets/underline-squiggle.svg')]"></span>
            </span>{" "}
            across America
          </p>

          <div className="flex flex-wrap gap-5 mt-6">
            <a
              href="/join"
              className="px-8 py-4 rounded-[20px] text-lg font-semibold font-poppins text-[#001A78] border-2 border-[#001A78] bg-transparent shadow-md hover:bg-[#f3bd21] transition"
            >
              Join Our Network
            </a>
            <a
              href="/programs"
              className="px-8 py-4 rounded-[20px] text-lg font-semibold font-poppins text-[#001A78] border-2 border-[#001A78] bg-transparent shadow-md hover:bg-[#f3bd21] transition"
            >
              Explore Our Programs
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center animate-float">
          <img
            src={images[currentImage]}
            alt="Mongolian students"
            className="w-full max-w-[620px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
