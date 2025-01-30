"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faq = [
  {
    panel: "panel1",
    question: "Who are we",
    answer:
      "We are the Church of Christ, the one and only true church established by Christ. Jesus Christ is the Head of the Church and the Church of His Body.",
  },
  {
    panel: "panel2",
    question: "What's your worship like",
    answer:
      "Churches of Christ all over the world follow the scriptural guidelines in line with the mandates set by the Apostles.",
  },
  {
    panel: "panel3",
    question: "Do I need Baptism",
    answer:
      "Yes, you need to be immersed in a body of water (baptized) to begin your journey of salvation.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (

    <div>
        <div className="p-10 md:p-20 my-20 bg-[#f8f8f8]">
            <p className="text-3xl md:text-5xl font-bold text-center">Join us today at Church of Christ 
          <br />  Anua Obio, Uyo</p>
            <div className="text-center justify-center flex flex-row">
            <button className="bg-black flex items-center text-white gap-2 rounded-lg px-3 py-2 transform hover:scale-110 mt-5 hover:bg-green-900 transition-all duration-300 hover:text-white  "> <a href=".//">Learn More</a> </button>
   
            </div>
            
        </div>
  <div className="mb-20 mx-10 md:mx-20">
         <div className="text-center">
        <p className="font-bold text-3xl md:text-5xl mb-14">FAQ</p>
      </div>
      {faq.map((f, idx) => (
        // Using parentheses for implicit return
        <div key={idx}>
          <Accordion
            expanded={expanded === f.panel}
            onChange={handleChange(f.panel)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${f.panel}-content`}
              id={`${f.panel}-header`}
            >
              <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
                {f.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{f.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
    </div>
  
  );
}
