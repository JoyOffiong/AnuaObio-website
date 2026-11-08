"use client";
import React, { useEffect, useState } from "react";
import { BookOpen, Quote } from "lucide-react";

function Verse() {
  const motivationalVerses = [
    "Joshua 1:9",
    "Psalm 46:1",
    "Isaiah 41:10",
    "Philippians 4:13",
    "Psalm 34:17",
    "Romans 8:28",
    "Matthew 11:28",
    "Deuteronomy 31:6",
  ];

  // Fetch from Bible API
  async function fetchVerse(reference: string) {
    const response = await fetch(
      `https://bible-api.com/${encodeURIComponent(reference)}`
    );
    if (!response.ok) {
      throw new Error("Unable to load the verse");
    }
    const data = await response.json();
    return data.text;
  }

  const [verseText, setVerseText] = useState("");
  const [reference, setReference] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadVerse() {
      const savedReference = sessionStorage.getItem("currentReference");
      const savedText = sessionStorage.getItem("currentVerseText");

      // If session already has a verse, use it
      if (savedReference && savedText) {
        setReference(savedReference);
        setVerseText(savedText);
        return;
      }

      const chosenRef =
        motivationalVerses[Math.floor(Math.random() * motivationalVerses.length)];

      try {
        const text = await fetchVerse(chosenRef);

        sessionStorage.setItem("currentReference", chosenRef);
        sessionStorage.setItem("currentVerseText", text);

        setReference(chosenRef);
        setVerseText(text);
      } catch {
        setError(true);
      }
    }

    loadVerse();
  }, []);

  return (
    <section className="my-20 px-6 font-inter lg:my-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#17261f] px-6 py-12 text-white shadow-[0_20px_50px_rgba(25,49,35,0.16)] sm:px-12 sm:py-16 lg:px-20">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="pointer-events-none absolute -left-12 -top-16 hidden text-[#e4c47d]/10 sm:block">
            <Quote size={150} strokeWidth={1} />
          </div>

          <p className="relative mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#e4c47d]">
            Daily encouragement
          </p>
          <h2 className="relative text-4xl font-bold tracking-tight sm:text-5xl">
            Verse of the day
          </h2>
          <div
            aria-live="polite"
            className="relative mx-auto mt-10 min-h-[112px] max-w-3xl"
          >
            {error ? (
              <p className="text-base leading-7 text-white/70">
                We couldn&apos;t load today&apos;s verse. Please try again
                shortly.
              </p>
            ) : verseText ? (
              <blockquote className="text-2xl font-medium leading-relaxed text-white/90 sm:text-3xl">
                “{verseText.trim()}”
              </blockquote>
            ) : (
              <div className="mx-auto h-8 w-3/4 animate-pulse rounded-full bg-white/10" />
            )}
          </div>

          <div className="relative mx-auto mt-10 flex w-fit items-center gap-4 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-left backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e4c47d] text-[#17261f]">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="font-bold text-[#e4c47d]">
                {reference || "Loading..."}
              </p>
              <p className="text-sm text-white/60">King James Version</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Verse;
