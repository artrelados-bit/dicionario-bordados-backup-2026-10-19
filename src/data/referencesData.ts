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
    id: "ref-abnt-nbr",
    author: "ABNT — ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS",
    title: "NBR 13484: Fios e linhas para costura e bordado — Determinação de resistência à tração e alongamento. ABNT.",
    publisherOrUrl: "ABNT Catálogo Oficial",
    accessDate: "15 ago. 2026",
    fullCitation: "ABNT — ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 13484: Fios e linhas para costura e bordado — Determinação de resistência à tração e alongamento. Rio de Janeiro: ABNT. Disponível em: ABNT Catálogo Oficial. Acesso em: 15 ago. 2026."
  },
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
    id: "ref-astm-thread",
    author: "ASTM INTERNATIONAL",
    title: "ASTM D204-02: Standard Test Methods for Sewing and Embroidery Threads. ASTM Committee D13 on Textiles.",
    publisherOrUrl: "ASTM Standards Portal",
    accessDate: "18 ago. 2026",
    fullCitation: "ASTM INTERNATIONAL. ASTM D204-02: Standard Test Methods for Sewing and Embroidery Threads. West Conshohocken, PA: ASTM International. Disponível em: ASTM Standards Portal. Acesso em: 18 ago. 2026."
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
    title: "Manuais e documentos técnicos de manutenção e operação de máquinas industriais de bordado. Barudan Brasil.",
    publisherOrUrl: "Barudan Brasil — Suporte Técnico",
    accessDate: "8 ago. 2026",
    fullCitation: "BARUDAN DO BRASIL. Manuais e documentos técnicos de manutenção e operação de máquinas industriais de bordado. Barudan Brasil. Disponível em: Barudan Brasil — Suporte Técnico. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-2",
    author: "BERNINA INTERNATIONAL AG",
    title: "BERNINA Embroidery Software & Hardware: Online Help and Technical Reference. BERNINA.",
    publisherOrUrl: "BERNINA — Online Help & Technical Portals",
    accessDate: "8 ago. 2026",
    fullCitation: "BERNINA INTERNATIONAL AG. BERNINA Embroidery Software & Hardware: Online Help and Technical Reference. Steckborn: BERNINA. Disponível em: BERNINA — Online Help & Technical Portals. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-3",
    author: "BROTHER INTERNATIONAL CORPORATION",
    title: "Brother Support Center: Manuals, Documents, Downloads, Parts & Service Procedures. Brother.",
    publisherOrUrl: "Brother — Support Center Global",
    accessDate: "8 ago. 2026",
    fullCitation: "BROTHER INTERNATIONAL CORPORATION. Brother Support Center: Manuals, Documents, Downloads, Parts & Service Procedures. Nagoya / Bridgewater: Brother. Disponível em: Brother — Support Center Global. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-4",
    author: "BROTHER INTERNATIONAL CORPORATION",
    title: "PE-DESIGN 11: Digitizing and Embroidery Software Reference Guide. Brother.",
    publisherOrUrl: "Brother — PE-DESIGN 11 Documentation",
    accessDate: "8 ago. 2026",
    fullCitation: "BROTHER INTERNATIONAL CORPORATION. PE-DESIGN 11: Digitizing and Embroidery Software Reference Guide. Brother. Disponível em: Brother — PE-DESIGN 11 Documentation. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-compucon",
    author: "COMPUCON S.A.",
    title: "EOS Embroidery Software: Digitizing Manual, Stitch Types and Stitch Density Compensation. Compucon Software.",
    publisherOrUrl: "Compucon Software Documentation",
    accessDate: "20 ago. 2026",
    fullCitation: "COMPUCON S.A. EOS Embroidery Software: Digitizing Manual, Stitch Types and Stitch Density Compensation. Atenas: Compucon. Disponível em: Compucon Software Documentation. Acesso em: 20 ago. 2026."
  },
  {
    id: "ref-dotec",
    author: "DOTEC NEEDLE CO., LTD.",
    title: "Industrial Machine Needles: Technical Specifications, Coatings and Deflection Testing for High-Speed Embroidery.",
    publisherOrUrl: "Dotec Needle Technical Guide",
    accessDate: "22 ago. 2026",
    fullCitation: "DOTEC NEEDLE CO., LTD. Industrial Machine Needles: Technical Specifications, Coatings and Deflection Testing for High-Speed Embroidery. Taiwan: Dotec. Disponível em: Dotec Needle Technical Guide. Acesso em: 22 ago. 2026."
  },
  {
    id: "ref-embrilliance",
    author: "EMBRILLIANCE LLC",
    title: "Embrilliance Essentials & StitchArtist: Mathematical Stitch Generation, Font Kerning and Underlay Engineering.",
    publisherOrUrl: "Embrilliance Documentation Portal",
    accessDate: "16 ago. 2026",
    fullCitation: "EMBRILLIANCE LLC. Embrilliance Essentials & StitchArtist: Mathematical Stitch Generation, Font Kerning and Underlay Engineering. Albuquerque: Embrilliance. Disponível em: Embrilliance Documentation Portal. Acesso em: 16 ago. 2026."
  },
  {
    id: "ref-5",
    author: "GROZ-BECKERT KG",
    title: "Sewing and Embroidery Machine Needles: Quality Management, Clearance Standards and Special Application Needles (SAN 1).",
    publisherOrUrl: "Groz-Beckert — Sewing & Embroidery Needles",
    accessDate: "8 ago. 2026",
    fullCitation: "GROZ-BECKERT KG. Sewing and Embroidery Machine Needles: Quality Management, Clearance Standards and Special Application Needles (SAN 1). Albstadt: Groz-Beckert. Disponível em: Groz-Beckert — Sewing & Embroidery Needles. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-gunold",
    author: "GUNOLD GMBH",
    title: "Embroidery Stabilizers, Specialty Backings and Toppings: Industrial Field Guide for Stretch & Knitwear. Gunold.",
    publisherOrUrl: "Gunold GmbH — Educational Resources",
    accessDate: "19 ago. 2026",
    fullCitation: "GUNOLD GMBH. Embroidery Stabilizers, Specialty Backings and Toppings: Industrial Field Guide for Stretch & Knitwear. Stockstadt: Gunold. Disponível em: Gunold GmbH — Educational Resources. Acesso em: 19 ago. 2026."
  },
  {
    id: "ref-happyjapan",
    author: "HAPPYJAPAN INC.",
    title: "Happy Multi-Needle Automatic Embroidery Machines: Mechanical Service, Trimmer Timing and Maintenance Guide.",
    publisherOrUrl: "HappyJapan Embroidery Tech Support",
    accessDate: "21 ago. 2026",
    fullCitation: "HAPPYJAPAN INC. Happy Multi-Needle Automatic Embroidery Machines: Mechanical Service, Trimmer Timing and Maintenance Guide. Yamagata: HappyJapan. Disponível em: HappyJapan Embroidery Tech Support. Acesso em: 21 ago. 2026."
  },
  {
    id: "ref-6",
    author: "HATCH EMBROIDERY / WILCOM",
    title: "Hatch Embroidery 3: Complete Online Knowledge Base and Stitch Design Rules. Wilcom.",
    publisherOrUrl: "Hatch Embroidery — Online Help",
    accessDate: "8 ago. 2026",
    fullCitation: "HATCH EMBROIDERY / WILCOM. Hatch Embroidery 3: Complete Online Knowledge Base and Stitch Design Rules. Wilcom. Disponível em: Hatch Embroidery — Online Help. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-hirose",
    author: "HIROSE HOOKS & KOBAN (HIROSE GLOBAL)",
    title: "Rotary Hook Engineering and Timing Handbook: Hook-to-Needle Clearance (0.05-0.10mm), Deflector and Oil Viscosity Standards.",
    publisherOrUrl: "Hirose Global Technical Engineering Portal",
    accessDate: "24 ago. 2026",
    fullCitation: "HIROSE HOOKS & KOBAN (HIROSE GLOBAL). Rotary Hook Engineering and Timing Handbook: Hook-to-Needle Clearance (0.05-0.10mm), Deflector and Oil Viscosity Standards. Osaka: Hirose Hooks Co. Disponível em: Hirose Global Technical Engineering Portal. Acesso em: 24 ago. 2026."
  },
  {
    id: "ref-7",
    author: "JANOME AMERICA, INC. / JANOME LATINOAMÉRICA",
    title: "Software & Hardware Instruction Manuals for Memory Craft and Multi-Needle Series. Janome.",
    publisherOrUrl: "Janome — Global Support & Manuals",
    accessDate: "8 ago. 2026",
    fullCitation: "JANOME AMERICA, INC. / JANOME LATINOAMÉRICA. Software & Hardware Instruction Manuals for Memory Craft and Multi-Needle Series. Tokyo / Mahwah: Janome. Disponível em: Janome — Global Support & Manuals. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-madeira",
    author: "MADEIRA GARNE GMBH",
    title: "Polyneon & Classic Rayon Embroidery Threads: Technical Datasheets, Colorfastness and High-Speed Tension Balancing.",
    publisherOrUrl: "Madeira Garne — Technical Thread Portal",
    accessDate: "14 ago. 2026",
    fullCitation: "MADEIRA GARNE GMBH. Polyneon & Classic Rayon Embroidery Threads: Technical Datasheets, Colorfastness and High-Speed Tension Balancing. Freiburg: Madeira. Disponível em: Madeira Garne — Technical Thread Portal. Acesso em: 14 ago. 2026."
  },
  {
    id: "ref-melco",
    author: "MELCO EMBROIDERY SYSTEMS",
    title: "Melco EMT16X Operator Manual: Acti-Feed™ Thread Delivery Technology and Tensionless Embroidery Physics.",
    publisherOrUrl: "Melco Technical Support Knowledgebase",
    accessDate: "20 ago. 2026",
    fullCitation: "MELCO EMBROIDERY SYSTEMS. Melco EMT16X Operator Manual: Acti-Feed™ Thread Delivery Technology and Tensionless Embroidery Physics. Denver: Melco. Disponível em: Melco Technical Support Knowledgebase. Acesso em: 20 ago. 2026."
  },
  {
    id: "ref-8",
    author: "ORGAN NEEDLE CO., LTD.",
    title: "Machine Embroidery Needles: DBxK5, HAx1EBBR & Titanium PD Series Technical Specifications. Organ Needles.",
    publisherOrUrl: "Organ Needles Global Technical Portal",
    accessDate: "8 ago. 2026",
    fullCitation: "ORGAN NEEDLE CO., LTD. Machine Embroidery Needles: DBxK5, HAx1EBBR & Titanium PD Series Technical Specifications. Ueda: Organ Needles. Disponível em: Organ Needles Global Technical Portal. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-9",
    author: "PFAFF INDUSTRIAL / DÜRKOPP ADLER",
    title: "Technical Documentation and Mechanical Sewing Hook Adjustments. PFAFF Industrial.",
    publisherOrUrl: "PFAFF Industrial — Technical Documentation",
    accessDate: "8 ago. 2026",
    fullCitation: "PFAFF INDUSTRIAL / DÜRKOPP ADLER. Technical Documentation and Mechanical Sewing Hook Adjustments. Kaiserslautern: PFAFF Industrial. Disponível em: PFAFF Industrial — Technical Documentation. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-pulse",
    author: "PULSE MICROSYSTEMS / TAJIMA DG/ML",
    title: "Tajima DG/ML by Pulse: Professional Digitizing, Automated Underlay Sequences and Pull Compensation Calibration Guide.",
    publisherOrUrl: "Pulse Microsystems Documentation",
    accessDate: "17 ago. 2026",
    fullCitation: "PULSE MICROSYSTEMS / TAJIMA DG/ML. Tajima DG/ML by Pulse: Professional Digitizing, Automated Underlay Sequences and Pull Compensation Calibration Guide. Mississauga: Pulse Microsystems. Disponível em: Pulse Microsystems Documentation. Acesso em: 17 ago. 2026."
  },
  {
    id: "ref-robison",
    author: "ROBISON-ANTON TEXTILE CO.",
    title: "Super Brite Polyester & 'J' Metallic Threads: Tensile Properties and Bobbin Thread Ratio Specifications.",
    publisherOrUrl: "Robison-Anton Technical Thread Catalog",
    accessDate: "23 ago. 2026",
    fullCitation: "ROBISON-ANTON TEXTILE CO. Super Brite Polyester & 'J' Metallic Threads: Tensile Properties and Bobbin Thread Ratio Specifications. Charlotte: A&E Robison-Anton. Disponível em: Robison-Anton Technical Thread Catalog. Acesso em: 23 ago. 2026."
  },
  {
    id: "ref-10",
    author: "SCHMETZ (FERD. SCHMETZ GMBH)",
    title: "The ABC of Sewing Machine Needles: Embroidery 130/705 H-E, Gold Titanium, Microtex and Scarf Geometry.",
    publisherOrUrl: "SCHMETZ — Embroidery Needles Documentation",
    accessDate: "8 ago. 2026",
    fullCitation: "SCHMETZ (FERD. SCHMETZ GMBH). The ABC of Sewing Machine Needles: Embroidery 130/705 H-E, Gold Titanium, Microtex and Scarf Geometry. Herzogenrath: Ferd. Schmetz GmbH. Disponível em: SCHMETZ — Embroidery Needles Documentation. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-11",
    author: "SINGER BRASIL / SVP WORLDWIDE",
    title: "Manuais de Instrução e Manutenção Preventiva para Máquinas Computadorizadas de Bordado. Singer.",
    publisherOrUrl: "SINGER Brasil — Manuais",
    accessDate: "8 ago. 2026",
    fullCitation: "SINGER BRASIL / SVP WORLDWIDE. Manuais de Instrução e Manutenção Preventiva para Máquinas Computadorizadas de Bordado. Indaiatuba / Nashville: Singer. Disponível em: SINGER Brasil — Manuais. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-sunstar",
    author: "SUNSTAR CO., LTD. / SWF EMBROIDERY",
    title: "SWF Dual-Function and Multi-Head Embroidery Machines: Service Manual, Electronic Encoder and Cam Alignment.",
    publisherOrUrl: "SWF Sunstar Global Support",
    accessDate: "25 ago. 2026",
    fullCitation: "SUNSTAR CO., LTD. / SWF EMBROIDERY. SWF Dual-Function and Multi-Head Embroidery Machines: Service Manual, Electronic Encoder and Cam Alignment. Incheon: Sunstar. Disponível em: SWF Sunstar Global Support. Acesso em: 25 ago. 2026."
  },
  {
    id: "ref-12",
    author: "SVP WORLDWIDE",
    title: "Resource Center: Manuals, Engineering Bulletins and Support for SINGER, PFAFF and HUSQVARNA VIKING Embroidery Machines.",
    publisherOrUrl: "SVP Worldwide — Resource Center",
    accessDate: "8 ago. 2026",
    fullCitation: "SVP WORLDWIDE. Resource Center: Manuals, Engineering Bulletins and Support for SINGER, PFAFF and HUSQVARNA VIKING Embroidery Machines. Nashville: SVP Worldwide. Disponível em: SVP Worldwide — Resource Center. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-13",
    author: "TAJIMA GROUP (TOKAI INDUSTRIAL SEWING MACHINE CO.)",
    title: "Tajima Industrial Multi-Head Embroidery Machines: Technical Documentation, Scribing Standards and Maintenance Manual.",
    publisherOrUrl: "Tajima — Global Support & Documentation",
    accessDate: "8 ago. 2026",
    fullCitation: "TAJIMA GROUP (TOKAI INDUSTRIAL SEWING MACHINE CO.). Tajima Industrial Multi-Head Embroidery Machines: Technical Documentation, Scribing Standards and Maintenance Manual. Kasugai: Tajima Group. Disponível em: Tajima — Global Support & Documentation. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-towa",
    author: "TOWA INDUSTRY CO., LTD.",
    title: "TM-1, TM-2 & TM-5 Digital Bobbin Case Tension Gauges: Calibration Procedures and Gram-Force Standards for Embroidery.",
    publisherOrUrl: "Towa Industry Japan Technical Support",
    accessDate: "22 ago. 2026",
    fullCitation: "TOWA INDUSTRY CO., LTD. TM-1, TM-2 & TM-5 Digital Bobbin Case Tension Gauges: Calibration Procedures and Gram-Force Standards for Embroidery. Kyoto: Towa Industry. Disponível em: Towa Industry Japan Technical Support. Acesso em: 22 ago. 2026."
  },
  {
    id: "ref-typical",
    author: "TYPICAL SEWING MACHINE CO., LTD. / TYPICAL INTERNATIONAL",
    title: "Typical Electronic & Industrial Embroidery Equipment: Technical Service Manual and Spare Parts Catalog.",
    publisherOrUrl: "Typical Sewing Global Technical Portal",
    accessDate: "26 ago. 2026",
    fullCitation: "TYPICAL SEWING MACHINE CO., LTD. / TYPICAL INTERNATIONAL. Typical Electronic & Industrial Embroidery Equipment: Technical Service Manual and Spare Parts Catalog. Xi'an: Typical Europe / China. Disponível em: Typical Sewing Global Technical Portal. Acesso em: 26 ago. 2026."
  },
  {
    id: "ref-jack",
    author: "JACK TECHNOLOGY CO., LTD.",
    title: "Jack Industrial Computerized Sewing & Embroidery Systems: Service Manual and Direct-Drive Motor Calibration.",
    publisherOrUrl: "Jack Sewing Machine Global Support",
    accessDate: "26 ago. 2026",
    fullCitation: "JACK TECHNOLOGY CO., LTD. Jack Industrial Computerized Sewing & Embroidery Systems: Service Manual and Direct-Drive Motor Calibration. Taizhou: Jack Technology. Disponível em: Jack Sewing Machine Global Support. Acesso em: 26 ago. 2026."
  },
  {
    id: "ref-14",
    author: "WILCOM INTERNATIONAL PTY LTD",
    title: "EmbroideryStudio e4 / Elements: Technical Documentation, Stitch File Formats Specifications and Physical Fabric Recipes.",
    publisherOrUrl: "Wilcom — Technical Documentation & Help Portal",
    accessDate: "8 ago. 2026",
    fullCitation: "WILCOM INTERNATIONAL PTY LTD. EmbroideryStudio e4 / Elements: Technical Documentation, Stitch File Formats Specifications and Physical Fabric Recipes. Sydney: Wilcom. Disponível em: Wilcom — Technical Documentation & Help Portal. Acesso em: 8 ago. 2026."
  }
];
