import React from 'react'

function ReachOut() {

  return (
    <div className='mx-6 md:mx-32 my-20'>
     <div className=' grid grid-cols-1 gap-y-10 md:gap-x-10  md:grid-cols-3'>
      
                    <div className='relative shadow-custom-xl rounded-3xl p-7 space-y-6 gap-5 text-center '>
                    <p className='font-semibold text-[20px]'>Ring Us</p>
                    <p className='font-medium text-lightText text-base'> 07062330549, 08033380401,08062960422 </p>
                    <div className='text-center flex justify-center'>
                        <button className='bg-black text-sm flex items-center text-white gap-2 rounded-lg px-6 font-semibold py-2 transform hover:scale-110 mt-5 hover:bg-green-900 transition-all duration-300'><a href="tel:+2347062330549">Call</a> </button>
                    </div>
                        
                    </div>

                    <div className="relative shadow-custom-xl rounded-3xl p-7 space-y-6 gap-5 text-center">
    <p className="font-semibold text-[20px]">Send an Email</p>
    <p className="font-medium text-lightText text-base pb-6">cocanuaobio@gmail.com</p>
    <div className="text-center flex justify-center">
        <button className="bg-black drop-shadow-2xl flex items-center text-white gap-2 rounded-lg px-6 py-2 transform hover:scale-110 mt-5 hover:bg-green-900 transition-all text-sm font-semibold duration-300">
            <a href="mailto:cocanuaobio@gmail.com">Send</a>
        </button>
    </div>
                    
                    </div>

                    <div className='relative shadow-custom-xl rounded-3xl p-7 space-y-6 gap-5 text-center '>
                    <p className='font-semibold text-[20px]'>Follow Us</p>
                    <p className='font-medium text-lightText text-base'> @ Church of Christ, Anua Obio,Uyo on facebook </p>
                    <div>
                        <button className='shadow-md px-6 text-sm py-2 font-semibold text-center  transform hover:scale-110 mt-5 hover:bg-green-900 transition-all duration-300 rounded-md   text-white bg-black'>
                            <a href="https://web.facebook.com/profile.php?id=61566486071827" target='_blank'>Follow</a>
                        </button>
                    </div>
                    
                    </div>
             
     
    </div> 
    </div>
  )
}


export default ReachOut;

