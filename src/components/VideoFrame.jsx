import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoFrame({ videoSrc, fallbackLabel }) {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isIntersecting) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isIntersecting]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-square max-w-[480px] mx-auto xl:max-w-none group"
    >
      {/* Deep Luxury Layered Framework */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#0072CE]/20 to-[#D9A33B]/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
      
      {/* Ambient Glow Border */}
      <div className="absolute inset-0 rounded-xl border border-solid border-[#0072CE]/30 shadow-[0_0_30px_rgba(0,114,206,0.15)] pointer-events-none z-10" />
      <div className="absolute inset-[1px] rounded-xl border border-solid border-[#D9A33B]/10 pointer-events-none z-10" />

      {/* High-End Presentation Core Canvas */}
      <div className="relative w-full h-full rounded-xl overflow-hidden glass-panel shadow-[0_25px_60px_-15px_rgba(4,13,24,0.7)] bg-[#061729]">
        {/* Subtle Diagonal Glass Reflection Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] ease-out pointer-events-none z-10" />
        
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          aria-label={fallbackLabel}
          className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-102"
        />
      </div>
    </motion.div>
  );
}