import React, { useState } from "react";
import { Wrench, AlertTriangle, CheckCircle2, Sparkles, Search, Loader2, ChevronDown, ChevronUp, Copy, Check, RefreshCw, Gauge, ShieldAlert, Zap, Star, BookOpen, Layers, Maximize2, ShieldCheck, ExternalLink } from "lucide-react";
import { TroubleshootingGuide, SavedDiagnostic } from "../types";
import { analyzeEmbroideryProblem, DiagnosticResult } from "../utils/diagnosticEngine";
import { FabricRecipesModalOrSection } from "./FabricRecipesSection";
import { HoopGuideSection } from "./HoopGuideSection";
import { ManualsSection } from "./ManualsSection";

interface TroubleshootingViewProps {
  guides: TroubleshootingGuide[];
  savedDiagnostics?: SavedDiagnostic[];
  onToggleSaveDiagnostic?: (diag: SavedDiagnostic) => void;
}

export const TroubleshootingView: React.FC<TroubleshootingViewProps> = ({
  guides,
  savedDiagnostics = [],
  onToggleSaveDiagnostic
}) => {
  // Navigation sub-tab state inside Troubleshooting
  const [troubleSubTab, setTroubleSubTab] = useState<"diagnostico" | "receituario" | "bastidores" | "manuais">("diagnostico");

  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(guides[0]?.id || null);

  // Custom Diagnostic state
  const [isAiDiagOpen, setIsAiDiagOpen] = useState<boolean>(true);
  const [customProblem, setCustomProblem] = useState<string>("");
  const [machineModel, setMachineModel] = useState<string>("");
  const [fabricType, setFabricType] = useState<string>("");
  
  // New specific parameters
  const [threadType, setThreadType] = useState<string>("");
  const [needleNumber, setNeedleNumber] = useState<string>("");
  const [needleTip, setNeedleTip] = useState<string>("");
  const [stabilizerType, setStabilizerType] = useState<string>("");
  const [stabilizerLayers, setStabilizerLayers] = useState<string>("");
  const [matrixPoints, setMatrixPoints] = useState<string>("");
  const [matrixHistory, setMatrixHistory] = useState<string>("");
  const [speedSetting, setSpeedSetting] = useState<string>("");
  const [tensionSetting, setTensionSetting] = useState<string>("");
  const [showAdvancedParams, setShowAdvancedParams] = useState<boolean>(false);

  const [loadingDiag, setLoadingDiag] = useState<boolean>(false);
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);
  const [currentDiagnosticId, setCurrentDiagnosticId] = useState<string>("");
  const [copiedDiag, setCopiedDiag] = useState<boolean>(false);

  const categories = ["Todas", "Linhas & Agulhas", "Tensão & Caixilho", "Bastidor & Programação", "Mecânica & Ajustes", "Multiagulhas & Industriais"];

  const filteredGuides = guides.filter((g) => {
    const matchesCat = selectedCategory === "Todas" || g.category === selectedCategory;
    const matchesQuery =
      searchQuery === "" ||
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.symptoms.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      g.probableCauses.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const handleRunDiagnostic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customProblem.trim()) return;

    setLoadingDiag(true);
    setDiagnosticResult(null);
    const diagId = `diag_${Date.now()}`;
    setCurrentDiagnosticId(diagId);

    // Provide immediate, highly accurate client-side analysis with realistic feedback delay
    setTimeout(() => {
      try {
        const result = analyzeEmbroideryProblem(customProblem, machineModel, fabricType, {
          threadType,
          needleNumber,
          needleTip,
          stabilizerType,
          stabilizerLayers,
          matrixPoints,
          matrixHistory,
          speedSetting,
          tensionSetting
        });
        setDiagnosticResult(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingDiag(false);
      }
    }, 450);
  };

  const handleCopyDiagnostic = () => {
    if (!diagnosticResult) return;
    const alertsText = diagnosticResult.criticalAlerts && diagnosticResult.criticalAlerts.length > 0
      ? `\nAlertas Críticos:\n${diagnosticResult.criticalAlerts.map(a => `• ${a}`).join("\n")}\n`
      : "";
    const text = `📋 DIAGNÓSTICO DIBE ARTRELADOS\n${diagnosticResult.title}\n${alertsText}\nResumo:\n${diagnosticResult.summary}\n\nCausas Prováveis:\n${diagnosticResult.probableCauses.map((c) => `• ${c}`).join("\n")}\n\nSolução Passo a Passo:\n${diagnosticResult.stepByStepSolution.join("\n")}\n\n${diagnosticResult.artreladosTip}`;
    navigator.clipboard.writeText(text);
    setCopiedDiag(true);
    setTimeout(() => setCopiedDiag(false), 2500);
  };

  const isCurrentSaved = diagnosticResult && savedDiagnostics.some(
    (d) => d.title === diagnosticResult.title && d.problemDescription === customProblem
  );

  const handleToggleFavorite = () => {
    if (!diagnosticResult || !onToggleSaveDiagnostic) return;
    const itemToSave: SavedDiagnostic = {
      id: currentDiagnosticId || `diag_${Date.now()}`,
      savedAt: new Date().toISOString(),
      problemDescription: customProblem,
      machineModel: machineModel.trim() || undefined,
      fabricType: fabricType.trim() || undefined,
      threadType: threadType.trim() || undefined,
      needleNumber: needleNumber.trim() || undefined,
      needleTip: needleTip.trim() || undefined,
      stabilizerType: stabilizerType.trim() || undefined,
      stabilizerLayers: stabilizerLayers.trim() || undefined,
      matrixPoints: matrixPoints.trim() || undefined,
      matrixHistory: matrixHistory.trim() || undefined,
      speedSetting: speedSetting.trim() || undefined,
      tensionSetting: tensionSetting.trim() || undefined,
      title: diagnosticResult.title,
      category: diagnosticResult.category,
      severity: diagnosticResult.severity,
      summary: diagnosticResult.summary,
      probableCauses: diagnosticResult.probableCauses,
      stepByStepSolution: diagnosticResult.stepByStepSolution,
      preventiveAdvice: diagnosticResult.preventiveAdvice,
      recommendedSettings: diagnosticResult.recommendedSettings,
      artreladosTip: diagnosticResult.artreladosTip
    };
    onToggleSaveDiagnostic(itemToSave);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-base sm:text-lg">
              <Wrench className="w-5 h-5 text-amber-500" />
              <h2>Oficina do Bordado</h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl font-medium">
              Consultoria completa de bancada: diagnóstico para falhas mecânicas, receituário de tecidos, gabarito de bastidores e manuais oficiais de suporte técnico.
            </p>
          </div>

          {troubleSubTab === "diagnostico" && (
            <button
              onClick={() => setIsAiDiagOpen(!isAiDiagOpen)}
              className="px-4 py-2.5 rounded-xl bg-[#101726] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow transition shrink-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{isAiDiagOpen ? "Ocultar Diagnóstico IA" : "Novo Diagnóstico IA"}</span>
            </button>
          )}
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center space-x-2 border-t border-slate-100 pt-4 mt-4 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setTroubleSubTab("diagnostico")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center space-x-2 transition cursor-pointer shrink-0 ${
              troubleSubTab === "diagnostico"
                ? "bg-[#101726] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Wrench className="w-4 h-4 text-amber-400" />
            <span>Diagnóstico IA & Guias de Defeitos</span>
          </button>

          <button
            onClick={() => setTroubleSubTab("receituario")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center space-x-2 transition cursor-pointer shrink-0 ${
              troubleSubTab === "receituario"
                ? "bg-[#101726] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Layers className="w-4 h-4 text-amber-500" />
            <span>🧵 Receituário de Tecidos</span>
          </button>

          <button
            onClick={() => setTroubleSubTab("bastidores")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center space-x-2 transition cursor-pointer shrink-0 ${
              troubleSubTab === "bastidores"
                ? "bg-[#101726] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Maximize2 className="w-4 h-4 text-amber-500" />
            <span>📏 Gabarito de Bastidores</span>
          </button>

          <button
            onClick={() => setTroubleSubTab("manuais")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center space-x-2 transition cursor-pointer shrink-0 ${
              troubleSubTab === "manuais"
                ? "bg-[#101726] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>📖 Manuais & Fontes Técnicas</span>
          </button>
        </div>
      </div>

      {/* RENDER CONTENT ACCORDING TO ACTIVE SUBTAB */}

      {/* SUBTAB 2: Receituário de Tecidos */}
      {troubleSubTab === "receituario" && (
        <div className="animate-fade-in">
          <FabricRecipesModalOrSection />
        </div>
      )}

      {/* SUBTAB 3: Gabarito de Bastidores */}
      {troubleSubTab === "bastidores" && (
        <div className="animate-fade-in">
          <HoopGuideSection />
        </div>
      )}

      {/* SUBTAB 4: Manuais & Fontes Técnicas */}
      {troubleSubTab === "manuais" && (
        <div className="animate-fade-in">
          <ManualsSection />
        </div>
      )}

      {/* SUBTAB 1: Diagnóstico IA & Guias de Defeitos */}
      {troubleSubTab === "diagnostico" && (
        <>
          {/* Custom Diagnostic Assistant Form */}
          {isAiDiagOpen && (

        <div className="p-6 rounded-3xl bg-white border border-amber-300 shadow-md space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-lg">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3>Diagnóstico Personalizado IA</h3>
            </div>
            <span className="text-[11px] font-black px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
              ✓ Atendimento Imediato
            </span>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm">
            Descreva o que está acontecendo na sua máquina de bordar (Brother, Janome, Barudan, Tajima, Singer, etc.) para receber a análise exata das causas e o passo a passo de correção.
          </p>

          <form onSubmit={handleRunDiagnostic} className="space-y-4">
            {/* Informações Básicas da Máquina e Tecido (Mantidos com destaque) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Modelo da Máquina
                </label>
                <input
                  type="text"
                  placeholder="Ex: Typical, Brother PE810L, Janome MC500E, Tajima, Barudan..."
                  value={machineModel}
                  onChange={(e) => setMachineModel(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tipo de Tecido / Material
                </label>
                <input
                  type="text"
                  placeholder="Ex: Algodão, Malha, Toalha felpuda, Piquê, Jeans..."
                  value={fabricType}
                  onChange={(e) => setFabricType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none"
                />
              </div>
            </div>

            {/* Parâmetros Específicos do Bordado (Linha, Agulha, Entretela, Matriz, Configurações) */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-amber-600" />
                  Parâmetros de Trabalho da Oficina (Opcionais para Alta Precisão)
                </span>
                <button
                  type="button"
                  onClick={() => setShowAdvancedParams(!showAdvancedParams)}
                  className="text-[11px] font-bold text-amber-900 hover:text-slate-950 underline cursor-pointer"
                >
                  {showAdvancedParams ? "Ocultar detalhes" : "Preencher todos os parâmetros +"}
                </button>
              </div>

              {/* Sempre visíveis os 3 principais: Linha, Agulha e Entretela */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    🧵 Linha Utilizada
                  </label>
                  <select
                    value={threadType}
                    onChange={(e) => setThreadType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none"
                  >
                    <option value="">Selecione a linha...</option>
                    <option value="Poliéster 120/2 (Padrão)">Poliéster 120/2 (Padrão)</option>
                    <option value="Rayon / Viscose">Rayon / Viscose (Alto brilho)</option>
                    <option value="Algodão">Algodão (Fosca / Vintage)</option>
                    <option value="Metálica / Metalizada">Metálica / Metalizada (Ouro/Prata)</option>
                    <option value="Outra / Especial">Outra / Especial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    🪡 Agulha (Número & Ponta)
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <select
                      value={needleNumber}
                      onChange={(e) => setNeedleNumber(e.target.value)}
                      className="w-full px-2 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Calibre...</option>
                      <option value="65/9">65/9 (Muito fina)</option>
                      <option value="75/11">75/11 (Padrão)</option>
                      <option value="80/12">80/12 (Média)</option>
                      <option value="90/14">90/14 (Grossa)</option>
                    </select>
                    <select
                      value={needleTip}
                      onChange={(e) => setNeedleTip(e.target.value)}
                      className="w-full px-2 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Ponta...</option>
                      <option value="Ponta Bola (SES/SUK)">Ponta Bola (Malha)</option>
                      <option value="Universal / Seta">Universal</option>
                      <option value="Microtex / Aguda">Microtex / Aguda</option>
                      <option value="Topstitch / Metallic">Topstitch / Metallic</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    📏 Entretela / Estabilizador
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <select
                      value={stabilizerType}
                      onChange={(e) => setStabilizerType(e.target.value)}
                      className="w-full px-2 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Tipo...</option>
                      <option value="Rasgável (Tearaway)">Rasgável (Tearaway)</option>
                      <option value="Recorte (Cutaway)">Recorte (Cutaway)</option>
                      <option value="Hidrossolúvel (Solúvel)">Hidrossolúvel</option>
                      <option value="Termocolante">Termocolante</option>
                      <option value="Sem entretela">Sem entretela</option>
                    </select>
                    <select
                      value={stabilizerLayers}
                      onChange={(e) => setStabilizerLayers(e.target.value)}
                      className="w-full px-2 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Camadas...</option>
                      <option value="1 camada">1 camada</option>
                      <option value="2 camadas">2 camadas</option>
                      <option value="3 ou mais">3 ou mais</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parâmetros Complementares: Matriz e Configurações da Máquina */}
              {showAdvancedParams && (
                <div className="pt-2 border-t border-amber-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      💻 Densidade da Matriz
                    </label>
                    <select
                      value={matrixPoints}
                      onChange={(e) => setMatrixPoints(e.target.value)}
                      className="w-full px-2.5 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Densidade / Pontos...</option>
                      <option value="Leve (Até 8.000 pontos)">Leve (Até 8.000 pts)</option>
                      <option value="Média (8.000 a 20.000 pontos)">Média (8k a 20k pts)</option>
                      <option value="Muito densa / Pesada (+25.000 pts)">Muito pesada (+25k pts)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      💻 Histórico da Matriz
                    </label>
                    <select
                      value={matrixHistory}
                      onChange={(e) => setMatrixHistory(e.target.value)}
                      className="w-full px-2.5 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Histórico...</option>
                      <option value="Já bordou com sucesso antes">Já bordou bem antes</option>
                      <option value="Matriz nova / Baixada na internet">Matriz nova / Baixada</option>
                      <option value="Programação própria recente">Programação recente</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      ⚙️ Velocidade Atual
                    </label>
                    <select
                      value={speedSetting}
                      onChange={(e) => setSpeedSetting(e.target.value)}
                      className="w-full px-2.5 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Velocidade (PPM)...</option>
                      <option value="Baixa (400 - 500 PPM)">Baixa (400 - 500 PPM)</option>
                      <option value="Média (550 - 650 PPM)">Média (550 - 650 PPM)</option>
                      <option value="Alta (700 - 850 PPM)">Alta (700 - 850 PPM)</option>
                      <option value="Industrial (900+ PPM)">Industrial (900+ PPM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      ⚙️ Tensão Regulada
                    </label>
                    <select
                      value={tensionSetting}
                      onChange={(e) => setTensionSetting(e.target.value)}
                      className="w-full px-2.5 py-2 bg-white border border-slate-300 rounded-xl text-slate-900 text-xs focus:border-amber-500 focus:outline-none"
                    >
                      <option value="">Tensão superior...</option>
                      <option value="Padrão de fábrica (Auto / ~3.4)">Padrão de fábrica (~3.4)</option>
                      <option value="Muito frouxa / Solta">Muito frouxa / Solta</option>
                      <option value="Muito apertada / Alta">Muito apertada / Alta</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Descrição do Defeito / Sintoma <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                required
                placeholder="Ex: A agulha torta, linha quebrando a cada 200 pontos, ou linha de bobina brotando em cima..."
                value={customProblem}
                onChange={(e) => setCustomProblem(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="text-[11px] text-slate-500 font-medium">
                💡 Dica: você pode pesquisar por termos como &quot;agulha torta&quot;, &quot;ninho embaixo&quot; ou &quot;tecido repuxando&quot;.
              </div>

              <div className="flex items-center space-x-2">
                {diagnosticResult && (
                  <button
                    type="button"
                    onClick={() => {
                      setDiagnosticResult(null);
                      setCustomProblem("");
                    }}
                    className="px-3.5 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-bold transition cursor-pointer"
                  >
                    Limpar
                  </button>
                )}

                <button
                  type="submit"
                  disabled={loadingDiag || !customProblem.trim()}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm flex items-center space-x-2 shadow transition cursor-pointer border border-amber-500 disabled:opacity-50"
                >
                  {loadingDiag ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Analisando Defeito...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-slate-950" />
                      <span>Gerar Diagnóstico Técnico</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Diagnostic Result Card */}
          {diagnosticResult && (
            <div className="mt-5 p-5 sm:p-6 rounded-3xl bg-amber-50/70 border-2 border-amber-400 space-y-5 animate-fade-in text-slate-900 shadow-sm">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-200 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300">
                      Severidade: {diagnosticResult.severity}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 border border-slate-200">
                      {diagnosticResult.category}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    {diagnosticResult.title}
                  </h4>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-auto">
                  {onToggleSaveDiagnostic && (
                    <button
                      onClick={handleToggleFavorite}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer shadow-sm border ${
                        isCurrentSaved
                          ? "bg-amber-400 text-slate-950 border-amber-500 font-extrabold"
                          : "bg-white hover:bg-amber-50 text-slate-800 border-amber-300"
                      }`}
                      title={isCurrentSaved ? "Remover dos favoritos" : "Salvar nos favoritos da oficina"}
                    >
                      <Star className={`w-3.5 h-3.5 ${isCurrentSaved ? "fill-slate-950 text-slate-950" : "text-amber-600"}`} />
                      <span>{isCurrentSaved ? "Salvo nos Favoritos" : "Favoritar Diagnóstico"}</span>
                    </button>
                  )}

                  <button
                    onClick={handleCopyDiagnostic}
                    className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-amber-300 text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer shadow-sm"
                  >
                    {copiedDiag ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-600" />
                        <span>Copiar Diagnóstico</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Critical Alerts Banner (When Incompatibility detected) */}
              {diagnosticResult.criticalAlerts && diagnosticResult.criticalAlerts.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border-2 border-rose-400 space-y-1.5 animate-fade-in">
                  <div className="flex items-center space-x-2 text-rose-900 font-extrabold text-xs sm:text-sm">
                    <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Incompatibilidade Detectada nos Parâmetros:</span>
                  </div>
                  <ul className="space-y-1 text-xs text-rose-900 font-medium">
                    {diagnosticResult.criticalAlerts.map((alert, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span>•</span>
                        <span>{alert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Summary Description */}
              <div className="p-3.5 rounded-2xl bg-white border border-amber-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {diagnosticResult.summary}
              </div>

              {/* Probable Causes */}
              <div className="space-y-2">
                <strong className="text-xs font-extrabold uppercase text-amber-900 tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Causas Prováveis Identificadas:
                </strong>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                  {diagnosticResult.probableCauses.map((c, idx) => (
                    <li key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-start space-x-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step Solution */}
              <div className="space-y-2">
                <strong className="text-xs font-black uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Passo a Passo de Solução Recomendada:
                </strong>
                <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                  {diagnosticResult.stepByStepSolution.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 leading-relaxed shadow-sm flex items-start space-x-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Parameters for Machine & Fabric */}
              {diagnosticResult.recommendedSettings && (
                <div className="p-4 rounded-2xl bg-white border border-amber-300 space-y-2">
                  <strong className="text-xs font-extrabold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-amber-600" />
                    Parâmetros Ideais Recomendados:
                  </strong>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {diagnosticResult.recommendedSettings.needle && (
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 font-bold block uppercase">Agulha</span>
                        <span className="font-bold text-slate-800">{diagnosticResult.recommendedSettings.needle}</span>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.speed && (
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 font-bold block uppercase">Velocidade</span>
                        <span className="font-bold text-slate-800">{diagnosticResult.recommendedSettings.speed}</span>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.tension && (
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 font-bold block uppercase">Tensão</span>
                        <span className="font-bold text-slate-800">{diagnosticResult.recommendedSettings.tension}</span>
                      </div>
                    )}
                    {diagnosticResult.recommendedSettings.stabilizer && (
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 font-bold block uppercase">Entretela</span>
                        <span className="font-bold text-slate-800">{diagnosticResult.recommendedSettings.stabilizer}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Artrelados Tip */}
              {diagnosticResult.artreladosTip && (
                <div className="p-3.5 rounded-2xl bg-amber-100/80 border border-amber-300 text-xs text-amber-950 font-bold">
                  {diagnosticResult.artreladosTip}
                </div>
              )}

              {/* 🛡️ RECOMENDAÇÃO PREVENTIVA OBRIGATÓRIA & RESPONSABILIDADE TÉCNICA */}
              <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 space-y-2 border-2 border-amber-400 shadow-md">
                <div className="flex items-center space-x-2 text-amber-400 font-black text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>🛡️ RECOMENDAÇÃO PREVENTIVA ARTRELADOS & RESPONSABILIDADE TÉCNICA</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Este diagnóstico fornece um direcionamento operacional baseado em manuais técnicos de fabricantes (Brother, Janome, Tajima, Barudan) e nas normas de tolerância de agulhas e laçadeiras (Schmetz, Groz-Beckert, Hirose).
                </p>
                <p className="text-xs text-amber-200 font-bold leading-relaxed bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                  ⚠️ Se a sua máquina ainda estiver no período de garantia, se a intervenção exigir abertura de tampas mecânicas ou desmontagem da lançadeira/bloco de facas, ou se você não tiver treinamento para tal, <strong className="text-amber-300 underline">não deixe de procurar um técnico especializado ou a assistência técnica autorizada da sua marca</strong>.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-slate-400">
                  <span>Fontes consultadas: Manuais Oficiais & Tolerâncias Técnicas</span>
                  <button
                    onClick={() => setTroubleSubTab("manuais")}
                    className="text-amber-400 hover:text-amber-300 font-bold underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ver Manuais e Fontes Oficiais</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Offline Native Guides Filter & List */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#101726] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar problema ou defeito..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-500"
            />
          </div>
        </div>

        {/* Guides Accordion List */}
        <div className="space-y-3 pt-2">
          {filteredGuides.map((guide) => {
            const isExpanded = expandedGuideId === guide.id;
            return (
              <div
                key={guide.id}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isExpanded
                    ? "bg-white border-amber-400 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedGuideId(isExpanded ? null : guide.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 border border-amber-200">
                      <AlertTriangle className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">
                        {guide.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900">
                        {guide.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-500">
                    <span className="hidden sm:inline text-xs font-bold">
                      {isExpanded ? "Ocultar detalhes" : "Ver solução"}
                    </span>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Content Body */}
                {isExpanded && (
                  <div className="p-5 border-t border-slate-200 space-y-5 bg-slate-50/60 animate-fade-in">
                    {/* Symptoms */}
                    <div>
                      <strong className="text-xs font-extrabold uppercase text-slate-500 tracking-wider block mb-1">
                        Sintomas Observados:
                      </strong>
                      <div className="flex flex-wrap gap-2">
                        {guide.symptoms.map((s, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-md bg-white text-slate-700 text-xs border border-slate-200 font-medium">
                            • {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Probable Causes */}
                    <div>
                      <strong className="text-xs font-extrabold uppercase text-amber-800 tracking-wider block mb-1">
                        Causas Prováveis:
                      </strong>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1 font-medium">
                        {guide.probableCauses.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Step by step Solution */}
                    <div>
                      <strong className="text-xs font-extrabold uppercase text-emerald-800 tracking-wider block mb-2">
                        Passos para Correção Imediata:
                      </strong>
                      <div className="space-y-2">
                        {guide.stepByStepSolution.map((step, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium flex items-start space-x-3 shadow-sm">
                            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preventive Advice */}
                    {guide.preventiveAdvice && (
                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-slate-800 font-medium">
                        <strong className="font-extrabold text-amber-900 block mb-0.5">Dica de Prevenção para o Ateliê:</strong>
                        {guide.preventiveAdvice}
                      </div>
                    )}

                    {/* Disclaimer & Authorized Tech Reminder */}
                    <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800 flex items-center gap-1">
                          <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
                          <span>Recomendação de Oficina Artrelados:</span>
                        </span>
                        <button
                          onClick={() => setTroubleSubTab("manuais")}
                          className="text-amber-600 hover:text-amber-800 font-bold underline cursor-pointer text-[10px]"
                        >
                          Consultar Manuais Oficiais →
                        </button>
                      </div>
                      <p className="leading-relaxed">
                        Se este procedimento exigir abertura mecânica interna da máquina ou se a falha persistir após os testes básicos, <strong>não deixe de procurar um técnico especializado ou a assistência técnica autorizada da sua marca</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredGuides.length === 0 && (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <Wrench className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="font-medium">Nenhum guia encontrado para os termos pesquisados.</p>
              <button
                onClick={() => {
                  setSelectedCategory("Todas");
                  setSearchQuery("");
                }}
                className="text-xs text-amber-700 underline font-extrabold cursor-pointer"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}
        </div>
      </div>
        </>
      )}
    </div>
  );
};



