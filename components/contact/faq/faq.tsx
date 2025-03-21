"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  const faqItems = [
    {
      question: "What methods of payments are supported?",
      answer:
        "Cras efer ac dui eu risus. Proin amet tortor nisi et pharetra ultricies tincidunt. Eu et molestie est sit id massa. Mattis, porttitor risque sed elit vel egestas. Sagittis, volutpat sem sit.",
    },
    {
      question: "Can I cancel at anytime?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do I get a receipt for my purchase?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Which license do I need?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do I get access to a theme I purchased?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Les questions récurrentes</h2>
        <p className="text-muted text-sm mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Section FAQ */}
        <div className="lg:w-3/5">
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} aria-label={item.question} title={item.question}>
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Section Map */}
        <div className="lg:w-2/5">
          <div className="rounded-lg overflow-hidden border border-gray-200 h-64">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.95373631531614!3d-37.816279179751826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfc9f7897%3A0x1d96c3b39d2c780!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1633114703073!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
