import Image from "next/image";
import Link from "next/link";
import history from "../../../../public/images/ourHistory.jpg";
import belief from "../../../../public/images/ourBeliefs.jpg";
import ministry from "../../../../public/images/ourMinister.jpg";
import worship from "../../../../public/images/ourWorship.jpg";
import { ArrowRight } from "lucide-react";

const aboutUs = [
  {
    img: belief,
    title: "Our beliefs",
    desc: "The convictions that guide our faith and life together.",
    link: "/pages/aboutUs/ourBeliefs",
  },
  {
    img: worship,
    title: "Our worship",
    desc: "Discover how we gather to honour God in spirit and truth.",
    link: "/pages/aboutUs/ourWorship",
  },
  {
    img: history,
    title: "Our history",
    desc: "Every family has a beginning. Learn how our congregation started.",
    link: "/pages/aboutUs/ourCongregation",
  },
  {
    img: ministry,
    title: "Our minister",
    desc: "Meet the minister who serves and leads our church family.",
    link: "/pages/aboutUs/theMinister",
  },
];

function AboutUs() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] pb-20 font-inter">
      <header className="px-6 pb-12 pt-28 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl border-b border-[#e4c47d]/50 pb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
            Get to know us
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-[#17261f] sm:text-6xl">
            About the church
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#66716b] sm:text-lg">
            Learn about our faith, our story, our worship, and the people who
            make Church of Christ, Anua Obio a family.
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-10 md:grid-cols-2 lg:px-16">
        {aboutUs.map(({ img, title, desc, link }) => (
          <Link
            key={title}
            href={link}
            className="group overflow-hidden rounded-3xl border border-[#e1e8e1] bg-white shadow-[0_12px_35px_rgba(25,49,35,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(25,49,35,0.12)]"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={img}
                width={800}
                height={500}
                alt={title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c15]/70 via-transparent to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold capitalize text-[#17261f]">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-[#66716b]">{desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#196f00]">
                Explore
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default AboutUs;
