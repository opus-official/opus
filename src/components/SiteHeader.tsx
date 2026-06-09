"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faqs" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path
        d="M15 8h-2.2c-.9 0-1.3.5-1.3 1.4V12H15l-.5 3.2h-3V23H8v-7.8H5V12h3V9.1C8 6.2 9.7 4 13.1 4H15v4Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <path
        d="M5 5l14 14M19 5 5 19M8.2 5h-3l10.6 14h3L8.2 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M6.5 9.5H9V20H6.5V9.5Z" fill="currentColor" />
        <path d="M7.8 8.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Z" fill="currentColor" />
        <path
          d="M11.2 9.5h2.4v1.4c.6-.9 1.5-1.6 3.1-1.6 2.4 0 4.1 1.6 4.1 4.8V20h-2.5v-5.4c0-1.8-.7-2.8-2.1-2.8-1.5 0-2.4 1-2.4 2.8V20h-2.6V9.5Z"
          fill="currentColor"
        />
      </>
    ),
  },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 z-50 flex h-[76px] w-full max-w-full items-center justify-between overflow-hidden border-b border-white/10 bg-brand-navy-muted px-4 py-3 xl:absolute xl:top-6 xl:left-1/2 xl:h-[80px] xl:w-[1152px] xl:-translate-x-1/2 xl:rounded-[16px] xl:border xl:border-white/15 xl:bg-white/12 xl:p-[16px] xl:backdrop-blur-[16px]"
      >
        <Link href="/" className="flex items-center gap-4" aria-label="Go to homepage">
          <div className="relative flex h-[50px] w-[100px] shrink-0 items-center justify-center overflow-hidden sm:w-[156px] xl:h-24 xl:w-26">
            <Image
              src="/logo-white.png"
              alt="Opus Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden items-center gap-[40px] text-white font-medium tracking-wide xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group text-[16px] tracking-[-1%] text-white transition-opacity"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[1px] w-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full bg-[#EAEFF5] px-6 py-3 text-base font-bold text-brand-navy-dark shadow-xl transition-all hover:scale-105 hover:bg-[#ebf1f8] xl:block"
        >
          Contact Us
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 xl:hidden"
        >
          <span className="relative block h-11 w-11" aria-hidden="true">
            <motion.span
              animate={
                isMenuOpen
                  ? { top: "calc(50% - 1.5px)", rotate: 45 }
                  : { top: "calc(36.3% - 1.5px)", rotate: 0 }
              }
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-1/2 h-[3px] w-6 -translate-x-1/2 rounded bg-current"
            />
            <motion.span
              animate={
                isMenuOpen
                  ? { top: "calc(50% - 1.5px)", rotate: -45 }
                  : { top: "calc(63.6% - 1.5px)", rotate: 0 }
              }
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-1/2 h-[3px] w-6 -translate-x-1/2 rounded bg-current"
            />
          </span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[76px] z-40 flex h-[calc(100dvh-76px)] flex-col bg-brand-navy-muted px-8 pb-10 pt-8 text-white xl:hidden"
          >
          <div className="flex flex-1 flex-col items-center justify-center gap-8 pb-4">
            <nav className="flex flex-col items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[15px] font-semibold leading-none text-white"
              >
                {link.label}
              </Link>
            ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 flex h-[48px] min-w-[136px] items-center justify-center rounded-full bg-[#EAEFF5] px-6 text-[15px] font-bold text-brand-navy-dark"
            >
              Contact Us
            </Link>

            <div className="mt-1 flex items-center justify-center gap-9">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-7 w-7 items-center justify-center text-white transition-opacity hover:opacity-75"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
                    {link.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
