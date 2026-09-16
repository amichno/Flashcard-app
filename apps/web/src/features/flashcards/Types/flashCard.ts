export type FlashcardCategory =
  | "React"
  | "JavaScript"
  | "CSS"
  | "HTML"
  | "Web Development"
  | "Science"
  | "Geography"
  | "Literature"
  | "History"
  | "Programming Concepts"
  | "Art"
  | "Mathematics";

export type FlashCard = {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  knownCount: number;
};
