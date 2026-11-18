import React, { useEffect } from 'react';
import { X, FileDown, Printer } from 'lucide-react';
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0c0c0e]/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0c0c0e] border border-white/20 text-[#eeedea] z-10 shadow-2xl overflow-hidden">
        
        {/* Sticky Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0c0c0e] border-b border-white/10 shrink-0">
          <div>
            <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
              OFFICIAL ARCHIVE DOCUMENT
            </span>
            <div className="font-syne font-bold text-base text-[#eeedea]">
              {resume.fileName}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-[#eeedea]/60 hover:text-[#eeedea] border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={resume.pdfUrl}
              download={resume.fileName}
              className="inline-flex items-center gap-2 px-4 py-2 font-mono font-bold text-xs uppercase tracking-wider text-[#0c0c0e] bg-[#00ffaa] hover:bg-[#00ffaa]/90 transition-colors cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#eeedea]/50 hover:text-[#eeedea] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 font-sans">
          
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
                github.com/Jedrx-m
              </a>
              <span>·</span>
              <a href={personal.social.linkedin} target="_blank" rel="noreferrer" className="text-[#eeedea] hover:text-[#00ffaa]">
                linkedin.com/in/jedrickmariano
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
              PROFESSIONAL SUMMARY
            </span>
            <p className="text-sm text-[#eeedea]/80 leading-relaxed">
              {resume.professionalSummary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
              EDUCATION
            </span>
            {resume.education.map((edu, idx) => (
              <div key={idx} className="p-4 border border-white/10 bg-white/[0.015] space-y-1">
                <div className="flex justify-between items-baseline font-syne font-bold text-base text-[#eeedea]">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-xs text-[#00ffaa] font-normal">{edu.graduationYear}</span>
                </div>
                <div className="font-mono text-xs text-[#eeedea]/50">
                  {edu.school} — {edu.location}
                </div>
                <div className="text-xs text-[#eeedea]/70 pt-1">
                  <strong>Coursework:</strong> {edu.coursework}
                </div>
              </div>
            ))}
          </div>

          {/* Cisco Training */}
          {resume.technicalTraining[0] && (
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
                TECHNICAL NETWORKING TRAINING
              </span>
              <div className="p-4 border border-white/10 bg-white/[0.015] space-y-2">
                <div className="flex justify-between items-baseline font-syne font-bold text-base text-[#eeedea]">
                  <span>{resume.technicalTraining[0].title}</span>
                  <span className="font-mono text-xs text-[#00ffaa] font-normal">{resume.technicalTraining[0].period}</span>
                </div>
                <div className="font-mono text-xs text-[#eeedea]/50">
                  {resume.technicalTraining[0].institution}
                </div>
                <ul className="space-y-1 font-mono text-xs text-[#eeedea]/70 pt-1">
                  {resume.technicalTraining[0].details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00ffaa]">›</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Skills */}
          <div className="space-y-3">
            <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
              TECHNICAL COMPETENCIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resume.skillCategories.map((cat, idx) => (
                <div key={idx} className="p-4 border border-white/10 bg-white/[0.015] space-y-1">
                  <div className="font-syne font-bold text-sm text-[#eeedea]">{cat.name}</div>
                  <div className="font-mono text-xs text-[#eeedea]/60">{cat.skills.join(' · ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          {resume.experience[0] && (
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
                EXPERIENCE
              </span>
              <div className="p-4 border border-white/10 bg-white/[0.015] space-y-1">
                <div className="flex justify-between items-baseline font-syne font-bold text-base text-[#eeedea]">
                  <span>{resume.experience[0].role} @ {resume.experience[0].company}</span>
                  <span className="font-mono text-xs text-[#eeedea]/50 font-normal">{resume.experience[0].period}</span>
                </div>
                <div className="font-mono text-xs text-[#eeedea]/50">
                  {resume.experience[0].location}
                </div>
                <ul className="space-y-1 font-mono text-xs text-[#eeedea]/70 pt-2">
                  {resume.experience[0].achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00ffaa]">›</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Certifications & Organizations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
                CERTIFICATIONS
              </span>
              <div className="space-y-2">
                {resume.certifications.map((c, i) => (
                  <div key={i} className="p-2.5 border border-white/5 bg-white/[0.01] text-xs font-mono">
                    <div className="text-[#eeedea] font-semibold">{c.title}</div>
                    <div className="text-[#eeedea]/40 text-[10px]">{c.issuer} · {c.date}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
                ORGANIZATIONS
              </span>
              <div className="space-y-2">
                {resume.organizations.map((o, i) => (
                  <div key={i} className="p-2.5 border border-white/5 bg-white/[0.01] text-xs font-mono">
                    <div className="text-[#eeedea] font-semibold">{o.name}</div>
                    <div className="text-[#00ffaa] text-[10px]">{o.role} · {o.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#0c0c0e] border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#eeedea]/40">
          <span>SOURCE: /assets/aistudio/Mariano__Jedrick_Resume.docx_dbfe9f56.pdf</span>
          <a
            href={resume.pdfUrl}
            download={resume.fileName}
            className="text-[#00ffaa] hover:underline font-bold"
          >
            Download Verified PDF ›
          </a>
        </div>

      </div>
    </div>
  );
};
