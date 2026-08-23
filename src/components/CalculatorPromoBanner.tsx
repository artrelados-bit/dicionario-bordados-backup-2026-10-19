import React from "react";
import { Calculator, ArrowRight } from "lucide-react";

interface CalculatorPromoBannerProps {
  className?: string;
}

export const CalculatorPromoBanner: React.FC<CalculatorPromoBannerProps> = ({ className = "" }) => {
  return (
    <a
      id="artrelados-calculator-promo-banner"
      href="https://www.artrelados.com.br/comprar-calculadora"
      target="_blank"
      rel="noopener noreferrer"
      className={`group block w-full rounded-2xl bg-gradient-to-b from-amber-50/95 via-amber-100/60 to-amber-50/90 border border-amber-300 hover:border-slate-950 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 text-center cursor-pointer select-none ${className}`}
      title="Clique para conhecer a Calculadora Oficial Artrelados"
    >
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        {/* Título Principal */}
        <h3 className="w-full text-sm sm:text-base md:text-lg lg:text-xl font-black text-slate-950 tracking-tight leading-snug">
          Precifique seus bordados com precisão e garanta o lucro real do seu ateliê.
        </h3>

        {/* Texto de Benefícios ocupando 100% da largura até as bordas */}
        <p className="w-full text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed px-1">
          Pare de ter dúvidas na hora de cobrar. A Calculadora Artrelados calcula automaticamente o custo de linhas, entretelas, tempo de máquina, energia e mão de obra — tudo em segundos, com base nos dados que você inserir.
        </p>

        {/* Chamada Clicável */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-black text-amber-950 group-hover:text-amber-800">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shadow-xs border border-amber-300 group-hover:scale-110 transition-transform shrink-0">
            <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </div>
          <span className="underline decoration-amber-500 decoration-2 underline-offset-4 group-hover:decoration-slate-950 transition-colors">
            Conheça a Calculadora Oficial Artrelados e transforme a gestão do seu ateliê
          </span>
          <ArrowRight className="w-4 h-4 text-amber-800 group-hover:translate-x-1 transition-transform inline shrink-0" />
        </div>
      </div>
    </a>
  );
};
