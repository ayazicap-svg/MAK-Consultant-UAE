import React from 'react';
import { 
  FileSpreadsheet, FileCheck, ShieldCheck, Landmark, 
  CheckCircle2, Mail, Phone, MapPin 
} from 'lucide-react';
import VideoFrame from '../components/VideoFrame';
import AudioPlayer from '../components/AudioPlayer';

export default function Home({ activeSection, setActiveSection }) {
  
  // Custom scroll isolation handler to lock inner card container scrolling 
  // and prevent trackpads from accidentally flipping full layout pages.
  const handleScrollIsolation = (e) => {
    const element = e.currentTarget;
    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;
    
    if (isScrollingDown && element.scrollTop + element.clientHeight < element.scrollHeight) {
      e.stopPropagation();
    } else if (isScrollingUp && element.scrollTop > 0) {
      e.stopPropagation();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-center px-2 sm:px-4">
      
      {/* OVERVIEW SECTION (HERO) */}
      {activeSection === 'hero' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible py-4 custom-scrollbar">
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 border border-solid border-[#0072CE]/30 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#0072CE]">
              Accounting | Taxation | Audit | Business Advisory
            </div>
            <h1 className="text-2xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.15] uppercase">
              Your Trusted <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9A33B] via-amber-200 to-white">
                Accounting, Tax & Business
              </span> <br />
              Advisory Partner in the UAE
            </h1>
            <p className="text-xs sm:text-base text-slate-400 font-medium max-w-xl leading-relaxed">
              Building Confidence Through Compliance, Expertise, and Trust.
            </p>
            <div className="w-full h-[1px] bg-slate-800/80 my-2" />
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-[#D9A33B] font-bold">Tagline</span>
              <p className="text-base sm:text-xl font-medium tracking-wide text-amber-400 font-[cursive] italic antialiased block">
                Numbers with Integrity, Growth with Strategy.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <AudioPlayer audioSrc="/voice-intro.mp3" />
              <button 
                onClick={() => setActiveSection('services')}
                className="text-[11px] sm:text-xs uppercase tracking-[0.15em] font-bold bg-[#D9A33B] text-[#061729] px-5 sm:px-6 py-3 rounded shadow-lg hover:bg-[#c49232] transition-colors focus:outline-none"
              >
                Explore Services
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 max-w-[280px] sm:max-w-md lg:max-w-none mx-auto w-full">
            <VideoFrame videoSrc="/hero-skyline.mp4" fallbackLabel="UAE professional cityscape overview video presentation" />
          </div>
        </div>
      )}

      {/* EXPERTISE SERVICES SECTION */}
      {activeSection === 'services' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          <div className="lg:col-span-4 space-y-3 text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D9A33B]">Our Services</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase leading-tight">Corporate Domain Solutions</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              Comprehensive, flyer-accurate framework services custom-tailored for regional enterprise compliance across the UAE matrix ecosystem.
            </p>
            <div className="pt-2 hidden lg:block">
              <VideoFrame videoSrc="/audit-operation.mp4" fallbackLabel="Financial calculation and verification overview" />
            </div>
          </div>
          
          {/* Right Column Grid: Responsive touch pan container with trackpad protection */}
          <div 
            onWheel={handleScrollIsolation}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[58vh] lg:max-h-[68vh] overflow-y-auto touch-pan-y pr-1.5 custom-scrollbar"
          >
            {/* ACCOUNTING & BOOKKEEPING */}
            <div className="bg-[#0b1e33]/40 rounded-xl p-5 flex flex-col justify-between border border-solid border-slate-800/60 shadow-xl hover:border-[#D9A33B]/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#040d18] flex items-center justify-center border border-solid border-slate-800 shadow-inner">
                  <FileSpreadsheet size={20} className="text-[#D9A33B]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-white uppercase">Accounting & Bookkeeping</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Maintain accurate financial records to ensure financial convenience and accounting accuracy.</p>
                <div className="w-full h-[1px] bg-slate-800/60 my-2" />
                <ul className="space-y-1.5">
                  {["Bookkeeping Services", "Financial Statements", "Bank Reconciliation", "Management Reporting"].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 font-medium">
                      <CheckCircle2 size={12} className="text-[#D9A33B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CORPORATE TAX & VAT SERVICES */}
            <div className="bg-[#0b1e33]/40 rounded-xl p-5 flex flex-col justify-between border border-solid border-slate-800/60 shadow-xl hover:border-[#0072CE]/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#040d18] flex items-center justify-center border border-solid border-slate-800 shadow-inner">
                  <Landmark size={20} className="text-[#0072CE]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-white uppercase">Corporate Tax & VAT Services</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Stay compliant with UAE tax regulations and stay compliant with UAE tax regulations.</p>
                <div className="w-full h-[1px] bg-slate-800/60 my-2" />
                <ul className="space-y-1.5">
                  {["Corporate Tax Registration", "Corporate Tax Return Filing", "VAT Registration", "VAT Return Filing", "E-Invoicing", "Tax Advisory Services"].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 font-medium">
                      <CheckCircle2 size={12} className="text-[#0072CE] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AUDIT & ASSURANCE */}
            <div className="bg-[#0b1e33]/40 rounded-xl p-5 flex flex-col justify-between border border-solid border-slate-800/60 shadow-xl hover:border-[#D9A33B]/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#040d18] flex items-center justify-center border border-solid border-slate-800 shadow-inner">
                  <ShieldCheck size={20} className="text-[#D9A33B]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-white uppercase">Audit & Assurance</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Enhance transparency and strengthen stakeholder confidence.</p>
                <div className="w-full h-[1px] bg-slate-800/60 my-2" />
                <ul className="space-y-1.5">
                  {["Internal Audit", "External Audit Coordination", "Compliance Reviews", "Risk Assessments"].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 font-medium">
                      <CheckCircle2 size={12} className="text-[#D9A33B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BUSINESS SETUP & ADVISORY */}
            <div className="bg-[#0b1e33]/40 rounded-xl p-5 flex flex-col justify-between border border-solid border-slate-800/60 shadow-xl hover:border-[#0072CE]/40 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#040d18] flex items-center justify-center border border-solid border-slate-800 shadow-inner">
                  <FileCheck size={20} className="text-[#0072CE]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-white uppercase">Business Setup & Advisory</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">Build a strong foundation to build and impact consistent and business success.</p>
                <div className="w-full h-[1px] bg-slate-800/60 my-2" />
                <ul className="space-y-1.5">
                  {["Mainland Company Formation", "Free Zone Company Setup", "Trade License Assistance", "Business Advisory Services"].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 font-medium">
                      <CheckCircle2 size={12} className="text-[#0072CE] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FIRM PROFILE SECTION */}
      {activeSection === 'about' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible py-4 custom-scrollbar">
          <div className="lg:col-span-5 flex justify-center items-center max-w-[280px] sm:max-w-md lg:max-w-none mx-auto w-full">
            <VideoFrame videoSrc="/why-us-sunset.mp4" fallbackLabel="Corporate professional strategic alignment landscape" />
          </div>
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0072CE]">About MAK Consultant</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">Firm Profile</h2>
            <div className="w-12 h-[2px] bg-[#0072CE]" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              MAK Consultant is a professional accounting, taxation, audit, and business advisory firm dedicated to helping businesses navigate the complexities of financial management and regulatory compliance. We serve entrepreneurs, SMEs, startups, and established organizations with tailored solutions that promote sustainable growth, operational efficiency, and financial excellence.
            </p>
            <div className="p-4 rounded-lg bg-[#11253e]/20 border border-solid border-slate-800">
              <h4 className="text-[11px] font-bold tracking-wider text-[#D9A33B] uppercase mb-1">Our Commitment</h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                At MAK Consultant, we are committed to delivering financial clarity, regulatory compliance, and strategic guidance to enable our clients to focus on what matters most—growing their business with confidence.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ADVANTAGES TAB */}
      {activeSection === 'why-us' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full text-left max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible py-4 custom-scrollbar">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D9A33B]">Why Choose MAK Consultant?</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">Our Advantages & Values</h2>
            <div className="w-12 h-[2px] bg-[#D9A33B]" />
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              Consistently scaling organizational architectures with institutional transparency, deep jurisdictional insight, and absolute commitment.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="space-y-2">
              {[
                "Experienced Accounting & Tax Professionals",
                "UAE Corporate Tax & VAT Expertise",
                "Transparent and Professional Service",
                "Timely and Accurate Reporting",
                "Tailored Solutions for SMEs & Corporates",
                "Dedicated Client Support",
                "Commitment to Compliance and Growth"
              ].map((value, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0b1e33]/30 border border-solid border-slate-800/80">
                  <CheckCircle2 size={14} className="text-[#0072CE] shrink-0" />
                  <span className="text-[11px] text-slate-200 font-semibold">{value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 bg-[#0b1e33]/40 p-5 rounded-xl border border-solid border-slate-800">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D9A33B]">Our Core Values — PRIME</h4>
              <div className="space-y-2.5">
                {[
                  { title: "Professionalism", desc: "Upholding the highest professional principles." },
                  { title: "Reliability", desc: "Being a highly trusted operational component." },
                  { title: "Integrity", desc: "Honest communication channels and strict security." },
                  { title: "Mastery", desc: "Deep knowledge across modern tax codes." },
                  { title: "Excellence", desc: "Consistently delivering premium service frameworks." }
                ].map((core, idx) => (
                  <div key={idx} className="border-b border-solid border-slate-800/40 pb-1.5 last:border-none last:pb-0">
                    <span className="text-[11px] font-bold text-white block">{core.title}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{core.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CEO MESSAGE TAB */}
      {activeSection === 'ceo' && (
        <div className="max-w-3xl mx-auto space-y-5 text-left w-full max-h-[85vh] overflow-y-auto py-4 custom-scrollbar px-2">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0072CE]">CEO Message</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">Corporate Message</h2>
          <div className="w-12 h-[2px] bg-[#0072CE]" />
          <div className="relative bg-[#0b1e33]/30 rounded-xl p-5 sm:p-8 border-l-4 border-solid border-l-[#D9A33B]">
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-medium italic">
              “At MAK Consultant, we believe that every successful business is built on a strong financial foundation. Our purpose is to provide reliable financial guidance, ensure regulatory compliance, and support our clients in achieving sustainable growth. We strive to be more than consultants—we aim to be trusted business partners in your journey toward success.”
            </p>
            
            {/* Isolated Hand-drawn Script SVG Signature Block */}
            <div className="flex flex-col items-end mt-4 select-none">
              <div className="h-12 w-36 relative overflow-hidden mr-4">
                <svg 
                  className="w-full h-full text-amber-400 opacity-90 filter drop-shadow-[0_2px_4px_rgba(217,163,59,0.25)]" 
                  viewBox="0 0 120 40" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M15,28 C25,5 32,12 40,22 C48,32 52,8 58,18 C64,28 72,12 85,15 C95,17 105,22 112,25" />
                  <path d="M22,25 C45,26 70,22 102,18" strokeWidth="1.5" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT INFO TAB */}
      {activeSection === 'contact' && (
        <div className="space-y-6 text-left w-full max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible py-4 custom-scrollbar">
          <div className="max-w-3xl space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D9A33B]">Contact Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">Connect with Our Office</h2>
            <div className="w-12 h-[2px] bg-[#D9A33B]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3 w-full">
              
              {/* Phone Container - Single Isolated Number */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1e33]/30 border border-solid border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#040d18] border border-solid border-slate-800 flex items-center justify-center text-[#D9A33B]">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Phone Link</span>
                  <a href="tel:+971589925988" className="text-xs sm:text-sm text-slate-200 font-bold hover:text-[#D9A33B] transition-colors tracking-wide">+971 58 992 5988</a>
                </div>
              </div>

              {/* Secure Corporate Email Inbox */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1e33]/30 border border-solid border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#040d18] border border-solid border-slate-800 flex items-center justify-center text-[#0072CE]">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Secure Corporate Inbox</span>
                  <a href="mailto:info@makconsultantuae.com" className="text-xs sm:text-sm text-slate-200 font-bold hover:text-[#0072CE] transition-colors break-all">info@makconsultantuae.com</a>
                </div>
              </div>

              {/* Generalized Country Jurisdiction */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1e33]/30 border border-solid border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#040d18] border border-solid border-slate-800 flex items-center justify-center text-[#0072CE]">
                  <Landmark size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Jurisdiction</span>
                  <span className="text-xs sm:text-sm text-slate-200 font-bold tracking-wide">United Arab Emirates (UAE)</span>
                </div>
              </div>
            </div>

            {/* Map Frame Container */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden bg-[#0b1e33]/30 border border-solid border-slate-800 p-1.5 h-[200px] sm:h-[260px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1dev!2sUnited+Arab+Emirates!5m2!1sen!2sae" 
                className="w-full h-full border-none rounded mix-blend-luminosity grayscale contrast-125 brightness-75 focus:outline-none"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="MAK Consultant United Arab Emirates Operational Space Mapping"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}