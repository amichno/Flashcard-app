import { MASTERY_THRESHOLD } from "../constants/flashCards";
import { FlashCard } from "../types/flashCard";

export const useFlashcardProgress = (
  setFlashcards: React.Dispatch<React.SetStateAction<FlashCard[]>>,
  currentFlashcard?: FlashCard,
) => {
  const handleKnow = () => {
    if (!currentFlashcard) return;

    setFlashcards((previousFlashcards) =>
      previousFlashcards.map((flashcard) =>
        flashcard.id === currentFlashcard.id
          ? {
              ...flashcard,
              knownCount: Math.min(flashcard.knownCount + 1, MASTERY_THRESHOLD),
            }
          : flashcard,
      ),
    );
  };

  const handleReset = () => {
    if (!currentFlashcard) return;

    setFlashcards((previousFlashcards) =>
      previousFlashcards.map((flashcard) =>
        flashcard.id === currentFlashcard.id
          ? { ...flashcard, knownCount: 0 }
          : flashcard,
      ),
    );
  };

  return {
    handleKnow,
    handleReset,
  };
};
