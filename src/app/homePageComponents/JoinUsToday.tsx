import { ArrowRight } from "lucide-react";
import Link from "next/link";

function JoinUsToday() {
  return (
    <section className="my-20 overflow-hidden bg-[#17261f] lg:my-28">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[0.95fr_1.05fr]">
        <div
          className="relative min-h-[420px] bg-cover bg-center lg:min-h-[620px]"
          style={{ backgroundImage: "url('/images/churchpix6.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#081c15]/80 via-[#173326]/15 to-[#d7b56d]/20" />
          
        </div>

        <div className="flex items-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="max-w-xl">
           
            <h2 className="text-4xl font-bold leading-normal tracking-[-0.03em] text-white sm:text-5xl">
Here at the <br />
CHURCH OF CHRIST,
Anua Obio, Uyo            </h2>
            <p className="mt-7 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Our goal is to worship God in Spirit & Truth. Our worship is
            organized in order to offer God an acceptable worship each time we
            meet. Our items of worship includes: Singing, Praying, Teaching,
            Sermon, Communion and Giving.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pages/more/theMinistry"
                className="inline-flex items-center justify-center rounded-full bg-[#e4c47d] px-6 py-3.5 font-semibold text-[#173326] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#e4c47d] focus:ring-offset-2 focus:ring-offset-[#17261f]"
              >
                Our ministry
              </Link>
              <Link
                href="/pages/aboutUs/ourWorship"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#173326] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#17261f]"
              >
                Learn more
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUsToday;
