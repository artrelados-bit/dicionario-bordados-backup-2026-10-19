import React, { useState } from "react";
import { Sparkles, Loader2, PlusCircle, CheckCircle2, BookOpen, Layers, Zap, Gauge, Tag, FileText } from "lucide-react";
import { Verbete, VerbeteCategory } from "../types";

interface AiTermExpanderViewProps {
  onAddVerbete: (verbete: Verbete) => void;
  existingVerbetes: Verbete[];
  initialTerm?: string;
  onClearInitialTerm?: () => void;
}

export const AiTermExpanderView: React.FC<AiTermExpanderViewProps> = ({
  onAddVerbete,
  existingVerbetes,
  initialTerm = "",
  onClearInitialTerm,
}) => {
  const [termName, setTermName] = useState(initialTerm);
  const [category, setCategory] = useState<VerbeteCategory>("Pontos Básicos & Decorativos");
  const [existingDef, setExistingDef] = useState("");
  const [contextPrompt, setContextPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedVerbete, setGeneratedVerbete] = useState<Verbete | null>(null);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Sync initialTerm if passed from search bar
  React.useEffect(() => {
    if (initialTerm && initialTerm !== termName) {
      setTermName(initialTerm);
    }
  }, [initialTerm]);

  const categories: VerbeteCategory[] = [
    "Pontos Básicos & Decorativos",
    "Estabilizadores & Entretelas",
    "Agulhas & Fios",
    "Softwares & Formatos",
    "Solução de Problemas",
    "Técnicas de Bastidor",
    "Tensão & Calibração",
    "Tipos de Tecidos",
    "Terminologia Geral",
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!termName.trim()) return;

    setLoading(true);
    setError(null);
    setGeneratedVerbete(null);
    setAddedSuccess(false);

    try {
      const res = await fetch("/api/gemini/expand-term", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          termName,
          category,
          existingDefinition: existingDef,
          contextPrompt,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Falha ao gerar o verbete.");
      }

      const raw = data.verbete;
      const cleanTerm = raw.term || termName;
      const firstLetter = cleanTerm.trim().charAt(0).toUpperCase();
      const newVerbete: Verbete = {
        id: "ai-" + Date.now(),
        code: raw.code || `${firstLetter}-${Math.floor(100 + Math.random() * 900)}`,
        term: cleanTerm,
        level: raw.level || "Intermediário 🟡",
        grammarClass: raw.grammarClass || "Substantivo masculino.",
        origin: raw.origin || "Termo técnico consolidado no bordado eletrônico.",
        pronunciation: raw.pronunciation,
        category: raw.category || category,
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
        tags: raw.tags || ["ia", "artrelados"],
        isAiGenerated: true,
        updatedAt: new Date().toISOString().split("T")[0],
      };

      setGeneratedVerbete(newVerbete);
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro ao conectar com o serviço de IA.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToAcervo = () => {
    if (!generatedVerbete) return;
    onAddVerbete(generatedVerbete);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 3000);
  };

  const aiTermsCount = existingVerbetes.filter((v) => v.isAiGenerated).length;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Inteligência Artificial Artrelados</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          Gerador & Expansor do Acervo de Verbetes
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl font-medium">
          Sua biblioteca cresce continuamente. Digite qualquer ponto, conceito de máquina, tipo de entretela ou marca e a IA comporá um verbete técnico completo pronto para enriquecer seu dicionário.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Column */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
          <h3 className="text-lg font-black text-slate-900 flex items-center space-x-2">
            <PlusCircle className="w-5 h-5 text-amber-600" />
            <span>Criar / Expandir Verbete</span>
          </h3>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nome do Termo ou Ponto <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Ponto Ajour, Densidade para Couro, Cutwork..."
                value={termName}
                onChange={(e) => setTermName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:bg-white focus:border-slate-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Categoria Técnica
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as VerbeteCategory)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-xs sm:text-sm focus:bg-white focus:border-slate-500 focus:outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Anotação / Definição Inicial (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: É um ponto usado em roupas de batizado para fazer vazados delicados..."
                value={existingDef}
                onChange={(e) => setExistingDef(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:bg-white focus:border-slate-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Instruções Específicas para a IA (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Incluir regulagem para máquina Brother e tipo de entretela indicada para fraldas de bebê..."
                value={contextPrompt}
                onChange={(e) => setContextPrompt(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:bg-white focus:border-slate-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !termName.trim()}
              className="w-full py-3 rounded-xl bg-[#101726] hover:bg-slate-800 text-white font-extrabold text-sm flex items-center justify-center space-x-2 shadow transition cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Elaborando Verbete com IA...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Gerar Verbete Completo</span>
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
              {error}
            </div>
          )}

          <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 font-medium">
            Termos criados via IA neste acervo: <strong className="text-slate-900 font-bold">{aiTermsCount}</strong>
          </div>
        </div>

        {/* Output Preview Column */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-sky-600" />
                <h3 className="text-lg font-black text-slate-900">
                  Pré-visualização do Verbete
                </h3>
              </div>

              {generatedVerbete && (
                <button
                  onClick={handleSaveToAcervo}
                  disabled={addedSuccess}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center space-x-1.5 shadow transition cursor-pointer"
                >
                  {addedSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Salvo no Acervo!</span>
                    </>
                  ) : (
                    <>
                      <PlusCircle className="w-4 h-4" />
                      <span>Salvar no Acervo</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Content Display */}
            {generatedVerbete ? (
              <div className="space-y-4 animate-fade-in text-slate-900">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    {generatedVerbete.category}
                  </span>
                  {generatedVerbete.pronunciation && (
                    <span className="text-xs font-mono text-slate-500">[{generatedVerbete.pronunciation}]</span>
                  )}
                </div>

                <h2 className="text-2xl font-black text-slate-900">
                  {generatedVerbete.term}
                </h2>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-slate-900 text-xs sm:text-sm font-medium">
                  <strong className="text-amber-800">Resumo:</strong> {generatedVerbete.summary}
                </div>

                <div>
                  <h4 className="text-xs font-extrabold uppercase text-slate-500 tracking-wider mb-1">Definição Técnica:</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">{generatedVerbete.definition}</p>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold uppercase text-slate-500 tracking-wider mb-1">Mapeamento em Máquina:</h4>
                  <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
                    {generatedVerbete.technicalDetails}
                  </p>
                </div>

                {generatedVerbete.recommendedSettings && (
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-900 tracking-wider mb-2">Parâmetros Recomendados:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {generatedVerbete.recommendedSettings.speedPPM && (
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-medium">
                          <span className="text-[10px] text-slate-500 font-bold block">Velocidade:</span>
                          {generatedVerbete.recommendedSettings.speedPPM}
                        </div>
                      )}
                      {generatedVerbete.recommendedSettings.needleType && (
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-medium">
                          <span className="text-[10px] text-slate-500 font-bold block">Agulha:</span>
                          {generatedVerbete.recommendedSettings.needleType}
                        </div>
                      )}
                      {generatedVerbete.recommendedSettings.stabilizer && (
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-medium col-span-2">
                          <span className="text-[10px] text-slate-500 font-bold block">Estabilizador:</span>
                          {generatedVerbete.recommendedSettings.stabilizer}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-16 text-slate-400 space-y-3">
                <Sparkles className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-sm font-medium">
                  Preencha o formulário ao lado e clique em <strong>"Gerar Verbete Completo"</strong> para a IA gerar o conteúdo técnico.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
