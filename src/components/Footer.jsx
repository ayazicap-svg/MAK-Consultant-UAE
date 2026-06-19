import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-slate-900 pb-8 mb-8">
          
          <div>
            <h3 className="text-white font-semibold text-base mb-2">MAK Consultant FZE LLC</h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Founder-led technical corporate consultancy delivering localized tax strategy and compliance across the United Arab Emirates.
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-2">
            <span className="text-xs text-slate-500 uppercase tracking-wider">Official Registration Footprint</span>
            <span className="text-white font-medium">Free Zone Entity Registered Corporation</span>
            <span className="text-blue-400 text-xs font-mono bg-blue-950/40 px-2.5 py-1 rounded border border-blue-900/30">
              Commercial License: 4404944
            </span>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} MAK Consultant FZE LLC. All corporate rights reserved.</p>
          <p>Registered Regulatory Activity Operations Only • Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;