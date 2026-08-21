import React, { useState } from "react";
import { BookOpen, Wrench, Star, Sparkles, FileText, BookmarkCheck, RotateCcw, Lock, Unlock, ShieldAlert, Plus } from "lucide-react";
import { DictionaryStats } from "../types";

interface HeaderProps {
  activeTab: "dictionary" | "troubleshooting" | "favorites" | "ai-expander";
  setActiveTab: (tab: "dictionary" | "troubleshooting" | "favorites" | "ai-expander") => void;
  stats: DictionaryStats;
  onResetFilters?: () => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  onAddNewVerbete?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  stats,
  onResetFilters,
  isAdmin,
  setIsAdmin,
  onAddNewVerbete,
}) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleAdminToggle = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setShowPasswordModal(true);
      setPasswordInput("");
      setPasswordError(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = passwordInput.toLowerCase().trim();
    if (input === "artrelados" || input === "1234" || input === "dibe") {
      setIsAdmin(true);
      setShowPasswordModal(false);
      setPasswordInput("");
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

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

          <button
            onClick={() => setActiveTab("ai-expander")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap cursor-pointer shadow-xs ${
              activeTab === "ai-expander"
                ? "bg-slate-950 text-amber-300 border-2 border-amber-300 shadow-md scale-102"
                : "bg-slate-950/90 text-amber-300/80 hover:text-amber-300 hover:bg-slate-950 border border-slate-900"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>4. Gerador IA</span>
          </button>
        </nav>
      </div>

      {/* Password Modal for Admin Mode */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in text-slate-900">
          <div className="bg-white rounded-3xl border border-amber-300 shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center space-x-3 text-amber-900">
              <div className="p-2.5 bg-amber-100 rounded-2xl">
                <Lock className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">Área da Editora Artrelados</h3>
                <p className="text-xs text-slate-500">Digite a senha para habilitar edição e exclusão de verbetes</p>
              </div>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Senha de Acesso:
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="Sua senha de editora (ex: artrelados)"
                  autoFocus
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                />
                {passwordError && (
                  <p className="text-xs text-rose-600 font-bold mt-1.5 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Senha incorreta! Digite &quot;artrelados&quot;
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-bold transition cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-black transition cursor-pointer shadow-md border border-amber-500"
                >
                  Entrar como Editora
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
