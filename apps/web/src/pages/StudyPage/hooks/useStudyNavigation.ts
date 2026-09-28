import { useState } from "react";
import { FlashCard } from "../../../features/flashcards/types/flashCard";
import { shuffleArray } from "../../../features/flashcards/utils/helpers";

export const useStudyNavigation = (flashcards: FlashCard[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [shuffleOrder, setShuffleOrder] = useState<string[] | null>(null);

  const studyFlashcards = shuffleOrder
    ? shuffleOrder
        .map((id) => flashcards.find((flashcard) => flashcard.id === id))
        .filter((flashcard): flashcard is FlashCard => flashcard !== undefined)
    : flashcards;

  const safeIndex =
    studyFlashcards.length === 0
      ? -1
      : Math.min(Math.max(currentIndex, 0), studyFlashcards.length - 1);

  const currentFlashcard = studyFlashcards[safeIndex];

  const canGoNext = safeIndex >= 0 && safeIndex < studyFlashcards.length - 1;

  const canGoPrev = safeIndex > 0;

  const handleNext = () => {
    if (safeIndex < studyFlashcards.length - 1) {
      setCurrentIndex(safeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
    }
  };

  const handleShuffle = () => {
    const shuffledIds = shuffleArray(
      flashcards.map((flashcard) => flashcard.id),
    );

    setShuffleOrder(shuffledIds);
    setCurrentIndex(shuffledIds.length ? 0 : -1);
  };

  return {
    currentIndex: safeIndex,
    currentFlashcard,
    studyFlashcards,
    canGoNext,
    canGoPrev,
    setCurrentIndex,
    setShuffleOrder,
    handleNext,
    handlePrev,
    handleShuffle,
  };
};
