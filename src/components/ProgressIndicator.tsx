interface ProgressIndicatorProps {
  currentIndex: number;
  totalCards: number;
}

export default function ProgressIndicator({ currentIndex, totalCards }: ProgressIndicatorProps) {
  return (
    <div className="w-full max-w-md px-1 mb-2">
      <div className="flex justify-between items-center mb-2 text-xs sm:text-sm text-gray-400 dark:text-gray-400">
        <span className="font-medium">Card {currentIndex + 1} of {totalCards}</span>
        <span className="bg-gray-800 px-2 py-1 rounded-full text-gray-300">{Math.round(((currentIndex + 1) / totalCards) * 100)}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-1 sm:h-1.5">
        <div 
          className="bg-gray-300 h-1 sm:h-1.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}