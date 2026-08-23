import React from "react";
import { Calculator, ExternalLink } from "lucide-react";

interface CalculatorPromoBannerProps {
  className?: string;
}

export const CalculatorPromoBanner: React.FC<CalculatorPromoBannerProps> = ({ className = "" }) => {
  return (
    <div
      id="artrelados-calculator-promo-banner"
      className={`rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-50/90 via-amber-100/50 to-amber-50/90 border-2 border-amber-400 p-5 sm:p-6 shadow-xs relative overflow-hidden ${className}`}
    >
      <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-5">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs border border-amber-300">
          <Calculator className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
        </div>

        <div className="flex-1 space-y-1">
          <h3 className="text-sm sm:text-base font-black text-slate-950 tracking-tight leading-snug">
            Você sabe quanto cobrar pelos seus bordados?
          </h3>

          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
            Não trabalhe no escuro nem pague para bordar! Descubra o valor exato de cada ponto, linha, entretela e hora de máquina para lucrar no seu ateliê.{" "}
            <a
              href="https://www.artrelados.com.br/comprar-calculadora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bold text-amber-950 hover:text-amber-800 underline decoration-amber-500 decoration-2 underline-offset-3 hover:decoration-amber-700 transition cursor-pointer ml-1"
            >
              <span>Conheça a Calculadora Oficial Artrelados</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 text-amber-700 inline" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
