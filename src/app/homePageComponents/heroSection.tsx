import React from "react";

function HeroSection() {
  return (
    <div
      className="bg-cover bg-center  font-inter relative z-10"
      style={{
        backgroundImage: "url('/images/churchgathering3.jpg')",
        height: "500px",
      }}
    >
 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
       <div className="flex justify-center items-center h-full">
        <div className="text-white text-center z-20 w-1/3 mx-auto">
          <p className="font-semibold text-3xl md:text-5xl">Church of Christ</p>
          <p className="font-semibold text-xl md:text-5xl">Anua Obio, Uyo</p>
          <p className="pt-8 ext-sm md:text-base">Our mission is to honor God by guiding families and individuals within our community toward a deeper, committed relationship with Jesus Christ, through vibrant ministry inspired by the Holy Spirit. Join us on this transformative journey!</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
