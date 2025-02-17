'use client';
import { useState, useEffect, useMemo } from 'react';

export default function TypeWriter() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const words = useMemo(() => ['Hello...', 'I am Baman'], []);
  const typingSpeed = 100;
  const pauseDuration = 1000;

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      if (isDeleting) {
        // Handle deletion consistently regardless of spaces
        setText(fullText.substring(0, text.length - 1));
        if (text.length <= 1) {
          setIsDeleting(false);
          setLoopNum(prev => prev + 1);
          setTimeout(() => {}, pauseDuration);
        }
      } else {
        setText(fullText.slice(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <span className="border-r-2 border-white pr-1 animate-[blink_1s_infinite]">
      {text}
    </span>
  );
}
