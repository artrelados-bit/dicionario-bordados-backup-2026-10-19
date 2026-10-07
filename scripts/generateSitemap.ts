import fs from "fs";
import path from "path";
import { generateSitemapXml } from "../src/utils/sitemapGenerator";

const sitemap = generateSitemapXml();
const publicDir = path.resolve(process.cwd(), "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf-8");
console.log("Sitemap generated successfully in public/sitemap.xml");
