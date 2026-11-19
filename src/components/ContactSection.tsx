import React, { useState } from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioConfig;
  const [copyStatus, setCopyStatus] = useState('');

  const copyContact = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus(`${label} copied to clipboard.`);
    } catch {
      setCopyStatus(`Could not copy ${label.toLowerCase()}. Select the text to copy it manually.`);
    }
  };

  return (
    <section id="contact" className="pt-16 pb-12 border-t border-white/10">
      <div className="mb-6">
        <h2 className="font-syne font-extrabold text-2xl text-[#eeedea] uppercase tracking-tight">Direct Contact</h2>
      </div>

      <div className="grid grid-cols-1 min-[1200px]:grid-cols-2 gap-6">
        <div className="min-w-0 p-5 sm:p-8 border border-white/10 bg-[#0c0c0e]/70 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-[#00ffaa] uppercase tracking-widest block">Location & availability</span>
            <div className="font-syne font-bold text-xl">{personal.location}</div>
            <p className="text-sm text-[#eeedea]/70">{personal.status}</p>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
              { label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/[^+\d]/g, '')}` },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white/[0.02] border border-white/10 font-mono text-xs">
                <a href={href} className="min-w-0 break-all hover:text-[#00ffaa]">{value}</a>
                <button type="button" onClick={() => copyContact(value, label)} aria-label={`Copy ${label.toLowerCase()}`} className="shrink-0 min-h-10 px-3 font-bold uppercase text-[#0c0c0e] bg-[#00ffaa] hover:bg-[#00ffaa]/90 cursor-pointer">Copy</button>
              </div>
            ))}
            <p role="status" className="min-h-5 text-xs text-[#eeedea]/70">{copyStatus}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {Object.entries(personal.social).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 min-h-11 px-4 border border-white/10 hover:bg-white/[0.06] font-mono text-xs uppercase">
                {name === 'github' ? 'GitHub' : 'LinkedIn'}
                <ExternalLink className="w-3 h-3 text-[#00ffaa]" />
              </a>
            ))}
          </div>
        </div>

        <div className="min-w-0 p-5 sm:p-8 border border-white/10 bg-[#0c0c0e]/70 flex flex-col items-start justify-center gap-5">
          <Mail className="w-7 h-7 text-[#00ffaa]" aria-hidden="true" />
          <h3 className="font-syne font-bold text-2xl">Let's work together.</h3>
          <p className="text-sm leading-relaxed text-[#eeedea]/70">Have an internship opportunity or a project in mind? Email me with a few details about what you're working on.</p>
          <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 min-h-11 px-5 py-3 bg-[#00ffaa] hover:bg-[#00ffaa]/90 text-[#0c0c0e] font-mono font-bold text-xs uppercase">
            <Mail className="w-4 h-4" aria-hidden="true" />
            Open email app
          </a>
          <p className="text-xs leading-relaxed text-[#eeedea]/60">This opens your email app. If you use webmail, copy my email address and compose your message there.</p>
        </div>
      </div>
    </section>
  );
};
