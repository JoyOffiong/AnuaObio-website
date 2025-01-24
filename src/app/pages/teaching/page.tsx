"use client";

import React, { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Divider } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import NoteIcon from "@mui/icons-material/Note";
import Image from "next/image";
import Link from "next/link";

const TeachingsOnDoctrines = () => {
  // const [isHovered, setIsHovered] = useState(false);
  // const truncateText = (text: string, maxLength: number): string => {
  //   if (text.length > maxLength) {
  //     return text.substring(0, maxLength) + "...";
  //   }
  //   return text;
  // };
  // return (
  //   <div className="grid md:grid-cols-3 mt-12 ">
  //     {marriage.map((mari) => {
  //       const { image, title, description, date, text, id } = mari;
  //       return (
  //         <div
  //           key={id}
  //           onMouseEnter={() => setIsHovered(true)}
  //           onMouseLeave={() => setIsHovered(false)}
  //           className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
  //           style={{ maxWidth: "100%", maxHeight: "100%" }}
  //         >
  //           <div className="overflow-hidden h-[200px]">
  //             <Image
  //               src={image}
  //               alt=""
  //               width={80}
  //               height={80}
  //               className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
  //                 isHovered ? "scale-110" : "scale-100"
  //               }`}
  //             />
  //           </div>
  //           <div className="flex flex-col gap-y-2 p-4">
  //             <p className="font-bold text-[#f26522] text-lg">{title}</p>
  //             <p className="font-bold text-[#f26522] text-sm">{text}</p>
  //             <p className="font-medium text-[#000]">
  //               {truncateText(description, 100)}
  //             </p>
  //             <div className="flex justify-end">
  //               <Link href="/teaching/teaching1">
  //                 <button
  //                   type="button"
  //                   className="bg-[#f26522] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
  //                 >
  //                   Read <KeyboardDoubleArrowRightIcon />
  //                 </button>
  //               </Link>
  //             </div>
  //           </div>
  //           <Divider />
  //           <div className=" flex items-center px-8 py-4 gap-x-4">
  //             <DateRangeIcon style={{ fontSize: "1rem" }} />
  //             <span className="font-light text-sm">{date}</span>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
};
const TeachingsOnMarriage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const marriage = [
    {
      id: 1,
      title: "The Reason for the Institution called Marriage",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Malachi 2:24",
      image: "/images/bible.jpg",
      date: " 19th Sep, 2022",
    },
  ];

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid md:grid-cols-3 mt-12 ">
      {marriage.map((mari) => {
        const { image, title, description, date, text, id } = mari;
        return (
          <div
            key={id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <div className="overflow-hidden h-[200px]">
              <Image
                src={image}
                alt=""
                height={100}
                width={100}
                className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-[#f26522] text-lg">{title}</p>
              <p className="font-bold text-[#f26522] text-sm">{text}</p>
              <p className="font-medium text-[#000]">
                {truncateText(description, 100)}
              </p>
              <div className="flex justify-end">
                <Link href="/marriage/the-reason-for-the-Institution-called-Marriage">
                  <button
                    type="button"
                    className="bg-[#f26522] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
                  >
                    {" "}
                    Read <KeyboardDoubleArrowRightIcon />
                  </button>
                </Link>
              </div>
            </div>
            <Divider />
            <div className=" flex items-center px-8 py-4 gap-x-4">
              <DateRangeIcon style={{ fontSize: "1rem" }} />
              <span className="font-light text-sm">{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const TeachingsOnMalachi = () => {
  const [isHovered, setIsHovered] = useState(false);

  const marriage = [
    {
      id: 1,
      title: "The Reason for the Institution called Marriage",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Malachi 2:24",
      image: "/images/bible.jpg",
      date: " 19th Sep, 2022",
    },
  ];

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid md:grid-cols-3 mt-12 ">
      {marriage.map((mari) => {
        const { image, title, description, date, text, id } = mari;
        return (
          <div
            key={id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <div className="overflow-hidden h-[200px]">
              <Image
                src={image}
                alt=""
                height={100}
                width={100}
                className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-[#f26522] text-lg">{title}</p>
              <p className="font-bold text-[#f26522] text-sm">{text}</p>
              <p className="font-medium text-[#000]">
                {truncateText(description, 100)}
              </p>
              <div className="flex justify-end">
                <Link href="/marriage/the-reason-for-the-Institution-called-Marriage">
                  <button
                    type="button"
                    className="bg-[#f26522] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
                  >
                    Read <KeyboardDoubleArrowRightIcon />
                  </button>
                </Link>
              </div>
            </div>
            <Divider />
            <div className=" flex items-center px-8 py-4 gap-x-4">
              <DateRangeIcon style={{ fontSize: "1rem" }} />
              <span className="font-light text-sm">{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const TeachingsOnOurLivesAsChristians = () => {
  const [isHovered, setIsHovered] = useState(false);

  const marriage = [
    {
      id: 1,
      title: "The Reason for the Institution called Marriage",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Malachi 2:24",
      image: "/images/bible.jpg",
      date: " 19th Sep, 2022",
    },
  ];

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="grid md:grid-cols-3 mt-12 ">
      {marriage.map((mari) => {
        const { image, title, description, date, text, id } = mari;
        return (
          <div
            key={id}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <div className="overflow-hidden h-[200px]">
              <Image
                src={image}
                alt=""
                width={100}
                height={100}
                className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <div className="flex flex-col gap-y-2 p-4">
              <p className="font-bold text-[#f26522] text-lg">{title}</p>
              <p className="font-bold text-[#f26522] text-sm">{text}</p>
              <p className="font-medium text-[#000]">
                {truncateText(description, 100)}
              </p>
              <div className="flex justify-end">
                <Link href="/marriage/the-reason-for-the-Institution-called-Marriage">
                  <button
                    type="button"
                    className="bg-[#f26522] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
                  >
                    Read <KeyboardDoubleArrowRightIcon />
                  </button>
                </Link>
              </div>
            </div>
            <Divider />
            <div className=" flex items-center px-8 py-4 gap-x-4">
              <DateRangeIcon style={{ fontSize: "1rem" }} />
              <span className="font-light text-sm">{date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
function MajorTeachings() {
  const [selectedComponent, setSelectedComponent] = useState("");

  // Function to render the selected component
  // const renderComponent = () => {
  //   switch (selectedComponent) {
  //     case "Doctrines":
  //       return <TeachingsOnDoctrines />;
  //     case "Marriage":
  //       return <TeachingsOnMarriage />;
  //     case "Malachi":
  //       return <TeachingsOnMalachi />;
  //     case "Lives":
  //       return <TeachingsOnOurLivesAsChristians />;
  //     default:
  //       return <TeachingsOnDoctrines />;
  //   }
  // };

  const [isHovered, setIsHovered] = useState(false);

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const teaching = [
    {
      id: "1",
      title: "The Church in God's Eternal Purpose",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Eph.1:4-9; 3:10,11; Eph 1:4,5,11",
      image: "/images/teaching1.png",
      linkedTo: "/teaching/Teaching1",
    },
    {
      id: "2",
      title: "Marriage",
      description:
        "Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, “Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh” (Genesis 2:24). Married couples are meant to be unified in every possible way.",
      text: "Eph.1:4-9; 3:10,11; Eph 1:4,5,11",
      image: "/images/marriageImg.jpg",
      linkedTo: "/teaching/marriage",
    },

    {
      id: "3",
      title: "Spiritual Heritage",
      description: "Remember your Spiritual Heritage",
      text: "Act 9:15",
      image: "/images/teaching1.png",
      linkedTo: "/teaching/spiritual-heritage",
    },
    {
      id: "4",
      title: "God’s grace is sufficient for our needs",
      description: "Remember your Spiritual Heritage",
      text: "2 Cor. 12:7-10; 1 Cor. 15:10",

      image: "/images/grace.jpeg",
      linkedTo: "/teaching/grace",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-300 gap-y-4 px-12 pt-12 pb-12">
      <p className="font-bold text-lg text-[#174124]">Sunday School Lessons</p>

      <div className="grid md:grid-cols-3 gap-4 text-[#174124]">
        {teaching.map((mari) => {
          const { image, title, text, id, linkedTo } = mari;
          return (
            <div
              key={id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group bg-white shadow-lg rounded-sm hover:shadow-2xl transition-shadow duration-200"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <div className="overflow-hidden h-[200px]">
                <img
                  src={image}
                  alt=""
                  width={80}
                  height={80}
                  className={`w-full h-full transition-transform duration-500 object-cover overflow-hidden ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-y-2 p-4">
                <p className="font-bold text-lg">{title}</p>
                <p className="font-bold text-sm">{text}</p>
                {/* <p className="font-medium text-[#000]">
                  {truncateText(description, 100)}
                </p> */}
                <div className="flex justify-end">
                  <Link href={linkedTo}>
                    <button
                      type="button"
                      className="bg-[#174124] py-1 px-4 text-white transition-all duration-500  rounded-2xl hover:bg-white hover:text-[#f26522]"
                    >
                      Read <KeyboardDoubleArrowRightIcon />
                    </button>
                  </Link>
                </div>
              </div>
              <Divider />
              {/* <div className=" flex items-center px-8 py-4 gap-x-4">
                <DateRangeIcon style={{ fontSize: "1rem" }} />
                <span className="font-light text-sm">{date}</span>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MajorTeachings;
