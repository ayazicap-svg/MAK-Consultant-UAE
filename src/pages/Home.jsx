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
  Award
} from 'lucide-react';

// 🛠️ CORRECT ENHANCED ASSET IMPORT FOR VITE BUNDLING
import corporateVideo from '../assets/premium-dubai-finance.mp4';
import introAudio from '../assets/audio-intro.mp3';

export default function Home() {
  // Audio Playback Tracking Hooks
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // Expandable Frequently Asked Questions Hook
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleAudio = () => {
    if (isAudioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Playback interrupted:", err));
    }
    setIsAudioPlaying(!isAudioPlaying);
  };

  // 📋 DIRECT SERVICE DATA ARRAY MAP MATCHING YOUR FLYER
  const serviceCategories = [
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-blue-600" />,
      title: "Accounting & Bookkeeping",
      description: "Maintain accurate financial records to ensure financial convenience and accounting accuracy.",
      bullets: ["Bookkeeping Services", "Financial Statements", "Bank Reconciliation", "Management Reporting"]
    },
    {
      icon: <Percent className="w-6 h-6 text-blue-600" />,
      title: "Corporate Tax & VAT Services",
      description: "Stay compliant with UAE tax regulations and stay compliant with UAE tax regulations.",
      bullets: ["Corporate Tax Registration", "Corporate Tax Return Filing", "VAT Registration", "VAT Return Filing", "Tax Advisory Services"]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Audit & Assurance Services",
      description: "Enhance transparency and strengthen stakeholder confidence across operations.",
      bullets: ["Internal Audit", "External Audit Coordination", "Compliance Reviews", "Risk Assessment"]
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "Business Setup & Advisory",
      description: "Build a strong foundation to build and impact consistent and business services.",
      bullets: ["Mainland Company Formation", "Free Zone Company Setup", "Trade License Assistance", "Business Advisory Services"]
    }
  ];

  const highlights = [
    "Experienced Accounting & Tax Professionals",
    "UAE Corporate Tax & VAT Expertise",
    "Transparent and Professional Service",
    "Timely and Accurate Reporting",
    "Tailored Solutions for SMEs & Corporates",
    "Dedicated Client Support",
    "Commitment to Compliance and Growth"
  ];

  // Prime Values Mapping from Flyer
  const primeValues = [
    { letter: 'P', title: 'Professionalism' },
    { letter: 'R', title: 'Reliability' },
    { letter: 'I', title: 'Integrity' },
    { letter: 'M', title: 'Mastery' },
    { letter: 'E', title: 'Excellence' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
      
      {/* 🚀 SEO HIDDEN SEARCH ANCHOR FOR CRAWLERS */}
      <h1 className="sr-only">MAK Consultant FZE LLC | Accounting, Corporate Tax, VAT Registration & Free Zone Company Setup in Dubai</h1>

      {/* ─── HEADER / NAVIGATION BAR ─── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Real Official Logo Image Asset */}
            <img 
              src="/MAK LOGO.png" 
              alt="MAK Consultant Logo" 
              className="w-10 h-auto object-contain" 
            />
            <div>
              <div className="font-black text-xl tracking-tight text-slate-900 uppercase">MAK Consultant</div>
              <div className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Free Zone Entity - FZE LLC</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Our Services</a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#ceo-message" className="hover:text-blue-600 transition-colors">CEO Message</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>

          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md shadow-blue-600/10">
            Contact Us
          </a>
        </div>
      </header>

      {/* ─── HERO BANNER SECTION ─── */}
      <section className="relative bg-gradient-to-b from-slate-50/50 to-white pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
                <span>MAK Consultant FZE LLC</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Your Trusted <span className="text-blue-600">Accounting, Tax & Business Advisory</span> Partner in the UAE
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Building Confidence Through Compliance, Expertise, and Trust. We provide structured financial oversight designed to keep your operational framework highly optimized and compliant across the UAE.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                  Contact Us
                </a>
                <a 
                  href="https://wa.me/971589925988" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-7 py-3.5 rounded-xl transition-all border border-slate-200 shadow-sm flex items-center space-x-2"
                >
                  <svg className="w-5 h-5 text-emerald-500 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.413 1.451 5.528 0 10.025-4.495 10.028-10.022.002-2.678-1.04-5.197-2.935-7.094C17.259 1.593 14.747.55 12.012.55 6.486.55 1.989 5.04 1.986 10.567c-.001 1.918.499 3.793 1.448 5.4l-.999 3.648 3.732-.979z"/>
                  </svg>
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Video Frame Loop Block */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md bg-white p-3 rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900">
                  <video 
                    src={corporateVideo}
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 z-20">
                    <button 
                      onClick={toggleAudio}
                      className="bg-white/95 hover:bg-white text-slate-900 px-4 py-2.5 rounded-full shadow-lg backdrop-blur-md transition-all flex items-center space-x-2 text-xs font-bold border border-slate-200"
                    >
                      {isAudioPlaying ? (
                        <>
                          <VolumeX className="w-4 h-4 text-blue-600 animate-pulse" />
                          <span>Pause Audio</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-blue-600" />
                          <span>Hear Story</span>
                        </>
                      )}
                    </button>
                    <audio 
                      ref={audioRef} 
                      src={introAudio} 
                      onEnded={() => setIsAudioPlaying(false)}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TAILORED CORE SERVICES SECTION ─── */}
      <section id="services" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-extrabold tracking-wider text-blue-600 uppercase block">OUR CORE SERVICES</span>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">Tailored Financial Solutions for Growing Ventures</h3>
            <p className="text-sm text-slate-500">We provide structured financial oversight designed to keep your operational framework highly optimized and compliant across the UAE.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 border border-blue-100 text-blue-600">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="border-t border-slate-100 pt-4 space-y-2">
                  {service.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-2.5 text-xs text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US VERTICAL ─── */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold tracking-wider text-blue-600 uppercase block">VALUE PROPOSITION</span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">Why Choose MAK Consultant UAE?</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                MAK Consultant UAE is a professional accounting, taxation, audit, and business advisory firm dedicated to helping businesses navigate the complexities of financial management and regulatory compliance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Core Values Badge Banner Row */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">Our Core Values — PRIME</span>
                <div className="flex flex-wrap gap-2">
                  {primeValues.map((val, vi) => (
                    <div key={vi} className="flex items-center space-x-1.5 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg text-xs">
                      <span className="font-bold text-blue-600">{val.letter}</span>
                      <span className="text-slate-600 font-medium">{val.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">Our Strategic Footprint</span>
              <div className="space-y-4 text-sm">
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">OUR VISION</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">To be the most trusted and respected accounting, tax, audit, and business advisory firm, empowering businesses to achieve sustainable growth through financial excellence, compliance, and strategic insight.</p>
                </div>
                <div className="border-t border-slate-200/60 pt-4">
                  <h5 className="font-bold text-slate-900 text-sm">OUR MISSION</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">To deliver accurate, reliable, and value-driven accounting, taxation, audit, and advisory solutions that help businesses stay compliant, make informed decisions, and achieve long-term success.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CEO MESSAGE SECTION ─── */}
      <section id="ceo-message" className="py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase tracking-tight">CEO Message</h4>
                <p className="text-xs text-blue-300 font-semibold uppercase tracking-wider mt-0.5">MAK Consultant FZE LLC</p>
              </div>
            </div>

            <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <blockquote className="text-base sm:text-lg italic font-medium text-slate-100 leading-relaxed">
                "At MAK Consultant UAE, we believe that every successful business is built on a strong financial foundation. Our purpose is to provide reliable financial guidance, ensure regulatory compliance, and support our clients in achieving sustainable growth. We strive to be more than consultants—we aim to be trusted business partners in your journey toward success."
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <div className="h-[1px] w-12 bg-blue-500/50" />
                <div className="text-right">
                  <div className="font-serif text-lg tracking-widest text-blue-300 italic">M.A.K</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Executive Leadership Management</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent)] pointer-events-none" />
      </section>

      {/* ─── QUICK DISCLOSURE MODULE (FAQ) ─── */}
      <section id="about" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-extrabold tracking-wider text-blue-600 uppercase block">FIRM DISCLOSURE</span>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Corporate Integrity Verification</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
              className="w-full text-left px-6 py-4.5 flex items-center justify-between text-sm font-bold text-slate-800 focus:outline-none"
            >
              <span>What is the registered corporate footprint of your consultancy?</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === 0 ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            {activeFaq === 0 && (
              <div className="px-6 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                MAK Consultant UAE operates as a registered Free Zone Entity (FZE LLC), providing specialized financial, taxation, audit, and structural advisory services tailored for SMEs & corporates across Dubai and the wider United Arab Emirates.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── READY TO ELEVATE / LEAD PORTAL ─── */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight">Ready to Elevate Your Business?</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Connect with MAK Consultant FZE LLC for trusted financial and business advisory services in Dubai.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:info@makconsultantuae.com" className="bg-white text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all text-sm">
              Send Email
            </a>
            <a href="https://wa.me/971589925988" target="_blank" rel="noreferrer" className="bg-transparent border border-slate-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/5 transition-all text-sm">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 to-transparent pointer-events-none" />
      </section>

      {/* ─── REAL FOOTER CONSOLE MODULE ─── */}
      <footer id="contact" className="bg-white text-slate-600 py-16 text-xs border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/MAK LOGO.png" 
                alt="MAK Consultant Logo" 
                className="w-8 h-auto object-contain" 
              />
              <span className="font-black text-slate-900 tracking-tight text-sm uppercase">MAK Consultant FZE LLC</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-xs">
              MAK Consultant FZE LLC provides premium accounting, tax, audit, and advisory services for ambitious businesses across the UAE.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Quick Links</h5>
            <ul className="space-y-2 font-medium">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-blue-600 transition-colors">Why Choose Us</a></li>
              <li><a href="#ceo-message" className="hover:text-blue-600 transition-colors">CEO Message</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Contact Us</h5>
            <div className="space-y-2.5 font-medium text-slate-600">
              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:info@makconsultantuae.com" className="hover:text-blue-600 transition-colors">info@makconsultantuae.com</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="tel:+971589925988" className="hover:text-blue-600 transition-colors">+971 58 992 5988</a>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 mt-12 pt-6 text-center text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 MAK Consultant FZE LLC. All rights reserved.</p>
          <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">Free Zone Entity - FZE LLC</p>
        </div>
      </footer>

      {/* ─── REAL NATIVE FLOATING WHATSAPP BUTTON ─── */}
      <a 
        href="https://wa.me/971589925988" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-xl transition-all hover:scale-105"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.413 1.451 5.528 0 10.025-4.495 10.028-10.022.002-2.678-1.04-5.197-2.935-7.094C17.259 1.593 14.747.55 12.012.55 6.486.55 1.989 5.04 1.986 10.567c-.001 1.918.499 3.793 1.448 5.4l-.999 3.648 3.732-.979z"/>
        </svg>
      </a>

    </div>
  );
}