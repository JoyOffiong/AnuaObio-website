import Image from 'next/image'
import React from 'react'
import image from "../../../public/images/churchgathering3.jpg"

function Lessons() {

  const lessons = [
    {  img:image, title:"The Church in God's Eternal Purpose", date:"Jan. 10, 2025", bibleTexts:"Eph.1:4-9; 3:10,11; Eph 1:4,5,11", link:"" },
    {  img:image, title:"God’s grace is sufficient for our needs", date:"Jan. 10, 2025", bibleTexts:"2 Cor. 12:7-10; 1 Cor. 15:10", link:"" }
]

  return (
    <div className='font-inter'>
      <div className='text-center'>
        <p className='font-bold text-5xl'>Today's Lessons</p>
      </div>
      <div className='bg-[#f7f7f7] px-12 py-14'>
        <div>
            {lessons.map((lesson)=>{
                    const {img, title, date, bibleTexts} = lesson
                return (
                    <div className='flex md:flex-row flex-col items-center gap-4'>
                {/*image  */}
                <div className='relative shadow-custom-xl'>
                    <Image src={img} alt="churchImgae" width={120} height={120}/>
                </div>

                {/* Texts */}
                <div>
                    <p>{title}</p>
                    <p>{date}</p>
                    <p className='md:w-1/2 w-full'>{bibleTexts}</p>
                    <div className='mt-2'>
                        <button className='shadow-md px-4 py-2 font-semibold text-center rounded-md text-sm text-white bg-black'>Read More</button>
                    </div>
                </div>
            </div>
                )
                
            })}
            
        </div>
      </div>
    </div>
  )
}

export default Lessons

