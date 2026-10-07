import { useFlashcards } from "../features/flashcards/context/flashcardContext";
import { FlashcardFormValues } from "../features/flashcards/schemas/flashcardFormSchema";
import { FlashcardForm } from "./AllCardsPages/components/FlashcardForm";

export const CreateFlashcardPage = () => {
  const { createFlashcard } = useFlashcards();

  const handleCreateFlashcard = (values: FlashcardFormValues) => {
    createFlashcard(values);
  };

  return (
    <div>
      <h1>Create flashcard</h1>

      <FlashcardForm onSubmit={handleCreateFlashcard} categories={[]} />
    </div>
  );
};
