import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

function JoinUsToday({}: Props) {
  return (
    <div className="grid my-20 items-center grid-cols-1 space-x-24 md:gap-0  md:grid-cols-2">
      <div
        className="bg-cover bg-center rounded-tr-2xl rounded-br-2xl relative z-10 font-sans"
        style={{
          backgroundImage: "url('/images/churchpix6.jpeg')",
          height: "700px",
          objectFit: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#f3bb44] rounded-tr-xl rounded-br-xl opacity-30"></div>
      </div>

      <div className="space-y-6 md:px-10 px-4 ">
        <p className="text-[#333333] font-bold text-center md:text-left text-5xl leading-tight">
          <span> Here at the </span>
          <br /> <span className="text-5xl">
            {" "}
            CHURCH OF CHRIST,
          </span> <br /> <span className="3xl"> Anua Obio, Uyo</span>
        </p>
        <p className=" text-2xl text-justify leading-normal font-medium text-[#888888] md:w-10/12 text-wrap">
          Our goal is to worship God in Spirit & Truth. Our worship is organized
          in order to offer God an acceptable worship each time we meet. Our
          items of worship includes: Singing, Praying, Teaching, Sermon,
          Communion and Giving.
        </p>

        <div className="flex flex-center gap-4 ">
          <button className=" px-5 py-3 font-semibold drop-shadow-xl text-center rounded-md hover:bg-green-900 transition-all duration-300 transform hover:scale-110 text-base text-white bg-[#222222]">
            <a href="/pages/more/theMinistry"> Our Ministry</a>
          </button>
          <button className="shadow-md px-4 py-2 flex items-center gap-x-2 border-[1px] border-black font-semibold text-center rounded-md text-sm text-[#222222] transform hover:scale-110 transition-all duration-300">
            <a href="/pages/aboutUs/ourWorship">Learn More</a>{" "}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
