"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
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
    <section
      ref={sectionRef}
      className={`my-20 font-inter transition-all duration-700 lg:my-28 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
           
            <h2 className="text-4xl font-bold tracking-tight text-[#17261f] sm:text-5xl">
              Today&apos;s lessons
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#66716b]">
            Take time to study, reflect, and discover how God&apos;s word
            speaks into everyday life.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {lessons.map(({ img, title, date, bibleTexts, link }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl border border-[#e1e8e1] bg-white shadow-[0_12px_35px_rgba(25,49,35,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(25,49,35,0.12)]"
            >
              <Link href={link} className="block">
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081c15]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#17261f]">
                    <CalendarDays size={14} />
                    {date}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#4ca233]">
                    <BookOpen size={17} />
                    Bible study
                  </div>
                  <h3 className="mt-4 max-w-lg text-2xl font-bold leading-tight text-[#17261f] sm:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#66716b]">
                    {bibleTexts}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#196f00]">
                    Read the lesson
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lessons;
