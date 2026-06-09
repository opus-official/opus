"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What does Opus Communications do?",
    answer:
      "Opus Communications is a full-service marketing agency providing brand strategy, creative advertising, digital marketing, activation, events, exhibitions, design, branding, production, and content creation.",
  },
  {
    question: "What types of clients do you work with?",
    answer:
      "We work with organizations that need professional brand communication, including corporate, financial, industrial, government, consumer, event, and exhibition-focused clients.",
  },
  {
    question: "Do you handle complete 360-degree campaigns?",
    answer:
      "Yes. Opus supports complete campaigns from planning and creative concept to design, production, activation, rollout, and final delivery.",
  },
  {
    question: "Can you manage events and exhibitions?",
    answer:
      "Yes. Through event and exhibition capabilities, including Bortul for experiences, we support events, stall fabrication, decoration, activation, and on-site coordination.",
  },
  {
    question: "Do you provide branding and design services?",
    answer:
      "Yes. We create brand strategy, logos, visual identity, marketing materials, brand guidelines, product design, packaging support, and other design assets.",
  },
  {
    question: "Do you handle digital and social media marketing?",
    answer:
      "Yes. Opus provides digital and social media marketing support, including content planning, creative assets, and digital communication for brand visibility.",
  },
  {
    question: "Do you produce videos, OVCs, and motion graphics?",
    answer:
      "Yes. Our production work includes OVC editing, final production, graphics, motion graphics, and info video content based on the project requirements.",
  },
  {
    question: "How does a new project start?",
    answer:
      "A project starts with understanding your business, audience, market, and goal. From there, we plan the creative direction, create the assets, and prepare the work for delivery.",
  },
  {
    question: "Can you support long-term brand communication?",
    answer:
      "Yes. Opus can support brands beyond a single project through ongoing marketing communication, creative production, digital content, events, and campaign work.",
  },
  {
    question: "How can we contact Opus?",
    answer:
      "You can contact Opus Communications at opusbd1@gmail.com, or call +880 1711 387708 and +880 1911 484826.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex w-full max-w-[860px] flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_30px_rgba(13,27,42,0.02)]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex min-h-[76px] w-full items-center justify-between gap-5 px-5 py-4 text-left md:min-h-[86px] md:px-8"
            >
              <span className="font-serif text-[24px] leading-[1.15] text-brand-navy-dark md:text-[30px]">
                {faq.question}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                <Plus
                  size={22}
                  className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-[16px] leading-[1.7] text-text-one md:px-8 md:pb-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
