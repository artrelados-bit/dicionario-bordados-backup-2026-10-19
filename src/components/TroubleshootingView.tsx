import React, { useState } from "react";
import { Wrench, AlertTriangle, CheckCircle2, Sparkles, Search, Loader2, ChevronDown, ChevronUp, Copy, Check, RefreshCw, Gauge, ShieldAlert, Zap, Star } from "lucide-react";
import { TroubleshootingGuide, SavedDiagnostic } from "../types";
import { analyzeEmbroideryProblem, DiagnosticResult } from "../utils/diagnosticEngine";

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
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(guides[0]?.id || null);

  // Custom Diagnostic state
  const [isAiDiagOpen, setIsAiDiagOpen] = useState<boolean>(true);
  const [customProblem, setCustomProblem] = useState<string>("");
  const [machineModel, setMachineModel] = useState<string>("");
  const [fabricType, setFabricType] = useState<string>("");
  const [loadingDiag, setLoadingDiag] = useState<boolean>(false);
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResult | null>(null);
  const [currentDiagnosticId, setCurrentDiagnosticId] = useState<string>("");
  const [copiedDiag, setCopiedDiag] = useState<boolean>(false);

  const categories = ["Todas", "Linhas & Agulhas", "Tensão & Caixilho", "Bastidor & Programação", "Mecânica & Ajustes"];

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
        const result = analyzeEmbroideryProblem(customProblem, machineModel, fabricType);
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
    const text = `📋 DIAGNÓSTICO DA OFICINA ARTRELADOS\n${diagnosticResult.title}\n\nResumo:\n${diagnosticResult.summary}\n\nCausas Prováveis:\n${diagnosticResult.probableCauses.map((c) => `• ${c}`).join("\n")}\n\nSolução Passo a Passo:\n${diagnosticResult.stepByStepSolution.join("\n")}\n\n${diagnosticResult.artreladosTip}`;
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
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
              <Wrench className="w-3.5 h-3.5 text-amber-700" />
              <span>Oficina Técnica Artrelados</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Diagnóstico e Solução de Problemas
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl font-medium">
              Prescrição técnica imediata para agulhas tortas, falhas de tensão, quebra de linha, desalinhamento e estragos em tecidos. Funciona de forma 100% autônoma e instantânea.
            </p>
          </div>

          <button
            onClick={() => setIsAiDiagOpen(!isAiDiagOpen)}
            className="px-4 py-2.5 rounded-xl bg-[#101726] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow transition shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{isAiDiagOpen ? "Ocultar Diagnóstico Personalizado" : "Novo Diagnóstico Personalizado"}</span>
          </button>
        </div>
      </div>

      {/* Custom Diagnostic Assistant Form */}
      {isAiDiagOpen && (
        <div className="p-6 rounded-3xl bg-white border border-amber-300 shadow-md space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-lg">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3>Diagnóstico Personalizado da Oficina Artrelados</h3>
            </div>
            <span className="text-[11px] font-black px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
              ✓ Atendimento Imediato
            </span>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm">
            Descreva o que está acontecendo na sua máquina de bordar (Brother, Janome, Barudan, Tajima, Singer, etc.) para receber a análise exata das causas e o passo a passo de correção.
          </p>

          <form onSubmit={handleRunDiagnostic} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Modelo da Máquina
                </label>
                <input
                  type="text"
                  placeholder="Ex: Janome MC500E, Brother PE810L, Tajima..."
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
                        <strong className="font-extrabold text-amber-900 block mb-0.5">Dica de Prevenção da Oficina:</strong>
                        {guide.preventiveAdvice}
                      </div>
                    )}
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
    </div>
  );
};


