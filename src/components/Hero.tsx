import React from 'react';
import { ArrowDown, FileDown } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const { personal, stats } = portfolioConfig;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  };

  return (
    <section className="hero pt-6 pb-16 max-w-4xl">
      {/* Badge from Variation 2 */}
      <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-white/10 rounded-sm font-mono text-[11px] bg-white/[0.02] text-[#eeedea] mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00ffaa] shadow-[0_0_8px_rgba(0,255,170,0.8)]" />
        <span className="tracking-wider uppercase">
          {personal.school} · {personal.title}
        </span>
      </div>

      {/* Giant Heading from Variation 2 */}
      <h1 className="font-syne font-extrabold text-[clamp(2rem,5.5vw,6rem)] leading-[0.88] tracking-[-0.04em] text-[#eeedea] uppercase mb-8">
        BUILDING<br />SECURE SYSTEMS.
      </h1>

      {/* Lead Paragraph */}
      <p className="text-base sm:text-lg text-[#eeedea]/60 max-w-[650px] leading-relaxed mb-8">
        {personal.bio}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() => scrollTo('projects')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ffaa] hover:bg-[#00ffaa]/90 text-[#0c0c0e] font-mono font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer active:scale-95"
        >
          <span>View Works</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => scrollTo('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/[0.04] text-[#eeedea] border border-white/10 hover:border-white/25 font-mono font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer active:scale-95"
        >
          <span>Connect</span>
        </button>

        <button
          onClick={onResumeClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] hover:bg-white/[0.06] text-[#00ffaa] border border-[#00ffaa]/30 hover:border-[#00ffaa] font-mono font-bold text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer active:scale-95"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>Resume PDF</span>
        </button>
      </div>

      {/* Technical Metadata Matrix */}
      <div className="grid grid-cols-2 min-[1200px]:grid-cols-4 gap-4 pt-14 mt-12 border-t border-white/10">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <span className="font-mono text-xs uppercase text-[#eeedea]/70 tracking-wider block">
              {stat.label}
            </span>
            <div className="font-syne font-extrabold text-xl text-[#eeedea]">
              {stat.value}
            </div>
            <p className="font-mono text-xs text-[#eeedea]/75 leading-tight">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
