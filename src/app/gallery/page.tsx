import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import LabelPill from "@/components/LabelPill";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import StructuredData from "@/components/StructuredData";
import { breadcrumbJsonLd, createPageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Explore selected Opus Communications gallery work including logos, reports, journals, wooden works, wooden gifts, and sample gifts.";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description,
  path: "/gallery",
  image: "/images/og/home-og.jpg",
  keywords: [
    "Opus Communications gallery",
    "logo design portfolio Bangladesh",
    "annual report design Bangladesh",
    "wooden gift production",
    "corporate gift samples",
  ],
});

type GallerySection = {
  eyebrow: string;
  title: string;
  description?: string;
  images: string[];
  layout?: "logo" | "portrait" | "product";
};

const gallerySections: GallerySection[] = [
  {
    eyebrow: "Logo Design",
    title: "Some of the Logo We Created",
    images: [
      "logo-01.svg",
      "logo-02.svg",
      "logo-03.svg",
      "logo-04.svg",
      "logo-05.svg",
      "logo-06.svg",
    ],
    layout: "logo",
  },
  {
    eyebrow: "Reports & Journals",
    title: "Some of the Annual Report & Quarterly Journal",
    description: "Client: Bangladesh Leasing & Finance Companies Association (BLFCA)",
    images: ["report-01.svg", "report-02.svg", "report-03.svg"],
    layout: "portrait",
  },
  {
    eyebrow: "Factory Work",
    title: "Our Factory & Wooden Works",
    images: ["factory-01.svg", "factory-02.svg", "factory-03.svg", "factory-04.svg"],
    layout: "product",
  },
  {
    eyebrow: "Wood Work",
    title: "Some of The Wooden Gifts",
    description: "Client: EDISON GROUP, CROWN CEMENT, HUAWEI",
    images: [
      "wood-gift-01.svg",
      "wood-gift-02.svg",
      "wood-gift-03.svg",
      "wood-gift-04.svg",
      "wood-gift-05.svg",
    ],
    layout: "product",
  },
  {
    eyebrow: "Sample Gifts",
    title: "Some of the Sample Gifts",
    images: [
      "sample-gift-01.svg",
      "sample-gift-02.svg",
      "sample-gift-03.svg",
      "sample-gift-04.svg",
      "sample-gift-05.svg",
      "sample-gift-06.svg",
      "sample-gift-07.svg",
      "sample-gift-08.svg",
      "sample-gift-09.svg",
      "sample-gift-10.svg",
      "sample-gift-11.svg",
    ],
    layout: "product",
  },
];

function getGridClass(layout: GallerySection["layout"], count: number) {
  if (layout === "portrait") {
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  }

  if (count <= 4) {
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  }

  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
}

function getCardClass(layout: GallerySection["layout"]) {
  if (layout === "portrait") {
    return "aspect-[3/4]";
  }

  if (layout === "logo") {
    return "aspect-[4/3]";
  }

  return "aspect-[4/3]";
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/gallery",
            name: "Opus Communications Gallery",
            description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
        ]}
      />

      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex h-[420px] w-full items-center justify-center overflow-hidden bg-brand-navy-dark md:h-[560px] lg:h-[680px] xl:h-[calc(100vh-2rem)] xl:rounded-[1.5rem]">
          <img
            src="/images/services-bg.avif"
            alt="Opus Communications gallery"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/68" />
          <SiteHeader />
          <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center gap-6 px-6 pt-[76px] text-center">
            <LabelPill text="Gallery" />
            <h1 className="font-serif text-[56px] leading-none tracking-[-0.01em] text-white md:text-[80px] lg:text-[104px]">
              Selected <span className="italic">Creative Work</span>
            </h1>
            <p className="max-w-[680px] text-[17px] font-medium leading-[1.7] text-white/85 md:text-[19px]">
              A look at selected logos, reports, wooden works, corporate gifts, and sample production work from Opus.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14 lg:gap-20">
          {gallerySections.map((section) => (
            <section
              key={section.title}
              className="overflow-hidden rounded-[28px] bg-white p-5 shadow-[0_8px_30px_rgba(13,27,42,0.04)] md:p-8 lg:rounded-[32px] lg:p-10"
            >
              <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
                <div className="flex max-w-[760px] flex-col gap-4">
                  <LabelPill text={section.eyebrow} />
                  <h2 className="font-serif text-[40px] leading-[1.08] tracking-[-0.01em] text-brand-navy-dark md:text-[56px]">
                    {section.title}
                  </h2>
                </div>
                {section.description ? (
                  <p className="max-w-[420px] text-[16px] font-semibold leading-[1.5] text-text-one md:text-right">
                    {section.description}
                  </p>
                ) : null}
              </div>

              <div className={`grid gap-5 md:gap-6 ${getGridClass(section.layout, section.images.length)}`}>
                {section.images.map((image, index) => (
                  <div
                    key={image}
                    className={`group relative flex ${getCardClass(section.layout)} items-center justify-center overflow-hidden rounded-[20px] bg-[#eef3f8] p-4 transition-transform duration-300 hover:-translate-y-1 md:p-5`}
                  >
                    <img
                      src={`/gallery/${image}`}
                      alt={`${section.title} ${index + 1}`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Divider />
      <CTA />
      <Footer />
    </main>
  );
}
