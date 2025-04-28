'use client';

import { useState, useEffect } from 'react';
import { FlashcardData } from '@/types';
import Flashcard from './Flashcard';
import Controls from './Controls';
import ProgressIndicator from './ProgressIndicator';

interface FlashcardDeckProps {
  cards: FlashcardData[];
}

export default function FlashcardDeck({ cards }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState<FlashcardData[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize shuffled cards on component mount
  useEffect(() => {
    setShuffledCards([...cards]);
  }, [cards]);

  const goToNextCard = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === shuffledCards.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 300);
  };

  const goToPreviousCard = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? shuffledCards.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const shuffleCards = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const newShuffledCards = [...shuffledCards];
    // Fisher-Yates shuffle algorithm
    for (let i = newShuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newShuffledCards[i], newShuffledCards[j]] = [newShuffledCards[j], newShuffledCards[i]];
    }
    
    setTimeout(() => {
      setShuffledCards(newShuffledCards);
      setCurrentIndex(0);
      setIsTransitioning(false);
    }, 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextCard();
      } else if (e.key === 'ArrowLeft') {
        goToPreviousCard();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        // Prevent default space behavior (scrolling)
        e.preventDefault();
        shuffleCards();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shuffledCards.length, isTransitioning]);

  // Handle swipe gestures for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left
        goToNextCard();
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right
        goToPreviousCard();
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [shuffledCards.length, isTransitioning]);

  if (shuffledCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 w-full max-w-md">
        <div className="animate-pulse bg-gray-700 rounded-xl h-48 w-full"></div>
        <div className="mt-4 text-gray-400">Loading cards...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between h-full w-full max-w-md mx-auto">
      {/* Top section with progress indicator */}
      <div className="w-full mb-4">
        <ProgressIndicator 
          currentIndex={currentIndex} 
          totalCards={shuffledCards.length} 
        />
      </div>
      
      {/* Middle section with flashcard */}
      <div className="flex-1 flex items-center justify-center w-full my-4">
        <div className={`transition-opacity duration-300 w-full ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          <Flashcard card={shuffledCards[currentIndex]} />
        </div>
      </div>
      
      {/* Bottom section with controls */}
      <div className="w-full mt-4">
        <Controls 
          onPrevious={goToPreviousCard} 
          onNext={goToNextCard} 
          onShuffle={shuffleCards} 
        />
        
        <div className="mt-3 text-xs text-gray-500 text-center px-2">
          <p className="hidden sm:block tracking-wide">Keyboard shortcuts: ← → arrows to navigate, spacebar to shuffle</p>
          <p className="sm:hidden tracking-wide">Swipe left/right to navigate</p>
        </div>
      </div>
    </div>
  );
}