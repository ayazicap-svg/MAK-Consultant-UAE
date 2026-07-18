import React from 'react';
import { FileSpreadsheet, Landmark, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileSpreadsheet,
      title: "Accounting & Bookkeeping",
      intro: "Maintain accurate financial records to ensure financial convenience and accounting accuracy.",
      points: ["Bookkeeping Services", "Financial Statements", "Bank Reconciliation", "Management Reporting"]
    },
    {
      icon: Landmark,
      title: "Corporate Tax & VAT Services",
      intro: "Stay compliant with UAE tax regulations and stay compliant with UAE tax regulations.",
      points: ["Corporate Tax Registration", "Corporate Tax Return Filing", "VAT Registration", "VAT Return Filing", "E-Invoicing", "Tax Advisory Services"]
    },
    {
      icon: ShieldCheck,
      title: "Audit & Assurance",
      intro: "Enhance transparency and strengthen stakeholder confidence.",
      points: ["Internal Audit", "External Audit Coordination", "Compliance Reviews", "Risk Assessments"]
    },
    {
      icon: FileCheck,
      title: "Business Setup & Advisory",
      intro: "Build a strong foundation to build and impact consistent and business success.",
      points: ["Mainland Company Formation", "Free Zone Company Setup", "Trade License Assistance", "Business Advisory Services"]
    }
  ];

  return (
    <div className="w-full bg-[#0B192C] pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Matrix Grid */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-widest text-[#D4AF37] font-bold">Our Expertise</span>
              <h1 className="text-4xl font-bold uppercase text-white">Our Services</h1>
              <div className="w-24 h-1 bg-[#D4AF37] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div key={idx} className="bg-[#001F3F] p-8 rounded-xl flex flex-col h-full border-t-4 border-t-[#D4AF37] border-x border-b border-[#D4AF37]/10 hover:-translate-y-1 transition-all shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-[#0B192C] flex items-center justify-center border border-[#D4AF37]/30 shrink-0">
                        <Icon className="text-[#D4AF37]" size={24} />
                      </div>
                      <h3 className="text-lg font-bold uppercase text-white leading-tight">{svc.title}</h3>
                    </div>
                    <p className="text-sm text-slate-300 mb-8 font-medium leading-relaxed">{svc.intro}</p>
                    
                    <div className="mt-auto space-y-3 pt-6 border-t border-slate-700/50">
                      {svc.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#E5A93C] mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-slate-200">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Framing Video Element */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl h-[400px] lg:h-[600px]">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/audit-operation.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B192C]/30 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}