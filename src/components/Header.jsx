import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B192C]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/MAKLOGO.png" alt="MAK Consultant Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
          <div className="hidden sm:flex flex-col border-l border-slate-700 pl-3">
            <span className="text-sm font-bold tracking-widest text-white">MAK CONSULTANT</span>
            <span className="text-[9px] uppercase tracking-widest text-[#D4AF37]">Accounting | Tax | Audit | Advisory</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-xs uppercase tracking-widest font-semibold transition-colors ${
                  isActive ? 'text-[#D4AF37]' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link 
            to="/contact"
            className="text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B192C] transition-all"
          >
            Inquire Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#D4AF37]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#001F3F] border-b border-[#D4AF37]/20 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-widest text-slate-300 border-b border-slate-800 pb-3"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}