import type { Metadata } from "next";

export const siteConfig = {
  name: "Opus Communications",
  url: "https://opus-dev.pages.dev",
  description:
    "A full-service marketing agency for brand strategy, advertising, digital marketing, events, exhibitions, and production.",
  logo: "/logo.svg",
  ogImage: "/images/og/home-og.jpg",
  address: {
    streetAddress: "596/C Khilgaon, Road 2",
    addressLocality: "Dhaka",
    postalCode: "1219",
    addressCountry: "BD",
  },
  emails: ["opusbd1@gmail.com"],
  telephones: ["+8801711387708", "+8801911484826"],
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = siteConfig.ogImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const imageType = image.endsWith(".jpg") || image.endsWith(".jpeg") ? "image/jpeg" : "image/png";
  const socialTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          type: imageType,
          width: 1200,
          height: 630,
          alt: "Opus Communications full-service marketing agency",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          type: imageType,
          width: 1200,
          height: 630,
          alt: "Opus Communications full-service marketing agency",
        },
      ],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    email: siteConfig.emails[0],
    telephone: siteConfig.telephones[0],
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    contactPoint: siteConfig.telephones.map((telephone) => ({
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["en", "bn"],
    })),
    makesOffer: [
      "Brand Strategy & Consultancy",
      "Creative & Advertising Solutions",
      "Digital & Social Media Marketing",
      "Activation & BTL Marketing",
      "Design & Branding",
      "Production & Content Creation",
      "Event & Exhibition",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en",
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
