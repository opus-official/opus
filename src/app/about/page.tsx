import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import LabelPill from "@/components/LabelPill";
import AnimatedButton from "@/components/AnimatedButton";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import StructuredData from "@/components/StructuredData";
import CountUpStatCard from "@/components/CountUpStatCard";
import { breadcrumbJsonLd, createPageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Learn about Opus Communications, a full-service marketing, advertising, branding, event, exhibition, digital, and production agency founded in 2012.";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description,
  path: "/about",
  image: "/images/og/about-og.jpg",
  keywords: [
    "about Opus Communications",
    "advertising agency Dhaka",
    "marketing communication agency",
    "branding agency Bangladesh",
    "creative agency Dhaka",
  ],
});

const stats = [
  {
    value: "14+",
    countTo: 14,
    suffix: "+",
    description: "Years of marketing communication, creative strategy, and production experience.",
  },
  {
    value: "360",
    countTo: 360,
    suffix: "°",
    description: "Degree agency support across brand, creative, digital, activation, event, and exhibition work.",
  },
  {
    value: "2012",
    countTo: 2012,
    description: "The year Opus Communications began its journey with a skilled professional team.",
  },
  {
    value: "Full",
    description: "Service capability from idea and design to production, rollout, and brand support.",
  },
];

const team = [
  {
    name: "Strategy Team",
    role: "Brand Strategy & Consultancy",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Creative Team",
    role: "Design, Advertising & Brand Communication",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Production Team",
    role: "Content, OVC, Motion Graphics & Final Output",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/about",
            name: "About Opus Communications",
            description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />
      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex h-[374px] w-full items-center justify-center overflow-hidden bg-brand-navy-dark md:h-[540px] lg:h-[680px] xl:h-[calc(100vh-2rem)] xl:rounded-[1.5rem]">
          <img
            src="/images/about-hero-meeting-room.jpg"
            alt="Opus Communications team workshop"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/55" />
          <SiteHeader />
          <h1 className="relative z-10 px-6 pt-[76px] text-center font-serif text-[52px] leading-none tracking-[-0.01em] text-white md:text-[72px] lg:text-[80px]">
            About Us
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.68fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-10">
            <LabelPill text="Opus Communications" />
            <h2 className="font-serif text-[44px] leading-[1.08] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              Who We Are
            </h2>
          </div>

          <div className="flex max-w-[760px] flex-col gap-7 text-[18px] leading-[1.5] text-text-one md:text-[22px] md:leading-[1.42]">
            <p>
              Opus is a Latin word meaning an artistic work, especially one on a large scale. Opus Communications carries that idea into every brand, campaign, event, exhibition, and production assignment we create.
            </p>
            <p>
              We started our journey on July 1, 2012, with a dynamic professional team and a focus on serving the entire brand. Today, Opus works across logo design, marketing materials, brand guidelines, product design, packaging, e-commerce, event management, exhibition work, promotional items, and production.
            </p>
            <p className="font-bold text-text-one">
              New look, same <span className="italic text-brand-blue">vision</span> - welcome to the future of Opus Communications.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] shadow-sm lg:min-h-[620px] lg:rounded-[32px]">
            <img
              src="/images/goal-img.jpg"
              alt="Opus advisory conversation"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-[28px] bg-white p-6 lg:rounded-[32px] lg:p-10">
            <LabelPill text="Our Mission" />
            <h2 className="font-serif text-[42px] leading-[1.08] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              Built for <span className="italic text-brand-blue">Brand Communication</span>
            </h2>
            <div className="flex flex-col gap-6 text-[17px] leading-[1.7] text-text-one">
              <p>
                Our mission is to be a pioneer in advertising and visual communication by delivering tailored creative services that answer each client&apos;s unique brand needs.
              </p>
              <p>
                We work with a result-oriented mindset, combining consultation, strategy, design, production, and execution so brands can move from idea to impact with confidence.
              </p>
            </div>
            <AnimatedButton
              text="View Our Services"
              href="/services"
              delay={0.15}
              className="mt-4"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 lg:gap-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="flex flex-col gap-6">
              <LabelPill text="Our Vision" />
              <h2 className="max-w-[900px] font-serif text-[42px] leading-[1.12] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
                We aim to be <span className="italic text-brand-blue">Pioneer One</span> in advertising and visual communication, with client commitment built into every creative decision.
              </h2>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] shadow-sm lg:min-h-[420px] lg:rounded-[32px]">
              <img
                src="/images/services-bg.avif"
                alt="Opus business planning session"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <CountUpStatCard key={stat.value} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:gap-16">
          <div className="flex max-w-[760px] flex-col items-center gap-6 text-center">
            <LabelPill text="Our Teams" />
            <h2 className="font-serif text-[42px] leading-[1.1] tracking-[-0.01em] text-brand-navy-dark md:text-[56px] lg:text-[64px]">
              The <span className="italic">People</span> Behind the Work
            </h2>
            <p className="text-[17px] leading-[1.7] text-text-one">
              Our professional teams bring strategy, creativity, technical production, and execution together so every project can move from concept to delivery.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className="group relative h-[470px] overflow-hidden rounded-[28px] shadow-sm md:h-[520px] lg:rounded-[32px]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/10 bg-[#2a2c33]/70 p-6 text-center text-white shadow-2xl backdrop-blur-md">
                  <h3 className="font-serif text-[32px] leading-none text-white">
                    {person.name}
                  </h3>
                  <p className="mt-4 text-[15px] font-bold text-white/85">
                    {person.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
