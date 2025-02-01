import Image from "next/image";
import HeroSection from "./homePageComponents/heroSection";
import AboutTheChurch from "./homePageComponents/aboutTheChurch";
import Worshipservices from "./homePageComponents/Worshipservices";
import JoinUsToday from "./homePageComponents/JoinUsToday";
import ReachOut from "./homePageComponents/reachUs";
import Lessons from "./homePageComponents/TodaysLessons"
import Verse from "./homePageComponents/VerseOfDay";
import FAQ from "./homePageComponents/FAQ";

export default function Home() {
  return (
    <div className="font-inter">
      <div className="font-inter ">
      <HeroSection /> 
      </div>

      <div>
      <ReachOut/>
      </div>

      <div>
        <JoinUsToday />
      </div>
      <div>
        <Lessons/>
      </div>
      <div>
        <Worshipservices />
      </div>

      <div>
        <Verse/>
      </div>

      <div>
        <FAQ/>
      </div>
    </div>
  );
}
