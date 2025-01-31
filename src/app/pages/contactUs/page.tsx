"use client"

import InputBoxComp from '@/sharedComponents/inputField'
import React from 'react'
import { useForm } from 'react-hook-form'

function ContactUs() {

  const {control, handleSubmit} = useForm()

  return (
       <div className='mt-28 mb-20 px-6 md:px-14'>
      <div>
      <div className="text-center mx-auto md:w-9/12 w-full">
        <p className="font-bold  px-0 text-2xl md:text-4xl mb-10 md:mb-14">Questions? Comments?  Want to learn more?
Please contact us using the form below and we will
be happy to help in any way we can!</p>
      </div>
      <form action="" className='w-11/12 md:w-9/12 space-y-8 mt-10 mx-auto text-[#ac9ca4] font-medium'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='space-y-2'>
        <label htmlFor="">Name</label>
      <InputBoxComp
                name="name"
                control={control}
                type="text"
                className='bg-[#f2f2f2] border-none '

                placeholder='Joy Offiong'
              />      </div>
      <div className='space-y-2'>
        <label htmlFor="">Email</label>
      <InputBoxComp
                name="email"
                control={control}
                type="email"
                className='bg-[#f2f2f2] border-none '
                placeholder='joy@gmail.com'
              />  
      </div>
      </div>
      <div className='space-y-2'>
        <label htmlFor="">Message</label>
      <InputBoxComp
                name="email"
                control={control}
                type="text"
                multiline
                className='bg-[#f2f2f2] border-none '
                placeholder='Type your message...'
                rows={4}
              />  
      </div>
      <div className='mx-auto flex justify-center '>
      <button className="bg-black flex items-center w-2/3 shadow-custom-xl md:w-1/2 justify-center text-white gap-2 rounded-lg py-2 transform hover:scale-110 mt-5 hover:text-gray-500 transition-all duration-300 "> <a href=".//">Learn More</a></button>

      </div>
      </form>
     
     <div className='grid grid-cols-1 md:grid-cols-2 px-8 mt-20 items-center gap-4'>
      <div className='space-y-4'>
        <p className='font-semibold text-3xl'>Come visit us at:</p>
        <p className='font-medium text-xl'>No. 18 Thomas Udoekong street, Anua Obio, Uyo Akwa Ibom State.</p>
        <p className='text-[#888888] text-lg'>We are a group of everyday people we seek to pattern selves after the example of the early church as it is revealed in the New Testament. 
        Join us today</p>
      </div>
      <div>

      </div>
     </div>

      </div>
      </div>
  )
}

export default ContactUs
