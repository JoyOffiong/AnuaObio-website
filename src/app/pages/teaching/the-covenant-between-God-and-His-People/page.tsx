import React from "react";

import BackButton from "@/sharedComponents/backButton";

type Props = {};

function WarningAgainstInfidelity({}: Props) {
  return (
    <div className="font-inter my-24 space-y-6 md:my-32 mx-6 md:mx-32 ">
      <BackButton />

      <div className="flex flex-col gap-y-6 justify-center items-center h-full">
        <div className="text-b text-center md:w-2/3 z-20 w-full">
          <p className="font-bold uppercase text-xl md:text-5xl">
The Covenant between God and His People          </p>
        </div>
        <div className="space-y-4 text-[#888888]">
          <p>April 13th, 2025</p>
          <p>By Bro. Effiong Udoekong</p>
        </div>
      
        <div className="font-semibold">
          <em>Exodus 19: 1-25</em>
        </div>
      </div>

      <div className="text-[#000000] space-y-4">
        <div className="space-y-4 ">
          <p className="font-bold text-lg">A. Introduction</p>
          <p>
            The children of Israel arrived Mt Sinai 3 months after they left Egypt. At the mountain, God revealed Himself and His glory even as the people prepared to enter a covenant between God and themselves.
          </p>
          
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg">B. Covenant </p>
          <p>
            Covenant is an agreement between one person and another. It is stronger than mere promise and is initiated by observing some ceremonies that add to the solemnity of the covenant. Covenant contains provisions on duties, benefits, rights, responsibilities, etc for it to be valid. Observing the provisions attracts benefits while a breach attracts corresponding blessings. Eg, if you obey me fully, and keep my covenant, then out of all nations, you will be a treasured possession. Ex. 19: 5
          </p>

        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg">Preparations for the Covenant</p>
          <p>They were reminded of God&apos;s glory when He led them out of Egypt. How He carried them on Eagle&apos;s wings to their present location. They were told to consecrate themselves. Limits were put around the mountain. Anyone who touches the mountain was to be put to death. Moses and his brother Aaron went up to the mountain while the people waited in awe at the foot of the mountain. The stage was then set for the people to enter into the covenant with God.
          </p>
          <p>
          <ul className="list-disc list-inside space-y-2">
                <li>God made the offer.  Ex. 19:3-6 </li>
                <li>The children of Israel accepted. Ex. 19:7-8</li>
                <li>There was a preamble/ Ex. 19:4</li>
                <li>The main covenant. Ex. 19:5-6</li>
                <li>The general provisions in the covenant. Ex. 20:1-21, Deut. 4:13</li>
            </ul>
          </p>
          <p>On the 3rd day, God appeared. The mountain was covered in thick smoke, lightning, thunder, fire, and clouds. There was a loud trumpet. The people trembled.</p>
          <div>
          <p>Lessons: </p>  
<ul>
   <li> God is love. He is to be feared. He is holy. He is merciful.
God bless you all.  </li>
</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarningAgainstInfidelity;
