"use client";

import BackButton from "@/sharedComponents/backButton";
import React, { useRef, useState, useEffect } from "react";

function CongregationHistory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
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
    <div className="font-inter my-24 space-y-6 md:my-32 mx-6 md:mx-32 ">
      <BackButton />
      <div className="flex flex-col gap-y-6 justify-center items-center h-full">
        <div className="text-b text-center md:w-2/3 z-20 w-full">
          <p className="font-bold md:text-4xl text-3xl mb-10 ">
            Brief History of The Church of Christ, 18 Thomas Udoekong Street,
            Anua Obio, Uyo, <br /> Akwa Ibom State, Nigeria
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-bold text-lg">Initial Plan:</p>
          <ul className="list-disc list-inside space-y-2 text-[#888888]">
            <li>
             Brother Emmanuel Inyang, the present Minister of Church of
              Christ 144 Aka Road, Uyo, Akwa Ibom state and Brother Asuquo
              Offiong worshipped together at Church of Christ 144 Aka
              Road. They had a plan to plant a congregation in the vast
              land of Anua Obio, Atan Offot, Obio Etoi and Ikot Obio Obo where
              there existed no congregation of the Lord&apos;s Church. The project
              was to begin whenever Brother Asuquo Offiong moved to his house
              that was strategically located in this area.
            </li>

            <li>
              Brother Emmanuel Silas and Brother Nicholas Udo met with Brother
              Emmanuel Inyang in one of the Christian fora and informed him of
              the need to have a congregation around the said area. Minister
              Emmanuel Inyang relayed his initial plan with Brother Asuquo
              Offiong on the project and advised them to wait until Brother
              Asuquo Offiong moved to his house.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="font-bold text-lg">The Implementation:</p>
          <p className="text-[#888888]">
            {" "}
            Brother Asuquo Offiong had moved to his house by June, 2005 and
            commenced morning prayer sessions with Sisters Margaret Benson,
            Ekaette Effiong Nyong and family and late Sister Uduak Ndon. Brother
            Emmanuel Inyang convened a meeting in his residence with the
            following brethren in attendance:{" "}
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#888888]">
            <li>Brother Emmanuel Inyang</li>
            <li>Brother Emmanuel Silas</li>
            <li>Brother Nicholas Udo</li>
            <li>Brother Asuquo Offiong</li>
          </ul>
          <p className="text-[#888888]">
            The meeting affirmed the need to plan a congregation around, Anua
            Obio and Ikot Obio Obo in Uyo, Akwa Ibom State. A second meeting was
            then convened in Brother Asuquo Offiong&apos;s house (the prospective
            venue) and in attendance were:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#888888]">
            <li>Late Minister Akpan Obot</li>
            <li>Brother Edet O. Akpan</li>
            <li>Brother Emmanuel Silas</li>
            <li>Late Sister Uduak Akpan Obot</li>
            <li>Brother Nicholas Udo</li>
            <li>Brother Asuquo Offiong</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-[#888888]">
            The meeting had resolved to commence the congregation with Sunday
            evening chapel and evangelism. The first Sunday evening chapel was
            on Sunday 23rd October, 2005 with an attendance of twenty-six (26)
            members. <br />
            The first Sunday morning worship started on 20th November, 2005 with
            Forty-two (42) worshippers which Minister Ini Ebong led in Sunday
            School, and Brother Edet O. Akpan gave sermon. A soul was baptized,
            by name Brother Dominic Bassey Abidang.
          </p>
          <p className="text-[#888888]">
            {" "}
            Within one-month, late Minister Akpan Obot was interviewed and
            employed as the minister. He was highly interested in evangelism. He
            collaborated with ministers and brethren from different
            congregations who helped to evangelize the environment. Worthy of
            mention are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#888888]">
            <li>Late Minister Etas Ime of COC Afaha Ube Item, Itu L.G.A</li>
            <li>Minister Idongesit Ekpo of COC Afaha Offot, Uyo L.G.A</li>
            <li>Late Emmanuel Nyong of COC 20 Paul Bassey, Uyo L.G.A</li>
            <li>Minister Edet A. Udo of COC Obio Offot, </li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-[#888888]">
            Late Minister Akpan Obot served the congregation diligently from
            December 2005 to 2007 when he had a fatal accident. Brother Edet O.
            Akpan was appointed Acting Minister on July 2007, thereafter
            confirmed as substantial minister on completion of his ministerial
            training in Preachers&apos; Training Institute, Effiat offot, Uyo. He is
            the minister of the congregation presently. Other brethren that
            contributed to the growth of the congregation at the embryo stage
            are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#888888]">
            <li>Brother (Dr.) Uwem Uwah and wife Sis. Josephine Uwem Uwah </li>
            <li>Brother Sunday Johnson and wife Sis (Prof) Atim Johnson</li>
            <li>Late Brother Benson Thomas and wife Sister Margaret Benson</li>
            <li>Sister Margaret Benson Thomas</li>
            <li>Sister Elizabeth Mfon </li>
            <li>Sister Pius Ating</li>
            <li>Sister Arit E.O. Akpan</li>
            <li>Minister Okon Jonah</li>
            <li>
              Late Brother Edet Archibong Akpan- COC 20 Paul Bassey st, Uyo{" "}
            </li>
            <li>Late Brother Ime Akpan </li>
            <li>Late Brother Emmanuel Ekanem and family</li>
            <li>Late Sister Affiong Akpan Uda</li>
            <p>And others too numerous to mention</p>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-[#888888]">
            The congregation moved to her permanent site at 18 Thomas Udoekong,
            Street, Anua Obio, Uyo LGA with an average member of one hundred and
            ten (110) worshippers on Sunday 1st January, 2012. The auditorium
            for worship has a capacity of 500 worshippers with well purposeful
            built storey building for the preacher.
          </p>

          <p className="text-[#888888]">
            The congregation currently have an average of one hundred and
            seventy (170) worshippers and is blessed with committed and talented
            teachers in addition to those mentioned above and devoted youths.
            Worthy of mention are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#888888]">
            <li>
              Brother (Barr) Effiong Udoekong and wife Sister Grace Udoekong
            </li>
            <li>Brother Okokon Akpan Okon and wife Sister Aniekan Okokon </li>
            <li>Brother Moses James </li>
            <li>Brother Samuel John and wife Sister Enobong Samuel John</li>
            <li>Brother David Charles and wife Sister Anita David Charles</li>
          </ul>
        </div>

        <div className="space-y-2 mt-4 text-[#888888]">
          <p>Bro. Asuquo Offiong </p>
          <p>Church secretary</p>
        </div>
      </div>
    </div>
  );
}

export default CongregationHistory;
