import React, { useState, useRef } from 'react';
import { 
  Percent, 
  ShieldCheck, 
  Briefcase, 
  FileSpreadsheet,
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Volume2, 
  VolumeX,
  ChevronDown,
  Award,
  Compass,
  Target,
  Heart
} from 'lucide-react';

import corporateVideo from '../assets/premium-dubai-finance.mp4';
import introAudio from '../assets/audio-intro.mp3';

export default function Home() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Playback interrupted:", err));
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  const leftOverviewServices = [
    "Accounting & Bookkeeping",
    "Corporate Tax Registration & Filing",
    "VAT Registration & Returns",
    "Audit & Assurance Services",
    "Payroll Management",
    "Business Setup & Company Formation",
    "Financial Reporting & Advisory"
  ];

  const serviceCategories = [
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-[#0052CC]" />,
      title: "ACCOUNTING & BOOKKEEPING",
      description: "Maintain accurate financial records to ensure financial convenience and accounting accuracy.",
      bullets: ["Bookkeeping Services", "Financial Statements", "Bank Reconciliation", "Management Reporting"]
    },
    {
      icon: <Percent className="w-6 h-6 text-[#0052CC]" />,
      title: "CORPORATE TAX & VAT SERVICES",
      description: "Stay compliant with UAE tax regulations & stay compliant with tax regulations.",
      bullets: ["Corporate Tax Registration", "Corporate Tax Return Filing", "VAT Registration", "VAT Return Filing", "Tax Advisory Services"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0052CC]" />,
      title: "AUDIT & ASSURANCE",
      description: "Enhance transparency and strengthen stakeholder confidence.",
      bullets: ["Internal Audit", "External Audit Coordination", "Compliance Reviews", "Risk Assessment"]
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#0052CC]" />,
      title: "BUSINESS SETUP & ADVISORY",
      description: "Build a strong foundation to build and impact consistent and business services.",
      bullets: ["Mainland Company Formation", "Free Zone Company Setup", "Trade License Assistance", "Business Advisory Services"]
    }
  ];

  const flyerHighlights = [
    "Experienced Accounting & Tax Professionals",
    "UAE Corporate Tax & VAT Expertise",
    "Transparent and Professional Service",
    "Timely and Accurate Reporting",
    "Tailored Solutions for SMEs & Corporates",
    "Dedicated Client Support",
    "Commitment to Compliance and Growth"
  ];

  const primeValues = [
    { letter: 'P', title: 'Professionalism' },
    { letter: 'R', title: 'Reliability' },
    { letter: 'I', title: 'Integrity' },
    { letter: 'M', title: 'Mastery' },
    { letter: 'E', title: 'Excellence' }
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-[#0F1E36] antialiased selection:bg-[#0052CC]/10 selection:text-[#0052CC] font-sans">
      
      <h1 className="sr-only">MAK Consultant UAE | Accounting, Tax, Audit & Business Advisory Partner</h1>

      {/* ─── PREMIUM NAVIGATION INTERFACE ─── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_30px_rgba(15,30,54,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative p-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-sm border border-slate-300/40">
              <img src="/MAK LOGO.png" alt="MAK Consultant Logo" className="w-12 h-auto object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0F1E36]">
                MAK <span className="text-[#0052CC] font-black">CONSULTANT UAE</span>
              </div>
              <div className="text-[10px] text-[#0052CC] font-bold tracking-[0.22em] uppercase mt-0.5 opacity-90">
                ACCOUNTING | TAX | AUDIT | ADVISORY
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-slate-600">
            <a href="#about" className="hover:text-[#0052CC] transition-colors relative py-2">About Us</a>
            <a href="#services" className="hover:text-[#0052CC] transition-colors relative py-2">Our Services</a>
            <a href="#why-us" className="hover:text-[#0052CC] transition-colors relative py-2">Why Choose Us</a>
            <a href="#ceo-message" className="hover:text-[#0052CC] transition-colors relative py-2">CEO Message</a>
            <a href="#contact" className="hover:text-[#0052CC] transition-colors relative py-2">Contact Us</a>
          </nav>

          <a href="#contact" className="inline-flex items-center justify-center bg-[#0F1E36] hover:bg-[#0052CC] text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded border border-slate-700/50 shadow-md transition-all duration-300">
            Get Consultation
          </a>
        </div>
      </header>

      {/* ─── HERO SECTION ─── */}
      <section className="relative bg-gradient-to-b from-[#ECEFF4] via-[#F4F7FA] to-[#E4E9F0] pt-24 pb-32 border-b border-slate-300/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,82,204,0.04),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT AREA */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/90 text-[#0F1E36] px-4 py-2 rounded border border-slate-300 shadow-sm text-xs font-black tracking-widest uppercase">
                <span className="w-2 h-2 bg-[#0052CC] rounded-full" />
                <span>Corporate Advisory Firm</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight uppercase leading-[1.1] text-[#0F1E36]">
                YOUR TRUSTED <br />
                <span className="text-[#0052CC]">ACCOUNTING, TAX &</span> <br />
                BUSINESS ADVISORY <br />
                <span className="relative inline-block mt-1">
                  PARTNER IN THE UAE
                  <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#D4AF37]/40" />
                </span>
              </h2>

              <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-[#0052CC] pl-5">
                Building Confidence Through Compliance, Expertise, and Trust.
              </p>
              
              {/* LEDGER INDEX BOX */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800 bg-white/90 p-8 rounded border border-slate-300/80 shadow-[0_8px_30px_rgba(15,30,54,0.03)]">
                {leftOverviewServices.map((srv, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full shrink-0" />
                    <span className="font-bold tracking-tight text-slate-700">{srv}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#contact" className="bg-[#0052CC] hover:bg-[#0F1E36] text-white font-black uppercase tracking-widest px-8 py-4 rounded shadow-lg transition-colors text-xs border border-blue-700/20">
                  Get Started
                </a>
                <a 
                  href="https://wa.me/971589925988" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white hover:bg-slate-50 text-slate-800 font-black uppercase tracking-widest px-8 py-4 rounded border border-slate-300 shadow-sm flex items-center space-x-2 text-xs"
                >
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* RIGHT AREA */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-[370px] bg-gradient-to-b from-[#1E293B] to-[#0A1424] p-4 rounded-xl shadow-[0_30px_70px_rgba(10,20,40,0.25)] border-4 border-[#334155]">
                
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex space-x-1.5 z-30 bg-[#0F1E36] px-3 py-1 rounded-full border border-slate-700/40">
                  <span className="w-1.5 h-1.5 bg-[#0052CC] rounded-full" />
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                  <span className="w-1.5 h-1.5 bg-slate-500  rounded-full" />
                </div>

                <div className="bg-[#090F1C] rounded overflow-hidden relative border border-slate-800">
                  <div className="relative aspect-[3/4] bg-slate-950">
                    <video 
                      src={corporateVideo}
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover opacity-85 contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090F1C] via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-4 left-0 right-0 px-4 z-20">
                      <button 
                        onClick={toggleAudio}
                        className="w-full bg-[#0F1E36]/95 hover:bg-[#0052CC] text-white px-4 py-3.5 rounded shadow-xl border border-slate-700 transition-colors flex items-center justify-center space-x-2 text-[10px] font-black uppercase tracking-widest"
                      >
                        {isAudioPlaying ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            <span>Pause Insights</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span>Hear Corporate Story</span>
                          </>
                        )}
                      </button>
                      <audio ref={audioRef} src={introAudio} onEnded={() => setIsAudioPlaying(false)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── INSCRIPTION PLACARD BAR ─── */}
      <section className="bg-white py-16 text-center border-b border-slate-200/80 px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-slate-300" />
        <div className="max-w-5xl mx-auto space-y-2">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#0052CC]">TAGLINE</p>
          <p className="text-xl sm:text-3xl font-black text-[#0F1E36] tracking-tight leading-relaxed max-w-4xl mx-auto uppercase">
            "Professionalism Driving Us, Reliability and Integrity Guiding Us, Mastery and Excellence Defining Us."
          </p>
        </div>
      </section>

      {/* ─── ABOUT SECTION (FIXED PADDING & HEADER SIZES) ─── */}
      <section id="about" className="py-32 bg-[#F5F4F0] border-b border-slate-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black tracking-widest text-[#0052CC] uppercase block border-b border-slate-300 pb-3">FIRM OVERVIEW</span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#0F1E36] uppercase tracking-tight">ABOUT MAK CONSULTANT UAE</h3>
              <p className="text-slate-700 text-base font-medium leading-relaxed">
                MAK Consultant UAE is a professional accounting, taxation, audit, and business advisory firm dedicated to helping businesses navigate the complexities of financial management and regulatory compliance. We serve entrepreneurs, SMEs, startups, and established organizations with tailored solutions that promote sustainable growth, operational efficiency, and financial excellence.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-slate-300/80 rounded shadow-md space-y-4">
                <div className="w-10 h-10 bg-[#0F1E36] rounded flex items-center justify-center text-[#D4AF37]">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-black text-[#0F1E36] uppercase tracking-wider text-sm">OUR BRAND PROMISE</h4>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">We provide financial clarity, regulatory confidence, and strategic guidance that enable businesses to grow with certainty and peace of mind.</p>
              </div>

              <div className="p-6 bg-white border border-slate-300/80 rounded shadow-md space-y-4">
                <div className="w-10 h-10 bg-[#0F1E36] rounded flex items-center justify-center text-[#D4AF37]">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-black text-[#0F1E36] uppercase tracking-wider text-sm">OUR MOTTO</h4>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">Building Confidence Through Compliance, Expertise, and Trust.</p>
              </div>

              <div className="p-6 bg-white border border-slate-300/80 rounded shadow-md space-y-4">
                <div className="w-10 h-10 bg-[#0F1E36] rounded flex items-center justify-center text-[#D4AF37]">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-black text-[#0F1E36] uppercase tracking-wider text-sm">OUR COMMITMENT</h4>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">At MAK Consultant UAE, we are committed to delivering financial clarity, regulatory compliance, and strategic guidance that enables our clients to focus on what matters most—growing their business with confidence.</p>
              </div>
            </div>
          </div>

          {/* STRATIFIED PARCHMENT BLOCKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 border-t border-slate-300/60 pt-12">
            <div className="bg-white p-8 rounded border border-slate-300/80 shadow-md space-y-4">
              <h5 className="font-black text-[#0F1E36] uppercase tracking-wider text-sm flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#0052CC]" />
                <span>OUR VISION</span>
              </h5>
              <p className="text-sm text-slate-700 font-medium leading-relaxed pl-4 border-l-2 border-slate-300">
                To be the most trusted and respected accounting, tax, audit, and business advisory firm, empowering businesses to achieve sustainable growth through financial excellence, compliance, and strategic insight.
              </p>
            </div>
            <div className="bg-white p-8 rounded border border-slate-300/80 shadow-md space-y-4">
              <h5 className="font-black text-[#0F1E36] uppercase tracking-wider text-sm flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#D4AF37]" />
                <span>OUR MISSION</span>
              </h5>
              <p className="text-sm text-slate-700 font-medium leading-relaxed pl-4 border-l-2 border-slate-300">
                To deliver accurate, reliable, and value-driven accounting, taxation, audit, and advisory solutions that help businesses stay compliant, make informed decisions, and achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION (FIXED PADDING & TYPOGRAPHY) ─── */}
      <section id="services" className="py-32 bg-[#E9ECF0] border-b border-slate-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black tracking-[0.25em] text-[#0052CC] uppercase block">OUR SERVICES</span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F1E36] uppercase tracking-tight">EXPERT FINANCIAL ARCHITECTURE</h3>
            <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto" />
            <p className="text-xs sm:text-sm text-slate-600 font-bold max-w-xl mx-auto leading-relaxed uppercase pt-2">
              Tailored strategies deployed across corporate accounting parameters to keep operations fully optimized.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((service, idx) => (
              <div 
                key={idx} 
                className="p-8 sm:p-10 bg-white border-2 border-slate-300/70 rounded shadow-[0_10px_35px_rgba(15,30,54,0.04)] flex flex-col justify-between hover:border-[#0052CC] hover:shadow-[0_15px_45px_rgba(15,30,54,0.08)] transition-all duration-300 relative group"
              >
                <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-[#D4AF37]/40 to-transparent" />
                
                <div>
                  <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-slate-200">
                    <div className="w-14 h-14 bg-[#0F1E36] rounded flex items-center justify-center text-white group-hover:bg-[#0052CC] transition-colors shadow-inner shrink-0">
                      {service.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-[#0F1E36] tracking-wide uppercase">{service.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-8 font-semibold leading-relaxed">{service.description}</p>
                </div>
                
                <div className="bg-[#F8FAFC] p-6 rounded border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0052CC] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-bold text-xs sm:text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US SECTION (FIXED PADDING & LABELS) ─── */}
      <section id="why-us" className="py-32 bg-[#EDEFF2] border-b border-slate-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <span className="text-xs font-black tracking-[0.2em] text-[#0052CC] uppercase block">VALUE DISTINCTION</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F1E36] uppercase tracking-tight mt-1">WHY CHOOSE MAK CONSULTANT UAE?</h3>
              <div className="w-20 h-1.5 bg-[#0052CC] mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flyerHighlights.map((item, i) => (
                <div key={i} className="flex items-center space-x-4 text-xs sm:text-sm font-bold text-[#0F1E36] bg-white p-6 rounded border-b-2 border-slate-300 shadow-sm hover:border-[#0052CC] transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#0052CC] shrink-0" />
                  <span className="text-slate-800 font-bold uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* PRIME VALUE SYSTEM */}
            <div className="pt-16 border-t border-slate-300/70 space-y-8">
              <span className="text-xs font-black text-slate-500 uppercase tracking-[0.25em] block text-center">OUR CORE VALUES — PRIME</span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {primeValues.map((val, vi) => (
                  <div key={vi} className="flex flex-col items-center justify-center text-center bg-white border border-slate-300/80 p-6 rounded shadow-sm">
                    <div className="w-14 h-14 bg-[#0F1E36] text-[#D4AF37] rounded-full flex items-center justify-center font-black text-base mb-3 border-2 border-slate-200">
                      {val.letter}
                    </div>
                    <span className="text-[#0F1E36] font-black text-xs sm:text-sm uppercase tracking-wider">{val.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CEO SECTION ─── */}
      <section id="ceo-message" className="py-32 bg-gradient-to-b from-[#0F1E36] via-[#122543] to-[#0A1424] text-white relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/20 shadow-xl text-[#D4AF37]">
            <Award className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">CEO MESSAGE</h4>
            <p className="text-xs text-[#D4AF37] font-black uppercase tracking-[0.25em]">MAK CONSULTANT UAE</p>
          </div>
          <div className="w-20 h-1 bg-[#0052CC] mx-auto" />
          <blockquote className="text-base sm:text-xl italic font-medium text-slate-200 leading-relaxed max-w-3xl mx-auto">
            "At MAK Consultant UAE, we believe that every successful business is built on a strong financial foundation. Our purpose is to provide reliable financial guidance, ensure regulatory compliance, and support our clients in achieving sustainable growth. We strive to be more than consultants—we aim to be trusted business partners in your journey toward success."
          </blockquote>
        </div>
      </section>

      {/* ─── UAE FOOTPRINT DROPDOWN DISCLOSURE ─── */}
      <section className="py-24 bg-white border-b border-slate-300/60 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-black tracking-[0.2em] text-[#0052CC] uppercase block">COMPLIANCE PORTAL</span>
            <h3 className="text-2xl font-black text-[#0F1E36] uppercase tracking-tight">Corporate Footprint Verification</h3>
          </div>
          <div className="bg-[#F8FAFC] border-2 border-slate-200 rounded overflow-hidden shadow-sm">
            <button 
              onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
              className="w-full text-left px-6 py-5 flex items-center justify-between text-sm font-black text-[#0F1E36] uppercase tracking-wide bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <span>What is the registered corporate footprint of your consultancy?</span>
              <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeFaq === 0 ? 'rotate-180 text-[#0052CC]' : ''}`} />
            </button>
            {activeFaq === 0 && (
              <div className="px-6 pb-6 pt-4 text-sm text-slate-700 leading-relaxed border-t border-slate-200 font-medium bg-white">
                MAK Consultant UAE operates as a premium corporate advisory entity, specializing in comprehensive financial accounting, taxation parameters, structure auditing, and licensing setup solutions for SMEs & corporates across the entirety of the United Arab Emirates.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE ENGAGEMENT PLATFORM ─── */}
      <section id="contact" className="bg-gradient-to-r from-[#0A1424] to-[#0F1E36] text-white py-28 border-b border-slate-950">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">Ready to Elevate Your Business?</h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm font-semibold uppercase tracking-wide leading-relaxed">
            Driven by Professionalism, Reliability, Integrity, Mastery, and Excellence, we help businesses achieve sustainable growth with confidence. Connect with MAK Consultant UAE today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:info@makconsultantuae.com" className="bg-[#0052CC] hover:bg-white hover:text-[#0F1E36] text-white font-black uppercase tracking-widest px-8 py-4 rounded shadow-xl transition-all duration-300 text-xs border border-transparent hover:border-slate-300">
              Send Corporate Email
            </a>
            <a href="https://wa.me/971589925988" target="_blank" rel="noreferrer" className="bg-transparent hover:bg-white/5 text-white font-black uppercase tracking-widest px-8 py-4 rounded text-xs border-2 border-slate-600 transition-colors">
              WhatsApp Corporate Contact
            </a>
          </div>
        </div>
      </section>

      {/* ─── LIGHT CORPORATE ADVISORY FOOTER ─── */}
      <footer className="bg-[#0A1424] text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/MAK LOGO.png" alt="MAK Consultant Logo" className="w-10 h-auto object-contain brightness-110" />
              <span className="font-black text-white tracking-tight text-base uppercase">MAK CONSULTANT UAE</span>
            </div>
            <p className="text-slate-400 text-sm font-semibold leading-relaxed max-w-sm">
              Providing precision-driven accounting, taxation guidelines, structural auditing framework, and company setup consultation across the United Arab Emirates.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h5 className="font-black text-slate-200 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">Navigation Matrix</h5>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-tight">
              <li><a href="#about" className="hover:text-white text-slate-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white text-slate-400 transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-white text-slate-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#ceo-message" className="hover:text-white text-slate-400 transition-colors">CEO Message</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h5 className="font-black text-slate-200 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">Contact Information</h5>
            <div className="space-y-4 text-xs sm:text-sm font-semibold text-slate-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-slate-400">United Arab Emirates</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@makconsultantuae.com" className="hover:text-white text-slate-400 transition-colors">info@makconsultantuae.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+971589925988" className="hover:text-white text-slate-400 transition-colors">+971 58 992 5988</a>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 mt-16 pt-8 text-center text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
          <p>© 2026 MAK Consultant UAE. All rights reserved.</p>
          <p className="text-xs uppercase font-black tracking-widest text-slate-400">Corporate Advisory & Financial Excellence</p>
        </div>
      </footer>

      {/* FLOATING INTERACTION BUTTON */}
      <a 
        href="https://wa.me/971589925988" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.413 1.451 5.528 0 10.025-4.495 10.028-10.022.002-2.678-1.04-5.197-2.935-7.094C17.259 1.593 14.747.55 12.012.55 6.486.55 1.989 5.04 1.986 10.567c-.001 1.918.499 3.793 1.448 5.4l-.999 3.648 3.732-.979z"/>
        </svg>
      </a>

    </div>
  );
}