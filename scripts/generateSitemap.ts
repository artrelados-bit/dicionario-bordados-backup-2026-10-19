import fs from 'fs';
import path from 'path';
import { INITIAL_VERBETES } from '../src/data/initialDictionary.ts';

const baseUrl = 'https://dicionario-bordados-eletronicos.pages.dev';
const currentDate = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Página Principal / Enciclopédia Completa DIBE Artrelados -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

// Deduplicate verbetes by ID
const seenIds = new Set<string>();
const uniqueVerbetes = INITIAL_VERBETES.filter(v => {
  if (!v.id || seenIds.has(v.id)) return false;
  seenIds.add(v.id);
  return true;
});

console.log(`Total de verbetes únicos encontrados: ${uniqueVerbetes.length}`);

for (const verbete of uniqueVerbetes) {
  // Determine priority based on level or importance
  let priority = '0.8';
  if (verbete.level === 'iniciante' || ['A-001', 'B-001', 'C-014', 'E-015', 'P-001', 'T-001'].includes(verbete.id)) {
    priority = '0.9';
  }

  xml += `  <!-- Verbete: [${verbete.id}] ${verbete.term.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')} -->
  <url>
    <loc>${baseUrl}/?verbete=${encodeURIComponent(verbete.id)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

xml += `</urlset>\n`;

const outputPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');
console.log(`Sitemap gerado com sucesso em: ${outputPath} (${uniqueVerbetes.length + 1} URLs)`);
