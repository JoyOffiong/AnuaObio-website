import React from "react";
import Image from "next/image";
import image from "../../../../public/images/churchgathering3.jpg";
import Bible from "../../../../public/images/Godsplan.jpg";
import Grace from "../../../../public/images/GodsSufficiency.jpg";
import Marriage from "../../../../public/images/marriage.jpg";
import proverbs from "../../../../public/images/proverbs.jpg";
import proverbs2 from "../../../../public/images/proverbs2.jpg";

import Link from "next/link";

type Props = {};
const lessons = [
  {
    img: image,
    title: "The Church in God's Eternal Purpose",
    by: "Bro. Offiong",
    date: "Jan. 10, 2025",
    bibleTexts: "Eph.1:4-9; 3:10,11; Eph 1:4,5,11",
    link: "./teaching/Hisgrace",
  },
  {
    img: Grace,
    title: "God’s Grace is Sufficient for our Needs",
    by: "Bro. Johnson",
    date: "Jan. 10, 2025",
    bibleTexts: "2 Cor. 12:7-10; 1 Cor. 15:10",
    link: "./teaching/grace",
  },
  {
    img: Marriage,
    title: "Malachi's Teaching on Marriage and Divorce",
    by: "Bro. Offiong",
    date: "Jan. 10, 2025",
    bibleTexts: "Malachi 2:14-16.",
    link: "./teaching/marriage",
  },
  {
    img: Bible,
    title: "Remember your Spiritual Heritage",
    by: "Min. E.O. Akpan",
    date: "Jan. 10, 2025",
    bibleTexts: "2 Tim 1:3; Act 9:15",
    link: "./teaching/spiritual-heritage",
  },
  {
    img: proverbs,
    title: "The Proverbs of Solomon: Wisdom for Life",
    by: "Min. E.O. Akpan",
    date: "Jan. 4, 2026",
    bibleTexts: "Proverbs 22:17; Prov. 1-8",
    link: "./teaching/the-proverbs-of-solomon",
  },
  {
    img: proverbs2,
    title: "THE Priority OF Wisdom ",
    by: "Min. E.O. Akpan",
    date: "Jan. 11, 2026",
    bibleTexts: "Proverbs 4:1-10",
    link: "./teaching/the-priority-of-wisdom",
  },
];
function Sermon({}: Props) {
  return (
    <div className="font-inter mt-16">
      <div className=" md:px-48 px-8 py-16">
        <div className=" text-center md:text-left">
          <p className="font-bold md:text-5xl text-3xl md:ml-48 mb-10 ">
            Lessons & Sermons
          </p>
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

export default Sermon;
