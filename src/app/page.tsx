import type { Metadata } from "next";
import Hero from "@/components/Hero";
import IntroStats from "@/components/IntroStats";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import OurApproach from "@/components/OurApproach";
import OurGoal from "@/components/OurGoal";
import TrustedBy from "@/components/TrustedBy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import StructuredData from "@/components/StructuredData";
import { createPageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Opus Communications is a full-service marketing agency in Dhaka for brand strategy, advertising, digital marketing, events, exhibitions, and production.";

export const metadata: Metadata = createPageMetadata({
  title: "Opus Communications | Full-Service Marketing Agency in Dhaka",
  description,
  path: "/",
  image: "/images/og/home-og.jpg",
  keywords: [
    "marketing agency Dhaka",
    "advertising agency Bangladesh",
    "brand strategy agency",
    "event management agency",
    "exhibition stall fabrication",
    "digital marketing agency",
    "Opus Communications",
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <StructuredData
        data={webPageJsonLd({
          path: "/",
          name: "Opus Communications",
          description,
        })}
      />
      <Hero />
      <IntroStats />
      <Divider />
      <Services />
      <Divider />
      <CaseStudies />
      <Divider />
      <OurGoal />
      <Divider />
      <OurApproach />
      <Divider />
      <TrustedBy />
      <Divider />
      <CTA />
      <Footer />
    </main>
  );
}
