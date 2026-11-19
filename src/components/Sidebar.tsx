import React, { useEffect, useRef, useState } from 'react';
import { FileDown, Menu, X } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

interface SidebarProps {
  activeSection: string;
  onResumeClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', dismiss);
    return () => window.removeEventListener('keydown', dismiss);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: '/ Projects', id: 'projects' },
    { label: '/ Skills', id: 'skills' },
    { label: '/ Background', id: 'experience' },
    { label: '/ Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <>
      <div className="lg:hidden sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-4 bg-[#0c0c0e]/95 backdrop-blur-md border-b border-white/10">
        <div>
          <span className="font-syne font-extrabold text-base tracking-tight text-[#eeedea]">
            {portfolioConfig.personal.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onResumeClick}
            className="min-h-11 px-3 py-1.5 text-[11px] font-mono font-semibold text-[#0c0c0e] bg-[#00ffaa] hover:bg-[#00ffaa]/90 rounded-xs transition-colors cursor-pointer active:scale-95"
          >
            Resume
          </button>
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-11 min-w-11 flex items-center justify-center text-[#eeedea] hover:text-[#00ffaa] transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 max-h-[70dvh] overflow-y-auto z-40 bg-[#0c0c0e]/98 backdrop-blur-2xl border-b border-white/10 p-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <nav id="mobile-navigation" aria-label="Main navigation" className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  aria-current={activeSection === link.id ? 'location' : undefined}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollTo(link.id);
                  }}
                  className={`py-1 text-left transition-colors cursor-pointer ${
                    activeSection === link.id ? 'text-[#00ffaa]' : 'text-[#eeedea]/60 hover:text-[#00ffaa]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  menuButtonRef.current?.focus();
                  onResumeClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold text-[#0c0c0e] bg-[#00ffaa] hover:bg-[#00ffaa]/90 rounded-xs cursor-pointer active:scale-95"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>
            </div>
          </div>
        )}

      </div>

      <aside className="hidden lg:flex fixed top-0 bottom-0 left-0 w-[280px] z-30 flex-col justify-between p-8 border-r border-white/10 bg-[#0c0c0e]/90 backdrop-blur-xl">
        {/* Top: Brand Block & Navigation */}
        <div className="brand-block">
          <h2 className="font-syne font-extrabold text-2xl leading-none text-[#eeedea] mb-6 tracking-tight">
            {portfolioConfig.personal.name}
          </h2>

          <nav aria-label="Main navigation" className="flex flex-col gap-3.5 pt-4 border-t border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  aria-current={activeSection === link.id ? 'location' : undefined}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left font-mono text-xs uppercase tracking-wider transition-colors hover:text-[#00ffaa] cursor-pointer ${
                    isActive ? 'text-[#00ffaa] font-medium' : 'text-[#eeedea]/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="bottom-nav pt-6 border-t border-white/10">
          <button
            onClick={onResumeClick}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-mono font-semibold uppercase tracking-wider text-[#eeedea] hover:text-[#0c0c0e] hover:bg-[#00ffaa] border border-white/20 hover:border-[#00ffaa] rounded-xs transition-all duration-200 cursor-pointer active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </button>
        </div>
      </aside>
    </>
  );
};
