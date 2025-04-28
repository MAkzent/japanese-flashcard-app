'use client';

import { useState } from 'react';
import { FlashcardData } from '@/types';

interface FlashcardProps {
  card: FlashcardData;
}

export default function Flashcard({ card }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="flip-card w-full max-w-md aspect-[3/2] cursor-pointer"
      onClick={handleCardClick}
    >
      <div className={`flip-card-inner w-full h-full ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card (Japanese) */}
        <div className="flip-card-front w-full h-full flex flex-col items-center justify-center p-8 sm:p-10 rounded-xl bg-gray-800 shadow-md">
          <div className="relative inline-block text-center whitespace-nowrap">
            <div className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-wider text-gray-100">{card.japanese.kanji}</div>
            <div className="absolute -top-6 sm:-top-7 left-0 w-full text-center text-sm sm:text-base text-gray-400 whitespace-nowrap">
              {card.japanese.reading}
            </div>
          </div>
        </div>
        
        {/* Back of card (English) */}
        <div className="flip-card-back w-full h-full flex items-center justify-center p-8 sm:p-10 rounded-xl bg-gray-800 shadow-md">
          <div className="text-3xl sm:text-4xl md:text-5xl text-center font-medium text-gray-100">{card.english}</div>
        </div>
      </div>
    </div>
  );
}