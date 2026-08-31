export type FlashcardCategory = 'React' | 'JavaScript' | 'CSS' | 'HTML';

export type FlashCard = {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  knownCount: number;
};
