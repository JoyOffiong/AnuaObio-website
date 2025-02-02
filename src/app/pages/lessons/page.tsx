import React from "react";
import Image from 'next/image';
import image from "../../../../public/images/churchgathering3.jpg";
import Bible from "../../../../public/images/Godsplan.jpg";
import Grace from "../../../../public/images/GodsSufficiency.jpg";
import Marriage from "../../../../public/images/marriage.jpg"
import Link from "next/link";


type Props = {};
const lessons = [
  { img: image, title: "The Church in God's Eternal Purpose", by:"Bro. Offiong", date: "Jan. 10, 2025", bibleTexts: "Eph.1:4-9; 3:10,11; Eph 1:4,5,11", link: "./teaching/teaching1" },
  { img: Grace, title: "God’s Grace is Sufficient for our Needs",by:"Bro. Johnson", date: "Jan. 10, 2025", bibleTexts: "2 Cor. 12:7-10; 1 Cor. 15:10", link: "./teaching/grace" },
  { img: Marriage, title: "Malachi's Teaching on Marriage and Divorce",by:"Bro. Offiong", date: "Jan. 10, 2025", bibleTexts: "Malachi 2:14-16.", link: "./teaching/marriage" },
  { img: Bible, title: "Remember your Spiritual Heritage",by:"Bro. Akpan", date: "Jan. 10, 2025", bibleTexts: "2 Tim 1:3; Act 9:15", link: "./teaching/spiritual-heritage" },
];
function Sermon({}: Props) {
 return (
    <div
     className="font-inter mt-16"
    >
      
      <div className=" px-16 py-16">
      <div className="text-left">
        <p className="font-bold md:text-4xl text-3xl md:ml-24 mb-10 ">Lessons & Sermons</p>
      </div>
        <div className="">
          {lessons.map((lesson, index) => {
            const { img, title, date, bibleTexts , by, link} = lesson;
            return (
              <div key={index} className="mt-6 w-11/12 md:w-10/12 mx-auto items-center gap-4">
                {/* Image */}
                <div className="flex flex-col md:flex-col lg:flex-row my-10 gap-6 md:gap-8">
                  <Image src={img} alt="churchImage" width={400} height={400} className="rounded-xl" />

                  {/* Texts */}
                  <div className="space-y-2">
                    <p className="md:text-xl font-semibold">{title}</p>
                    <em className="md:w-2/3 w-full text-md font-semibold text-gray-500">{bibleTexts}</em>
                    <p className="md:w-1/2 w-full text-base font-semibold">{by}</p>
                    <p className="md:w-1/2 w-full text-base font-semibold">{date}</p>
                   
                    <div className="mt-2">
                      <Link href={link}>
                      <button className="bg-black shadow-xl flex items-center text-white gap-2 rounded-lg px-3 py-2 transform hover:scale-110 mt-5 hover:bg-green-900 transition-all duration-300 hover:text-white">
                        Learn More
                      </button>
                      </Link>
                   
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

export default Sermon;
