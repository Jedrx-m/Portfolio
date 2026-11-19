import React from 'react';
import { useModalDialog } from './useModalDialog';
import { X, FileDown, Printer } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { resume, personal } = portfolioConfig;

  const dialogRef = useModalDialog(isOpen);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="resume-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className="portfolio-dialog"
    >
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92dvh] flex flex-col bg-[#0c0c0e] border border-white/20 text-[#eeedea] z-10 shadow-2xl overflow-hidden">
        
        {/* Sticky Toolbar */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 px-4 sm:px-6 py-4 bg-[#0c0c0e] border-b border-white/10 shrink-0">
          <div>
            <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest block">
              OFFICIAL ARCHIVE DOCUMENT
            </span>
            <div id="resume-title" className="break-all font-syne font-bold text-sm sm:text-base text-[#eeedea]">
              {resume.fileName}
            </div>
          </div>

          <div className="contents sm:flex sm:flex-wrap sm:justify-end sm:items-center sm:gap-3">
            <a
              href={resume.pdfUrl}
              download={resume.fileName}
              className="col-span-2 row-start-2 sm:row-auto sm:col-auto inline-flex items-center justify-center gap-2 min-h-11 px-4 py-2 font-mono font-bold text-xs uppercase tracking-wider text-[#0c0c0e] bg-[#00ffaa] hover:bg-[#00ffaa]/90 transition-colors cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="col-start-2 row-start-1 shrink-0 min-w-11 min-h-11 flex items-center justify-center text-[#eeedea]/75 hover:text-[#eeedea] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="min-h-0 overflow-y-auto p-4 sm:p-10 space-y-8 font-sans">
          
          {/* Header */}
          <div className="pb-6 border-b border-white/10 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h1 className="font-syne font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-[#eeedea]">
                {personal.name}
              </h1>
              <span className="font-mono text-xs text-[#00ffaa]">
                {personal.title}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-[#eeedea]/60 pt-1">
              <span>{personal.location}</span>
              <span>·</span>
              <span>{personal.email}</span>
              <span>·</span>
              <span>{personal.phone}</span>
              <span>·</span>
              <a href={personal.social.github} target="_blank" rel="noreferrer" className="text-[#eeedea] hover:text-[#00ffaa]">
                GitHub
              </a>
              <span>·</span>
              <a href={personal.social.linkedin} target="_blank" rel="noreferrer" className="text-[#eeedea] hover:text-[#00ffaa]">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest block">
              PROFESSIONAL SUMMARY
            </span>
            <p className="text-sm text-[#eeedea]/80 leading-relaxed">
              {resume.professionalSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest block">
              EDUCATION
            </span>
            {resume.education.map((edu, idx) => (
              <div key={idx} className="p-4 border border-white/10 bg-[#0c0c0e]/70 space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 font-syne font-bold text-base text-[#eeedea]">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-xs text-[#00ffaa] font-normal">{edu.graduationYear}</span>
                </div>
                <div className="font-mono text-xs text-[#eeedea]/75">
                  {edu.school} — {edu.location}
                </div>
                <div className="text-xs text-[#eeedea]/70 pt-1">
                  <strong>Coursework:</strong> {edu.coursework}
                </div>
              </div>
            ))}
          </div>

          {/* Cisco Training */}
          {resume.technicalTraining.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest block">
                TECHNICAL NETWORKING TRAINING
              </span>
              {resume.technicalTraining.map((training) => (
                <div key={training.title + training.period} className="p-4 border border-white/10 bg-[#0c0c0e]/70 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 font-syne font-bold text-base text-[#eeedea]">
                    <span>{training.title}</span>
                    <span className="font-mono text-xs text-[#00ffaa] font-normal">{training.period}</span>
                  </div>
                  <div className="font-mono text-xs text-[#eeedea]/75">
                    {training.institution}
                  </div>
                  <ul className="space-y-1 font-mono text-xs text-[#eeedea]/70 pt-1">
                    {training.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00ffaa]">›</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest block">
              TECHNICAL COMPETENCIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resume.skillCategories.map((cat, idx) => (
                <div key={idx} className="p-4 border border-white/10 bg-[#0c0c0e]/70 space-y-1">
                  <div className="font-syne font-bold text-sm text-[#eeedea]">{cat.name}</div>
                  <div className="font-mono text-xs text-[#eeedea]/60">{cat.skills.join(' · ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          {resume.experience.length > 0 && (
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest block">
                EXPERIENCE
              </span>
              {resume.experience.map((experience) => (
                <div key={experience.role + experience.company + experience.period} className="p-4 border border-white/10 bg-[#0c0c0e]/70 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 font-syne font-bold text-base text-[#eeedea]">
                    <span>{experience.role} @ {experience.company}</span>
                    <span className="font-mono text-xs text-[#eeedea]/75 font-normal">{experience.period}</span>
                  </div>
                  <div className="font-mono text-xs text-[#eeedea]/75">
                    {experience.location}
                  </div>
                  <ul className="space-y-1 font-mono text-xs text-[#eeedea]/70 pt-2">
                    {experience.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00ffaa]">›</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Certifications & Organizations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest block">
                CERTIFICATIONS
              </span>
              <div className="space-y-2">
                {resume.certifications.map((c, i) => (
                  <div key={i} className="p-2.5 border border-white/5 bg-white/[0.01] text-xs font-mono">
                    <div className="text-[#eeedea] font-semibold">{c.title}</div>
                    <div className="text-[#eeedea]/70 text-xs">{c.issuer} · {c.date}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#00ffaa] uppercase tracking-widest block">
                ORGANIZATIONS
              </span>
              <div className="space-y-2">
                {resume.organizations.map((o, i) => (
                  <div key={i} className="p-2.5 border border-white/5 bg-white/[0.01] text-xs font-mono">
                    <div className="text-[#eeedea] font-semibold">{o.name}</div>
                    <div className="text-[#00ffaa] text-xs">{o.role} · {o.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="shrink-0 px-4 sm:px-6 py-3 bg-[#0c0c0e] border-t border-white/10 flex flex-wrap gap-3 items-center justify-between font-mono text-xs text-[#eeedea]/70">
          <span>Updated {resume.lastUpdated}</span>
          <a
            href={resume.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#00ffaa] hover:underline font-bold"
          >
            <Printer className="w-4 h-4" aria-hidden="true" />
            Open PDF to print
          </a>
        </div>

      </div>
    </dialog>
  );
};
