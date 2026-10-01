import React, { createContext, ReactNode, useContext, useState } from "react";
import { FlashCard } from "../types/flashCard";
import { initialFlashcards } from "../data/initialFlashcard";
import { FlashcardFormValues } from "../schemas/flashcardFormSchema";

type FlashCardContextType = {
  flashcards: FlashCard[];
  setFlashcards: React.Dispatch<React.SetStateAction<FlashCard[]>>;
  createFlashcard: (values: FlashcardFormValues) => void;
};

const FlashcardContext = createContext<FlashCardContextType | undefined>(
  undefined,
);

type FlashcardsProviderProps = {
  children: ReactNode;
};

export const FlashcardProvider = ({ children }: FlashcardsProviderProps) => {
  const [flashcards, setFlashcards] = useState<FlashCard[]>(initialFlashcards);

  const createFlashcard = (values: FlashcardFormValues) => {
    const newFlashcard: FlashCard = {
      id: crypto.randomUUID(),
      ...values,
      knownCount: 0,
    };

    setFlashcards((previousFlashcards) => [
      newFlashcard,
      ...previousFlashcards,
    ]);
  };
  return (
    <FlashcardContext.Provider
      value={{ flashcards, setFlashcards, createFlashcard }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};

export const useFlashcards = () => {
  const context = useContext(FlashcardContext);

  if (context === undefined) {
    throw new Error("Contex Error - context is undefined");
  }
  return context;
};
