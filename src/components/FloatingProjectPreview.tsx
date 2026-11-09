import React from 'react';
import { motion, useSpring } from 'motion/react';
import { ProjectItem } from '../portfolio.config';
import { Layers, ArrowUpRight } from 'lucide-react';

interface FloatingProjectPreviewProps {
  project: ProjectItem | null;
  cursorPos: { x: number; y: number };
}

export const FloatingProjectPreview: React.FC<FloatingProjectPreviewProps> = ({
  project,
  cursorPos,
}) => {
  // Smooth spring physics for organic cursor following
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
      initial={{ opacity: 0, scale: 0.88, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="hidden lg:block fixed z-50 pointer-events-none w-80 rounded-xl overflow-hidden bg-slate-950/90 backdrop-blur-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/60"
    >
      {/* Visual Image Preview */}
      <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
        <img
          src={project.previewMedia.image}
          alt={project.previewMedia.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        
        {/* Floating status tag inside preview */}
        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
          {project.year}
        </div>
      </div>

      {/* Content meta */}
      <div className="p-3.5 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-slate-100 truncate">
            {project.title}
          </span>
          <span className="text-[11px] font-mono text-emerald-400 shrink-0">
            {project.category}
          </span>
        </div>

        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Clean unboxed tech list */}
        <div className="pt-1 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span className="truncate max-w-[200px]">
            {project.technologies.slice(0, 3).join(' · ')}
          </span>
          <span className="text-cyan-400 inline-flex items-center gap-0.5 text-[10px]">
            Details <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};
