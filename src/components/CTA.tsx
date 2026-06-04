"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";

export default function CTA() {
  return (
    <section id="contact" className="relative w-full pt-10">
      {/* Background Split */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-surface-main" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand-navy-muted" />

      <div className="relative w-full lg:mx-auto lg:max-w-[calc(100%-4rem)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[560px] w-full overflow-hidden rounded-none shadow-2xl group md:h-[600px] md:rounded-[28px] lg:h-[700px] lg:rounded-[32px]"
        >
          <img
            src="/images/cta-bg-2.jpg"
            alt="CTA Background"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-navy-dark/40" />

          {/* Glass Card Overlay */}
          <div className="absolute inset-x-4 bottom-6 w-auto max-w-none translate-y-0 xl:top-100 xl:left-34 xl:bottom-auto xl:inset-x-auto xl:w-[564px] xl:max-w-[480px] xl:-translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative rounded-[12px] border border-white/10 bg-white/12 p-[24px] shadow-2xl backdrop-blur-[16px]"
            >
              <div className="flex flex-col gap-6">
                <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-serif font-normal leading-[1.05] text-white tracking-[-0.01em]">
                  Your Brand&apos;s <span className="italic">Next Big</span><br />
                  Idea Starts Here
                </h2>

                <p className="text-[15px] leading-relaxed text-white/80 font-medium">
                  Talk to Opus about branding, campaigns, events, exhibitions, production, or digital marketing support for your next communication challenge.
                </p>

                <AnimatedButton text="Start a Project" delay={0.15}/>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
