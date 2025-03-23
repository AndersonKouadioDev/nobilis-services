"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Plus } from "lucide-react";

export default function FaqSolution() {
  const faqItems = [
    {
      question: "Des solutions adaptées à votre budget",
      answer:
        "Cras efer ac dui eu risus. Proin amet tortor nisi et pharetra ultricies tincidunt. Eu et molestie est sit id massa. Mattis, porttitor risque sed elit vel egestas. Sagittis, volutpat sem sit.",
    },
    {
      question: "Un accompagnement sur mesure",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // {
    //   question: "Une expertise locale et fiable",
    //   answer:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];

  return (
    <div>
      <div className="text-center flex flex-col justify-center gap-6 bg-[#E6EEF5] py-8 w-full mb-8">
        <h2 className="text-2xl font-semibold">Pourquoi choisir NOBILIS SOLUTION ?</h2>
        <p className="text-black text-xs mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="max-w-xl mx-auto flex justify-center text-black font-semibold gap-8">
        {/* Section FAQ */}
        <div>
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} aria-label={item.question} title={item.question} indicator={<Plus color="black"/>}>
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
