import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col border-l-2 border-[#D4AF37] pl-4">
              <span className="text-lg font-bold tracking-widest text-white">MAK CONSULTANT</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for financial clarity, regulatory compliance, and strategic business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Accounting & Bookkeeping</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Corporate Tax & VAT</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Audit & Assurance</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Business Setup & Advisory</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Reach Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <a href="tel:+971589925988" className="hover:text-[#D4AF37] transition-colors">+971 58 992 5988</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <a href="mailto:info@makconsultantuae.com" className="hover:text-[#D4AF37] transition-colors break-all">info@makconsultantuae.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <span>United Arab Emirates</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} MAK Consultant. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}