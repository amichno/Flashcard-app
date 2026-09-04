import { MASTERY_THRESHOLD } from '../constants/flashCards';
import { FlashCard } from '../Types/flashCard';
import { StudyStatistics } from '../types/studyStatistics';

export const getStudyStatistics = (
  flashcards: FlashCard[],
): StudyStatistics => {
  return flashcards.reduce<StudyStatistics>(
    (statistics, flashcard) => {
      statistics.total += 1;

      if (flashcard.knownCount === 0) {
        statistics.notStarted += 1;
      } else if (flashcard.knownCount >= MASTERY_THRESHOLD) {
        statistics.mastered += 1;
      } else {
        statistics.inProgress += 1;
      }

      return statistics;
    },
    {
      total: 0,
      notStarted: 0,
      inProgress: 0,
      mastered: 0,
    },
  );
};
