export const SITE = {
  name: "Maati Art Cafe",
  shortName: "Maati",
  url: "https://maatiartcafe.com",
  language: "en-US",
  locale: "en_US",
  defaultTitle: "Maati Art Cafe | Brooklyn Coffee Shop, Pottery Studio & Gallery",
  description:
    "Visit Maati Art Cafe in Brooklyn for artisan coffee, handcrafted ceramics, signature drinks, pastries, and a gallery-inspired cafe experience.",
  defaultImage: "/og-cover.jpg",
  logo: "/logo.png",
  email: "hello@maatiartcafe.com",
  phone: "+1 (234) 567-890",
  phoneHref: "tel:+1234567890",
  mapUrl: "https://maps.app.goo.gl/oFR8L1Mm8uqFAiLV9",
  reservationUrl:
    "mailto:hello@maatiartcafe.com?subject=Reservation%20Request",
  address: {
    streetAddress: "123 Coffee Street",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11201",
    addressCountry: "US",
  },
  priceRange: "$$",
  servesCuisine: ["Coffee", "Pastries", "Desserts", "Breakfast"],
} as const;

export type Breadcrumb = {
  name: string;
  path: string;
};

export const STATIC_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/menu", changefreq: "weekly", priority: "0.9" },
  { path: "/gallery", changefreq: "weekly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
] as const;

export function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  const normalized = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  const isFileLike = /\/[^/?#]+\.[^/?#]+$/.test(normalized);
  const needsTrailingSlash =
    normalized !== "/" &&
    !isFileLike &&
    !normalized.endsWith("/") &&
    !normalized.includes("?") &&
    !normalized.includes("#");

  return new URL(needsTrailingSlash ? `${normalized}/` : normalized, SITE.url).toString();
}

export function getAddressText() {
  const { streetAddress, addressLocality, addressRegion, postalCode } = SITE.address;
  return `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;
}

export function getDefaultBreadcrumbs(pathname: string, pageName: string, breadcrumbs?: Breadcrumb[]) {
  if (breadcrumbs?.length) {
    return breadcrumbs;
  }

  if (pathname === "/") {
    return [{ name: "Home", path: "/" }];
  }

  return [
    { name: "Home", path: "/" },
    { name: pageName, path: pathname },
  ];
}

type SchemaOptions = {
  canonicalUrl: string;
  description: string;
  image: string;
  pageName: string;
  pathname: string;
  schemaType?: string;
  breadcrumbs?: Breadcrumb[];
};

export function buildSchemas({
  canonicalUrl,
  description,
  image,
  pageName,
  pathname,
  schemaType = "WebPage",
  breadcrumbs,
}: SchemaOptions) {
  const resolvedBreadcrumbs = getDefaultBreadcrumbs(pathname, pageName, breadcrumbs);
  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      "@id": `${SITE.url}#cafe`,
      name: SITE.name,
      url: SITE.url,
      image: [toAbsoluteUrl(SITE.defaultImage), toAbsoluteUrl(SITE.logo)],
      logo: toAbsoluteUrl(SITE.logo),
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      priceRange: SITE.priceRange,
      servesCuisine: SITE.servesCuisine,
      address: {
        "@type": "PostalAddress",
        ...SITE.address,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE.url}#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: SITE.language,
      publisher: {
        "@id": `${SITE.url}#cafe`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": schemaType,
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageName,
      description,
      inLanguage: SITE.language,
      isPartOf: {
        "@id": `${SITE.url}#website`,
      },
      about: {
        "@id": `${SITE.url}#cafe`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: image,
      },
    },
  ];

  if (resolvedBreadcrumbs.length > 1) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: resolvedBreadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: toAbsoluteUrl(crumb.path),
      })),
    });
  }

  return schemas;
}
