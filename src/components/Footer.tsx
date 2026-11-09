import React from 'react';
import { FileDown, ArrowUp } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

interface FooterProps {
  onResumeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onResumeClick }) => {
  const { personal, resume } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-bold text-slate-200">
              {personal.name} — {personal.title}
            </div>
            <div className="text-slate-400 text-[11px] font-mono">
              Engineered with React 19, Tailwind CSS v4 & Motion · Single-file data architecture
            </div>
          </div>

          {/* Quick links & Resume */}
          <div className="flex items-center gap-6 font-medium">
            <a href="#projects" className="hover:text-cyan-300 transition-colors">
              Projects
            </a>
            <a href="#architecture" className="hover:text-cyan-300 transition-colors">
              Architecture
            </a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">
              Experience
            </a>
            <button
              onClick={onResumeClick}
              className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
