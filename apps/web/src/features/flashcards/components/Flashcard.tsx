import type { Flashcard as FlashcardType } from '../types/flashcard.types';
import { getFlashcardStatus } from '../utils/getFlashCardStatus';

type FlashcardProps = {
  flashcard: FlashcardType;
};

export function Flashcard({ flashcard }: FlashcardProps) {
  const status = getFlashcardStatus(flashcard.knownCount);

  return (
    <article>
      <span>{flashcard.category}</span>

      <h2>{flashcard.question}</h2>

      <p>{flashcard.answer}</p>

      <span>{status}</span>
    </article>
  );
}
