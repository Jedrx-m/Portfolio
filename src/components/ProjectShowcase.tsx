import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { ProjectItem } from '../portfolio.config';

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  onHoverProject: (project: ProjectItem | null, e?: React.MouseEvent) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onHoverProject,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [...new Set(projects.map((project) => project.category))];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All' || categories.length < 2) return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="pt-16 pb-20 border-t border-white/10">
      {/* Figure Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#eeedea]/60 block mb-1">
            FIGURE 01: SELECTED WORKS
          </span>
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#eeedea] uppercase tracking-tight">
            Production & Engineering Projects
          </h2>
          <p className="text-xs font-mono text-[#eeedea]/50 mt-1">
            Select a project to visit its website.
          </p>
        </div>

        {/* Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {['All', ...categories].map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={(e) => onHoverProject(project, e)}
            onMouseMove={(e) => onHoverProject(project, e)}
            onMouseLeave={() => onHoverProject(null)}
            className="group relative p-6 sm:p-8 border border-white/10 hover:border-[#00ffaa] bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Media Preview inside card */}
              {project.previewMedia && (
                <div className="relative aspect-video w-full bg-black mb-5 overflow-hidden border border-white/10 group-hover:border-[#00ffaa]/50 transition-colors">
                  <img
                    src={project.previewMedia.image}
                    alt={project.previewMedia.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent" />

                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#0c0c0e]/90 border border-white/10 text-[10px] font-mono text-[#00ffaa]">
                    {project.category.toUpperCase()}
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-[#00ffaa] text-[#0c0c0e] font-mono font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3" />
                    <span>{project.demoUrl ? 'Visit site' : 'Inspect'}</span>
                  </div>
                </div>
              )}

              {/* Meta Tag from Variation 2 */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-[#eeedea]/60 uppercase tracking-widest block group-hover:text-[#00ffaa] transition-colors">
                  {project.year} / {project.category.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-[#00ffaa] opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.demoUrl ? 'VISIT SITE' : 'VIEW DETAILS'}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-syne font-bold text-xl text-[#eeedea] mb-2 group-hover:text-white flex items-center justify-between">
                {project.demoUrl ? (
                  <a href={project.demoUrl} className="after:absolute after:inset-0">
                    {project.title}
                  </a>
                ) : (
                  <button type="button" onClick={() => onSelectProject(project)} className="text-left cursor-pointer after:absolute after:inset-0">
                    {project.title}
                  </button>
                )}
                <ArrowUpRight className="w-4 h-4 text-[#00ffaa] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#eeedea]/60 leading-relaxed line-clamp-2 mb-4">
                {project.tagline}
              </p>
            </div>

            {/* Bottom details */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#eeedea]/40">
              <span className="text-[#00ffaa]">
                {project.keyMetrics[0]?.label}: {project.keyMetrics[0]?.value}
              </span>
              <span className="truncate max-w-[160px]">
                {project.technologies.slice(0, 3).join(' · ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
