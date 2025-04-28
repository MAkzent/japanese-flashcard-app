// This function will be used in React components to create the furigana display
export const getFuriganaProps = (kanji: string, reading: string) => {
  return {
    kanji,
    reading
  };
};

// Helper to check if a string contains kanji
export const containsKanji = (text: string): boolean => {
  // This regex checks for characters in the CJK Unified Ideographs block
  const kanjiRegex = /[\u4e00-\u9faf]/;
  return kanjiRegex.test(text);
};