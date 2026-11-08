import React from "react";
import Image from "next/image";
import Bible from "../../../../../public/images/Godsplan.jpg";

import Link from "next/link";

type Props = {};
const lessons = [
  {
    img: Bible,
    title: "Shadow AND Reality",
    by: "Bro. Asuquo Offiong",
    date: "Jan. 18, 2026",
    bibleTexts: "Col. 2:16-23",
    link: "./the-covenant-between-God-and-His-People",
  },
];
function Topics({}: Props) {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 font-inter sm:px-10 lg:px-16">
      <div className="py-12">
        <header className="border-b border-[#e4c47d]/50 pb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
            Bible teaching
          </p>
          <p className="mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-[#17261f] sm:text-6xl">
            Challenges of the Colossians and the Heart of Preaching
          </p>
        </header>
        <div className="mt-10 grid gap-6">
          {lessons.map((lesson, index) => {
            const { img, title, date, bibleTexts, by, link } = lesson;
            return (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-[#e1e8e1] bg-white shadow-[0_12px_35px_rgba(25,49,35,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(25,49,35,0.12)]"
              >
                {/* Image */}
                <Link href={link}>
                  <div className="flex h-full flex-col gap-5">
                    <div className="overflow-hidden">
                      <Image
                        src={img}
                        alt="churchImage"
                        width={300}
                        height={50}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Texts */}
                    <div className="space-y-4 p-6">
                      <p className="text-xl font-bold uppercase text-[#17261f]">
                        {title}
                      </p>
                      <em className="block w-full text-sm font-medium text-[#4ca233]">
                        {bibleTexts}
                      </em>
                      <p className="w-full text-sm text-[#66716b]">
                        {" "}
                        by {by}
                      </p>
                      <p className="w-full text-sm text-[#66716b]">
                        {date}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Topics;
