import React from "react";
import "./ProgramsPage.css";
import imgAGM from "/assets/Hero-alt1.png";
import imgCYF from "/assets/programs/CYF.png";
import imgGlobalMind from "/assets/programs/GlobalMind.png";
import imgTemege from "/assets/programs/Temege.png";
import imgCuriosity from "/assets/programs/CuriosityCorner.png";
import imgBUOP from "/assets/programs/BUOP.png";

const programs = [
  {
    title: "Annual General Meeting (AGM)",
    short: "AGM",
    image: imgAGM,
    description: `AGM is a two-day members-only conference held during Thanksgiving break. It rotates across U.S. colleges, helping AMSA members network and grow. Since the first AGM at MIT/Harvard in 2012, we've visited NYU, UChicago, Georgia Tech, UC Berkeley, and more—including virtual during COVID-19. It's a space for learning, bonding, and sharing.`,
  },
  {
    title: "Change Your Future (CYF)",
    short: "CYF",
    image: imgCYF,
    description: `CYF is a one-day annual leadership and college-readiness conference organized for high school students in Mongolia. The event inspires youth to pursue education abroad, with workshops, panel discussions, and mentorship. Participants meet students who’ve received scholarships from U.S. universities.`,
  },
  {
    title: "Global Mind Mentorship",
    short: "Global Mind",
    image: imgGlobalMind,
    description: `This 8-month mentorship program pairs industry professionals with college students in the U.S., who in turn guide Mongolian high school students on applying to U.S. schools. With monthly sessions, career support, and webinars, it builds a learning bridge across generations.`,
  },
  {
    title: "Best University Opportunity Program (BUOP)",
    short: "BUOP",
    image: imgBUOP,
    description: `BUOP empowers college students with personal and professional development workshops. The sessions cover time management, resume writing, career paths, mental health, and more—run by professionals and mentors across the AMSA network.`,
  },
  {
    title: "Temege Campaign",
    short: "Temege",
    image: imgTemege,
    description: `Since 2011, the Association of Mongolian Students in America has been organizing the “Best University Opportunity Program - BUOP” to reach and share our success stories with students in Mongolia. We are aware of how some people think only the wealthy go to the U.S for college, and we do not deny it as a misconception, either. This is why we are doing this fundraising campaign: to raise funds, helping underprivileged children fulfill their dreams and study at top universities in the US. Your support will help us lower the price of the tax to host more inclusive events open to the general public.'
`,
  },
  {
    title: "Curiosity Corner",
    short: "Curiosity Corner",
    image: imgCuriosity,
    description: `This online interview series runs during the college application season. Weekly episodes on YouTube, Spotify, and Instagram feature Mongolian students studying abroad. They share stories, challenges, and advice—building inspiration and a sense of community.`,
  },
];

export default function ProgramsPage() {
  return (
    <section className="programs-page">
      <h2 className="header">
        Since 2011, we’ve contributed to many impactful projects. <br />
        Our core initiatives include<span className="highlight">AGM</span>,<span className="highlight">BUOP</span>, and<span className="highlight">CYF</span>.
      </h2>

      <div className="programs-list">
        {programs.map((program, index) => (
            <div key={index} className="program-row fade-up">
            <img src={program.image} alt={program.title} className="program-image" />
            <div className="program-text">
                <h3>{program.title}</h3>
                <hr/>
                <p>{program.description}</p>
            </div>
            </div>
        ))}
        </div>

    </section>
  );
}

// Removed duplicate export default statement