import React from "react";

import BackButton from "@/sharedComponents/backButton";

type Props = {};

function WarningAgainstInfidelity({}: Props) {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 font-inter sm:px-10 lg:px-16">
      <BackButton />

      <header className="mt-8 border-b border-[#e4c47d]/50 pb-10 text-center space-y-2">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
          Bible teaching
        </p>
          <p className="text-3xl font-bold uppercase leading-tight text-[#17261f] md:text-5xl">
The Covenant between God and His People          </p>
        <div className="space-y-2 text-sm text-[#66716b]">
          <p>April 13th, 2025</p>
          <p>By Bro. Effiong Udoekong</p>
        </div>
      
        <div className="font-semibold italic text-[#196f00]">
          <em>Exodus 19: 1-25</em>
        </div>
      </header>

      <article className="mt-12 rounded-3xl border border-[#e1e8e1] bg-white p-6 text-[#303b35] shadow-[0_12px_35px_rgba(25,49,35,0.06)] sm:p-10">
        <div className="space-y-4 ">
          <p className="font-bold text-lg pt-2">A. Introduction</p>
          <p>
            The children of Israel arrived Mt Sinai 3 months after they left Egypt. At the mountain, God revealed Himself and His glory even as the people prepared to enter a covenant between God and themselves.
          </p>
          
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg pt-2">B. Covenant </p>
          <p>
            Covenant is an agreement between one person and another. It is stronger than mere promise and is initiated by observing some ceremonies that add to the solemnity of the covenant. Covenant contains provisions on duties, benefits, rights, responsibilities, etc for it to be valid. Observing the provisions attracts benefits while a breach attracts corresponding blessings. Eg, if you obey me fully, and keep my covenant, then out of all nations, you will be a treasured possession. Ex. 19: 5
          </p>

        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg pt-2">Preparations for the Covenant</p>
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
        </article>
      </div>
  );
}

export default WarningAgainstInfidelity;
