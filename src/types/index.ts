export interface FlashcardData {
  id: string;
  japanese: {
    kanji: string;
    reading: string;
  };
  english: string;
}