import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] py-16 md:py-24 flex items-center bg-[#0B192C]">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        {/* Centered Credentials Card */}
        <div className="bg-[#001F3F] rounded-2xl border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-10 md:p-20 text-center">
          
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-4">
            Executive Connect
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-6">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-10" />
          
          <p className="text-slate-300 text-lg md:text-xl mb-16 leading-relaxed max-w-3xl mx-auto font-light">
            We are ready to align with your corporate objectives. Reach out to our executive team for strategic advisory, audit, and compliance solutions.
          </p>
          
          {/* Reconstructed Grid: Focusing purely on credentials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            
            {/* Primary Phone */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-[#0B192C] flex items-center justify-center border border-[#D4AF37]/50 mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-xl">
                <Phone className="text-[#D4AF37] group-hover:text-[#0B192C] transition-colors" size={32} />
              </div>
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Direct Line</span>
              <a href="tel:+971589925988" className="block text-white font-semibold text-xl hover:text-[#D4AF37] transition-colors">
                +971 58 992 5988
              </a>
            </div>

            {/* Corporate Email */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-[#0B192C] flex items-center justify-center border border-[#D4AF37]/50 mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-xl">
                <Mail className="text-[#D4AF37] group-hover:text-[#0B192C] transition-colors" size={32} />
              </div>
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Corporate Email</span>
              <a href="mailto:info@makconsultantuae.com" className="block text-white font-semibold text-xl hover:text-[#D4AF37] transition-colors">
                info@makconsultantuae.com
              </a>
            </div>

            {/* Jurisdiction */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full bg-[#0B192C] flex items-center justify-center border border-[#D4AF37]/50 mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300 shadow-xl">
                <MapPin className="text-[#D4AF37] group-hover:text-[#0B192C] transition-colors" size={32} />
              </div>
              <span className="block text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Jurisdiction</span>
              <span className="block text-white font-semibold text-xl">
                United Arab Emirates
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}