import React from 'react';

export default function Footer({ setActiveSection }) {
  return (
    <footer className="w-full bg-[#040d18] border-t border-slate-900/40 text-slate-400 text-xs py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          
          {/* Brand Identity Column with Actual MAKLOGO.png Asset */}
          <div className="space-y-2.5 max-w-sm text-left">
            <div className="flex items-center">
              {/* Referencing the exact project image asset shown in image_25d3c0.png */}
              <img 
                src="/MAKLOGO.png" 
                alt="MAK Consultant Official Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
              Professional accounting, taxation, audit, and business advisory solutions helping businesses navigate modern corporate requirements.
            </p>
          </div>

          {/* Quick Links Grouping */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 lg:pt-2">
            <button 
              onClick={() => setActiveSection?.('services')} 
              className="hover:text-white transition-colors focus:outline-none"
            >
              Services
            </button>
            <button 
              onClick={() => setActiveSection?.('about')} 
              className="hover:text-white transition-colors focus:outline-none"
            >
              Profile
            </button>
            <button 
              onClick={() => setActiveSection?.('why-us')} 
              className="hover:text-white transition-colors focus:outline-none"
            >
              Values
            </button>
            <button 
              onClick={() => setActiveSection?.('inquire')} 
              className="hover:text-white transition-colors focus:outline-none"
            >
              Inquire
            </button>
          </div>

          {/* Return Header Control & Copyright Stamp */}
          <div className="text-left lg:text-right space-y-1 lg:pt-2">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection?.('hero');
              }} 
              className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors focus:outline-none"
            >
              Return Overview <span className="text-xs font-sans">↗</span>
            </button>
            <p className="text-[10px] text-slate-600 block tracking-wide font-medium">
              &copy; {new Date().getFullYear()} MAK Consultant. All Rights Reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}