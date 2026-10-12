export type VerbeteCategory =
  | "Todos"
  | "Pontos Básicos & Decorativos"
  | "Estabilizadores & Entretelas"
  | "Agulhas & Fios"
  | "Programação de Bordado"
  | "Softwares & Formatos"
  | "Componentes da Máquina"
  | "Funções da Máquina"
  | "Operação da Máquina"
  | "Elementos do Bordado"
  | "Acabamento & Finalização"
  | "Tipos de Tecidos"
  | "Técnicas de Bastidor"
  | "Tensão & Calibração"
  | "Solução de Problemas"
  | "Terminologia Geral"
  | string;

export interface RecommendedSettings {
  speedPPM?: string;
  needleType?: string;
  stabilizer?: string;
  threadTension?: string;
  density?: string;
  pullCompensation?: string;
  underlay?: string;
  [key: string]: string | undefined;
}

export interface Verbete {
  id: string;
  code?: string;
  dynamicCode?: string;
  originalCode?: string;
  term: string;
  englishTerm?: string;
  letter?: string;
  level?: string;
  category: VerbeteCategory;
  grammarClass?: string;
  origin?: string;
  pronunciation?: string;
  summary?: string;
  definition?: string;
  shortDescription?: string;
  detailedDescription?: string;
  technicalDetails?: string;
  beginnerExplanation?: string;
  construction?: string[];
  howItWorks?: string[] | string;
  mainTypes?: string[];
  characteristics?: string[];
  numberingSystem?: string[];
  advantages?: string[];
  limitations?: string[];
  commonErrors?: string[];
  curiosidadeTecnica?: string;
  voceSabia?: string;
  dicaArtrelados?: string;
  recommendedSettings?: RecommendedSettings | Array<{ parameter: string; value: string }> | any;
  applications?: string[];
  troubleshootingTips?: string[];
  practicalExercise?: string;
  quickSummary?: string;
  relatedTerms?: string[];
  imageUrl?: string;
  imageCaption?: string;
  tags?: string[];
  isFavorite?: boolean;
  isAiGenerated?: boolean;
  updatedAt?: string;
  stitchDiagramType?: string;
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  bibliographicReferences?: string[];
  [key: string]: any;
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
    tension?: string;
    speed?: string;
    bobbinTension?: string;
    stabilizer?: string;
    [key: string]: string | undefined;
  };
  recommendedSettings?: {
    needle?: string;
    stabilizer?: string;
    speed?: string;
    tension?: string;
    [key: string]: string | undefined;
  };
}

export interface DiagnosticInputs {
  threadType?: string;
  bobbinThread?: string;
  needleNumber?: string;
  needleTip?: string;
  stabilizerType?: string;
  stabilizerLayers?: string;
  matrixPoints?: string;
  matrixHistory?: string;
  speedSetting?: string;
  tensionSetting?: string;
}

export interface SavedDiagnostic {
  id: string;
  savedAt: string;
  severity: "Baixa" | "Média" | "Alta" | "Crítica" | string;
  category: string;
  title: string;
  machineModel?: string;
  fabricType?: string;
  problemDescription: string;
  summary: string;
  probableCauses?: string[];
  stepByStepSolution?: string[];
  preventiveAdvice?: string;
  recommendedSettings?: {
    needle?: string;
    stabilizer?: string;
    speed?: string;
    tension?: string;
    [key: string]: string | undefined;
  };
  artreladosTip?: string;
}

export interface DictionaryStats {
  totalTerms: number;
  totalCategories: number;
  totalFavorites: number;
  totalAiGenerated: number;
  lastUpdated: string;
}
