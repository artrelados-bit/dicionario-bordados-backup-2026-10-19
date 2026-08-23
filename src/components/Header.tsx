import React from "react";
import { BookOpen, Wrench, Star } from "lucide-react";
import { DictionaryStats } from "../types";

interface HeaderProps {
  activeTab: "dictionary" | "troubleshooting" | "favorites";
  setActiveTab: (tab: "dictionary" | "troubleshooting" | "favorites") => void;
  stats: DictionaryStats;
  onResetFilters?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  stats,
  onResetFilters,
}) => {
  return (
    <header className="dibe-header-yellow bg-[#F9BC06] text-slate-950 border-b-4 border-[#E0A200] shadow-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4 sm:pt-5 sm:pb-4.5">
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
            <span className="text-[#0a0a0a] drop-shadow-xs mr-2 sm:mr-2.5 md:mr-3">DICIONÁRIO</span>
            <span className="text-[#c47700] drop-shadow-xs mr-2 sm:mr-2.5 md:mr-3">DE BORDADOS</span>
            <span className="text-[#008cc9] font-slackey drop-shadow-xs">
              ELETRÔNICOS
            </span>
          </div>

          <p className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 mt-2 whitespace-nowrap overflow-hidden text-ellipsis px-2">
            Consultoria Técnica de Termos, Pontos & Matrizes de Bordado
          </p>
          <p className="text-[11px] sm:text-xs font-black tracking-widest text-slate-800 uppercase mt-0.5">
            © 2026 — JANETE M. C. SILVA • ARTRELADOS
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
            <div className="flex justify-center sm:justify-start">
              <button
                id="tab-dictionary"
                onClick={() => setActiveTab("dictionary")}
                className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer shadow-xs ${
                  activeTab === "dictionary"
                    ? "bg-slate-950 text-[#F9BC06] border-2 border-slate-950 scale-105"
                    : "bg-amber-400 text-slate-950 hover:bg-amber-300 border border-slate-950/40"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>1. Acervo & Verbetes</span>
              </button>
            </div>

            {/* 2. Aligned in the exact center (under DE BORDADOS) */}
            <div className="flex justify-center">
              <button
                id="tab-troubleshooting"
                onClick={() => setActiveTab("troubleshooting")}
                className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer shadow-xs ${
                  activeTab === "troubleshooting"
                    ? "bg-slate-950 text-[#F9BC06] border-2 border-slate-950 scale-105"
                    : "bg-amber-400 text-slate-950 hover:bg-amber-300 border border-slate-950/40"
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>2. Guias de Problemas</span>
              </button>
            </div>

            {/* 3. Aligned to the right (under ELETRÔNICOS) */}
            <div className="flex justify-center sm:justify-end">
              <button
                id="tab-favorites"
                onClick={() => setActiveTab("favorites")}
                className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer shadow-xs ${
                  activeTab === "favorites"
                    ? "bg-slate-950 text-[#F9BC06] border-2 border-slate-950 scale-105"
                    : "bg-amber-400 text-slate-950 hover:bg-amber-300 border border-slate-950/40"
                }`}
              >
                <Star className="w-4 h-4 fill-current" />
                <span>3. Meus Favoritos ({stats.totalFavorites})</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
