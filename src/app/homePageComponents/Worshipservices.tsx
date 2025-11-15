import { BookOpen, House } from "lucide-react";
import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { LuChurch } from "react-icons/lu";
import { MdPeople } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

type Props = {};

function Worshipservices({}: Props) {
  const schedules = [
    {
      icon: <LuChurch size={48} />,
      activity: "Sunday Worship",
      day: "Sundays",
      title: " ",
      topic: "Topical Church Issues",
      time: "9:00AM - 12:00NOON",
    },
    {
      icon: <MdPeople size={48} />,
      activity: "Prayer Meeting",
      day: "Fridays",
      title: "Friday Prayer Service",
      topic: "Congregational Prayer",
      time: "6:00PM - 8:00PM",
    },
    {
      icon: <IoBookSharp size={48} />,
      activity: "General Bible Class",
      day: "Mondays",
      title: "Monday Bible Class",
      topic: "Intensive Study of the Books of the Bible",
      time: "6:00PM - 8:00PM",
    },
    {
      icon: <FaBriefcase size={48} />,
      activity: "Leaders Class",
      day: "1st Wednesdays",
      title: "",
      topic:
        "A special time for our leaders to gather, deliberate and learn better ways to lead the sheep",
      time: "6:00PM - 8:00PM",
    },
    {
      icon: <MdPeople size={48} />,
      activity: "Youth Class",
      day: "2nd & Last Tuesdays",
      title: "",
      topic: "Contemporary Issues concerning the youths",
      time: "5:45 PM - 7:30 PM",
    },
    {
      icon: <FaPeopleGroup size={48} />,
      activity: "Zonal Fellowship",
      day: "Wednesdays",
      title: "Fellowship of Brethren at Various Zones",
      topic: "This fosters a sense of community for us",
      time: "5:30PM - 8:00PM",
    },

    {
      icon: <MdPeople size={48} />,
      activity: "Men's Class",
      day: "1st Mondays",
      title: "",
      topic: "Specially dedicated class for mento tackle men's issues",
      time: "6:00 PM - 8:00 PM",
    },
    {
      icon: <MdPeople size={48} />,
      activity: "Women's Class",
      day: "1st Mondays",
      title: "",
      topic: "Specially dedicated class for women to tackle women's issues",
      time: "6:00 PM - 8:00 PM",
    },
  ];
  return (
    <div className="mt-10 mb-28 px-12 space-y-4 pt-8 bg-white md:mx-36  text-slate-950 ">
      <div className="space-y-2 mb-12">
        <div className="flex gap-4 text-center">
          <p className="text-[#001122] m-auto font-bold text-3xl md:text-5xl">
            Our Weekly Activities{" "}
          </p>
        </div>
      </div>

      <div className=" columns-1 sm:columns-2 md:columns-3 text-lg  items-start gap-6">
        {schedules.map((sch, index) => {
          const { icon, activity, day, title, topic, time } = sch;

          return (
            <div
              key={index}
              className="break-inside-avoid mb-4  relative shadow-custom-xl rounded-2xl p-8 space-y-6"
            >
              <div className="flex gap-4 items-center">
                {icon}
                <div>
                  <p className="font-bold text-[24px]">{activity}</p>
                  <p className="text-[#667280] ">@ {day}</p>
                </div>
              </div>

              <div className="flex gap-4 items-center relative text-[#667280] ">
                <div className="space-y-6 text-base font-medium ">
                  <div>
                    <em>{topic}</em>
                  </div>
                  <p className="text-base">{time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Worshipservices;
