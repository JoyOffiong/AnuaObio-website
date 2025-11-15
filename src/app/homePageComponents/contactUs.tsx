"use client";

import GoogleMap from "@/sharedComponents/googleMap";
import InputBoxComp from "@/sharedComponents/inputField";
import React from "react";
import { useForm } from "react-hook-form";

type props = {
  name: string;
  email: string;
  message: string;
};

function ContactUs() {
  const { control, handleSubmit } = useForm();

  return (
    <div className="my-40 font-inter">
      <div>
        <div className="text-center mx-auto px-6 md:px-14 md:w-7/12 w-full">
          <p className="font-bold  px-0 text-3xl md:text-5xl mb-10 md:mb-14">
            Send a Message
          </p>
        </div>
        <form
          className="w-11/12 px-6 md:px-14 md:w-9/12 space-y-8 mt-10 mx-auto text-[#ac9ca4] font-medium"
          onSubmit={handleSubmit((data) => {
            const subject = encodeURIComponent("New Contact Form Submission");
            const body = encodeURIComponent(
              `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
            );

            window.location.href = `mailto:cocanuaobio@gmail.com?subject=${subject}&body=${body}`;
          })}
        >
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="">Name</label>
              <InputBoxComp
                name="name"
                control={control}
                type="text"
                className="bg-[#f2f2f2] border-none"
                placeholder="Joy Offiong"
              />{" "}
            </div>
            <div className="space-y-2">
              <label htmlFor="">Email</label>
              <InputBoxComp
                name="email"
                control={control}
                type="email"
                className="bg-[#f2f2f2] border-none "
                placeholder="joy@gmail.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="">Message</label>
            <InputBoxComp
              name="message"
              control={control}
              type="text"
              multiline
              className="bg-[#f2f2f2] border-none "
              placeholder="Type your message..."
              rows={4}
            />
          </div>
          <div className="mx-auto flex justify-center ">
            <button
              className="bg-black flex items-center w-2/3 drop-shadow-xl md:w-1/2 justify-center text-white gap-2 rounded-lg py-3 mt-5 hover:bg-[#222222] transition-all duration-300 "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
