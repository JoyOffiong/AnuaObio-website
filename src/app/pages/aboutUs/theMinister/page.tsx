"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import image from "../../../../../public/images/churchgathering3.jpg";

function OurMinister() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="mt-28 mb-20 font-inter">
        <div className="text-left flex flex-col gap-y-8 mx-auto px-6 md:w-9/12 w-full">
          <div
            ref={sectionRef}
            className={`font-inter space-y-4 text-left transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-10"
                : "opacity-0 translate-y-0"
            }`}
          >
            <div className="space-y-4">
              <p className="font-bold text-[#111111] text-3xl md:text-5xl text-center">
                Meet our Minister Min. E. O Akpan
              </p>
              <div className=" justify-center font-medium text-base text-[#666666] flex gap-4 flex-row">
              <p><a href="tel:+2347062330549">Phone</a></p>
                <p> <a href="mailto:cocanuaobio@gmail.com">Email</a></p>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="flex justify-center mt-12">
                 <div className=" rounded-2xl">
            
                              <Image src={image} alt="churchImage" width={600} height={600} className="w-full rounded-2xl max-w-[100%] object-cover" />
            
                              </div>
          </div>
          {/* congregations led */}

          <div className="flex space-y-4 text-2xl  flex-col items-center mx-auto w-full md:w-9/12 justify-center">
            <p className="text-textColor font-medium">Congregations led</p>
            <div className="flex gap-x-6 ">
              <p className="text-secondary font-semibold">
                Church of Christ, Anua Obio, Uyo
              </p>
              <p className="text-textColor  font-medium">2010-Present</p>
            </div>
            <div className="flex gap-x-6">
              <p className="text-secondary font-semibold">
              Church of Christ, Eket
              </p>
              <p className="text-textColor  font-medium">2008-2009

</p>
            </div>

            <div className="flex gap-x-6 ">
              <p className="text-secondary font-semibold flex ">
              Church of Christ, Uyo
              </p>
              <p className="text-textColor font-medium">1999-2007

</p>
            </div>
            <div className="flex gap-x-6 ">
              <p className="text-secondary font-semibold flex ">
              Church of Christ, Ikot Ekepene
              </p>
              <p className="text-textColor font-medium">1995-1998

</p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMinister;
