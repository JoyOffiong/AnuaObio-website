import { IoBookSharp } from "react-icons/io5";
import { LuChurch } from "react-icons/lu";
import { MdPeople } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

function Worshipservices() {
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
      topic: "A dedicated class for men to discuss and tackle men's issues",
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
    <section className="my-20 bg-[#f7f8f5] py-16 font-inter lg:my-28 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-[#17261f] sm:text-5xl">
              Our weekly activities
            </h2>
          </div>
           </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schedules.map(({ icon, activity, day, topic, time }, index) => (
            <article
              key={activity}
              className={`group flex min-h-[270px] flex-col rounded-2xl border border-[#e1e8e1] bg-white p-6 shadow-[0_10px_30px_rgba(25,49,35,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(25,49,35,0.12)] ${
                index === 0 ? "border-[#d7b56d] sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7f2eb] text-[#196f00]">
                  {icon}
                </div>
                <span className="rounded-full bg-[#f8efdc] px-3 py-1.5 text-xs font-bold text-[#9a6b16]">
                  {day}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#17261f]">
                {activity}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#66716b]">
                {topic}
              </p>
              <div className="mt-6 border-t border-[#edf0ec] pt-4">
                <p className="text-sm font-bold text-[#196f00]">{time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Worshipservices;
