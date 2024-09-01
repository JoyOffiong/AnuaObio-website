import Image from "next/image";
import HeroSection from "./components/heroSection";
import AboutTheChurch from "./components/aboutTheChurch";
import Worshipservices from "./components/Worshipservices";
import JoinUsToday from "./components/JoinUsToday";

export default function Home() {
  return (
    <div>
      <div className="font-sans z-4 h-full">
        <HeroSection />
      </div>

      <div className="font-sans">
        <AboutTheChurch />
      </div>
      <div className="font-sans">
        <JoinUsToday />
      </div>
      <div className="font-sans ">
        <Worshipservices />
      </div>
    </div>
  );
}
