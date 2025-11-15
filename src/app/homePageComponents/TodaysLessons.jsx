"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import image from "../../../public/images/GodsSufficiency.jpg";
import image2 from "../../../public/images/Godsplan.jpg";

function Lessons() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const lessons = [
    {
      img: image2,
      title: "Remember your Spiritual Heritage",
      date: "Jan. 10, 2025",
      bibleTexts: "Act 9:15; 2 Tim 1:3; 1 Cor. 4:17",
      link: "/pages/teaching/spiritual-heritage",
    },
    {
      img: image,
      title: "God’s grace is sufficient for our needs",
      date: "Jan. 10, 2025",
      bibleTexts: "2 Cor. 12:7-10; 1 Cor. 15:10",
      link: "/pages/teaching/grace",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <div
      ref={sectionRef}
      className={`font-inter my-20 transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center">
        <p className="font-bold md:text-5xl text-3xl mb-10">
          Today&apos;s Lessons
        </p>
      </div>
      <div className="bg-[#f7f7f7] py-14">
        <div>
          {lessons.map((lesson, index) => {
            const { img, title, date, bibleTexts, link } = lesson;
            return (
              <div
                key={index}
                className="px-6 md:mx-44 mx-auto items-center gap-4"
              >
                {/* Image */}
                <div className="flex flex-col md:flex-col lg:flex-row my-10 gap-4 md:gap-16">
                  <Image
                    src={img}
                    alt="churchImage"
                    width={500}
                    height={500}
                    className="rounded-xl shadow-custom-xl"
                  />

                  {/* Texts */}
                  <div className="space-y-4 w-full md:w-6/12">
                    <p className="md:text-6xl leading-loose text-2xl font-bold">
                      {title}
                    </p>
                    <p className="md:w-1/2 w-full text-2xl leading-tight font-bold">
                      {date}
                    </p>
                    <p className="md:w-2/3 w-full leading-tight text-3xl font-medium text-[#888888]">
                      {bibleTexts}
                    </p>
                    <div className="mt-2">
                      <button className="bg-[#222222] text-base drop-shadow-xl flex items-center text-white gap-2 rounded-md font-semibold px-3 py-2 transform hover:scale-110 mt-5 hover:bg-green-900 transition-all duration-300 hover:text-white">
                        <a href={link}>Read More</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lessons;
