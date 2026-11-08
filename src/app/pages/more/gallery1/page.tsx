import Image from "next/image";
import Link from "next/link";

const images = ["/images/img1.jpeg", "/images/img2.jpeg", "/images/img3.jpeg"];

function GalleryPreview() {
  return (
    <section className="bg-[#f7f8f5] px-6 pb-16 pt-28 font-inter sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4ca233]">
              Moments together
            </p>
            <h1 className="mt-3 text-3xl font-bold text-[#17261f] sm:text-5xl">
              Church life in pictures
            </h1>
          </div>
          <Link
            href="/pages/more/gallery"
            className="w-fit rounded-full border border-[#e4c47d] px-5 py-3 text-sm font-bold text-[#17261f] transition hover:bg-[#e4c47d]"
          >
            View full gallery
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={src}
              className="group relative h-72 overflow-hidden rounded-3xl border border-[#e4c47d]/60 bg-white p-2 shadow-[0_12px_35px_rgba(25,49,35,0.06)]"
            >
              <Image
                src={src}
                alt={`Church gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-2xl object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
