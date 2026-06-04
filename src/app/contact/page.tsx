import type { Metadata } from "next";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  webPageJsonLd,
} from "@/lib/seo";

const description =
  "Contact Opus Communications to discuss branding, campaigns, events, exhibitions, production, digital marketing, and software development projects.";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description,
  path: "/contact",
  image: "/images/og/home-og.jpg",
  keywords: [
    "contact Opus Communications",
    "marketing agency Dhaka contact",
    "branding agency Bangladesh contact",
    "creative agency consultation",
  ],
});

const contactDetails = [
  {
    icon: PhoneCall,
    value: "+880 1711 387708",
    href: "tel:+8801711387708",
  },
  {
    icon: Mail,
    value: "info@opusbd.com",
    href: "mailto:info@opusbd.com",
  },
  {
    icon: MapPin,
    value: "596/C Khilgaon, Road 2, Dhaka 1219",
    href: "https://maps.google.com/?q=596%2FC%20Khilgaon%2C%20Road%202%2C%20Dhaka%201219",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-main text-brand-navy-dark">
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/contact",
            name: "Contact Opus Communications",
            description,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact" },
          ]),
        ]}
      />

      <section className="p-0 xl:p-4">
        <div className="dark-contrast relative flex min-h-screen w-full overflow-hidden bg-brand-navy-dark xl:rounded-[1.5rem]">
          <img
            src="/images/about-hero-meeting-room.jpg"
            alt="Modern meeting room for Opus consultation"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080e29]/72" />
          <SiteHeader />

          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] px-6 pb-16 pt-[120px] md:px-8 md:pb-20 md:pt-[150px] xl:px-12 xl:pt-[170px]">
            <section className="grid min-h-[650px] w-full items-center gap-12 text-white lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,0.7fr)] lg:gap-16 xl:gap-24">
              <div className="flex max-w-[820px] flex-col gap-9">
                <h1 className="font-serif text-[54px] leading-[1.08] text-white md:text-[78px] lg:text-[96px]">
                  Let&apos;s <span className="italic">Start</span> the
                  <br />
                  Conversation
                </h1>
                <p className="max-w-[680px] text-[19px] font-bold leading-[1.55] text-white md:text-[22px]">
                  Ready to take the next step? Schedule a complimentary
                  consultation with our team and discover how we can help you
                  achieve your goals.
                </p>
              </div>

              <div className="grid w-full max-w-[640px] gap-6 lg:ml-auto lg:max-w-[520px]">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.value}
                      href={item.href}
                      className="flex items-start gap-5 text-[21px] font-bold leading-[1.35] text-white transition-opacity hover:opacity-80 md:text-[24px]"
                    >
                      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#f2f5fb] text-brand-blue shadow-[0_10px_24px_rgba(8,14,40,0.18)] md:h-[56px] md:w-[56px]">
                        <Icon className="h-7 w-7" strokeWidth={3} />
                      </div>
                      <span className="pt-2">{item.value}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
