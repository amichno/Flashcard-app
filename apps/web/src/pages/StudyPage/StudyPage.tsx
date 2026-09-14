import { useState } from 'react';
import { StudyActions } from '../../app/components/StudyActions';
import { StudyCard } from '../../app/components/StudyCard';
import { StudyControl } from '../../app/components/StudyControls';
import {
  FlashCard,
  FlashcardCategory,
} from '../../features/flashcards/types/flashCard';
import { initialFlashcards } from '../../features/flashcards/data/initialFlashcard';
import { MASTERY_THRESHOLD } from '../../features/flashcards/constants/flashCards';
import { StudyNavigation } from '../../app/components/StudyNavigation';
import { StudyStatistics } from '../../app/components/StudyStatistics';
import { getStudyStatistics } from '../../features/flashcards/utils/getStudyStatistics';
import { CATEGORY_FILTER } from '../../features/flashcards/constants/filters';
import { CategoryFilter } from '../../features/flashcards/types/filterCategory';

export const StudyPage = () => {
  const [flashcards, setFlashcards] = useState<FlashCard[]>(initialFlashcards);

  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(
    CATEGORY_FILTER.ALL,
  );

  const [hideMastered, setHideMastered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentFlashcard = flashcards[currentIndex];

  const handleKnow = () => {
    setFlashcards((previousFlashcards) =>
      previousFlashcards.map((flashcard) =>
        flashcard.id === currentFlashcard.id
          ? {
              ...flashcard,
              knownCount: Math.min(flashcard.knownCount + 1, MASTERY_THRESHOLD),
            }
          : flashcard,
      ),
    );
  };

  const handleReset = () => {
    setFlashcards((previousFlashcards) =>
      previousFlashcards.map((flashcard) =>
        flashcard.id === currentFlashcard.id
          ? {
              ...flashcard,
              knownCount: 0,
            }
          : flashcard,
      ),
    );
  };

  const handleNext = () => {
    const newFlashcard = flashcards[currentIndex + 1];
    if (newFlashcard) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    const newFlashcard = flashcards[currentIndex - 1];
    if (newFlashcard) setCurrentIndex(currentIndex - 1);
  };

  const getFilteredFlashCards = (category: CategoryFilter) => {
    return flashcards.filter(
      (flaschCard) =>
        category === CATEGORY_FILTER.ALL || flaschCard.category === category,
    );
  };

  const filteredFlashcards = getFilteredFlashCards(selectedCategory);

  const handleCategoryChange = (category: CategoryFilter) => {
    const nextFlashcards = getFilteredFlashCards(category);

    setSelectedCategory(category);
    setCurrentIndex(nextFlashcards.length > 0 ? 0 : -1);
  };

  return (
    <main className='mx-auto max-w-[1440px] px-4 py-6'>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_344px]'>
        <section className='flex flex-col gap-4 outlined-surface hard-shadow py-4 rounded-2xl'>
          <StudyControl />

          <StudyCard flashCard={currentFlashcard} key={currentFlashcard.id} />

          <StudyActions onKnow={handleKnow} onReset={handleReset} />

          <StudyNavigation onNext={handleNext} onPrev={handlePrev} />
        </section>

        <aside className='w-full  lg:max-w-[392px]'>
          <StudyStatistics statistics={getStudyStatistics(flashcards)} />
        </aside>
      </div>
    </main>
  );
};
