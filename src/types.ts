export type VerbeteCategory =
  | "Todos"
  | "Pontos Básicos & Decorativos"
  | "Estabilizadores & Entretelas"
  | "Agulhas & Fios"
  | "Softwares & Formatos"
  | "Solução de Problemas"
  | "Técnicas de Bastidor"
  | "Tensão & Calibração"
  | "Tipos de Tecidos"
  | "Terminologia Geral"
  | "Programação de Bordado"
  | "Componentes da Máquina"
  | "Funções da Máquina"
  | "Acabamento & Finalização"
  | "Operação da Máquina"
  | "Elementos do Bordado"
  | string;

export interface RecommendedSettings {
  speedPPM?: string;
  needleType?: string;
  stabilizer?: string;
  threadTension?: string;
  density?: string;
}

export interface ComparisonTable {
  headers: string[];
  rows: string[][];
}

export interface Verbete {
  id: string;
  code?: string; // e.g. "A-001"
  letter?: string; // e.g. "A" or "E"
  term: string;
  pronunciation?: string;
  level?: string; // e.g. "Fundamental 🟢" or "Avançado 🔴"
  grammarClass?: string; // e.g. "Substantivo feminino."
  category: VerbeteCategory;
  summary: string;
  definition: string;
  technicalDetails: string;
  construction?: string[]; // e.g. ["haste", "cabo", "olho da agulha"]
  howItWorks?: string[]; // e.g. ["1. conduz a linha", "2. forma a laçada"]
  mainTypes?: string[]; // e.g. ["Universal", "Ball Point"]
  characteristics?: string[]; // e.g. ["Ponta levemente arredondada", "Corpo com espessura intermediária"]
  limitations?: string[]; // e.g. ["Menor desempenho em bordados de alta densidade"]
  numberingSystem?: string[]; // e.g. ["65/9", "75/11"]
  advantages?: string[]; // e.g. ["✔ formação regular dos pontos"]
  commonErrors?: string[]; // e.g. ["❌ Utilizar a mesma agulha para todos os tecidos"]
  voceSabia?: string; // 💡 Você sabia?
  curiosidadeTecnica?: string; // 🔬 Curiosidade Técnica
  dicaArtrelados?: string; // 🧵 Dica Artrelados
  comparisonTable?: ComparisonTable; // 📊 Comparação
  recommendedSettings?: RecommendedSettings;
  applications: string[];
  troubleshootingTips: string[];
  relatedTerms: string[];
  tags: string[];
  isFavorite?: boolean;
  isAiGenerated?: boolean;
  updatedAt?: string;
  sourceReference?: string; // 📖 Fonte / Referência Bibliográfica Consultada
  bibliographicReferences?: string[]; // 📚 Referências Bibliográficas Detalhadas
  stitchDiagramType?: "satin" | "tatami" | "running" | "applique" | "cutwork" | "cross_stitch" | "3d_puff" | "fringe" | "fill";
  origin?: string; // 🌎 Origem etimológica / histórica
  practicalExercise?: string; // 📝 Exercício Prático
  quickSummary?: string; // 📚 Resumo Rápido
  beginnerExplanation?: string; // 🧵 Explicação para quem está começando
}

export interface TroubleshootingGuide {
  id: string;
  title: string;
  category: string;
  symptoms: string[];
  probableCauses: string[];
  stepByStepSolution: string[];
  preventiveAdvice: string;
  recommendedProductsOrSettings?: {
    needle?: string;
    stabilizer?: string;
    tension?: string;
    speed?: string;
  };
}

export interface DictionaryStats {
  totalTerms: number;
  totalCategories: number;
  totalFavorites: number;
  totalAiGenerated: number;
  lastUpdated: string;
}
