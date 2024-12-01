"use client";

import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

type Props = {};

function Gallery({}: Props) {
  const images = [
    { img: "/images/img1.jpeg" },
    { img: "/images/img2.jpeg" },
    { img: "/images/img3.jpeg" },
    { img: "/images/img4.jpeg" },
    { img: "/images/img5.jpeg" },
    { img: "/images/img6.jpeg" },
    { img: "/images/img7.jpeg" },
  ];

  return (
    <div>
      <div className="text-center text-24 font-bold py-10 m-8 ">
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="flex"
          columnClassName="masonry-column"
        >
          {images.map((props, index) => {
            const { img } = props;
            return (
              <div key={index} className="overflow-hidden">
                <div className="relative h-64 m-4">
                  <Image
                    src={img}
                    alt="Gallery Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}

export default Gallery;
