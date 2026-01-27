import { MoveRight } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div
      className="bg-cover bg-center font-inter relative"
      style={{
        backgroundImage: "url('/images/img3.jpeg')",
        height: "800px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex justify-center items-center h-full">
        <div className="text-white text-center mt-28 px-4 md:mt-4 leading-tight z-20 md:w-2/3 mx-auto">
          <p className="font-bold text-[40px] md:text-[55px]">
            The Church of Christ
          </p>
          <p className="font-bold text-[40px] md:text-[55px]">Anua Obio, Uyo</p>
          <p className="pt-12 text-lg font-medium md:w-2/3 mx-auto text-[#bab1aa]">
            Our mission is to honor God by guiding families and individuals
            within our community toward a deeper, committed relationship with
            Jesus Christ, through vibrant ministry inspired by the Holy Spirit.
            Join us on this transformative journey!
          </p>

          <div className="flex justify-center">
            <button className="bg-white flex items-center text-black gap-2 font-semibold rounded-lg px-4 py-4  transform hover:scale-110 mt-12 hover:bg-green-900 transition-all duration-300 hover:text-white  ">
              {" "}
              <a href="/pages/aboutUs">Learn More</a>{" "}
              <MoveRight size={12} strokeWidth={4} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
