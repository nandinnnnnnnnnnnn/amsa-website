// src/pages/WelcomePage.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const WelcomePage = () => {
  const { user } = useAuth();
  const nav = useNavigate();

  // If user not set (refresh), send them home so they can log in
  React.useEffect(() => {
    if (!user) nav("/");
  }, [user, nav]);

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg my-12 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="text-4xl mb-2">🎉 Thank you for registering!</div>
        <p className="text-2xl font-semibold text-[#001A78]">
          Welcome, {user.firstName} {user.lastName}
        </p>
        <p className="text-xl font-semibold text-[#001A78]">
          You are now an official AMSA member.
        </p>

        <img
          src="/assets/Hero-alt2.png"
          alt="AMSA community"
          className="w-full max-w-[520px] rounded-lg shadow-md"
        />

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            to="/"
            className="border border-[#001A78] text-[#001A78] px-6 py-3 rounded-lg hover:bg-[#001A78] hover:text-white transition w-full sm:w-auto"
          >
            Go to Home
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="border border-[#001A78] text-[#001A78] px-6 py-3 rounded-lg hover:bg-[#001A78] hover:text-white transition w-full sm:w-auto"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
