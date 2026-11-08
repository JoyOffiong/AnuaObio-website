import Image from "next/image";
import Bible from "../../../../../public/images/Godsplan.jpg";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";

const lessons = [
  {
    img: Bible,
    title: "Jesus and the Mosaic Law",
    date: "October 12th, 2025",
    bibleTexts: "Matt. 5:17-48",
    by: "Min. E.O. Akpan",
    link: "/pages/teaching/Jesus-and-the-mosaic-law",
  },
    {
    img: Bible,
    title: "Life at the crossroads",
    date: "October 19th, 2025",
    bibleTexts: "Matt. 7:13-14",
    by: "Min. E.O. Akpan",
    link: "/pages/teaching/Life-at-the-crossroads",
  },
];

function TeachingsOnTheMount() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] pb-20 font-inter">
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-8 text-center sm:px-10 lg:px-16">
        <div className="border-b border-[#e4c47d]/50 pb-10">
          <Link
            href="/pages/lessons"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#66716b] transition hover:text-[#196f00]"
          >
            <ArrowRight size={16} className="rotate-180" />
            Back to lessons
          </Link>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
              Bible teaching
            </p>
            <h1 className="mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-[#17261f] sm:text-6xl">
              The teachings of Jesus on the Mount
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#66716b] sm:text-lg sm:leading-8 mx-auto">
              Walk through the words of Jesus and discover how His teaching
              shapes a life of wisdom, courage, and faithful obedience.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4ca233]">
              Series lessons
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17261f]">
              Continue studying
            </h2>
          </div>
          <span className="hidden text-sm text-[#7b877f] sm:block">
            {lessons.length} lessons
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {lessons.map(({ img, title, date, bibleTexts, by, link }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl border border-[#e1e8e1] bg-white shadow-[0_12px_35px_rgba(25,49,35,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(25,49,35,0.12)]"
            >
              <Link href={link} className="block">
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081c15]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-[#17261f]">
                    <CalendarDays size={14} />
                    {date}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold text-[#4ca233]">
                    {bibleTexts}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[#17261f]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm text-[#7b877f]">By {by}</p>
                  <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#196f00]">
                    Read lesson
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default TeachingsOnTheMount;
