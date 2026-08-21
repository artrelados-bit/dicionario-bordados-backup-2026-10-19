import React, { useState } from "react";
import { X, Star, Sparkles, Gauge, Zap, AlertTriangle, CheckCircle2, Copy, Check, Layers, BookOpen, Edit3, Trash2, BookMarked } from "lucide-react";
import { Verbete } from "../types";
import { StitchDiagram } from "./StitchDiagram";

interface VerbeteDetailModalProps {
  verbete: Verbete | null;
  onClose: () => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectRelatedTerm?: (termName: string) => void;
  onAskAiToElaborate?: (verbete: Verbete) => void;
  isAdmin?: boolean;
  onEdit?: (verbete: Verbete) => void;
  onDelete?: (id: string) => void;
}

// Helper Component to render structured Markdown / Rich Text sections in verbetes
const FormattedMarkdownContent: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  // Split into blocks by empty lines
  const blocks = text.split(/\n\s*\n/);

  return (
    <div className="space-y-3">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Header Check (### or ## or #)
        if (trimmed.startsWith("#")) {
          const title = trimmed.replace(/^#+\s*/, "");
          return (
            <div key={idx} className="pt-3 pb-1 border-b border-amber-200/90 mt-4">
              <h4 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2 tracking-tight">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 shadow-xs" />
                <span>{title}</span>
              </h4>
            </div>
          );
        }

        // Check if block consists of lines starting with bullets or list items
        const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);

        const isBulletList = lines.length > 0 && lines.every((l) =>
          l.startsWith("•") || l.startsWith("-") || l.startsWith("*") || l.startsWith("❌") || l.startsWith("✔")
        );

        if (isBulletList) {
          return (
            <ul key={idx} className="space-y-1.5 my-2">
              {lines.map((line, lIdx) => {
                const itemText = line.replace(/^[•\-\*✔❌]\s*/, "").trim();
                const isError = line.startsWith("❌");
                const isCheck = line.startsWith("✔");
                return (
                  <li
                    key={lIdx}
                    className={`p-2.5 rounded-xl border text-xs sm:text-sm font-medium flex items-start gap-2.5 leading-relaxed ${
                      isError
                        ? "bg-rose-50/80 border-rose-200 text-rose-950"
                        : isCheck
                        ? "bg-emerald-50/80 border-emerald-200 text-emerald-950"
                        : "bg-slate-50 border-slate-200/90 text-slate-800"
                    }`}
                  >
                    {isError ? (
                      <span className="font-bold text-rose-600 shrink-0">❌</span>
                    ) : isCheck ? (
                      <span className="font-bold text-emerald-600 shrink-0">✔</span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    )}
                    <span>{itemText}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Check for numbered list items (1. 2. 3.)
        const isNumberedList = lines.length > 0 && lines.every((l) => /^\d+\.\s/.test(l));

        if (isNumberedList) {
          return (
            <div key={idx} className="space-y-2 my-2">
              {lines.map((line, lIdx) => {
                const match = line.match(/^(\d+)\.\s*(.*)/);
                if (!match) return null;
                const num = match[1];
                const content = match[2];
                return (
                  <div
                    key={lIdx}
                    className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/90 text-xs sm:text-sm text-slate-900 font-medium flex items-start gap-3 shadow-2xs"
                  >
                    <span className="px-2 py-0.5 rounded-lg bg-amber-500 text-slate-950 font-black text-xs shrink-0">
                      {num}
                    </span>
                    <span className="leading-relaxed">{content}</span>
                  </div>
                );
              })}
            </div>
          );
        }

        // Special Callout blocks starting with emojis (💡, 🔬, 🧵, 📖)
        if (
          trimmed.startsWith("💡") ||
          trimmed.startsWith("🔬") ||
          trimmed.startsWith("🧵") ||
          trimmed.startsWith("📖")
        ) {
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-amber-50/90 border-2 border-amber-300/90 text-amber-950 text-xs sm:text-sm font-medium leading-relaxed my-3 shadow-xs space-y-1"
            >
              <div className="whitespace-pre-line">{trimmed}</div>
            </div>
          );
        }

        // Regular text paragraph
        return (
          <p key={idx} className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal whitespace-pre-line">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
};

export const VerbeteDetailModal: React.FC<VerbeteDetailModalProps> = ({
  verbete,
  onClose,
  onToggleFavorite,
  onSelectRelatedTerm,
  onAskAiToElaborate,
  isAdmin = false,
  onEdit,
  onDelete,
}) => {
  const [copied, setCopied] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  if (!verbete) return null;

  const handleCopyText = () => {
    const textToCopy = `${verbete.term} (${verbete.category}) - Dicionário de Bordados Artrelados\n\nResumo: ${verbete.summary}\n\nDefinição Técnico-Didática:\n${verbete.definition}\n\nDetalhes de Execução na Máquina:\n${verbete.technicalDetails}\n\nAplicações: ${verbete.applications.join(", ")}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-900 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact Modal Header (Fixed Bar) */}
        <div className="sticky top-0 z-10 bg-white/95 border-b border-slate-200 px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between gap-3 backdrop-blur-sm shadow-xs">
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            {verbete.code && (
              <span className="px-3 py-1 rounded-lg text-xs font-black bg-[#101726] text-amber-300 border border-slate-800 shadow-xs font-mono">
                {verbete.code}
              </span>
            )}
            {verbete.level && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                Nível: {verbete.level}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
              {verbete.category}
            </span>
            {verbete.isAiGenerated && (
              <span className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Enriquecido por IA</span>
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {isAdmin && (
              <div className="flex items-center space-x-1.5 mr-1 pr-2 border-r border-slate-200">
                <button
                  onClick={() => {
                    if (onEdit) onEdit(verbete);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300 transition cursor-pointer text-xs font-bold flex items-center space-x-1"
                  title="Editar verbete"
                >
                  <Edit3 className="w-4 h-4 text-amber-800" />
                  <span className="hidden sm:inline">Editar</span>
                </button>
                {confirmDelete ? (
                  <button
                    onClick={() => {
                      if (onDelete) onDelete(verbete.id);
                      onClose();
                    }}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white transition cursor-pointer text-xs font-extrabold flex items-center space-x-1 animate-pulse"
                    title="Confirmar exclusão definitiva"
                  >
                    <Trash2 className="w-4 h-4 text-white" />
                    <span>Confirmar Exclusão?</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setConfirmDelete(true);
                      setTimeout(() => setConfirmDelete(false), 4000);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-rose-100 text-rose-900 hover:bg-rose-200 border border-rose-300 transition cursor-pointer text-xs font-bold flex items-center space-x-1"
                    title="Excluir verbete"
                  >
                    <Trash2 className="w-4 h-4 text-rose-700" />
                    <span className="hidden sm:inline">Excluir</span>
                  </button>
                )}
              </div>
            )}

            <button
              onClick={(e) => onToggleFavorite(verbete.id, e)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-amber-500 transition cursor-pointer"
              title="Favoritar verbete"
            >
              <Star className={`w-4 h-4 sm:w-5 sm:h-5 ${verbete.isFavorite ? "fill-amber-400 text-amber-500" : ""}`} />
            </button>
            <button
              onClick={handleCopyText}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
              title="Copiar texto do verbete"
            >
              {copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto custom-scrollbar bg-slate-50/50">
          {/* Main Title & Classification Header (Scrolls with page) */}
          <div className="space-y-2.5 pb-1 border-b border-slate-200/80">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              {verbete.term}
            </h2>
            
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              {verbete.grammarClass && (
                <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 shadow-2xs">
                  {verbete.grammarClass}
                </span>
              )}
              {verbete.pronunciation && (
                <span className="text-xs text-slate-600 font-mono bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  Pronúncia: [{verbete.pronunciation}]
                </span>
              )}
            </div>

            {verbete.origin && (
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5 leading-relaxed mt-2 shadow-2xs">
                <span className="text-base shrink-0">🌎</span>
                <div>
                  <strong className="font-bold text-blue-950 block sm:inline mr-1.5">Origem:</strong>
                  <span>{verbete.origin}</span>
                </div>
              </div>
            )}
          </div>
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-slate-900 text-sm leading-relaxed">
            <strong className="text-amber-900 font-extrabold block mb-1 uppercase text-xs tracking-wider">
              Resumo do Verbete:
            </strong>
            {verbete.summary}
          </div>

          {/* Stitch Diagram if exists */}
          {verbete.stitchDiagramType && (
            <div>
              <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                Representação Gráfica do Ponto
              </h4>
              <StitchDiagram type={verbete.stitchDiagramType} />
            </div>
          )}

          {/* Technical Definition */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <span>Conceito & Definição Técnica Completa</span>
            </h3>
            <FormattedMarkdownContent text={verbete.definition} />
          </div>

          {/* Characteristics (Características Principais) */}
          {verbete.characteristics && verbete.characteristics.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>Características Principais</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                {verbete.characteristics.map((item, idx) => (
                  <li key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2">
                    <span className="font-bold text-sky-600 shrink-0">•</span>
                    <span>{item.replace(/^[•\s-]+/, "")}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Construction Elements if present */}
          {verbete.construction && verbete.construction.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>Construção & Partes Principais</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {verbete.construction.map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* How It Works Steps if present */}
          {verbete.howItWorks && verbete.howItWorks.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Como Funciona (Ciclo Operacional)</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                {verbete.howItWorks.map((step, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2">
                    <span className="font-bold text-amber-700 shrink-0">{idx + 1}.</span>
                    <span>{step.replace(/^\d+\.\s*/, "")}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Types if present */}
          {verbete.mainTypes && verbete.mainTypes.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Principais Tipos e Variações</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {verbete.mainTypes.map((typeItem, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span>{typeItem}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Numbering System if present */}
          {verbete.numberingSystem && verbete.numberingSystem.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                <Gauge className="w-4 h-4 text-slate-700" />
                <span>Tamanhos & Numerações Mais Utilizados</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {verbete.numberingSystem.map((num, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                    {num}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Execution Details in Machine */}
          {verbete.technicalDetails && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
              <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>Relação com o Bordado Eletrônico & Parâmetros</span>
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {verbete.technicalDetails}
              </p>
            </div>
          )}

          {/* Comparison Table if present */}
          {verbete.comparisonTable && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                <span>📊 Comparação Técnica</span>
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100 text-slate-900 font-extrabold">
                      {verbete.comparisonTable.headers.map((h, idx) => (
                        <th key={idx} className="p-3 border-r border-slate-200 last:border-r-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {verbete.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50/80">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 border-r border-slate-100 last:border-r-0 font-medium text-slate-800">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Advantages (✔ Checklist), Limitations & Common Errors (❌ List) Grid */}
          {(verbete.advantages || verbete.limitations || verbete.commonErrors) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {verbete.advantages && verbete.advantages.length > 0 && (
                <div className={`p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2 ${
                  (!verbete.limitations || verbete.limitations.length === 0) ? "md:col-span-2" : ""
                }`}>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-950 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Vantagens</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-emerald-950 font-medium">
                    {verbete.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="shrink-0">{adv.startsWith("✔") ? "" : "✔ "}</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {verbete.limitations && verbete.limitations.length > 0 && (
                <div className={`p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2 ${
                  (!verbete.advantages || verbete.advantages.length === 0) ? "md:col-span-2" : ""
                }`}>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-950 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Limitações</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-amber-950 font-medium">
                    {verbete.limitations.map((lim, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="shrink-0">•</span>
                        <span>{lim.replace(/^[•\s-]+/, "")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {verbete.commonErrors && verbete.commonErrors.length > 0 && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2 md:col-span-2">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-rose-950 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Erros Comuns a Evitar</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-rose-950 font-medium">
                    {verbete.commonErrors.map((errItem, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="shrink-0">{errItem.startsWith("❌") ? "" : "❌ "}</span>
                        <span>{errItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Special Cards: Dica Artrelados, Curiosidade Técnica, Você Sabia */}
          {verbete.dicaArtrelados && (
            <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-slate-900 space-y-1.5 shadow-sm">
              <div className="flex items-center space-x-2 text-amber-900 font-black text-xs uppercase tracking-wider">
                <span className="text-lg">🧵</span>
                <span>Dica Artrelados (Especial de Oficina)</span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-800">
                {verbete.dicaArtrelados}
              </p>
            </div>
          )}

          {verbete.curiosidadeTecnica && (
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950 space-y-1.5">
              <div className="flex items-center space-x-2 text-sky-900 font-black text-xs uppercase tracking-wider">
                <span className="text-lg">🔬</span>
                <span>Curiosidade Técnica</span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-sky-950">
                {verbete.curiosidadeTecnica}
              </p>
            </div>
          )}

          {verbete.voceSabia && (
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-slate-900 space-y-1">
              <div className="flex items-center space-x-2 text-amber-900 font-black text-xs uppercase tracking-wider">
                <span className="text-lg">💡</span>
                <span>Você Sabia?</span>
              </div>
              <p className="text-xs font-medium leading-relaxed text-slate-800">
                {verbete.voceSabia}
              </p>
            </div>
          )}

          {/* Recommended Machine Settings Panel */}
          {verbete.recommendedSettings && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-2">
                <Gauge className="w-4 h-4 text-slate-700" />
                <span>Configurações Recomendadas de Máquina</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {verbete.recommendedSettings.speedPPM && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <Gauge className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-extrabold block">Velocidade PPM</span>
                      <span className="text-xs font-bold text-slate-900">{verbete.recommendedSettings.speedPPM}</span>
                    </div>
                  </div>
                )}
                {verbete.recommendedSettings.needleType && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-extrabold block">Agulha Recomendada</span>
                      <span className="text-xs font-bold text-slate-900">{verbete.recommendedSettings.needleType}</span>
                    </div>
                  </div>
                )}
                {verbete.recommendedSettings.stabilizer && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <Layers className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-extrabold block">Estabilizador / Entretela</span>
                      <span className="text-xs font-bold text-slate-900">{verbete.recommendedSettings.stabilizer}</span>
                    </div>
                  </div>
                )}
                {verbete.recommendedSettings.density && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-extrabold block">Densidade dos Pontos</span>
                      <span className="text-xs font-bold text-slate-900">{verbete.recommendedSettings.density}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Practical Applications */}
          {verbete.applications && verbete.applications.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Aplicações Práticas & Tecidos</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {verbete.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Troubleshooting Tips */}
          {verbete.troubleshootingTips && verbete.troubleshootingTips.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Dicas de Solução de Problemas & Cuidados</span>
              </h3>
              <ul className="space-y-2 text-xs text-amber-950 font-medium">
                {verbete.troubleshootingTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-amber-700 font-bold shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Beginner Explanation if present */}
          {verbete.beginnerExplanation && (
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center space-x-2">
                <span className="text-base">🧵</span>
                <span>Explicação para Quem Está Começando</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {verbete.beginnerExplanation}
              </p>
            </div>
          )}

          {/* Practical Exercise if present */}
          {verbete.practicalExercise && (
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 flex items-center space-x-2">
                <span className="text-base">📝</span>
                <span>Exercício Prático no Ateliê</span>
              </h3>
              <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed whitespace-pre-line">
                {verbete.practicalExercise}
              </p>
            </div>
          )}

          {/* Quick Summary if present */}
          {verbete.quickSummary && (
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 space-y-1.5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center space-x-2">
                <span className="text-base">📚</span>
                <span>Resumo Rápido em 1 Minuto</span>
              </h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {verbete.quickSummary}
              </p>
            </div>
          )}

          {/* Related Terms */}
          {verbete.relatedTerms && verbete.relatedTerms.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                Termos Correlatos no Acervo
              </h4>
              <div className="flex flex-wrap gap-2">
                {verbete.relatedTerms.map((termName, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectRelatedTerm && onSelectRelatedTerm(termName)}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer shadow-sm"
                  >
                    + {termName}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onAskAiToElaborate && onAskAiToElaborate(verbete)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#101726] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md transition cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Expandir ou Tirar Dúvidas com IA</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

