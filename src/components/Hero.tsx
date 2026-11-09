import React, { useState } from 'react';
import { FileDown, ArrowDown, ExternalLink, Copy, Check, Shield, Code2, Globe } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const { personal, stats } = portfolioConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
      
      {/* Central Content Container with ample negative space */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Subtle Top Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-cyan-500/30 backdrop-blur-md text-xs font-mono text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{personal.school}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">{personal.degree}</span>
        </div>

        {/* Iconic Futuristic Name Display */}
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase font-sans">
            <span className="bg-gradient-to-b from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
              {personal.name}
            </span>
          </h1>

          <p className="text-base sm:text-xl font-mono text-cyan-300 tracking-wider">
            {personal.subtitle}
          </p>
        </div>

        {/* Clean, readable bio without noise */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {personal.bio}
        </p>

        {/* Primary Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-xl shadow-lg shadow-cyan-950/60 hover:shadow-cyan-500/25 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onResumeClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400/70 rounded-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume PDF</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-slate-400 hover:text-slate-200 bg-slate-950/50 hover:bg-slate-900/70 border border-slate-800 rounded-xl transition-colors cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Email Copied' : personal.email}</span>
          </button>
        </div>

        {/* Ambient Stat Cards (Airy & Unboxed) */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-md space-y-1 text-center"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
