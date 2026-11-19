import React from 'react';
import { portfolioConfig } from '../portfolio.config';

export const TechnicalSkillsSection: React.FC = () => {
  const { resume } = portfolioConfig;

  return (
    <section id="skills" className="pt-16 pb-20 border-t border-white/10">
      <div className="mb-6">
        <h2 className="font-syne font-extrabold text-2xl text-[#eeedea] uppercase tracking-tight">
          Skills & credentials
        </h2>
      </div>

      <div className="grid grid-cols-1 min-[1200px]:grid-cols-2 gap-6">
        {/* Core Skill Categories */}
        {resume.skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-8 border border-white/10 hover:border-[#00ffaa]/60 bg-[#0c0c0e]/70 transition-all space-y-4"
          >
            <h3 className="font-syne font-bold text-lg text-[#eeedea]">
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 font-mono text-[11px] text-[#eeedea]/80 bg-white/[0.03] border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Organizations Row */}
      <div className="grid grid-cols-1 min-[1200px]:grid-cols-2 gap-6 mt-6">
        {/* Certifications */}
        <div className="p-8 border border-white/10 bg-[#0c0c0e]/70 space-y-4">
          <h3 className="font-syne font-bold text-lg text-[#eeedea]">
            Selected credentials
          </h3>
          <div className="space-y-3 pt-2">
            {resume.certifications.map((cert, idx) => (
              <div key={idx} className="pb-3 border-b border-white/5 last:border-0 last:pb-0">
                <div className="text-xs font-semibold text-[#eeedea]">{cert.title}</div>
                <div className="font-mono text-xs text-[#eeedea]/75 mt-0.5">
                  {cert.issuer} · {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="p-8 border border-white/10 bg-[#0c0c0e]/70 space-y-4">
          <h3 className="font-syne font-bold text-lg text-[#eeedea]">
            Tech Communities & Groups
          </h3>
          <div className="space-y-4 pt-2">
            {resume.organizations.map((org, idx) => (
              <div key={idx} className="p-4 bg-white/[0.02] border border-white/5 space-y-1">
                <div className="font-syne font-bold text-sm text-[#eeedea]">{org.name}</div>
                <div className="font-mono text-xs text-[#00ffaa]">{org.role} · {org.period}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
