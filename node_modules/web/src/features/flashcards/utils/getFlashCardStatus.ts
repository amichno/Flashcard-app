import {
  FLASHCARD_STATUS,
  MASTERY_THRESHOLD,
  type FlashcardStatus,
} from '../constants/flashcard.constants';

export function getFlashcardStatus(knownCount: number): FlashcardStatus {
  if (knownCount === 0) {
    return FLASHCARD_STATUS.NOT_STARTED;
  }

  if (knownCount === MASTERY_THRESHOLD) {
    return FLASHCARD_STATUS.MASTERED;
  }

  return FLASHCARD_STATUS.IN_PROGRESS;
}
