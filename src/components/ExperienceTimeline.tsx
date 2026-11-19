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
          <h2 className="font-syne font-extrabold text-2xl text-[#eeedea] uppercase tracking-tight">
            Education & experience
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
        {resume.education.map((education) => (
          <div key={education.degree + education.school + education.graduationYear} className="p-8 border border-white/10 bg-[#0c0c0e]/70 hover:border-white/25 transition-all space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest">
                ACADEMIC DEGREE
              </span>
              <span className="font-mono text-[11px] text-[#eeedea]/60">
                {education.graduationYear}
              </span>
            </div>

            <h3 className="font-syne font-bold text-xl text-[#eeedea]">
              {education.degree}
            </h3>
            <p className="font-mono text-xs text-[#eeedea]/75">
              {education.school} — {education.location}
            </p>

            <p className="text-xs sm:text-sm text-[#eeedea]/70 leading-relaxed pt-2">
              <span className="text-[#eeedea]/70 font-mono uppercase text-xs block mb-1">Curriculum Highlights:</span>
              {education.coursework}
            </p>
          </div>
        ))}

        {/* Cisco Training Card */}
        {resume.technicalTraining.map((training) => (
          <div key={training.title + training.period} className="p-8 border border-white/10 bg-[#0c0c0e]/70 hover:border-white/25 transition-all space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest">
                TECHNICAL NETWORKING TRAINING
              </span>
              <span className="font-mono text-[11px] text-[#eeedea]/60">
                {training.period}
              </span>
            </div>

            <h3 className="font-syne font-bold text-xl text-[#eeedea]">
              {training.title}
            </h3>
            <p className="font-mono text-xs text-[#eeedea]/75">
              {training.institution}
            </p>

            <ul className="space-y-1.5 pt-2 font-mono text-xs text-[#eeedea]/70">
              {training.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00ffaa]">›</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Work Experience */}
        {resume.experience.map((experience) => (
          <div key={experience.role + experience.company + experience.period} className="p-8 border border-white/10 bg-[#0c0c0e]/70 hover:border-white/25 transition-all space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest">
                OPERATIONAL EXPERIENCE
              </span>
              <span className="font-mono text-[11px] text-[#eeedea]/60">
                {experience.period}
              </span>
            </div>

            <h3 className="font-syne font-bold text-xl text-[#eeedea]">
              {experience.role} <span className="font-normal text-[#00ffaa]">@ {experience.company}</span>
            </h3>
            <p className="font-mono text-xs text-[#eeedea]/75">
              {experience.location}
            </p>

            <p className="text-xs sm:text-sm text-[#eeedea]/70 leading-relaxed pt-2">
              {experience.summary}
            </p>

            <ul className="space-y-1.5 pt-1 font-mono text-xs text-[#eeedea]/70">
              {experience.achievements.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00ffaa]">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
