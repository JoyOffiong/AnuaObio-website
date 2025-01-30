import React from 'react'
import { IoBookSharp } from 'react-icons/io5'

function Verse() {
  return (
    <div className='my-20'>
      <div>
      <div className="text-center">
        <p className="font-bold text-3xl md:text-5xl mb-10 md:mb-14">Verse of The Day</p>
      </div>
      <div className='text-center mx-auto w-2/3 md:w-1/2 '>
        <p className='text-[#667280] text-xl md:text-2xl text-bold'>“Be strong and courageous. Do not be afraid or terrified because of them, or the Lord your God goes with you; he will never leave you nor forsake you.”</p>
        <div className="flex gap-4 items-center md:w-2/3 mx-auto text-center justify-center mt-14 ">
            <div>
            <IoBookSharp size={48} />
            </div>
               
                <div className='text-left'>
                <p className="font-bold text-[20px] md:text-[24px]">Deuteronomy 31:6
                </p>
                <p className="text-[#667280] ">@NIV Version</p>
                </div>
                
                </div>
      </div>
   
      </div>
    </div>
  )
}

export default Verse
