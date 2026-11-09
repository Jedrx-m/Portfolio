import React, { useEffect } from 'react';
import { X, FileDown, Printer, Mail, MapPin, ExternalLink, Award, GraduationCap, Briefcase, Network, Users } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { resume, personal } = portfolioConfig;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-cyan-950/50 text-slate-200 z-10 overflow-hidden">
        
        {/* Sticky Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
              <FileDown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <span>{resume.fileName}</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                  Official PDF
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {personal.school}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print resume document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Direct download linking to the user's uploaded PDF */}
            <a
              href={resume.pdfUrl}
              download={resume.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-sm shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Formatted Resume Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950/60">
          
          {/* Document Header */}
          <div className="pb-6 border-b border-slate-800/80 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-100">
                {personal.name}
              </h1>
              <div className="text-sm font-mono text-cyan-400">
                {personal.title}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personal.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personal.email}
              </span>
              <span aria-hidden="true">·</span>
              <span>{personal.phone}</span>
              <span aria-hidden="true">·</span>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                github.com/Jedrx-m
                <ExternalLink className="w-3 h-3" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                linkedin.com/in/jedrickmariano
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {resume.professionalSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Education</span>
            </h2>
            {resume.education.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="text-base font-bold text-slate-100">{edu.degree}</div>
                  <div className="text-xs font-mono text-cyan-400">{edu.graduationYear}</div>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {edu.school} · {edu.location}
                </div>
                <div className="text-xs text-slate-300 leading-relaxed pt-1">
                  <strong className="text-slate-400 font-normal">Relevant Coursework:</strong> {edu.coursework}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Training — Cisco CCNA */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Network className="w-4 h-4 text-cyan-400" />
              <span>Technical Training & Networking</span>
            </h2>
            {resume.technicalTraining.map((training, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="text-sm font-bold text-slate-100">{training.title}</div>
                  <div className="text-xs font-mono text-cyan-400">{training.period}</div>
                </div>
                <div className="text-xs text-slate-400 font-mono">{training.institution}</div>
                <ul className="space-y-1.5 pt-1">
                  {training.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">›</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
              Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resume.skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="text-xs font-semibold text-slate-200">
                    {cat.name}
                  </div>
                  <div className="text-xs text-slate-400 font-mono leading-relaxed">
                    {cat.skills.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Work Experience</span>
            </h2>
            {resume.experience.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="text-sm font-bold text-slate-100">
                    {exp.role} <span className="text-cyan-400 font-normal">@ {exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400">{exp.period} · {exp.location}</div>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {exp.achievements.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 font-mono">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Organizations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Certifications</span>
              </h2>
              <div className="space-y-2">
                {resume.certifications.map((cert, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 space-y-0.5">
                    <div className="text-xs font-semibold text-slate-200">{cert.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{cert.issuer} · {cert.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizations */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Organizations</span>
              </h2>
              <div className="space-y-2">
                {resume.organizations.map((org, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 space-y-0.5">
                    <div className="text-xs font-semibold text-slate-200">{org.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{org.role} · {org.period}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Official document: <span className="text-cyan-400">{resume.fileName}</span></span>
          <a
            href={resume.pdfUrl}
            download={resume.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 font-semibold cursor-pointer"
          >
            <span>Download PDF</span>
            <FileDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
