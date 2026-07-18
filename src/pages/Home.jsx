import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileSpreadsheet, Landmark, ShieldCheck, FileCheck } from 'lucide-react';
import PremiumHero from '../components/PremiumHero';

export default function Home() {
  const whyUsPoints = [
    "Experienced Accounting & Tax Professionals",
    "UAE Corporate Tax & VAT Expertise",
    "Transparent and Professional Service",
    "Timely and Accurate Reporting",
    "Tailored Solutions for SMEs & Corporates",
    "Dedicated Client Support",
    "Commitment to Compliance and Growth"
  ];

  const services = [
    { title: "Accounting & Bookkeeping", icon: FileSpreadsheet },
    { title: "Corporate Tax & VAT Services", icon: Landmark },
    { title: "Audit & Assurance", icon: ShieldCheck },
    { title: "Business Setup & Advisory", icon: FileCheck }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <PremiumHero />
      
      {/* Asymmetrical Bento Grid: Our Advantages */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-[#0B192C]">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm uppercase tracking-widest text-[#D4AF37] font-bold">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Our Advantages</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsPoints.map((point, idx) => {
            // Logic to create an engaging asymmetrical bento box layout
            let spanClass = "col-span-1";
            if (idx === 0) spanClass = "col-span-1 md:col-span-2 lg:col-span-2";
            if (idx === 3) spanClass = "col-span-1 md:col-span-2 lg:col-span-2";
            if (idx === 6) spanClass = "col-span-1 md:col-span-2 lg:col-span-4 flex items-center justify-center text-center";

            return (
              <div key={idx} className={`${spanClass} p-[1px] bg-gradient-to-r from-amber-500/30 via-yellow-600/10 to-transparent rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group`}>
                <div className={`bg-[#001F3F]/90 backdrop-blur-xl rounded-xl h-full p-8 flex flex-col justify-between ${idx === 6 ? 'items-center w-full' : 'items-start'}`}>
                  {/* Abstract Minimal Line Accent */}
                  <div className={`mb-6 flex gap-2 ${idx === 6 ? 'justify-center' : ''}`}>
                    <div className="w-1.5 h-6 bg-[#D4AF37] rounded-full group-hover:h-8 transition-all duration-500"></div>
                    <div className="w-1.5 h-4 bg-[#E5A93C]/50 rounded-full mt-auto"></div>
                  </div>
                  <p className="text-lg text-white font-semibold leading-snug">{point}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Us Teaser - 2 Column Split Layout */}
      <section className="bg-[#001F3F] border-y border-[#D4AF37]/10 py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-widest text-[#D4AF37] font-bold">Firm Profile</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase leading-tight">
              A Foundation of <br/> Trust & Excellence
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-lg text-lg">
              MAK Consultant is a professional accounting, taxation, audit, and business advisory firm dedicated to helping businesses navigate the complexities of financial management and regulatory compliance.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[#D4AF37] font-bold uppercase tracking-widest hover:text-[#E5A93C] transition-colors mt-4">
              Explore Our Profile <ArrowRight size={18} />
            </Link>
          </div>
          {/* Right Side Video Layout Structure */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-2xl aspect-[4/3] w-full">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/about-handshake.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B192C]/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-[#0B192C]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-widest text-[#D4AF37] font-bold">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Corporate Solutions</h2>
            <div className="w-24 h-1 bg-[#D4AF37] rounded-full" />
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-[#001F3F] border border-[#D4AF37]/30 text-white text-xs uppercase tracking-widest font-bold rounded hover:bg-[#D4AF37] hover:text-[#0B192C] transition-all">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div key={idx} className="bg-[#001F3F] p-8 rounded-xl border border-slate-800 hover:border-[#D4AF37]/50 transition-colors group shadow-lg">
                <Icon className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" size={36} />
                <h3 className="text-lg font-bold text-white uppercase">{svc.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Quick Connect */}
      <section className="bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B192C] uppercase mb-2">Ready to align your corporate objectives?</h2>
            <p className="text-[#0B192C]/80 font-medium">Connect with our executives for strategic advisory and compliance solutions.</p>
          </div>
          <Link to="/contact" className="shrink-0 bg-[#0B192C] text-white px-8 py-4 text-sm uppercase tracking-widest font-bold rounded shadow-xl hover:bg-[#001F3F] transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}