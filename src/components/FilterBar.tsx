import React from "react";
import { Search, X, Star, Sparkles, LayoutList, LayoutGrid } from "lucide-react";
import { VerbeteCategory } from "../types";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: VerbeteCategory;
  setSelectedCategory: (cat: VerbeteCategory) => void;
  selectedLetter: string;
  setSelectedLetter: (letter: string) => void;
  onlyFavorites: boolean;
  setOnlyFavorites: (fav: boolean) => void;
  onlyAiGenerated: boolean;
  setOnlyAiGenerated: (ai: boolean) => void;
  totalFiltered: number;
  viewMode: "list" | "grid";
  setViewMode: (mode: "list" | "grid") => void;
}

const CATEGORIES: VerbeteCategory[] = [
  "Todos",
  "Pontos Básicos & Decorativos",
  "Estabilizadores & Entretelas",
  "Agulhas & Fios",
  "Programação de Bordado",
  "Softwares & Formatos",
  "Componentes da Máquina",
  "Funções da Máquina",
  "Operação da Máquina",
  "Elementos do Bordado",
  "Acabamento & Finalização",
  "Tipos de Tecidos",
  "Técnicas de Bastidor",
  "Tensão & Calibração",
  "Solução de Problemas",
  "Terminologia Geral",
];

const ALPHABET = [
  "Todos",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedLetter,
  setSelectedLetter,
  onlyFavorites,
  setOnlyFavorites,
  onlyAiGenerated,
  setOnlyAiGenerated,
  totalFiltered,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
      {/* Search Input & Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
        {/* Search Bar Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar no Dicionário (ex: Ponto Cheio, Agulha, PES, Entretela)..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-slate-500 focus:ring-1 focus:ring-slate-400 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Toggles and View Mode */}
        <div className="flex items-center space-x-2">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                viewMode === "list"
                  ? "bg-slate-900 text-amber-300 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              title="Modo Lista Dicionário Limpo (Estilo WordReference - Sem Cartões)"
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lista Limpa</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                viewMode === "grid"
                  ? "bg-slate-900 text-amber-300 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              title="Modo Grade de Cartões"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cartões</span>
            </button>
          </div>

          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
              onlyFavorites
                ? "bg-amber-100 text-amber-900 border-amber-300 shadow-xs"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${onlyFavorites ? "fill-amber-500 text-amber-500" : ""}`} />
            <span>Favoritos</span>
          </button>

          <button
            onClick={() => setOnlyAiGenerated(!onlyAiGenerated)}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
              onlyAiGenerated
                ? "bg-amber-100 text-amber-900 border-amber-300 shadow-xs"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>IA</span>
          </button>
        </div>
      </div>

      {/* Alphabetical Jumper Bar (A-Z) */}
      <div className="flex items-center space-x-1 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-2 text-xs">
        <span className="text-slate-400 text-[11px] font-extrabold tracking-wider uppercase mr-2 shrink-0">Índice:</span>
        {ALPHABET.map((letter) => (
          <button
            key={letter}
            onClick={() => {
              setSelectedLetter(letter);
              if (selectedCategory !== "Todos") {
                setSelectedCategory("Todos");
              }
            }}
            className={`w-7 h-7 rounded-md font-mono text-xs flex items-center justify-center shrink-0 transition cursor-pointer ${
              selectedLetter === letter
                ? "bg-[#101726] text-white font-black shadow-xs"
                : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
        <div>
          Exibindo <strong className="text-slate-900">{totalFiltered}</strong> {totalFiltered === 1 ? "verbete" : "verbetes"}
          {selectedCategory !== "Todos" && <span> em <span className="text-slate-900 font-bold">"{selectedCategory}"</span></span>}
          {selectedLetter !== "Todos" && <span> com a letra <span className="text-slate-900 font-bold">"{selectedLetter}"</span></span>}
        </div>

        {(searchQuery || selectedCategory !== "Todos" || selectedLetter !== "Todos" || onlyFavorites || onlyAiGenerated) && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("Todos");
              setSelectedLetter("Todos");
              setOnlyFavorites(false);
              setOnlyAiGenerated(false);
            }}
            className="text-red-600 hover:text-red-700 font-extrabold underline cursor-pointer"
          >
            Limpar Filtros
          </button>
        )}
      </div>
    </div>
  );
};
