import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <img 
            src="/MAK LOGO.png" 
            alt="MAK Consultant Logo" 
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white">MAK CONSULTANT</span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase">FZE LLC • License No. 4404944</span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg shadow-blue-900/30"
          >
            Schedule Consultation
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;