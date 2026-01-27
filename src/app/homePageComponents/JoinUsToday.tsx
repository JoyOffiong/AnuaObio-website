import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

function JoinUsToday({}: Props) {
  return (
    <div className="flex my-20 items-center w-full flex-col space-x-24 md:gap-0 gap-y-6  md:flex-row">
      <div
  className="w-full hidden md:block  md:w-1/2 bg-cover bg-center md:rounded-tr-2xl md:rounded-br-2xl relative z-10 font-sans"
  style={{
    backgroundImage: "url('/images/churchpix6.jpeg')",
    height: "700px",
  }}
>
  <div className="absolute inset-0 bg-[#f3bb44] md:rounded-tr-xl md:rounded-br-xl opacity-30"></div>
</div>


      <div className="flex w-full md:w-[50%]   justify-center mx-auto md:justify-start md:px-10 px-4">
        <div className="space-y-6">
          <p className="text-[#333333] font-bold text-center md:text-left text-3xl md:text-5xl leading-tight">
            <span>Here at the</span>
            <br />
            <span>CHURCH OF CHRIST,</span>
            <br />
            <span className="text-3xl">Anua Obio, Uyo</span>
          </p>

          <p className="text-2xl leading-normal font-medium text-[#888888] md:w-10/12 text-center md:text-left">
            Our goal is to worship God in Spirit & Truth. Our worship is
            organized in order to offer God an acceptable worship each time we
            meet. Our items of worship includes: Singing, Praying, Teaching,
            Sermon, Communion and Giving.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-3 md:px-5 py-2 md:py-3 font-semibold drop-shadow-xl rounded-md hover:bg-green-900 transition-all duration-300 transform hover:scale-110 text-base text-white bg-[#222222]">
              <a href="/pages/more/theMinistry">Our Ministry</a>
            </button>

            <button className="shadow-md px-3 md:px-5 py-2 md:py-3 flex items-center gap-x-2 border border-black font-semibold rounded-md text-sm text-[#222222] transform hover:scale-110 transition-all duration-300">
              <a href="/pages/aboutUs/ourWorship">Learn More</a>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
