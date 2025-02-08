"use client"


import React, {useRef, useEffect, useState} from 'react'

function OurWorship() {

  const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);
    
          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              },
              { threshold: 0.8 }
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
    <div >
    <div className="mt-28 mb-20 font-inter">
      <div className="text-left mx-auto px-6 md:w-9/12 w-full">
        <div ref={sectionRef} className={`font-inter text-left transform transition-all duration-700 ${
        isVisible ?"opacity-0 translate-y-10": "opacity-100 translate-y-0" 
      }`} >
          <div>
          <p className="font-bold  px-0 text-2xl md:text-5xl mb-6">
            What&apos;s our worship like?
          </p>

          <div className="text-[#888888] font-medium text-xl">
            <p>
              We use only what we find in the New Testament to guide our group
              worship
            </p>

            <div>
              <ul className="list-disc text-xl pl-6">
                <li>Preaching and Teaching the Word of God</li>
                <li>Worship in Song</li>
                <li>Prayers To God</li>
                <li>Communion - The Lord&apos;s Supper</li>
                <li>Giving As We Have Been Blessed</li>
                <li>Edification</li>
                <li>Godly Behaviors</li>
              </ul>
              <p>
                We worship God as individuals, offering our bodies as living
                sacrifices, holy and pleasing to God. However, our collective
                worship must contain these elements.{" "}
              </p>
              <p className="pt-6">scroll down to dive deeper</p>
            </div>
          </div>
          </div>
          

          <div className="space-y-6 mt-6">
            <div className="relative shadow-custom-xl rounded-3xl p-8 space-y-6  text-center ">
              <p className="text-2xl font-semibold text-center ">
                We Focus on Preaching and Teaching the Word:
              </p>
              <div className="text-lightText text-left text-2xl space-y-6 font-medium leading-normal">
                <p className="text-center">
                  <em className="text-xl text-center">
                    "How sweet are Thy words to my taste! Yea, sweeter than
                    honey to my mouth...Thy word is a lamp to my feet, and a
                    light to my path." (Psalm 119:103, 105)
                  </em>
                </p>

                <p>
                  Understanding God&apos;s Word is vital for every Christian,
                  which is why preaching and teaching are central to our Sunday
                  worship teaching sessions from{" "}
                  <span className="font-bold text-black">
                    {" "}
                    9:00 AM to 10:00 AM
                  </span>{" "}
                  .{" "}
                </p>

                <p>
                  As someone wisely said, "Everyone ought to love the Bible and
                  live by its teachings." We prioritize studying God&apos;s Word
                  in our worship and invite you to bring your Bible. If you
                  don&apos;t have one, we&apos;ll provide it. Join us and
                  experience the power of His Word!
                </p>
              </div>
            </div>
            <div className="relative shadow-custom-xl rounded-3xl p-8 space-y-6  text-center ">
              <p className="text-2xl font-semibold text-center ">
                We Create Time for Prayers to God:
              </p>
              <div className="text-lightText text-left text-2xl space-y-6 font-medium leading-normal">
                <p>
                  God speaks to us through the Bible, while we communicate with
                  Him through prayer. The Bible emphasizes the importance of
                  expressing our devotion to God. As the apostle Paul wrote:
                </p>
                <p className="text-center">
                  <em className="text-xl text-center">
                    {" "}
                    "Be anxious for nothing, but in everything by prayer and
                    supplication with thanksgiving let your requests be made
                    known to God." (Philippians 4:6)
                  </em>
                </p>

                <p>
                  Prayer is essential in our daily lives and vital during our
                  worship assemblies. Acts 2:42 states:{" "}
                </p>
                <p className="text-center">
                  <em className="text-xl">
                    "And they were continually devoting themselves to the
                    apostles&apos; teaching and to fellowship, to the breaking
                    of bread and to prayer."
                  </em>
                </p>

                <p>
                  Prayer is an integral part of our Sunday worship service from
                  <span className="font-bold text-black">
                    {" "}
                    10:00 AM to 10:30 AM
                  </span>{" "}
                  .{" "}
                </p>
              </div>
            </div>
            <div className="relative shadow-custom-xl rounded-3xl p-8 space-y-6  text-center ">
              <p className="text-2xl font-semibold text-center ">
                Worship in Song:
              </p>
              <div className="text-lightText text-left text-2xl space-y-6 font-medium leading-normal">
                <p>
                  When we gather for worship, we speak "to one another in psalms
                  and hymns and spiritual songs, singing with thankfulness in
                  our hearts to God"
                  <em> (Ephesians 5:19; Colossians 3:16)</em> .{" "}
                </p>

                <p>
                  We follow the example of Jesus and the instructions of the New
                  Testament{" "}
                  <em>(Matthew 26:30; Ephesians 5:19; James 5:13) </em> by
                  uniting our voices in songs of praise and devotion to God. We
                  sing without musical instruments to honor God by worshiping
                  Him in the manner He has directed us.
                </p>
              </div>
            </div>
            <div className="relative shadow-custom-xl rounded-3xl p-8 space-y-6  text-center ">
              <p className="text-2xl font-semibold text-center ">
                We Give As We Have Been Blessed:
              </p>
              <div className="text-lightText text-left text-2xl space-y-6 font-medium leading-normal">
                <p>
                  The church collects funds to support its mission, following
                  Paul&apos;s guidance: "On the first day of every week, let
                  each one of you set aside and save."
                </p>

                <p>
                  Each Sunday, we set aside time from{" "}
                  <span className="font-bold text-black">
                    11:00 AM to 11:15 AM
                  </span>{" "}
                  for our members to contribute as an act of worship, returning
                  a portion of God's blessings. If you are visiting, please
                  don&apos;t feel obligated to contribute. You can simply pass
                  the collection plate along. Your presence is what truly
                  matters to us!
                </p>
              </div>
            </div>
            <div className="relative shadow-custom-xl rounded-3xl p-8 space-y-6  text-center ">
              <p className="text-2xl font-semibold text-center ">
                Communion - The Lord's Supper:
              </p>
              <div className="text-lightText text-left text-2xl space-y-6 font-medium leading-normal">
                <p>
                  The night before His sacrifice, Jesus established a memorial
                  known as "communion" or the "Lord's Supper"{" "}
                  <em>(1 Corinthians 10:16; 1 Corinthians 11:20).</em> We follow
                  His example and that of the apostles and early Christians{" "}
                  <em>(1 Corinthians 11:23-29).</em>
                </p>

                <p>
                  Every first day of the week <em>(Acts 20:7)</em>, in our
                  worship service from{" "}
                  <b className="text-black">11:15 AM to 11:45 AM</b> we remember
                  Jesus&apos;{" "}
                  <em>(1 Corinthians 10:16; 1 Corinthians 11:20).</em> death by
                  eating unleavened bread, symbolizing His body, and drinking
                  grape juice, representing His blood shed for our forgiveness{" "}
                  <em>(Matthew 26:26-28).</em>
                  The Lord's Supper powerfully reminds us of God's great love
                  and the incredible sacrifice Jesus made for our salvation.
                </p>
              </div>
            </div>
            <div className="relative shadow-custom-xl rounded-3xl p-8 space-y-6  text-center ">
              <p className="text-2xl font-semibold text-center ">
              Godly Behaviors:
              </p>
              <div className="text-lightText text-left text-2xl space-y-6 font-medium leading-normal">
                <p>
                In addition to the elements of our worship mentioned earlier, there are specific behaviors that Christians are expected to demonstrate when they gather together, whether during worship services or at any other time. These include: 
                </p>

                <div>
                  <ul>
                    <li>- Exhorting one another (Hebrews 10:25)</li>
                    <li>- Building each other up (1 Thessalonians 5:11) </li>
                    <li>- Having fellowship with one another (1 John 1:7) </li>
                    <li>- Stirring one another to good works (Hebrews 10:24) </li>
                    <li>- Encouraging one another daily (Hebrews 3:13)</li>
                    <li>- Edifying each other (Romans 15:2) </li>
                    <li>- Speaking the truth in love (Ephesians 4:15)</li>
                  </ul>
                  
                </div>
                <p>These practices are essential for fostering a supportive and loving Christian community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default OurWorship;
