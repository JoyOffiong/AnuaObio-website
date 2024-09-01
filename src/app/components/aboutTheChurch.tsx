import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Image from "next/image";

function AboutTheChurch() {
  return (
    <div className="mb-10 p-12 bg-white  text-slate-950 ">
      <div className="space-y-2 mb-12">
        <div className="flex gap-4 items-center">
          <p className="text-[#b2b2b2] font-bold text-[18px]">
            THE CHURCH OF CHRIST{" "}
          </p>
          <div className="bg-[#f3bb44] text-[#f3bb44]">
            <hr className="w-80 h-[0.5px] " />
          </div>
        </div>
        <h3 className="font-bold text-[24px]">WHO WE ARE</h3>
      </div>
      <div className="mt-6 grid md:grid-cols-2 text-lg  items-center gap-8">
        <div className="space-y-4">
          <div>
            <div className="flex ">
              <p className="font-bold text-2xl">The Church of Christ</p>
              <hr />
            </div>
          </div>
          <p>
            The Church of Christ is the one and only true church established by
            Christ. Jesus Christ is the Head of his church and the Church is his
            body. Churches of Christ all over the world follow the scriptural
            guidelines in line with the following mandates set by the Apostles:
          </p>
        </div>

        <div className="w-full  h-full">
          <div className="flex flex-col mt-4 gap-y-2">
            <p className="flex items-center gap-2">
              {" "}
              <VerifiedIcon /> Edification
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <VerifiedIcon /> Benevolence
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <VerifiedIcon /> Evangelism
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTheChurch;
