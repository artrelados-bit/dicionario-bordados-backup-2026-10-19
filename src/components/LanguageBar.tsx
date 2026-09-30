import React from "react";
import { SupportedLanguage, LANGUAGE_OPTIONS } from "../utils/i18n";

interface LanguageBarProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
}

export const LanguageBar: React.FC<LanguageBarProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <nav
          aria-label="Seleção de idiomas"
          className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 text-xs sm:text-sm font-medium text-slate-600 select-none"
        >
          {LANGUAGE_OPTIONS.map((lang, index) => {
            const isActive = currentLanguage === lang.code;
            return (
              <React.Fragment key={lang.code}>
                <button
                  type="button"
                  onClick={() => onLanguageChange(lang.code)}
                  className={`inline-flex items-center space-x-1.5 transition-all cursor-pointer py-0.5 px-1 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 ${
                    isActive
                      ? "font-extrabold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4"
                      : "text-slate-600 hover:text-slate-900 hover:underline hover:decoration-slate-400 underline-offset-4"
                  }`}
                  title={lang.label}
                >
                  <span className="text-sm sm:text-base leading-none" role="img" aria-label={lang.label}>
                    {lang.flag}
                  </span>
                  <span>{lang.label}</span>
                </button>
                {index < LANGUAGE_OPTIONS.length - 1 && (
                  <span className="text-slate-300 font-normal select-none" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
