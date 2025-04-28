# Japanese Flashcard App

A clean, lightweight Progressive Web App (PWA) for studying Japanese language through flashcards. This application provides an intuitive interface for practicing Japanese vocabulary with support for Kanji, Hiragana, and Katakana.

## Features

- **Interactive Flashcards**: Flip cards to reveal translations
- **Furigana Support**: Displays Hiragana readings above Kanji characters
- **Clean UI**: Minimalist design with smooth transitions
- **Responsive Layout**: Works on desktop and mobile devices
- **PWA Support**: Can be installed as a standalone app
- **Offline Capability**: Study without an internet connection

## Technologies Used

- **Next.js**: React framework for the frontend
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling and responsive design
- **Japanese Fonts**: Noto Sans JP for proper display of Japanese characters

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/japanese-flashcard-app.git
   cd japanese-flashcard-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

- **View Flashcards**: Cards initially show Japanese (Kanji with Furigana)
- **Flip Cards**: Click/tap on a card to reveal the English translation
- **Navigate**: Use the previous/next buttons to move between cards
- **Progress Tracking**: See your position in the deck with the progress indicator

## Project Structure

```
src/
├── app/               # Next.js app directory
├── components/        # React components
├── data/              # Flashcard data in JSON format
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
```

## Future Enhancements

- Local storage to save progress
- Spaced repetition algorithm
- Support for multiple decks
- Settings page for customization
- Audio pronunciation feature
- Export/import functionality
- Dark/light theme toggle
- Statistics tracking

## License

This project is licensed under the MIT License - see the LICENSE file for details.
