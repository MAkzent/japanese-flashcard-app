'use client';

interface ControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onShuffle?: () => void;
}

export default function Controls({ onPrevious, onNext, onShuffle }: ControlsProps) {
  return (
    <div className="flex justify-center items-center gap-6 sm:gap-8 w-full py-2">
      <button
        onClick={onPrevious}
        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition-colors active:scale-95 touch-manipulation hover:text-white cursor-pointer"
        aria-label="Previous card"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      
      {onShuffle && (
        <button
          onClick={onShuffle}
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition-colors active:scale-95 touch-manipulation hover:text-white cursor-pointer"
          aria-label="Shuffle cards"
        >
          {/* Dice icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <circle cx="15.5" cy="8.5" r="1.5" />
            <circle cx="15.5" cy="15.5" r="1.5" />
            <circle cx="8.5" cy="15.5" r="1.5" />
          </svg>
        </button>
      )}
      
      <button
        onClick={onNext}
        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-700 transition-colors active:scale-95 touch-manipulation hover:text-white cursor-pointer"
        aria-label="Next card"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}