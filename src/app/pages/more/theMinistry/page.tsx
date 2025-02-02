"use client"

import React , { useRef, useState , useEffect} from "react";

function OurMinstry() {

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
            The Ministry
          </p>
        </div>  

        <div className="md:space-y-24 space-y-12">
          <div className={`font-inter transform transition-all duration-700 flex md:flex-row flex-col items-center space-y-4 w-full md:w-1/2  mx-auto ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 flex md:flex-row flex-col items-center space-y-4 w-full md:w-1/2  mx-auto"
      }`}      ref={sectionRef}
          >
              <div >
                <div className="md:w-10/12 w-full text-center md:text-right">
                <em className="text-[#333333]  font-semibold  text-xl md:text-2xl">
              Our Ministries are structured based on the work of church which
              includes:
            </em>
                </div>
         
              </div>
            
            <div className="text-[#757575] flex md:w-1/2 justify-center text-center md:text-left w-full flex-col gap-y-2 font-medium text-base md:text-xl">
              <p>Evangelism</p>
              <p>Edification</p>
              <p>Benevolence</p>
            </div>
          </div>

<div className={` font-inter transform transition-all space-y-8 duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
<div className="space-y-4 ">
            <p className="text-[#333333] text-xl md:text-2xl font-bold text-center">Evangelism</p>

            <p className="text-[#666666] text-base font-medium">
              We are all about reaching out to people in different places,
              whether it&apos;s hospitals, prisons, or even overseas, to spread a
              message of hope and love. We make it a point to connect with
              everyone who visits or contacts us, making sure they feel at home
              and supported on their salvation journey. To help new believers
              grow, we usually have a Bible study program that helps them dive
              deeper into what Scripture has to say. On top of that, we&apos;ve
              created an exciting outreach program designed to engage with our
              community and welcome those who are searching for answers. Our
              goal is to share the good news and help everyone grow in their
              faith.{" "}
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-[#333333] text-xl md:text-2xl font-bold text-center">Edification</p>

            <p className="text-[#666666] text-base font-medium">
            The Church of Christ Abua Obio is dedicated to the edification of its congregation through various programs and initiatives aimed at spiritual growth and maturity. The church actively mobilizes men, women, and youth to fulfill their God-given roles both at home and in the church. Through tailored gatherings and events, the church fosters leadership development among men and guides women in fulfilling their divine purpose. Youth programs are designed to nurture the next generation into becoming the Christian individuals that God desires. Additionally, the church organizes prayer meetings, ensuring that members in need receive support through prayer. The church also maintains comprehensive financial and administrative records to ensure accountability and transparency. By providing a well-equipped worship space and facilitating essential health checks, the Church of Christ Abua Obio is committed to the holistic growth and well-being of its members, promoting a strong and supportive faith community.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[#333333] text-xl md:text-2xl font-bold text-center">Benevolence</p>

            <p className="text-[#666666] text-base font-medium">
            The Church of Christ Abua Obio really focuses on helping those in need, both within our church and in the wider community. We always seek to help those in need through various means, doing what we can to support people facing tough times. We also make an effort to visit and encourage those who might be feeling down or struggling physically. It&apos;s all about coming together to lift each other up and share hope and faith with everyone who could use a little extra help.
            </p>
          </div>

          <div className=" space-y-10 justify-center">
            <p className="text-[#333333] text-xl md:text-2xl font-bold  text-center">The Plan of salvation
            </p>

            <p className="text-[#666666] w-full mx-auto md:w-7/12 text-xl font-medium text-center ">
            We&apos;ve left this here because we will always seek to share goodness with you, so
            </p>

            <div>
            <p className="text-[#666666] font-medium text-center text-xl">
                Hear the Gospel <span className="font-bold">– Romans 10:17</span>
            </p>
            <p className="text-[#666666] font-medium text-center text-xl">
                Believe the Gospel <span className="font-bold">—Hebrews 11:6</span>
            </p>
            <p className="text-[#666666] font-medium text-center text-xl">
            Repent of your Sins <span className="font-bold">—-Luke 13:3</span>
            </p>
            <p className="text-[#666666] font-medium text-center text-xl">
            Confess Christ <span className="font-bold">—- Matt 10:32</span>
            </p>
            <p className="text-[#666666] font-medium text-center text-xl">
            Be Baptized <span className="font-bold">—- Romans 6:3-4</span>
            </p>
            </div>
            
          </div>
</div>
          
        </div>
      </div>
    </div>
  );
}

export default OurMinstry;

