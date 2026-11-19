import React from 'react';
import { useModalDialog } from './useModalDialog';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { ProjectItem } from '../portfolio.config';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const dialogRef = useModalDialog(Boolean(project));

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className="portfolio-dialog"
    >
      <div className="w-full max-w-3xl max-h-[90dvh] overflow-y-auto border border-white/20 bg-[#0c0c0e] shadow-2xl">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-white/15 bg-[#0c0c0e]/95 px-4 py-3 backdrop-blur-md sm:px-6">
          <div>
            <p className="mb-1 font-mono text-xs text-[#00ffaa]">{project.category} · {project.year}</p>
            <h2 id="project-title" className="font-syne text-xl font-extrabold sm:text-2xl">{project.title}</h2>
          </div>
          <button type="button" onClick={onClose} className="flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center text-[#eeedea]/80 hover:text-[#00ffaa]" aria-label="Close">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div className="space-y-6 p-4 sm:p-8">
          <p className="text-base leading-relaxed text-[#eeedea]/90">{project.tagline}</p>

          {(project.demoUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-2">
              {project.demoUrl && (
                <a href={project.demoUrl} className="project-link">
                  Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} className="project-link">
                  Source code <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          )}

          <section className="space-y-2">
            <h3 className="font-syne text-lg font-bold">What it does</h3>
            <p className="text-sm leading-relaxed text-[#eeedea]/85">{project.description}</p>
          </section>

          {project.keyMetrics.length > 0 && (
            <dl className="grid gap-4 border border-white/15 bg-white/[0.03] p-4 sm:grid-cols-3">
              {project.keyMetrics.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs text-[#eeedea]/75">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#00ffaa]">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          <section className="space-y-2">
            <h3 className="font-syne text-lg font-bold">How it works</h3>
            <p className="text-sm leading-relaxed text-[#eeedea]/85">{project.architectureOverview}</p>
            <ul className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              {project.technologies.map((technology) => (
                <li key={technology} className="border border-white/15 px-2 py-1">{technology}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-syne text-lg font-bold">Video walkthrough</h3>
            <video
              src={project.previewMedia.video}
              poster={project.previewMedia.image}
              controls
              playsInline
              preload="none"
              aria-label={`${project.title} video walkthrough`}
              className="aspect-video w-full bg-black"
            />
          </section>
        </div>
      </div>
    </dialog>
  );
};
