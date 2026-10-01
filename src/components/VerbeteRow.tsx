import React from "react";
import { Star, Copy, Check, ChevronRight } from "lucide-react";
import { Verbete } from "../types";
import { SupportedLanguage, localizeVerbete, UI_TRANSLATIONS } from "../utils/i18n";

interface VerbeteRowProps {
  verbete: Verbete;
  onSelect: (verbete: Verbete) => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  currentLanguage?: SupportedLanguage;
}

export const VerbeteRow: React.FC<VerbeteRowProps> = ({
  verbete: rawVerbete,
  onSelect,
  onToggleFavorite,
  currentLanguage,
}) => {
  const [copied, setCopied] = React.useState(false);
  if (!rawVerbete) return null;

  const activeLang: SupportedLanguage = (currentLanguage as SupportedLanguage) || "pt";
  const verbete = localizeVerbete(rawVerbete, activeLang) || rawVerbete;
  if (!verbete) return null;

  const t = UI_TRANSLATIONS[activeLang] || UI_TRANSLATIONS.pt;

  // Guarantee code is never missing (prefer dynamic sequential code)
  const displayCode =
    rawVerbete.dynamicCode || verbete.dynamicCode || verbete.code || rawVerbete.code || `${(verbete.term || "V").trim().charAt(0).toUpperCase()}-001`;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const sourceText = currentLanguage === "es"
      ? "Fuente: DIBE - Diccionario Ilustrado de Bordado Electrónico (Artrelados)"
      : "Fonte: DIBE - Dicionário de Bordados Eletrônicos (Artrelados)";
    const textToCopy = `${verbete.term} (${displayCode})\n\n${verbete.definition || verbete.summary}\n\n${
      verbete.dicaArtrelados ? `${t.modalDicaArtrelados}: ${verbete.dicaArtrelados}\n\n` : ""
    }${sourceText}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => onSelect(rawVerbete)}
      className="verbete-row-item py-3.5 border-b border-slate-200/90 hover:bg-amber-50/50 transition-colors px-3 sm:px-4 rounded-xl cursor-pointer group flex flex-col sm:flex-row sm:items-start justify-between gap-3"
    >
      <div className="flex-1 space-y-2">
        {/* Term Title & Code Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] font-black bg-[#101726] text-amber-300 px-2.5 py-0.5 rounded-md shadow-2xs">
            {displayCode}
          </span>
          <h3 className="text-base sm:text-lg font-black text-amber-950 group-hover:text-amber-800 transition-colors">
            {verbete.term}
          </h3>
          <span className="text-[11px] bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md font-bold">
            {verbete.category}
          </span>
        </div>

        {/* Definition Text */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {verbete.summary || verbete.definition}
        </p>

        {/* Dica Artrelados */}
        {verbete.dicaArtrelados && (
          <div className="mt-1.5 text-xs text-amber-950 bg-amber-50/90 border-l-4 border-amber-500 p-2.5 rounded-r-xl font-medium shadow-2xs">
            <strong className="font-extrabold text-amber-900">🧵 {t.modalDicaArtrelados}: </strong>
            <span className="text-slate-800">{verbete.dicaArtrelados}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-1 shrink-0 self-end sm:self-start pt-1">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition cursor-pointer"
          title={currentLanguage === "es" ? "Copiar texto del término" : "Copiar verbete"}
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>

        <button
          onClick={(e) => onToggleFavorite(rawVerbete.id, e)}
          className={`p-1.5 rounded-lg transition cursor-pointer ${
            rawVerbete.isFavorite ? "text-amber-500 bg-amber-100/60" : "text-slate-400 hover:text-amber-500 hover:bg-slate-200/60"
          }`}
          title={
            rawVerbete.isFavorite
              ? currentLanguage === "es"
                ? "Eliminar de favoritos"
                : "Remover dos favoritos"
              : currentLanguage === "es"
              ? "Añadir a favoritos"
              : "Adicionar aos favoritos"
          }
        >
          <Star className={`w-4 h-4 ${rawVerbete.isFavorite ? "fill-amber-500 text-amber-500" : ""}`} />
        </button>

        <button
          className="p-1.5 rounded-lg text-slate-400 group-hover:text-amber-700 transition cursor-pointer"
          title={currentLanguage === "es" ? "Ver ficha técnica completa" : "Ver detalhes completos"}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

