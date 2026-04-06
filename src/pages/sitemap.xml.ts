import { STATIC_PAGES, toAbsoluteUrl } from "@/lib/site";

export const prerender = true;

export function GET() {
  const urls = STATIC_PAGES.map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${toAbsoluteUrl(path)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  ).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
