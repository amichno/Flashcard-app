import { FlashcardList } from '../features/flashcards/components/FlashcardList';
import data from '../features/flashcards/data/data.json';
import type { Flashcard as FlashcardType } from '../features/flashcards/types/flashcard.types';

function App() {
  return (
    <main>
      <h1>Flashcard App</h1>

      <FlashcardList flashcards={data.flashcards} />
    </main>
  );
}

export default App;
