import React, { useState } from 'react';
import { Network, Code2, Database, Shield, Award, Users, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export const TechnicalSkillsSection: React.FC = () => {
  const { resume } = portfolioConfig;
  const [activeTab, setActiveTab] = useState<'skills' | 'certifications' | 'organizations'>('skills');

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Technical Domain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills, Credentials & Community
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Practical competencies in modern web development, Cisco enterprise networking, and verified certifications.
            </p>
          </div>

          {/* Segmented Control */}
          <div className="flex items-center p-1 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Core Skills
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('organizations')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'organizations'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Affiliations
            </button>
          </div>
        </div>

        {/* Tab 1: Core Skills */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {resume.skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    {idx === 0 && <Code2 className="w-4 h-4" />}
                    {idx === 1 && <Network className="w-4 h-4" />}
                    {idx === 2 && <Database className="w-4 h-4" />}
                    {idx === 3 && <Shield className="w-4 h-4" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in duration-200">
            {resume.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>{cert.date}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-100 leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-400">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Organizations */}
        {activeTab === 'organizations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {resume.organizations.map((org, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{org.role}</span>
                  </span>
                  <span>{org.period}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100">
                  {org.name}
                </h3>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
