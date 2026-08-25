import { INITIAL_VERBETES } from "../data/initialDictionary";

export function generateSitemapXml(baseUrl: string = "https://dicionario.artrelados.com.br"): string {
  const currentDate = new Date().toISOString().split("T")[0];

  const urls = [
    `  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`,
    ...INITIAL_VERBETES.map((v) => {
      const codeOrId = encodeURIComponent(v.code || v.id);
      return `  <url>
    <loc>${baseUrl}/?verbete=${codeOrId}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}
