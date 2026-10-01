import { useState } from "react";
import { useFlashcards } from "../../features/flashcards/context/flashcardContext";
import { FlashCard } from "../../features/flashcards/types/flashCard";
import { FlashcardGridItem } from "./components/FlashcardGridItem";
import { getUniqueCategories } from "../../features/flashcards/utils/getUniqueCategories";
import { FlashcardForm } from "./components/FlashcardForm";

export const AllCardsPage = () => {
  const { flashcards, setFlashcards, createFlashcard } = useFlashcards();

  const [editingFlashcard, setEditingFlashcard] = useState<FlashCard | null>(
    null,
  );

  const categories = getUniqueCategories(flashcards);

  const handleDelete = (id: string) => {
    setFlashcards((previousFlashcards) =>
      previousFlashcards.filter((flashcard) => flashcard.id !== id),
    );
  };

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-6">
      <FlashcardForm categories={categories} onSubmit={createFlashcard} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {flashcards.map((flashcard) => (
          <FlashcardGridItem
            key={flashcard.id}
            flashcard={flashcard}
            onDelete={handleDelete}
            onEdit={() => {}}
          />
        ))}
      </div>
    </main>
  );
};
