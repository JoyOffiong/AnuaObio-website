"use client";
import React, { useEffect, useState } from "react";
import { IoBookSharp } from "react-icons/io5";

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
    const data = await response.json();
    return data.text;
  }

  const [verseText, setVerseText] = useState("");
  const [reference, setReference] = useState("");

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

      const text = await fetchVerse(chosenRef);

      sessionStorage.setItem("currentReference", chosenRef);
      sessionStorage.setItem("currentVerseText", text);

      setReference(chosenRef);
      setVerseText(text);
    }

    loadVerse();
  }, []);

  return (
    <div className="my-20">
      <div>
        <div className="text-center">
          <p className="font-bold text-3xl md:text-5xl mb-10 md:mb-14">
            Verse of The Day
          </p>
        </div>

        <div className="text-center mx-auto w-2/3 md:w-1/2">
          <p className="text-[#667280] text-xl md:text-2xl text-bold">
            {verseText ? `“${verseText.trim()}”` : "Loading verse..."}
          </p>

          <div className="flex gap-4 items-center md:w-2/3 mx-auto text-center justify-center mt-14">
            <div>
              <IoBookSharp size={48} />
            </div>

            <div className="text-left">
              <p className="font-bold text-[20px] md:text-[24px]">
                {reference || "Loading..."}
              </p>
              <p className="text-[#667280]">@KJV Version</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verse;
