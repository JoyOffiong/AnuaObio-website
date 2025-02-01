"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const images = [
    { img: "/images/img1.jpeg" },
    { img: "/images/img2.jpeg" },
    { img: "/images/img3.jpeg" }
];

function Gallery1() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`font-inter my-20 mt-32 w-11/12 mx-auto transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            {/* Image Container */}
            <div className="w-full flex flex-wrap md:flex-nowrap gap-4 justify-center">
                {images.map((props, index) => {
                    const { img } = props;
                    return (
                        <div key={index} className="w-full md:w-1/3">
                            <Image
                                src={img}
                                alt="Gallery Image"
                                width={400} // Adjust based on preference
                                height={300} // Adjust based on preference
                                className="w-full h-auto"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Button */}
            <div className="mt-6 text-center flex justify-center">
                <button className="bg-black shadow-xl flex items-center text-white gap-2 rounded-lg px-8 py-2 transform hover:scale-110 mt-5 hover:bg-green-900 transition-all duration-300 hover:text-white">
                    <a href="./gallery">See all</a>
                </button>
            </div>
        </div>
    );
}

export default Gallery1;
