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
import { SupportedLanguage } from "../utils/i18n";

interface TroubleshootingViewProps {
  guides: TroubleshootingGuide[];
  savedDiagnostics: SavedDiagnostic[];
  onToggleSaveDiagnostic: (diagnostic: SavedDiagnostic) => void;
  currentLanguage?: SupportedLanguage;
}

export const TroubleshootingView: React.FC<TroubleshootingViewProps> = ({
  guides,
  savedDiagnostics,
  onToggleSaveDiagnostic,
  currentLanguage = "pt",
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
    bobbinThread: "",
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
  const quickProblems = useMemo(() => {
    if (currentLanguage === "es") {
      return [
        "Hilo superior rompiéndose repetidamente",
        "Puntada floja y bucles de hilo en el revés (nido)",
        "Contorno desalineado y fuera de registro",
        "Tejido tirante y arrugado alrededor del bordado",
        "Aguja rompiéndose con frecuencia o golpeando",
        "Saltos de puntada o fallas en la costura",
      ];
    }
    return [
      "Linha superior quebrando repetidamente",
      "Ponto fofo e laços de linha no avesso (ninho)",
      "Contorno desalinhado e fora de registro",
      "Tecido repuxando e enrugando ao redor do bordado",
      "Agulha quebrando com frequência ou batendo",
      "Pulos de ponto ou falhas na costura",
    ];
  }, [currentLanguage]);

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
            <span>
              {currentLanguage === "es"
                ? "Taller de Bordado y Diagnóstico de Problemas"
                : "Guia de Resolução de Problemas & Diagnóstico"}
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
            {currentLanguage === "es"
              ? "Asistente técnico de taller y biblioteca técnica para resolver defectos en el bordado computarizado."
              : "Assistente técnico de oficina e biblioteca técnica para resolver defeitos em bordado eletrônico."}
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
            <span>{currentLanguage === "es" ? "Diagnóstico Asistido" : "Diagnóstico Assistido"}</span>
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
            <span>
              {currentLanguage === "es" ? "Catálogo de Guías" : "Catálogo de Guias"} ({guides.length})
            </span>
          </button>
        </div>
      </div>

      {/* SECTION 1: DIAGNOSTIC ASSISTANT */}
      {activeTab === "diagnostic" && (
        <div className="space-y-6">
          {/* Diagnostic Form */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-500" />
                <span>
                  {currentLanguage === "es"
                    ? "Taller de Bordado — Parámetros y Diagnóstico del Defecto"
                    : "Oficina do Bordado — Parâmetros & Diagnóstico do Defeito"}
                </span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                {currentLanguage === "es"
                  ? "Complete los parámetros de trabajo de su máquina para recibir un análisis técnico preciso, rápido y personalizado."
                  : "Preencha os parâmetros de trabalho da sua máquina para receber uma análise técnica precisa, rápida e personalizada."}
              </p>
            </div>

            <form onSubmit={handleRunDiagnostic} className="space-y-5">
              {/* Problem description input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {currentLanguage === "es" ? "Síntoma o Problema Observado *" : "Sintoma ou Problema Observado *"}
                </label>
                <textarea
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  placeholder={
                    currentLanguage === "es"
                      ? "Ej: El hilo superior se rompe cada 20 puntadas y forma bucles por debajo..."
                      : "Ex: A linha superior está quebrando a cada 20 pontos e fazendo laços embaixo..."
                  }
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-medium text-slate-800"
                />
              </div>

              {/* Quick Presets - Clean horizontal row */}
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  {currentLanguage === "es"
                    ? "Problemas Frecuentes (Haga clic para completar):"
                    : "Problemas Frequentes (Clique para preencher):"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickProblems.map((prob, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setProblemDescription(prob)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-900 border border-slate-200 text-xs font-semibold text-slate-700 transition cursor-pointer text-left"
                    >
                      {prob}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Parameters - Open & Distributed Horizontally */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                    {currentLanguage === "es"
                      ? "Parámetros Técnicos de Trabajo (Visibles y Abiertos)"
                      : "Parâmetros Técnicos de Trabalho (Visíveis & Abertos)"}
                  </span>
                </div>

                {/* Row 1: Machine, Fabric, Upper Thread, Bobbin Thread */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Modelo de Máquina" : "Modelo da Máquina"}
                    </label>
                    <input
                      type="text"
                      value={machineModel}
                      onChange={(e) => setMachineModel(e.target.value)}
                      placeholder="Ex: Brother BP2150, Janome..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Tipo de Tejido" : "Tipo de Tecido"}
                    </label>
                    <input
                      type="text"
                      value={fabricType}
                      onChange={(e) => setFabricType(e.target.value)}
                      placeholder={currentLanguage === "es" ? "Ej: Piqué, Toalla, Denim..." : "Ex: Malha piquet, Toalha, Brim..."}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Hilo Superior" : "Linha Superior"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.threadType || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, threadType: e.target.value })}
                      placeholder={currentLanguage === "es" ? "Ej: Poliéster 120, Metálico..." : "Ex: Poliéster 120, Metálica..."}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Hilo de la Canilla" : "Linha da Bobina"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.bobbinThread || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, bobbinThread: e.target.value })}
                      placeholder={currentLanguage === "es" ? "Ej: Canilla 150/2, Prebobinada..." : "Ex: Bobina 150/2, Pré-enrolada..."}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                </div>

                {/* Row 2: Needle Number, Needle Tip, Tension, Speed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Nº de Aguja" : "Nº da Agulha"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.needleNumber || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, needleNumber: e.target.value })}
                      placeholder="Ex: 75/11, 80/12, 90/14..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Punta de Aguja" : "Ponta da Agulha"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.needleTip || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, needleTip: e.target.value })}
                      placeholder={currentLanguage === "es" ? "Ej: Punta Bola (SES/SUK), Aguda..." : "Ex: Ponta Bola (SES/SUK), Aguda..."}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Tensión del Hilo" : "Tensão da Linha"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.tensionSetting || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, tensionSetting: e.target.value })}
                      placeholder={currentLanguage === "es" ? "Ej: Estándar 3.2, Apretada, Floja..." : "Ex: Padrão 3.2, Apertada, Frouxa..."}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Velocidad (PPM)" : "Velocidade (PPM)"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.speedSetting || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, speedSetting: e.target.value })}
                      placeholder="Ex: 600 PPM, 750 PPM..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                </div>

                {/* Row 3: Stabilizer Type, Layers / Grammage, Matrix Origin */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Tipo de Entretela" : "Tipo de Entretela"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.stabilizerType || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, stabilizerType: e.target.value })}
                      placeholder={currentLanguage === "es" ? "Ej: Desprendible (Tear-away), Recorte, Hidrosoluble..." : "Ex: Rasga-fácil, Recorta (Cutaway), Hidrossolúvel..."}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Capas / Gramaje de la Entretela" : "Camadas / Gramatura da Entretela"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.stabilizerLayers || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, stabilizerLayers: e.target.value })}
                      placeholder={currentLanguage === "es" ? "Ej: 1 capa 80g, 2 capas 45g..." : "Ex: 1 camada 80g, 2 camadas 45g..."}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      {currentLanguage === "es" ? "Origen / Historial de la Matriz" : "Origem / Histórico da Matriz"}
                    </label>
                    <input
                      type="text"
                      value={advancedInputs.matrixHistory || ""}
                      onChange={(e) => setAdvancedInputs({ ...advancedInputs, matrixHistory: e.target.value })}
                      placeholder={currentLanguage === "es" ? "Ej: Propia probada, Descargada, Nueva..." : "Ex: Própria testada, Baixada da internet, Nova..."}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!problemDescription.trim()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 disabled:opacity-50 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Cpu className="w-4 h-4 text-slate-950" />
                  <span>
                    {currentLanguage === "es"
                      ? "Analizar Parámetros y Generar Solución Técnica"
                      : "Analisar Parâmetros e Gerar Solução Técnica"}
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Diagnostic Result Card */}
          <div className="space-y-4">
            {diagnosticResult ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6 animate-fade-in">
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
                    <span>
                      {currentLanguage === "es"
                        ? "Paso a Paso de Resolución en la Máquina:"
                        : "Passo a Passo de Resolução na Máquina:"}
                    </span>
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
                    <strong className="text-slate-900 block mb-1">
                      {currentLanguage === "es" ? "Cómo Prevenir:" : "Como Prevenir:"}
                    </strong>
                    {diagnosticResult.preventiveAdvice}
                  </div>
                )}

                {/* Recommended Settings */}
                {diagnosticResult.recommendedSettings && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {diagnosticResult.recommendedSettings.needle && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">
                          {currentLanguage === "es" ? "Aguja" : "Agulha"}
                        </span>
                        <strong className="text-xs text-slate-800">{diagnosticResult.recommendedSettings.needle}</strong>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.stabilizer && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">
                          {currentLanguage === "es" ? "Entretela" : "Entretela"}
                        </span>
                        <strong className="text-xs text-slate-800">{diagnosticResult.recommendedSettings.stabilizer}</strong>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.speed && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">
                          {currentLanguage === "es" ? "Velocidad" : "Velocidade"}
                        </span>
                        <strong className="text-xs text-slate-800">{diagnosticResult.recommendedSettings.speed}</strong>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.tension && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">
                          {currentLanguage === "es" ? "Tensión" : "Tensão"}
                        </span>
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
                      <strong className="font-black block text-amber-900 mb-0.5">
                        {currentLanguage === "es" ? "Consejo Artrelados:" : "Dica Artrelados:"}
                      </strong>
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
                  <h4 className="text-base font-black text-slate-900">
                    {currentLanguage === "es"
                      ? "Esperando Descripción del Defecto"
                      : "Aguardando Descrição do Defeito"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-medium">
                    {currentLanguage === "es"
                      ? "Complete el formulario con los detalles de lo que está ocurriendo en su máquina para recibir un diagnóstico paso a paso con soluciones prácticas."
                      : "Preencha o formulário ao lado com os detalhes do que está acontecendo na sua máquina para receber um diagnóstico passo a passo com soluções práticas."}
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
                placeholder={
                  currentLanguage === "es"
                    ? "Buscar guía por síntoma o defecto..."
                    : "Buscar guia por sintoma ou defeito..."
                }
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
                {currentLanguage === "es" ? "Categoría:" : "Categoria:"}
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
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
                          {currentLanguage === "es" ? "Síntomas Observados:" : "Sintomas Observados:"}
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
                          {currentLanguage === "es" ? "Causas Probables:" : "Causas Prováveis:"}
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
                          {currentLanguage === "es" ? "Solución Paso a Paso:" : "Solução Passo a Passo:"}
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
                          <strong className="text-amber-950 font-bold block mb-0.5">
                            {currentLanguage === "es" ? "Prevención:" : "Prevenção:"}
                          </strong>
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
