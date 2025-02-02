import React from 'react'

function ReachOut() {

    const mediums =[
        {medium:"", contactInfo:"Ring Us", tel:"+2348132864386"},
        {medium:"Send an Email", contactInfo:"cocanuaobio@gmail.com"},
        {medium:"Follow us", contactInfo:"@cocanuaobio"}
    ]
  return (
    <div className='mx-6 md:mx-32 my-20'>
     <div className=' grid grid-cols-1 gap-y-10 md:gap-x-10  md:grid-cols-3'>
      
                    <div className='relative shadow-custom-xl rounded-3xl p-7 space-y-6 gap-5 text-center '>
                    <p className='font-semibold text-[20px]'>Ring Us</p>
                    <p className='font-medium text-lightText'> +234-813-286-4386 </p>
                    <div>
                        <button className='shadow-md px-4 py-2 font-semibold text-center rounded-md text-sm text-white bg-black'><a href="tel:+2348132864386">Call</a> </button>
                    </div>
                        
                    </div>

                    <div className='relative shadow-custom-xl rounded-3xl p-7 space-y-6 gap-5 text-center '>
                    <p className='font-semibold text-[20px]'>Send an Email</p>
                    <p className='font-medium text-lightText'> cocanuaobio@gmail.com </p>
                    <div>
                        <button className='shadow-md px-4 py-2 font-semibold text-center rounded-md text-sm text-white bg-black'>Send</button>
                    </div>
                    
                    </div>

                    <div className='relative shadow-custom-xl rounded-3xl p-7 space-y-6 gap-5 text-center '>
                    <p className='font-semibold text-[20px]'>Follow Us</p>
                    <p className='font-medium text-lightText'> Facebook </p>
                    <div>
                        <button className='shadow-md px-4 py-2 font-semibold text-center rounded-md text-sm text-white bg-black'>Follow</button>
                    </div>
                    
                    </div>
             
     
    </div> 
    </div>
  )
}

export default ReachOut
