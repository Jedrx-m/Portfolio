import React, { useState } from 'react';
import { Copy, Check, Send, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../portfolio.config';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioConfig;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
    }, 450);
  };

  return (
    <section id="contact" className="pt-16 pb-12 border-t border-white/10">
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#eeedea]/60 block mb-1">
          FIGURE 04: TRANSMISSION & INQUIRIES
        </span>
        <h2 className="font-syne font-extrabold text-2xl text-[#eeedea] uppercase tracking-tight">
          Direct Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Quick Actions */}
        <div className="p-8 border border-white/10 bg-white/[0.015] space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
              COMMUNICATION CHANNEL
            </span>
            <div className="font-syne font-bold text-xl text-[#eeedea]">
              Antipolo, Philippines
            </div>
            <p className="text-xs text-[#eeedea]/60 font-mono">
              Status: {personal.status}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between p-3.5 bg-white/[0.02] border border-white/10 font-mono text-xs text-[#eeedea]">
              <span>{personal.email}</span>
              <button
                onClick={handleCopyEmail}
                className="px-2.5 py-1 text-[10px] uppercase font-bold text-[#0c0c0e] bg-[#00ffaa] hover:bg-[#00ffaa]/90 transition-colors cursor-pointer"
              >
                {copiedEmail ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-white/[0.02] border border-white/10 font-mono text-xs text-[#eeedea]">
              <span>{personal.phone}</span>
              <button
                onClick={handleCopyPhone}
                className="px-2.5 py-1 text-[10px] uppercase font-bold text-[#0c0c0e] bg-[#00ffaa] hover:bg-[#00ffaa]/90 transition-colors cursor-pointer"
              >
                {copiedPhone ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2.5 px-4 font-mono text-xs uppercase tracking-wider text-[#eeedea] bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#00ffaa]" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2.5 px-4 font-mono text-xs uppercase tracking-wider text-[#eeedea] bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#00ffaa]" />
            </a>
          </div>
        </div>

        {/* Right: Transmission Form */}
        <div className="p-8 border border-white/10 bg-white/[0.015]">
          {sent ? (
            <div className="py-10 text-center space-y-3">
              <span className="font-mono text-xs text-[#00ffaa] block">
                [ DISPATCH CONFIRMED ]
              </span>
              <h3 className="font-syne font-bold text-xl text-[#eeedea]">
                Message Transmitted
              </h3>
              <p className="text-xs text-[#eeedea]/60 font-mono max-w-xs mx-auto">
                Thank you. Your inquiry has been routed to Jedrick's inbox.
              </p>
              <button
                onClick={() => setSent(false)}
                className="pt-2 text-xs font-mono text-[#00ffaa] hover:underline cursor-pointer"
              >
                Send another message ›
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <span className="font-mono text-[10px] text-[#00ffaa] uppercase tracking-widest block">
                DIRECT INQUIRY DISPATCH
              </span>

              <div className="space-y-1">
                <label className="font-mono text-[10px] text-[#eeedea]/60 uppercase">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="w-full px-3.5 py-2 font-mono text-xs text-[#eeedea] bg-white/[0.02] border border-white/10 focus:border-[#00ffaa] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] text-[#eeedea]/60 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2 font-mono text-xs text-[#eeedea] bg-white/[0.02] border border-white/10 focus:border-[#00ffaa] focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] text-[#eeedea]/60 uppercase">Message</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inquiry scope or internship discussion..."
                  className="w-full px-3.5 py-2 font-mono text-xs text-[#eeedea] bg-white/[0.02] border border-white/10 focus:border-[#00ffaa] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 font-mono font-bold text-xs uppercase tracking-wider text-[#0c0c0e] bg-[#00ffaa] hover:bg-[#00ffaa]/90 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
