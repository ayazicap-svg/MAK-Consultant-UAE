const Services = () => {
  const servicesList = [
    {
      title: "Accounting & Bookkeeping",
      description: "Keep your ledgers flawless. We handle day-to-day accounts management, financial statements, cash flow optimization, and custom management reporting.",
      keywords: ["Monthly Bookkeeping", "Financial Statements", "Payroll Management", "Management reports"],
      icon: (
        <svg className="w-6 h-6 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "VAT Advisory & Compliance",
      description: "Navigate UAE VAT safely. Expert assistance with Federal Tax Authority (FTA) registrations, voluntary disclosures, precise tax calculations, and seasonal filings.",
      keywords: ["FTA VAT Registration", "VAT Return Filing", "VAT Exception & Deregistration", "Tax Audits", "E Invoicing"],
      icon: (
        <svg className="w-6 h-6 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Corporate Tax Solutions",
      description: "Ensure your corporate entity meets the latest UAE laws. Strategic assessment, planning, corporate registration compliance, and accurate tax computation frameworks.",
      keywords: ["Corporate Tax Registration", "Tax Assessment & Planning", "CT Compliance", "Corporate Structuring",],
      icon: (
        <svg className="w-6 h-6 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header Layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-blue-50 text-royal px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
            Our Core Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-navy">
            Tailored Financial Solutions for Growing Ventures
          </h2>
          <p className="text-gray-500 text-base lg:text-lg">
            We provide structured financial oversight designed to keep your operational framework highly optimized and compliant across the UAE.
          </p>
        </div>

        {/* Original Clean Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 transform hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                  {service.icon}
                </div>

                {/* Primary Title */}
                <h3 className="text-xl font-bold text-navy">
                  {service.title}
                </h3>

                {/* Main Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Clean SEO Keywords List (Blends perfectly with your original style) */}
                <div className="pt-2">
                  <ul className="space-y-1.5">
                    {service.keywords.map((keyword, kIndex) => (
                      <li key={kIndex} className="text-xs text-navy font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-royal/40 rounded-full"></span>
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Learn More link */}
              <div className="mt-8 pt-4 border-t border-gray-200/60">
                <a 
                  href="#contact" 
                  className="text-sm font-semibold text-navy hover:text-royal flex items-center gap-2 transition"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;