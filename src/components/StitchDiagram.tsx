import React from "react";

interface StitchDiagramProps {
  type?: "satin" | "tatami" | "running" | "applique" | "cutwork" | "cross_stitch" | "3d_puff" | "fringe" | "fill";
  className?: string;
}

export const StitchDiagram: React.FC<StitchDiagramProps> = ({ type = "satin", className = "" }) => {
  switch (type) {
    case "satin":
      return (
        <div className={`p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center ${className}`}>
          <svg className="w-full h-14 text-slate-800" viewBox="0 0 200 60" fill="none" stroke="currentColor">
            {/* Satin Stitch Simulation */}
            {Array.from({ length: 28 }).map((_, i) => (
              <line
                key={i}
                x1={10 + i * 6.5}
                y1={i % 2 === 0 ? 10 : 50}
                x2={10 + i * 6.5 + 3}
                y2={i % 2 === 0 ? 50 : 10}
                strokeWidth="2.5"
                strokeLinecap="round"
                className="opacity-90"
              />
            ))}
            <path d="M 5 10 L 195 10" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 5 50 L 195 50" stroke="#d97706" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          </svg>
          <span className="text-[11px] font-bold text-slate-700 mt-1 uppercase tracking-wider">Esquema: Ponto Cheio (Satin)</span>
        </div>
      );

    case "tatami":
      return (
        <div className={`p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center ${className}`}>
          <svg className="w-full h-14 text-slate-800" viewBox="0 0 200 60" fill="none" stroke="currentColor">
            {/* Tatami Fill Pattern */}
            {Array.from({ length: 5 }).map((_, row) => (
              <g key={row}>
                {Array.from({ length: 12 }).map((_, col) => (
                  <line
                    key={col}
                    x1={10 + col * 15 + (row % 3) * 4}
                    y1={10 + row * 10}
                    x2={22 + col * 15 + (row % 3) * 4}
                    y2={10 + row * 10}
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-80"
                  />
                ))}
              </g>
            ))}
          </svg>
          <span className="text-[11px] font-bold text-slate-700 mt-1 uppercase tracking-wider">Esquema: Preenchimento Tatami</span>
        </div>
      );

    case "running":
      return (
        <div className={`p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center ${className}`}>
          <svg className="w-full h-14 text-slate-800" viewBox="0 0 200 60" fill="none" stroke="currentColor">
            <path
              d="M 10 30 L 35 30 M 45 30 L 70 30 M 80 30 L 105 30 M 115 30 L 140 30 M 150 30 L 175 30 M 185 30 L 195 30"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Needle dots */}
            {[10, 35, 45, 70, 80, 105, 115, 140, 150, 175, 185].map((x, i) => (
              <circle key={i} cx={x} cy={30} r="2.5" fill="#d97706" />
            ))}
          </svg>
          <span className="text-[11px] font-bold text-slate-700 mt-1 uppercase tracking-wider">Esquema: Ponto Corrido (Running)</span>
        </div>
      );

    case "3d_puff":
      return (
        <div className={`p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center ${className}`}>
          <svg className="w-full h-14 text-slate-800" viewBox="0 0 200 60" fill="none">
            {/* EVA foam base */}
            <rect x="20" y="22" width="160" height="16" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeDasharray="2 2" />
            <text x="100" y="33" fill="#334155" fontSize="9" textAnchor="middle" fontWeight="bold">ESPUMA EVA 3MM</text>
            {/* Dense Satin stitches wrapping around EVA */}
            {Array.from({ length: 22 }).map((_, i) => (
              <path
                key={i}
                d={`M ${25 + i * 7} 10 C ${28 + i * 7} 5, ${28 + i * 7} 55, ${25 + i * 7} 50`}
                stroke="#101726"
                strokeWidth="2.5"
                fill="none"
              />
            ))}
          </svg>
          <span className="text-[11px] font-bold text-slate-700 mt-1 uppercase tracking-wider">Esquema: Bordado 3D (Puff EVA)</span>
        </div>
      );

    default:
      return (
        <div className={`p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center ${className}`}>
          <svg className="w-full h-14 text-slate-800" viewBox="0 0 200 60" fill="none" stroke="currentColor">
            <path d="M 10 30 Q 50 10, 100 30 T 190 30" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
            <circle cx="100" cy="30" r="4" fill="#d97706" />
          </svg>
          <span className="text-[11px] font-bold text-slate-700 mt-1 uppercase tracking-wider">Diagrama Técnico de Bordado</span>
        </div>
      );
  }
};

