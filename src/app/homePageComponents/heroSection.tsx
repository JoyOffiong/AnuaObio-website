import { MoveRight } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div
      className="bg-cover bg-center font-inter relative"
      style={{
        backgroundImage: "url('/images/churchgathering3.jpg')",
        height: "650px",
      }}
    >
 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
       <div className="flex justify-center items-center h-full">
        <div className="text-white text-center z-20 w-2/3 mx-auto">
          <p className="font-semibold text-3xl md:text-5xl">The Church of Christ</p>
          <p className="font-semibold text-xl md:text-5xl">Anua Obio, Uyo</p>
          <p className="pt-8 md:text-base text-sm font-semibold md:w-2/3 mx-auto text-[#bab1aa]">Our mission is to honor God by guiding families and individuals within our community toward a deeper, committed relationship with Jesus Christ, through vibrant ministry inspired by the Holy Spirit. Join us on this transformative journey!</p>
    
    <div className="flex justify-center">
    <button className="bg-white flex items-center text-black gap-2 rounded-lg px-3 py-2 transform hover:scale-110 mt-5 hover:bg-green-900 transition-all duration-300 hover:text-white  "> <a href=".//">Learn More</a> <MoveRight size={12} strokeWidth={4} /></button>
   
    </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
