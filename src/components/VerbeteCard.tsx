import React from "react";
import { Star, ChevronRight, Copy, Check } from "lucide-react";
import { Verbete } from "../types";
import { SupportedLanguage, localizeVerbete, UI_TRANSLATIONS } from "../utils/i18n";

interface VerbeteCardProps {
  verbete: Verbete;
  onSelect: (verbete: Verbete) => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  currentLanguage?: SupportedLanguage;
}

export const VerbeteCard: React.FC<VerbeteCardProps> = ({
  verbete: rawVerbete,
  onSelect,
  onToggleFavorite,
  currentLanguage,
}) => {
  const [copied, setCopied] = React.useState(false);
  const activeLang: SupportedLanguage = (currentLanguage as SupportedLanguage) || "pt";
  const verbete = localizeVerbete(rawVerbete, activeLang);
  const t = UI_TRANSLATIONS[activeLang] || UI_TRANSLATIONS.pt;

  // Guarantee code is never missing (fallback to initial letter code)
  const displayCode =
    verbete.code || `${(verbete.term || "V").trim().charAt(0).toUpperCase()}-001`;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const sourceText = currentLanguage === "es"
      ? "Fuente: DIBE - Diccionario Ilustrado de Bordado Electrónico (Artrelados)"
      : "Fonte: DIBE - Dicionário de Bordados Eletrônicos (Artrelados)";
    const textToCopy = `${verbete.term} (${displayCode})\n\n${verbete.summary || verbete.definition}\n\n${
      verbete.dicaArtrelados ? `${t.modalDicaArtrelados}: ${verbete.dicaArtrelados}\n\n` : ""
    }${sourceText}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => onSelect(rawVerbete)}
      className="verbete-card-item group relative bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-amber-300 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3"
    >
      <div className="space-y-3">
        {/* Top Header Row: Code Badge, Title, Category Pill & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
          <div className="flex flex-wrap items-center gap-2">
            {/* Numeração Badge (A-026) - ALWAYS REQUIRED */}
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-black bg-[#101726] text-amber-300 border border-slate-800 shadow-2xs font-mono shrink-0">
              {displayCode}
            </span>

            {/* Term Name / Title */}
            <h3 className="text-base sm:text-lg font-black text-amber-950 group-hover:text-amber-800 transition-colors">
              {verbete.term}
            </h3>

            {/* Category Pill */}
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
              {verbete.category}
            </span>
          </div>

          {/* Top Right Actions */}
          <div className="flex items-center space-x-1 shrink-0 ml-auto">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer"
              title={currentLanguage === "es" ? "Copiar texto del término" : "Copiar texto do verbete"}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={(e) => onToggleFavorite(rawVerbete.id, e)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-slate-100 transition cursor-pointer"
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
              <Star
                className={`w-4 h-4 ${
                  rawVerbete.isFavorite ? "fill-amber-400 text-amber-500" : ""
                }`}
              />
            </button>

            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Short Summary / Definition Text */}
        <p className="text-slate-700 text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal">
          {verbete.summary || verbete.definition}
        </p>

        {/* Dica Artrelados Box - Matching screenshot style */}
        {verbete.dicaArtrelados && (
          <div className="p-3 rounded-xl bg-amber-50/90 border-l-4 border-amber-500 text-amber-950 text-xs leading-relaxed font-medium shadow-2xs">
            <strong className="font-extrabold text-amber-900">🧵 {t.modalDicaArtrelados}: </strong>
            <span className="text-slate-800">{verbete.dicaArtrelados}</span>
          </div>
        )}
      </div>
    </div>
  );
};

