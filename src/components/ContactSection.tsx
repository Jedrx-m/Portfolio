import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
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
    }, 500);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2 pb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact & Inquiries
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Feel free to connect regarding software projects, cybersecurity internships, or technical collaborations.
          </p>
        </div>

        {/* 2-Column Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-3">
              <div className="text-xs font-mono text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Availability Status</span>
              </div>
              <p className="text-sm text-slate-200">
                {personal.status}
              </p>
              <div className="text-xs font-mono text-slate-400 pt-2 border-t border-slate-800 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Direct Email Box */}
            <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-2">
              <div className="text-xs font-mono text-slate-400">Email:</div>
              <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-200">
                <span className="truncate">{personal.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-sans text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 rounded border border-cyan-500/30 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Direct Phone Box */}
            <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800/80 backdrop-blur-md space-y-2">
              <div className="text-xs font-mono text-slate-400">Phone:</div>
              <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-200">
                <span>{personal.phone}</span>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 text-xs font-sans text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 rounded border border-cyan-500/30 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-md shadow-xl shadow-cyan-950/20">
              {sent ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">Message Received</h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
                    Thank you! Your message has been sent to Jedrick. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-mono text-cyan-400 hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Sarah Chen"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Jedrick, I would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-950/40 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
