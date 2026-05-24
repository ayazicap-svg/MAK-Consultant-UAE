const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-blue-50 text-royal px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              UAE-Based Corporate Consultancy
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-navy leading-tight mb-6">
              Strategic <br className="hidden lg:block"/> Financial <br className="hidden lg:block"/> Guidance for <br className="hidden lg:block"/> Modern Businesses
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              MAK Consultant provides premium accounting, tax, audit, and advisory services for ambitious businesses across the UAE.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="bg-royal text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-200"
              >
                Contact Us
              </a>
              <a 
                href="https://wa.me/971565682013" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 text-navy px-8 py-4 rounded-xl font-medium hover:border-royal hover:text-royal transition duration-300 flex items-center gap-2"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Side: Clean Image Container using A1.png */}
          <div className="flex-1 w-full relative flex justify-center items-center mt-10 lg:mt-0">
            {/* Subtle decorative background backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            
            <img 
              src="/A1.png" 
              alt="MAK Consultant Strategy" 
              className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-[2.5rem] shadow-2xl border-4 border-white animate-fade-in"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;