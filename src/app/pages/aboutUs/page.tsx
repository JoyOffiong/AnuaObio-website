import Image from 'next/image';
import { title } from 'process'
import React from 'react'
import history from "../../../../public/images/ourHistory.jpg";
import belief from "../../../../public/images/ourBeliefs.jpg";
import ministry from "../../../../public/images/ourMinister.jpg";
import worship from "../../../../public/images/ourWorship.jpg";

function AboutUs() {

  const aboutUs =[
    {img:belief, title:"Our beliefs", desc:"Let's talk about why we have a strong conviction in our beliefs"},
    {img:worship, title:"Our Worship", desc:"Let's talk about what our worship is like, you'd love it"},
    {img:history, title:"Our History", desc:"Every thing has a beginning, us too. Find out how we started"},
    {img:ministry, title:"Our Minister", desc:"Discover what motivates the leader of the herd"}
  ]
  return (
    <div className="text-left my-28 mx-auto px-6 md:w-10/12 w-full">

      <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
      {aboutUs.map((abt, index)=>{
        const {img, title,desc}= abt;
        return(
          <div key={index} className='flex flex-col '>
          <div className='flex flex-col gap-3'>
              <div className='w-full rounded-2xl flex'>
                <Image src={img} width={120} height={120} alt="img" className='rounded-2xl w-full '/>
              </div>

              <div className='gap-4 flex flex-col'>
                <p className='font-bold text-darkText text-2xl'>{title}</p>
                <p className='font-medium text-textColor text-xl'>{desc}</p>
              </div>

             </div>
              </div>
        )
      })}
      </div>
     
    </div>
  )
}

export default AboutUs

