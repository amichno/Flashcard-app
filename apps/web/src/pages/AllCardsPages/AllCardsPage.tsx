import { useFlashcards } from "../../features/flashcards/context/flashcardContext";
import { FlashcardGridItem } from "./components/FlashcardGridItem";

export const AllCardsPage = () => {
  const { flashcards } = useFlashcards();

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {flashcards.map((flashcard) => (
          <FlashcardGridItem key={flashcard.id} flashcard={flashcard} />
        ))}
      </div>
    </main>
  );
};
