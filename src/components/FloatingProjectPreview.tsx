import React from 'react';
import { motion, useSpring } from 'motion/react';
import { ProjectItem } from '../portfolio.config';
import { ArrowUpRight } from 'lucide-react';

interface FloatingProjectPreviewProps {
  project: ProjectItem | null;
  cursorPos: { x: number; y: number };
  onSelectProject?: (project: ProjectItem) => void;
}

export const FloatingProjectPreview: React.FC<FloatingProjectPreviewProps> = ({
  project,
  cursorPos,
  onSelectProject,
}) => {
  const springX = useSpring(cursorPos.x, { stiffness: 280, damping: 28 });
  const springY = useSpring(cursorPos.y, { stiffness: 280, damping: 28 });

  React.useEffect(() => {
    springX.set(cursorPos.x + 24);
    springY.set(cursorPos.y - 120);
  }, [cursorPos, springX, springY]);

  if (!project) return null;

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
      }}
      initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      onClick={project.demoUrl ? undefined : () => onSelectProject?.(project)}
      className={`hidden lg:block fixed z-50 w-84 overflow-hidden bg-[#0c0c0e]/98 backdrop-blur-2xl border border-[#00ffaa] shadow-2xl shadow-black/90 ${project.demoUrl ? 'pointer-events-none' : 'cursor-pointer'}`}
    >
      {/* Visual Image Preview */}
      {project.previewMedia && (
        <div className="relative h-44 w-full bg-black overflow-hidden">
          <img
            src={project.previewMedia.image}
            alt={project.previewMedia.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent" />

          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#0c0c0e]/90 border border-white/10 text-[10px] font-mono text-[#00ffaa]">
            {project.year}
          </div>
        </div>
      )}

      {/* Meta Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#00ffaa] block">
            {project.category}
          </span>
          <span className="font-mono text-[9px] text-[#00ffaa] flex items-center gap-1 font-bold">
            {project.demoUrl ? 'VISIT SITE' : 'CLICK TO INSPECT'} <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
        <h4 className="font-syne font-bold text-base text-[#eeedea] truncate">
          {project.title}
        </h4>
        <p className="text-xs text-[#eeedea]/60 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#eeedea]/40">
          <span className="truncate max-w-[200px]">
            {project.technologies.slice(0, 3).join(' · ')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
