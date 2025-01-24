import React from "react";

type Props = {};

function Worshipservices({}: Props) {
  return (
    <div className="my-10 px-12 space-y-4 bg-white  text-slate-950 ">
      <div className="space-y-2 mb-12">
        <div className="flex gap-4 items-center">
          <p className="text-[#b2b2b2] font-bold text-[18px]">
            WEEKLY ACTIVITIES{" "}
          </p>
          <div className="bg-[#f3bb44] text-[#f3bb44]">
            <hr className="w-80 h-[0.5px] " />
          </div>
        </div>
        <h3 className="font-bold text-[24px]">WORSHIP SCHEDULE</h3>
      </div>

      <div className="grid md:grid-cols-3 text-lg  items-start gap-8">
        <div className="shadow-lg hover:shadow-2xl hover:mb-4 transition-all duration-300 p-8 space-y-6">
          <p className="font-bold text-[24px] pl-20">Sunday Worship</p>
          <div className="flex gap-4 items-center relative">
            <div className="absolute -left-8">
              <img
                src="/images/churchIcon.png"
                alt=""
                className="w-[80px] h-[80px]"
              />
            </div>
            <div className="space-y-6 pl-20">
              <div>
                <p>Preachers</p>
                <em>Topical Church Issues</em>
              </div>
              <p>9am-12noon</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-2xl hover:mb-4 transition-all duration-300 p-8 pb-4 space-y-4">
          <p className="font-bold text-[24px] pl-20">Prayer Meeting</p>
          <div className="flex gap-4 items-center relative">
            <div className="absolute -left-8">
              <img
                src="/images/prayer.png"
                alt=""
                className="w-[80px] h-[80px]"
              />
            </div>
            <div className="space-y-6 pl-20">
              <div>
                <p>Friday Prayer Service</p>
                <p>Congregational Prayers</p>
              </div>
              <p className="">6pm-8:30pm</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-2xl hover:mb-4 transition-all duration-300 p-8 pb-4 space-y-4">
          <p className="font-bold text-[24px]  pl-20">General Bible Class</p>
          <div className="flex gap-4 items-center relative">
            <div className="absolute -left-8">
              <img
                src="/images/churchIcon.png"
                alt=""
                className="w-[80px] h-[80px]"
              />
            </div>
            <div className="space-y-6 pl-20">
              <div>
                <p>Monday Bible Study</p>
                <em>Intensive Study of the Books of the Bible</em>
              </div>
              <p>6pm-7:30pm</p>
            </div>
          </div>
        </div>

        <div className="shadow-lg hover:shadow-2xl hover:mb-4 transition-all duration-300 p-8 pb-4 space-y-4">
          <p className="font-bold text-[24px] pl-20">Youth Class</p>
          <div className="flex gap-4 items-center relative">
            <div className="absolute -left-8">
              <img
                src="/images/churchIcon.png"
                alt=""
                className="w-[80px] h-[80px]"
              />
            </div>
            <div className="space-y-6 pl-20">
              <div>
                <p>First and Last Tuesday of the Month</p>
                <em>Contemporary Issues concenring the youths</em>
              </div>
              <p className="">6pm-7:30pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worshipservices;
