export interface ReferenceItem {
  id: string;
  author: string;
  title: string;
  publisherOrUrl: string;
  accessDate: string;
  fullCitation: string;
}

export const OFFICIAL_REFERENCES: ReferenceItem[] = [
  {
    id: "ref-a1",
    author: "AMANN GROUP",
    title: "Isacord & Isamet: Technical Embroidery Threads & Application Guide. AMANN Thread Engineering.",
    publisherOrUrl: "AMANN Group — Isacord Technical Documentation",
    accessDate: "12 ago. 2026",
    fullCitation: "AMANN GROUP. Isacord & Isamet: Technical Embroidery Threads & Application Guide. AMANN Thread Engineering. Disponível em: AMANN Group — Isacord Technical Documentation. Acesso em: 12 ago. 2026."
  },
  {
    id: "ref-a2",
    author: "ANCHOR / COATS INDUSTRIAL",
    title: "Coats Sylko & Gramax: Technical Embroidery Thread Specifications & Tension Standards. Coats Group.",
    publisherOrUrl: "Coats Industrial Threads — Technical Data Sheet",
    accessDate: "12 ago. 2026",
    fullCitation: "ANCHOR / COATS INDUSTRIAL. Coats Sylko & Gramax: Technical Embroidery Thread Specifications & Tension Standards. Coats Group. Disponível em: Coats Industrial Threads — Technical Data Sheet. Acesso em: 12 ago. 2026."
  },
  {
    id: "ref-a3",
    author: "AUTO-DIGITIZING & EMBROIDERY TECHNOLOGY",
    title: "Standard Glossary of Machine Embroidery & Digitizing Terminology. ADET Standards.",
    publisherOrUrl: "ADET — Technical Standards & Terminology",
    accessDate: "12 ago. 2026",
    fullCitation: "AUTO-DIGITIZING & EMBROIDERY TECHNOLOGY. Standard Glossary of Machine Embroidery & Digitizing Terminology. ADET Standards. Disponível em: ADET — Technical Standards. Acesso em: 12 ago. 2026."
  },
  {
    id: "ref-1",
    author: "BARUDAN DO BRASIL",
    title: "Manuais e documentos técnicos. Barudan Brasil.",
    publisherOrUrl: "Barudan Brasil — Suporte Técnico",
    accessDate: "8 ago. 2026",
    fullCitation: "BARUDAN DO BRASIL. Manuais e documentos técnicos. Barudan Brasil. Disponível em: Barudan Brasil — Suporte Técnico. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-2",
    author: "BERNINA INTERNATIONAL AG",
    title: "BERNINA Embroidery Software: Online Help. BERNINA.",
    publisherOrUrl: "BERNINA — Online Help",
    accessDate: "8 ago. 2026",
    fullCitation: "BERNINA INTERNATIONAL AG. BERNINA Embroidery Software: Online Help. BERNINA. Disponível em: BERNINA — Online Help. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-3",
    author: "BROTHER INTERNATIONAL CORPORATION",
    title: "Brother Support Center: Manuals, Documents, Downloads & More. Brother.",
    publisherOrUrl: "Brother — Support Center",
    accessDate: "8 ago. 2026",
    fullCitation: "BROTHER INTERNATIONAL CORPORATION. Brother Support Center: Manuals, Documents, Downloads & More. Brother. Disponível em: Brother — Support Center. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-4",
    author: "BROTHER INTERNATIONAL CORPORATION",
    title: "PE-DESIGN 11: Embroidery Software. Brother.",
    publisherOrUrl: "Brother — PE-DESIGN 11",
    accessDate: "8 ago. 2026",
    fullCitation: "BROTHER INTERNATIONAL CORPORATION. PE-DESIGN 11: Embroidery Software. Brother. Disponível em: Brother — PE-DESIGN 11. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-5",
    author: "GROZ-BECKERT",
    title: "Sewing Machine Needles: Needles for Sewing and Embroidery. Groz-Beckert.",
    publisherOrUrl: "Groz-Beckert — Sewing Needles",
    accessDate: "8 ago. 2026",
    fullCitation: "GROZ-BECKERT. Sewing Machine Needles: Needles for Sewing and Embroidery. Groz-Beckert. Disponível em: Groz-Beckert — Sewing Needles. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-6",
    author: "HATCH EMBROIDERY",
    title: "Hatch Embroidery: Online Help. Wilcom.",
    publisherOrUrl: "Hatch Embroidery — Online Help",
    accessDate: "8 ago. 2026",
    fullCitation: "HATCH EMBROIDERY. Hatch Embroidery: Online Help. Wilcom. Disponível em: Hatch Embroidery — Online Help. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-7",
    author: "JANOME AMERICA, INC.",
    title: "Software & Manuals. Janôme.",
    publisherOrUrl: "Janôme — Manuals",
    accessDate: "8 ago. 2026",
    fullCitation: "JANOME AMERICA, INC. Software & Manuals. Janôme. Disponível em: Janôme — Manuals. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-8",
    author: "ORGAN NEEDLES",
    title: "Organ Needles Brasil. Organ Needles.",
    publisherOrUrl: "Organ Needles Brasil",
    accessDate: "8 ago. 2026",
    fullCitation: "ORGAN NEEDLES. Organ Needles Brasil. Organ Needles. Disponível em: Organ Needles Brasil. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-9",
    author: "PFAFF INDUSTRIAL",
    title: "Technical Documentation. PFAFF Industrial.",
    publisherOrUrl: "PFAFF Industrial — Technical Documentation",
    accessDate: "8 ago. 2026",
    fullCitation: "PFAFF INDUSTRIAL. Technical Documentation. PFAFF Industrial. Disponível em: PFAFF Industrial — Technical Documentation. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-10",
    author: "SCHMETZ",
    title: "Embroidery Needles. SCHMETZ.",
    publisherOrUrl: "SCHMETZ — Embroidery Needles",
    accessDate: "8 ago. 2026",
    fullCitation: "SCHMETZ. Embroidery Needles. SCHMETZ. Disponível em: SCHMETZ — Embroidery Needles. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-11",
    author: "SINGER BRASIL",
    title: "Manuais. Singer.",
    publisherOrUrl: "SINGER Brasil — Manuais",
    accessDate: "8 ago. 2026",
    fullCitation: "SINGER BRASIL. Manuais. Singer. Disponível em: SINGER Brasil — Manuais. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-12",
    author: "SVP WORLDWIDE",
    title: "Resource Center: Manuals and Support. SINGER, PFAFF e HUSQVARNA VIKING.",
    publisherOrUrl: "SVP Worldwide — Resource Center",
    accessDate: "8 ago. 2026",
    fullCitation: "SVP WORLDWIDE. Resource Center: Manuals and Support. SINGER, PFAFF e HUSQVARNA VIKING. Disponível em: SVP Worldwide — Resource Center. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-13",
    author: "TAJIMA GROUP",
    title: "Support and Technical Documentation. Tajima.",
    publisherOrUrl: "Tajima — Support",
    accessDate: "8 ago. 2026",
    fullCitation: "TAJIMA GROUP. Support and Technical Documentation. Tajima. Disponível em: Tajima — Support. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-14",
    author: "WILCOM INTERNATIONAL PTY LTD",
    title: "Supported Embroidery Formats. Wilcom.",
    publisherOrUrl: "Wilcom — Supported Embroidery Formats",
    accessDate: "8 ago. 2026",
    fullCitation: "WILCOM INTERNATIONAL PTY LTD. Supported Embroidery Formats. Wilcom. Disponível em: Wilcom — Supported Embroidery Formats. Acesso em: 8 ago. 2026."
  }
];
