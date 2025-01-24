import Image from "next/image";
import HeroSection from "./homePageComponents/heroSection";
import AboutTheChurch from "./homePageComponents/aboutTheChurch";
import Worshipservices from "./homePageComponents/Worshipservices";
import JoinUsToday from "./homePageComponents/JoinUsToday";
import ReachOut from "./homePageComponents/reachUs";

export default function Home() {
  return (
    <div className="font-inter ">
      <div className="font-inter z-4 h-full">
        <HeroSection />
      </div>

      <div>
      <ReachOut/>
      </div>

      <div>
        <AboutTheChurch />
      </div>
      <div>
        <JoinUsToday />
      </div>
      <div>
        <Worshipservices />
      </div>
    </div>
  );
}
