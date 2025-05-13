// src/components/Typewriter.tsx
import React from 'react';

interface TypewriterProps {
  /** The message to type out (e.g. "Edgar Diaz-Gutierrez Welcomes You.") */
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  return (
    <div className="flex items-center font-mono text-2xl">
      {/* 
        1) overflow-hidden + inline-block masks the unrevealed characters 
        2) animate-typing drives the width from 0 → full text 
      */}
      <span
        className="inline-block overflow-hidden whitespace-nowrap animate-typing"
        style={{ /* ensure the element measures in “ch” units */
          width: '0ch',
        }}
      >
        {text}
      </span>

      {/*
        3) A separate span for the caret, blinking in sync:
          - border-r-2 draws the “|”
          - animate-blink toggles its opacity
      */}
      <span className="inline-block h-8 border-r-2 border-current animate-blink ml-1" />
    </div>
  );
};

export default Typewriter;
