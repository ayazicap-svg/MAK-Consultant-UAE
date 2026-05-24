const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <img 
            src="/MAK LOGO.png" 
            alt="MAK Consultant Logo" 
            className="h-12 w-auto mb-2"
          />
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            MAK Consultant provides premium accounting, tax, audit, and advisory services for ambitious businesses across the UAE.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-navy mb-4 tracking-wide uppercase text-xs text-gray-400">Quick Links</h4>
          <ul className="space-y-3 text-sm font-medium text-gray-600">
            <li><a href="#about" className="hover:text-royal transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-royal transition-colors">Our Services</a></li>
            <li><a href="#why-us" className="hover:text-royal transition-colors">Why Choose Us</a></li>
            <li><a href="#contact" className="hover:text-royal transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Section with Premium SVG Icons */}
        <div>
          <h4 className="font-bold text-navy mb-4 tracking-wide uppercase text-xs text-gray-400">Contact Us</h4>
          <ul className="space-y-4 text-sm font-medium text-gray-700">
            
            {/* Location */}
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-royal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>United Arab Emirates</span>
            </li>

            {/* Email Address */}
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-royal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@makconsultantuae.com" className="hover:text-royal transition-colors">
                info@makconsultantuae.com
              </a>
            </li>

            {/* Phone & WhatsApp Connection */}
            <li className="flex items-center gap-3">
              {/* Combined Phone / Message Icon Framework */}
              <div className="flex gap-1 items-center flex-shrink-0">
                {/* Standard Call Icon */}
                <svg className="w-4 h-4 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-xs">/</span>
                {/* WhatsApp Chat Speech Icon */}
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.419 3.496 2.25 2.256 3.489 5.252 3.488 8.434-.004 6.618-5.34 11.965-11.91 11.965-1.994-.001-3.954-.5-5.697-1.448L0 24zm6.59-4.859c1.59.944 3.167 1.443 4.8 1.444 5.31 0 9.63-4.326 9.633-9.64.001-2.574-1.002-4.994-2.822-6.815C16.381 2.309 13.968 1.3 11.967 1.301c-5.319 0-9.639 4.325-9.642 9.64-.001 1.745.462 3.454 1.343 4.974l-.99 3.613 3.702-.971zm11.367-6.425c-.29-.145-1.713-.846-1.979-.942-.266-.096-.459-.145-.653.146-.193.29-.748.942-.917 1.134-.169.192-.338.217-.628.072-.29-.145-1.224-.451-2.33-1.441-.861-.769-1.443-1.718-1.612-2.008-.169-.29-.018-.447.127-.591.13-.13.29-.338.435-.507.145-.169.193-.29.29-.483.096-.193.048-.361-.024-.507-.072-.145-.653-1.571-.895-2.151-.235-.567-.475-.49-.653-.496-.169-.006-.362-.008-.555-.008-.193 0-.507.072-.772.361-.266.29-1.014.992-1.014 2.417 0 1.425 1.038 2.802 1.182 2.995.145.193 2.044 3.122 4.953 4.382.692.3 1.232.479 1.654.614.695.221 1.328.19 1.829.115.557-.084 1.713-.7 1.954-1.376.24-.676.24-1.254.169-1.376-.073-.122-.266-.193-.556-.339z" />
                </svg>
              </div>
              <a 
                href="https://wa.me/971565682013" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-royal transition-colors"
              >
                +971 56 568 2013
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Copyright Base Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MAK Consultant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;