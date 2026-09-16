import React, { createContext, ReactNode, useContext, useState } from 'react';
import { FlashCard } from '../types/flashCard';
import { initialFlashcards } from '../data/initialFlashcard';

type FlashCardContextType = {
  flashcards: FlashCard[];
  setFlashcards: React.Dispatch<React.SetStateAction<FlashCard[]>>;
};

const FlashcardContext = createContext<FlashCardContextType | undefined>(undefined);

type FlashcardsProviderProps = {
  children: ReactNode;
};

export const FlashcardProvider = ({ children }: FlashcardsProviderProps) => {
  const [flashcards, setFlashcards] = useState<FlashCard[]>(initialFlashcards);
  return (
    <FlashcardContext.Provider value={{ flashcards, setFlashcards }}>
      {children}
    </FlashcardContext.Provider>
  );
};

export const useFlashcards = () => {
  const context = useContext(FlashcardContext);

  if (context === undefined) {
    throw new Error('Contex Error - context is undefined');
  }
  return context;
};
