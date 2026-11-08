import Image from "next/image";
import image from "../../../../public/images/churchgathering3.jpg";
import Bible from "../../../../public/images/Godsplan.jpg";
import Grace from "../../../../public/images/GodsSufficiency.jpg";
import Marriage from "../../../../public/images/marriage.jpg";
import proverbs from "../../../../public/images/proverbs.jpg";
import proverbs2 from "../../../../public/images/proverbs2.jpg";
import warning from "../../../../public/images/warnings.png";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import Link from "next/link";

const lessons = [
   {
    img: Grace,
    title: "From Alienation to Reconciliation",
    link: "/pages/teaching/from-alienation-to-reconciliation",
    by: "Bro. Effiong Udoekong",
    bibleTexts: "Eph. 2:1-10",
    date: "April 19, 2026",
  },
  {
    img: proverbs2,
    title: "THE Priority OF Wisdom ",
    by: "Min. E.O. Akpan",
    date: "Jan. 11, 2026",
    bibleTexts: "Proverbs 4:1-10",
    link: "/pages/teaching/the-priority-of-wisdom",
  },
  {
    img: proverbs,
    title: "The Proverbs of Solomon: Wisdom for Life",
    by: "Min. E.O. Akpan",
    date: "Jan. 4, 2026",
    bibleTexts: "Proverbs 22:17; Prov. 1-8",
    link: "/pages/teaching/the-proverbs-of-solomon",
  },
  {
    img: Grace,
    title: "Righteousness vs Wickedness",
    link: "/pages/teaching/righteousness-vs-wickedness",
    by: "Bro. Asuquo Offiong",
    bibleTexts: "Psalm 1:1-6",
    date: "Nov. 16, 2025",
  },
  {
    img: warning,
    title: "Warnings Against Infidelity ",
    by: "Bro. Effiong Udoekong",
    date: "Nov. 12, 2025",
    bibleTexts: "Prov. 5:1-22",
    link: "/pages/teaching/warnings-against-infidelity",
  },
  {
    img: image,
    title: "The Church in God's Eternal Purpose",
    by: "Bro. Offiong",
    date: "Jan. 10, 2025",
    bibleTexts: "Eph.1:4-9; 3:10,11; Eph 1:4,5,11",
    link: "/pages/teaching/Hisgrace",
  },
  {
    img: Grace,
    title: "God’s Grace is Sufficient for our Needs",
    by: "Bro. Johnson",
    date: "Jan. 11, 2025",
    bibleTexts: "2 Cor. 12:7-10; 1 Cor. 15:10",
    link: "/pages/teaching/grace",
  },
  {
    img: Marriage,
    title: "Malachi's Teaching on Marriage and Divorce",
    by: "Bro. Offiong",
    date: "Jan. 11, 2025",
    bibleTexts: "Malachi 2:14-16.",
    link: "/pages/teaching/marriage",
  },
  {
    img: Bible,
    title: "Remember your Spiritual Heritage",
    by: "Min. E.O. Akpan",
    date: "Jan. 11, 2025",
    bibleTexts: "2 Tim 1:3; Act 9:15",
    link: "/pages/teaching/spiritual-heritage",
  },
  {
    img: Bible,
    title: "Warning Against False Teachings",
    by: "Bro. Asuquo Offiong",
    date: "Jan. 10, 2025",
    bibleTexts: "Col. 2:16-23",
    link: "/pages/teaching/warnings-against-false-teachings",
  },
  {
    img: Grace,
    title: "The Law of Moses",
    link: "/pages/teaching/the-law-of-moses",
  },
    {
    img: image,
    title: "The Teachings of Jesus on the Mount",
    link: "/pages/teaching/the-teachings-of-Jesus-on-the-mount",
  },
 
  
];

function Sermon() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] pb-20 font-inter">
      <section className="bg-[#17261f] px-6 pb-16 pt-36 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e4c47d]">
              <BookOpen size={15} />
              Grow in the word
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-7xl">
              Lessons &amp; sermons
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Explore biblical teaching designed to strengthen your faith,
              deepen your understanding, and help you live out God&apos;s word
              every day.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4ca233]">
              Latest teachings
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#17261f]">
              Find your next study
            </h2>
          </div>
          <span className="hidden text-sm text-[#7b877f] sm:block">
            {lessons.length} lessons available
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map(({ img, title, date, bibleTexts, by, link }) => (
            <article
              key={title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e1e8e1] bg-white shadow-[0_10px_30px_rgba(25,49,35,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(25,49,35,0.12)]"
            >
              <Link href={link} className="flex h-full flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#17261f]">
                    <CalendarDays size={14} />
                    {date || "Bible study"}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold leading-snug text-[#17261f]">
                    {title}
                  </h3>
                  {bibleTexts && (
                    <p className="mt-4 text-sm font-medium leading-6 text-[#4ca233]">
                      {bibleTexts}
                    </p>
                  )}
                  {by && (
                    <p className="mt-3 text-sm text-[#7b877f]">By {by}</p>
                  )}
                  <span className="mt-auto flex items-center gap-2 pt-7 font-semibold text-[#196f00]">
                    Read lesson
                    <ArrowRight
                      size={17}
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

export default Sermon;
