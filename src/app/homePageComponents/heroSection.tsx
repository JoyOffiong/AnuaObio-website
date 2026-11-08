import { ArrowRight, CalendarDays, Play } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[720px] overflow-hidden bg-[#10251d] font-inter text-white lg:min-h-[780px]"
      style={{
        backgroundImage: "url('/images/img3.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,28,21,0.94)_0%,rgba(8,28,21,0.7)_42%,rgba(8,28,21,0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#081c15]/80 via-transparent to-[#081c15]/30" />

      <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-16 pt-36 sm:px-10 lg:min-h-[780px] lg:px-16 lg:pt-28">
        <div className="max-w-3xl">
                  <h1
            id="hero-heading"
            className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
          >
            Church of Christ, Anua Obio, Uyo. <br />
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
           Our mission is to honor God by guiding families and individuals within our community toward a deeper, committed relationship with Jesus Christ, through vibrant ministry inspired by the Holy Spirit. Join us on this transformative journey!
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/pages/aboutUs"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#e4c47d] px-6 py-3.5 font-semibold text-[#173326] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#e4c47d] focus:ring-offset-2 focus:ring-offset-[#173326]"
            >
              Learn more about us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          
          </div>

          
        </div>

        <div className="absolute bottom-8 right-6 hidden w-64 rounded-2xl border border-white/20 bg-[#10251d]/75 p-5 lg:right-16 lg:block">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#e4c47d]">
            <CalendarDays size={16} />
            Join us this Sunday
          </div>
          <p className="text-lg font-semibold">Worship service</p>
          <p className="mt-1 text-sm text-white/65">9:00 AM · Anua Obio, Uyo</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
