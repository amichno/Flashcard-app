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

  const currentFlashcard = studyFlashcards[currentIndex];

  const handleNext = () => {
    if (currentIndex < studyFlashcards.length - 1) {
      setCurrentIndex((index) => index + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
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
    currentIndex,
    currentFlashcard,
    studyFlashcards,
    setCurrentIndex,
    setShuffleOrder,
    handleNext,
    handlePrev,
    handleShuffle,
  };
};
