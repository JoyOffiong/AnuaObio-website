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
    <main className="min-h-screen bg-[#f7f8f5] px-6 pb-20 pt-28 font-inter sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <header className="border-b border-[#e4c47d]/50 pb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
            About our church
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#17261f] sm:text-6xl">
            Meet our minister
          </h1>
        </header>
        <div className="mt-12 flex flex-col gap-y-8">
          <div
            ref={sectionRef}
            className={`font-inter space-y-4 text-left transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-10"
                : "opacity-0 translate-y-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-center text-xl font-semibold text-[#17261f]">Min. E. O. Akpan</p>
              <div className=" justify-center font-medium text-base text-[#666666] flex gap-4 flex-row">
              <p><a href="tel:+2347062330549">Phone</a></p>
                <p> <a href="mailto:cocanuaobio@gmail.com">Email</a></p>
              </div>
            </div>
          </div>

       
          {/* congregations led */}

          <div className="flex w-full flex-col mt-4 items-center justify-center space-y-4 rounded-3xl border border-[#e1e8e1] bg-white p-6 text-center shadow-[0_12px_35px_rgba(25,49,35,0.06)] sm:p-8">
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
    </main>
  );
}

export default OurMinister;
