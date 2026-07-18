import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';

export default function PremiumHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-[#0B192C]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Premium Typography Content */}
        <div className="space-y-8 z-10">
          <span className="text-sm uppercase tracking-widest text-[#D4AF37] font-bold border-l-2 border-[#D4AF37] pl-3">
            Welcome to MAK Consultant
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight">
            YOUR TRUSTED ACCOUNTING, TAX & BUSINESS ADVISORY PARTNER IN THE UAE
          </h1>
          
          {/* CRITICAL CHANGE: Premium Tagline Styling Applied Here */}
          <p className="text-2xl md:text-3xl font-serif italic font-medium bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#F9F0D8] bg-clip-text text-transparent tracking-wide leading-relaxed">
            "Numbers with Integrity, Growth with Strategy."
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <Link to="/contact" className="bg-[#D4AF37] text-[#0B192C] px-8 py-4 text-sm uppercase tracking-widest font-bold rounded shadow-lg hover:bg-[#E5A93C] hover:scale-105 transition-all">
              Consult With Us
            </Link>
            <AudioPlayer />
          </div>
        </div>

        {/* Right Column: Dedicated Video Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] aspect-[4/3] lg:aspect-square">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/premium-dubai-finance.mp4" type="video/mp4" />
          </video>
          {/* Subtle inner overlay for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B192C]/40 to-transparent"></div>
        </div>
        
      </div>
    </section>
  );
}