"use client";

import { Heart, Megaphone, Sparkles, Users } from "lucide-react";

const ministries = [
  {
    title: "Evangelism",
    icon: Megaphone,
    description:
      "We reach people in hospitals, prisons, overseas, and our local community with a message of hope and love. Through Bible studies and outreach, we welcome those who are searching and help new believers grow in faith.",
  },
  {
    title: "Edification",
    icon: Sparkles,
    description:
      "We nurture spiritual growth and maturity through gatherings, prayer meetings, and programmes for men, women, and youth. These opportunities help members discover their God-given roles, grow as leaders, and support one another.",
  },
  {
    title: "Benevolence",
    icon: Heart,
    description:
      "We care for people in our church and wider community by supporting those facing difficult seasons. Through visits, encouragement, and practical help, we share hope and remind one another that no one is alone.",
  },
];

const salvationSteps = [
  ["Hear the Gospel", "Romans 10:17"],
  ["Believe the Gospel", "Hebrews 11:6"],
  ["Repent of your sins", "Luke 13:3"],
  ["Confess Christ", "Matthew 10:32"],
  ["Be baptized", "Romans 6:3-4"],
];

function OurMinistry() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] pb-20 font-inter">
      <header className="px-6 pb-12 pt-28 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl border-b border-[#e4c47d]/60 pb-10">
        
        
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight tracking-tight text-[#17261f] sm:text-6xl">
            The Ministry
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#66716b] sm:text-lg">
            Serving God and our community through evangelism, edification, and
            benevolence.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {ministries.map(({ title, icon: Icon, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-[#e4c47d]/60 bg-white p-7 shadow-[0_12px_35px_rgba(25,49,35,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#17261f] text-[#e4c47d]">
                <Icon size={22} />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-[#17261f]">{title}</h2>
              <p className="mt-3 leading-7 text-[#66716b]">{description}</p>
            </article>
          ))}
        </div>

        <section className="rounded-3xl bg-[#17261f] px-6 py-10 text-white sm:px-10 lg:px-16">
          <div className="flex flex-col gap-5 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e4c47d]">
                Our purpose
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                The plan of salvation
              </h2>
            </div>
            <Users className="hidden text-[#e4c47d] md:block" size={42} />
          </div>
          <p className="max-w-2xl py-8 leading-7 text-white/75">
            We share the goodness of God so that everyone can respond to the
            gospel and grow in a life of faith.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {salvationSteps.map(([step, reference], index) => (
              <div
                key={step}
                className="rounded-2xl border border-[#e4c47d]/40 bg-white/5 p-4"
              >
                <span className="text-sm font-bold text-[#e4c47d]">
                  0{index + 1}
                </span>
                <p className="mt-3 font-semibold">{step}</p>
                <p className="mt-1 text-sm text-white/60">{reference}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default OurMinistry;
