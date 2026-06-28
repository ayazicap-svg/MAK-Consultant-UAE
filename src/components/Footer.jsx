import React from 'react';
import { Shield, ArrowUpRight } from 'lucide-react';

export default function Footer({ setActiveSection }) {
  
  const handleNavClick = (id) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030a12] text-slate-400 text-xs py-8 border-t border-solid border-slate-900 px-6 md:px-8 relative z-10 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Company Identity Block */}
        <div className="md:col-span-5 space-y-2 text-left">
          <div className="flex items-center gap-2">
            <img src="/MAKLOGO.png" alt="MAK Consultant Logo" className="h-8 w-auto object-contain" />
            <span className="text-sm font-extrabold tracking-widest text-white uppercase">MAK CONSULTANT</span>
          </div>
          <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed font-medium">
            Professional accounting, taxation, audit, and business advisory solutions helping businesses navigate modern corporate requirements.
          </p>
        </div>

        {/* Navigation Action Links */}
        <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center text-[11px] uppercase tracking-wider font-semibold">
          <button onClick={() => handleNavClick('services')} className="hover:text-[#D9A33B] transition-colors focus:outline-none">Services</button>
          <button onClick={() => handleNavClick('about')} className="hover:text-[#0072CE] transition-colors focus:outline-none">Profile</button>
          <button onClick={() => handleNavClick('why-us')} className="hover:text-[#D9A33B] transition-colors focus:outline-none">Values</button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-[#0072CE] transition-colors focus:outline-none">Inquire</button>
        </div>

        {/* Operational Copyright Hook */}
        <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2 text-left md:text-right">
          <button 
            onClick={() => handleNavClick('hero')}
            className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#D9A33B] font-bold hover:text-white transition-colors focus:outline-none"
          >
            <span>Return Overview</span>
            <ArrowUpRight size={12} />
          </button>
          <span className="text-[10px] text-slate-600 font-medium">
            &copy; 2026 MAK Consultant. All Rights Reserved.
          </span>
        </div>

      </div>

      {/* Compliance Information Row */}
      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-solid border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600 font-medium">
        <div className="flex items-center gap-2">
          <Shield size={12} className="text-[#0072CE]" />
          <span>United Arab Emirates Corporate Compliance Architecture Platform</span>
        </div>
      </div>
    </footer>
  );
}