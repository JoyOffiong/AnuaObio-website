"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, MessageCircleQuestion } from "lucide-react";

const faq = [
  {
    panel: "panel1",
    question: "Who are we",
    answer:
      "We are the Church of Christ, the one and only true church established by Christ. Jesus Christ is the Head of the Church and the Church of His Body.",
  },
  {
    panel: "panel2",
    question: "What's your worship like",
    answer:
      "Churches of Christ all over the world follow the scriptural guidelines in line with the mandates set by the Apostles.",
  },
  {
    panel: "panel3",
    question: "Do I need Baptism",
    answer:
      "Yes, you need to be immersed in a body of water (baptized) to begin your journey of salvation.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  return (
    <section className="my-20 font-inter lg:my-28">
    
      <div className="mx-6 mt-20 max-w-4xl sm:mx-10 lg:mx-auto">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f2eb] text-[#196f00]">
            <MessageCircleQuestion size={24} />
          </div>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#17261f] sm:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faq.map((f) => {
            const isExpanded = expanded === f.panel;

            return (
              <div
                key={f.panel}
                className={`overflow-hidden rounded-2xl border border-[#e4c47d] transition ${
                  isExpanded ? "bg-[#f7f8f5]" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={`${f.panel}-content`}
                  id={`${f.panel}-header`}
                  onClick={() =>
                    setExpanded(isExpanded ? false : f.panel)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-lg font-bold text-[#17261f] transition hover:bg-[#f7f8f5] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e4c47d] sm:px-7"
                >
                  <span>{f.question}</span>
                  <ChevronDown
                    size={21}
                    className={`shrink-0 text-[#4ca233] transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`${f.panel}-content`}
                  role="region"
                  aria-labelledby={`${f.panel}-header`}
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-base leading-7 text-[#66716b] sm:px-7">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
