import React, { useState } from "react";
import { BookOpen, ExternalLink, Search, ShieldAlert, Wrench, Sparkles, CheckCircle2, BookmarkCheck } from "lucide-react";
import { OFFICIAL_MANUALS, OfficialManual } from "../data/officialManualsData";

export const ManualsSection: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const categories = [
    "Todas",
    "Domésticas & Semi-Industriais",
    "Industriais & Multiagulhas",
    "Agulhas & Mecânica de Precisão",
    "Linhas, Softwares & Tensão"
  ];

  const filtered = OFFICIAL_MANUALS.filter((m) => {
    const matchesCat = selectedCategory === "Todas" || m.category === selectedCategory;
    const q = search.toLowerCase().trim();
    if (!q) return matchesCat;
    return (
      matchesCat &&
      (m.manufacturer.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.coverage.toLowerCase().includes(q) ||
        m.technicalHighlight.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6">
      {/* Intro Header & Disclaimer Box */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
              <BookOpen className="w-6 h-6 text-amber-500" />
              <span>Manuais Oficiais & Referências de Fabricantes</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl">
              Consulte a documentação técnica oficial, manuais de instrução, boletins de calibração e guias de serviço originais das principais marcas mundiais de bordado eletrônico.
            </p>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 font-black text-xs shrink-0 flex items-center space-x-1.5">
            <BookmarkCheck className="w-4 h-4 text-amber-600" />
            <span>{OFFICIAL_MANUALS.length} Manuais Homologados</span>
          </div>
        </div>

        {/* Disclaimer Card */}
        <div className="p-4 rounded-2xl bg-rose-50/80 border-2 border-rose-300 text-slate-900 space-y-2">
          <div className="flex items-center space-x-2 text-rose-950 font-black text-xs sm:text-sm">
            <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
            <span>⚖️ AVISO LEGAL & RECOMENDAÇÃO TÉCNICA OFICIAL ARTRELADOS</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            O DIBE Artrelados baseia suas respostas exclusivamente na engenharia dos fabricantes e nas normas internacionais da indústria têxtil. No entanto, intervenções mecânicas em peças sensíveis (como ajuste de folga de lançadeira, desmontagem de faca de corte e regulagem de barra de agulha) exigem precisão micrométrica.
          </p>
          <p className="text-xs text-slate-800 leading-relaxed font-bold">
            🛡️ Se a sua máquina estiver no período de garantia ou se você não tiver treinamento mecânico com ferramentas apropriadas, <span className="underline decoration-rose-500">não deixe de procurar um técnico especializado ou a assistência técnica autorizada da sua marca</span> antes de abrir o cabeçote.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Category Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#101726] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por marca ou modelo..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Manuals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {filtered.map((manual) => (
            <div
              key={manual.id}
              className="bg-slate-50/70 border border-slate-200 hover:border-amber-400 rounded-2xl p-5 transition space-y-3 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                    {manual.manufacturer}
                  </span>
                  <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {manual.sourceType}
                  </span>
                </div>

                <h4 className="text-sm font-black text-slate-900 leading-snug">
                  {manual.title}
                </h4>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  <strong className="text-slate-800">Abrangência:</strong> {manual.coverage}
                </p>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-2xs">
                  <strong className="text-amber-900 font-bold block mb-0.5 flex items-center gap-1">
                    <span>🔬 Tolerâncias & Base de Engenharia:</span>
                  </strong>
                  <span>{manual.technicalHighlight}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-bold">
                  {manual.category}
                </span>

                <a
                  href={manual.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-[#101726] hover:bg-slate-800 text-amber-400 font-bold text-xs flex items-center space-x-1.5 transition shadow-sm cursor-pointer"
                >
                  <span>Acessar Manual / Suporte Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500 space-y-2 bg-slate-50 rounded-2xl border border-slate-200">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="font-bold text-xs sm:text-sm">Nenhum manual encontrado para os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory("Todas");
                setSearch("");
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 text-amber-400 text-xs font-bold transition"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
