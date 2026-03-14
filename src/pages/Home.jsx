import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import WhoWeAreSection from "../components/landing/WhoWeAreSection";
import PreambleSection from "../components/landing/PreambleSection";
import VisionMissionSection from "../components/landing/VisionMissionSection";
import UnitsSection from "../components/landing/UnitsSection";
import FooterSection from "../components/landing/FooterSection";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <PreambleSection />
      <VisionMissionSection />
      <UnitsSection />
      <FooterSection />
    </div>
  );
}