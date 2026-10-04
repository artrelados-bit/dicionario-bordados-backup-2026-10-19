/**
 * Sistema Internacional de Idiomas DIBE Artrelados
 * Suporte a: Português 🇧🇷, Español 🇪🇸, Italiano 🇮🇹, Français 🇫🇷, English 🇺🇸
 */

import { Verbete, VerbeteCategory } from "../types";
import { expertLocalizeVerbeteToSpanish, translateEmbroideryTextToSpanish, getVerbeteTermInSpanish } from "./spanishEmbroideryExpert";

export type SupportedLanguage = "pt" | "es" | "it" | "fr" | "en";

export interface LanguageOption {
  code: SupportedLanguage;
  flag: string;
  label: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "pt", flag: "🇧🇷", label: "Português" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇺🇸", label: "English" },
];

export interface UiTranslations {
  tabDictionary: string;
  tabTroubleshooting: string;
  tabFavorites: string;
  searchPlaceholder: string;
  allCategories: string;
  allLetters: string;
  onlyFavorites: string;
  onlyAi: string;
  resultsFound: string;
  resetFilters: string;
  viewList: string;
  viewGrid: string;
  emptyResultsTitle: string;
  emptyResultsDesc: string;
  modalClose: string;
  modalShare: string;
  modalCopied: string;
  modalLevel: string;
  modalCategory: string;
  modalGrammarClass: string;
  modalOrigin: string;
  modalDefinition: string;
  modalBeginner: string;
  modalHowItWorks: string;
  modalTechnicalDetails: string;
  modalAdvantages: string;
  modalLimitations: string;
  modalCommonErrors: string;
  modalTroubleshootingTips: string;
  modalDicaArtrelados: string;
  modalCuriosidadeTecnica: string;
  modalVoceSabia: string;
  modalRecommendedSettings: string;
  modalSpeedPPM: string;
  modalNeedleType: string;
  modalStabilizer: string;
  modalDensity: string;
  modalPracticalExercise: string;
  modalQuickSummary: string;
  modalApplications: string;
  modalRelatedTerms: string;
  modalReferences: string;
  calcPromoTitle: string;
  calcPromoDesc: string;
  calcPromoLink: string;
  calcBannerTitle: string;
  calcBannerBadge: string;
  calcBannerDesc: string;
  calcBannerButton: string;
  troubleshootingTitle: string;
  troubleshootingSubtitle: string;
  searchProblemPlaceholder: string;
  symptomsLabel: string;
  causesLabel: string;
  solutionLabel: string;
  preventiveAdviceLabel: string;
  headerDictionary: string;
  headerDeBordados: string;
  headerEletronicos: string;
  headerTagline: string;
  headerCopyright: string;
  footerTitle: string;
  footerTagline: string;
  footerAuthor: string;
  footerActiveTerms: string;
  footerTechDrawings: string;
  footerFavorites: string;
  footerResetFilters: string;
}

export const UI_TRANSLATIONS: Record<SupportedLanguage, UiTranslations> = {
  pt: {
    tabDictionary: "1. Acervo & Verbetes",
    tabTroubleshooting: "2. Oficina do Bordado",
    tabFavorites: "3. Meus Favoritos",
    searchPlaceholder: "Pesquise por termo, sigla, código ou técnica...",
    allCategories: "Todas as Categorias",
    allLetters: "Todas as Letras",
    onlyFavorites: "Apenas Favoritos",
    onlyAi: "Gerados por IA",
    resultsFound: "termo(s) encontrado(s)",
    resetFilters: "Limpar Filtros",
    viewList: "Lista",
    viewGrid: "Grade",
    emptyResultsTitle: "Nenhum verbete encontrado",
    emptyResultsDesc: "Tente buscar por outro termo, limpar a busca ou selecionar outra categoria.",
    modalClose: "Fechar",
    modalShare: "Compartilhar",
    modalCopied: "Copiado!",
    modalLevel: "Nível",
    modalCategory: "Categoria",
    modalGrammarClass: "Classe Gramatical",
    modalOrigin: "Origem e Etimologia",
    modalDefinition: "Definição Técnica Aprofundada",
    modalBeginner: "Explicação para Quem Está Começando",
    modalHowItWorks: "Como Funciona no Bordado Eletrônico",
    modalTechnicalDetails: "Relação com o Bordado Eletrônico & Parâmetros",
    modalAdvantages: "Vantagens",
    modalLimitations: "Limitações",
    modalCommonErrors: "Erros Comuns a Evitar",
    modalTroubleshootingTips: "Dicas de Solução de Problemas & Cuidados",
    modalDicaArtrelados: "Dica Artrelados (Especial de Oficina)",
    modalCuriosidadeTecnica: "Curiosidade Técnica",
    modalVoceSabia: "Você Sabia?",
    modalRecommendedSettings: "Configurações Recomendadas de Máquina",
    modalSpeedPPM: "Velocidade PPM",
    modalNeedleType: "Agulha Recomendada",
    modalStabilizer: "Estabilizador / Entretela",
    modalDensity: "Densidade dos Pontos",
    modalPracticalExercise: "Exercício Prático no Ateliê",
    modalQuickSummary: "Resumo Rápido em 1 Minuto",
    modalApplications: "Aplicações Práticas & Tecidos",
    modalRelatedTerms: "Termos Correlatos no Acervo",
    modalReferences: "Referências Bibliográficas & Normas Técnicas",
    calcPromoTitle: "Precificação no Ateliê: Quanto vale este trabalho?",
    calcPromoDesc: "Calcule o custo exato de pontos, linhas, entretelas e tempo de máquina.",
    calcPromoLink: "Conheça a Calculadora Oficial Artrelados",
    calcBannerTitle: "Calculadora de Preço de Bordados",
    calcBannerBadge: "Ferramenta Oficial Artrelados",
    calcBannerDesc: "Descubra quanto cobrar por cada bordado com precisão matemática. Calcule custos de pontos, linhas, entretelas e horas de máquina sem prejuízo.",
    calcBannerButton: "Calcular Meu Bordado Agora",
    troubleshootingTitle: "Oficina do Bordado & Diagnóstico",
    troubleshootingSubtitle: "Soluções técnicas rápidas para problemas com fios, agulhas, enrugamento e tensão.",
    searchProblemPlaceholder: "Buscar problema ou sintoma no bordado...",
    symptomsLabel: "Sintomas",
    causesLabel: "Causas Prováveis",
    solutionLabel: "Passo a Passo da Solução",
    preventiveAdviceLabel: "Conselho Preventivo",
    headerDictionary: "DICIONÁRIO",
    headerDeBordados: "DE BORDADOS",
    headerEletronicos: "ELETRÔNICOS",
    headerTagline: "Consultoria Técnica de Termos, Pontos & Matrizes de Bordado",
    headerCopyright: "© 2026 — JANETE M. C. SILVA • ARTRELADOS",
    footerTitle: "DIBE",
    footerTagline: "Dicionário de Bordados Eletrônicos • Enciclopédia Técnica Artrelados",
    footerAuthor: "Idealizado e mantido por Janete M. C. Silva • Artrelados Bordados",
    footerActiveTerms: "Verbetes Ativos",
    footerTechDrawings: "Ilustrações Técnicas",
    footerFavorites: "Favoritos",
    footerResetFilters: "Restaurar visualização completa",
  },
  es: {
    tabDictionary: "1. Catálogo y Términos",
    tabTroubleshooting: "2. Taller de Bordado",
    tabFavorites: "3. Mis Favoritos",
    searchPlaceholder: "Buscar por término, sigla, código o técnica...",
    allCategories: "Todas las Categorías",
    allLetters: "Todas las Letras",
    onlyFavorites: "Solo Favoritos",
    onlyAi: "Generados por IA",
    resultsFound: "término(s) encontrado(s)",
    resetFilters: "Limpiar Filtros",
    viewList: "Lista",
    viewGrid: "Cuadrícula",
    emptyResultsTitle: "No se encontraron términos",
    emptyResultsDesc: "Intente buscar con otra palabra clave, limpie los filtros o elija otra categoría.",
    modalClose: "Cerrar",
    modalShare: "Compartir",
    modalCopied: "¡Copiado!",
    modalLevel: "Nivel",
    modalCategory: "Categoría",
    modalGrammarClass: "Clase Gramatical",
    modalOrigin: "Origen y Etimología",
    modalDefinition: "Definición Técnica Profunda",
    modalBeginner: "Explicación para Principiantes",
    modalHowItWorks: "Cómo Funciona en el Bordado Computarizado",
    modalTechnicalDetails: "Relación con el Bordado Electrónico y Parámetros",
    modalAdvantages: "Ventajas",
    modalLimitations: "Limitaciones",
    modalCommonErrors: "Errores Comunes a Evitar",
    modalTroubleshootingTips: "Consejos para Solución de Problemas y Cuidados",
    modalDicaArtrelados: "Consejo Artrelados (Especial de Taller)",
    modalCuriosidadeTecnica: "Curiosidad Técnica",
    modalVoceSabia: "¿Sabías que...?",
    modalRecommendedSettings: "Configuraciones Recomendadas de Máquina",
    modalSpeedPPM: "Velocidad PPM",
    modalNeedleType: "Aguja Recomendada",
    modalStabilizer: "Estabilizador / Entretela",
    modalDensity: "Densidad de Puntadas",
    modalPracticalExercise: "Ejercicio Práctico en el Taller",
    modalQuickSummary: "Resumen Rápido en 1 Minuto",
    modalApplications: "Aplicaciones Prácticas y Tejidos",
    modalRelatedTerms: "Términos Relacionados en el Catálogo",
    modalReferences: "Referencias Bibliográficas y Normas Técnicas",
    calcPromoTitle: "Fijación de Precios en el Taller: ¿Cuánto vale este trabajo?",
    calcPromoDesc: "Calcula el costo exacto de puntadas, hilos, entretelas y tiempo de máquina.",
    calcPromoLink: "Conoce la Calculadora Oficial Artrelados",
    calcBannerTitle: "Calculadora de Precios de Bordados",
    calcBannerBadge: "Herramienta Oficial Artrelados",
    calcBannerDesc: "Descubre cuánto cobrar por cada bordado con precisión matemática. Calcula costos de puntadas, hilos, entretelas y horas de máquina sin pérdidas.",
    calcBannerButton: "Calcular Mi Bordado Ahora",
    troubleshootingTitle: "Taller de Bordado y Diagnóstico",
    troubleshootingSubtitle: "Soluciones técnicas rápidas para problemas con hilos, agujas, arrugas y tensión.",
    searchProblemPlaceholder: "Buscar problema o síntoma en el bordado...",
    symptomsLabel: "Síntomas",
    causesLabel: "Causas Probables",
    solutionLabel: "Paso a Paso de la Solución",
    preventiveAdviceLabel: "Consejo Preventivo",
    headerDictionary: "DICCIONARIO",
    headerDeBordados: "DE BORDADOS",
    headerEletronicos: "COMPUTARIZADOS",
    headerTagline: "Consultoría Técnica de Términos, Puntadas y Matrices de Bordado",
    headerCopyright: "© 2026 — JANETE M. C. SILVA • ARTRELADOS",
    footerTitle: "DIBE",
    footerTagline: "Diccionario de Bordados Computarizados • Enciclopedia Técnica Artrelados",
    footerAuthor: "Idealizado y mantenido por Janete M. C. Silva • Artrelados Bordados",
    footerActiveTerms: "Términos Activos",
    footerTechDrawings: "Ilustraciones Técnicas",
    footerFavorites: "Favoritos",
    footerResetFilters: "Restaurar vista completa",
  },
  it: {
    tabDictionary: "1. Catalogo & Termini",
    tabTroubleshooting: "2. Laboratorio di Ricamo",
    tabFavorites: "3. I Miei Preferiti",
    searchPlaceholder: "Cerca per termine, acronimo, codice o tecnica...",
    allCategories: "Tutte le Categorie",
    allLetters: "Tutte le Lettere",
    onlyFavorites: "Solo Preferiti",
    onlyAi: "Generati da IA",
    resultsFound: "termine/i trovato/i",
    resetFilters: "Reimposta Filtri",
    viewList: "Elenco",
    viewGrid: "Griglia",
    emptyResultsTitle: "Nessun termine trovato",
    emptyResultsDesc: "Prova a cercare un altro termine, cancella la ricerca o seleziona un'altra categoria.",
    modalClose: "Chiudi",
    modalShare: "Condividi",
    modalCopied: "Copiato!",
    modalLevel: "Livello",
    modalCategory: "Categoria",
    modalGrammarClass: "Classe Grammaticale",
    modalOrigin: "Origine ed Etimologia",
    modalDefinition: "Definizione Tecnica Approfondita",
    modalBeginner: "Spiegazione per Principianti",
    modalHowItWorks: "Come Funziona nel Ricamo Elettronico",
    modalTechnicalDetails: "Rapporto con il Ricamo Elettronico & Parametri",
    modalAdvantages: "Vantaggi",
    modalLimitations: "Limitazioni",
    modalCommonErrors: "Errori Comuni da Evitare",
    modalTroubleshootingTips: "Consigli per Risoluzione Problemi & Manutenzione",
    modalDicaArtrelados: "Consiglio Artrelados (Speciale Laboratorio)",
    modalCuriosidadeTecnica: "Curiosità Tecnica",
    modalVoceSabia: "Lo Sapevi?",
    modalRecommendedSettings: "Impostazioni Consigliate della Macchina",
    modalSpeedPPM: "Velocità PPM",
    modalNeedleType: "Ago Consigliato",
    modalStabilizer: "Stabilizzatore / Fliselina",
    modalDensity: "Densità dei Punti",
    modalPracticalExercise: "Esercizio Pratico in Laboratorio",
    modalQuickSummary: "Riepilogo Rapido in 1 Minuto",
    modalApplications: "Applicazioni Pratiche & Tessuti",
    modalRelatedTerms: "Termini Correlati nel Catalogo",
    modalReferences: "Riferimenti Bibliografici & Norme Tecniche",
    calcPromoTitle: "Prezzi in Laboratorio: Quanto vale questo lavoro?",
    calcPromoDesc: "Calcola il costo esatto di punti, filati, stabilizzatori e tempo macchina.",
    calcPromoLink: "Scopri il Calcolatore Ufficiale Artrelados",
    calcBannerTitle: "Calcolatore dei Prezzi di Ricamo",
    calcBannerBadge: "Strumento Ufficiale Artrelados",
    calcBannerDesc: "Scopri quanto addebitare per ciascun ricamo con precisione matematica.",
    calcBannerButton: "Calcola Ora il Mio Ricamo",
    troubleshootingTitle: "Laboratorio di Ricamo & Diagnosi",
    troubleshootingSubtitle: "Soluzioni tecniche rapide per problemi di filo, aghi, increspature e tensione.",
    searchProblemPlaceholder: "Cerca problema o sintomo nel ricamo...",
    symptomsLabel: "Sintomi",
    causesLabel: "Cause Probabili",
    solutionLabel: "Soluzione Passo dopo Passo",
    preventiveAdviceLabel: "Consiglio Preventivo",
    headerDictionary: "DIZIONARIO",
    headerDeBordados: "DI RICAMI",
    headerEletronicos: "ELETTRONICI",
    headerTagline: "Consulenza Tecnica di Termini, Punti e Schemi di Ricamo",
    headerCopyright: "© 2026 — JANETE M. C. SILVA • ARTRELADOS",
    footerTitle: "DIBE",
    footerTagline: "Dizionario di Ricami Elettronici • Enciclopedia Tecnica Artrelados",
    footerAuthor: "Ideato e curato da Janete M. C. Silva • Artrelados Ricami",
    footerActiveTerms: "Termini Attivi",
    footerTechDrawings: "Illustrazioni Tecniche",
    footerFavorites: "Preferiti",
    footerResetFilters: "Ripristina visualizzazione completa",
  },
  fr: {
    tabDictionary: "1. Catalogue & Termes",
    tabTroubleshooting: "2. Atelier de Broderie",
    tabFavorites: "3. Mes Favoris",
    searchPlaceholder: "Rechercher par terme, acronyme, code ou technique...",
    allCategories: "Toutes les Catégories",
    allLetters: "Toutes les Lettres",
    onlyFavorites: "Favoris Uniquement",
    onlyAi: "Générés par IA",
    resultsFound: "terme(s) trouvé(s)",
    resetFilters: "Effacer les Filtres",
    viewList: "Liste",
    viewGrid: "Grille",
    emptyResultsTitle: "Aucun terme trouvé",
    emptyResultsDesc: "Essayez de rechercher un autre mot-clé ou sélectionnez une autre catégorie.",
    modalClose: "Fermer",
    modalShare: "Partager",
    modalCopied: "Copié !",
    modalLevel: "Niveau",
    modalCategory: "Catégorie",
    modalGrammarClass: "Classe Grammaticale",
    modalOrigin: "Origine et Étymologie",
    modalDefinition: "Définition Technique Approfondie",
    modalBeginner: "Explication pour Débutants",
    modalHowItWorks: "Fonctionnement en Broderie Machine",
    modalTechnicalDetails: "Relation avec la Broderie Machine & Paramètres",
    modalAdvantages: "Avantages",
    modalLimitations: "Limites",
    modalCommonErrors: "Erreurs Courantes à Éviter",
    modalTroubleshootingTips: "Conseils de Dépannage & Entretien",
    modalDicaArtrelados: "Conseil Artrelados (Spécial Atelier)",
    modalCuriosidadeTecnica: "Curiosité Technique",
    modalVoceSabia: "Le Saviez-vous ?",
    modalRecommendedSettings: "Réglages Recommandés de la Machine",
    modalSpeedPPM: "Vitesse PPM",
    modalNeedleType: "Aiguille Recommandée",
    modalStabilizer: "Stabilisateur / Entoilage",
    modalDensity: "Densité des Points",
    modalPracticalExercise: "Exercice Pratique à l'Atelier",
    modalQuickSummary: "Résumé Rapide en 1 Minute",
    modalApplications: "Applications Pratiques & Tissus",
    modalRelatedTerms: "Termes Associés dans le Catalogue",
    modalReferences: "Références Bibliographiques & Normes Techniques",
    calcPromoTitle: "Tarification à l'Atelier : Combien vaut ce travail ?",
    calcPromoDesc: "Calculez le coût exact des points, fils, entoilages et temps machine.",
    calcPromoLink: "Découvrez le Calculateur Officiel Artrelados",
    calcBannerTitle: "Calculateur de Prix de Broderie",
    calcBannerBadge: "Outil Officiel Artrelados",
    calcBannerDesc: "Découvrez combien facturer pour chaque broderie avec une précision mathématique.",
    calcBannerButton: "Calculer Ma Broderie Maintenant",
    troubleshootingTitle: "Atelier de Broderie & Diagnostic",
    troubleshootingSubtitle: "Solutions techniques rapides pour fils, aiguilles, plis et tension.",
    searchProblemPlaceholder: "Rechercher un problème ou un symptôme...",
    symptomsLabel: "Symptômes",
    causesLabel: "Causes Probables",
    solutionLabel: "Solution Étape par Étape",
    preventiveAdviceLabel: "Conseil Préventif",
    headerDictionary: "DICTIONNAIRE",
    headerDeBordados: "DE BRODERIE",
    headerEletronicos: "ÉLECTRONIQUE",
    headerTagline: "Conseil Technique des Termes, Points et Motifs de Broderie",
    headerCopyright: "© 2026 — JANETE M. C. SILVA • ARTRELADOS",
    footerTitle: "DIBE",
    footerTagline: "Dictionnaire de Broderie Machine • Encyclopédie Technique Artrelados",
    footerAuthor: "Idéalisé et maintenu par Janete M. C. Silva • Artrelados Broderie",
    footerActiveTerms: "Termes Actifs",
    footerTechDrawings: "Illustrations Techniques",
    footerFavorites: "Favoris",
    footerResetFilters: "Restaurer la vue complète",
  },
  en: {
    tabDictionary: "1. Terms & Library",
    tabTroubleshooting: "2. Embroidery Workshop",
    tabFavorites: "3. My Favorites",
    searchPlaceholder: "Search by term, abbreviation, code or technique...",
    allCategories: "All Categories",
    allLetters: "All Letters",
    onlyFavorites: "Favorites Only",
    onlyAi: "AI Generated",
    resultsFound: "term(s) found",
    resetFilters: "Clear Filters",
    viewList: "List",
    viewGrid: "Grid",
    emptyResultsTitle: "No terms found",
    emptyResultsDesc: "Try searching with another keyword or pick a different category.",
    modalClose: "Close",
    modalShare: "Share",
    modalCopied: "Copied!",
    modalLevel: "Level",
    modalCategory: "Category",
    modalGrammarClass: "Grammar Class",
    modalOrigin: "Origin & Etymology",
    modalDefinition: "In-Depth Technical Definition",
    modalBeginner: "Beginner Explanation",
    modalHowItWorks: "How It Works in Machine Embroidery",
    modalTechnicalDetails: "Relationship with Machine Embroidery & Settings",
    modalAdvantages: "Advantages",
    modalLimitations: "Limitations",
    modalCommonErrors: "Common Errors to Avoid",
    modalTroubleshootingTips: "Troubleshooting Tips & Care",
    modalDicaArtrelados: "Artrelados Tip (Workshop Special)",
    modalCuriosidadeTecnica: "Technical Insight",
    modalVoceSabia: "Did You Know?",
    modalRecommendedSettings: "Recommended Machine Settings",
    modalSpeedPPM: "Speed (SPM)",
    modalNeedleType: "Recommended Needle",
    modalStabilizer: "Stabilizer / Backing",
    modalDensity: "Stitch Density",
    modalPracticalExercise: "Hands-on Workshop Exercise",
    modalQuickSummary: "Quick 1-Minute Summary",
    modalApplications: "Practical Applications & Fabrics",
    modalRelatedTerms: "Related Catalog Terms",
    modalReferences: "Bibliographic References & Technical Standards",
    calcPromoTitle: "Pricing in the Workshop: What is this worth?",
    calcPromoDesc: "Calculate exact costs for stitches, threads, stabilizers and machine time.",
    calcPromoLink: "Discover the Official Artrelados Calculator",
    calcBannerTitle: "Embroidery Pricing Calculator",
    calcBannerBadge: "Official Artrelados Tool",
    calcBannerDesc: "Calculate how much to charge for each embroidery with mathematical precision.",
    calcBannerButton: "Calculate My Embroidery Now",
    troubleshootingTitle: "Embroidery Workshop & Diagnostics",
    troubleshootingSubtitle: "Quick technical solutions for threads, needles, puckering and tension.",
    searchProblemPlaceholder: "Search problem or symptom in embroidery...",
    symptomsLabel: "Symptoms",
    causesLabel: "Probable Causes",
    solutionLabel: "Step-by-Step Solution",
    preventiveAdviceLabel: "Preventive Advice",
    headerDictionary: "DICTIONARY",
    headerDeBordados: "OF MACHINE",
    headerEletronicos: "EMBROIDERY",
    headerTagline: "Technical Consultancy on Terms, Stitches & Embroidery Patterns",
    headerCopyright: "© 2026 — JANETE M. C. SILVA • ARTRELADOS",
    footerTitle: "DIBE",
    footerTagline: "Dictionary of Electronic Embroidery • Artrelados Technical Encyclopedia",
    footerAuthor: "Idealized and maintained by Janete M. C. Silva • Artrelados Embroidery",
    footerActiveTerms: "Active Terms",
    footerTechDrawings: "Technical Diagrams",
    footerFavorites: "Favorites",
    footerResetFilters: "Reset full view",
  },
};

/**
 * Tradução de Categorias para Espanhol
 */
export const CATEGORY_TRANSLATIONS_ES: Record<string, string> = {
  "Todos": "Todos",
  "Pontos Básicos & Decorativos": "Puntadas Básicas y Decorativas",
  "Estabilizadores & Entretelas": "Estabilizadores y Entretelas",
  "Agulhas & Fios": "Agujas e Hilos",
  "Programação de Bordado": "Programación y Digitalización",
  "Softwares & Formatos": "Software y Formatos",
  "Componentes da Máquina": "Componentes de la Máquina",
  "Funções da Máquina": "Funciones de la Máquina",
  "Operação da Máquina": "Operación de la Máquina",
  "Elementos do Bordado": "Elementos del Bordado",
  "Acabamento & Finalização": "Acabado y Finalización",
  "Equipamentos e Máquinas": "Equipos y Máquinas",
  "Componentes e Mecânica da Máquina": "Componentes y Mecánica de la Máquina",
  "Mecânica & Manutenção": "Mecánica y Mantenimiento",
  "Mecânica & Componentes da Máquina / Calibragem": "Mecánica y Componentes de la Máquina / Calibración",
  "Bastidores & Fixação": "Bastidores y Sujeción",
  "Técnicas Especiais & Relevo": "Técnicas Especiales y Relieve",
  "Agulhas & Mecânica": "Agujas y Mecánica",
  "Agulhas & Linhas": "Agujas e Hilos",
  "Agulhas & Desgaste Mecânico / Manutenção Preventiva": "Agujas y Desgaste Mecánico / Mantenimiento Preventivo",
  "Tipos de Tecidos": "Tipos de Tejidos",
  "Técnicas de Bastidor": "Técnicas de Bastidor",
  "Tensão & Calibração": "Tensión y Calibración",
  "Tensão & Mecânica": "Tensión y Mecánica",
  "Tensão & Ajustes": "Tensión y Ajustes",
  "Passagem de Linha & Tensão": "Enhebrado y Tensión",
  "Mecatrônica Avançada, Sistemas de Tensão & Inovação Tecnológica": "Mecatrónica Avanzada, Sistemas de Tensión e Innovación Tecnológica",
  "Solução de Problemas": "Solución de Problemas",
  "Terminologia Geral": "Terminología General",
};

/**
 * Dicionário de Substituições Técnicas Têxteis Português -> Espanhol
 */
const TEXTILE_REPLACEMENTS_ES: [RegExp, string][] = [
  // Níveis e Gramática
  [/\bIniciante\b/gi, "Principiante"],
  [/\bIntermediário\b/gi, "Intermedio"],
  [/\bAvançado\b/gi, "Avanzado"],
  [/\bSubstantivo masculino\b/gi, "Sustantivo masculino"],
  [/\bSubstantivo feminino\b/gi, "Sustantivo femenino"],
  [/\bLocução substantiva feminina composta\b/gi, "Locución sustantiva femenina compuesta"],
  [/\bLocução substantiva masculina composta\b/gi, "Locución sustantiva masculina compuesta"],
  [/\bLocução substantiva\b/gi, "Locución sustantiva"],

  // Máquinas e Componentes
  [/\bmáquina de bordar\b/gi, "máquina de bordar"],
  [/\bmáquinas de bordar\b/gi, "máquinas de bordar"],
  [/\bbastidor de bordar\b/gi, "bastidor de bordado"],
  [/\bbastidores de bordar\b/gi, "bastidores de bordado"],
  [/\bbastidor\b/gi, "bastidor"],
  [/\bbastidores\b/gi, "bastidores"],
  [/\bpé calcador\b/gi, "pie prensatelas"],
  [/\bcalcador\b/gi, "prensatelas"],
  [/\bbobina\b/gi, "canilla / bobina"],
  [/\bcaixa da bobina\b/gi, "caja de la bobina"],
  [/\blançadeira\b/gi, "lanzadera"],

  // Fios, Agulhas e Tecidos
  [/\bagulha\b/gi, "aguja"],
  [/\bagulhas\b/gi, "agujas"],
  [/\blinha superior\b/gi, "hilo superior"],
  [/\blinha da bobina\b/gi, "hilo de la canilla"],
  [/\blinhas\b/gi, "hilos"],
  [/\blinha\b/gi, "hilo"],
  [/\bfio metálico\b/gi, "hilo metálico"],
  [/\bfios metálicos\b/gi, "hilos metálicos"],
  [/\bentretela rasgável\b/gi, "entretela desprendible (tear-away)"],
  [/\bentretela hidrossolúvel\b/gi, "entretela hidrosoluble (wash-away)"],
  [/\bentretela solúvel\b/gi, "entretela soluble"],
  [/\bentretela de corte\b/gi, "entretela de corte (cut-away)"],
  [/\bentretela termocolante\b/gi, "entretela termoadhesiva"],
  [/\bentretela\b/gi, "entretela"],
  [/\bentretelas\b/gi, "entretelas"],
  [/\btecido\b/gi, "tejido"],
  [/\btecidos\b/gi, "tejidos"],
  [/\bretalho\b/gi, "retazo"],
  [/\bretalhos\b/gi, "retazos"],
  [/\bfralda de pano\b/gi, "pañal de tela"],
  [/\bfraldas de pano\b/gi, "pañales de tela"],
  [/\bfralda\b/gi, "pañal de tela"],
  [/\bfraldas\b/gi, "pañales de tela"],
  [/\btoalha de banho\b/gi, "toalla de baño"],
  [/\btoalhas de banho\b/gi, "toallas de baño"],
  [/\btoalha\b/gi, "toalla"],
  [/\btoalhas\b/gi, "toallas"],
  [/\balmofada\b/gi, "cojín"],
  [/\balmofadas\b/gi, "cojines"],
  [/\bcamisa polo\b/gi, "camisa polo"],
  [/\bcamisas polo\b/gi, "camisas polo"],
  [/\bmoletom\b/gi, "sudadera"],
  [/\bmoletons\b/gi, "sudaderas"],
  [/\bboné\b/gi, "gorra"],
  [/\bbonés\b/gi, "gorras"],
  [/\bcarneirinho\b/gi, "tejido sherpa / borreguito"],
  [/\bveludo\b/gi, "terciopelo"],
  [/\blinho\b/gi, "lino"],
  [/\bfeltro\b/gi, "fieltro"],
  [/\bzipper\b/gi, "cremallera"],
  [/\bzíper\b/gi, "cremallera"],
  [/\bzíperes\b/gi, "cremalleras"],

  // Pontos e Parâmetros
  [/\bponto cheio\b/gi, "puntada satín"],
  [/\bpontos cheios\b/gi, "puntadas satín"],
  [/\bponto tatami\b/gi, "puntada tatami"],
  [/\bponto de suporte\b/gi, "puntada de soporte (underlay)"],
  [/\bpontos de suporte\b/gi, "puntadas de soporte (underlay)"],
  [/\bponto corrido\b/gi, "puntada recta corrida"],
  [/\bponto triplo\b/gi, "puntada triple"],
  [/\bponto costura\b/gi, "puntada recta"],
  [/\bcompensação de encolhimento\b/gi, "compensación de tirantez (pull compensation)"],
  [/\bdensidade\b/gi, "densidad"],
  [/\btensão\b/gi, "tensión"],
  [/\benrugamento\b/gi, "arrugamiento / fruncido"],
  [/\benrugar\b/gi, "arrugar"],
  [/\bdesvirar\b/gi, "dar vuelta"],
  [/\bdesvirada\b/gi, "dada vuelta"],
  [/\bcostura de fechamento\b/gi, "costura de cierre"],
  [/\bcostura de contorno\b/gi, "costura de contorno"],
  [/\blinha guia\b/gi, "línea guía"],
  [/\blinhas guia\b/gi, "líneas guía"],
  [/\bparada programada\b/gi, "parada programada (Stop)"],
  [/\bparadas programadas\b/gi, "paradas programadas (Stops)"],

  // Expressões Gerais em Espanhol
  [/\bno ateliê\b/gi, "en el taller"],
  [/\bdo ateliê\b/gi, "del taller"],
  [/\bao ateliê\b/gi, "al taller"],
  [/\bno bastidor\b/gi, "en el bastidor"],
  [/\bdo bastidor\b/gi, "del bastidor"],
  [/\bao bastidor\b/gi, "al bastidor"],
  [/\bpara quem está começando\b/gi, "para principiantes"],
  [/\bcomo funciona\b/gi, "cómo funciona"],
  [/\bpasso a passo\b/gi, "paso a paso"],
  [/\bvocê sabia\b/gi, "¿sabías que...?"],
  [/\bdica artrelados\b/gi, "consejo artrelados"],
  [/\berros comuns\b/gi, "errores comunes"],
  [/\bexercício prático\b/gi, "ejercicio práctico"],
  [/\bresumo rápido\b/gi, "resumen rápido"],
  [/\bà mão\b/gi, "a mano"],
  [/\bem alta escala\b/gi, "a gran escala"],
  [/\bde alta qualidade\b/gi, "de alta calidad"],
  [/\bsem quebrar a agulha\b/gi, "sin romper la aguja"],
  [/\bsem arrebentar a linha\b/gi, "sin reventar el hilo"],
  [/\bà prova d'água\b/gi, "impermeable"],
];

/**
 * Tradutor de Texto Português para Espanhol de Bordado de Alta Precisão
 */
export function translateTextToSpanish(text: string): string {
  if (!text) return text;
  return translateEmbroideryTextToSpanish(text);
}

/**
 * Traduz um objeto Verbete completo para Espanhol com Nível de Perícia de Mestre de Bordado
 */
export function translateVerbeteToSpanish(verbete: Verbete): Verbete {
  return expertLocalizeVerbeteToSpanish(verbete);
}

/**
 * Traduz um verbete de acordo com o idioma ativo
 */
export function localizeVerbete(verbete: Verbete, lang: SupportedLanguage): Verbete {
  if (lang === "pt") return verbete;
  if (lang === "es") return expertLocalizeVerbeteToSpanish(verbete);
  return verbete;
}

/**
 * Obtém rapidamente o nome do termo no idioma ativo (sem traduzir os outros campos)
 */
export function getVerbeteTermInLanguage(verbete: Verbete, lang: SupportedLanguage): string {
  if (!verbete) return "";
  if (lang === "pt") return verbete.term || "";
  if (lang === "es") return getVerbeteTermInSpanish(verbete);
  return verbete.term || "";
}
