import React from "react";
import { BookOpen, Wrench, Star } from "lucide-react";
import { DictionaryStats } from "../types";
import { SupportedLanguage, UI_TRANSLATIONS } from "../utils/i18n";

interface HeaderProps {
  activeTab: "dictionary" | "troubleshooting" | "favorites";
  setActiveTab: (tab: "dictionary" | "troubleshooting" | "favorites") => void;
  stats: DictionaryStats;
  onResetFilters?: () => void;
  currentLanguage: SupportedLanguage;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  stats,
  onResetFilters,
  currentLanguage,
}) => {
  const t = UI_TRANSLATIONS[currentLanguage] || UI_TRANSLATIONS.pt;

  return (
    <header className="dibe-header-yellow bg-[#F9BC06] text-slate-950 border-b-4 border-[#E0A200] shadow-xl relative overflow-hidden">
      {/* Decorative Embroidery Waves Background - Strict Background Plane */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-85 select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/header-ribbons.svg"
          alt=""
          className="w-full h-full object-fill object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3.5 pb-3.5 sm:pt-4.5 sm:pb-4 relative z-10">
        {/* Title & Byline - Centered Original DIBE Identity */}
        <div className="my-1 text-center">
          <h1
            style={{ fontFamily: "'Slackey', cursive, sans-serif", color: "#0a0a0a" }}
            className="dibe-header-title text-4xl sm:text-5xl md:text-6xl text-slate-950 font-slackey tracking-wider uppercase leading-none mx-auto drop-shadow-xs"
          >
            DIBE
          </h1>

          {/* Subtitle perfectly fitted with fluid text scaling, kept strictly on a single line */}
          <div className="mt-2 sm:mt-2.5 flex items-center justify-center font-slackey text-[14px] xs:text-[17px] sm:text-[23px] md:text-[30px] lg:text-[35px] leading-tight tracking-wide whitespace-nowrap px-1 max-w-full text-center select-none">
            <span className="text-[#0a0a0a] drop-shadow-xs mr-2 sm:mr-2.5 md:mr-3">{t.headerDictionary}</span>
            <span className="text-[#c47700] drop-shadow-xs mr-2 sm:mr-2.5 md:mr-3">{t.headerDeBordados}</span>
            <span className="text-[#008cc9] font-slackey drop-shadow-xs">
              {t.headerEletronicos}
            </span>
          </div>

          <p className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 mt-2 whitespace-nowrap overflow-hidden text-ellipsis px-2">
            {t.headerTagline}
          </p>
          <p className="text-[11px] sm:text-xs font-black tracking-widest text-slate-800 uppercase mt-0.5">
            {t.headerCopyright}
          </p>
          <div className="mt-1">
            <a
              href="https://www.artrelados.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-black text-slate-950 hover:text-amber-950 underline decoration-slate-900/40 hover:decoration-slate-950 transition tracking-wide"
              title="Acessar o site oficial Artrelados"
            >
              https://www.artrelados.com.br/
            </a>
          </div>
        </div>

        {/* Navigation Tabs - Aligned with the 3 words of the title above */}
        <div className="mt-3.5 sm:mt-4 border-t-2 border-slate-950/20 pt-3">
          <nav className="max-w-4xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4 px-1">
            {/* 1. Aligned to the left (under DICIONÁRIO) */}
            <div className="flex justify-center sm:justify-start w-full">
              <button
                id="tab-dictionary"
                onClick={() => setActiveTab("dictionary")}
                className={`w-full sm:w-auto min-h-[42px] flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "dictionary"
                    ? "bg-slate-950 text-[#F9BC06] border-2 border-slate-950 shadow-md ring-2 ring-slate-950/20"
                    : "bg-amber-400 text-slate-950 hover:bg-amber-300 border-2 border-slate-950/40 shadow-xs"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.tabDictionary}</span>
              </button>
            </div>

            {/* 2. Aligned in the exact center (under DE BORDADOS) */}
            <div className="flex justify-center w-full">
              <button
                id="tab-troubleshooting"
                onClick={() => setActiveTab("troubleshooting")}
                className={`w-full sm:w-auto min-h-[42px] flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "troubleshooting"
                    ? "bg-[#9F1239] text-white border-2 border-slate-950 shadow-md ring-2 ring-slate-950/20"
                    : "bg-[#E11D48] text-white hover:bg-[#BE185D] border-2 border-slate-950/40 shadow-xs"
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>{t.tabTroubleshooting}</span>
              </button>
            </div>

            {/* 3. Aligned to the right (under ELETRÔNICOS) */}
            <div className="flex justify-center sm:justify-end w-full">
              <button
                id="tab-favorites"
                onClick={() => setActiveTab("favorites")}
                className={`w-full sm:w-auto min-h-[42px] flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "favorites"
                    ? "bg-[#075985] text-white border-2 border-slate-950 shadow-md ring-2 ring-slate-950/20"
                    : "bg-[#0284C7] text-white hover:bg-[#0369A1] border-2 border-slate-950/40 shadow-xs"
                }`}
              >
                <Star className="w-4 h-4 fill-current" />
                <span>{t.tabFavorites} ({stats.totalFavorites})</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

