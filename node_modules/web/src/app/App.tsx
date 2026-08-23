import { Flashcard } from '../features/flashcards/components/Flashcard';
import type { Flashcard as FlashcardType } from '../features/flashcards/types/flashcard.types';

const flashcard: FlashcardType = {
  id: '1',
  question: 'What does HTML stand for?',
  answer: 'HyperText Markup Language',
  category: 'HTML',
  status: 'in-progress',
};

function App() {
  return (
    <main>
      <h1>Flashcard App</h1>

      <Flashcard flashcard={flashcard} />
    </main>
  );
}

export default App;
