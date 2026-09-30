export const MASTERY_THRESHOLD = 5;

export type FlashCard = {
  id: string;
  question: string;
  answer: string;
  category: string;
  knownCount: number;
};
