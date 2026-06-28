import React from 'react';
import { 
  FileSpreadsheet, FileCheck, ShieldCheck, Landmark, 
  CheckCircle2, Mail, Phone, MapPin 
} from 'lucide-react';
import VideoFrame from '../components/VideoFrame';
import AudioPlayer from '../components/AudioPlayer';

export default function Home({ activeSection, setActiveSection }) {
  
  const coreServices = [
    {
      icon: <FileSpreadsheet size={24} className="text-[#D9A33B]" />,
      title: "Accounting & Bookkeeping",
      desc: "Maintain accurate financial records to ensure financial convenience and accounting accuracy.",
      points: ["Bookkeeping Services", "Financial Statements", "Bank Reconciliation", "Management Reporting"]
    },
    {
      icon: <Landmark size={24} className="text-[#0072CE]" />,
      title: "Corporate Tax & VAT Services",
      desc: "Stay compliant with UAE tax regulations and advisory with UAE tax regulations.",
      points: ["Corporate Tax Registration", "Corporate Tax Return Filing", "VAT Registration", "VAT Return Filing", "E-Invoicing", "Tax Advisory Services"]
    },
    {
      icon: <ShieldCheck size={24} className="text-[#D9A33B]" />,
      title: "Audit & Assurance",
      desc: "Enhance transparency and strengthen stakeholder confidence.",
      points: ["Internal Audit", "External Audit Coordination", "Compliance Reviews", "Risk Assessments"]
    },
    {
      icon: <FileCheck size={24} className="text-[#0072CE]" />,
      title: "Business Setup & Advisory",
      desc: "Build a strong foundation to build and impact consistent and business success.",
      points: ["Mainland Company Formation", "Free Zone Company Setup", "Trade License Assistance", "Business Advisory Services"]
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-center">
      
      {/* OVERVIEW SECTION */}
      {activeSection === 'hero' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 border border-solid border-[#0072CE]/30 text-xs font-semibold uppercase tracking-[0.18em] text-[#0072CE]">
              Accounting | Tax | Audit | Advisory
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-[1.15] uppercase">
              Your Trusted <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D9A33B] via-amber-200 to-white">
                Accounting, Tax & Business
              </span> <br />
              Advisory Partner in the UAE
            </h1>
            <p className="text-sm sm:text-base text-slate-400 font-medium max-w-xl leading-relaxed">
              Building Confidence Through Compliance, Expertise, and Trust.
            </p>
            <div className="w-full h-[1px] bg-slate-800/80 my-2" />
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-[#D9A33B] font-bold">Tagline</span>
              <p className="text-sm font-medium text-slate-300 italic tracking-wide">
                “Professionalism Driving Us, Reliability and Integrity Guiding Us, Mastery and Excellence Defining Us.”
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <AudioPlayer audioSrc="/voice-intro.mp3" />
              <button 
                onClick={() => setActiveSection('services')}
                className="text-xs uppercase tracking-[0.15em] font-bold bg-[#D9A33B] text-[#061729] px-6 py-3.5 rounded shadow-lg hover:bg-[#c49232] transition-colors focus:outline-none"
              >
                Explore Services
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center items-center">
            <VideoFrame videoSrc="/hero-skyline.mp4" fallbackLabel="UAE professional cityscape overview video presentation" />
          </div>
        </div>
      )}

      {/* EXPERTISE SERVICES SECTION */}
      {activeSection === 'services' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          <div className="lg:col-span-4 space-y-3 text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D9A33B]">Our Services</span>
            <h2 className="text-3xl font-bold tracking-tight text-white uppercase leading-tight">Corporate Domain Solutions</h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              Comprehensive, flyer-accurate framework services custom-tailored for regional enterprise compliance across the UAE matrix ecosystem.
            </p>
            <div className="pt-2 hidden lg:block">
              <VideoFrame videoSrc="/audit-operation.mp4" fallbackLabel="Financial calculation and verification overview" />
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-[#0b1e33]/40 rounded-xl p-5 flex flex-col justify-between border border-solid border-slate-800/60 shadow-xl">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#040d18] flex items-center justify-center border border-solid border-slate-800 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-white uppercase">{service.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{service.desc}</p>
                  <div className="w-full h-[1px] bg-slate-800/60 my-2" />
                  <ul className="space-y-1.5">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-300 font-medium">
                        <CheckCircle2 size={12} className="text-[#D9A33B] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FIRM PROFILE SECTION */}
      {activeSection === 'about' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          <div className="lg:col-span-5 flex justify-center items-center">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full text-left">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D9A33B]">Why Choose MAK Consultant?</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">Our Advantages & Values</h2>
            <div className="w-12 h-[2px] bg-[#D9A33B]" />
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
              Consistently scaling organizational architectures with institutional transparency, deep jurisdictional insight, and absolute commitment.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              {[
                "Experienced Accounting & Tax Professionals",
                "UAE Corporate Tax & VAT Expertise",
                "Transparent and Professional Service",
                "Timely and Accurate Reporting",
                "Tailored Solutions for SMEs & Corporates",
                "Dedicated Client Support",
                "Commitment to Compliance and Growth"
              ].map((value, vIdx) => (
                <div key={vIdx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0b1e33]/30 border border-solid border-slate-800/80">
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
                ].map((core, cIdx) => (
                  <div key={cIdx} className="border-b border-solid border-slate-800/40 pb-1.5 last:border-none last:pb-0">
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
        <div className="max-w-3xl mx-auto space-y-4 text-left w-full">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0072CE]">CEO Message</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">Corporate Message</h2>
          <div className="w-12 h-[2px] bg-[#0072CE]" />
          <div className="relative bg-[#0b1e33]/30 rounded-xl p-6 sm:p-8 border-l-4 border-solid border-l-[#D9A33B] italic">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              “At MAK Consultant, we believe that every successful business is built on a strong financial foundation. Our purpose is to provide reliable financial guidance, ensure regulatory compliance, and support our clients in achieving sustainable growth. We strive to be more than consultants—we aim to be trusted business partners in your journey toward success.”
            </p>
          </div>
        </div>
      )}

      {/* CONTACT INFO TAB */}
      {activeSection === 'contact' && (
        <div className="space-y-6 text-left w-full">
          <div className="max-w-3xl space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#D9A33B]">Contact Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">Connect with Our Office</h2>
            <div className="w-12 h-[2px] bg-[#D9A33B]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1e33]/30 border border-solid border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#040d18] border border-solid border-slate-800 flex items-center justify-center text-[#D9A33B]">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Phone Link</span>
                  <a href="tel:+971589925988" className="text-xs text-slate-200 font-bold hover:text-[#D9A33B] transition-colors">+971 58 992 5988</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1e33]/30 border border-solid border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#040d18] border border-solid border-slate-800 flex items-center justify-center text-[#0072CE]">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Secure Corporate Inbox</span>
                  <a href="mailto:info@makconsultantuae.com" className="text-xs text-slate-200 font-bold hover:text-[#0072CE] transition-colors">info@makconsultantuae.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0b1e33]/30 border border-solid border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-[#040d18] border border-solid border-slate-800 flex items-center justify-center text-[#D9A33B]">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Registered Jurisdiction Base</span>
                  <span className="text-xs text-slate-300 font-semibold">United Arab Emirates</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 rounded-xl overflow-hidden bg-[#0b1e33]/30 border border-solid border-slate-800 p-1.5 h-[240px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1dev!2sDubai!5m2!1sen!2sae" 
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