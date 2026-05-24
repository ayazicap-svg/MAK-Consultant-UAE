import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Name Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/MAK LOGO.png" 
                alt="MAK Consultant Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col justify-center hidden sm:flex">
                <span className="font-bold text-xl text-navy leading-none tracking-tight">MAK Consultant</span>
                <span className="text-[10px] text-gray-500 font-medium mt-1 uppercase tracking-wider">Accounting • Tax • Audit • Advisory</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-royal font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-royal font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-royal font-medium transition-colors">Why Us</a>
            <a href="#contact" className="text-gray-600 hover:text-royal font-medium transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className="bg-royal text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-sm shadow-blue-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-royal font-medium">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-royal font-medium">Services</a>
            <a href="#why-us" className="block px-3 py-2 text-gray-600 hover:text-royal font-medium">Why Us</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-royal font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;