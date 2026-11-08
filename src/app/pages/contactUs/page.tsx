"use client";

import GoogleMap from "@/sharedComponents/googleMap";
import InputBoxComp from "@/sharedComponents/inputField";
import { ArrowRight, LoaderCircle, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

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

    const subject = encodeURIComponent(`Website message from ${data.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${data.name.trim()}\nEmail: ${data.email.trim()}\nMessage: ${data.message.trim()}`,
    );

    window.location.assign(
      `mailto:cocanuaobio@gmail.com?subject=${subject}&body=${body}`,
    );
  };

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f8f5] px-6 pb-20 pt-28 font-inter sm:px-10 lg:px-16">
      <header className="mx-auto mb-12 max-w-4xl border-b border-[#e4c47d]/60 pb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
          Get in touch
        </p>
        <h1 className="mt-4 text-4xl font-bold uppercase leading-tight text-[#17261f] sm:text-6xl">
          Contact us
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#66716b] sm:text-lg">
          Questions, comments, or want to learn more? We would be happy to
          connect with you.
        </p>
      </header>

      <section className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-[#e4c47d]/60 bg-white shadow-[0_16px_45px_rgba(25,49,35,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-between bg-[#17261f] p-7 text-white sm:p-10">
          <div>
            <p className="text-2xl font-bold">Come visit us</p>
            <p className="mt-4 max-w-sm leading-7 text-white/65">
              We are a group of everyday people seeking to follow the example
              of the early church revealed in the New Testament.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="tel:+2347062330549"
                className="flex items-start gap-3 text-white/80 transition hover:text-[#e4c47d]"
              >
                <Phone size={19} className="mt-1 shrink-0 text-[#e4c47d]" />
                <span>0706 233 0549</span>
              </a>
              <a
                href="mailto:cocanuaobio@gmail.com"
                className="flex items-start gap-3 text-white/80 transition hover:text-[#e4c47d]"
              >
                <Mail size={19} className="mt-1 shrink-0 text-[#e4c47d]" />
                <span>cocanuaobio@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 leading-7 text-white/80">
                <MapPin size={19} className="mt-1 shrink-0 text-[#e4c47d]" />
                <span>No. 18 Thomas Udoekong Street, Anua Obio, Uyo, Akwa Ibom State.</span>
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
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#196f00] px-6 py-3.5 font-semibold text-white transition hover:bg-[#135300] focus:outline-none focus:ring-2 focus:ring-[#e4c47d] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
      </section>
    </main>
  );
}

export default ContactUs;
