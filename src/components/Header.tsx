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
      {/* Subtle top banner ribbon like the book cover */}
      <div className="absolute top-0 left-6 sm:left-12 hidden sm:flex flex-col items-center bg-[#1E1B18] text-[#F9BC06] px-3 py-2 rounded-b-md shadow-md border-x border-b border-[#3D352E] z-10">
        <span className="text-[9px] font-black tracking-widest text-[#F9BC06]">👑</span>
        <span className="text-[8px] font-black tracking-widest text-[#F9BC06] uppercase mt-0.5">INSPIRAR</span>
        <span className="text-[8px] font-black tracking-widest text-[#F9BC06] uppercase">BORDAR</span>
        <span className="text-[8px] font-black tracking-widest text-[#F9BC06] uppercase">CRIAR</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 pb-6 sm:pt-9 sm:pb-7">
        {/* Title & Byline - Imposing, Generous Spacing */}
        <div className="my-2 text-center">
          <h1
            style={{ fontFamily: "'Slackey', cursive, sans-serif", color: "#0a0a0a" }}
            className="dibe-header-title text-6xl sm:text-7xl md:text-8xl text-slate-950 font-slackey tracking-wider uppercase leading-none mx-auto drop-shadow-sm"
          >
            DIBE
          </h1>

          {/* Subtitle perfectly fitted with fluid text scaling so it NEVER clips or crops */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center font-slackey text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wide whitespace-nowrap px-1 max-w-full text-center">
            <span className="text-[#0a0a0a] drop-shadow-xs mr-1.5 sm:mr-2.5 md:mr-3">DICIONÁRIO</span>
            <span className="text-[#c47700] drop-shadow-xs mr-1.5 sm:mr-2.5 md:mr-3">DE BORDADOS</span>
            <span className="text-[#008cc9] font-slackey drop-shadow-xs">
              ELETRÔNICOS
            </span>
          </div>

          <p className="text-sm sm:text-base font-extrabold text-slate-900 mt-3.5">
            Consultoria Técnica de Termos, Pontos & Matrizes de Bordado
          </p>
          <p className="text-xs sm:text-sm font-black tracking-widest text-slate-800 uppercase mt-1">
            © 2026 — JANETE M. C. SILVA • ARTRELADOS
          </p>
        </div>

        {/* Navigation Tabs - Spacious Centered Row */}
        <nav className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-t-2 border-slate-950/20 pt-4.5">
          <button
            onClick={() => setActiveTab("dictionary")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer shadow-xs ${
              activeTab === "dictionary"
                ? "bg-slate-950 text-amber-300 border-2 border-amber-300 shadow-md scale-102"
                : "bg-slate-950/90 text-amber-300/80 hover:text-amber-300 hover:bg-slate-950 border border-slate-900"
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>1. Acervo & Verbetes</span>
          </button>

          <button
            onClick={() => setActiveTab("troubleshooting")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer shadow-xs ${
              activeTab === "troubleshooting"
                ? "bg-slate-950 text-amber-300 border-2 border-amber-300 shadow-md scale-102"
                : "bg-slate-950/90 text-amber-300/80 hover:text-amber-300 hover:bg-slate-950 border border-slate-900"
            }`}
          >
            <Wrench className="w-4 h-4 text-amber-400" />
            <span>2. Guias de Problemas</span>
          </button>

          <button
            onClick={() => setActiveTab("favorites")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer shadow-xs ${
              activeTab === "favorites"
                ? "bg-slate-950 text-amber-300 border-2 border-amber-300 shadow-md scale-102"
                : "bg-slate-950/90 text-amber-300/80 hover:text-amber-300 hover:bg-slate-950 border border-slate-900"
            }`}
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>3. Meus Favoritos ({stats.totalFavorites})</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
