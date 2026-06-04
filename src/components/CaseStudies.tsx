"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LabelPill from "./LabelPill";
import AnimatedButton from "./AnimatedButton";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

interface CaseStudiesProps {
  label?: string;
  title?: ReactNode;
  description?: string;
  showViewMore?: boolean;
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  return isDesktop;
}

// Individual card with scroll-linked scale animation
function CaseStudyCard({
  study,
}: {
  study: CaseStudy;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Card scales from 90% → 100% as it scrolls into place.
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <div
      ref={ref}
      className="relative mb-6 flex justify-center last:mb-0 md:sticky"
      style={{ top: "16px" }}
    >
      <motion.div
        style={isDesktop ? { scale, transformOrigin: "center center" } : undefined}
        className="relative h-[640px] w-full rounded-[2rem] overflow-hidden bg-white shadow-lg md:h-[100vh]"
      >
        {/* Background Image */}
        <img
          src={study.img}
          alt={study.title}
          className="absolute inset-0 w-full h-full bg-white object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

        {/* Top Tags */}
        <div className="absolute top-5 left-5 right-5 flex flex-wrap gap-3 z-20 md:top-6 md:left-6 md:right-auto">
          {study.tags.map((tag) => (
            <div
              key={tag.label}
              className={`px-4 py-2 rounded-full text-[11px] md:text-[12px] font-bold tracking-wide uppercase shadow-sm transition-colors duration-300 ${
                tag.active
                  ? "bg-brand-blue text-white"
                  : "bg-white text-brand-navy-dark"
              }`}
            >
              {tag.label}
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-8 flex flex-col md:flex-row items-stretch md:items-end justify-between gap-5 md:gap-8">
          {/* Glass Card */}
          <div className="w-full md:max-w-[550px] lg:max-w-[600px] rounded-[24px] bg-[#3a3b40]/60 backdrop-blur-[16px] border border-white/10 p-6 md:p-8 flex flex-col gap-5 md:gap-6 shadow-2xl">
            <h3 className="text-[30px] md:text-[40px] font-serif font-normal leading-[1.1] text-white">
              {study.title}
            </h3>
            <p className="text-[16px] leading-[1.6] text-white/90 font-sans font-normal">
              {study.description}
            </p>
          </div>

          {/* Button */}
          <AnimatedButton
            text="View Case Study"
            href={`/case-studies/${study.slug}`}
            className="h-[56px] w-full md:w-max p-[8px] pl-[20px] shrink-0 bg-white"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function CaseStudies({
  label = "CASE STUDIES",
  title = (
    <>
      Creative <span className="italic text-brand-blue">Work</span> Across Brands
    </>
  ),
  description,
  showViewMore = true,
}: CaseStudiesProps) {
  return (
    <section id="case-studies" className="w-full px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LabelPill text={label} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.01em] font-serif text-brand-navy-dark"
          >
            {title}
          </motion.h2>
          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="max-w-[620px] text-[17px] leading-[1.7] text-text-one"
            >
              {description}
            </motion.p>
          ) : null}
        </div>

        {/* Sticky Stacking Cards */}
        <div className="w-full pb-[30px]">
          {caseStudies.slice().reverse().map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* View More Button */}
        {showViewMore ? (
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Link
            href="/case-studies"
            className="group flex h-[56px] w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-[#121b60] pl-6 pr-2 text-[16px] font-medium text-white transition-colors duration-300 hover:bg-black md:w-auto md:max-w-none"
          >
            View More Case Studies
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} className="text-[#121b60]" />
            </div>
          </Link>
        </motion.div>
        ) : null}
      </div>
    </section>
  );
}
