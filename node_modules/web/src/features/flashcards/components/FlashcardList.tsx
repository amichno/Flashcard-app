import { Flashcard } from './Flashcard';
import type { Flashcard as FlashcardType } from '../types/flashcard.types';

type FlashcardListProps = {
  flashcards: FlashcardType[];
};

export function FlashcardList({ flashcards }: FlashcardListProps) {
  return (
    <div>
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </div>
  );
}
