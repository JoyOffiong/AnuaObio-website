"use client"

import React , { useRef, useState , useEffect} from "react";


function TheChurch() {

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
    <div className="font-inter mt-16">
      <div className="px-8 md:px-32 py-16">

        <div className={`font-inter text-center transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}   ref={sectionRef}        >
          <p className="font-bold md:text-4xl text-3xl mb-10 ">
           Coming Soon...
          </p>
        </div>
        </div>
        </div>
  )
}

export default TheChurch
