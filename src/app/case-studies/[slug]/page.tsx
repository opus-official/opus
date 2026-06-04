import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  createPageMetadata,
  siteConfig,
  webPageJsonLd,
} from "@/lib/seo";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {};
  }

  return createPageMetadata({
    title: study.shortTitle,
    description: study.description,
    path: `/case-studies/${study.slug}`,
    image: "/images/og/case-studies-og.jpg",
    keywords: [
      study.service,
      study.client,
      "Opus Communications case study",
      "creative agency portfolio Bangladesh",
    ],
  });
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <StructuredData
        data={[
          webPageJsonLd({
            path: `/case-studies/${study.slug}`,
            name: study.title,
            description: study.description,
          }),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `${absoluteUrl(`/case-studies/${study.slug}`)}#case-study`,
            name: study.title,
            description: study.description,
            image: absoluteUrl(study.img),
            creator: {
              "@id": `${siteConfig.url}/#organization`,
            },
            about: study.service,
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: study.shortTitle, path: `/case-studies/${study.slug}` },
          ]),
        ]}
      />

      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex min-h-[760px] w-full items-end overflow-hidden bg-brand-navy-dark xl:rounded-[1.5rem]">
          <img
            src={study.img}
            alt={study.title}
            className="absolute inset-0 h-full w-full bg-white object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/65" />
          <SiteHeader />

          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 pb-12 pt-[130px] lg:px-8 lg:pb-16">
            <Link
              href="/case-studies"
              className="flex w-max items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[14px] font-bold text-white backdrop-blur-[12px] transition-colors hover:bg-white/16"
            >
              <ArrowLeft size={16} />
              Back to Case Studies
            </Link>

            <div className="max-w-[980px]">
              <h1 className="font-serif text-[48px] leading-[1.04] tracking-[-0.01em] text-white md:text-[72px] lg:text-[88px]">
                {study.title}
              </h1>
            </div>

            <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.10] p-5 shadow-2xl backdrop-blur-[16px] md:grid-cols-4 md:p-6">
              {[
                ["Service", study.service],
                ["Client", study.client],
                ["Duration", study.duration],
                ["Date", study.date],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-[12px] font-bold uppercase tracking-wide text-white/55">
                    {label}
                  </span>
                  <span className="text-[16px] font-bold text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <aside className="rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(13,27,42,0.04)] lg:sticky lg:top-8 lg:rounded-[32px] lg:p-8">
            <img
              src={study.img}
              alt={study.shortTitle}
              className="mb-8 h-[300px] w-full rounded-[22px] bg-white object-cover"
            />
            <blockquote className="font-serif text-[30px] leading-[1.15] text-brand-navy-dark">
              &ldquo;{study.quote}&rdquo;
            </blockquote>
            <div className="mt-8 border-t border-brand-navy-dark/10 pt-6">
              <p className="text-[18px] font-bold text-brand-navy-dark">
                {study.quoteAuthor}
              </p>
              <p className="mt-1 text-[14px] font-semibold text-text-one/70">
                {study.quoteRole}
              </p>
            </div>
          </aside>

          <article className="flex flex-col gap-14">
            <section className="rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(13,27,42,0.04)] lg:rounded-[32px] lg:p-10">
              <p className="text-[14px] font-bold uppercase tracking-wide text-brand-blue">
                The Challenge
              </p>
              <h2 className="mt-4 font-serif text-[42px] leading-[1.08] tracking-[-0.01em] text-brand-navy-dark md:text-[56px]">
                {study.challengeTitle}
              </h2>
              <p className="mt-7 text-[17px] leading-[1.8] text-text-one">
                {study.challenge}
              </p>
            </section>

            <section>
              <p className="text-[14px] font-bold uppercase tracking-wide text-brand-blue">
                Our Approach
              </p>
              <h2 className="mt-4 font-serif text-[42px] leading-[1.08] tracking-[-0.01em] text-brand-navy-dark md:text-[56px]">
                {study.approachTitle}
              </h2>

              <div className="mt-8 grid gap-5">
                {study.approach.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(13,27,42,0.04)] lg:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[15px] font-bold text-white">
                        {index + 1}
                      </span>
                      <h3 className="font-serif text-[30px] leading-[1.1] text-brand-navy-dark">
                        {step.title}
                      </h3>
                    </div>
                    <ul className="mt-6 flex flex-col gap-3 text-[16px] leading-[1.7] text-text-one">
                      {step.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] bg-brand-navy-muted p-6 text-white shadow-2xl lg:rounded-[32px] lg:p-10">
              <p className="text-[14px] font-bold uppercase tracking-wide text-white/60">
                The Results
              </p>
              <h2 className="mt-4 font-serif text-[42px] leading-[1.08] tracking-[-0.01em] text-white md:text-[56px]">
                {study.metric}
              </h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {study.results.map((result) => (
                  <li
                    key={result}
                    className="rounded-[20px] border border-white/10 bg-white/[0.08] p-5 text-[16px] font-semibold leading-[1.55] text-white/90"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(13,27,42,0.04)] lg:rounded-[32px] lg:p-10">
              <p className="text-[14px] font-bold uppercase tracking-wide text-brand-blue">
                Testimonial
              </p>
              <blockquote className="mt-5 font-serif text-[34px] leading-[1.16] text-brand-navy-dark md:text-[44px]">
                &ldquo;{study.testimonial}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="text-[18px] font-bold text-brand-navy-dark">
                  {study.quoteAuthor}
                </p>
                <p className="mt-1 text-[14px] font-semibold text-text-one/70">
                  {study.quoteRole}
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="dark-contrast relative mx-auto flex max-w-[1200px] flex-col gap-8 overflow-hidden rounded-[28px] bg-brand-navy-muted p-6 shadow-2xl md:p-10 lg:rounded-[32px] lg:p-12">
          <img
            src={study.img}
            alt=""
            className="absolute inset-0 h-full w-full bg-white object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[#080e29]/70" />
          <div className="relative z-10 max-w-[780px]">
            <h2 className="font-serif text-[42px] leading-[1.08] tracking-[-0.01em] text-white md:text-[60px]">
              {study.ctaTitle}
            </h2>
            <p className="mt-5 text-[17px] font-medium leading-[1.7] text-white/85">
              {study.ctaText}
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 flex h-[58px] w-full max-w-[260px] items-center justify-center gap-3 rounded-full bg-white px-7 text-[16px] font-bold text-brand-navy-dark transition-colors hover:bg-[#ebf1f8]"
          >
            Start a Project
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy-dark text-white">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
