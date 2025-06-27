import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { soundEnabled } = useTheme();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.loop = true;
    audio.volume = 0.3; // Keep it subtle
    
    if (soundEnabled) {
      // Fade in the music
      audio.volume = 0;
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Fade in effect
            const fadeIn = setInterval(() => {
              if (audio.volume < 0.3) {
                audio.volume = Math.min(audio.volume + 0.02, 0.3);
              } else {
                clearInterval(fadeIn);
              }
            }, 100);
          })
          .catch((error) => {
            console.log('Audio autoplay prevented:', error);
          });
      }
    } else {
      // Fade out the music
      const fadeOut = setInterval(() => {
        if (audio.volume > 0) {
          audio.volume = Math.max(audio.volume - 0.02, 0);
        } else {
          audio.pause();
          clearInterval(fadeOut);
        }
      }, 100);
    }
  }, [soundEnabled]);

  return (
    <audio
      ref={audioRef}
      preload="auto"
      className="hidden"
    >
      <source src="/audio/space-ambient.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;