import React, { useState } from "react";
import { Wrench, AlertTriangle, CheckCircle2, Sparkles, Search, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import { TroubleshootingGuide } from "../types";

interface TroubleshootingViewProps {
  guides: TroubleshootingGuide[];
}

export const TroubleshootingView: React.FC<TroubleshootingViewProps> = ({ guides }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(guides[0]?.id || null);

  // Custom AI Diagnostic state
  const [isAiDiagOpen, setIsAiDiagOpen] = useState<boolean>(false);
  const [customProblem, setCustomProblem] = useState<string>("");
  const [machineModel, setMachineModel] = useState<string>("");
  const [fabricType, setFabricType] = useState<string>("");
  const [loadingAi, setLoadingAi] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [customGuide, setCustomGuide] = useState<any | null>(null);

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

  const handleRunAiTroubleshoot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customProblem.trim()) return;

    setLoadingAi(true);
    setAiError(null);
    try {
      const res = await fetch("/api/gemini/troubleshoot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problemDescription: customProblem,
          machineModel,
          fabricType,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Erro ao consultar a IA.");
      }

      setCustomGuide(data.guide);
    } catch (err: any) {
      setAiError(err.message || "Não foi possível gerar o diagnóstico no momento.");
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
              <Wrench className="w-3.5 h-3.5 text-amber-700" />
              <span>Guias de Resolução Técnica Offline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Diagnóstico de Problemas em Bordado Eletrônico
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl font-medium">
              Soluções passo a passo para falhas de tensão, quebra de linha, desalinhamento e estragos em tecidos. Funciona mesmo sem internet com os guias nativos.
            </p>
          </div>

          <button
            onClick={() => setIsAiDiagOpen(!isAiDiagOpen)}
            className="px-4 py-2.5 rounded-xl bg-[#101726] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow transition shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{isAiDiagOpen ? "Fechar Diagnóstico IA" : "Diagnóstico Personalizado com IA"}</span>
          </button>
        </div>
      </div>

      {/* AI Custom Troubleshooting Panel */}
      {isAiDiagOpen && (
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4 animate-fade-in">
          <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-lg">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3>Diagnóstico Personalizado da Oficina Artrelados</h3>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm">
            Descreva detalhadamente o problema que você está enfrentando na sua máquina de bordar (Brother, Janome, Barudan, Tajima, Singer, etc.) para que a IA analise o motivo exato e prescreva a solução.
          </p>

          <form onSubmit={handleRunAiTroubleshoot} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Modelo da Máquina
                </label>
                <input
                  type="text"
                  placeholder="Ex: Brother PE810L, Janome MC550E, Tajima 12 cabeças..."
                  value={machineModel}
                  onChange={(e) => setMachineModel(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:border-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tipo de Tecido / Material
                </label>
                <input
                  type="text"
                  placeholder="Ex: Malha 100% Algodão, Toalha felpuda, Piquê, Couro sintético..."
                  value={fabricType}
                  onChange={(e) => setFabricType(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:border-slate-500 focus:outline-none"
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
                placeholder="Ex: A linha superior fica dando laço por baixo do tecido, e quando acelera a máquina acima de 700 PPM faz um barulho forte na laçadeira..."
                value={customProblem}
                onChange={(e) => setCustomProblem(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:border-slate-500 focus:outline-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loadingAi || !customProblem.trim()}
                className="px-5 py-2.5 rounded-xl bg-[#101726] hover:bg-slate-800 disabled:opacity-50 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 shadow transition cursor-pointer"
              >
                {loadingAi ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analisando Defeito com IA...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Gerar Diagnóstico Técnico</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {aiError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
              {aiError}
            </div>
          )}

          {/* AI Result Card */}
          {customGuide && (
            <div className="mt-4 p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-4 animate-fade-in text-slate-900">
              <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-base border-b border-amber-200 pb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>{customGuide.title}</span>
              </div>

              <div>
                <strong className="text-xs uppercase text-slate-600 tracking-wider block mb-1">
                  Causas Prováveis:
                </strong>
                <ul className="list-disc list-inside text-xs text-slate-800 space-y-1 font-medium">
                  {customGuide.probableCauses?.map((c: string, idx: number) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-xs uppercase text-slate-900 font-extrabold tracking-wider block mb-2">
                  Passo a Passo de Solução Recomendada:
                </strong>
                <ol className="space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                  {customGuide.stepByStepSolution?.map((step: string, idx: number) => (
                    <li key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 leading-relaxed shadow-sm">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {customGuide.preventiveAdvice && (
                <div className="p-3 rounded-xl bg-white border border-amber-300 text-xs text-slate-800 font-medium">
                  <strong className="text-amber-800">Conselho Preventivo:</strong> {customGuide.preventiveAdvice}
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
              placeholder="Buscar problema..."
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
                    ? "bg-white border-slate-400 shadow-md"
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
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-slate-800">
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
              <p className="font-medium">Nenhum guia nativo encontrado para sua busca.</p>
              <button
                onClick={() => setIsAiDiagOpen(true)}
                className="text-xs text-amber-700 underline font-extrabold cursor-pointer"
              >
                Usar o Gerador de Diagnóstico IA para este problema
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

