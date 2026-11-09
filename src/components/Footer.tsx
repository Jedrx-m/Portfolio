import React from 'react';
import { portfolioConfig } from '../portfolio.config';

export const Footer: React.FC = () => {
  const { personal } = portfolioConfig;

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
      <div className="stack-info space-y-1">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#eeedea]/60 block">
          ARCHIVE VERSION
        </span>
        <div className="font-mono text-xs text-[#eeedea]/40 tracking-wider">
          V4.3.5 — REACT 19 / TAILWIND 4
        </div>
      </div>

      <div className="email-block space-y-1 sm:text-right">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#eeedea]/60 block">
          GET IN TOUCH
        </span>
        <a
          href={`mailto:${personal.email}`}
          className="font-syne font-extrabold text-xl sm:text-2xl text-[#eeedea] hover:text-[#00ffaa] transition-colors block uppercase tracking-tight"
        >
          {personal.email}
        </a>
      </div>
    </footer>
  );
};
