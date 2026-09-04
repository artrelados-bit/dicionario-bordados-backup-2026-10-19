export interface ReferenceItem {
  id: string;
  author: string;
  title: string;
  publisherOrUrl: string;
  accessDate: string;
  fullCitation: string;
}

export const OFFICIAL_REFERENCES: ReferenceItem[] = [
  // 1. NORMAS TÉCNICAS NACIONAIS E INTERNACIONAIS
  {
    id: "ref-aatcc-61",
    author: "AATCC — AMERICAN ASSOCIATION OF TEXTILE CHEMISTS AND COLORISTS",
    title: "AATCC TM61: Colorfastness to Laundering: Accelerated Testing Standards for Machine Embroidery and Yarns.",
    publisherOrUrl: "AATCC Technical Manual",
    accessDate: "27 ago. 2026",
    fullCitation: "AATCC — AMERICAN ASSOCIATION OF TEXTILE CHEMISTS AND COLORISTS. AATCC TM61: Colorfastness to Laundering: Accelerated Testing Standards for Machine Embroidery and Yarns. Research Triangle Park, NC: AATCC. Disponível em: AATCC Technical Manual. Acesso em: 27 ago. 2026."
  },
  {
    id: "ref-abnt-nbr",
    author: "ABNT — ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS",
    title: "NBR 13484: Fios e linhas para costura e bordado — Determinação de resistência à tração e alongamento.",
    publisherOrUrl: "ABNT Catálogo Oficial",
    accessDate: "15 ago. 2026",
    fullCitation: "ABNT — ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 13484: Fios e linhas para costura e bordado — Determinação de resistência à tração e alongamento. Rio de Janeiro: ABNT. Disponível em: ABNT Catálogo Oficial. Acesso em: 15 ago. 2026."
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
    id: "ref-iso-4915",
    author: "ISO — INTERNATIONAL ORGANIZATION FOR STANDARDIZATION",
    title: "ISO 4915: Textiles — Stitch types — Classification and terminology. Technical Committee ISO/TC 38.",
    publisherOrUrl: "ISO Standards Catalogue",
    accessDate: "28 ago. 2026",
    fullCitation: "ISO — INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 4915: Textiles — Stitch types — Classification and terminology. Geneva: ISO. Disponível em: ISO Standards Catalogue. Acesso em: 28 ago. 2026."
  },
  {
    id: "ref-iso-105",
    author: "ISO — INTERNATIONAL ORGANIZATION FOR STANDARDIZATION",
    title: "ISO 105-C06: Textiles — Tests for colour fastness — Part C06: Colour fastness to domestic and commercial laundering.",
    publisherOrUrl: "ISO Standards Catalogue",
    accessDate: "28 ago. 2026",
    fullCitation: "ISO — INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. ISO 105-C06: Textiles — Tests for colour fastness — Part C06: Colour fastness to domestic and commercial laundering. Geneva: ISO. Disponível em: ISO Standards Catalogue. Acesso em: 28 ago. 2026."
  },
  {
    id: "ref-oeko-tex",
    author: "OEKO-TEX® ASSOCIATION",
    title: "STANDARD 100 by OEKO-TEX®: Testing for Harmful Substances in Embroidery Threads, Interlinings and Appliqués.",
    publisherOrUrl: "OEKO-TEX Official Testing Criteria",
    accessDate: "28 ago. 2026",
    fullCitation: "OEKO-TEX® ASSOCIATION. STANDARD 100 by OEKO-TEX®: Testing for Harmful Substances in Embroidery Threads, Interlinings and Appliqués. Zurich: International OEKO-TEX Association. Disponível em: OEKO-TEX Official Testing Criteria. Acesso em: 28 ago. 2026."
  },

  // 2. FABRICANTES DE LINHAS E ESTABILIZADORES
  {
    id: "ref-a1",
    author: "AMANN GROUP",
    title: "Isacord & Isamet: Technical Embroidery Threads & Application Guide. AMANN Thread Engineering.",
    publisherOrUrl: "AMANN Group — Isacord Technical Documentation",
    accessDate: "12 ago. 2026",
    fullCitation: "AMANN GROUP. Isacord & Isamet: Technical Embroidery Threads & Application Guide. Bönnigheim: AMANN Group. Disponível em: AMANN Group — Isacord Technical Documentation. Acesso em: 12 ago. 2026."
  },
  {
    id: "ref-a2",
    author: "ANCHOR / COATS INDUSTRIAL",
    title: "Coats Sylko & Gramax: Technical Embroidery Thread Specifications & Tension Standards. Coats Group.",
    publisherOrUrl: "Coats Industrial Threads — Technical Data Sheet",
    accessDate: "12 ago. 2026",
    fullCitation: "ANCHOR / COATS INDUSTRIAL. Coats Sylko & Gramax: Technical Embroidery Thread Specifications & Tension Standards. London: Coats Group. Disponível em: Coats Industrial Threads — Technical Data Sheet. Acesso em: 12 ago. 2026."
  },
  {
    id: "ref-freudenberg",
    author: "FREUDENBERG PERFORMANCE MATERIALS / VILENE",
    title: "Vilene Interlinings & Water-Soluble Embroidery Nonwovens: Technical Processing Guidelines for Industrial Appliqués.",
    publisherOrUrl: "Freudenberg Technical Nonwovens Portal",
    accessDate: "28 ago. 2026",
    fullCitation: "FREUDENBERG PERFORMANCE MATERIALS / VILENE. Vilene Interlinings & Water-Soluble Embroidery Nonwovens: Technical Processing Guidelines for Industrial Appliqués. Weinheim: Freudenberg Group. Disponível em: Freudenberg Technical Nonwovens Portal. Acesso em: 28 ago. 2026."
  },
  {
    id: "ref-fujix",
    author: "FUJIX LTD.",
    title: "King Star High-Performance Polyester Embroidery Thread: Tensile Strength, Elongation and Silicone Lubrication.",
    publisherOrUrl: "Fujix Japan Industrial Thread Portal",
    accessDate: "29 ago. 2026",
    fullCitation: "FUJIX LTD. King Star High-Performance Polyester Embroidery Thread: Tensile Strength, Elongation and Silicone Lubrication. Kyoto: Fujix Ltd. Disponível em: Fujix Japan Industrial Thread Portal. Acesso em: 29 ago. 2026."
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
    id: "ref-madeira",
    author: "MADEIRA GARNE GMBH",
    title: "Polyneon & Classic Rayon Embroidery Threads: Technical Datasheets, Colorfastness and High-Speed Tension Balancing.",
    publisherOrUrl: "Madeira Garne — Technical Thread Portal",
    accessDate: "14 ago. 2026",
    fullCitation: "MADEIRA GARNE GMBH. Polyneon & Classic Rayon Embroidery Threads: Technical Datasheets, Colorfastness and High-Speed Tension Balancing. Freiburg: Madeira. Disponível em: Madeira Garne — Technical Thread Portal. Acesso em: 14 ago. 2026."
  },
  {
    id: "ref-marathon",
    author: "MARATHON THREADS (DONG-DO TEXTILE CO.)",
    title: "Marathon 100% Viscose Rayon & Polyester Embroidery Threads: Tensile Testing and Bobbin Tension Calibration.",
    publisherOrUrl: "Marathon Threads Technical Documentation",
    accessDate: "29 ago. 2026",
    fullCitation: "MARATHON THREADS (DONG-DO TEXTILE CO.). Marathon 100% Viscose Rayon & Polyester Embroidery Threads: Tensile Testing and Bobbin Tension Calibration. Seul: Dong-Do Textile Co. Disponível em: Marathon Threads Technical Documentation. Acesso em: 29 ago. 2026."
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
    id: "ref-sulky",
    author: "SULKY OF AMERICA",
    title: "Sulky Stabilizer and Specialty Thread Compendium: Water Soluble, Heat-Away, Tear-Easy and Cut-Away Field Recipes.",
    publisherOrUrl: "Sulky Technical Learning Center",
    accessDate: "29 ago. 2026",
    fullCitation: "SULKY OF AMERICA. Sulky Stabilizer and Specialty Thread Compendium: Water Soluble, Heat-Away, Tear-Easy and Cut-Away Field Recipes. Kennesaw, GA: Sulky of America. Disponível em: Sulky Technical Learning Center. Acesso em: 29 ago. 2026."
  },

  // 3. AGULHAS, LANÇADEIRAS E INSTRUMENTOS MECÂNICOS
  {
    id: "ref-dotec",
    author: "DOTEC NEEDLE CO., LTD.",
    title: "High-Speed Industrial Embroidery Needles: Titanium Hard Chrome Plating, Heat Dissipation and Deflection Ratings.",
    publisherOrUrl: "Dotec Needle Technical Bulletin",
    accessDate: "20 ago. 2026",
    fullCitation: "DOTEC NEEDLE CO., LTD. High-Speed Industrial Embroidery Needles: Titanium Hard Chrome Plating, Heat Dissipation and Deflection Ratings. Taichung: Dotec Needle Co. Disponível em: Dotec Needle Technical Bulletin. Acesso em: 20 ago. 2026."
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
    id: "ref-hirose",
    author: "HIROSE HOOKS & KOBAN (HIROSE GLOBAL)",
    title: "Rotary Hook Engineering and Timing Handbook: Hook-to-Needle Clearance (0.05-0.10mm), Deflector and Oil Viscosity Standards.",
    publisherOrUrl: "Hirose Global Technical Engineering Portal",
    accessDate: "24 ago. 2026",
    fullCitation: "HIROSE HOOKS & KOBAN (HIROSE GLOBAL). Rotary Hook Engineering and Timing Handbook: Hook-to-Needle Clearance (0.05-0.10mm), Deflector and Oil Viscosity Standards. Osaka: Hirose Hooks Co. Disponível em: Hirose Global Technical Engineering Portal. Acesso em: 24 ago. 2026."
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
    id: "ref-10",
    author: "SCHMETZ (FERD. SCHMETZ GMBH)",
    title: "The ABC of Sewing Machine Needles: Embroidery 130/705 H-E, Gold Titanium, Microtex and Scarf Geometry.",
    publisherOrUrl: "SCHMETZ — Embroidery Needles Documentation",
    accessDate: "8 ago. 2026",
    fullCitation: "SCHMETZ (FERD. SCHMETZ GMBH). The ABC of Sewing Machine Needles: Embroidery 130/705 H-E, Gold Titanium, Microtex and Scarf Geometry. Herzogenrath: Ferd. Schmetz GmbH. Disponível em: SCHMETZ — Embroidery Needles Documentation. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-towa",
    author: "TOWA INDUSTRY CO., LTD.",
    title: "TM-1, TM-2 & TM-5 Digital Bobbin Case Tension Gauges: Calibration Procedures and Gram-Force Standards for Embroidery.",
    publisherOrUrl: "Towa Industry Japan Technical Support",
    accessDate: "22 ago. 2026",
    fullCitation: "TOWA INDUSTRY CO., LTD. TM-1, TM-2 & TM-5 Digital Bobbin Case Tension Gauges: Calibration Procedures and Gram-Force Standards for Embroidery. Kyoto: Towa Industry. Disponível em: Towa Industry Japan Technical Support. Acesso em: 22 ago. 2026."
  },

  // 4. MÁQUINAS INDUSTRIAIS, MULTIAGULHAS E ELETRÔNICAS
  {
    id: "ref-1",
    author: "BARUDAN DO BRASIL",
    title: "Manuais e documentos técnicos de manutenção e operação de máquinas industriais de bordado. Barudan Brasil.",
    publisherOrUrl: "Barudan Brasil — Suporte Técnico",
    accessDate: "8 ago. 2026",
    fullCitation: "BARUDAN DO BRASIL. Manuais e documentos técnicos de manutenção e operação de máquinas industriais de bordado. Barudan Brasil. Disponível em: Barudan Brasil — Suporte Técnico. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-3",
    author: "BROTHER INDUSTRIES, LTD. / BROTHER AT YOUR SIDE",
    title: "Manuals, Specifications and Maintenance Guides for Embroidery Machines (PE, BP, VR and PR Series). Brother.",
    publisherOrUrl: "Brother Solutions Center — Global Support",
    accessDate: "8 ago. 2026",
    fullCitation: "BROTHER INDUSTRIES, LTD. / BROTHER AT YOUR SIDE. Manuals, Specifications and Maintenance Guides for Embroidery Machines (PE, BP, VR and PR Series). Nagoya: Brother. Disponível em: Brother Solutions Center — Global Support. Acesso em: 8 ago. 2026."
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
    id: "ref-jack",
    author: "JACK TECHNOLOGY CO., LTD.",
    title: "Jack Industrial Computerized Sewing & Embroidery Systems: Service Manual and Direct-Drive Motor Calibration.",
    publisherOrUrl: "Jack Sewing Machine Global Support",
    accessDate: "26 ago. 2026",
    fullCitation: "JACK TECHNOLOGY CO., LTD. Jack Industrial Computerized Sewing & Embroidery Systems: Service Manual and Direct-Drive Motor Calibration. Taizhou: Jack Technology. Disponível em: Jack Sewing Machine Global Support. Acesso em: 26 ago. 2026."
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
    id: "ref-juki",
    author: "JUKI CORPORATION",
    title: "Juki Industrial Computerized Embroidery & Automated Sewing Systems: Hook Timing, Thread Tension and Solenoid Adjustment.",
    publisherOrUrl: "Juki Global Technical Support",
    accessDate: "29 ago. 2026",
    fullCitation: "JUKI CORPORATION. Juki Industrial Computerized Embroidery & Automated Sewing Systems: Hook Timing, Thread Tension and Solenoid Adjustment. Tokyo: Juki Corporation. Disponível em: Juki Global Technical Support. Acesso em: 29 ago. 2026."
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
    id: "ref-9",
    author: "PFAFF INDUSTRIAL / DÜRKOPP ADLER",
    title: "Technical Documentation and Mechanical Sewing Hook Adjustments. PFAFF Industrial.",
    publisherOrUrl: "PFAFF Industrial — Technical Documentation",
    accessDate: "8 ago. 2026",
    fullCitation: "PFAFF INDUSTRIAL / DÜRKOPP ADLER. Technical Documentation and Mechanical Sewing Hook Adjustments. Kaiserslautern: PFAFF Industrial. Disponível em: PFAFF Industrial — Technical Documentation. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-promaker",
    author: "PROMAKER EMBROIDERY MACHINES",
    title: "Promaker High-Speed Multi-Head Commercial Embroidery Machines: Maintenance, Pantograph Stepping and Trimmer Adjustment.",
    publisherOrUrl: "Promaker Technical Portal",
    accessDate: "29 ago. 2026",
    fullCitation: "PROMAKER EMBROIDERY MACHINES. Promaker High-Speed Multi-Head Commercial Embroidery Machines: Maintenance, Pantograph Stepping and Trimmer Adjustment. Zhuji: Promaker. Disponível em: Promaker Technical Portal. Acesso em: 29 ago. 2026."
  },
  {
    id: "ref-ricoma",
    author: "RICOMA INTERNATIONAL CORPORATION",
    title: "Ricoma MT, TC & SWD Series Multi-Needle Commercial Embroidery Machines: Technical Operator and Service Manual.",
    publisherOrUrl: "Ricoma Technical Knowledge Base",
    accessDate: "29 ago. 2026",
    fullCitation: "RICOMA INTERNATIONAL CORPORATION. Ricoma MT, TC & SWD Series Multi-Needle Commercial Embroidery Machines: Technical Operator and Service Manual. Miami: Ricoma. Disponível em: Ricoma Technical Knowledge Base. Acesso em: 29 ago. 2026."
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
    id: "ref-siruba",
    author: "SIRUBA (KAULIN MFG. CO., LTD.)",
    title: "Siruba Automated Sewing & Embroidery Equipment: Technical Specification and Timing Adjustment Handbook.",
    publisherOrUrl: "Siruba Global Technical Portal",
    accessDate: "29 ago. 2026",
    fullCitation: "SIRUBA (KAULIN MFG. CO., LTD.). Siruba Automated Sewing & Embroidery Equipment: Technical Specification and Timing Adjustment Handbook. Taipei: Kaulin Mfg. Co. Disponível em: Siruba Global Technical Portal. Acesso em: 29 ago. 2026."
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
    id: "ref-typical",
    author: "TYPICAL SEWING MACHINE CO., LTD. / TYPICAL INTERNATIONAL",
    title: "Typical Electronic & Industrial Embroidery Equipment: Technical Service Manual and Spare Parts Catalog.",
    publisherOrUrl: "Typical Sewing Global Technical Portal",
    accessDate: "26 ago. 2026",
    fullCitation: "TYPICAL SEWING MACHINE CO., LTD. / TYPICAL INTERNATIONAL. Typical Electronic & Industrial Embroidery Equipment: Technical Service Manual and Spare Parts Catalog. Xi'an: Typical Europe / China. Disponível em: Typical Sewing Global Technical Portal. Acesso em: 26 ago. 2026."
  },
  {
    id: "ref-zsk",
    author: "ZSK STICKMASCHINEN GMBH",
    title: "ZSK Technical Handbook: Industrial High-Precision Multi-Head Embroidery Technology, SPRINT and RACER Series.",
    publisherOrUrl: "ZSK Stickmaschinen Global Support",
    accessDate: "29 ago. 2026",
    fullCitation: "ZSK STICKMASCHINEN GMBH. ZSK Technical Handbook: Industrial High-Precision Multi-Head Embroidery Technology, SPRINT and RACER Series. Krefeld: ZSK Stickmaschinen. Disponível em: ZSK Stickmaschinen Global Support. Acesso em: 29 ago. 2026."
  },

  // 5. ENGENHARIA DE MATRIZES, SOFTWARES E DIGITALIZAÇÃO
  {
    id: "ref-bernina",
    author: "BERNINA INTERNATIONAL AG",
    title: "BERNINA Embroidery Software & Hardware Technical Reference: Bernina 700/880 Plus and DesignWorks Suite.",
    publisherOrUrl: "Bernina Support Portal",
    accessDate: "8 ago. 2026",
    fullCitation: "BERNINA INTERNATIONAL AG. BERNINA Embroidery Software & Hardware Technical Reference: Bernina 700/880 Plus and DesignWorks Suite. Steckborn: Bernina. Disponível em: Bernina Support Portal. Acesso em: 8 ago. 2026."
  },
  {
    id: "ref-compucon",
    author: "COMPUCON S.A.",
    title: "Compucon EOS Digitizing Engine: Underlay Generation Algorithms, Stitch Pathing and Pull Distortion Dynamics.",
    publisherOrUrl: "Compucon Software Technical Whitepaper",
    accessDate: "18 ago. 2026",
    fullCitation: "COMPUCON S.A. Compucon EOS Digitizing Engine: Underlay Generation Algorithms, Stitch Pathing and Pull Distortion Dynamics. Thessaloniki: Compucon. Disponível em: Compucon Software Technical Whitepaper. Acesso em: 18 ago. 2026."
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
    id: "ref-6",
    author: "HATCH EMBROIDERY / WILCOM",
    title: "Hatch Embroidery 3: Complete Online Knowledge Base and Stitch Design Rules. Wilcom.",
    publisherOrUrl: "Hatch Embroidery — Online Help",
    accessDate: "8 ago. 2026",
    fullCitation: "HATCH EMBROIDERY / WILCOM. Hatch Embroidery 3: Complete Online Knowledge Base and Stitch Design Rules. Wilcom. Disponível em: Hatch Embroidery — Online Help. Acesso em: 8 ago. 2026."
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
    id: "ref-a3",
    author: "STANDARDIZED EMBROIDERY DIGITIZING TERMINOLOGY (ADET)",
    title: "Standard Glossary of Machine Embroidery & Digitizing Terminology. ADET Standards.",
    publisherOrUrl: "ADET — Technical Standards & Terminology",
    accessDate: "12 ago. 2026",
    fullCitation: "STANDARDIZED EMBROIDERY DIGITIZING TERMINOLOGY (ADET). Standard Glossary of Machine Embroidery & Digitizing Terminology. ADET Standards. Disponível em: ADET — Technical Standards. Acesso em: 12 ago. 2026."
  },
  {
    id: "ref-14",
    author: "WILCOM INTERNATIONAL PTY LTD",
    title: "EmbroideryStudio e4 / Elements: Technical Documentation, Stitch File Formats Specifications and Physical Fabric Recipes.",
    publisherOrUrl: "Wilcom — Technical Documentation & Help Portal",
    accessDate: "8 ago. 2026",
    fullCitation: "WILCOM INTERNATIONAL PTY LTD. EmbroideryStudio e4 / Elements: Technical Documentation, Stitch File Formats Specifications and Physical Fabric Recipes. Sydney: Wilcom. Disponível em: Wilcom — Technical Documentation & Help Portal. Acesso em: 8 ago. 2026."
  },

  // 6. ENGENHARIA TÊXTIL, PESQUISA E CONSULTORIA DE ATELIÊ
  {
    id: "ref-artrelados-consultoria",
    author: "ARTRELADOS BORDADOS / JANETE TÉCNICA",
    title: "Compêndio Prático de Oficina de Bordados Computadorizados: Ensaios de Estabilização, Tensão e Calibração de Matrizes.",
    publisherOrUrl: "Artrelados Bordados — Pesquisa e Ensaios de Ateliê",
    accessDate: "30 ago. 2026",
    fullCitation: "ARTRELADOS BORDADOS / JANETE TÉCNICA. Compêndio Prático de Oficina de Bordados Computadorizados: Ensaios de Estabilização, Tensão e Calibração de Matrizes. Campo Grande: Ateliê Artrelados. Disponível em: Dicionário Ilustrado de Bordado Eletrônico (DIBE). Acesso em: 30 ago. 2026."
  },
  {
    id: "ref-pellerin-textile",
    author: "PELLERIN MILNOR / TEXTILE RESEARCH INSTITUTE",
    title: "Dimensional Stability and Tensile Shrinkage of Embroidered Knits and Hydrophilic Wovens. TRI Technical Reports.",
    publisherOrUrl: "Textile Research Institute Reports",
    accessDate: "27 ago. 2026",
    fullCitation: "PELLERIN MILNOR / TEXTILE RESEARCH INSTITUTE. Dimensional Stability and Tensile Shrinkage of Embroidered Knits and Hydrophilic Wovens. Princeton: Textile Research Institute. Disponível em: TRI Technical Reports. Acesso em: 27 ago. 2026."
  },
  {
    id: "ref-senai-textil",
    author: "SENAI CETIQT — CENTRO DE TECNOLOGIA DA INDÚSTRIA QUÍMICA E TÊXTIL",
    title: "Tecnologia Têxtil, Estrutura dos Tecidos e Mecânica da Costura Industrial. Série Têxtil e Vestuário.",
    publisherOrUrl: "SENAI CETIQT Biblioteca Técnica",
    accessDate: "26 ago. 2026",
    fullCitation: "SENAI CETIQT — CENTRO DE TECNOLOGIA DA INDÚSTRIA QUÍMICA E TÊXTIL. Tecnologia Têxtil, Estrutura dos Tecidos e Mecânica da Costura Industrial. Rio de Janeiro: SENAI CETIQT. Disponível em: SENAI CETIQT Biblioteca Técnica. Acesso em: 26 ago. 2026."
  }
];
