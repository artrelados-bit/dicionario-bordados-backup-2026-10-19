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
import { EditVerbeteModal } from "./components/EditVerbeteModal";
import { TroubleshootingView } from "./components/TroubleshootingView";
import { AiTermExpanderView } from "./components/AiTermExpanderView";
import { DocumentImporterView } from "./components/DocumentImporterView";
import { FooterBar } from "./components/FooterBar";
import { Verbete, VerbeteCategory, TroubleshootingGuide, DictionaryStats } from "./types";
import { INITIAL_VERBETES, INITIAL_TROUBLESHOOTING_GUIDES } from "./data/initialDictionary";
import { BookOpen, Sparkles, Star, Wrench, FileText, Plus, Check } from "lucide-react";

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

  // Ensure all initial verbetes are included and deduplicate strictly by code and normalized term
  const deduplicatedMap = new Map<string, Verbete>();
  const seenNormTerms = new Set<string>();

  // Add initial verbetes first
  INITIAL_VERBETES.forEach((v) => {
    const codeKey = (v.code || v.id).trim().toUpperCase();
    const normTerm = v.term.toLowerCase().trim().replace(/^[🟢🟡🔴\s]+/, "");
    deduplicatedMap.set(codeKey, v);
    seenNormTerms.add(normTerm);
  });

  // Then merge filtered verbetes from storage, updating or adding new ones without duplication
  filtered.forEach((v) => {
    const codeKey = (v.code || v.id).trim().toUpperCase();
    const normTerm = v.term.toLowerCase().trim().replace(/^[🟢🟡🔴\s]+/, "");
    if (!deduplicatedMap.has(codeKey) && !seenNormTerms.has(normTerm)) {
      deduplicatedMap.set(codeKey, v);
      seenNormTerms.add(normTerm);
    }
  });

  const combined = Array.from(deduplicatedMap.values());

  // Letter counter for auto-assigning codes to any verbetes missing code
  const letterCounters: Record<string, number> = {};

  // First pass: register all pre-existing codes to find the highest number per letter
  combined.forEach((v) => {
    if (v.code) {
      const match = v.code.match(/^([A-Z])-(\d+)/i);
      if (match) {
        const letter = match[1].toUpperCase();
        const num = parseInt(match[2], 10);
        if (!letterCounters[letter] || num > letterCounters[letter]) {
          letterCounters[letter] = num;
        }
      }
    }
  });

  const seenIds = new Set<string>();
  const processed = combined.map((v, i) => {
    let item = { ...v };

    // Auto-generate code if missing or empty
    if (!item.code || item.code.trim() === "") {
      const letter = (item.term || "V").trim().charAt(0).toUpperCase();
      letterCounters[letter] = (letterCounters[letter] || 0) + 1;
      const numFormatted = String(letterCounters[letter]).padStart(3, "0");
      item.code = `${letter}-${numFormatted}`;
    }

    // Ensure unique ID
    if (seenIds.has(item.id)) {
      const freshId = `${item.id}-clean-${i}-${Math.random().toString(36).substring(2, 6)}`;
      seenIds.add(freshId);
      item.id = freshId;
    } else {
      seenIds.add(item.id);
    }

    return item;
  });

  return sortVerbetesByCode(processed);
}

export default function App() {
  // Navigation tab state
  const [activeTab, setActiveTab] = useState<"dictionary" | "troubleshooting" | "favorites" | "ai-expander" | "importer">("dictionary");

  // Admin / Editor Mode State (Default true so Janete has full edit/delete control right away)
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  // Edit / Create Verbete Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [verbeteToEdit, setVerbeteToEdit] = useState<Verbete | null>(null);

  // Main Verbetes Database State (persisted in localStorage with auto-merge of initial verbetes)
  const [verbetes, setVerbetes] = useState<Verbete[]>(() => {
    try {
      const saved = localStorage.getItem("artrelados_verbetes_v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return sanitizeVerbetesList(parsed);
        }
      }
    } catch (e) {
      console.error("Erro ao carregar do localStorage", e);
    }
    return INITIAL_VERBETES;
  });

  // Force sanitize state on mount to purge any old cached fragments
  useEffect(() => {
    setVerbetes((prev) => {
      const sanitized = sanitizeVerbetesList(prev);
      try {
        localStorage.setItem("artrelados_verbetes_v1", JSON.stringify(sanitized));
      } catch (e) {
        console.error("Erro ao salvar verbetes higienizados", e);
      }
      return sanitized;
    });
  }, []);

  // Troubleshooting Guides State
  const [troubleshootingGuides, setTroubleshootingGuides] = useState<TroubleshootingGuide[]>(() => {
    try {
      const saved = localStorage.getItem("artrelados_troubleshooting_v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Erro ao carregar guias do localStorage", e);
    }
    return INITIAL_TROUBLESHOOTING_GUIDES;
  });

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<VerbeteCategory>("Todos");
  const [selectedLetter, setSelectedLetter] = useState("Todos");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyAiGenerated, setOnlyAiGenerated] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  // Selected Verbete Modal State
  const [selectedVerbete, setSelectedVerbete] = useState<Verbete | null>(null);

  // Auto-generate state for direct 1-click addition without requiring review
  const [isAutoGenerating, setIsAutoGenerating] = useState(false);
  const [autoGenError, setAutoGenError] = useState<string | null>(null);

  // Automatic technical generation and insertion for colloquial search terms
  const handleAutoGenerateAndInsert = async (colloquialTerm: string) => {
    if (!colloquialTerm.trim() || isAutoGenerating) return;

    setIsAutoGenerating(true);
    setAutoGenError(null);

    try {
      const res = await fetch("/api/gemini/expand-term", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          termName: colloquialTerm.trim(),
          category: "Pontos Básicos & Decorativos",
          contextPrompt: "A bordadeira buscou um termo coloquial ou informal. Como especialista do DIBE Artrelados, traduza para o conceito técnico oficial formal do bordado computadorizado, estruture com rigor todas as 16 designações do DIBE e entregue o verbete 100% pronto, revisado e finalizado.",
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Não foi possível gerar o verbete automaticamente.");
      }

      const raw = data.verbete;
      const cleanTerm = raw.term || colloquialTerm.trim();
      const firstLetter = cleanTerm.trim().charAt(0).toUpperCase();

      const newVerbete: Verbete = {
        id: "ai-" + Date.now(),
        code: raw.code || `${firstLetter}-${Math.floor(100 + Math.random() * 900)}`,
        term: cleanTerm,
        level: raw.level || "Intermediário 🟡",
        grammarClass: raw.grammarClass || "Substantivo masculino.",
        origin: raw.origin || "Termo técnico consolidado no bordado eletrônico.",
        pronunciation: raw.pronunciation,
        category: raw.category || "Pontos Básicos & Decorativos",
        summary: raw.summary || "",
        definition: raw.definition || "",
        technicalDetails: raw.technicalDetails || "",
        beginnerExplanation: raw.beginnerExplanation || "",
        characteristics: raw.characteristics || [],
        dicaArtrelados: raw.dicaArtrelados || undefined,
        voceSabia: raw.voceSabia || undefined,
        practicalExercise: raw.practicalExercise || undefined,
        quickSummary: raw.quickSummary || raw.summary || undefined,
        advantages: raw.advantages || [],
        limitations: raw.limitations || [],
        commonErrors: raw.commonErrors || [],
        recommendedSettings: raw.recommendedSettings,
        applications: raw.applications || [],
        troubleshootingTips: raw.troubleshootingTips || [],
        relatedTerms: raw.relatedTerms || [],
        tags: raw.tags || ["ia", "artrelados", colloquialTerm.toLowerCase().trim()],
        isAiGenerated: true,
        updatedAt: new Date().toISOString().split("T")[0],
      };

      // Automatically add to collection
      setVerbetes((prev) => [newVerbete, ...prev]);

      // Reset search query and open the ready-made modal immediately for the bordadeira to read
      setSearchQuery("");
      setSelectedVerbete(newVerbete);
    } catch (err: any) {
      setAutoGenError(err.message || "Erro ao gerar verbete com IA.");
    } finally {
      setIsAutoGenerating(false);
    }
  };

  // Save verbetes to localStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem("artrelados_verbetes_v1", JSON.stringify(verbetes));
    } catch (e) {
      console.error("Erro ao salvar verbetes", e);
    }
  }, [verbetes]);

  // Save troubleshooting guides
  useEffect(() => {
    try {
      localStorage.setItem("artrelados_troubleshooting_v1", JSON.stringify(troubleshootingGuides));
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

  // Open Modal to Create New Verbete
  const handleOpenCreateModal = () => {
    setVerbeteToEdit(null);
    setIsEditModalOpen(true);
  };

  // Open Modal to Edit Verbete
  const handleOpenEditModal = (verbete: Verbete, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setVerbeteToEdit(verbete);
    setIsEditModalOpen(true);
  };

  // Save or Update Verbete
  const handleSaveVerbete = (savedVerbete: Verbete) => {
    setVerbetes((prev) => {
      const exists = prev.some((v) => v.id === savedVerbete.id);
      if (exists) {
        return prev.map((v) => (v.id === savedVerbete.id ? savedVerbete : v));
      } else {
        return [savedVerbete, ...prev];
      }
    });

    if (selectedVerbete && selectedVerbete.id === savedVerbete.id) {
      setSelectedVerbete(savedVerbete);
    }
  };

  // Delete Verbete
  const handleDeleteVerbete = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setVerbetes((prev) => prev.filter((v) => v.id !== id));
    if (selectedVerbete && selectedVerbete.id === id) {
      setSelectedVerbete(null);
    }
  };

  // Add Single New Verbete (from AI)
  const handleAddVerbete = (newVerbete: Verbete) => {
    setVerbetes((prev) => [newVerbete, ...prev]);
  };

  // Batch Import Verbetes (from Document Importer)
  const handleImportVerbetes = (imported: Verbete[]) => {
    setVerbetes((prev) => {
      const sanitizedImported = sanitizeVerbetesList(imported);
      const existingTermsMap = new Set(prev.map((v) => v.term.toLowerCase().trim()));
      const existingIdsMap = new Set(prev.map((v) => v.id));

      const preparedNew = sanitizedImported.map((item, idx) => {
        let uniqueId = item.id;
        if (!uniqueId || existingIdsMap.has(uniqueId)) {
          uniqueId = `imp-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 7)}`;
        }
        existingIdsMap.add(uniqueId);
        return { ...item, id: uniqueId };
      });

      const filteredNew = preparedNew.filter((item) => !existingTermsMap.has(item.term.toLowerCase().trim()));
      return sanitizeVerbetesList([...filteredNew, ...prev]);
    });

    setActiveTab("dictionary");
    setSearchQuery("");
    setSelectedCategory("Todos");
    setSelectedLetter("Todos");
    setOnlyFavorites(false);
    setOnlyAiGenerated(false);
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
      if (!query && selectedLetter !== "Todos") {
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

        const fullContent = `${codeNorm} ${termNorm} ${summaryNorm} ${definitionNorm} ${techNorm} ${tagsNorm} ${appsNorm}`;

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
      totalFavorites: verbetes.filter((v) => v.isFavorite).length,
      totalAiGenerated: verbetes.filter((v) => v.isAiGenerated).length,
      lastUpdated: new Date().toISOString().split("T")[0],
    };
  }, [verbetes]);

  // Reset filters & ensure active dictionary view
  const handleResetFilters = () => {
    setActiveTab("dictionary");
    setSearchQuery("");
    setSelectedCategory("Todos");
    setSelectedLetter("Todos");
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
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        onAddNewVerbete={handleOpenCreateModal}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Main Acervo / Dictionary Tab */}
        {(activeTab === "dictionary" || activeTab === "favorites") && (
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
            />

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
                      isAdmin={isAdmin}
                      onEdit={handleOpenEditModal}
                      onDelete={handleDeleteVerbete}
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
                      isAdmin={isAdmin}
                      onEdit={handleOpenEditModal}
                      onDelete={handleDeleteVerbete}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-sm max-w-2xl mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto border border-amber-200 shadow-inner">
                  {isAutoGenerating ? (
                    <div className="w-6 h-6 border-3 border-amber-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Sparkles className="w-7 h-7 text-amber-600" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {searchQuery.trim()
                      ? `"${searchQuery.trim()}" ainda não está no dicionário`
                      : "Nenhum verbete encontrado para este filtro"}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {searchQuery.trim()
                      ? `A Inteligência Artificial Artrelados pode transformar "${searchQuery.trim()}" em um verbete técnico oficial completo com as 16 designações do DIBE e adicioná-lo imediatamente ao acervo para você.`
                      : "Tente limpar os filtros ou digitar o nome de um ponto, dúvida ou técnica na barra de busca."}
                  </p>
                </div>

                {autoGenError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold text-center">
                    {autoGenError}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  {searchQuery.trim() && (
                    <button
                      disabled={isAutoGenerating}
                      onClick={() => handleAutoGenerateAndInsert(searchQuery)}
                      className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center space-x-2 transition shadow-md hover:shadow cursor-pointer disabled:opacity-50"
                    >
                      {isAutoGenerating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Estruturando e Adicionando Verbete...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 fill-slate-950" />
                          <span>Adicionar Verbete Automaticamente (16 Designações)</span>
                        </>
                      )}
                    </button>
                  )}
                  <button
                    onClick={handleResetFilters}
                    disabled={isAutoGenerating}
                    className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm inline-flex items-center space-x-2 transition border border-slate-300 cursor-pointer disabled:opacity-50"
                  >
                    <BookOpen className="w-4 h-4 text-slate-600" />
                    <span>Ver Todos os Verbetes</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Troubleshooting Offline View */}
        {activeTab === "troubleshooting" && (
          <TroubleshootingView guides={troubleshootingGuides} />
        )}

        {/* AI Generator & Expander View */}
        {activeTab === "ai-expander" && (
          <AiTermExpanderView
            onAddVerbete={handleAddVerbete}
            existingVerbetes={verbetes}
            initialTerm={searchQuery.trim()}
            onClearInitialTerm={() => setSearchQuery("")}
          />
        )}

        {/* Word Document Importer View */}
        {activeTab === "importer" && (
          <DocumentImporterView
            onImportVerbetes={handleImportVerbetes}
            existingVerbetes={verbetes}
          />
        )}
      </main>

      {/* Verbete Detail Modal */}
      <VerbeteDetailModal
        verbete={selectedVerbete}
        onClose={() => setSelectedVerbete(null)}
        onToggleFavorite={handleToggleFavorite}
        onSelectRelatedTerm={handleSelectRelatedTerm}
        onAskAiToElaborate={handleAskAiToElaborate}
        isAdmin={isAdmin}
        onEdit={(verbete) => {
          setSelectedVerbete(null);
          handleOpenEditModal(verbete);
        }}
        onDelete={handleDeleteVerbete}
      />

      {/* Edit / Create Verbete Modal */}
      <EditVerbeteModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveVerbete}
        verbeteToEdit={verbeteToEdit}
      />

      {/* Footer / Control Bar */}
      <FooterBar
        stats={stats}
        onResetFilters={handleResetFilters}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        onAddNewVerbete={handleOpenCreateModal}
      />
    </div>
  );
}
