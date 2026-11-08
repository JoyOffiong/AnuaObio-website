"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";

const images = [
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img5.jpeg",
  "/images/img6.jpeg",
  "/images/img7.jpeg",
];

function Gallery() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] px-6 pb-20 pt-28 font-inter sm:px-10 lg:px-16">
      <header className="mx-auto max-w-4xl border-b border-[#e4c47d]/60 pb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
          Life together
        </p>
        <h1 className="mt-4 text-4xl font-bold uppercase text-[#17261f] sm:text-6xl">
          Gallery
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#66716b]">
          A glimpse into worship, fellowship, and service at Anua Obio.
        </p>
      </header>
      <section className="mx-auto mt-12 max-w-7xl">
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {images.map((src, index) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-2xl border border-[#e4c47d]/50 bg-white p-2 shadow-[0_12px_35px_rgba(25,49,35,0.06)]"
            >
              <div className="relative h-64 overflow-hidden rounded-xl sm:h-72">
                <Image
                  src={src}
                  alt={`Church gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Masonry>
      </section>
    </main>
  );
}

export default Gallery;
