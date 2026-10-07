import React from "react";
import { BookMarked, ShieldCheck } from "lucide-react";
import { DictionaryStats } from "../types";
import { SupportedLanguage, UI_TRANSLATIONS } from "../utils/i18n";

interface FooterBarProps {
  stats?: DictionaryStats;
  onResetFilters?: () => void;
  currentLanguage?: SupportedLanguage;
  onOpenReferences?: () => void;
}

export const FooterBar: React.FC<FooterBarProps> = ({
  stats,
  onResetFilters,
  currentLanguage = "pt",
  onOpenReferences,
}) => {
  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.pt;

  const getFooterRightsText = (lang?: string) => {
    switch (lang) {
      case "es":
        return "© 2026 Artrelados • Todos los derechos reservados";
      case "it":
        return "© 2026 Artrelados • Tutti i diritti riservati";
      case "fr":
        return "© 2026 Artrelados • Tous droits réservés";
      case "en":
        return "© 2026 Artrelados • All rights reserved";
      case "pt":
      default:
        return "© 2026 Artrelados • Todos os direitos reservados";
    }
  };

  return (
    <footer className="w-full bg-slate-950 text-white border-t-4 border-[#F9BC06] py-6 px-4 sm:px-6 lg:px-8 mt-12 transition-all">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        {/* Column 1: Brand & Author */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2">
            <span
              style={{ fontFamily: "'Slackey', cursive, sans-serif" }}
              className="text-2xl text-[#F9BC06] tracking-wider"
            >
              {t.footerTitle}
            </span>
            <span className="text-xs bg-amber-400/20 text-[#F9BC06] border border-[#F9BC06]/40 px-2 py-0.5 rounded-full font-bold">
              v1.1.4 Oficial
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-1">
            {t.footerTagline}
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {t.footerAuthor}
          </p>
        </div>

        {/* Column 2: Strictly Centered Official References, Legal Shield & Permanent Acervo Badge */}
        <div className="flex flex-col items-center justify-center w-full space-y-2.5">
          <button
            type="button"
            onClick={onOpenReferences}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-6 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer border border-amber-300 ring-2 ring-amber-400/20 active:scale-95 text-xs sm:text-sm tracking-wide"
            title="Abrir Compêndio Oficial de Referências Bibliográficas, Manuais Técnicos e Legislação de Direitos Autorais"
          >
            <BookMarked className="w-4 h-4 text-slate-950 shrink-0" />
            <span>Referências, Manuais & Leis</span>
            <ShieldCheck className="w-4 h-4 text-amber-950 shrink-0" />
          </button>

          {/* Destaque Estratégico do Acervo Artrelados */}
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-medium tracking-wide shadow-xs">
            <span className="text-amber-400">🧵</span>
            <span>
              Exibindo {(stats?.totalTerms || 0).toLocaleString("pt-BR")} verbetes em todo o acervo (A-Z)
            </span>
          </div>
        </div>

        {/* Column 3: Atelier Motto, Link & Rights */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
          <a
            href="https://www.artrelados.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-amber-400 hover:text-amber-300 transition hover:underline tracking-wide"
            title="Acessar o site oficial Artrelados"
          >
            www.artrelados.com.br
          </a>
          <p className="text-xs text-amber-200/90 font-medium italic tracking-wide">
            &ldquo;Bordando sonhos, realizando desejos.&rdquo;
          </p>
          <p className="text-[10px] text-slate-400 tracking-wider">
            {getFooterRightsText(currentLanguage)}
          </p>
        </div>
      </div>
    </footer>
  );
};
