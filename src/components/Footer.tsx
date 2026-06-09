"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQs", href: "/faqs" },
];

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  };

  const listContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <footer className="w-full bg-brand-navy-muted px-6 pt-20 pb-12 text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        
        {/* Top Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          
          {/* Brand Column */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-8 pr-4 lg:pr-12"
          >
            <Link href="/" className="relative block h-[58px] w-[150px] overflow-hidden" aria-label="Go to homepage">
              <Image
                src="/logo-white.png"
                alt="Opus Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-[15px] leading-[1.6] text-white/90 max-w-[340px] font-medium">
              Opus Communications is a full-service marketing agency creating brand strategy, design, campaigns, events, exhibitions, production, and digital communication.
            </p>
            <Link href="/contact" className="bg-white text-brand-navy-dark text-[15px] font-bold py-3.5 px-8 rounded-full w-max hover:bg-white/90 transition-colors mt-2">
              Contact Us
            </Link>
          </motion.div>

          {/* Menu */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <h4 className="font-serif text-[32px] leading-none">Menu</h4>
            <motion.ul variants={listContainer} className="flex flex-col gap-4">
              {menuLinks.map(link => (
                <motion.li key={link.label} variants={fadeUp}>
                  <Link href={link.href} className="text-[15px] font-medium text-white/90 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <h4 className="font-serif text-[32px] leading-none">Socials</h4>
            <motion.ul variants={listContainer} className="flex flex-col gap-4">
              {["Instagram", "Facebook", "LinkedIn", "Twitter (X)"].map(link => (
                <motion.li key={link} variants={fadeUp}>
                  <Link href="#" className="text-[15px] font-medium text-white/90 hover:text-white transition-colors">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <h4 className="font-serif text-[32px] leading-none">Contact</h4>
            <motion.ul variants={listContainer} className="flex flex-col gap-4">
              <motion.li variants={fadeUp} className="text-[15px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">+880 1711 387708</motion.li>
              <motion.li variants={fadeUp} className="text-[15px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">+880 1911 484826</motion.li>
              <motion.li variants={fadeUp} className="break-words text-[15px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">opusbd1@gmail.com</motion.li>
              <motion.li variants={fadeUp} className="break-words text-[15px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">www.opusbd.com</motion.li>
              <motion.li variants={fadeUp} className="text-[15px] font-medium text-white/90 leading-relaxed mt-2">
                596/C Khilgaon, Road 2,<br />
                Dhaka 1219
              </motion.li>
            </motion.ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-1"
        >
          <p className="text-[13px] font-medium text-white/90">
            &copy; {new Date().getFullYear()} Opus Communications
          </p>
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="text-[13px] font-medium text-white/90">Privacy Policy | T&amp;C</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
