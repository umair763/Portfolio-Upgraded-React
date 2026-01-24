import React, { useState, useEffect, useCallback, useRef } from 'react';
// TextTyping component with Tailwind CSS
export const TextTyping = ({ texts = [], wait = 2000, speed = 50 }) => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0); // which text
  const [subIndex, setSubIndex] = useState(0); // which char
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (!texts.length) return;
    if (!deleting && subIndex === texts[index].length) {
      // Wait before deleting
      const timeout = setTimeout(() => setDeleting(true), wait);
      return () => clearTimeout(timeout);
    }
    if (deleting && subIndex === 0) {
      // Wait before typing next
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, texts, index, wait, speed]);

  useEffect(() => {
    if (!texts.length) return;
    setDisplayed(texts[index].substring(0, subIndex));
  }, [texts, index, subIndex]);

  return (
    <span className="text-xl font-semibold text-darkgreen opacity-100">
      {displayed}
      <span className={blink ? 'opacity-100' : 'opacity-0'}>|</span>
    </span>
  );
};

