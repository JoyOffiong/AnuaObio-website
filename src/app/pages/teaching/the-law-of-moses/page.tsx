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
function LawOfMoses({}: Props) {
  return (
    <div className="font-inter mt-16">
      <div className=" md:px-48 px-8 py-16">
        <div className=" text-center md:text-left">
          <p className="font-bold md:text-3xl text-xl md:ml-48 mb-10 ">
THE LAW OF MOSES   </p>
        </div>
        <div className="">
          {lessons.map((lesson, index) => {
            const { img, title, date, bibleTexts, by, link } = lesson;
            return (
              <div
                key={index}
                className="mt-10 w-11/12 hover:scale-110 duration-200 transition-all md:w-8/12 mx-auto items-center gap-4"
              >
                {/* Image */}
                <Link href={link}>
                  <div className="flex flex-col md:flex-col gap-4  lg:flex-row my-10">
                    <div className=" rounded-2xl">
                      <Image
                        src={img}
                        alt="churchImage"
                        width={300}
                        height={50}
                        className="h-[150px] w-[250px] rounded-2xl max-w-[100%] object-cover"
                      />
                    </div>

                    {/* Texts */}
                    <div className="space-y-4">
                      <p className="md:text-lg font-semibold uppercase">
                        {title}
                      </p>
                      <em className="md:w-2/3 w-full pt-4 text-md font-normal text-[#888888]">
                        {bibleTexts}
                      </em>
                      <p className="md:w-1/2 w-full text-base font-normal text-[#888888]">
                        {" "}
                        by {by}
                      </p>
                      <p className="md:w-1/2 w-full text-base font-normal text-[#888888]">
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

export default LawOfMoses;
