export interface OfficialManual {
  id: string;
  category: "Domésticas & Semi-Industriais" | "Industriais & Multiagulhas" | "Agulhas & Mecânica de Precisão" | "Linhas, Softwares & Tensão";
  manufacturer: string;
  title: string;
  coverage: string;
  directUrl: string;
  sourceType: "Manual de Instrução" | "Manual de Serviço" | "Boletim Técnico de Tolerâncias" | "Guia de Calibração";
  technicalHighlight: string;
}

export const OFFICIAL_MANUALS: OfficialManual[] = [
  // 1. BROTHER
  {
    id: "brother-support-portal",
    category: "Domésticas & Semi-Industriais",
    manufacturer: "Brother International",
    title: "Brother Support & Downloads Center: Manuais Oficiais de Bordadeiras",
    coverage: "Séries PE (PE810L, PE770), BP (BP1430, BP1530, BP2150), NQ1400, Stellaire e Luminaire.",
    directUrl: "https://support.brother.com/",
    sourceType: "Manual de Instrução",
    technicalHighlight: "Diagrama oficial de passagem de linha superior, limpeza do sensor óptico da bobina e desobstrução da lançadeira rotativa magnética."
  },
  {
    id: "brother-pr-multi-manual",
    category: "Industriais & Multiagulhas",
    manufacturer: "Brother International",
    title: "Série PR Multi-Needle: PR655, PR670E, PR680W & PR1055X Manual Técnico",
    coverage: "Máquinas multiagulhas 6 e 10 agulhas com sistema de braço cilíndrico tubular.",
    directUrl: "https://support.brother.com/",
    sourceType: "Manual de Serviço",
    technicalHighlight: "Calibração dos sensores de quebra de linha de 360°, ângulo padrão de parada do volante e troca automática de cores."
  },

  // 2. JANOME
  {
    id: "janome-official-manuals",
    category: "Domésticas & Semi-Industriais",
    manufacturer: "Janome América Latina / Global",
    title: "Janome Global Customer Support: Manuais das Bordadeiras Memory Craft",
    coverage: "Modelos MC200E, MC400E, MC500E, MC550E e Skyline S9.",
    directUrl: "https://www.janome.com/support/manuals/",
    sourceType: "Manual de Instrução",
    technicalHighlight: "Ajuste do ponto de cruzamento de calcador, posicionamento correto da caixa de bobina com ponto amarelo e fixação das garras magnéticas dos bastidores RE28b e RE36b."
  },
  {
    id: "janome-mb-series",
    category: "Industriais & Multiagulhas",
    manufacturer: "Janome Global",
    title: "Janome MB-4S & MB-7 Multi-Needle Operator and Service Reference",
    coverage: "Bordadeiras multiagulhas compactas Janome 4 e 7 agulhas.",
    directUrl: "https://www.janome.com/support/manuals/",
    sourceType: "Manual de Serviço",
    technicalHighlight: "Ajuste do sistema de corte automático móvel, regulagem da mola de recuo do estica-fio e compensação da alavanca do tira-fio."
  },

  // 3. TYPICAL
  {
    id: "typical-sewing-machines",
    category: "Industriais & Multiagulhas",
    manufacturer: "Typical Sewing Machine Co. / Typical International",
    title: "Typical Industrial & Electronic Embroidery Machines: Technical Documentation & Parts Book",
    coverage: "Máquinas eletrônicas de cabeçote único, multiagulhas e pesponto industrial computadorizado.",
    directUrl: "http://www.typical-sewing.com/",
    sourceType: "Manual de Serviço",
    technicalHighlight: "Padrão de agulhas industriais de haste cilíndrica DBxK5 / DPx5, sincronismo da lançadeira rotativa de grande capacidade (Jumbo Hook) e regulagem da faca de corte móvel."
  },

  // 4. TAJIMA
  {
    id: "tajima-technical-documentation",
    category: "Industriais & Multiagulhas",
    manufacturer: "Tajima Group (Tokai Industrial Sewing Machine)",
    title: "Tajima Group Technical Support & Industrial Embroidery Documentation",
    coverage: "Séries TMBR-SC, TMAR-KC, TFMX, TCFX e cabeçotes multi-cabeça industriais.",
    directUrl: "https://www.tajima.com/support/",
    sourceType: "Manual de Serviço",
    technicalHighlight: "Padrão de sincronismo universal de lançadeira em 198° a 201°, clearance de 0.08mm entre ponta e cava da agulha DBxK5, temporização do limpador wiper e lubrificação pneumática centralizada."
  },

  // 5. BARUDAN
  {
    id: "barudan-brasil-tech",
    category: "Industriais & Multiagulhas",
    manufacturer: "Barudan Co., Ltd. / Barudan do Brasil",
    title: "Barudan Technical Support, Downloads & Maintenance Manuals",
    coverage: "Séries BEXY, BEKT, BENT e máquinas multicabeças industriais para serviço pesado.",
    directUrl: "https://www.barudan.com.br/",
    sourceType: "Manual de Serviço",
    technicalHighlight: "Mecanismo patenteado de troca de cor com trava positiva, regulagem do pescador de bobina (picker) e especificações do tensiômetro digital."
  },

  // 6. SWF / SUNSTAR
  {
    id: "swf-sunstar-support",
    category: "Industriais & Multiagulhas",
    manufacturer: "SWF / Sunstar Co., Ltd. (Coreia do Sul)",
    title: "SWF Multi-Head Automatic Embroidery Machines: Service & Parts Manuals",
    coverage: "Séries SWF/E-T1201C, SWF/MAS-12, K-Series e máquinas de alta velocidade (1200 PPM).",
    directUrl: "https://www.swf-embroidery.com/",
    sourceType: "Manual de Serviço",
    technicalHighlight: "Calibração dos encoders de cabeçote, folga de dentes de arrasto de pantógrafo e regulagem do solenóide de corte elétrico."
  },

  // 7. HAPPYJAPAN
  {
    id: "happyjapan-embroidery-portal",
    category: "Industriais & Multiagulhas",
    manufacturer: "HappyJapan Inc. (Japão)",
    title: "Happy Multi-Needle Automatic Embroidery Machines: Operation & Maintenance Manuals",
    coverage: "Modelos HCH-701 Journey, HCS-1201 Voyager, HCD2-1501 e HCR3 multi-cabeça.",
    directUrl: "https://happyjapan.com/machine/apparel/",
    sourceType: "Manual de Instrução",
    technicalHighlight: "Ajuste milimétrico do came de salto, troca rápida de bastidores tubulares e calibração de tensão para linhas 75D de microdetalhes."
  },

  // 8. MELCO
  {
    id: "melco-support-center",
    category: "Industriais & Multiagulhas",
    manufacturer: "Melco Embroidery Systems (EUA)",
    title: "Melco EMT16X Operator Manual & Acti-Feed™ Thread Delivery Reference",
    coverage: "Bordadeiras industriais modulares de alta performance Melco EMT16X e Bravo.",
    directUrl: "https://www.melco.com/support/",
    sourceType: "Manual de Serviço",
    technicalHighlight: "Sistema sem discos de tensão mecânica (Acti-Feed™ patenteado) que alimenta a linha por micro-alimentação eletrônica controlada pelo software."
  },

  // 9. JACK SEWING MACHINE
  {
    id: "jack-sewing-tech",
    category: "Industriais & Multiagulhas",
    manufacturer: "Jack Technology Co., Ltd.",
    title: "Jack Global Support: Manuals, Spare Parts Books & Technical Specifications",
    coverage: "Máquinas industriais computadorizadas e equipamentos de bordado eletrônico Jack.",
    directUrl: "https://www.chinajack.com/",
    sourceType: "Manual de Instrução",
    technicalHighlight: "Servomotores integrados de acionamento direto (Direct-Drive), lubrificação automática de cárter semi-seco e sensores ópticos de fim de costura."
  },

  // 10. GROZ-BECKERT
  {
    id: "groz-beckert-technical-portal",
    category: "Agulhas & Mecânica de Precisão",
    manufacturer: "Groz-Beckert KG (Alemanha)",
    title: "Groz-Beckert Data Sheets: Needles for Machine Embroidery (DBxK5 & 130/705 H)",
    coverage: "Agulhas industriais de titânio GEBEDUR, pontas redondas (FFG/SES), pontas de bola (FG/SUK) e microcavas NY2.",
    directUrl: "https://www.groz-beckert.com/",
    sourceType: "Boletim Técnico de Tolerâncias",
    technicalHighlight: "Tabela dimensional de flexão de haste, dissipação térmica em velocidades de 1.000 PPM e compatibilidade milimétrica com tecidos delicados e sintéticos."
  },

  // 11. SCHMETZ
  {
    id: "schmetz-needles-abc",
    category: "Agulhas & Mecânica de Precisão",
    manufacturer: "Ferd. Schmetz GmbH (Alemanha)",
    title: "SCHMETZ ABC of Needles & Color-Coding System for Embroidery",
    coverage: "Sistema doméstico 130/705 H-E (Embroidery), Gold Titanium, Metallic e Microtex.",
    directUrl: "https://www.schmetz.com/",
    sourceType: "Boletim Técnico de Tolerâncias",
    technicalHighlight: "Identificação das pontas por código de cores, formato da canaleta ampla para linhas metálicas e prevenção de furos cortados em malha."
  },

  // 12. ORGAN NEEDLES
  {
    id: "organ-needle-global",
    category: "Agulhas & Mecânica de Precisão",
    manufacturer: "Organ Needle Co., Ltd. (Japão)",
    title: "Organ Needles Technical Handbook: DBxK5, HAx1EBBR & Titanium PD Series",
    coverage: "Agulhas para alta velocidade em máquinas japonesas e sistemas reforçados para bonés estruturados.",
    directUrl: "https://organ-needles.com/",
    sourceType: "Boletim Técnico de Tolerâncias",
    technicalHighlight: "Geometria da ponta especial KN/BP para malhas elásticas e revestimento Perfect Durability (PD) de nitreto de titânio contra desgaste abrasivo."
  },

  // 13. HIROSE HOOKS & KOBAN (Lançadeiras)
  {
    id: "hirose-hook-japan",
    category: "Agulhas & Mecânica de Precisão",
    manufacturer: "Hirose Global / Koban Hooks (Japão)",
    title: "Hirose Rotary Hooks Engineering Manual: Timing, Lubrication & Clearance",
    coverage: "Lançadeiras rotativas industriais e semi-industriais para máquinas de bordar Tajima, Barudan, Brother, SWF, Typical e Happy.",
    directUrl: "https://www.hirose-hooks.com/",
    sourceType: "Manual de Serviço",
    technicalHighlight: "Folga lateral mandatória de 0.05 a 0.10 mm entre o bico da lançadeira e a agulha, uso de lubrificante fino mineral ISO VG 10 e remoção de microrrebarbas."
  },

  // 14. TOWA (Tensiômetros)
  {
    id: "towa-bobbin-tensiometer",
    category: "Linhas, Softwares & Tensão",
    manufacturer: "Towa Industry Co., Ltd. (Japão)",
    title: "Towa Bobbin Case Tension Gauge User Manual & Calibration Chart",
    coverage: "Medidores de tensão TM-1 (tamanho L), TM-2 (tamanho M) e tensiômetro digital para linha superior e inferior.",
    directUrl: "https://www.towamfg.co.jp/",
    sourceType: "Guia de Calibração",
    technicalHighlight: "Padrão de pressão da mola da caixa de bobina: 110g a 130g para ponto cheio equilibrado (regra do terço central no verso)."
  },

  // 15. WILCOM & HATCH
  {
    id: "wilcom-documentation-center",
    category: "Linhas, Softwares & Tensão",
    manufacturer: "Wilcom International / Hatch Embroidery",
    title: "Wilcom EmbroideryStudio & Hatch: Complete User Guide and Fabric Recipe Assistance",
    coverage: "Digitalização profissional, compensação de puxão (Pull Compensation), densidade fracionada e subpontos (Underlay).",
    directUrl: "https://www.wilcom.com/resources/documentation",
    sourceType: "Manual de Instrução",
    technicalHighlight: "Cálculo de compensação de repuxo conforme elasticidade da trama e gerenciamento de conectores automáticos para evitar desfiamento no corte."
  },

  // 16. SINGER & BERNINA
  {
    id: "singer-bernina-manuals",
    category: "Domésticas & Semi-Industriais",
    manufacturer: "SVP Worldwide / Bernina International",
    title: "Singer Superb, Legacy & Bernina 500/700/880 Embroidery User Portals",
    coverage: "Máquinas computadorizadas domésticas e semi-profissionais.",
    directUrl: "https://www.singer.com/manuals",
    sourceType: "Manual de Instrução",
    technicalHighlight: "Troca do bastidor com posicionamento zero do pantógrafo e ajuste fino de tensão em linhas de poliéster 120D/2."
  }
];
