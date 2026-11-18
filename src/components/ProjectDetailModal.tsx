import React, { useEffect } from 'react';
import { X } from 'lucide-react';
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
        className="fixed inset-0 bg-[#0c0c0e]/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0c0c0e] border border-white/20 text-[#eeedea] z-10 shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c0c0e]/95 backdrop-blur-md border-b border-white/10">
          <div className="font-mono text-xs text-[#00ffaa]">
            {project.year} / {project.category.toUpperCase()}
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#eeedea]/60 hover:text-[#eeedea] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project media */}
        <video
          src={project.previewMedia.video}
          poster={project.previewMedia.image}
          controls
          playsInline
          preload="none"
          aria-label={`${project.title} video preview`}
          className="aspect-video w-full bg-black"
        />

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#eeedea]">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-[#eeedea]/70 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Metrics */}
          {project.keyMetrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-4 bg-white/[0.02] border border-white/10 font-mono">
              {project.keyMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[10px] text-[#eeedea]/50 uppercase">{metric.label}</div>
                  <div className="text-sm sm:text-base font-bold text-[#00ffaa]">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Architecture overview */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
              SYSTEM ARCHITECTURE
            </span>
            <p className="text-xs sm:text-sm text-[#eeedea]/80 leading-relaxed">
              {project.architectureOverview}
            </p>
          </div>

          {/* Functional scope */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#eeedea]/50 uppercase tracking-widest block">
              CORE FUNCTIONAL SCOPE
            </span>
            <p className="text-xs sm:text-sm text-[#eeedea]/60 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <span className="font-mono text-[10px] text-[#eeedea]/50 uppercase tracking-widest block">
              TECHNOLOGIES
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#eeedea]">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-white/[0.04] border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-[#00ffaa] hover:underline"
              >
                View on GitHub
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto font-mono text-xs text-[#eeedea]/40 hover:text-[#eeedea] transition-colors cursor-pointer"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
