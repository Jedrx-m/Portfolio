import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
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

  const categories = ['All', 'Web Applications', 'Network Engineering', 'Software Systems'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="pt-16 pb-20 border-t border-white/10">
      {/* Variation 2 Figure Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#eeedea]/60 block mb-1">
            FIGURE 01: SELECTED WORKS
          </span>
          <h2 className="font-syne font-extrabold text-2xl text-[#eeedea] uppercase tracking-tight">
            Production & Engineering Projects
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#00ffaa] text-[#0c0c0e] font-bold'
                    : 'text-[#eeedea]/50 hover:text-[#eeedea] bg-white/[0.02] border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Variation 2 Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={(e) => onHoverProject(project, e)}
            onMouseMove={(e) => onHoverProject(project, e)}
            onMouseLeave={() => onHoverProject(null)}
            onClick={() => onSelectProject(project)}
            className="group relative p-8 border border-white/10 hover:border-[#00ffaa] bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Meta Tag from Variation 2 */}
              <span className="font-mono text-[10px] text-[#eeedea]/60 uppercase tracking-widest mb-3 block group-hover:text-[#00ffaa] transition-colors">
                {project.year} / {project.category.toUpperCase()}
              </span>

              {/* Title from Variation 2 */}
              <h3 className="font-syne font-bold text-xl text-[#eeedea] mb-3 group-hover:text-white flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#00ffaa] opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* Description */}
              <p className="text-sm text-[#eeedea]/60 leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>
            </div>

            {/* Bottom details */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#eeedea]/40">
              <span className="text-[#00ffaa]/90">
                {project.keyMetrics[0]?.label}: {project.keyMetrics[0]?.value}
              </span>
              <span className="truncate max-w-[150px]">
                {project.technologies.slice(0, 2).join(' · ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
