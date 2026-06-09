import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import LabelPill from "@/components/LabelPill";
import FAQList from "@/components/FAQList";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Find answers about Opus Communications services, including branding, advertising, digital marketing, events, exhibitions, production, OVCs, and contact details.";

const faqs = [
  {
    question: "What does Opus Communications do?",
    answer:
      "Opus Communications is a full-service marketing agency providing brand strategy, creative advertising, digital marketing, activation, events, exhibitions, design, branding, production, and content creation.",
  },
  {
    question: "What types of clients do you work with?",
    answer:
      "Opus works with organizations that need professional brand communication, including corporate, financial, industrial, government, consumer, event, and exhibition-focused clients.",
  },
  {
    question: "Do you handle complete 360-degree campaigns?",
    answer:
      "Yes. Opus supports complete campaigns from planning and creative concept to design, production, activation, rollout, and final delivery.",
  },
  {
    question: "Can you manage events and exhibitions?",
    answer:
      "Yes. Opus supports events, stall fabrication, decoration, activation, and on-site coordination, including event experiences through Bortul.",
  },
  {
    question: "Do you provide branding and design services?",
    answer:
      "Yes. Opus creates brand strategy, logos, visual identity, marketing materials, brand guidelines, product design, packaging support, and other design assets.",
  },
  {
    question: "Do you handle digital and social media marketing?",
    answer:
      "Yes. Opus provides digital and social media marketing support, including content planning, creative assets, and digital communication for brand visibility.",
  },
  {
    question: "Do you produce videos, OVCs, and motion graphics?",
    answer:
      "Yes. Opus production work includes OVC editing, final production, graphics, motion graphics, and info video content based on project requirements.",
  },
  {
    question: "How does a new project start?",
    answer:
      "A project starts with understanding your business, audience, market, and goal. From there, Opus plans the creative direction, creates the assets, and prepares the work for delivery.",
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

export const metadata: Metadata = createPageMetadata({
  title: "FAQs",
  description,
  path: "/faqs",
  image: "/images/og/faqs-og.jpg",
  keywords: [
    "Opus Communications FAQ",
    "marketing agency questions",
    "branding agency Dhaka FAQ",
    "event exhibition agency contact",
    "OVC production questions",
  ],
});

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/faqs",
            name: "Opus Communications FAQs",
            description,
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${absoluteUrl("/faqs")}#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
        ]}
      />
      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex h-[374px] w-full items-center justify-center overflow-hidden bg-brand-navy-dark md:h-[540px] lg:h-[680px] xl:h-[calc(100vh-2rem)] xl:rounded-[1.5rem]">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=85"
            alt="Opus Communications team discussion"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/55" />
          <SiteHeader />
          <h1 className="relative z-10 px-6 pt-[76px] text-center font-serif text-[48px] leading-[1.05] tracking-[-0.01em] text-white md:text-[72px] lg:text-[80px]">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-16">
          <div className="flex max-w-[780px] flex-col items-center gap-6 text-center">
            <LabelPill text="FAQs" />
            <h2 className="font-serif text-[42px] leading-[1.1] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              Answers to Common Questions About Opus
            </h2>
          </div>

          <FAQList />

          <Link
            href="/contact"
            className="group flex h-[56px] w-[320px] max-w-full items-center justify-between gap-3 rounded-full bg-[#121b60] pl-6 pr-2 text-[16px] font-bold text-white whitespace-nowrap transition-colors duration-300 hover:bg-black md:w-max md:max-w-none"
          >
            Start a Project
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} className="text-[#121b60]" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
