import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

export default function Header({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Overview' },
    { id: 'services', label: 'Expertise' },
    { id: 'about', label: 'Firm Profile' },
    { id: 'why-us', label: 'Advantages' },
    { id: 'ceo', label: 'Message' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-3 bg-[#061729]/90 backdrop-blur-xl border-b border-solid border-[#D9A33B]/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* Corporate Identity Anchor */}
        <button onClick={() => handleNavClick('hero')} className="flex items-center gap-3 group focus:outline-none">
          <img 
            src="/MAKLOGO.png" 
            alt="MAK Consultant Logo" 
            className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-102"
          />
          <div className="hidden sm:flex flex-col text-left border-l border-solid border-slate-700 pl-3">
            <span className="text-sm font-bold tracking-[0.08em] text-white">MAK CONSULTANT</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#D9A33B] font-semibold">Accounting | Tax | Audit | Advisory</span>
          </div>
        </button>

        {/* High-Performance Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 py-1 focus:outline-none"
              style={{ color: activeSection === item.id ? '#D9A33B' : '#94a3b8' }}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#D9A33B] to-[#0072CE]" />
              )}
            </button>
          ))}
        </nav>

        {/* Core Direct Action Interfaces */}
        <div className="hidden sm:flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('contact')}
            className="text-xs uppercase tracking-[0.12em] font-semibold px-5 py-2.5 rounded-md bg-transparent border border-solid border-[#D9A33B]/40 text-[#D9A33B] hover:bg-[#D9A33B]/5 transition-all duration-300"
          >
            Inquire
          </button>
          <a
            href="https://wa.me/971589925988"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-semibold px-5 py-2.5 rounded-md bg-[#0072CE] hover:bg-[#005fb0] text-white shadow-[0_4px_15px_rgba(0,114,206,0.3)] transition-all duration-300"
          >
            <MessageSquare size={14} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Responsive Mobile Interface Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-[#D9A33B] transition-colors focus:outline-none"
          aria-label="Toggle navigation interface layout"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation Overlay Layout */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#061729] border-b border-solid border-[#D9A33B]/20 shadow-2xl p-6 flex flex-col gap-5 lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left text-xs uppercase tracking-[0.15em] font-medium py-2 border-b border-solid border-slate-800/50"
              style={{ color: activeSection === item.id ? '#D9A33B' : '#94a3b8' }}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="w-full text-center text-xs uppercase tracking-[0.15em] font-bold py-3 rounded bg-transparent border border-solid border-[#D9A33B]/40 text-[#D9A33B]"
          >
            Inquire Now
          </button>
          <a
            href="https://wa.me/971589925988"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.15em] font-bold py-3 rounded bg-[#0072CE] text-white"
          >
            <MessageSquare size={14} />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}