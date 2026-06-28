import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleVoiceAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio presentation blocked by user interaction requirements:", err));
    }
  };

  return (
    <div class="inline-flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel border border-[#D9A33B]/20 backdrop-blur-md shadow-lg z-20">
      <audio ref={audioRef} src={audioSrc} loop />
      
      <button
        onClick={toggleVoiceAudio}
        class="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#D9A33B] hover:bg-[#c49232] text-[#061729] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0072CE]/50 group"
        aria-label={isPlaying ? "Mute corporate voice guidance" : "Activate corporate vocal briefing"}
      >
        {isPlaying ? <Volume2 size={15} class="animate-pulse" /> : <VolumeX size={15} />}
      </button>

      <div class="flex flex-col">
        <span class="text-[10px] uppercase tracking-[0.15em] text-[#D9A33B] font-semibold">Executive Audio Briefing</span>
        <div class="flex items-center gap-1.5 h-3 mt-0.5">
          {isPlaying ? (
            [0, 1, 2, 3, 4, 5].map((idx) => (
              <span 
                key={idx}
                class="w-[2px] bg-[#0072CE] rounded-full animate-bounce"
                style={{ 
                  height: `${Math.floor(Math.random() * 8) + 4}px`,
                  animationDuration: `${0.5 + idx * 0.15}s`
                }}
              />
            ))
          ) : (
            <span class="text-[11px] text-[#94a3b8] font-medium leading-none">Audio Briefing Off</span>
          )}
        </div>
      </div>
    </div>
  );
}