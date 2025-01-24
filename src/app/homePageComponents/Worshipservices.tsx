import { House } from "lucide-react";
import React from "react";

type Props = {};

function Worshipservices({}: Props) {

  const schedules =[
    {icon:<House />, activity:"Sunday Worship", day:"Sundays", title:" Topical Church Issues", topic:"",time:"9:00AM - 12:00NOON"},
    {icon:"", activity:"General Bible Class", day:"Mondays", title:"Monday Bible Class", topic:"Intensive Study of the Books of the Bible", time:"6:00PM - 8:00PM"},
    {icon:"", activity:"Zonal Fellowship", day:"Wednesdays", title:"Fellowship of Brethren at Various Zones", topic:"This fosters a sense of community for us", time:"5:30PM - 8:00PM"},
    {icon:"", activity:"Prayer Meeting", day:"Fridays", title:"Friday Prayer Service", topic:"Congregational Prayer", time:"6:00PM - 8:00PM"},
    { icon:"", activity:"Leaders Class", day:"1st Wednesdays", title:"", topic:"A special time for our leaders to gather, deliberate and learn better ways to lead the sheep", time:"6:00PM - 8:00PM"},
    { icon:"", activity:"Youth Class", day:"2nd & Last Tuesdays", title:"", topic:"Contemporary Issues concerning the youths", time:"5:45 PM - 7:30 PM"},
    {icon:"", activity:"Men's Class", day:"1st Mondays", title:"", topic:"Specially dedicated class for mento tackle men's issues", time:"6:00 PM - 8:00 PM"},
    {icon:"",activity:"Women's Class", day:"1st Mondays", title:"", topic:"Specially dedicated class for women to tackle women's issues", time:"6:00 PM - 8:00 PM"},


  ]
  return (
    <div className="my-10 px-12 space-y-4 bg-white  text-slate-950 ">
      <div className="space-y-2 mb-12">
        <div className="flex gap-4 items-center">
          <p className="text-[#b2b2b2] font-bold text-[18px]">
Our Weekly Activities          </p>
          
        </div>
        </div>

      <div className="grid md:grid-cols-3 text-lg  items-start gap-8">
        {
          schedules.map((sch)=>{
            const {icon, activity, day, title, topic, time} = sch

            return(
              <div className="shadow-lg hover:shadow-2xl hover:mb-4 transition-all duration-300 p-8 space-y-6">
                <div className="flex gap-2">
                {icon}
                <div>
                <p className="font-bold text-[24px] pl-20">{activity}</p>
                <p>@ {day}</p>
                </div>
                
                </div>
            
              <div className="flex gap-4 items-center relative">
               
                <div className="space-y-6 pl-20">
                  <div>
                    <p>{title}</p>
                    <em>{topic}</em>
                  </div>
                  <p>{time}</p>
                </div>
              </div>
            </div>
            )
          })
        }
       
       
      </div>
    </div>
  );
}

export default Worshipservices;
