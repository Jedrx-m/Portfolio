import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { ProjectItem } from '../portfolio.config';

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [previewProjectId, setPreviewProjectId] = useState<string | null>(null);

  const categories = [...new Set(projects.map((project) => project.category))];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All' || categories.length < 2) return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="pt-16 pb-20 border-t border-white/10">
      {/* Figure Header */}
      <div className="flex flex-col min-[1440px]:flex-row min-[1440px]:items-baseline justify-between gap-4 mb-8">
        <h2 className="font-syne font-extrabold text-2xl sm:text-3xl tracking-tight">
          Selected work
        </h2>

        {/* Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex max-w-full flex-wrap items-center gap-1.5 pb-1">
            {['All', ...categories].map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  aria-pressed={isActive}
                  onClick={() => {
                    setPreviewProjectId(null);
                    setActiveFilter(cat);
                  }}
                  className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-[#00ffaa] text-[#0c0c0e] font-bold'
                      : 'text-[#eeedea]/60 hover:text-[#eeedea] bg-white/[0.02] border border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 min-[1200px]:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            aria-labelledby={`card-${project.id}`}
            className="flex min-w-0 flex-col border border-white/15 bg-[#0c0c0e]/80 p-4 sm:p-6"
          >
            <div
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse' && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
                  setPreviewProjectId(project.id);
                }
              }}
              onPointerLeave={() => setPreviewProjectId(null)}
              className="group relative mb-5 aspect-video overflow-hidden border border-white/10 bg-black"
            >
              <div className="relative h-full w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105">
                <img
                  src={project.previewMedia.image}
                  alt={project.previewMedia.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                {previewProjectId === project.id && (
                  <video
                    src={project.previewMedia.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                    onPlaying={(event) => { event.currentTarget.dataset.playing = 'true'; }}
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity data-[playing=true]:opacity-100 motion-reduce:hidden"
                  />
                )}
              </div>
            </div>

            <p className="mb-2 font-mono text-xs text-[#eeedea]/75">{project.category} · {project.year}</p>
            <h3 id={`card-${project.id}`} className="mb-2 font-syne text-xl font-bold">{project.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#eeedea]/85">{project.tagline}</p>
            <p className="mb-5 font-mono text-xs leading-relaxed text-[#eeedea]/70">
              {project.technologies.slice(0, 3).join(' · ')}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-4">
              <button
                type="button"
                aria-haspopup="dialog"
                aria-label={`View case study: ${project.title}`}
                onClick={() => {
                  setPreviewProjectId(null);
                  onSelectProject(project);
                }}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 bg-[#00ffaa] px-3 py-2 text-sm font-semibold text-[#0c0c0e] hover:bg-[#00ffaa]/90"
              >
                View case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              {project.demoUrl && (
                <a href={project.demoUrl} aria-label={`Visit live site: ${project.title}`} className="project-link">
                  Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} aria-label={`View source code: ${project.title}`} className="project-link">
                  Source code <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
