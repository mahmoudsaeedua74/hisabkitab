import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

import HeaderBackgrounds from "./HeaderBackgrounds";
import VideoHero from "./VideoHero";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <HeaderBackgrounds />
    
      <Navbar />
      <HeroSection />
      <VideoHero />
    </header>
  );
}
