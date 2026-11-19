import React from 'react';
import { portfolioConfig } from '../portfolio.config';

export const Footer: React.FC = () => {
  const { personal } = portfolioConfig;

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-white/10 flex sm:justify-end">
      <div className="email-block space-y-1 sm:text-right">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#eeedea]/60 block">
          GET IN TOUCH
        </span>
        <a
          href={`mailto:${personal.email}`}
          className="font-syne font-extrabold text-base sm:text-xl xl:text-2xl break-all text-[#eeedea] hover:text-[#00ffaa] transition-colors block uppercase tracking-tight"
        >
          {personal.email}
        </a>
      </div>
    </footer>
  );
};
