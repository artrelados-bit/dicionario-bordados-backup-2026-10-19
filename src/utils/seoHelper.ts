import { Verbete } from "../types";

/**
 * Updates document head metatags dynamically for SEO and Social Sharing (WhatsApp, Facebook, Google)
 */
export function updateDocumentMeta(verbete: Verbete | null) {
  const defaultTitle = "DIBE – Dicionário de Bordados Eletrônicos | Artrelados";
  const defaultDesc = "O maior dicionário enciclopédico e técnico ilustrado de bordado computadorizado e eletrônico do Brasil. Conceitos, parâmetros e soluções para ateliês.";
  const defaultUrl = window.location.origin;

  if (verbete) {
    const termClean = verbete.term.replace(/^[🟢🟡🔴\s]+/, "");
    const title = `${verbete.code ? `[${verbete.code}] ` : ""}${termClean} — DIBE Artrelados`;
    const desc = verbete.summary || verbete.definition?.slice(0, 160) || defaultDesc;
    const url = `${window.location.origin}/?verbete=${encodeURIComponent(verbete.code || verbete.id)}`;

    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", desc);

    // OpenGraph Tags
    updateMetaProperty("og:title", title);
    updateMetaProperty("og:description", desc);
    updateMetaProperty("og:url", url);
    updateMetaProperty("og:type", "article");

    // Twitter Card Tags
    updateMetaProperty("twitter:title", title);
    updateMetaProperty("twitter:description", desc);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Dynamic DefinedTerm JSON-LD for rich Google Snippets
    let scriptTerm = document.getElementById("jsonld-active-verbete");
    if (!scriptTerm) {
      scriptTerm = document.createElement("script");
      scriptTerm.id = "jsonld-active-verbete";
      scriptTerm.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTerm);
    }
    scriptTerm.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "name": termClean,
      "termCode": verbete.code || verbete.id,
      "description": verbete.definition || verbete.summary || desc,
      "inDefinedTermSet": "https://dicionario-bordados-eletronicos.pages.dev",
      "url": url
    });
  } else {
    document.title = defaultTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", defaultDesc);

    updateMetaProperty("og:title", defaultTitle);
    updateMetaProperty("og:description", defaultDesc);
    updateMetaProperty("og:url", defaultUrl);
    updateMetaProperty("og:type", "website");

    updateMetaProperty("twitter:title", defaultTitle);
    updateMetaProperty("twitter:description", defaultDesc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", defaultUrl);

    // Remove active verbete JSON-LD on main screen
    const scriptTerm = document.getElementById("jsonld-active-verbete");
    if (scriptTerm) {
      scriptTerm.remove();
    }
  }
}

function updateMetaProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(property.startsWith("twitter:") ? "name" : "property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}
