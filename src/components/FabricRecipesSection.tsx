import React, { useState } from "react";
import { Sparkles, Search, Layers, Compass, ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import { FABRIC_RECIPES, FabricRecipe } from "../data/fabricRecipesData";

export const FabricRecipesModalOrSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedRecipe, setSelectedRecipe] = useState<FabricRecipe>(FABRIC_RECIPES[0]);

  const categories = [
    "Todas",
    "Algodão & Planos",
    "Malhas & Elásticos",
    "Felpudos & Texturizados",
    "Delicados & Finos",
    "Pesados & Estruturados",
    "Especiais & Sintéticos"
  ];

  const filteredRecipes = FABRIC_RECIPES.filter((r) => {
    const matchesCat = selectedCategory === "Todas" || r.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      r.fabricName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.popularExamples.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 inline-block mb-1">
            🧵 Receituário do Ateliê Artrelados
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Combinação Perfeita: Tecido, Agulha & Entretela
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Evite franzimento, furos na peça e pontos afundados consultando a receita técnica antes de bordar.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar tecido (ex: toalha, malha, jeans...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500"
          />
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat
                ? "bg-[#101726] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid: Selector List + Detailed Recipe Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Fabric List */}
        <div className="lg:col-span-4 space-y-2 max-h-[500px] overflow-y-auto pr-1">
          {filteredRecipes.map((r) => {
            const isSelected = selectedRecipe.id === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setSelectedRecipe(r)}
                className={`w-full text-left p-3.5 rounded-2xl border transition cursor-pointer flex flex-col gap-1 ${
                  isSelected
                    ? "bg-amber-50/80 border-amber-400 shadow-sm"
                    : "bg-white border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-amber-800 tracking-wider">
                    {r.category}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {r.fabricName}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 font-medium">
                  {r.popularExamples}
                </p>
              </button>
            );
          })}

          {filteredRecipes.length === 0 && (
            <div className="p-6 text-center text-slate-400 text-xs">
              Nenhum tecido encontrado para a busca.
            </div>
          )}
        </div>

        {/* Right Column: Active Recipe Display */}
        <div className="lg:col-span-8 bg-slate-50/70 border border-slate-200 rounded-3xl p-5 sm:p-6 space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-white px-2 py-0.5 rounded border border-amber-200">
              {selectedRecipe.category}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              {selectedRecipe.fabricName}
            </h4>
            <p className="text-xs text-slate-600 font-medium mt-0.5">
              <strong>Onde se aplica:</strong> {selectedRecipe.popularExamples}
            </p>
          </div>

          {/* Key Parameters Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Agulha */}
            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                🪡 Agulha Recomendada
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Calibre: {selectedRecipe.needleSize}
              </p>
              <p className="text-xs text-slate-600 font-medium">
                {selectedRecipe.needleTip}
              </p>
            </div>

            {/* Entretela */}
            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                📄 Estabilização (Base & Topo)
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Base: {selectedRecipe.bottomStabilizer}
              </p>
              <p className="text-xs text-slate-600 font-medium">
                Topo: {selectedRecipe.topStabilizer}
              </p>
            </div>

            {/* Bastidor & Colocação */}
            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                📏 Bastidor & Colocação
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {selectedRecipe.hoopingAdvice}
              </p>
            </div>

            {/* Velocidade & Tensão */}
            <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                ⚙️ Velocidade & Tensão
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Velocidade: {selectedRecipe.speedRecommendation}
              </p>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {selectedRecipe.tensionAdvice}
              </p>
            </div>
          </div>

          {/* Subponto & Programação */}
          <div className="p-3.5 bg-white rounded-2xl border border-slate-200 text-xs text-slate-800 space-y-1">
            <strong className="text-[10px] font-black uppercase tracking-wider text-slate-700 block">
              📐 Dica para Matriz & Subponto (Underlay):
            </strong>
            <p className="font-medium leading-relaxed">
              {selectedRecipe.underlayAdvice}
            </p>
          </div>

          {/* Erro Comum de Alerta */}
          <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-900 flex items-start space-x-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-black text-rose-950 mb-0.5">
                Cuidado com este erro frequente:
              </strong>
              <p className="font-medium">{selectedRecipe.commonPitfalls}</p>
            </div>
          </div>

          {/* Dica de Ouro Artrelados */}
          <div className="p-4 bg-amber-100/70 border border-amber-300 rounded-2xl text-xs text-amber-950 font-medium">
            <strong className="font-black text-amber-900 block mb-1">
              🧵 Segredo de Oficina Artrelados:
            </strong>
            <p className="leading-relaxed">{selectedRecipe.artreladosProTip}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
