import React from "react";
import { Calculator, ArrowRight, Sparkles, DollarSign } from "lucide-react";

interface CalculatorPromoBannerProps {
  className?: string;
}

export const CalculatorPromoBanner: React.FC<CalculatorPromoBannerProps> = ({ className = "" }) => {
  return (
    <div
      id="artrelados-calculator-promo-banner"
      className={`rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-50/90 via-amber-100/60 to-amber-50/90 border-2 border-amber-400 p-5 sm:p-6 shadow-sm relative overflow-hidden ${className}`}
    >
      {/* Subtle decorative background pattern */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-28 h-28 bg-amber-300/20 rounded-full blur-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        {/* Left side: Icon + Content */}
        <div className="flex items-start space-x-3.5 sm:space-x-4">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md mt-0.5 border border-amber-300">
            <Calculator className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight leading-snug">
              Você sabe quanto cobrar pelos seus bordados?
            </h3>

            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed max-w-2xl">
              Não trabalhe no escuro nem pague para bordar! Conheça a <strong>Calculadora Oficial Artrelados</strong> e descubra o valor exato de cada ponto, linha, entretela e hora de máquina para lucrar de verdade no seu ateliê.
            </p>
          </div>
        </div>

        {/* Right side: Action Button */}
        <div className="w-full md:w-auto shrink-0 pt-1 md:pt-0">
          <a
            href="https://www.artrelados.com.br/comprar-calculadora"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 hover:text-amber-200 text-xs sm:text-sm font-black inline-flex items-center justify-center space-x-2 transition shadow-md hover:shadow-lg active:scale-98 cursor-pointer border border-slate-800"
          >
            <span>Conhecer a Calculadora</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};
