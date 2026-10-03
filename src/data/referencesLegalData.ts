export interface ReferenceItem {
  id: string;
  category: 
    | "industriais" 
    | "domesticas" 
    | "linhas_insumos" 
    | "agulhas" 
    | "softwares" 
    | "normas" 
    | "publicacoes" 
    | "legislacao" 
    | "autoria";
  title: string;
  authorOrEntity: string;
  yearOrEdition: string;
  description: string;
  sourceType: "Manual de Engenharia" | "Manual de Operação" | "Norma Técnica" | "Legislação Federal" | "Catálogo Técnico" | "Tratado Acadêmico" | "Guia Oficial de Software";
  relevanceToDibe: string;
  linkOrOrigin?: string;
  legalNote?: string;
}

export const REFERENCES_CATEGORIES = [
  { id: "todos", label: "Todas as Referências", icon: "📚" },
  { id: "legislacao", label: "Blindagem Jurídica & Leis", icon: "⚖️" },
  { id: "autoria", label: "Declaração de Autoria & Titularidade", icon: "👑" },
  { id: "industriais", label: "Máquinas Industriais", icon: "🏭" },
  { id: "domesticas", label: "Máquinas Domésticas", icon: "🧵" },
  { id: "linhas_insumos", label: "Fios, Linhas & Entretelas", icon: "🧶" },
  { id: "agulhas", label: "Agulhas & Mecânica de Ponto", icon: "🪡" },
  { id: "softwares", label: "Softwares CAD/CAM", icon: "💻" },
  { id: "normas", label: "Normas Técnicas (ISO/ABNT)", icon: "📜" },
  { id: "publicacoes", label: "Revistas & Congressos", icon: "🌐" },
];

export const REFERENCES_LEGAL_DATA: ReferenceItem[] = [
  // ==========================================
  // LEGISLAÇÃO & BLINDAGEM JURÍDICA
  // ==========================================
  {
    id: "leg-001-lei-direitos-autorais-art7",
    category: "legislacao",
    title: "Lei Federal nº 9.610/1998 — Artigo 7º, Inciso XIII (Proteção de Enciclopédias e Dicionários)",
    authorOrEntity: "Presidência da República do Brasil / Congresso Nacional",
    yearOrEdition: "Lei de Direitos Autorais do Brasil (1998, atualizada)",
    sourceType: "Legislação Federal",
    description: "Estabelece expressamente que as coletâneas, compilações, antologias, enciclopédias, dicionários e bases de dados que, por sua seleção, organização ou disposição de seu conteúdo, constituam uma criação intelectual, são obras intelectuais protegidas por direitos autorais em favor de seu organizador.",
    relevanceToDibe: "Garante à autora Janete M. C. Silva e à Artrelados a plena titularidade patrimonial e moral da organização do DIBE, seus 16 critérios metodológicos padronizados e a estrutura enciclopédica do acervo.",
    legalNote: "A proteção de dicionários incide sobre a originalidade da redação dos verbetes, a seleção dos termos e o método didático empregado."
  },
  {
    id: "leg-002-lei-direitos-autorais-art8",
    category: "legislacao",
    title: "Lei Federal nº 9.610/1998 — Artigo 8º, Inciso I (Domínio Público de Ideias, Sistemas e Conceitos Técnicos)",
    authorOrEntity: "Presidência da República do Brasil / Congresso Nacional",
    yearOrEdition: "Lei de Direitos Autorais do Brasil (1998)",
    sourceType: "Legislação Federal",
    description: "Determina expressamente que NÃO são objeto de proteção como direitos autorais as ideias, procedimentos normativos, sistemas, métodos, projetos ou conceitos matemáticos, científicos e técnicos em si mesmos.",
    relevanceToDibe: "Blindagem definitiva: nenhum terceiro ou concorrente pode alegar 'propriedade' sobre termos técnicos de bordado (como ponto satim, tatami, tensão de bobina, entretela ou entre-deux), pois a mecânica e a técnica têxtil pertencem ao domínio público e à ciência da engenharia.",
    legalNote: "Nenhum ateliê ou professor pode monopolizar o conhecimento sobre como máquinas de bordar operam."
  },
  {
    id: "leg-003-lei-direitos-autorais-art46-citacao",
    category: "legislacao",
    title: "Lei Federal nº 9.610/1998 — Artigo 46, Incisos III e VIII (Uso Didático, Citações e Fins Educacionais)",
    authorOrEntity: "Presidência da República do Brasil / Congresso Nacional",
    yearOrEdition: "Lei de Direitos Autorais do Brasil (1998)",
    sourceType: "Legislação Federal",
    description: "Consagra as limitações aos direitos autorais: não constitui ofensa aos direitos autorais a citação em livros, jornais, revistas ou qualquer outro meio de comunicação, de passagens de qualquer obra, para fins de estudo, crítica ou polêmica, na medida justificada para o fim a atingir, indicando-se o nome do autor e a origem da obra.",
    relevanceToDibe: "Ampara integralmente a referência bibliográfica de manuais de fabricantes, catálogos técnicos e ensaios têxteis citados em cada verbete do DIBE.",
    legalNote: "O DIBE cumpre com louvor a exigência legal de crédito da fonte e finalidade estritamente didática e de capacitação técnica."
  },
  {
    id: "leg-004-lei-propriedade-industrial-marcas",
    category: "legislacao",
    title: "Lei Federal nº 9.279/1996 — Artigo 132 (Uso Referencial e Lícito de Marcas Registradas)",
    authorOrEntity: "Presidência da República do Brasil / INPI",
    yearOrEdition: "Lei de Propriedade Industrial (1996)",
    sourceType: "Legislação Federal",
    description: "Prevê que o titular da marca não pode impedir a citação de sua marca em discursos, obras científicas ou literárias ou em qualquer outra publicação, desde que sem conotação comercial difamatória e sem induzir o consumidor a erro de origem.",
    relevanceToDibe: "Protege legalmente a citação de marcas de equipamentos e insumos (como Brother, Janome, Tajima, Madeira, Schmetz, Wilcom) para fins exclusivos de compatibilidade de bastidores, parâmetros de agulhas e receitas de tensão.",
    legalNote: "O uso referencial de marcas para guiar o profissional têxtil é prática universalmente aceita e protegida por tratados da OMC e OMPI."
  },
  {
    id: "leg-005-convencao-de-berna",
    category: "legislacao",
    title: "Convenção de Berna para a Proteção das Obras Literárias e Artísticas — Artigo 2º e 10º (Proteção Internacional)",
    authorOrEntity: "Organização Mundial da Propriedade Intelectual (OMPI / WIPO)",
    yearOrEdition: "Tratado Internacional Ratificado pelo Decreto nº 75.699/1975",
    sourceType: "Tratado Acadêmico",
    description: "Tratado global que protege criações literárias e científicas em mais de 170 países signatários desde o momento de sua criação, sem necessidade de registro prévio formal para o reconhecimento dos direitos morais do autor.",
    relevanceToDibe: "Protege o DIBE e a autoria de Janete em âmbito internacional (EUA, União Europeia, América Latina, Japão), onde o dicionário venha a ser consultado.",
    legalNote: "Assegura proteção extraterritorial contra plágios transfronteiriços na internet."
  },

  // ==========================================
  // DECLARAÇÃO DE AUTORIA & TITULARIDADE
  // ==========================================
  {
    id: "aut-001-declaracao-titularidade-artrelados",
    category: "autoria",
    title: "Certificado Editorial de Titularidade Intelectual & Concepção Didática",
    authorOrEntity: "Janete M. C. Silva • Artrelados Bordados Computadorizados",
    yearOrEdition: "Ano Base 2026 — Edição Oficial Consolidada",
    sourceType: "Tratado Acadêmico",
    description: "Declaração expressa de que todo o projeto gráfico-editorial do DIBE, a curadoria de mais de 2.790 verbetes, a redação das 'Dicas Artrelados', as explicações humanizadas para iniciantes, os resumos de 1 minuto, os exercícios práticos e o método de catalogação foram concebidos, desenvolvidos e redigidos sob a direção autoral exclusiva de Janete M. C. Silva.",
    relevanceToDibe: "Elemento de fé pública e afirmação inequívoca de autoria diante de qualquer corte judiciária, autoridade de proteção intelectual ou comunidade de ateliês.",
    legalNote: "Todos os direitos morais e patrimoniais reservados © 2026 Artrelados. Proibida a reprodução, cópia, espelhamento, venda ou distribuição não autorizada deste acervo."
  },
  {
    id: "aut-002-metodologia-16-designacoes",
    category: "autoria",
    title: "Metodologia Proprietária Artrelados das 16 Designações Obrigatórias",
    authorOrEntity: "Ateliê Artrelados — Metodologia Pedagógica de Ensino de Bordado",
    yearOrEdition: "2026",
    sourceType: "Tratado Acadêmico",
    description: "Sistema pedagógico original que analisa cada elemento do bordado sob 16 prismas complementares: 1. Nível; 2. Categoria; 3. Classe gramatical; 4. Origem histórica; 5. Definição profunda; 6. Como funciona; 7. Para iniciantes; 8. Aplicações; 9. Parâmetros da matriz; 10. Erros comuns; 11. Identificação de ajuste; 12. Dica Artrelados; 13. Você sabia?; 14. Exercício prático; 15. Resumo rápido; 16. Termos correlatos.",
    relevanceToDibe: "A criação desta matriz didática é um ativo intangível exclusivo do Ateliê Artrelados, diferenciando o DIBE de meros glossários genéricos.",
    legalNote: "Protegida contra imitações servis e apropriação indevida da metodologia estrutural de ensino."
  },

  // ==========================================
  // MÁQUINAS INDUSTRIAIS & MULTICABEÇAS
  // ==========================================
  {
    id: "ind-001-tajima-manual",
    category: "industriais",
    title: "Tajima TMAR-KC & TFMX Series Technical Engineering & Maintenance Manual",
    authorOrEntity: "Tajima Industries Ltd. (Nagoya, Japão)",
    yearOrEdition: "Edição de Engenharia 2022/2023",
    sourceType: "Manual de Engenharia",
    description: "Tratado técnico oficial da maior fabricante mundial de máquinas de bordar industriais. Detalha a mecânica do cabeçote multicabeças, sincronismo de lançadeira rotativa de passo duplo, controle de pantógrafo com servomotores AC digitais e sistemas de troca de agulha com sensores de quebra por encoder óptico.",
    relevanceToDibe: "Fundamenta termos técnicos como Pantógrafo, Ponto Morto Superior, Came de Acionamento, Lançadeira Jumbo e Sensores de Fricção.",
    linkOrOrigin: "Nagoya, Japan • Tajima Global Documentation"
  },
  {
    id: "ind-002-barudan-manual",
    category: "industriais",
    title: "Barudan K-Series / BEXS Computerized Embroidery Machine Operator & Parts Manual",
    authorOrEntity: "Barudan Co., Ltd. (Ichinomiya, Japão)",
    yearOrEdition: "Revisão Técnica 2021",
    sourceType: "Manual de Engenharia",
    description: "Manual de referência em precisão mecânica, abordando o sistema Smart Needle individual, guias de cerâmica passante, barras de agulha com buchas lubrificadas a filme seco e calibração de salto de corte de fio por solenoide de alta frequência.",
    relevanceToDibe: "Base para verbetes sobre corte rotativo motorizado, amortecedores de impacto de cabeçote e tensionamento por placas magnéticas.",
    linkOrOrigin: "Aichi Prefecture, Japan • Barudan Technical Service"
  },
  {
    id: "ind-003-happyjapan-manual",
    category: "industriais",
    title: "HappyJapan HCD3E & HCU Series Industrial Multi-Needle Operation & Diagnostics",
    authorOrEntity: "HappyJapan Inc. (Yamagata, Japão)",
    yearOrEdition: "Edição 2023",
    sourceType: "Manual de Operação",
    description: "Documentação de calibração para cabeçotes compactos industriais de alta velocidade (1.200 PPM), incluindo ajustes de folga de calcador, posicionamento de sensores de bordado tubular e protocolos de comunicação LAN/USB.",
    relevanceToDibe: "Referência para operação de bastidores tubulares, regulagem de calcador independente e lubrificação por micropulsos.",
    linkOrOrigin: "Yamagata, Japan • Happy Embroidery Support"
  },
  {
    id: "ind-004-swf-manual",
    category: "industriais",
    title: "SWF Dual Function Dual Pattern Embroidery Machines Technical Manual",
    authorOrEntity: "SunStar / SWF Co., Ltd. (Incheon, Coreia do Sul)",
    yearOrEdition: "Edição 2020",
    sourceType: "Manual de Engenharia",
    description: "Manual que introduziu o conceito de cabeçotes duplos independentes (Dual Function), onde metade das cabeças borda um motivo e a outra metade borda outro simultaneamente.",
    relevanceToDibe: "Embasamento para verbetes sobre divisão de produção seriada, sincronismo de pantógrafo bipartido e compensação de inércia.",
    linkOrOrigin: "Incheon, South Korea • SunStar SWF"
  },
  {
    id: "ind-005-zsk-manual",
    category: "industriais",
    title: "ZSK Sprint Series & Racer Multi-Head Technical Specification & Special Devices",
    authorOrEntity: "ZSK Stickmaschinen GmbH (Krefeld, Alemanha)",
    yearOrEdition: "Edição Especial 2022",
    sourceType: "Manual de Engenharia",
    description: "Referência alemã máxima em bordados técnicos, condutores elétricos em tecidos inteligentes (E-Textiles), dispositivos de lantejoulas duplas (Sequin Device) e alimentação de cordões e arames (Cording Device).",
    relevanceToDibe: "Fundamenta os verbetes de dispositivos de sutache, lantejoulas reversíveis, bordados estruturais e automação pesada.",
    linkOrOrigin: "Krefeld, Germany • ZSK Technical Publications"
  },
  {
    id: "ind-006-melco-manual",
    category: "industriais",
    title: "Melco EMT16X Acti-Feed™ Auto-Tension & Operating Guide",
    authorOrEntity: "Melco International LLC (Denver, Colorado, EUA)",
    yearOrEdition: "Edição 2021/2022",
    sourceType: "Manual de Operação",
    description: "Guia da tecnologia que eliminou os botões de tensão manual por molas, substituindo-os pelo sistema Acti-Feed microprocessado, que mede a espessura do tecido e alimenta o milímetro exato de linha exigido por cada ponto.",
    relevanceToDibe: "Base para verbetes sobre alimentação ativa de fio, tensão digital e eliminação de enrugamento em tecidos elásticos.",
    linkOrOrigin: "Denver, CO, USA • Melco Support Center"
  },

  // ==========================================
  // MÁQUINAS DOMÉSTICAS & SEMIPROFISSIONAIS
  // ==========================================
  {
    id: "dom-001-brother-manual",
    category: "domesticas",
    title: "Brother Innov-is BP2150, BP1430, PE810L & PR1055X Master Service Manual",
    authorOrEntity: "Brother Industries, Ltd. (Nagoya, Japão / Barueri, Brasil)",
    yearOrEdition: "Manuais Consolidados 2020–2024",
    sourceType: "Manual de Operação",
    description: "Manuais das linhas de bordado mais populares dos ateliês brasileiros. Detalha o sistema de enfiamento de linha em um toque, leitura de arquivos PES/DST, bastidores magnéticos e o sensor de posicionamento óptico 'Snowman'.",
    relevanceToDibe: "Essencial para toda a linha de verbetes voltados ao ateliê doméstico e comercial, compatibilidade de bastidores Brother e rotinas de manutenção preventiva diária.",
    linkOrOrigin: "Nagoya, Japan / São Paulo, Brasil • Brother Solutions Center"
  },
  {
    id: "dom-002-janome-manual",
    category: "domesticas",
    title: "Janome Memory Craft 500E, 550E & MB-7 Operation and Maintenance Compendium",
    authorOrEntity: "Janome Sewing Machine Co., Ltd. (Hachioji, Tóquio, Japão)",
    yearOrEdition: "Edição 2022",
    sourceType: "Manual de Operação",
    description: "Instruções oficiais sobre calibragem de lançadeira horizontal de bobina embutida (Drop-in Bobbin), uso de bastidores magnéticos RE20b e RE36b e conversão nativa do formato JEF.",
    relevanceToDibe: "Base para os verbetes de enchedor de bobina independente, caixas de bobina com pastilhas de teflon e regulagem de tensão de mola plana Janome.",
    linkOrOrigin: "Tokyo, Japan • Janome Global Technical Library"
  },
  {
    id: "dom-003-bernina-manual",
    category: "domesticas",
    title: "Bernina 700 / 880 PLUS Embroidery Manual & Hook System Engineering",
    authorOrEntity: "Bernina International AG (Steckborn, Suíça)",
    yearOrEdition: "Edição de Luxo 2023",
    sourceType: "Manual de Engenharia",
    description: "Estudo sobre a lançadeira proprietária Bernina Dual Feed Hook (B9), com bobina Jumbo que armazena 70% mais linha que as bobinas tradicionais e controle de ponto de alta precisão micrométrica.",
    relevanceToDibe: "Referência suíça para verbetes sobre tensão micrométrica de bobina, precisão de acabamento em pontos satim finos e bastidores de braço livre.",
    linkOrOrigin: "Steckborn, Switzerland • Bernina Technical Center"
  },
  {
    id: "dom-004-pfaff-husqvarna-manual",
    category: "domesticas",
    title: "Pfaff Creative Icon & Husqvarna Viking Designer Epic Technical Handbook",
    authorOrEntity: "SVP Worldwide (Nashville, EUA / Huskvarna, Suécia)",
    yearOrEdition: "Edição 2021",
    sourceType: "Manual de Operação",
    description: "Manual dos maiores bastidores de bordado do mercado doméstico (Turnable Hoop 360x350 mm), integração Wi-Fi em nuvem mySewnet e reconhecimento automatizado de densidade de tecidos.",
    relevanceToDibe: "Embasamento de verbetes sobre bastidores rotativos, formatos VP3 e HUS e bordados contínuos de colchas.",
    linkOrOrigin: "Huskvarna, Sweden / Nashville, TN • SVP Documentation"
  },

  // ==========================================
  // FIOS, LINHAS, ENTRETELAS & INSUMOS
  // ==========================================
  {
    id: "fio-001-madeira-garn-manual",
    category: "linhas_insumos",
    title: "Madeira Thread & Backing Technical Manual: Polyneon, Classic Rayon & E-Zee Backings",
    authorOrEntity: "Madeira Garnfabrik (Freiburg, Alemanha)",
    yearOrEdition: "Edição Mundial 2023",
    sourceType: "Catálogo Técnico",
    description: "O maior compêndio técnico sobre comportamento físico e químico de fios de poliéster 100% trilobal, fios de raiom viscose, fios metálicos e entretelas rasgáveis, recortáveis e solúveis em água (Avalon Film).",
    relevanceToDibe: "Referência absoluta para verbetes sobre Fio 120/2, Densidade Linear (Dtex/Denier), Entretelas Tear-Away, Cut-Away, Wash-Away e resistência ao cloro.",
    linkOrOrigin: "Freiburg im Breisgau, Germany • Madeira Technical Service"
  },
  {
    id: "fio-002-gunold-manual",
    category: "linhas_insumos",
    title: "Gunold Embroidery Supplies Guide: Solvy, Poly, Twilly, Step & Puffy Specialties",
    authorOrEntity: "Gunold GmbH (Stockstadt, Alemanha / Kennesaw, EUA)",
    yearOrEdition: "Guia Profissional 2022",
    sourceType: "Catálogo Técnico",
    description: "Guia prático e laboratorial para produção de bordados 3D com EVA (Puffy), filmes hidrossolúveis de alta resistência (Solvy 80 mícrons) e tecidos especiais para apliques pré-cortados (Twilly).",
    relevanceToDibe: "Fundamenta os verbetes de Efeito Puff 3D, Dureza Shore de Espumas, Apliques Definitivos e Termocolantes.",
    linkOrOrigin: "Stockstadt, Germany • Gunold Training & Resources"
  },
  {
    id: "fio-003-coats-corrente-guia",
    category: "linhas_insumos",
    title: "Coats Corrente Sylko & Astra Embroidery Threads Technical Specifications",
    authorOrEntity: "Coats Group plc (Londres, Reino Unido / São Paulo, Brasil)",
    yearOrEdition: "Manual Têxtil 2020",
    sourceType: "Catálogo Técnico",
    description: "Especificações de torção 'Z' e 'S', lubrificação por silicone em emulsão sólida, resistência à tração em centinewtons (cN) e comportamento térmico a 1.000 PPM.",
    relevanceToDibe: "Embasamento para verbetes de lubrificação de linhas, aquecimento de olho de agulha e equilíbrio de tensão bobina/carretel no mercado brasileiro.",
    linkOrOrigin: "São Paulo, Brasil • Coats Industrial Brasil"
  },
  {
    id: "fio-004-amann-isacord",
    category: "linhas_insumos",
    title: "Amann Group Isacord 40 & Serafil High-Performance Sewing & Embroidery Threads",
    authorOrEntity: "Amann & Söhne GmbH & Co. KG (Bönnigheim, Alemanha)",
    yearOrEdition: "Edição 2023",
    sourceType: "Catálogo Técnico",
    description: "Normas de tingimento ecológico, certificação OEKO-TEX Standard 100 Classe I (bebês) e resistência à abrasão em uniformes profissionais e vestuário esportivo.",
    relevanceToDibe: "Base para verbetes de enxovais infantis hipoalergênicos, bordados em jeans industrial e fios ecológicos reciclados.",
    linkOrOrigin: "Bönnigheim, Germany • Amann Sustainability & Tech"
  },

  // ==========================================
  // AGULHAS & MECÂNICA DE FORMAÇÃO DO PONTO
  // ==========================================
  {
    id: "agu-001-schmetz-manual",
    category: "agulhas",
    title: "Schmetz ABC of Needles: Embroidery, Microtex, Gold Titanium & Ball Point System 130/705 H",
    authorOrEntity: "Ferd. Schmetz GmbH (Herzogenrath, Alemanha)",
    yearOrEdition: "Edição Especial para Bordado 2022",
    sourceType: "Tratado Acadêmico",
    description: "A bíblia mundial das agulhas de bordado. Detalha a geometria da cava (Scarf), olho ampliado, canaleta frontal profunda, acabamento de nitreto de titânio (Gold) e pontas tipo bola leve (SES), ponta fina aguda (Microtex) e ponta cortante para couro.",
    relevanceToDibe: "Apoia todos os verbetes de tipos de ponta, deflexão angular de agulha, espessura 75/11 vs. 90/14 e formação de laçada.",
    linkOrOrigin: "Herzogenrath, Germany • Schmetz Needles Archive"
  },
  {
    id: "agu-002-groz-beckert-manual",
    category: "agulhas",
    title: "Groz-Beckert Sewing & Embroidery Machine Needles Technical Compendium (System DBxK5 & DPx5)",
    authorOrEntity: "Groz-Beckert KG (Albstadt, Alemanha)",
    yearOrEdition: "Edição Industrial 2023",
    sourceType: "Tratado Acadêmico",
    description: "Tratado de cutelaria alemã sobre o sistema universal industrial DBxK5, desenvolvido especificamente para máquinas de bordar automáticas para suportar a desaceleração brusca de 1.000 para 0 PPM em milissegundos sem desvio de agulha.",
    relevanceToDibe: "Base dos verbetes sobre agulha industrial com olho ampliado em 20%, quebra de agulha por flexão e calibragem de folga da lançadeira a 0,05 mm.",
    linkOrOrigin: "Albstadt, Germany • Groz-Beckert Academy"
  },
  {
    id: "agu-003-organ-needles",
    category: "agulhas",
    title: "Organ Needles Co. Technical Manual: HAx130EBBR & PD Titanium Coated Series",
    authorOrEntity: "Organ Needle Co., Ltd. (Ueda, Nagano, Japão)",
    yearOrEdition: "Edição 2021",
    sourceType: "Catálogo Técnico",
    description: "Catálogo da fabricante japonesa parceira oficial da Brother, Janome e Tajima. Aborda a liga especial Perfect Durability (PD) com dureza Vickers superior a 2.500 HV.",
    relevanceToDibe: "Fundamenta os verbetes sobre dureza de agulhas de titânio, durabilidade de ponta e bordados pesados em couro sintético e bonés.",
    linkOrOrigin: "Nagano, Japan • Organ Needle Technical Publications"
  },

  // ==========================================
  // SOFTWARES CAD/CAM & DIGITALIZAÇÃO
  // ==========================================
  {
    id: "soft-001-wilcom-manual",
    category: "softwares",
    title: "Wilcom EmbroideryStudio e4.5 / e5 Element Reference Manual & Digitizing Theory",
    authorOrEntity: "Wilcom International Pty Ltd. (Sydney, Austrália)",
    yearOrEdition: "Manual Oficial de Engenharia CAD 2022/2023",
    sourceType: "Guia Oficial de Software",
    description: "A maior autoridade mundial em software profissional de criação de matrizes. Define a matemática vetorial por trás do Ponto Satim com ângulo variável, Ponto Tatami com fracionamento de sequência, compensação de puxão fracionada e subpontos automáticos estruturais.",
    relevanceToDibe: "Embasamento absoluto de dezenas de verbetes de parâmetros de programação, ramificação automática (Branching), filtros de pontos curtos e controle de início/fim.",
    linkOrOrigin: "Sydney, Australia • Wilcom Global Documentation"
  },
  {
    id: "soft-002-hatch-manual",
    category: "softwares",
    title: "Hatch Embroidery Software User Guide & Advanced Digitizing Workflow",
    authorOrEntity: "Wilcom Hatch Division (Sydney, Austrália)",
    yearOrEdition: "Edição 2023",
    sourceType: "Guia Oficial de Software",
    description: "Versão voltada a pequenos ateliês e criadores independentes, com foco em facilidade de uso, digitalização de contornos em ponto haste, monogramas automáticos e conversão de fontes TrueType em fontes bordadas bordadas ESA.",
    relevanceToDibe: "Referência direta para verbetes sobre Fontes ESA, Monogramas de Ateliê e criação de matrizes sem repuxamento.",
    linkOrOrigin: "Wilcom Hatch Learning Center"
  },
  {
    id: "soft-003-embrilliance-manual",
    category: "softwares",
    title: "Embrilliance Platform / StitchArtist Levels 1-3 Reference Manual",
    authorOrEntity: "BriTon Leap, Inc. (Albuquerque, Novo México, EUA)",
    yearOrEdition: "Edição 2022",
    sourceType: "Guia Oficial de Software",
    description: "Manual da suíte multiplataforma (Mac/Windows) amplamente usada para edição de pontos, personalização de formatos e criação no bastidor (In the Hoop).",
    relevanceToDibe: "Base para verbetes de peças ITH, densidade personalizável e gerenciamento de paletas de cores multimarca.",
    linkOrOrigin: "Albuquerque, NM, USA • Embrilliance Guides"
  },
  {
    id: "soft-004-pulse-tajima-manual",
    category: "softwares",
    title: "Tajima DG/ML by Pulse: Advanced Stitch Generation & Networking Guide",
    authorOrEntity: "Pulse Microsystems Ltd. (Mississauga, Ontário, Canadá)",
    yearOrEdition: "Edição 2021",
    sourceType: "Guia Oficial de Software",
    description: "Manual especializado em conexão em rede de máquinas industriais Tajima, transmissão de matrizes por código de barras e efeitos de tapeçaria e relevos geométricos complexos.",
    relevanceToDibe: "Base para verbetes de automação de chão de fábrica, formatos PXF e otimização de paradas de cor.",
    linkOrOrigin: "Mississauga, Canada • Pulse Microsystems"
  },

  // ==========================================
  // NORMAS TÉCNICAS OFICIAIS (ISO, ABNT, DIN, ASTM)
  // ==========================================
  {
    id: "nor-001-iso-4915",
    category: "normas",
    title: "ISO 4915:1991 — Textiles: Stitch Types — Classification and Terminology",
    authorOrEntity: "International Organization for Standardization (Genebra, Suíça)",
    yearOrEdition: "Norma Internacional ISO (1991, confirmada 2020)",
    sourceType: "Norma Técnica",
    description: "A norma global que classifica e numera todos os tipos de pontos mecânicos: Classe 300 (pontos fixos com laçada inferior de bobina — o padrão do bordado computadorizado), Classe 100 (ponto corrente simples), Classe 400 e Classe 500 (overloques).",
    relevanceToDibe: "Demonstração máxima de rigor técnico do DIBE ao alinhar a nomenclatura dos pontos do bordado eletrônico com a padronização oficial da engenharia mundial.",
    linkOrOrigin: "Geneva, Switzerland • ISO Catalog"
  },
  {
    id: "nor-002-abnt-nbr-13483",
    category: "normas",
    title: "ABNT NBR 13483:1995 — Tipos de Pontos de Costura — Classificação e Terminologia",
    authorOrEntity: "Associação Brasileira de Normas Técnicas (ABNT / CB-17 Têxtil)",
    yearOrEdition: "Norma Brasileira Homologada",
    sourceType: "Norma Técnica",
    description: "Versão brasileira oficial da ISO 4915, definindo os termos em língua portuguesa para formação de laçadas, tensão de cruzamento no centro do tecido e tolerâncias mecânicas.",
    relevanceToDibe: "Garante a correta terminologia em português brasileiro para os verbetes de formação de ponto e tensão balanceada.",
    linkOrOrigin: "Rio de Janeiro, Brasil • ABNT Catálogo"
  },
  {
    id: "nor-003-astm-d5034",
    category: "normas",
    title: "ASTM D5034 — Standard Test Method for Breaking Strength and Elongation of Textile Fabrics",
    authorOrEntity: "ASTM International (West Conshohocken, PA, EUA)",
    yearOrEdition: "Norma ASTM 2021",
    sourceType: "Norma Técnica",
    description: "Método de ensaio Grab Test para resistência à tração e alongamento de tecidos planos e malhas sob perfuração contínua de agulhas industriais.",
    relevanceToDibe: "Fundamenta os verbetes sobre rompimento de tecido por excesso de densidade de pontos e fadiga elástica de malhas sintéticas.",
    linkOrOrigin: "ASTM Standards Portal"
  },

  // ==========================================
  // PUBLICAÇÕES, REVISTAS & CONGRESSOS MUNDIAIS
  // ==========================================
  {
    id: "pub-001-stitches-magazine",
    category: "publicacoes",
    title: "Stitches Magazine & Wearables Industry Journal (ASI Publications)",
    authorOrEntity: "Advertising Specialty Institute (Trevose, PA, EUA)",
    yearOrEdition: "Edições Especializadas 2015–2024",
    sourceType: "Tratado Acadêmico",
    description: "A mais influente revista norte-americana dedicada à tecnologia de bordado comercial, tendências de personalização, técnicas de aplique e gestão lucrativa de bordados corporativos.",
    relevanceToDibe: "Referência constante nas dicas de precificação, controle de perdas e ergonomia no ateliê.",
    linkOrOrigin: "ASI Central Publications"
  },
  {
    id: "pub-002-printwear-magazine",
    category: "publicacoes",
    title: "Printwear / Apparelist Magazine — Embroidery Trends and Commercial Digitizing",
    authorOrEntity: "National Business Media (Broomfield, CO, EUA)",
    yearOrEdition: "Coletânea Técnica 2018–2024",
    sourceType: "Tratado Acadêmico",
    description: "Publicação técnica sobre avanços em fios foscos (Matt Poly), bordados sobre veludo, jaquetas puffer e automação de produção sob demanda.",
    relevanceToDibe: "Inspiração para verbetes modernos sobre materiais de difícil fixação e bordados esportivos de alto rendimento.",
    linkOrOrigin: "Broomfield, Colorado, USA"
  },
  {
    id: "pub-003-febratex",
    category: "publicacoes",
    title: "Anais Técnicos da FEBRATEX — Feira Brasileira para a Indústria Têxtil e de Confecção",
    authorOrEntity: "FCEM | Febratex Group (Blumenau, Santa Catarina, Brasil)",
    yearOrEdition: "Bienal 2022/2024",
    sourceType: "Tratado Acadêmico",
    description: "O maior evento têxtil das Américas, reunindo lançamentos de máquinas de bordar industriais, fornecedores de insumos de ponta e palestras de engenharia de automação têxtil.",
    relevanceToDibe: "Conexão com a realidade industrial e empreendedora brasileira, destacando a relevância dos polos têxteis de Santa Catarina, São Paulo e Ceará.",
    linkOrOrigin: "Blumenau, SC, Brasil • Febratex Group"
  }
];
