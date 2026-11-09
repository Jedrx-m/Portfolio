import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Cpu, Activity, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../portfolio.config';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-cyan-950/40 text-slate-200 z-10">
        
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Preview Image */}
        <div className="relative h-72 sm:h-96 w-full bg-slate-950 overflow-hidden">
          <img
            src={project.previewMedia.image}
            alt={project.previewMedia.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          {project.previewMedia.caption && (
            <div className="absolute bottom-3 left-6 right-6 text-xs font-mono text-slate-400 bg-slate-950/70 backdrop-blur-sm px-3 py-1.5 rounded border border-slate-800/80">
              {project.previewMedia.caption}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {project.keyMetrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              {project.keyMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xs text-slate-400 font-mono">{metric.label}</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-emerald-400">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Architectural Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-cyan-400 tracking-wide uppercase font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Architectural Blueprint & Logic</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Deep Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-400 tracking-wide uppercase font-mono flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Core Functional Scope</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technology Stack — Clean unboxed list */}
          <div className="space-y-2">
            <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">
              Engineering Stack
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300 font-mono">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="inline-flex items-center gap-2">
                  <span className="text-cyan-400">›</span> {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-slate-200 font-mono transition-colors"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
