import React, { useState, useMemo } from "react";
import {
  Wrench,
  Search,
  AlertTriangle,
  CheckCircle2,
  Bookmark,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Settings,
  HelpCircle,
  Cpu,
  Layers,
  Activity,
  Lightbulb
} from "lucide-react";
import { TroubleshootingGuide, SavedDiagnostic, DiagnosticInputs } from "../types";
import { analyzeEmbroideryProblem, DiagnosticResult } from "../utils/diagnosticEngine";

interface TroubleshootingViewProps {
  guides: TroubleshootingGuide[];
  savedDiagnostics: SavedDiagnostic[];
  onToggleSaveDiagnostic: (diagnostic: SavedDiagnostic) => void;
}

export const TroubleshootingView: React.FC<TroubleshootingViewProps> = ({
  guides,
  savedDiagnostics,
  onToggleSaveDiagnostic,
}) => {
  // Mode: "guides" (catalog) or "diagnostic" (interactive tool)
  const [activeTab, setActiveTab] = useState<"diagnostic" | "guides">("diagnostic");

  // Search & Filter for Guides
  const [guideSearch, setGuideSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(null);

  // Diagnostic Assistant State
  const [problemDescription, setProblemDescription] = useState("");
  const [machineModel, setMachineModel] = useState("");
  const [fabricType, setFabricType] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedInputs, setAdvancedInputs] = useState<Partial<DiagnosticInputs>>({
    threadType: "",
    needleNumber: "",
    needleTip: "",
    stabilizerType: "",
    stabilizerLayers: "",
    matrixPoints: "",
    matrixHistory: "",
    speedSetting: "",
    tensionSetting: "",
  });
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);

  // Guide Categories
  const categories = useMemo(() => {
    const cats = new Set(guides.map((g) => g.category));
    return ["Todas", ...Array.from(cats).sort()];
  }, [guides]);

  // Filtered Guides
  const filteredGuides = useMemo(() => {
    return guides.filter((g) => {
      const matchCat = selectedCategory === "Todas" || g.category === selectedCategory;
      const q = guideSearch.toLowerCase().trim();
      const matchSearch =
        !q ||
        g.title.toLowerCase().includes(q) ||
        g.symptoms.some((s) => s.toLowerCase().includes(q)) ||
        g.probableCauses.some((c) => c.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [guides, selectedCategory, guideSearch]);

  // Quick Problem Presets
  const quickProblems = [
    "Linha superior quebrando repetidamente",
    "Ponto fofo e laços de linha no avesso (ninho)",
    "Contorno desalinhado e fora de registro",
    "Tecido repuxando e enrugando ao redor do bordado",
    "Agulha quebrando com frequência ou batendo",
    "Pulos de ponto ou falhas na costura",
  ];

  const handleRunDiagnostic = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!problemDescription.trim()) return;

    const result = analyzeEmbroideryProblem(
      problemDescription,
      machineModel,
      fabricType,
      advancedInputs
    );
    setDiagnosticResult(result);
  };

  const isCurrentDiagnosticSaved = useMemo(() => {
    if (!diagnosticResult) return false;
    return savedDiagnostics.some(
      (d) => d.title === diagnosticResult.title && d.problemDescription === problemDescription
    );
  }, [diagnosticResult, savedDiagnostics, problemDescription]);

  const handleSaveCurrentDiagnostic = () => {
    if (!diagnosticResult) return;
    const diagToSave: SavedDiagnostic = {
      id: `diag-${Date.now()}`,
      savedAt: new Date().toISOString(),
      severity: diagnosticResult.severity,
      category: diagnosticResult.category,
      title: diagnosticResult.title,
      machineModel: machineModel || undefined,
      fabricType: fabricType || undefined,
      problemDescription: problemDescription,
      summary: diagnosticResult.summary,
      probableCauses: diagnosticResult.probableCauses,
      stepByStepSolution: diagnosticResult.stepByStepSolution,
      preventiveAdvice: diagnosticResult.preventiveAdvice,
      recommendedSettings: diagnosticResult.recommendedSettings,
      artreladosTip: diagnosticResult.artreladosTip,
    };
    onToggleSaveDiagnostic(diagToSave);
  };

  return (
    <div className="space-y-6">
      {/* Navigation Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <Wrench className="w-6 h-6 text-amber-500" />
            <span>Guia de Resolução de Problemas & Diagnóstico</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
            Assistente técnico de oficina e biblioteca técnica para resolver defeitos em bordado eletrônico.
          </p>
        </div>

        {/* Sub-tab Switcher */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-stretch md:self-auto">
          <button
            onClick={() => setActiveTab("diagnostic")}
            className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "diagnostic"
                ? "bg-amber-400 text-slate-950 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Diagnóstico Assistido</span>
          </button>
          <button
            onClick={() => setActiveTab("guides")}
            className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "guides"
                ? "bg-amber-400 text-slate-950 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Catálogo de Guias ({guides.length})</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: DIAGNOSTIC ASSISTANT */}
      {activeTab === "diagnostic" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Diagnostic Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-500" />
                <span>Descreva o Problema</span>
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Relate os sintomas ocorridos durante o bordado para gerar uma análise técnica direcionada.
              </p>
            </div>

            <form onSubmit={handleRunDiagnostic} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Sintoma ou Problema Observado *
                </label>
                <textarea
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  placeholder="Ex: A linha superior está quebrando a cada 20 pontos e fazendo laços embaixo..."
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium text-slate-800"
                />
              </div>

              {/* Quick Presets */}
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Problemas Frequentes (Clique para preencher):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickProblems.map((prob, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setProblemDescription(prob)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-900 border border-slate-200 text-[11px] font-semibold text-slate-700 transition cursor-pointer text-left"
                    >
                      {prob}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Modelo da Máquina
                  </label>
                  <input
                    type="text"
                    value={machineModel}
                    onChange={(e) => setMachineModel(e.target.value)}
                    placeholder="Ex: Brother BP2150, Janome MC500E..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Tipo de Tecido
                  </label>
                  <input
                    type="text"
                    value={fabricType}
                    onChange={(e) => setFabricType(e.target.value)}
                    placeholder="Ex: Malha piquet, Toalha, Brim..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Advanced Parameters Toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 pt-1 cursor-pointer"
                >
                  <Settings className="w-3.5 h-3.5 text-amber-500" />
                  <span>{showAdvanced ? "Ocultar Parâmetros Técnicos Opcionais" : "Adicionar Parâmetros Técnicos (Opcional)"}</span>
                  {showAdvanced ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showAdvanced && (
                  <div className="p-3.5 mt-2.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 animate-fade-in">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Linha</label>
                        <input
                          type="text"
                          value={advancedInputs.threadType || ""}
                          onChange={(e) => setAdvancedInputs({ ...advancedInputs, threadType: e.target.value })}
                          placeholder="Ex: Poliéster 120"
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Nº Agulha</label>
                        <input
                          type="text"
                          value={advancedInputs.needleNumber || ""}
                          onChange={(e) => setAdvancedInputs({ ...advancedInputs, needleNumber: e.target.value })}
                          placeholder="Ex: 75/11"
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Entretela</label>
                        <input
                          type="text"
                          value={advancedInputs.stabilizerType || ""}
                          onChange={(e) => setAdvancedInputs({ ...advancedInputs, stabilizerType: e.target.value })}
                          placeholder="Ex: Rasga-fácil"
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase">Velocidade (PPM)</label>
                        <input
                          type="text"
                          value={advancedInputs.speedSetting || ""}
                          onChange={(e) => setAdvancedInputs({ ...advancedInputs, speedSetting: e.target.value })}
                          placeholder="Ex: 650 PPM"
                          className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={!problemDescription.trim()}
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 disabled:opacity-50 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Cpu className="w-4 h-4 text-slate-950" />
                <span>Analisar e Gerar Solução Técnica</span>
              </button>
            </form>
          </div>

          {/* Diagnostic Result Card */}
          <div className="lg:col-span-7 space-y-4">
            {diagnosticResult ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5 animate-fade-in">
                {/* Result Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${
                          diagnosticResult.severity === "Crítica"
                            ? "bg-rose-100 text-rose-900 border-rose-300"
                            : diagnosticResult.severity === "Alta"
                            ? "bg-amber-100 text-amber-900 border-amber-300"
                            : "bg-emerald-100 text-emerald-900 border-emerald-300"
                        }`}
                      >
                        Severidade: {diagnosticResult.severity}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                        {diagnosticResult.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      {diagnosticResult.title}
                    </h3>
                  </div>

                  <button
                    onClick={handleSaveCurrentDiagnostic}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      isCurrentDiagnosticSaved
                        ? "bg-amber-100 text-amber-900 border border-amber-300"
                        : "bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900"
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${isCurrentDiagnosticSaved ? "fill-amber-500 text-amber-600" : ""}`} />
                    <span>{isCurrentDiagnosticSaved ? "Salvo em Favoritos" : "Favoritar Diagnóstico"}</span>
                  </button>
                </div>

                {/* Summary */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {diagnosticResult.summary}
                </div>

                {/* Critical Alerts if any */}
                {diagnosticResult.criticalAlerts && diagnosticResult.criticalAlerts.length > 0 && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1.5">
                    <div className="flex items-center gap-2 text-rose-800 font-bold text-xs">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Alertas Críticos de Segurança / Máquina:</span>
                    </div>
                    <ul className="space-y-1 text-xs text-rose-900 font-medium pl-6 list-disc">
                      {diagnosticResult.criticalAlerts.map((alert, i) => (
                        <li key={i}>{alert}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Probable Causes */}
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                    <span>Causas Mais Prováveis:</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {diagnosticResult.probableCauses.map((cause, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step-by-Step Solution */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Passo a Passo de Resolução na Máquina:</span>
                  </h4>
                  <ol className="space-y-2">
                    {diagnosticResult.stepByStepSolution.map((step, i) => (
                      <li key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Preventive Advice */}
                {diagnosticResult.preventiveAdvice && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                    <strong className="text-slate-900 block mb-1">Como Prevenir:</strong>
                    {diagnosticResult.preventiveAdvice}
                  </div>
                )}

                {/* Recommended Settings */}
                {diagnosticResult.recommendedSettings && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {diagnosticResult.recommendedSettings.needle && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Agulha</span>
                        <strong className="text-xs text-slate-800">{diagnosticResult.recommendedSettings.needle}</strong>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.stabilizer && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Entretela</span>
                        <strong className="text-xs text-slate-800">{diagnosticResult.recommendedSettings.stabilizer}</strong>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.speed && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Velocidade</span>
                        <strong className="text-xs text-slate-800">{diagnosticResult.recommendedSettings.speed}</strong>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.tension && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Tensão</span>
                        <strong className="text-xs text-slate-800">{diagnosticResult.recommendedSettings.tension}</strong>
                      </div>
                    )}
                  </div>
                )}

                {/* Artrelados Tip */}
                {diagnosticResult.artreladosTip && (
                  <div className="p-4 rounded-2xl bg-amber-100/60 border border-amber-300 flex items-start gap-3 text-xs sm:text-sm text-amber-950 font-medium">
                    <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-black block text-amber-900 mb-0.5">Dica Artrelados:</strong>
                      {diagnosticResult.artreladosTip}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
                  <Wrench className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-black text-slate-900">Aguardando Descrição do Defeito</h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-medium">
                    Preencha o formulário ao lado com os detalhes do que está acontecendo na sua máquina para receber um diagnóstico passo a passo com soluções práticas.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SECTION 2: GUIDES CATALOG */}
      {activeTab === "guides" && (
        <div className="space-y-5">
          {/* Filter Bar */}
          <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={guideSearch}
                onChange={(e) => setGuideSearch(e.target.value)}
                placeholder="Buscar guia por sintoma ou defeito..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">Categoria:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Guides List */}
          <div className="space-y-3">
            {filteredGuides.map((guide) => {
              const isExpanded = expandedGuideId === guide.id;
              return (
                <div
                  key={guide.id}
                  className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs hover:border-amber-300 transition space-y-3"
                >
                  <div
                    onClick={() => setExpandedGuideId(isExpanded ? null : guide.id)}
                    className="flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                          {guide.category}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900">
                        {guide.title}
                      </h4>
                    </div>

                    <button className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-100 space-y-4 animate-fade-in">
                      {/* Symptoms */}
                      <div>
                        <strong className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                          Sintomas Observados:
                        </strong>
                        <ul className="space-y-1 text-xs sm:text-sm text-slate-700 pl-4 list-disc font-medium">
                          {guide.symptoms.map((sym, i) => (
                            <li key={i}>{sym}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Causes */}
                      <div>
                        <strong className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                          Causas Prováveis:
                        </strong>
                        <ul className="space-y-1 text-xs sm:text-sm text-slate-700 pl-4 list-disc font-medium">
                          {guide.probableCauses.map((pc, i) => (
                            <li key={i}>{pc}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Solution */}
                      <div>
                        <strong className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                          Solução Passo a Passo:
                        </strong>
                        <ol className="space-y-1.5">
                          {guide.stepByStepSolution.map((step, i) => (
                            <li key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Preventive Advice */}
                      {guide.preventiveAdvice && (
                        <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-slate-700 font-medium">
                          <strong className="text-amber-950 font-bold block mb-0.5">Prevenção:</strong>
                          {guide.preventiveAdvice}
                        </div>
                      )}

                      {/* Recommended Settings */}
                      {(guide.recommendedProductsOrSettings || guide.recommendedSettings) && (
                        <div className="flex flex-wrap gap-2 text-xs pt-1">
                          {Object.entries(guide.recommendedProductsOrSettings || guide.recommendedSettings || {}).map(([k, v]) => (
                            <span key={k} className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-medium">
                              <strong className="uppercase text-[10px] text-slate-400 mr-1">{k}:</strong>
                              {v}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
