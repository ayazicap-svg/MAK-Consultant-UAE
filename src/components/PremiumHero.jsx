import React, { useState, useRef } from 'react';

const PremiumHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log("Audio play interrupted:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* Background Stitched Video Loop */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
          src="/assets/premium-dubai-finance.mp4"
        />
        {/* Deep Slate Linear Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          UAE Corporate Tax & VAT Advisors
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Strategic Clarity in an <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
            Evolving Fiscal Landscape
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
          We work directly with corporate leaders across the Emirates to navigate structural tax transitions, protect margins, and implement absolute financial compliance.
        </p>

        {/* Action Controls Frame */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          
          {/* Audio Controller Interaction Layout */}
          <button
            onClick={toggleAudio}
            className={`inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-semibold rounded-xl border transition-all duration-300 backdrop-blur-sm group shadow-xl ${
              isPlaying
                ? 'bg-blue-600/20 text-blue-400 border-blue-500/40 shadow-blue-950/40 animate-pulse'
                : 'bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20 shadow-black/40'
            }`}
          >
            {/* Audio State Icon Vector */}
            <div className="relative flex items-center justify-center w-5 h-5">
              {isPlaying ? (
                <div className="flex items-end gap-[2px] h-3.5">
                  <span className="w-[3px] bg-blue-400 animate-[bounce_0.8s_infinite_100ms] h-full" />
                  <span className="w-[3px] bg-blue-400 animate-[bounce_0.8s_infinite_300ms] h-1/2" />
                  <span className="w-[3px] bg-blue-400 animate-[bounce_0.8s_infinite_500ms] h-3/4" />
                </div>
              ) : (
                <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              )}
            </div>
            <span>{isPlaying ? 'Pause Intro Story' : 'Hear Our Story (30s Voiceover)'}</span>
          </button>

          {/* Hidden HTML5 Native Audio Anchor */}
          <audio
            ref={audioRef}
            src="/assets/audio-intro.mp3"
            onEnded={() => setIsPlaying(false)}
          />

        </div>
      </div>
    </section>
  );
};

export default PremiumHero;