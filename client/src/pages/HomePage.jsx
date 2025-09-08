// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import UniversityLogos from "../components/UniversityLogos";
import ProgramsSection from "../components/ProgramsSection";
import FloatingGallery from "../components/FloatingGallery";
import TeamSection from "../components/TeamSection";
import InfoCTASection from "../components/InfoCTASection";
import BlogPreviewSection from "../components/BlogPreviewSection";
import AnnouncementSection from "../components/AnnouncementSection";

function HomePage() {
  return (
    <>
      <Hero />
      <UniversityLogos />
      <AnnouncementSection />
      <ProgramsSection />
      <FloatingGallery />
      <TeamSection />
      <InfoCTASection />
      <BlogPreviewSection />
    </>
  );
}

export default HomePage;
