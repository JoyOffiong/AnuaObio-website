import React from "react";

type Props = {};

function JoinUsToday({}: Props) {
  return (
    <div
      className="bg-cover bg-center  relative z-10 font-sans"
      style={{
        backgroundImage: "url('/images/churchpix6.jpeg')",
        height: "300px",
      }}
    >
      <div className="absolute inset-0 bg-[#f3bb44] opacity-50"></div>

      <div className="flex justify-between px-12 items-center h-full">
        <div className="text-white z-20 space-y-4">
          <p className="font-semibold text-3xl md:text-5xl">
            Join us Today at Church of Christ, Anua Obio{" "}
          </p>
          <p className="font-semibold text-xl md:text-3xl">Welcome Home</p>
        </div>
      </div>
    </div>
  );
}

export default JoinUsToday;
