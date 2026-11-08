"use client";

import GoogleMap from "@/sharedComponents/googleMap";
import InputBoxComp from "@/sharedComponents/inputField";
import { ArrowRight, LoaderCircle, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

function ContactUs() {
  const { control, handleSubmit, reset } = useForm<ContactForm>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

const handleFormSubmit = (data: ContactForm) => {
   
              setIsSubmitting(true);
              if (resetTimer.current) {
                clearTimeout(resetTimer.current);
              }
              resetTimer.current = setTimeout(() => {
                setIsSubmitting(false);
                reset();
                resetTimer.current = null;
              }, 5000);

              const subject = encodeURIComponent(
                `Website message from ${data.name.trim()}`,
              );
              const body = encodeURIComponent(
                `Name: ${data.name.trim()}\nEmail: ${data.email.trim()}\nMessage: ${data.message.trim()}`,
              );
              const mailtoUrl = `mailto:cocanuaobio@gmail.com?subject=${subject}&body=${body}`;

              window.location.assign(mailtoUrl);
            }

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  return (
    <section className="my-20 bg-[#f7f8f5] py-16 font-inter lg:my-28 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-2xl">
           <h2 className="text-4xl font-bold tracking-tight text-[#17261f] sm:text-5xl">
            We&apos;d love to hear from you.
          </h2>
       </div>

        <div className="grid overflow-hidden rounded-3xl border border-[#e1e8e1] bg-white shadow-[0_16px_45px_rgba(25,49,35,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between bg-[#17261f] p-7 text-white sm:p-10">
            <div>
              <p className="text-2xl font-bold">Let&apos;s connect</p>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
                We are here to help you find your place, answer your questions,
                and walk with you in faith.
              </p>

              <div className="mt-9 space-y-5">
                <a
                  href="tel:+2347062330549"
                  className="flex items-start gap-3 text-sm text-white/80 transition hover:text-[#e4c47d]"
                >
                  <Phone size={19} className="mt-0.5 text-[#e4c47d]" />
                  <span>0706 233 0549</span>
                </a>
                <a
                  href="mailto:cocanuaobio@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/80 transition hover:text-[#e4c47d]"
                >
                  <Mail size={19} className="mt-0.5 text-[#e4c47d]" />
                  <span>cocanuaobio@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-sm leading-6 text-white/80">
                  <MapPin size={19} className="mt-0.5 shrink-0 text-[#e4c47d]" />
                  <span>Church of Christ, Anua Obio, Uyo</span>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              <GoogleMap />
            </div>
          </div>

          <form
            className="space-y-7 p-7 sm:p-10"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#17261f]" htmlFor="name">
                  Name
                </label>
                <InputBoxComp
                  name="name"
                  control={control}
                  type="text"
                  required
                  className="bg-[#f7f8f5]"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#17261f]" htmlFor="email">
                  Email address
                </label>
                <InputBoxComp
                  name="email"
                  control={control}
                  type="email"
                  required
                  className="bg-[#f7f8f5]"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#17261f]" htmlFor="message">
                Your message
              </label>
              <InputBoxComp
                name="message"
                control={control}
                type="text"
                required
                multiline
                className="bg-[#f7f8f5]"
                placeholder="How can we help you?"
                rows={6}
              />
            </div>
            <button
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#196f00] px-6 py-3.5 font-semibold text-white transition hover:bg-[#135300] focus:outline-none focus:ring-2 focus:ring-[#4ca233] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Opening email...
                  <LoaderCircle size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
