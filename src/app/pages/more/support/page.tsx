"use client"

import React, {useRef, useEffect, useState} from 'react'
import { FaHeart } from 'react-icons/fa'

function Support() {
    const [isVisible, setIsVisible] = useState(false);
      const sectionRef = useRef(null);
  
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
              }
            },
            { threshold: 0.2 }
          );
      
          if (sectionRef.current) {
            observer.observe(sectionRef.current);
          }
      
          return () => {
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          };
        }, []);
  return (
    <div ref={sectionRef} className={`font-inter text-center transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
 <div className='my-10 mx-6 md:mx-40 font-inter'>
      <div className='my-40'>
        <p className='my-5 text-center flex flex-row justify-center'><FaHeart size={48} color='#000000'/>
        </p>
        <p className='font-bold text-4xl text-center md:text-7xl'>Support our Ministry</p>
        <p className='mt-10 text-[#666666] text-base text-justify font-medium leading-6'>Calvary greetings to you in the name of our Lord and Saviour, Jesus Christ. <br /> We invite you to support our church community. Your generous contributions will help enhance our programs and improve our worship facilities, creating a vibrant space for all. <br /> Every donation, no matter the size, makes a difference. We encourage you to partner with us through one-time gifts or regular contributions. We appreciate your commitment to our church family and thank you for your generosity. May God bless you abundantly as you respond to this call. <br /> Please send your donations to the Church account details below. Thank you for being a part of this important work!</p>
        <p className='mt-10 font-extrabold text-center text-[#001122] text-3xl'>
          A/C NAME: CHURCH OF CHRIST UYO <br /> AC/NO. 0146796011 <br /> BANK NAME: FCMB</p>
      </div>
    </div>
    </div>
   
  )
}

export default Support


