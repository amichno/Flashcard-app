import type { Flashcard as FlashcardType } from '../types/flashcard.types';

type FlashcardProps = {
  flashcard: FlashcardType;
};

export function Flashcard({ flashcard }: FlashcardProps) {
  return (
    <article>
      <span>{flashcard.category}</span>

      <h2>{flashcard.question}</h2>

      <p>{flashcard.answer}</p>
    </article>
  );
}
