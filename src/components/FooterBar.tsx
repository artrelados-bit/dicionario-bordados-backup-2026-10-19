import React from "react";
import { BookOpen, Star, RefreshCw, Sparkles, Heart } from "lucide-react";
import { DictionaryStats } from "../types";

interface FooterBarProps {
  stats: DictionaryStats;
  onResetFilters?: () => void;
}

export const FooterBar: React.FC<FooterBarProps> = ({ stats, onResetFilters }) => {
  return (
    <footer className="w-full bg-slate-950 text-white border-t-4 border-[#F9BC06] py-6 px-4 sm:px-6 lg:px-8 mt-12 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Author */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2">
            <span
              style={{ fontFamily: "'Slackey', cursive, sans-serif" }}
              className="text-2xl text-[#F9BC06] tracking-wider"
            >
              DIBE
            </span>
            <span className="text-xs bg-amber-400/20 text-[#F9BC06] border border-[#F9BC06]/40 px-2 py-0.5 rounded-full font-bold">
              v1.1.4 Oficial
            </span>
          </div>
          <p className="text-xs text-slate-300 font-medium mt-1">
            Dicionário Ilustrado de Bordados Eletrônicos • Enciclopédia Técnica Artrelados
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Idealizado e mantido por <span className="text-amber-300 font-bold">Janete M. C. Silva</span> • Artrelados Bordados
          </p>
        </div>

        {/* Stats Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold">
          <div className="flex items-center space-x-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-200 shadow-inner">
            <BookOpen className="w-3.5 h-3.5 text-[#F9BC06]" />
            <span>{stats.totalVerbetes} Verbetes Ativos</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-200 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{stats.totalIllustrated || 81} Ilustrações Técnicas</span>
          </div>

          {stats.totalFavorites > 0 && (
            <div className="flex items-center space-x-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-amber-400 shadow-inner">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{stats.totalFavorites} Favoritos</span>
            </div>
          )}

          {onResetFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-3 py-1.5 rounded-lg transition-all shadow-xs cursor-pointer"
              title="Restaurar visualização completa"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Ver Todos</span>
            </button>
          )}
        </div>

        {/* Links & Rights */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right text-[11px] text-slate-400">
          <a
            href="https://www.artrelados.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-bold transition hover:underline"
          >
            www.artrelados.com.br
          </a>
          <span className="mt-1 flex items-center justify-center gap-1">
            Feito com <Heart className="w-3 h-3 text-red-500 fill-current inline" /> para bordadeiras de todo o Brasil
          </span>
          <span className="text-[10px] text-slate-300 mt-0.5">© 2026 Artrelados • Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
};
