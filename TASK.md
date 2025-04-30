# Japanese Flashcard App - Detailed Todo List

## 1. Setup Project (Next.js + Tailwind)
- [x] Create a new Next.js project
  ```bash
  npx create-next-app@latest japanese-flashcard-app
  ```
  - Select Yes for TypeScript
  - Select Yes for ESLint
  - Select Yes for Tailwind CSS
  - Select Yes for `src/` directory
  - Select Yes for App Router
- [x] Clean up default boilerplate
  - Remove unnecessary code from `page.tsx`
  - Update metadata in `layout.tsx`

## 2. Project Structure Setup
- [x] Set up folder structure:
  ```
  src/
  ├── app/
  │   ├── page.tsx         # Main page component
  │   ├── layout.tsx       # Root layout
  │   └── globals.css      # Global styles
  ├── components/
  │   ├── FlashcardDeck.tsx
  │   ├── Flashcard.tsx
  │   ├── Controls.tsx
  │   └── ProgressIndicator.tsx
  ├── data/
  │   └── flashcards.json  # Local flashcard data
  ├── types/
  │   └── index.ts         # TypeScript type definitions
  └── utils/
      └── helpers.ts       # Helper functions
  ```

## 3. Configure Japanese Fonts
- [x] Update `globals.css` to import Japanese fonts:
  ```css
  /* Import Noto Sans JP from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');
  
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- [x] Configure Tailwind to use Japanese fonts in `tailwind.config.js`:
  ```js
  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Noto Sans JP"', 'sans-serif'],
          // Additional Japanese fonts as fallbacks
          jp: ['"Noto Sans JP"', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
        },
      },
    },
  }
  ```

## 4. Create Type Definitions
- [x] Create TypeScript interfaces in `src/types/index.ts`:
  ```typescript
  export interface FlashcardData {
    id: string;
    japanese: {
      kanji: string;
      reading: string;
    };
    english: string;
  }
  ```

## 5. Create Sample Flashcard Data
- [x] Create `src/data/flashcards.json` with 10-15 Japanese words

## 6. Create Components
### 6.1 Flashcard Component
- [x] Create `src/components/Flashcard.tsx`:
  - [x] Implement card front (Japanese) and back (English)
  - [x] Create flip animation with Tailwind
  - [x] Add click handler for flipping
  - [x] Implement Furigana display above Kanji
  - [x] Ensure responsive design

### 6.2 Controls Component
- [x] Create `src/components/Controls.tsx`:
  - [x] Add previous and next buttons
  - [x] Style with Tailwind for clean, intuitive UI
  - [x] Implement proper spacing and responsiveness
  - [x] Add hover/active states

### 6.3 Progress Indicator Component
- [x] Create `src/components/ProgressIndicator.tsx`:
  - [x] Show current card position (e.g., "Card 3 of 10")
  - [x] Style minimally with Tailwind

### 6.4 FlashcardDeck Component
- [x] Create `src/components/FlashcardDeck.tsx`:
  - [x] Manage state for current card index
  - [x] Handle navigation between cards
  - [x] Import and compose Flashcard, Controls, and ProgressIndicator
  - [x] Create container layout with proper spacing

## 7. Create Main Page
- [x] Update `src/app/page.tsx`:
  - [x] Import and use FlashcardDeck component
  - [x] Create responsive container with proper padding
  - [x] Add basic app header/title

## 8. Implement Furigana Display Helper
- [x] Create helper function for displaying furigana above kanji

## 9. Implement Core Functionality
### 9.1 Card Flipping Logic
- [x] Add state for tracking card flip in Flashcard component
- [x] Implement flip animation with Tailwind classes

### 9.2 Card Navigation Logic
- [x] Implement card navigation in FlashcardDeck
- [x] Add shuffle functionality

## 10. Add Animations and Transitions
- [x] Implement smooth card transitions using Tailwind:
  - [x] Add transition classes for card movement
  - [x] Ensure smooth flipping effect
  - [x] Add subtle hover effects on buttons

## 11. Implement Responsive Design
- [x] Make app responsive for all screen sizes:
  - [x] Use Tailwind's responsive prefixes (sm, md, lg, xl)
  - [x] Test on various screen sizes
  - [x] Ensure card size and text are readable on all devices

## 12. PWA Configuration
- [x] Create manifest.json in public folder
- [ ] Add appropriate icons in different sizes
- [ ] Implement service worker for offline capability

## 13. Testing and Refinement
- [x] Test functionality:
  - [x] Verify card flipping works correctly
  - [x] Test navigation between cards
  - [x] Ensure Furigana displays properly
- [x] Test responsiveness:
  - [x] Check on desktop, tablet, and mobile
  - [x] Verify touch interactions work on mobile
- [x] Polish UI:
  - [x] Refine spacing and alignment
  - [x] Ensure consistent styling
  - [x] Add subtle animation refinements

## 14. Final Optimizations
- [x] Optimize for performance:
  - [x] Ensure smooth animations
  - [x] Add loading state if needed
- [ ] Implement error handling:
  - [ ] Handle edge cases (empty deck, etc.)
  - [ ] Add appropriate fallbacks

## 15. Future Enhancements (Post-MVP)
- [ ] Add local storage to save progress
- [ ] Implement spaced repetition algorithm
- [ ] Add support for multiple decks
- [ ] Create settings page for customization
- [ ] Add audio pronunciation feature
- [ ] Implement export/import functionality
- [ ] Add keyboard shortcuts help modal
- [ ] Create onboarding tutorial for first-time users
- [ ] Add dark/light theme toggle
- [ ] Implement statistics tracking

## 16. Bug Fixes and Configuration Updates
- [x] Fix Tailwind CSS configuration:
  - [x] Update package.json to include tailwindcss and autoprefixer
  - [x] Update postcss.config.mjs to use the standard tailwindcss plugin
  - [x] Update globals.css to use the correct Tailwind directives
- [x] Standardize Next.js configuration:
  - [x] Remove duplicate next.config.ts file
  - [x] Keep next.config.js with proper ES modules syntax