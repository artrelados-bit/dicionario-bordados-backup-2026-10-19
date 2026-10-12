import React, { useState, useEffect, useRef } from "react";
import { X, Star, Sparkles, Gauge, Zap, AlertTriangle, CheckCircle2, Copy, Check, Layers, BookOpen, BookMarked, Calculator, ExternalLink, Share2 } from "lucide-react";
import { Verbete } from "../types";
import { StitchDiagram } from "./StitchDiagram";
import { SupportedLanguage, UI_TRANSLATIONS, localizeVerbete } from "../utils/i18n";

interface VerbeteDetailModalProps {
  verbete: Verbete | null;
  onClose: () => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectRelatedTerm?: (termName: string) => void;
  currentLanguage?: SupportedLanguage;
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
  verbete: rawVerbete,
  onClose,
  onToggleFavorite,
  onSelectRelatedTerm,
  currentLanguage,
}) => {
  const [copied, setCopied] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeLang: SupportedLanguage = (currentLanguage as SupportedLanguage) || "pt";
  const t = UI_TRANSLATIONS[activeLang] || UI_TRANSLATIONS.pt;
  const verbete = rawVerbete ? localizeVerbete(rawVerbete, activeLang) : null;

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [rawVerbete?.id]);

  if (!verbete || !rawVerbete) return null;

  // Prefer dynamic sequential code
  const displayCode =
    rawVerbete.dynamicCode || verbete.dynamicCode || verbete.code || rawVerbete.code || `${(verbete.term || "V").trim().charAt(0).toUpperCase()}-001`;

  const handleCopyText = () => {
    const textToCopy = `${verbete.term} (${displayCode}) - DIBE Artrelados\n\n${t.modalQuickSummary}: ${verbete.summary}\n\n${t.modalDefinition}:\n${verbete.definition}\n\n${t.modalTechnicalDetails}:\n${verbete.technicalDetails || ""}\n\n${t.modalApplications}: ${(verbete.applications || []).join(", ")}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const termClean = verbete.term.replace(/^[🟢🟡🔴\s]+/, "");
    const codeParam = encodeURIComponent(displayCode || verbete.code || verbete.id);
    const shareUrl = `${window.location.origin}/?verbete=${codeParam}`;
    const shareText = `🧵 *DIBE Artrelados: [${displayCode}] ${termClean}*\n\n${verbete.summary}\n\n📖 ${currentLanguage === "es" ? "Consulta el término completo en el Diccionario Ilustrado de Bordado Electrónico:" : "Veja o verbete completo no Dicionário Ilustrado de Bordado Eletrônico:"}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${termClean} — DIBE Artrelados`,
          text: `${shareText}\n${shareUrl}`,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Fallback to clipboard if user dismissed or unsupported
      }
    }

    // Fallback: Copy link to clipboard
    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
    setShareSuccess(true);
    setTimeout(() => setShareSuccess(false), 2500);
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
            {displayCode && (
              <span className="px-3 py-1 rounded-lg text-xs font-black bg-[#101726] text-amber-300 border border-slate-800 shadow-xs font-mono">
                {displayCode}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 border border-amber-500 shadow-2xs">
              {currentLanguage === "es" ? "Ficha Técnica" : "Ficha Técnica"}
            </span>
            {verbete.level && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                {t.modalLevel}: {verbete.level}
              </span>
            )}
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
              {verbete.category}
            </span>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleShare}
              className={`p-2 rounded-xl border transition cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
                shareSuccess
                  ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                  : "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200"
              }`}
              title={t.modalShare}
            >
              {shareSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline">{t.modalCopied}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-amber-700" />
                  <span className="hidden sm:inline">{t.modalShare}</span>
                </>
              )}
            </button>
            <button
              onClick={(e) => onToggleFavorite(verbete.id, e)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-amber-500 transition cursor-pointer"
              title={currentLanguage === "es" ? "Añadir a favoritos" : "Favoritar verbete"}
            >
              <Star className={`w-4 h-4 sm:w-5 sm:h-5 ${verbete.isFavorite ? "fill-amber-400 text-amber-500" : ""}`} />
            </button>
            <button
              onClick={handleCopyText}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition cursor-pointer"
              title={currentLanguage === "es" ? "Copiar texto de la ficha técnica" : "Copiar texto do verbete"}
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
        <div ref={scrollContainerRef} className="p-5 sm:p-7 space-y-6 overflow-y-auto custom-scrollbar bg-slate-50/50">
          {/* Main Title & Classification Header (Scrolls with page) */}
          <div className="space-y-2 pb-1 border-b border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-800">
              <span>{currentLanguage === "es" ? "Ficha Técnica del Término" : "Ficha Técnica do Verbete"}</span>
            </div>
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
                  {currentLanguage === "es" ? "Pronunciación" : "Pronúncia"}: [{verbete.pronunciation}]
                </span>
              )}
              {verbete.englishTerm && (
                <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  🌎 Termo Internacional: <strong className="font-semibold text-slate-900">{verbete.englishTerm}</strong>
                </span>
              )}
            </div>
          </div>

          {/* Technical Illustration Banner right below title & grammar class */}
          {verbete.imageUrl && (
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden p-3 sm:p-4 text-center">
              <div className="bg-white flex flex-col items-center justify-center">
                <img
                  src={verbete.imageUrl}
                  alt={currentLanguage === "es" ? `Lámina técnica ilustrada del término ${verbete.term}` : `Prancha técnica ilustrada do verbete ${verbete.term}`}
                  className="w-full max-h-[380px] object-contain mx-auto rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              {verbete.imageCaption && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-serif italic">{verbete.imageCaption}</span>
                  <span className="text-[10px] font-sans uppercase tracking-wider font-semibold text-slate-400">Manual Técnico DIBE</span>
                </div>
              )}
            </div>
          )}

          {verbete.origin && (
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5 leading-relaxed shadow-2xs">
              <span className="text-base shrink-0">🌎</span>
              <div>
                <strong className="font-bold text-blue-950 block sm:inline mr-1.5">{t.modalOrigin}:</strong>
                <span>{verbete.origin}</span>
              </div>
            </div>
          )}

          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-slate-900 text-sm leading-relaxed">
            <strong className="text-amber-900 font-extrabold block mb-1 uppercase text-xs tracking-wider">
              {t.modalQuickSummary}:
            </strong>
            {verbete.summary || verbete.shortDescription || verbete.definition}
          </div>

          {/* Stitch Diagram if exists */}
          {verbete.stitchDiagramType && (
            <div>
              <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                {currentLanguage === "es"
                  ? "Representación Gráfica de la Puntada"
                  : currentLanguage === "it"
                  ? "Rappresentazione Grafica del Punto"
                  : currentLanguage === "fr"
                  ? "Représentation Graphique du Point"
                  : currentLanguage === "en"
                  ? "Technical Stitch Diagram"
                  : "Representação Gráfica do Ponto"}
              </h4>
              <StitchDiagram type={verbete.stitchDiagramType as any} language={currentLanguage} />
            </div>
          )}

          {/* Technical Definition */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2 border-b border-slate-100 pb-3">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <span>{t.modalDefinition}</span>
            </h3>
            <FormattedMarkdownContent text={verbete.definition} />
          </div>

          {/* Characteristics (Características Principais) */}
          {verbete.characteristics && verbete.characteristics.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <span>{currentLanguage === "es" ? "Características Principales" : "Características Principais"}</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                {verbete.characteristics.map((item, idx) => (
                  <li key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2">
                    <span className="font-bold text-sky-600 shrink-0">•</span>
                    <span>{typeof item === "string" ? item.replace(/^[•\s-]+/, "") : String(item ?? "")}</span>
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
                <span>{currentLanguage === "es" ? "Construcción y Partes Principales" : "Construção & Partes Principais"}</span>
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
                <span>{t.modalHowItWorks}</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                {(Array.isArray(verbete.howItWorks) ? verbete.howItWorks : verbete.howItWorks.split("\n")).filter(Boolean).map((step, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2">
                    <span className="font-bold text-amber-700 shrink-0">{idx + 1}.</span>
                    <span>{typeof step === "string" ? step.replace(/^\d+\.\s*/, "") : String(step ?? "")}</span>
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
                <span>{currentLanguage === "es" ? "Principales Tipos y Variaciones" : "Principais Tipos e Variações"}</span>
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
                <span>{currentLanguage === "es" ? "Tamaños y Numeraciones Más Utilizados" : "Tamanhos & Numerações Mais Utilizados"}</span>
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
                <span>{t.modalTechnicalDetails}</span>
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
                <span>{currentLanguage === "es" ? "📊 Comparación Técnica" : "📊 Comparação Técnica"}</span>
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
                    <span>{t.modalAdvantages}</span>
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
                    <span>{t.modalLimitations}</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-amber-950 font-medium">
                    {verbete.limitations.map((lim, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="shrink-0">•</span>
                        <span>{typeof lim === "string" ? lim.replace(/^[•\s-]+/, "") : String(lim ?? "")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {verbete.commonErrors && verbete.commonErrors.length > 0 && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2 md:col-span-2">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-rose-950 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>{t.modalCommonErrors}</span>
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
                <span>{t.modalDicaArtrelados}</span>
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
                <span>{t.modalCuriosidadeTecnica}</span>
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
                <span>{t.modalVoceSabia}</span>
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
                <span>{t.modalRecommendedSettings}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {verbete.recommendedSettings.speedPPM && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <Gauge className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-extrabold block">{t.modalSpeedPPM}</span>
                      <span className="text-xs font-bold text-slate-900">{verbete.recommendedSettings.speedPPM}</span>
                    </div>
                  </div>
                )}
                {verbete.recommendedSettings.needleType && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-extrabold block">{t.modalNeedleType}</span>
                      <span className="text-xs font-bold text-slate-900">{verbete.recommendedSettings.needleType}</span>
                    </div>
                  </div>
                )}
                {verbete.recommendedSettings.stabilizer && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <Layers className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-extrabold block">{t.modalStabilizer}</span>
                      <span className="text-xs font-bold text-slate-900">{verbete.recommendedSettings.stabilizer}</span>
                    </div>
                  </div>
                )}
                {verbete.recommendedSettings.density && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-extrabold block">{t.modalDensity}</span>
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
                <span>{t.modalApplications}</span>
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

          {/* Relação com Outros Parâmetros da Matriz (Designação Oficial DIBE) */}
          {verbete.matrixRelations && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                <span className="text-base">🔍</span>
                <span>Relação com Outros Parâmetros da Matriz</span>
              </h3>
              {Array.isArray(verbete.matrixRelations) ? (
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {verbete.matrixRelations.map((rel: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span>{rel}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-700 font-medium leading-relaxed whitespace-pre-line">
                  {verbete.matrixRelations}
                </p>
              )}
            </div>
          )}

          {/* Como Identificar Quando o Ajuste é Necessário (Designação Oficial DIBE) */}
          {verbete.howToIdentify && (
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-950 flex items-center space-x-2">
                <span className="text-base">🛠️</span>
                <span>Como Identificar Quando o Ajuste é Necessário</span>
              </h3>
              {Array.isArray(verbete.howToIdentify) ? (
                <ul className="space-y-1.5 text-xs text-amber-950 font-medium">
                  {verbete.howToIdentify.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-amber-700 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-amber-950 font-medium leading-relaxed">
                  {verbete.howToIdentify}
                </p>
              )}
            </div>
          )}

          {/* Troubleshooting Tips */}
          {verbete.troubleshootingTips && verbete.troubleshootingTips.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>{t.modalTroubleshootingTips}</span>
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
                <span>{t.modalBeginner}</span>
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
                <span>{t.modalPracticalExercise}</span>
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
                <span>{t.modalQuickSummary}</span>
              </h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {verbete.quickSummary}
              </p>
            </div>
          )}

          {/* Contextual Recommendation: Calculadora Artrelados */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100/60 border-2 border-amber-300 flex items-start sm:items-center space-x-3.5 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs border border-amber-300">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="space-y-0.5 flex-1">
              <h4 className="text-xs sm:text-sm font-black text-slate-950">
                {t.calcPromoTitle}
              </h4>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t.calcPromoDesc}{" "}
                <a
                  href="https://www.artrelados.com.br/comprar-calculadora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-950 hover:text-amber-800 underline decoration-amber-500 decoration-2 underline-offset-2 hover:decoration-amber-700 inline-flex items-center ml-1 cursor-pointer transition"
                >
                  <span>{t.calcPromoLink}</span>
                  <ExternalLink className="w-3 h-3 ml-1 text-amber-700 inline" />
                </a>
              </p>
            </div>
          </div>

          {/* Related Terms */}
          {verbete.relatedTerms && verbete.relatedTerms.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">
                {t.modalRelatedTerms}
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

          {/* Bibliographic References if present */}
          {verbete.bibliographicReferences && verbete.bibliographicReferences.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200 space-y-2">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center space-x-2">
                <BookMarked className="w-4 h-4 text-slate-600" />
                <span>{t.modalReferences}</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {verbete.bibliographicReferences.map((refItem, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="font-bold text-slate-400 shrink-0">•</span>
                    <span>{refItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-4 sm:p-5 flex items-center justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition cursor-pointer shadow-sm"
          >
            {t.modalClose}
          </button>
        </div>
      </div>
    </div>
  );
};

