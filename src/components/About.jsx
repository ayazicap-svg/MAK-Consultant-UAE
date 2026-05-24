const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <div className="inline-block bg-blue-50 text-royal px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              Who We Are
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
              Your Trusted Partner in Financial Excellence & UAE Compliance
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              MAK Consultant is a premier corporate advisory and financial consultancy firm operating across the United Arab Emirates. We specialize in simplifying the complex financial landscape for businesses of all sizes, from ambitious local startups to established corporations.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With deep expertise in the evolving UAE regulatory environment, our team delivers strategic guidance that ensures compliance while optimizing your financial performance. We believe in building long-term partnerships rooted in transparency, accuracy, and absolute dedication to your commercial growth.
            </p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-royal">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-navy text-sm">Certified UAE Tax Experts</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-royal">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-navy text-sm">Tailored Corporate Solutions</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-royal">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-navy text-sm">Complete Regulatory Compliance</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-royal">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-navy text-sm">Data-Driven Financial Insights</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Image & Expanded Stat Block */}
          <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-100/40 rounded-full blur-2xl -z-10"></div>
            
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img 
                src="/A2.png" 
                alt="MAK Consultant Corporate Office" 
                className="rounded-[2rem] shadow-2xl object-cover w-full h-[480px] lg:h-[540px] border-4 border-white"
              />

              {/* Extended Overlapping Stats Box */}
              <div className="absolute -bottom-8 left-4 right-4 md:-left-12 md:right-auto bg-white p-6 lg:p-8 rounded-2xl shadow-2xl border border-gray-100 flex flex-row gap-6 lg:gap-8 items-center max-w-md md:w-[440px]">
                
                {/* Left Stat */}
                <div className="flex-1 min-w-[120px]">
                  <h4 className="text-3xl lg:text-4xl font-extrabold text-royal">100%</h4>
                  <p className="text-xs lg:text-sm text-navy font-bold mt-1 uppercase tracking-wide">Client Satisfaction</p>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">Delivering excellence across sectors.</p>
                </div>
                
                {/* Divider Line */}
                <div className="w-px h-16 bg-gray-200 flex-shrink-0"></div>
                
                {/* Right Stat */}
                <div className="flex-1 whitespace-nowrap">
                  <h4 className="text-3xl lg:text-4xl font-extrabold text-navy">Corporate</h4>
                  <p className="text-xs lg:text-sm text-gray-600 font-bold mt-1 uppercase tracking-wide">Tax & Advisory</p>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">Registered Specialists</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;