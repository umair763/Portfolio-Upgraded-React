
import React, { useEffect, useState } from 'react';

// Usage: <TextSlideup texts={["First", "Second", "Third"]} interval={2000} />

export const TextSlideup = ({ texts = [], interval = 2000, className = '' }) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!texts.length) return;
    const timer = setTimeout(() => {
      setPrevIndex(index);
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 400); // match animation duration
    }, interval);
    return () => clearTimeout(timer);
  }, [index, texts, interval]);

  return (
    <div className={`relative h-8 overflow-hidden ${className}`}> {/* h-8 for 2rem, adjust as needed */}
      {/* Previous text slides up and fades out */}
      {animating && prevIndex !== null && (
        <div
          className="absolute left-0 w-full transition-transform transition-opacity duration-400 ease-in-out"
          style={{ transform: 'translateY(0)', opacity: 1, animation: 'slideup-fadeout 0.4s forwards' }}
          key={`prev-${prevIndex}`}
        >
          <span className="block text-lg font-semibold text-darkgreen">{texts[prevIndex]}</span>
        </div>
      )}
      {/* Current text slides up from bottom and fades in */}
      <div
        className={`absolute left-0 w-full transition-transform transition-opacity duration-400 ease-in-out ${
          animating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        key={`current-${index}`}
      >
        <span className="block text-lg font-semibold text-darkgreen">{texts[index]}</span>
      </div>
      <style>{`
        @keyframes slideup-fadeout {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
