import React from 'react';

export default function About() {
  const primeValues = [
    { l: 'P', title: "Professionalism", desc: "Upholding the highest professional principles." },
    { l: 'R', title: "Reliability", desc: "Being a highly trusted operational component." },
    { l: 'I', title: "Integrity", desc: "Honest communication channels and strict security." },
    { l: 'M', title: "Mastery", desc: "Deep knowledge across modern tax codes." },
    { l: 'E', title: "Excellence", desc: "Consistently delivering premium service frameworks." }
  ];

  return (
    <div className="w-full bg-[#0B192C] pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 space-y-32">
        
        {/* 2-Column Split Component */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h2 className="text-3xl font-bold uppercase text-white border-l-4 border-[#D4AF37] pl-4 mb-6">
                ABOUT MAK CONSULTANT
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                MAK Consultant is a professional accounting, taxation, audit, and business advisory firm dedicated to helping businesses navigate the complexities of financial management and regulatory compliance. We serve entrepreneurs, SMEs, startups, and established organizations with tailored solutions that promote sustainable growth, operational efficiency, and financial excellence.
              </p>
            </div>

            <div className="bg-[#001F3F] p-8 rounded-xl border border-[#D4AF37]/20 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#D4AF37] uppercase mb-2">Our Vision</h3>
                <p className="text-slate-300 text-sm leading-relaxed">To be the most trusted and preeminent financial advisory partner in the UAE, recognized for our uncompromising integrity and strategic foresight.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-[#D4AF37] uppercase mb-2">Our Mission</h3>
                <p className="text-slate-300 text-sm leading-relaxed">To empower organizations through robust financial frameworks, ensuring flawless compliance while unlocking avenues for sustained operational expansion.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#D4AF37] uppercase mb-2">Our Commitment</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  At MAK Consultant, we are committed to delivering financial clarity, regulatory compliance, and strategic guidance to enable our clients to focus on what matters most—growing their business with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Video Layout */}
          <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl h-full min-h-[400px]">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/about-handshake.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

        {/* PRIME Values Block */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase text-white mb-2">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 w-full justify-between items-start">
            {primeValues.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-8 flex-1 group w-full">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] to-[#E5A93C] opacity-10 rotate-45 group-hover:rotate-90 group-hover:opacity-30 transition-all duration-700 rounded shadow-[0_0_20px_rgba(212,175,55,0.2)]"></div>
                  <div className="absolute inset-2 border border-[#D4AF37]/60 rotate-45 group-hover:-rotate-45 transition-transform duration-700 rounded"></div>
                  <div className="absolute inset-4 bg-[#001F3F] rotate-45 rounded flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                  </div>
                  <span className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F9F0D8] to-[#D4AF37] z-10">{val.l}</span>
                </div>
                
                <div>
                  <h4 className="text-white font-bold tracking-wider mb-3 uppercase">{val.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-light px-2">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CEO Message */}
        <div className="max-w-4xl mx-auto bg-[#001F3F] border border-[#D4AF37]/30 p-10 md:p-16 rounded-xl text-center space-y-8 relative shadow-2xl mt-24">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B192C] border border-[#D4AF37] px-6 py-2 text-xs uppercase tracking-widest text-[#D4AF37] font-bold rounded-full">
            CEO Message
          </span>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed italic font-light">
            “At MAK Consultant, we believe that every successful business is built on a strong financial foundation. Our purpose is to provide reliable financial guidance, ensure regulatory compliance, and support our clients in achieving sustainable growth. We strive to be more than consultants—we aim to be trusted business partners in your journey toward success.”
          </p>
          <div className="pt-4 flex justify-center">
            <span className="font-['Great_Vibes'] text-5xl md:text-6xl text-[#E5A93C]">MAK</span>
          </div>
        </div>
      </div>
    </div>
  );
}