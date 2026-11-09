import React, { useState } from 'react';
import { LayoutGrid, List, ArrowUpRight } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'matrix' | 'grid'>('matrix');

  const categories = ['All', 'Web Applications', 'Network Engineering', 'Software Systems'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous negative space */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects & Technical Systems
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Hover over any project row to preview the interface in action, or click to inspect technical details.
            </p>
          </div>

          {/* Controls: Filter & Layout Switch */}
          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 bg-slate-900/80 border border-slate-800 rounded-lg backdrop-blur-md">
              <button
                onClick={() => setViewMode('matrix')}
                className={`p-1.5 rounded-md transition-colors text-xs font-medium flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'matrix'
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Matrix list view"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">List</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors text-xs font-medium flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cards</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="py-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950'
                    : 'bg-slate-900/40 text-slate-400 border border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* VIEW 1: MATRIX LIST (Minimalist & Uncluttered) */}
        {viewMode === 'matrix' ? (
          <div className="divide-y divide-slate-800/80 border-y border-slate-800/80 bg-slate-950/40 backdrop-blur-md rounded-xl overflow-hidden">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={(e) => onHoverProject(project, e)}
                onMouseMove={(e) => onHoverProject(project, e)}
                onMouseLeave={() => onHoverProject(null)}
                onClick={() => onSelectProject(project)}
                className="group relative py-6 px-4 sm:px-6 transition-all duration-200 hover:bg-slate-900/60 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left: Category, Title, Tagline */}
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-cyan-400">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Right: Key metric and stack */}
                <div className="flex flex-col md:items-end justify-between gap-1.5 text-left md:text-right shrink-0">
                  {project.keyMetrics[0] && (
                    <div className="text-xs font-mono">
                      <span className="text-slate-400">{project.keyMetrics[0].label}: </span>
                      <span className="text-cyan-300 font-semibold">
                        {project.keyMetrics[0].value}
                      </span>
                    </div>
                  )}

                  <div className="text-xs text-slate-400 font-mono">
                    {project.technologies.slice(0, 3).join(' · ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* VIEW 2: BENTO CARDS */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={(e) => onHoverProject(project, e)}
                onMouseMove={(e) => onHoverProject(project, e)}
                onMouseLeave={() => onHoverProject(null)}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20 backdrop-blur-md transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
              >
                <div className="relative h-52 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={project.previewMedia.image}
                    alt={project.previewMedia.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 text-xs font-mono text-slate-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
                    <span className="text-cyan-400">{project.category}</span>
                    <span aria-hidden="true" className="mx-1.5">·</span>
                    <span>{project.year}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400 font-semibold">
                      {project.keyMetrics[0]?.value}
                    </span>
                    <span className="text-slate-400 truncate max-w-[180px]">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
