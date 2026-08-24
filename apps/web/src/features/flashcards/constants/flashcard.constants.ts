export const FLASHCARD_STATUS = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  MASTERED: 'mastered',
} as const;

export type FlashcardStatus =
  (typeof FLASHCARD_STATUS)[keyof typeof FLASHCARD_STATUS];

export const MASTERY_THRESHOLD = 5;
