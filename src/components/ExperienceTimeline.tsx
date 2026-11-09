import React from 'react';
import { portfolioConfig } from '../portfolio.config';

interface ExperienceTimelineProps {
  onResumeClick: () => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onResumeClick }) => {
  const { resume } = portfolioConfig;

  return (
    <section id="experience" className="pt-16 pb-20 border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#eeedea]/60 block mb-1">
            FIGURE 03: EDUCATION & BACKGROUND
          </span>
          <h2 className="font-syne font-extrabold text-2xl text-[#eeedea] uppercase tracking-tight">
            Academic & Practical History
          </h2>
        </div>

        <button
          onClick={onResumeClick}
          className="font-mono text-[11px] uppercase tracking-wider text-[#00ffaa] hover:underline cursor-pointer"
        >
          View Full Document ›
        </button>
      </div>

      <div className="space-y-6">
        {/* Education Card */}
        <div className="p-8 border border-white/10 bg-white/[0.015] hover:border-white/25 transition-all space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest">
              ACADEMIC DEGREE
            </span>
            <span className="font-mono text-[11px] text-[#eeedea]/60">
              {resume.education[0].graduationYear}
            </span>
          </div>

          <h3 className="font-syne font-bold text-xl text-[#eeedea]">
            {resume.education[0].degree}
          </h3>
          <p className="font-mono text-xs text-[#eeedea]/50">
            {resume.education[0].school} — {resume.education[0].location}
          </p>

          <p className="text-xs sm:text-sm text-[#eeedea]/70 leading-relaxed pt-2">
            <span className="text-[#eeedea]/40 font-mono uppercase text-[10px] block mb-1">Curriculum Highlights:</span>
            {resume.education[0].coursework}
          </p>
        </div>

        {/* Cisco Training Card */}
        {resume.technicalTraining[0] && (
          <div className="p-8 border border-white/10 bg-white/[0.015] hover:border-white/25 transition-all space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest">
                TECHNICAL NETWORKING TRAINING
              </span>
              <span className="font-mono text-[11px] text-[#eeedea]/60">
                {resume.technicalTraining[0].period}
              </span>
            </div>

            <h3 className="font-syne font-bold text-xl text-[#eeedea]">
              {resume.technicalTraining[0].title}
            </h3>
            <p className="font-mono text-xs text-[#eeedea]/50">
              {resume.technicalTraining[0].institution}
            </p>

            <ul className="space-y-1.5 pt-2 font-mono text-xs text-[#eeedea]/70">
              {resume.technicalTraining[0].details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00ffaa]">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Work Experience */}
        {resume.experience[0] && (
          <div className="p-8 border border-white/10 bg-white/[0.015] hover:border-white/25 transition-all space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest">
                OPERATIONAL EXPERIENCE
              </span>
              <span className="font-mono text-[11px] text-[#eeedea]/60">
                {resume.experience[0].period}
              </span>
            </div>

            <h3 className="font-syne font-bold text-xl text-[#eeedea]">
              {resume.experience[0].role} <span className="font-normal text-[#00ffaa]">@ {resume.experience[0].company}</span>
            </h3>
            <p className="font-mono text-xs text-[#eeedea]/50">
              {resume.experience[0].location}
            </p>

            <p className="text-xs sm:text-sm text-[#eeedea]/70 leading-relaxed pt-2">
              {resume.experience[0].summary}
            </p>

            <ul className="space-y-1.5 pt-1 font-mono text-xs text-[#eeedea]/70">
              {resume.experience[0].achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00ffaa]">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
