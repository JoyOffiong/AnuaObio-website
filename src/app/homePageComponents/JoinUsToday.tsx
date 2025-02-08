import React from "react";

type Props = {};

function JoinUsToday({}: Props) {
  return (

    <div className="grid mt-4 items-center grid-cols-1 gap-8 md:gap-0  md:grid-cols-2">
      <div
      className="bg-cover bg-center rounded-tr-2xl rounded-br-2xl relative z-10 font-sans"
      style={{
        backgroundImage: "url('/images/churchpix6.jpeg')",
        height: "500px",
      }}
    >
      <div className="absolute inset-0 bg-[#f3bb44] rounded-tr-xl rounded-br-xl opacity-50"></div>

      </div>

      <div className="space-y-6 md:px-10 px-4 ">
     
        <p className="text-[#333333] font-bold text-center md:text-left text-5xl leading-tight">Here at the <br /> CHURCH OF CHRIST, <br /> Anua Obio, Uyo</p>
        <p className=" text-2xl md:text-xl text-justify font-medium text-[#888888] md:w-10/12 text-wrap">Our goal is to worship God in Spirit & Truth. Our worship is organized in order to offer God an acceptable worship each time we meet. Our items of worship includes: Singing, Praying, Teaching, Sermon, Communion and Giving.</p>
     
      <div className="flex flex-center gap-4 ">
        
        <button className='shadow-md px-4 py-2 font-semibold text-center rounded-md text-sm text-white bg-black'><a href="/pages/more/theMinistry"> Our Ministry</a></button>
        <button className='shadow-md px-4 py-2 border-[1px] border-black font-semibold text-center rounded-md text-sm text-black'><a href="/pages/aboutUs/ourWorship">Learn More</a></button>
      
      </div>
      </div>
     

     
    </div>
    
  );
}

export default JoinUsToday;




