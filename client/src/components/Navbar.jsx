import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Programs", to: "/programs" },
    { name: "Team", to: "/team" },
    { name: "Blog", to: "/blog" },
    { name: "Donate", to: "/donate" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-white bg-opacity-80 backdrop-blur shadow-lg" : "bg-white shadow-md"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 gap-4">
        <Link to="/" className="flex items-center gap-1 text-[#001A78] no-underline">
          <img src="/assets/logo.png" alt="AMSA Logo" className="h-12 w-auto" />
          <p className="text-sm font-medium leading-tight font-poppins">
            Association of Mongolian <br /> Students in America
          </p>
        </Link>

        <div className="text-3xl md:hidden text-[#001A78] cursor-pointer" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`flex-col md:flex md:flex-row md:items-center md:gap-9 gap-5 absolute md:static top-20 right-0 bg-white md:bg-transparent px-6 py-4 md:p-0 shadow-md md:shadow-none w-full md:w-auto transition-all ${open ? "flex" : "hidden"}`}>
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="text-[#001A78] font-semibold text-lg hover:text-[#073D97] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#FFCA3A] after:w-0 hover:after:w-full after:transition-all"
            >
              {name}
            </Link>
          ))}
          <div className="flex flex-col md:flex-row gap-3">
            <Link
              to="/signup/member"
              className="bg-[#FFFCF3] border-2 border-[#001A78] text-[#171414] px-6 py-2 rounded-md font-semibold hover:bg-[#f4b825] transition text-center"
            >
              Become a Member
            </Link>
            <Link
              to="/login"
              className="border-2 border-[#001A78] text-[#001A78] px-6 py-2 rounded-md font-semibold hover:bg-[#001A78] hover:text-white transition text-center"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
