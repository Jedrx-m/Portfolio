import React from 'react';
import { GraduationCap, Network, Briefcase, FileDown, ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

interface ExperienceTimelineProps {
  onResumeClick: () => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onResumeClick }) => {
  const { resume } = portfolioConfig;

  return (
    <section id="experience" className="py-24 border-t border-slate-800/80 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Background & Pathway</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Education, Training & Experience
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Academic foundation at Mapúa University paired with hands-on Cisco CCNA network engineering and retail operations.
            </p>
          </div>

          <button
            onClick={onResumeClick}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 rounded-xl bg-cyan-950/20 backdrop-blur-md transition-colors shrink-0 cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Open Complete Resume Document</span>
          </button>
        </div>

        {/* 3 Clear Sections: Education, Technical Training, Work Experience */}
        <div className="space-y-8">
          
          {/* 1. Education */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Degree</span>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-500/30">
                {resume.education[0].graduationYear}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-100">
                {resume.education[0].degree}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                {resume.education[0].school} · {resume.education[0].location}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-slate-200">Key Coursework:</strong> {resume.education[0].coursework}
            </p>
          </div>

          {/* 2. Cisco CCNA Technical Training */}
          {resume.technicalTraining[0] && (
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Network className="w-4 h-4 text-cyan-400" />
                  <span>Technical Network Training</span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {resume.technicalTraining[0].period}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-100">
                  {resume.technicalTraining[0].title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {resume.technicalTraining[0].institution}
                </p>
              </div>

              <ul className="space-y-2 pt-1">
                {resume.technicalTraining[0].details.map((detail, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono mt-0.5">›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
                {resume.technicalTraining[0].skills.map((s, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 3. Work Experience */}
          {resume.experience[0] && (
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span>Professional Operations</span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {resume.experience[0].period}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-100">
                  {resume.experience[0].role} <span className="text-cyan-400 font-normal">@ {resume.experience[0].company}</span>
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {resume.experience[0].location}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {resume.experience[0].summary}
              </p>

              <ul className="space-y-2 pt-1">
                {resume.experience[0].achievements.map((ach, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <span className="text-cyan-400 font-mono mt-0.5">›</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
