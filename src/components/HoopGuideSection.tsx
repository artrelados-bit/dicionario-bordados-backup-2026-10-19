import React, { useState } from "react";
import { Maximize2, ShieldAlert, CheckCircle, Search, Info } from "lucide-react";
import { HOOP_SPECIFICATIONS, HoopSpec } from "../data/hoopSpecsData";

export const HoopGuideSection: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const brands = [
    "Todas",
    "Brother",
    "Janome",
    "Tajima / Barudan (Industrial)",
    "Genérico / Magnético"
  ];

  const filteredHoops = HOOP_SPECIFICATIONS.filter((h) => {
    const matchesBrand = selectedBrand === "Todas" || h.brand === selectedBrand;
    const matchesSearch =
      searchQuery === "" ||
      h.hoopName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.nominalSize.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.bestUses.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-300 inline-block mb-1">
            📏 Gabarito Oficial de Bastidores
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Tamanhos, Áreas Reais & Margens de Segurança
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Nunca mais quebre uma agulha ou rasure um aro por colisão do pé-calcador na borda plástica.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Filtrar bastidor (ex: 13x18, boné, 10x10...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-500"
          />
        </div>
      </div>

      {/* Brand Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {brands.map((b) => (
          <button
            key={b}
            onClick={() => setSelectedBrand(b)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedBrand === b
                ? "bg-[#101726] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      {/* Hoops Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHoops.map((h) => (
          <div
            key={h.id}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {h.brand}
                </span>
                <span className="text-xs font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                  {h.nominalSize}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {h.hoopName}
              </h4>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                  Área Real de Bordado
                </span>
                <p className="font-extrabold text-slate-800 text-sm">
                  {h.actualEmbroideryArea}
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-700">
                <strong className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                  Recomendado para:
                </strong>
                <p className="font-medium text-slate-600">{h.bestUses}</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              {/* Margem de Segurança */}
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-950 font-medium">
                <strong className="font-black text-amber-900 block mb-0.5">
                  ⚠️ Margem de Segurança:
                </strong>
                {h.safetyMarginAdvice}
              </div>

              {/* Dica Pro */}
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-700 font-medium">
                <strong className="font-black text-slate-900 block mb-0.5">
                  💡 Dica do Ateliê:
                </strong>
                {h.proWarning}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
