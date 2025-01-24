import React from 'react'

function ReachOut() {

    const mediums =[
        {medium:"Ring Us", contactInfo:"+234-808-2481-316"},
        {medium:"Send an Email", contactInfo:"cocanuaobio@gmail.com"},
        {medium:"Follow us", contactInfo:"@cocanuaobio"}
    ]
  return (
    <div className='mx-12 my-14'>
     <div className=' grid grid-cols-1 gap-x-10 md:grid-cols-3'>
        {
            mediums.map((med, index)=>{
                const {medium, contactInfo}= med

                return(
                    <div key={index} className='relative shadow-custom-xl rounded-3xl p-7 space-y-6 gap-5 text-center '>
                    <p className='font-semibold text-[20px]'>{medium}</p>
                    <p className='font-medium text-lightText'>{contactInfo}</p>
                    <div>
                        <button className='shadow-md px-4 py-2 font-semibold text-center rounded-md text-sm text-white bg-black'>Click me</button>
                    </div>
                </div>
                )
            })
        }
     
    </div> 
    </div>
  )
}

export default ReachOut