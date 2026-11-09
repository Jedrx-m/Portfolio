/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CyberHorizonCanvas } from './components/CyberHorizonCanvas';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { FloatingProjectPreview } from './components/FloatingProjectPreview';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { portfolioConfig, ProjectItem } from './portfolio.config';

export default function App() {
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  // Track active section for sidebar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHoverProject = (project: ProjectItem | null, e?: React.MouseEvent) => {
    setHoveredProject(project);
    if (e) {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0c0c0e] text-[#eeedea] tech-dot-grid selection:bg-[#00ffaa] selection:text-[#0c0c0e]">
      
      {/* Moving Horizon Background Canvas */}
      <CyberHorizonCanvas className="opacity-40" />

      {/* Technical Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 tech-dot-grid opacity-60" aria-hidden="true" />

      {/* Variation 2: Sidebar (Fixed Left 280px on desktop) */}
      <Sidebar
        activeSection={activeSection}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Variation 2: Main Content Area */}
      <main className="relative z-10 lg:ml-[280px] p-6 sm:p-12 lg:p-16 max-w-6xl overflow-y-auto">
        {/* Hero Section */}
        <Hero onResumeClick={() => setIsResumeOpen(true)} />

        {/* Figure 01: Selected Works */}
        <ProjectShowcase
          projects={portfolioConfig.projects}
          onHoverProject={handleHoverProject}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Figure 02: Technical Competencies & Credentials */}
        <TechnicalSkillsSection />

        {/* Figure 03: Education & Timeline */}
        <ExperienceTimeline onResumeClick={() => setIsResumeOpen(true)} />

        {/* Figure 04: Transmission & Inquiries */}
        <ContactSection />

        {/* Variation 2: Footer */}
        <Footer />
      </main>

      {/* Interactive Cursor-Tracking Glass Preview */}
      <FloatingProjectPreview
        project={hoveredProject}
        cursorPos={cursorPos}
      />

      {/* Project Case Study Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Dedicated Interactive Resume Modal with Direct PDF Download */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
