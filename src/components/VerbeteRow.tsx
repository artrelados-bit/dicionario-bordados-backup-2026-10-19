import React from "react";
import { Star, Copy, Check, ChevronRight } from "lucide-react";
import { Verbete } from "../types";

interface VerbeteRowProps {
  verbete: Verbete;
  onSelect: (verbete: Verbete) => void;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export const VerbeteRow: React.FC<VerbeteRowProps> = ({
  verbete,
  onSelect,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = React.useState(false);

  // Guarantee code is never missing
  const displayCode =
    verbete.code || `${(verbete.term || "V").trim().charAt(0).toUpperCase()}-001`;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = `${verbete.term} (${displayCode})\n\n${verbete.definition || verbete.summary}\n\n${
      verbete.dicaArtrelados ? `Dica Artrelados: ${verbete.dicaArtrelados}\n\n` : ""
    }Fonte: DIBE - Dicionário de Bordados Eletrônicos (Artrelados)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => onSelect(verbete)}
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
            <strong className="font-extrabold text-amber-900">🧵 Dica Artrelados: </strong>
            <span className="text-slate-800">{verbete.dicaArtrelados}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-1 shrink-0 self-end sm:self-start pt-1">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition cursor-pointer"
          title="Copiar verbete"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>

        <button
          onClick={(e) => onToggleFavorite(verbete.id, e)}
          className={`p-1.5 rounded-lg transition cursor-pointer ${
            verbete.isFavorite ? "text-amber-500 bg-amber-100/60" : "text-slate-400 hover:text-amber-500 hover:bg-slate-200/60"
          }`}
          title={verbete.isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Star className={`w-4 h-4 ${verbete.isFavorite ? "fill-amber-500 text-amber-500" : ""}`} />
        </button>

        <button
          className="p-1.5 rounded-lg text-slate-400 group-hover:text-amber-700 transition cursor-pointer"
          title="Ver detalhes completos"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

