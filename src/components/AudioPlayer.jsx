import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  return (
    <div className="inline-flex items-center gap-4 px-5 py-3 rounded-full luxury-glass z-20">
      <audio ref={audioRef} src={audioSrc} loop />
      <button
        onClick={toggleAudio}
        className="w-10 h-10 rounded-full bg-[#D4AF37] hover:bg-[#E5A93C] flex items-center justify-center text-[#0B192C] transition-colors"
      >
        {isPlaying ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} />}
      </button>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Executive Audio Briefing</span>
        <span className="text-xs text-slate-300">{isPlaying ? 'Playing...' : 'Paused'}</span>
      </div>
    </div>
  );
}