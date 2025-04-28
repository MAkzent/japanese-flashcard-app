import FlashcardDeck from '@/components/FlashcardDeck';
import flashcardData from '@/data/flashcards.json';
import { FlashcardData } from '@/types';

export default function Home() {
  // Type assertion for the imported JSON data
  const cards = flashcardData as FlashcardData[];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Top Navigation Bar */}
      <header className="py-5 px-6 text-center border-b border-gray-800 bg-gray-800 shadow-md">
        <h1 className="text-xl font-medium">Japanese Flashcards</h1>
        <p className="text-xs text-gray-400 mt-1">Tap or click a card to flip it</p>
      </header>
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">
        <FlashcardDeck cards={cards} />
      </main>
      
      {/* Bottom Navigation Bar */}
      <footer className="py-4 px-6 border-t border-gray-800 bg-gray-800 text-center">
        <p className="text-xs text-gray-400">Japanese Flashcard App</p>
      </footer>
    </div>
  );
}
