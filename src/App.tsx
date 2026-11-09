/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CyberHorizonCanvas } from './components/CyberHorizonCanvas';
import { Navbar } from './components/Navbar';
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

  // Track active section for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Moving 3D Bluish Synthwave Horizon Canvas */}
      <CyberHorizonCanvas />

      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onResumeClick={() => setIsResumeOpen(true)}
      />

      <main className="relative z-10">
        {/* Spacious, Iconic Hero Section */}
        <Hero onResumeClick={() => setIsResumeOpen(true)} />

        {/* Clean Project Showcase with Cursor Hover Preview */}
        <ProjectShowcase
          projects={portfolioConfig.projects}
          onHoverProject={handleHoverProject}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Skills, Certifications & Affiliations */}
        <TechnicalSkillsSection />

        {/* Background & Experience */}
        <ExperienceTimeline onResumeClick={() => setIsResumeOpen(true)} />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer onResumeClick={() => setIsResumeOpen(true)} />

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
