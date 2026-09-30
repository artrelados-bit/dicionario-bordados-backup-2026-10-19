/**
 * Dicionário de Bordados Artrelados
 * App Principal - Acervo Técnico, Consultoria IA e Resolução de Problemas
 */

import React, { useState, useEffect, useMemo } from "react";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { VerbeteCard } from "./components/VerbeteCard";
import { VerbeteRow } from "./components/VerbeteRow";
import { VerbeteDetailModal } from "./components/VerbeteDetailModal";
import { TroubleshootingView } from "./components/TroubleshootingView";
import { FavoritesView } from "./components/FavoritesView";
import { FooterBar } from "./components/FooterBar";
import { Verbete, VerbeteCategory, TroubleshootingGuide, DictionaryStats, SavedDiagnostic } from "./types";
import { INITIAL_VERBETES, INITIAL_TROUBLESHOOTING_GUIDES } from "./data/initialDictionary";
import { CalculatorPromoBanner } from "./components/CalculatorPromoBanner";
import { BookOpen, Search } from "lucide-react";
import { updateDocumentMeta } from "./utils/seoHelper";
import { SupportedLanguage } from "./utils/i18n";
import { LanguageBar } from "./components/LanguageBar";

// Helper to sort verbetes in ascending order by code (e.g. A-001, A-002, A-003, A-026)
export function sortVerbetesByCode(list: Verbete[]): Verbete[] {
  return [...list].sort((a, b) => {
    const codeA = (a.code || "").trim().toUpperCase();
    const codeB = (b.code || "").trim().toUpperCase();

    const matchA = codeA.match(/^([A-Z]+)-(\d+)/);
    const matchB = codeB.match(/^([A-Z]+)-(\d+)/);

    if (matchA && matchB) {
      const letterA = matchA[1];
      const letterB = matchB[1];
      if (letterA !== letterB) {
        return letterA.localeCompare(letterB, "pt-BR");
      }
      const numA = parseInt(matchA[2], 10);
      const numB = parseInt(matchB[2], 10);
      return numA - numB;
    }

    if (codeA && codeB) {
      return codeA.localeCompare(codeB, "pt-BR", { numeric: true });
    }

    if (codeA) return -1;
    if (codeB) return 1;

    return a.term.localeCompare(b.term, "pt-BR");
  });
}

// Helper to sanitize verbetes, enforce official code/numeração rule, and remove any orphan headers, bullet fragments or stubs
function sanitizeVerbetesList(list: Verbete[]): Verbete[] {
  const initialMap = new Map(INITIAL_VERBETES.map((v) => [v.code || v.id, v]));

  const filtered = list.filter((v) => {
    if (!v || !v.term) return false;
    const termLower = v.term.toLowerCase().trim().replace(/^[🟢🟡🔴\s]+/, "");
    const summaryTrim = (v.summary || "").trim();

    // 1. Filter out metadata headers and structural labels
    const isMetadataHeader = (
      termLower === "nível" ||
      termLower === "nivel" ||
      termLower === "categoria" ||
      termLower === "classe gramatical" ||
      termLower === "código" ||
      termLower === "codigo" ||
      termLower === "definição" ||
      termLower === "definicao" ||
      termLower === "resumo" ||
      termLower === "saiba mais" ||
      termLower === "veja também" ||
      termLower === "veja tambem" ||
      termLower.includes("dica artrelados") ||
      termLower.includes("curiosidade")
    );
    if (isMetadataHeader) return false;

    // 2. Filter out known orphan document sub-fragments
    const isFragmentTerm = (
      termLower === "aro interno" ||
      termLower === "aro externo" ||
      termLower === "redimensionamento" ||
      termLower === "densidade muito alta" ||
      termLower === "densidade muito baixa" ||
      termLower === "a-019" ||
      termLower.startsWith("- ") ||
      termLower.startsWith("• ")
    );
    if (isFragmentTerm) return false;

    // 3. Filter out 'sem texto' stubs
    if (termLower.includes("sem texto") || summaryTrim.toLowerCase().includes("sem texto")) {
      return false;
    }

    // 4. Filter out code-only terms like "A-019" or "A-026" without proper name
    if (/^a-\d{3}$/i.test(termLower) || (/^a-\d{3}\b/i.test(termLower) && termLower.length <= 6)) {
      return false;
    }

    // 5. Filter out raw bullet points or sub-fragment lines imported as verbetes
    if (summaryTrim.startsWith("- ") || summaryTrim.startsWith("• ")) {
      return false;
    }

    // 6. Filter out incomplete stubs with missing or trivial definition and short summary
    if ((!v.definition || v.definition.trim().length < 25) && summaryTrim.length < 35) {
      return false;
    }

    // 7. Filter out demo/example terms from other letters (keep only letter A for current clean dataset)
    const demoIds = new Set([
      "ponto-cheio-satin",
      "ponto-tatami-fill",
      "ponto-corrido-running",
      "entretela-rasga-facil",
      "entretela-recorta-cutaway",
      "entretela-hidrossolvel-solvy",
      "compensacao-de-encolhimento",
      "ninho-de-passarinho-birdnesting",
      "ponto-puff-3d-eva",
      "formato-pes-pedesign",
      "formato-dst-tajima",
      "subponto-underlay",
      "caixa-de-bobina-towa-gauge",
      "tecnica-de-bastidor-hooping",
    ]);
    if (v.id && demoIds.has(v.id)) return false;

    return true;
  }).map((v) => {
    // Upgrade official initial verbetes if they were stored in localStorage with outdated content
    if (v.code && initialMap.has(v.code)) {
      const official = initialMap.get(v.code)!;
      if (!v.definition || v.definition.length < official.definition.length) {
        return official;
      }
    }
    return v;
  });

  // Ensure all initial verbetes are included and deduplicate strictly by ID and normalized term
  const deduplicatedMap = new Map<string, Verbete>();
  const seenNormTerms = new Set<string>();

  // Add initial verbetes first (with latest definitions and images)
  INITIAL_VERBETES.forEach((v) => {
    const idKey = (v.id || v.code).trim().toLowerCase();
    const normTerm = v.term.toLowerCase().trim().replace(/^[🟢🟡🔴\s]+/, "");
    deduplicatedMap.set(idKey, v);
    seenNormTerms.add(normTerm);
  });

  // Then merge filtered verbetes from storage, keeping official initial verbetes up to date
  filtered.forEach((v) => {
    const idKey = (v.id || v.code).trim().toLowerCase();
    const normTerm = v.term.toLowerCase().trim().replace(/^[🟢🟡🔴\s]+/, "");
    if (deduplicatedMap.has(idKey)) {
      // Merge user edits/notes without overwriting new images from initial data
      const official = deduplicatedMap.get(idKey)!;
      deduplicatedMap.set(idKey, {
        ...official,
        ...v,
        imageUrl: official.imageUrl || v.imageUrl,
        imageCaption: official.imageCaption || v.imageCaption,
      });
    } else if (!seenNormTerms.has(normTerm)) {
      deduplicatedMap.set(idKey, v);
      seenNormTerms.add(normTerm);
    }
  });

  const combined = Array.from(deduplicatedMap.values());

  // Group verbetes by their normalized true letter (A-Z)
  const byLetter: Record<string, Verbete[]> = {};
  combined.forEach((v) => {
    const normTerm = (v.term || "").trim().replace(/^[🟢🟡🔴\s]+/, "");
    let letter = normTerm.charAt(0).toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (!letter.match(/[A-Z]/)) {
      letter = (v.letter || "A").toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (!letter.match(/[A-Z]/)) letter = "A";
    }
    if (!byLetter[letter]) {
      byLetter[letter] = [];
    }
    byLetter[letter].push(v);
  });

  // Sort each letter group alphabetically by term and assign sequential dynamic codes (A-001, A-002, etc.)
  const seenIds = new Set<string>();
  const processed: Verbete[] = [];

  const sortedLetters = Object.keys(byLetter).sort((a, b) => a.localeCompare(b, "pt-BR"));
  sortedLetters.forEach((letter) => {
    // Sort strictly alphabetically by term
    byLetter[letter].sort((a, b) => {
      const cleanA = (a.term || "").trim().replace(/^[🟢🟡🔴\s]+/, "");
      const cleanB = (b.term || "").trim().replace(/^[🟢🟡🔴\s]+/, "");
      return cleanA.localeCompare(cleanB, "pt-BR", { sensitivity: "base" });
    });

    // Assign sequential dynamic code (A-001, A-002, ...)
    byLetter[letter].forEach((v, idx) => {
      const item = { ...v };
      item.letter = letter;
      item.code = `${letter}-${String(idx + 1).padStart(3, "0")}`;

      // Ensure unique ID
      if (seenIds.has(item.id)) {
        const freshId = `${item.id}-clean-${idx}-${Math.random().toString(36).substring(2, 6)}`;
        seenIds.add(freshId);
        item.id = freshId;
      } else {
        seenIds.add(item.id);
      }

      processed.push(item);
    });
  });

  return sortVerbetesByCode(processed);
}

export default function App() {
  // Navigation tab state
  const [activeTab, setActiveTab] = useState<"dictionary" | "troubleshooting" | "favorites">("dictionary");

  // Main Verbetes Database State (persisted in localStorage with auto-merge of initial verbetes)
  const [verbetes, setVerbetes] = useState<Verbete[]>(() => {
    try {
      const savedCustom = localStorage.getItem("artrelados_custom_verbetes_v1");
      const savedFavorites = localStorage.getItem("artrelados_favorite_ids_v1");
      const favoriteIds = new Set<string>(savedFavorites ? JSON.parse(savedFavorites) : []);

      let customList: Verbete[] = [];
      if (savedCustom) {
        const parsed = JSON.parse(savedCustom);
        if (Array.isArray(parsed)) {
          customList = parsed;
        }
      }

      // Legacy fallback check
      if (customList.length === 0) {
        const legacySaved = localStorage.getItem("artrelados_verbetes_v1");
        if (legacySaved) {
          const parsedLegacy = JSON.parse(legacySaved);
          if (Array.isArray(parsedLegacy) && parsedLegacy.length > 0) {
            // Keep only user-generated / custom verbetes from legacy storage
            const initialIds = new Set(INITIAL_VERBETES.map((v) => v.id));
            customList = parsedLegacy.filter((v) => !initialIds.has(v.id));
          }
        }
      }

      // Always sanitize and apply sequential dynamic numbering (A-001, B-001, C-001...)
      const baseList = sanitizeVerbetesList([...INITIAL_VERBETES, ...customList]);

      return baseList.map((v) => ({
        ...v,
        isFavorite: favoriteIds.has(v.id) || v.isFavorite || false,
      }));
    } catch (e) {
      console.error("Erro ao carregar do localStorage", e);
    }
    return sanitizeVerbetesList(INITIAL_VERBETES);
  });

  // Save only custom verbetes and favorites to localStorage to avoid quota errors
  useEffect(() => {
    try {
      const initialIds = new Set(INITIAL_VERBETES.map((v) => v.id));
      const customVerbetes = verbetes.filter((v) => !initialIds.has(v.id));
      const favoriteIds = verbetes.filter((v) => v.isFavorite).map((v) => v.id);

      localStorage.setItem("artrelados_custom_verbetes_v1", JSON.stringify(customVerbetes));
      localStorage.setItem("artrelados_favorite_ids_v1", JSON.stringify(favoriteIds));
      // Remove legacy heavy key if exists
      localStorage.removeItem("artrelados_verbetes_v1");
    } catch (e) {
      console.error("Erro ao salvar custom verbetes", e);
    }
  }, [verbetes]);

  // Troubleshooting Guides State
  const [troubleshootingGuides, setTroubleshootingGuides] = useState<TroubleshootingGuide[]>(() => {
    try {
      const saved = localStorage.getItem("artrelados_troubleshooting_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const existingIds = new Set(parsed.map((g: TroubleshootingGuide) => g.id));
          const missingInitials = INITIAL_TROUBLESHOOTING_GUIDES.filter((g) => !existingIds.has(g.id));
          return [...parsed, ...missingInitials];
        }
      }
    } catch (e) {
      console.error("Erro ao carregar guias do localStorage", e);
    }
    return INITIAL_TROUBLESHOOTING_GUIDES;
  });

  // Saved Diagnostics State (for favorited custom troubleshooting reports)
  const [savedDiagnostics, setSavedDiagnostics] = useState<SavedDiagnostic[]>(() => {
    try {
      const saved = localStorage.getItem("artrelados_saved_diagnostics_v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Erro ao carregar diagnósticos salvos", e);
    }
    return [];
  });

  // Save saved diagnostics to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("artrelados_saved_diagnostics_v1", JSON.stringify(savedDiagnostics));
    } catch (e) {
      console.error("Erro ao salvar diagnósticos", e);
    }
  }, [savedDiagnostics]);

  // Toggle Save Diagnostic Handler
  const handleToggleSaveDiagnostic = (diagnostic: SavedDiagnostic) => {
    setSavedDiagnostics((prev) => {
      const exists = prev.some(
        (d) => d.title === diagnostic.title && d.problemDescription === diagnostic.problemDescription
      );
      if (exists) {
        return prev.filter(
          (d) => !(d.title === diagnostic.title && d.problemDescription === diagnostic.problemDescription)
        );
      }
      return [diagnostic, ...prev];
    });
  };

  const handleDeleteDiagnostic = (id: string) => {
    setSavedDiagnostics((prev) => prev.filter((d) => d.id !== id));
  };

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<VerbeteCategory>("Todos");
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyAiGenerated, setOnlyAiGenerated] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  // Selected Language State
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem("dibe_language");
      if (saved === "pt" || saved === "es" || saved === "it" || saved === "fr" || saved === "en") {
        return saved;
      }
    } catch (e) {
      // Ignore
    }
    return "pt";
  });

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem("dibe_language", lang);
    } catch (e) {
      // Ignore
    }
  };

  // Selected Verbete Modal State
  const [selectedVerbete, setSelectedVerbete] = useState<Verbete | null>(null);

  // Synchronize URL on initial load and handle browser back/forward buttons
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const verbeteParam = params.get("verbete") || params.get("termo") || params.get("id");
      if (verbeteParam) {
        const decoded = decodeURIComponent(verbeteParam).trim().toLowerCase();
        const found = verbetes.find(
          (v) =>
            (v.code && v.code.toLowerCase() === decoded) ||
            v.id.toLowerCase() === decoded ||
            v.term.toLowerCase() === decoded ||
            v.term.toLowerCase().includes(decoded)
        );
        if (found) {
          setSelectedVerbete(found);
        }
      } else {
        setSelectedVerbete(null);
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, [verbetes]);

  // Update URL and Metatags when selected verbete changes
  useEffect(() => {
    updateDocumentMeta(selectedVerbete);

    const currentUrl = new URL(window.location.href);
    if (selectedVerbete) {
      const paramVal = selectedVerbete.code || selectedVerbete.id;
      if (currentUrl.searchParams.get("verbete") !== paramVal) {
        currentUrl.searchParams.set("verbete", paramVal);
        window.history.pushState({}, "", currentUrl.toString());
      }
    } else {
      if (currentUrl.searchParams.has("verbete")) {
        currentUrl.searchParams.delete("verbete");
        window.history.pushState({}, "", currentUrl.toString());
      }
    }
  }, [selectedVerbete]);

  // Save troubleshooting guides
  useEffect(() => {
    try {
      localStorage.setItem("artrelados_troubleshooting_v2", JSON.stringify(troubleshootingGuides));
    } catch (e) {
      console.error("Erro ao salvar guias", e);
    }
  }, [troubleshootingGuides]);

  // Toggle Favorite Handler
  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setVerbetes((prev) =>
      prev.map((v) => (v.id === id ? { ...v, isFavorite: !v.isFavorite } : v))
    );
    if (selectedVerbete && selectedVerbete.id === id) {
      setSelectedVerbete((prev) => (prev ? { ...prev, isFavorite: !prev.isFavorite } : null));
    }
  };

  // Add Single New Verbete (if needed)
  const handleAddVerbete = (newVerbete: Verbete) => {
    setVerbetes((prev) => [newVerbete, ...prev]);
  };

  // Filtered Verbetes Logic with Intelligent Relevance Ranking
  const filteredVerbetes = useMemo(() => {
    const query = searchQuery.trim();
    const normalize = (str: string) =>
      str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const rawQ = normalize(query);

    const scoredList: { verbete: Verbete; score: number }[] = [];

    verbetes.forEach((v) => {
      if (activeTab === "favorites" && !v.isFavorite) {
        return;
      }

      if (onlyFavorites && !v.isFavorite) return;
      if (onlyAiGenerated && !v.isAiGenerated) return;

      if (selectedCategory !== "Todos" && v.category !== selectedCategory) {
        return;
      }

      // If there is no search query, filter strictly by selected letter
      if (!query && selectedLetter) {
        const verbeteLetter = (v.letter || (v.code ? v.code.charAt(0) : v.term.charAt(0))).toUpperCase();
        if (verbeteLetter !== selectedLetter) return;
      }

      if (query) {
        const termNorm = normalize(v.term);
        const codeNorm = normalize(v.code || "");
        const summaryNorm = normalize(v.summary || "");
        const definitionNorm = normalize(v.definition || "");
        const techNorm = normalize(v.technicalDetails || "");
        const tagsNorm = normalize((v.tags || []).join(" "));
        const appsNorm = normalize((v.applications || []).join(" "));
        const beginnerNorm = normalize(v.beginnerExplanation || "");
        const dicaNorm = normalize(v.dicaArtrelados || "");
        const examplesNorm = normalize(Array.isArray(v.examples) ? v.examples.join(" ") : "");

        const fullContent = `${codeNorm} ${termNorm} ${summaryNorm} ${definitionNorm} ${techNorm} ${tagsNorm} ${appsNorm} ${beginnerNorm} ${dicaNorm} ${examplesNorm}`;

        let score = 0;

        // Exact match in code or term
        if (codeNorm === rawQ || termNorm === rawQ) {
          score += 2000;
        } else if (termNorm.startsWith(rawQ)) {
          score += 1500;
        } else if (new RegExp(`\\b${rawQ}\\b`, "i").test(termNorm)) {
          score += 1200;
        } else if (termNorm.includes(rawQ)) {
          score += 800;
        } else if (tagsNorm.includes(rawQ)) {
          score += 500;
        } else if (summaryNorm.includes(rawQ)) {
          score += 300;
        } else if (fullContent.includes(rawQ)) {
          score += 150;
        } else {
          // Word-by-word flexible match (e.g. 'matriz bordado')
          const stopWords = new Set(["de", "da", "do", "das", "dos", "em", "para", "com", "por", "que", "os", "as", "um", "uma", "tipos", "tipo"]);
          const words = rawQ.split(/\s+/).filter((w) => w.length > 0);
          const keyWords = words.filter((w) => !stopWords.has(w) && w.length > 2);
          const searchWords = keyWords.length > 0 ? keyWords : words;

          const matchesAllWords = searchWords.every((word) => fullContent.includes(word));
          const matchesAnyWordInTitleOrTags = searchWords.some((word) =>
            `${termNorm} ${tagsNorm}`.includes(word)
          );

          if (matchesAllWords) {
            score += 100;
          } else if (matchesAnyWordInTitleOrTags) {
            score += 50;
          } else {
            return; // Not matching
          }
        }

        scoredList.push({ verbete: v, score });
      } else {
        scoredList.push({ verbete: v, score: 0 });
      }
    });

    if (query) {
      // Sort by relevance score descending, then by code
      scoredList.sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        return (a.verbete.code || "").localeCompare(b.verbete.code || "", "pt-BR", { numeric: true });
      });
      return scoredList.map((item) => item.verbete);
    }

    return sortVerbetesByCode(scoredList.map((item) => item.verbete));
  }, [
    verbetes,
    activeTab,
    onlyFavorites,
    onlyAiGenerated,
    selectedCategory,
    selectedLetter,
    searchQuery,
  ]);

  // Related Term Click Handler inside modal
  const handleSelectRelatedTerm = (termName: string) => {
    const found = verbetes.find((v) => v.term.toLowerCase() === termName.toLowerCase());
    if (found) {
      setSelectedVerbete(found);
    } else {
      setSearchQuery(termName);
      setSelectedVerbete(null);
      setActiveTab("dictionary");
    }
  };

  // Ask AI to Elaborate
  const handleAskAiToElaborate = () => {
    setSelectedVerbete(null);
    setActiveTab("ai-expander");
  };

  // Stats
  const stats: DictionaryStats = useMemo(() => {
    const categoriesSet = new Set(verbetes.map((v) => v.category));
    return {
      totalTerms: verbetes.length,
      totalCategories: categoriesSet.size,
      totalFavorites: verbetes.filter((v) => v.isFavorite).length + savedDiagnostics.length,
      totalAiGenerated: verbetes.filter((v) => v.isAiGenerated).length,
      lastUpdated: new Date().toISOString().split("T")[0],
    };
  }, [verbetes, savedDiagnostics]);

  // Favorite verbetes list
  const favoriteVerbetes = useMemo(() => {
    return sortVerbetesByCode(verbetes.filter((v) => v.isFavorite));
  }, [verbetes]);

  // Reset filters & ensure active dictionary view
  const handleResetFilters = () => {
    setActiveTab("dictionary");
    setSearchQuery("");
    setSelectedCategory("Todos");
    setSelectedLetter("A");
    setOnlyFavorites(false);
    setOnlyAiGenerated(false);
    if (verbetes.length === 0) {
      setVerbetes(INITIAL_VERBETES);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">
      {/* Navbar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
        onResetFilters={handleResetFilters}
        currentLanguage={currentLanguage}
      />

      {/* Language Bar - Clean, pure text line on clear white background, right below the yellow header */}
      <LanguageBar
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* TAB 1: Main Acervo / Dictionary Tab */}
        {activeTab === "dictionary" && (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <FilterBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLetter={selectedLetter}
              setSelectedLetter={setSelectedLetter}
              onlyFavorites={onlyFavorites}
              setOnlyFavorites={setOnlyFavorites}
              onlyAiGenerated={onlyAiGenerated}
              setOnlyAiGenerated={setOnlyAiGenerated}
              totalFiltered={filteredVerbetes.length}
              viewMode={viewMode}
              setViewMode={setViewMode}
              currentLanguage={currentLanguage}
            />

            {/* Banner Oficial da Calculadora Artrelados */}
            <CalculatorPromoBanner currentLanguage={currentLanguage} />

            {/* Verbetes Presentation (Clean Dictionary List or Cards Grid) */}
            {filteredVerbetes.length > 0 ? (
              viewMode === "list" ? (
                <div className="bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-5 shadow-xs divide-y divide-slate-100">
                  {filteredVerbetes.map((verbete) => (
                    <VerbeteRow
                      key={verbete.id}
                      verbete={verbete}
                      onSelect={setSelectedVerbete}
                      onToggleFavorite={handleToggleFavorite}
                      currentLanguage={currentLanguage}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredVerbetes.map((verbete) => (
                    <VerbeteCard
                      key={verbete.id}
                      verbete={verbete}
                      onSelect={setSelectedVerbete}
                      onToggleFavorite={handleToggleFavorite}
                      currentLanguage={currentLanguage}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-sm max-w-2xl mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto border border-amber-200 shadow-inner">
                  <Search className="w-7 h-7 text-amber-700" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {searchQuery.trim()
                      ? currentLanguage === "es"
                        ? `"${searchQuery.trim()}" aún no está en el catálogo`
                        : `"${searchQuery.trim()}" ainda não está no dicionário`
                      : currentLanguage === "es"
                      ? "No se encontraron términos para este filtro"
                      : "Nenhum verbete encontrado para este filtro"}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {searchQuery.trim()
                      ? currentLanguage === "es"
                        ? `No encontramos ningún término que coincida con "${searchQuery.trim()}". Intente buscar por sinónimos o verificar la ortografía.`
                        : `Não encontramos nenhum termo correspondente a "${searchQuery.trim()}". Tente buscar por sinônimos ou conferir a ortografia.`
                      : currentLanguage === "es"
                      ? "Intente limpiar los filtros o seleccionar otra letra en el índice alfabético."
                      : "Tente limpar os filtros ou selecionar outra letra no índice alfabético."}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleResetFilters}
                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm inline-flex items-center space-x-2 transition shadow-xs cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>
                      {currentLanguage === "es"
                        ? "Limpiar Filtros y Volver al Inicio (Letra A)"
                        : "Limpar Filtros e Voltar ao Início (Letra A)"}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Troubleshooting Offline View */}
        {activeTab === "troubleshooting" && (
          <TroubleshootingView
            guides={troubleshootingGuides}
            savedDiagnostics={savedDiagnostics}
            onToggleSaveDiagnostic={handleToggleSaveDiagnostic}
            currentLanguage={currentLanguage}
          />
        )}

        {/* TAB 3: Favorites View (Verbetes & Diagnostics) */}
        {activeTab === "favorites" && (
          <FavoritesView
            favoriteVerbetes={favoriteVerbetes}
            savedDiagnostics={savedDiagnostics}
            onSelectVerbete={setSelectedVerbete}
            onToggleFavorite={handleToggleFavorite}
            onDeleteDiagnostic={handleDeleteDiagnostic}
            onNavigateToTroubleshooting={() => {
              setActiveTab("troubleshooting");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            currentLanguage={currentLanguage}
          />
        )}
      </main>

      {/* Verbete Detail Modal */}
      <VerbeteDetailModal
        verbete={selectedVerbete}
        onClose={() => setSelectedVerbete(null)}
        onToggleFavorite={handleToggleFavorite}
        onSelectRelatedTerm={handleSelectRelatedTerm}
        currentLanguage={currentLanguage}
      />

      {/* Footer / Control Bar */}
      <FooterBar
        stats={stats}
        onResetFilters={handleResetFilters}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}
