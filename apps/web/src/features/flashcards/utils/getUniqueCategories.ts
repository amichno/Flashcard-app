import type { FlashCard } from "../types/flashCard";

export const getUniqueCategories = (flashcards: FlashCard[]): string[] => {
  return Array.from(
    new Set(flashcards.map((flashcard) => flashcard.category)),
  ).sort();
};
