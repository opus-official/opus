import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import CaseStudies from "@/components/CaseStudies";
import TrustedBy from "@/components/TrustedBy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, breadcrumbJsonLd, createPageMetadata, webPageJsonLd } from "@/lib/seo";
import { caseStudies } from "@/data/caseStudies";

const description =
  "Explore Opus Communications portfolio work across brand identity, launch support, exhibition stall fabrication, OVC production, and motion graphics.";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies & Portfolio",
  description,
  path: "/case-studies",
  image: "/images/og/case-studies-og.jpg",
  keywords: [
    "Opus Communications portfolio",
    "branding case study Bangladesh",
    "stall fabrication case study",
    "OVC production Bangladesh",
    "motion graphics agency Dhaka",
    "event AV production",
  ],
});

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/case-studies",
            name: "Opus Communications Case Studies",
            description,
          }),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${absoluteUrl("/case-studies")}#portfolio`,
            name: "Opus Communications Portfolio",
            hasPart: caseStudies.map((study) => ({
              "@type": "CreativeWork",
              name: study.title,
              url: absoluteUrl(`/case-studies/${study.slug}`),
            })),
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
        ]}
      />
      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex h-[374px] w-full items-center justify-center overflow-hidden bg-brand-navy-dark md:h-[540px] lg:h-[680px] xl:h-[calc(100vh-2rem)] xl:rounded-[1.5rem]">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
            alt="Opus portfolio project review"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/55" />
          <SiteHeader />
          <h1 className="relative z-10 px-6 pt-[76px] text-center font-serif text-[52px] leading-none tracking-[-0.01em] text-white md:text-[72px] lg:text-[80px]">
            Case Studies
          </h1>
        </div>
      </section>

      <CaseStudies
        label="Our Works"
        title="Our Success Stories"
        description="Discover selected brand, exhibition, production, and communication projects from Opus."
        showViewMore={false}
      />

      <Divider />
      <TrustedBy />
      <Divider />
      <CTA />
      <Footer />
    </main>
  );
}
