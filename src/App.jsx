import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

const SECTIONS = ['hero', 'services', 'about', 'why-us', 'ceo', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const isLocked = useRef(false);
  const touchStartY = useRef(0);

  const currentIndex = SECTIONS.indexOf(activeSection);

  const navigateToSection = (index) => {
    if (index >= 0 && index < SECTIONS.length) {
      setActiveSection(SECTIONS[index]);
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault(); // Stop native browser window kinetic scrolling completely
      if (isLocked.current) return;

      // Ignore micro-movements and trackpad drift
      if (Math.abs(e.deltaY) < 30) return;

      if (e.deltaY > 0 && currentIndex < SECTIONS.length - 1) {
        // Swipe Down -> Advance exactly one page forward
        navigateToSection(currentIndex + 1);
        triggerSafetyLock();
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Swipe Up -> Return exactly one page back
        navigateToSection(currentIndex - 1);
        triggerSafetyLock();
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isLocked.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      if (Math.abs(diffY) < 50) return; // Disregard accidental short vibrations

      if (diffY > 0 && currentIndex < SECTIONS.length - 1) {
        navigateToSection(currentIndex + 1);
        triggerSafetyLock();
      } else if (diffY < 0 && currentIndex > 0) {
        navigateToSection(currentIndex - 1);
        triggerSafetyLock();
      }
    };

    const triggerSafetyLock = () => {
      isLocked.current = true;
      // 1000ms fully absorbs continuous laptop trackpad momentum waves
      setTimeout(() => {
        isLocked.current = false;
      }, 1000); 
    };

    // Attach passive: false to allow e.preventDefault() to execute cleanly
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden flex flex-col justify-between bg-[#061729] selection:bg-[#D9A33B] selection:text-[#061729]">
      {/* Architectural Atmospheric Lighting Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0072CE]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D9A33B]/3 rounded-full filter blur-[150px] pointer-events-none" />
      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Viewport Frame Container */}
      <main className="flex-grow flex items-center justify-center w-full px-4 sm:px-8 max-h-[calc(100vh-140px)] mt-20 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <Home activeSection={activeSection} setActiveSection={setActiveSection} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}