import { KNOW_COUNT_CATEGORY } from '../constants/categoryStyles';
import { MASTERY_THRESHOLD } from '../constants/flashCards';

export const getBackgroundColor = (knownCount: number) => {
  if (knownCount === 0) {
    return KNOW_COUNT_CATEGORY.NOT_STARTED;
  }

  if (knownCount >= MASTERY_THRESHOLD) {
    return KNOW_COUNT_CATEGORY.MASTERED;
  }

  return KNOW_COUNT_CATEGORY.IN_PROGRESS;
};
